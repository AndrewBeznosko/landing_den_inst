(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
function pa(){this.m=!1;this.i=null;this.g=void 0;this.f=1;this.j=this.l=0;this.u=this.h=null}
function qa(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
pa.prototype.B=function(a){this.g=a};
function ra(a,b){a.h={Ga:b,sa:!0};a.f=a.l||a.j}
pa.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function w(a,b,c){a.f=c;return{value:b}}
pa.prototype.F=function(a){this.f=a};
function sa(a){a.l=2;a.j=3}
function ta(a){a.l=0;a.h=null}
function ua(a){a.u=[a.h];a.l=0;a.j=0}
function va(a){var b=a.u.splice(0)[0];(b=a.h=a.h||b)?b.sa?a.f=a.l||a.j:void 0!=b.F&&a.j<b.F?(a.f=b.F,a.h=null):a.f=a.j:a.f=0}
function wa(a){this.f=new pa;this.g=a}
function xa(a,b){qa(a.f);var c=a.f.i;if(c)return ya(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return za(a)}
function ya(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.m=!1,e;var f=e.value}catch(g){return a.f.i=null,ra(a.f,g),za(a)}a.f.i=null;d.call(a.f,f);return za(a)}
function za(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.m=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,ra(a.f,c)}a.f.m=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.sa)throw b.Ga;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Aa(a){this.next=function(b){qa(a.f);a.f.i?b=ya(a,a.f.i.next,b,a.f.B):(a.f.B(b),b=za(a));return b};
this["throw"]=function(b){qa(a.f);a.f.i?b=ya(a,a.f.i["throw"],b,a.f.B):(ra(a.f,b),b=za(a));return b};
this["return"]=function(b){return xa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){var c=new Aa(new wa(b));oa&&a.prototype&&oa(c,a.prototype);return c}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ia});
t("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function Ca(a,b){a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
t("Array.prototype.keys",function(a){return a?a:function(){return Ca(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ca(this,function(b,c){return c})}});
function Da(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ea="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Da(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ea});
t("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.C),reject:g(this.j)}};
b.prototype.C=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.H(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.u(g):this.l(g)}};
b.prototype.u=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.I(h,g):this.l(g)};
b.prototype.j=function(g){this.m(2,g)};
b.prototype.l=function(g){this.m(1,g)};
b.prototype.m=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.h=h;this.B()};
b.prototype.B=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.H=function(g){var h=this.i();g.da(h.resolve,h.reject)};
b.prototype.I=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(B){try{l(r(B))}catch(N){m(N)}}:p}
var l,m,q=new b(function(r,p){l=r;m=p});
this.da(k(g,l),k(h,m));return q};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.da=function(g,h){function k(){switch(l.g){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).da(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function q(B){return function(N){r[B]=N;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).da(q(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("Object.setPrototypeOf",function(a){return a||oa});
t("Array.prototype.entries",function(a){return a?a:function(){return Ca(this,function(b,c){return[b,c]})}});
t("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Da(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Da(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&Da(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&Da(k,g)&&Da(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&Da(k,g)&&Da(k[g],this.f)?delete k[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&Da(h.g,l))for(var q=0;q<m.length;q++){var r=m[q];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:m,index:q,A:r}}return{id:l,list:m,index:-1,A:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.A?l.A.value=k:(l.A={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.A),this.f.previous.next=l.A,this.f.previous=l.A,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.A&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.A.previous.next=h.A.next,h.A.next.previous=h.A.previous,h.A.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).A};
e.prototype.get=function(h){return(h=d(this,h).A)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Da(b,d)&&c.push([d,b[d]]);return c}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
var Fa=/^[\w+/_-]+[=]{0,2}$/,Ga=null;function Ha(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Fa.test(a)?a:""}
function A(a,b){for(var c=a.split("."),d=b||y,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ia(){}
function Ja(a){a.la=void 0;a.getInstance=function(){return a.la?a.la:a.la=new a}}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ma(a){return"function"==Ka(a)}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=Sa:C=Ta;return C.apply(null,arguments)}
function Ua(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var D=Date.now;function Va(a,b){z(a,b,void 0)}
function E(a,b){function c(){}
c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.prototype.constructor=a}
function Wa(a){return a}
;function F(a){if(Error.captureStackTrace)Error.captureStackTrace(this,F);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
E(F,Error);F.prototype.name="CustomError";function Xa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.h=!b&&/[?&]ae=1(&|$)/.test(a);this.i=!b&&/[?&]ae=2(&|$)/.test(a);if((this.f=/[?&]adurl=([^&]*)/.exec(a))&&this.f[1]){try{var c=decodeURIComponent(this.f[1])}catch(d){c=null}this.g=c}}
;function Ya(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Za=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},$a=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},ab=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},bb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function cb(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function db(a,b){var c=Za(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function eb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function fb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function gb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function hb(a,b){var c=La(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function ib(a){var b=jb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function kb(a){for(var b in a)return!1;return!0}
function lb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ob(a){var b=Ka(a);if("object"==b||"array"==b){if(Ma(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=ob(a[c]);return b}return a}
var pb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pb.length;f++)c=pb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var rb;function sb(){if(void 0===rb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(c){y.console&&y.console.error(c.message)}rb=a}else rb=a}return rb}
;function tb(a,b){this.f=a===ub&&b||"";this.g=vb}
tb.prototype.M=!0;tb.prototype.L=function(){return this.f};
function wb(a){return a instanceof tb&&a.constructor===tb&&a.g===vb?a.f:"type_error:Const"}
var vb={},ub={};function xb(a,b){this.f=a===yb&&b||"";this.g=zb}
xb.prototype.M=!0;xb.prototype.L=function(){return this.f.toString()};
xb.prototype.ka=!0;xb.prototype.ha=function(){return 1};
function Ab(a){if(a instanceof xb&&a.constructor===xb&&a.g===zb)return a.f;Ka(a);return"type_error:TrustedResourceUrl"}
var zb={};function Bb(a){var b=sb();a=b?b.createScriptURL(a):a;return new xb(yb,a)}
var yb={};var Cb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Db(a,b){if(b)a=a.replace(Eb,"&amp;").replace(Fb,"&lt;").replace(Gb,"&gt;").replace(Hb,"&quot;").replace(Ib,"&#39;").replace(Jb,"&#0;");else{if(!Kb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Eb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Fb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Gb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Hb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ib,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Jb,"&#0;"))}return a}
var Eb=/&/g,Fb=/</g,Gb=/>/g,Hb=/"/g,Ib=/'/g,Jb=/\x00/g,Kb=/[\x00&<>"']/;function H(a,b){this.f=a===Lb&&b||"";this.g=Mb}
H.prototype.M=!0;H.prototype.L=function(){return this.f.toString()};
H.prototype.ka=!0;H.prototype.ha=function(){return 1};
function Nb(a){if(a instanceof H&&a.constructor===H&&a.g===Mb)return a.f;Ka(a);return"type_error:SafeUrl"}
var Ob=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Pb(a){if(a instanceof H)return a;a="object"==typeof a&&a.M?a.L():String(a);Ob.test(a)||(a="about:invalid#zClosurez");return new H(Lb,a)}
var Mb={},Qb=new H(Lb,"about:invalid#zClosurez"),Lb={};var Rb;a:{var Sb=y.navigator;if(Sb){var Tb=Sb.userAgent;if(Tb){Rb=Tb;break a}}Rb=""}function I(a){return-1!=Rb.indexOf(a)}
;function Ub(){this.f="";this.h=Wb;this.g=null}
Ub.prototype.ka=!0;Ub.prototype.ha=function(){return this.g};
Ub.prototype.M=!0;Ub.prototype.L=function(){return this.f.toString()};
var Wb={};function Xb(a,b){var c=new Ub,d=sb();c.f=d?d.createHTML(a):a;c.g=b;return c}
;function Yb(a,b){var c=b instanceof H?b:Pb(b);a.href=Nb(c)}
function Zb(a,b){a.src=Ab(b);var c;(c=a.ownerDocument&&a.ownerDocument.defaultView)&&c!=y?c=Ha(c.document):(null===Ga&&(Ga=Ha(y.document)),c=Ga);c&&a.setAttribute("nonce",c)}
;function $b(a){return a=Db(a,void 0)}
function ac(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var bc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J(a){return a?decodeURI(a):a}
function K(a,b){return b.match(bc)[a]||null}
function cc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)cc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function dc(a){var b=[],c;for(c in a)cc(c,a[c],b);return b.join("&")}
function ec(a,b){var c=dc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var fc=/#|$/;function gc(a,b){var c=a.search(fc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;var hc=I("Opera"),ic=I("Trident")||I("MSIE"),jc=I("Edge"),kc=I("Gecko")&&!(-1!=Rb.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),lc=-1!=Rb.toLowerCase().indexOf("webkit")&&!I("Edge");function mc(){var a=y.document;return a?a.documentMode:void 0}
var nc;a:{var oc="",pc=function(){var a=Rb;if(kc)return/rv:([^\);]+)(\)|;)/.exec(a);if(jc)return/Edge\/([\d\.]+)/.exec(a);if(ic)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(lc)return/WebKit\/(\S+)/.exec(a);if(hc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
pc&&(oc=pc?pc[1]:"");if(ic){var qc=mc();if(null!=qc&&qc>parseFloat(oc)){nc=String(qc);break a}}nc=oc}var rc=nc,sc;if(y.document&&ic){var tc=mc();sc=tc?tc:parseInt(rc,10)||void 0}else sc=void 0;var uc=sc;var vc={},wc=null;var L=window;function xc(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&
a.constructor instanceof Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,yc[b]?b=yc[b]:(b=String(b),yc[b]||(c=/function\s+([^\(]+)/m.exec(b),yc[b]=c?c[1]:"[Anonymous]"),b=yc[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var yc={};function zc(a){this.f=a||{cookie:""}}
n=zc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Cb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ta}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(D()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:
"")};
n.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Cb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ta:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.f.cookie};
n.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Cb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ac=new zc("undefined"==typeof document?null:document);var Bc=!ic||9<=Number(uc);function Cc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=Cc.prototype;n.clone=function(){return new Cc(this.x,this.y)};
n.equals=function(a){return a instanceof Cc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Dc(a,b){this.width=a;this.height=b}
n=Dc.prototype;n.clone=function(){return new Dc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ec(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Fc(a,b){gb(b,function(c,d){c&&"object"==typeof c&&c.M&&(c=c.L());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Gc.hasOwnProperty(d)?a.setAttribute(Gc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Gc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Hc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Bc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',$b(g.name),'"');if(g.type){f.push(' type="',$b(g.type),'"');var h={};qb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Ic(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Fc(f,g));2<d.length&&Jc(e,f,d);return f}
function Jc(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!La(f)||Oa(f)&&0<f.nodeType?d(f):G(Kc(f)?eb(f):f,d)}}
function Ic(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Kc(a){if(a&&"number"==typeof a.length){if(Oa(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ma(a))return"function"==typeof a.item}return!1}
function Lc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Mc(a){Nc();return Bb(a)}
var Nc=Ia;function Oc(a){var b=Pc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Qc(){var a=[];Oc(function(b){a.push(b)});
return a}
var Pc={jb:"allow-forms",kb:"allow-modals",lb:"allow-orientation-lock",mb:"allow-pointer-lock",nb:"allow-popups",ob:"allow-popups-to-escape-sandbox",pb:"allow-presentation",qb:"allow-same-origin",rb:"allow-scripts",sb:"allow-top-navigation",tb:"allow-top-navigation-by-user-activation"},Rc=Ya(function(){return Qc()});
function Sc(){var a=Ic(document,"IFRAME"),b={};G(Rc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function M(){this.g=this.g;this.B=this.B}
M.prototype.g=!1;M.prototype.dispose=function(){this.g||(this.g=!0,this.o())};
function Tc(a,b){a.g?b():(a.B||(a.B=[]),a.B.push(b))}
M.prototype.o=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function Uc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Vc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];La(d)?Vc.apply(null,d):Uc(d)}}
;function O(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Wc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;Bb(wb(new tb(ub,"//fonts.googleapis.com/css")));var Xc=(new Date).getTime();function Yc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";
var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Zc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(q){for(var r=g,p=0;64>p;p+=4)r[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(q<<1|q>>>31)&4294967295;q=e[0];var B=e[1],N=e[2],na=e[3],jd=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var Na=na^B&(N^na);var Vb=1518500249}else Na=B^N^na,Vb=1859775393;else 60>p?(Na=B&N|na&(B|N),Vb=2400959708):(Na=B^N^na,Vb=3395469782);Na=((q<<5|q>>>27)&4294967295)+Na+jd+Vb+r[p]&4294967295;jd=na;na=N;N=(B<<30|B>>>2)&4294967295;B=q;q=Na}e[0]=e[0]+q&4294967295;e[1]=
e[1]+B&4294967295;e[2]=e[2]+N&4294967295;e[3]=e[3]+na&4294967295;e[4]=e[4]+jd&4294967295}
function c(q,r){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],B=0,N=q.length;B<N;++B)p.push(q.charCodeAt(B));q=p}r||(r=q.length);p=0;if(0==l)for(;p+64<r;)b(q.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=q[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(q.slice(p,p+64)),p+=64,m+=64}
function d(){var q=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var B=24;0<=B;B-=8)q[r++]=e[p]>>B&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Fa:function(){for(var q=d(),r="",p=0;p<q.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return r}}}
;function $c(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],G(d,function(h){e.push(h)}),ad(e.join(" "));
var f=[],g=[];G(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(h){e.push(h)});
a=ad(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ad(a){var b=Zc();b.update(a);return b.Fa().toLowerCase()}
;function bd(a){var b=Yc(String(y.location.href)),c;(c=y.__SAPISID||y.__APISID||y.__OVERRIDE_SID)?c=!0:(c=new zc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?y.__SAPISID:y.__APISID,c||(c=new zc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(y.location.href);return d&&c&&b?[b,$c(Yc(d),c,a||null)].join(" "):null}return null}
;function cd(){this.g=[];this.f=-1}
cd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
cd.prototype.get=function(a){return!!this.g[a]};
function dd(a){-1==a.f&&(a.f=bb(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function ed(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
ed.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function fd(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function gd(a){y.setTimeout(function(){throw a;},0)}
var hd;
function id(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=Ic(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ra;c.ra=null;e()}};
return function(e){d.next={ra:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function kd(){this.g=this.f=null}
var md=new ed(function(){return new ld},function(a){a.reset()});
kd.prototype.add=function(a,b){var c=md.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
kd.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function ld(){this.next=this.scope=this.f=null}
ld.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
ld.prototype.reset=function(){this.next=this.scope=this.f=null};function nd(a,b){od||pd();qd||(od(),qd=!0);rd.add(a,b)}
var od;function pd(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);od=function(){a.then(sd)}}else od=function(){var b=sd;
!Ma(y.setImmediate)||y.Window&&y.Window.prototype&&!I("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(hd||(hd=id()),hd(b)):y.setImmediate(b)}}
var qd=!1,rd=new kd;function sd(){for(var a;a=rd.remove();){try{a.f.call(a.scope)}catch(b){gd(b)}fd(md,a)}qd=!1}
;function td(){this.g=-1}
;function ud(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
E(ud,td);ud.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function vd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
ud.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)vd(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){vd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){vd(this,e);f=0;break}}this.h=f;this.j+=b}};
ud.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;vd(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function wd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function xd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function yd(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:wd(a).match(/\S+/g)||[],c=0<=Za(c,b);return c}
function zd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):yd(a,"inverted-hdpi")&&xd(a,$a(a.classList?a.classList:wd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Ad="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function Bd(){}
Bd.prototype.next=function(){throw Ad;};
Bd.prototype.J=function(){return this};
function Cd(a){if(a instanceof Bd)return a;if("function"==typeof a.J)return a.J(!1);if(La(a)){var b=0,c=new Bd;c.next=function(){for(;;){if(b>=a.length)throw Ad;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Dd(a,b){if(La(a))try{G(a,b,void 0)}catch(c){if(c!==Ad)throw c;}else{a=Cd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Ad)throw c;}}}
function Ed(a){if(La(a))return eb(a);a=Cd(a);var b=[];Dd(a,function(c){b.push(c)});
return b}
;function Fd(a,b){this.h={};this.f=[];this.K=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Fd)for(c=Gd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Gd(a){Hd(a);return a.f.concat()}
n=Fd.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Id;Hd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Id(a,b){return a===b}
n.isEmpty=function(){return 0==this.g};
n.clear=function(){this.h={};this.K=this.g=this.f.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.K++,this.f.length>2*this.g&&Hd(this),!0):!1};
function Hd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.K++);this.h[a]=b};
n.forEach=function(a,b){for(var c=Gd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new Fd(this)};
n.J=function(a){Hd(this);var b=0,c=this.K,d=this,e=new Bd;e.next=function(){if(c!=d.K)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Ad;var f=d.f[b++];return a?f:d.h[f]};
return e};function Jd(a){var b=[];Kd(new Ld,a,b);return b.join("")}
function Ld(){}
function Kd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Kd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Md(d,c),c.push(":"),Kd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Md(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Nd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Od=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Md(a,b){b.push('"',a.replace(Od,function(c){var d=Nd[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Nd[c]=d);return d}),'"')}
;function Pd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function P(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=Ia)try{var b=this;a.call(void 0,function(c){Qd(b,2,c)},function(c){Qd(b,3,c)})}catch(c){Qd(this,3,c)}}
function Rd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Rd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Sd=new ed(function(){return new Rd},function(a){a.reset()});
function Td(a,b,c){var d=Sd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Ud(){var a=Vd;if(a instanceof P)return a;var b=new P(Ia);Qd(b,2,a);return b}
function Wd(a){return new P(function(b,c){c(a)})}
P.prototype.then=function(a,b,c){return Xd(this,Ma(a)?a:null,Ma(b)?b:null,c)};
P.prototype.$goog_Thenable=!0;function Yd(a,b){return Xd(a,null,b,void 0)}
P.prototype.cancel=function(a){if(0==this.f){var b=new Zd(a);nd(function(){$d(this,b)},this)}};
function $d(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?$d(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):ae(c),be(c,e,3,b)))}a.h=null}else Qd(a,3,b)}
function ce(a,b){a.g||2!=a.f&&3!=a.f||de(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Xd(a,b,c,d){var e=Td(null,null,null);e.f=new P(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Zd?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;ce(a,e);return e.f}
P.prototype.u=function(a){this.f=0;Qd(this,2,a)};
P.prototype.C=function(a){this.f=0;Qd(this,3,a)};
function Qd(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.u,f=a.C;if(d instanceof P){ce(d,Td(e||Ia,f||null,a));var g=!0}else if(Pd(d))d.then(e,f,a),g=!0;else{if(Oa(d))try{var h=d.then;if(Ma(h)){ee(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.m=c,a.f=b,a.h=null,de(a),3!=b||c instanceof Zd||fe(a,c))}}
function ee(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function de(a){a.l||(a.l=!0,nd(a.B,a))}
function ae(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
P.prototype.B=function(){for(var a;a=ae(this);)be(this,a,this.f,this.m);this.l=!1};
function be(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,ge(b,c,d);else try{b.h?b.g.call(b.context):ge(b,c,d)}catch(e){he.call(null,e)}fd(Sd,b)}
function ge(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function fe(a,b){a.j=!0;nd(function(){a.j&&he.call(null,b)})}
var he=gd;function Zd(a){F.call(this,a)}
E(Zd,F);Zd.prototype.name="cancel";function Q(a){M.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.m=!!a}
E(Q,M);n=Q.prototype;n.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function ie(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=cb(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.R(b)}}
n.R=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=Ia):(c&&db(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
n.P=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];je(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.R(c)}}return 0!=e}return!1};
function je(a,b,c){nd(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.h[a];b&&(G(b,this.R,this),delete this.h[a])}else this.f.length=0,this.h={}};
n.o=function(){Q.O.o.call(this);this.clear();this.i.length=0};function ke(a){this.f=a}
ke.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Jd(b))};
ke.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ke.prototype.remove=function(a){this.f.remove(a)};function le(a){this.f=a}
E(le,ke);function me(a){this.data=a}
function ne(a){return void 0===a||a instanceof me?a:new me(a)}
le.prototype.set=function(a,b){le.O.set.call(this,a,ne(b))};
le.prototype.g=function(a){a=le.O.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
le.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function oe(a){this.f=a}
E(oe,le);oe.prototype.set=function(a,b,c){if(b=ne(b)){if(c){if(c<D()){oe.prototype.remove.call(this,a);return}b.expiration=c}b.creation=D()}oe.O.set.call(this,a,b)};
oe.prototype.g=function(a){var b=oe.O.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<D()||c&&c>D())oe.prototype.remove.call(this,a);else return b}};function pe(){}
;function qe(){}
E(qe,pe);qe.prototype.clear=function(){var a=Ed(this.J(!0)),b=this;G(a,function(c){b.remove(c)})};function re(a){this.f=a}
E(re,qe);n=re.prototype;n.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeItem(a)};
n.J=function(a){var b=0,c=this.f,d=new Bd;d.next=function(){if(b>=c.length)throw Ad;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.f.clear()};
n.key=function(a){return this.f.key(a)};function se(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
E(se,re);function te(a,b){this.g=a;this.f=null;if(ic&&!(9<=Number(uc))){ue||(ue=new Fd);this.f=ue.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),ue.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
E(te,qe);var ve={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ue=null;function we(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ve[b]})}
n=te.prototype;n.isAvailable=function(){return!!this.f};
n.set=function(a,b){this.f.setAttribute(we(a),b);xe(this)};
n.get=function(a){a=this.f.getAttribute(we(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeAttribute(we(a));xe(this)};
n.J=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Bd;d.next=function(){if(b>=c.length)throw Ad;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);xe(this)};
function xe(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ye(a,b){this.g=a;this.f=b+"::"}
E(ye,qe);ye.prototype.set=function(a,b){this.g.set(this.f+a,b)};
ye.prototype.get=function(a){return this.g.get(this.f+a)};
ye.prototype.remove=function(a){this.g.remove(this.f+a)};
ye.prototype.J=function(a){var b=this.g.J(!0),c=this,d=new Bd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function ze(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Ae=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",Ae,void 0);function R(a){ze(Ae,arguments)}
function S(a,b){return a in Ae?Ae[a]:b}
function Be(){return S("PLAYER_CONFIG",{})}
function Ce(a){var b=Ae.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;function De(){var a=Ee;A("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function Fe(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var Ge=[];function He(a){Ge.forEach(function(b){return b(a)})}
function Ie(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){T(b),He(b)}}:a}
function T(a){var b=A("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),R("ERRORS",b))}
function Je(a){var b=A("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),R("ERRORS",b))}
;function Ke(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?fb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};T(h)}}}return b}
function Le(a){var b=[];gb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Me(a){"?"==a.charAt(0)&&(a=a.substr(1));return Ke(a)}
function Ne(a,b){return Oe(a,b||{},!0)}
function Oe(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Me(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return ec(a,e)+d}
;function Pe(a){var b=Qe;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Re(b),Se(b));b.ca_type="image";a&&(b.bid=a);return b}
function Re(a){var b={};b.dt=Xc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?L:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(b.u_h=L.screen.height,b.u_w=L.screen.width,b.u_ah=L.screen.availHeight,b.u_aw=L.screen.availWidth,b.u_cd=L.screen.colorDepth);
L.navigator&&L.navigator.plugins&&(b.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(b.u_nmime=L.navigator.mimeTypes.length);return b}
function Se(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(q){}try{var e=b.outerWidth;var f=b.outerHeight}catch(q){}try{var g=b.innerWidth;var h=b.innerHeight}catch(q){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new Dc(l.clientWidth,l.clientHeight)).round()}catch(q){m=new Dc(-12245933,-12245933)}k=m;m={};l=new cd;y.SVGElement&&
y.document.createElementNS&&l.set(0);c=Sc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);y.crypto&&y.crypto.subtle&&l.set(3);y.TextDecoder&&y.TextEncoder&&l.set(4);l=dd(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!L.WebGLRenderingContext,m}
var Qe=new function(){var a=window.document;this.f=window;this.g=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return Le(Pe(a))},void 0);D();function U(a){a=Te(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Ue(a,b){var c=Te(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Te(a){var b=S("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:S("EXPERIMENT_FLAGS",{})[a]}
;var Ve="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function We(){if(!Ve)return null;var a=Ve();return"open"in a?a:null}
function Xe(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function V(a,b){Ma(a)&&(a=Ie(a));return window.setTimeout(a,b)}
function Ye(a){window.clearTimeout(a)}
;var Ze={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},$e="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
af=!1;
function bf(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=K(1,a),e=J(K(3,a));d&&e?(d=c,c=a.match(bc),d=d.match(bc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?J(K(3,c))==e&&(Number(K(4,c))||null)==(Number(K(4,a))||null):!0;d=U("web_ajax_ignore_global_headers_if_set");for(var f in Ze)e=S(Ze[f]),!e||!c&&!cf(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||cf(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||cf(a,"X-YouTube-Time-Zone"))&&(f="undefined"!=typeof Intl?
(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||cf(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=Le(Pe(void 0));return b}
function df(a){var b=window.location.search,c=J(K(3,a)),d=J(K(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Me(b),f={};G($e,function(g){e[g]&&(f[g]=e[g])});
return Oe(a,f||{},!1)}
function cf(a,b){var c=S("CORS_HEADER_WHITELIST")||{},d=J(K(3,a));return d?(c=c[d])?0<=Za(c,b):!1:!0}
function ef(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=ff(a,b);var d=gf(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Ye(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||y;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.ma&&b.ma.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.ya&&0<b.timeout&&(f=V(function(){e||(e=!0,Ye(f),b.ya.call(b.context||y))},b.timeout))}else hf(a,b)}
function hf(a,b){var c=b.format||"JSON";a=ff(a,b);var d=gf(a,b),e=!1,f=jf(a,function(k){if(!e){e=!0;h&&Ye(h);var l=Xe(k),m=null,q=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||q||r)m=kf(a,c,k,b.xb);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};q=b.context||y;l?b.onSuccess&&b.onSuccess.call(q,k,m):b.onError&&b.onError.call(q,k,m);b.ma&&b.ma.call(q,k,m)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
if(b.S&&0<b.timeout){var g=b.S;var h=V(function(){e||(e=!0,f.abort(),Ye(h),g.call(b.context||y,f))},b.timeout)}return f}
function ff(a,b){b.Ab&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME",void 0),d=b.ib;d&&(d[c]&&delete d[c],a=Ne(a,d));return a}
function gf(a,b){var c=S("XSRF_FIELD_NAME",void 0),d=S("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.D,g=S("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.zb||J(K(3,a))&&!b.withCredentials&&J(K(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.D&&b.D[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Me(e),qb(e,f),e=b.za&&"JSON"==b.za?JSON.stringify(e):dc(e));f=e||f&&!kb(f);!af&&f&&"POST"!=b.method&&(af=!0,T(Error("AJAX request with postData should use POST")));
return e}
function kf(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Je(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?lf(a):null)e={},G(a.getElementsByTagName("*"),function(g){e[g.tagName]=mf(g)})}d&&nf(e);
return e}
function nf(a){if(Oa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=new tb(ub,"HTML that is escaped and sanitized server-side and passed through yt.net.ajax");wb(e);wb(e);d=Xb(d,null);a[c]=d}else nf(a[b])}}
function lf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function mf(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function jf(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Ie(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=We();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;U("debug_forward_web_query_parameters")&&(a=df(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=bf(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var of={},pf=0;
function qf(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Rb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof H||(a="object"==typeof a&&a.M?a.L():String(a),a=Ob.test(a)?new H(Lb,a):null),b=Nb(a||Qb),"about:invalid#zClosurez"===b?a="":(b instanceof Ub?a=b:(d="object"==typeof b,a=null,d&&b.ka&&(a=b.ha()),b=Db(d&&b.M?b.L():String(b)),a=Xb(b,a)),a instanceof Ub&&a.constructor===Ub&&a.h===Wb?a=a.f:(Ka(a),a="type_error:SafeHtml"),a=encodeURIComponent(String(Jd(a.toString())))),/^[\s\xa0]*$/.test(a)||(a=
Hc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?jf(a,b,"POST",e,d):S("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?jf(a,b,"GET","",d):rf(a,b)||sf(a,b))}
function rf(a,b){if(!Ce("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(Ce("use_sonic_js_library_for_v4_support")){a:{try{var c=new Xa({url:a});if(c.h&&c.g||c.i){var d=J(K(5,a));var e=!(!d||!d.endsWith("/aclk")||"1"!==gc(a,"ri"));break a}}catch(f){}e=!1}if(!e)return!1}else if(e=J(K(5,a)),!e||-1==e.indexOf("/aclk")||"1"!==gc(a,"ae")||"1"!==gc(a,"act"))return!1;return tf(a)?(b&&b(),!0):!1}
function tf(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function sf(a,b){var c=new Image,d=""+pf++;of[d]=c;c.onload=c.onerror=function(){b&&of[d]&&b();delete of[d]};
c.src=a}
;var uf=0;z("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++uf},void 0);var vf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function wf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in vf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function xf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
wf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
wf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
wf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var jb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",jb,void 0);var yf=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",yf,void 0);
function zf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ib(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Af=Ya(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Bf(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=zf(a,b,c,d);if(e)return e;e=++yf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new wf(h);if(!Lc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new wf(h);
h.currentTarget=a;return c.call(a,h)};
g=Ie(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Af()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);jb[e]=[a,b,c,g,d];return e}
function Cf(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in jb){var c=jb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Af()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete jb[b]}}))}
;var Df=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Ef(a){this.u=a;this.f=null;this.j=0;this.m=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.H=Bf(window,"mousemove",C(this.I,this));a=C(this.C,this);Ma(a)&&(a=Ie(a));this.N=window.setInterval(a,25)}
E(Ef,M);Ef.prototype.I=function(a){void 0===a.f&&xf(a);var b=a.f;void 0===a.g&&xf(a);this.f=new Cc(b,a.g)};
Ef.prototype.C=function(){if(this.f){var a=Df();if(0!=this.j){var b=this.m,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.u();this.l=d}this.j=a;this.m=this.f;this.i=(this.i+1)%4}};
Ef.prototype.o=function(){window.clearInterval(this.N);Cf(this.H)};function Ff(){}
function Gf(a,b){return Hf(a,0,b)}
function If(a,b){return Hf(a,1,b)}
;function Jf(){}
v(Jf,Ff);function Hf(a,b,c){isNaN(c)&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):V(a,c||0)}
function Kf(a){if(!isNaN(a)){var b=A("yt.scheduler.instance.cancelJob");b?b(a):Ye(a)}}
Jf.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
Jf.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};
Ja(Jf);Jf.getInstance();var Lf={};
function Mf(a){var b=void 0===a?{}:a;a=void 0===b.La?!0:b.La;b=void 0===b.Wa?!1:b.Wa;if(null==A("_lact",window)){var c=parseInt(S("LACT"),10);c=isFinite(c)?D()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&Nf();Bf(document,"keydown",Nf);Bf(document,"keyup",Nf);Bf(document,"mousedown",Nf);Bf(document,"mouseup",Nf);a&&(b?Bf(window,"touchmove",function(){Of("touchmove",200)},{passive:!0}):(Bf(window,"resize",function(){Of("resize",200)}),Bf(window,"scroll",function(){Of("scroll",200)})));
new Ef(function(){Of("mouse",100)});
Bf(document,"touchstart",Nf,{passive:!0});Bf(document,"touchend",Nf,{passive:!0})}}
function Of(a,b){Lf[a]||(Lf[a]=!0,If(function(){Nf();Lf[a]=!1},b))}
function Nf(){null==A("_lact",window)&&Mf();var a=D();z("_lact",a,window);-1==A("_fact",window)&&z("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function Pf(){var a=A("_lact",window),b;null==a?b=-1:b=Math.max(D()-a,0);return b}
;var Qf=y.ytPubsubPubsubInstance||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.R;Q.prototype.publish=Q.prototype.P;Q.prototype.clear=Q.prototype.clear;z("ytPubsubPubsubInstance",Qf,void 0);var Rf=y.ytPubsubPubsubSubscribedKeys||{};z("ytPubsubPubsubSubscribedKeys",Rf,void 0);var Sf=y.ytPubsubPubsubTopicToKeys||{};z("ytPubsubPubsubTopicToKeys",Sf,void 0);var Tf=y.ytPubsubPubsubIsSynchronous||{};z("ytPubsubPubsubIsSynchronous",Tf,void 0);
function Uf(a,b){var c=Vf();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Rf[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Tf[a]?f():V(f,0)}catch(g){T(g)}},void 0);
Rf[d]=!0;Sf[a]||(Sf[a]=[]);Sf[a].push(d);return d}return 0}
function Wf(a){var b=Vf();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),G(a,function(c){b.unsubscribeByKey(c);delete Rf[c]}))}
function Xf(a,b){var c=Vf();c&&c.publish.apply(c,arguments)}
function Yf(a){var b=Vf();if(b)if(b.clear(a),a)Zf(a);else for(var c in Sf)Zf(c)}
function Vf(){return y.ytPubsubPubsubInstance}
function Zf(a){Sf[a]&&(a=Sf[a],G(a,function(b){Rf[b]&&delete Rf[b]}),a.length=0)}
;var $f=window,W=$f.ytcsi&&$f.ytcsi.now?$f.ytcsi.now:$f.performance&&$f.performance.timing&&$f.performance.now&&$f.performance.timing.navigationStart?function(){return $f.performance.timing.navigationStart+$f.performance.now()}:function(){return(new Date).getTime()};var ag=Ue("initial_gel_batch_timeout",1E3),bg=Math.pow(2,16)-1,cg=null,dg=0,eg=void 0,fg=0,gg=0,hg=0,ig=!0,jg=y.ytLoggingTransportLogPayloadsQueue_||{};z("ytLoggingTransportLogPayloadsQueue_",jg,void 0);var kg=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",kg,void 0);var lg=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",lg,void 0);
function mg(){Ye(fg);Ye(gg);gg=0;eg&&eg.isReady()?(ng(kg),"log_event"in jg&&ng(Object.entries(jg.log_event)),kg.clear(),delete jg.log_event):og()}
function og(){U("web_gel_timeout_cap")&&!gg&&(gg=V(mg,6E4));Ye(fg);var a=S("LOGGING_BATCH_TIMEOUT",Ue("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&ig&&(a=ag);fg=V(mg,a)}
function ng(a){var b=eg,c=Math.round(W());a=u(a);for(var d=a.next();!d.done;d=a.next()){var e=u(d.value);d=e.next().value;var f=e.next().value;e=ob({context:pg(b.f||qg())});e.events=f;(f=lg[d])&&rg(e,d,f);delete lg[d];sg(e,c);tg(b,"log_event",e,{retry:!0,onSuccess:function(){dg=Math.round(W()-c)}});
ig=!1}}
function sg(a,b){a.requestTimeMs=String(b);U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=S("EVENT_ID",void 0);if(c){var d=S("BATCH_CLIENT_COUNTER",void 0)||0;!d&&U("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*bg/2));d++;d>bg&&(d=1);R("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;cg&&dg&&U("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:cg,roundtripMs:String(dg)});cg=c;dg=0}}
function rg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var ug=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",ug,void 0);
function vg(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||W());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:Pf())};U("log_sequence_info_on_gel_web")&&d.T&&(a=e.context,b=d.T,ug[b]=b in ug?ug[b]+1:0,a.sequence={index:ug[b],groupKey:b},d.yb&&delete ug[d.T]);d=d.ga;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),lg[d.token]=a,a=d.token);d=kg.get(a)||[];kg.set(a,d);d.push(e);c&&(eg=new c);c=Ue("web_logging_max_batch")||100;e=
W();d.length>=c?mg():10<=e-hg&&(og(),hg=e)}
;function wg(){for(var a={},b=u(Object.entries(Me(S("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function xg(){return"INNERTUBE_API_KEY"in Ae&&"INNERTUBE_API_VERSION"in Ae}
function qg(){return{innertubeApiKey:S("INNERTUBE_API_KEY",void 0),innertubeApiVersion:S("INNERTUBE_API_VERSION",void 0),Ma:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Na:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Pa:S("INNERTUBE_CONTEXT_HL",void 0),Oa:S("INNERTUBE_CONTEXT_GL",void 0),Qa:S("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ra:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function pg(a){a={client:{hl:a.Pa,gl:a.Oa,clientName:a.Na,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ma}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=S("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=S("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=S("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
S("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(a.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,wg());return a}
function yg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.vb||S("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().ub:b=bd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=S("SESSION_INDEX",0),U("pageid_as_header_web")&&(d["X-Goog-PageId"]=S("DELEGATED_SESSION_ID")));return d}
function zg(a){a=Object.assign({},a);delete a.Authorization;var b=bd();if(b){var c=new ud;c.update(S("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;La(b);void 0===c&&(c=0);if(!wc){wc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));vc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===wc[k]&&(wc[k]=h)}}}c=vc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Ag(a,b,c,d){Ac.set(""+a,b,{ta:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function Bg(){var a=new se;(a=a.isAvailable()?new ye(a,"yt.innertube"):null)||(a=new te("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new oe(a):null;this.g=document.domain||window.location.hostname}
Bg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,D()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Jd(b))}catch(f){return}else e=escape(b);Ag(a,e,c,this.g)};
Bg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Ac.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Bg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;Ac.remove(""+a,"/",void 0===b?"youtube.com":b)};var Cg=new Bg;function Dg(a,b,c,d){if(d)return null;d=Cg.get("nextId",!0)||1;var e=Cg.get("requests",!0)||{};e[d]={method:a,request:b,authState:zg(c),requestTime:Math.round(W())};Cg.set("nextId",d+1,86400,!0);Cg.set("requests",e,86400,!0);return d}
function Eg(a){var b=Cg.get("requests",!0)||{};delete b[a];Cg.set("requests",b,86400,!0)}
function Fg(a){var b=Cg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState,f=zg(yg(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),tg(a,d.method,e,{}));delete b[c]}}Cg.set("requests",b,86400,!0)}}
;function Gg(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);Object.setPrototypeOf(this,Gg.prototype)}
v(Gg,Error);function X(a){return new P(function(b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){a.removeEventListener("success",e);a.removeEventListener("error",d)}
a.addEventListener("success",e);a.addEventListener("error",d)})}
;function Hg(a){this.f=a}
n=Hg.prototype;n.add=function(a,b,c){return this.G([a],"readwrite").f(a).add(b,c)};
n.clear=function(a){return this.G([a],"readwrite").f(a).clear()};
n.close=function(){this.f.close()};
n.count=function(a,b){return this.G([a]).f(a).count(b)};
n.wa=function(a,b){var c=this.f.createObjectStore(a,b);return new Ig(c)};
n["delete"]=function(a,b){return this.G([a],"readwrite").f(a)["delete"](b)};
n.get=function(a,b){return this.G([a]).f(a).get(b)};
n.getName=function(){return this.f.name};
n.G=function(a,b){var c=this.f.transaction(a,b);return new Jg(c)};
function Ig(a){this.f=a}
n=Ig.prototype;n.add=function(a,b){return X(this.f.add(a,b))};
n.clear=function(){return X(this.f.clear()).then(function(){})};
n.count=function(a){return X(this.f.count(a))};
n["delete"]=function(a){return X(this.f["delete"](a))};
n.get=function(a){return X(this.f.get(a))};
n.index=function(a){return new Kg(this.f.index(a))};
n.getName=function(){return this.f.name};
function Jg(a){var b=this;this.g=a;this.h=new Map;this.done=new P(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(){d(b.g.error)});
b.g.addEventListener("abort",function(){d(new Gg)})})}
Jg.prototype.abort=function(){this.g.abort();return this.done};
Jg.prototype.f=function(a){a=this.g.objectStore(a);var b=this.h.get(a);b||(b=new Ig(a),this.h.set(a,b));return b};
function Kg(a){this.f=a}
Kg.prototype.count=function(a){return X(this.f.count(a))};
Kg.prototype.get=function(a){return X(this.f.get(a))};
Kg.prototype.g=function(a,b){var c=this.f.openCursor(a,b);return Lg(c)};
function Mg(a,b){this.request=a;this.f=b}
function Lg(a){return X(a).then(function(b){return null===b?null:new Mg(a,b)})}
Mg.prototype["delete"]=function(){return X(this.f["delete"]()).then(function(){})};
Mg.prototype.getValue=function(){return this.f.value};
Mg.prototype.update=function(a){return X(this.f.update(a))};function Ng(){Hg.apply(this,arguments)}
v(Ng,Hg);Ng.prototype.wa=function(a,b){var c=this.f.createObjectStore(a,b);return new Og(c)};
Ng.prototype.G=function(a,b){var c=this.f.transaction(a,b);return new Pg(c)};
function Og(){Ig.apply(this,arguments)}
v(Og,Ig);Og.prototype.index=function(a){return new Qg(this.f.index(a))};
function Pg(){Jg.apply(this,arguments);this.i=new Map}
v(Pg,Jg);Pg.prototype.f=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new Og(a),this.i.set(a,b));return b};
function Qg(){Kg.apply(this,arguments)}
v(Qg,Kg);Qg.prototype.g=function(a,b){var c=this.f.openCursor(a,b);return Rg(c)};
function Sg(){Mg.apply(this,arguments)}
v(Sg,Mg);function Rg(a){return X(a).then(function(b){return null===b?null:new Sg(a,b)})}
;function Tg(a,b,c,d,e){function f(){q||(q=new d(g.result));return q}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.f,k=c.blocking,l=c.g,m=c.upgrade,q;m&&g.addEventListener("upgradeneeded",function(r){if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var p=f(),B=new e(g.transaction);m(p,r.oldVersion,r.newVersion,B)});
h&&g.addEventListener("blocked",function(){h()});
return X(g).then(function(r){k&&r.addEventListener("versionchange",function(){k()});
l&&r.addEventListener("close",function(){l()});
return f()})}
function Ug(a){a=void 0===a?{}:a;return Tg("LogsDataBase",1,a,Hg,Jg)}
function Vg(a,b){b=void 0===b?{}:b;return Tg("yt-idb-test-do-not-use",a,b,Ng,Pg)}
;var Vd,Wg=["getAll","getAllKeys","getKey","openKeyCursor"],Xg=["getAll","getAllKeys","getKey","openKeyCursor"];
function Yg(){return O(this,function b(){var c,d,e,f,g,h,k,l;return x(b,function(m){switch(m.f){case 1:if(!self.indexedDB)return m["return"](!1);c=u(Wg);for(d=c.next();!d.done;d=c.next())if(e=d.value,!IDBObjectStore.prototype[e])return m["return"](!1);f=u(Xg);for(d=f.next();!d.done;d=f.next())if(g=d.value,!IDBIndex.prototype[g])return m["return"](!1);if(!IDBObjectStore.prototype.getKey)return m["return"](!1);sa(m);l=!1;return w(m,Vg(void 0,{blocking:function(){l=!0;h&&(h.close(),h=void 0)}}),5);
case 5:return h=m.g,w(m,Vg(h.f.version+1),6);case 6:return k=m.g,k.close(),k=void 0,m["return"](l);case 3:ua(m);if(h)try{h.close()}catch(q){}if(k)try{k.close()}catch(q){}va(m);break;case 2:return ta(m),m["return"](!1)}})})}
function Zg(){return void 0!==Vd?Ud():new P(function(a){Yg().then(function(b){Vd=b;a(b)})})}
;var $g;function ah(){return O(this,function b(){return x(b,function(c){if(!$g)try{$g=Ug({upgrade:function(d,e){1>e&&d.wa("LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","timestamp"],{unique:!1})}})}catch(d){"VersionError"===d&&T(d),$g=Ug()}return c["return"]($g)})})}
function bh(a){return O(this,function c(){var d,e,f,g;return x(c,function(h){if(1==h.f)return w(h,ah(),2);if(3!=h.f)return d=h.g,e=d.G(["LogsRequestsStore"],"readwrite").f("LogsRequestsStore"),f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options))}),w(h,e.add(f),3);g=h.g;return h["return"](g)})})}
function ch(){return O(this,function b(){var c,d,e,f,g,h,k;return x(b,function(l){switch(l.f){case 1:return c=["NEW",0],d=["NEW",W()],e=IDBKeyRange.bound(c,d),w(l,ah(),2);case 2:return f=l.g,g=f.G(["LogsRequestsStore"],"readwrite"),w(l,g.f("LogsRequestsStore").index("newRequest").g(e,"prev"),3);case 3:h=l.g;k=void 0;if(null===h||void 0===h||!h.getValue()){l.F(4);break}k=h.getValue();k.status="QUEUED";return w(l,h.update(k),4);case 4:return l["return"](k)}})})}
function dh(a){return O(this,function c(){var d,e,f;return x(c,function(g){switch(g.f){case 1:return w(g,ah(),2);case 2:return d=g.g,e=d.G(["LogsRequestsStore"],"readwrite").f("LogsRequestsStore"),w(g,e.get(a),3);case 3:return f=g.g,f.status="QUEUED",w(g,X(e.f.put(f,void 0)),4);case 4:return g["return"](f)}})})}
function eh(a){return O(this,function c(){var d,e,f;return x(c,function(g){switch(g.f){case 1:return w(g,ah(),2);case 2:return d=g.g,e=d.G(["LogsRequestsStore"],"readwrite").f("LogsRequestsStore"),w(g,e.get(a),3);case 3:return f=g.g,f.status="NEW",f.oa+=1,w(g,X(e.f.put(f,void 0)),4);case 4:return g["return"](f)}})})}
function fh(){return O(this,function b(){var c,d;return x(b,function(e){if(1==e.f)return w(e,ah(),2);if(3!=e.f)return c=e.g,w(e,c.count("LogsRequestsStore"),3);d=e.g;return e["return"](!d)})})}
function gh(a){return O(this,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,ah(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
;var hh=Ue("network_polling_interval",3E4);function ih(){this.i=0;this.f=window.navigator.onLine;jh(this);kh(this)}
function lh(){ih.f||(ih.f=new ih);return ih.f}
function mh(a){var b=nh,c=oh;a.i||ph(a);(new P(function(d){a.h=d})).then(function(){b();
c&&(a.g=c)})}
function kh(a){window.addEventListener("online",function(){a.f=!0;a.h&&a.h()})}
function jh(a){window.addEventListener("offline",function(){a.f=!1;a.g&&a.g()})}
function ph(a){a.i=Gf(function(){window.navigator.onLine?(!1===a.f&&T(Error("NetworkStatusManager missed online event.")),a.f=!0,a.h&&a.h()):(!0===a.f&&T(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.g&&a.g());ph(a)},hh)}
;var qh=Ue("networkless_throttle_timeout")||100,rh=Ue("networkless_retry_attempts")||1,sh=0;function th(a,b){Zg().then(function(c){if(c&&!U("networkless_bypass_write")){var d={url:a,options:b,timestamp:W(),status:"NEW",oa:0};bh(d).then(function(e){d.id=e;e=lh();e.f?uh(d):mh(e)})["catch"](function(){uh(d);
T(Error("Networkless Logging: Log request setting to indexedDB failed."))})}else hf(a,b)})}
function nh(){sh||(sh=If(function(){uh();sh=0;nh()},qh))}
function oh(){Kf(sh);sh=0}
function uh(a){O(this,function c(){var d=this,e,f,g,h;return x(c,function(k){switch(k.f){case 1:e=d;if(!a)return w(k,ch(),6);if(!a.id){k.F(3);break}return w(k,dh(a.id),5);case 5:a=k.g;k.F(3);break;case 6:if(a=k.g){k.F(3);break}return w(k,fh(),8);case 8:return(f=k.g)&&oh(),k["return"]();case 3:if(vh(a))g=a.options.onError?a.options.onError:function(){},h=a.options.onSuccess?a.options.onSuccess:function(){},a.options.onError=function(l,m){return O(e,function r(){return x(r,function(p){if(1==p.f)return a&&
a.id?a.oa<rh?w(p,eh(a.id),6):w(p,gh(a.id),2):p.F(2);
2!=p.f&&(sh||mh(lh()),g(l,m));g(l,m);p.f=0})})},a.options.onSuccess=function(l,m){return O(e,function r(){return x(r,function(p){if(1==p.f)return a&&a.id?w(p,gh(a.id),2):p.F(2);
h(l,m);p.f=0})})},hf(a.url,a.options);
else if(Je(Error("Networkless Logging: Stored logs request expired age limit")),a.id)return w(k,gh(a.id),0);k.F(0)}})})}
function vh(a){a=a.timestamp;return 2592E6<=W()-a?!1:!0}
;function wh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
v(wh,Error);function xh(a){var b=this;this.f=null;a?this.f=a:xg()&&(this.f=qg());Gf(function(){Fg(b)},5E3)}
xh.prototype.isReady=function(){!this.f&&xg()&&(this.f=qg());return!!this.f};
function tg(a,b,c,d){!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Je(new wh("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw b=new wh("innertube xhrclient not ready",b,c,d),T(b),b.f=0,b;var e={headers:{"Content-Type":"application/json"},method:"POST",D:c,za:"JSON",S:function(){d.S()},
ya:d.S,onSuccess:function(r,p){if(d.onSuccess)d.onSuccess(p)},
xa:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,p){if(d.onError)d.onError(p)},
Bb:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.Qa;g&&(f=g);g=a.f.Ra||!1;var h=yg(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=Ne(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),l;if(d.retry&&U("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=Dg(b,c,h,g))){var m=e.onSuccess,q=e.xa;e.onSuccess=function(r,p){Eg(l);m(r,p)};
c.xa=function(r,p){Eg(l);q(r,p)}}try{U("use_fetch_for_op_xhr")?ef(k,e):U("networkless_logging")&&d.retry?(e.method="POST",th(k,e)):(e.method="POST",e.D||(e.D={}),hf(k,e))}catch(r){if("InvalidAccessError"==r.name)l&&(Eg(l),l=0),Je(Error("An extension is blocking network request."));
else throw r;}l&&Gf(function(){Fg(a)},5E3)}
;function yh(a,b,c){c=void 0===c?{}:c;var d=xh;S("ytLoggingEventsDefaultDisabled",!1)&&xh==xh&&(d=null);vg(a,b,d,c)}
;var zh=[{ua:function(a){return"Cannot read property '"+a.key+"'"},
na:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{ua:function(a){return"Cannot call '"+a.key+"'"},
na:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];var Ah=new Set,Bh=0;function Ch(a){Dh(a,"WARNING")}
function Dh(a,b,c,d,e){e=void 0===e?{}:e;e.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=e||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;var f=void 0===f?!1:f;if(a&&(U("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),(window&&
window.yterr||f)&&!(5<=Bh)&&0!==a.f)){var g=xc(a);f=g.message||"Unknown Error";d=g.name||"UnknownError";e=g.lineNumber||"Not available";var h=g.fileName||"Not available";g=g.stack||a.g||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){var m=a.args[l],q="params."+l;k+=q.length;if(m)if(Array.isArray(m))for(var r=c,p=0;p<m.length&&!(m[p]&&(k+=Eh(p,m[p],q,r),500<k));p++);else if("object"===typeof m)for(r in r=void 0,p=c,m){if(m[r]&&(k+=Eh(r,m[r],
q,p),500<k))break}else c[q]=String(JSON.stringify(m)).substring(0,500),k+=c[q].length;else c[q]=String(JSON.stringify(m)).substring(0,500),k+=c[q].length;if(500<=k)break}else if(a.hasOwnProperty("params")&&a.params)if(m=a.params,"object"===typeof a.params)for(l in q=0,m){if(m[l]&&(k="params."+l,r=String(JSON.stringify(m[l])).substr(0,500),c[k]=r,q+=k.length+r.length,500<q))break}else c.params=String(JSON.stringify(m)).substr(0,500);c={message:f,name:d,lineNumber:e,fileName:h,stack:g,params:c};a=Number(a.columnNumber);
isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);a=u(zh);for(f=a.next();!f.done;f=a.next())if(f=f.value,f.na[c.name])for(e=u(f.na[c.name]),d=e.next();!d.done;d=e.next())if(h=d.value,d=c.message.match(h.regexp)){c.params["error.original"]=d[0];e=h.groups;h={};for(g=0;g<e.length;g++)h[e[g]]=d[g+1],c.params["error."+e[g]]=d[g+1];c.message=f.ua(h);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(c);if(!(Ah.has(c.message)||0<=c.stack.indexOf("/YouTubeCenter.js")||0<=c.stack.indexOf("/mytube.js"))){if(U("kevlar_gel_error_routing")){f=
b;d={stackTrace:c.stack};c.fileName&&(d.filename=c.fileName);a=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(d.lineNumber=Number(a[0]),d.columnNumber=Number(a[1])):d.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:c.message};"ERROR"===f?a.level="ERROR_LEVEL_ERROR":"WARNING"===f&&(a.level="ERROR_LEVEL_WARNNING");f={isObfuscated:!0,browserStackInfo:d};d={pageUrl:window.location.href,
kvPairs:[]};if(e=c.params)for(h=u(Object.keys(e)),g=h.next();!g.done;g=h.next())g=g.value,d.kvPairs.push({key:"client."+g,value:String(e[g])});yh("clientError",{errorMetadata:d,stackTrace:f,logMessage:a});mg()}a=c.params||{};b={ib:{a:"logerror",t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},D:{url:S("PAGE_NAME",window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.D){c.stack&&(b.D.stack=c.stack);f=
u(Object.keys(a));for(d=f.next();!d.done;d=f.next())d=d.value,b.D["client."+d]=a[d];if(a=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=u(Object.keys(a)),d=f.next();!d.done;d=f.next())d=d.value,b.D[d]=a[d];a=S("SERVER_NAME",void 0);f=S("SERVER_VERSION",void 0);a&&f&&(b.D["server.name"]=a,b.D["server.version"]=f)}hf(S("ECATCHER_REPORT_HOST","")+"/error_204",b);Ah.add(c.message);Bh++}}}
function Eh(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Fh(a,b,c,d,e,f){Dh(a,void 0===b?"ERROR":b,c,d,f)}
;var Gh=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",Gh,void 0);function Hh(a){ze(Gh,arguments)}
;function Ih(a){a&&(a.dataset?a.dataset[Jh("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Kh(a,b){return a?a.dataset?a.dataset[Jh(b)]:a.getAttribute("data-"+b):null}
var Lh={};function Jh(a){return Lh[a]||(Lh[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Mh=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Nh=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Oh(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Mh,""),c=c.replace(Nh,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ph(a,b,c)}
function Ph(a,b,c){c=void 0===c?null:c;var d=Qh(a),e=document.getElementById(d),f=e&&Kh(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Uf(d,b),b=""+Pa(b),Rh[b]=f),g||(e=Sh(a,d,function(){Kh(e,"loaded")||(Ih(e),Xf(d),V(Ua(Yf,d),0))},c)))}
function Sh(a,b,c,d){d=void 0===d?null:d;var e=Ic(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Zb(e,Mc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Th(a){a=Qh(a);var b=document.getElementById(a);b&&(Yf(a),b.parentNode.removeChild(b))}
function Uh(a,b){if(a&&b){var c=""+Pa(b);(c=Rh[c])&&Wf(c)}}
function Qh(a){var b=document.createElement("a");Yb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ac(a)}
var Rh={};var Vh=[],Wh=!1;function Xh(){if("1"!=hb(Be(),"args","privembed")){var a=function(){Wh=!0;"google_ad_status"in window?R("DCLKSTAT",1):R("DCLKSTAT",2)};
Oh("//static.doubleclick.net/instream/ad_status.js",a);Vh.push(If(function(){Wh||"google_ad_status"in window||(Uh("//static.doubleclick.net/instream/ad_status.js",a),Wh=!0,R("DCLKSTAT",3))},5E3))}}
function Yh(){return parseInt(S("DCLKSTAT",0),10)}
;function Zh(){this.g=!1;this.f=null}
Zh.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.g=!0,Oh(b,function(){g.g=!1;window.botguard?$h(g,c,d,f):(Th(b),Ch(new wh("Unable to load Botguard","from "+b)))},e)):a&&(eval(a),window.botguard?$h(this,c,d,f):Ch(Error("Unable to load Botguard from JS")))};
function $h(a,b,c,d){if(d)try{a.f=new window.botguard.bg(b,c?function(){return c(b)}:Ia)}catch(e){Ch(e)}else{try{a.f=new window.botguard.bg(b)}catch(e){Ch(e)}c&&c(b)}}
Zh.prototype.dispose=function(){this.f=null};var ai=new Zh;function bi(){return!!ai.f}
function ci(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return ai.f?ai.f.invoke(void 0,void 0,a):null}
;var di=D().toString();
function ei(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=D();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(di)for(a=1,b=0;b<di.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^di.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var fi=y.ytLoggingDocDocumentNonce_||ei();z("ytLoggingDocDocumentNonce_",fi,void 0);var gi=1;function hi(a){this.f=a}
hi.prototype.getAsJson=function(){var a={};void 0!==this.f.trackingParams?a.trackingParams=this.f.trackingParams:(a.veType=this.f.veType,void 0!==this.f.veCounter&&(a.veCounter=this.f.veCounter),void 0!==this.f.elementIndex&&(a.elementIndex=this.f.elementIndex));void 0!==this.f.dataElement&&(a.dataElement=this.f.dataElement.getAsJson());void 0!==this.f.youtubeData&&(a.youtubeData=this.f.youtubeData);return a};
hi.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
hi.prototype.isClientVe=function(){return!this.f.trackingParams&&!!this.f.veType};function ii(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function ji(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ki(a){return S(ji(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",ki,void 0);function li(){var a=ki(0),b;a?b=new hi({veType:a,youtubeData:void 0}):b=null;return b}
function mi(){var a=S("csn-to-ctt-auth-info");a||(a={},R("csn-to-ctt-auth-info",a));return a}
function ni(a){a=void 0===a?0:a;var b=S(ii(a));if(!b&&!S("USE_CSN_FALLBACK",!0))return null;b||0!=a||(U("kevlar_client_side_screens")||U("c3_client_side_screens")?b="UNDEFINED_CSN":b=S("EVENT_ID"));return b?b:null}
z("yt_logging_screen.getCurrentCsn",ni,void 0);function oi(a,b,c){var d=mi();(c=ni(c))&&delete d[c];b&&(d[a]=b)}
function pi(a){return mi()[a]}
z("yt_logging_screen.getCttAuthInfo",pi,void 0);function qi(a,b,c,d){c=void 0===c?0:c;if(a!==S(ii(c))||b!==S(ji(c)))if(oi(a,d,c),R(ii(c),a),R(ji(c),b),0==c||U("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&vg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:fi,clientScreenNonce:a},xh)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
z("yt_logging_screen.setCurrentScreen",qi,void 0);function ri(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=J(K(3,window.location.href));g&&f.push(g);g=J(K(3,d));if(0<=Za(f,g)||!g&&0==d.lastIndexOf("/",0))if(U("autoescape_tempdata_url")&&(f=document.createElement("a"),Yb(f,d),d=f.href),d){g=d.match(bc);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||
b.ved)&&(b=Object.assign({csn:ni()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+ac(d).toString(36),e=e?dc(e):"",Ag(b,e,k||5))}else k=b,e="ST-"+ac(d).toString(36),k=k?dc(k):"",Ag(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=ec(a,l)+m;a=a instanceof H?a:Pb(a);c.href=Nb(a)}return!0}
;function si(a,b){this.version=a;this.args=b}
;function ti(a,b){this.topic=a;this.f=b}
ti.prototype.toString=function(){return this.topic};var ui=A("ytPubsub2Pubsub2Instance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.R;Q.prototype.publish=Q.prototype.P;Q.prototype.clear=Q.prototype.clear;z("ytPubsub2Pubsub2Instance",ui,void 0);var vi=A("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",vi,void 0);var wi=A("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",wi,void 0);var xi=A("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",xi,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function yi(a,b){var c=zi();c&&c.publish.call(c,a.toString(),a,b)}
function Ai(a){var b=Bi,c=zi();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(vi[d])try{if(f&&b instanceof ti&&b!=e)try{var h=b.f,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.K){var l=new h;h.K=l.version}var m=h.K}catch(q){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
eb(k.args))}catch(q){throw q.message="yt.pubsub2.Data.deserialize(): "+q.message,q;}}catch(q){throw q.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+q.message,q;}a.call(window,f)}catch(q){T(q)}},xi[b.toString()]?A("yt.scheduler.instance")?If(g):V(g,0):g())});
vi[d]=!0;wi[b.toString()]||(wi[b.toString()]=[]);wi[b.toString()].push(d);return d}
function Ci(){var a=Di,b=Ai(function(c){a.apply(void 0,arguments);Ei(b)});
return b}
function Ei(a){var b=zi();b&&("number"===typeof a&&(a=[a]),G(a,function(c){b.unsubscribeByKey(c);delete vi[c]}))}
function zi(){return A("ytPubsub2Pubsub2Instance")}
;function Fi(a){si.call(this,1,arguments);this.csn=a}
v(Fi,si);var Bi=new ti("screen-created",Fi),Gi=[],Hi=0;function Ii(a,b,c){var d=U("use_default_events_client")?void 0:xh;b={csn:a,parentVe:b.getAsJson(),childVes:ab(c,function(f){return f.getAsJson()})};
c=u(c);for(var e=c.next();!e.done;e=c.next())e=e.value.getAsJson(),(kb(e)||!e.trackingParams&&!e.veType)&&Fh(Error("Child VE logged with no data"),"WARNING");c={ga:pi(a),T:a};"UNDEFINED_CSN"==a?Ji("visualElementAttached",b,c):d?vg("visualElementAttached",b,d,c):yh("visualElementAttached",b,c)}
function Ji(a,b,c){Gi.push({payloadName:a,payload:b,options:c});Hi||(Hi=Ci())}
function Di(a){if(Gi){for(var b=u(Gi),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,vg(c.payloadName,c.payload,null,c.options));Gi.length=0}Hi=0}
;function Ki(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||nb(b);this.assets=a.assets||{};this.attrs=a.attrs||nb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Ki.prototype.clone=function(){var a=new Ki,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ka(c)?a[b]=nb(c):a[b]=c}return a};function Li(){M.call(this);this.f=[]}
v(Li,M);Li.prototype.o=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.wb)}M.prototype.o.call(this)};var Mi=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Ni(a){a=a||"";if(window.spf){var b=a.match(Mi);spf.style.load(a,b?b[1]:"",void 0)}else Oi(a)}
function Oi(a){var b=Pi(a),c=document.getElementById(b),d=c&&Kh(c,"loaded");d||c&&!d||(c=Qi(a,b,function(){Kh(c,"loaded")||(Ih(c),Xf(b),V(Ua(Yf,b),0))}))}
function Qi(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Mc(a);d.rel="stylesheet";d.href=Ab(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Pi(a){var b=Ic(document,"A"),c=new tb(ub,"This URL is never added to the DOM");wb(c);wb(c);Yb(b,new H(Lb,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ac(a)}
;function Ri(a,b,c,d){M.call(this);var e=this;this.m=this.aa=a;this.X=b;this.u=!1;this.api={};this.Y=this.H=null;this.I=new Q;Tc(this,Ua(Uc,this.I));this.j={};this.U=this.Z=this.h=this.fa=this.f=null;this.N=!1;this.l=this.C=null;this.ba={};this.Ca=["onReady"];this.ea=null;this.qa=NaN;this.V={};this.i=d;Si(this);this.ca("WATCH_LATER_VIDEO_ADDED",this.Ta.bind(this));this.ca("WATCH_LATER_VIDEO_REMOVED",this.Ua.bind(this));this.ca("onAdAnnounce",this.Ea.bind(this));this.Da=new Li(this);Tc(this,Ua(Uc,this.Da));
this.W=0;c?this.W=V(function(){e.loadNewVideoConfig(c)},0):d&&(Ti(this),Ui(this))}
v(Ri,M);n=Ri.prototype;n.getId=function(){return this.X};
n.loadNewVideoConfig=function(a){if(!this.g){this.W&&(Ye(this.W),this.W=0);a instanceof Ki||(a=new Ki(a));this.fa=a;this.f=a.clone();Ti(this);this.Z||(this.Z=Vi(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.m.style.width=Wc(Number(a)||a);if(a=this.f.attrs.height)this.m.style.height=Wc(Number(a)||a);Ui(this);this.u&&Wi(this)}};
function Ti(a){var b;a.i?b=a.i.rootElementId:b=a.f.attrs.id;a.h=b||a.h;"video-player"==a.h&&(a.h=a.X,a.f.attrs.id=a.X);a.m.id==a.h&&(a.h+="-player",a.f.attrs.id=a.h)}
n.Ia=function(){return this.fa};
function Wi(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function Xi(a){var b=!0,c=Yi(a);c&&a.f&&(a=Zi(a),b=Kh(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function Ui(a){if(!a.g&&!a.N){var b=Xi(a);if(b&&"html5"==(Yi(a)?"html5":null))a.U="html5",a.u||$i(a);else if(aj(a),a.U="html5",b&&a.l)a.aa.appendChild(a.l),$i(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.C=function(){c=!0;if(a.i)var d=a.i.serializedExperimentFlags;else a.f&&a.f.args&&(d=a.f.args.fflags);d="true"==Ke(d||"").player_bootstrap_method?A("yt.player.Application.createAlternate")||A("yt.player.Application.create"):A("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.aa,e,a.i);$i(a)};
a.N=!0;b?a.C():(Oh(Zi(a),a.C),(b=a.i?a.i.cssUrl:a.f.assets.css)&&Ni(b),bj(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function Yi(a){var b=Ec(a.h);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.h));return b}
function $i(a){if(!a.g){var b=Yi(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.N=!1,b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||cj(a)):a.qa=V(function(){$i(a)},50)}}
function cj(a){Si(a);a.u=!0;var b=Yi(a);b.addEventListener&&(a.H=dj(a,b,"addEventListener"));b.removeEventListener&&(a.Y=dj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=dj(a,b,e))}for(var f in a.j)a.H(f,a.j[f]);Wi(a);a.Z&&a.Z(a.api);a.I.P("onReady",a.api)}
function dj(a,b,c){var d=b[c];return function(){try{return a.ea=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.ea=e,Je(e))}}}
function Si(a){a.u=!1;if(a.Y)for(var b in a.j)a.Y(b,a.j[b]);for(var c in a.V)Ye(parseInt(c,10));a.V={};a.H=null;a.Y=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.ca.bind(a);a.api.removeEventListener=a.Ya.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ja.bind(a);a.api.getPlayerType=a.Ka.bind(a);a.api.getCurrentVideoConfig=a.Ia.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Sa.bind(a)}
n.Sa=function(){return this.u};
n.ca=function(a,b){var c=this,d=Vi(this,b);if(d){if(!(0<=Za(this.Ca,a)||this.j[a])){var e=ej(this,a);this.H&&this.H(a,e)}this.I.subscribe(a,d);"onReady"==a&&this.u&&V(function(){d(c.api)},0)}};
n.Ya=function(a,b){if(!this.g){var c=Vi(this,b);c&&ie(this.I,a,c)}};
function Vi(a,b){var c=b;if("string"==typeof b){if(a.ba[b])return a.ba[b];c=function(){var d=A(b);d&&d.apply(y,arguments)};
a.ba[b]=c}return c?c:null}
function ej(a,b){var c="ytPlayer"+b+a.X;a.j[b]=c;y[c]=function(d){var e=V(function(){if(!a.g){a.I.P(b,d);var f=a.V,g=String(e);g in f&&delete f[g]}},0);
lb(a.V,String(e))};
return c}
n.Ea=function(a){Xf("a11y-announce",a)};
n.Ta=function(a){Xf("WATCH_LATER_VIDEO_ADDED",a)};
n.Ua=function(a){Xf("WATCH_LATER_VIDEO_REMOVED",a)};
n.Ka=function(){return this.U||(Yi(this)?"html5":null)};
n.Ja=function(){return this.ea};
function aj(a){a.cancel();Si(a);a.U=null;a.f&&(a.f.loaded=!1);var b=Yi(a);b&&(Xi(a)||!bj(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));for(a=a.aa;b=a.firstChild;)a.removeChild(b)}
n.cancel=function(){if(this.C){var a=Zi(this);Uh(a,this.C)}Ye(this.qa);this.N=!1};
n.o=function(){aj(this);if(this.l&&this.f&&this.l.destroy)try{this.l.destroy()}catch(b){T(b)}this.ba=null;for(var a in this.j)y[this.j[a]]=null;this.fa=this.f=this.api=null;delete this.aa;delete this.m;M.prototype.o.call(this)};
function bj(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function Zi(a){return a.i?a.i.jsUrl:a.f.assets.js}
;var fj={},gj="player_uid_"+(1E9*Math.random()>>>0);function hj(a){delete fj[a.getId()]}
;function ij(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function jj(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return kj(a)}
function kj(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function lj(a,b,c,d){if(Oa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function mj(a){a=void 0===a?!1:a;M.call(this);this.f=new Q(a);Tc(this,Ua(Uc,this.f))}
E(mj,M);mj.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
mj.prototype.j=function(a,b){this.g||this.f.P.apply(this.f,arguments)};function nj(a,b,c){mj.call(this);this.h=a;this.i=b;this.l=c}
v(nj,mj);function oj(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(Jd(a),d.i))}}
nj.prototype.o=function(){this.i=this.h=null;mj.prototype.o.call(this)};function pj(a){M.call(this);this.f=a;this.f.subscribe("command",this.Aa,this);this.h={};this.j=!1}
v(pj,M);n=pj.prototype;n.start=function(){this.j||this.g||(this.j=!0,oj(this.f,"RECEIVING"))};
n.Aa=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.h||(c=C(this.ab,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&qj(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=rj(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=sj(a,c))&&this.j&&!this.g&&oj(this.f,a,c))}}};
n.ab=function(a,b){this.j&&!this.g&&oj(this.f,a,this.ia(a,b))};
n.ia=function(a,b){if(null!=b)return{value:b}};
function qj(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
n.o=function(){var a=this.f;a.g||ie(a.f,"command",this.Aa,this);this.f=null;for(var b in this.h)qj(this,b);M.prototype.o.call(this)};function tj(a,b){pj.call(this,b);this.i=a;this.start()}
v(tj,pj);tj.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
tj.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function rj(a,b){switch(a){case "loadVideoById":return b=kj(b),[b];case "cueVideoById":return b=kj(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=lj(b),[b];case "cuePlaylist":return b=lj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function sj(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
tj.prototype.ia=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return pj.prototype.ia.call(this,a,b)};
tj.prototype.o=function(){pj.prototype.o.call(this);delete this.i};function uj(a,b,c){M.call(this);var d=this;c=c||S("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.h=b||null;this.u="*";this.i=c;this.sessionId=null;this.channel="widget";this.C=!!a;this.m=function(e){a:if(!("*"!=d.i&&e.origin!=d.i||d.h&&e.source!=d.h||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.C&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.i=d.u=e.origin);d.h=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.j&&(!d.l||0<=Za(d.l,f.func))&&d.j(f.func,f.args,e.origin)}}};
this.l=this.f=this.j=null;window.addEventListener("message",this.m)}
v(uj,M);uj.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.u)}catch(e){Je(e)}}};
uj.prototype.o=function(){window.removeEventListener("message",this.m);M.prototype.o.call(this)};function vj(){var a=this.g=new uj(!!S("WIDGET_ID_ENFORCE")),b=C(this.Xa,this);a.j=b;a.l=null;this.g.channel="widget";if(a=S("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
n=vj.prototype;n.Xa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,wj(this,a)),this.j[a]=!0)):this.va(a,b,c)};
n.va=function(){};
function wj(a,b){return C(function(c){this.sendMessage(b,c)},a)}
n.addEventListener=function(){};
n.Ha=function(){this.l=!0;this.sendMessage("initialDelivery",this.ja());this.sendMessage("onReady");G(this.i,this.Ba,this);this.i=[]};
n.ja=function(){return null};
function xj(a,b){a.sendMessage("infoDelivery",b)}
n.Ba=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
n.sendMessage=function(a,b){this.Ba({event:a,info:void 0==b?null:b})};
n.dispose=function(){this.g=null};function yj(a){vj.call(this);this.f=a;this.h=[];this.addEventListener("onReady",C(this.Va,this));this.addEventListener("onVideoProgress",C(this.fb,this));this.addEventListener("onVolumeChange",C(this.gb,this));this.addEventListener("onApiChange",C(this.Za,this));this.addEventListener("onPlaybackQualityChange",C(this.bb,this));this.addEventListener("onPlaybackRateChange",C(this.cb,this));this.addEventListener("onStateChange",C(this.eb,this));this.addEventListener("onWebglSettingsChanged",C(this.hb,
this))}
v(yj,vj);n=yj.prototype;n.va=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&ij(a)){var d=b;if(Oa(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=kj.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=jj.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=lj.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);ij(a)&&xj(this,this.ja())}};
n.Va=function(){var a=C(this.Ha,this);this.g.f=a};
n.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
n.ja=function(){if(!this.f)return null;var a=this.f.getApiInterface();db(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(h){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=D()/1E3;return b};
n.eb=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());xj(this,a)};
n.bb=function(a){xj(this,{playbackQuality:a})};
n.cb=function(a){xj(this,{playbackRate:a})};
n.Za=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
n.gb=function(){xj(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
n.fb=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());xj(this,a)};
n.hb=function(){var a={sphericalProperties:this.f.getSphericalProperties()};xj(this,a)};
n.dispose=function(){vj.prototype.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function zj(a,b,c){M.call(this);this.f=a;this.i=c;this.j=Bf(window,"message",C(this.l,this));this.h=new nj(this,a,b);Tc(this,Ua(Uc,this.h))}
v(zj,M);zj.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
zj.prototype.o=function(){Cf(this.j);this.f=null;M.prototype.o.call(this)};function Aj(){var a=nb(Bj),b;return Yd(new P(function(c,d){a.onSuccess=function(e){Xe(e)?c(e):d(new Cj("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Cj("Unknown request error","net.unknown",e))};
a.S=function(e){d(new Cj("Request timed out","net.timeout",e))};
b=hf("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Zd&&b.abort();
return Wd(c)})}
function Cj(a,b){F.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
v(Cj,F);function Dj(){this.g=0;this.f=null}
Dj.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),Pd(a)?a:Ej(a)):2===this.g&&b?(a=b.call(c,this.f),Pd(a)?a:Fj(a)):this};
Dj.prototype.getValue=function(){return this.f};
Dj.prototype.$goog_Thenable=!0;function Fj(a){var b=new Dj;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function Ej(a){var b=new Dj;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function Gj(a){F.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Hj;this.isTimeout=a instanceof Cj&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Zd}
v(Gj,F);Gj.prototype.name="BiscottiError";function Hj(){F.call(this,"Biscotti ID is missing from server")}
v(Hj,F);Hj.prototype.name="BiscottiMissingError";var Bj={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ij=null;function Ee(){if("1"===hb(Be(),"args","privembed"))return Wd(Error("Biscotti ID is not available in private embed mode"));Ij||(Ij=Yd(Aj().then(Jj),function(a){return Kj(2,a)}));
return Ij}
function Jj(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Hj;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Hj;a=a.id;Fe(a);Ij=Ej(a);Lj(18E5,2);return a}
function Kj(a,b){var c=new Gj(b);Fe("");Ij=Fj(c);0<a&&Lj(12E4,a-1);throw c;}
function Lj(a,b){V(function(){Yd(Aj().then(Jj,function(c){return Kj(b,c)}),Ia)},a)}
function Mj(){try{var a=A("yt.ads.biscotti.getId_");return a?a():Ee()}catch(b){return Wd(b)}}
;function Nj(a){if("1"!==hb(Be(),"args","privembed")){a&&De();try{Mj().then(function(){},function(){}),V(Nj,18E5)}catch(b){T(b)}}}
;var Y=A("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Y,void 0);function Oj(){this.f=S("ALT_PREF_COOKIE_NAME","PREF");var a=Ac.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Y[d]=c.toString())}}}
n=Oj.prototype;n.get=function(a,b){Pj(a);Qj(a);var c=void 0!==Y[a]?Y[a].toString():null;return null!=c?c:b?b:""};
n.set=function(a,b){Pj(a);Qj(a);if(null==b)throw Error("ExpectedNotNull");Y[a]=b.toString()};
n.remove=function(a){Pj(a);Qj(a);delete Y[a]};
n.save=function(){Ag(this.f,this.dump(),63072E3)};
n.clear=function(){for(var a in Y)delete Y[a]};
n.dump=function(){var a=[],b;for(b in Y)a.push(b+"="+encodeURIComponent(String(Y[b])));return a.join("&")};
function Qj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Pj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Rj(a){a=void 0!==Y[a]?Y[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ja(Oj);function Sj(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Tj(a)||c.some(function(e){return!Tj(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())Uj(a,d.value);return a}
function Uj(a,b){for(var c in b)if(Tj(b[c])){if(c in a&&!Tj(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Uj(a[c],b[c])}else if(Vj(b[c])){if(c in a&&!Vj(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Wj(a[c],b[c])}else a[c]=b[c];return a}
function Wj(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,Tj(d)?a.push(Uj({},d)):Vj(d)?a.push(Wj([],d)):a.push(d);return a}
function Tj(a){return"object"===typeof a&&!Array.isArray(a)}
function Vj(a){return"object"===typeof a&&Array.isArray(a)}
;function Xj(a,b){si.call(this,1,arguments)}
v(Xj,si);function Yj(a,b){si.call(this,1,arguments)}
v(Yj,si);var Zj=new ti("aft-recorded",Xj),ak=new ti("timing-sent",Yj);var bk=window;function ck(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var dk=bk.performance||bk.mozPerformance||bk.msPerformance||bk.webkitPerformance||new ck;var ek=!1;C(dk.clearResourceTimings||dk.webkitClearResourceTimings||dk.mozClearResourceTimings||dk.msClearResourceTimings||dk.oClearResourceTimings||Ia,dk);function fk(a){var b=gk(a);if(b.aft)return b.aft;a=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function hk(a){var b;(b=A("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Va("ytcsi."+(a||"")+"data_",b));return b}
function ik(a){a=hk(a);a.info||(a.info={});return a.info}
function gk(a){a=hk(a);a.tick||(a.tick={});return a.tick}
function jk(a){var b=hk(a).nonce;b||(b=ei(),hk(a).nonce=b);return b}
function kk(a){var b=gk(a||""),c=fk(a);c&&!ek&&(yi(Zj,new Xj(Math.round(c-b._start),a)),ek=!0)}
;function lk(){var a=A("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function mk(a){a=a||"";var b=A("ytcsi.reference");b||(lk(),b=A("ytcsi.reference"));if(b[a])return b[a];var c=lk(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var nk=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",nk,void 0);function ok(){this.f=0}
function pk(){ok.f||(ok.f=new ok);return ok.f}
ok.prototype.tick=function(a,b,c){qk(this,"tick_"+a+"_"+b)||yh("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
ok.prototype.info=function(a,b){var c=Object.keys(a).join("");qk(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,yh("latencyActionInfo",c))};
ok.prototype.span=function(a,b){var c=Object.keys(a).join("");qk(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,yh("latencyActionSpan",a))};
function qk(a,b){nk[b]=nk[b]||{count:0};var c=nk[b];c.count++;c.time=W();a.f||(a.f=Gf(function(){var d=W(),e;for(e in nk)nk[e]&&6E4<d-nk[e].time&&delete nk[e];a&&(a.f=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new wh("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Ch(c)),!0):!1}
;var Z={},rk=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.cseg="creatorInfo.creatorSegment",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid="requestIds",Z.GetBrowse_rid=
"requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",Z.ncnp="webInfo.nonPreloadedNodeCount",
Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",Z.ssdm="shellStartupDurationMs",Z.aq=
"tvInfo.appQuality",Z.br_trs="tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",Z.rcl="mwebInfo.responseContentLength",
Z.GetSettings_rid="requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),sk="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),tk={},uk=(tk.ccs="CANARY_STATE_",
tk.mver="MEASUREMENT_VERSION_",tk.pis="PLAYER_INITIALIZED_STATE_",tk.yt_pt="LATENCY_PLAYER_",tk.pa="LATENCY_ACTION_",tk.yt_vst="VIDEO_STREAM_TYPE_",tk),vk="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function wk(a){return!!S("FORCE_CSI_ON_GEL",!1)||U("csi_on_gel")||!!hk(a).useGel}
function xk(a){a=hk(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function yk(a,b,c){if(null!==b)if(ik(c)[a]=b,wk(c)){var d=b;b=xk(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in rk){b=rk[a];0<=Za(sk,b)&&(d=!!d);a in uk&&"string"===typeof d&&(d=uk[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=Sj({},e)}else 0<=Za(vk,a)||Ch(new wh("Unknown label logged with GEL CSI",
a)),f=void 0;f&&wk(c)&&(b=mk(c||""),Sj(b.info,f),b=xk(c),"gelInfos"in b||(b.gelInfos={}),Sj(b.gelInfos,f),c=jk(c),pk().info(f,c))}else mk(c||"").info[a]=b}
function zk(a,b,c){var d=gk(c);if(U("use_first_tick")&&Ak(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;dk.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),dk.mark(e))}e=b||W();d[a]=e;e=xk(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||W();if(wk(c)){mk(c||"").tick[a]=b||W();e=jk(c);if("_start"===a){var f=pk();qk(f,"baseline_"+e)||yh("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else pk().tick(a,e,b);kk(c);e=!0}else e=!1;if(!e){if(!A("yt.timing."+(c||"")+"pingSent_")&&
(f=S((c||"")+"TIMING_ACTION",void 0),e=gk(c),A("ytglobal.timing"+(c||"")+"ready_")&&f&&Ak("_start")&&fk(c)))if(kk(c),c)Bk(c);else{f=!0;var g=S("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&Bk(c)}mk(c||"").tick[a]=b||W()}return d[a]}
function Ak(a,b){var c=gk(b);return a in c}
function Bk(a){if(!wk(a)){var b=gk(a),c=ik(a),d=b._start,e=S("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:S((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=fk(a);var h=gk(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&ik(a).yt_pvis&&"youtube"===e&&(yk("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=W();m={};e=[];for(var q in b)"_"!==q.charAt(0)&&(k=Math.round(b[q]-d),m[q]=k,e.push(q+"."+k));f.rt=
e.join(",");b=!!c.ap;U("debug_csi_data")&&(c=A("yt.timing.csiData"),c||(c=[],Va("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var r in f)f.hasOwnProperty(r)&&(c+="&"+r+"="+f[r]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var p=void 0===p?"":p;tf(f,p)||qf(f,void 0,void 0,void 0,p)}else qf(f);z("yt.timing."+(a||"")+"pingSent_",!0,void 0);yi(ak,new Yj(m.aft+(Number(g)||0),a))}}
if(U("overwrite_polyfill_on_logging_lib_loaded")){var Ck=window;Ck.ytcsi&&(Ck.ytcsi.info=yk,Ck.ytcsi.tick=zk)};var Dk=null,Ek=null,Fk=null,Gk={};function Hk(a){var b=a.id;a=a.ve_type;var c=gi++;a=new hi({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Gk[b]=a;b=ni();c=li();b&&c&&Ii(b,c,[a])}
function Ik(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(qi(b,a),a=li()))for(var c in Gk){var d=Gk[c];d&&Ii(b,a,[d])}}
function Jk(a){Gk[a.id]=new hi({trackingParams:a.tracking_params})}
function Kk(a){var b=ni(),c=Gk[a.id];if(b&&c){a=U("use_default_events_client")?void 0:xh;var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:d};d={ga:pi(b),T:b};"UNDEFINED_CSN"==b?Ji("visualElementGestured",c,d):a?vg("visualElementGestured",c,a,d):yh("visualElementGestured",c,d)}}
function Lk(a){a=a.ids;var b=ni();if(b)for(var c=0;c<a.length;c++){var d=Gk[a[c]];if(d){var e=b,f=U("use_default_events_client")?void 0:xh;d={csn:e,ve:d.getAsJson(),eventType:1};var g={ga:pi(e),T:e};"UNDEFINED_CSN"==e?Ji("visualElementShown",d,g):f?vg("visualElementShown",d,f,g):yh("visualElementShown",d,g)}}}
;z("yt.setConfig",R,void 0);z("yt.config.set",R,void 0);z("yt.setMsg",Hh,void 0);z("yt.msgs.set",Hh,void 0);z("yt.logging.errors.log",Fh,void 0);
z("writeEmbed",function(){var a=S("PLAYER_CONFIG",void 0);Nj(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=S("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);S("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");b="player";var d=void 0===d?!0:d;b="string"===typeof b?Ec(b):b;var e=gj+"_"+Pa(b),f=fj[e];f&&d?a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true")?f.api.loadVideoByPlayerVars(a.args||
null):f.loadNewVideoConfig(a):(f=new Ri(b,e,a,void 0),fj[e]=f,Xf("player-added",f.api),Tc(f,Ua(hj,f)));a=f.api;Dk=a;a.addEventListener("onScreenChanged",Ik);a.addEventListener("onLogClientVeCreated",Hk);a.addEventListener("onLogServerVeCreated",Jk);a.addEventListener("onLogVeClicked",Kk);a.addEventListener("onLogVesShown",Lk);d=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?Fk=new yj(a):S("ENABLE_POST_API")&&"string"===typeof d&&"string"===typeof c&&(Ek=new zj(window.parent,d,c),Fk=new tj(a,Ek.h));
Xh()},void 0);
z("yt.www.watch.ads.restrictioncookie.spr",function(a){qf(a+"mac_204?action_fcts=1");return!0},void 0);
var Mk=Ie(function(){zk("ol");var a=Oj.getInstance(),b=!!((Rj("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&yd(document.body,"exp-invert-logo"))if(c&&!yd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!yd(d,"inverted-hdpi")){var e=wd(d);xd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&yd(document.body,"inverted-hdpi")&&zd();b!=c&&(b="f"+(Math.floor(119/31)+1),d=Rj(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete Y[b]:(c=d.toString(16),Y[b]=c.toString()),a.save())}),Nk=Ie(function(){var a=Dk;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();S("PL_ATT")&&ai.dispose();a=0;for(var b=Vh.length;a<b;a++)Kf(Vh[a]);Vh.length=0;Th("//static.doubleclick.net/instream/ad_status.js");Wh=!1;R("DCLKSTAT",0);Vc(Fk,Ek);if(a=Dk)a.removeEventListener("onScreenChanged",Ik),a.removeEventListener("onLogClientVeCreated",Hk),a.removeEventListener("onLogServerVeCreated",Jk),a.removeEventListener("onLogVeClicked",Kk),a.removeEventListener("onLogVesShown",Lk),a.destroy();Gk={}});
window.addEventListener?(window.addEventListener("load",Mk),window.addEventListener("unload",Nk)):window.attachEvent&&(window.attachEvent("onload",Mk),window.attachEvent("onunload",Nk));Va("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||bi);Va("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||ci);Va("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||Yh);
Va("yt.player.exports.navigate",A("yt.player.exports.navigate")||ri);Va("yt.util.activity.init",A("yt.util.activity.init")||Mf);Va("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||Pf);Va("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||Nf);}).call(this);
