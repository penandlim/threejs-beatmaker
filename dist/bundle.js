!function(e){function t(t){for(var o,a,s=t[0],c=t[1],u=t[2],h=0,f=[];h<s.length;h++)a=s[h],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(l&&l(t);f.length;)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={0:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([36,1]),n()}({36:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(6),i=n(3),a=n(1),s=n(15);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,d,y,v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,h(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e={left:t.position.left+this.props.xIndex*t.position.xLeftGap+"%",top:t.position.top+this.props.yIndex*t.position.topGap-this.props.xIndex*t.position.xTopGap+"%"};return a.createElement("div",{className:"note","data-x-index":this.props.xIndex,"data-y-index":this.props.yIndex,style:e},"C#3")}}])&&u(n.prototype,o),r&&u(n,r),t}(a.Component);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}y={left:21,top:86,xLeftGap:4,xTopGap:.63,topGap:-13.05},(d="position")in(p=v)?Object.defineProperty(p,d,{value:y,enumerable:!0,configurable:!0,writable:!0}):p[d]=y;var j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,g(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){for(var e=[],t=0;t<this.props.ySize;t++)for(var n=0;n<this.props.xSize;n++){var o=t*this.props.xSize+n;e.push(a.createElement(v,{key:o,xIndex:n,yIndex:t},"C#3"))}return a.createElement("div",{id:"notes"},e)}}])&&m(n.prototype,o),r&&m(n,r),t}(a.Component);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,E(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return a.createElement("canvas",{id:"threejs"})}}])&&S(n.prototype,o),r&&S(n,r),t}(a.Component),C=n(9),_=n(11);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function I(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var z=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),I(this,N(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=a.createElement(C.a,{icon:_.b,className:"w-5vmin h-5vmin"}).props.icon.icon[4],t=a.createElement(C.a,{icon:_.a,className:"w-5vmin h-5vmin"}).props.icon.icon[4];return a.createElement("div",{className:"play-control"},a.createElement("a",{href:"#",id:"controlButton",className:"control repos-center show-control"},a.createElement("svg",{id:"controlButtonSVG","aria-hidden":"true",focusable:"false","data-prefix":"fas",className:"svg-inline--fa w-5vmin h-5vmin",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},a.createElement("path",{id:"playPath",fill:"currentColor",d:t}),a.createElement("path",{id:"stopPath",fill:"currentColor",d:e}))))}}])&&M(n.prototype,o),r&&M(n,r),t}(a.Component);function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function H(e,t){return!t||"object"!==G(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),H(this,V(t).call(this,e))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return a.createElement("div",{id:"react"},a.createElement(P,null),a.createElement("div",{className:"overlay no-click"},a.createElement(j,{xSize:this.props.xSize,ySize:this.props.ySize})),a.createElement("div",{className:"overlay"},a.createElement(z,null)))}}])&&B(n.prototype,o),r&&B(n,r),t}(a.Component);n(28),n(30);function F(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W=r(document.body),Y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),J(this,"raycaster",void 0),J(this,"hoveredObject",void 0),J(this,"mouseOverArray",void 0),J(this,"canvasEl",void 0),this.raycaster=new o.Raycaster,this.hoveredObject=null,this.mouseOverArray=[],this.canvasEl=r("#threejs")}var t,n,i;return t=e,i=[{key:"mouseIn",value:function(e){null!==e&&e.userData.classObject&&(e.userData.classObject.onHoverStart(),W.addClass("pointer"))}},{key:"mouseOut",value:function(e){null!==e&&e.userData.classObject&&(e.userData.classObject.onHoverEnd(),W.removeClass("pointer"))}}],(n=[{key:"pick",value:function(t,n,o){this.raycaster.setFromCamera(t,o);for(var r=this.raycaster.intersectObjects(n),i=0;i<this.mouseOverArray.length;i++){var a=this.mouseOverArray[i];(r.length&&a!==r[0].object||0===r.length)&&(this.mouseOverArray.splice(i,1),i--,e.mouseOut(a))}return r.length?(this.hoveredObject=r[0].object,this.mouseOverArray.includes(this.hoveredObject)||(this.mouseOverArray.push(this.hoveredObject),e.mouseIn(this.hoveredObject))):this.hoveredObject=null,this.hoveredObject}},{key:"execute",value:function(){return!(null===this.hoveredObject||!this.hoveredObject.userData.classObject||(this.hoveredObject.userData.classObject.onClick(),0))}},{key:"scroll",value:function(e){return!(null===this.hoveredObject||!this.hoveredObject.userData.classObject||(this.hoveredObject.userData.classObject.onScroll(e),0))}}])&&F(t.prototype,n),i&&F(t,i),e}(),X=n(4),q=n(5),U=n(17);function Z(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=window.localStorage,$=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),K(this,"hasLocalStorage",void 0),K(this,"totalNotesLength",void 0),this.hasLocalStorage=!!window.localStorage,this.totalNotesLength=t,this.checkIfNotesDataExist()||this.resetNotesData()}var t,n,o;return t=e,(n=[{key:"checkIfNotesDataExist",value:function(){return Q.hasOwnProperty("notes")}},{key:"resetNotesData",value:function(){var e=Array.apply(null,Array(this.totalNotesLength)).map((function(){}));Q.setItem("notes",JSON.stringify(e))}},{key:"saveNote",value:function(e,t){var n=JSON.parse(Q.getItem("notes"));n[e]=t,Q.setItem("notes",JSON.stringify(n))}},{key:"loadNotes",value:function(){return this.checkIfNotesDataExist()?JSON.parse(Q.getItem("notes")):Array.apply(null,Array(this.totalNotesLength)).map((function(){}))}}])&&Z(t.prototype,n),o&&Z(t,o),e}();function ee(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}K($,"instance",void 0);var ne=function(){function e(t,n,r,i,a,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),te(this,"object3d",void 0),te(this,"originalPos",void 0),te(this,"material",void 0),te(this,"isClicked",void 0),te(this,"color",void 0),te(this,"enabled",void 0),te(this,"eventID",void 0),te(this,"timeIndex",void 0),te(this,"noteValueDOM",void 0),te(this,"playTween",void 0),te(this,"note",void 0),te(this,"humanModel",void 0),te(this,"track",void 0),te(this,"trackIndex",void 0),te(this,"noteIndex",void 0);var c=new o.MeshPhongMaterial({color:16777215});this.object3d=new o.Mesh(e.GEOMETRY,c),this.object3d.position.x=i,this.originalPos={x:i,y:a},this.object3d.position.y=a,this.object3d.receiveShadow=!0,this.object3d.userData.classObject=this,this.material=c,this.isClicked=!1,this.setTrack(t),this.enabled=!1,this.eventID=null,this.timeIndex=r,this.trackIndex=n,this.noteIndex=le.Instance.xSize*this.trackIndex+this.timeIndex,this.noteValueDOM=s,this.playTween=new X.Tween(this.object3d.position).to({y:this.originalPos.y-1},150).easing(X.Easing.Exponential.Out).chain(new X.Tween(this.object3d.position).to({y:this.originalPos.y},150).easing(X.Easing.Sinusoidal.Out)),this.setNote(e.DEFAULT_NOTE)}var t,n,r;return t=e,(n=[{key:"setNote",value:function(e){this.note=e,this.noteValueDOM.text(e)}},{key:"updateNote",value:function(e,t){var n=e>0?"-2m":"2m";n=Object(U.a)(Object(q.c)(this.note,n)),this.setNote(n),t&&this.oneshot(n),null!==this.eventID&&$.instance.saveNote(this.noteIndex,this.note)}},{key:"clearHoverTween",value:function(){this.object3d.userData.hoverTween&&X.remove(this.object3d.userData.hoverTween)}},{key:"assignHumanModel",value:function(e){this.humanModel=e,e.setColorTween(this.color)}},{key:"getHumanModel",value:function(){return this.humanModel}},{key:"showNoteValue",value:function(){this.noteValueDOM.addClass("show-note")}},{key:"hideNoteValue",value:function(){this.noteValueDOM.removeClass("show-note")}},{key:"onHoverStart",value:function(){if(!this.isClicked){if(this.clearHoverTween(),this.object3d.userData.hoverColor){var e=(o=.2,r=this.object3d.userData.hoverColor,i=Math.round,a=255*r.r,s=255*r.g,c=255*r.b,u=r.a?r.a:null,{r:i(a*(f=(l=o<0)?1+o:1-o)+(h=l?0:255*o))/255,g:i(s*f+h)/255,b:i(c*f+h)/255,a:u}),t=this.object3d,n=t.material;t.userData.hoverTween=new X.Tween(n.color).to({r:e.r,g:e.g,b:e.b},300).easing(X.Easing.Cubic.Out).start()}this.showNoteValue()}var o,r,i,a,s,c,u,l,h,f}},{key:"onHoverEnd",value:function(){if(!this.isClicked){this.clearHoverTween();var e=this.object3d.material;this.object3d.userData.hoverTween=new X.Tween(e.color).to({r:1,g:1,b:1},300).easing(X.Easing.Cubic.Out).start(),this.hideNoteValue()}}},{key:"onClick",value:function(){this.clearHoverTween(),this.isClicked?this.toggleOff():this.toggleOn()}},{key:"onScroll",value:function(e){this.updateNote(e,"started"!==i.Transport.state)}},{key:"toggleOn",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.object3d.material.color.copy(this.object3d.userData.hoverColor),this.object3d.userData.tween=new X.Tween(this.object3d.scale).to({y:[.5,1.5]},300).easing(X.Easing.Back.Out).start(),this.isClicked=!0,this.enabled=!0,this.schedule(),e&&this.oneshot(this.note),this.showNoteValue()}},{key:"toggleOff",value:function(){this.object3d.userData.hoverTween=new X.Tween(this.object3d.material.color).to({r:1,g:1,b:1},300).easing(X.Easing.Cubic.Out).start(),this.object3d.userData.tween=new X.Tween(this.object3d.scale).to({y:1},300).easing(X.Easing.Back.Out).start(),this.isClicked=!1,this.enabled=!1,this.clear(),this.hideNoteValue()}},{key:"oneshot",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"32n";this.hasTrack()&&this.getInstrument().triggerAttackRelease(e,t),this.playTween.stop(),this.playTween.start()}},{key:"scheduleCallback",value:function(e){this.hasTrack()&&this.getInstrument().triggerAttackRelease(this.note,"32n",e),this.playTween.stop(),this.playTween.start(),this.humanModel.flashColor()}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!==e&&(this.note=e),this.clear();var t=this;this.eventID=i.Transport.schedule((function(e){t.scheduleCallback(e)}),"0:0:"+this.timeIndex),$.instance.saveNote(this.noteIndex,this.note)}},{key:"reschedule",value:function(){null!==this.eventID&&(this.clear(),this.schedule())}},{key:"clear",value:function(){null!==this.eventID&&(i.Transport.clear(this.eventID),this.eventID=null,$.instance.saveNote(this.noteIndex,null))}},{key:"getObject3D",value:function(){return this.object3d}},{key:"setTrack",value:function(e){this.track=e,this.color=e.color,this.object3d.userData.hoverColor=e.color}},{key:"hasTrack",value:function(){return null!==this.track}},{key:"getInstrument",value:function(){return this.track.instrument}},{key:"load",value:function(e){this.setNote(e),this.toggleOn(!1)}}])&&ee(t.prototype,n),r&&ee(t,r),e}();function oe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function re(e,t,n){return t&&oe(e.prototype,t),n&&oe(e,n),e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}te(ne,"DEFAULT_NOTE","C3"),te(ne,"GEOMETRY",new o.BoxGeometry(3,.7,2)),ne.GEOMETRY.translate(0,-.35,0);var ae=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ie(this,"notes",[]),ie(this,"_instrument",void 0),ie(this,"_color",void 0),ie(this,"model",void 0),this._instrument=t,this.color=new o.Color(n)}return re(e,[{key:"color",get:function(){return this._color},set:function(e){this._color=e}},{key:"instrument",get:function(){return this._instrument},set:function(e){this._instrument=e}}]),re(e,[{key:"setModel",value:function(e){this.model=e}},{key:"addNoteBlock",value:function(e){this.notes.push(e)}},{key:"getNoteBlock",value:function(e){return this.notes.length>e?this.notes[e]:null}}]),e}();function se(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ue=[13200437,15314983,15546405,2912371,8763285,14406265],le=function(){function e(t,n,o,a,s,c,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ce(this,"instrumentArray",void 0),ce(this,"xSize",void 0),ce(this,"ySize",void 0),ce(this,"xGap",void 0),ce(this,"yGap",void 0),ce(this,"beatsPerMeasure",void 0),ce(this,"length",void 0),ce(this,"tracks",[]),this.xSize=t,this.ySize=n,this.xGap=s,this.yGap=c,this.beatsPerMeasure=u,this.length=t*n,this.instrumentArray=[new i.PolySynth({volume:-6}).toDestination(),new i.MembraneSynth({volume:-6}).toDestination(),new i.MembraneSynth({volume:-6}).toDestination(),new i.MembraneSynth({volume:-6}).toDestination(),new i.MembraneSynth({volume:-6}).toDestination(),new i.MembraneSynth({volume:-6}).toDestination()],e.Instance=this;for(var l=r(".note"),h=0;h<this.ySize;h++){this.tracks.push(new ae(this.instrumentArray[h],ue[h]));for(var f=0;f<this.xSize;f++){var p=h*this.xSize+f;this.tracks[h].addNoteBlock(new ne(this.tracks[h],h,f,o+s*f,a+c*h,l.eq(p)))}}i.Transport.loopEnd="1m",i.Transport.loop=!0}var t,n,a;return t=e,(n=[{key:"get",value:function(e){return this.get2d(e%this.xSize,Math.floor(e/this.xSize))}},{key:"get2d",value:function(e,t){return this.tracks[t].getNoteBlock(e)}},{key:"addToScene",value:function(e,t){console.log(this.tracks);var n=new o.BoxGeometry(.5,1,2);n.translate(0,-.25,0);for(var r=new o.MeshPhongMaterial({color:3355443}),i=0;i<this.ySize;i++)for(var a=0;a<this.xSize;a++){var s=this.get(a+i*this.xSize).getObject3D();if(t.push(s),e.add(s),(a+1)%this.beatsPerMeasure==0){var c=new o.Mesh(n,r);c.receiveShadow=!0,c.position.x=s.position.x+this.xGap/2,c.position.y=s.position.y,c.position.z=s.position.z,e.add(c)}else if(0===a){var u=new o.Mesh(n,r);u.receiveShadow=!0,u.position.x=s.position.x-this.xGap/2,u.position.y=s.position.y,u.position.z=s.position.z,e.add(u)}}}},{key:"play",value:function(){i.Transport.start()}},{key:"pause",value:function(){i.Transport.pause()}},{key:"stop",value:function(){i.Transport.stop()}},{key:"load",value:function(e){var t=this;e.forEach((function(e,n,o){e&&t.get(n).load(e)}))}}])&&se(t.prototype,n),a&&se(t,a),e}();ce(le,"Instance",void 0);var he=function(e){var t={animations:e.animations,scene:e.scene.clone(!0)},n={};e.scene.traverse((function(e){e instanceof o.SkinnedMesh&&(n[e.name]=e)}));var r={},i={};for(var a in t.scene.traverse((function(e){e instanceof o.Bone&&(r[e.name]=e),e instanceof o.SkinnedMesh&&(i[e.name]=e)})),n){for(var s=n[a].skeleton,c=i[a],u=[],l=0;l<s.bones.length;++l){var h=r[s.bones[l].name];u.push(h)}c.bind(new o.Skeleton(u,s.boneInverses),c.matrixWorld)}return t};function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function de(e){return(de=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ve(e,t){return(ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var me=function(e){function t(e){var n,r,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(i=de(t).call(this,e))||"object"!==fe(i)&&"function"!=typeof i?ye(r):i,be(ye(n),"mixer",void 0),be(ye(n),"animations",void 0),be(ye(n),"object3d",void 0),be(ye(n),"material",void 0),be(ye(n),"defaultColor",void 0),be(ye(n),"actions",void 0),be(ye(n),"head",void 0),be(ye(n),"currentActionIndex",void 0),be(ye(n),"shouldPlay",void 0),be(ye(n),"colorTween",void 0),n.object3d=e.scene.children[0],n.animations=e.animations,n.object3d.children[1].castShadow=!0,n.object3d.children[1].material=new o.MeshPhongMaterial({skinning:!0,flatShading:!0}),n.material=n.object3d.children[1].material,n.defaultColor=n.material.color,n.mixer=new o.AnimationMixer(n.object3d),n.actions=[],n.head=n.object3d.getObjectByName("mixamorigHead");for(var a=0;a<n.animations.length;a++)n.actions.push(n.mixer.clipAction(n.animations[a]));return n.actions[1].play(),n.currentActionIndex=0,n.shouldPlay=!1,n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ve(e,t)}(t,e),n=t,(r=[{key:"setColorTween",value:function(e){this.colorTween=new X.Tween(this.material.color).to({r:e.r,g:e.g,b:e.b},100).easing(X.Easing.Cubic.Out).chain(new X.Tween(this.material.color).to({r:this.defaultColor.r,g:this.defaultColor.g,b:this.defaultColor.b},200))}},{key:"updateMixer",value:function(e){this.mixer.update(e)}},{key:"transitionAnimTo",value:function(e){this.actions[e].enabled=!0,this.actions[e].time=0,this.actions[e].setEffectiveTimeScale(1),this.actions[e].setEffectiveWeight(1),this.actions[e].play(),this.actions[this.currentActionIndex].crossFadeTo(this.actions[e],1,!0),this.currentActionIndex=e}},{key:"updateXPos",value:function(e,t,n,o){this.object3d.position.x=e+(t-e)*n}},{key:"flashColor",value:function(){null!==this.colorTween&&(this.colorTween.stop(),this.colorTween.start())}},{key:"getObject3D",value:function(){return this.object3d}}])&&pe(n.prototype,r),i&&pe(n,i),t}((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)})),we=n(16),ge=r(window);function Oe(){var e=document.querySelector("#threejs"),t=new o.WebGLRenderer({canvas:e,antialias:!0});t.setPixelRatio(window.devicePixelRatio),t.shadowMap.enabled=!0,t.shadowMap.type=o.PCFSoftShadowMap;var n=new o.OrthographicCamera(-40,40,22.5,-22.5,1,1e3);n.position.set(-20,25,45),n.lookAt(new o.Vector3(0,15,0));new o.Vector3(0,0,0),new o.Vector3(0,0,0);var r=new o.Scene;r.add(n),window.scene=r,r.background=new o.Color("gray");var a=new o.Clock,s=[],c=[];window.humanModels=s;var u=new Y,l={x:0,y:0},h=new le(16,6,-25,-.25,3.5,6,4);$.instance=new $(h.length),h.load($.instance.loadNotes()),window.trackManager=h;var f=new o.HemisphereLight(11657727,12155424,.5);f.name="HemisphereLight",r.add(f);var p=new o.DirectionalLight(16777215,1);p.shadow.mapSize.width=512,p.shadow.mapSize.height=512,p.position.set(25,50,10),p.castShadow=!0,p.name="DirectionalLight",r.add(p),r.add(p.target),p.shadow.camera.left=-15,p.shadow.camera.right=15,p.shadow.camera.top=50,p.shadow.camera.bottom=-50;var d=new o.AmbientLight(16777215,.1);d.position.set(5,10,2),d.name="AmbientLight",r.add(d);(new we.a).load("models/everything-trimmed.glb",(function(e){for(var t=0;t<6;t++){0!==t&&(e=he(e));var n=new me(e);n.getObject3D().name="Character "+t,s.push(n),c.push(n.getObject3D().children[1]);for(var i=0;i<h.xSize;i++)h.get2d(i,t).assignHumanModel(n)}for(var a=0;a<s.length;a++){var u=s[a];u.transitionAnimTo(a+5);var l=u.getObject3D();l.position.x=-30,l.position.y=6*a-.2,l.rotateZ(-1.5708),r.add(l)}var f=(new o.Box3).setFromObject(s[0].getObject3D());f.getSize(new o.Vector3).length(),f.getCenter(new o.Vector3)})),h.addToScene(r,c);var y=function(t){var n=function(t){var n,o,r=e.getBoundingClientRect();return"clientX"in t.originalEvent?(n=t.originalEvent.clientX,o=t.originalEvent.clientY):"touches"in t.originalEvent&&(n=t.originalEvent.touches[0].pageX,o=t.originalEvent.touches[0].pageY),{x:n-r.left,y:o-r.top}}(t);l.x=n.x/e.clientWidth*2-1,l.y=n.y/e.clientHeight*-2+1},v=function(){l.x=-1e5,l.y=-1e5};ge.on("mousemove",y),ge.on("mouseout",v),ge.on("mouseleave",v),ge.on("click",(function(e){y(e),u.pick(l,c,n),u.execute()})),ge.on("wheel",(function(e){y(e),u.pick(l,c,n),u.scroll(e.originalEvent.deltaY)})),requestAnimationFrame((function e(h){h*=.001;h;var f=a.getDelta();if(function(e){var t=e.domElement,n=t.clientWidth,o=t.clientHeight,r=t.width!==n||t.height!==o;return r&&e.setSize(n,o,!1),r}(t)){var p=t.domElement;n instanceof o.PerspectiveCamera&&(n.aspect=p.clientWidth/p.clientHeight),n.updateProjectionMatrix()}for(var d=i.Transport.progress,y=0;y<s.length;y++)s[y].updateMixer(f),s[y].updateXPos(-30,28,d,f);u.pick(l,c,n),t.render(r,n),requestAnimationFrame(e),X.update()}))}window.THREE=o,window.Tone=i,s.render(a.createElement(R,{xSize:16,ySize:6}),document.getElementById("container"),(function(){Oe();var e=r("#controlButton"),t=document.getElementById("controlButtonSVG"),n=(Snap(t),Snap.select("#playPath")),o=Snap.select("#stopPath"),a=n.node.getAttribute("d"),s=o.node.getAttribute("d");e.on("click",(function(){"started"===i.Transport.state?(n.animate({d:a},300,mina.easeinout),i.Transport.stop()):(n.animate({d:s},300,mina.backout),i.Transport.start())}))}))}});