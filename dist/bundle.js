!function(e){function t(t){for(var o,a,s=t[0],c=t[1],u=t[2],f=0,h=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(l&&l(t);h.length;)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={0:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([36,1]),n()}({36:function(e,t,n){"use strict";n.r(t);var o=n(6),r=n(3),i=n(1),a=n(15);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h,p,y,d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,l(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e={left:t.position.left+this.props.xIndex*t.position.xLeftGap+"%",top:t.position.top+this.props.yIndex*t.position.topGap-this.props.xIndex*t.position.xTopGap+"%"};return i.createElement("div",{className:"note","data-x-index":this.props.xIndex,"data-y-index":this.props.yIndex,style:e},"C#3")}}])&&c(n.prototype,o),r&&c(n,r),t}(i.Component);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}y={left:21,top:86,xLeftGap:4,xTopGap:.63,topGap:-13.05},(p="position")in(h=d)?Object.defineProperty(h,p,{value:y,enumerable:!0,configurable:!0,writable:!0}):h[p]=y;var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,w(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){for(var e=[],t=0;t<this.props.ySize;t++)for(var n=0;n<this.props.xSize;n++){var o=t*this.props.xSize+n;e.push(i.createElement(d,{key:o,xIndex:n,yIndex:t},"C#3"))}return i.createElement("div",{id:"notes"},e)}}])&&v(n.prototype,o),r&&v(n,r),t}(i.Component);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function S(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,x(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return i.createElement("canvas",{id:"threejs"})}}])&&j(n.prototype,o),r&&j(n,r),t}(i.Component),_=n(9),P=n(11);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function C(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var z=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,N(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=i.createElement(_.a,{icon:P.b,className:"w-5vmin h-5vmin"}).props.icon.icon[4],t=i.createElement(_.a,{icon:P.a,className:"w-5vmin h-5vmin"}).props.icon.icon[4];return i.createElement("div",{className:"play-control"},i.createElement("a",{href:"#",id:"controlButton",className:"control repos-center show-control"},i.createElement("svg",{id:"controlButtonSVG","aria-hidden":"true",focusable:"false","data-prefix":"fas",className:"svg-inline--fa w-5vmin h-5vmin",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},i.createElement("path",{id:"playPath",fill:"currentColor",d:t}),i.createElement("path",{id:"stopPath",fill:"currentColor",d:e}))))}}])&&D(n.prototype,o),r&&D(n,r),t}(i.Component);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function L(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),L(this,H(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e={left:t.position.left+this.props.xIndex*t.position.xLeftGap+"%",top:t.position.top+this.props.yIndex*t.position.topGap-this.props.xIndex*t.position.xTopGap+"%"};return i.createElement("div",{className:"track-control",style:e},i.createElement("input",{id:"track-"+this.props.yIndex+"-volume",type:"range",className:"input-knob","data-diameter":"7","data-unit":"vmin","data-src":"./img/knob_1.png","data-sprites":"100"}))}}])&&G(n.prototype,o),r&&G(n,r),t}(i.Component);function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function F(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(B,"position",{left:3,top:86,xLeftGap:4,xTopGap:.63,topGap:-13.05});var W=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),F(this,Y(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){for(var e=[],t=0;t<this.props.ySize;t++)e.push(i.createElement(B,{key:t,xIndex:0,yIndex:t}));return i.createElement("div",{className:"tracks"},e)}}])&&V(n.prototype,o),r&&V(n,r),t}(i.Component);function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function U(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var $=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),U(this,Z(t).call(this,e))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return i.createElement("div",{id:"react"},i.createElement(T,null),i.createElement("div",{className:"overlay no-click"},i.createElement(O,{xSize:this.props.xSize,ySize:this.props.ySize})),i.createElement("div",{className:"overlay"},i.createElement(z,null),i.createElement(W,{xSize:this.props.xSize,ySize:this.props.ySize})))}}])&&K(n.prototype,o),r&&K(n,r),t}(i.Component),ee=(n(28),n(30),n(0));function te(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var oe=o(document.body),re=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ne(this,"raycaster",void 0),ne(this,"hoveredObject",void 0),ne(this,"mouseOverArray",void 0),ne(this,"canvasEl",void 0),this.raycaster=new ee.cb,this.hoveredObject=null,this.mouseOverArray=[],this.canvasEl=o("#threejs")}var t,n,r;return t=e,r=[{key:"mouseIn",value:function(e){null!==e&&e.userData.classObject&&(e.userData.classObject.onHoverStart(),oe.addClass("pointer"))}},{key:"mouseOut",value:function(e){null!==e&&e.userData.classObject&&(e.userData.classObject.onHoverEnd(),oe.removeClass("pointer"))}}],(n=[{key:"pick",value:function(t,n,o){this.raycaster.setFromCamera(t,o);for(var r=this.raycaster.intersectObjects(n),i=0;i<this.mouseOverArray.length;i++){var a=this.mouseOverArray[i];(r.length&&a!==r[0].object||0===r.length)&&(this.mouseOverArray.splice(i,1),i--,e.mouseOut(a))}return r.length?(this.hoveredObject=r[0].object,this.mouseOverArray.includes(this.hoveredObject)||(this.mouseOverArray.push(this.hoveredObject),e.mouseIn(this.hoveredObject))):this.hoveredObject=null,this.hoveredObject}},{key:"execute",value:function(){return!(null===this.hoveredObject||!this.hoveredObject.userData.classObject||(this.hoveredObject.userData.classObject.onClick(),0))}},{key:"scroll",value:function(e){return!(null===this.hoveredObject||!this.hoveredObject.userData.classObject||(this.hoveredObject.userData.classObject.onScroll(e),0))}}])&&te(t.prototype,n),r&&te(t,r),e}(),ie=n(4),ae=n(5),se=n(17);function ce(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var le=window.localStorage,fe=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ue(this,"hasLocalStorage",void 0),ue(this,"totalNotesLength",void 0),ue(this,"trackLength",void 0),this.hasLocalStorage=!!window.localStorage,this.totalNotesLength=t,this.trackLength=n,this.checkIfDataExists()||this.resetData(),e.instance=this}var t,n,o;return t=e,(n=[{key:"checkIfDataExists",value:function(){return le.hasOwnProperty("notes")&&le.hasOwnProperty("tracks")}},{key:"resetData",value:function(){var e=Array.apply(null,Array(this.totalNotesLength)).map((function(){})),t=Array.apply(null,Array(this.trackLength)).map((function(){}));le.setItem("notes",JSON.stringify(e)),le.setItem("tracks",JSON.stringify(t))}},{key:"writeNoteData",value:function(e,t){var n=JSON.parse(le.getItem("notes"));n[e]=t,le.setItem("notes",JSON.stringify(n))}},{key:"saveAllNotes",value:function(e){le.setItem("notes",JSON.stringify(e))}},{key:"readAllNotes",value:function(){return this.checkIfDataExists()?JSON.parse(le.getItem("notes")):Array.apply(null,Array(this.totalNotesLength)).map((function(){}))}},{key:"readAllTracks",value:function(){return this.checkIfDataExists()?JSON.parse(le.getItem("tracks")):Array.apply(null,Array(this.trackLength)).map((function(){}))}},{key:"writeTracksData",value:function(e){var t=JSON.parse(le.getItem("tracks"));t.forEach((function(n,o,r){t[o]=e[o]})),le.setItem("tracks",JSON.stringify(t))}},{key:"writeTrackData",value:function(e){var t=JSON.parse(le.getItem("tracks"));t[e.trackIndex]=e.instrument.get(),le.setItem("tracks",JSON.stringify(t))}}])&&ce(t.prototype,n),o&&ce(t,o),e}();function he(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}ue(fe,"instance",null);var ye=function(){function e(t,n,o,r,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),pe(this,"object3d",void 0),pe(this,"originalPos",void 0),pe(this,"material",void 0),pe(this,"isClicked",void 0),pe(this,"color",void 0),pe(this,"enabled",void 0),pe(this,"eventID",void 0),pe(this,"timeIndex",void 0),pe(this,"noteValueDOM",void 0),pe(this,"playTween",void 0),pe(this,"note",void 0),pe(this,"humanModel",void 0),pe(this,"track",void 0),pe(this,"trackIndex",void 0),pe(this,"noteIndex",void 0);var s=new ee.K({color:16777215});this.object3d=new ee.I(e.GEOMETRY,s),this.object3d.position.x=r,this.originalPos={x:r,y:i},this.object3d.position.y=i,this.object3d.receiveShadow=!0,this.object3d.userData.classObject=this,this.material=s,this.isClicked=!1,this.setTrack(t),this.enabled=!1,this.eventID=null,this.timeIndex=o,this.trackIndex=n,this.noteIndex=ke.Instance.xSize*this.trackIndex+this.timeIndex,this.noteValueDOM=a,this.playTween=new ie.Tween(this.object3d.position).to({y:this.originalPos.y-1},150).easing(ie.Easing.Exponential.Out).chain(new ie.Tween(this.object3d.position).to({y:this.originalPos.y},150).easing(ie.Easing.Sinusoidal.Out)),this.setNote(e.DEFAULT_NOTE)}var t,n,o;return t=e,(n=[{key:"setNote",value:function(e){this.note=e,this.noteValueDOM.text(e)}},{key:"updateNote",value:function(e,t){var n=e>0?"-2m":"2m";(n=Object(se.a)(Object(ae.c)(this.note,n))).includes("0")||(this.setNote(n),t&&this.oneshot(n),null!==this.eventID&&fe.instance.writeNoteData(this.noteIndex,this.note))}},{key:"clearHoverTween",value:function(){this.object3d.userData.hoverTween&&ie.remove(this.object3d.userData.hoverTween)}},{key:"assignHumanModel",value:function(e){this.humanModel=e,e.setColorTween(this.color)}},{key:"getHumanModel",value:function(){return this.humanModel}},{key:"showNoteValue",value:function(){this.noteValueDOM.addClass("show-note")}},{key:"hideNoteValue",value:function(){this.noteValueDOM.removeClass("show-note")}},{key:"onHoverStart",value:function(){if(!this.isClicked){if(this.clearHoverTween(),this.object3d.userData.hoverColor){var e=(o=.2,r=this.object3d.userData.hoverColor,i=Math.round,a=255*r.r,s=255*r.g,c=255*r.b,u=r.a?r.a:null,{r:i(a*(h=(l=o<0)?1+o:1-o)+(f=l?0:255*o))/255,g:i(s*h+f)/255,b:i(c*h+f)/255,a:u}),t=this.object3d,n=t.material;t.userData.hoverTween=new ie.Tween(n.color).to({r:e.r,g:e.g,b:e.b},300).easing(ie.Easing.Cubic.Out).start()}this.showNoteValue()}var o,r,i,a,s,c,u,l,f,h}},{key:"onHoverEnd",value:function(){if(!this.isClicked){this.clearHoverTween();var e=this.object3d.material;this.object3d.userData.hoverTween=new ie.Tween(e.color).to({r:1,g:1,b:1},300).easing(ie.Easing.Cubic.Out).start(),this.hideNoteValue()}}},{key:"onClick",value:function(){this.clearHoverTween(),this.isClicked?this.toggleOff():this.toggleOn()}},{key:"onScroll",value:function(e){this.updateNote(e,"started"!==r.c.state)}},{key:"toggleOn",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.object3d.material.color.copy(this.object3d.userData.hoverColor),this.object3d.userData.tween=new ie.Tween(this.object3d.scale).to({y:[.5,1.5]},300).easing(ie.Easing.Back.Out).start(),this.isClicked=!0,this.enabled=!0,this.schedule(),e&&this.oneshot(this.note),this.showNoteValue()}},{key:"toggleOff",value:function(){this.object3d.userData.hoverTween=new ie.Tween(this.object3d.material.color).to({r:1,g:1,b:1},300).easing(ie.Easing.Cubic.Out).start(),this.object3d.userData.tween=new ie.Tween(this.object3d.scale).to({y:1},300).easing(ie.Easing.Back.Out).start(),this.isClicked=!1,this.enabled=!1,this.clear(),this.hideNoteValue()}},{key:"oneshot",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"32n";this.hasTrack()&&this.getInstrument().triggerAttackRelease(e,t),this.playTween.stop(),this.playTween.start()}},{key:"scheduleCallback",value:function(e){this.hasTrack()&&this.getInstrument().triggerAttackRelease(this.note,"32n",e),this.playTween.stop(),this.playTween.start(),this.humanModel.flashColor()}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!==e&&(this.note=e),this.clear();var t=this;this.eventID=r.c.schedule((function(e){t.scheduleCallback(e)}),"0:0:"+this.timeIndex),fe.instance.writeNoteData(this.noteIndex,this.note)}},{key:"reschedule",value:function(){null!==this.eventID&&(this.clear(),this.schedule())}},{key:"clear",value:function(){null!==this.eventID&&(r.c.clear(this.eventID),this.eventID=null,fe.instance.writeNoteData(this.noteIndex,null))}},{key:"getObject3D",value:function(){return this.object3d}},{key:"setTrack",value:function(e){this.track=e,this.color=e.color,this.object3d.userData.hoverColor=e.color}},{key:"hasTrack",value:function(){return null!==this.track}},{key:"getInstrument",value:function(){return this.track.instrument}},{key:"load",value:function(e){this.setNote(e),this.toggleOn(!1)}}])&&he(t.prototype,n),o&&he(t,o),e}();function de(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function be(e,t,n){return t&&de(e.prototype,t),n&&de(e,n),e}function ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}pe(ye,"DEFAULT_NOTE","C3"),pe(ye,"GEOMETRY",new ee.f(3,.7,2)),ye.GEOMETRY.translate(0,-.35,0);var me=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ve(this,"_trackIndex",void 0),ve(this,"notes",[]),ve(this,"_instrument",void 0),ve(this,"_color",void 0),ve(this,"model",void 0),this._instrument=t,this.color=new ee.k(n),this._trackIndex=o}return be(e,[{key:"trackIndex",get:function(){return this._trackIndex},set:function(e){this._trackIndex=e}},{key:"color",get:function(){return this._color},set:function(e){this._color=e}},{key:"instrument",get:function(){return this._instrument},set:function(e){this._instrument=e}}]),be(e,[{key:"setModel",value:function(e){this.model=e}},{key:"addNoteBlock",value:function(e){this.notes.push(e)}},{key:"getNoteBlock",value:function(e){return this.notes.length>e?this.notes[e]:null}},{key:"load",value:function(e){this.instrument.set(e),this.instrument.get()}},{key:"save",value:function(){return null!==fe.instance?(fe.instance.writeTrackData(this),!0):(console.error("StorageSystem is not initialized!"),!1)}}]),e}();function we(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Oe=[13200437,15314983,15546405,2912371,8763285,14406265],ke=function(){function e(t,n,i,a,s,c,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ge(this,"instrumentArray",void 0),ge(this,"xSize",void 0),ge(this,"ySize",void 0),ge(this,"xGap",void 0),ge(this,"yGap",void 0),ge(this,"beatsPerMeasure",void 0),ge(this,"length",void 0),ge(this,"tracks",[]),this.xSize=t,this.ySize=n,this.xGap=s,this.yGap=c,this.beatsPerMeasure=u,this.length=t*n,this.instrumentArray=[new r.b({volume:-6}).toDestination(),new r.a({volume:-6}).toDestination(),new r.a({volume:-6}).toDestination(),new r.a({volume:-6}).toDestination(),new r.a({volume:-6}).toDestination(),new r.a({volume:-6}).toDestination()],e.Instance=this;for(var l=o(".note"),f=0;f<this.ySize;f++){this.tracks.push(new me(this.instrumentArray[f],Oe[f],f));for(var h=0;h<this.xSize;h++){var p=f*this.xSize+h;this.tracks[f].addNoteBlock(new ye(this.tracks[f],f,h,i+s*h,a+c*f,l.eq(p)))}}r.c.loopEnd="1m",r.c.loop=!0}var t,n,i;return t=e,(n=[{key:"getTrack",value:function(e){return this.tracks[e]}},{key:"get",value:function(e){return this.get2d(e%this.xSize,Math.floor(e/this.xSize))}},{key:"get2d",value:function(e,t){return this.tracks[t].getNoteBlock(e)}},{key:"addToScene",value:function(e,t){var n=new ee.f(.5,1,2);n.translate(0,-.25,0);for(var o=new ee.K({color:3355443}),r=0;r<this.ySize;r++)for(var i=0;i<this.xSize;i++){var a=this.get(i+r*this.xSize).getObject3D();if(t.push(a),e.add(a),(i+1)%this.beatsPerMeasure==0){var s=new ee.I(n,o);s.receiveShadow=!0,s.position.x=a.position.x+this.xGap/2,s.position.y=a.position.y,s.position.z=a.position.z,e.add(s)}else if(0===i){var c=new ee.I(n,o);c.receiveShadow=!0,c.position.x=a.position.x-this.xGap/2,c.position.y=a.position.y,c.position.z=a.position.z,e.add(c)}}}},{key:"play",value:function(){r.c.start()}},{key:"pause",value:function(){r.c.pause()}},{key:"stop",value:function(){r.c.stop()}},{key:"loadAllNotes",value:function(e){var t=this;e.forEach((function(e,n,o){e&&t.get(n).load(e)}))}},{key:"loadAllTracks",value:function(t){t.forEach((function(t,n,o){t&&e.Instance.getTrack(n).load(t)}))}},{key:"saveAllTracks",value:function(){null!==fe.instance&&fe.instance.writeTracksData(this.getAllTrackOptions())}},{key:"getAllTrackOptions",value:function(){var e=[];return this.tracks.forEach((function(t,n,o){e.push(t.instrument.get())})),e}}])&&we(t.prototype,n),i&&we(t,i),e}();ge(ke,"Instance",null);var je=function(e){var t={animations:e.animations,scene:e.scene.clone(!0)},n={};e.scene.traverse((function(e){e instanceof ee.ib&&(n[e.name]=e)}));var o={},r={};for(var i in t.scene.traverse((function(e){e instanceof ee.d&&(o[e.name]=e),e instanceof ee.ib&&(r[e.name]=e)})),n){for(var a=n[i].skeleton,s=r[i],c=[],u=0;u<a.bones.length;++u){var l=o[a.bones[u].name];c.push(l)}s.bind(new ee.hb(c,a.boneInverses),s.matrixWorld)}return t};function Se(e){return(Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function xe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ee(e){return(Ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Te(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _e(e,t){return(_e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ie=function(e){function t(e){var n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,n=!(r=Ee(t).call(this,e))||"object"!==Se(r)&&"function"!=typeof r?Te(o):r,Pe(Te(n),"mixer",void 0),Pe(Te(n),"animations",void 0),Pe(Te(n),"object3d",void 0),Pe(Te(n),"material",void 0),Pe(Te(n),"defaultColor",void 0),Pe(Te(n),"actions",void 0),Pe(Te(n),"head",void 0),Pe(Te(n),"currentActionIndex",void 0),Pe(Te(n),"shouldPlay",void 0),Pe(Te(n),"colorTween",void 0),n.object3d=e.scene.children[0],n.animations=e.animations,n.object3d.children[1].castShadow=!0,n.object3d.children[1].material=new ee.K({skinning:!0,flatShading:!0}),n.material=n.object3d.children[1].material,n.defaultColor=n.material.color,n.mixer=new ee.c(n.object3d),n.actions=[],n.head=n.object3d.getObjectByName("mixamorigHead");for(var i=0;i<n.animations.length;i++)n.actions.push(n.mixer.clipAction(n.animations[i]));return n.actions[1].play(),n.currentActionIndex=0,n.shouldPlay=!1,n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_e(e,t)}(t,e),n=t,(o=[{key:"setColorTween",value:function(e){this.colorTween=new ie.Tween(this.material.color).to({r:e.r,g:e.g,b:e.b},100).easing(ie.Easing.Cubic.Out).chain(new ie.Tween(this.material.color).to({r:this.defaultColor.r,g:this.defaultColor.g,b:this.defaultColor.b},200))}},{key:"updateMixer",value:function(e){this.mixer.update(e)}},{key:"transitionAnimTo",value:function(e){this.actions[e].enabled=!0,this.actions[e].time=0,this.actions[e].setEffectiveTimeScale(1),this.actions[e].setEffectiveWeight(1),this.actions[e].play(),this.actions[this.currentActionIndex].crossFadeTo(this.actions[e],1,!0),this.currentActionIndex=e}},{key:"updateXPos",value:function(e,t,n,o){this.object3d.position.x=e+(t-e)*n}},{key:"flashColor",value:function(){null!==this.colorTween&&(this.colorTween.stop(),this.colorTween.start())}},{key:"getObject3D",value:function(){return this.object3d}}])&&xe(n.prototype,o),r&&xe(n,r),t}((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)})),De=n(16),Ce=o(window);function Ne(){var e=document.querySelector("#threejs"),t=new ee.sb({canvas:e,antialias:!0});t.setPixelRatio(window.devicePixelRatio),t.shadowMap.enabled=!0,t.shadowMap.type=ee.T;var n=new ee.S(-40,40,22.5,-22.5,1,1e3);n.position.set(-20,25,45),n.lookAt(new ee.pb(0,15,0));new ee.pb(0,0,0),new ee.pb(0,0,0);var o=new ee.eb;o.add(n),window.scene=o,o.background=new ee.k("gray");var i=new ee.j,a=[],s=[];window.humanModels=a;var c=new re,u={x:0,y:0},l=new ke(16,6,-25,-.25,3.5,6,4);new fe(l.length,l.ySize),l.loadAllNotes(fe.instance.readAllNotes()),window.trackManager=l;var f=new ee.q(11657727,12155424,.5);f.name="HemisphereLight",o.add(f);var h=new ee.l(16777215,1);h.shadow.mapSize.width=512,h.shadow.mapSize.height=512,h.position.set(25,50,10),h.castShadow=!0,h.name="DirectionalLight",o.add(h),o.add(h.target),h.shadow.camera.left=-15,h.shadow.camera.right=15,h.shadow.camera.top=50,h.shadow.camera.bottom=-50;var p=new ee.a(16777215,.1);p.position.set(5,10,2),p.name="AmbientLight",o.add(p);(new De.a).load("models/everything-trimmed.glb",(function(e){for(var t=0;t<6;t++){0!==t&&(e=je(e));var n=new Ie(e);n.getObject3D().name="Character "+t,a.push(n),s.push(n.getObject3D().children[1]);for(var r=0;r<l.xSize;r++)l.get2d(r,t).assignHumanModel(n)}for(var i=0;i<a.length;i++){var c=a[i];c.transitionAnimTo(i+5);var u=c.getObject3D();u.position.x=-30,u.position.y=6*i-.2,u.rotateZ(-1.5708),o.add(u)}var f=(new ee.e).setFromObject(a[0].getObject3D());f.getSize(new ee.pb).length(),f.getCenter(new ee.pb)})),l.addToScene(o,s);var y=function(t){var n=function(t){var n,o,r=e.getBoundingClientRect();return"clientX"in t.originalEvent?(n=t.originalEvent.clientX,o=t.originalEvent.clientY):"touches"in t.originalEvent&&(n=t.originalEvent.touches[0].pageX,o=t.originalEvent.touches[0].pageY),{x:n-r.left,y:o-r.top}}(t);u.x=n.x/e.clientWidth*2-1,u.y=n.y/e.clientHeight*-2+1},d=function(){u.x=-1e5,u.y=-1e5};Ce.on("mousemove",y),Ce.on("mouseout",d),Ce.on("mouseleave",d),Ce.on("click",(function(e){y(e),c.pick(u,s,n),c.execute()})),Ce.on("wheel",(function(e){y(e),c.pick(u,s,n),c.scroll(e.originalEvent.deltaY)})),requestAnimationFrame((function e(l){l*=.001;l;var f=i.getDelta();if(function(e){var t=e.domElement,n=t.clientWidth,o=t.clientHeight,r=t.width!==n||t.height!==o;return r&&e.setSize(n,o,!1),r}(t)){var h=t.domElement;n instanceof ee.U&&(n.aspect=h.clientWidth/h.clientHeight),n.updateProjectionMatrix()}for(var p=r.c.progress,y=0;y<a.length;y++)a[y].updateMixer(f),a[y].updateXPos(-30,28,p,f);c.pick(u,s,n),t.render(o,n),requestAnimationFrame(e),ie.update()}))}a.render(i.createElement($,{xSize:16,ySize:6}),document.getElementById("container"),(function(){Ne();var e=o("#controlButton"),t=document.getElementById("controlButtonSVG"),n=(Snap(t),Snap.select("#playPath")),i=Snap.select("#stopPath"),a=n.node.getAttribute("d"),s=i.node.getAttribute("d");e.on("click",(function(){"started"===r.c.state?(n.animate({d:a},300,mina.easeinout),r.c.stop()):(n.animate({d:s},300,mina.backout),r.c.start())}))}))}});