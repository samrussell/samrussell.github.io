var sortCounts = function(a, b){
  return b.count - a.count;
};

var sortCodes = function(a, b){
  return a.length - b.length;
};

var getNodeLengths = function(node, height){
  if(node.symbol){
    return [new function(){
     this.symbol = node.symbol;
     this.length = height;
    }];
  }
  else{
    var out = getNodeLengths(node.children[0], height+1).concat(getNodeLengths(node.children[1], height+1));
    return out;
  }
}

var getTreeLengths = function(tree){
  return tree.reduce(function (array, value){
    return array.concat(getNodeLengths(value, 1));
  }, []);
}

var buildHuffmanTree = function(counts){
  while(counts.length > 2){
    counts = counts.sort(sortCounts);
    var children = [];
    children.push(counts.pop());
    children.push(counts.pop());
    var totalCount = children[0].count + children[1].count;
    var newCount = new function(){
      this.children = children;
      this.count = totalCount;
      this.symbol = null;
    }
    counts.push(newCount);
  }
  return counts;
};

var calculateCodes = function(codeLengths){
  return codeLengths.sort(sortCodes)
    .reduce(function(array, codeLength){
      if(array.length == 0){
        var newCode = "0".padStart(codeLength.length, "0");
      }
      else{
        code = array[array.length-1].code;
        bits = code.length;
        var codeAsNumber = parseInt(code, 2);
        var newBits = codeLength.length;
        var shift = newBits - bits;
        codeAsNumber = codeAsNumber << shift;
        codeAsNumber++;
        var newCode = codeAsNumber.toString(2).padStart(newBits, "0");
      }
      array.push(new function(){
        this.symbol = codeLength.symbol;
        this.code = newCode;
      });

      return array;
    }, []);
}

var updateCodes = function(){
  var counts = $("#counts").val().split("\n").map(x => x.split(": "))
    .map(x => new function(){
      this.symbol = x[0];
      this.count = parseInt(x[1]);
    });

  if(counts.length < 2){
    $("#codes").val("");
    $("#visualCodes").empty();
    return;
  }

  var huffmanTree = buildHuffmanTree(counts);
  var codeLengths = getTreeLengths(huffmanTree);
  var codes = calculateCodes(codeLengths);
  $("#codes").val(
    codes.map(x => (x.symbol + ":").padEnd(7, " ") + x.code)
      .join("\n")
  );

  var codeMap = new Map();
  codes.forEach(function(code){
    codeMap[code.symbol] = code.code;
  });

  // this is going to be quite churny, should come up with a better way of managing this
  // i can see a refactor for each event bubbling one change
  // although refreshing the huffman codes means we might need to at least update half of the stuff here
  // but shouldn't need to kill the whole contents of it
  $("#visualCodes").empty();
  $("#plaintext").val().split("").forEach(function(char){
    $("#visualCodes").append(
      $("<div class=\"visualCode\"><span>" + char + "</span><span>" + codeMap[char] + "</span></div>")
    );
  });
};

var calculateCounts = function(numbers){
  var counts = new Map();

  numbers.forEach(function(number){
    if(!counts.has(number)){
      counts.set(number, 0);
    }

    counts.set(number, counts.get(number)+1);
  });

  var pairs = [];

  counts.forEach(function(value, key, map){
    pairs.push(new function(){
      this.symbol = key;
      this.count = value;
    });
  })

  return pairs;
};

var updateCounts = function(){
  var counts = calculateCounts($("#plaintext").val().split("")).sort(sortCounts);
  $("#counts").val(
    counts.map(x => x.symbol + ": " + x.count)
    .join("\n")
  );

  updateCodes();
};

$(function() {
  $("#plaintext").on("input change keyup", updateCounts);
  $("#counts").on("input change keyup", updateCodes);
  updateCounts();
});