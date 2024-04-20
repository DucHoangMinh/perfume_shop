import{u as Ut,c as pe,r as $,o as Lt,a as U,w as le,v as ce,b as R,d as L,e as f,f as u,_ as Se,g as st,h as Fe,i as ye,m as $t,j as O,k,l as F,n as X,F as Mt,p as Ft,q as Vt,s as ot,t as at,x as te,y as Ht,z as jt,A as zt,B as Wt,C as qt,D as Q,E as Gt}from"./index-749301d1.js";import{_ as Ve}from"./FormCheckRadio-50b65534.js";/**
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
 *//**
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
 */const it=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Kt=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},lt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,i=c?t[s+2]:0,h=o>>2,b=(o&3)<<4|l>>4;let m=(l&15)<<2|i>>6,D=i&63;c||(D=64,a||(m=64)),r.push(n[h],n[b],n[m],n[D])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(it(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Kt(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const i=s<t.length?n[t.charAt(s)]:64;++s;const b=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||l==null||i==null||b==null)throw new Xt;const m=o<<2|l>>4;if(r.push(m),i!==64){const D=l<<4&240|i>>2;if(r.push(D),b!==64){const A=i<<6&192|b;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jt=function(t){const e=it(t);return lt.encodeByteArray(e,!0)},ue=function(t){return Jt(t).replace(/\./g,"")},Yt=function(t){try{return lt.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Zt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qt=()=>Zt().__FIREBASE_DEFAULTS__,en=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tn=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yt(t[1]);return e&&JSON.parse(e)},ct=()=>{try{return Qt()||en()||tn()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nn=t=>{var e,n;return(n=(e=ct())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rn=t=>{const e=nn(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ut=()=>{var t;return(t=ct())===null||t===void 0?void 0:t.config};/**
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
 */class sn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function on(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[ue(JSON.stringify(n)),ue(JSON.stringify(a)),l].join(".")}function an(){try{return typeof indexedDB=="object"}catch{return!1}}function ln(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const cn="FirebaseError";class Y extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cn,Object.setPrototypeOf(this,Y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dt.prototype.create)}}class dt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?un(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Y(s,l,r)}}function un(t,e){return t.replace(dn,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const dn=/\{\$([^}]+)}/g;function Ee(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],a=e[s];if(He(o)&&He(a)){if(!Ee(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function He(t){return t!==null&&typeof t=="object"}/**
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
 */function oe(t){return t&&t._delegate?t._delegate:t}class re{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const W="[DEFAULT]";/**
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
 */class hn{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pn(e))try{this.getOrInitializeService({instanceIdentifier:W})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=W){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=W){return this.instances.has(e)}getOptions(e=W){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fn(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=W){return this.component?this.component.multipleInstances?e:W:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fn(t){return t===W?void 0:t}function pn(t){return t.instantiationMode==="EAGER"}/**
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
 */class mn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hn(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_||(_={}));const gn={debug:_.DEBUG,verbose:_.VERBOSE,info:_.INFO,warn:_.WARN,error:_.ERROR,silent:_.SILENT},_n=_.INFO,bn={[_.DEBUG]:"log",[_.VERBOSE]:"log",[_.INFO]:"info",[_.WARN]:"warn",[_.ERROR]:"error"},vn=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=bn[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wn{constructor(e){this.name=e,this._logLevel=_n,this._logHandler=vn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_.DEBUG,...e),this._logHandler(this,_.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_.VERBOSE,...e),this._logHandler(this,_.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_.INFO,...e),this._logHandler(this,_.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_.WARN,...e),this._logHandler(this,_.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_.ERROR,...e),this._logHandler(this,_.ERROR,...e)}}const yn=(t,e)=>e.some(n=>t instanceof n);let je,ze;function En(){return je||(je=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dn(){return ze||(ze=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ht=new WeakMap,De=new WeakMap,ft=new WeakMap,me=new WeakMap,Oe=new WeakMap;function In(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(H(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&ht.set(n,t)}).catch(()=>{}),Oe.set(e,t),e}function Tn(t){if(De.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});De.set(t,e)}let Ie={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return De.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ft.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return H(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rn(t){Ie=t(Ie)}function An(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ge(this),e,...n);return ft.set(r,e.sort?e.sort():[e]),H(r)}:Dn().includes(t)?function(...e){return t.apply(ge(this),e),H(ht.get(this))}:function(...e){return H(t.apply(ge(this),e))}}function Cn(t){return typeof t=="function"?An(t):(t instanceof IDBTransaction&&Tn(t),yn(t,En())?new Proxy(t,Ie):t)}function H(t){if(t instanceof IDBRequest)return In(t);if(me.has(t))return me.get(t);const e=Cn(t);return e!==t&&(me.set(t,e),Oe.set(e,t)),e}const ge=t=>Oe.get(t);function Sn(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),l=H(a);return r&&a.addEventListener("upgradeneeded",c=>{r(H(a.result),c.oldVersion,c.newVersion,H(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",i=>s(i.oldVersion,i.newVersion,i))}).catch(()=>{}),l}const On=["get","getKey","getAll","getAllKeys","count"],kn=["put","add","delete","clear"],_e=new Map;function We(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_e.get(e))return _e.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=kn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||On.includes(n)))return;const o=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let i=c.store;return r&&(i=i.index(l.shift())),(await Promise.all([i[n](...l),s&&c.done]))[0]};return _e.set(e,o),o}Rn(t=>({...t,get:(e,n,r)=>We(e,n)||t.get(e,n,r),has:(e,n)=>!!We(e,n)||t.has(e,n)}));/**
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
 */class Bn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nn(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Te="@firebase/app",qe="0.10.1";/**
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
 */const G=new wn("@firebase/app"),xn="@firebase/app-compat",Pn="@firebase/analytics-compat",Un="@firebase/analytics",Ln="@firebase/app-check-compat",$n="@firebase/app-check",Mn="@firebase/auth",Fn="@firebase/auth-compat",Vn="@firebase/database",Hn="@firebase/database-compat",jn="@firebase/functions",zn="@firebase/functions-compat",Wn="@firebase/installations",qn="@firebase/installations-compat",Gn="@firebase/messaging",Kn="@firebase/messaging-compat",Xn="@firebase/performance",Jn="@firebase/performance-compat",Yn="@firebase/remote-config",Zn="@firebase/remote-config-compat",Qn="@firebase/storage",er="@firebase/storage-compat",tr="@firebase/firestore",nr="@firebase/firestore-compat",rr="firebase",sr="10.11.0";/**
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
 */const Re="[DEFAULT]",or={[Te]:"fire-core",[xn]:"fire-core-compat",[Un]:"fire-analytics",[Pn]:"fire-analytics-compat",[$n]:"fire-app-check",[Ln]:"fire-app-check-compat",[Mn]:"fire-auth",[Fn]:"fire-auth-compat",[Vn]:"fire-rtdb",[Hn]:"fire-rtdb-compat",[jn]:"fire-fn",[zn]:"fire-fn-compat",[Wn]:"fire-iid",[qn]:"fire-iid-compat",[Gn]:"fire-fcm",[Kn]:"fire-fcm-compat",[Xn]:"fire-perf",[Jn]:"fire-perf-compat",[Yn]:"fire-rc",[Zn]:"fire-rc-compat",[Qn]:"fire-gcs",[er]:"fire-gcs-compat",[tr]:"fire-fst",[nr]:"fire-fst-compat","fire-js":"fire-js",[rr]:"fire-js-all"};/**
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
 */const de=new Map,ar=new Map,Ae=new Map;function Ge(t,e){try{t.container.addComponent(e)}catch(n){G.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function he(t){const e=t.name;if(Ae.has(e))return G.debug(`There were multiple attempts to register component ${e}.`),!1;Ae.set(e,t);for(const n of de.values())Ge(n,t);for(const n of ar.values())Ge(n,t);return!0}function ir(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const lr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},j=new dt("app","Firebase",lr);/**
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
 */class cr{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw j.create("app-deleted",{appName:this._name})}}/**
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
 */const ur=sr;function pt(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Re,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw j.create("bad-app-name",{appName:String(s)});if(n||(n=ut()),!n)throw j.create("no-options");const o=de.get(s);if(o){if(Ee(n,o.options)&&Ee(r,o.config))return o;throw j.create("duplicate-app",{appName:s})}const a=new mn(s);for(const c of Ae.values())a.addComponent(c);const l=new cr(n,r,a);return de.set(s,l),l}function dr(t=Re){const e=de.get(t);if(!e&&t===Re&&ut())return pt();if(!e)throw j.create("no-app",{appName:t});return e}function J(t,e,n){var r;let s=(r=or[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${e}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),G.warn(l.join(" "));return}he(new re(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const hr="firebase-heartbeat-database",fr=1,se="firebase-heartbeat-store";let be=null;function mt(){return be||(be=Sn(hr,fr,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(se)}catch(n){console.warn(n)}}}}).catch(t=>{throw j.create("idb-open",{originalErrorMessage:t.message})})),be}async function pr(t){try{const n=(await mt()).transaction(se),r=await n.objectStore(se).get(gt(t));return await n.done,r}catch(e){if(e instanceof Y)G.warn(e.message);else{const n=j.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});G.warn(n.message)}}}async function Ke(t,e){try{const r=(await mt()).transaction(se,"readwrite");await r.objectStore(se).put(e,gt(t)),await r.done}catch(n){if(n instanceof Y)G.warn(n.message);else{const r=j.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});G.warn(r.message)}}}function gt(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mr=1024,gr=30*24*60*60*1e3;class _r{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Xe();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=gr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xe(),{heartbeatsToSend:r,unsentEntries:s}=br(this._heartbeatsCache.heartbeats),o=ue(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Xe(){return new Date().toISOString().substring(0,10)}function br(t,e=mr){const n=[];let r=t.slice();for(const s of t){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Je(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Je(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return an()?ln().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pr(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ke(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ke(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Je(t){return ue(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wr(t){he(new re("platform-logger",e=>new Bn(e),"PRIVATE")),he(new re("heartbeat",e=>new _r(e),"PRIVATE")),J(Te,qe,t),J(Te,qe,"esm2017"),J("fire-js","")}wr("");/**
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
 */const _t="firebasestorage.googleapis.com",bt="storageBucket",yr=2*60*1e3,Er=10*60*1e3;/**
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
 */class w extends Y{constructor(e,n,r=0){super(ve(e),`Firebase Storage: ${n} (${ve(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,w.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ve(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var v;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(v||(v={}));function ve(t){return"storage/"+t}function ke(){const t="An unknown error occurred, please check the error payload for server response.";return new w(v.UNKNOWN,t)}function Dr(t){return new w(v.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Ir(t){return new w(v.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Tr(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new w(v.UNAUTHENTICATED,t)}function Rr(){return new w(v.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ar(t){return new w(v.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Cr(){return new w(v.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Sr(){return new w(v.CANCELED,"User canceled the upload/download.")}function Or(t){return new w(v.INVALID_URL,"Invalid URL '"+t+"'.")}function kr(t){return new w(v.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Br(){return new w(v.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+bt+"' property when initializing the app?")}function Nr(){return new w(v.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function xr(){return new w(v.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Pr(t){return new w(v.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ce(t){return new w(v.INVALID_ARGUMENT,t)}function vt(){return new w(v.APP_DELETED,"The Firebase app was deleted.")}function Ur(t){return new w(v.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ne(t,e){return new w(v.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ee(t){throw new w(v.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class C{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=C.makeFromUrl(e,n)}catch{return new C(e,"")}if(r.path==="")return r;throw kr(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),c={bucket:1,path:3};function i(I){I.path_=decodeURIComponent(I.path)}const h="v[A-Za-z0-9_]+",b=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",D=new RegExp(`^https?://${b}/${h}/b/${s}/o${m}`,"i"),A={bucket:1,path:3},M=n===_t?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",p=new RegExp(`^https?://${M}/${s}/${y}`,"i"),S=[{regex:l,indices:c,postModify:o},{regex:D,indices:A,postModify:i},{regex:p,indices:{bucket:1,path:2},postModify:i}];for(let I=0;I<S.length;I++){const z=S[I],d=z.regex.exec(e);if(d){const g=d[z.indices.bucket];let B=d[z.indices.path];B||(B=""),r=new C(g,B),z.postModify(r);break}}if(r==null)throw Or(e);return r}}class Lr{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function $r(t,e,n){let r=1,s=null,o=null,a=!1,l=0;function c(){return l===2}let i=!1;function h(...y){i||(i=!0,e.apply(null,y))}function b(y){s=setTimeout(()=>{s=null,t(D,c())},y)}function m(){o&&clearTimeout(o)}function D(y,...p){if(i){m();return}if(y){m(),h.call(null,y,...p);return}if(c()||a){m(),h.call(null,y,...p);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,b(S)}let A=!1;function M(y){A||(A=!0,m(),!i&&(s!==null?(y||(l=2),clearTimeout(s),b(0)):y||(l=1)))}return b(0),o=setTimeout(()=>{a=!0,M(!0)},n),M}function Mr(t){t(!1)}/**
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
 */function Fr(t){return t!==void 0}function Vr(t){return typeof t=="object"&&!Array.isArray(t)}function Be(t){return typeof t=="string"||t instanceof String}function Ye(t){return Ne()&&t instanceof Blob}function Ne(){return typeof Blob<"u"}function Ze(t,e,n,r){if(r<e)throw Ce(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ce(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function fe(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function wt(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var q;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(q||(q={}));/**
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
 */function Hr(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
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
 */class jr{constructor(e,n,r,s,o,a,l,c,i,h,b,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=c,this.timeout_=i,this.progressCallback_=h,this.connectionFactory_=b,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,A)=>{this.resolve_=D,this.reject_=A,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ae(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=l=>{const c=l.loaded,i=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,i)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const l=o.getErrorCode()===q.NO_ERROR,c=o.getStatus();if(!l||Hr(c,this.additionalRetryCodes_)&&this.retry){const h=o.getErrorCode()===q.ABORT;r(!1,new ae(!1,null,h));return}const i=this.successCodes_.indexOf(c)!==-1;r(!0,new ae(i,o))})},n=(r,s)=>{const o=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());Fr(c)?o(c):o()}catch(c){a(c)}else if(l!==null){const c=ke();c.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,c)):a(c)}else if(s.canceled){const c=this.appDelete_?vt():Sr();a(c)}else{const c=Cr();a(c)}};this.canceled_?n(!1,new ae(!1,null,!0)):this.backoffId_=$r(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Mr(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ae{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function zr(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Wr(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qr(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Gr(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Kr(t,e,n,r,s,o,a=!0){const l=wt(t.urlParams),c=t.url+l,i=Object.assign({},t.headers);return qr(i,e),zr(i,n),Wr(i,o),Gr(i,r),new jr(c,t.method,i,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,a)}/**
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
 */function Xr(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Jr(...t){const e=Xr();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ne())return new Blob(t);throw new w(v.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Yr(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Zr(t){if(typeof atob>"u")throw Pr("base-64");return atob(t)}/**
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
 */const x={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class we{constructor(e,n){this.data=e,this.contentType=n||null}}function Qr(t,e){switch(t){case x.RAW:return new we(yt(e));case x.BASE64:case x.BASE64URL:return new we(Et(t,e));case x.DATA_URL:return new we(ts(e),ns(e))}throw ke()}function yt(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,a=t.charCodeAt(++n);r=65536|(o&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function es(t){let e;try{e=decodeURIComponent(t)}catch{throw ne(x.DATA_URL,"Malformed data URL.")}return yt(e)}function Et(t,e){switch(t){case x.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw ne(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case x.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw ne(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Zr(e)}catch(s){throw s.message.includes("polyfill")?s:ne(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Dt{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ne(x.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=rs(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function ts(t){const e=new Dt(t);return e.base64?Et(x.BASE64,e.rest):es(e.rest)}function ns(t){return new Dt(t).contentType}function rs(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class V{constructor(e,n){let r=0,s="";Ye(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ye(this.data_)){const r=this.data_,s=Yr(r,e,n);return s===null?null:new V(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new V(r,!0)}}static getBlob(...e){if(Ne()){const n=e.map(r=>r instanceof V?r.data_:r);return new V(Jr.apply(null,n))}else{const n=e.map(a=>Be(a)?Qr(x.RAW,a).data:a.data_);let r=0;n.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let o=0;return n.forEach(a=>{for(let l=0;l<a.length;l++)s[o++]=a[l]}),new V(s,!0)}}uploadData(){return this.data_}}/**
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
 */function It(t){let e;try{e=JSON.parse(t)}catch{return null}return Vr(e)?e:null}/**
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
 */function ss(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function os(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Tt(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function as(t,e){return e}class T{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||as}}let ie=null;function is(t){return!Be(t)||t.length<2?t:Tt(t)}function Rt(){if(ie)return ie;const t=[];t.push(new T("bucket")),t.push(new T("generation")),t.push(new T("metageneration")),t.push(new T("name","fullPath",!0));function e(o,a){return is(a)}const n=new T("name");n.xform=e,t.push(n);function r(o,a){return a!==void 0?Number(a):a}const s=new T("size");return s.xform=r,t.push(s),t.push(new T("timeCreated")),t.push(new T("updated")),t.push(new T("md5Hash",null,!0)),t.push(new T("cacheControl",null,!0)),t.push(new T("contentDisposition",null,!0)),t.push(new T("contentEncoding",null,!0)),t.push(new T("contentLanguage",null,!0)),t.push(new T("contentType",null,!0)),t.push(new T("metadata","customMetadata",!0)),ie=t,ie}function ls(t,e){function n(){const r=t.bucket,s=t.fullPath,o=new C(r,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function cs(t,e,n){const r={};r.type="file";const s=n.length;for(let o=0;o<s;o++){const a=n[o];r[a.local]=a.xform(r,e[a.server])}return ls(r,t),r}function At(t,e,n){const r=It(e);return r===null?null:cs(t,r,n)}function us(t,e,n,r){const s=It(e);if(s===null||!Be(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(i=>{const h=t.bucket,b=t.fullPath,m="/b/"+a(h)+"/o/"+a(b),D=fe(m,n,r),A=wt({alt:"media",token:i});return D+A})[0]}function ds(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class xe{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ct(t){if(!t)throw ke()}function hs(t,e){function n(r,s){const o=At(t,s,e);return Ct(o!==null),o}return n}function fs(t,e){function n(r,s){const o=At(t,s,e);return Ct(o!==null),us(o,s,t.host,t._protocol)}return n}function St(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Rr():s=Tr():n.getStatus()===402?s=Ir(t.bucket):n.getStatus()===403?s=Ar(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Ot(t){const e=St(t);function n(r,s){let o=e(r,s);return r.getStatus()===404&&(o=Dr(t.path)),o.serverResponse=s.serverResponse,o}return n}function ps(t,e,n){const r=e.fullServerUrl(),s=fe(r,t.host,t._protocol),o="GET",a=t.maxOperationRetryTime,l=new xe(s,o,fs(t,n),a);return l.errorHandler=Ot(e),l}function ms(t,e){const n=e.fullServerUrl(),r=fe(n,t.host,t._protocol),s="DELETE",o=t.maxOperationRetryTime;function a(c,i){}const l=new xe(r,s,a,o);return l.successCodes=[200,204],l.errorHandler=Ot(e),l}function gs(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _s(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=gs(null,e)),r}function bs(t,e,n,r,s){const o=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let I=0;I<2;I++)S=S+Math.random().toString().slice(2);return S}const c=l();a["Content-Type"]="multipart/related; boundary="+c;const i=_s(e,r,s),h=ds(i,n),b="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+i.contentType+`\r
\r
`,m=`\r
--`+c+"--",D=V.getBlob(b,r,m);if(D===null)throw Nr();const A={name:i.fullPath},M=fe(o,t.host,t._protocol),y="POST",p=t.maxUploadRetryTime,P=new xe(M,y,hs(t,n),p);return P.urlParams=A,P.headers=a,P.body=D.uploadData(),P.errorHandler=St(e),P}class vs{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=q.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=q.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=q.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw ee("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ee("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ee("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ee("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ee("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ws extends vs{initXhr(){this.xhr_.responseType="text"}}function Pe(){return new ws}/**
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
 */class K{constructor(e,n){this._service=e,n instanceof C?this._location=n:this._location=C.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new K(e,n)}get root(){const e=new C(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Tt(this._location.path)}get storage(){return this._service}get parent(){const e=ss(this._location.path);if(e===null)return null;const n=new C(this._location.bucket,e);return new K(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Ur(e)}}function ys(t,e,n){t._throwIfRoot("uploadBytes");const r=bs(t.storage,t._location,Rt(),new V(e,!0),n);return t.storage.makeRequestWithTokens(r,Pe).then(s=>({metadata:s,ref:t}))}function Es(t){t._throwIfRoot("getDownloadURL");const e=ps(t.storage,t._location,Rt());return t.storage.makeRequestWithTokens(e,Pe).then(n=>{if(n===null)throw xr();return n})}function Ds(t){t._throwIfRoot("deleteObject");const e=ms(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Pe)}function Is(t,e){const n=os(t._location.path,e),r=new C(t._location.bucket,n);return new K(t.storage,r)}/**
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
 */function Ts(t){return/^[A-Za-z]+:\/\//.test(t)}function Rs(t,e){return new K(t,e)}function kt(t,e){if(t instanceof Ue){const n=t;if(n._bucket==null)throw Br();const r=new K(n,n._bucket);return e!=null?kt(r,e):r}else return e!==void 0?Is(t,e):t}function As(t,e){if(e&&Ts(e)){if(t instanceof Ue)return Rs(t,e);throw Ce("To use ref(service, url), the first argument must be a Storage instance.")}else return kt(t,e)}function Qe(t,e){const n=e==null?void 0:e[bt];return n==null?null:C.makeFromBucketSpec(n,t)}function Cs(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:on(s,t.app.options.projectId))}class Ue{constructor(e,n,r,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=_t,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yr,this._maxUploadRetryTime=Er,this._requests=new Set,s!=null?this._bucket=C.makeFromBucketSpec(s,this._host):this._bucket=Qe(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=C.makeFromBucketSpec(this._url,e):this._bucket=Qe(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ze("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ze("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new K(this,e)}_makeRequest(e,n,r,s,o=!0){if(this._deleted)return new Lr(vt());{const a=Kr(e,this._appId,r,s,n,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const et="@firebase/storage",tt="0.12.4";/**
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
 */const Bt="storage";function Ss(t,e,n){return t=oe(t),ys(t,e,n)}function Os(t){return t=oe(t),Es(t)}function ks(t){return t=oe(t),Ds(t)}function nt(t,e){return t=oe(t),As(t,e)}function Bs(t=dr(),e){t=oe(t);const r=ir(t,Bt).getImmediate({identifier:e}),s=rn("storage");return s&&Ns(r,...s),r}function Ns(t,e,n,r={}){Cs(t,e,n,r)}function xs(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ue(n,r,s,e,ur)}function Ps(){he(new re(Bt,xs,"PUBLIC").setMultipleInstances(!0)),J(et,tt,""),J(et,tt,"esm2017")}Ps();var Us="firebase",Ls="10.11.0";/**
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
 */J(Us,Ls,"app");const $s={apiKey:"AIzaSyCMhiatTZuk8avGebeZLw7ADMoOpDFThGg",authDomain:"perfumeshop-44117.firebaseapp.com",projectId:"perfumeshop-44117",storageBucket:"perfumeshop-44117.appspot.com",messagingSenderId:"250123577567",appId:"1:250123577567:web:495cc5003217321e6b616a",measurementId:"G-7412R875CQ",bucket:"products"},Ms=pt($s),rt=Bs(Ms),Nt={upload:async t=>{const e=nt(rt,"products/"+t.name+new Date().toString());return await Ss(e,t),Os(e)},deleteImagesList:async t=>{for(const e of t){const n=nt(rt,e);await ks(n).then().catch(r=>{console.log(r)})}}};const Fs={class:"space-y-3"},Vs=k("p",{class:"mr-2"},"Giới tính",-1),Hs={class:"image-show-wrapper d-flex"},js={class:"pa-2 position-relative"},zs=["src"],Ws={class:"v-col-3 text-center"},qs={class:"v-col-3 text-center"},Gs={key:0,class:"v-col-4 text-center"},Ks={key:1,class:"v-col-4 text-center"},Xs={key:2,class:"v-col-4 text-center"},Js={__name:"PerfumeDetailModal",props:{modelValue:{type:[String,Number,Boolean],default:null},title:{type:String,required:!0},hasCancel:Boolean,perfumeDetailProp:{type:Object,required:!1,default:null}},emits:["upload-success","update:modelValue","confirm","cancel-add-perfume"],setup(t,{emit:e}){const n=t,r=Ut(),s=pe(()=>r.perfumeBranches),o=pe(()=>r.perfumeFragnant),a=$([]),l=$([]),c=$({}),i=$({name:"",branch:1,fragnant:1,volume:0,concentration:0,price:0,description:"",images:null,ingredients:"",notes:"",gender:!0}),h=d=>{i.value.name=d.name,i.value.branch=d.branch.id||d.branch,i.value.fragnant=d.fragnant.id||d.fragnant,i.value.volume=d.volume,i.value.concentration=d.concentration,i.value.price=d.price,i.value.description=d.description,i.value.images=d.images,i.value.ingredients=d.ingredients,i.value.notes=d.notes,i.value.gender=d.gender},b=d=>{let g=d.target.files[0],B=URL.createObjectURL(g);a.value.push(B),l.value.push(g)},m=d=>{a.value.splice(d,1),l.value.splice(d,1)},D=()=>l.value.length<=5,A=async()=>{if(D()){a.value=[];for(let d=0;d<l.value.length;d++){let g=await Nt.upload(l.value[d]);a.value.push(g)}}console.log(a.value)},M=async()=>{try{r.setLoading(!0),await A(),i.value.images=a.value,await at.post("/perfume_detail/",i.value),r.setLoading(!1),e("upload-success")}catch(d){r.setLoading(!1),te.error("Lỗi hệ thống, vui lòng thử lại"),console.log(d)}},y=pe({get:()=>n.modelValue,set:d=>e("update:modelValue",d)}),p=$(!1),P=()=>{h(n.perfumeDetailProp),a.value=n.perfumeDetailProp.images,p.value=!0},S=()=>{n.perfumeDetailProp!=null&&(p.value=!0,c.value=n.perfumeDetailProp,a.value=n.perfumeDetailProp.images,h(n.perfumeDetailProp),console.log(n.perfumeDetailProp))},I=()=>{te.warning("Chức năng chưa hoàn thiện")},z=()=>{e("cancel-add-perfume")};return Lt(()=>{S()}),(d,g)=>{const B=U("v-text-field"),N=U("v-col"),Le=U("v-select"),xt=U("v-label"),$e=U("v-textarea"),Z=U("v-btn"),Me=U("v-row");return y.value?le((R(),L(ot,{key:0},{default:f(()=>[le(u(Se,{class:"shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50","is-modal":""},{default:f(()=>[u(st,{title:t.title},{default:f(()=>[t.hasCancel?(R(),L(Fe,{key:0,icon:ye($t),color:"whiteDark",small:"","rounded-full":"",onClick:z},null,8,["icon"])):O("",!0)]),_:1},8,["title"]),k("div",Fs,[u(N,{class:"w-full pa-0",cols:"12"},{default:f(()=>[u(B,{"hide-details":"",label:"Tên",density:"comfortable",disabled:p.value,counter:10,required:"",type:"text",modelValue:i.value.name,"onUpdate:modelValue":g[0]||(g[0]=E=>i.value.name=E),variant:"outlined"},null,8,["disabled","modelValue"])]),_:1}),u(N,{class:"w-full pa-0",cols:"12"},{default:f(()=>[u(Le,{items:s.value,variant:"outlined",label:"Thương hiệu","hide-details":"",disabled:p.value,"item-title":"name",modelValue:i.value.branch,"onUpdate:modelValue":g[1]||(g[1]=E=>i.value.branch=E),"item-value":"id",density:"comfortable"},null,8,["items","disabled","modelValue"])]),_:1}),u(N,{class:"w-full pa-0",cols:"12"},{default:f(()=>[u(Le,{items:o.value,variant:"outlined",label:"Mùi hương",modelValue:i.value.fragnant,"onUpdate:modelValue":g[2]||(g[2]=E=>i.value.fragnant=E),"item-title":"name_vn","item-value":"id",disabled:p.value,density:"comfortable","hide-details":""},null,8,["items","modelValue","disabled"])]),_:1}),u(N,{class:"w-full pa-0",cols:"12"},{default:f(()=>[u(B,{"hide-details":"",label:"Lưu lượng (ml)",modelValue:i.value.volume,"onUpdate:modelValue":g[3]||(g[3]=E=>i.value.volume=E),density:"comfortable",counter:10,required:"",type:"number",disabled:p.value,variant:"outlined"},null,8,["modelValue","disabled"])]),_:1}),u(N,{class:"w-full pa-0",cols:"12"},{default:f(()=>[u(B,{"hide-details":"",label:"Nồng độ (%)",modelValue:i.value.concentration,"onUpdate:modelValue":g[4]||(g[4]=E=>i.value.concentration=E),density:"comfortable",counter:10,required:"",disabled:p.value,type:"number",variant:"outlined"},null,8,["modelValue","disabled"])]),_:1}),u(N,{class:"d-flex align-center py-0 justify-space-between",cols:"12"},{default:f(()=>[Vs,k("div",null,[u(Ve,{class:"mr-2","model-value":i.value.gender,"input-value":!0,name:"Hehe",type:"radio",label:"Nam",disabled:p.value},null,8,["model-value","disabled"]),u(Ve,{"model-value":i.value.gender,"input-value":!1,name:"Hehe",type:"radio",disabled:p.value,label:"Nữ"},null,8,["model-value","disabled"])])]),_:1}),u(N,{class:"w-full pa-0",cols:"12"},{default:f(()=>[u(B,{"hide-details":"",label:"Giá (VND)",density:"comfortable",modelValue:i.value.price,"onUpdate:modelValue":g[5]||(g[5]=E=>i.value.price=E),counter:10,required:"",disabled:p.value,type:"number",variant:"outlined"},null,8,["modelValue","disabled"])]),_:1}),u(N,{class:"w-full pa-0",cols:"12"},{default:f(()=>[p.value?O("",!0):(R(),L(xt,{key:0,class:"mr-2"},{default:f(()=>[F("Tải lên ít nhất 3 ảnh sản phẩm")]),_:1})),p.value?O("",!0):(R(),X("input",{key:1,id:"image-upload",type:"file",accept:"image/jpeg",onChange:b},null,32)),k("div",Hs,[(R(!0),X(Mt,null,Ft(a.value,(E,Pt)=>(R(),X("div",js,[k("img",{src:E,style:{width:"200px"}},null,8,zs),p.value?O("",!0):(R(),L(Fe,{key:0,class:"remove-img-button",icon:ye(Vt),onClick:()=>m(Pt)},null,8,["icon","onClick"]))]))),256))])]),_:1}),u(N,{class:"w-full pa-0",cols:"12"},{default:f(()=>[u($e,{"hide-details":"",label:"Mô tả",rows:"2",modelValue:i.value.description,"onUpdate:modelValue":g[6]||(g[6]=E=>i.value.description=E),density:"comfortable",counter:10,disabled:p.value,required:"",variant:"outlined"},null,8,["modelValue","disabled"])]),_:1}),u(N,{class:"w-full pa-0",cols:"12"},{default:f(()=>[u($e,{"hide-details":"",label:"Lưu ý",modelValue:i.value.notes,"onUpdate:modelValue":g[7]||(g[7]=E=>i.value.notes=E),rows:"2",density:"comfortable",disabled:p.value,counter:10,required:"",variant:"outlined"},null,8,["modelValue","disabled"])]),_:1}),t.perfumeDetailProp==null?(R(),L(Me,{key:0,class:"w-full pa-0 d-flex justify-space-around"},{default:f(()=>[k("div",Ws,[u(Z,{class:"w-100",variant:"outlined",color:"red",onClick:z},{default:f(()=>[F("Hủy")]),_:1})]),k("div",qs,[u(Z,{class:"w-100",variant:"outlined",color:"primary",onClick:M},{default:f(()=>[F("Thêm")]),_:1})])]),_:1})):O("",!0),t.perfumeDetailProp!=null?(R(),L(Me,{key:1,class:"w-full pa-0 d-flex justify-space-around"},{default:f(()=>[p.value?O("",!0):(R(),X("div",Gs,[u(Z,{class:"w-100",variant:"outlined",color:"red",onClick:P},{default:f(()=>[F("Hủy các thay đổi")]),_:1})])),p.value?(R(),X("div",Ks,[u(Z,{class:"w-100",variant:"outlined",color:"primary",onClick:g[8]||(g[8]=E=>p.value=!1)},{default:f(()=>[F("Chỉnh sửa")]),_:1})])):O("",!0),p.value?O("",!0):(R(),X("div",Xs,[u(Z,{class:"w-100",variant:"outlined",color:"primary",onClick:I},{default:f(()=>[F("Lưu thay đổi")]),_:1})]))]),_:1})):O("",!0)])]),_:1},512),[[ce,y.value]])]),_:1},512)),[[ce,y.value]]):O("",!0)}}},Ys={class:"space-y-3"},Zs={class:"text-body-1"},Qs={class:"v-col-3 text-center"},eo={class:"v-col-3 text-center"},to={__name:"ConfirmDialog",props:{show:{type:Boolean,required:!0,default:!1},title:{type:String,required:!1,default:""},message:{type:String,required:!0,default:""}},emits:["on-cancel","on-confirm"],setup(t,{emit:e}){return(n,r)=>{const s=U("v-btn"),o=U("v-row");return t.show?le((R(),L(ot,{key:0},{default:f(()=>[le(u(Se,{class:"shadow-lg max-h-modal w-10/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50","is-modal":""},{default:f(()=>[u(st,{title:t.title},null,8,["title"]),k("div",Ys,[k("p",Zs,Ht(t.message),1),u(o,{class:"w-full pa-0 d-flex justify-space-around"},{default:f(()=>[k("div",Qs,[u(s,{class:"w-100",variant:"outlined",color:"red",onClick:r[0]||(r[0]=a=>e("on-cancel"))},{default:f(()=>[F("Hủy")]),_:1})]),k("div",eo,[u(s,{class:"w-100",variant:"outlined",color:"primary",onClick:r[1]||(r[1]=a=>e("on-confirm"))},{default:f(()=>[F("Xác nhận")]),_:1})])]),_:1})])]),_:1},512),[[ce,t.show]])]),_:1},512)),[[ce,t.show]]):O("",!0)}}},so={__name:"ProductsView",setup(t){const e=$(!1),n=$(null),r=$(null),s=async()=>{await Q.fetchSampleClients(),e.value=!1,te.success("Thêm thông tin sản phẩm mới thành công!")},o=i=>{n.value=i,e.value=!0},a=async()=>{try{Q.setLoading(!0),await Nt.deleteImagesList(r.value.images),await at.delete(`/perfume_detail/${r.value.id}`),await Q.fetchSampleClients(),Q.setLoading(!1),r.value=null,te.success("Xóa sản phẩm thành công!")}catch{te.error("Lỗi hệ thống, vui lòng thử lại!")}finally{Q.setLoading(!1),c.value=!1}},l=i=>{r.value=i,c.value=!0},c=$(!1);return(i,h)=>(R(),L(jt,null,{default:f(()=>{var b;return[e.value?(R(),L(Js,{key:0,title:"Thêm sản phẩm mới","model-value":e.value,"has-cancel":!0,"perfume-detail-prop":n.value,onUploadSuccess:s,onCancelAddPerfume:h[0]||(h[0]=m=>e.value=!1)},null,8,["model-value","perfume-detail-prop"])):O("",!0),u(to,{message:`Xác nhận xóa sản phẩm ${(b=r.value)==null?void 0:b.name}?`,show:c.value,onOnCancel:h[1]||(h[1]=m=>c.value=!1),onOnConfirm:a},null,8,["message","show"]),u(qt,null,{default:f(()=>[u(zt,{icon:ye(Gt),title:"Danh sách sản phẩm",onOpenModal:h[2]||(h[2]=()=>{e.value=!0,n.value=null}),main:""},null,8,["icon"]),u(Se,{class:"mb-6","has-table":""},{default:f(()=>[u(Wt,{checkable:"",onOpenView:h[3]||(h[3]=m=>o(m)),onCloseView:h[4]||(h[4]=m=>l(m))})]),_:1})]),_:1})]}),_:1}))}};export{so as default};
