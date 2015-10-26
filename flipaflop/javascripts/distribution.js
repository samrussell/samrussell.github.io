/* The MIT License (MIT)
* 
* Copyright (c) 2015 Sam Russell <sam.h.russell@gmail.com>
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
function hasClass(element, expectedClassName){
  classList = element.attr("class").split(' ');
  return classList.some(function(expectedClassName, index, array){
    return this == expectedClassName;
  }, expectedClassName);
}

function handType(element){
  if(element.hasClass("pair")){
    return "pair";
  }
  else if(element.hasClass("suited")){
    return "suited";
  }
  else if(element.hasClass("offsuit")){
    return "offsuit";
  }
  else{
    throw "handType() called on a bad element";
  }
}

function toggleChoice(element){
  // element is the li
  // the child is the span
  // add class, TODO test for remove later
  element.toggleClass('selected');
}

function choiceValue(element){
  return element.children().first().html();
}

function choicePercentage(element){
  type = handType(element);
  if(type == "pair"){
    return 0.004524886878;
  }
  else if(type == "suited"){
    return 0.003016591252;
  }
  else if(type == "offsuit"){
    return 0.009049773756;
  }
  else{
    throw "choicePercentage() called on a bad element";
  }
}

function formatPercentage(number){
  return (number * 100).toFixed(1) + '%';
}

function recalculatePercentage(){
  percentage = $('.selected.choice')
    .map(function() {
      return this;
    })
    .get()
    .reduce(function(previousValue, currentValue, index, array) {
      return previousValue + choicePercentage($(currentValue));
    }, 0);
  $('#scroll-container').html(formatPercentage(percentage));
}

$(function(){
  $('#distribution li.choice').click(function(){
    element = $(this);
    type = handType(element);
    toggleChoice(element);
    recalculatePercentage();
  });
});
