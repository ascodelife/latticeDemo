(this["webpackJsonptags-demo"]=this["webpackJsonptags-demo"]||[]).push([[0],{130:function(e,t,a){e.exports=a(265)},135:function(e,t,a){},136:function(e,t,a){},265:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(11),r=a.n(c),i=(a(135),a(27)),f=a(43),s=a(13),o=(a(136),a(269)),F=a(274);var m=function(e){var t=e.handlePrimaryClick,a=e.current;return l.a.createElement("div",{className:"flex-contain"},l.a.createElement(f.b,{to:"/"},l.a.createElement(F.a,null)," \u56de\u5230\u9996\u9875"),l.a.createElement("h3",null,"\u793a\u4f8b\u7a0b\u5e8f-\u5f53\u524d\u6b65\u9aa4".concat(a+1)),l.a.createElement(o.a,{type:"primary",onClick:t},"\u6253\u5f00\u63a7\u5236\u9762\u677f"))},u=a(18),d=a(266),h=a(273),E=function(e){return function(t){t({type:"SET_SELECT_TAG",payload:e})}},p=a(275),g=a(276),y=a(268);var v=function(e){var t=e.selectedKeys,a=e.onSelect,n=e.treeData,c=e.selectedFileTags,r=y.a.TreeNode;return l.a.createElement("div",null,l.a.createElement(y.a,{selectedKeys:t,defaultExpandAll:!0,showIcon:!0,switcherIcon:l.a.createElement(g.a,null),onSelect:a},function e(t){return t.map((function(t){return l.a.createElement(r,{key:t.key,title:l.a.createElement("span",{className:"padding ".concat(c&&c.includes(t.title)?"solid":"")},t.title),icon:l.a.createElement(p.a,null)},t.children?e(t.children):"")}))}(n)))},b=a(110),N=a(128),k=a(25),O=a.n(k);var x=function(e,t,a,n){var l=e.clientHeight,c=e.clientWidth,r=new O.a.Stage({container:e,width:l,height:c}),i=new O.a.Layer,f=new O.a.Text({x:0,y:0,fontFamily:"Calibri",fontSize:16,text:"",fill:"black"});i.add(f);var s={1:{x:.5,y:.07,type:"2"},F1:{x:.25,y:.18,type:"0"},F2:{x:.75,y:.18,type:"0"},F11:{x:.1,y:.33,type:"0"},F12:{x:.3,y:.33,type:"0"},F21:{x:.625,y:.33,type:"0"},F22:{x:.875,y:.33,type:"0"},8:{x:.5,y:.48,type:"2"},9:{x:.25,y:.63,type:"1"},10:{x:.5,y:.63,type:"2"},11:{x:.375,y:.78,type:"1"},12:{x:.625,y:.78,type:"1"},13:{x:.5,y:.97,type:"2"}},o={1:["F1","F2"],F1:["F11","F12","8"],F2:["F21","F22"],F11:["10"],F12:["9"],F21:["8"],F22:["12"],8:["9","10"],9:["11"],10:["11","12"],11:["13"],12:["13"]},F=new Map;function m(e,t,a,n){e.beginPath();var l=[];l=n?[1*Math.PI,2*Math.PI]:[0,1*Math.PI],e.arc.apply(e,[0,0,.03*c].concat(Object(N.a)(l))),e.fillStyle=a,e.stroke(),e.fill(),e.closePath(),e.fillStrokeShape(t)}Object.keys(s).forEach((function(e){var r=s[e],f=r.x,o=r.y,u=r.type;f*=c,o*=l;var d=null,h=new O.a.Text({x:f+.04*c,y:o-.03*c,fontFamily:"Calibri",fontSize:18,text:e,fill:"red"});switch(u){case"0":d=function(e,t){return new O.a.Shape({x:e,y:t,sceneFunc:function(e,t){m(e,t,"blue",!0),m(e,t,"black",!1)}})}(f,o);break;case"1":d=function(e,t){return new O.a.Shape({x:e,y:t,sceneFunc:function(e,t){m(e,t,"white",!0),m(e,t,"black",!1)}})}(f,o);break;default:d=function(e,t){return new O.a.Circle({x:e,y:t,radius:.03*c,fill:"white",stroke:"black",strokeWidth:1})}(f,o)}i.add(d),i.add(h),F.set(d,new O.a.Tween({node:d,duration:.1,scaleX:1.5,scaleY:1.5,easing:O.a.Easings.EaseInOut})),d.on("click",(function(){"function"===typeof t&&t(e)})),d.on("mouseover",(function(){F.get(d).play(),"function"===typeof a&&a(e)})),d.on("mouseout",(function(){F.get(d).reverse(),"function"===typeof n&&n(e)}))})),Object.keys(o).forEach((function(e){var t=s[e],a=t.x,n=t.y;o[e].forEach((function(e){var t=s[e],l=t.x,r=t.y,f=function(e,t,a,n){return new O.a.Line({points:[e*c,t*c+.03*c,a*c,n*c-.03*c],stroke:"black",strokeWidth:2,lineCap:"round",lineJoin:"round"})}(a,n,l,r);i.add(f)}))})),r.add(i)};var S=function(e){var t=Object(b.a)({},e.posData),a=e.handleNodeClick,c=e.handleNodeMouseover,r=e.handleNodeMouseout,f=e.nodeInfo,s=Object(n.useRef)(),o=Object(n.useState)(),F=Object(i.a)(o,2),m=F[0],u=F[1];return Object(n.useEffect)((function(){return u(s.current),function(){}}),[]),l.a.createElement("div",{className:"lattice"},l.a.createElement("img",{className:"arrow",style:t,width:"10%",src:"/images/arrow.png",alt:"\u7bad\u5934"}),l.a.createElement("div",{ref:s},m?x(m,a,c,r):null),l.a.createElement("div",null,f))},j={metaData:{tags:{F1:{name:"F1\u6807\u7b7e",files:["f1","f4","f5"]},F11:{name:"F11\u6807\u7b7e",files:["f1","f2","f3"]},F12:{name:"F12\u6807\u7b7e",files:["f2","f4","f5","f6"]},F2:{name:"F2\u6807\u7b7e",files:["f2","f4","f6"]},F21:{name:"F21\u6807\u7b7e",files:["f1","f2","f4","f6"]},F22:{name:"F22\u6807\u7b7e",files:["f1","f7"]}},files:{f1:{name:"f1",tags:["F1","F11","F21","F22"]},f2:{name:"f2",tags:["F11","F12","F2","F21"]},f3:{name:"f3",tags:["F11"]},f4:{name:"f4",tags:["F1","F12","F2","F21"]},f5:{name:"f5",tags:["F1","F12"]},f6:{name:"f6",tags:["F12","F2","F21"]},f7:{name:"f7",tags:["F22"]}}},treeData:[{title:"F1",key:"F1",children:[]},{title:"F11",key:"F11",children:[]},{title:"F12",key:"F12",children:[]},{title:"F2",key:"F2",children:[]},{title:"F21",key:"F21",children:[]},{title:"F22",key:"F22",children:[]}],levelData:null},w={metaData:{tags:{F1:{name:"F1\u6807\u7b7e",files:["f1","f2","f3","f4","f5","f6"]},F11:{name:"F11\u6807\u7b7e",files:["f1","f2","f3"]},F12:{name:"F12\u6807\u7b7e",files:["f2","f4","f5","f6"]},F2:{name:"F2\u6807\u7b7e",files:["f1","f2","f4","f6","f7"]},F21:{name:"F21\u6807\u7b7e",files:["f1","f2","f4","f6"]},F22:{name:"F22\u6807\u7b7e",files:["f1","f7"]}},files:{f1:{name:"f1",tags:["F1","F11","F2","F21","F22"]},f2:{name:"f2",tags:["F1","F11","F12","F2","F21"]},f3:{name:"f3",tags:["F1","F11"]},f4:{name:"f4",tags:["F1","F12","F2","F21"]},f5:{name:"f5",tags:["F1","F12"]},f6:{name:"f6",tags:["F1","F12","F2","F21"]},f7:{name:"f7",tags:["F2","F22"]}}},treeData:[{title:"F1",key:"F1",children:[{title:"F11",key:"F11",children:[]},{title:"F12",key:"F12",children:[]}]},{title:"F2",key:"F2",children:[{title:"F21",key:"F21",children:[]},{title:"F22",key:"F22",children:[]}]}],levelData:{F1:{name:"F1",children:["F11","F12"],files:["f1","f2","f3","f4","f5","f6"]},F2:{name:"F2",children:["F21","F22"],files:["f1","f2","f4","f6","f7"]},F11:{name:"F11",parents:["F1"],files:["f1","f2","f3"]},F12:{name:"F12",parents:["F1"],files:["f2","f4","f5","f6"]},F21:{name:"F21",parents:["F2"],files:["f1","f2","f4","f6"]},F22:{name:"F22",parents:["F2"],files:["f1","f7"]}}},C={metaData:{tags:{1:{name:"1\u53f7\u8282\u70b9",files:["f1","f2","f3","f4","f5","f6","f7"]},F1:{name:"F1\u6807\u7b7e",files:["f1","f2","f3","f4","f5","f6"]},F11:{name:"F11\u6807\u7b7e",files:["f1","f2","f3"]},F12:{name:"F12\u6807\u7b7e",files:["f2","f4","f5","f6"]},F2:{name:"F2\u6807\u7b7e",files:["f1","f2","f4","f6","f7"]},F21:{name:"F21\u6807\u7b7e",files:["f1","f2","f4","f6"]},F22:{name:"F22\u6807\u7b7e",files:["f1","f7"]},8:{name:"8\u53f7\u8282\u70b9",files:["f1","f2","f4","f6"]},9:{name:"9\u53f7\u8282\u70b9",files:["f2","f4","f6"]},10:{name:"10\u53f7\u8282\u70b9",files:["f1","f2"]},11:{name:"11\u53f7\u8282\u70b9",files:["f2"]},12:{name:"12\u53f7\u8282\u70b9",files:["f1"]},13:{name:"13\u53f7\u8282\u70b9",files:[]}},files:{f1:{name:"f1",tags:["F1","F11","F2","F21","F22"]},f2:{name:"f2",tags:["F1","F11","F12","F2","F21"]},f3:{name:"f3",tags:["F1","F11"]},f4:{name:"f4",tags:["F1","F12","F2","F21"]},f5:{name:"f5",tags:["F1","F12"]},f6:{name:"f6",tags:["F1","F12","F2","F21"]},f7:{name:"f7",tags:["F2","F22"]}}},treeData:[{title:"F1",key:"F1",children:[{title:"F11",key:"F11",children:[]},{title:"F12",key:"F12",children:[]}]},{title:"F2",key:"F2",children:[{title:"F21",key:"F21",children:[]},{title:"F22",key:"F22",children:[]}]}],levelData:{1:{name:"1\u53f7\u8282\u70b9",No:"1",children:["F1","F2"],files:["f1","f2","f3","f4","f5","f6","f7"],intents:[]},F1:{name:"F1",No:"2",parents:["1"],children:["F11","F12","8"],files:["f1","f2","f3","f4","f5","f6"],intents:["F1"]},F2:{name:"F2",No:"3",parents:["1"],children:["F21","F22"],files:["f1","f2","f4","f6","f7"],intents:["F2"]},F11:{name:"F11",No:"4",parents:["F1"],children:["10"],files:["f1","f2","f3"],intents:["F11"]},F12:{name:"F12",No:"5",parents:["F1"],children:["9"],files:["f2","f4","f5","f6"],intents:["F12"]},F21:{name:"F21",No:"6",parents:["F2"],children:["8"],files:["f1","f2","f4","f6"],intents:["F21"]},F22:{name:"F22",No:"7",parents:["F2"],children:["12"],files:["f1","f7"],intents:["F22"]},8:{name:"8\u53f7\u8282\u70b9",No:"8",parents:["F1","F21"],children:["9","10"],files:["f1","f2","f4","f6"],intents:["F1","F2","F21"]},9:{name:"9\u53f7\u8282\u70b9",No:"9",parents:["F12","8"],children:["11"],files:["f2","f4","f6"],intents:["F1","F2","F12","F21"]},10:{name:"10\u53f7\u8282\u70b9",No:"10",parents:["F11","8"],children:["11","12"],files:["f1","f2"],intents:["F1","F2","F11","F21"]},11:{name:"11\u53f7\u8282\u70b9",No:"11",parents:["9","10"],children:["13"],files:["f2"],intents:["F1","F2","F11","F12","F21"]},12:{name:"12\u53f7\u8282\u70b9",No:"12",parents:["10","F22"],children:["13"],files:["f1"],intents:["F1","F2","F11","F21","F22"]},13:{name:"13\u53f7\u8282\u70b9",No:"13",parents:["11","12"],children:["13"],files:[],intents:["F1","F2","F11","F12","F21","F22"]}}},T={1:{top:"-5%",left:"45%"},F1:{top:"6%",left:"20%"},F2:{top:"6%",left:"70%"},F11:{top:"21%",left:"5%"},F12:{top:"21%",left:"25%"},F21:{top:"21%",left:"58%"},F22:{top:"21%",left:"82%"},8:{top:"36%",left:"45%"},9:{top:"51%",left:"20%"},10:{top:"51%",left:"45%"},11:{top:"66%",left:"33%"},12:{top:"66%",left:"58%"},13:{top:"85%",left:"45%"}};var D=Object(s.g)((function(e){var t=Object(n.useRef)(),a=Object(n.useState)([]),c=Object(i.a)(a,2),r=c[0],f=c[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),F=o[0],m=o[1],p=Object(n.useState)(),g=Object(i.a)(p,2),y=g[0],b=g[1],N=Object(u.c)((function(e){return e.selectedTag})),k=Object(u.c)((function(e){return e.step})).current,O=Object(u.c)((function(e){return e.selectedFile})),x=O&&O.tags,D=0===k?j.treeData:1===k?w.treeData:C.treeData,I=Object(u.b)();return Object(n.useEffect)((function(){var t=e.location.pathname.split("/").slice(-1);return f(t),I(E(t)),function(){}}),[I,e.location.pathname]),Object(n.useEffect)((function(){if(t.current){var e=F?1:0;t.current.innerSlider.slickGoTo(e)}return function(){}}),[F]),Object(n.useEffect)((function(){return 2!==k&&m(0),function(){}}),[k]),l.a.createElement("div",{className:"tagSidebar"},l.a.createElement("div",{className:"text-center text-xl"},F?"\u6982\u5ff5\u683c":"\u5206\u7c7b\u6807\u7b7e"),l.a.createElement("div",{className:"grid-container"},l.a.createElement(d.a,{ref:t,className:"carousel",effect:"fade",dots:!1},l.a.createElement(v,{className:"tagTree",selectedKeys:r,onSelect:function(t,a){t.length>0&&(I(E(a.selectedNodes[0])),e.history.push("/tags/".concat(t[0])))},treeData:D,selectedFileTags:x}),l.a.createElement(S,{handleNodeClick:function(t){e.history.push("/tags/".concat(t))},handleNodeMouseover:function(e){var t="\u6307\u5411\u8282\u70b9".concat(e,":{intents:[").concat(C.levelData[e].intents,"] ,extents:[").concat(C.levelData[e].files,"]}");b(t)},handleNodeMouseout:function(){b("")},posData:T[N],nodeInfo:y})),2===k?l.a.createElement("div",{className:"action"},l.a.createElement("span",{className:F?"":"highlight"},"\u6807\u7b7e\u89c6\u56fe"),l.a.createElement(h.a,{onChange:function(e){m(e)}}),l.a.createElement("span",{className:F?"highlight":""},"\u6982\u5ff5\u683c\u89c6\u56fe")):null))})),I=a(277);var _=function(e){var t=e.info,a=e.isUnfold,n=e.onClick;return l.a.createElement("div",{className:"splitBar"},l.a.createElement("div",{className:"flex-contain"},l.a.createElement("div",{className:"arrow",onClick:n},l.a.createElement(o.a,{type:"link",icon:a?l.a.createElement(g.a,null):l.a.createElement(I.a,null)})),l.a.createElement("div",{className:"info"},t),l.a.createElement("div",{className:"line"})))};var L=function(e){var t=e.info,a=e.children,c=Object(n.useState)(!0),r=Object(i.a)(c,2),f=r[0],s=r[1];return l.a.createElement("div",{className:"fileBar"},l.a.createElement(_,{onClick:function(){s(!f)},isUnfold:f,info:t}),l.a.createElement("div",{className:"flex-contain ".concat(f?"":"hidden")},l.a.Children.map(a,(function(e){return l.a.createElement(l.a.Fragment,null,e)}))))};var P=function(e){var t=e.file.name,a=e.tabIndex,n=e.onFocus,c=e.onBlur;return l.a.createElement("div",{className:"file",tabIndex:a,onFocus:n,onBlur:c},l.a.createElement("img",{className:"file-image",src:"/images/file.png",alt:t}),l.a.createElement("div",{className:"file-name"},t))};var B=function(e){var t=e.folder.name,a=e.tabIndex,n=e.onDoubleClick,c=e.onFocus,r=e.onBlur;return l.a.createElement("div",{className:"file",tabIndex:a,onDoubleClick:n,onFocus:c,onBlur:r},l.a.createElement("img",{className:"file-image",src:"/images/folder.png",alt:t}),l.a.createElement("div",{className:"file-name"},t))},M=function(e){return function(t){t({type:"SET_SELECT_FILE",payload:e})}};var R=function(e){var t=Object(u.b)(),a=Object(u.c)((function(e){return e.step})).current,n=0===a?j:1===a?w:C,c=n.metaData,r=n.levelData,i=e.match.params.tagName;if(!c.tags[i]&&i)return l.a.createElement(s.a,{to:"/"});var f=i?c.tags[i]:{name:"\u6240\u6709",files:Object.keys(c.files)},o=f.name,F=f.files;function m(t){var a=0===t?"parents":"children",n="".concat(o).concat(0===t?"\u7236":"\u5b50","\u76ee\u5f55"),c=r[i][a];if(c)return l.a.createElement(L,{info:n},c.map((function(t,a){return l.a.createElement(B,{tabIndex:a+F.length,key:t,folder:r[t],onDoubleClick:function(){return e.history.push("/tags/".concat(t))}})})))}return l.a.createElement("div",null,l.a.createElement("h3",{className:"text-center"},o),l.a.createElement(L,{info:"".concat(o,"\u7684\u6587\u4ef6\uff08").concat(F.length,"\uff09")},F.map((function(e,a){return l.a.createElement(P,{tabIndex:a,onFocus:function(){return t(M(c.files[e]))},onBlur:function(){return t(M(null))},key:c.files[e].name,file:c.files[e]})}))),a>=1&&i?m(0):null,a>=1&&i?m(1):null)},J=a(270),U=a(271),W=a(49),z=a.n(W),G=function(e){return function(t){t({type:"SET_CURRENT_STEP",payload:e}),z.a.set("current",JSON.stringify(e))}},A=a(267),K=a(272),X=a(278);var H=function(e){var t=e.data,a=e.title;return l.a.createElement(A.b,{className:"tagList",size:"small",header:l.a.createElement("h3",null,a),bordered:!0,dataSource:Object.keys(t.tags),renderItem:function(e){return l.a.createElement(A.b.Item,{className:"grid-container"},l.a.createElement("div",{className:"tag"},l.a.createElement(X.a,null),e),l.a.createElement("div",{className:"files"},t.tags[e].files.map((function(e){return l.a.createElement(K.a,{key:e,color:"blue"},e)}))))}})};var V=function(e){var t=J.a.Step,a=Object(u.c)((function(e){return e.step})).current,c=Object(u.b)(),r=Object(n.useRef)();return Object(n.useEffect)((function(){return r.current&&r.current.innerSlider.slickGoTo(a),function(){}}),[a]),l.a.createElement(U.a,{className:"controlSidebar",title:"\u63a7\u5236\u9762\u677f",placement:"right",closable:!0,onClose:e.onClose,visible:e.visible,width:"50rem"},l.a.createElement(J.a,{size:"small",current:a},l.a.createElement(t,{className:"point",title:"\u666e\u901a\u6587\u4ef6\u5206\u7c7b",onClick:function(){return c(G(0))}}),l.a.createElement(t,{className:"point",title:"\u5f15\u5165\u6807\u7b7e\u5c42\u7ea7",onClick:function(){return c(G(1))}}),l.a.createElement(t,{className:"point",title:"\u6982\u5ff5\u683c",onClick:function(){return c(G(2))}})),l.a.createElement(d.a,{ref:r,className:"carousel",afterChange:function(e){return c(G(e))}},l.a.createElement(H,{data:j.metaData,title:"\u539f\u59cb\u6807\u7b7e\u6587\u4ef6\u6620\u5c04\u8868"}),l.a.createElement(H,{data:w.metaData,title:"\u5f15\u5165\u5c42\u7ea7\u5173\u7cfb\u540e\u6620\u5c04\u8868"}),l.a.createElement("div",null,l.a.createElement("img",{src:"/images/lattice.png",width:"100%",alt:"\u6982\u5ff5\u683c"}))))};var Y=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(u.c)((function(e){return e.step})).current;return l.a.createElement(f.a,null,l.a.createElement("div",{className:"grid-container"},l.a.createElement("header",{className:"header"},l.a.createElement(m,{current:r,handlePrimaryClick:function(){c(!0)}})),l.a.createElement("aside",{className:"aside"},l.a.createElement(D,null)),l.a.createElement("main",{className:"main"},l.a.createElement(s.d,null,l.a.createElement(s.b,{exact:!0,path:"/",component:R}),l.a.createElement(s.b,{path:"/tags/:tagName",component:R}),l.a.createElement(s.a,{to:"/"}))),l.a.createElement("footer",{className:"footer"},"\u5e95\u90e8"),l.a.createElement(V,{visible:a,onClose:function(){return c(!1)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=a(38),q=a(124);var Q={step:{current:z.a.getJSON("current")||0},selectedTag:z.a.getJSON("selectedTag")||null,selectedFile:z.a.getJSON("selectedFile")||null},Z=Object($.c)({step:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{current:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_STEP":return{current:t.payload};default:return e}},selectedTag:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SELECT_TAG":return t.payload;default:return e}},selectedFile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SELECT_FILE":return t.payload;default:return e}}}),ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d,te=Object($.e)(Z,Q,ee(Object($.a)(q.a)));r.a.render(l.a.createElement(u.a,{store:te},l.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[130,1,2]]]);
//# sourceMappingURL=main.1c8111cb.chunk.js.map