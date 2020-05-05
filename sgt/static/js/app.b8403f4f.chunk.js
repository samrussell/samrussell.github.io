(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e){e.exports=JSON.parse('{"declensions":{"jabuka":["jabuka","jabuku","jabuke","jabuci","jabukom","jabuko"],"slika":["slika","sliku","slike","slici","slikom","sliko"],"\u010dovek":["\u010dovek","\u010doveka","\u010doveku","\u010dove\u010de","\u010dovekom"],"hleb":["hleb","hleba","hlebu","hlebe","hlebom"]},"tests":[{"word":"jabuka","prompt":"to je ()","translation":"this is an apple","answer":"jabuka","explanation":"nominative"},{"word":"jabuka","prompt":"jedem ()","translation":"I am eating an apple","answer":"jabuku","explanation":"accusative"},{"word":"jabuka","prompt":"imam ()","translation":"I have an apple","answer":"jabuku","explanation":"accusative"},{"word":"jabuka","prompt":"sok od ()","translation":"juice from an apple","answer":"jabuke","explanation":"genitive"},{"word":"jabuka","prompt":"banana sa ()","translation":"banana with apple","answer":"jabukom","explanation":"instrumentive"},{"word":"jabuka","prompt":"razmi\u0161ljam o ()","translation":"I am thinking about an apple","answer":"jabuci","explanation":"locative"},{"word":"slika","prompt":"to je ()","translation":"this is a picture","answer":"slika","explanation":"nominative"},{"word":"slika","prompt":"izgubio sam ()","translation":"I lost a picture","answer":"sliku","explanation":"accusative"},{"word":"slika","prompt":"imam ()","translation":"I have a picture","answer":"sliku","explanation":"accusative"},{"word":"slika","prompt":"novine sa ()","translation":"newspaper with a picture","answer":"slikom","explanation":"instrumentive"},{"word":"slika","prompt":"ti si u ()","translation":"you are in the picture","answer":"slici","explanation":"locative"},{"word":"\u010dovek","prompt":"to je ()","translation":"this is a person","answer":"\u010dovek","explanation":"nominative"},{"word":"\u010dovek","prompt":"video sam ()","translation":"I saw a person","answer":"\u010doveka","explanation":"accusative"},{"word":"\u010dovek","prompt":"idem sa ()","translation":"I am going with a person","answer":"\u010dovekom","explanation":"instrumentive"},{"word":"\u010dovek","prompt":"pla\u0161im se ()","translation":"I\'m scared of a person","answer":"\u010doveka","explanation":"genitive"},{"word":"\u010dovek","prompt":"razmi\u0161ljam o ()","translation":"I\'m thinking about a person","answer":"\u010doveku","explanation":"locative"},{"word":"hleb","prompt":"to je ()","translation":"this is bread","answer":"hleb","explanation":"nominative"},{"word":"hleb","prompt":"imam ()","translation":"I have bread","answer":"hleb","explanation":"accusative"},{"word":"hleb","prompt":"pljeskavica sa ()","translation":"pljeskavica with bread","answer":"hlebom","explanation":"instrumentive"},{"word":"hleb","prompt":"razmi\u0161ljam o ()","translation":"I\'m thinking about bread","answer":"hlebu","explanation":"locative"},{"word":"hleb","prompt":"najeo sam se ()","translation":"I ate a ton of bread","answer":"hleba","explanation":"genitive"}]}')},82:function(e,a,t){"use strict";var n=t(1),r=t.n(n),o=t(49),l=t(18),s=t(2),i=t(3),c=t(81),m=t(13),p=t(25),u=t.n(p),d=t(26),E=t.n(d),w=t(27),h=t.n(w),v=t(28),b=t.n(v),f=t(29),x=t.n(f),g=t(79),k=t.n(g),y=t(23),j=t.n(y),T=t(110);function C(e){var a,t,n;for(n=e.length-1;n>0;n--)a=Math.floor(Math.random()*(n+1)),t=e[n],e[n]=e[a],e[a]=t;return e}var A=function(){var e=T.tests[Math.floor(Math.random()*T.tests.length)],a=T.declensions[e.word];C(a);for(var t=[],n=0;t.length<3&&n<a.length;n++){var r=a[n];r!=e.answer&&t.push(r)}t.push(e.answer),C(t);var o=e.prompt.replace(/\(\)/,"("+e.word+")"),l=e.prompt.replace(/\(\)/,e.answer);return{selectedAnswer:null,checkAnswers:!1,prompt:o,translation:e.translation,explanation:e.explanation,correctSentence:l,correctAnswer:e.answer,allAnswers:t}};function S(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function N(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?S(Object(t),!0).forEach((function(a){j()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var O=function(e,a){switch(a.type){case"SELECT_ANSWER":return N({},e,{selectedAnswer:a.answer,checkAnswers:!0});case"CHECK_ANSWERS":return N({},e,{checkAnswers:!0});case"REFRESH":return A();default:return e}},P=Object(n.createContext)(),I=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.Consumer,null,(function(a){var t=a.state;a.dispatch;return r.a.Children.map(e.children,(function(e){return"RadioButton"===e.type.displayName?r.a.cloneElement(e,{buttonClicked:function(){e.props.onPress},selected:e.props.id==t.selectedAnswer}):e}))})))};I.displayName="Radio";var R=I,z=t(4).a.create({appContainer:{backgroundColor:"#fff",alignItems:"stretch",padding:"5%",flex:1},appBody:{flex:8},appFooter:{flex:1},footerLinkText:{justifyContent:"center",alignItems:"center",textAlign:"center",fontSize:25,color:"#E65100"},grammarTestContainer:{flexDirection:"column",flex:1,justifyContent:"space-around"},grammarTestCasePromptContainer:{alignItems:"center",justifyContent:"space-around",flex:1},grammarTestCasePromptText:{fontWeight:"bold",fontSize:40},grammarTestCaseTranslationText:{fontSize:20},grammarTestCaseContainer:{flex:2,flexDirection:"column",justifyContent:"center"},grammarTestExplanationHeader:{flex:1,alignItems:"center",justifyContent:"center"},grammarTestExplanationBody:{flex:4,alignItems:"center",justifyContent:"center"},grammarTestAnswerExplanationText:{fontSize:20,textAlign:"center"},buttonText:{margin:8,textAlign:"center",fontSize:40},buttonSelected:{backgroundColor:"#80CBC4",elevation:4,borderRadius:2},buttonUnselected:{backgroundColor:"#E0F2F1",elevation:4,borderRadius:2}}),F=function(e){function a(e){return u()(this,a),h()(this,b()(a).call(this,e))}return x()(a,e),E()(a,[{key:"buttonClicked",value:function(){this.props.buttonClicked(this.props.id),this.props.onPress(this.props.id)}},{key:"render",value:function(){var e=this;return r.a.createElement(m.a,{onPress:function(){return e.buttonClicked()}},r.a.createElement(i.a,{style:this.props.selected?z.buttonSelected:z.buttonUnselected},r.a.createElement(s.a,{style:z.buttonText},this.props.title)))}}]),a}(r.a.Component);F.displayName="RadioButton";var B=F,D=t(22),H=function(e){return r.a.createElement(P.Consumer,null,(function(e){var a=e.state,t=e.dispatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{style:z.grammarTestExplanationHeader},r.a.createElement(s.a,{style:z.grammarTestCasePromptText},"Correct!")),r.a.createElement(i.a,{style:z.grammarTestExplanationBody},r.a.createElement(s.a,{style:z.grammarTestAnswerExplanationText},'"',a.correctSentence,'"'),r.a.createElement(s.a,{style:z.grammarTestAnswerExplanationText},a.explanation," case")),r.a.createElement(i.a,{style:z.grammarTestCaseContainer},r.a.createElement(D.a,{title:"Next question",onPress:function(){return t({type:"REFRESH"})}})))}))};H.displayName="GrammarTestCorrectAnswer";var L=H,W=function(e){return r.a.createElement(P.Consumer,null,(function(e){var a=e.state,t=e.dispatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{style:z.grammarTestExplanationHeader},r.a.createElement(s.a,{style:z.grammarTestCasePromptText},"Wrong")),r.a.createElement(i.a,{style:z.grammarTestExplanationBody},r.a.createElement(s.a,{style:z.grammarTestAnswerExplanationText},"You answered ",a.selectedAnswer),r.a.createElement(s.a,{style:z.grammarTestAnswerExplanationText},"The correct answer was ",a.correctAnswer),r.a.createElement(s.a,{style:z.grammarTestAnswerExplanationText},'"',a.correctSentence,'"'),r.a.createElement(s.a,{style:z.grammarTestAnswerExplanationText},a.explanation," case")),r.a.createElement(i.a,{style:z.grammarTestCaseContainer},r.a.createElement(D.a,{title:"Next question",onPress:function(){return t({type:"REFRESH"})}})))}))};W.displayName="GrammarTestWrongAnswer";var G=W,_=A(),J=function(e){return r.a.createElement(P.Consumer,null,(function(e){var a=e.state,t=e.dispatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{style:z.grammarTestCasePromptContainer},r.a.createElement(s.a,{style:z.grammarTestCasePromptText},a.prompt),r.a.createElement(s.a,{style:z.grammarTestCaseTranslationText},a.translation)),r.a.createElement(i.a,{style:z.grammarTestCaseContainer},r.a.createElement(R,null,a.allAnswers.map((function(e){return r.a.createElement(B,{key:e,title:e,id:e,onPress:function(){return t({type:"SELECT_ANSWER",answer:e})}})})))))}))};J.displayName="GrammarTestQuestion";var M=function(e){var a=Object(n.useReducer)(O,_),t=k()(a,2),o=t[0],l=t[1],s={};return s=o.checkAnswers?o.selectedAnswer==o.correctAnswer?r.a.createElement(L,null):r.a.createElement(G,null):r.a.createElement(J,{state:o,dispatch:l}),r.a.createElement(P.Provider,{value:{state:o,dispatch:l}},s)};M.displayName="GrammarTestCase";var U=M,q=function(e){function a(e){var t;return u()(this,a),(t=h()(this,b()(a).call(this,e))).state={},t}return x()(a,e),E()(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{style:z.grammarTestContainer},r.a.createElement(U,null)))}}]),a}(r.a.Component);q.displayName="GrammarTest";var K=q,Q=function(){var e=Object(l.f)();return r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:e.path+"/"},r.a.createElement(s.a,null,"Izvolite"),r.a.createElement(s.a,null,"Dobar dan, ja \u0107u oko sto grama sira Edama"),r.a.createElement(o.b,{to:e.path+"/1"},r.a.createElement(s.a,null,"Next page"))),r.a.createElement(l.a,{exact:!0,path:e.path+"/1"},r.a.createElement(s.a,null,"Koje ho\u0107ete?"),r.a.createElement(s.a,null,"Ovaj ovde"),r.a.createElement(o.b,{to:e.path+"/2"},r.a.createElement(s.a,null,"Next page"))),r.a.createElement(l.a,{exact:!0,path:e.path+"/2"},r.a.createElement(s.a,null,"Va\u017ei, ho\u0107ete li rezano ili komad?"),r.a.createElement(s.a,null,"Samo komad, molim vas"),r.a.createElement(o.b,{to:e.path+"/3"},r.a.createElement(s.a,null,"Next page"))),r.a.createElement(l.a,{exact:!0,path:e.path+"/3"},r.a.createElement(s.a,null,"Jo\u0161 ne\u0161to?"),r.a.createElement(s.a,null,"Ne, to je sve"),r.a.createElement(o.b,{to:e.path+"/4"},r.a.createElement(s.a,null,"Next page"))),r.a.createElement(l.a,{exact:!0,path:e.path+"/4"},r.a.createElement(s.a,null,"Izvolite, prijatno"),r.a.createElement(s.a,null,"Hvala, zdravo!"),r.a.createElement(o.b,{to:"/index"},r.a.createElement(s.a,null,"Done"))))};Q.displayName="Lesson1";var V=Q,Y=function(){return r.a.createElement(i.a,null,r.a.createElement(i.a,null,r.a.createElement(o.b,{to:"/lesson1"},r.a.createElement(s.a,null,"Lesson 1")),r.a.createElement(o.b,{to:"/grammar_test"},r.a.createElement(s.a,null,"Grammar test"))))};Y.displayName="Index";function X(){return console.log(z),r.a.createElement(o.a,null,r.a.createElement(i.a,{style:z.appContainer},r.a.createElement(i.a,{style:z.appBody},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/grammar_test",component:K}),r.a.createElement(l.a,{path:"/lesson1",component:V}),r.a.createElement(l.a,{path:"/",component:K}))),r.a.createElement(i.a,{style:z.appFooter},r.a.createElement(m.a,{onPress:function(){return c.a.openURL("https://www.slowserbian.com")}},r.a.createElement(s.a,{style:z.footerLinkText},"slowserbian.com")))))}t.d(a,"a",(function(){return X})),X.displayName="App"},83:function(e,a,t){t(84),e.exports=t(114)},84:function(e,a){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/sgt/expo-service-worker.js",{scope:"/sgt/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[83,1,2]]]);
//# sourceMappingURL=../../91c7112241e531d9a448.map