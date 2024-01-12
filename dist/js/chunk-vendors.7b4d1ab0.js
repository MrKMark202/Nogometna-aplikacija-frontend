(self["webpackChunknogometna_aplikacija"]=self["webpackChunknogometna_aplikacija"]||[]).push([[998],{4444:function(t,e,n){"use strict";n.d(e,{$s:function(){return Q},BH:function(){return _},L:function(){return l},LL:function(){return R},P0:function(){return y},Pz:function(){return w},Sg:function(){return k},UG:function(){return C},ZB:function(){return u},ZR:function(){return L},aH:function(){return b},b$:function(){return E},eu:function(){return O},hl:function(){return A},jU:function(){return T},m9:function(){return tt},ne:function(){return H},pd:function(){return z},q4:function(){return v},r3:function(){return B},ru:function(){return x},tV:function(){return c},uI:function(){return S},vZ:function(){return F},w1:function(){return $},xO:function(){return Z},xb:function(){return V},z$:function(){return I},zI:function(){return P},zd:function(){return U}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},s=function(t){const e=[];let n=0,i=0;while(n<t.length){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((7&s)<<18|(63&r)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(1023&l))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const e=t[s],r=s+1<t.length,o=r?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,c=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],r=s<t.length,a=r?n[t.charAt(s)]:0;++s;const l=s<t.length,c=l?n[t.charAt(s)]:64;++s;const u=s<t.length,h=u?n[t.charAt(s)]:64;if(++s,null==e||null==a||null==c||null==h)throw new o;const d=e<<2|a>>4;if(i.push(d),64!==c){const t=a<<4&240|c>>2;if(i.push(t),64!==h){const t=c<<6&192|h;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=i(t);return r.encodeByteArray(e,!0)},l=function(t){return a(t).replace(/\./g,"")},c=function(t){try{return r.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function u(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&h(n)&&(t[n]=u(t[n],e[n]));return t}function h(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=()=>d().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},m=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&c(t[1]);return e&&JSON.parse(e)},g=()=>{try{return p()||f()||m()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},v=t=>{var e,n;return null===(n=null===(e=g())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},y=t=>{const e=v(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},b=()=>{var t;return null===(t=g())||void 0===t?void 0:t.config},w=t=>{var e;return null===(e=g())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[l(JSON.stringify(n)),l(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function S(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(I())}function C(){var t;const e=null===(t=g())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(i){return!1}}function T(){return"object"===typeof self&&self.self===self}function x(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function E(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function $(){const t=I();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function A(){try{return"object"===typeof indexedDB}catch(t){return!1}}function O(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function P(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D="FirebaseError";class L extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=D,Object.setPrototypeOf(this,L.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?N(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`,a=new L(i,o,n);return a}}function N(t,e){return t.replace(M,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const M=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function V(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function F(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const n=t[s],r=e[s];if(j(n)&&j(r)){if(!F(n,r))return!1}else if(n!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function j(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function U(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function z(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t,e){const n=new W(t,e);return n.subscribe.bind(n)}class W{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=q(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=K),void 0===i.error&&(i.error=K),void 0===i.complete&&(i.complete=K);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function q(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function K(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Y=1e3,G=2,X=144e5,J=.5;function Q(t,e=Y,n=G){const i=e*Math.pow(n,t),s=Math.round(J*i*(Math.random()-.5)*2);return Math.min(X,i+s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tt(t){return t&&t._delegate?t._delegate:t}},1001:function(t,e,n){"use strict";function i(t,e,n,i,s,r,o,a){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):s&&(l=a?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:c}}n.d(e,{Z:function(){return i}})},9662:function(t,e,n){var i=n(614),s=n(6330),r=TypeError;t.exports=function(t){if(i(t))return t;throw r(s(t)+" is not a function")}},9670:function(t,e,n){var i=n(111),s=String,r=TypeError;t.exports=function(t){if(i(t))return t;throw r(s(t)+" is not an object")}},1318:function(t,e,n){var i=n(5656),s=n(1400),r=n(6244),o=function(t){return function(e,n,o){var a,l=i(e),c=r(l),u=s(o,c);if(t&&n!=n){while(c>u)if(a=l[u++],a!=a)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},3658:function(t,e,n){"use strict";var i=n(9781),s=n(3157),r=TypeError,o=Object.getOwnPropertyDescriptor,a=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(s(t)&&!o(t,"length").writable)throw r("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4326:function(t,e,n){var i=n(1702),s=i({}.toString),r=i("".slice);t.exports=function(t){return r(s(t),8,-1)}},9920:function(t,e,n){var i=n(2597),s=n(3887),r=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=s(e),l=o.f,c=r.f,u=0;u<a.length;u++){var h=a[u];i(t,h)||n&&i(n,h)||l(t,h,c(e,h))}}},8880:function(t,e,n){var i=n(9781),s=n(3070),r=n(9114);t.exports=i?function(t,e,n){return s.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var i=n(614),s=n(3070),r=n(6339),o=n(3072);t.exports=function(t,e,n,a){a||(a={});var l=a.enumerable,c=void 0!==a.name?a.name:e;if(i(n)&&r(n,c,a),a.global)l?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(l=!0):delete t[e]}catch(u){}l?t[e]=n:s.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var i=n(7854),s=Object.defineProperty;t.exports=function(t,e){try{s(i,t,{value:e,configurable:!0,writable:!0})}catch(n){i[t]=e}return e}},5117:function(t,e,n){"use strict";var i=n(6330),s=TypeError;t.exports=function(t,e){if(!delete t[e])throw s("Cannot delete property "+i(e)+" of "+i(t))}},9781:function(t,e,n){var i=n(7293);t.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var i=n(7854),s=n(111),r=i.document,o=s(r)&&s(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var i,s,r=n(7854),o=n(8113),a=r.process,l=r.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u&&(i=u.split("."),s=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!s&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(s=+i[1]))),t.exports=s},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var i=n(7854),s=n(1236).f,r=n(8880),o=n(8052),a=n(3072),l=n(9920),c=n(4705);t.exports=function(t,e){var n,u,h,d,p,f,m=t.target,g=t.global,v=t.stat;if(u=g?i:v?i[m]||a(m,{}):(i[m]||{}).prototype,u)for(h in e){if(p=e[h],t.dontCallGetSet?(f=s(u,h),d=f&&f.value):d=u[h],n=c(g?h:m+(v?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof p==typeof d)continue;l(p,d)}(t.sham||d&&d.sham)&&r(p,"sham",!0),o(u,h,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var i=n(7293);t.exports=!i((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var i=n(4374),s=Function.prototype.call;t.exports=i?s.bind(s):function(){return s.apply(s,arguments)}},6530:function(t,e,n){var i=n(9781),s=n(2597),r=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=s(r,"name"),l=a&&"something"===function(){}.name,c=a&&(!i||i&&o(r,"name").configurable);t.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},1702:function(t,e,n){var i=n(4374),s=Function.prototype,r=s.call,o=i&&s.bind.bind(r,r);t.exports=i?o:function(t){return function(){return r.apply(t,arguments)}}},5005:function(t,e,n){var i=n(7854),s=n(614),r=function(t){return s(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?r(i[t]):i[t]&&i[t][e]}},8173:function(t,e,n){var i=n(9662),s=n(8554);t.exports=function(t,e){var n=t[e];return s(n)?void 0:i(n)}},7854:function(t,e,n){var i=function(t){return t&&t.Math==Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var i=n(1702),s=n(7908),r=i({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return r(s(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var i=n(9781),s=n(7293),r=n(317);t.exports=!i&&!s((function(){return 7!=Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var i=n(1702),s=n(7293),r=n(4326),o=Object,a=i("".split);t.exports=s((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?a(t,""):o(t)}:o},2788:function(t,e,n){var i=n(1702),s=n(614),r=n(5465),o=i(Function.toString);s(r.inspectSource)||(r.inspectSource=function(t){return o(t)}),t.exports=r.inspectSource},9909:function(t,e,n){var i,s,r,o=n(4811),a=n(7854),l=n(111),c=n(8880),u=n(2597),h=n(5465),d=n(6200),p=n(3501),f="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(t){return r(t)?s(t):i(t,{})},y=function(t){return function(e){var n;if(!l(e)||(n=s(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var b=h.state||(h.state=new g);b.get=b.get,b.has=b.has,b.set=b.set,i=function(t,e){if(b.has(t))throw m(f);return e.facade=t,b.set(t,e),e},s=function(t){return b.get(t)||{}},r=function(t){return b.has(t)}}else{var w=d("state");p[w]=!0,i=function(t,e){if(u(t,w))throw m(f);return e.facade=t,c(t,w,e),e},s=function(t){return u(t,w)?t[w]:{}},r=function(t){return u(t,w)}}t.exports={set:i,get:s,has:r,enforce:v,getterFor:y}},3157:function(t,e,n){var i=n(4326);t.exports=Array.isArray||function(t){return"Array"==i(t)}},614:function(t,e,n){var i=n(4154),s=i.all;t.exports=i.IS_HTMLDDA?function(t){return"function"==typeof t||t===s}:function(t){return"function"==typeof t}},4705:function(t,e,n){var i=n(7293),s=n(614),r=/#|\.prototype\./,o=function(t,e){var n=l[a(t)];return n==u||n!=c&&(s(e)?i(e):!!e)},a=o.normalize=function(t){return String(t).replace(r,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var i=n(614),s=n(4154),r=s.all;t.exports=s.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:i(t)||t===r}:function(t){return"object"==typeof t?null!==t:i(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var i=n(5005),s=n(614),r=n(7976),o=n(3307),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return s(e)&&r(e.prototype,a(t))}},6244:function(t,e,n){var i=n(7466);t.exports=function(t){return i(t.length)}},6339:function(t,e,n){var i=n(1702),s=n(7293),r=n(614),o=n(2597),a=n(9781),l=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),h=u.enforce,d=u.get,p=String,f=Object.defineProperty,m=i("".slice),g=i("".replace),v=i([].join),y=a&&!s((function(){return 8!==f((function(){}),"length",{value:8}).length})),b=String(String).split("String"),w=t.exports=function(t,e,n){"Symbol("===m(p(e),0,7)&&(e="["+g(p(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||l&&t.name!==e)&&(a?f(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&o(n,"arity")&&t.length!==n.arity&&f(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&f(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(s){}var i=h(t);return o(i,"source")||(i.source=v(b,"string"==typeof e?e:"")),t};Function.prototype.toString=w((function(){return r(this)&&d(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var i=+t;return(i>0?n:e)(i)}},3070:function(t,e,n){var i=n(9781),s=n(4664),r=n(3353),o=n(9670),a=n(4948),l=TypeError,c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",p="writable";e.f=i?r?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var i=u(t,e);i&&i[p]&&(t[e]=n.value,n={configurable:d in n?n[d]:i[d],enumerable:h in n?n[h]:i[h],writable:!1})}return c(t,e,n)}:c:function(t,e,n){if(o(t),e=a(e),o(n),s)try{return c(t,e,n)}catch(i){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var i=n(9781),s=n(6916),r=n(5296),o=n(9114),a=n(5656),l=n(4948),c=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;e.f=i?h:function(t,e){if(t=a(t),e=l(e),u)try{return h(t,e)}catch(n){}if(c(t,e))return o(!s(r.f,t,e),t[e])}},8006:function(t,e,n){var i=n(6324),s=n(748),r=s.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var i=n(1702);t.exports=i({}.isPrototypeOf)},6324:function(t,e,n){var i=n(1702),s=n(2597),r=n(5656),o=n(1318).indexOf,a=n(3501),l=i([].push);t.exports=function(t,e){var n,i=r(t),c=0,u=[];for(n in i)!s(a,n)&&s(i,n)&&l(u,n);while(e.length>c)s(i,n=e[c++])&&(~o(u,n)||l(u,n));return u}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!n.call({1:2},1);e.f=s?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var i=n(6916),s=n(614),r=n(111),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&s(n=t.toString)&&!r(a=i(n,t)))return a;if(s(n=t.valueOf)&&!r(a=i(n,t)))return a;if("string"!==e&&s(n=t.toString)&&!r(a=i(n,t)))return a;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){var i=n(5005),s=n(1702),r=n(8006),o=n(5181),a=n(9670),l=s([].concat);t.exports=i("Reflect","ownKeys")||function(t){var e=r.f(a(t)),n=o.f;return n?l(e,n(t)):e}},4488:function(t,e,n){var i=n(8554),s=TypeError;t.exports=function(t){if(i(t))throw s("Can't call method on "+t);return t}},6200:function(t,e,n){var i=n(2309),s=n(9711),r=i("keys");t.exports=function(t){return r[t]||(r[t]=s(t))}},5465:function(t,e,n){var i=n(7854),s=n(3072),r="__core-js_shared__",o=i[r]||s(r,{});t.exports=o},2309:function(t,e,n){var i=n(1913),s=n(5465);(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.30.1",mode:i?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var i=n(7392),s=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!s((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},1400:function(t,e,n){var i=n(9303),s=Math.max,r=Math.min;t.exports=function(t,e){var n=i(t);return n<0?s(n+e,0):r(n,e)}},5656:function(t,e,n){var i=n(8361),s=n(4488);t.exports=function(t){return i(s(t))}},9303:function(t,e,n){var i=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:i(e)}},7466:function(t,e,n){var i=n(9303),s=Math.min;t.exports=function(t){return t>0?s(i(t),9007199254740991):0}},7908:function(t,e,n){var i=n(4488),s=Object;t.exports=function(t){return s(i(t))}},7593:function(t,e,n){var i=n(6916),s=n(111),r=n(2190),o=n(8173),a=n(2140),l=n(5112),c=TypeError,u=l("toPrimitive");t.exports=function(t,e){if(!s(t)||r(t))return t;var n,l=o(t,u);if(l){if(void 0===e&&(e="default"),n=i(l,t,e),!s(n)||r(n))return n;throw c("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var i=n(7593),s=n(2190);t.exports=function(t){var e=i(t,"string");return s(e)?e:e+""}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var i=n(1702),s=0,r=Math.random(),o=i(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++s+r,36)}},3307:function(t,e,n){var i=n(6293);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var i=n(9781),s=n(7293);t.exports=i&&s((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var i=n(7854),s=n(614),r=i.WeakMap;t.exports=s(r)&&/native code/.test(String(r))},5112:function(t,e,n){var i=n(7854),s=n(2309),r=n(2597),o=n(9711),a=n(6293),l=n(3307),c=i.Symbol,u=s("wks"),h=l?c["for"]||c:c&&c.withoutSetter||o;t.exports=function(t){return r(u,t)||(u[t]=a&&r(c,t)?c[t]:h("Symbol."+t)),u[t]}},7658:function(t,e,n){"use strict";var i=n(2109),s=n(7908),r=n(6244),o=n(3658),a=n(7207),l=n(7293),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=c||!u();i({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=s(this),n=r(e),i=arguments.length;a(n+i);for(var l=0;l<i;l++)e[n]=arguments[l],n++;return o(e,n),n}})},541:function(t,e,n){"use strict";var i=n(2109),s=n(7908),r=n(6244),o=n(3658),a=n(5117),l=n(7207),c=1!==[].unshift(0),u=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}},h=c||!u();i({target:"Array",proto:!0,arity:1,forced:h},{unshift:function(t){var e=s(this),n=r(e),i=arguments.length;if(i){l(n+i);var c=n;while(c--){var u=c+i;c in e?e[u]=e[c]:a(e,u)}for(var h=0;h<i;h++)e[h]=arguments[h]}return o(e,n+i)}})},4245:function(){},1884:function(){},9027:function(){},2838:function(){},5550:function(t,e,n){"use strict";var i=n(2240),s=n(6190),r=n(144);e["Z"]=r.ZP.extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:e,listeners:n,props:r,data:o}){const a=Object.assign(o,{staticClass:`v-app-bar__nav-icon ${o.staticClass||""}`.trim(),props:{...r,icon:!0},on:n}),l=e().default;return t(s.Z,a,l||[t(i.Z,"$menu")])}})},6190:function(t,e,n){"use strict";n.d(e,{Z:function(){return y}});var i=n(3434),s=n(6750),r=n(6878),o=n(5352),a=r.Z.extend({name:"v-progress-circular",directives:{intersect:s.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,o.kb)(this.calculatedSize),width:(0,o.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,n){this.isVisible=n}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),l=a,c=n(3037),u=n(1444),h=n(4390),d=n(4263),p=n(8860),f=n(4338),m=n(7678),g=n(4101);const v=(0,m.Z)(i.Z,p.Z,d.Z,f.Z,(0,c.d)("btnToggle"),(0,u.d)("inputValue"));var y=v.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...p.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return h.Z.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!==(t=this.ripple)&&void 0!==t?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,g.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(l,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:n,data:i}=this.generateRouteLink(),s=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(i.attrs.type=this.type,i.attrs.disabled=this.disabled),i.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(n,this.disabled?i:s(this.color,i),e)}})},6656:function(t,e,n){"use strict";var i=n(6190);e["Z"]=i.Z},4145:function(t,e,n){"use strict";n(4245);var i=n(3434),s=n(401),r=n(8860),o=n(7678);e["Z"]=(0,o.Z)(s.Z,r.Z,i.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...r.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i.Z.options.computed.classes.call(this)}},styles(){const t={...i.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=s.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:n}=this.generateRouteLink();return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},4886:function(t,e,n){"use strict";n.d(e,{EB:function(){return l},h7:function(){return r}});var i=n(4145),s=n(5352);const r=(0,s.Ji)("v-card__actions"),o=(0,s.Ji)("v-card__subtitle"),a=(0,s.Ji)("v-card__text"),l=(0,s.Ji)("v-card__title");i.Z},120:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var i=n(2240),s=n(573),r=(n(7658),n(7069)),o=n(144),a=o.ZP.extend({name:"rippleable",directives:{ripple:r.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),l=n(6174),c=n(7678);function u(t){t.preventDefault()}var h=(0,c.Z)(s.Z,a,l.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((e=>this.valueComparator(e,t))):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=s.Z.options.methods.genLabel.call(this);return t?(t.data.on={click:u},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:u},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const n=e.length;e=e.filter((e=>!this.valueComparator(e,t))),e.length===n&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}}),d=h.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...s.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick((()=>this.inputIndeterminate=t))},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(i.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},6170:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});n(7658);var i=n(7069),s=n(144),r=n(4324),o=n(6878),a=n(6669),l=n(1767),c=n(5352),u=s.ZP.extend({name:"v-simple-checkbox",functional:!0,directives:{Ripple:i.Z},props:{...o.Z.options.props,...a.Z.options.props,disabled:Boolean,ripple:{type:Boolean,default:!0},value:Boolean,indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},onIcon:{type:String,default:"$checkboxOn"},offIcon:{type:String,default:"$checkboxOff"}},render(t,{props:e,data:n,listeners:s}){const a=[];let u=e.offIcon;if(e.indeterminate?u=e.indeterminateIcon:e.value&&(u=e.onIcon),a.push(t(r.Z,o.Z.options.methods.setTextColor(e.value&&e.color,{props:{disabled:e.disabled,dark:e.dark,light:e.light}}),u)),e.ripple&&!e.disabled){const n=t("div",o.Z.options.methods.setTextColor(e.color,{staticClass:"v-input--selection-controls__ripple",directives:[{def:i.Z,name:"ripple",value:{center:!0}}]}));a.push(n)}return t("div",(0,l.ZP)(n,{class:{"v-simple-checkbox":!0,"v-simple-checkbox--disabled":e.disabled},on:{click:t=>{t.stopPropagation(),n.on&&n.on.input&&!e.disabled&&(0,c.TI)(n.on.input).forEach((t=>t(!e.value)))}}}),[t("div",{staticClass:"v-input--selection-controls__input"},a)])}})},9003:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});n(7658);var i=n(7678),s=n(7394),r=n(2240),o=n(6878),a=n(3037),l=n(6669),c=n(1444),u=n(8860),h=n(4338),d=n(4101),p=(0,i.Z)(o.Z,h.Z,u.Z,l.Z,(0,a.d)("chipGroup"),(0,c.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...u.Z.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(u.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,d.fK)(t,e,this)}))},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(r.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(s.Zq,t)},genClose(){return this.$createElement(r.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:n,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const s=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(s,i),e)}}),f=p},3863:function(t,e,n){"use strict";n.d(e,{Z:function(){return D}});n(541),n(7658);var i=n(5352),s=n(144),r=s.ZP.extend({name:"v-data",inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},options:{type:Object,default:()=>({})},sortBy:{type:[String,Array]},sortDesc:{type:[Boolean,Array]},customSort:{type:Function,default:i.xl},mustSort:Boolean,multiSort:Boolean,page:{type:Number,default:1},itemsPerPage:{type:Number,default:10},groupBy:{type:[String,Array],default:()=>[]},groupDesc:{type:[Boolean,Array],default:()=>[]},customGroup:{type:Function,default:i.sD},locale:{type:String,default:"en-US"},disableSort:Boolean,disablePagination:Boolean,disableFiltering:Boolean,search:String,customFilter:{type:Function,default:i.KT},serverItemsLength:{type:Number,default:-1}},data(){let t={page:this.page,itemsPerPage:this.itemsPerPage,sortBy:(0,i.TI)(this.sortBy),sortDesc:(0,i.TI)(this.sortDesc),groupBy:(0,i.TI)(this.groupBy),groupDesc:(0,i.TI)(this.groupDesc),mustSort:this.mustSort,multiSort:this.multiSort};this.options&&(t=Object.assign(t,this.options));const{sortBy:e,sortDesc:n,groupBy:s,groupDesc:r}=t,o=e.length-n.length,a=s.length-r.length;return o>0&&t.sortDesc.push(...(0,i.kg)(o,!1)),a>0&&t.groupDesc.push(...(0,i.kg)(a,!1)),{internalOptions:t}},computed:{itemsLength(){return this.serverItemsLength>=0?this.serverItemsLength:this.filteredItems.length},pageCount(){return this.internalOptions.itemsPerPage<=0?1:Math.ceil(this.itemsLength/this.internalOptions.itemsPerPage)},pageStart(){return-1!==this.internalOptions.itemsPerPage&&this.items.length?(this.internalOptions.page-1)*this.internalOptions.itemsPerPage:0},pageStop(){return-1===this.internalOptions.itemsPerPage?this.itemsLength:this.items.length?Math.min(this.itemsLength,this.internalOptions.page*this.internalOptions.itemsPerPage):0},isGrouped(){return!!this.internalOptions.groupBy.length},pagination(){return{page:this.internalOptions.page,itemsPerPage:this.internalOptions.itemsPerPage,pageStart:this.pageStart,pageStop:this.pageStop,pageCount:this.pageCount,itemsLength:this.itemsLength}},filteredItems(){let t=this.items.slice();return!this.disableFiltering&&this.serverItemsLength<=0&&(t=this.customFilter(t,this.search)),t},computedItems(){let t=this.filteredItems.slice();return(!this.disableSort||this.internalOptions.groupBy.length)&&this.serverItemsLength<=0&&(t=this.sortItems(t)),!this.disablePagination&&this.serverItemsLength<=0&&(t=this.paginateItems(t)),t},groupedItems(){return this.isGrouped?this.groupItems(this.computedItems):null},scopedProps(){return{sort:this.sort,sortArray:this.sortArray,group:this.group,items:this.computedItems,options:this.internalOptions,updateOptions:this.updateOptions,pagination:this.pagination,groupedItems:this.groupedItems,originalItemsLength:this.items.length}},computedOptions(){return{...this.options}}},watch:{computedOptions:{handler(t,e){(0,i.vZ)(t,e)||this.updateOptions(t)},deep:!0,immediate:!0},internalOptions:{handler(t,e){(0,i.vZ)(t,e)||this.$emit("update:options",t)},deep:!0,immediate:!0},page(t){this.updateOptions({page:t})},"internalOptions.page"(t){this.$emit("update:page",t)},itemsPerPage(t){this.updateOptions({itemsPerPage:t})},"internalOptions.itemsPerPage"(t){this.$emit("update:items-per-page",t)},sortBy(t){this.updateOptions({sortBy:(0,i.TI)(t)})},"internalOptions.sortBy"(t,e){!(0,i.vZ)(t,e)&&this.$emit("update:sort-by",Array.isArray(this.sortBy)?t:t[0])},sortDesc(t){this.updateOptions({sortDesc:(0,i.TI)(t)})},"internalOptions.sortDesc"(t,e){!(0,i.vZ)(t,e)&&this.$emit("update:sort-desc",Array.isArray(this.sortDesc)?t:t[0])},groupBy(t){this.updateOptions({groupBy:(0,i.TI)(t)})},"internalOptions.groupBy"(t,e){!(0,i.vZ)(t,e)&&this.$emit("update:group-by",Array.isArray(this.groupBy)?t:t[0])},groupDesc(t){this.updateOptions({groupDesc:(0,i.TI)(t)})},"internalOptions.groupDesc"(t,e){!(0,i.vZ)(t,e)&&this.$emit("update:group-desc",Array.isArray(this.groupDesc)?t:t[0])},multiSort(t){this.updateOptions({multiSort:t})},"internalOptions.multiSort"(t){this.$emit("update:multi-sort",t)},mustSort(t){this.updateOptions({mustSort:t})},"internalOptions.mustSort"(t){this.$emit("update:must-sort",t)},pageCount:{handler(t){this.$emit("page-count",t)},immediate:!0},computedItems:{handler(t){this.$emit("current-items",t)},immediate:!0},pagination:{handler(t,e){(0,i.vZ)(t,e)||this.$emit("pagination",this.pagination)},immediate:!0}},methods:{toggle(t,e,n,s,r,o){let a=e.slice(),l=n.slice();const c=a.findIndex((e=>e===t));return c<0?(o||(a=[],l=[]),a.push(t),l.push(!1)):c>=0&&!l[c]?l[c]=!0:r?l[c]=!1:(a.splice(c,1),l.splice(c,1)),(0,i.vZ)(a,e)&&(0,i.vZ)(l,n)||(s=1),{by:a,desc:l,page:s}},group(t){const{by:e,desc:n,page:i}=this.toggle(t,this.internalOptions.groupBy,this.internalOptions.groupDesc,this.internalOptions.page,!0,!1);this.updateOptions({groupBy:e,groupDesc:n,page:i})},sort(t){if(Array.isArray(t))return this.sortArray(t);const{by:e,desc:n,page:i}=this.toggle(t,this.internalOptions.sortBy,this.internalOptions.sortDesc,this.internalOptions.page,this.internalOptions.mustSort,this.internalOptions.multiSort);this.updateOptions({sortBy:e,sortDesc:n,page:i})},sortArray(t){const e=t.map((t=>{const e=this.internalOptions.sortBy.findIndex((e=>e===t));return e>-1&&this.internalOptions.sortDesc[e]}));this.updateOptions({sortBy:t,sortDesc:e})},updateOptions(t){this.internalOptions={...this.internalOptions,...t,page:this.serverItemsLength<0?Math.max(1,Math.min(t.page||this.internalOptions.page,this.pageCount)):t.page||this.internalOptions.page}},sortItems(t){let e=[],n=[];return this.disableSort||(e=this.internalOptions.sortBy,n=this.internalOptions.sortDesc),this.internalOptions.groupBy.length&&(e=[...this.internalOptions.groupBy,...e],n=[...this.internalOptions.groupDesc,...n]),this.customSort(t,e,n,this.locale)},groupItems(t){return this.customGroup(t,this.internalOptions.groupBy,this.internalOptions.groupDesc)},paginateItems(t){return-1===this.serverItemsLength&&t.length<=this.pageStart&&(this.internalOptions.page=Math.max(1,Math.ceil(t.length/this.internalOptions.itemsPerPage))||1),t.slice(this.pageStart,this.pageStop)}},render(){return this.$scopedSlots.default&&this.$scopedSlots.default(this.scopedProps)}}),o=n(1500),a=n(2240),l=n(6656),c=s.ZP.extend({name:"v-data-footer",props:{options:{type:Object,required:!0},pagination:{type:Object,required:!0},itemsPerPageOptions:{type:Array,default:()=>[5,10,15,-1]},prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},itemsPerPageAllText:{type:String,default:"$vuetify.dataFooter.itemsPerPageAll"},showFirstLastPage:Boolean,showCurrentPage:Boolean,disablePagination:Boolean,disableItemsPerPage:Boolean,pageText:{type:String,default:"$vuetify.dataFooter.pageText"}},computed:{disableNextPageIcon(){return this.options.itemsPerPage<=0||this.options.page*this.options.itemsPerPage>=this.pagination.itemsLength||this.pagination.pageStop<0},computedDataItemsPerPageOptions(){return this.itemsPerPageOptions.map((t=>"object"===typeof t?t:this.genDataItemsPerPageOption(t)))}},methods:{updateOptions(t){this.$emit("update:options",Object.assign({},this.options,t))},onFirstPage(){this.updateOptions({page:1})},onPreviousPage(){this.updateOptions({page:this.options.page-1})},onNextPage(){this.updateOptions({page:this.options.page+1})},onLastPage(){this.updateOptions({page:this.pagination.pageCount})},onChangeItemsPerPage(t){this.updateOptions({itemsPerPage:t,page:1})},genDataItemsPerPageOption(t){return{text:-1===t?this.$vuetify.lang.t(this.itemsPerPageAllText):String(t),value:t}},genItemsPerPageSelect(){let t=this.options.itemsPerPage;const e=this.computedDataItemsPerPageOptions;return e.length<=1?null:(e.find((e=>e.value===t))||(t=e[0]),this.$createElement("div",{staticClass:"v-data-footer__select"},[this.$vuetify.lang.t(this.itemsPerPageText),this.$createElement(o.Z,{attrs:{"aria-label":this.$vuetify.lang.t(this.itemsPerPageText)},props:{disabled:this.disableItemsPerPage,items:e,value:t,hideDetails:!0,auto:!0,minWidth:"75px"},on:{input:this.onChangeItemsPerPage}})]))},genPaginationInfo(){let t=["–"];const e=this.pagination.itemsLength;let n=this.pagination.pageStart,i=this.pagination.pageStop;return this.pagination.itemsLength&&this.pagination.itemsPerPage?(n=this.pagination.pageStart+1,i=e<this.pagination.pageStop||this.pagination.pageStop<0?e:this.pagination.pageStop,t=this.$scopedSlots["page-text"]?[this.$scopedSlots["page-text"]({pageStart:n,pageStop:i,itemsLength:e})]:[this.$vuetify.lang.t(this.pageText,n,i,e)]):this.$scopedSlots["page-text"]&&(t=[this.$scopedSlots["page-text"]({pageStart:n,pageStop:i,itemsLength:e})]),this.$createElement("div",{class:"v-data-footer__pagination"},t)},genIcon(t,e,n,i){return this.$createElement(l.Z,{props:{disabled:e||this.disablePagination,icon:!0,text:!0},on:{click:t},attrs:{"aria-label":n}},[this.$createElement(a.Z,i)])},genIcons(){const t=[],e=[];return t.push(this.genIcon(this.onPreviousPage,1===this.options.page,this.$vuetify.lang.t("$vuetify.dataFooter.prevPage"),this.$vuetify.rtl?this.nextIcon:this.prevIcon)),e.push(this.genIcon(this.onNextPage,this.disableNextPageIcon,this.$vuetify.lang.t("$vuetify.dataFooter.nextPage"),this.$vuetify.rtl?this.prevIcon:this.nextIcon)),this.showFirstLastPage&&(t.unshift(this.genIcon(this.onFirstPage,1===this.options.page,this.$vuetify.lang.t("$vuetify.dataFooter.firstPage"),this.$vuetify.rtl?this.lastIcon:this.firstIcon)),e.push(this.genIcon(this.onLastPage,this.options.page>=this.pagination.pageCount||-1===this.options.itemsPerPage,this.$vuetify.lang.t("$vuetify.dataFooter.lastPage"),this.$vuetify.rtl?this.firstIcon:this.lastIcon))),[this.$createElement("div",{staticClass:"v-data-footer__icons-before"},t),this.showCurrentPage&&this.$createElement("span",[this.options.page.toString()]),this.$createElement("div",{staticClass:"v-data-footer__icons-after"},e)]}},render(){return this.$createElement("div",{staticClass:"v-data-footer"},[(0,i.z9)(this,"prepend"),this.genItemsPerPageSelect(),this.genPaginationInfo(),this.genIcons()])}}),u=n(7388),h=n(6669),d=n(7678),p=n(4101),f=(0,d.Z)(u.Z,h.Z).extend({name:"v-data-iterator",props:{...r.options.props,itemKey:{type:String,default:"id"},value:{type:Array,default:()=>[]},singleSelect:Boolean,expanded:{type:Array,default:()=>[]},mobileBreakpoint:{...u.Z.options.props.mobileBreakpoint,default:600},singleExpand:Boolean,loading:[Boolean,String],noResultsText:{type:String,default:"$vuetify.dataIterator.noResultsText"},noDataText:{type:String,default:"$vuetify.noDataText"},loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideDefaultFooter:Boolean,footerProps:Object,selectableKey:{type:String,default:"isSelectable"}},data:()=>({selection:{},expansion:{},internalCurrentItems:[],shiftKeyDown:!1,lastEntry:-1}),computed:{everyItem(){return!!this.selectableItems.length&&this.selectableItems.every((t=>this.isSelected(t)))},someItems(){return this.selectableItems.some((t=>this.isSelected(t)))},sanitizedFooterProps(){return(0,i.$x)(this.footerProps)},selectableItems(){return this.internalCurrentItems.filter((t=>this.isSelectable(t)))}},watch:{value:{handler(t){this.selection=t.reduce(((t,e)=>(t[(0,i.vO)(e,this.itemKey)]=e,t)),{})},immediate:!0},selection(t,e){(0,i.vZ)(Object.keys(t),Object.keys(e))||this.$emit("input",Object.values(t))},expanded:{handler(t){this.expansion=t.reduce(((t,e)=>(t[(0,i.vO)(e,this.itemKey)]=!0,t)),{})},immediate:!0},expansion(t,e){if((0,i.vZ)(t,e))return;const n=Object.keys(t).filter((e=>t[e])),s=n.length?this.items.filter((t=>n.includes(String((0,i.vO)(t,this.itemKey))))):[];this.$emit("update:expanded",s)}},created(){const t=[["disable-initial-sort","sort-by"],["filter","custom-filter"],["pagination","options"],["total-items","server-items-length"],["hide-actions","hide-default-footer"],["rows-per-page-items","footer-props.items-per-page-options"],["rows-per-page-text","footer-props.items-per-page-text"],["prev-icon","footer-props.prev-icon"],["next-icon","footer-props.next-icon"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,p.fK)(t,e,this)}));const e=["expand","content-class","content-props","content-tag"];e.forEach((t=>{this.$attrs.hasOwnProperty(t)&&(0,p.Jk)(t)}))},mounted(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)},beforeDestroy(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)},methods:{onKeyDown(t){this.shiftKeyDown=t.keyCode===i.Do.shift||t.shiftKey},onKeyUp(t){t.keyCode!==i.Do.shift&&t.shiftKey||(this.shiftKeyDown=!1)},toggleSelectAll(t){const e=Object.assign({},this.selection);for(let n=0;n<this.selectableItems.length;n++){const s=this.selectableItems[n];if(!this.isSelectable(s))continue;const r=(0,i.vO)(s,this.itemKey);t?e[r]=s:delete e[r]}this.selection=e,this.$emit("toggle-select-all",{items:this.internalCurrentItems,value:t})},isSelectable(t){return!1!==(0,i.vO)(t,this.selectableKey)},isSelected(t){return!!this.selection[(0,i.vO)(t,this.itemKey)]||!1},select(t,e=!0,n=!0){if(!this.isSelectable(t))return;const s=this.singleSelect?{}:Object.assign({},this.selection),r=(0,i.vO)(t,this.itemKey);e?s[r]=t:delete s[r];const o=this.selectableItems.findIndex((t=>(0,i.vO)(t,this.itemKey)===r));if(-1===this.lastEntry)this.lastEntry=o;else if(this.shiftKeyDown&&!this.singleSelect&&n){const t=(0,i.vO)(this.selectableItems[this.lastEntry],this.itemKey),e=Object.keys(this.selection).includes(String(t));this.multipleSelect(e,n,s,o)}if(this.lastEntry=o,this.singleSelect&&n){const t=Object.keys(this.selection),e=t.length&&(0,i.vO)(this.selection[t[0]],this.itemKey);e&&e!==r&&this.$emit("item-selected",{item:this.selection[e],value:!1})}this.selection=s,n&&this.$emit("item-selected",{item:t,value:e})},multipleSelect(t=!0,e=!0,n,s){const r=s<this.lastEntry?s:this.lastEntry,o=s<this.lastEntry?this.lastEntry:s;for(let a=r;a<=o;a++){const s=this.selectableItems[a],r=(0,i.vO)(s,this.itemKey);t?n[r]=s:delete n[r],e&&this.$emit("item-selected",{currentItem:s,value:t})}},isExpanded(t){return this.expansion[(0,i.vO)(t,this.itemKey)]||!1},expand(t,e=!0){const n=this.singleExpand?{}:Object.assign({},this.expansion),s=(0,i.vO)(t,this.itemKey);e?n[s]=!0:delete n[s],this.expansion=n,this.$emit("item-expanded",{item:t,value:e})},createItemProps(t,e){return{item:t,index:e,select:e=>this.select(t,e),isSelected:this.isSelected(t),expand:e=>this.expand(t,e),isExpanded:this.isExpanded(t),isMobile:this.isMobile}},genEmptyWrapper(t){return this.$createElement("div",t)},genEmpty(t,e){if(0===t&&this.loading){const t=this.$slots.loading||this.$vuetify.lang.t(this.loadingText);return this.genEmptyWrapper(t)}if(0===t){const t=this.$slots["no-data"]||this.$vuetify.lang.t(this.noDataText);return this.genEmptyWrapper(t)}if(0===e){const t=this.$slots["no-results"]||this.$vuetify.lang.t(this.noResultsText);return this.genEmptyWrapper(t)}return null},genItems(t){const e=this.genEmpty(t.originalItemsLength,t.pagination.itemsLength);return e?[e]:this.$scopedSlots.default?this.$scopedSlots.default({...t,isSelected:this.isSelected,select:this.select,isExpanded:this.isExpanded,isMobile:this.isMobile,expand:this.expand}):this.$scopedSlots.item?t.items.map(((t,e)=>this.$scopedSlots.item(this.createItemProps(t,e)))):[]},genFooter(t){if(this.hideDefaultFooter)return null;const e={props:{...this.sanitizedFooterProps,options:t.options,pagination:t.pagination},on:{"update:options":e=>t.updateOptions(e)}},n=(0,i.FT)("footer.",this.$scopedSlots);return this.$createElement(c,{scopedSlots:n,...e})},genDefaultScopedSlot(t){const e={...t,someItems:this.someItems,everyItem:this.everyItem,toggleSelectAll:this.toggleSelectAll};return this.$createElement("div",{staticClass:"v-data-iterator"},[(0,i.z9)(this,"header",e,!0),this.genItems(t),this.genFooter(t),(0,i.z9)(this,"footer",e,!0)])}},render(){return this.$createElement(r,{props:this.$props,on:{"update:options":(t,e)=>!(0,i.vZ)(t,e)&&this.$emit("update:options",t),"update:page":t=>this.$emit("update:page",t),"update:items-per-page":t=>this.$emit("update:items-per-page",t),"update:sort-by":t=>this.$emit("update:sort-by",t),"update:sort-desc":t=>this.$emit("update:sort-desc",t),"update:group-by":t=>this.$emit("update:group-by",t),"update:group-desc":t=>this.$emit("update:group-desc",t),pagination:(t,e)=>!(0,i.vZ)(t,e)&&this.$emit("pagination",t),"current-items":t=>{this.internalCurrentItems=t,this.$emit("current-items",t)},"page-count":t=>this.$emit("page-count",t)},scopedSlots:{default:this.genDefaultScopedSlot}})}}),m=n(9003),g=n(6170),v=n(7069),y=(0,d.Z)().extend({directives:{ripple:v.Z},props:{headers:{type:Array,default:()=>[]},options:{type:Object,default:()=>({page:1,itemsPerPage:10,sortBy:[],sortDesc:[],groupBy:[],groupDesc:[],multiSort:!1,mustSort:!1})},checkboxColor:String,sortIcon:{type:String,default:"$sort"},everyItem:Boolean,someItems:Boolean,showGroupBy:Boolean,singleSelect:Boolean,disableSort:Boolean},methods:{genSelectAll(){var t;const e={props:{value:this.everyItem,indeterminate:!this.everyItem&&this.someItems,color:null!==(t=this.checkboxColor)&&void 0!==t?t:""},on:{input:t=>this.$emit("toggle-select-all",t)}};return this.$scopedSlots["data-table-select"]?this.$scopedSlots["data-table-select"](e):this.$createElement(g.Z,{staticClass:"v-data-table__checkbox",...e})},genSortIcon(){return this.$createElement(a.Z,{staticClass:"v-data-table-header__icon",props:{size:18}},[this.sortIcon])}}}),b=(0,d.Z)(y).extend({name:"v-data-table-header-mobile",props:{sortByText:{type:String,default:"$vuetify.dataTable.sortBy"}},methods:{genSortChip(t){const e=[t.item.text],n=this.options.sortBy.findIndex((e=>e===t.item.value)),i=n>=0,s=this.options.sortDesc[n];return e.push(this.$createElement("div",{staticClass:"v-chip__close",class:{sortable:!0,active:i,asc:i&&!s,desc:i&&s}},[this.genSortIcon()])),this.$createElement(m.Z,{staticClass:"sortable",on:{click:e=>{e.stopPropagation(),this.$emit("sort",t.item.value)}}},e)},genSortSelect(t){return this.$createElement(o.Z,{props:{label:this.$vuetify.lang.t(this.sortByText),items:t,hideDetails:!0,multiple:this.options.multiSort,value:this.options.multiSort?this.options.sortBy:this.options.sortBy[0],menuProps:{closeOnContentClick:!0}},on:{change:t=>this.$emit("sort",t)},scopedSlots:{selection:t=>this.genSortChip(t)}})}},render(t){const e=[],n=this.headers.find((t=>"data-table-select"===t.value));n&&!this.singleSelect&&e.push(this.$createElement("div",{class:["v-data-table-header-mobile__select",...(0,i.TI)(n.class)],attrs:{width:n.width}},[this.genSelectAll()]));const s=this.headers.filter((t=>!1!==t.sortable&&"data-table-select"!==t.value)).map((t=>({text:t.text,value:t.value})));!this.disableSort&&s.length&&e.push(this.genSortSelect(s));const r=e.length?t("th",[t("div",{staticClass:"v-data-table-header-mobile__wrapper"},e)]):void 0,o=t("tr",[r]);return t("thead",{staticClass:"v-data-table-header v-data-table-header-mobile"},[o])}}),w=(0,d.Z)(y).extend({name:"v-data-table-header-desktop",methods:{genGroupByToggle(t){return this.$createElement("span",{on:{click:e=>{e.stopPropagation(),this.$emit("group",t.value)}}},["group"])},getAria(t,e){const n=t=>this.$vuetify.lang.t(`$vuetify.dataTable.ariaLabel.${t}`);let i="none",s=[n("sortNone"),n("activateAscending")];return t?(e?(i="descending",s=[n("sortDescending"),n(this.options.mustSort?"activateAscending":"activateNone")]):(i="ascending",s=[n("sortAscending"),n("activateDescending")]),{ariaSort:i,ariaLabel:s.join(" ")}):{ariaSort:i,ariaLabel:s.join(" ")}},genHeader(t){const e={attrs:{role:"columnheader",scope:"col","aria-label":t.text||""},style:{width:(0,i.kb)(t.width),minWidth:(0,i.kb)(t.width)},class:[`text-${t.align||"start"}`,...(0,i.TI)(t.class),t.divider&&"v-data-table__divider"],on:{}},n=[];if("data-table-select"===t.value&&!this.singleSelect)return this.$createElement("th",e,[this.genSelectAll()]);if(n.push(this.$scopedSlots.hasOwnProperty(t.value)?this.$scopedSlots[t.value]({header:t}):this.$createElement("span",[t.text])),!this.disableSort&&(t.sortable||!t.hasOwnProperty("sortable"))){e.on.click=()=>this.$emit("sort",t.value);const i=this.options.sortBy.findIndex((e=>e===t.value)),s=i>=0,r=this.options.sortDesc[i];e.class.push("sortable");const{ariaLabel:o,ariaSort:a}=this.getAria(s,r);e.attrs["aria-label"]+=`${t.text?": ":""}${o}`,e.attrs["aria-sort"]=a,s&&(e.class.push("active"),e.class.push(r?"desc":"asc")),"end"===t.align?n.unshift(this.genSortIcon()):n.push(this.genSortIcon()),this.options.multiSort&&s&&n.push(this.$createElement("span",{class:"v-data-table-header__sort-badge"},[String(i+1)]))}return this.showGroupBy&&!1!==t.groupable&&n.push(this.genGroupByToggle(t)),this.$createElement("th",e,n)}},render(){return this.$createElement("thead",{staticClass:"v-data-table-header"},[this.$createElement("tr",this.headers.map((t=>this.genHeader(t))))])}});function _(t){if(t.model&&t.on&&t.on.input)if(Array.isArray(t.on.input)){const e=t.on.input.indexOf(t.model.callback);e>-1&&t.on.input.splice(e,1)}else delete t.on.input}var k=n(1767);function I(t,e){const n=[];for(const i in t)t.hasOwnProperty(i)&&n.push(e("template",{slot:i},t[i]));return n}var S=s.ZP.extend({name:"v-data-table-header",functional:!0,props:{...y.options.props,mobile:Boolean},render(t,{props:e,data:n,slots:i}){_(n);const s=I(i(),t);return n=(0,k.ZP)(n,{props:e}),e.mobile?t(b,n,s):t(w,n,s)}});function C(t){var e;return 1!==t.length||!["td","th"].includes(null===(e=t[0])||void 0===e?void 0:e.tag)}var T=s.ZP.extend({name:"row",functional:!0,props:{headers:Array,index:Number,item:Object,rtl:Boolean},render(t,{props:e,slots:n,data:s}){const r=n(),o=e.headers.map((n=>{const o=[],a=(0,i.vO)(e.item,n.value),l=n.value,c=s.scopedSlots&&s.scopedSlots.hasOwnProperty(l)&&s.scopedSlots[l],u=r.hasOwnProperty(l)&&r[l];c?o.push(...(0,i.TI)(c({item:e.item,isMobile:!1,header:n,index:e.index,value:a}))):u?o.push(...(0,i.TI)(u)):o.push(null==a?a:String(a));const h=`text-${n.align||"start"}`;return C(o)?t("td",{class:[h,n.cellClass,{"v-data-table__divider":n.divider}]},o):o}));return t("tr",s,o)}}),x=s.ZP.extend({name:"row-group",functional:!0,props:{value:{type:Boolean,default:!0},headerClass:{type:String,default:"v-row-group__header"},contentClass:String,summaryClass:{type:String,default:"v-row-group__summary"}},render(t,{slots:e,props:n}){const i=e(),s=[];return i["column.header"]?s.push(t("tr",{staticClass:n.headerClass},i["column.header"])):i["row.header"]&&s.push(...i["row.header"]),i["row.content"]&&n.value&&s.push(...i["row.content"]),i["column.summary"]?s.push(t("tr",{staticClass:n.summaryClass},i["column.summary"])):i["row.summary"]&&s.push(...i["row.summary"]),s}}),E=(0,d.Z)(h.Z).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:(0,i.kb)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),$=s.ZP.extend({name:"row",functional:!0,props:{headers:Array,hideDefaultHeader:Boolean,index:Number,item:Object,rtl:Boolean},render(t,{props:e,slots:n,data:s}){const r=n(),o=e.headers.map((n=>{const o={"v-data-table__mobile-row":!0},a=[],l=(0,i.vO)(e.item,n.value),c=n.value,u=s.scopedSlots&&s.scopedSlots.hasOwnProperty(c)&&s.scopedSlots[c],h=r.hasOwnProperty(c)&&r[c];u?a.push(u({item:e.item,isMobile:!0,header:n,index:e.index,value:l})):h?a.push(h):a.push(null==l?l:String(l));const d=[t("div",{staticClass:"v-data-table__mobile-row__cell"},a)];return"dataTableSelect"===n.value||e.hideDefaultHeader||d.unshift(t("div",{staticClass:"v-data-table__mobile-row__header"},[n.text])),t("td",{class:o},d)}));return t("tr",{...s,staticClass:"v-data-table__mobile-table-row"},o)}}),A=n(401);function O(t,e,n){return s=>{const r=(0,i.vO)(t,s.value);return s.filter?s.filter(r,e,t):n(r,e,t)}}function P(t,e,n,s,r){return e="string"===typeof e?e.trim():null,t.filter((t=>{const o=n.every(O(t,e,i.f9)),a=!e||s.some(O(t,e,r));return o&&a}))}var D=(0,d.Z)(f,A.Z).extend({name:"v-data-table",directives:{ripple:v.Z},props:{headers:{type:Array,default:()=>[]},showSelect:Boolean,checkboxColor:String,showExpand:Boolean,showGroupBy:Boolean,height:[Number,String],hideDefaultHeader:Boolean,caption:String,dense:Boolean,headerProps:Object,calculateWidths:Boolean,fixedHeader:Boolean,headersLength:Number,expandIcon:{type:String,default:"$expand"},customFilter:{type:Function,default:i.f9},itemClass:{type:[String,Function],default:()=>""},loaderHeight:{type:[Number,String],default:4}},data(){return{internalGroupBy:[],openCache:{},widths:[]}},computed:{computedHeaders(){if(!this.headers)return[];const t=this.headers.filter((t=>void 0===t.value||!this.internalGroupBy.find((e=>e===t.value)))),e={text:"",sortable:!1,width:"1px"};if(this.showSelect){const n=t.findIndex((t=>"data-table-select"===t.value));n<0?t.unshift({...e,value:"data-table-select"}):t.splice(n,1,{...e,...t[n]})}if(this.showExpand){const n=t.findIndex((t=>"data-table-expand"===t.value));n<0?t.unshift({...e,value:"data-table-expand"}):t.splice(n,1,{...e,...t[n]})}return t},colspanAttrs(){return this.isMobile?void 0:{colspan:this.headersLength||this.computedHeaders.length}},columnSorters(){return this.computedHeaders.reduce(((t,e)=>(e.sort&&(t[e.value]=e.sort),t)),{})},headersWithCustomFilters(){return this.headers.filter((t=>t.filter&&(!t.hasOwnProperty("filterable")||!0===t.filterable)))},headersWithoutCustomFilters(){return this.headers.filter((t=>!t.filter&&(!t.hasOwnProperty("filterable")||!0===t.filterable)))},sanitizedHeaderProps(){return(0,i.$x)(this.headerProps)},computedItemsPerPage(){const t=this.options&&this.options.itemsPerPage?this.options.itemsPerPage:this.itemsPerPage,e=this.sanitizedFooterProps.itemsPerPageOptions;if(e&&!e.find((e=>"number"===typeof e?e===t:e.value===t))){const t=e[0];return"object"===typeof t?t.value:t}return t},groupByText(){var t,e,n;return null!==(n=null===(e=null===(t=this.headers)||void 0===t?void 0:t.find((t=>{var e;return t.value===(null===(e=this.internalGroupBy)||void 0===e?void 0:e[0])})))||void 0===e?void 0:e.text)&&void 0!==n?n:""}},created(){const t=[["sort-icon","header-props.sort-icon"],["hide-headers","hide-default-header"],["select-all","show-select"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,p.fK)(t,e,this)}))},mounted(){this.calculateWidths&&(window.addEventListener("resize",this.calcWidths),this.calcWidths())},beforeDestroy(){this.calculateWidths&&window.removeEventListener("resize",this.calcWidths)},methods:{calcWidths(){this.widths=Array.from(this.$el.querySelectorAll("th")).map((t=>t.clientWidth))},customFilterWithColumns(t,e){return P(t,e,this.headersWithCustomFilters,this.headersWithoutCustomFilters,this.customFilter)},customSortWithHeaders(t,e,n,i){return this.customSort(t,e,n,i,this.columnSorters)},createItemProps(t,e){const n=f.options.methods.createItemProps.call(this,t,e);return Object.assign(n,{headers:this.computedHeaders})},genCaption(t){return this.caption?[this.$createElement("caption",[this.caption])]:(0,i.z9)(this,"caption",t,!0)},genColgroup(t){return this.$createElement("colgroup",this.computedHeaders.map((t=>this.$createElement("col",{class:{divider:t.divider}}))))},genLoading(){const t=this.$createElement("th",{staticClass:"column",attrs:this.colspanAttrs},[this.genProgress()]),e=this.$createElement("tr",{staticClass:"v-data-table__progress"},[t]);return this.$createElement("thead",[e])},genHeaders(t){const e={props:{...this.sanitizedHeaderProps,headers:this.computedHeaders,options:t.options,mobile:this.isMobile,showGroupBy:this.showGroupBy,checkboxColor:this.checkboxColor,someItems:this.someItems,everyItem:this.everyItem,singleSelect:this.singleSelect,disableSort:this.disableSort},on:{sort:t.sort,group:t.group,"toggle-select-all":this.toggleSelectAll}},n=[(0,i.z9)(this,"header",{...e,isMobile:this.isMobile})];if(!this.hideDefaultHeader){const t=(0,i.FT)("header.",this.$scopedSlots);n.push(this.$createElement(S,{...e,scopedSlots:t}))}return this.loading&&n.push(this.genLoading()),n},genEmptyWrapper(t){return this.$createElement("tr",{staticClass:"v-data-table__empty-wrapper"},[this.$createElement("td",{attrs:this.colspanAttrs},t)])},genItems(t,e){const n=this.genEmpty(e.originalItemsLength,e.pagination.itemsLength);return n?[n]:e.groupedItems?this.genGroupedRows(e.groupedItems,e):this.genRows(t,e)},genGroupedRows(t,e){return t.map((t=>(this.openCache.hasOwnProperty(t.name)||this.$set(this.openCache,t.name,!0),this.$scopedSlots.group?this.$scopedSlots.group({group:t.name,options:e.options,isMobile:this.isMobile,items:t.items,headers:this.computedHeaders}):this.genDefaultGroupedRow(t.name,t.items,e))))},genDefaultGroupedRow(t,e,n){const i=!!this.openCache[t],s=[this.$createElement("template",{slot:"row.content"},this.genRows(e,n))],r=()=>this.$set(this.openCache,t,!this.openCache[t]),o=()=>n.updateOptions({groupBy:[],groupDesc:[]});if(this.$scopedSlots["group.header"])s.unshift(this.$createElement("template",{slot:"column.header"},[this.$scopedSlots["group.header"]({group:t,groupBy:n.options.groupBy,isMobile:this.isMobile,items:e,headers:this.computedHeaders,isOpen:i,toggle:r,remove:o})]));else{const e=this.$createElement(l.Z,{staticClass:"ma-0",props:{icon:!0,small:!0},on:{click:r}},[this.$createElement(a.Z,[i?"$minus":"$plus"])]),n=this.$createElement(l.Z,{staticClass:"ma-0",props:{icon:!0,small:!0},on:{click:o}},[this.$createElement(a.Z,["$close"])]),c=this.$createElement("td",{staticClass:"text-start",attrs:this.colspanAttrs},[e,`${this.groupByText}: ${t}`,n]);s.unshift(this.$createElement("template",{slot:"column.header"},[c]))}return this.$scopedSlots["group.summary"]&&s.push(this.$createElement("template",{slot:"column.summary"},[this.$scopedSlots["group.summary"]({group:t,groupBy:n.options.groupBy,isMobile:this.isMobile,items:e,headers:this.computedHeaders,isOpen:i,toggle:r})])),this.$createElement(x,{key:t,props:{value:i}},s)},genRows(t,e){return this.$scopedSlots.item?this.genScopedRows(t,e):this.genDefaultRows(t,e)},genScopedRows(t,e){const n=[];for(let i=0;i<t.length;i++){const e=t[i];n.push(this.$scopedSlots.item({...this.createItemProps(e,i),isMobile:this.isMobile})),this.isExpanded(e)&&n.push(this.$scopedSlots["expanded-item"]({headers:this.computedHeaders,isMobile:this.isMobile,index:i,item:e}))}return n},genDefaultRows(t,e){return this.$scopedSlots["expanded-item"]?t.map(((t,e)=>this.genDefaultExpandedRow(t,e))):t.map(((t,e)=>this.genDefaultSimpleRow(t,e)))},genDefaultExpandedRow(t,e){const n=this.isExpanded(t),i={"v-data-table__expanded v-data-table__expanded__row":n},s=this.genDefaultSimpleRow(t,e,i),r=this.$createElement("tr",{staticClass:"v-data-table__expanded v-data-table__expanded__content"},[this.$scopedSlots["expanded-item"]({headers:this.computedHeaders,isMobile:this.isMobile,item:t})]);return this.$createElement(x,{props:{value:n}},[this.$createElement("template",{slot:"row.header"},[s]),this.$createElement("template",{slot:"row.content"},[r])])},genDefaultSimpleRow(t,e,n={}){const s=(0,i.FT)("item.",this.$scopedSlots),r=this.createItemProps(t,e);if(this.showSelect){const e=s["data-table-select"];s["data-table-select"]=e?()=>e({...r,isMobile:this.isMobile}):()=>{var e;return this.$createElement(g.Z,{staticClass:"v-data-table__checkbox",props:{value:r.isSelected,disabled:!this.isSelectable(t),color:null!==(e=this.checkboxColor)&&void 0!==e?e:""},on:{input:t=>r.select(t)}})}}if(this.showExpand){const t=s["data-table-expand"];s["data-table-expand"]=t?()=>t(r):()=>this.$createElement(a.Z,{staticClass:"v-data-table__expand-icon",class:{"v-data-table__expand-icon--active":r.isExpanded},on:{click:t=>{t.stopPropagation(),r.expand(!r.isExpanded)}}},[this.expandIcon])}return this.$createElement(this.isMobile?$:T,{key:(0,i.vO)(t,this.itemKey),class:(0,k.ze)({...n,"v-data-table__selected":r.isSelected},(0,i.qF)(t,this.itemClass)),props:{headers:this.computedHeaders,hideDefaultHeader:this.hideDefaultHeader,index:e,item:t,rtl:this.$vuetify.rtl},scopedSlots:s,on:{click:e=>this.$emit("click:row",t,r,e),contextmenu:t=>this.$emit("contextmenu:row",t,r),dblclick:t=>this.$emit("dblclick:row",t,r)}})},genBody(t){const e={...t,expand:this.expand,headers:this.computedHeaders,isExpanded:this.isExpanded,isMobile:this.isMobile,isSelected:this.isSelected,select:this.select};return this.$scopedSlots.body?this.$scopedSlots.body(e):this.$createElement("tbody",[(0,i.z9)(this,"body.prepend",e,!0),this.genItems(t.items,t),(0,i.z9)(this,"body.append",e,!0)])},genFoot(t){var e,n;return null===(n=(e=this.$scopedSlots).foot)||void 0===n?void 0:n.call(e,t)},genFooters(t){const e={props:{options:t.options,pagination:t.pagination,itemsPerPageText:"$vuetify.dataTable.itemsPerPageText",...this.sanitizedFooterProps},on:{"update:options":e=>t.updateOptions(e)},widths:this.widths,headers:this.computedHeaders},n=[(0,i.z9)(this,"footer",e,!0)];return this.hideDefaultFooter||n.push(this.$createElement(c,{...e,scopedSlots:(0,i.FT)("footer.",this.$scopedSlots)})),n},genDefaultScopedSlot(t){const e={height:this.height,fixedHeader:this.fixedHeader,dense:this.dense};return this.$createElement(E,{props:e,class:{"v-data-table--mobile":this.isMobile}},[this.proxySlot("top",(0,i.z9)(this,"top",{...t,isMobile:this.isMobile},!0)),this.genCaption(t),this.genColgroup(t),this.genHeaders(t),this.genBody(t),this.genFoot(t),this.proxySlot("bottom",this.genFooters(t))])},proxySlot(t,e){return this.$createElement("template",{slot:t},e)}},render(){return this.$createElement(r,{props:{...this.$props,customFilter:this.customFilterWithColumns,customSort:this.customSortWithHeaders,itemsPerPage:this.computedItemsPerPage},on:{"update:options":(t,e)=>{this.internalGroupBy=t.groupBy||[],!(0,i.vZ)(t,e)&&this.$emit("update:options",t)},"update:page":t=>this.$emit("update:page",t),"update:items-per-page":t=>this.$emit("update:items-per-page",t),"update:sort-by":t=>this.$emit("update:sort-by",t),"update:sort-desc":t=>this.$emit("update:sort-desc",t),"update:group-by":t=>this.$emit("update:group-by",t),"update:group-desc":t=>this.$emit("update:group-desc",t),pagination:(t,e)=>!(0,i.vZ)(t,e)&&this.$emit("pagination",t),"current-items":t=>{this.internalCurrentItems=t,this.$emit("current-items",t)},"page-count":t=>this.$emit("page-count",t)},scopedSlots:{default:this.genDefaultScopedSlot}})}})},1030:function(t,e,n){"use strict";n.d(e,{Z:function(){return U}});var i=n(2240),s=n(6878),r=n(7678),o=n(5352),a=(0,r.Z)(s.Z).extend({methods:{genPickerButton(t,e,n,i=!1,s=""){const r=this[t]===e,a=n=>{n.stopPropagation(),this.$emit(`update:${(0,o.GL)(t)}`,e)};return this.$createElement("div",{staticClass:`v-picker__title__btn ${s}`.trim(),class:{"v-picker__title__btn--active":r,"v-picker__title__btn--readonly":i},on:r||i?void 0:{click:a}},Array.isArray(n)?n:[n])}}}),l=(0,r.Z)(a).extend({name:"v-date-picker-title",props:{date:{type:String,default:""},disabled:Boolean,readonly:Boolean,selectingYear:Boolean,value:{type:String},year:{type:[Number,String],default:""},yearIcon:{type:String}},data:()=>({isReversing:!1}),computed:{computedTransition(){return this.isReversing?"picker-reverse-transition":"picker-transition"}},watch:{value(t,e){this.isReversing=t<e}},methods:{genYearIcon(){return this.$createElement(i.Z,{props:{dark:!0}},this.yearIcon)},getYearBtn(){return this.genPickerButton("selectingYear",!0,[String(this.year),this.yearIcon?this.genYearIcon():null],!1,"v-date-picker-title__year")},genTitleText(){return this.$createElement("transition",{props:{name:this.computedTransition}},[this.$createElement("div",{domProps:{innerHTML:this.date||"&nbsp;"},key:this.value})])},genTitleDate(){return this.genPickerButton("selectingYear",!1,[this.genTitleText()],!1,"v-date-picker-title__date")}},render(t){return t("div",{staticClass:"v-date-picker-title",class:{"v-date-picker-title--disabled":this.disabled}},[this.getYearBtn(),this.genTitleDate()])}}),c=n(6656),u=n(144),h=u.ZP.extend({name:"localable",props:{locale:String},computed:{currentLocale(){return this.locale||this.$vuetify.lang.current}}}),d=n(6669);const p=(t,e,n)=>(e>>=0,t=String(t),n=String(n),t.length>e?String(t):(e-=t.length,e>n.length&&(n+=n.repeat(e/n.length)),n.slice(0,e)+String(t)));var f=(t,e=2)=>p(t,e,"0");function m(t,e,n={start:0,length:0}){const i=t=>{const[e,n,i]=t.trim().split(" ")[0].split("-");return[f(e,4),f(n||1),f(i||1)].join("-")};try{const n=new Intl.DateTimeFormat(t||void 0,e);return t=>n.format(new Date(`${i(t)}T00:00:00+00:00`))}catch(s){return n.start||n.length?t=>i(t).substr(n.start||0,n.length):void 0}}var g=m,v=(t,e)=>{const[n,i]=t.split("-").map(Number);return i+e===0?n-1+"-12":i+e===13?`${n+1}-01`:`${n}-${f(i+e)}`},y=(0,r.Z)(s.Z,h,d.Z).extend({name:"v-date-picker-header",props:{disabled:Boolean,format:Function,min:String,max:String,nextAriaLabel:String,nextIcon:{type:String,default:"$next"},prevAriaLabel:String,prevIcon:{type:String,default:"$prev"},readonly:Boolean,value:{type:[Number,String],required:!0}},data(){return{isReversing:!1}},computed:{formatter(){return this.format?this.format:String(this.value).split("-")[1]?g(this.currentLocale,{month:"long",year:"numeric",timeZone:"UTC"},{length:7}):g(this.currentLocale,{year:"numeric",timeZone:"UTC"},{length:4})}},watch:{value(t,e){this.isReversing=t<e}},methods:{genBtn(t){const e=t>0?this.nextAriaLabel:this.prevAriaLabel,n=e?this.$vuetify.lang.t(e):void 0,s=this.disabled||t<0&&this.min&&this.calculateChange(t)<this.min||t>0&&this.max&&this.calculateChange(t)>this.max;return this.$createElement(c.Z,{attrs:{"aria-label":n},props:{dark:this.dark,disabled:s,icon:!0,light:this.light},on:{click:e=>{e.stopPropagation(),this.$emit("input",this.calculateChange(t))}}},[this.$createElement(i.Z,t<0===!this.$vuetify.rtl?this.prevIcon:this.nextIcon)])},calculateChange(t){const[e,n]=String(this.value).split("-").map(Number);return null==n?`${e+t}`:v(String(this.value),t)},genHeader(){const t=!this.disabled&&(this.color||"accent"),e=this.$createElement("div",this.setTextColor(t,{key:String(this.value)}),[this.$createElement("button",{attrs:{type:"button"},on:{click:()=>this.$emit("toggle")}},[this.$slots.default||this.formatter(String(this.value))])]),n=this.$createElement("transition",{props:{name:this.isReversing===!this.$vuetify.rtl?"tab-reverse-transition":"tab-transition"}},[e]);return this.$createElement("div",{staticClass:"v-date-picker-header__value",class:{"v-date-picker-header__value--disabled":this.disabled}},[n])}},render(){return this.$createElement("div",{staticClass:"v-date-picker-header",class:{"v-date-picker-header--disabled":this.disabled,...this.themeClasses}},[this.genBtn(-1),this.genHeader(),this.genBtn(1)])}}),b=(n(541),n(7658),n(4802));function w(t,e,n){return Object.keys(t.$listeners).reduce(((i,s)=>(s.endsWith(e)&&(i[s.slice(0,-e.length)]=e=>t.$emit(s,n,e)),i)),{})}function _(t,e){return Object.keys(t.$listeners).reduce(((n,i)=>(i.endsWith(e)&&(n[i]=t.$listeners[i]),n)),{})}var k=(t,e)=>{const[n,i=1,s=1]=t.split("-");return`${n}-${f(i)}-${f(s)}`.substr(0,{date:10,month:7,year:4}[e])};function I(t,e,n,i){return(!i||i(t))&&(!e||t>=e.substr(0,10))&&(!n||t<=n)}var S=n(1767),C=(0,r.Z)(s.Z,h,d.Z).extend({directives:{Touch:b.Z},props:{allowedDates:Function,current:String,disabled:Boolean,format:Function,events:{type:[Array,Function,Object],default:()=>null},eventColor:{type:[Array,Function,Object,String],default:()=>"warning"},min:String,max:String,range:Boolean,readonly:Boolean,scrollable:Boolean,tableDate:{type:String,required:!0},value:[String,Array]},data:()=>({isReversing:!1,wheelThrottle:null}),computed:{computedTransition(){return this.isReversing===!this.$vuetify.rtl?"tab-reverse-transition":"tab-transition"},displayedMonth(){return Number(this.tableDate.split("-")[1])-1},displayedYear(){return Number(this.tableDate.split("-")[0])}},watch:{tableDate(t,e){this.isReversing=t<e}},mounted(){this.wheelThrottle=(0,o.P2)(this.wheel,250)},methods:{genButtonClasses(t,e,n,i,s,r){return{"v-size--default":!e,"v-date-picker-table__current":i,"v-btn--active":n,"v-btn--flat":!t||this.disabled,"v-btn--text":n===i,"v-btn--rounded":e,"v-btn--disabled":!t||this.disabled,"v-btn--outlined":i&&!n,"v-date-picker--first-in-range":s,"v-date-picker--last-in-range":r,...this.themeClasses}},genButtonEvents(t,e,n){if(!this.disabled)return(0,S.bp)({click:()=>{e&&!this.readonly&&this.$emit("input",t)}},w(this,`:${n}`,t))},genButton(t,e,n,i,s=!1){const r=I(t,this.min,this.max,this.allowedDates),o=this.isSelected(t)&&r,a=t===this.current,l=o?this.setBackgroundColor:this.setTextColor,c=(o||a)&&(this.color||"accent");let u=!1,h=!1;return this.range&&this.value&&Array.isArray(this.value)&&(u=t===this.value[0],h=t===this.value[this.value.length-1]),this.$createElement("button",l(c,{staticClass:"v-btn",class:this.genButtonClasses(r&&!s,e,o,a,u,h),attrs:{type:"button"},domProps:{disabled:this.disabled||!r||s},on:this.genButtonEvents(t,r,n)}),[this.$createElement("div",{staticClass:"v-btn__content"},[i(t)]),this.genEvents(t)])},getEventColors(t){const e=t=>Array.isArray(t)?t:[t];let n,i=[];return n=Array.isArray(this.events)?this.events.includes(t):this.events instanceof Function?this.events(t)||!1:this.events&&this.events[t]||!1,n?(i=!0!==n?e(n):"string"===typeof this.eventColor?[this.eventColor]:"function"===typeof this.eventColor?e(this.eventColor(t)):Array.isArray(this.eventColor)?this.eventColor:e(this.eventColor[t]),i.filter((t=>t))):[]},genEvents(t){const e=this.getEventColors(t);return e.length?this.$createElement("div",{staticClass:"v-date-picker-table__events"},e.map((t=>this.$createElement("div",this.setBackgroundColor(t))))):null},isValidScroll(t,e){const n=e(t),i=1===n.split("-").length?"year":"month";return t<0&&(!this.min||n>=k(this.min,i))||t>0&&(!this.max||n<=k(this.max,i))},wheel(t,e){this.$emit("update:table-date",e(t.deltaY))},touch(t,e){this.$emit("update:table-date",e(t))},genTable(t,e,n){const i=this.$createElement("transition",{props:{name:this.computedTransition}},[this.$createElement("table",{key:this.tableDate},e)]),s={name:"touch",value:{left:t=>t.offsetX<-15&&this.isValidScroll(1,n)&&this.touch(1,n),right:t=>t.offsetX>15&&this.isValidScroll(-1,n)&&this.touch(-1,n)}};return this.$createElement("div",{staticClass:t,class:{"v-date-picker-table--disabled":this.disabled,...this.themeClasses},on:!this.disabled&&this.scrollable?{wheel:t=>{t.preventDefault(),this.isValidScroll(t.deltaY,n)&&this.wheelThrottle(t,n)}}:void 0,directives:[s]},[i])},isSelected(t){if(Array.isArray(this.value)){if(this.range&&2===this.value.length){const[e,n]=[...this.value].sort();return e<=t&&t<=n}return-1!==this.value.indexOf(t)}return t===this.value}}});function T(t,e=0,n=1){let i;return t<100&&t>=0?(i=new Date(Date.UTC(t,e,n)),isFinite(i.getUTCFullYear())&&i.setUTCFullYear(t)):i=new Date(Date.UTC(t,e,n)),i}function x(t,e,n){const i=7+e-n,s=(7+T(t,0,i).getUTCDay()-e)%7;return-s+i-1}function E(t,e,n,i){let s=[0,31,59,90,120,151,181,212,243,273,304,334][e];return e>1&&O(t)&&s++,s+n}function $(t,e,n){const i=x(t,e,n),s=x(t+1,e,n),r=O(t)?366:365;return(r-i+s)/7}function A(t,e,n,i,s){const r=x(t,i,s),o=Math.ceil((E(t,e,n,i)-r)/7);return o<1?o+$(t-1,i,s):o>$(t,i,s)?o-$(t,i,s):o}function O(t){return t%4===0&&t%100!==0||t%400===0}var P=(0,r.Z)(C).extend({name:"v-date-picker-date-table",props:{firstDayOfWeek:{type:[String,Number],default:0},localeFirstDayOfYear:{type:[String,Number],default:0},showAdjacentMonths:Boolean,showWeek:Boolean,weekdayFormat:Function},computed:{formatter(){return this.format||g(this.currentLocale,{day:"numeric",timeZone:"UTC"},{start:8,length:2})},weekdayFormatter(){return this.weekdayFormat||g(this.currentLocale,{weekday:"narrow",timeZone:"UTC"})},weekDays(){const t=parseInt(this.firstDayOfWeek,10);return this.weekdayFormatter?(0,o.MT)(7).map((e=>this.weekdayFormatter(`2017-01-${t+e+15}`))):(0,o.MT)(7).map((e=>["S","M","T","W","T","F","S"][(e+t)%7]))}},methods:{calculateTableDate(t){return v(this.tableDate,Math.sign(t||1))},genTHead(){const t=this.weekDays.map((t=>this.$createElement("th",t)));return this.showWeek&&t.unshift(this.$createElement("th")),this.$createElement("thead",this.genTR(t))},weekDaysBeforeFirstDayOfTheMonth(){const t=new Date(`${this.displayedYear}-${f(this.displayedMonth+1)}-01T00:00:00+00:00`),e=t.getUTCDay();return(e-parseInt(this.firstDayOfWeek)+7)%7},getWeekNumber(t){return A(this.displayedYear,this.displayedMonth,t,parseInt(this.firstDayOfWeek),parseInt(this.localeFirstDayOfYear))},genWeekNumber(t){return this.$createElement("td",[this.$createElement("small",{staticClass:"v-date-picker-table--date__week"},String(t).padStart(2,"0"))])},genTBody(){const t=[],e=new Date(this.displayedYear,this.displayedMonth+1,0).getDate();let n=[],i=this.weekDaysBeforeFirstDayOfTheMonth();this.showWeek&&n.push(this.genWeekNumber(this.getWeekNumber(1)));const s=this.displayedMonth?this.displayedYear:this.displayedYear-1,r=(this.displayedMonth+11)%12,o=new Date(this.displayedYear,this.displayedMonth,0).getDate(),a=this.showWeek?8:7;while(i--){const t=`${s}-${f(r+1)}-${f(o-i)}`;n.push(this.$createElement("td",this.showAdjacentMonths?[this.genButton(t,!0,"date",this.formatter,!0)]:[]))}for(i=1;i<=e;i++){const s=`${this.displayedYear}-${f(this.displayedMonth+1)}-${f(i)}`;n.push(this.$createElement("td",[this.genButton(s,!0,"date",this.formatter)])),n.length%a===0&&(t.push(this.genTR(n)),n=[],this.showWeek&&(i<e||this.showAdjacentMonths)&&n.push(this.genWeekNumber(this.getWeekNumber(i+7))))}const l=11===this.displayedMonth?this.displayedYear+1:this.displayedYear,c=(this.displayedMonth+1)%12;let u=1;while(n.length<a){const t=`${l}-${f(c+1)}-${f(u++)}`;n.push(this.$createElement("td",this.showAdjacentMonths?[this.genButton(t,!0,"date",this.formatter,!0)]:[]))}return n.length&&t.push(this.genTR(n)),this.$createElement("tbody",t)},genTR(t){return[this.$createElement("tr",t)]}},render(){return this.genTable("v-date-picker-table v-date-picker-table--date",[this.genTHead(),this.genTBody()],this.calculateTableDate)}}),D=(0,r.Z)(C).extend({name:"v-date-picker-month-table",computed:{formatter(){return this.format||g(this.currentLocale,{month:"short",timeZone:"UTC"},{start:5,length:2})}},methods:{calculateTableDate(t){return`${parseInt(this.tableDate,10)+Math.sign(t||1)}`},genTBody(){const t=[],e=Array(3).fill(null),n=12/e.length;for(let i=0;i<n;i++){const n=e.map(((t,n)=>{const s=i*e.length+n,r=`${this.displayedYear}-${f(s+1)}`;return this.$createElement("td",{key:s},[this.genButton(r,!1,"month",this.formatter)])}));t.push(this.$createElement("tr",{key:i},n))}return this.$createElement("tbody",t)}},render(){return this.genTable("v-date-picker-table v-date-picker-table--month",[this.genTBody()],this.calculateTableDate)}}),L=(0,r.Z)(s.Z,h).extend({name:"v-date-picker-years",props:{format:Function,min:[Number,String],max:[Number,String],readonly:Boolean,value:[Number,String]},data(){return{defaultColor:"primary"}},computed:{formatter(){return this.format||g(this.currentLocale,{year:"numeric",timeZone:"UTC"},{length:4})}},mounted(){setTimeout((()=>{const t=this.$el.getElementsByClassName("active")[0];t?this.$el.scrollTop=t.offsetTop-this.$el.offsetHeight/2+t.offsetHeight/2:this.min&&!this.max?this.$el.scrollTop=this.$el.scrollHeight:!this.min&&this.max?this.$el.scrollTop=0:this.$el.scrollTop=this.$el.scrollHeight/2-this.$el.offsetHeight/2}))},methods:{genYearItem(t){const e=this.formatter(`${t}`),n=parseInt(this.value,10)===t,i=n&&(this.color||"primary");return this.$createElement("li",this.setTextColor(i,{key:t,class:{active:n},on:(0,S.bp)({click:()=>this.$emit("input",t)},w(this,":year",t))}),e)},genYearItems(){const t=[],e=this.value?parseInt(this.value,10):(new Date).getFullYear(),n=this.max?parseInt(this.max,10):e+100,i=Math.min(n,this.min?parseInt(this.min,10):e-100);for(let s=n;s>=i;s--)t.push(this.genYearItem(s));return t}},render(){return this.$createElement("ul",{staticClass:"v-date-picker-years",ref:"years"},this.genYearItems())}}),R=(n(4245),n(4390)),N=(0,r.Z)(s.Z,R.Z,d.Z).extend({name:"v-picker",props:{flat:Boolean,fullWidth:Boolean,landscape:Boolean,noTitle:Boolean,transition:{type:String,default:"fade-transition"},width:{type:[Number,String],default:290}},computed:{computedTitleColor(){const t=!this.isDark&&(this.color||"primary");return this.color||t}},methods:{genTitle(){return this.$createElement("div",this.setBackgroundColor(this.computedTitleColor,{staticClass:"v-picker__title",class:{"v-picker__title--landscape":this.landscape}}),this.$slots.title)},genBodyTransition(){return this.$createElement("transition",{props:{name:this.transition}},this.$slots.default)},genBody(){return this.$createElement("div",{staticClass:"v-picker__body",class:{"v-picker__body--no-title":this.noTitle,...this.themeClasses},style:this.fullWidth?void 0:{width:(0,o.kb)(this.width)}},[this.genBodyTransition()])},genActions(){return this.$createElement("div",{staticClass:"v-picker__actions v-card__actions",class:{"v-picker__actions--no-title":this.noTitle}},this.$slots.actions)}},render(t){return t("div",{staticClass:"v-picker v-card",class:{"v-picker--flat":this.flat,"v-picker--landscape":this.landscape,"v-picker--full-width":this.fullWidth,...this.themeClasses,...this.elevationClasses}},[this.$slots.title?this.genTitle():null,this.genBody(),this.$slots.actions?this.genActions():null])}}),M=N,B=(0,r.Z)(s.Z,R.Z,d.Z).extend({name:"picker",props:{flat:Boolean,fullWidth:Boolean,headerColor:String,landscape:Boolean,noTitle:Boolean,width:{type:[Number,String],default:290}},methods:{genPickerTitle(){return null},genPickerBody(){return null},genPickerActionsSlot(){return this.$scopedSlots.default?this.$scopedSlots.default({save:this.save,cancel:this.cancel}):this.$slots.default},genPicker(t){const e=[];if(!this.noTitle){const t=this.genPickerTitle();t&&e.push(t)}const n=this.genPickerBody();return n&&e.push(n),e.push(this.$createElement("template",{slot:"actions"},[this.genPickerActionsSlot()])),this.$createElement(M,{staticClass:t,props:{color:this.headerColor||this.color,dark:this.dark,elevation:this.elevation,flat:this.flat,fullWidth:this.fullWidth,landscape:this.landscape,light:this.light,width:this.width,noTitle:this.noTitle}},e)}}});const V=[0,31,28,31,30,31,30,31,31,30,31,30,31],F=[0,31,29,31,30,31,30,31,31,30,31,30,31];function j(t,e){return O(t)?F[e]:V[e]}var Z=n(4101),U=(0,r.Z)(h,B).extend({name:"v-date-picker",props:{activePicker:String,allowedDates:Function,dayFormat:Function,disabled:Boolean,events:{type:[Array,Function,Object],default:()=>null},eventColor:{type:[Array,Function,Object,String],default:()=>"warning"},firstDayOfWeek:{type:[String,Number],default:0},headerDateFormat:Function,localeFirstDayOfYear:{type:[String,Number],default:0},max:String,min:String,monthFormat:Function,multiple:Boolean,nextIcon:{type:String,default:"$next"},nextMonthAriaLabel:{type:String,default:"$vuetify.datePicker.nextMonthAriaLabel"},nextYearAriaLabel:{type:String,default:"$vuetify.datePicker.nextYearAriaLabel"},pickerDate:String,prevIcon:{type:String,default:"$prev"},prevMonthAriaLabel:{type:String,default:"$vuetify.datePicker.prevMonthAriaLabel"},prevYearAriaLabel:{type:String,default:"$vuetify.datePicker.prevYearAriaLabel"},range:Boolean,reactive:Boolean,readonly:Boolean,scrollable:Boolean,showCurrent:{type:[Boolean,String],default:!0},selectedItemsText:{type:String,default:"$vuetify.datePicker.itemsSelected"},showAdjacentMonths:Boolean,showWeek:Boolean,titleDateFormat:Function,type:{type:String,default:"date",validator:t=>["date","month"].includes(t)},value:[Array,String],weekdayFormat:Function,yearFormat:Function,yearIcon:String},data(){const t=new Date;return{internalActivePicker:this.type.toUpperCase(),inputDay:null,inputMonth:null,inputYear:null,isReversing:!1,now:t,tableDate:(()=>{if(this.pickerDate)return this.pickerDate;const e=(0,o.TI)(this.value),n=e[e.length-1]||("string"===typeof this.showCurrent?this.showCurrent:`${t.getFullYear()}-${t.getMonth()+1}`);return k(n,"date"===this.type?"month":"year")})()}},computed:{multipleValue(){return(0,o.TI)(this.value)},isMultiple(){return this.multiple||this.range},lastValue(){return this.isMultiple?this.multipleValue[this.multipleValue.length-1]:this.value},selectedMonths(){return this.value&&"month"!==this.type?this.isMultiple?this.multipleValue.map((t=>t.substr(0,7))):this.value.substr(0,7):this.value},current(){return!0===this.showCurrent?k(`${this.now.getFullYear()}-${this.now.getMonth()+1}-${this.now.getDate()}`,this.type):this.showCurrent||null},inputDate(){return"date"===this.type?`${this.inputYear}-${f(this.inputMonth+1)}-${f(this.inputDay)}`:`${this.inputYear}-${f(this.inputMonth+1)}`},tableMonth(){return Number((this.pickerDate||this.tableDate).split("-")[1])-1},tableYear(){return Number((this.pickerDate||this.tableDate).split("-")[0])},minMonth(){return this.min?k(this.min,"month"):null},maxMonth(){return this.max?k(this.max,"month"):null},minYear(){return this.min?k(this.min,"year"):null},maxYear(){return this.max?k(this.max,"year"):null},formatters(){return{year:this.yearFormat||g(this.currentLocale,{year:"numeric",timeZone:"UTC"},{length:4}),titleDate:this.titleDateFormat||(this.isMultiple?this.defaultTitleMultipleDateFormatter:this.defaultTitleDateFormatter)}},defaultTitleMultipleDateFormatter(){return t=>t.length?1===t.length?this.defaultTitleDateFormatter(t[0]):this.$vuetify.lang.t(this.selectedItemsText,t.length):"-"},defaultTitleDateFormatter(){const t={year:{year:"numeric",timeZone:"UTC"},month:{month:"long",timeZone:"UTC"},date:{weekday:"short",month:"short",day:"numeric",timeZone:"UTC"}},e=g(this.currentLocale,t[this.type],{start:0,length:{date:10,month:7,year:4}[this.type]}),n=t=>e(t).replace(/([^\d\s])([\d])/g,((t,e,n)=>`${e} ${n}`)).replace(", ",",<br>");return this.landscape?n:e}},watch:{internalActivePicker:{immediate:!0,handler(t){this.$emit("update:active-picker",t)}},activePicker(t){this.internalActivePicker=t},tableDate(t,e){const n="month"===this.type?"year":"month";this.isReversing=k(t,n)<k(e,n),this.$emit("update:picker-date",t)},pickerDate(t){t?this.tableDate=t:this.lastValue&&"date"===this.type?this.tableDate=k(this.lastValue,"month"):this.lastValue&&"month"===this.type&&(this.tableDate=k(this.lastValue,"year"))},value(t,e){this.checkMultipleProp(),this.setInputDate(),(this.isMultiple||!this.value||this.pickerDate)&&(!this.isMultiple||!this.multipleValue.length||e&&e.length||this.pickerDate)||(this.tableDate=k(this.inputDate,"month"===this.type?"year":"month"))},type(t){if(this.internalActivePicker=t.toUpperCase(),this.value&&this.value.length){const e=this.multipleValue.map((e=>k(e,t))).filter(this.isDateAllowed);this.$emit("input",this.isMultiple?e:e[0])}}},created(){this.checkMultipleProp(),this.pickerDate!==this.tableDate&&this.$emit("update:picker-date",this.tableDate),this.setInputDate()},methods:{emitInput(t){if(this.range){if(1!==this.multipleValue.length)this.$emit("input",[t]);else{const e=[this.multipleValue[0],t];this.$emit("input",e),this.$emit("change",e)}return}const e=this.multiple?-1===this.multipleValue.indexOf(t)?this.multipleValue.concat([t]):this.multipleValue.filter((e=>e!==t)):t;this.$emit("input",e),this.multiple||this.$emit("change",t)},checkMultipleProp(){if(null==this.value)return;const t=this.value.constructor.name,e=this.isMultiple?"Array":"String";t!==e&&(0,Z.Kd)(`Value must be ${this.isMultiple?"an":"a"} ${e}, got ${t}`,this)},isDateAllowed(t){return I(t,this.min,this.max,this.allowedDates)},yearClick(t){this.inputYear=t,"month"===this.type?this.tableDate=`${t}`:this.tableDate=`${t}-${f((this.tableMonth||0)+1)}`,this.internalActivePicker="MONTH",this.reactive&&!this.readonly&&!this.isMultiple&&this.isDateAllowed(this.inputDate)&&this.$emit("input",this.inputDate)},monthClick(t){const[e,n]=t.split("-");this.inputYear=parseInt(e,10),this.inputMonth=parseInt(n,10)-1,"date"===this.type?(this.inputDay&&(this.inputDay=Math.min(this.inputDay,j(this.inputYear,this.inputMonth+1))),this.tableDate=t,this.internalActivePicker="DATE",this.reactive&&!this.readonly&&!this.isMultiple&&this.isDateAllowed(this.inputDate)&&this.$emit("input",this.inputDate)):this.emitInput(this.inputDate)},dateClick(t){const[e,n,i]=t.split("-");this.inputYear=parseInt(e,10),this.inputMonth=parseInt(n,10)-1,this.inputDay=parseInt(i,10),this.emitInput(this.inputDate)},genPickerTitle(){return this.$createElement(l,{props:{date:this.value?this.formatters.titleDate(this.isMultiple?this.multipleValue:this.value):"",disabled:this.disabled,readonly:this.readonly,selectingYear:"YEAR"===this.internalActivePicker,year:this.formatters.year(this.multipleValue.length?`${this.inputYear}`:this.tableDate),yearIcon:this.yearIcon,value:this.multipleValue[0]},slot:"title",on:{"update:selecting-year":t=>this.internalActivePicker=t?"YEAR":this.type.toUpperCase()}})},genTableHeader(){return this.$createElement(y,{props:{nextIcon:this.nextIcon,color:this.color,dark:this.dark,disabled:this.disabled,format:this.headerDateFormat,light:this.light,locale:this.locale,min:"DATE"===this.internalActivePicker?this.minMonth:this.minYear,max:"DATE"===this.internalActivePicker?this.maxMonth:this.maxYear,nextAriaLabel:"DATE"===this.internalActivePicker?this.nextMonthAriaLabel:this.nextYearAriaLabel,prevAriaLabel:"DATE"===this.internalActivePicker?this.prevMonthAriaLabel:this.prevYearAriaLabel,prevIcon:this.prevIcon,readonly:this.readonly,value:"DATE"===this.internalActivePicker?`${f(this.tableYear,4)}-${f(this.tableMonth+1)}`:`${f(this.tableYear,4)}`},on:{toggle:()=>this.internalActivePicker="DATE"===this.internalActivePicker?"MONTH":"YEAR",input:t=>this.tableDate=t}})},genDateTable(){return this.$createElement(P,{props:{allowedDates:this.allowedDates,color:this.color,current:this.current,dark:this.dark,disabled:this.disabled,events:this.events,eventColor:this.eventColor,firstDayOfWeek:this.firstDayOfWeek,format:this.dayFormat,light:this.light,locale:this.locale,localeFirstDayOfYear:this.localeFirstDayOfYear,min:this.min,max:this.max,range:this.range,readonly:this.readonly,scrollable:this.scrollable,showAdjacentMonths:this.showAdjacentMonths,showWeek:this.showWeek,tableDate:`${f(this.tableYear,4)}-${f(this.tableMonth+1)}`,value:this.value,weekdayFormat:this.weekdayFormat},ref:"table",on:{input:this.dateClick,"update:table-date":t=>this.tableDate=t,..._(this,":date")}})},genMonthTable(){return this.$createElement(D,{props:{allowedDates:"month"===this.type?this.allowedDates:null,color:this.color,current:this.current?k(this.current,"month"):null,dark:this.dark,disabled:this.disabled,events:"month"===this.type?this.events:null,eventColor:"month"===this.type?this.eventColor:null,format:this.monthFormat,light:this.light,locale:this.locale,min:this.minMonth,max:this.maxMonth,range:this.range,readonly:this.readonly&&"month"===this.type,scrollable:this.scrollable,value:this.selectedMonths,tableDate:`${f(this.tableYear,4)}`},ref:"table",on:{input:this.monthClick,"update:table-date":t=>this.tableDate=t,..._(this,":month")}})},genYears(){return this.$createElement(L,{props:{color:this.color,format:this.yearFormat,locale:this.locale,min:this.minYear,max:this.maxYear,value:this.tableYear},on:{input:this.yearClick,..._(this,":year")}})},genPickerBody(){const t="YEAR"===this.internalActivePicker?[this.genYears()]:[this.genTableHeader(),"DATE"===this.internalActivePicker?this.genDateTable():this.genMonthTable()];return this.$createElement("div",{key:this.internalActivePicker},t)},setInputDate(){if(this.lastValue){const t=this.lastValue.split("-");this.inputYear=parseInt(t[0],10),this.inputMonth=parseInt(t[1],10)-1,"date"===this.type&&(this.inputDay=parseInt(t[2],10))}else this.inputYear=this.inputYear||this.now.getFullYear(),this.inputMonth=null==this.inputMonth?this.inputMonth:this.now.getMonth(),this.inputDay=this.inputDay||this.now.getDate()}},render(){return this.genPicker("v-picker--date")}})},4061:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var i=n(920),s=n(1452),r=n(908),o=n(2694),a=n(9351),l=n(6401),c=n(8472),u=n(5942),h=n(7678),d=n(4101),p=n(5352);const f=(0,h.Z)(r.Z,o.Z,a.Z,l.Z,c.Z,s.Z);var m=f.extend({name:"v-dialog",directives:{ClickOutside:u.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,d.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):a.Z.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var t,e;(null===(t=this.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(e=this.$refs.dialog)||void 0===e||e.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===p.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){const t=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find((t=>!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')));e&&e.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(i.Z,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:(0,p.kb)(this.maxWidth),width:(0,p.kb)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},9223:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var i=n(6669),s=i.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},5125:function(t,e,n){"use strict";n(7658);var i=n(7678),s=n(2500),r=n(4712);e["Z"]=(0,i.Z)(s.Z,(0,r.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),n={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(n.valid=e(t)))})):n.valid=e(t),n},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const n=this.watchers.find((t=>t._uid===e._uid));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},266:function(t,e,n){"use strict";n(7658),n(1884);var i=n(144),s=n(1767),r=n(5352);const o=["sm","md","lg","xl"],a=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>o.reduce(((t,e)=>(t["offset"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["order"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),u={col:Object.keys(a),offset:Object.keys(l),order:Object.keys(c)};function h(t,e,n){let i=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");i+=`-${n}`}return"col"!==t||""!==n&&!0!==n?(i+=`-${n}`,i.toLowerCase()):i.toLowerCase()}}const d=new Map;e["Z"]=i.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:i,parent:r}){let o="";for(const s in e)o+=String(e[s]);let a=d.get(o);if(!a){let t;for(t in a=[],u)u[t].forEach((n=>{const i=e[n],s=h(t,n,i);s&&a.push(s)}));const n=a.some((t=>t.startsWith("col-")));a.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),d.set(o,a)}return t(e.tag,(0,s.ZP)(n,{class:a}),i)}})},2118:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});n(9027),n(1884);var i=n(144);function s(t){return i.ZP.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:i,children:s}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:r}=i;if(r){i.attrs={};const t=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,s)}})}var r=n(1767),o=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:i}){let s;const{attrs:o}=n;return o&&(n.attrs={},s=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,(0,r.ZP)(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),i)}})},1713:function(t,e,n){"use strict";n(7658),n(1884);var i=n(144),s=n(1767),r=n(5352);const o=["sm","md","lg","xl"],a=["start","end","center"];function l(t,e){return o.reduce(((n,i)=>(n[t+(0,r.jC)(i)]=e(),n)),{})}const c=t=>[...a,"baseline","stretch"].includes(t),u=l("align",(()=>({type:String,default:null,validator:c}))),h=t=>[...a,"space-between","space-around"].includes(t),d=l("justify",(()=>({type:String,default:null,validator:h}))),p=t=>[...a,"space-between","space-around","stretch"].includes(t),f=l("alignContent",(()=>({type:String,default:null,validator:p}))),m={align:Object.keys(u),justify:Object.keys(d),alignContent:Object.keys(f)},g={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,n){let i=g[t];if(null!=n){if(e){const n=e.replace(t,"");i+=`-${n}`}return i+=`-${n}`,i.toLowerCase()}}const y=new Map;e["Z"]=i.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:h},...d,alignContent:{type:String,default:null,validator:p},...f},render(t,{props:e,data:n,children:i}){let r="";for(const s in e)r+=String(e[s]);let o=y.get(r);if(!o){let t;for(t in o=[],m)m[t].forEach((n=>{const i=e[n],s=v(t,n,i);s&&o.push(s)}));o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(r,o)}return t(e.tag,(0,s.ZP)(n,{staticClass:"row",class:o}),i)}})},3687:function(t,e,n){"use strict";n(9027);var i=n(5352);e["Z"]=(0,i.Ji)("spacer","div","v-spacer")},4324:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});n(7658);var i,s=n(2500),r=n(6878),o=n(4338),a=n(6669),l=n(5352),c=n(144),u=n(7678);function h(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}function d(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));const p=(0,u.Z)(s.Z,r.Z,o.Z,a.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,l.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,l.XP)(t).find((e=>t[e]));return e&&i[e]||(0,l.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const n=[],i=this.getDefaultData();let s="material-icons";const r=t.indexOf("-"),o=r<=-1;o?n.push(t):(s=t.slice(0,r),h(s)&&(s="")),i.class[s]=!0,i.class[t]=!o;const a=this.getSize();return a&&(i.style={fontSize:a}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon(t,e){const n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);const s=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(s,n)])}},render(t){const e=this.getIcon();return"string"===typeof e?d(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var f=c.ZP.extend({name:"v-icon",$_wrapperFor:p,functional:!0,render(t,{data:e,children:n}){let i="";return e.domProps&&(i=e.domProps.textContent||e.domProps.innerHTML||i,delete e.domProps.textContent,delete e.domProps.innerHTML),t(p,e,i?[i]:n)}})},2240:function(t,e,n){"use strict";var i=n(4324);e["Z"]=i.Z},5495:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});n(7658);var i=n(6750),s=n(8846),r=n(7678),o=n(5352),a=(0,r.Z)(s.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,o.z9)(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),l=a,c=n(6669),u=n(1767),h=n(4101);const d="undefined"!==typeof window&&"IntersectionObserver"in window;var p=(0,r.Z)(l,c.Z).extend({name:"v-img",directives:{intersect:i.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const n=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[n]):n}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,n){if(!d||n||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,h.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const n=()=>{const{naturalHeight:i,naturalWidth:s}=t;i||s?(this.naturalWidth=s,this.calculatedAspectRatio=s/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(n,e)};n()},genContent(){const t=l.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){const t=(0,o.z9)(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=l.options.render.call(this,t),n=(0,u.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,n,e.children)}})},573:function(t,e,n){"use strict";n.d(e,{Z:function(){return g}});n(7658);var i=n(2240),s=n(4738),r=n(6878),o=n(6669),a=n(7678),l=n(5352),c=(0,a.Z)(r.Z,o.Z).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},(0,l.z9)(this,"default",{message:t,key:e})||[t])}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),u=c,h=n(2500),d=n(5776),p=n(1767);const f=(0,a.Z)(h.Z,d.Z);var m=f.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,"v-input--hide-spin-buttons":this.hideSpinButtons,...this.themeClasses}},computedId(){return this.id||`input-${this._uid}`},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty(){return!!this.lazyValue},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((t=>{if("string"===typeof t)return t;const e=t(this.internalValue);return"string"===typeof e?e:""})).filter((t=>""!==t)):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(t){this.lazyValue=t}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control",attrs:{title:this.attrs$.title}},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(t,e,n={}){const s=this[`${t}Icon`],r=`click:${(0,l.GL)(t)}`,o=!(!this.listeners$[r]&&!e),a=(0,p.ZP)({attrs:{"aria-label":o?(0,l.GL)(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light,tabindex:"clear"===t?-1:void 0},on:o?{click:t=>{t.preventDefault(),t.stopPropagation(),this.$emit(r,t),e&&e(t)},mouseup:t=>{t.preventDefault(),t.stopPropagation()}}:void 0},n);return this.$createElement("div",{staticClass:"v-input__icon",class:t?`v-input__icon--${(0,l.GL)(t)}`:void 0},[this.$createElement(i.Z,a,s)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:(0,l.kb)(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(s.Z,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(u,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:t=>(0,l.z9)(this,"message",t)}}):null},genSlot(t,e,n){if(!n.length)return null;const i=`${t}-${e}`;return this.$createElement("div",{staticClass:`v-input__${i}`,ref:i},n)},genPrependSlot(){const t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick(t){this.$emit("click",t)},onMouseDown(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),g=m},4738:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var i=n(6878),s=n(6669),r=n(7678),o=n(5352),a=n(1767),l=(0,r.Z)(s.Z).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(t,e){const{children:n,listeners:r,props:l,data:c}=e,u=(0,a.ZP)({staticClass:"v-label",class:{"v-label--active":l.value,"v-label--is-disabled":l.disabled,...(0,s.X)(e)},attrs:{for:l.for,"aria-hidden":!l.for},on:r,style:{left:(0,o.kb)(l.left),right:(0,o.kb)(l.right),position:l.absolute?"absolute":"relative"},ref:"label"},c);return t("label",i.Z.options.methods.setTextColor(l.focused&&l.color,u),n)}}),c=l},5808:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});n(7658);var i=n(7423),s=i.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex((e=>e._uid===t._uid));e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},4525:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var i=n(6878),s=n(8860),r=n(3037),o=n(6669),a=n(1444),l=n(7069),c=n(5352),u=n(4101),h=n(7678);const d=(0,h.Z)(i.Z,s.Z,o.Z,(0,r.d)("listItemGroup"),(0,a.d)("inputValue"));var p=d.extend().extend({name:"v-list-item",directives:{Ripple:l.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...s.Z.options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(s.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&(0,u.Jk)("avatar",this)},methods:{click(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs(){const t={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||`list-item-${this._uid}`):this.isInList&&(t.role="listitem")),t},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(t){let{tag:e,data:n}=this.generateRouteLink();n.attrs={...n.attrs,...this.genAttrs()},n[this.to?"nativeOn":"on"]={...n[this.to?"nativeOn":"on"],keydown:t=>{this.disabled||(t.keyCode===c.Do.enter&&this.click(t),this.$emit("keydown",t))}},this.inactive&&(e="div"),this.inactive&&this.to&&(n.on=n.nativeOn,delete n.nativeOn);const i=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(e,this.isActive?this.setTextColor(this.color,n):n,i)}})},7941:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});n(7658);var i=n(6174),s=n(3457),r=n(6669),o=n(7678),a=n(4101);const l=(0,o.Z)(i.Z,s.Z,r.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((t,e)=>this.toggleMethod(this.getValue(t,e))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some((t=>this.valueComparator(t,e))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,a.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",(()=>this.onClick(t))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),n=this.getValue(t,e);this.items.splice(e,1);const i=this.selectedValues.indexOf(n);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((t=>t!==n)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const n=e.find((t=>!t.disabled));if(!n)return;const i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],n=e.slice(),i=n.findIndex((e=>this.valueComparator(e,t)));this.mandatory&&i>-1&&n.length-1<1||null!=this.max&&i<0&&n.length+1>this.max||(i>-1?n.splice(i,1):n.push(t),this.internalValue=n)},updateSingle(t){const e=this.valueComparator(this.internalValue,t);this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}});l.extend({name:"v-item-group",provide(){return{itemGroup:this}}});var c=n(6878),u=(0,o.Z)(l,c.Z).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...l.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...l.options.methods.genData.call(this),attrs:{role:"listbox"}})}}})},7430:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});n(7658),n(541);var i=n(5495),s=n(4263),r=n(7678);function o(t,e=[]){return(0,r.Z)((0,s.d)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,n=e.length;t<n;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}var a=n(6878),l=n(908),c=n(7388),u=n(9351),h=n(144),d=h.ZP.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}}),p=n(6669),f=n(5942),m=n(6746),g=n(4802),v=n(5352);const y=(0,r.Z)(o("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),a.Z,l.Z,c.Z,u.Z,d,p.Z);var b=y.extend({name:"v-navigation-drawer",directives:{ClickOutside:f.Z,Resize:m.Z,Touch:g.Z},provide(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop(){if(!this.hasApp)return 0;let t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&c.Z.options.computed.isMobile.call(this)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles(){const t=this.isBottom?"translateY":"translateX";return{height:(0,v.kb)(this.height),top:this.isBottom?"auto":(0,v.kb)(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${(0,v.kb)(this.computedMaxHeight)})`:void 0,transform:`${t}(${(0,v.kb)(this.computedTransform,"%")})`,width:(0,v.kb)(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive(t){this.$emit("input",t)},isMobile(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent(t){t&&(this.isActive=!0)},showOverlay(t){t?this.genOverlay():this.removeOverlay()},value(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover(t){this.updateMiniVariant(!t)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const t=this.$el.parentNode;if(!t)return;const e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(i.Z,{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives(){const t=[{name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||t.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),t},genListeners(){const t={mouseenter:()=>this.isMouseover=!0,mouseleave:()=>this.isMouseover=!1,transitionend:t=>{if(t.target!==t.currentTarget)return;this.$emit("transitionend",t);const e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}};return this.miniVariant&&(t.click=()=>this.$emit("update:mini-variant",!1)),t},genPosition(t){const e=(0,v.z9)(this,t);return e?this.$createElement("div",{staticClass:`v-navigation-drawer__${t}`},e):e},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant(t){this.expandOnHover&&this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render(t){const e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||(0,v.z9)(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}})},1500:function(t,e,n){"use strict";n.d(e,{Z:function(){return lt}});n(7658),n(2838);var i=n(9003),s=n(920),r=n(1452),o=n(3016),a=n(908),l=n(8472),c=n(4263),u=n(2694),h=n(7678),d=n(5352);const p=(0,h.Z)(l.Z,(0,c.d)(["top","right","bottom","left","absolute"]),r.Z,u.Z);var f=p.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:()=>({activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}),computed:{computedLeft(){const t=this.dimensions.activator,e=this.dimensions.content,n=(!1!==this.attach?t.offsetLeft:t.left)||0,i=Math.max(t.width,e.width);let s=0;if(s+=n,(this.left||this.$vuetify.rtl&&!this.right)&&(s-=i-t.width),this.offsetX){const e=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));s+=this.left?-e:t.width}return this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),s},computedTop(){const t=this.dimensions.activator,e=this.dimensions.content;let n=0;return this.top&&(n+=t.height-e.height),!1!==this.attach?n+=t.offsetTop:n+=t.top+this.pageYOffset,this.offsetY&&(n+=this.top?-t.height:t.height),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),n},hasActivator(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled(t){t&&this.callDeactivate()},isActive(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate(){},calcLeft(t){return(0,d.kb)(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop(){return(0,d.kb)(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow(t,e){const n=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&n>0?Math.max(t-n,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow(t){const e=this.getInnerHeight(),n=this.absoluteYOffset+e,i=this.dimensions.activator,s=this.dimensions.content.height,r=t+s,o=n<r;return o&&this.offsetOverflow&&i.top>s?t=this.pageYOffset+(i.top-s):o&&!this.allowOverflow?t=n-s-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate(){this.hasWindow&&this.activate()},callDeactivate(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed(){if(!1!==this.attach)return void(this.activatorFixed=!1);let t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1},deactivate(){},genActivatorListeners(){const t=r.Z.options.methods.genActivatorListeners.call(this),e=t.click;return e&&(t.click=t=>{this.openOnClick&&e&&e(t),this.absoluteX=t.clientX,this.absoluteY=t.clientY}),t},getInnerHeight(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect(t){const e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure(t){if(!t||!this.hasWindow)return null;const e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){const n=window.getComputedStyle(t);e.left=parseInt(n.marginLeft),e.top=parseInt(n.marginTop)}return e},sneakPeek(t){requestAnimationFrame((()=>{const e=this.$refs.content;e&&"none"===e.style.display?(e.style.display="inline-block",t(),e.style.display="none"):t()}))},startTransition(){return new Promise((t=>requestAnimationFrame((()=>{this.isContentActive=this.hasJustFocused=this.isActive,t()}))))},updateDimensions(){this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;const t={activator:{...this.dimensions.activator},content:{...this.dimensions.content}};if(!this.hasActivator||this.absolute)t.activator=this.absolutePosition();else{const e=this.getActivator();if(!e)return;t.activator=this.measure(e),t.activator.offsetLeft=e.offsetLeft,!1!==this.attach?t.activator.offsetTop=e.offsetTop:t.activator.offsetTop=0}this.sneakPeek((()=>{if(this.$refs.content){if(this.$refs.content.offsetParent){const e=this.getRoundedBoundedClientRect(this.$refs.content.offsetParent);this.relativeYOffset=window.pageYOffset+e.top,t.activator.top-=this.relativeYOffset,t.activator.left-=window.pageXOffset+e.left}t.content=this.measure(this.$refs.content)}this.dimensions=t}))}}}),m=n(6401),g=n(2637),v=n(6669),y=n(5942),b=n(6746),w=n(4101),_=n(6421);const k=(0,h.Z)(a.Z,o.Z,m.Z,g.Z,v.Z,f);var I=k.extend({name:"v-menu",directives:{ClickOutside:y.Z,Resize:b.Z},provide(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile(){return this.tiles[this.listIndex]},calculatedLeft(){const t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?(0,d.kb)(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight(){const t=this.auto?"200px":(0,d.kb)(this.maxHeight);return t||"0"},calculatedMaxWidth(){return(0,d.kb)(this.maxWidth)||"0"},calculatedMinWidth(){if(this.minWidth)return(0,d.kb)(this.minWidth)||"0";const t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return(0,d.kb)(Math.min(e,t))||"0"},calculatedTop(){const t=this.auto?(0,d.kb)(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles(){return Boolean(this.tiles.find((t=>t.tabIndex>-1)))},styles(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive(t){t||(this.listIndex=-1)},isContentActive(t){this.hasJustFocused=t},listIndex(t,e){if(t in this.tiles){const e=this.tiles[t];e.classList.add("v-list-item--highlighted");const n=this.$refs.content.scrollTop,i=this.$refs.content.clientHeight;n>e.offsetTop-8?(0,_.Z)(e.offsetTop-e.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content}):n+i<e.offsetTop+e.clientHeight+8&&(0,_.Z)(e.offsetTop-i+2*e.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content})}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,w.Jk)("full-width",this)},mounted(){this.isActive&&this.callActivate()},methods:{activate(){this.updateDimensions(),requestAnimationFrame((()=>{this.startTransition().then((()=>{this.$refs.content&&(this.calculatedTopAuto=this.calcTopAuto(),this.auto&&(this.$refs.content.scrollTop=this.calcScrollPosition()))}))}))},calcScrollPosition(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active"),n=t.scrollHeight-t.offsetHeight;return e?Math.min(n,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);const n=e.offsetTop-this.calcScrollPosition(),i=t.querySelector(".v-list-item").offsetTop;return this.computedTop-n-i-1},changeListIndex(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==d.Do.tab){if(t.keyCode===d.Do.down)this.nextTile();else if(t.keyCode===d.Do.up)this.prevTile();else if(t.keyCode===d.Do.end)this.lastTile();else if(t.keyCode===d.Do.home)this.firstTile();else{if(t.keyCode!==d.Do.enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional(t){const e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes(){const t=r.Z.options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?{...t,"aria-activedescendant":this.activeTile.id}:t},genActivatorListeners(){const t=f.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition(){const t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives(){const t=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&t.push({name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:()=>[this.$el,...this.getOpenDependentElements()]}}),t},genContent(){const t={attrs:{...this.getScopeIdAttrs(),role:"role"in this.$attrs?this.$attrs.role:"menu"},staticClass:"v-menu__content",class:{...this.rootThemeClasses,...this.roundedClasses,"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive,[this.contentClass.trim()]:!0},style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:t=>{const e=t.target;e.getAttribute("disabled")||this.closeOnContentClick&&(this.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(t.on=t.on||{},t.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(t.on=t.on||{},t.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(t.on=t.on||{},t.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",t,this.getContentSlot())},getTiles(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item, .v-divider, .v-subheader")))},mouseEnterHandler(){this.runDelay("open",(()=>{this.hasJustFocused||(this.hasJustFocused=!0)}))},mouseLeaveHandler(t){this.runDelay("close",(()=>{var e;(null===(e=this.$refs.content)||void 0===e?void 0:e.contains(t.relatedTarget))||requestAnimationFrame((()=>{this.isActive=!1,this.callDeactivate()}))}))},nextTile(){const t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile(){const t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile(){const t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile(){const t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown(t){if(t.keyCode===d.Do.esc){setTimeout((()=>{this.isActive=!1}));const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}else!this.isActive&&[d.Do.up,d.Do.down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((()=>this.changeListIndex(t)))},onResize(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render(t){const e={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",e,[!this.activator&&this.genActivator(),this.showLazyContent((()=>[this.$createElement(s.Z,{props:{root:!0,light:this.light,dark:this.dark}},[this.genTransition()])]))])}}),S=I,C=(n(541),n(6170)),T=n(9223),x=T.Z,E=(0,h.Z)(v.Z).extend({name:"v-subheader",props:{inset:Boolean},render(t){return t("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}}),$=E,A=n(4525),O=n(144),P=O.ZP.extend({name:"v-list-item-action",functional:!0,render(t,{data:e,children:n=[]}){e.staticClass=e.staticClass?`v-list-item__action ${e.staticClass}`:"v-list-item__action";const i=n.filter((t=>!1===t.isComment&&" "!==t.text));return i.length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,n)}}),D=n(5808),L=n(2240),R=O.ZP.extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:n}){return e.staticClass=`v-list-item__icon ${e.staticClass||""}`.trim(),t("div",e,n)}}),N=n(2500),M=n(8223),B=n(6878),V=n(1444),F=n(4712),j=n(7069),Z=n(7394);const U=(0,h.Z)(N.Z,M.Z,B.Z,(0,F.f)("list"),V.Z);var z=U.extend().extend({name:"v-list-group",directives:{ripple:j.Z},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(t){this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((()=>this.isActive=!this.isActive)))},genIcon(t){return this.$createElement(L.Z,t)},genAppendIcon(){const t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(R,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader(){return this.$createElement(A.Z,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent((()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},(0,d.z9)(this))]))},genPrependIcon(){const t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(R,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange(t){if(!this.group)return;const e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e},toggle(t){const e=this._uid===t;e&&(this.isBooted=!0),this.$nextTick((()=>this.isActive=e))},matchRoute(t){return null!==t.match(this.group)}},render(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(Z.Fx,this.genItems())])}}),H=n(7941),W=n(8846),q=(0,h.Z)(B.Z,W.Z,g.Z).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:(0,d.kb)(this.size),minWidth:(0,d.kb)(this.size),width:(0,d.kb)(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),K=q,Y=K.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...K.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const e=K.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}});const G=(0,d.Ji)("v-list-item__action-text","span"),X=(0,d.Ji)("v-list-item__content","div"),J=(0,d.Ji)("v-list-item__title","div"),Q=(0,d.Ji)("v-list-item__subtitle","div");D.Z,A.Z,H.Z;var tt=(0,h.Z)(B.Z,v.Z).extend({name:"v-select-list",directives:{ripple:j.Z},props:{action:Boolean,dense:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},noDataText:String,noFilter:Boolean,searchInput:null,selectedItems:{type:Array,default:()=>[]}},computed:{parsedItems(){return this.selectedItems.map((t=>this.getValue(t)))},tileActiveClass(){return Object.keys(this.setTextColor(this.color).class||{}).join(" ")},staticNoDataTile(){const t={attrs:{role:void 0},on:{mousedown:t=>t.preventDefault()}};return this.$createElement(A.Z,t,[this.genTileContent(this.noDataText)])}},methods:{genAction(t,e){return this.$createElement(P,[this.$createElement(C.Z,{props:{color:this.color,value:e,ripple:!1},on:{input:()=>this.$emit("select",t)}})])},genDivider(t){return this.$createElement(x,{props:t})},genFilteredText(t){if(t=t||"",!this.searchInput||this.noFilter)return t;const{start:e,middle:n,end:i}=this.getMaskedCharacters(t);return[e,this.genHighlight(n),i]},genHeader(t){return this.$createElement($,{props:t},t.header)},genHighlight(t){return this.$createElement("span",{staticClass:"v-list-item__mask"},t)},getMaskedCharacters(t){const e=(this.searchInput||"").toString().toLocaleLowerCase(),n=t.toLocaleLowerCase().indexOf(e);if(n<0)return{start:t,middle:"",end:""};const i=t.slice(0,n),s=t.slice(n,n+e.length),r=t.slice(n+e.length);return{start:i,middle:s,end:r}},genTile({item:t,index:e,disabled:n=null,value:i=!1}){i||(i=this.hasItem(t)),t===Object(t)&&(n=null!==n?n:this.getDisabled(t));const s={attrs:{"aria-selected":String(i),id:`list-item-${this._uid}-${e}`,role:"option"},on:{mousedown:t=>{t.preventDefault()},click:()=>n||this.$emit("select",t)},props:{activeClass:this.tileActiveClass,disabled:n,ripple:!0,inputValue:i}};if(!this.$scopedSlots.item)return this.$createElement(A.Z,s,[this.action&&!this.hideSelected&&this.items.length>0?this.genAction(t,i):null,this.genTileContent(t,e)]);const r=this,o=this.$scopedSlots.item({parent:r,item:t,attrs:{...s.attrs,...s.props},on:s.on});return this.needsTile(o)?this.$createElement(A.Z,s,o):o},genTileContent(t,e=0){return this.$createElement(X,[this.$createElement(J,[this.genFilteredText(this.getText(t))])])},hasItem(t){return this.parsedItems.indexOf(this.getValue(t))>-1},needsTile(t){return 1!==t.length||null==t[0].componentOptions||"v-list-item"!==t[0].componentOptions.Ctor.options.name},getDisabled(t){return Boolean((0,d.qF)(t,this.itemDisabled,!1))},getText(t){return String((0,d.qF)(t,this.itemText,t))},getValue(t){return(0,d.qF)(t,this.itemValue,this.getText(t))}},render(){const t=[],e=this.items.length;for(let n=0;n<e;n++){const e=this.items[n];this.hideSelected&&this.hasItem(e)||(null==e?t.push(this.genTile({item:e,index:n})):e.header?t.push(this.genHeader(e)):e.divider?t.push(this.genDivider(e)):t.push(this.genTile({item:e,index:n})))}return t.length||t.push(this.$slots["no-data"]||this.staticNoDataTile),this.$slots["prepend-item"]&&t.unshift(this.$slots["prepend-item"]),this.$slots["append-item"]&&t.push(this.$slots["append-item"]),this.$createElement(D.Z,{staticClass:"v-select-list",class:this.themeClasses,attrs:{role:"listbox",tabindex:-1},props:{dense:this.dense}},t)}}),et=n(573),nt=n(7808),it=n(6174),st=O.ZP.extend({name:"filterable",props:{noDataText:{type:String,default:"$vuetify.noDataText"}}}),rt=n(1767);const ot={closeOnClick:!1,closeOnContentClick:!1,disableKeys:!0,openOnClick:!1,maxHeight:304},at=(0,h.Z)(nt.Z,it.Z,a.Z,st);var lt=at.extend().extend({name:"v-select",directives:{ClickOutside:y.Z},props:{appendIcon:{type:String,default:"$dropdown"},attach:{type:null,default:!1},cacheItems:Boolean,chips:Boolean,clearable:Boolean,deletableChips:Boolean,disableLookup:Boolean,eager:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemColor:{type:String,default:"primary"},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},menuProps:{type:[String,Array,Object],default:()=>ot},multiple:Boolean,openOnClear:Boolean,returnObject:Boolean,smallChips:Boolean},data(){return{cachedItems:this.cacheItems?this.items:[],menuIsBooted:!1,isMenuActive:!1,lastItem:20,lazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,selectedIndex:-1,selectedItems:[],keyboardLookupPrefix:"",keyboardLookupLastTime:0}},computed:{allItems(){return this.filterDuplicates(this.cachedItems.concat(this.items))},classes(){return{...nt.Z.options.computed.classes.call(this),"v-select":!0,"v-select--chips":this.hasChips,"v-select--chips--small":this.smallChips,"v-select--is-menu-active":this.isMenuActive,"v-select--is-multi":this.multiple}},computedItems(){return this.allItems},computedOwns(){return`list-${this._uid}`},computedCounterValue(){var t;const e=this.multiple?this.selectedItems:(null!==(t=this.getText(this.selectedItems[0]))&&void 0!==t?t:"").toString();return"function"===typeof this.counterValue?this.counterValue(e):e.length},directives(){return this.isFocused?[{name:"click-outside",value:{handler:this.blur,closeConditional:this.closeConditional,include:()=>this.getOpenDependentElements()}}]:void 0},dynamicHeight(){return"auto"},hasChips(){return this.chips||this.smallChips},hasSlot(){return Boolean(this.hasChips||this.$scopedSlots.selection)},isDirty(){return this.selectedItems.length>0},listData(){const t=this.$vnode&&this.$vnode.context.$options._scopeId,e=t?{[t]:!0}:{};return{attrs:{...e,id:this.computedOwns},props:{action:this.multiple,color:this.itemColor,dense:this.dense,hideSelected:this.hideSelected,items:this.virtualizedItems,itemDisabled:this.itemDisabled,itemText:this.itemText,itemValue:this.itemValue,noDataText:this.$vuetify.lang.t(this.noDataText),selectedItems:this.selectedItems},on:{select:this.selectItem},scopedSlots:{item:this.$scopedSlots.item}}},staticList(){return(this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"])&&(0,w.N6)("assert: staticList should not be called if slots are used"),this.$createElement(tt,this.listData)},virtualizedItems(){return this.$_menuProps.auto?this.computedItems:this.computedItems.slice(0,this.lastItem)},menuCanShow:()=>!0,$_menuProps(){let t="string"===typeof this.menuProps?this.menuProps.split(","):this.menuProps;return Array.isArray(t)&&(t=t.reduce(((t,e)=>(t[e.trim()]=!0,t)),{})),{...ot,eager:this.eager,value:this.menuCanShow&&this.isMenuActive,nudgeBottom:t.offsetY?1:0,...t}}},watch:{internalValue(t){this.initialValue=t,this.setSelectedItems(),this.multiple&&this.$nextTick((()=>{var t;null===(t=this.$refs.menu)||void 0===t||t.updateDimensions()}))},isMenuActive(t){window.setTimeout((()=>this.onMenuActiveChange(t)))},items:{immediate:!0,handler(t){this.cacheItems&&this.$nextTick((()=>{this.cachedItems=this.filterDuplicates(this.cachedItems.concat(t))})),this.setSelectedItems()}}},methods:{blur(t){nt.Z.options.methods.blur.call(this,t),this.isMenuActive=!1,this.isFocused=!1,this.selectedIndex=-1,this.setMenuIndex(-1)},activateMenu(){this.isInteractive&&!this.isMenuActive&&(this.isMenuActive=!0)},clearableCallback(){this.setValue(this.multiple?[]:null),this.setMenuIndex(-1),this.$nextTick((()=>this.$refs.input&&this.$refs.input.focus())),this.openOnClear&&(this.isMenuActive=!0)},closeConditional(t){return!this.isMenuActive||!this._isDestroyed&&(!this.getContent()||!this.getContent().contains(t.target))&&this.$el&&!this.$el.contains(t.target)&&t.target!==this.$el},filterDuplicates(t){const e=new Map;for(let n=0;n<t.length;++n){const i=t[n];if(null==i)continue;if(i.header||i.divider){e.set(i,i);continue}const s=this.getValue(i);!e.has(s)&&e.set(s,i)}return Array.from(e.values())},findExistingIndex(t){const e=this.getValue(t);return(this.internalValue||[]).findIndex((t=>this.valueComparator(this.getValue(t),e)))},getContent(){return this.$refs.menu&&this.$refs.menu.$refs.content},genChipSelection(t,e){const n=this.isDisabled||this.getDisabled(t),s=!n&&this.isInteractive;return this.$createElement(i.Z,{staticClass:"v-chip--select",attrs:{tabindex:-1},props:{close:this.deletableChips&&s,disabled:n,inputValue:e===this.selectedIndex,small:this.smallChips},on:{click:t=>{s&&(t.stopPropagation(),this.selectedIndex=e)},"click:close":()=>this.onChipInput(t)},key:JSON.stringify(this.getValue(t))},this.getText(t))},genCommaSelection(t,e,n){const i=e===this.selectedIndex&&this.computedColor,s=this.isDisabled||this.getDisabled(t);return this.$createElement("div",this.setTextColor(i,{staticClass:"v-select__selection v-select__selection--comma",class:{"v-select__selection--disabled":s},key:JSON.stringify(this.getValue(t))}),`${this.getText(t)}${n?"":", "}`)},genDefaultSlot(){const t=this.genSelections(),e=this.genInput();return Array.isArray(t)?t.push(e):(t.children=t.children||[],t.children.push(e)),[this.genFieldset(),this.$createElement("div",{staticClass:"v-select__slot",directives:this.directives},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,t,this.suffix?this.genAffix("suffix"):null,this.genClearIcon(),this.genIconSlot(),this.genHiddenInput()]),this.genMenu(),this.genProgress()]},genIcon(t,e,n){const i=et.Z.options.methods.genIcon.call(this,t,e,n);return"append"===t&&(i.children[0].data=(0,rt.ZP)(i.children[0].data,{attrs:{tabindex:i.children[0].componentOptions.listeners&&"-1","aria-hidden":"true","aria-label":void 0}})),i},genInput(){const t=nt.Z.options.methods.genInput.call(this);return delete t.data.attrs.name,t.data=(0,rt.ZP)(t.data,{domProps:{value:null},attrs:{readonly:!0,type:"text","aria-readonly":String(this.isReadonly),"aria-activedescendant":(0,d.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,d.vO)(t.data,"attrs.autocomplete","off"),placeholder:this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?void 0:this.placeholder},on:{keypress:this.onKeyPress}}),t},genHiddenInput(){return this.$createElement("input",{domProps:{value:this.lazyValue},attrs:{type:"hidden",name:this.attrs$.name}})},genInputSlot(){const t=nt.Z.options.methods.genInputSlot.call(this);return t.data.attrs={...t.data.attrs,role:"button","aria-haspopup":"listbox","aria-expanded":String(this.isMenuActive),"aria-owns":this.computedOwns},t},genList(){return this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"]?this.genListWithSlot():this.staticList},genListWithSlot(){const t=["prepend-item","no-data","append-item"].filter((t=>this.$slots[t])).map((t=>this.$createElement("template",{slot:t},this.$slots[t])));return this.$createElement(tt,{...this.listData},t)},genMenu(){const t=this.$_menuProps;return t.activator=this.$refs["input-slot"],""===this.attach||!0===this.attach||"attach"===this.attach?t.attach=this.$el:t.attach=this.attach,this.$createElement(S,{attrs:{role:void 0},props:t,on:{input:t=>{this.isMenuActive=t,this.isFocused=t},scroll:this.onScroll},ref:"menu"},[this.genList()])},genSelections(){let t=this.selectedItems.length;const e=new Array(t);let n;n=this.$scopedSlots.selection?this.genSlotSelection:this.hasChips?this.genChipSelection:this.genCommaSelection;while(t--)e[t]=n(this.selectedItems[t],t,t===e.length-1);return this.$createElement("div",{staticClass:"v-select__selections"},e)},genSlotSelection(t,e){return this.$scopedSlots.selection({attrs:{class:"v-chip--select"},parent:this,item:t,index:e,select:t=>{t.stopPropagation(),this.selectedIndex=e},selected:e===this.selectedIndex,disabled:!this.isInteractive})},getMenuIndex(){return this.$refs.menu?this.$refs.menu.listIndex:-1},getDisabled(t){return(0,d.qF)(t,this.itemDisabled,!1)},getText(t){return(0,d.qF)(t,this.itemText,t)},getValue(t){return(0,d.qF)(t,this.itemValue,this.getText(t))},onBlur(t){t&&this.$emit("blur",t)},onChipInput(t){this.multiple?this.selectItem(t):this.setValue(null),0===this.selectedItems.length?this.isMenuActive=!0:this.isMenuActive=!1,this.selectedIndex=-1},onClick(t){this.isInteractive&&(this.isAppendInner(t.target)||(this.isMenuActive=!0),this.isFocused||(this.isFocused=!0,this.$emit("focus")),this.$emit("click",t))},onEscDown(t){t.preventDefault(),this.isMenuActive&&(t.stopPropagation(),this.isMenuActive=!1)},onKeyPress(t){if(this.multiple||!this.isInteractive||this.disableLookup||t.key.length>1||t.ctrlKey||t.metaKey||t.altKey)return;const e=1e3,n=performance.now();n-this.keyboardLookupLastTime>e&&(this.keyboardLookupPrefix=""),this.keyboardLookupPrefix+=t.key.toLowerCase(),this.keyboardLookupLastTime=n;const i=this.allItems.findIndex((t=>{var e;const n=(null!==(e=this.getText(t))&&void 0!==e?e:"").toString();return n.toLowerCase().startsWith(this.keyboardLookupPrefix)})),s=this.allItems[i];-1!==i&&(this.lastItem=Math.max(this.lastItem,i+5),this.setValue(this.returnObject?s:this.getValue(s)),this.$nextTick((()=>this.$refs.menu.getTiles())),setTimeout((()=>this.setMenuIndex(i))))},onKeyDown(t){if(this.isReadonly&&t.keyCode!==d.Do.tab)return;const e=t.keyCode,n=this.$refs.menu;return this.$emit("keydown",t),n?(this.isMenuActive&&[d.Do.up,d.Do.down,d.Do.home,d.Do.end,d.Do.enter].includes(e)&&this.$nextTick((()=>{n.changeListIndex(t),this.$emit("update:list-index",n.listIndex)})),[d.Do.enter,d.Do.space].includes(e)&&this.activateMenu(),!this.isMenuActive&&[d.Do.up,d.Do.down,d.Do.home,d.Do.end].includes(e)?this.onUpDown(t):e===d.Do.esc?this.onEscDown(t):e===d.Do.tab?this.onTabDown(t):e===d.Do.space?this.onSpaceDown(t):void 0):void 0},onMenuActiveChange(t){if(this.multiple&&!t||this.getMenuIndex()>-1)return;const e=this.$refs.menu;if(e&&this.isDirty){this.$refs.menu.getTiles();for(let t=0;t<e.tiles.length;t++)if("true"===e.tiles[t].getAttribute("aria-selected")){this.setMenuIndex(t);break}}},onMouseUp(t){this.hasMouseDown&&3!==t.which&&this.isInteractive&&this.isAppendInner(t.target)&&this.$nextTick((()=>this.isMenuActive=!this.isMenuActive)),nt.Z.options.methods.onMouseUp.call(this,t)},onScroll(){if(this.isMenuActive){if(this.lastItem>this.computedItems.length)return;const t=this.getContent().scrollHeight-(this.getContent().scrollTop+this.getContent().clientHeight)<200;t&&(this.lastItem+=20)}else requestAnimationFrame((()=>this.getContent().scrollTop=0))},onSpaceDown(t){t.preventDefault()},onTabDown(t){const e=this.$refs.menu;if(!e)return;const n=e.activeTile;!this.multiple&&n&&this.isMenuActive?(t.preventDefault(),t.stopPropagation(),n.click()):this.blur(t)},onUpDown(t){const e=this.$refs.menu;if(!e)return;if(t.preventDefault(),this.multiple)return this.activateMenu();const n=t.keyCode;e.isBooted=!0,window.requestAnimationFrame((()=>{if(e.getTiles(),!e.hasClickableTiles)return this.activateMenu();switch(n){case d.Do.up:e.prevTile();break;case d.Do.down:e.nextTile();break;case d.Do.home:e.firstTile();break;case d.Do.end:e.lastTile();break}this.selectItem(this.allItems[this.getMenuIndex()])}))},selectItem(t){if(this.multiple){const e=(this.internalValue||[]).slice(),n=this.findExistingIndex(t);if(-1!==n?e.splice(n,1):e.push(t),this.setValue(e.map((t=>this.returnObject?t:this.getValue(t)))),this.hideSelected)this.setMenuIndex(-1);else{const e=this.allItems.indexOf(t);~e&&(this.$nextTick((()=>this.$refs.menu.getTiles())),setTimeout((()=>this.setMenuIndex(e))))}}else this.setValue(this.returnObject?t:this.getValue(t)),this.isMenuActive=!1},setMenuIndex(t){this.$refs.menu&&(this.$refs.menu.listIndex=t)},setSelectedItems(){const t=[],e=this.multiple&&Array.isArray(this.internalValue)?this.internalValue:[this.internalValue];for(const n of e){const e=this.allItems.findIndex((t=>this.valueComparator(this.getValue(t),this.getValue(n))));e>-1&&t.push(this.allItems[e])}this.selectedItems=t},setValue(t){this.valueComparator(t,this.internalValue)||(this.internalValue=t,this.$emit("change",t))},isAppendInner(t){const e=this.$refs["append-inner"];return e&&(e===t||e.contains(t))}}})},7423:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var i=n(2500),s=n(6878),r=n(4390),o=n(8846),a=n(2637),l=n(6669),c=n(7678),u=(0,c.Z)(i.Z,s.Z,r.Z,o.Z,a.Z,l.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},3434:function(t,e,n){"use strict";var i=n(7423);e["Z"]=i.Z},7808:function(t,e,n){"use strict";n.d(e,{Z:function(){return _}});n(7658),n(541),n(2838);var i=n(573),s=n(6669),r=n(7678),o=(0,r.Z)(s.Z).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render(t,e){const{props:n}=e,i=parseInt(n.max,10),r=parseInt(n.value,10),o=i?`${r} / ${i}`:String(n.value),a=i&&r>i;return t("div",{staticClass:"v-counter",class:{"error--text":a,...(0,s.X)(e)}},o)}}),a=o,l=n(4738),c=n(6750),u=n(4101),h=n(144);function d(t){return h.ZP.extend({name:"intersectable",data:()=>({isIntersecting:!1}),mounted(){c.Z.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed(){c.Z.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve(e,n,i){if(this.isIntersecting=i,i)for(let s=0,r=t.onVisible.length;s<r;s++){const e=this[t.onVisible[s]];"function"!==typeof e?(0,u.Kd)(t.onVisible[s]+" method is not available on the instance but referenced in intersectable mixin options"):e()}}}})}var p=n(401),f=n(5776),m=n(6746),g=n(7069),v=n(8856),y=n(5352);const b=(0,r.Z)(i.Z,d({onVisible:["onResize","tryAutofocus"]}),p.Z),w=["color","file","time","date","datetime-local","week","month"];var _=b.extend().extend({name:"v-text-field",directives:{resize:m.Z,ripple:g.Z},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:()=>({badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}),computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped}},computedColor(){const t=f.Z.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):[...(this.internalValue||"").toString()].length},hasCounter(){return!1!==this.counter&&null!=this.counter},hasDetails(){return i.Z.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty(){var t;return(null===(t=this.lazyValue)||void 0===t?void 0:t.toString().length)>0||this.badInput},isEnclosed(){return this.filled||this.isSolo||this.outlined},isLabelActive(){return this.isDirty||w.includes(this.type)},isSingle(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo(){return this.solo||this.soloInverted},labelPosition(){let t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label(){this.$nextTick(this.setLabelWidth)},prefix(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value(t){this.lazyValue=t}},created(){this.$attrs.hasOwnProperty("box")&&(0,u.fK)("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&(0,u.fK)("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&(0,u.Kd)("shaped should be used with either filled or outlined",this)},mounted(){this.$watch((()=>this.labelValue),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((()=>{this.isBooted=!0,requestAnimationFrame((()=>{this.isIntersecting||this.onResize()}))}))},methods:{focus(){this.onFocus()},blur(t){window.requestAnimationFrame((()=>{this.$refs.input&&this.$refs.input.blur()}))},clearableCallback(){this.$refs.input&&this.$refs.input.focus(),this.$nextTick((()=>this.internalValue=null))},genAppendSlot(){const t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot(){const t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot(){const t=i.Z.options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter(){var t,e,n;if(!this.hasCounter)return null;const i=!0===this.counter?this.attrs$.maxlength:this.counter,s={dark:this.dark,light:this.light,max:i,value:this.computedCounterValue};return null!==(n=null===(e=(t=this.$scopedSlots).counter)||void 0===e?void 0:e.call(t,{props:s}))&&void 0!==n?n:this.$createElement(a,{props:s})},genControl(){return i.Z.options.methods.genControl.call(this)},genDefaultSlot(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel(){if(!this.showLabel)return null;const t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(l.Z,t,this.$slots.label||this.label)},genLegend(){const t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:(0,y.kb)(t)}},[e])},genInput(){const t=Object.assign({},this.listeners$);delete t.change;const{title:e,...n}=this.attrs$;return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:{...n,autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type},on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages(){if(!this.showDetails)return null;const t=i.Z.options.methods.genMessages.call(this),e=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[t,e])},genTextFieldSlot(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix(t){return this.$createElement("div",{class:`v-text-field__${t}`,ref:t},this[t])},onBlur(t){this.isFocused=!1,t&&this.$nextTick((()=>this.$emit("blur",t)))},onClick(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus(t){if(!this.$refs.input)return;const e=(0,v.e)(this.$el);return e?e.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t))):void 0},onInput(t){const e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){t.keyCode===y.Do.enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",t)},onMouseDown(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),i.Z.options.methods.onMouseDown.call(this,t)},onMouseUp(t){this.hasMouseDown&&this.focus(),i.Z.options.methods.onMouseUp.call(this,t)},setLabelWidth(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;const t=(0,v.e)(this.$el);return!(!t||t.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}})},920:function(t,e,n){"use strict";var i=n(6669);e["Z"]=i.Z.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:i.Z.options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find((t=>!t.isComment&&" "!==t.text))}})},7394:function(t,e,n){"use strict";n.d(e,{Fx:function(){return h},Zq:function(){return d},Z5:function(){return c},Qn:function(){return u}});var i=n(1767);function s(t=[],...e){return Array().concat(t,...e)}function r(t,e="top center 0",n){return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render(e,n){const r="transition"+(n.props.group?"-group":""),o={props:{name:t,mode:n.props.mode},on:{beforeEnter(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=s(o.on.leave,(t=>{const{offsetTop:e,offsetLeft:n,offsetWidth:i,offsetHeight:s}=t;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=i+"px",t.style.height=s+"px"})),o.on.afterLeave=s(o.on.afterLeave,(t=>{if(t&&t._transitionInitialStyles){const{position:e,top:n,left:i,width:s,height:r}=t._transitionInitialStyles;delete t._transitionInitialStyles,t.style.position=e||"",t.style.top=n||"",t.style.left=i||"",t.style.width=s||"",t.style.height=r||""}}))),n.props.hideOnLeave&&(o.on.leave=s(o.on.leave,(t=>{t.style.setProperty("display","none","important")}))),e(r,(0,i.ZP)(n.data,o),n.children)}}}function o(t,e,n="in-out"){return{name:t,functional:!0,props:{mode:{type:String,default:n}},render(n,s){return n("transition",(0,i.ZP)(s.data,{props:{name:t},on:e}),s.children)}}}var a=n(5352);function l(t="",e=!1){const n=e?"width":"height",i=`offset${(0,a.jC)(n)}`;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[n]:t.style[n]}},enter(e){const s=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";const r=`${e[i]}px`;e.style[n]="0",e.offsetHeight,e.style.transition=s.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((()=>{e.style[n]=r}))},afterEnter:r,enterCancelled:r,leave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[n]:t.style[n]},t.style.overflow="hidden",t.style[n]=`${t[i]}px`,t.offsetHeight,requestAnimationFrame((()=>t.style[n]="0"))},afterLeave:s,leaveCancelled:s};function s(e){t&&e._parent&&e._parent.classList.remove(t),r(e)}function r(t){const e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}}r("carousel-transition"),r("carousel-reverse-transition"),r("tab-transition"),r("tab-reverse-transition"),r("menu-transition"),r("fab-transition","center center","out-in"),r("dialog-transition"),r("dialog-bottom-transition"),r("dialog-top-transition");const c=r("fade-transition"),u=(r("scale-transition"),r("scroll-x-transition"),r("scroll-x-reverse-transition"),r("scroll-y-transition"),r("scroll-y-reverse-transition"),r("slide-x-transition")),h=(r("slide-x-reverse-transition"),r("slide-y-transition"),r("slide-y-reverse-transition"),o("expand-transition",l())),d=o("expand-x-transition",l("",!0))},5942:function(t,e,n){"use strict";n(7658);var i=n(8856);function s(){return!0}function r(t,e,n){if(!t||!1===o(t,n))return!1;const s=(0,i.e)(e);if("undefined"!==typeof ShadowRoot&&s instanceof ShadowRoot&&s.host===t.target)return!1;const r=("object"===typeof n.value&&n.value.include||(()=>[]))();return r.push(e),!r.some((e=>e.contains(t.target)))}function o(t,e){const n="object"===typeof e.value&&e.value.closeConditional||s;return n(t)}function a(t,e,n){const i="function"===typeof n.value?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&r(t,e,n)&&setTimeout((()=>{o(t,n)&&i&&i(t)}),0)}function l(t,e){const n=(0,i.e)(t);e(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&e(n)}const c={inserted(t,e,n){const i=n=>a(n,t,e),s=n=>{t._clickOutside.lastMousedownWasOutside=r(n,t,e)};l(t,(t=>{t.addEventListener("click",i,!0),t.addEventListener("mousedown",s,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[n.context._uid]={onClick:i,onMousedown:s}},unbind(t,e,n){t._clickOutside&&(l(t,(e=>{var i;if(!e||!(null===(i=t._clickOutside)||void 0===i?void 0:i[n.context._uid]))return;const{onClick:s,onMousedown:r}=t._clickOutside[n.context._uid];e.removeEventListener("click",s,!0),e.removeEventListener("mousedown",r,!0)})),delete t._clickOutside[n.context._uid])}};e["Z"]=c},6750:function(t,e,n){"use strict";function i(t,e,n){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const i=e.modifiers||{},r=e.value,{handler:o,options:a}="object"===typeof r?r:{handler:r,options:{}},l=new IntersectionObserver(((r=[],a)=>{var l;const c=null===(l=t._observe)||void 0===l?void 0:l[n.context._uid];if(!c)return;const u=r.some((t=>t.isIntersecting));!o||i.quiet&&!c.init||i.once&&!u&&!c.init||o(r,a,u),u&&i.once?s(t,e,n):c.init=!0}),a);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:l},l.observe(t)}function s(t,e,n){var i;const s=null===(i=t._observe)||void 0===i?void 0:i[n.context._uid];s&&(s.observer.unobserve(t),delete t._observe[n.context._uid])}const r={inserted:i,unbind:s};e["Z"]=r},6746:function(t,e,n){"use strict";function i(t,e,n){const i=e.value,s=e.options||{passive:!0};window.addEventListener("resize",i,s),t._onResize=Object(t._onResize),t._onResize[n.context._uid]={callback:i,options:s},e.modifiers&&e.modifiers.quiet||i()}function s(t,e,n){var i;if(!(null===(i=t._onResize)||void 0===i?void 0:i[n.context._uid]))return;const{callback:s,options:r}=t._onResize[n.context._uid];window.removeEventListener("resize",s,r),delete t._onResize[n.context._uid]}const r={inserted:i,unbind:s};e["Z"]=r},7069:function(t,e,n){"use strict";n.d(e,{Z:function(){return S}});var i=n(5352);const s=80;function r(t,e){t.style.transform=e,t.style.webkitTransform=e}function o(t){return"TouchEvent"===t.constructor.name}function a(t){return"KeyboardEvent"===t.constructor.name}const l=(t,e,n={})=>{let i=0,s=0;if(!a(t)){const n=e.getBoundingClientRect(),r=o(t)?t.touches[t.touches.length-1]:t;i=r.clientX-n.left,s=r.clientY-n.top}let r=0,l=.3;e._ripple&&e._ripple.circle?(l=.15,r=e.clientWidth/2,r=n.center?r:r+Math.sqrt((i-r)**2+(s-r)**2)/4):r=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const c=(e.clientWidth-2*r)/2+"px",u=(e.clientHeight-2*r)/2+"px",h=n.center?c:i-r+"px",d=n.center?u:s-r+"px";return{radius:r,scale:l,x:h,y:d,centerX:c,centerY:u}},c={show(t,e,n={}){if(!e._ripple||!e._ripple.enabled)return;const i=document.createElement("span"),s=document.createElement("span");i.appendChild(s),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:o,scale:a,x:c,y:u,centerX:h,centerY:d}=l(t,e,n),p=2*o+"px";s.className="v-ripple__animation",s.style.width=p,s.style.height=p,e.appendChild(i);const f=window.getComputedStyle(e);f&&"static"===f.position&&(e.style.position="relative",e.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),r(s,`translate(${c}, ${u}) scale3d(${a},${a},${a})`),s.dataset.activated=String(performance.now()),setTimeout((()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),r(s,`translate(${h}, ${d}) scale3d(1,1,1)`)}),0)},hide(t){if(!t||!t._ripple||!t._ripple.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(0===e.length)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),s=Math.max(250-i,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((()=>{var e;const i=t.getElementsByClassName("v-ripple__animation");1===i.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),(null===(e=n.parentNode)||void 0===e?void 0:e.parentNode)===t&&t.removeChild(n.parentNode)}),300)}),s)}};function u(t){return"undefined"===typeof t||!!t}function h(t){const e={},n=t.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,o(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||a(t),n._ripple.class&&(e.class=n._ripple.class),o(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{c.show(t,n,e)},n._ripple.showTimer=window.setTimeout((()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),s)}else c.show(t,n,e)}}function d(t){const e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((()=>{d(t)})));window.setTimeout((()=>{e._ripple&&(e._ripple.touched=!1)})),c.hide(e)}}function p(t){const e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let f=!1;function m(t){f||t.keyCode!==i.Do.enter&&t.keyCode!==i.Do.space||(f=!0,h(t))}function g(t){f=!1,d(t)}function v(t){!0===f&&(f=!1,d(t))}function y(t,e,n){const i=u(e.value);i||c.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=i;const s=e.value||{};s.center&&(t._ripple.centered=!0),s.class&&(t._ripple.class=e.value.class),s.circle&&(t._ripple.circle=s.circle),i&&!n?(t.addEventListener("touchstart",h,{passive:!0}),t.addEventListener("touchend",d,{passive:!0}),t.addEventListener("touchmove",p,{passive:!0}),t.addEventListener("touchcancel",d),t.addEventListener("mousedown",h),t.addEventListener("mouseup",d),t.addEventListener("mouseleave",d),t.addEventListener("keydown",m),t.addEventListener("keyup",g),t.addEventListener("blur",v),t.addEventListener("dragstart",d,{passive:!0})):!i&&n&&b(t)}function b(t){t.removeEventListener("mousedown",h),t.removeEventListener("touchstart",h),t.removeEventListener("touchend",d),t.removeEventListener("touchmove",p),t.removeEventListener("touchcancel",d),t.removeEventListener("mouseup",d),t.removeEventListener("mouseleave",d),t.removeEventListener("keydown",m),t.removeEventListener("keyup",g),t.removeEventListener("dragstart",d),t.removeEventListener("blur",v)}function w(t,e,n){y(t,e,!1)}function _(t){delete t._ripple,b(t)}function k(t,e){if(e.value===e.oldValue)return;const n=u(e.oldValue);y(t,e,n)}const I={bind:w,unbind:_,update:k};var S=I},4802:function(t,e,n){"use strict";var i=n(5352);const s=t=>{const{touchstartX:e,touchendX:n,touchstartY:i,touchendY:s}=t,r=.5,o=16;t.offsetX=n-e,t.offsetY=s-i,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&n<e-o&&t.left(t),t.right&&n>e+o&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&s<i-o&&t.up(t),t.down&&s>i+o&&t.down(t))};function r(t,e){const n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){const n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),s(e)}function a(t,e){const n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>r(t,e),touchend:t=>o(t,e),touchmove:t=>a(t,e)}}function c(t,e,n){const s=e.value,r=s.parent?t.parentElement:t,o=s.options||{passive:!0};if(!r)return;const a=l(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[n.context._uid]=a,(0,i.XP)(a).forEach((t=>{r.addEventListener(t,a[t],o)}))}function u(t,e,n){const s=e.value.parent?t.parentElement:t;if(!s||!s._touchHandlers)return;const r=s._touchHandlers[n.context._uid];(0,i.XP)(r).forEach((t=>{s.removeEventListener(t,r[t])})),delete s._touchHandlers[n.context._uid]}const h={inserted:c,unbind:u};e["Z"]=h},1705:function(t,e,n){"use strict";n.d(e,{Z:function(){return tt}});n(7658);var i=n(144),s=n(4101);function r(t,e={}){if(r.installed)return;r.installed=!0,i.ZP!==t&&(0,s.N6)("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");const n=e.components||{},o=e.directives||{};for(const i in o){const e=o[i];t.directive(i,e)}(function e(n){if(n){for(const i in n){const s=n[i];s&&!e(s.$_vuetify_subcomponents)&&t.component(i,s)}return!0}return!1})(n),t.$_vuetify_installed||(t.$_vuetify_installed=!0,t.mixin({beforeCreate(){const e=this.$options;e.vuetify?(e.vuetify.init(this,this.$ssrContext),this.$vuetify=t.observable(e.vuetify.framework)):this.$vuetify=e.parent&&e.parent.$vuetify||this},beforeMount(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}var o={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}};const a={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:o},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}};var l=n(5352),c=n(9989);class u extends c.t{constructor(t,e){super();const n=(0,l.Ee)({},a),{userPreset:i}=e,{preset:r={},...o}=i;null!=r.preset&&(0,s.Kd)("Global presets do not support the **preset** option, it can be safely omitted"),e.preset=(0,l.Ee)((0,l.Ee)(n,r),o)}}u.property="presets";class h extends c.t{constructor(){super(...arguments),this.bar=0,this.top=0,this.left=0,this.insetFooter=0,this.right=0,this.bottom=0,this.footer=0,this.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}}}register(t,e,n){this.application[e][t]=n,this.update(e)}unregister(t,e){null!=this.application[e][t]&&(delete this.application[e][t],this.update(e))}update(t){this[t]=Object.values(this.application[t]).reduce(((t,e)=>t+e),0)}}h.property="application";class d extends c.t{constructor(t){super(),this.xs=!1,this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this.xsOnly=!1,this.smOnly=!1,this.smAndDown=!1,this.smAndUp=!1,this.mdOnly=!1,this.mdAndDown=!1,this.mdAndUp=!1,this.lgOnly=!1,this.lgAndDown=!1,this.lgAndUp=!1,this.xlOnly=!1,this.name="xs",this.height=0,this.width=0,this.mobile=!0,this.resizeTimeout=0;const{mobileBreakpoint:e,scrollBarWidth:n,thresholds:i}=t[d.property];this.mobileBreakpoint=e,this.scrollBarWidth=n,this.thresholds=i}init(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}update(t=!1){const e=t?0:this.getClientHeight(),n=t?0:this.getClientWidth(),i=n<this.thresholds.xs,s=n<this.thresholds.sm&&!i,r=n<this.thresholds.md-this.scrollBarWidth&&!(s||i),o=n<this.thresholds.lg-this.scrollBarWidth&&!(r||s||i),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=e,this.width=n,this.xs=i,this.sm=s,this.md=r,this.lg=o,this.xl=a,this.xsOnly=i,this.smOnly=s,this.smAndDown=(i||s)&&!(r||o||a),this.smAndUp=!i&&(s||r||o||a),this.mdOnly=r,this.mdAndDown=(i||s||r)&&!(o||a),this.mdAndUp=!(i||s)&&(r||o||a),this.lgOnly=o,this.lgAndDown=(i||s||r||o)&&!a,this.lgAndUp=!(i||s||r)&&(o||a),this.xlOnly=a,!0){case i:this.name="xs";break;case s:this.name="sm";break;case r:this.name="md";break;case o:this.name="lg";break;default:this.name="xl";break}if("number"===typeof this.mobileBreakpoint)return void(this.mobile=n<parseInt(this.mobileBreakpoint,10));const l={xs:0,sm:1,md:2,lg:3,xl:4},c=l[this.name],u=l[this.mobileBreakpoint];this.mobile=c<=u}onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}getClientWidth(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}getClientHeight(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}d.property="breakpoint";var p=n(6421);const f={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",success:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",warning:"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",error:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"};var m=f;const g={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"};var v=g;const y={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"};var b=y;const w={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"};var _=w;const k={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"};var I=k;function S(t,e){const n={};for(const i in e)n[i]={component:t,props:{icon:e[i].split(" fa-")}};return n}var C=S("font-awesome-icon",_),T=Object.freeze({mdiSvg:m,md:v,mdi:b,fa:_,fa4:I,faSvg:C});class x extends c.t{constructor(t){super();const{iconfont:e,values:n,component:i}=t[x.property];this.component=i,this.iconfont=e,this.values=(0,l.Ee)(T[e],n)}}x.property="icons";const E="$vuetify.",$=Symbol("Lang fallback");function A(t,e,n=!1,i){const r=e.replace(E,"");let o=(0,l.vO)(t,r,$);return o===$&&(n?((0,s.N6)(`Translation key "${r}" not found in fallback`),o=e):((0,s.Kd)(`Translation key "${r}" not found, falling back to default`),o=A(i,e,!0,i))),o}class O extends c.t{constructor(t){super(),this.defaultLocale="en";const{current:e,locales:n,t:i}=t[O.property];this.current=e,this.locales=n,this.translator=i||this.defaultTranslator}currentLocale(t){const e=this.locales[this.current],n=this.locales[this.defaultLocale];return A(e,t,!1,n)}t(t,...e){return t.startsWith(E)?this.translator(t,...e):this.replace(t,e)}defaultTranslator(t,...e){return this.replace(this.currentLocale(t),e)}replace(t,e){return t.replace(/\{(\d+)\}/g,((t,n)=>String(e[+n])))}}O.property="lang";var P=n(937);const D=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],L=t=>t<=.0031308?12.92*t:1.055*t**(1/2.4)-.055,R=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],N=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function M(t){const e=Array(3),n=L,i=D;for(let s=0;s<3;++s)e[s]=Math.round(255*(0,l.uZ)(n(i[s][0]*t[0]+i[s][1]*t[1]+i[s][2]*t[2])));return(e[0]<<16)+(e[1]<<8)+(e[2]<<0)}function B(t){const e=[0,0,0],n=N,i=R,s=n((t>>16&255)/255),r=n((t>>8&255)/255),o=n((t>>0&255)/255);for(let a=0;a<3;++a)e[a]=i[a][0]*s+i[a][1]*r+i[a][2]*o;return e}const V=.20689655172413793,F=t=>t>V**3?Math.cbrt(t):t/(3*V**2)+4/29,j=t=>t>V?t**3:3*V**2*(t-4/29);function Z(t){const e=F,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function U(t){const e=j,n=(t[0]+16)/116;return[.95047*e(n+t[1]/500),e(n),1.08883*e(n-t[2]/200)]}function z(t,e=!1,n=!0){const{anchor:i,...s}=t,r=Object.keys(s),o={};for(let a=0;a<r.length;++a){const i=r[a],s=t[i];null!=s&&(n?e?("base"===i||i.startsWith("lighten")||i.startsWith("darken"))&&(o[i]=(0,P.hq)(s)):o[i]="object"===typeof s?z(s,!0,n):G(i,(0,P.jx)(s)):o[i]={base:(0,P.I4)((0,P.jx)(s))})}return e||(o.anchor=i||o.base||o.primary.base),o}const H=(t,e)=>`\n.v-application .${t} {\n  background-color: ${e} !important;\n  border-color: ${e} !important;\n}\n.v-application .${t}--text {\n  color: ${e} !important;\n  caret-color: ${e} !important;\n}`,W=(t,e,n)=>{const[i,s]=e.split(/(\d)/,2);return`\n.v-application .${t}.${i}-${s} {\n  background-color: ${n} !important;\n  border-color: ${n} !important;\n}\n.v-application .${t}--text.text--${i}-${s} {\n  color: ${n} !important;\n  caret-color: ${n} !important;\n}`},q=(t,e="base")=>`--v-${t}-${e}`,K=(t,e="base")=>`var(${q(t,e)})`;function Y(t,e=!1){const{anchor:n,...i}=t,s=Object.keys(i);if(!s.length)return"";let r="",o="";const a=e?K("anchor"):n;o+=`.v-application a { color: ${a}; }`,e&&(r+=`  ${q("anchor")}: ${n};\n`);for(let c=0;c<s.length;++c){const n=s[c],i=t[n];o+=H(n,e?K(n):i.base),e&&(r+=`  ${q(n)}: ${i.base};\n`);const a=(0,l.XP)(i);for(let t=0;t<a.length;++t){const s=a[t],l=i[s];"base"!==s&&(o+=W(n,s,e?K(n,s):l),e&&(r+=`  ${q(n,s)}: ${l};\n`))}}return e&&(r=`:root {\n${r}}\n\n`),r+o}function G(t,e){const n={base:(0,P.I4)(e)};for(let i=5;i>0;--i)n[`lighten${i}`]=(0,P.I4)(X(e,i));for(let i=1;i<=4;++i)n[`darken${i}`]=(0,P.I4)(J(e,i));return n}function X(t,e){const n=Z(B(t));return n[0]=n[0]+10*e,M(U(n))}function J(t,e){const n=Z(B(t));return n[0]=n[0]-10*e,M(U(n))}class Q extends c.t{constructor(t){super(),this.disabled=!1,this.isDark=null,this.unwatch=null,this.vueMeta=null;const{dark:e,disable:n,options:i,themes:s}=t[Q.property];this.dark=Boolean(e),this.defaults=this.themes=s,this.options=i,n?this.disabled=!0:this.themes={dark:this.fillVariant(s.dark,!0),light:this.fillVariant(s.light,!1)}}set css(t){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=t)}set dark(t){const e=this.isDark;this.isDark=t,null!=e&&this.applyTheme()}get dark(){return Boolean(this.isDark)}applyTheme(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}clearCss(){this.css=""}init(t,e){this.disabled||(t.$meta?this.initVueMeta(t):e&&this.initSSR(e),this.initTheme(t))}setTheme(t,e){this.themes[t]=Object.assign(this.themes[t],e),this.applyTheme()}resetThemes(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}checkOrCreateStyleElement(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}fillVariant(t={},e){const n=this.themes[e?"dark":"light"];return Object.assign({},n,t)}genStyleElement(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}initVueMeta(t){if(this.vueMeta=t.$meta(),this.isVueMeta23)return void t.$nextTick((()=>{this.applyVueMeta23()}));const e="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",n=t.$options[e]||{};t.$options[e]=()=>{n.style=n.style||[];const t=n.style.find((t=>"vuetify-theme-stylesheet"===t.id));return t?t.cssText=this.generatedStyles:n.style.push({cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(this.options||{}).cspNonce}),n}}applyVueMeta23(){const{set:t}=this.vueMeta.addApp("vuetify");t({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}initSSR(t){const e=this.options.cspNonce?` nonce="${this.options.cspNonce}"`:"";t.head=t.head||"",t.head+=`<style type="text/css" id="vuetify-theme-stylesheet"${e}>${this.generatedStyles}</style>`}initTheme(t){"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),t.$once("hook:created",(()=>{const e=i.ZP.observable({themes:this.themes});this.unwatch=t.$watch((()=>e.themes),(()=>this.applyTheme()),{deep:!0})})),this.applyTheme())}get currentTheme(){const t=this.dark?"dark":"light";return this.themes[t]}get generatedStyles(){const t=this.parsedTheme,e=this.options||{};let n;return null!=e.themeCache&&(n=e.themeCache.get(t),null!=n)||(n=Y(t,e.customProperties),null!=e.minifyTheme&&(n=e.minifyTheme(n)),null!=e.themeCache&&e.themeCache.set(t,n)),n}get parsedTheme(){return z(this.currentTheme||{},void 0,(0,l.qw)(this.options,["variations"],!0))}get isVueMeta23(){return"function"===typeof this.vueMeta.addApp}}Q.property="theme";class tt{constructor(t={}){this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=t,this.use(u),this.use(h),this.use(d),this.use(p.A),this.use(x),this.use(O),this.use(Q)}init(t,e){this.installed.forEach((n=>{const i=this.framework[n];i.framework=this.framework,i.init(t,e)})),this.framework.rtl=Boolean(this.preset.rtl)}use(t){const e=t.property;this.installed.includes(e)||(this.framework[e]=new t(this.preset,this),this.installed.push(e))}}tt.install=r,tt.installed=!1,tt.version="2.6.15",tt.config={silent:!1}},1452:function(t,e,n){"use strict";var i=n(3016),s=n(1444),r=n(7678),o=n(5352),a=n(4101);const l=(0,r.Z)(i.Z,s.Z);e["Z"]=l.extend({name:"activatable",props:{activator:{default:null,validator:t=>["string","object"].includes(typeof t)},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}),watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted(){const t=(0,o.sp)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&(0,a.N6)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const t=Object.keys(this.listeners);for(const e of t)this.getActivator().addEventListener(e,this.listeners[e])},genActivator(){const t=(0,o.z9)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=t=>{this.getActivator(t),this.runDelay("open")},t.mouseleave=t=>{this.getActivator(t),this.runDelay("close")}):this.openOnClick&&(t.click=t=>{const e=this.getActivator(t);e&&e.focus(),t.stopPropagation(),this.isActive=!this.isActive}),this.openOnFocus&&(t.focus=t=>{this.getActivator(t),t.stopPropagation(),this.isActive=!this.isActive}),t},getActivator(t){if(this.activatorElement)return this.activatorElement;let e=null;if(this.activator){const t=this.internalActivator?this.$el:document;e="string"===typeof this.activator?t.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){const t=this.activatorNode[0].componentInstance;e=t&&t.$options.mixins&&t.$options.mixins.some((t=>t.options&&["activatable","menuable"].includes(t.options.name)))?t.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=(null===e||void 0===e?void 0:e.nodeType)===Node.ELEMENT_NODE?e:null,this.activatorElement},getContentSlot(){return(0,o.z9)(this,"default",this.getValueProxy(),!0)},getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.removeEventListener(e,this.listeners[e]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},2500:function(t,e,n){"use strict";var i=n(144);function s(t){return function(e,n){for(const i in n)Object.prototype.hasOwnProperty.call(e,i)||this.$delete(this.$data[t],i);for(const i in e)this.$set(this.$data[t],i,e[i])}}e["Z"]=i.ZP.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",s("attrs$"),{immediate:!0}),this.$watch("$listeners",s("listeners$"),{immediate:!0})}})},8223:function(t,e,n){"use strict";var i=n(4101),s=n(144);e["Z"]=s.ZP.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,i.Jk)("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}})},6878:function(t,e,n){"use strict";var i=n(144),s=n(4101),r=n(937);e["Z"]=i.ZP.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,s.N6)("style must be an object",this),e):"string"===typeof e.class?((0,s.N6)("class must be an object",this),e):((0,r.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,s.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,s.N6)("class must be an object",this),e;if((0,r.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[n,i]=t.toString().trim().split(" ",2);e.class={...e.class,[n+"--text"]:!0},i&&(e.class["text--"+i]=!0)}return e}}})},6174:function(t,e,n){"use strict";var i=n(144),s=n(5352);e["Z"]=i.ZP.extend({name:"comparable",props:{valueComparator:{type:Function,default:s.vZ}}})},3016:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.ZP.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const n=parseInt(this[`${t}Delay`],10);this[`${t}Timeout`]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),n)}}})},908:function(t,e,n){"use strict";n(7658);var i=n(7678);function s(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n];i.isActive&&i.isDependent?e.push(i):e.push(...s(i.$children))}return e}e["Z"]=(0,i.Z)().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(t){if(t)return;const e=this.getOpenDependents();for(let n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?s(this.$children):[]},getOpenDependentElements(){const t=[],e=this.getOpenDependents();for(let n=0;n<e.length;n++)t.push(...e[n].getClickableDependentElements());return t},getClickableDependentElements(){const t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push(...this.getOpenDependentElements()),t}}})},2694:function(t,e,n){"use strict";var i=n(8223),s=n(5352),r=n(7678),o=n(4101);function a(t){const e=typeof t;return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}function l(t){t.forEach((t=>{t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}e["Z"]=(0,r.Z)(i.Z).extend({name:"detachable",props:{attach:{default:!1,validator:a},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick((()=>{if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((t=>{if(!t.elm)return;if(!this.$el.parentNode)return;const e=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(t.elm,e)}))}}))},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed(){if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){const e=new MutationObserver((n=>{n.some((t=>Array.from(t.removedNodes).includes(this.$el)))&&(e.disconnect(),l(t))}));e.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else l(t)}},methods:{getScopeIdAttrs(){const t=(0,s.vO)(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let t;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):(0,o.Kd)(`Unable to locate target ${this.attach||"[data-app]"}`,this)}}})},4390:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.ZP.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},3037:function(t,e,n){"use strict";n.d(e,{d:function(){return s}});var i=n(4712);function s(t,e,n){return(0,i.f)(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}s("itemGroup")},401:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var i=n(144),s=n(7394),r=n(6750),o=n(6878),a=n(4263),l=n(3457),c=n(6669),u=n(5352),h=n(7678);const d=(0,h.Z)(o.Z,(0,a.d)(["absolute","fixed","top","bottom"]),l.Z,c.Z);var p=d.extend({name:"v-progress-linear",directives:{intersect:r.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,u.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,u.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:(0,u.kb)(this.normalizedValue,"%"),width:(0,u.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?s.Z5:s.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,u.kb)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=(0,u.z9)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,n){this.isVisible=n},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,u.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),f=p,m=i.ZP.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(f,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},8846:function(t,e,n){"use strict";var i=n(5352),s=n(144);e["Z"]=s.ZP.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,i.kb)(this.height),n=(0,i.kb)(this.minHeight),s=(0,i.kb)(this.minWidth),r=(0,i.kb)(this.maxHeight),o=(0,i.kb)(this.maxWidth),a=(0,i.kb)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),s&&(t.minWidth=s),r&&(t.maxHeight=r),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},7388:function(t,e,n){"use strict";var i=n(4101),s=n(144);e["Z"]=s.ZP.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:t=>!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}},computed:{isMobile(){const{mobile:t,width:e,name:n,mobileBreakpoint:i}=this.$vuetify.breakpoint;if(i===this.mobileBreakpoint)return t;const s=parseInt(this.mobileBreakpoint,10),r=!isNaN(s);return r?e<s:n===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&(0,i.Rn)("mobile-break-point","mobile-breakpoint",this)}})},9351:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});n(7658);var i=n(6878),s=n(6669),r=n(1444),o=n(7678),a=(0,o.Z)(i.Z,s.Z,r.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),l=a,c=n(5352),u=n(144),h=u.ZP.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new l({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,c.KK)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(t=!0){this.overlay&&((0,c.qh)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[c.Do.up,c.Do.pageup],n=[c.Do.down,c.Do.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!n.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const n=e.shiftKey||e.deltaX?"x":"y",i="y"===n?e.deltaY:e.deltaX||e.deltaY;let s,r;"y"===n?(s=0===t.scrollTop,r=t.scrollTop+t.clientHeight===t.scrollHeight):(s=0===t.scrollLeft,r=t.scrollLeft+t.clientWidth===t.scrollWidth);const o=i<0,a=i>0;return!(s||!o)||(!(r||!a)||!(!s&&!r)&&this.shouldScroll(t.parentNode,e))},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=(0,c.iZ)(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,n=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(n,e))||!this.shouldScroll(e,t)}for(let n=0;n<e.length;n++){const i=e[n];if(i===document)return!0;if(i===document.documentElement)return!0;if(i===this.$refs.content)return!0;if(this.hasScrollbar(i))return!this.shouldScroll(i,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,c.lj)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},4263:function(t,e,n){"use strict";n.d(e,{d:function(){return o}});var i=n(144),s=n(5352);const r={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(t=[]){return i.ZP.extend({name:"positionable",props:t.length?(0,s.ji)(r,t):r})}e["Z"]=o()},3457:function(t,e,n){"use strict";var i=n(144);function s(t="value",e="change"){return i.ZP.extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const r=s();e["Z"]=r},4712:function(t,e,n){"use strict";n.d(e,{J:function(){return a},f:function(){return o}});var i=n(144),s=n(4101);function r(t,e){return()=>(0,s.Kd)(`The ${t} component must be used inside a ${e}`)}function o(t,e,n){const s=e&&n?{register:r(e,n),unregister:r(e,n)}:null;return i.ZP.extend({name:"registrable-inject",inject:{[t]:{default:s}}})}function a(t,e=!1){return i.ZP.extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}},6401:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.ZP.extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout((()=>{this.isActive=!1}))}}})},2637:function(t,e,n){"use strict";n(7658);var i=n(144);e["Z"]=i.ZP.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const n=e.split(" ");for(const e of n)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},8860:function(t,e,n){"use strict";var i=n(144),s=n(7069),r=n(5352);e["Z"]=i.ZP.extend({name:"routable",directives:{Ripple:s.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!==(t=this.ripple)&&void 0!==t?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const n={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let i=this.activeClass,s=this.exactActiveClass||i;this.proxyClass&&(i=`${i} ${this.proxyClass}`.trim(),s=`${s} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(n.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:i,exactActiveClass:s,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(n.attrs.href=this.href);return this.target&&(n.attrs.target=this.target),{tag:t,data:n}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,n="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,r.vO)(this.$refs.link,n)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},4338:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.ZP.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},8472:function(t,e,n){"use strict";n(7658);var i=n(144),s=n(5352);e["Z"]=i.ZP.extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if("undefined"===typeof window)return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:(0,s.KK)(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,n=[this.stackMinZIndex,(0,s.KK)(e)],i=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let r=0;r<i.length;r++)t.includes(i[r])||n.push((0,s.KK)(i[r]));return Math.max(...n)}}})},6669:function(t,e,n){"use strict";n.d(e,{X:function(){return r}});var i=n(144);const s=i.ZP.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function r(t){const e={...t.props,...t.injections},n=s.options.computed.isDark.call(e);return s.options.computed.themeClasses.call({isDark:n})}e["Z"]=s},1444:function(t,e,n){"use strict";n.d(e,{d:function(){return s}});var i=n(144);function s(t="value",e="input"){return i.ZP.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(n){!!n!==this[t]&&this.$emit(e,n)}}})}const r=s();e["Z"]=r},5776:function(t,e,n){"use strict";n(7658);var i=n(6878),s=n(6669),r=n(4712),o=n(5352),a=n(4101),l=n(7678);const c=(0,l.Z)(i.Z,(0,r.f)("form"),s.Z);e["Z"]=c.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled(){return this.disabled||!!this.form&&this.form.disabled},isInteractive(){return!this.isDisabled&&!this.isReadonly},isReadonly(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(t,e){(0,o.vZ)(t,e)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout((()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()}),0)},hasError(t){this.shouldValidate&&this.$emit("update:error",t)},value(t){this.lazyValue=t}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(t){return t?Array.isArray(t)?t:[t]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation(){this.isResetting=!0},validate(t=!1,e){const n=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const t=this.rules[i],s="function"===typeof t?t(e):t;!1===s||"string"===typeof s?n.push(s||""):"boolean"!==typeof s&&(0,a.N6)(`Rules should return a string or boolean, received '${typeof s}' instead`,this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}})},6421:function(t,e,n){"use strict";n.d(e,{A:function(){return I},Z:function(){return k}});var i={};n.r(i),n.d(i,{easeInCubic:function(){return c},easeInOutCubic:function(){return h},easeInOutQuad:function(){return l},easeInOutQuart:function(){return f},easeInOutQuint:function(){return v},easeInQuad:function(){return o},easeInQuart:function(){return d},easeInQuint:function(){return m},easeOutCubic:function(){return u},easeOutQuad:function(){return a},easeOutQuart:function(){return p},easeOutQuint:function(){return g},linear:function(){return r}});var s=n(9989);const r=t=>t,o=t=>t**2,a=t=>t*(2-t),l=t=>t<.5?2*t**2:(4-2*t)*t-1,c=t=>t**3,u=t=>--t**3+1,h=t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,d=t=>t**4,p=t=>1- --t**4,f=t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,m=t=>t**5,g=t=>1+--t**5,v=t=>t<.5?16*t**5:1+16*--t**5;function y(t){if("number"===typeof t)return t;let e=_(t);if(!e)throw"string"===typeof t?new Error(`Target element "${t}" not found.`):new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${w(t)} instead.`);let n=0;while(e)n+=e.offsetTop,e=e.offsetParent;return n}function b(t){const e=_(t);if(e)return e;throw"string"===typeof t?new Error(`Container element "${t}" not found.`):new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${w(t)} instead.`)}function w(t){return null==t?t:t.constructor.name}function _(t){return"string"===typeof t?document.querySelector(t):t&&t._isVue?t.$el:t instanceof HTMLElement?t:null}function k(t,e={}){const n={container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0,...e},s=b(n.container);if(n.appOffset&&k.framework.application){const t=s.classList.contains("v-navigation-drawer"),e=s.classList.contains("v-navigation-drawer--clipped"),{bar:i,top:r}=k.framework.application;n.offset+=i,t&&!e||(n.offset+=r)}const r=performance.now();let o;o="number"===typeof t?y(t)-n.offset:y(t)-y(s)-n.offset;const a=s.scrollTop;if(o===a)return Promise.resolve(o);const l="function"===typeof n.easing?n.easing:i[n.easing];if(!l)throw new TypeError(`Easing function "${n.easing}" not found.`);return new Promise((t=>requestAnimationFrame((function e(i){const c=i-r,u=Math.abs(n.duration?Math.min(c/n.duration,1):1);s.scrollTop=Math.floor(a+(o-a)*l(u));const h=s===document.body?document.documentElement.clientHeight:s.clientHeight,d=h+s.scrollTop>=s.scrollHeight;if(1===u||o>s.scrollTop&&d)return t(o);requestAnimationFrame(e)}))))}k.framework={},k.init=()=>{};class I extends s.t{constructor(){return super(),k}}I.property="goTo"},9989:function(t,e,n){"use strict";n.d(e,{t:function(){return i}});class i{constructor(){this.framework={}}init(t,e){}}},937:function(t,e,n){"use strict";n.d(e,{I4:function(){return o},NA:function(){return s},hq:function(){return a},jx:function(){return r}});var i=n(4101);function s(t){return!!t&&!!t.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function r(t){let e;if("number"===typeof t)e=t;else{if("string"!==typeof t)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==t?t:t.constructor.name} instead`);{let n="#"===t[0]?t.substring(1):t;3===n.length&&(n=n.split("").map((t=>t+t)).join("")),6!==n.length&&(0,i.Kd)(`'${t}' is not a valid rgb color`),e=parseInt(n,16)}}return e<0?((0,i.Kd)(`Colors cannot be negative: '${t}'`),e=0):(e>16777215||isNaN(e))&&((0,i.Kd)(`'${t}' is not a valid rgb color`),e=16777215),e}function o(t){let e=t.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function a(t){return o(r(t))}},4101:function(t,e,n){"use strict";n.d(e,{Jk:function(){return c},Kd:function(){return r},N6:function(){return o},Rn:function(){return a},fK:function(){return l}});n(7658);var i=n(1705);function s(t,e,n){if(!i.Z.config.silent){if(n&&(e={_isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?p(e):"")}}function r(t,e,n){const i=s(t,e,n);null!=i&&console.warn(i)}function o(t,e,n){const i=s(t,e,n);null!=i&&console.error(i)}function a(t,e,n,i){r(`[UPGRADE] '${t}' is deprecated, use '${e}' instead.`,n,i)}function l(t,e,n,i){o(`[BREAKING] '${t}' has been removed, use '${e}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,n,i)}function c(t,e,n){r(`[REMOVED] '${t}' has been removed. You can safely omit it.`,e,n)}const u=/(?:^|[-_])(\w)/g,h=t=>t.replace(u,(t=>t.toUpperCase())).replace(/[-_]/g,"");function d(t,e){if(t.$root===t)return"<Root>";const n="function"===typeof t&&null!=t.cid?t.options:t._isVue?t.$options||t.constructor.options:t||{};let i=n.name||n._componentTag;const s=n.__file;if(!i&&s){const t=s.match(/([^/\\]+)\.vue$/);i=t&&t[1]}return(i?`<${h(i)}>`:"<Anonymous>")+(s&&!1!==e?` at ${s}`:"")}function p(t){if(t._isVue&&t.$parent){const e=[];let n=0;while(t){if(e.length>0){const i=e[e.length-1];if(i.constructor===t.constructor){n++,t=t.$parent;continue}n>0&&(e[e.length-1]=[i,n],n=0)}e.push(t),t=t.$parent}return"\n\nfound in\n\n"+e.map(((t,e)=>`${0===e?"---\x3e ":" ".repeat(5+2*e)}${Array.isArray(t)?`${d(t[0])}... (${t[1]} recursive calls)`:d(t)}`)).join("\n")}return`\n\n(found in ${d(t)})`}},8856:function(t,e,n){"use strict";function i(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}n.d(e,{e:function(){return i}})},5352:function(t,e,n){"use strict";n.d(e,{$x:function(){return L},Do:function(){return y},Ee:function(){return R},FT:function(){return O},GL:function(){return g},Ji:function(){return s},KK:function(){return p},KT:function(){return E},MT:function(){return d},P2:function(){return A},RB:function(){return b},TI:function(){return C},XP:function(){return w},_A:function(){return k},f9:function(){return x},iZ:function(){return M},jC:function(){return I},ji:function(){return f},kb:function(){return m},kg:function(){return N},lj:function(){return a},qF:function(){return h},qh:function(){return r},qw:function(){return l},sD:function(){return S},sp:function(){return $},uZ:function(){return D},vO:function(){return u},vZ:function(){return c},xl:function(){return T},z9:function(){return P}});n(7658);var i=n(144);function s(t,e="div",n){return i.ZP.extend({name:n||t.replace(/__/g,"-"),functional:!0,props:{tag:{type:String,default:e}},render(e,{data:n,props:i,children:s}){return n.staticClass=`${t} ${n.staticClass||""}`.trim(),e(i.tag,n,s)}})}function r(t,e,n,i=!1){const s=r=>{n(r),t.removeEventListener(e,s,i)};t.addEventListener(e,s,i)}let o=!1;try{if("undefined"!==typeof window){const t=Object.defineProperty({},"passive",{get:()=>{o=!0}});window.addEventListener("testListener",t,t),window.removeEventListener("testListener",t,t)}}catch(B){console.warn(B)}function a(t,e,n,i){t.addEventListener(e,n,!!o&&i)}function l(t,e,n){const i=e.length-1;if(i<0)return void 0===t?n:t;for(let s=0;s<i;s++){if(null==t)return n;t=t[e[s]]}return null==t||void 0===t[e[i]]?n:t[e[i]]}function c(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime())return!1;if(t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length===Object.keys(e).length&&n.every((n=>c(t[n],e[n])))}function u(t,e,n){return null!=t&&e&&"string"===typeof e?void 0!==t[e]?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),l(t,e.split("."),n)):n}function h(t,e,n){if(null==e)return void 0===t?n:t;if(t!==Object(t))return void 0===n?t:n;if("string"===typeof e)return u(t,e,n);if(Array.isArray(e))return l(t,e,n);if("function"!==typeof e)return n;const i=e(t,n);return"undefined"===typeof i?n:i}function d(t){return Array.from({length:t},((t,e)=>e))}function p(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return 0;const e=+window.getComputedStyle(t).getPropertyValue("z-index");return e||p(t.parentNode)}function f(t,e){const n={};for(let i=0;i<e.length;i++){const s=e[i];"undefined"!==typeof t[s]&&(n[s]=t[s])}return n}function m(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}function g(t){return(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function v(t){return null!==t&&"object"===typeof t}const y=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function b(t,e){const n=t.$vuetify.icons.component;if(e.startsWith("$")){const n=`$vuetify.icons.values.${e.split("$").pop().split(".").pop()}`,i=u(t,n,e);if("string"!==typeof i)return i;e=i}return null==n?e:{component:n,props:{icon:e}}}function w(t){return Object.keys(t)}const _=/-(\w)/g,k=t=>t.replace(_,((t,e)=>e?e.toUpperCase():""));function I(t){return t.charAt(0).toUpperCase()+t.slice(1)}function S(t,e,n){const i=e[0],s=[];let r;for(let o=0;o<t.length;o++){const e=t[o],n=u(e,i,null);r!==n&&(r=n,s.push({name:null!==n&&void 0!==n?n:"",items:[]})),s[s.length-1].items.push(e)}return s}function C(t){return null!=t?Array.isArray(t)?t:[t]:[]}function T(t,e,n,i,s){if(null===e||!e.length)return t;const r=new Intl.Collator(i,{sensitivity:"accent",usage:"sort"});return t.sort(((t,i)=>{for(let o=0;o<e.length;o++){const a=e[o];let l=u(t,a),c=u(i,a);if(n[o]&&([l,c]=[c,l]),s&&s[a]){const t=s[a](l,c);if(!t)continue;return t}if(null!==l||null!==c){if(l instanceof Date&&c instanceof Date)return l.getTime()-c.getTime();if([l,c]=[l,c].map((t=>(t||"").toString().toLocaleLowerCase())),l!==c)return isNaN(l)||isNaN(c)?r.compare(l,c):Number(l)-Number(c)}}return 0}))}function x(t,e,n){return null!=t&&null!=e&&"boolean"!==typeof t&&-1!==t.toString().toLocaleLowerCase().indexOf(e.toLocaleLowerCase())}function E(t,e){return e?(e=e.toString().toLowerCase(),""===e.trim()?t:t.filter((t=>Object.keys(t).some((n=>x(u(t,n),e,t)))))):t}function $(t,e,n){return t.$slots.hasOwnProperty(e)&&t.$scopedSlots.hasOwnProperty(e)&&t.$scopedSlots[e].name?n?"v-slot":"scoped":t.$slots.hasOwnProperty(e)?"normal":t.$scopedSlots.hasOwnProperty(e)?"scoped":void 0}function A(t,e){let n=!1;return(...i)=>{if(!n)return n=!0,setTimeout((()=>n=!1),e),t(...i)}}function O(t,e){return Object.keys(e).filter((e=>e.startsWith(t))).reduce(((n,i)=>(n[i.replace(t,"")]=e[i],n)),{})}function P(t,e="default",n,i=!1){return t.$scopedSlots.hasOwnProperty(e)?t.$scopedSlots[e](n instanceof Function?n():n):!t.$slots.hasOwnProperty(e)||n&&!i?void 0:t.$slots[e]}function D(t,e=0,n=1){return Math.max(e,Math.min(n,t))}function L(t){return t?Object.keys(t).reduce(((e,n)=>(e[k(n)]=t[n],e)),{}):{}}function R(t={},e={}){for(const n in e){const i=t[n],s=e[n];v(i)&&v(s)?t[n]=R(i,s):t[n]=s}return t}function N(t,e){return Array(t).fill(e)}function M(t){if(t.composedPath)return t.composedPath();const e=[];let n=t.target;while(n){if(e.push(n),"HTML"===n.tagName)return e.push(document),e.push(window),e;n=n.parentElement}return e}},1767:function(t,e,n){"use strict";n.d(e,{ZP:function(){return o},bp:function(){return c},ze:function(){return l}});var i=n(5352);const s={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function r(t){const e={};for(const n of t.split(s.styleList)){let[t,r]=n.split(s.styleProp);t=t.trim(),t&&("string"===typeof r&&(r=r.trim()),e[(0,i._A)(t)]=r)}return e}function o(){const t={};let e,n=arguments.length;while(n--)for(e of Object.keys(arguments[n]))switch(e){case"class":case"directives":arguments[n][e]&&(t[e]=l(t[e],arguments[n][e]));break;case"style":arguments[n][e]&&(t[e]=a(t[e],arguments[n][e]));break;case"staticClass":if(!arguments[n][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[n][e].trim();break;case"on":case"nativeOn":arguments[n][e]&&(t[e]=c(t[e],arguments[n][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][e])break;t[e]||(t[e]={}),t[e]={...arguments[n][e],...t[e]};break;default:t[e]||(t[e]=arguments[n][e])}return t}function a(t,e){return t?e?(t=(0,i.TI)("string"===typeof t?r(t):t),t.concat("string"===typeof e?r(e):e)):t:e}function l(t,e){return e?t&&t?(0,i.TI)(t).concat(e):e:t}function c(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let n=2;n--;){const i=t[n];for(const t in i)i[t]&&(e[t]?e[t]=[].concat(i[t],e[t]):e[t]=i[t])}return e}},7678:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var i=n(144);function s(...t){return i.ZP.extend({mixins:t})}},8345:function(t,e,n){"use strict";function i(t,e){for(var n in e)t[n]=e[n];return t}n.d(e,{ZP:function(){return ke}});var s=/[!'()*]/g,r=function(t){return"%"+t.charCodeAt(0).toString(16)},o=/%2C/g,a=function(t){return encodeURIComponent(t).replace(s,r).replace(o,",")};function l(t){try{return decodeURIComponent(t)}catch(e){0}return t}function c(t,e,n){void 0===e&&(e={});var i,s=n||h;try{i=s(t||"")}catch(a){i={}}for(var r in e){var o=e[r];i[r]=Array.isArray(o)?o.map(u):u(o)}return i}var u=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),i=l(n.shift()),s=n.length>0?l(n.join("=")):null;void 0===e[i]?e[i]=s:Array.isArray(e[i])?e[i].push(s):e[i]=[e[i],s]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var i=[];return n.forEach((function(t){void 0!==t&&(null===t?i.push(a(e)):i.push(a(e)+"="+a(t)))})),i.join("&")}return a(e)+"="+a(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var p=/\/?$/;function f(t,e,n,i){var s=i&&i.options.stringifyQuery,r=e.query||{};try{r=m(r)}catch(a){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:r,params:e.params||{},fullPath:y(e,s),matched:t?v(t):[]};return n&&(o.redirectedFrom=y(n,s)),Object.freeze(o)}function m(t){if(Array.isArray(t))return t.map(m);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=m(t[n]);return e}return t}var g=f(null,{path:"/"});function v(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,i=t.query;void 0===i&&(i={});var s=t.hash;void 0===s&&(s="");var r=e||d;return(n||"/")+r(i)+s}function b(t,e,n){return e===g?t===e:!!e&&(t.path&&e.path?t.path.replace(p,"")===e.path.replace(p,"")&&(n||t.hash===e.hash&&w(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&w(t.query,e.query)&&w(t.params,e.params))))}function w(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),i=Object.keys(e).sort();return n.length===i.length&&n.every((function(n,s){var r=t[n],o=i[s];if(o!==n)return!1;var a=e[n];return null==r||null==a?r===a:"object"===typeof r&&"object"===typeof a?w(r,a):String(r)===String(a)}))}function _(t,e){return 0===t.path.replace(p,"/").indexOf(e.path.replace(p,"/"))&&(!e.hash||t.hash===e.hash)&&k(t.query,e.query)}function k(t,e){for(var n in e)if(!(n in t))return!1;return!0}function I(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var i in n.instances){var s=n.instances[i],r=n.enteredCbs[i];if(s&&r){delete n.enteredCbs[i];for(var o=0;o<r.length;o++)s._isBeingDestroyed||r[o](s)}}}}var S={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,s=e.children,r=e.parent,o=e.data;o.routerView=!0;var a=r.$createElement,l=n.name,c=r.$route,u=r._routerViewCache||(r._routerViewCache={}),h=0,d=!1;while(r&&r._routerRoot!==r){var p=r.$vnode?r.$vnode.data:{};p.routerView&&h++,p.keepAlive&&r._directInactive&&r._inactive&&(d=!0),r=r.$parent}if(o.routerViewDepth=h,d){var f=u[l],m=f&&f.component;return m?(f.configProps&&C(m,o,f.route,f.configProps),a(m,o,s)):a()}var g=c.matched[h],v=g&&g.components[l];if(!g||!v)return u[l]=null,a();u[l]={component:v},o.registerRouteInstance=function(t,e){var n=g.instances[l];(e&&n!==t||!e&&n===t)&&(g.instances[l]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){g.instances[l]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==g.instances[l]&&(g.instances[l]=t.componentInstance),I(c)};var y=g.props&&g.props[l];return y&&(i(u[l],{route:c,configProps:y}),C(v,o,c,y)),a(v,o,s)}};function C(t,e,n,s){var r=e.props=T(n,s);if(r){r=e.props=i({},r);var o=e.attrs=e.attrs||{};for(var a in r)t.props&&a in t.props||(o[a]=r[a],delete r[a])}}function T(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function x(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var s=e.split("/");n&&s[s.length-1]||s.pop();for(var r=t.replace(/^\//,"").split("/"),o=0;o<r.length;o++){var a=r[o];".."===a?s.pop():"."!==a&&s.push(a)}return""!==s[0]&&s.unshift(""),s.join("/")}function E(t){var e="",n="",i=t.indexOf("#");i>=0&&(e=t.slice(i),t=t.slice(0,i));var s=t.indexOf("?");return s>=0&&(n=t.slice(s+1),t=t.slice(0,s)),{path:t,query:n,hash:e}}function $(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var A=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},O=G,P=M,D=B,L=j,R=Y,N=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(t,e){var n,i=[],s=0,r=0,o="",a=e&&e.delimiter||"/";while(null!=(n=N.exec(t))){var l=n[0],c=n[1],u=n.index;if(o+=t.slice(r,u),r=u+l.length,c)o+=c[1];else{var h=t[r],d=n[2],p=n[3],f=n[4],m=n[5],g=n[6],v=n[7];o&&(i.push(o),o="");var y=null!=d&&null!=h&&h!==d,b="+"===g||"*"===g,w="?"===g||"*"===g,_=n[2]||a,k=f||m;i.push({name:p||s++,prefix:d||"",delimiter:_,optional:w,repeat:b,partial:y,asterisk:!!v,pattern:k?U(k):v?".*":"[^"+Z(_)+"]+?"})}}return r<t.length&&(o+=t.substr(r)),o&&i.push(o),i}function B(t,e){return j(M(t,e),e)}function V(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function F(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function j(t,e){for(var n=new Array(t.length),i=0;i<t.length;i++)"object"===typeof t[i]&&(n[i]=new RegExp("^(?:"+t[i].pattern+")$",H(e)));return function(e,i){for(var s="",r=e||{},o=i||{},a=o.pretty?V:encodeURIComponent,l=0;l<t.length;l++){var c=t[l];if("string"!==typeof c){var u,h=r[c.name];if(null==h){if(c.optional){c.partial&&(s+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(A(h)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(u=a(h[d]),!n[l].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(u)+"`");s+=(0===d?c.prefix:c.delimiter)+u}}else{if(u=c.asterisk?F(h):a(h),!n[l].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+u+'"');s+=c.prefix+u}}else s+=c}return s}}function Z(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function U(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function z(t,e){return t.keys=e,t}function H(t){return t&&t.sensitive?"":"i"}function W(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(t,e)}function q(t,e,n){for(var i=[],s=0;s<t.length;s++)i.push(G(t[s],e,n).source);var r=new RegExp("(?:"+i.join("|")+")",H(n));return z(r,e)}function K(t,e,n){return Y(M(t,n),e,n)}function Y(t,e,n){A(e)||(n=e||n,e=[]),n=n||{};for(var i=n.strict,s=!1!==n.end,r="",o=0;o<t.length;o++){var a=t[o];if("string"===typeof a)r+=Z(a);else{var l=Z(a.prefix),c="(?:"+a.pattern+")";e.push(a),a.repeat&&(c+="(?:"+l+c+")*"),c=a.optional?a.partial?l+"("+c+")?":"(?:"+l+"("+c+"))?":l+"("+c+")",r+=c}}var u=Z(n.delimiter||"/"),h=r.slice(-u.length)===u;return i||(r=(h?r.slice(0,-u.length):r)+"(?:"+u+"(?=$))?"),r+=s?"$":i&&h?"":"(?="+u+"|$)",z(new RegExp("^"+r,H(n)),e)}function G(t,e,n){return A(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?W(t,e):A(t)?q(t,e,n):K(t,e,n)}O.parse=P,O.compile=D,O.tokensToFunction=L,O.tokensToRegExp=R;var X=Object.create(null);function J(t,e,n){e=e||{};try{var i=X[t]||(X[t]=O.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),i(e,{pretty:!0})}catch(s){return""}finally{delete e[0]}}function Q(t,e,n,s){var r="string"===typeof t?{path:t}:t;if(r._normalized)return r;if(r.name){r=i({},t);var o=r.params;return o&&"object"===typeof o&&(r.params=i({},o)),r}if(!r.path&&r.params&&e){r=i({},r),r._normalized=!0;var a=i(i({},e.params),r.params);if(e.name)r.name=e.name,r.params=a;else if(e.matched.length){var l=e.matched[e.matched.length-1].path;r.path=J(l,a,"path "+e.path)}else 0;return r}var u=E(r.path||""),h=e&&e.path||"/",d=u.path?x(u.path,h,n||r.append):h,p=c(u.query,r.query,s&&s.options.parseQuery),f=r.hash||u.hash;return f&&"#"!==f.charAt(0)&&(f="#"+f),{_normalized:!0,path:d,query:p,hash:f}}var tt,et=[String,Object],nt=[String,Array],it=function(){},st={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,s=this.$route,r=n.resolve(this.to,s,this.append),o=r.location,a=r.route,l=r.href,c={},u=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==u?"router-link-active":u,p=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?p:this.exactActiveClass,v=a.redirectedFrom?f(null,Q(a.redirectedFrom),null,n):a;c[g]=b(s,v,this.exactPath),c[m]=this.exact||this.exactPath?c[g]:_(s,v);var y=c[g]?this.ariaCurrentValue:null,w=function(t){rt(t)&&(e.replace?n.replace(o,it):n.push(o,it))},k={click:rt};Array.isArray(this.event)?this.event.forEach((function(t){k[t]=w})):k[this.event]=w;var I={class:c},S=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:l,route:a,navigate:w,isActive:c[m],isExactActive:c[g]});if(S){if(1===S.length)return S[0];if(S.length>1||!S.length)return 0===S.length?t():t("span",{},S)}if("a"===this.tag)I.on=k,I.attrs={href:l,"aria-current":y};else{var C=ot(this.$slots.default);if(C){C.isStatic=!1;var T=C.data=i({},C.data);for(var x in T.on=T.on||{},T.on){var E=T.on[x];x in k&&(T.on[x]=Array.isArray(E)?E:[E])}for(var $ in k)$ in T.on?T.on[$].push(k[$]):T.on[$]=w;var A=C.data.attrs=i({},C.data.attrs);A.href=l,A["aria-current"]=y}else I.on=k}return t(this.tag,I,this.$slots.default)}};function rt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ot(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=ot(e.children)))return e}}function at(t){if(!at.installed||tt!==t){at.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var i=t.$options._parentVnode;e(i)&&e(i=i.data)&&e(i=i.registerRouteInstance)&&i(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",S),t.component("RouterLink",st);var i=t.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}}var lt="undefined"!==typeof window;function ct(t,e,n,i,s){var r=e||[],o=n||Object.create(null),a=i||Object.create(null);t.forEach((function(t){ut(r,o,a,t,s)}));for(var l=0,c=r.length;l<c;l++)"*"===r[l]&&(r.push(r.splice(l,1)[0]),c--,l--);return{pathList:r,pathMap:o,nameMap:a}}function ut(t,e,n,i,s,r){var o=i.path,a=i.name;var l=i.pathToRegexpOptions||{},c=dt(o,s,l.strict);"boolean"===typeof i.caseSensitive&&(l.sensitive=i.caseSensitive);var u={path:c,regex:ht(c,l),components:i.components||{default:i.component},alias:i.alias?"string"===typeof i.alias?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:a,parent:s,matchAs:r,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};if(i.children&&i.children.forEach((function(i){var s=r?$(r+"/"+i.path):void 0;ut(t,e,n,i,u,s)})),e[u.path]||(t.push(u.path),e[u.path]=u),void 0!==i.alias)for(var h=Array.isArray(i.alias)?i.alias:[i.alias],d=0;d<h.length;++d){var p=h[d];0;var f={path:p,children:i.children};ut(t,e,n,f,s,u.path||"/")}a&&(n[a]||(n[a]=u))}function ht(t,e){var n=O(t,[],e);return n}function dt(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:$(e.path+"/"+t)}function pt(t,e){var n=ct(t),i=n.pathList,s=n.pathMap,r=n.nameMap;function o(t){ct(t,i,s,r)}function a(t,e){var n="object"!==typeof t?r[t]:void 0;ct([e||t],i,s,r,n),n&&n.alias.length&&ct(n.alias.map((function(t){return{path:t,children:[e]}})),i,s,r,n)}function l(){return i.map((function(t){return s[t]}))}function c(t,n,o){var a=Q(t,n,!1,e),l=a.name;if(l){var c=r[l];if(!c)return d(null,a);var u=c.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&u.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=J(c.path,a.params,'named route "'+l+'"'),d(c,a,o)}if(a.path){a.params={};for(var p=0;p<i.length;p++){var f=i[p],m=s[f];if(ft(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function u(t,n){var i=t.redirect,s="function"===typeof i?i(f(t,n,null,e)):i;if("string"===typeof s&&(s={path:s}),!s||"object"!==typeof s)return d(null,n);var o=s,a=o.name,l=o.path,u=n.query,h=n.hash,p=n.params;if(u=o.hasOwnProperty("query")?o.query:u,h=o.hasOwnProperty("hash")?o.hash:h,p=o.hasOwnProperty("params")?o.params:p,a){r[a];return c({_normalized:!0,name:a,query:u,hash:h,params:p},void 0,n)}if(l){var m=mt(l,t),g=J(m,p,'redirect route with path "'+m+'"');return c({_normalized:!0,path:g,query:u,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var i=J(n,e.params,'aliased route with path "'+n+'"'),s=c({_normalized:!0,path:i});if(s){var r=s.matched,o=r[r.length-1];return e.params=s.params,d(o,e)}return d(null,e)}function d(t,n,i){return t&&t.redirect?u(t,i||n):t&&t.matchAs?h(t,n,t.matchAs):f(t,n,i,e)}return{match:c,addRoute:a,getRoutes:l,addRoutes:o}}function ft(t,e,n){var i=e.match(t);if(!i)return!1;if(!n)return!0;for(var s=1,r=i.length;s<r;++s){var o=t.keys[s-1];o&&(n[o.name||"pathMatch"]="string"===typeof i[s]?l(i[s]):i[s])}return!0}function mt(t,e){return x(t,e.parent?e.parent.path:"/",!0)}var gt=lt&&window.performance&&window.performance.now?window.performance:Date;function vt(){return gt.now().toFixed(3)}var yt=vt();function bt(){return yt}function wt(t){return yt=t}var _t=Object.create(null);function kt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=i({},window.history.state);return n.key=bt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",Ct),function(){window.removeEventListener("popstate",Ct)}}function It(t,e,n,i){if(t.app){var s=t.options.scrollBehavior;s&&t.app.$nextTick((function(){var r=Tt(),o=s.call(t,e,n,i?r:null);o&&("function"===typeof o.then?o.then((function(t){Dt(t,r)})).catch((function(t){0})):Dt(o,r))}))}}function St(){var t=bt();t&&(_t[t]={x:window.pageXOffset,y:window.pageYOffset})}function Ct(t){St(),t.state&&t.state.key&&wt(t.state.key)}function Tt(){var t=bt();if(t)return _t[t]}function xt(t,e){var n=document.documentElement,i=n.getBoundingClientRect(),s=t.getBoundingClientRect();return{x:s.left-i.left-e.x,y:s.top-i.top-e.y}}function Et(t){return Ot(t.x)||Ot(t.y)}function $t(t){return{x:Ot(t.x)?t.x:window.pageXOffset,y:Ot(t.y)?t.y:window.pageYOffset}}function At(t){return{x:Ot(t.x)?t.x:0,y:Ot(t.y)?t.y:0}}function Ot(t){return"number"===typeof t}var Pt=/^#\d/;function Dt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var i=Pt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(i){var s=t.offset&&"object"===typeof t.offset?t.offset:{};s=At(s),e=xt(i,s)}else Et(t)&&(e=$t(t))}else n&&Et(t)&&(e=$t(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Lt=lt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Rt(t,e){St();var n=window.history;try{if(e){var s=i({},n.state);s.key=bt(),n.replaceState(s,"",t)}else n.pushState({key:wt(vt())},"",t)}catch(r){window.location[e?"replace":"assign"](t)}}function Nt(t){Rt(t,!0)}var Mt={redirected:2,aborted:4,cancelled:8,duplicated:16};function Bt(t,e){return Zt(t,e,Mt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+zt(e)+'" via a navigation guard.')}function Vt(t,e){var n=Zt(t,e,Mt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Ft(t,e){return Zt(t,e,Mt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function jt(t,e){return Zt(t,e,Mt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Zt(t,e,n,i){var s=new Error(i);return s._isRouter=!0,s.from=t,s.to=e,s.type=n,s}var Ut=["params","query","hash"];function zt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Ut.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Ht(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Wt(t,e){return Ht(t)&&t._isRouter&&(null==e||t.type===e)}function qt(t,e,n){var i=function(s){s>=t.length?n():t[s]?e(t[s],(function(){i(s+1)})):i(s+1)};i(0)}function Kt(t){return function(e,n,i){var s=!1,r=0,o=null;Yt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){s=!0,r++;var l,c=Qt((function(e){Jt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[a]=e,r--,r<=0&&i()})),u=Qt((function(t){var e="Failed to resolve async component "+a+": "+t;o||(o=Ht(t)?t:new Error(e),i(o))}));try{l=t(c,u)}catch(d){u(d)}if(l)if("function"===typeof l.then)l.then(c,u);else{var h=l.component;h&&"function"===typeof h.then&&h.then(c,u)}}})),s||i()}}function Yt(t,e){return Gt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Gt(t){return Array.prototype.concat.apply([],t)}var Xt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Jt(t){return t.__esModule||Xt&&"Module"===t[Symbol.toStringTag]}function Qt(t){var e=!1;return function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(lt){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,i=Math.max(t.length,e.length);for(n=0;n<i;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ie(t,e,n,i){var s=Yt(t,(function(t,i,s,r){var o=se(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,i,s,r)})):n(o,i,s,r)}));return Gt(i?s.reverse():s)}function se(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function re(t){return ie(t,"beforeRouteLeave",ae,!0)}function oe(t){return ie(t,"beforeRouteUpdate",ae)}function ae(t,e){if(e)return function(){return t.apply(e,arguments)}}function le(t){return ie(t,"beforeRouteEnter",(function(t,e,n,i){return ce(t,n,i)}))}function ce(t,e,n){return function(i,s,r){return t(i,s,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),r(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var i,s=this;try{i=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var r=this.current;this.confirmTransition(i,(function(){s.updateRoute(i),e&&e(i),s.ensureURL(),s.router.afterHooks.forEach((function(t){t&&t(i,r)})),s.ready||(s.ready=!0,s.readyCbs.forEach((function(t){t(i)})))}),(function(t){n&&n(t),t&&!s.ready&&(Wt(t,Mt.redirected)&&r===g||(s.ready=!0,s.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var i=this,s=this.current;this.pending=t;var r=function(t){!Wt(t)&&Ht(t)&&(i.errorCbs.length?i.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},o=t.matched.length-1,a=s.matched.length-1;if(b(t,s)&&o===a&&t.matched[o]===s.matched[a])return this.ensureURL(),t.hash&&It(this.router,s,t,!1),r(Vt(s,t));var l=ne(this.current.matched,t.matched),c=l.updated,u=l.deactivated,h=l.activated,d=[].concat(re(u),this.router.beforeHooks,oe(c),h.map((function(t){return t.beforeEnter})),Kt(h)),p=function(e,n){if(i.pending!==t)return r(Ft(s,t));try{e(t,s,(function(e){!1===e?(i.ensureURL(!0),r(jt(s,t))):Ht(e)?(i.ensureURL(!0),r(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(r(Bt(s,t)),"object"===typeof e&&e.replace?i.replace(e):i.push(e)):n(e)}))}catch(o){r(o)}};qt(d,p,(function(){var n=le(h),o=n.concat(i.router.resolveHooks);qt(o,p,(function(){if(i.pending!==t)return r(Ft(s,t));i.pending=null,e(t),i.router.app&&i.router.app.$nextTick((function(){I(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=g,this.pending=null};var ue=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,i=Lt&&n;i&&this.listeners.push(kt());var s=function(){var n=t.current,s=he(t.base);t.current===g&&s===t._startLocation||t.transitionTo(s,(function(t){i&&It(e,t,n,!0)}))};window.addEventListener("popstate",s),this.listeners.push((function(){window.removeEventListener("popstate",s)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var i=this,s=this,r=s.current;this.transitionTo(t,(function(t){Rt($(i.base+t.fullPath)),It(i.router,t,r,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this,s=this,r=s.current;this.transitionTo(t,(function(t){Nt($(i.base+t.fullPath)),It(i.router,t,r,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=$(this.base+this.current.fullPath);t?Rt(e):Nt(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),i=t.toLowerCase();return!t||n!==i&&0!==n.indexOf($(i+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var de=function(t){function e(e,n,i){t.call(this,e,n),i&&pe(this.base)||fe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,i=Lt&&n;i&&this.listeners.push(kt());var s=function(){var e=t.current;fe()&&t.transitionTo(me(),(function(n){i&&It(t.router,n,e,!0),Lt||ye(n.fullPath)}))},r=Lt?"popstate":"hashchange";window.addEventListener(r,s),this.listeners.push((function(){window.removeEventListener(r,s)}))}},e.prototype.push=function(t,e,n){var i=this,s=this,r=s.current;this.transitionTo(t,(function(t){ve(t.fullPath),It(i.router,t,r,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this,s=this,r=s.current;this.transitionTo(t,(function(t){ye(t.fullPath),It(i.router,t,r,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;me()!==e&&(t?ve(e):ye(e))},e.prototype.getCurrentLocation=function(){return me()},e}(te);function pe(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace($(t+"/#"+e)),!0}function fe(){var t=me();return"/"===t.charAt(0)||(ye("/"+t),!1)}function me(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ge(t){var e=window.location.href,n=e.indexOf("#"),i=n>=0?e.slice(0,n):e;return i+"#"+t}function ve(t){Lt?Rt(ge(t)):window.location.hash=t}function ye(t){Lt?Nt(ge(t)):window.location.replace(ge(t))}var be=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var i=this;this.transitionTo(t,(function(t){i.stack=i.stack.slice(0,i.index+1).concat(t),i.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this;this.transitionTo(t,(function(t){i.stack=i.stack.slice(0,i.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var i=this.stack[n];this.confirmTransition(i,(function(){var t=e.current;e.index=n,e.updateRoute(i),e.router.afterHooks.forEach((function(e){e&&e(i,t)}))}),(function(t){Wt(t,Mt.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),we=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=pt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Lt&&!1!==t.fallback,this.fallback&&(e="hash"),lt||(e="abstract"),this.mode=e,e){case"history":this.history=new ue(this,t.base);break;case"hash":this.history=new de(this,t.base,this.fallback);break;case"abstract":this.history=new be(this,t.base);break;default:0}},_e={currentRoute:{configurable:!0}};we.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},_e.currentRoute.get=function(){return this.history&&this.history.current},we.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof ue||n instanceof de){var i=function(t){var i=n.current,s=e.options.scrollBehavior,r=Lt&&s;r&&"fullPath"in t&&It(e,t,i,!1)},s=function(t){n.setupListeners(),i(t)};n.transitionTo(n.getCurrentLocation(),s,s)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},we.prototype.beforeEach=function(t){return Ie(this.beforeHooks,t)},we.prototype.beforeResolve=function(t){return Ie(this.resolveHooks,t)},we.prototype.afterEach=function(t){return Ie(this.afterHooks,t)},we.prototype.onReady=function(t,e){this.history.onReady(t,e)},we.prototype.onError=function(t){this.history.onError(t)},we.prototype.push=function(t,e,n){var i=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){i.history.push(t,e,n)}));this.history.push(t,e,n)},we.prototype.replace=function(t,e,n){var i=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){i.history.replace(t,e,n)}));this.history.replace(t,e,n)},we.prototype.go=function(t){this.history.go(t)},we.prototype.back=function(){this.go(-1)},we.prototype.forward=function(){this.go(1)},we.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},we.prototype.resolve=function(t,e,n){e=e||this.history.current;var i=Q(t,e,n,this),s=this.match(i,e),r=s.redirectedFrom||s.fullPath,o=this.history.base,a=Se(o,r,this.mode);return{location:i,route:s,href:a,normalizedTo:i,resolved:s}},we.prototype.getRoutes=function(){return this.matcher.getRoutes()},we.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},we.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(we.prototype,_e);var ke=we;function Ie(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Se(t,e,n){var i="hash"===n?"#"+e:e;return t?$(t+"/"+i):i}we.install=at,we.version="3.6.5",we.isNavigationFailure=Wt,we.NavigationFailureType=Mt,we.START_LOCATION=g,lt&&window.Vue&&window.Vue.use(we)},144:function(t,e,n){"use strict";n.d(e,{ZP:function(){return Gi}});
/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var i=Object.freeze({}),s=Array.isArray;function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function a(t){return!0===t}function l(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return"function"===typeof t}function h(t){return null!==t&&"object"===typeof t}var d=Object.prototype.toString;function p(t){return"[object Object]"===d.call(t)}function f(t){return"[object RegExp]"===d.call(t)}function m(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function g(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function v(t){return null==t?"":Array.isArray(t)||p(t)&&t.toString===d?JSON.stringify(t,null,2):String(t)}function y(t){var e=parseFloat(t);return isNaN(e)?t:e}function b(t,e){for(var n=Object.create(null),i=t.split(","),s=0;s<i.length;s++)n[i[s]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}b("slot,component",!0);var w=b("key,ref,slot,slot-scope,is");function _(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var i=t.indexOf(e);if(i>-1)return t.splice(i,1)}}var k=Object.prototype.hasOwnProperty;function I(t,e){return k.call(t,e)}function S(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var C=/-(\w)/g,T=S((function(t){return t.replace(C,(function(t,e){return e?e.toUpperCase():""}))})),x=S((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),E=/\B([A-Z])/g,$=S((function(t){return t.replace(E,"-$1").toLowerCase()}));function A(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function O(t,e){return t.bind(e)}var P=Function.prototype.bind?O:A;function D(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function L(t,e){for(var n in e)t[n]=e[n];return t}function R(t){for(var e={},n=0;n<t.length;n++)t[n]&&L(e,t[n]);return e}function N(t,e,n){}var M=function(t,e,n){return!1},B=function(t){return t};function V(t,e){if(t===e)return!0;var n=h(t),i=h(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var s=Array.isArray(t),r=Array.isArray(e);if(s&&r)return t.length===e.length&&t.every((function(t,n){return V(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(s||r)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return V(t[n],e[n])}))}catch(l){return!1}}function F(t,e){for(var n=0;n<t.length;n++)if(V(t[n],e))return n;return-1}function j(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function Z(t,e){return t===e?0===t&&1/t!==1/e:t===t||e===e}var U="data-server-rendered",z=["component","directive","filter"],H=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],W={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:M,isReservedAttr:M,isUnknownElement:M,getTagNamespace:N,parsePlatformTagName:B,mustUseProp:M,async:!0,_lifecycleHooks:H},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function K(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function Y(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var G=new RegExp("[^".concat(q.source,".$_\\d]"));function X(t){if(!G.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var J="__proto__"in{},Q="undefined"!==typeof window,tt=Q&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,it=tt&&tt.indexOf("edge/")>0;tt&&tt.indexOf("android");var st=tt&&/iphone|ipad|ipod|ios/.test(tt);tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt);var rt,ot=tt&&tt.match(/firefox\/(\d+)/),at={}.watch,lt=!1;if(Q)try{var ct={};Object.defineProperty(ct,"passive",{get:function(){lt=!0}}),window.addEventListener("test-passive",null,ct)}catch(Xo){}var ut=function(){return void 0===rt&&(rt=!Q&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),rt},ht=Q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function dt(t){return"function"===typeof t&&/native code/.test(t.toString())}var pt,ft="undefined"!==typeof Symbol&&dt(Symbol)&&"undefined"!==typeof Reflect&&dt(Reflect.ownKeys);pt="undefined"!==typeof Set&&dt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var mt=null;function gt(t){void 0===t&&(t=null),t||mt&&mt._scope.off(),mt=t,t&&t._scope.on()}var vt=function(){function t(t,e,n,i,s,r,o,a){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=s,this.ns=void 0,this.context=r,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),yt=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function bt(t){return new vt(void 0,void 0,void 0,String(t))}function wt(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var _t=0,kt=[],It=function(){for(var t=0;t<kt.length;t++){var e=kt[t];e.subs=e.subs.filter((function(t){return t})),e._pending=!1}kt.length=0},St=function(){function t(){this._pending=!1,this.id=_t++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,kt.push(this))},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){var e=this.subs.filter((function(t){return t}));for(var n=0,i=e.length;n<i;n++){var s=e[n];0,s.update()}},t}();St.target=null;var Ct=[];function Tt(t){Ct.push(t),St.target=t}function xt(){Ct.pop(),St.target=Ct[Ct.length-1]}var Et=Array.prototype,$t=Object.create(Et),At=["push","pop","shift","unshift","splice","sort","reverse"];At.forEach((function(t){var e=Et[t];Y($t,t,(function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var s,r=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":s=n;break;case"splice":s=n.slice(2);break}return s&&o.observeArray(s),o.dep.notify(),r}))}));var Ot=Object.getOwnPropertyNames($t),Pt={},Dt=!0;function Lt(t){Dt=t}var Rt={notify:N,depend:N,addSub:N,removeSub:N},Nt=function(){function t(t,e,n){if(void 0===e&&(e=!1),void 0===n&&(n=!1),this.value=t,this.shallow=e,this.mock=n,this.dep=n?Rt:new St,this.vmCount=0,Y(t,"__ob__",this),s(t)){if(!n)if(J)t.__proto__=$t;else for(var i=0,r=Ot.length;i<r;i++){var o=Ot[i];Y(t,o,$t[o])}e||this.observeArray(t)}else{var a=Object.keys(t);for(i=0;i<a.length;i++){o=a[i];Bt(t,o,Pt,void 0,e,n)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Mt(t[e],!1,this.mock)},t}();function Mt(t,e,n){return t&&I(t,"__ob__")&&t.__ob__ instanceof Nt?t.__ob__:!Dt||!n&&ut()||!s(t)&&!p(t)||!Object.isExtensible(t)||t.__v_skip||Ht(t)||t instanceof vt?void 0:new Nt(t,e,n)}function Bt(t,e,n,i,r,o){var a=new St,l=Object.getOwnPropertyDescriptor(t,e);if(!l||!1!==l.configurable){var c=l&&l.get,u=l&&l.set;c&&!u||n!==Pt&&2!==arguments.length||(n=t[e]);var h=!r&&Mt(n,!1,o);return Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=c?c.call(t):n;return St.target&&(a.depend(),h&&(h.dep.depend(),s(e)&&jt(e))),Ht(e)&&!r?e.value:e},set:function(e){var i=c?c.call(t):n;if(Z(i,e)){if(u)u.call(t,e);else{if(c)return;if(!r&&Ht(i)&&!Ht(e))return void(i.value=e);n=e}h=!r&&Mt(e,!1,o),a.notify()}}}),a}}function Vt(t,e,n){if(!zt(t)){var i=t.__ob__;return s(t)&&m(e)?(t.length=Math.max(t.length,e),t.splice(e,1,n),i&&!i.shallow&&i.mock&&Mt(n,!1,!0),n):e in t&&!(e in Object.prototype)?(t[e]=n,n):t._isVue||i&&i.vmCount?n:i?(Bt(i.value,e,n,void 0,i.shallow,i.mock),i.dep.notify(),n):(t[e]=n,n)}}function Ft(t,e){if(s(t)&&m(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||zt(t)||I(t,e)&&(delete t[e],n&&n.dep.notify())}}function jt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),s(e)&&jt(e)}function Zt(t){return Ut(t,!0),Y(t,"__v_isShallow",!0),t}function Ut(t,e){if(!zt(t)){Mt(t,e,ut());0}}function zt(t){return!(!t||!t.__v_isReadonly)}function Ht(t){return!(!t||!0!==t.__v_isRef)}function Wt(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(Ht(t))return t.value;var i=t&&t.__ob__;return i&&i.dep.depend(),t},set:function(t){var i=e[n];Ht(i)&&!Ht(t)?i.value=t:e[n]=t}})}var qt="watcher";"".concat(qt," callback"),"".concat(qt," getter"),"".concat(qt," cleanup");var Kt;var Yt=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Kt,!t&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Kt;try{return Kt=this,t()}finally{Kt=e}}else 0},t.prototype.on=function(){Kt=this},t.prototype.off=function(){Kt=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}},t}();function Gt(t,e){void 0===e&&(e=Kt),e&&e.active&&e.effects.push(t)}function Xt(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}var Jt=S((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}}));function Qt(t,e){function n(){var t=n.fns;if(!s(t))return Ye(t,null,arguments,e,"v-on handler");for(var i=t.slice(),r=0;r<i.length;r++)Ye(i[r],null,arguments,e,"v-on handler")}return n.fns=t,n}function te(t,e,n,i,s,o){var l,c,u,h;for(l in t)c=t[l],u=e[l],h=Jt(l),r(c)||(r(u)?(r(c.fns)&&(c=t[l]=Qt(c,o)),a(h.once)&&(c=t[l]=s(h.name,c,h.capture)),n(h.name,c,h.capture,h.passive,h.params)):c!==u&&(u.fns=c,t[l]=u));for(l in e)r(t[l])&&(h=Jt(l),i(h.name,e[l],h.capture))}function ee(t,e,n){var i;t instanceof vt&&(t=t.data.hook||(t.data.hook={}));var s=t[e];function l(){n.apply(this,arguments),_(i.fns,l)}r(s)?i=Qt([l]):o(s.fns)&&a(s.merged)?(i=s,i.fns.push(l)):i=Qt([s,l]),i.merged=!0,t[e]=i}function ne(t,e,n){var i=e.options.props;if(!r(i)){var s={},a=t.attrs,l=t.props;if(o(a)||o(l))for(var c in i){var u=$(c);ie(s,l,c,u,!0)||ie(s,a,c,u,!1)}return s}}function ie(t,e,n,i,s){if(o(e)){if(I(e,n))return t[n]=e[n],s||delete e[n],!0;if(I(e,i))return t[n]=e[i],s||delete e[i],!0}return!1}function se(t){for(var e=0;e<t.length;e++)if(s(t[e]))return Array.prototype.concat.apply([],t);return t}function re(t){return c(t)?[bt(t)]:s(t)?ae(t):void 0}function oe(t){return o(t)&&o(t.text)&&l(t.isComment)}function ae(t,e){var n,i,l,u,h=[];for(n=0;n<t.length;n++)i=t[n],r(i)||"boolean"===typeof i||(l=h.length-1,u=h[l],s(i)?i.length>0&&(i=ae(i,"".concat(e||"","_").concat(n)),oe(i[0])&&oe(u)&&(h[l]=bt(u.text+i[0].text),i.shift()),h.push.apply(h,i)):c(i)?oe(u)?h[l]=bt(u.text+i):""!==i&&h.push(bt(i)):oe(i)&&oe(u)?h[l]=bt(u.text+i.text):(a(t._isVList)&&o(i.tag)&&r(i.key)&&o(e)&&(i.key="__vlist".concat(e,"_").concat(n,"__")),h.push(i)));return h}function le(t,e){var n,i,r,a,l=null;if(s(t)||"string"===typeof t)for(l=new Array(t.length),n=0,i=t.length;n<i;n++)l[n]=e(t[n],n);else if("number"===typeof t)for(l=new Array(t),n=0;n<t;n++)l[n]=e(n+1,n);else if(h(t))if(ft&&t[Symbol.iterator]){l=[];var c=t[Symbol.iterator](),u=c.next();while(!u.done)l.push(e(u.value,l.length)),u=c.next()}else for(r=Object.keys(t),l=new Array(r.length),n=0,i=r.length;n<i;n++)a=r[n],l[n]=e(t[a],a,n);return o(l)||(l=[]),l._isVList=!0,l}function ce(t,e,n,i){var s,r=this.$scopedSlots[t];r?(n=n||{},i&&(n=L(L({},i),n)),s=r(n)||(u(e)?e():e)):s=this.$slots[t]||(u(e)?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},s):s}function ue(t){return Ii(this.$options,"filters",t,!0)||B}function he(t,e){return s(t)?-1===t.indexOf(e):t!==e}function de(t,e,n,i,s){var r=W.keyCodes[e]||n;return s&&i&&!W.keyCodes[e]?he(s,i):r?he(r,t):i?$(i)!==e:void 0===t}function pe(t,e,n,i,r){if(n)if(h(n)){s(n)&&(n=R(n));var o=void 0,a=function(s){if("class"===s||"style"===s||w(s))o=t;else{var a=t.attrs&&t.attrs.type;o=i||W.mustUseProp(e,a,s)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=T(s),c=$(s);if(!(l in o)&&!(c in o)&&(o[s]=n[s],r)){var u=t.on||(t.on={});u["update:".concat(s)]=function(t){n[s]=t}}};for(var l in n)a(l)}else;return t}function fe(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e||(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),ge(i,"__static__".concat(t),!1)),i}function me(t,e,n){return ge(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function ge(t,e,n){if(s(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&ve(t[i],"".concat(e,"_").concat(i),n);else ve(t,e,n)}function ve(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function ye(t,e){if(e)if(p(e)){var n=t.on=t.on?L({},t.on):{};for(var i in e){var s=n[i],r=e[i];n[i]=s?[].concat(s,r):r}}else;return t}function be(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var o=t[r];s(o)?be(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return i&&(e.$key=i),e}function we(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function _e(t,e){return"string"===typeof t?e+t:t}function ke(t){t._o=me,t._n=y,t._s=v,t._l=le,t._t=ce,t._q=V,t._i=F,t._m=fe,t._f=ue,t._k=de,t._b=pe,t._v=bt,t._e=yt,t._u=be,t._g=ye,t._d=we,t._p=_e}function Ie(t,e){if(!t||!t.length)return{};for(var n={},i=0,s=t.length;i<s;i++){var r=t[i],o=r.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,r.context!==e&&r.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(r);else{var a=o.slot,l=n[a]||(n[a]=[]);"template"===r.tag?l.push.apply(l,r.children||[]):l.push(r)}}for(var c in n)n[c].every(Se)&&delete n[c];return n}function Se(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Ce(t){return t.isComment&&t.asyncFactory}function Te(t,e,n,s){var r,o=Object.keys(n).length>0,a=e?!!e.$stable:!o,l=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&s&&s!==i&&l===s.$key&&!o&&!s.$hasNormal)return s;for(var c in r={},e)e[c]&&"$"!==c[0]&&(r[c]=xe(t,n,c,e[c]))}else r={};for(var u in n)u in r||(r[u]=Ee(n,u));return e&&Object.isExtensible(e)&&(e._normalized=r),Y(r,"$stable",a),Y(r,"$key",l),Y(r,"$hasNormal",o),r}function xe(t,e,n,i){var r=function(){var e=mt;gt(t);var n=arguments.length?i.apply(null,arguments):i({});n=n&&"object"===typeof n&&!s(n)?[n]:re(n);var r=n&&n[0];return gt(e),n&&(!r||1===n.length&&r.isComment&&!Ce(r))?void 0:n};return i.proxy&&Object.defineProperty(e,n,{get:r,enumerable:!0,configurable:!0}),r}function Ee(t,e){return function(){return t[e]}}function $e(t){var e=t.$options,n=e.setup;if(n){var i=t._setupContext=Ae(t);gt(t),Tt();var s=Ye(n,null,[t._props||Zt({}),i],t,"setup");if(xt(),gt(),u(s))e.render=s;else if(h(s))if(t._setupState=s,s.__sfc){var r=t._setupProxy={};for(var o in s)"__sfc"!==o&&Wt(r,s,o)}else for(var o in s)K(o)||Wt(t,s,o);else 0}}function Ae(t){return{get attrs(){if(!t._attrsProxy){var e=t._attrsProxy={};Y(e,"_v_attr_proxy",!0),Oe(e,t.$attrs,i,t,"$attrs")}return t._attrsProxy},get listeners(){if(!t._listenersProxy){var e=t._listenersProxy={};Oe(e,t.$listeners,i,t,"$listeners")}return t._listenersProxy},get slots(){return De(t)},emit:P(t.$emit,t),expose:function(e){e&&Object.keys(e).forEach((function(n){return Wt(t,e,n)}))}}}function Oe(t,e,n,i,s){var r=!1;for(var o in e)o in t?e[o]!==n[o]&&(r=!0):(r=!0,Pe(t,o,i,s));for(var o in t)o in e||(r=!0,delete t[o]);return r}function Pe(t,e,n,i){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[i][e]}})}function De(t){return t._slotsProxy||Le(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}function Le(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function Re(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,s=n&&n.context;t.$slots=Ie(e._renderChildren,s),t.$scopedSlots=n?Te(t.$parent,n.data.scopedSlots,t.$slots):i,t._c=function(e,n,i,s){return ze(t,e,n,i,s,!1)},t.$createElement=function(e,n,i,s){return ze(t,e,n,i,s,!0)};var r=n&&n.data;Bt(t,"$attrs",r&&r.attrs||i,null,!0),Bt(t,"$listeners",e._parentListeners||i,null,!0)}var Ne=null;function Me(t){ke(t.prototype),t.prototype.$nextTick=function(t){return ln(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&e._isMounted&&(e.$scopedSlots=Te(e.$parent,r.data.scopedSlots,e.$slots,e.$scopedSlots),e._slotsProxy&&Le(e._slotsProxy,e.$scopedSlots)),e.$vnode=r;try{gt(e),Ne=e,t=i.call(e._renderProxy,e.$createElement)}catch(Xo){Ke(Xo,e,"render"),t=e._vnode}finally{Ne=null,gt()}return s(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=yt()),t.parent=r,t}}function Be(t,e){return(t.__esModule||ft&&"Module"===t[Symbol.toStringTag])&&(t=t.default),h(t)?e.extend(t):t}function Ve(t,e,n,i,s){var r=yt();return r.asyncFactory=t,r.asyncMeta={data:e,context:n,children:i,tag:s},r}function Fe(t,e){if(a(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=Ne;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var i=t.owners=[n],s=!0,l=null,c=null;n.$on("hook:destroyed",(function(){return _(i,n)}));var u=function(t){for(var e=0,n=i.length;e<n;e++)i[e].$forceUpdate();t&&(i.length=0,null!==l&&(clearTimeout(l),l=null),null!==c&&(clearTimeout(c),c=null))},d=j((function(n){t.resolved=Be(n,e),s?i.length=0:u(!0)})),p=j((function(e){o(t.errorComp)&&(t.error=!0,u(!0))})),f=t(d,p);return h(f)&&(g(f)?r(t.resolved)&&f.then(d,p):g(f.component)&&(f.component.then(d,p),o(f.error)&&(t.errorComp=Be(f.error,e)),o(f.loading)&&(t.loadingComp=Be(f.loading,e),0===f.delay?t.loading=!0:l=setTimeout((function(){l=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,u(!1))}),f.delay||200)),o(f.timeout)&&(c=setTimeout((function(){c=null,r(t.resolved)&&p(null)}),f.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function je(t){if(s(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||Ce(n)))return n}}var Ze=1,Ue=2;function ze(t,e,n,i,r,o){return(s(n)||c(n))&&(r=i,i=n,n=void 0),a(o)&&(r=Ue),He(t,e,n,i,r)}function He(t,e,n,i,r){if(o(n)&&o(n.__ob__))return yt();if(o(n)&&o(n.is)&&(e=n.is),!e)return yt();var a,l;if(s(i)&&u(i[0])&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),r===Ue?i=re(i):r===Ze&&(i=se(i)),"string"===typeof e){var c=void 0;l=t.$vnode&&t.$vnode.ns||W.getTagNamespace(e),a=W.isReservedTag(e)?new vt(W.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!o(c=Ii(t.$options,"components",e))?new vt(e,n,i,void 0,void 0,t):oi(c,n,t,i,e)}else a=oi(e,n,t,i);return s(a)?a:o(a)?(o(l)&&We(a,l),o(n)&&qe(n),a):yt()}function We(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var i=0,s=t.children.length;i<s;i++){var l=t.children[i];o(l.tag)&&(r(l.ns)||a(n)&&"svg"!==l.tag)&&We(l,e,n)}}function qe(t){h(t.style)&&pn(t.style),h(t.class)&&pn(t.class)}function Ke(t,e,n){Tt();try{if(e){var i=e;while(i=i.$parent){var s=i.$options.errorCaptured;if(s)for(var r=0;r<s.length;r++)try{var o=!1===s[r].call(i,t,e,n);if(o)return}catch(Xo){Ge(Xo,i,"errorCaptured hook")}}}Ge(t,e,n)}finally{xt()}}function Ye(t,e,n,i,s){var r;try{r=n?t.apply(e,n):t.call(e),r&&!r._isVue&&g(r)&&!r._handled&&(r.catch((function(t){return Ke(t,i,s+" (Promise/async)")})),r._handled=!0)}catch(Xo){Ke(Xo,i,s)}return r}function Ge(t,e,n){if(W.errorHandler)try{return W.errorHandler.call(null,t,e,n)}catch(Xo){Xo!==t&&Xe(Xo,null,"config.errorHandler")}Xe(t,e,n)}function Xe(t,e,n){if(!Q||"undefined"===typeof console)throw t;console.error(t)}var Je,Qe=!1,tn=[],en=!1;function nn(){en=!1;var t=tn.slice(0);tn.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&dt(Promise)){var sn=Promise.resolve();Je=function(){sn.then(nn),st&&setTimeout(N)},Qe=!0}else if(et||"undefined"===typeof MutationObserver||!dt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Je="undefined"!==typeof setImmediate&&dt(setImmediate)?function(){setImmediate(nn)}:function(){setTimeout(nn,0)};else{var rn=1,on=new MutationObserver(nn),an=document.createTextNode(String(rn));on.observe(an,{characterData:!0}),Je=function(){rn=(rn+1)%2,an.data=String(rn)},Qe=!0}function ln(t,e){var n;if(tn.push((function(){if(t)try{t.call(e)}catch(Xo){Ke(Xo,e,"nextTick")}else n&&n(e)})),en||(en=!0,Je()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}function cn(t){return function(e,n){if(void 0===n&&(n=mt),n)return un(n,t,e)}}function un(t,e,n){var i=t.$options;i[e]=mi(i[e],n)}cn("beforeMount"),cn("mounted"),cn("beforeUpdate"),cn("updated"),cn("beforeDestroy"),cn("destroyed"),cn("activated"),cn("deactivated"),cn("serverPrefetch"),cn("renderTracked"),cn("renderTriggered"),cn("errorCaptured");var hn="2.7.14";var dn=new pt;function pn(t){return fn(t,dn),dn.clear(),t}function fn(t,e){var n,i,r=s(t);if(!(!r&&!h(t)||t.__v_skip||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(r){n=t.length;while(n--)fn(t[n],e)}else if(Ht(t))fn(t.value,e);else{i=Object.keys(t),n=i.length;while(n--)fn(t[i[n]],e)}}}var mn,gn=0,vn=function(){function t(t,e,n,i,s){Gt(this,Kt&&!Kt._vm?Kt:t?t._scope:void 0),(this.vm=t)&&s&&(t._watcher=this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++gn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new pt,this.newDepIds=new pt,this.expression="",u(e)?this.getter=e:(this.getter=X(e),this.getter||(this.getter=N)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;Tt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Xo){if(!this.user)throw Xo;Ke(Xo,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&pn(t),xt(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Yn(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||h(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');Ye(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&_(this.vm._scope.effects,this),this.active){var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}();function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&kn(t,e)}function bn(t,e){mn.$on(t,e)}function wn(t,e){mn.$off(t,e)}function _n(t,e){var n=mn;return function i(){var s=e.apply(null,arguments);null!==s&&n.$off(t,i)}}function kn(t,e,n){mn=t,te(e,n||{},bn,wn,_n,t),mn=void 0}function In(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(s(t))for(var r=0,o=t.length;r<o;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(s(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var l=a.length;while(l--)if(o=a[l],o===e||o.fn===e){a.splice(l,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?D(n):n;for(var i=D(arguments,1),s='event handler for "'.concat(t,'"'),r=0,o=n.length;r<o;r++)Ye(n[r],e,i,e,s)}return e}}var Sn=null;function Cn(t){var e=Sn;return Sn=t,function(){Sn=e}}function Tn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function xn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,s=n._vnode,r=Cn(n);n._vnode=t,n.$el=s?n.__patch__(s,t):n.__patch__(n.$el,t,e,!1),r(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n);var o=n;while(o&&o.$vnode&&o.$parent&&o.$vnode===o.$parent._vnode)o.$parent.$el=o.$el,o=o.$parent},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Dn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Dn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function En(t,e,n){var i;t.$el=e,t.$options.render||(t.$options.render=yt),Dn(t,"beforeMount"),i=function(){t._update(t._render(),n)};var s={before:function(){t._isMounted&&!t._isDestroyed&&Dn(t,"beforeUpdate")}};new vn(t,i,N,s,!0),n=!1;var r=t._preWatchers;if(r)for(var o=0;o<r.length;o++)r[o].run();return null==t.$vnode&&(t._isMounted=!0,Dn(t,"mounted")),t}function $n(t,e,n,s,r){var o=s.data.scopedSlots,a=t.$scopedSlots,l=!!(o&&!o.$stable||a!==i&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),c=!!(r||t.$options._renderChildren||l),u=t.$vnode;t.$options._parentVnode=s,t.$vnode=s,t._vnode&&(t._vnode.parent=s),t.$options._renderChildren=r;var h=s.data.attrs||i;t._attrsProxy&&Oe(t._attrsProxy,h,u.data&&u.data.attrs||i,t,"$attrs")&&(c=!0),t.$attrs=h,n=n||i;var d=t.$options._parentListeners;if(t._listenersProxy&&Oe(t._listenersProxy,n,d||i,t,"$listeners"),t.$listeners=t.$options._parentListeners=n,kn(t,n,d),e&&t.$options.props){Lt(!1);for(var p=t._props,f=t.$options._propKeys||[],m=0;m<f.length;m++){var g=f[m],v=t.$options.props;p[g]=Si(g,v,e,t)}Lt(!0),t.$options.propsData=e}c&&(t.$slots=Ie(r,s.context),t.$forceUpdate())}function An(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function On(t,e){if(e){if(t._directInactive=!1,An(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)On(t.$children[n]);Dn(t,"activated")}}function Pn(t,e){if((!e||(t._directInactive=!0,!An(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Pn(t.$children[n]);Dn(t,"deactivated")}}function Dn(t,e,n,i){void 0===i&&(i=!0),Tt();var s=mt;i&&gt(t);var r=t.$options[e],o="".concat(e," hook");if(r)for(var a=0,l=r.length;a<l;a++)Ye(r[a],t,n||null,t,o);t._hasHookEvent&&t.$emit("hook:"+e),i&&gt(s),xt()}var Ln=[],Rn=[],Nn={},Mn=!1,Bn=!1,Vn=0;function Fn(){Vn=Ln.length=Rn.length=0,Nn={},Mn=Bn=!1}var jn=0,Zn=Date.now;if(Q&&!et){var Un=window.performance;Un&&"function"===typeof Un.now&&Zn()>document.createEvent("Event").timeStamp&&(Zn=function(){return Un.now()})}var zn=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function Hn(){var t,e;for(jn=Zn(),Bn=!0,Ln.sort(zn),Vn=0;Vn<Ln.length;Vn++)t=Ln[Vn],t.before&&t.before(),e=t.id,Nn[e]=null,t.run();var n=Rn.slice(),i=Ln.slice();Fn(),Kn(n),Wn(i),It(),ht&&W.devtools&&ht.emit("flush")}function Wn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i&&i._watcher===n&&i._isMounted&&!i._isDestroyed&&Dn(i,"updated")}}function qn(t){t._inactive=!1,Rn.push(t)}function Kn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,On(t[e],!0)}function Yn(t){var e=t.id;if(null==Nn[e]&&(t!==St.target||!t.noRecurse)){if(Nn[e]=!0,Bn){var n=Ln.length-1;while(n>Vn&&Ln[n].id>t.id)n--;Ln.splice(n+1,0,t)}else Ln.push(t);Mn||(Mn=!0,ln(Hn))}}function Gn(t){var e=t.$options.provide;if(e){var n=u(e)?e.call(t):e;if(!h(n))return;for(var i=Xt(t),s=ft?Reflect.ownKeys(n):Object.keys(n),r=0;r<s.length;r++){var o=s[r];Object.defineProperty(i,o,Object.getOwnPropertyDescriptor(n,o))}}}function Xn(t){var e=Jn(t.$options.inject,t);e&&(Lt(!1),Object.keys(e).forEach((function(n){Bt(t,n,e[n])})),Lt(!0))}function Jn(t,e){if(t){for(var n=Object.create(null),i=ft?Reflect.ownKeys(t):Object.keys(t),s=0;s<i.length;s++){var r=i[s];if("__ob__"!==r){var o=t[r].from;if(o in e._provided)n[r]=e._provided[o];else if("default"in t[r]){var a=t[r].default;n[r]=u(a)?a.call(e):a}else 0}}return n}}function Qn(t,e,n,r,o){var l,c=this,u=o.options;I(r,"_uid")?(l=Object.create(r),l._original=r):(l=r,r=r._original);var h=a(u._compiled),d=!h;this.data=t,this.props=e,this.children=n,this.parent=r,this.listeners=t.on||i,this.injections=Jn(u.inject,r),this.slots=function(){return c.$slots||Te(r,t.scopedSlots,c.$slots=Ie(n,r)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Te(r,t.scopedSlots,this.slots())}}),h&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Te(r,t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,i){var o=ze(l,t,e,n,i,d);return o&&!s(o)&&(o.fnScopeId=u._scopeId,o.fnContext=r),o}:this._c=function(t,e,n,i){return ze(l,t,e,n,i,d)}}function ti(t,e,n,r,a){var l=t.options,c={},u=l.props;if(o(u))for(var h in u)c[h]=Si(h,u,e||i);else o(n.attrs)&&ni(c,n.attrs),o(n.props)&&ni(c,n.props);var d=new Qn(n,c,a,r,t),p=l.render.call(null,d._c,d);if(p instanceof vt)return ei(p,n,d.parent,l,d);if(s(p)){for(var f=re(p)||[],m=new Array(f.length),g=0;g<f.length;g++)m[g]=ei(f[g],n,d.parent,l,d);return m}}function ei(t,e,n,i,s){var r=wt(t);return r.fnContext=n,r.fnOptions=i,e.slot&&((r.data||(r.data={})).slot=e.slot),r}function ni(t,e){for(var n in e)t[T(n)]=e[n]}function ii(t){return t.name||t.__name||t._componentTag}ke(Qn.prototype);var si={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;si.prepatch(n,n)}else{var i=t.componentInstance=ai(t,Sn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;$n(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Dn(n,"mounted")),t.data.keepAlive&&(e._isMounted?qn(n):On(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Pn(e,!0):e.$destroy())}},ri=Object.keys(si);function oi(t,e,n,i,s){if(!r(t)){var l=n.$options._base;if(h(t)&&(t=l.extend(t)),"function"===typeof t){var c;if(r(t.cid)&&(c=t,t=Fe(c,l),void 0===t))return Ve(c,e,n,i,s);e=e||{},Ki(t),o(e.model)&&ui(t.options,e);var u=ne(e,t,s);if(a(t.options.functional))return ti(t,u,e,n,i);var d=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}li(e);var f=ii(t.options)||s,m=new vt("vue-component-".concat(t.cid).concat(f?"-".concat(f):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:u,listeners:d,tag:s,children:i},c);return m}}}function ai(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return o(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function li(t){for(var e=t.hook||(t.hook={}),n=0;n<ri.length;n++){var i=ri[n],s=e[i],r=si[i];s===r||s&&s._merged||(e[i]=s?ci(r,s):r)}}function ci(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function ui(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var r=e.on||(e.on={}),a=r[i],l=e.model.callback;o(a)?(s(a)?-1===a.indexOf(l):a!==l)&&(r[i]=[l].concat(a)):r[i]=l}var hi=N,di=W.optionMergeStrategies;function pi(t,e,n){if(void 0===n&&(n=!0),!e)return t;for(var i,s,r,o=ft?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)i=o[a],"__ob__"!==i&&(s=t[i],r=e[i],n&&I(t,i)?s!==r&&p(s)&&p(r)&&pi(s,r):Vt(t,i,r));return t}function fi(t,e,n){return n?function(){var i=u(e)?e.call(n,n):e,s=u(t)?t.call(n,n):t;return i?pi(i,s):s}:e?t?function(){return pi(u(e)?e.call(this,this):e,u(t)?t.call(this,this):t)}:e:t}function mi(t,e){var n=e?t?t.concat(e):s(e)?e:[e]:t;return n?gi(n):n}function gi(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function vi(t,e,n,i){var s=Object.create(t||null);return e?L(s,e):s}di.data=function(t,e,n){return n?fi(t,e,n):e&&"function"!==typeof e?t:fi(t,e)},H.forEach((function(t){di[t]=mi})),z.forEach((function(t){di[t+"s"]=vi})),di.watch=function(t,e,n,i){if(t===at&&(t=void 0),e===at&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var o in L(r,t),e){var a=r[o],l=e[o];a&&!s(a)&&(a=[a]),r[o]=a?a.concat(l):s(l)?l:[l]}return r},di.props=di.methods=di.inject=di.computed=function(t,e,n,i){if(!t)return e;var s=Object.create(null);return L(s,t),e&&L(s,e),s},di.provide=function(t,e){return t?function(){var n=Object.create(null);return pi(n,u(t)?t.call(this):t),e&&pi(n,u(e)?e.call(this):e,!1),n}:e};var yi=function(t,e){return void 0===e?t:e};function bi(t,e){var n=t.props;if(n){var i,r,o,a={};if(s(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(o=T(r),a[o]={type:null})}else if(p(n))for(var l in n)r=n[l],o=T(l),a[o]=p(r)?r:{type:r};else 0;t.props=a}}function wi(t,e){var n=t.inject;if(n){var i=t.inject={};if(s(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(p(n))for(var o in n){var a=n[o];i[o]=p(a)?L({from:o},a):{from:a}}else 0}}function _i(t){var e=t.directives;if(e)for(var n in e){var i=e[n];u(i)&&(e[n]={bind:i,update:i})}}function ki(t,e,n){if(u(e)&&(e=e.options),bi(e,n),wi(e,n),_i(e),!e._base&&(e.extends&&(t=ki(t,e.extends,n)),e.mixins))for(var i=0,s=e.mixins.length;i<s;i++)t=ki(t,e.mixins[i],n);var r,o={};for(r in t)a(r);for(r in e)I(t,r)||a(r);function a(i){var s=di[i]||yi;o[i]=s(t[i],e[i],n,i)}return o}function Ii(t,e,n,i){if("string"===typeof n){var s=t[e];if(I(s,n))return s[n];var r=T(n);if(I(s,r))return s[r];var o=x(r);if(I(s,o))return s[o];var a=s[n]||s[r]||s[o];return a}}function Si(t,e,n,i){var s=e[t],r=!I(n,t),o=n[t],a=$i(Boolean,s.type);if(a>-1)if(r&&!I(s,"default"))o=!1;else if(""===o||o===$(t)){var l=$i(String,s.type);(l<0||a<l)&&(o=!0)}if(void 0===o){o=Ci(i,s,t);var c=Dt;Lt(!0),Mt(o),Lt(c)}return o}function Ci(t,e,n){if(I(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:u(i)&&"Function"!==xi(e.type)?i.call(t):i}}var Ti=/^\s*function (\w+)/;function xi(t){var e=t&&t.toString().match(Ti);return e?e[1]:""}function Ei(t,e){return xi(t)===xi(e)}function $i(t,e){if(!s(e))return Ei(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(Ei(e[n],t))return n;return-1}var Ai={enumerable:!0,configurable:!0,get:N,set:N};function Oi(t,e,n){Ai.get=function(){return this[e][n]},Ai.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Ai)}function Pi(t){var e=t.$options;if(e.props&&Di(t,e.props),$e(t),e.methods&&ji(t,e.methods),e.data)Li(t);else{var n=Mt(t._data={});n&&n.vmCount++}e.computed&&Mi(t,e.computed),e.watch&&e.watch!==at&&Zi(t,e.watch)}function Di(t,e){var n=t.$options.propsData||{},i=t._props=Zt({}),s=t.$options._propKeys=[],r=!t.$parent;r||Lt(!1);var o=function(r){s.push(r);var o=Si(r,e,n,t);Bt(i,r,o),r in t||Oi(t,"_props",r)};for(var a in e)o(a);Lt(!0)}function Li(t){var e=t.$options.data;e=t._data=u(e)?Ri(e,t):e||{},p(e)||(e={});var n=Object.keys(e),i=t.$options.props,s=(t.$options.methods,n.length);while(s--){var r=n[s];0,i&&I(i,r)||K(r)||Oi(t,"_data",r)}var o=Mt(e);o&&o.vmCount++}function Ri(t,e){Tt();try{return t.call(e,e)}catch(Xo){return Ke(Xo,e,"data()"),{}}finally{xt()}}var Ni={lazy:!0};function Mi(t,e){var n=t._computedWatchers=Object.create(null),i=ut();for(var s in e){var r=e[s],o=u(r)?r:r.get;0,i||(n[s]=new vn(t,o||N,N,Ni)),s in t||Bi(t,s,r)}}function Bi(t,e,n){var i=!ut();u(n)?(Ai.get=i?Vi(e):Fi(n),Ai.set=N):(Ai.get=n.get?i&&!1!==n.cache?Vi(e):Fi(n.get):N,Ai.set=n.set||N),Object.defineProperty(t,e,Ai)}function Vi(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),St.target&&e.depend(),e.value}}function Fi(t){return function(){return t.call(this,this)}}function ji(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?N:P(e[n],t)}function Zi(t,e){for(var n in e){var i=e[n];if(s(i))for(var r=0;r<i.length;r++)Ui(t,n,i[r]);else Ui(t,n,i)}}function Ui(t,e,n,i){return p(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function zi(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Vt,t.prototype.$delete=Ft,t.prototype.$watch=function(t,e,n){var i=this;if(p(e))return Ui(i,t,e,n);n=n||{},n.user=!0;var s=new vn(i,t,e,n);if(n.immediate){var r='callback for immediate watcher "'.concat(s.expression,'"');Tt(),Ye(e,i,[s.value],i,r),xt()}return function(){s.teardown()}}}var Hi=0;function Wi(t){t.prototype._init=function(t){var e=this;e._uid=Hi++,e._isVue=!0,e.__v_skip=!0,e._scope=new Yt(!0),e._scope._vm=!0,t&&t._isComponent?qi(e,t):e.$options=ki(Ki(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Tn(e),yn(e),Re(e),Dn(e,"beforeCreate",void 0,!1),Xn(e),Pi(e),Gn(e),Dn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function qi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var s=i.componentOptions;n.propsData=s.propsData,n._parentListeners=s.listeners,n._renderChildren=s.children,n._componentTag=s.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Ki(t){var e=t.options;if(t.super){var n=Ki(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var s=Yi(t);s&&L(t.extendOptions,s),e=t.options=ki(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Yi(t){var e,n=t.options,i=t.sealedOptions;for(var s in n)n[s]!==i[s]&&(e||(e={}),e[s]=n[s]);return e}function Gi(t){this._init(t)}function Xi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),u(t.install)?t.install.apply(t,n):u(t)&&t.apply(null,n),e.push(t),this}}function Ji(t){t.mixin=function(t){return this.options=ki(this.options,t),this}}function Qi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,s=t._Ctor||(t._Ctor={});if(s[i])return s[i];var r=ii(t)||ii(n.options);var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=ki(n.options,t),o["super"]=n,o.options.props&&ts(o),o.options.computed&&es(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,z.forEach((function(t){o[t]=n[t]})),r&&(o.options.components[r]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=L({},o.options),s[i]=o,o}}function ts(t){var e=t.options.props;for(var n in e)Oi(t.prototype,"_props",n)}function es(t){var e=t.options.computed;for(var n in e)Bi(t.prototype,n,e[n])}function ns(t){z.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&p(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&u(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function is(t){return t&&(ii(t.Ctor.options)||t.tag)}function ss(t,e){return s(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function rs(t,e){var n=t.cache,i=t.keys,s=t._vnode;for(var r in n){var o=n[r];if(o){var a=o.name;a&&!e(a)&&os(n,r,i,s)}}}function os(t,e,n,i){var s=t[e];!s||i&&s.tag===i.tag||s.componentInstance.$destroy(),t[e]=null,_(n,e)}Wi(Gi),zi(Gi),In(Gi),xn(Gi),Me(Gi);var as=[String,RegExp,Array],ls={name:"keep-alive",abstract:!0,props:{include:as,exclude:as,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,i=t.vnodeToCache,s=t.keyToCache;if(i){var r=i.tag,o=i.componentInstance,a=i.componentOptions;e[s]={name:is(a),tag:r,componentInstance:o},n.push(s),this.max&&n.length>parseInt(this.max)&&os(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)os(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){rs(t,(function(t){return ss(e,t)}))})),this.$watch("exclude",(function(e){rs(t,(function(t){return!ss(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=je(t),n=e&&e.componentOptions;if(n){var i=is(n),s=this,r=s.include,o=s.exclude;if(r&&(!i||!ss(r,i))||o&&i&&ss(o,i))return e;var a=this,l=a.cache,c=a.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;l[u]?(e.componentInstance=l[u].componentInstance,_(c,u),c.push(u)):(this.vnodeToCache=e,this.keyToCache=u),e.data.keepAlive=!0}return e||t&&t[0]}},cs={KeepAlive:ls};function us(t){var e={get:function(){return W}};Object.defineProperty(t,"config",e),t.util={warn:hi,extend:L,mergeOptions:ki,defineReactive:Bt},t.set=Vt,t.delete=Ft,t.nextTick=ln,t.observable=function(t){return Mt(t),t},t.options=Object.create(null),z.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,L(t.options.components,cs),Xi(t),Ji(t),Qi(t),ns(t)}us(Gi),Object.defineProperty(Gi.prototype,"$isServer",{get:ut}),Object.defineProperty(Gi.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Gi,"FunctionalRenderContext",{value:Qn}),Gi.version=hn;var hs=b("style,class"),ds=b("input,textarea,option,select,progress"),ps=function(t,e,n){return"value"===n&&ds(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},fs=b("contenteditable,draggable,spellcheck"),ms=b("events,caret,typing,plaintext-only"),gs=function(t,e){return _s(e)||"false"===e?"false":"contenteditable"===t&&ms(e)?e:"true"},vs=b("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),ys="http://www.w3.org/1999/xlink",bs=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},ws=function(t){return bs(t)?t.slice(6,t.length):""},_s=function(t){return null==t||!1===t};function ks(t){var e=t.data,n=t,i=t;while(o(i.componentInstance))i=i.componentInstance._vnode,i&&i.data&&(e=Is(i.data,e));while(o(n=n.parent))n&&n.data&&(e=Is(e,n.data));return Ss(e.staticClass,e.class)}function Is(t,e){return{staticClass:Cs(t.staticClass,e.staticClass),class:o(t.class)?[t.class,e.class]:e.class}}function Ss(t,e){return o(t)||o(e)?Cs(t,Ts(e)):""}function Cs(t,e){return t?e?t+" "+e:t:e||""}function Ts(t){return Array.isArray(t)?xs(t):h(t)?Es(t):"string"===typeof t?t:""}function xs(t){for(var e,n="",i=0,s=t.length;i<s;i++)o(e=Ts(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Es(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var $s={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},As=b("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Os=b("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Ps=function(t){return As(t)||Os(t)};function Ds(t){return Os(t)?"svg":"math"===t?"math":void 0}var Ls=Object.create(null);function Rs(t){if(!Q)return!0;if(Ps(t))return!1;if(t=t.toLowerCase(),null!=Ls[t])return Ls[t];var e=document.createElement(t);return t.indexOf("-")>-1?Ls[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Ls[t]=/HTMLUnknownElement/.test(e.toString())}var Ns=b("text,number,password,search,email,tel,url");function Ms(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Bs(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Vs(t,e){return document.createElementNS($s[t],e)}function Fs(t){return document.createTextNode(t)}function js(t){return document.createComment(t)}function Zs(t,e,n){t.insertBefore(e,n)}function Us(t,e){t.removeChild(e)}function zs(t,e){t.appendChild(e)}function Hs(t){return t.parentNode}function Ws(t){return t.nextSibling}function qs(t){return t.tagName}function Ks(t,e){t.textContent=e}function Ys(t,e){t.setAttribute(e,"")}var Gs=Object.freeze({__proto__:null,createElement:Bs,createElementNS:Vs,createTextNode:Fs,createComment:js,insertBefore:Zs,removeChild:Us,appendChild:zs,parentNode:Hs,nextSibling:Ws,tagName:qs,setTextContent:Ks,setStyleScope:Ys}),Xs={create:function(t,e){Js(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Js(t,!0),Js(e))},destroy:function(t){Js(t,!0)}};function Js(t,e){var n=t.data.ref;if(o(n)){var i=t.context,r=t.componentInstance||t.elm,a=e?null:r,l=e?void 0:r;if(u(n))Ye(n,i,[a],i,"template ref function");else{var c=t.data.refInFor,h="string"===typeof n||"number"===typeof n,d=Ht(n),p=i.$refs;if(h||d)if(c){var f=h?p[n]:n.value;e?s(f)&&_(f,r):s(f)?f.includes(r)||f.push(r):h?(p[n]=[r],Qs(i,n,p[n])):n.value=[r]}else if(h){if(e&&p[n]!==r)return;p[n]=l,Qs(i,n,a)}else if(d){if(e&&n.value!==r)return;n.value=a}else 0}}}function Qs(t,e,n){var i=t._setupState;i&&I(i,e)&&(Ht(i[e])?i[e].value=n:i[e]=n)}var tr=new vt("",{},[]),er=["create","activate","update","remove","destroy"];function nr(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&ir(t,e)||a(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function ir(t,e){if("input"!==t.tag)return!0;var n,i=o(n=t.data)&&o(n=n.attrs)&&n.type,s=o(n=e.data)&&o(n=n.attrs)&&n.type;return i===s||Ns(i)&&Ns(s)}function sr(t,e,n){var i,s,r={};for(i=e;i<=n;++i)s=t[i].key,o(s)&&(r[s]=i);return r}function rr(t){var e,n,i={},l=t.modules,u=t.nodeOps;for(e=0;e<er.length;++e)for(i[er[e]]=[],n=0;n<l.length;++n)o(l[n][er[e]])&&i[er[e]].push(l[n][er[e]]);function h(t){return new vt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function d(t,e){function n(){0===--n.listeners&&p(t)}return n.listeners=e,n}function p(t){var e=u.parentNode(t);o(e)&&u.removeChild(e,t)}function f(t,e,n,i,s,r,l){if(o(t.elm)&&o(r)&&(t=r[l]=wt(t)),t.isRootInsert=!s,!m(t,e,n,i)){var c=t.data,h=t.children,d=t.tag;o(d)?(t.elm=t.ns?u.createElementNS(t.ns,d):u.createElement(d,t),I(t),w(t,h,e),o(c)&&k(t,e),y(n,t.elm,i)):a(t.isComment)?(t.elm=u.createComment(t.text),y(n,t.elm,i)):(t.elm=u.createTextNode(t.text),y(n,t.elm,i))}}function m(t,e,n,i){var s=t.data;if(o(s)){var r=o(t.componentInstance)&&s.keepAlive;if(o(s=s.hook)&&o(s=s.init)&&s(t,!1),o(t.componentInstance))return g(t,e),y(n,t.elm,i),a(r)&&v(t,e,n,i),!0}}function g(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,_(t)?(k(t,e),I(t)):(Js(t),e.push(t))}function v(t,e,n,s){var r,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,o(r=a.data)&&o(r=r.transition)){for(r=0;r<i.activate.length;++r)i.activate[r](tr,a);e.push(a);break}y(n,t.elm,s)}function y(t,e,n){o(t)&&(o(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function w(t,e,n){if(s(e)){0;for(var i=0;i<e.length;++i)f(e[i],n,t.elm,null,!0,e,i)}else c(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function _(t){while(t.componentInstance)t=t.componentInstance._vnode;return o(t.tag)}function k(t,n){for(var s=0;s<i.create.length;++s)i.create[s](tr,t);e=t.data.hook,o(e)&&(o(e.create)&&e.create(tr,t),o(e.insert)&&n.push(t))}function I(t){var e;if(o(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)o(e=n.context)&&o(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}o(e=Sn)&&e!==t.context&&e!==t.fnContext&&o(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function S(t,e,n,i,s,r){for(;i<=s;++i)f(n[i],r,t,e,!1,n,i)}function C(t){var e,n,s=t.data;if(o(s))for(o(e=s.hook)&&o(e=e.destroy)&&e(t),e=0;e<i.destroy.length;++e)i.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)C(t.children[n])}function T(t,e,n){for(;e<=n;++e){var i=t[e];o(i)&&(o(i.tag)?(x(i),C(i)):p(i.elm))}}function x(t,e){if(o(e)||o(t.data)){var n,s=i.remove.length+1;for(o(e)?e.listeners+=s:e=d(t.elm,s),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&x(n,e),n=0;n<i.remove.length;++n)i.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else p(t.elm)}function E(t,e,n,i,s){var a,l,c,h,d=0,p=0,m=e.length-1,g=e[0],v=e[m],y=n.length-1,b=n[0],w=n[y],_=!s;while(d<=m&&p<=y)r(g)?g=e[++d]:r(v)?v=e[--m]:nr(g,b)?(A(g,b,i,n,p),g=e[++d],b=n[++p]):nr(v,w)?(A(v,w,i,n,y),v=e[--m],w=n[--y]):nr(g,w)?(A(g,w,i,n,y),_&&u.insertBefore(t,g.elm,u.nextSibling(v.elm)),g=e[++d],w=n[--y]):nr(v,b)?(A(v,b,i,n,p),_&&u.insertBefore(t,v.elm,g.elm),v=e[--m],b=n[++p]):(r(a)&&(a=sr(e,d,m)),l=o(b.key)?a[b.key]:$(b,e,d,m),r(l)?f(b,i,t,g.elm,!1,n,p):(c=e[l],nr(c,b)?(A(c,b,i,n,p),e[l]=void 0,_&&u.insertBefore(t,c.elm,g.elm)):f(b,i,t,g.elm,!1,n,p)),b=n[++p]);d>m?(h=r(n[y+1])?null:n[y+1].elm,S(t,h,n,p,y,i)):p>y&&T(e,d,m)}function $(t,e,n,i){for(var s=n;s<i;s++){var r=e[s];if(o(r)&&nr(t,r))return s}}function A(t,e,n,s,l,c){if(t!==e){o(e.elm)&&o(s)&&(e=s[l]=wt(e));var h=e.elm=t.elm;if(a(t.isAsyncPlaceholder))o(e.asyncFactory.resolved)?D(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,p=e.data;o(p)&&o(d=p.hook)&&o(d=d.prepatch)&&d(t,e);var f=t.children,m=e.children;if(o(p)&&_(e)){for(d=0;d<i.update.length;++d)i.update[d](t,e);o(d=p.hook)&&o(d=d.update)&&d(t,e)}r(e.text)?o(f)&&o(m)?f!==m&&E(h,f,m,n,c):o(m)?(o(t.text)&&u.setTextContent(h,""),S(h,null,m,0,m.length-1,n)):o(f)?T(f,0,f.length-1):o(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),o(p)&&o(d=p.hook)&&o(d=d.postpatch)&&d(t,e)}}}function O(t,e,n){if(a(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}var P=b("attrs,class,staticClass,staticStyle,key");function D(t,e,n,i){var s,r=e.tag,l=e.data,c=e.children;if(i=i||l&&l.pre,e.elm=t,a(e.isComment)&&o(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(o(l)&&(o(s=l.hook)&&o(s=s.init)&&s(e,!0),o(s=e.componentInstance)))return g(e,n),!0;if(o(r)){if(o(c))if(t.hasChildNodes())if(o(s=l)&&o(s=s.domProps)&&o(s=s.innerHTML)){if(s!==t.innerHTML)return!1}else{for(var u=!0,h=t.firstChild,d=0;d<c.length;d++){if(!h||!D(h,c[d],n,i)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else w(e,c,n);if(o(l)){var p=!1;for(var f in l)if(!P(f)){p=!0,k(e,n);break}!p&&l["class"]&&pn(l["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,s){if(!r(e)){var l=!1,c=[];if(r(t))l=!0,f(e,c);else{var d=o(t.nodeType);if(!d&&nr(t,e))A(t,e,c,null,null,s);else{if(d){if(1===t.nodeType&&t.hasAttribute(U)&&(t.removeAttribute(U),n=!0),a(n)&&D(t,e,c))return O(e,c,!0),t;t=h(t)}var p=t.elm,m=u.parentNode(p);if(f(e,c,p._leaveCb?null:m,u.nextSibling(p)),o(e.parent)){var g=e.parent,v=_(e);while(g){for(var y=0;y<i.destroy.length;++y)i.destroy[y](g);if(g.elm=e.elm,v){for(var b=0;b<i.create.length;++b)i.create[b](tr,g);var w=g.data.hook.insert;if(w.merged)for(var k=1;k<w.fns.length;k++)w.fns[k]()}else Js(g);g=g.parent}}o(m)?T([t],0,0):o(t.tag)&&C(t)}}return O(e,c,l),e.elm}o(t)&&C(t)}}var or={create:ar,update:ar,destroy:function(t){ar(t,tr)}};function ar(t,e){(t.data.directives||e.data.directives)&&lr(t,e)}function lr(t,e){var n,i,s,r=t===tr,o=e===tr,a=ur(t.data.directives,t.context),l=ur(e.data.directives,e.context),c=[],u=[];for(n in l)i=a[n],s=l[n],i?(s.oldValue=i.value,s.oldArg=i.arg,dr(s,"update",e,t),s.def&&s.def.componentUpdated&&u.push(s)):(dr(s,"bind",e,t),s.def&&s.def.inserted&&c.push(s));if(c.length){var h=function(){for(var n=0;n<c.length;n++)dr(c[n],"inserted",e,t)};r?ee(e,"insert",h):h()}if(u.length&&ee(e,"postpatch",(function(){for(var n=0;n<u.length;n++)dr(u[n],"componentUpdated",e,t)})),!r)for(n in a)l[n]||dr(a[n],"unbind",t,t,o)}var cr=Object.create(null);function ur(t,e){var n,i,s=Object.create(null);if(!t)return s;for(n=0;n<t.length;n++){if(i=t[n],i.modifiers||(i.modifiers=cr),s[hr(i)]=i,e._setupState&&e._setupState.__sfc){var r=i.def||Ii(e,"_setupState","v-"+i.name);i.def="function"===typeof r?{bind:r,update:r}:r}i.def=i.def||Ii(e.$options,"directives",i.name,!0)}return s}function hr(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function dr(t,e,n,i,s){var r=t.def&&t.def[e];if(r)try{r(n.elm,t,n,i,s)}catch(Xo){Ke(Xo,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var pr=[Xs,or];function fr(t,e){var n=e.componentOptions;if((!o(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var i,s,l,c=e.elm,u=t.data.attrs||{},h=e.data.attrs||{};for(i in(o(h.__ob__)||a(h._v_attr_proxy))&&(h=e.data.attrs=L({},h)),h)s=h[i],l=u[i],l!==s&&mr(c,i,s,e.data.pre);for(i in(et||it)&&h.value!==u.value&&mr(c,"value",h.value),u)r(h[i])&&(bs(i)?c.removeAttributeNS(ys,ws(i)):fs(i)||c.removeAttribute(i))}}function mr(t,e,n,i){i||t.tagName.indexOf("-")>-1?gr(t,e,n):vs(e)?_s(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):fs(e)?t.setAttribute(e,gs(e,n)):bs(e)?_s(n)?t.removeAttributeNS(ys,ws(e)):t.setAttributeNS(ys,e,n):gr(t,e,n)}function gr(t,e,n){if(_s(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var i=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",i)};t.addEventListener("input",i),t.__ieph=!0}t.setAttribute(e,n)}}var vr={create:fr,update:fr};function yr(t,e){var n=e.elm,i=e.data,s=t.data;if(!(r(i.staticClass)&&r(i.class)&&(r(s)||r(s.staticClass)&&r(s.class)))){var a=ks(e),l=n._transitionClasses;o(l)&&(a=Cs(a,Ts(l))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var br,wr={create:yr,update:yr},_r="__r",kr="__c";function Ir(t){if(o(t[_r])){var e=et?"change":"input";t[e]=[].concat(t[_r],t[e]||[]),delete t[_r]}o(t[kr])&&(t.change=[].concat(t[kr],t.change||[]),delete t[kr])}function Sr(t,e,n){var i=br;return function s(){var r=e.apply(null,arguments);null!==r&&xr(t,s,n,i)}}var Cr=Qe&&!(ot&&Number(ot[1])<=53);function Tr(t,e,n,i){if(Cr){var s=jn,r=e;e=r._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=s||t.timeStamp<=0||t.target.ownerDocument!==document)return r.apply(this,arguments)}}br.addEventListener(t,e,lt?{capture:n,passive:i}:n)}function xr(t,e,n,i){(i||br).removeEventListener(t,e._wrapper||e,n)}function Er(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},i=t.data.on||{};br=e.elm||t.elm,Ir(n),te(n,i,Tr,xr,Sr,e.context),br=void 0}}var $r,Ar={create:Er,update:Er,destroy:function(t){return Er(t,tr)}};function Or(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,i,s=e.elm,l=t.data.domProps||{},c=e.data.domProps||{};for(n in(o(c.__ob__)||a(c._v_attr_proxy))&&(c=e.data.domProps=L({},c)),l)n in c||(s[n]="");for(n in c){if(i=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),i===l[n])continue;1===s.childNodes.length&&s.removeChild(s.childNodes[0])}if("value"===n&&"PROGRESS"!==s.tagName){s._value=i;var u=r(i)?"":String(i);Pr(s,u)&&(s.value=u)}else if("innerHTML"===n&&Os(s.tagName)&&r(s.innerHTML)){$r=$r||document.createElement("div"),$r.innerHTML="<svg>".concat(i,"</svg>");var h=$r.firstChild;while(s.firstChild)s.removeChild(s.firstChild);while(h.firstChild)s.appendChild(h.firstChild)}else if(i!==l[n])try{s[n]=i}catch(Xo){}}}}function Pr(t,e){return!t.composing&&("OPTION"===t.tagName||Dr(t,e)||Lr(t,e))}function Dr(t,e){var n=!0;try{n=document.activeElement!==t}catch(Xo){}return n&&t.value!==e}function Lr(t,e){var n=t.value,i=t._vModifiers;if(o(i)){if(i.number)return y(n)!==y(e);if(i.trim)return n.trim()!==e.trim()}return n!==e}var Rr={create:Or,update:Or},Nr=S((function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function Mr(t){var e=Br(t.style);return t.staticStyle?L(t.staticStyle,e):e}function Br(t){return Array.isArray(t)?R(t):"string"===typeof t?Nr(t):t}function Vr(t,e){var n,i={};if(e){var s=t;while(s.componentInstance)s=s.componentInstance._vnode,s&&s.data&&(n=Mr(s.data))&&L(i,n)}(n=Mr(t.data))&&L(i,n);var r=t;while(r=r.parent)r.data&&(n=Mr(r.data))&&L(i,n);return i}var Fr,jr=/^--/,Zr=/\s*!important$/,Ur=function(t,e,n){if(jr.test(e))t.style.setProperty(e,n);else if(Zr.test(n))t.style.setProperty($(e),n.replace(Zr,""),"important");else{var i=Hr(e);if(Array.isArray(n))for(var s=0,r=n.length;s<r;s++)t.style[i]=n[s];else t.style[i]=n}},zr=["Webkit","Moz","ms"],Hr=S((function(t){if(Fr=Fr||document.createElement("div").style,t=T(t),"filter"!==t&&t in Fr)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<zr.length;n++){var i=zr[n]+e;if(i in Fr)return i}}));function Wr(t,e){var n=e.data,i=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(i.staticStyle)&&r(i.style))){var s,a,l=e.elm,c=i.staticStyle,u=i.normalizedStyle||i.style||{},h=c||u,d=Br(e.data.style)||{};e.data.normalizedStyle=o(d.__ob__)?L({},d):d;var p=Vr(e,!0);for(a in h)r(p[a])&&Ur(l,a,"");for(a in p)s=p[a],s!==h[a]&&Ur(l,a,null==s?"":s)}}var qr={create:Wr,update:Wr},Kr=/\s+/;function Yr(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Kr).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Gr(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Kr).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" ".concat(t.getAttribute("class")||""," "),i=" "+e+" ";while(n.indexOf(i)>=0)n=n.replace(i," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Xr(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&L(e,Jr(t.name||"v")),L(e,t),e}return"string"===typeof t?Jr(t):void 0}}var Jr=S((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),Qr=Q&&!nt,to="transition",eo="animation",no="transition",io="transitionend",so="animation",ro="animationend";Qr&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(no="WebkitTransition",io="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(so="WebkitAnimation",ro="webkitAnimationEnd"));var oo=Q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function ao(t){oo((function(){oo(t)}))}function lo(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Yr(t,e))}function co(t,e){t._transitionClasses&&_(t._transitionClasses,e),Gr(t,e)}function uo(t,e,n){var i=po(t,e),s=i.type,r=i.timeout,o=i.propCount;if(!s)return n();var a=s===to?io:ro,l=0,c=function(){t.removeEventListener(a,u),n()},u=function(e){e.target===t&&++l>=o&&c()};setTimeout((function(){l<o&&c()}),r+1),t.addEventListener(a,u)}var ho=/\b(transform|all)(,|$)/;function po(t,e){var n,i=window.getComputedStyle(t),s=(i[no+"Delay"]||"").split(", "),r=(i[no+"Duration"]||"").split(", "),o=fo(s,r),a=(i[so+"Delay"]||"").split(", "),l=(i[so+"Duration"]||"").split(", "),c=fo(a,l),u=0,h=0;e===to?o>0&&(n=to,u=o,h=r.length):e===eo?c>0&&(n=eo,u=c,h=l.length):(u=Math.max(o,c),n=u>0?o>c?to:eo:null,h=n?n===to?r.length:l.length:0);var d=n===to&&ho.test(i[no+"Property"]);return{type:n,timeout:u,propCount:h,hasTransform:d}}function fo(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return mo(e)+mo(t[n])})))}function mo(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function go(t,e){var n=t.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var i=Xr(t.data.transition);if(!r(i)&&!o(n._enterCb)&&1===n.nodeType){var s=i.css,a=i.type,l=i.enterClass,c=i.enterToClass,d=i.enterActiveClass,p=i.appearClass,f=i.appearToClass,m=i.appearActiveClass,g=i.beforeEnter,v=i.enter,b=i.afterEnter,w=i.enterCancelled,_=i.beforeAppear,k=i.appear,I=i.afterAppear,S=i.appearCancelled,C=i.duration,T=Sn,x=Sn.$vnode;while(x&&x.parent)T=x.context,x=x.parent;var E=!T._isMounted||!t.isRootInsert;if(!E||k||""===k){var $=E&&p?p:l,A=E&&m?m:d,O=E&&f?f:c,P=E&&_||g,D=E&&u(k)?k:v,L=E&&I||b,R=E&&S||w,N=y(h(C)?C.enter:C);0;var M=!1!==s&&!nt,B=bo(D),V=n._enterCb=j((function(){M&&(co(n,O),co(n,A)),V.cancelled?(M&&co(n,$),R&&R(n)):L&&L(n),n._enterCb=null}));t.data.show||ee(t,"insert",(function(){var e=n.parentNode,i=e&&e._pending&&e._pending[t.key];i&&i.tag===t.tag&&i.elm._leaveCb&&i.elm._leaveCb(),D&&D(n,V)})),P&&P(n),M&&(lo(n,$),lo(n,A),ao((function(){co(n,$),V.cancelled||(lo(n,O),B||(yo(N)?setTimeout(V,N):uo(n,a,V)))}))),t.data.show&&(e&&e(),D&&D(n,V)),M||B||V()}}}function vo(t,e){var n=t.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var i=Xr(t.data.transition);if(r(i)||1!==n.nodeType)return e();if(!o(n._leaveCb)){var s=i.css,a=i.type,l=i.leaveClass,c=i.leaveToClass,u=i.leaveActiveClass,d=i.beforeLeave,p=i.leave,f=i.afterLeave,m=i.leaveCancelled,g=i.delayLeave,v=i.duration,b=!1!==s&&!nt,w=bo(p),_=y(h(v)?v.leave:v);0;var k=n._leaveCb=j((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(co(n,c),co(n,u)),k.cancelled?(b&&co(n,l),m&&m(n)):(e(),f&&f(n)),n._leaveCb=null}));g?g(I):I()}function I(){k.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),b&&(lo(n,l),lo(n,u),ao((function(){co(n,l),k.cancelled||(lo(n,c),w||(yo(_)?setTimeout(k,_):uo(n,a,k)))}))),p&&p(n,k),b||w||k())}}function yo(t){return"number"===typeof t&&!isNaN(t)}function bo(t){if(r(t))return!1;var e=t.fns;return o(e)?bo(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function wo(t,e){!0!==e.data.show&&go(e)}var _o=Q?{create:wo,activate:wo,remove:function(t,e){!0!==t.data.show?vo(t,e):e()}}:{},ko=[vr,wr,Ar,Rr,qr,_o],Io=ko.concat(pr),So=rr({nodeOps:Gs,modules:Io});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&Po(t,"input")}));var Co={inserted:function(t,e,n,i){"select"===n.tag?(i.elm&&!i.elm._vOptions?ee(n,"postpatch",(function(){Co.componentUpdated(t,e,n)})):To(t,e,n.context),t._vOptions=[].map.call(t.options,$o)):("textarea"===n.tag||Ns(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",Ao),t.addEventListener("compositionend",Oo),t.addEventListener("change",Oo),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){To(t,e,n.context);var i=t._vOptions,s=t._vOptions=[].map.call(t.options,$o);if(s.some((function(t,e){return!V(t,i[e])}))){var r=t.multiple?e.value.some((function(t){return Eo(t,s)})):e.value!==e.oldValue&&Eo(e.value,s);r&&Po(t,"change")}}}};function To(t,e,n){xo(t,e,n),(et||it)&&setTimeout((function(){xo(t,e,n)}),0)}function xo(t,e,n){var i=e.value,s=t.multiple;if(!s||Array.isArray(i)){for(var r,o,a=0,l=t.options.length;a<l;a++)if(o=t.options[a],s)r=F(i,$o(o))>-1,o.selected!==r&&(o.selected=r);else if(V($o(o),i))return void(t.selectedIndex!==a&&(t.selectedIndex=a));s||(t.selectedIndex=-1)}}function Eo(t,e){return e.every((function(e){return!V(e,t)}))}function $o(t){return"_value"in t?t._value:t.value}function Ao(t){t.target.composing=!0}function Oo(t){t.target.composing&&(t.target.composing=!1,Po(t.target,"input"))}function Po(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Do(t){return!t.componentInstance||t.data&&t.data.transition?t:Do(t.componentInstance._vnode)}var Lo={bind:function(t,e,n){var i=e.value;n=Do(n);var s=n.data&&n.data.transition,r=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;i&&s?(n.data.show=!0,go(n,(function(){t.style.display=r}))):t.style.display=i?r:"none"},update:function(t,e,n){var i=e.value,s=e.oldValue;if(!i!==!s){n=Do(n);var r=n.data&&n.data.transition;r?(n.data.show=!0,i?go(n,(function(){t.style.display=t.__vOriginalDisplay})):vo(n,(function(){t.style.display="none"}))):t.style.display=i?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,i,s){s||(t.style.display=t.__vOriginalDisplay)}},Ro={model:Co,show:Lo},No={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Mo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Mo(je(e.children)):t}function Bo(t){var e={},n=t.$options;for(var i in n.propsData)e[i]=t[i];var s=n._parentListeners;for(var i in s)e[T(i)]=s[i];return e}function Vo(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function Fo(t){while(t=t.parent)if(t.data.transition)return!0}function jo(t,e){return e.key===t.key&&e.tag===t.tag}var Zo=function(t){return t.tag||Ce(t)},Uo=function(t){return"show"===t.name},zo={name:"transition",props:No,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(Zo),n.length)){0;var i=this.mode;0;var s=n[0];if(Fo(this.$vnode))return s;var r=Mo(s);if(!r)return s;if(this._leaving)return Vo(t,s);var o="__transition-".concat(this._uid,"-");r.key=null==r.key?r.isComment?o+"comment":o+r.tag:c(r.key)?0===String(r.key).indexOf(o)?r.key:o+r.key:r.key;var a=(r.data||(r.data={})).transition=Bo(this),l=this._vnode,u=Mo(l);if(r.data.directives&&r.data.directives.some(Uo)&&(r.data.show=!0),u&&u.data&&!jo(r,u)&&!Ce(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=L({},a);if("out-in"===i)return this._leaving=!0,ee(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),Vo(t,s);if("in-out"===i){if(Ce(r))return l;var d,p=function(){d()};ee(a,"afterEnter",p),ee(a,"enterCancelled",p),ee(h,"delayLeave",(function(t){d=t}))}}return s}}},Ho=L({tag:String,moveClass:String},No);delete Ho.mode;var Wo={props:Ho,beforeMount:function(){var t=this,e=this._update;this._update=function(n,i){var s=Cn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,s(),e.call(t,n,i)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,s=this.$slots.default||[],r=this.children=[],o=Bo(this),a=0;a<s.length;a++){var l=s[a];if(l.tag)if(null!=l.key&&0!==String(l.key).indexOf("__vlist"))r.push(l),n[l.key]=l,(l.data||(l.data={})).transition=o;else;}if(i){var c=[],u=[];for(a=0;a<i.length;a++){l=i[a];l.data.transition=o,l.data.pos=l.elm.getBoundingClientRect(),n[l.key]?c.push(l):u.push(l)}this.kept=t(e,null,c),this.removed=u}return t(e,null,r)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(qo),t.forEach(Ko),t.forEach(Yo),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,i=n.style;lo(n,e),i.transform=i.WebkitTransform=i.transitionDuration="",n.addEventListener(io,n._moveCb=function t(i){i&&i.target!==n||i&&!/transform$/.test(i.propertyName)||(n.removeEventListener(io,t),n._moveCb=null,co(n,e))})}})))},methods:{hasMove:function(t,e){if(!Qr)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Gr(n,t)})),Yr(n,e),n.style.display="none",this.$el.appendChild(n);var i=po(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function qo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Ko(t){t.data.newPos=t.elm.getBoundingClientRect()}function Yo(t){var e=t.data.pos,n=t.data.newPos,i=e.left-n.left,s=e.top-n.top;if(i||s){t.data.moved=!0;var r=t.elm.style;r.transform=r.WebkitTransform="translate(".concat(i,"px,").concat(s,"px)"),r.transitionDuration="0s"}}var Go={Transition:zo,TransitionGroup:Wo};Gi.config.mustUseProp=ps,Gi.config.isReservedTag=Ps,Gi.config.isReservedAttr=hs,Gi.config.getTagNamespace=Ds,Gi.config.isUnknownElement=Rs,L(Gi.options.directives,Ro),L(Gi.options.components,Go),Gi.prototype.__patch__=Q?So:N,Gi.prototype.$mount=function(t,e){return t=t&&Q?Ms(t):void 0,En(this,t,e)},Q&&setTimeout((function(){W.devtools&&ht&&ht.emit("init",Gi)}),0)},2238:function(t,e,n){"use strict";n.r(e),n.d(e,{FirebaseError:function(){return r.ZR},SDK_VERSION:function(){return G},_DEFAULT_ENTRY_NAME:function(){return M},_addComponent:function(){return j},_addOrOverwriteComponent:function(){return Z},_apps:function(){return V},_clearComponents:function(){return W},_components:function(){return F},_getProvider:function(){return z},_registerComponent:function(){return U},_removeServiceInstance:function(){return H},deleteApp:function(){return tt},getApp:function(){return J},getApps:function(){return Q},initializeApp:function(){return X},onLog:function(){return nt},registerVersion:function(){return et},setLogLevel:function(){return it}});var i=n(8463),s=n(3333),r=n(4444),o=n(6531);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(l(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function l(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.9.8",h=new s.Yd("@firebase/app"),d="@firebase/app-compat",p="@firebase/analytics-compat",f="@firebase/analytics",m="@firebase/app-check-compat",g="@firebase/app-check",v="@firebase/auth",y="@firebase/auth-compat",b="@firebase/database",w="@firebase/database-compat",_="@firebase/functions",k="@firebase/functions-compat",I="@firebase/installations",S="@firebase/installations-compat",C="@firebase/messaging",T="@firebase/messaging-compat",x="@firebase/performance",E="@firebase/performance-compat",$="@firebase/remote-config",A="@firebase/remote-config-compat",O="@firebase/storage",P="@firebase/storage-compat",D="@firebase/firestore",L="@firebase/firestore-compat",R="firebase",N="9.20.0",M="[DEFAULT]",B={[c]:"fire-core",[d]:"fire-core-compat",[f]:"fire-analytics",[p]:"fire-analytics-compat",[g]:"fire-app-check",[m]:"fire-app-check-compat",[v]:"fire-auth",[y]:"fire-auth-compat",[b]:"fire-rtdb",[w]:"fire-rtdb-compat",[_]:"fire-fn",[k]:"fire-fn-compat",[I]:"fire-iid",[S]:"fire-iid-compat",[C]:"fire-fcm",[T]:"fire-fcm-compat",[x]:"fire-perf",[E]:"fire-perf-compat",[$]:"fire-rc",[A]:"fire-rc-compat",[O]:"fire-gcs",[P]:"fire-gcs-compat",[D]:"fire-fst",[L]:"fire-fst-compat","fire-js":"fire-js",[R]:"fire-js-all"},V=new Map,F=new Map;function j(t,e){try{t.container.addComponent(e)}catch(n){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Z(t,e){t.container.addOrOverwriteComponent(e)}function U(t){const e=t.name;if(F.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;F.set(e,t);for(const n of V.values())j(n,t);return!0}function z(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function H(t,e,n=M){z(t,e).clearInstance(n)}function W(){F.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},K=new r.LL("app","Firebase",q);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=N;function X(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const s=Object.assign({name:M,automaticDataCollectionEnabled:!1},e),o=s.name;if("string"!==typeof o||!o)throw K.create("bad-app-name",{appName:String(o)});if(n||(n=(0,r.aH)()),!n)throw K.create("no-options");const a=V.get(o);if(a){if((0,r.vZ)(n,a.options)&&(0,r.vZ)(s,a.config))return a;throw K.create("duplicate-app",{appName:o})}const l=new i.H0(o);for(const i of F.values())l.addComponent(i);const c=new Y(n,s,l);return V.set(o,c),c}function J(t=M){const e=V.get(t);if(!e&&t===M)return X();if(!e)throw K.create("no-app",{appName:t});return e}function Q(){return Array.from(V.values())}async function tt(t){const e=t.name;V.has(e)&&(V.delete(e),await Promise.all(t.container.getProviders().map((t=>t.delete()))),t.isDeleted=!0)}function et(t,e,n){var s;let r=null!==(s=B[t])&&void 0!==s?s:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${r}" with version "${e}":`];return o&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}U(new i.wA(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}function nt(t,e){if(null!==t&&"function"!==typeof t)throw K.create("invalid-log-argument");(0,s.Am)(t,e)}function it(t){(0,s.Ub)(t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="firebase-heartbeat-database",rt=1,ot="firebase-heartbeat-store";let at=null;function lt(){return at||(at=(0,o.X3)(st,rt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ot)}}}).catch((t=>{throw K.create("idb-open",{originalErrorMessage:t.message})}))),at}async function ct(t){try{const e=await lt();return e.transaction(ot).objectStore(ot).get(ht(t))}catch(e){if(e instanceof r.ZR)h.warn(e.message);else{const t=K.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});h.warn(t.message)}}}async function ut(t,e){try{const n=await lt(),i=n.transaction(ot,"readwrite"),s=i.objectStore(ot);return await s.put(e,ht(t)),i.done}catch(n){if(n instanceof r.ZR)h.warn(n.message);else{const t=K.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});h.warn(t.message)}}}function ht(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=1024,pt=2592e6;class ft{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new vt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=mt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=pt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=mt(),{heartbeatsToSend:e,unsentEntries:n}=gt(this._heartbeatsCache.heartbeats),i=(0,r.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function mt(){const t=new Date;return t.toISOString().substring(0,10)}function gt(t,e=dt){const n=[];let i=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),yt(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),yt(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class vt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,r.hl)()&&(0,r.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await ct(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ut(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ut(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function yt(t){return(0,r.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){U(new i.wA("platform-logger",(t=>new a(t)),"PRIVATE")),U(new i.wA("heartbeat",(t=>new ft(t)),"PRIVATE")),et(c,u,t),et(c,u,"esm2017"),et("fire-js","")}bt("")},8463:function(t,e,n){"use strict";n.d(e,{H0:function(){return c},wA:function(){return s}});var i=n(4444);class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(l(t))try{this.getOrInitializeService({instanceIdentifier:r})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=r){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=r){return this.instances.has(t)}getOptions(t=r){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,r]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&r.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=r){return this.component?this.component.multipleInstances?t:r:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===r?void 0:t}function l(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){"use strict";n.d(e,{Am:function(){return h},Ub:function(){return u},Yd:function(){return c},in:function(){return s}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var s;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));const r={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},l=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?r[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}function u(t){i.forEach((e=>{e.setLogLevel(t)}))}function h(t,e){for(const n of i){let i=null;e&&e.level&&(i=r[e.level]),n.userLogHandler=null===t?null:(e,n,...r)=>{const o=r.map((t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}})).filter((t=>t)).join(" ");n>=(null!==i&&void 0!==i?i:e.logLevel)&&t({level:s[n].toLowerCase(),message:o,args:r,type:e.name})}}}},3059:function(t,e,n){"use strict";var i=n(2238),s=n(3333),r=n(4444),o=n(8463),a=n(6531);const l="@firebase/installations",c="0.6.4",u=1e4,h=`w:${c}`,d="FIS_v2",p="https://firebaseinstallations.googleapis.com/v1",f=36e5,m="installations",g="Installations",v={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},y=new r.LL(m,g,v);function b(t){return t instanceof r.ZR&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w({projectId:t}){return`${p}/projects/${t}/installations`}function _(t){return{token:t.token,requestStatus:2,expiresIn:T(t.expiresIn),creationTime:Date.now()}}async function k(t,e){const n=await e.json(),i=n.error;return y.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function I({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function S(t,{refreshToken:e}){const n=I(t);return n.append("Authorization",x(e)),n}async function C(t){const e=await t();return e.status>=500&&e.status<600?t():e}function T(t){return Number(t.replace("s","000"))}function x(t){return`${d} ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=w(t),s=I(t),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&s.append("x-firebase-client",t)}const o={fid:n,authVersion:d,appId:t.appId,sdkVersion:h},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await C((()=>fetch(i,a)));if(l.ok){const t=await l.json(),e={fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:_(t.authToken)};return e}throw await k("Create Installation",l)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t){const e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=/^[cdef][\w-]{21}$/,P="";function D(){try{const t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;const n=L(t);return O.test(n)?n:P}catch(t){return P}}function L(t){const e=A(t);return e.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=new Map;function M(t,e){const n=R(t);B(n,e),V(n,e)}function B(t,e){const n=N.get(t);if(n)for(const i of n)i(e)}function V(t,e){const n=j();n&&n.postMessage({key:t,fid:e}),Z()}let F=null;function j(){return!F&&"BroadcastChannel"in self&&(F=new BroadcastChannel("[Firebase] FID Change"),F.onmessage=t=>{B(t.data.key,t.data.fid)}),F}function Z(){0===N.size&&F&&(F.close(),F=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U="firebase-installations-database",z=1,H="firebase-installations-store";let W=null;function q(){return W||(W=(0,a.X3)(U,z,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(H)}}})),W}async function K(t,e){const n=R(t),i=await q(),s=i.transaction(H,"readwrite"),r=s.objectStore(H),o=await r.get(n);return await r.put(e,n),await s.done,o&&o.fid===e.fid||M(t,e.fid),e}async function Y(t){const e=R(t),n=await q(),i=n.transaction(H,"readwrite");await i.objectStore(H).delete(e),await i.done}async function G(t,e){const n=R(t),i=await q(),s=i.transaction(H,"readwrite"),r=s.objectStore(H),o=await r.get(n),a=e(o);return void 0===a?await r.delete(n):await r.put(a,n),await s.done,!a||o&&o.fid===a.fid||M(t,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(t){let e;const n=await G(t.appConfig,(n=>{const i=J(n),s=Q(t,i);return e=s.registrationPromise,s.installationEntry}));return n.fid===P?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function J(t){const e=t||{fid:D(),registrationStatus:0};return it(e)}function Q(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(y.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=tt(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:et(t)}:{installationEntry:e}}async function tt(t,e){try{const n=await E(t,e);return K(t.appConfig,n)}catch(n){throw b(n)&&409===n.customData.serverCode?await Y(t.appConfig):await K(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function et(t){let e=await nt(t.appConfig);while(1===e.registrationStatus)await $(100),e=await nt(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await X(t);return n||e}return e}function nt(t){return G(t,(t=>{if(!t)throw y.create("installation-not-found");return it(t)}))}function it(t){return st(t)?{fid:t.fid,registrationStatus:0}:t}function st(t){return 1===t.registrationStatus&&t.registrationTime+u<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt({appConfig:t,heartbeatServiceProvider:e},n){const i=ot(t,n),s=S(t,n),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&s.append("x-firebase-client",t)}const o={installation:{sdkVersion:h,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await C((()=>fetch(i,a)));if(l.ok){const t=await l.json(),e=_(t);return e}throw await k("Generate Auth Token",l)}function ot(t,{fid:e}){return`${w(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(t,e=!1){let n;const i=await G(t.appConfig,(i=>{if(!ht(i))throw y.create("not-registered");const s=i.authToken;if(!e&&dt(s))return i;if(1===s.requestStatus)return n=lt(t,e),i;{if(!navigator.onLine)throw y.create("app-offline");const e=ft(i);return n=ut(t,e),e}})),s=n?await n:i.authToken;return s}async function lt(t,e){let n=await ct(t.appConfig);while(1===n.authToken.requestStatus)await $(100),n=await ct(t.appConfig);const i=n.authToken;return 0===i.requestStatus?at(t,e):i}function ct(t){return G(t,(t=>{if(!ht(t))throw y.create("not-registered");const e=t.authToken;return mt(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t}))}async function ut(t,e){try{const n=await rt(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await K(t.appConfig,i),n}catch(n){if(!b(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await K(t.appConfig,n)}else await Y(t.appConfig);throw n}}function ht(t){return void 0!==t&&2===t.registrationStatus}function dt(t){return 2===t.requestStatus&&!pt(t)}function pt(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+f}function ft(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function mt(t){return 1===t.requestStatus&&t.requestTime+u<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(t){const e=t,{installationEntry:n,registrationPromise:i}=await X(e);return i?i.catch(console.error):at(e).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(t,e=!1){const n=t;await yt(n);const i=await at(n,e);return i.token}async function yt(t){const{registrationPromise:e}=await X(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bt(t){if(!t||!t.options)throw wt("App Configuration");if(!t.name)throw wt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw wt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function wt(t){return y.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="installations",kt="installations-internal",It=t=>{const e=t.getProvider("app").getImmediate(),n=bt(e),s=(0,i._getProvider)(e,"heartbeat"),r={app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()};return r},St=t=>{const e=t.getProvider("app").getImmediate(),n=(0,i._getProvider)(e,_t).getImmediate(),s={getId:()=>gt(n),getToken:t=>vt(n,t)};return s};function Ct(){(0,i._registerComponent)(new o.wA(_t,It,"PUBLIC")),(0,i._registerComponent)(new o.wA(kt,St,"PRIVATE"))}Ct(),(0,i.registerVersion)(l,c),(0,i.registerVersion)(l,c,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tt="analytics",xt="firebase_id",Et="origin",$t=6e4,At="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ot="https://www.googletagmanager.com/gtag/js",Pt=new s.Yd("@firebase/analytics"),Dt={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Lt=new r.LL("analytics","Analytics",Dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rt(t){if(!t.startsWith(Ot)){const e=Lt.create("invalid-gtag-resource",{gtagURL:t});return Pt.warn(e.message),""}return t}function Nt(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function Mt(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Bt(t,e){const n=Mt("firebase-js-sdk-policy",{createScriptURL:Rt}),i=document.createElement("script"),s=`${Ot}?l=${t}&id=${e}`;i.src=n?null===n||void 0===n?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function Vt(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Ft(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const t=await Nt(n),i=t.find((t=>t.measurementId===s));i&&await e[i.appId]}}catch(a){Pt.error(a)}t("config",s,r)}async function jt(t,e,n,i,s){try{let r=[];if(s&&s["send_to"]){let t=s["send_to"];Array.isArray(t)||(t=[t]);const i=await Nt(n);for(const n of t){const t=i.find((t=>t.measurementId===n)),s=t&&e[t.appId];if(!s){r=[];break}r.push(s)}}0===r.length&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){Pt.error(r)}}function Zt(t,e,n,i){async function s(s,r,o){try{"event"===s?await jt(t,e,n,r,o):"config"===s?await Ft(t,e,n,i,r,o):"consent"===s?t("consent","update",o):t("set",r)}catch(a){Pt.error(a)}}return s}function Ut(t,e,n,i,s){let r=function(...t){window[i].push(arguments)};return window[s]&&"function"===typeof window[s]&&(r=window[s]),window[s]=Zt(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function zt(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ot)&&n.src.includes(t))return n;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=30,Wt=1e3;class qt{constructor(t={},e=Wt){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Kt=new qt;function Yt(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Gt(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:Yt(i)},r=At.replace("{app-id}",n),o=await fetch(r,s);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(a){}throw Lt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}async function Xt(t,e=Kt,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw Lt.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Lt.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ee;return setTimeout((async()=>{a.abort()}),void 0!==n?n:$t),Jt({appId:i,apiKey:s,measurementId:r},o,a,e)}async function Jt(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=Kt){var o;const{appId:a,measurementId:l}=t;try{await Qt(i,e)}catch(c){if(l)return Pt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${null===c||void 0===c?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const e=await Gt(t);return s.deleteThrottleMetadata(a),e}catch(c){const e=c;if(!te(e)){if(s.deleteThrottleMetadata(a),l)return Pt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${null===e||void 0===e?void 0:e.message}]`),{appId:a,measurementId:l};throw c}const u=503===Number(null===(o=null===e||void 0===e?void 0:e.customData)||void 0===o?void 0:o.httpStatus)?(0,r.$s)(n,s.intervalMillis,Ht):(0,r.$s)(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(a,h),Pt.debug(`Calling attemptFetch again in ${u} millis`),Jt(t,h,i,s)}}function Qt(t,e){return new Promise(((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener((()=>{clearTimeout(r),i(Lt.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}function te(t){if(!(t instanceof r.ZR)||!t.customData)return!1;const e=Number(t.customData["httpStatus"]);return 429===e||500===e||503===e||504===e}class ee{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ne,ie;async function se(t,e,n,i,s){if(s&&s.global)t("event",n,i);else{const s=await e,r=Object.assign(Object.assign({},i),{send_to:s});t("event",n,r)}}function re(t){ie=t}function oe(t){ne=t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(){if(!(0,r.hl)())return Pt.warn(Lt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,r.eu)()}catch(t){return Pt.warn(Lt.create("indexeddb-unavailable",{errorInfo:null===t||void 0===t?void 0:t.toString()}).message),!1}return!0}async function le(t,e,n,i,s,r,o){var a;const l=Xt(t);l.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&Pt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>Pt.error(t))),e.push(l);const c=ae().then((t=>t?i.getId():void 0)),[u,h]=await Promise.all([l,c]);zt(r)||Bt(r,u.measurementId),ie&&(s("consent","default",ie),re(void 0)),s("js",new Date);const d=null!==(a=null===o||void 0===o?void 0:o.config)&&void 0!==a?a:{};return d[Et]="firebase",d.update=!0,null!=h&&(d[xt]=h),s("config",u.measurementId,d),ne&&(s("set",ne),oe(void 0)),u.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t){this.app=t}_delete(){return delete ue[this.app.options.appId],Promise.resolve()}}let ue={},he=[];const de={};let pe,fe,me="dataLayer",ge="gtag",ve=!1;function ye(){const t=[];if((0,r.ru)()&&t.push("This is a browser extension environment."),(0,r.zI)()||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=Lt.create("invalid-analytics-context",{errorInfo:e});Pt.warn(n.message)}}function be(t,e,n){ye();const i=t.options.appId;if(!i)throw Lt.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw Lt.create("no-api-key");Pt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=ue[i])throw Lt.create("already-exists",{id:i});if(!ve){Vt(me);const{wrappedGtag:t,gtagCore:e}=Ut(ue,he,de,me,ge);fe=t,pe=e,ve=!0}ue[i]=le(t,he,de,e,pe,me,n);const s=new ce(t);return s}function we(t,e,n,i){t=(0,r.m9)(t),se(fe,ue[t.app.options.appId],e,n,i).catch((t=>Pt.error(t)))}const _e="@firebase/analytics",ke="0.9.5";function Ie(){function t(t){try{const e=t.getProvider(Tt).getImmediate();return{logEvent:(t,n,i)=>we(e,t,n,i)}}catch(e){throw Lt.create("interop-component-reg-failed",{reason:e})}}(0,i._registerComponent)(new o.wA(Tt,((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return be(n,i,e)}),"PUBLIC")),(0,i._registerComponent)(new o.wA("analytics-internal",t,"PRIVATE")),(0,i.registerVersion)(_e,ke),(0,i.registerVersion)(_e,ke,"esm2017")}Ie()},3977:function(t,e,n){"use strict";n.d(e,{ZF:function(){return i.initializeApp}});var i=n(2238),s="firebase",r="9.20.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.registerVersion)(s,r,"app")},6852:function(t,e,n){"use strict";n.d(e,{Xb:function(){return Ee},v0:function(){return ji},Aj:function(){return Pe},LS:function(){return xe},e5:function(){return $e},w7:function(){return De}});var i=n(4444),s=n(2238);function r(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]])}return n}Object.create;Object.create;var o=n(3333),a=n(8463);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=l,u=new i.LL("auth","Firebase",l()),h=new o.Yd("@firebase/auth");function d(t,...e){h.logLevel<=o["in"].WARN&&h.warn(`Auth (${s.SDK_VERSION}): ${t}`,...e)}function p(t,...e){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${s.SDK_VERSION}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw v(t,...e)}function m(t,...e){return v(t,...e)}function g(t,e,n){const s=Object.assign(Object.assign({},c()),{[e]:n}),r=new i.LL("auth","Firebase",s);return r.create(e,{appName:t.name})}function v(t,...e){if("string"!==typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return u.create(t,...e)}function y(t,e,...n){if(!t)throw v(e,...n)}function b(t){const e="INTERNAL ASSERTION FAILED: "+t;throw p(e),new Error(e)}function w(t,e){t||b(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function k(){return"http:"===I()||"https:"===I()}function I(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function C(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t,e){this.shortDelay=t,this.longDelay=e,w(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){w(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},A=new T(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,s,r={}){return D(t,r,(async()=>{let r={},o={};s&&("GET"===e?o=s:r={body:JSON.stringify(s)});const a=(0,i.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),E.fetch()(R(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))}))}async function D(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},$),e);try{const e=new N(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const r=await i.json();if("needConfirmation"in r)throw M(t,"account-exists-with-different-credential",r);if(i.ok&&!("errorMessage"in r))return r;{const e=i.ok?r.errorMessage:r.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw M(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw M(t,"email-already-in-use",r);if("USER_DISABLED"===n)throw M(t,"user-disabled",r);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(t,a,o);f(t,a)}}catch(r){if(r instanceof i.ZR)throw r;f(t,"network-request-failed",{message:String(r)})}}async function L(t,e,n,i,s={}){const r=await P(t,e,n,i,s);return"mfaPendingCredential"in r&&f(t,"multi-factor-auth-required",{_serverResponse:r}),r}function R(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?x(t.config,s):`${t.config.apiScheme}://${s}`}class N{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(m(this.auth,"network-request-failed"))),A.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function M(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=m(t,e,i);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function V(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j(t,e=!1){const n=(0,i.m9)(t),s=await n.getIdToken(e),r=U(s);y(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"===typeof r.firebase?r.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:r,token:s,authTime:F(Z(r.auth_time)),issuedAtTime:F(Z(r.iat)),expirationTime:F(Z(r.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Z(t){return 1e3*Number(t)}function U(t){const[e,n,s]=t.split(".");if(void 0===e||void 0===n||void 0===s)return p("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,i.tV)(n);return t?JSON.parse(t):(p("Failed to decode base64 JWT payload"),null)}catch(r){return p("Caught error parsing JWT payload as JSON",null===r||void 0===r?void 0:r.toString()),null}}function z(t){const e=U(t);return y(e,"internal-error"),y("undefined"!==typeof e.exp,"internal-error"),y("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof i.ZR&&W(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function W({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=F(this.lastLoginAt),this.creationTime=F(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t){var e;const n=t.auth,i=await t.getIdToken(),s=await H(t,V(n,{idToken:i}));y(null===s||void 0===s?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=(null===(e=r.providerUserInfo)||void 0===e?void 0:e.length)?J(r.providerUserInfo):[],a=X(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!l&&c,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new K(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function G(t){const e=(0,i.m9)(t);await Y(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function X(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function J(t){return t.map((t=>{var{providerId:e}=t,n=r(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t,e){const n=await D(t,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=R(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",E.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){y(t.idToken,"internal-error"),y("undefined"!==typeof t.idToken,"internal-error"),y("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):z(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return y(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:s}=await Q(t,e);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:s}=e,r=new tt;return n&&(y("string"===typeof n,"internal-error",{appName:t}),r.refreshToken=n),i&&(y("string"===typeof i,"internal-error",{appName:t}),r.accessToken=i),s&&(y("number"===typeof s,"internal-error",{appName:t}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new tt,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,e){y("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class nt{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,s=r(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new K(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await H(this,this.stsTokenManager.getToken(this.auth,t));return y(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return j(this,t)}reload(){return G(this)}_assign(t){this!==t&&(y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new nt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await H(this,B(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,s,r,o,a,l,c;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(s=e.phoneNumber)&&void 0!==s?s:void 0,p=null!==(r=e.photoURL)&&void 0!==r?r:void 0,f=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=e.createdAt)&&void 0!==l?l:void 0,v=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:k,stsTokenManager:I}=e;y(b&&I,t,"internal-error");const S=tt.fromJSON(this.name,I);y("string"===typeof b,t,"internal-error"),et(u,t.name),et(h,t.name),y("boolean"===typeof w,t,"internal-error"),y("boolean"===typeof _,t,"internal-error"),et(d,t.name),et(p,t.name),et(f,t.name),et(m,t.name),et(g,t.name),et(v,t.name);const C=new nt({uid:b,auth:t,email:h,emailVerified:w,displayName:u,isAnonymous:_,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:S,createdAt:g,lastLoginAt:v});return k&&Array.isArray(k)&&(C.providerData=k.map((t=>Object.assign({},t)))),m&&(C._redirectEventId=m),C}static async _fromIdTokenResponse(t,e,n=!1){const i=new tt;i.updateFromServerResponse(e);const s=new nt({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Y(s),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new Map;function st(t){w(t instanceof Function,"Expected a class definition");let e=it.get(t);return e?(w(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,it.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}rt.type="NONE";const ot=rt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e,n){return`firebase:${t}:${e}:${n}`}class lt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=at(this.userKey,i.apiKey,s),this.fullPersistenceKey=at("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?nt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new lt(st(ot),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let s=i[0]||st(ot);const r=at(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(r);if(e){const n=nt._fromJSON(t,e);c!==s&&(o=n),s=c;break}}catch(l){}const a=i.filter((t=>t._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==s)try{await t._remove(r)}catch(l){}}))),new lt(s,t,n)):new lt(s,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ut(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mt(e))return"Blackberry";if(gt(e))return"Webos";if(ht(e))return"Safari";if((e.includes("chrome/")||dt(e))&&!e.includes("edge/"))return"Chrome";if(ft(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ut(t=(0,i.z$)()){return/firefox\//i.test(t)}function ht(t=(0,i.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dt(t=(0,i.z$)()){return/crios\//i.test(t)}function pt(t=(0,i.z$)()){return/iemobile/i.test(t)}function ft(t=(0,i.z$)()){return/android/i.test(t)}function mt(t=(0,i.z$)()){return/blackberry/i.test(t)}function gt(t=(0,i.z$)()){return/webos/i.test(t)}function vt(t=(0,i.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yt(t=(0,i.z$)()){var e;return vt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function bt(){return(0,i.w1)()&&10===document.documentMode}function wt(t=(0,i.z$)()){return vt(t)||ft(t)||gt(t)||mt(t)||/windows phone/i.test(t)||pt(t)}function _t(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,e=[]){let n;switch(t){case"Browser":n=ct((0,i.z$)());break;case"Worker":n=`${ct((0,i.z$)())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(t,e){return P(t,"GET","/v2/recaptchaConfig",O(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t){return void 0!==t&&void 0!==t.enterprise}class Ct{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some((t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function xt(t){return new Promise(((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=m("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",Tt().appendChild(i)}))}function Et(t){return`__${t}${Math.floor(1e6*Math.random())}`}const $t="https://www.google.com/recaptcha/enterprise.js?render=",At="recaptcha-enterprise";class Ot{constructor(t){this.type=At,this.auth=Rt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{It(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new Ct(i);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function i(e,n,i){const s=window.grecaptcha;St(s)?s.enterprise.ready((()=>{try{s.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((t=>{i(t)}))}catch(r){i(r)}})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,s)=>{n(this.auth).then((n=>{if(!e&&St(window.grecaptcha))i(n,t,s);else{if("undefined"===typeof window)return void s(new Error("RecaptchaVerifier is only supported in browser"));xt($t+n).then((()=>{i(n,t,s)})).catch((t=>{s(t)}))}})).catch((t=>{s(t)}))}))}}async function Pt(t,e,n,i=!1){const s=new Ot(t);let r;try{r=await s.verify(n)}catch(a){r=await s.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{const i=t(e);n(i)}catch(s){i(s)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,e,n,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nt(this),this.idTokenSubscription=new Nt(this),this.beforeStateQueue=new Dt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=st(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await lt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==r||!(null===o||void 0===o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(r){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(r)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Y(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=C()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,i.m9)(t):null;return e&&y(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(st(t))}))}async initializeRecaptchaConfig(){const t=await It(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new Ct(t);if(null==this.tenantId?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled){const t=new Ot(this);t.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&st(t)||this._popupRedirectResolver;y(e,this,"argument-error"),this.redirectPersistenceManager=await lt.create(this,[st(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const s="function"===typeof e?e:e.next.bind(e),r=this._isInitialized?Promise.resolve():this._initializationPromise;return y(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"===typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=kt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&d(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Rt(t){return(0,i.m9)(t)}class Nt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,i.ne)((t=>this.observer=t))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,e){const n=(0,s._getProvider)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),s=n.getOptions();if((0,i.vZ)(s,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const r=n.initialize({options:e});return r}function Bt(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(st);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null===e||void 0===e?void 0:e.popupRedirectResolver)}function Vt(t,e,n){const i=Rt(t);y(i._canInitEmulator,i,"emulator-config-failed"),y(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(null===n||void 0===n?void 0:n.disableWarnings),r=Ft(e),{host:o,port:a}=jt(e),l=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Ut()}function Ft(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jt(t){const e=Ft(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const t=s[1];return{host:t,port:Zt(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:Zt(e)}}}function Zt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ut(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return b("not implemented")}_getIdTokenResponse(t){return b("not implemented")}_linkToIdToken(t,e){return b("not implemented")}_getReauthenticationResolver(t){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ht(t,e){return P(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Wt(t,e){return L(t,"POST","/v1/accounts:signInWithPassword",O(t,e))}async function qt(t,e){return P(t,"POST","/v1/accounts:sendOobCode",O(t,e))}async function Kt(t,e){return qt(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Yt(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",O(t,e))}async function Gt(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",O(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends zt{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Xt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Xt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await Pt(t,n,"signInWithPassword");return Wt(t,e)}return Wt(t,n).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await Pt(t,n,"signInWithPassword");return Wt(t,e)}return Promise.reject(e)}));case"emailLink":return Yt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Ht(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Gt(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(t,e){return L(t,"POST","/v1/accounts:signInWithIdp",O(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="http://localhost";class te extends zt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new te(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,s=r(e,["providerId","signInMethod"]);if(!n||!i)return null;const o=new te(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Jt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Jt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Jt(t,e)}buildRequest(){const t={requestUri:Qt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,i.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",O(t,e))}async function ne(t,e){return L(t,"POST","/v1/accounts:signInWithPhoneNumber",O(t,e))}async function ie(t,e){const n=await L(t,"POST","/v1/accounts:signInWithPhoneNumber",O(t,e));if(n.temporaryProof)throw M(t,"account-exists-with-different-credential",n);return n}const se={["USER_NOT_FOUND"]:"user-not-found"};async function re(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return L(t,"POST","/v1/accounts:signInWithPhoneNumber",O(t,n),se)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends zt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new oe({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new oe({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return ne(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return ie(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return re(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:s}=t;return n||e||i||s?new oe({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function le(t){const e=(0,i.zd)((0,i.pd)(t))["link"],n=e?(0,i.zd)((0,i.pd)(e))["deep_link_id"]:null,s=(0,i.zd)((0,i.pd)(t))["deep_link_id"],r=s?(0,i.zd)((0,i.pd)(s))["link"]:null;return r||s||n||e||t}class ce{constructor(t){var e,n,s,r,o,a;const l=(0,i.zd)((0,i.pd)(t)),c=null!==(e=l["apiKey"])&&void 0!==e?e:null,u=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=ae(null!==(s=l["mode"])&&void 0!==s?s:null);y(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(r=l["continueUrl"])&&void 0!==r?r:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=le(t);try{return new ce(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(){this.providerId=ue.PROVIDER_ID}static credential(t,e){return Xt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ce.parseLink(e);return y(n,"argument-error"),Xt._fromEmailAndCode(t,n.code,n.tenantId)}}ue.PROVIDER_ID="password",ue.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ue.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends he{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe extends de{constructor(){super("facebook.com")}static credential(t){return te._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return pe.credentialFromTaggedObject(t)}static credentialFromError(t){return pe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return pe.credential(t.oauthAccessToken)}catch(e){return null}}}pe.FACEBOOK_SIGN_IN_METHOD="facebook.com",pe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe extends de{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return te._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return fe.credentialFromTaggedObject(t)}static credentialFromError(t){return fe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return fe.credential(e,n)}catch(i){return null}}}fe.GOOGLE_SIGN_IN_METHOD="google.com",fe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me extends de{constructor(){super("github.com")}static credential(t){return te._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return me.credentialFromTaggedObject(t)}static credentialFromError(t){return me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return me.credential(t.oauthAccessToken)}catch(e){return null}}}me.GITHUB_SIGN_IN_METHOD="github.com",me.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge extends de{constructor(){super("twitter.com")}static credential(t,e){return te._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ge.credentialFromTaggedObject(t)}static credentialFromError(t){return ge.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return ge.credential(e,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ve(t,e){return L(t,"POST","/v1/accounts:signUp",O(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ge.TWITTER_SIGN_IN_METHOD="twitter.com",ge.PROVIDER_ID="twitter.com";class ye{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const s=await nt._fromIdTokenResponse(t,n,i),r=be(n),o=new ye({user:s,providerId:r,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=be(n);return new ye({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function be(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we extends i.ZR{constructor(t,e,n,i){var s;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,we.prototype),this.customData={appName:t.name,tenantId:null!==(s=t.tenantId)&&void 0!==s?s:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new we(t,e,n,i)}}function _e(t,e,n,i){const s="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return s.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw we._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(t,e,n=!1){const i=await H(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ye._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ie(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await H(t,_e(i,s,e,t),n);y(r.idToken,i,"internal-error");const o=U(r.idToken);y(o,i,"internal-error");const{sub:a}=o;return y(t.uid===a,i,"user-mismatch"),ye._forOperation(t,s,r)}catch(r){throw"auth/user-not-found"===(null===r||void 0===r?void 0:r.code)&&f(i,"user-mismatch"),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(t,e,n=!1){const i="signIn",s=await _e(t,i,e),r=await ye._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function Ce(t,e){return Se(Rt(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Te(t,e,n){var i;y((null===(i=n.url)||void 0===i?void 0:i.length)>0,t,"invalid-continue-uri"),y("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(y(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(y(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(t,e,n){var i;const s=Rt(t),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(null===(i=s._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const t=await Pt(s,r,"getOobCode",!0);n&&Te(s,t,n),await Kt(s,t)}else n&&Te(s,r,n),await Kt(s,r).catch((async t=>{if("auth/missing-recaptcha-token"!==t.code)return Promise.reject(t);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const t=await Pt(s,r,"getOobCode",!0);n&&Te(s,t,n),await Kt(s,t)}}))}async function Ee(t,e,n){var i;const s=Rt(t),r={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(i=s._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const t=await Pt(s,r,"signUpPassword");o=ve(s,t)}else o=ve(s,r).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const t=await Pt(s,r,"signUpPassword");return ve(s,t)}return Promise.reject(t)}));const a=await o.catch((t=>Promise.reject(t))),l=await ye._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function $e(t,e,n){return Ce((0,i.m9)(t),ue.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t,e,n,s){return(0,i.m9)(t).onIdTokenChanged(e,n,s)}function Oe(t,e,n){return(0,i.m9)(t).beforeAuthStateChanged(e,n)}function Pe(t,e,n,s){return(0,i.m9)(t).onAuthStateChanged(e,n,s)}function De(t){return(0,i.m9)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Le(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",O(t,e))}function Re(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",O(t,e))}function Ne(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",O(t,e))}function Me(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",O(t,e))}new WeakMap;const Be="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Be,"1"),this.storage.removeItem(Be),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){const t=(0,i.z$)();return ht(t)||vt(t)}const je=1e3,Ze=10;class Ue extends Ve{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fe()&&_t(),this.fallbackToPolling=wt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},s=this.storage.getItem(n);bt()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Ze):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),je)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ue.type="LOCAL";const ze=Ue;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends Ve{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}He.type="SESSION";const We=He;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Ke(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:s}=e.data,r=this.handlersMap[i];if(!(null===r||void 0===r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async t=>t(e.origin,s))),a=await qe(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ye(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke.receivers=[];class Ge{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const l=Ye("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(e.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function Je(t){Xe().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return"undefined"!==typeof Xe()["WorkerGlobalScope"]&&"function"===typeof Xe()["importScripts"]}async function tn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function en(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function nn(){return Qe()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="firebaseLocalStorageDb",rn=1,on="firebaseLocalStorage",an="fbase_key";class ln{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function cn(t,e){return t.transaction([on],e?"readwrite":"readonly").objectStore(on)}function un(){const t=indexedDB.deleteDatabase(sn);return new ln(t).toPromise()}function hn(){const t=indexedDB.open(sn,rn);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(on,{keyPath:an})}catch(i){n(i)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(on)?e(n):(n.close(),await un(),e(await hn()))}))}))}async function dn(t,e,n){const i=cn(t,!0).put({[an]:e,value:n});return new ln(i).toPromise()}async function pn(t,e){const n=cn(t,!1).get(e),i=await new ln(n).toPromise();return void 0===i?null:i.value}function fn(t,e){const n=cn(t,!0).delete(e);return new ln(n).toPromise()}const mn=800,gn=3;class vn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await hn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>gn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qe()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ke._getInstance(nn()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await tn(),!this.activeServiceWorker)return;this.sender=new Ge(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&en()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await hn();return await dn(t,Be,"1"),await fn(t,Be),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>dn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>pn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>fn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=cn(t,!1).getAll();return new ln(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:s}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),mn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}vn.type="LOCAL";const yn=vn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",O(t,e))}function wn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",O(t,e))}function _n(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",O(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Et("rcb"),new T(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kn="recaptcha";async function In(t,e,n){var i;const s=await n.verify();try{let r;if(y("string"===typeof s,t,"argument-error"),y(n.type===kn,t,"argument-error"),r="string"===typeof e?{phoneNumber:e}:e,"session"in r){const e=r.session;if("phoneNumber"in r){y("enroll"===e.type,t,"internal-error");const n=await Le(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{y("signin"===e.type,t,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;y(n,t,"missing-multi-factor-info");const o=await bn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await ee(t,{phoneNumber:r.phoneNumber,recaptchaToken:s});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sn{constructor(t){this.providerId=Sn.PROVIDER_ID,this.auth=Rt(t)}verifyPhoneNumber(t,e){return In(this.auth,t,(0,i.m9)(e))}static credential(t,e){return oe._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Sn.credentialFromTaggedObject(e)}static credentialFromError(t){return Sn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?oe._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cn(t,e){return e?st(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn.PROVIDER_ID="phone",Sn.PHONE_SIGN_IN_METHOD="phone";class Tn extends zt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Jt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Jt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Jt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function xn(t){return Se(t.auth,new Tn(t),t.bypassAuthState)}function En(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Ie(n,new Tn(t),t.bypassAuthState)}async function $n(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),ke(n,new Tn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t,e,n,i,s=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=t;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return xn;case"linkViaPopup":case"linkViaRedirect":return $n;case"reauthViaPopup":case"reauthViaRedirect":return En;default:f(this.auth,"internal-error")}}resolve(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new T(2e3,1e4);class Pn extends An{constructor(t,e,n,i,s){super(t,e,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return y(t,this.auth,"internal-error"),t}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const t=Ye();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,On.get())};t()}}Pn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dn="pendingRedirect",Ln=new Map;class Rn extends An{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Ln.get(this.auth._key());if(!t){try{const e=await Nn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Ln.set(this.auth._key(),t)}return this.bypassAuthState||Ln.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Nn(t,e){const n=Vn(e),i=Bn(t);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}function Mn(t,e){Ln.set(t._key(),e)}function Bn(t){return st(t._redirectPersistence)}function Vn(t){return at(Dn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(t,e,n=!1){const i=Rt(t),s=Cn(i,e),r=new Rn(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jn=6e5;class Zn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Hn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!zn(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(m(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=jn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Un(t))}saveEventToCache(t){this.cachedEventUids.add(Un(t)),this.lastProcessedEventTime=Date.now()}}function Un(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function zn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Hn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(t,e={}){return P(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kn=/^https?/;async function Yn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wn(t);for(const i of e)try{if(Gn(i))return}catch(n){}f(t,"unauthorized-domain")}function Gn(t){const e=_(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return""===s.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!Kn.test(n))return!1;if(qn.test(t))return i===t;const s=t.replace(/\./g,"\\."),r=new RegExp("^(.+\\."+s+"|"+s+")$","i");return r.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new T(3e4,6e4);function Jn(){const t=Xe().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Qn(t){return new Promise(((e,n)=>{var i,s,r;function o(){Jn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jn(),n(m(t,"network-request-failed"))},timeout:Xn.get()})}if(null===(s=null===(i=Xe().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)e(gapi.iframes.getContext());else{if(!(null===(r=Xe().gapi)||void 0===r?void 0:r.load)){const e=Et("iframefcb");return Xe()[e]=()=>{gapi.load?o():n(m(t,"network-request-failed"))},xt(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw ti=null,t}))}let ti=null;function ei(t){return ti=ti||Qn(t),ti}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new T(5e3,15e3),ii="__/auth/iframe",si="emulator/auth/iframe",ri={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ai(t){const e=t.config;y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?x(e,si):`https://${t.config.authDomain}/${ii}`,r={apiKey:e.apiKey,appName:t.name,v:s.SDK_VERSION},o=oi.get(t.config.apiHost);o&&(r.eid=o);const a=t._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}async function li(t){const e=await ei(t),n=Xe().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:ai(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ri,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const s=m(t,"network-request-failed"),r=Xe().setTimeout((()=>{i(s)}),ni.get());function o(){Xe().clearTimeout(r),n(e)}e.ping(o).then(o,(()=>{i(s)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ui=500,hi=600,di="_blank",pi="http://localhost";class fi{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function mi(t,e,n,s=ui,r=hi){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c=Object.assign(Object.assign({},ci),{width:s.toString(),height:r.toString(),top:o,left:a}),u=(0,i.z$)().toLowerCase();n&&(l=dt(u)?di:n),ut(u)&&(e=e||pi,c.scrollbars="yes");const h=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(yt(u)&&"_self"!==l)return gi(e||"",l),new fi(null);const d=window.open(e||"",l,h);y(d,t,"popup-blocked");try{d.focus()}catch(p){}return new fi(d)}function gi(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="__/auth/handler",yi="emulator/auth/handler",bi=encodeURIComponent("fac");async function wi(t,e,n,r,o,a){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:s.SDK_VERSION,eventId:o};if(e instanceof he){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",(0,i.xb)(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))l[t]=e}if(e instanceof de){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(l.scopes=t.join(","))}t.tenantId&&(l.tid=t.tenantId);const c=l;for(const i of Object.keys(c))void 0===c[i]&&delete c[i];const u=await t._getAppCheckToken(),h=u?`#${bi}=${encodeURIComponent(u)}`:"";return`${_i(t)}?${(0,i.xO)(c).slice(1)}${h}`}function _i({config:t}){return t.emulator?x(t,yi):`https://${t.authDomain}/${vi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="webStorageSupport";class Ii{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=We,this._completeRedirectFn=Fn,this._overrideRedirectResult=Mn}async _openPopup(t,e,n,i){var s;w(null===(s=this.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");const r=await wi(t,e,n,_(),i);return mi(t,r,Ye())}async _openRedirect(t,e,n,i){await this._originValidation(t);const s=await wi(t,e,n,_(),i);return Je(s),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await li(t),n=new Zn(t);return e.register("authEvent",(e=>{y(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const i=n.onEvent(e.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(ki,{type:ki},(n=>{var i;const s=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[ki];void 0!==s&&e(!!s),f(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Yn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return wt()||ht()||vt()}}const Si=Ii;class Ci{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return b("unexpected MultiFactorSessionType")}}}class Ti extends Ci{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Ti(t)}_finalizeEnroll(t,e,n){return Re(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return wn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class xi{constructor(){}static assertion(t){return Ti._fromCredential(t)}}xi.FACTOR_ID="phone";class Ei{static assertionForEnrollment(t,e){return $i._fromSecret(t,e)}static assertionForSignIn(t,e){return $i._fromEnrollmentId(t,e)}static async generateSecret(t){const e=t;y("undefined"!==typeof e.auth,"internal-error");const n=await Ne(e.auth,{idToken:e.credential,totpEnrollmentInfo:{}});return Ai._fromStartTotpMfaEnrollmentResponse(n,e.auth)}}Ei.FACTOR_ID="totp";class $i extends Ci{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new $i(e,void 0,t)}static _fromEnrollmentId(t,e){return new $i(e,t)}async _finalizeEnroll(t,e,n){return y("undefined"!==typeof this.secret,t,"argument-error"),Me(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){y(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return _n(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Ai{constructor(t,e,n,i,s,r,o){this.sessionInfo=r,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Ai(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let i=!1;return(Oi(t)||Oi(e))&&(i=!0),i&&(Oi(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Oi(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Oi(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var Pi="@firebase/auth",Di="0.23.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Li{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ni(t){(0,s._registerComponent)(new a.wA("auth",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),y(!(null===a||void 0===a?void 0:a.includes(":")),"argument-error",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kt(t)},c=new Lt(i,s,r,l);return Bt(c,n),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const i=t.getProvider("auth-internal");i.initialize()}))),(0,s._registerComponent)(new a.wA("auth-internal",(t=>{const e=Rt(t.getProvider("auth").getImmediate());return(t=>new Li(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(Pi,Di,Ri(t)),(0,s.registerVersion)(Pi,Di,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=300,Bi=(0,i.Pz)("authIdTokenMaxAge")||Mi;let Vi=null;const Fi=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Bi)return;const s=null===n||void 0===n?void 0:n.token;Vi!==s&&(Vi=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ji(t=(0,s.getApp)()){const e=(0,s._getProvider)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Mt(t,{popupRedirectResolver:Si,persistence:[yn,ze,We]}),r=(0,i.Pz)("authTokenSyncURL");if(r){const t=Fi(r);Oe(n,t,(()=>t(n.currentUser))),Ae(n,(e=>t(e)))}const o=(0,i.q4)("auth");return o&&Vt(n,`http://${o}`),n}Ni("Browser")},770:function(t,e,n){"use strict";var i=n(4444),s=n(8463),r=n(2238),o=n(3333);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t,e){this._delegate=t,this.firebase=e,(0,r._addComponent)(t,new s.wA("app-compat",(()=>this),"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((t=>{this._delegate.checkDestroyed(),t()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,r.deleteApp)(this._delegate))))}_getService(t,e=r._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(t);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:e})}_removeServiceInstance(t,e=r._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){(0,r._addComponent)(this._delegate,t)}_addOrOverwriteComponent(t){(0,r._addOrOverwriteComponent)(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},c=new i.LL("app-compat","Firebase",l);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(t){const e={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:r.registerVersion,setLogLevel:r.setLogLevel,onLog:r.onLog,apps:null,SDK_VERSION:r.SDK_VERSION,INTERNAL:{registerComponent:u,removeApp:s,useAsService:h,modularAPIs:r}};function s(t){delete e[t]}function o(t){if(t=t||r._DEFAULT_ENTRY_NAME,!(0,i.r3)(e,t))throw c.create("no-app",{appName:t});return e[t]}function a(s,o={}){const a=r.initializeApp(s,o);if((0,i.r3)(e,a.name))return e[a.name];const l=new t(a,n);return e[a.name]=l,l}function l(){return Object.keys(e).map((t=>e[t]))}function u(e){const s=e.name,a=s.replace("-compat","");if(r._registerComponent(e)&&"PUBLIC"===e.type){const r=(t=o())=>{if("function"!==typeof t[a])throw c.create("invalid-app-argument",{appName:s});return t[a]()};void 0!==e.serviceProps&&(0,i.ZB)(r,e.serviceProps),n[a]=r,t.prototype[a]=function(...t){const n=this._getService.bind(this,s);return n.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[a]:null}function h(t,e){if("serverAuth"===e)return null;const n=e;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:l}),o["App"]=t,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const t=u(a);function e(e){(0,i.ZB)(t,e)}return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:h,extendNamespace:e,createSubscribe:i.ne,ErrorFactory:i.LL,deepExtend:i.ZB}),t}const d=h(),p=new o.Yd("@firebase/app-compat"),f="@firebase/app-compat",m="0.2.8";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(t){(0,r.registerVersion)(f,m,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,i.jU)()&&void 0!==self.firebase){p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g();var y="firebase",b="9.20.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
v.registerVersion(y,b,"app-compat")},7350:function(t,e,n){"use strict";n.d(e,{hJ:function(){return an},oe:function(){return Bn},JU:function(){return ln},QT:function(){return Rn},PL:function(){return Nn},ad:function(){return en},pl:function(){return Mn}});var i=n(2238),s=n(8463),r=n(3333),o=n(4444);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}a.UNAUTHENTICATED=new a(null),a.GOOGLE_CREDENTIALS=new a("google-credentials-uid"),a.FIRST_PARTY=new a("first-party-uid"),a.MOCK_USER=new a("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.20.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c=new r.Yd("@firebase/firestore");function u(t,...e){if(c.logLevel<=r["in"].DEBUG){const n=e.map(p);c.debug(`Firestore (${l}): ${t}`,...n)}}function h(t,...e){if(c.logLevel<=r["in"].ERROR){const n=e.map(p);c.error(`Firestore (${l}): ${t}`,...n)}}function d(t,...e){if(c.logLevel<=r["in"].WARN){const n=e.map(p);c.warn(`Firestore (${l}): ${t}`,...n)}}function p(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw h(e),new Error(e)}function m(t,e){t||f()}function g(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v="ok",y="cancelled",b="unknown",w="invalid-argument",_="deadline-exceeded",k="not-found",I="permission-denied",S="unauthenticated",C="resource-exhausted",T="failed-precondition",x="aborted",E="out-of-range",$="unimplemented",A="internal",O="unavailable";class P extends o.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class L{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(a.UNAUTHENTICATED)))}shutdown(){}}class R{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class N{constructor(t){this.auth=null,t.onInit((t=>{this.auth=t}))}getToken(){return this.auth?this.auth.getToken().then((t=>t?(m("string"==typeof t.accessToken),new D(t.accessToken,new a(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class M{constructor(t,e,n){this.t=t,this.i=e,this.o=n,this.type="FirstParty",this.user=a.FIRST_PARTY,this.u=new Map}h(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const t=this.h();return t&&this.u.set("Authorization",t),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class B{constructor(t,e,n){this.t=t,this.i=e,this.o=n}getToken(){return Promise.resolve(new M(this.t,this.i,this.o))}start(t,e){t.enqueueRetryable((()=>e(a.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class V{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F{constructor(t){this.l=t,this.appCheck=null,t.onInit((t=>{this.appCheck=t}))}getToken(){return this.appCheck?this.appCheck.getToken().then((t=>t?(m("string"==typeof t.token),new V(t.token)):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Z{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Z("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Z&&t.projectId===this.projectId&&t.database===this.database}}class U{constructor(t,e,n){void 0===e?e=0:e>t.length&&f(),void 0===n?n=t.length-e:n>t.length-e&&f(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===U.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof U?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class z extends U{construct(t,e,n){return new z(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new P(w,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new z(e)}static emptyPath(){return new z([])}}const H=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends U{construct(t,e,n){return new W(t,e,n)}static isValidIdentifier(t){return H.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new W(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new P(w,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new P(w,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new P(w,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new P(w,"Unterminated ` in path: "+t);return new W(e)}static emptyPath(){return new W([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.path=t}static fromPath(t){return new q(z.fromString(t))}static fromName(t){return new q(z.fromString(t).popFirst(5))}static empty(){return new q(z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===z.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return z.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new z(t.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,e,n){if(!n)throw new P(w,`Function ${t}() cannot be called with an empty ${e}.`)}function Y(t){if(!q.isDocumentKey(t))throw new P(w,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function G(t){if(q.isDocumentKey(t))throw new P(w,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function X(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":f()}function J(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(w,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=X(t);throw new P(w,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Q=null;function tt(){return null===Q?Q=268435456+Math.round(2147483648*Math.random()):Q++,"0x"+Q.toString(16)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function et(t){return null==t}function nt(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st,rt;function ot(t){if(void 0===t)return h("RPC_ERROR","HTTP error has no status"),b;switch(t){case 200:return v;case 400:return T;case 401:return S;case 403:return I;case 404:return k;case 409:return x;case 416:return E;case 429:return C;case 499:return y;case 500:return b;case 501:return $;case 503:return O;case 504:return _;default:return t>=200&&t<300?v:t>=400&&t<500?T:t>=500&&t<600?A:b}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(rt=st||(st={}))[rt.OK=0]="OK",rt[rt.CANCELLED=1]="CANCELLED",rt[rt.UNKNOWN=2]="UNKNOWN",rt[rt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",rt[rt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",rt[rt.NOT_FOUND=5]="NOT_FOUND",rt[rt.ALREADY_EXISTS=6]="ALREADY_EXISTS",rt[rt.PERMISSION_DENIED=7]="PERMISSION_DENIED",rt[rt.UNAUTHENTICATED=16]="UNAUTHENTICATED",rt[rt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",rt[rt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",rt[rt.ABORTED=10]="ABORTED",rt[rt.OUT_OF_RANGE=11]="OUT_OF_RANGE",rt[rt.UNIMPLEMENTED=12]="UNIMPLEMENTED",rt[rt.INTERNAL=13]="INTERNAL",rt[rt.UNAVAILABLE=14]="UNAVAILABLE",rt[rt.DATA_LOSS=15]="DATA_LOSS";class at extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.m=e+"://"+t.host,this.p="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get g(){return!1}v(t,e,n,i,s){const r=tt(),o=this.A(t,e);u("RestConnection",`Sending RPC '${t}' ${r}:`,o,n);const a={};return this.I(a,i,s),this.T(t,o,a,n).then((e=>(u("RestConnection",`Received RPC '${t}' ${r}: `,e),e)),(e=>{throw d("RestConnection",`RPC '${t}' ${r} failed with error: `,e,"url: ",o,"request:",n),e}))}R(t,e,n,i,s,r){return this.v(t,e,n,i,s)}I(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}A(t,e){const n=it[t];return`${this.m}/v1/${e}:${n}`}}{constructor(t,e){super(t),this.P=e}V(t,e){throw new Error("Not supported by FetchConnection")}async T(t,e,n,i){var s;const r=JSON.stringify(i);let o;try{o=await this.P(e,{method:"POST",headers:n,body:r})}catch(t){const e=t;throw new P(ot(e.status),"Request failed with error: "+e.statusText)}if(!o.ok){let t=await o.json();Array.isArray(t)&&(t=t[0]);const e=null===(s=null==t?void 0:t.error)||void 0===s?void 0:s.message;throw new P(ot(o.status),`Request failed with error: ${null!=e?e:o.statusText}`)}return o.json()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lt(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{static N(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=lt(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function ut(t,e){return t<e?-1:t>e?1:0}function ht(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ft("Invalid base64 string: "+t):t}}(t);return new mt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new mt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ut(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const gt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vt(t){if(m(!!t),"string"==typeof t){let e=0;const n=gt.exec(t);if(m(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:yt(t.seconds),nanos:yt(t.nanos)}}function yt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function bt(t){return"string"==typeof t?mt.fromBase64String(t):mt.fromUint8Array(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new P(w,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new P(w,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new P(w,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new P(w,"Timestamp seconds out of range: "+t)}static now(){return wt.fromMillis(Date.now())}static fromDate(t){return wt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new wt(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ut(this.nanoseconds,t.nanoseconds):ut(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function kt(t){const e=t.mapValue.fields.__previous_value__;return _t(e)?kt(e):e}function It(t){const e=vt(t.mapValue.fields.__local_write_time__.timestampValue);return new wt(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St={fields:{__type__:{stringValue:"__max__"}}};function Ct(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_t(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?9007199254740991:10:f()}function Tt(t,e){if(t===e)return!0;const n=Ct(t);if(n!==Ct(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return It(t).isEqual(It(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=vt(t.timestampValue),i=vt(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return bt(t.bytesValue).isEqual(bt(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return yt(t.geoPointValue.latitude)===yt(e.geoPointValue.latitude)&&yt(t.geoPointValue.longitude)===yt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return yt(t.integerValue)===yt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=yt(t.doubleValue),i=yt(e.doubleValue);return n===i?nt(n)===nt(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return ht(t.arrayValue.values||[],e.arrayValue.values||[],Tt);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(dt(n)!==dt(i))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===i[s]||!Tt(n[s],i[s])))return!1;return!0}(t,e);default:return f()}}function xt(t,e){return void 0!==(t.values||[]).find((t=>Tt(t,e)))}function Et(t,e){if(t===e)return 0;const n=Ct(t),i=Ct(e);if(n!==i)return ut(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ut(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=yt(t.integerValue||t.doubleValue),i=yt(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return $t(t.timestampValue,e.timestampValue);case 4:return $t(It(t),It(e));case 5:return ut(t.stringValue,e.stringValue);case 6:return function(t,e){const n=bt(t),i=bt(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let s=0;s<n.length&&s<i.length;s++){const t=ut(n[s],i[s]);if(0!==t)return t}return ut(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ut(yt(t.latitude),yt(e.latitude));return 0!==n?n:ut(yt(t.longitude),yt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const t=Et(n[s],i[s]);if(t)return t}return ut(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===St&&e===St)return 0;if(t===St)return 1;if(e===St)return-1;const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let o=0;o<i.length&&o<r.length;++o){const t=ut(i[o],r[o]);if(0!==t)return t;const e=Et(n[i[o]],s[r[o]]);if(0!==e)return e}return ut(i.length,r.length)}(t.mapValue,e.mapValue);default:throw f()}}function $t(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ut(t,e);const n=vt(t),i=vt(e),s=ut(n.seconds,i.seconds);return 0!==s?s:ut(n.nanos,i.nanos)}function At(t){return!!t&&"arrayValue"in t}function Ot(t){return!!t&&"nullValue"in t}function Pt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Dt(t){return!!t&&"mapValue"in t}function Lt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return pt(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Lt(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Lt(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Rt{constructor(t,e){this.position=t,this.inclusive=e}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt{}class Mt extends Nt{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Vt(t,e,n):"array-contains"===e?new Ut(t,n):"in"===e?new zt(t,n):"not-in"===e?new Ht(t,n):"array-contains-any"===e?new Wt(t,n):new Mt(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Ft(t,n):new jt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Et(e,this.value)):null!==e&&Ct(this.value)===Ct(e)&&this.matchesComparison(Et(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return f()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Bt extends Nt{constructor(t,e){super(),this.filters=t,this.op=e,this.F=null}static create(t,e){return new Bt(t,e)}matches(t){return"and"===this.op?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.F||(this.F=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.F}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.S((t=>t.isInequality()));return null!==t?t.field:null}S(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}class Vt extends Mt{constructor(t,e,n){super(t,e,n),this.key=q.fromName(n.referenceValue)}matches(t){const e=q.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ft extends Mt{constructor(t,e){super(t,"in",e),this.keys=Zt("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class jt extends Mt{constructor(t,e){super(t,"not-in",e),this.keys=Zt("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Zt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>q.fromName(t.referenceValue)))}class Ut extends Mt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return At(e)&&xt(e.arrayValue,this.value)}}class zt extends Mt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&xt(this.value.arrayValue,e)}}class Ht extends Mt{constructor(t,e){super(t,"not-in",e)}matches(t){if(xt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!xt(this.value.arrayValue,e)}}class Wt extends Mt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!At(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>xt(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,e="asc"){this.field=t,this.dir=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Kt(t)}static min(){return new Kt(new wt(0,0))}static max(){return new Kt(new wt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t,e){this.comparator=t,this.root=e||Xt.EMPTY}insert(t,e){return new Yt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Xt.BLACK,null,null))}remove(t){return new Yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Gt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Gt(this.root,t,this.comparator,!1)}getReverseIterator(){return new Gt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Gt(this.root,t,this.comparator,!0)}}class Gt{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xt{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:Xt.RED,this.left=null!=i?i:Xt.EMPTY,this.right=null!=s?s:Xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,s){return new Xt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Xt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw f();if(this.right.isRed())throw f();const t=this.left.check();if(t!==this.right.check())throw f();return t+(this.isRed()?0:1)}}Xt.EMPTY=null,Xt.RED=!0,Xt.BLACK=!1,Xt.EMPTY=new class{constructor(){this.size=0}get key(){throw f()}get value(){throw f()}get color(){throw f()}get left(){throw f()}get right(){throw f()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Xt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt{constructor(t){this.comparator=t,this.data=new Yt(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Qt(this.data.getIterator())}getIteratorFrom(t){return new Qt(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Jt))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Jt(this.comparator);return e.data=t,e}}class Qt{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t){this.fields=t,t.sort(W.comparator)}static empty(){return new te([])}unionWith(t){let e=new Jt(W.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new te(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ht(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t){this.value=t}static empty(){return new ee({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Dt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Lt(e)}setAll(t){let e=W.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=Lt(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());Dt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Tt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Dt(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){pt(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new ee(Lt(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,e,n,i,s,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=s,this.data=r,this.documentState=o}static newInvalidDocument(t){return new ne(t,0,Kt.min(),Kt.min(),Kt.min(),ee.empty(),0)}static newFoundDocument(t,e,n,i){return new ne(t,1,e,Kt.min(),n,i,0)}static newNoDocument(t,e){return new ne(t,2,e,Kt.min(),Kt.min(),ee.empty(),0)}static newUnknownDocument(t,e){return new ne(t,3,e,Kt.min(),Kt.min(),ee.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Kt.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ee.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Kt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ne&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.q=null}}function se(t,e=null,n=[],i=[],s=null,r=null,o=null){return new ie(t,e,n,i,s,r,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.O=null,this.k=null,this.startAt,this.endAt}}function oe(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ae(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function le(t){const e=g(t);if(null===e.O){e.O=[];const t=ae(e),n=oe(e);if(null!==t&&null===n)t.isKeyField()||e.O.push(new qt(t)),e.O.push(new qt(W.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.O.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.O.push(new qt(W.keyField(),t))}}}return e.O}function ce(t){const e=g(t);if(!e.k)if("F"===e.limitType)e.k=se(e.path,e.collectionGroup,le(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of le(e)){const e="desc"===s.dir?"asc":"desc";t.push(new qt(s.field,e))}const n=e.endAt?new Rt(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Rt(e.startAt.position,e.startAt.inclusive):null;e.k=se(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.k}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ue(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!nt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?function(t){return{integerValue:""+t}}(e):function(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nt(e)?"-0":e}}(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this._=void 0}}class de extends he{}class pe extends he{constructor(t){super(),this.elements=t}}class fe extends he{constructor(t){super(),this.elements=t}}class me extends he{constructor(t,e){super(),this.serializer=t,this.C=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ge}static exists(t){return new ge(void 0,t)}static updateTime(t){return new ge(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}class ve{}class ye extends ve{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class be extends ve{constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class we extends ve{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _e extends ve{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Ie=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),Se=(()=>{const t={and:"AND",or:"OR"};return t})();class Ce{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Te(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xe(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ee(t,e){return Te(t,e.toTimestamp())}function $e(t){return m(!!t),Kt.fromTimestamp(function(t){const e=vt(t);return new wt(e.seconds,e.nanos)}(t))}function Ae(t,e){return function(t){return new z(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Oe(t,e){return Ae(t.databaseId,e.path)}function Pe(t,e){const n=function(t){const e=z.fromString(t);return m(He(e)),e}(e);if(n.get(1)!==t.databaseId.projectId)throw new P(w,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(w,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q((m((i=n).length>4&&"documents"===i.get(4)),i.popFirst(5)));var i}function De(t,e){return Ae(t.databaseId,e)}function Le(t){return new z(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Re(t,e,n){return{name:Oe(t,e),fields:n.value.mapValue.fields}}function Ne(t,e){return"found"in e?function(t,e){m(!!e.found),e.found.name,e.found.updateTime;const n=Pe(t,e.found.name),i=$e(e.found.updateTime),s=e.found.createTime?$e(e.found.createTime):Kt.min(),r=new ee({mapValue:{fields:e.found.fields}});return ne.newFoundDocument(n,i,s,r)}(t,e):"missing"in e?function(t,e){m(!!e.missing),m(!!e.readTime);const n=Pe(t,e.missing),i=$e(e.readTime);return ne.newNoDocument(n,i)}(t,e):f()}function Me(t,e){let n;if(e instanceof ye)n={update:Re(t,e.key,e.value)};else if(e instanceof we)n={delete:Oe(t,e.key)};else if(e instanceof be)n={update:Re(t,e.key,e.data),updateMask:ze(e.fieldMask)};else{if(!(e instanceof _e))return f();n={verify:Oe(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof de)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof pe)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof fe)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof me)return{fieldPath:e.field.canonicalString(),increment:n.C};throw f()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ee(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:f()}(t,e.precondition)),n}function Be(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=De(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=De(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(t){if(0!==t.length)return Ue(Bt.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ze(t.field),direction:Ve(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.useProto3Json||et(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Ve(t){return ke[t]}function Fe(t){return Ie[t]}function je(t){return Se[t]}function Ze(t){return{fieldPath:t.canonicalString()}}function Ue(t){return t instanceof Mt?function(t){if("=="===t.op){if(Pt(t.value))return{unaryFilter:{field:Ze(t.field),op:"IS_NAN"}};if(Ot(t.value))return{unaryFilter:{field:Ze(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Pt(t.value))return{unaryFilter:{field:Ze(t.field),op:"IS_NOT_NAN"}};if(Ot(t.value))return{unaryFilter:{field:Ze(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ze(t.field),op:Fe(t.op),value:t.value}}}(t):t instanceof Bt?function(t){const e=t.getFilters().map((t=>Ue(t)));return 1===e.length?e[0]:{compositeFilter:{op:je(t.op),filters:e}}}(t):f()}function ze(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function He(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t){return new Ce(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qe extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.J=!1}X(){if(this.J)throw new P(T,"The client has already been terminated.")}v(t,e,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.v(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===S&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new P(b,t.toString())}))}R(t,e,n,i){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.R(t,e,n,s,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===S&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new P(b,t.toString())}))}terminate(){this.J=!0}}async function Ke(t,e){const n=g(t),i=Le(n.serializer)+"/documents",s={writes:e.map((t=>Me(n.serializer,t)))};await n.v("Commit",i,s)}async function Ye(t,e){const n=g(t),i=Le(n.serializer)+"/documents",s={documents:e.map((t=>Oe(n.serializer,t)))},r=await n.R("BatchGetDocuments",i,s,e.length),o=new Map;r.forEach((t=>{const e=Ne(n.serializer,t);o.set(e.key.toString(),e)}));const a=[];return e.forEach((t=>{const e=o.get(t.toString());m(!!e),a.push(e)})),a}async function Ge(t,e){const n=g(t),i=Be(n.serializer,ce(e));return(await n.R("RunQuery",i.parent,{structuredQuery:i.structuredQuery})).filter((t=>!!t.document)).map((t=>function(t,e,n){const i=Pe(t,e.name),s=$e(e.updateTime),r=e.createTime?$e(e.createTime):Kt.min(),o=new ee({mapValue:{fields:e.fields}}),a=ne.newFoundDocument(i,s,r,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}(n.serializer,t.document,void 0)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xe=new Map;function Je(t){if(t._terminated)throw new P(T,"The client has already been terminated.");if(!Xe.has(t)){u("ComponentProvider","Initializing Datastore");const r=function(t){return new at(t,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",i=t._persistenceKey,s=t._freezeSettings(),new j(e,n,i,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),o=We(t._databaseId),a=function(t,e,n,i){return new qe(t,e,n,i)}(t._authCredentials,t._appCheckCredentials,r,o);Xe.set(t,a)}var e,n,i,s;
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return Xe.get(t)}class Qe{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new P(w,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new P(w,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new P(w,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qe({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(T,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new P(T,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qe(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new L;switch(t.type){case"firstParty":return new B(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new P(w,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Xe.get(t);e&&(u("ComponentProvider","Removing Datastore"),Xe.delete(t),e.terminate())}(this),Promise.resolve()}}function en(t,e){const n="object"==typeof t?t:(0,i.getApp)(),s="string"==typeof t?t:e||"(default)",r=(0,i._getProvider)(n,"firestore/lite").getImmediate({identifier:s});if(!r._initialized){const t=(0,o.P0)("firestore");t&&nn(r,...t)}return r}function nn(t,e,n,i={}){var s;const r=(t=J(t,tn))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&d("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=a.MOCK_USER;else{e=(0,o.Sg)(i.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new P(w,"mockUserToken must contain 'sub' or 'user_id' field!");n=new a(r)}t._authCredentials=new R(new D(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sn{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new on(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new sn(this.firestore,t,this._key)}}class rn{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new rn(this.firestore,t,this._query)}}class on extends rn{constructor(t,e,n){super(t,e,new re(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new sn(this.firestore,null,new q(t))}withConverter(t){return new on(this.firestore,t,this._path)}}function an(t,e,...n){if(t=(0,o.m9)(t),K("collection","path",e),t instanceof tn){const i=z.fromString(e,...n);return G(i),new on(t,null,i)}{if(!(t instanceof sn||t instanceof on))throw new P(w,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(z.fromString(e,...n));return G(i),new on(t.firestore,null,i)}}function ln(t,e,...n){if(t=(0,o.m9)(t),1===arguments.length&&(e=ct.N()),K("doc","path",e),t instanceof tn){const i=z.fromString(e,...n);return Y(i),new sn(t,null,new q(i))}{if(!(t instanceof sn||t instanceof on))throw new P(w,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(z.fromString(e,...n));return Y(i),new sn(t.firestore,t instanceof on?t.converter:null,new q(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new cn(mt.fromBase64String(t))}catch(t){throw new P(w,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new cn(mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new P(w,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hn{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new P(w,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new P(w,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ut(this._lat,t._lat)||ut(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=/^__.*__$/;class fn{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new be(t,this.data,this.fieldMask,e,this.fieldTransforms):new ye(t,this.data,e,this.fieldTransforms)}}function mn(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw f()}}class gn{constructor(t,e,n,i,s,r){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===s&&this.tt(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get et(){return this.settings.et}nt(t){return new gn(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.nt({path:n,st:!1});return i.it(t),i}ot(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.nt({path:n,st:!1});return i.tt(),i}ut(t){return this.nt({path:void 0,st:!0})}ct(t){return xn(t,this.settings.methodName,this.settings.at||!1,this.path,this.settings.ht)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}tt(){if(this.path)for(let t=0;t<this.path.length;t++)this.it(this.path.get(t))}it(t){if(0===t.length)throw this.ct("Document fields must not be empty");if(mn(this.et)&&pn.test(t))throw this.ct('Document fields cannot begin and end with "__"')}}class vn{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||We(t)}lt(t,e,n,i=!1){return new gn({et:t,methodName:e,ht:n,path:W.emptyPath(),st:!1,at:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yn(t){const e=t._freezeSettings(),n=We(t._databaseId);return new vn(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bn(t,e,n,i,s,r={}){const o=t.lt(r.merge||r.mergeFields?2:0,e,n,s);In("Data must be an object, but it was:",o,i);const a=_n(i,o);let l,c;if(r.merge)l=new te(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const s=Sn(e,i,n);if(!o.contains(s))throw new P(w,`Field '${s}' is specified in your field mask but missing from your input data.`);En(t,s)||t.push(s)}l=new te(t),c=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=o.fieldTransforms;return new fn(new ee(a),l,c)}function wn(t,e){if(kn(t=(0,o.m9)(t)))return In("Unsupported field value:",e,t),_n(t,e);if(t instanceof hn)return function(t,e){if(!mn(e.et))throw e.ct(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ct(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.st&&4!==e.et)throw e.ct("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const s of t){let t=wn(s,e.ut(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,o.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ue(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=wt.fromDate(t);return{timestampValue:Te(e.serializer,n)}}if(t instanceof wt){const n=new wt(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Te(e.serializer,n)}}if(t instanceof dn)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof cn)return{bytesValue:xe(e.serializer,t._byteString)};if(t instanceof sn){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.ct(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ae(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ct(`Unsupported field value: ${X(t)}`)}(t,e)}function _n(t,e){const n={};return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pt(t,((t,i)=>{const s=wn(i,e.rt(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function kn(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof wt||t instanceof dn||t instanceof cn||t instanceof sn||t instanceof hn)}function In(t,e,n){if(!kn(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=X(n);throw"an object"===i?e.ct(t+" a custom object"):e.ct(t+" "+i)}}function Sn(t,e,n){if((e=(0,o.m9)(e))instanceof un)return e._internalPath;if("string"==typeof e)return Tn(t,e);throw xn("Field path arguments must be of type string or ",t,!1,void 0,n)}const Cn=new RegExp("[~\\*/\\[\\]]");function Tn(t,e,n){if(e.search(Cn)>=0)throw xn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new un(...e.split("."))._internalPath}catch(i){throw xn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xn(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new P(w,a+t+l)}function En(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new sn(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new An(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Pn("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class An extends $n{data(){return super.data()}}class On{constructor(t,e){this._docs=e,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(t,e){this._docs.forEach(t,e)}}function Pn(t,e){return"string"==typeof e?Tn(t,e):e instanceof un?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dn(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class Ln extends class{convertValue(t,e="none"){switch(Ct(t)){case 0:return null;case 1:return t.booleanValue;case 2:return yt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(bt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw f()}}convertObject(t,e){const n={};return pt(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new dn(yt(t.latitude),yt(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=kt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(It(t));default:return null}}convertTimestamp(t){const e=vt(t);return new wt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=z.fromString(t);m(He(n));const i=new Z(n.get(1),n.get(3)),s=new q(n.popFirst(5));return i.isEqual(e)||h(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new cn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new sn(this.firestore,null,e)}}function Rn(t){const e=Je((t=J(t,sn)).firestore),n=new Ln(t.firestore);return Ye(e,[t._key]).then((e=>{m(1===e.length);const i=e[0];return new $n(t.firestore,n,t._key,i.isFoundDocument()?i:null,t.converter)}))}function Nn(t){!function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new P($,"limitToLast() queries require specifying at least one orderBy() clause")}((t=J(t,rn))._query);const e=Je(t.firestore),n=new Ln(t.firestore);return Ge(e,t._query).then((e=>{const i=e.map((e=>new An(t.firestore,n,e.key,e,t.converter)));return"L"===t._query.limitType&&i.reverse(),new On(t,i)}))}function Mn(t,e,n){const i=Dn((t=J(t,sn)).converter,e,n),s=bn(yn(t.firestore),"setDoc",t._key,i,null!==t.converter,n);return Ke(Je(t.firestore),[s.toMutation(t._key,ge.none())])}function Bn(t){return Ke(Je((t=J(t,sn)).firestore),[new we(t._key,ge.none())])}!function(t){l=t}(`${i.SDK_VERSION}_lite`),(0,i._registerComponent)(new s.wA("firestore/lite",((t,{instanceIdentifier:e,options:n})=>{const i=t.getProvider("app").getImmediate(),s=new tn(new N(t.getProvider("auth-internal")),new F(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new P(w,'"projectId" not provided in firebase.initializeApp.');return new Z(t.options.projectId,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,e),i);return n&&s._setSettings(n),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)("firestore-lite","3.10.1",""),(0,i.registerVersion)("firestore-lite","3.10.1","esm2017")},6650:function(t,e,n){"use strict";n.d(e,{Jt:function(){return ie},cF:function(){return re},iH:function(){return se},KV:function(){return ne}});var i=n(2238),s=n(4444),r=n(8463);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",l=12e4,c=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u extends s.ZR{constructor(t,e,n=0){super(p(t),`Firebase Storage: ${e} (${p(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,u.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return p(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var h,d;function p(t){return"storage/"+t}function f(){const t="An unknown error occurred, please check the error payload for server response.";return new u(h.UNKNOWN,t)}function m(t){return new u(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function g(t){return new u(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function v(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new u(h.UNAUTHENTICATED,t)}function y(){return new u(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function b(t){return new u(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function w(){return new u(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _(){return new u(h.CANCELED,"User canceled the upload/download.")}function k(t){return new u(h.INVALID_URL,"Invalid URL '"+t+"'.")}function I(t){return new u(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function S(){return new u(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function C(){return new u(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function T(){return new u(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function x(t){return new u(h.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function E(t){return new u(h.INVALID_ARGUMENT,t)}function $(){return new u(h.APP_DELETED,"The Firebase app was deleted.")}function A(t){return new u(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function O(t,e){return new u(h.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function P(t){throw new u(h.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(h||(h={}));class D{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=D.makeFromUrl(t,e)}catch(i){return new D(t,"")}if(""===n.path)return n;throw I(t)}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";function s(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const r="(/(.*))?$",a=new RegExp("^gs://"+i+r,"i"),l={bucket:1,path:3};function c(t){t.path_=decodeURIComponent(t.path)}const u="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),f={bucket:1,path:3},m=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",v=new RegExp(`^https?://${m}/${i}/${g}`,"i"),y={bucket:1,path:2},b=[{regex:a,indices:l,postModify:s},{regex:p,indices:f,postModify:c},{regex:v,indices:y,postModify:c}];for(let o=0;o<b.length;o++){const e=b[o],i=e.regex.exec(t);if(i){const t=i[e.indices.bucket];let s=i[e.indices.path];s||(s=""),n=new D(t,s),e.postModify(n);break}}if(null==n)throw k(t);return n}}class L{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return 2===a}let c=!1;function u(...t){c||(c=!0,e.apply(null,t))}function h(e){s=setTimeout((()=>{s=null,t(p,l())}),e)}function d(){r&&clearTimeout(r)}function p(t,...e){if(c)return void d();if(t)return d(),void u.call(null,t,...e);const n=l()||o;if(n)return d(),void u.call(null,t,...e);let s;i<64&&(i*=2),1===a?(a=2,s=0):s=1e3*(i+Math.random()),h(s)}let f=!1;function m(t){f||(f=!0,d(),c||(null!==s?(t||(a=2),clearTimeout(s),h(0)):t||(a=1)))}return h(0),r=setTimeout((()=>{o=!0,m(!0)}),n),m}function N(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){return void 0!==t}function B(t){return"object"===typeof t&&!Array.isArray(t)}function V(t){return"string"===typeof t||t instanceof String}function F(t){return j()&&t instanceof Blob}function j(){return"undefined"!==typeof Blob&&!(0,s.UG)()}function Z(t,e,n,i){if(i<e)throw E(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw E(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t,e,n){let i=e;return null==n&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function z(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(t,e){const n=t>=500&&t<600,i=[408,429],s=-1!==i.indexOf(t),r=-1!==e.indexOf(t);return n||s||r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(d||(d={}));class W{constructor(t,e,n,i,s,r,o,a,l,c,u,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=r,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new q(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===d.NO_ERROR,s=n.getStatus();if(!e||H(s,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===d.ABORT;return void t(!1,new q(!1,null,e))}const r=-1!==this.successCodes_.indexOf(s);t(!0,new q(r,n))}))},e=(t,e)=>{const n=this.resolve_,i=this.reject_,s=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(s,s.getResponse());M(t)?n(t):n()}catch(r){i(r)}else if(null!==s){const t=f();t.serverResponse=s.getErrorText(),this.errorCallback_?i(this.errorCallback_(s,t)):i(t)}else if(e.canceled){const t=this.appDelete_?$():_();i(t)}else{const t=w();i(t)}};this.canceled_?e(!1,new q(!1,null,!0)):this.backoffId_=R(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&N(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class q{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function K(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function Y(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function G(t,e){e&&(t["X-Firebase-GMPID"]=e)}function X(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function J(t,e,n,i,s,r,o=!0){const a=z(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return G(c,e),K(c,n),Y(c,r),X(c,i),new W(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function tt(...t){const e=Q();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(j())return new Blob(t);throw new u(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function et(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){if("undefined"===typeof atob)throw x("base-64");return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class st{constructor(t,e){this.data=t,this.contentType=e||null}}function rt(t,e){switch(t){case it.RAW:return new st(ot(e));case it.BASE64:case it.BASE64URL:return new st(lt(t,e));case it.DATA_URL:return new st(ut(e),ht(e))}throw f()}function ot(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|63&i);else if(55296===(64512&i)){const s=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(s){const s=i,r=t.charCodeAt(++n);i=65536|(1023&s)<<10|1023&r,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else e.push(239,191,189)}else 56320===(64512&i)?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(e)}function at(t){let e;try{e=decodeURIComponent(t)}catch(n){throw O(it.DATA_URL,"Malformed data URL.")}return ot(e)}function lt(t,e){switch(t){case it.BASE64:{const n=-1!==e.indexOf("-"),i=-1!==e.indexOf("_");if(n||i){const e=n?"-":"_";throw O(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case it.BASE64URL:{const n=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(n||i){const e=n?"+":"/";throw O(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nt(e)}catch(s){if(s.message.includes("polyfill"))throw s;throw O(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}class ct{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw O(it.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=dt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function ut(t){const e=new ct(t);return e.base64?lt(it.BASE64,e.rest):at(e.rest)}function ht(t){const e=new ct(t);return e.contentType}function dt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,e){let n=0,i="";F(t)?(this.data_=t,n=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(F(this.data_)){const n=this.data_,i=et(n,t,e);return null===i?null:new pt(i)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new pt(n,!0)}}static getBlob(...t){if(j()){const e=t.map((t=>t instanceof pt?t.data_:t));return new pt(tt.apply(null,e))}{const e=t.map((t=>V(t)?rt(it.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const i=new Uint8Array(n);let s=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)i[s++]=t[e]})),new pt(i,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){let e;try{e=JSON.parse(t)}catch(n){return null}return B(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function gt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function vt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){return e}class bt{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||yt}}let wt=null;function _t(t){return!V(t)||t.length<2?t:vt(t)}function kt(){if(wt)return wt;const t=[];function e(t,e){return _t(e)}t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));const n=new bt("name");function i(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const s=new bt("size");return s.xform=i,t.push(s),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),wt=t,wt}function It(t,e){function n(){const n=t["bucket"],i=t["fullPath"],s=new D(n,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function St(t,e,n){const i={type:"file"},s=n.length;for(let r=0;r<s;r++){const t=n[r];i[t.local]=t.xform(i,e[t.server])}return It(i,t),i}function Ct(t,e,n){const i=ft(e);if(null===i)return null;const s=i;return St(t,s,n)}function Tt(t,e,n,i){const s=ft(e);if(null===s)return null;if(!V(s["downloadTokens"]))return null;const r=s["downloadTokens"];if(0===r.length)return null;const o=encodeURIComponent,a=r.split(","),l=a.map((e=>{const s=t["bucket"],r=t["fullPath"],a="/b/"+o(s)+"/o/"+o(r),l=U(a,n,i),c=z({alt:"media",token:e});return l+c}));return l[0]}function xt(t,e){const n={},i=e.length;for(let s=0;s<i;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t){if(!t)throw f()}function At(t,e){function n(n,i){const s=Ct(t,i,e);return $t(null!==s),s}return n}function Ot(t,e){function n(n,i){const s=Ct(t,i,e);return $t(null!==s),Tt(s,i,t.host,t._protocol)}return n}function Pt(t){function e(e,n){let i;return i=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?y():v():402===e.getStatus()?g(t.bucket):403===e.getStatus()?b(t.path):n,i.status=e.getStatus(),i.serverResponse=n.serverResponse,i}return e}function Dt(t){const e=Pt(t);function n(n,i){let s=e(n,i);return 404===n.getStatus()&&(s=m(t.path)),s.serverResponse=i.serverResponse,s}return n}function Lt(t,e,n){const i=e.fullServerUrl(),s=U(i,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new Et(s,r,Ot(t,n),o);return a.errorHandler=Dt(e),a}function Rt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Nt(t,e,n){const i=Object.assign({},n);return i["fullPath"]=t.path,i["size"]=e.size(),i["contentType"]||(i["contentType"]=Rt(null,e)),i}function Mt(t,e,n,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=Nt(e,i,s),u=xt(c,n),h="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+l+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",d="\r\n--"+l+"--",p=pt.getBlob(h,i,d);if(null===p)throw C();const f={name:c["fullPath"]},m=U(r,t.host,t._protocol),g="POST",v=t.maxUploadRetryTime,y=new Et(m,g,At(t,n),v);return y.urlParams=f,y.headers=o,y.body=p.uploadData(),y.errorHandler=Pt(e),y}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Bt=null;class Vt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=d.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=d.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=d.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,i){if(this.sent_)throw P("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw P("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw P("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw P("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw P("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Ft extends Vt{initXhr(){this.xhr_.responseType="text"}}function jt(){return Bt?Bt():new Ft}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt{constructor(t,e){this._service=t,this._location=e instanceof D?e:D.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Zt(t,e)}get root(){const t=new D(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vt(this._location.path)}get storage(){return this._service}get parent(){const t=mt(this._location.path);if(null===t)return null;const e=new D(this._location.bucket,t);return new Zt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw A(t)}}function Ut(t,e,n){t._throwIfRoot("uploadBytes");const i=Mt(t.storage,t._location,kt(),new pt(e,!0),n);return t.storage.makeRequestWithTokens(i,jt).then((e=>({metadata:e,ref:t})))}function zt(t){t._throwIfRoot("getDownloadURL");const e=Lt(t.storage,t._location,kt());return t.storage.makeRequestWithTokens(e,jt).then((t=>{if(null===t)throw T();return t}))}function Ht(t,e){const n=gt(t._location.path,e),i=new D(t._location.bucket,n);return new Zt(t.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t){return/^[A-Za-z]+:\/\//.test(t)}function qt(t,e){return new Zt(t,e)}function Kt(t,e){if(t instanceof Jt){const n=t;if(null==n._bucket)throw S();const i=new Zt(n,n._bucket);return null!=e?Kt(i,e):i}return void 0!==e?Ht(t,e):t}function Yt(t,e){if(e&&Wt(e)){if(t instanceof Jt)return qt(t,e);throw E("To use ref(service, url), the first argument must be a Storage instance.")}return Kt(t,e)}function Gt(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:D.makeFromBucketSpec(n,t)}function Xt(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken="string"===typeof r?r:(0,s.Sg)(r,t.app.options.projectId))}class Jt{constructor(t,e,n,i,s){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l,this._maxUploadRetryTime=c,this._requests=new Set,this._bucket=null!=i?D.makeFromBucketSpec(i,this._host):Gt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=D.makeFromBucketSpec(this._url,t):this._bucket=Gt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Z("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Z("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Zt(this,t)}_makeRequest(t,e,n,i,s=!0){if(this._deleted)return new L($());{const r=J(t,this._appId,n,i,e,this._firebaseVersion,s);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const Qt="@firebase/storage",te="0.11.2",ee="storage";function ne(t,e,n){return t=(0,s.m9)(t),Ut(t,e,n)}function ie(t){return t=(0,s.m9)(t),zt(t)}function se(t,e){return t=(0,s.m9)(t),Yt(t,e)}function re(t=(0,i.getApp)(),e){t=(0,s.m9)(t);const n=(0,i._getProvider)(t,ee),r=n.getImmediate({identifier:e}),o=(0,s.P0)("storage");return o&&oe(r,...o),r}function oe(t,e,n,i={}){Xt(t,e,n,i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Jt(n,s,r,e,i.SDK_VERSION)}function le(){(0,i._registerComponent)(new r.wA(ee,ae,"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(Qt,te,""),(0,i.registerVersion)(Qt,te,"esm2017")}le()},6531:function(t,e,n){"use strict";n.d(e,{X3:function(){return _}});const i=(t,e)=>e.some((e=>t instanceof e));let s,r;function o(){return s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a(){return r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l=new WeakMap,c=new WeakMap,u=new WeakMap,h=new WeakMap,d=new WeakMap;function p(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",r)},s=()=>{e(b(t.result)),i()},r=()=>{n(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&l.set(e,t)})).catch((()=>{})),d.set(e,t),e}function f(t){if(c.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",r),t.removeEventListener("abort",r)},s=()=>{e(),i()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",r),t.addEventListener("abort",r)}));c.set(t,e)}let m={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return c.get(t);if("objectStoreNames"===e)return t.objectStoreNames||u.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function g(t){m=t(m)}function v(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?a().includes(t)?function(...e){return t.apply(w(this),e),b(l.get(this))}:function(...e){return b(t.apply(w(this),e))}:function(e,...n){const i=t.call(w(this),e,...n);return u.set(i,e.sort?e.sort():[e]),b(i)}}function y(t){return"function"===typeof t?v(t):(t instanceof IDBTransaction&&f(t),i(t,o())?new Proxy(t,m):t)}function b(t){if(t instanceof IDBRequest)return p(t);if(h.has(t))return h.get(t);const e=y(t);return e!==t&&(h.set(t,e),d.set(e,t)),e}const w=t=>d.get(t);function _(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=b(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(b(o.result),t.oldVersion,t.newVersion,b(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const k=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],S=new Map;function C(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(S.get(e))return S.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=I.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!k.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&r.done]))[0]};return S.set(e,r),r}g((t=>({...t,get:(e,n,i)=>C(e,n)||t.get(e,n,i),has:(e,n)=>!!C(e,n)||t.has(e,n)})))}}]);
//# sourceMappingURL=chunk-vendors.7b4d1ab0.js.map