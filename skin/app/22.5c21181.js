(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{31:function(e,t,n){t.hot=function(e){return e}},34:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=()=>a.a.createElement("div",{className:"container text-center",title:"Loading..."},a.a.createElement("i",{className:"fas fa-sync fa-spin"}))},437:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(31),o=n(56),c=n(55),u=n(1),l=n(6),s=n(4),f=n(34),d=n(50);var p=e=>{const{plugin:t,isInstalling:n}=e,r=Object.entries(t.dependencies.all),i=Object.keys(t.dependencies.unsatisfied);return a.a.createElement("tr",null,a.a.createElement("td",{style:{width:"18%"}},a.a.createElement("div",null,a.a.createElement("b",null,t.title)),a.a.createElement("div",null,t.name)),a.a.createElement("td",{style:{width:"37%"}},t.description),a.a.createElement("td",null,t.author),a.a.createElement("td",null,t.version),a.a.createElement("td",{style:{width:"100px"}},0===r.length?a.a.createElement("i",null,Object(u.a)("admin.noDependencies")):a.a.createElement("div",{className:"d-flex flex-column"},r.map(([e,t])=>{const n=["mb-1","badge",`bg-${i.includes(e)?"red":"green"}`];return a.a.createElement("span",{key:e,className:n.join(" ")},e,": ",t)}))),a.a.createElement("td",{style:{width:"12%"}},t.can_update?a.a.createElement("button",{className:"btn btn-success",disabled:n,onClick:e.onUpdate},n?a.a.createElement(a.a.Fragment,null,a.a.createElement("i",{className:"fas fa-spinner fa-spin mr-1"}),Object(u.a)("admin.pluginUpdating")):a.a.createElement(a.a.Fragment,null,a.a.createElement("i",{className:"fas fa-sync-alt mr-1"}),Object(u.a)("admin.updatePlugin"))):a.a.createElement("button",{className:"btn btn-default",disabled:e.isInstalling||!!t.installed,onClick:e.onInstall},n?a.a.createElement(a.a.Fragment,null,a.a.createElement("i",{className:"fas fa-spinner fa-spin mr-1"}),Object(u.a)("admin.pluginInstalling")):a.a.createElement(a.a.Fragment,null,a.a.createElement("i",{className:"fas fa-download mr-1"}),Object(u.a)("admin.installPlugin")))))};Object(o.b)();t.default=Object(i.hot)(()=>{const[e,t]=Object(c.a)([]),[n,i]=Object(r.useState)(!1),[o,m]=Object(r.useState)(""),[h,v]=Object(r.useState)(1),[b,y]=Object(r.useState)(1),[g,E]=Object(c.a)(()=>new Set),O=Object(r.useMemo)(()=>e.filter(e=>e.name.includes(o)||e.title.includes(o)),[e,o]);Object(r.useEffect)(()=>{(async()=>{i(!0);const e=await l.b("/admin/plugins/market/list");t(()=>e),y(Math.ceil(e.length/10)),i(!1)})()},[]);const j=async(e,n)=>{E(t=>{t.add(e.name)});const{code:r,message:i,data:o={reason:[]}}=await l.c("/admin/plugins/market/download",{name:e.name});0===r?(s.b.success(i),t(e=>{e[n].can_update=!1,e[n].installed=e[n].version})):Object(s.a)({mode:"alert",children:a.a.createElement("div",null,a.a.createElement("p",null,i),a.a.createElement("ul",null,o.reason.map((e,t)=>a.a.createElement("li",{key:t},e))))}),E(t=>{t.delete(e.name)})},P=O.slice(10*(h-1),10*h);return a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card-header"},a.a.createElement("input",{type:"text",className:"form-control",placeholder:Object(u.a)("vendor.datatable.search"),value:o,onChange:t=>{const n=t.target.value;m(n),v(1);const r=e.filter(e=>e.name.includes(n)||e.title.includes(n));y(Math.ceil(r.length/10))}})),n?a.a.createElement("div",{className:"card-body"},a.a.createElement(f.a,null)):0===O.length?a.a.createElement("div",{className:"card-body text-center"},Object(u.a)("general.noResult")):a.a.createElement("div",{className:"card-body table-responsive p-0"},a.a.createElement("table",{className:"table table-striped"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,Object(u.a)("admin.pluginTitle")),a.a.createElement("th",null,Object(u.a)("admin.pluginDescription")),a.a.createElement("th",null,Object(u.a)("admin.pluginAuthor")),a.a.createElement("th",null,Object(u.a)("admin.pluginVersion")),a.a.createElement("th",null,Object(u.a)("admin.pluginDependencies")),a.a.createElement("th",null,Object(u.a)("admin.operationsTitle")))),a.a.createElement("tbody",null,P.map((e,t)=>a.a.createElement(p,{key:e.name,plugin:e,isInstalling:g.has(e.name),onInstall:()=>j(e,10*(h-1)+t),onUpdate:()=>(async(e,t)=>{try{await Object(s.a)({text:Object(u.a)("admin.confirmUpdate",{plugin:e.title,old:e.installed,new:e.version})})}catch(e){return}j(e,t)})(e,10*(h-1)+t)}))))),a.a.createElement("div",{className:"card-footer"},a.a.createElement("div",{className:"float-right"},a.a.createElement(d.a,{page:h,totalPages:b,onChange:v}))))})},50:function(e,t,n){"use strict";var r=n(0),a=n.n(r);var i=e=>{const t=["page-item"];e.active&&t.push("active"),e.disabled&&t.push("disabled");return a.a.createElement("li",{className:t.join(" "),onClick:t=>{t.preventDefault(),!e.disabled&&e.onClick&&e.onClick()}},a.a.createElement("a",{href:"#",className:"page-link","aria-disabled":e.disabled},e.children))};const o="‹",c="›";t.a=e=>{const{page:t,totalPages:n,onChange:r}=e;return n<1?null:a.a.createElement("ul",{className:"pagination"},a.a.createElement(i,{disabled:1===t,onClick:()=>r(t-1)},o),n<8?Array.from({length:n}).map((e,n)=>a.a.createElement(i,{key:n,active:t===n+1,onClick:()=>r(n+1)},n+1)):a.a.createElement(a.a.Fragment,null,t<4?[1,2,3,4].map(e=>a.a.createElement(i,{key:e,active:t===e,onClick:()=>r(e)},e)):a.a.createElement(i,{onClick:()=>r(1)},"1"),a.a.createElement(i,{disabled:!0},"..."),t>3&&t<n-2&&a.a.createElement(a.a.Fragment,null,[t-1,t,t+1].map(e=>a.a.createElement(i,{key:e,active:t===e,onClick:()=>r(e)},e)),a.a.createElement(i,{disabled:!0},"...")),n-t<3?[n-3,n-2,n-1,n].map(e=>a.a.createElement(i,{key:e,active:t===e,onClick:()=>r(e)},e)):a.a.createElement(i,{onClick:()=>r(n)},n)),a.a.createElement(i,{disabled:t===n,onClick:()=>r(t+1)},c))}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(56),a=n(0);function i(e){var t=Object(a.useState)(e),n=t[1];return[t[0],Object(a.useCallback)((function(e){n(Object(r.a)(e))}),[])]}},56:function(e,t,n){"use strict";function r(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function a(e){return!!e&&!!e[V]}function i(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}(e)||Array.isArray(e)||!!e[L]||!!e.constructor[L]||d(e)||p(e))}function o(e,t,n){void 0===n&&(n=!1),0===c(e)?(n?Object.keys:q)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function c(e){var t=e[V];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:d(e)?2:p(e)?3:0}function u(e,t){return 2===c(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function l(e,t){return 2===c(e)?e.get(t):e[t]}function s(e,t,n){var r=c(e);2===r?e.set(t,n):3===r?(e.delete(t),e.add(n)):e[t]=n}function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){return W&&e instanceof Map}function p(e){return J&&e instanceof Set}function m(e){return e.o||e.t}function h(e){if(Array.isArray(e))return e.slice();var t=B(e);delete t[V];for(var n=q(t),r=0;r<n.length;r++){var a=n[r],i=t[a];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[a]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[a]})}return Object.create(Object.getPrototypeOf(e),t)}function v(e,t){Object.isFrozen(e)||a(e)||!i(e)||(c(e)>1&&(e.set=e.add=e.clear=e.delete=b),Object.freeze(e),t&&o(e,(function(e,t){return v(t,!0)}),!0))}function b(){r(2)}function y(e){var t=G[e];return t||r(19,e),t}function g(e,t){G[e]=t}function E(){return U}function O(e,t){t&&(y("Patches"),e.u=[],e.s=[],e.v=t)}function j(e){P(e),e.p.forEach(k),e.p=null}function P(e){e===U&&(U=e.l)}function w(e){return U={p:[],l:U,h:e,m:!0,_:0}}function k(e){var t=e[V];0===t.i||1===t.i?t.j():t.O=!0}function A(e,t){t._=t.p.length;var n=t.p[0],a=void 0!==e&&e!==n;return t.h.g||y("ES5").S(t,e,a),a?(n[V].P&&(j(t),r(4)),i(e)&&(e=N(t,e),t.l||D(t,e)),t.u&&y("Patches").M(n[V],e,t.u,t.s)):e=N(t,n,[]),j(t),t.u&&t.v(t.u,t.s),e!==$?e:void 0}function N(e,t,n){if(null==(r=t)||"object"!=typeof r||Object.isFrozen(r))return t;var r,a=t[V];if(!a)return o(t,(function(r,i){return S(e,a,t,r,i,n)}),!0),t;if(a.A!==e)return t;if(!a.P)return D(e,a.t,!0),a.t;if(!a.I){a.I=!0,a.A._--;var i=4===a.i||5===a.i?a.o=h(a.k):a.o;o(i,(function(t,r){return S(e,a,i,t,r,n)})),D(e,i,!1),n&&e.u&&y("Patches").R(a,n,e.u,e.s)}return a.o}function S(e,t,n,r,o,c){if(a(o)){var l=N(e,o,c&&t&&3!==t.i&&!u(t.D,r)?c.concat(r):void 0);if(s(n,r,l),!a(l))return;e.m=!1}if(i(o)&&!Object.isFrozen(o)){if(!e.h.N&&e._<1)return;N(e,o),t&&t.A.l||D(e,o)}}function D(e,t,n){void 0===n&&(n=!1),e.h.N&&e.m&&v(t,n)}function x(e,t){var n=e[V];return(n?m(n):e)[t]}function C(e){e.P||(e.P=!0,e.l&&C(e.l))}function _(e){e.o||(e.o=h(e.t))}function F(e,t,n){var r=d(t)?y("MapSet").T(t,n):p(t)?y("MapSet").F(t,n):e.g?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:E(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},a=r,i=H;n&&(a=[r],i=Q);var o=Proxy.revocable(a,i),c=o.revoke,u=o.proxy;return r.k=u,r.j=c,u}(t,n):y("ES5").J(t,n);return(n?n.A:E()).p.push(r),r}function I(e){return a(e)||r(22,e),function e(t){if(!i(t))return t;var n,r=t[V],a=c(t);if(r){if(!r.P&&(r.i<4||!y("ES5").K(r)))return r.t;r.I=!0,n=M(t,a),r.I=!1}else n=M(t,a);return o(n,(function(t,a){r&&l(r.t,t)===a||s(n,t,e(a))})),3===a?new Set(n):n}(e)}function M(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return h(e)}function z(){function e(e,t){function n(){this.constructor=e}o(e,t),e.prototype=(n.prototype=t.prototype,new n)}function t(e){e.o||(e.D=new Map,e.o=new Map(e.t))}function n(e){e.o||(e.o=new Set,e.t.forEach((function(t){if(i(t)){var n=F(e.A.h,t,e);e.p.set(t,n),e.o.add(n)}else e.o.add(t)})))}function a(e){e.O&&r(3,JSON.stringify(m(e)))}var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},c=function(){function n(e,t){return this[V]={i:2,l:t,A:t?t.A:E(),P:!1,I:!1,o:void 0,D:void 0,t:e,k:this,C:!1,O:!1},this}e(n,Map);var r=n.prototype;return Object.defineProperty(r,"size",{get:function(){return m(this[V]).size}}),r.has=function(e){return m(this[V]).has(e)},r.set=function(e,n){var r=this[V];return a(r),m(r).has(e)&&m(r).get(e)===n||(t(r),C(r),r.D.set(e,!0),r.o.set(e,n),r.D.set(e,!0)),this},r.delete=function(e){if(!this.has(e))return!1;var n=this[V];return a(n),t(n),C(n),n.D.set(e,!1),n.o.delete(e),!0},r.clear=function(){var e=this[V];return a(e),t(e),C(e),e.D=new Map,e.o.clear()},r.forEach=function(e,t){var n=this;m(this[V]).forEach((function(r,a){e.call(t,n.get(a),a,n)}))},r.get=function(e){var n=this[V];a(n);var r=m(n).get(e);if(n.I||!i(r))return r;if(r!==n.t.get(e))return r;var o=F(n.A.h,r,n);return t(n),n.o.set(e,o),o},r.keys=function(){return m(this[V]).keys()},r.values=function(){var e,t=this,n=this.keys();return(e={})[X]=function(){return t.values()},e.next=function(){var e=n.next();return e.done?e:{done:!1,value:t.get(e.value)}},e},r.entries=function(){var e,t=this,n=this.keys();return(e={})[X]=function(){return t.entries()},e.next=function(){var e=n.next();if(e.done)return e;var r=t.get(e.value);return{done:!1,value:[e.value,r]}},e},r[X]=function(){return this.entries()},n}(),u=function(){function t(e,t){return this[V]={i:3,l:t,A:t?t.A:E(),P:!1,I:!1,o:void 0,t:e,k:this,p:new Map,O:!1,C:!1},this}e(t,Set);var r=t.prototype;return Object.defineProperty(r,"size",{get:function(){return m(this[V]).size}}),r.has=function(e){var t=this[V];return a(t),t.o?!!t.o.has(e)||!(!t.p.has(e)||!t.o.has(t.p.get(e))):t.t.has(e)},r.add=function(e){var t=this[V];return a(t),this.has(e)||(n(t),C(t),t.o.add(e)),this},r.delete=function(e){if(!this.has(e))return!1;var t=this[V];return a(t),n(t),C(t),t.o.delete(e)||!!t.p.has(e)&&t.o.delete(t.p.get(e))},r.clear=function(){var e=this[V];return a(e),n(e),C(e),e.o.clear()},r.values=function(){var e=this[V];return a(e),n(e),e.o.values()},r.entries=function(){var e=this[V];return a(e),n(e),e.o.entries()},r.keys=function(){return this.values()},r[X]=function(){return this.values()},r.forEach=function(e,t){for(var n=this.values(),r=n.next();!r.done;)e.call(t,r.value,r.value,this),r=n.next()},t}();g("MapSet",{T:function(e,t){return new c(e,t)},F:function(e,t){return new u(e,t)}})}n.d(t,"b",(function(){return z}));var R,U,K="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),W="undefined"!=typeof Map,J="undefined"!=typeof Set,T="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,$=K?Symbol("immer-nothing"):((R={})["immer-nothing"]=!0,R),L=K?Symbol("immer-draftable"):"__$immer_draftable",V=K?Symbol("immer-state"):"__$immer_state",X="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",q="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,B=Object.getOwnPropertyDescriptors||function(e){var t={};return q(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},G={},H={get:function(e,t){if(t===V)return e;var n=m(e);if(!u(n,t))return function(e,t,n){if(n in t)for(var r=Object.getPrototypeOf(t);r;){var a,i=Object.getOwnPropertyDescriptor(r,n);if(i)return"value"in i?i.value:null===(a=i.get)||void 0===a?void 0:a.call(e.k);r=Object.getPrototypeOf(r)}}(e,n,t);var r=n[t];return e.I||!i(r)?r:r===x(e.t,t)?(_(e),e.o[t]=F(e.A.h,r,e)):r},has:function(e,t){return t in m(e)},ownKeys:function(e){return Reflect.ownKeys(m(e))},set:function(e,t,n){if(e.D[t]=!0,!e.P){if(f(n,x(m(e),t))&&void 0!==n)return!0;_(e),C(e)}return e.o[t]=n,!0},deleteProperty:function(e,t){return void 0!==x(e.t,t)||t in e.t?(e.D[t]=!1,_(e),C(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=m(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){r(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){r(12)}},Q={};o(H,(function(e,t){Q[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Q.deleteProperty=function(e,t){return H.deleteProperty.call(this,e[0],t)},Q.set=function(e,t,n){return H.set.call(this,e[0],t,n,e[0])};var Y=new(function(){function e(e){this.g=T,this.N=!1,"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var t=e.prototype;return t.produce=function(e,t,n){if("function"==typeof e&&"function"!=typeof t){var a=t;t=e;var o=this;return function(e){var n=this;void 0===e&&(e=a);for(var r=arguments.length,i=Array(r>1?r-1:0),c=1;c<r;c++)i[c-1]=arguments[c];return o.produce(e,(function(e){var r;return(r=t).call.apply(r,[n,e].concat(i))}))}}var c;if("function"!=typeof t&&r(6),void 0!==n&&"function"!=typeof n&&r(7),i(e)){var u=w(this),l=F(this,e,void 0),s=!0;try{c=t(l),s=!1}finally{s?j(u):P(u)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(e){return O(u,n),A(e,u)}),(function(e){throw j(u),e})):(O(u,n),A(c,u))}if(!e||"object"!=typeof e){if((c=t(e))===$)return;return void 0===c&&(c=e),this.N&&v(c,!0),c}r(21,e)},t.produceWithPatches=function(e,t){var n,r,a=this;return"function"==typeof e?function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return a.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(r))}))}:[this.produce(e,t,(function(e,t){n=e,r=t})),n,r]},t.createDraft=function(e){i(e)||r(8),a(e)&&(e=I(e));var t=w(this),n=F(this,e,void 0);return n[V].C=!0,P(t),n},t.finishDraft=function(e,t){var n=(e&&e[V]).A;return O(n,t),A(void 0,n)},t.setAutoFreeze=function(e){this.N=e},t.setUseProxies=function(e){e&&!T&&r(20),this.g=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}var i=y("Patches").$;return a(e)?i(e,t):this.produce(e,(function(e){return i(e,t.slice(n+1))}))},e}()),Z=Y.produce;Y.produceWithPatches.bind(Y),Y.setAutoFreeze.bind(Y),Y.setUseProxies.bind(Y),Y.applyPatches.bind(Y),Y.createDraft.bind(Y),Y.finishDraft.bind(Y);t.a=Z}}]);