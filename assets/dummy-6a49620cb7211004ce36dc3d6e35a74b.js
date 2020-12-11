"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define("dummy/app",["exports","ember-resolver","ember-load-initializers","dummy/config/environment"],(function(e,t,n,o){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,o=l(e)
if(t){var r=l(this).constructor
n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments)
return u(this,n)}}function u(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(u,Ember.Application)
var n=a(u)
function u(){var e
r(this,u)
for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l]
return f(c(e=n.call.apply(n,[this].concat(a))),"modulePrefix",o.default.modulePrefix),f(c(e),"podModulePrefix",o.default.podModulePrefix),f(c(e),"Resolver",t.default),e}return u}()
e.default=p,(0,n.default)(p,o.default.modulePrefix)})),define("dummy/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/lottie-animation",["exports","ember-lottie/components/lottie-animation"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/controllers/application",["exports"],(function(e){var t,n,o,r,i,a,u,c,l
function f(e,t,n,o){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(o):void 0})}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,o=v(e)
if(t){var r=v(this).constructor
n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments)
return m(this,n)}}function m(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n,o,r){var i={}
return Object.keys(o).forEach((function(e){i[e]=o[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,o){return o(e,t,n)||n}),i),r&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(r):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g=(t=Ember._tracked,n=Ember._tracked,o=Ember._action,r=Ember._action,i=Ember._action,a=Ember._action,c=h((u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)})(i,Ember.Controller)
var t,n,o,r=d(i)
function i(){var e
p(this,i)
for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o]
return f(b(e=r.call.apply(r,[this].concat(n))),"currentTime",c,b(e)),f(b(e),"totalTime",l,b(e)),e}return t=i,(n=[{key:"animationHandler",value:function(e){var t=this
console.log("animatino handler!"),this.animation=e,this.animation.addEventListener("enterFrame",(function(e){t.totalTime=e.totalTime.toFixed(3),t.currentTime=e.currentTime.toFixed(3)}))}},{key:"play",value:function(){this.animation&&this.animation.play()}},{key:"pause",value:function(){this.animation&&this.animation.pause()}},{key:"rewind",value:function(){this.animation&&this.animation.goToAndPlay(0,!0)}}])&&s(t.prototype,n),o&&s(t,o),i}()).prototype,"currentTime",[t],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),l=h(u.prototype,"totalTime",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),h(u.prototype,"animationHandler",[o],Object.getOwnPropertyDescriptor(u.prototype,"animationHandler"),u.prototype),h(u.prototype,"play",[r],Object.getOwnPropertyDescriptor(u.prototype,"play"),u.prototype),h(u.prototype,"pause",[i],Object.getOwnPropertyDescriptor(u.prototype,"pause"),u.prototype),h(u.prototype,"rewind",[a],Object.getOwnPropertyDescriptor(u.prototype,"rewind"),u.prototype),u)
e.default=g})),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n})),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],(function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var o,r=t.default.exportApplicationGlobal
o="string"==typeof r?r:Ember.String.classify(t.default.modulePrefix),n[o]||(n[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var o={name:"export-application-global",initialize:n}
e.default=o})),define("dummy/router",["exports","dummy/config/environment"],(function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,o=u(e)
if(t){var r=u(this).constructor
n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments)
return i(this,n)}}function i(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(u,Ember.Router)
var i=r(u)
function u(){var e
n(this,u)
for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l]
return c(a(e=i.call.apply(i,[this].concat(r))),"location",t.default.locationType),c(a(e),"rootURL",t.default.rootURL),e}return u}()
e.default=l,l.map((function(){}))})),define("dummy/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"JNU6IO0S",block:'{"symbols":[],"statements":[[10,"div"],[14,0,"demo"],[12],[2,"\\n  "],[8,"lottie-animation",[],[["@class","@path","@width","@height","@autoplay","@loop","@didCreate"],["demo__animation","bodymovin.json",660,100,true,true,[32,0,["animationHandler"]]]],null],[2,"\\n\\n  "],[10,"div"],[14,0,"demo__controls"],[12],[2,"\\n    "],[10,"button"],[15,"onclick",[30,[36,0],[[32,0,["rewind"]]],null]],[14,4,"button"],[12],[2,"\\n      "],[10,"svg"],[14,"xmlns","http://www.w3.org/2000/svg","http://www.w3.org/2000/xmlns/"],[14,"width","24"],[14,"height","24"],[12],[2,"\\n        "],[10,"path"],[14,"d","M13 12l11-7v14l-11-7zm0 7V5L3 12l10 7zM0 18h3V6H0v12z"],[12],[13],[2,"\\n      "],[13],[2,"\\n    "],[13],[2,"\\n    "],[10,"button"],[15,"onclick",[30,[36,0],[[32,0,["play"]]],null]],[14,4,"button"],[12],[2,"\\n      "],[10,"svg"],[14,"xmlns","http://www.w3.org/2000/svg","http://www.w3.org/2000/xmlns/"],[14,"width","24"],[14,"height","24"],[12],[2,"\\n        "],[10,"path"],[14,"d","M3 22v-20l18 10-18 10z"],[12],[13],[2,"\\n      "],[13],[2,"\\n    "],[13],[2,"\\n    "],[10,"button"],[15,"onclick",[30,[36,0],[[32,0,["pause"]]],null]],[14,4,"button"],[12],[2,"\\n      "],[10,"svg"],[14,"xmlns","http://www.w3.org/2000/svg","http://www.w3.org/2000/xmlns/"],[14,"width","24"],[14,"height","24"],[12],[2,"\\n        "],[10,"path"],[14,"d","M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"],[12],[13],[2,"\\n      "],[13],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"div"],[14,0,"demo__progress"],[12],[2,"\\n    Progress: "],[1,[32,0,["currentTime"]]],[2," of "],[1,[32,0,["totalTime"]]],[2,"\\n  "],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["fn"]}',meta:{moduleName:"dummy/templates/application.hbs"}})
e.default=t})),define("dummy/config/environment",[],(function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(o){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("dummy/app").default.create({})
