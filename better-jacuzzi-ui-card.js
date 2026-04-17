function e(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;let a=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(t,e))}return e}toString(){return this.cssText}};const o=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1]),e[0]);return new a(i,e,r)},s=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,r))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:l,defineProperty:c,getOwnPropertyDescriptor:u,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:m}=Object,p=globalThis,_=p.trustedTypes,f=_?_.emptyScript:"",v=p.reactiveElementPolyfillSupport,g=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},y=(e,t)=>!l(e,t),w={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&c(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:n}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return r?.call(this)},set(t){const a=r?.call(this);n.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const e=this.properties,t=[...d(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{if(i)e.adoptedStyleSheets=r.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of r){const r=document.createElement("style"),n=t.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=i.cssText,e.appendChild(r)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=i.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=r,this[r]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i,r=!1,n){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??y)(r?n:this[e],t))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[g("elementProperties")]=new Map,k[g("finalized")]=new Map,v?.({ReactiveElement:k}),(p.reactiveElementVersions??=[]).push("2.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,$=A.trustedTypes,x=$?$.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",z=`lit$${(Math.random()+"").slice(9)}$`,E="?"+z,T=`<${E}>`,S=document,j=()=>S.createComment(""),D=e=>null===e||"object"!=typeof e&&"function"!=typeof e,M=Array.isArray,L="[ \t\n\f\r]",V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,P=/>/g,H=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,I=/"/g,R=/^(?:script|style|textarea|title)$/i,F=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),U=F(1),Z=F(2),W=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),Y=new WeakMap,q=S.createTreeWalker(S,129);function X(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(t):t}const K=(e,t)=>{const i=e.length-1,r=[];let n,a=2===t?"<svg>":"",o=V;for(let t=0;t<i;t++){const i=e[t];let s,l,c=-1,u=0;for(;u<i.length&&(o.lastIndex=u,l=o.exec(i),null!==l);)u=o.lastIndex,o===V?"!--"===l[1]?o=O:void 0!==l[1]?o=P:void 0!==l[2]?(R.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=H):void 0!==l[3]&&(o=H):o===H?">"===l[0]?(o=n??V,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?H:'"'===l[3]?I:N):o===I||o===N?o=H:o===O||o===P?o=V:(o=H,n=void 0);const d=o===H&&e[t+1].startsWith("/>")?" ":"";a+=o===V?i+T:c>=0?(r.push(s),i.slice(0,c)+C+i.slice(c)+z+d):i+z+(-2===c?t:d)}return[X(e,a+(e[i]||"<?>")+(2===t?"</svg>":"")),r]};class J{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,a=0;const o=e.length-1,s=this.parts,[l,c]=K(e,t);if(this.el=J.createElement(l,i),q.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=q.nextNode())&&s.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(C)){const t=c[a++],i=r.getAttribute(e).split(z),o=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?ie:"?"===o[1]?re:"@"===o[1]?ne:te}),r.removeAttribute(e)}else e.startsWith(z)&&(s.push({type:6,index:n}),r.removeAttribute(e));if(R.test(r.tagName)){const e=r.textContent.split(z),t=e.length-1;if(t>0){r.textContent=$?$.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],j()),q.nextNode(),s.push({type:2,index:++n});r.append(e[t],j())}}}else if(8===r.nodeType)if(r.data===E)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(z,e+1));)s.push({type:7,index:n}),e+=z.length-1}n++}}static createElement(e,t){const i=S.createElement("template");return i.innerHTML=e,i}}function G(e,t,i=e,r){if(t===W)return t;let n=void 0!==r?i._$Co?.[r]:i._$Cl;const a=D(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e),n._$AT(e,i,r)),void 0!==r?(i._$Co??=[])[r]=n:i._$Cl=n),void 0!==n&&(t=G(e,n._$AS(e,t.values),n,r)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??S).importNode(t,!0);q.currentNode=r;let n=q.nextNode(),a=0,o=0,s=i[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new ee(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new ae(n,this,e)),this._$AV.push(t),s=i[++o]}a!==s?.index&&(n=q.nextNode(),a++)}return q.currentNode=S,r}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ee{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),D(e)?e===B||null==e||""===e?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==W&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>M(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==B&&D(this._$AH)?this._$AA.nextSibling.data=e:this.$(S.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=J.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new Q(r,this),i=e.u(this.options);e.p(t),this.$(i),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new J(e)),t}T(e){M(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new ee(this.k(j()),this.k(j()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(e,t=this,i,r){const n=this.strings;let a=!1;if(void 0===n)e=G(this,e,t,0),a=!D(e)||e!==this._$AH&&e!==W,a&&(this._$AH=e);else{const r=e;let o,s;for(e=n[0],o=0;o<n.length-1;o++)s=G(this,r[i+o],t,o),s===W&&(s=this._$AH[o]),a||=!D(s)||s!==this._$AH[o],s===B?e=B:e!==B&&(e+=(s??"")+n[o+1]),this._$AH[o]=s}a&&!r&&this.O(e)}O(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ie extends te{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===B?void 0:e}}class re extends te{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class ne extends te{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=G(this,e,t,0)??B)===W)return;const i=this._$AH,r=e===B&&i!==B||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==B&&(i===B||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const oe=A.litHtmlPolyfillSupport;oe?.(J,ee),(A.litHtmlVersions??=[]).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class se extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const r=i?.renderBefore??t;let n=r._$litPart$;if(void 0===n){const e=i?.renderBefore??null;r._$litPart$=n=new ee(t.insertBefore(j(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}se._$litElement$=!0,se.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:se});const le=globalThis.litElementPolyfillSupport;le?.({LitElement:se}),(globalThis.litElementVersions??=[]).push("4.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce=e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ue={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y},de=(e=ue,t,i)=>{const{kind:r,metadata:n}=i;let a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),a.set(i.name,e),"accessor"===r){const{name:r}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,n,e)},init(t){return void 0!==t&&this.C(r,void 0,e),t}}}if("setter"===r){const{name:r}=i;return function(i){const n=this[r];t.call(this,i),this.requestUpdate(r,n,e)}}throw Error("Unsupported decorator location: "+r)};function he(e){return(t,i)=>"object"==typeof i?de(e,t,i):((e,t,i)=>{const r=t.hasOwnProperty(i);return t.constructor.createProperty(i,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function me(e){return he({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function _e(e,t){return(i,r,n)=>{const a=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:o}="object"==typeof r?i:n??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return pe(i,r,{get(){if(t){let t=e.call(this);return void 0===t&&(t=a(this),o.call(this,t)),t}return a(this)}})}return pe(i,r,{get(){return a(this)}})}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=1;class ve{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends ve{constructor(e){if(super(e),e.type!==fe||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.it)e in t||(i.remove(e),this.it.delete(e));for(const e in t){const r=!!t[e];r===this.it.has(e)||this.st?.has(e)||(r?(i.add(e),this.it.add(e)):(i.remove(e),this.it.delete(e)))}return W}});var be="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z",ye="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13";var we={version:"version",current:"current",current_temperature:"Current temperature",target_temperature:"Target temperature",current_humidity:"Current humidity"},ke={error_code:"Error code"},Ae={card:{jacuzzi:{power:"Power switch",jets:"Jets",filter:"Filter",bubbles:"Bubbles",sanitizer:"Sanitizer",error_entity:"Error code sensor",hide_fan:"Hide fan speed row (even if supported)",disable_menu:"Disable more-info menu button",disable_buttons:"Disable plus/minus buttons",set_current_as_main:"Swap target with current temperature in the ring",disable_heat:"Hide heat / heat_cool mode buttons",disable_off:"Hide off mode button"},climate:{disable_window:"Turn off the window open indicator",disable_summer:"Turn off the summer indicator",disable_eco:"Turn off the eco button",disable_heat:"Turn off the on/heat button",disable_off:"Turn off the off button",disable_menu:"Disable menu",disable_battery_warning:"Turn off the battery warning",disable_buttons:"Turn off the plus/minus buttons",eco_temperature:"Target temp for night/away/eco mode triggerd by ui button",set_current_as_main:"Swap target with current temperature places"}}},$e={window_open:"Window open",night_mode:"Night mode",eco:"Eco",summer:"Summer",cooling:"Cooling",heating:"Heating",cooling_off:"Cooling off",heating_off:"Heating off"},xe={common:we,jacuzzi:ke,editor:Ae,extra_states:$e},Ce=Object.freeze({__proto__:null,common:we,default:xe,editor:Ae,extra_states:$e,jacuzzi:ke}),ze={version:"Version",current:"Aktuell",current_humidity:"Aktuelle Luftfeuchtigkeit",current_temperature:"Aktuelle Temperatur",target_temperature:"Zieltemperatur"},Ee={card:{climate:{disable_window:"Fenster-offen-Anzeige deaktivieren",disable_summer:"Sommer-Anzeige deaktivieren",disable_eco:"Eco-Anzeige deaktivieren",disable_heat:"Heiz-Anzeige deaktivieren",disable_off:"Aus-Anzeige deaktivieren",disable_menu:"Menü deaktivieren",disable_battery_warning:"Batterie-Warnung deaktivieren",disable_buttons:"Plus/Minus Buttons deaktivieren",eco_temperature:"Eco Temperatur",set_current_as_main:"Zieltemperatur mit aktueller Temperatur tauschen"}}},Te={window_open:"Fenster offen",night_mode:"Nachtmodus",eco:"Eco",summer:"Sommer",cooling:"Kühlen",heating:"Heizen",cooling_off:"Kühlung aus",heating_off:"Heizung aus",window_closed:"Fenster geschlossen"},Se={common:ze,editor:Ee,extra_states:Te},je=Object.freeze({__proto__:null,common:ze,default:Se,editor:Ee,extra_states:Te}),De={version:"Version",current:"Actuel",current_humidity:"Humidité actuelle",current_temperature:"Température actuelle",target_temperature:"Température cible"},Me={card:{climate:{disable_window:"Désactiver fenêtre",disable_summer:"Désactiver été",disable_eco:"Désactiver mode Éco",disable_heat:"Désactiver mode chauffe",disable_off:"Désactiver arrêt",disable_menu:"Désactiver le menu",disable_battery_warning:"Désactiver l'avertissement de batterie",disable_buttons:"Désactiver les boutons plus/moins",eco_temperature:"Température Éco",set_current_as_main:"Échanger température cible avec température locale"}}},Le={window_open:"Fenêtre ouverte",night_mode:"Mode nuit",eco:"Éco",summer:"Été",cooling:"Refroidissement",heating:"Chauffage",cooling_off:"Refroidissement éteint",heating_off:"Chauffage éteint",window_closed:"Fenêtre fermée"},Ve={common:De,editor:Me,extra_states:Le},Oe=Object.freeze({__proto__:null,common:De,default:Ve,editor:Me,extra_states:Le}),Pe={version:"версия",current:"текущая версия",current_humidity:"Текущая влажность",current_temperature:"Текущая температура",target_temperature:"Целевая температура"},He={card:{climate:{disable_window:"Отключить индикатор окна",disable_summer:"Отключить летний режим",disable_eco:"Отключить режим eco",disable_heat:"Отключить обогрев",disable_off:"Отключить индикатор on/off",disable_menu:"Отключить меню",disable_battery_warning:"Отключить предупреждение о разряде батареи",disable_buttons:"Отключить кнопку плюс/минус",eco_temperature:"Температура режима Eco",set_current_as_main:"Поменять местами требуемую и текущую температуру"}}},Ne={window_open:"Окно открыто",night_mode:"Ночной режим",eco:"Эко",summer:"Летний режим",cooling:"Охлаждение",heating:"Обогрев",cooling_off:"Охлаждение выключено",heating_off:"Обогрев выключен",window_closed:"Окно закрыто"},Ie={common:Pe,editor:He,extra_states:Ne},Re=Object.freeze({__proto__:null,common:Pe,default:Ie,editor:He,extra_states:Ne}),Fe={version:"Wersja",current:"Aktualna",current_humidity:"Aktualna wilgotność",current_temperature:"Aktualna temperatura",target_temperature:"Temperatura docelowa"},Ue={card:{climate:{disable_window:"Wyłącz okno",disable_summer:"Wyłacz lato",disable_eco:"Wyłącz tryb eko",disable_heat:"Wyłącz grzanie",disable_off:"Wyłącz wyłącznik",disable_menu:"Wyłącz menu",disable_battery_warning:"Wyłącz ostrzeżenie o baterii",disable_buttons:"Wyłącz przyciski plus/minus",eco_temperature:"Temperatura eko",set_current_as_main:"Zamień miejscami temperature docelową z aktualną"}}},Ze={window_open:"Otwarte okno",night_mode:"Tryb nocny",eco:"Tryb ekonomiczny",summer:"Lato",cooling:"Chłodzenie",heating:"Ogrzewanie",cooling_off:"Chłodzenie wyłączone",heating_off:"Ogrzewanie wyłączone",window_closed:"Okno zamknięte"},We={common:Fe,editor:Ue,extra_states:Ze},Be=Object.freeze({__proto__:null,common:Fe,default:We,editor:Ue,extra_states:Ze}),Ye={version:"verzia",current:"aktuálny",current_humidity:"Aktuálna vlhkosť",current_temperature:"Aktuálna teplota",target_temperature:"Cieľová teplota"},qe={card:{climate:{disable_window:"Zakázať okno",disable_summer:"Zakázať leto",disable_eco:"Zakázať eco",disable_heat:"Zakázať kúrenie",disable_off:"Vypnúť",disable_menu:"Zakázať menu",disable_battery_warning:"Zakázať upozornenie na batériu",disable_buttons:"Zakázať plus/mínus tlačidlá",eco_temperature:"Eco teplota",set_current_as_main:"Vymeňte cieľ za miesta s aktuálnou teplotou"}}},Xe={window_open:"Okno otvorené",night_mode:"Nočný mód",eco:"Eco",summer:"Leto",cooling:"Chladenie",heating:"Kúrenie",cooling_off:"Chladenie vypnuté",heating_off:"Kúrenie vypnuté",window_closed:"Okno zatvorené"},Ke={common:Ye,editor:qe,extra_states:Xe},Je={version:"verzija",current:"trenutno",current_humidity:"Trenutna vlažnost",current_temperature:"Trenutna temperatura",target_temperature:"Ciljana temperatura"},Ge={card:{climate:{disable_window:"Isključi indikator prozora",disable_summer:"Isključi indikator ljeta",disable_eco:"Isključi prikaz eco gumba",disable_heat:"Isključi prikaz gumba paljenja",disable_off:"Isključi prikaz gumba gašenja",disable_menu:"Isključi prikaz izbornika",disable_battery_warning:"Isključi upozorenje baterije",disable_buttons:"Isključi prikaz plus/minus gumbi",eco_temperature:"Eco temperatura",set_current_as_main:"Zamijeni prikaz željene i trenutne temperature"}}},Qe={window_open:"Prozor otvoren",window_closed:"Prozor zatvoren",night_mode:"Noćni način",eco:"Eco",summer:"Ljeto",cooling:"Hlađenje",heating:"Grijanje",cooling_off:"Hlađenje isključeno",heating_off:"Grijanje isključeno"},et={common:Je,editor:Ge,extra_states:Qe},tt={version:"Verzió",current:"Aktuális",current_humidity:"Jelenlegi páratartalom",current_temperature:"Jelenlegi hőmérséklet",target_temperature:"Célhőmérséklet"},it={error_code:"Hibakód"},rt={card:{climate:{disable_window:"Ablak kikapcsolás",disable_summer:"Nyár kikapcsolás",disable_eco:"Eco kikapcsolás",disable_heat:"Fűtés kikacsolás",disable_off:"Kikapcsolás inaktiválás",disable_menu:"Menü letiltása",disable_battery_warning:"Akkumulátor figyelmeztetés letiltása",disable_buttons:"Plusz/mínusz gombok letiltása",eco_temperature:"Eco hőmérséklet",set_current_as_main:"Aktuális hőmérséklet használata"},jacuzzi:{power:"Tápellátás kapcsoló",jets:"Masszázs (jets)",filter:"Szűrő",bubbles:"Buborékok",sanitizer:"Szaniter / tisztító",error_entity:"Hibakód szenzor",hide_fan:"Ventilátor sebesség sor elrejtése",disable_menu:"További infó gomb kikapcsolása",disable_buttons:"Plusz/mínusz gombok kikapcsolása",set_current_as_main:"Cél és aktuális hőmérséklet helyének felcserélése a gyűrűn",disable_heat:"Fűtés mód gombok elrejtése",disable_off:"Kikapcsolás mód gomb elrejtése"}}},nt={window_open:"Ablak nyitva",night_mode:"Éjszakai mód",eco:"Eco",summer:"Nyár",cooling:"Hűtés",heating:"Fűtés",cooling_off:"Hűtés kikapcsolva",heating_off:"Fűtés kikapcsolva",window_closed:"Ablak zárva"},at={common:tt,jacuzzi:it,editor:rt,extra_states:nt},ot={version:"Version",current:"Nuværende",current_humidity:"Nuværende fugtighed",current_temperature:"Nuværende temperatur",target_temperature:"Målt temperatur"},st={card:{climate:{disable_window:"Deaktiver vindue-åben indikator",disable_summer:"Deaktiver sommer indikator",disable_eco:"Deaktiver Eco indikator",disable_heat:"Deaktiver varme indikator",disable_off:"Deaktiver slukket indikator",disable_menu:"Deaktiver menu",disable_battery_warning:"Deaktiver batteriadvarsel",disable_buttons:"Deaktiver plus/minus knapper",eco_temperature:"Eco temperatur",set_current_as_main:"Erstat målt temperatur med nuværende temperatur"}}},lt={window_open:"Vindue åbent",night_mode:"Nattetilstand",eco:"Eco",summer:"Sommer",cooling:"Køling",heating:"Opvarmning",cooling_off:"Køling slukket",heating_off:"Opvarmning slukket",window_closed:"Vindue lukket"},ct={common:ot,editor:st,extra_states:lt},ut={version:"Versión",current:"Actual",current_humidity:"Humedad actual",current_temperature:"Temperatura actual",target_temperature:"Temperatura objetivo"},dt={card:{climate:{disable_window:"Deshabilitar ventana",disable_summer:"Deshabilitar verano",disable_eco:"Deshabilitar eco",disable_heat:"Deshabilitar calor",disable_off:"Deshabilitar apagado",disable_menu:"Deshabilitar menú",disable_battery_warning:"Deshabilitar alerta de batería",disable_buttons:"Deshabilitar botones más/menos",eco_temperature:"Temperatura Eco",set_current_as_main:"Fijar temperatura objetivo a temperatura actual"}}},ht={window_open:"Ventana abierta",night_mode:"Modo noche",eco:"Eco",summer:"Verano",cooling:"Enfriamiento",heating:"Calefacción",cooling_off:"Enfriamiento apagado",heating_off:"Calefacción apagada",window_closed:"Ventana cerrada"},mt={common:ut,editor:dt,extra_states:ht},pt={version:"versiyon",current:"şimdiki",current_humidity:"Mevcut Nem",current_temperature:"Mevcut Sıcaklık",target_temperature:"Hedef Sıcaklık"},_t={card:{climate:{disable_window:"Pencereyi devre dışı bırak",disable_summer:"Yazı devre dışı bırak",disable_eco:"Eco'yu devre dışı bırak",disable_heat:"Isıtmayı devre dışı bırak",disable_off:"Kapatmayı devre dışı bırak",disable_menu:"Menüyü devre dışı bırak",disable_battery_warning:"Pil uyarısını devre dışı bırak",disable_buttons:"Artı/eksi düğmelerini devre dışı bırak",eco_temperature:"Eco sıcaklık",set_current_as_main:"Hedef ve mevcut sıcaklık yerlerini değiştir"}}},ft={window_open:"Pencere açık",night_mode:"Gece modu",eco:"Eco",summer:"Yaz",cooling:"Soğutma",heating:"Isıtma",cooling_off:"Soğutma kapalı",heating_off:"Isıtma kapalı",window_closed:"Pencere kapalı"},vt={common:pt,editor:_t,extra_states:ft},gt={version:"versione",current:"Corrente",current_humidity:"Umidità attuale",current_temperature:"Temperatura attuale",target_temperature:"Temperatura obiettivo"},bt={card:{climate:{disable_window:"Disabilita indicatore Finestra",disable_summer:"Disabilita indicatore Estate",disable_eco:"Disabilita tasto eco",disable_heat:"Disabilita tasto heat",disable_off:"Disabililita tasto off",disable_menu:"Disabilita menu",disable_battery_warning:"Disabilita avviso batteria",disable_buttons:"Disabilita pulsanti più/meno",eco_temperature:"Temperatura target",set_current_as_main:"Imposta la temperatura attuale come target"}}},yt={window_open:"Finestra aperta",night_mode:"Modalità notturna",eco:"Eco",summer:"Estate",cooling:"Raffreddamento",heating:"Riscaldamento",cooling_off:"Raffreddamento spento",heating_off:"Riscaldamento spento",window_closed:"Finestra chiusa"},wt={common:gt,editor:bt,extra_states:yt},kt={version:"Versão",current:"Atual",current_humidity:"Humidade atual",current_temperature:"Temperatura atual",target_temperature:"Temperatura alvo"},At={card:{climate:{disable_window:"Desactivar Janela",disable_summer:"Desactivar Verão",disable_eco:"Desactivar Eco",disable_heat:"Desactivar Aquecimento",disable_off:"Desactivar Off",disable_menu:"Desativar menu",disable_battery_warning:"Desativar aviso de bateria",disable_buttons:"Desativar botões de mais/menos",eco_temperature:"Modo Eco",set_current_as_main:"Mudar para a temperatura local actual"}}},$t={window_open:"Janela aberta",night_mode:"Modo noturno",eco:"Eco",summer:"Verão",cooling:"Refrigeração",heating:"Aquecimento",cooling_off:"Refrigeração desligada",heating_off:"Aquecimento desligado",window_closed:"Janela fechada"},xt={common:kt,editor:At,extra_states:$t},Ct={version:"版本",current:"当前",current_humidity:"当前湿度",current_temperature:"当前温度",target_temperature:"目标温度"},zt={card:{climate:{disable_eco:"停用节能模式按钮",disable_off:"停用开关按钮",disable_menu:"停用菜单按钮",disable_battery_warning:"停用电量警告",disable_buttons:"停用温度加减按钮",eco_temperature:"节能模式温度",set_current_as_main:"交换目标温度与当前温度位置"}}},Et={window_open:"窗口打开",night_mode:"夜间模式",eco:"节能",summer:"夏季",cooling:"冷却",heating:"加热",cooling_off:"冷却关闭",heating_off:"加热关闭",window_closed:"窗口关闭"},Tt={common:Ct,editor:zt,extra_states:Et},St={version:"версія",current:"поточний",current_humidity:"Поточна вологість",current_temperature:"Поточна температура",target_temperature:"Цільова температура"},jt={card:{climate:{disable_window:"Прибрати вікно",disable_summer:"Прибрати літо",disable_eco:"Прибрати еко",disable_heat:"Прибрати обігрів",disable_off:"Прибрати відключення",disable_menu:"Прибрати меню",disable_battery_warning:"Прибрати попередження про акумулятор",disable_buttons:"Прибрати кнопки плюс/мінус",eco_temperature:"Еко температура",set_current_as_main:"Поміняйте місцями цільову з поточною температурою"}}},Dt={window_open:"Вікно відкрите",night_mode:"Нічний режим",eco:"Еко",summer:"Літо",cooling:"Охолодження",heating:"Опалення",cooling_off:"Охолодження вимкнено",heating_off:"Опалення вимкнено",window_closed:"Вікно закрите"},Mt={common:St,editor:jt,extra_states:Dt},Lt={version:"Έκδοση",current:"Tρέχουσα",current_humidity:"Τρέχουσα υγρασία",current_temperature:"Τρέχουσα θερμοκρασία",target_temperature:"Στόχος θερμοκρασίας"},Vt={card:{climate:{disable_window:"Απενεργοποίηση ένδειξης ανοιχτού παραθύρου",disable_summer:"Απενεργοποίηση καλοκαιρινής ένδειξης",disable_eco:"Απενεργοποίηση ένδειξης Eco",disable_heat:"Απενεργοποίηση ένδειξης θέρμανσης",disable_off:"Απενεργοποίηση ένδειξης απενεργοποίησης",disable_menu:"Απενεργοποίηση μενού",disable_battery_warning:"Απενεργοποίηση προειδοποίησης μπαταρίας",disable_buttons:"Απενεργοποίηση κουμπιών Plus/Minus",eco_temperature:"Θερμοκρασία Eco",set_current_as_main:"Αντικατάσταση της επιθυμητής θερμοκρασίας με την τρέχουσα θερμοκρασία"}}},Ot={window_open:"Παράθυρο ανοιχτό",night_mode:"Λειτουργία νυκτός",eco:"Εξοικονόμηση",summer:"Καλοκαίρι",cooling:"Ψύξη",heating:"Θέρμανση",cooling_off:"Ψύξη απενεργοποιημένη",heating_off:"Θέρμανση απενεργοποιημένη",window_closed:"Παράθυρο κλειστό"},Pt={common:Lt,editor:Vt,extra_states:Ot},Ht={version:"versie",current:"huidig",current_humidity:"Huidige luchtvochtigheid",current_temperature:"Huidige temperatuur",target_temperature:"Doeltemperatuur"},Nt={card:{climate:{disable_window:"Venster uitschakelen",disable_summer:"Zomer modus uitschakelen",disable_eco:"Eco-Modus uitzetten",disable_heat:"Verwarming uitzetten",disable_off:"Uitschakelen",disable_menu:"Menu uitschakelen",disable_battery_warning:"Batterij waarschuwing uitzetten",disable_buttons:"Plus/min knoppen uitzetten",eco_temperature:"Eco temperatuur",set_current_as_main:"Doel verwisselen met huidige temperatuurplaatsen"}}},It={window_open:"Venster open",night_mode:"Nachtmodus",eco:"Eco",summer:"Zomer",cooling:"Koeling",heating:"Verwarming",cooling_off:"Koeling uit",heating_off:"Verwarming uit",window_closed:"Venster gesloten"},Rt={common:Ht,editor:Nt,extra_states:It},Ft={version:"versjon",current:"nåværende",current_humidity:"Nåværende luftfuktighet",current_temperature:"Nåværende temperatur",target_temperature:"Måltemperatur"},Ut={card:{climate:{disable_window:"Deaktiver vindu-åpen visning",disable_summer:"Deaktiver sommer visning",disable_eco:"Deaktiver eco visning",disable_heat:"Deaktiver varme visning",disable_off:"Deaktiver av visning",disable_menu:"Deaktiver meny",disable_battery_warning:"Deaktiver batterivarsel",disable_buttons:"Deaktiver pluss/minus knapper",eco_temperature:"Eco temperatur",set_current_as_main:"Bytt måltemperatur med nåværende temperatur"}}},Zt={window_open:"Vindu åpent",night_mode:"Nattmodus",eco:"Eco",summer:"Sommer",cooling:"Kjøling",heating:"Oppvarming",cooling_off:"Kjøling av",heating_off:"Oppvarming av",window_closed:"Vindu lukket"},Wt={common:Ft,editor:Ut,extra_states:Zt},Bt={version:"Verze",current:"Aktuální",current_humidity:"Aktuální vlhkost",current_temperature:"Aktuální teplota",target_temperature:"Cílová teplota"},Yt={card:{climate:{disable_window:"Zakázat okno",disable_summer:"Zakázat léto",disable_eco:"Zakázat eco",disable_heat:"Zakázat topení",disable_off:"Zakázat vypnuto",disable_menu:"Zakázat menu",disable_battery_warning:"Zakázat upozornění baterie",disable_buttons:"Zakázat tlačítka plus/minus",eco_temperature:"Eco teplota",set_current_as_main:"Prohodit místa cílové a aktuální teploty"}}},qt={window_open:"Okno otevřeno",night_mode:"Noční režim",eco:"Eco",summer:"Léto",cooling:"Chlazení",heating:"Topení",cooling_off:"Chlazení vypnuto",heating_off:"Topení vypnuto",window_closed:"Okno zavřeno"},Xt={common:Bt,editor:Yt,extra_states:qt},Kt={version:"različica",current:"trenutno",current_humidity:"Trenutna vlažnost",current_temperature:"Trenutna temperatura",target_temperature:"Ciljna temperatura"},Jt={card:{climate:{disable_window:"Ugasni za okna",disable_summer:"Ugasni poletje",disable_eco:"Ugasni eko",disable_heat:"Ugasni gretje",disable_off:"Ugasni off gumb",disable_menu:"Ugasni menu",disable_battery_warning:"Ugasni obvestila za baterijo",disable_buttons:"Ugasni plus/minus gumbe",eco_temperature:"Eko temperatura",set_current_as_main:"Zamenjaj ciljno temperaturo s trenutno temperaturo prostora"}}},Gt={window_open:"Okno odprto",night_mode:"Nočni način",eco:"Eko",summer:"Poletje",cooling:"Hlajenje",heating:"Ogrevanje",cooling_off:"Hlajenje izklopljeno",heating_off:"Ogrevanje izklopljeno",window_closed:"Okno zaprto"},Qt={common:Kt,editor:Jt,extra_states:Gt},ei={version:"version",current:"Nuvarande",current_humidity:"Nuvarande luftfuktighet",current_temperature:"Nuvarande temperatur",target_temperature:"Måltemperatur"},ti={card:{climate:{disable_window:"Inaktivera fönster-öppen visning",disable_summer:"Inaktivera sommar visning",disable_eco:"Inaktivera eco visning",disable_heat:"Inaktivera värme visning",disable_off:"Inaktivera av visning",disable_menu:"Inaktivera meny",disable_battery_warning:"Inaktivera batterivarning",disable_buttons:"Inaktivera plus/minus knappar",eco_temperature:"Eco temperatur",set_current_as_main:"Byt måltemperatur med nuvarande temperatur"}}},ii={window_open:"Fönster öppet",night_mode:"Nattläge",eco:"Eco",summer:"Sommar",cooling:"Kylning",heating:"Uppvärmning",cooling_off:"Kylning av",heating_off:"Uppvärmning av",window_closed:"Fönster stängt"},ri={common:ei,editor:ti,extra_states:ii},ni={version:"Версия",current:"Текущ",current_humidity:"Текуща влажност",current_temperature:"Текуща температура",target_temperature:"Целева температура"},ai={card:{climate:{disable_window:"Деактивиране на показване на отворен прозорец",disable_summer:"Деактивиране на показване на лято",disable_eco:"Деактивиране на показване на еко",disable_heat:"Деактивиране на показване на отопление",disable_off:"Деактивиране на показване на изключено",disable_menu:"Деактивиране на менюто",disable_battery_warning:"Деактивиране на предупреждение за батерията",disable_buttons:"Деактивиране на бутоните плюс/минус",eco_temperature:"Еко температура",set_current_as_main:"Размяна на целевата температура с текущата температура"}}},oi={window_open:"Прозорецът е отворен",night_mode:"Нощен режим",eco:"Екологичен режим",summer:"Лято",cooling:"Охлаждане",heating:"Отопление",cooling_off:"Охлаждането е изключено",heating_off:"Отоплението е изключено",window_closed:"Прозорецът е затворен"},si={common:ni,editor:ai,extra_states:oi},li={version:"Versio",current:"Nykyinen",current_humidity:"Nykyinen kosteus",current_temperature:"Nykyinen lämpötila",target_temperature:"Tavoitelämpötila"},ci={card:{climate:{disable_window:"Poista ikkuna auki -ilmoitus käytöstä",disable_summer:"Poista kesä -ilmoitus käytöstä",disable_eco:"Poista Eco -ilmoitus käytöstä",disable_heat:"Poista lämmitys -ilmoitus käytöstä",disable_off:"Poista pois päältä -ilmoitus käytöstä",disable_menu:"Poista valikko käytöstä",disable_battery_warning:"Poista akun varoitus käytöstä",disable_buttons:"Poista plus/miinus -painikkeet käytöstä",eco_temperature:"Eco lämpötila",set_current_as_main:"Vaihda tavoitelämpötila nykyiseen lämpötilaan"}}},ui={window_open:"Ikkuna auki",night_mode:"Yötila",eco:"Eco",summer:"Kesä",cooling:"Jäähdytys",heating:"Lämmitys",cooling_off:"Jäähdytys pois päältä",heating_off:"Lämmitys pois päältä",window_closed:"Ikkuna kiinni"},di={common:li,editor:ci,extra_states:ui},hi={version:"versiune",current:"curent",current_humidity:"Umiditate curentă",current_temperature:"Temperatură curentă",target_temperature:"Temperatură țintă"},mi={card:{climate:{disable_window:"Dezactivează fereastra",disable_summer:"Dezactivează vara",disable_eco:"Dezactivează eco",disable_heat:"Dezactivează încălzirea",disable_off:"Dezactivează oprirea",disable_menu:"Dezactivează meniul",disable_battery_warning:"Dezactivează avertizarea bateriei",disable_buttons:"Dezactivează butoanele plus/minus",eco_temperature:"Temperatura eco",set_current_as_main:"Schimbă locurile temperaturii țintă cu cea curentă"}}},pi={window_open:"Fereastră deschisă",night_mode:"Mod noapte",eco:"Eco",summer:"Vara",cooling:"Răcire",heating:"Încălzire",cooling_off:"Răcire oprită",heating_off:"Încălzire oprită",window_closed:"Fereastră închisă"},_i={common:hi,editor:mi,extra_states:pi},fi={version:"Versió",current:"Actual",current_humidity:"Humitat actual",current_temperature:"Temperatura actual",target_temperature:"Temperatura objectiu"},vi={card:{climate:{disable_window:"Desactivar indicador de finestra oberta",disable_summer:"Desactivar indicador d'estiu",disable_eco:"Desactivar indicador eco",disable_heat:"Desactivar indicador de calefacció",disable_off:"Desactivar indicador d'apagat",disable_menu:"Desactivar menú",disable_battery_warning:"Desactivar advertència de bateria",disable_buttons:"Desactivar botons de més/menys",eco_temperature:"Temperatura eco",set_current_as_main:"Intercanviar la temperatura objectiu amb la temperatura actual"}}},gi={window_open:"Finestra oberta",night_mode:"Mode nocturn",eco:"Eco",summer:"Estiu",cooling:"Refredament",heating:"Escalfament",cooling_off:"Refredament apagat",heating_off:"Escalfament apagat",window_closed:"Finestra tancada"},bi={common:fi,editor:vi,extra_states:gi},yi={version:"versijas",current:"pašreizējais",current_humidity:"Pašreizējais mitrums",current_temperature:"Pašreizējā temperatūra",target_temperature:"Mērķa temperatūra"},wi={card:{climate:{disable_window:"Atspējot logu indikatoru",disable_summer:"Atspējot vasaras režīmu",disable_eco:"Atspējot ekonomisko režīmu",disable_heat:"Atspējot sildīšanas režīmu",disable_off:"Atspējot izslēgšanu",disable_menu:"Atspējot izvēlni",disable_battery_warning:"Atspējot baterijas brīdinājumu",disable_buttons:"Atspējot plus/mīnus pogas",eco_temperature:"Eko režīma temperatūra",set_current_as_main:"Apmainīt pašreizējo un mērķa temperatūru vietām"}}},ki={window_open:"Logs atvērts",night_mode:"Nakts režīms",eco:"Eko režīms",summer:"Vasaras režīms",cooling:"Dzesēšana",heating:"Apkure",cooling_off:"Dzesēšana izslēgta",heating_off:"Apkure izslēgta",window_closed:"Logs aizvērts"},Ai={common:yi,editor:wi,extra_states:ki};const $i={en:Ce,de:je,fr:Oe,ru:Re,sk:Object.freeze({__proto__:null,common:Ye,default:Ke,editor:qe,extra_states:Xe}),hr:Object.freeze({__proto__:null,common:Je,default:et,editor:Ge,extra_states:Qe}),hu:Object.freeze({__proto__:null,common:tt,default:at,editor:rt,extra_states:nt,jacuzzi:it}),pl:Be,da:Object.freeze({__proto__:null,common:ot,default:ct,editor:st,extra_states:lt}),es:Object.freeze({__proto__:null,common:ut,default:mt,editor:dt,extra_states:ht}),tr:Object.freeze({__proto__:null,common:pt,default:vt,editor:_t,extra_states:ft}),it:Object.freeze({__proto__:null,common:gt,default:wt,editor:bt,extra_states:yt}),pt:Object.freeze({__proto__:null,common:kt,default:xt,editor:At,extra_states:$t}),cn:Object.freeze({__proto__:null,common:Ct,default:Tt,editor:zt,extra_states:Et}),uk:Object.freeze({__proto__:null,common:St,default:Mt,editor:jt,extra_states:Dt}),el:Object.freeze({__proto__:null,common:Lt,default:Pt,editor:Vt,extra_states:Ot}),nl:Object.freeze({__proto__:null,common:Ht,default:Rt,editor:Nt,extra_states:It}),no:Object.freeze({__proto__:null,common:Ft,default:Wt,editor:Ut,extra_states:Zt}),cs:Object.freeze({__proto__:null,common:Bt,default:Xt,editor:Yt,extra_states:qt}),sl:Object.freeze({__proto__:null,common:Kt,default:Qt,editor:Jt,extra_states:Gt}),sv:Object.freeze({__proto__:null,common:ei,default:ri,editor:ti,extra_states:ii}),bg:Object.freeze({__proto__:null,common:ni,default:si,editor:ai,extra_states:oi}),fi:Object.freeze({__proto__:null,common:li,default:di,editor:ci,extra_states:ui}),ro:Object.freeze({__proto__:null,common:hi,default:_i,editor:mi,extra_states:pi}),ca:Object.freeze({__proto__:null,common:fi,default:bi,editor:vi,extra_states:gi}),lv:Object.freeze({__proto__:null,common:yi,default:Ai,editor:wi,extra_states:ki})},xi="en";function Ci({hass:e,string:t,search:i="",replace:r=""}){var n;const a=null!==(n=null==e?void 0:e.locale.language)&&void 0!==n?n:xi;let o;try{o=t.split(".").reduce(((e,t)=>e[t]),$i[a])}catch(e){o=t.split(".").reduce(((e,t)=>e[t]),$i.en)}return void 0===o&&(o=t.split(".").reduce(((e,t)=>e[t]),$i.en)),""!==i&&""!==r&&(o=o.replace(i,r)),o}function zi(e,t){try{return e.split(".").reduce(((e,t)=>e[t]),$i[t])}catch(e){return}}var Ei,Ti,Si=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function ji(e,t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(r=e[i],n=t[i],!(r===n||Si(r)&&Si(n)))return!1;var r,n;return!0}function Di(e,t){void 0===t&&(t=ji);var i=null;function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(i&&i.lastThis===this&&t(r,i.lastArgs))return i.lastResult;var a=e.apply(this,r);return i={lastResult:a,lastArgs:r,lastThis:this},a}return r.clear=function(){i=null},r}Di((e=>new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric"}))),Di((e=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"}))),Di((e=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"numeric",day:"numeric"}))),Di((e=>new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short"}))),Di((e=>new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric"}))),Di((e=>new Intl.DateTimeFormat(e.language,{month:"long"}))),Di((e=>new Intl.DateTimeFormat(e.language,{year:"numeric"}))),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Ei||(Ei={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Ti||(Ti={}));const Mi=Di((e=>{if(e.time_format===Ti.language||e.time_format===Ti.system){const t=e.time_format===Ti.language?e.language:void 0,i=(new Date).toLocaleString(t);return i.includes("AM")||i.includes("PM")}return e.time_format===Ti.am_pm}));Di((e=>new Intl.DateTimeFormat("en"!==e.language||Mi(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:Mi(e)?"numeric":"2-digit",minute:"2-digit",hour12:Mi(e)}))),Di((e=>new Intl.DateTimeFormat("en"!==e.language||Mi(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:Mi(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:Mi(e)}))),Di((e=>new Intl.DateTimeFormat("en"!==e.language||Mi(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",hour12:Mi(e)}))),Di((e=>new Intl.DateTimeFormat("en"!==e.language||Mi(e)?e.language:"en-u-hc-h23",{hour:"numeric",minute:"2-digit",hour12:Mi(e)}))),Di((e=>new Intl.DateTimeFormat("en"!==e.language||Mi(e)?e.language:"en-u-hc-h23",{hour:Mi(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:Mi(e)}))),Di((e=>new Intl.DateTimeFormat("en"!==e.language||Mi(e)?e.language:"en-u-hc-h23",{weekday:"long",hour:Mi(e)?"numeric":"2-digit",minute:"2-digit",hour12:Mi(e)})));const Li=(e,t,i,r)=>{r=r||{},i=null==i?{}:i;const n=new Event(t,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return n.detail=i,e.dispatchEvent(n),n},Vi=(e,t,i)=>Math.min(Math.max(e,t),i),Oi=(e,t,i)=>{const r=t?(e=>{switch(e.number_format){case Ei.comma_decimal:return["en-US","en"];case Ei.decimal_comma:return["de","es","it"];case Ei.space_comma:return["fr","sv","cs"];case Ei.system:return;default:return e.language}})(t):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)!==Ei.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(r,Pi(e,i)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,Pi(e,i)).format(Number(e))}return"string"==typeof e?e:`${((e,t=2)=>Math.round(e*10**t)/10**t)(e,null==i?void 0:i.maximumFractionDigits).toString()}${"currency"===(null==i?void 0:i.style)?` ${i.currency}`:""}`},Pi=(e,t)=>{const i=Object.assign({maximumFractionDigits:2},t);if("string"!=typeof e)return i;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){const t=e.indexOf(".")>-1?e.split(".")[1].length:0;i.minimumFractionDigits=t,i.maximumFractionDigits=t}return i};class Hi extends TypeError{constructor(e,t){let i;const{message:r,explanation:n,...a}=e,{path:o}=e,s=0===o.length?r:`At path: ${o.join(".")} -- ${r}`;super(n??s),null!=n&&(this.cause=s),Object.assign(this,a),this.name=this.constructor.name,this.failures=()=>i??(i=[e,...t()])}}function Ni(e){return"object"==typeof e&&null!=e}function Ii(e){return"symbol"==typeof e?e.toString():"string"==typeof e?JSON.stringify(e):`${e}`}function Ri(e,t,i,r){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:n,branch:a}=t,{type:o}=i,{refinement:s,message:l=`Expected a value of type \`${o}\`${s?` with refinement \`${s}\``:""}, but received: \`${Ii(r)}\``}=e;return{value:r,type:o,refinement:s,key:n[n.length-1],path:n,branch:a,...e,message:l}}function*Fi(e,t,i,r){(function(e){return Ni(e)&&"function"==typeof e[Symbol.iterator]})(e)||(e=[e]);for(const n of e){const e=Ri(n,t,i,r);e&&(yield e)}}function*Ui(e,t,i={}){const{path:r=[],branch:n=[e],coerce:a=!1,mask:o=!1}=i,s={path:r,branch:n};if(a&&(e=t.coercer(e,s),o&&"type"!==t.type&&Ni(t.schema)&&Ni(e)&&!Array.isArray(e)))for(const i in e)void 0===t.schema[i]&&delete e[i];let l="valid";for(const r of t.validator(e,s))r.explanation=i.message,l="not_valid",yield[r,void 0];for(let[c,u,d]of t.entries(e,s)){const t=Ui(u,d,{path:void 0===c?r:[...r,c],branch:void 0===c?n:[...n,u],coerce:a,mask:o,message:i.message});for(const i of t)i[0]?(l=null!=i[0].refinement?"not_refined":"not_valid",yield[i[0],void 0]):a&&(u=i[1],void 0===c?e=u:e instanceof Map?e.set(c,u):e instanceof Set?e.add(u):Ni(e)&&(void 0!==u||c in e)&&(e[c]=u))}if("not_valid"!==l)for(const r of t.refiner(e,s))r.explanation=i.message,l="not_refined",yield[r,void 0];"valid"===l&&(yield[void 0,e])}class Zi{constructor(e){const{type:t,schema:i,validator:r,refiner:n,coercer:a=(e=>e),entries:o=function*(){}}=e;this.type=t,this.schema=i,this.entries=o,this.coercer=a,this.validator=r?(e,t)=>Fi(r(e,t),t,this,e):()=>[],this.refiner=n?(e,t)=>Fi(n(e,t),t,this,e):()=>[]}assert(e,t){return Wi(e,this,t)}create(e,t){return function(e,t,i){const r=Bi(e,t,{coerce:!0,message:i});if(r[0])throw r[0];return r[1]}(e,this,t)}is(e){return function(e,t){const i=Bi(e,t);return!i[0]}(e,this)}mask(e,t){return function(e,t,i){const r=Bi(e,t,{coerce:!0,mask:!0,message:i});if(r[0])throw r[0];return r[1]}(e,this,t)}validate(e,t={}){return Bi(e,this,t)}}function Wi(e,t,i){const r=Bi(e,t,{message:i});if(r[0])throw r[0]}function Bi(e,t,i={}){const r=Ui(e,t,i),n=function(e){const{done:t,value:i}=e.next();return t?void 0:i}(r);if(n[0]){const e=new Hi(n[0],(function*(){for(const e of r)e[0]&&(yield e[0])}));return[e,void 0]}return[void 0,n[1]]}function Yi(e,t){return new Zi({type:e,schema:null,validator:t})}function qi(e){return new Zi({type:"array",schema:e,*entries(t){if(e&&Array.isArray(t))for(const[i,r]of t.entries())yield[i,r,e]},coercer:e=>Array.isArray(e)?e.slice():e,validator:e=>Array.isArray(e)||`Expected an array value, but received: ${Ii(e)}`})}function Xi(){return Yi("boolean",(e=>"boolean"==typeof e))}function Ki(e){const t=Ii(e),i=typeof e;return new Zi({type:"literal",schema:"string"===i||"number"===i||"boolean"===i?e:null,validator:i=>i===e||`Expected the literal \`${t}\`, but received: ${Ii(i)}`})}function Ji(){return Yi("number",(e=>"number"==typeof e&&!isNaN(e)||`Expected a number, but received: ${Ii(e)}`))}function Gi(e){const t=e?Object.keys(e):[],i=Yi("never",(()=>!1));return new Zi({type:"object",schema:e||null,*entries(r){if(e&&Ni(r)){const n=new Set(Object.keys(r));for(const i of t)n.delete(i),yield[i,r[i],e[i]];for(const e of n)yield[e,r[e],i]}},validator:e=>Ni(e)||`Expected an object, but received: ${Ii(e)}`,coercer:e=>Ni(e)?{...e}:e})}function Qi(e){return new Zi({...e,validator:(t,i)=>void 0===t||e.validator(t,i),refiner:(t,i)=>void 0===t||e.refiner(t,i)})}function er(){return Yi("string",(e=>"string"==typeof e||`Expected a string, but received: ${Ii(e)}`))}function tr(e){const t=Object.keys(e);return new Zi({type:"type",schema:e,*entries(i){if(Ni(i))for(const r of t)yield[r,i[r],e[r]]},validator:e=>Ni(e)||`Expected an object, but received: ${Ii(e)}`,coercer:e=>Ni(e)?{...e}:e})}function ir(e){const t=e.map((e=>e.type)).join(" | ");return new Zi({type:"union",schema:null,coercer(t){for(const i of e){const[e,r]=i.validate(t,{coerce:!0});if(!e)return r}return t},validator(i,r){const n=[];for(const t of e){const[...e]=Ui(i,t,r),[a]=e;if(!a[0])return[];for(const[t]of e)t&&n.push(t)}return[`Expected the value to satisfy a union of \`${t}\`, but received: ${Ii(i)}`,...n]}})}const rr=Gi({user:er()}),nr=ir([Xi(),Gi({text:Qi(er()),excemptions:Qi(qi(rr))})]),ar=Gi({action:Ki("url"),url_path:er(),confirmation:Qi(nr)}),or=Gi({action:Ki("call-service"),service:er(),service_data:Qi(Gi()),data:Qi(Gi()),target:Qi(Gi({entity_id:Qi(ir([er(),qi(er())])),device_id:Qi(ir([er(),qi(er())])),area_id:Qi(ir([er(),qi(er())]))})),confirmation:Qi(nr)}),sr=Gi({action:Ki("navigate"),navigation_path:er(),confirmation:Qi(nr)}),lr=tr({action:Ki("fire-dom-event")}),cr=Gi({action:function(e){const t={},i=e.map((e=>Ii(e))).join();for(const i of e)t[i]=i;return new Zi({type:"enums",schema:t,validator:t=>e.includes(t)||`Expected one of \`${i}\`, but received: ${Ii(t)}`})}(["none","toggle","more-info","call-service","url","navigate"]),confirmation:Qi(nr)});var ur;ur=e=>{if(e&&"object"==typeof e&&"action"in e)switch(e.action){case"call-service":return or;case"fire-dom-event":return lr;case"navigate":return sr;case"url":return ar}return cr},new Zi({type:"dynamic",schema:null,*entries(e,t){const i=ur(e,t);yield*i.entries(e,t)},validator:(e,t)=>ur(e,t).validator(e,t),coercer:(e,t)=>ur(e,t).coercer(e,t),refiner:(e,t)=>ur(e,t).refiner(e,t)}),o`
    #sortable a:nth-of-type(2n) paper-icon-item {
        animation-name: keyframes1;
        animation-iteration-count: infinite;
        transform-origin: 50% 10%;
        animation-delay: -0.75s;
        animation-duration: 0.25s;
    }

    #sortable a:nth-of-type(2n-1) paper-icon-item {
        animation-name: keyframes2;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        transform-origin: 30% 5%;
        animation-delay: -0.5s;
        animation-duration: 0.33s;
    }

    #sortable a {
        height: 48px;
        display: flex;
    }

    #sortable {
        outline: none;
        display: block !important;
    }

    .hidden-panel {
        display: flex !important;
    }

    .sortable-fallback {
        display: none;
    }

    .sortable-ghost {
        opacity: 0.4;
    }

    .sortable-fallback {
        opacity: 0;
    }

    @keyframes keyframes1 {
        0% {
            transform: rotate(-1deg);
            animation-timing-function: ease-in;
        }

        50% {
            transform: rotate(1.5deg);
            animation-timing-function: ease-out;
        }
    }

    @keyframes keyframes2 {
        0% {
            transform: rotate(1deg);
            animation-timing-function: ease-in;
        }

        50% {
            transform: rotate(-1.5deg);
            animation-timing-function: ease-out;
        }
    }

    .show-panel,
    .hide-panel {
        display: none;
        position: absolute;
        top: 0;
        right: 4px;
        --mdc-icon-button-size: 40px;
    }

    :host([rtl]) .show-panel {
        right: initial;
        left: 4px;
    }

    .hide-panel {
        top: 4px;
        right: 8px;
    }

    :host([rtl]) .hide-panel {
        right: initial;
        left: 8px;
    }

    :host([expanded]) .hide-panel {
        display: block;
    }

    :host([expanded]) .show-panel {
        display: inline-flex;
    }

    paper-icon-item.hidden-panel,
    paper-icon-item.hidden-panel span,
    paper-icon-item.hidden-panel ha-icon[slot="item-icon"] {
        color: var(--secondary-text-color);
        cursor: pointer;
    }
`;const dr=([[e,t],[i,r]],[n,a])=>[e*n+t*a,i*n+r*a],hr=([e,t],[i,r])=>[e+i,t+r],mr=e=>e/180*Math.PI,pr=e=>{const{x:t,y:i,r:r,start:n,end:a,rotate:o=0}=e,s=t,l=i,c=r,u=r,d=mr(n),h=(mr(a)-d)%(2*Math.PI),m=mr(o),p=(e=>[[Math.cos(e),-Math.sin(e)],[Math.sin(e),Math.cos(e)]])(m),[_,f]=hr(dr(p,[c*Math.cos(d),u*Math.sin(d)]),[s,l]),[v,g]=hr(dr(p,[c*Math.cos(d+h),u*Math.sin(d+h)]),[s,l]),b=h>Math.PI?1:0,y=h>0?1:0;return["M",_,f,"A",c,u,m/(2*Math.PI)*360,b,y,v,g].join(" ")};function _r(){return _r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},_r.apply(this,arguments)}function fr(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function vr(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var gr,br="function"!=typeof Object.assign?function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])}return t}:Object.assign,yr=["","webkit","Moz","MS","ms","o"],wr="undefined"==typeof document?{style:{}}:document.createElement("div"),kr=Math.round,Ar=Math.abs,$r=Date.now;function xr(e,t){for(var i,r,n=t[0].toUpperCase()+t.slice(1),a=0;a<yr.length;){if((r=(i=yr[a])?i+n:t)in e)return r;a++}}gr="undefined"==typeof window?{}:window;var Cr=xr(wr.style,"touchAction"),zr=void 0!==Cr;var Er="compute",Tr="auto",Sr="manipulation",jr="none",Dr="pan-x",Mr="pan-y",Lr=function(){if(!zr)return!1;var e={},t=gr.CSS&&gr.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(i){return e[i]=!t||gr.CSS.supports("touch-action",i)})),e}(),Vr="ontouchstart"in gr,Or=void 0!==xr(gr,"PointerEvent"),Pr=Vr&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),Hr="touch",Nr="mouse",Ir=25,Rr=1,Fr=4,Ur=8,Zr=1,Wr=2,Br=4,Yr=8,qr=16,Xr=Wr|Br,Kr=Yr|qr,Jr=Xr|Kr,Gr=["x","y"],Qr=["clientX","clientY"];function en(e,t,i){var r;if(e)if(e.forEach)e.forEach(t,i);else if(void 0!==e.length)for(r=0;r<e.length;)t.call(i,e[r],r,e),r++;else for(r in e)e.hasOwnProperty(r)&&t.call(i,e[r],r,e)}function tn(e,t){return"function"==typeof e?e.apply(t&&t[0]||void 0,t):e}function rn(e,t){return e.indexOf(t)>-1}var nn=function(){function e(e,t){this.manager=e,this.set(t)}var t=e.prototype;return t.set=function(e){e===Er&&(e=this.compute()),zr&&this.manager.element.style&&Lr[e]&&(this.manager.element.style[Cr]=e),this.actions=e.toLowerCase().trim()},t.update=function(){this.set(this.manager.options.touchAction)},t.compute=function(){var e=[];return en(this.manager.recognizers,(function(t){tn(t.options.enable,[t])&&(e=e.concat(t.getTouchAction()))})),function(e){if(rn(e,jr))return jr;var t=rn(e,Dr),i=rn(e,Mr);return t&&i?jr:t||i?t?Dr:Mr:rn(e,Sr)?Sr:Tr}(e.join(" "))},t.preventDefaults=function(e){var t=e.srcEvent,i=e.offsetDirection;if(this.manager.session.prevented)t.preventDefault();else{var r=this.actions,n=rn(r,jr)&&!Lr[jr],a=rn(r,Mr)&&!Lr[Mr],o=rn(r,Dr)&&!Lr[Dr];if(n){var s=1===e.pointers.length,l=e.distance<2,c=e.deltaTime<250;if(s&&l&&c)return}if(!o||!a)return n||a&&i&Xr||o&&i&Kr?this.preventSrc(t):void 0}},t.preventSrc=function(e){this.manager.session.prevented=!0,e.preventDefault()},e}();function an(e,t){for(;e;){if(e===t)return!0;e=e.parentNode}return!1}function on(e){var t=e.length;if(1===t)return{x:kr(e[0].clientX),y:kr(e[0].clientY)};for(var i=0,r=0,n=0;n<t;)i+=e[n].clientX,r+=e[n].clientY,n++;return{x:kr(i/t),y:kr(r/t)}}function sn(e){for(var t=[],i=0;i<e.pointers.length;)t[i]={clientX:kr(e.pointers[i].clientX),clientY:kr(e.pointers[i].clientY)},i++;return{timeStamp:$r(),pointers:t,center:on(t),deltaX:e.deltaX,deltaY:e.deltaY}}function ln(e,t,i){i||(i=Gr);var r=t[i[0]]-e[i[0]],n=t[i[1]]-e[i[1]];return Math.sqrt(r*r+n*n)}function cn(e,t,i){i||(i=Gr);var r=t[i[0]]-e[i[0]],n=t[i[1]]-e[i[1]];return 180*Math.atan2(n,r)/Math.PI}function un(e,t){return e===t?Zr:Ar(e)>=Ar(t)?e<0?Wr:Br:t<0?Yr:qr}function dn(e,t,i){return{x:t/e||0,y:i/e||0}}function hn(e,t){var i=e.session,r=t.pointers,n=r.length;i.firstInput||(i.firstInput=sn(t)),n>1&&!i.firstMultiple?i.firstMultiple=sn(t):1===n&&(i.firstMultiple=!1);var a=i.firstInput,o=i.firstMultiple,s=o?o.center:a.center,l=t.center=on(r);t.timeStamp=$r(),t.deltaTime=t.timeStamp-a.timeStamp,t.angle=cn(s,l),t.distance=ln(s,l),function(e,t){var i=t.center,r=e.offsetDelta||{},n=e.prevDelta||{},a=e.prevInput||{};t.eventType!==Rr&&a.eventType!==Fr||(n=e.prevDelta={x:a.deltaX||0,y:a.deltaY||0},r=e.offsetDelta={x:i.x,y:i.y}),t.deltaX=n.x+(i.x-r.x),t.deltaY=n.y+(i.y-r.y)}(i,t),t.offsetDirection=un(t.deltaX,t.deltaY);var c,u,d=dn(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=d.x,t.overallVelocityY=d.y,t.overallVelocity=Ar(d.x)>Ar(d.y)?d.x:d.y,t.scale=o?(c=o.pointers,ln((u=r)[0],u[1],Qr)/ln(c[0],c[1],Qr)):1,t.rotation=o?function(e,t){return cn(t[1],t[0],Qr)+cn(e[1],e[0],Qr)}(o.pointers,r):0,t.maxPointers=i.prevInput?t.pointers.length>i.prevInput.maxPointers?t.pointers.length:i.prevInput.maxPointers:t.pointers.length,function(e,t){var i,r,n,a,o=e.lastInterval||t,s=t.timeStamp-o.timeStamp;if(t.eventType!==Ur&&(s>Ir||void 0===o.velocity)){var l=t.deltaX-o.deltaX,c=t.deltaY-o.deltaY,u=dn(s,l,c);r=u.x,n=u.y,i=Ar(u.x)>Ar(u.y)?u.x:u.y,a=un(l,c),e.lastInterval=t}else i=o.velocity,r=o.velocityX,n=o.velocityY,a=o.direction;t.velocity=i,t.velocityX=r,t.velocityY=n,t.direction=a}(i,t);var h,m=e.element,p=t.srcEvent;an(h=p.composedPath?p.composedPath()[0]:p.path?p.path[0]:p.target,m)&&(m=h),t.target=m}function mn(e,t,i){var r=i.pointers.length,n=i.changedPointers.length,a=t&Rr&&r-n==0,o=t&(Fr|Ur)&&r-n==0;i.isFirst=!!a,i.isFinal=!!o,a&&(e.session={}),i.eventType=t,hn(e,i),e.emit("hammer.input",i),e.recognize(i),e.session.prevInput=i}function pn(e){return e.trim().split(/\s+/g)}function _n(e,t,i){en(pn(t),(function(t){e.addEventListener(t,i,!1)}))}function fn(e,t,i){en(pn(t),(function(t){e.removeEventListener(t,i,!1)}))}function vn(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow||window}var gn=function(){function e(e,t){var i=this;this.manager=e,this.callback=t,this.element=e.element,this.target=e.options.inputTarget,this.domHandler=function(t){tn(e.options.enable,[e])&&i.handler(t)},this.init()}var t=e.prototype;return t.handler=function(){},t.init=function(){this.evEl&&_n(this.element,this.evEl,this.domHandler),this.evTarget&&_n(this.target,this.evTarget,this.domHandler),this.evWin&&_n(vn(this.element),this.evWin,this.domHandler)},t.destroy=function(){this.evEl&&fn(this.element,this.evEl,this.domHandler),this.evTarget&&fn(this.target,this.evTarget,this.domHandler),this.evWin&&fn(vn(this.element),this.evWin,this.domHandler)},e}();function bn(e,t,i){if(e.indexOf&&!i)return e.indexOf(t);for(var r=0;r<e.length;){if(i&&e[r][i]==t||!i&&e[r]===t)return r;r++}return-1}var yn={pointerdown:Rr,pointermove:2,pointerup:Fr,pointercancel:Ur,pointerout:Ur},wn={2:Hr,3:"pen",4:Nr,5:"kinect"},kn="pointerdown",An="pointermove pointerup pointercancel";gr.MSPointerEvent&&!gr.PointerEvent&&(kn="MSPointerDown",An="MSPointerMove MSPointerUp MSPointerCancel");var $n=function(e){function t(){var i,r=t.prototype;return r.evEl=kn,r.evWin=An,(i=e.apply(this,arguments)||this).store=i.manager.session.pointerEvents=[],i}return fr(t,e),t.prototype.handler=function(e){var t=this.store,i=!1,r=e.type.toLowerCase().replace("ms",""),n=yn[r],a=wn[e.pointerType]||e.pointerType,o=a===Hr,s=bn(t,e.pointerId,"pointerId");n&Rr&&(0===e.button||o)?s<0&&(t.push(e),s=t.length-1):n&(Fr|Ur)&&(i=!0),s<0||(t[s]=e,this.callback(this.manager,n,{pointers:t,changedPointers:[e],pointerType:a,srcEvent:e}),i&&t.splice(s,1))},t}(gn);function xn(e){return Array.prototype.slice.call(e,0)}function Cn(e,t,i){for(var r=[],n=[],a=0;a<e.length;){var o=t?e[a][t]:e[a];bn(n,o)<0&&r.push(e[a]),n[a]=o,a++}return i&&(r=t?r.sort((function(e,i){return e[t]>i[t]})):r.sort()),r}var zn={touchstart:Rr,touchmove:2,touchend:Fr,touchcancel:Ur},En=function(e){function t(){var i;return t.prototype.evTarget="touchstart touchmove touchend touchcancel",(i=e.apply(this,arguments)||this).targetIds={},i}return fr(t,e),t.prototype.handler=function(e){var t=zn[e.type],i=Tn.call(this,e,t);i&&this.callback(this.manager,t,{pointers:i[0],changedPointers:i[1],pointerType:Hr,srcEvent:e})},t}(gn);function Tn(e,t){var i,r,n=xn(e.touches),a=this.targetIds;if(t&(2|Rr)&&1===n.length)return a[n[0].identifier]=!0,[n,n];var o=xn(e.changedTouches),s=[],l=this.target;if(r=n.filter((function(e){return an(e.target,l)})),t===Rr)for(i=0;i<r.length;)a[r[i].identifier]=!0,i++;for(i=0;i<o.length;)a[o[i].identifier]&&s.push(o[i]),t&(Fr|Ur)&&delete a[o[i].identifier],i++;return s.length?[Cn(r.concat(s),"identifier",!0),s]:void 0}var Sn={mousedown:Rr,mousemove:2,mouseup:Fr},jn=function(e){function t(){var i,r=t.prototype;return r.evEl="mousedown",r.evWin="mousemove mouseup",(i=e.apply(this,arguments)||this).pressed=!1,i}return fr(t,e),t.prototype.handler=function(e){var t=Sn[e.type];t&Rr&&0===e.button&&(this.pressed=!0),2&t&&1!==e.which&&(t=Fr),this.pressed&&(t&Fr&&(this.pressed=!1),this.callback(this.manager,t,{pointers:[e],changedPointers:[e],pointerType:Nr,srcEvent:e}))},t}(gn),Dn=2500;function Mn(e){var t=e.changedPointers[0];if(t.identifier===this.primaryTouch){var i={x:t.clientX,y:t.clientY},r=this.lastTouches;this.lastTouches.push(i);setTimeout((function(){var e=r.indexOf(i);e>-1&&r.splice(e,1)}),Dn)}}function Ln(e,t){e&Rr?(this.primaryTouch=t.changedPointers[0].identifier,Mn.call(this,t)):e&(Fr|Ur)&&Mn.call(this,t)}function Vn(e){for(var t=e.srcEvent.clientX,i=e.srcEvent.clientY,r=0;r<this.lastTouches.length;r++){var n=this.lastTouches[r],a=Math.abs(t-n.x),o=Math.abs(i-n.y);if(a<=25&&o<=25)return!0}return!1}var On=function(){return function(e){function t(t,i){var r;return(r=e.call(this,t,i)||this).handler=function(e,t,i){var n=i.pointerType===Hr,a=i.pointerType===Nr;if(!(a&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)Ln.call(vr(vr(r)),t,i);else if(a&&Vn.call(vr(vr(r)),i))return;r.callback(e,t,i)}},r.touch=new En(r.manager,r.handler),r.mouse=new jn(r.manager,r.handler),r.primaryTouch=null,r.lastTouches=[],r}return fr(t,e),t.prototype.destroy=function(){this.touch.destroy(),this.mouse.destroy()},t}(gn)}();function Pn(e,t,i){return!!Array.isArray(e)&&(en(e,i[t],i),!0)}var Hn=32,Nn=1;function In(e,t){var i=t.manager;return i?i.get(e):e}function Rn(e){return 16&e?"cancel":8&e?"end":4&e?"move":2&e?"start":""}var Fn=function(){function e(e){void 0===e&&(e={}),this.options=_r({enable:!0},e),this.id=Nn++,this.manager=null,this.state=1,this.simultaneous={},this.requireFail=[]}var t=e.prototype;return t.set=function(e){return br(this.options,e),this.manager&&this.manager.touchAction.update(),this},t.recognizeWith=function(e){if(Pn(e,"recognizeWith",this))return this;var t=this.simultaneous;return t[(e=In(e,this)).id]||(t[e.id]=e,e.recognizeWith(this)),this},t.dropRecognizeWith=function(e){return Pn(e,"dropRecognizeWith",this)||(e=In(e,this),delete this.simultaneous[e.id]),this},t.requireFailure=function(e){if(Pn(e,"requireFailure",this))return this;var t=this.requireFail;return-1===bn(t,e=In(e,this))&&(t.push(e),e.requireFailure(this)),this},t.dropRequireFailure=function(e){if(Pn(e,"dropRequireFailure",this))return this;e=In(e,this);var t=bn(this.requireFail,e);return t>-1&&this.requireFail.splice(t,1),this},t.hasRequireFailures=function(){return this.requireFail.length>0},t.canRecognizeWith=function(e){return!!this.simultaneous[e.id]},t.emit=function(e){var t=this,i=this.state;function r(i){t.manager.emit(i,e)}i<8&&r(t.options.event+Rn(i)),r(t.options.event),e.additionalEvent&&r(e.additionalEvent),i>=8&&r(t.options.event+Rn(i))},t.tryEmit=function(e){if(this.canEmit())return this.emit(e);this.state=Hn},t.canEmit=function(){for(var e=0;e<this.requireFail.length;){if(!(33&this.requireFail[e].state))return!1;e++}return!0},t.recognize=function(e){var t=br({},e);if(!tn(this.options.enable,[this,t]))return this.reset(),void(this.state=Hn);56&this.state&&(this.state=1),this.state=this.process(t),30&this.state&&this.tryEmit(t)},t.process=function(e){},t.getTouchAction=function(){},t.reset=function(){},e}(),Un=function(e){function t(t){var i;return void 0===t&&(t={}),(i=e.call(this,_r({event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},t))||this).pTime=!1,i.pCenter=!1,i._timer=null,i._input=null,i.count=0,i}fr(t,e);var i=t.prototype;return i.getTouchAction=function(){return[Sr]},i.process=function(e){var t=this,i=this.options,r=e.pointers.length===i.pointers,n=e.distance<i.threshold,a=e.deltaTime<i.time;if(this.reset(),e.eventType&Rr&&0===this.count)return this.failTimeout();if(n&&a&&r){if(e.eventType!==Fr)return this.failTimeout();var o=!this.pTime||e.timeStamp-this.pTime<i.interval,s=!this.pCenter||ln(this.pCenter,e.center)<i.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,s&&o?this.count+=1:this.count=1,this._input=e,0===this.count%i.taps)return this.hasRequireFailures()?(this._timer=setTimeout((function(){t.state=8,t.tryEmit()}),i.interval),2):8}return Hn},i.failTimeout=function(){var e=this;return this._timer=setTimeout((function(){e.state=Hn}),this.options.interval),Hn},i.reset=function(){clearTimeout(this._timer)},i.emit=function(){8===this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))},t}(Fn),Zn=function(e){function t(t){return void 0===t&&(t={}),e.call(this,_r({pointers:1},t))||this}fr(t,e);var i=t.prototype;return i.attrTest=function(e){var t=this.options.pointers;return 0===t||e.pointers.length===t},i.process=function(e){var t=this.state,i=e.eventType,r=6&t,n=this.attrTest(e);return r&&(i&Ur||!n)?16|t:r||n?i&Fr?8|t:2&t?4|t:2:Hn},t}(Fn);function Wn(e){return e===qr?"down":e===Yr?"up":e===Wr?"left":e===Br?"right":""}var Bn=function(e){function t(t){var i;return void 0===t&&(t={}),(i=e.call(this,_r({event:"pan",threshold:10,pointers:1,direction:Jr},t))||this).pX=null,i.pY=null,i}fr(t,e);var i=t.prototype;return i.getTouchAction=function(){var e=this.options.direction,t=[];return e&Xr&&t.push(Mr),e&Kr&&t.push(Dr),t},i.directionTest=function(e){var t=this.options,i=!0,r=e.distance,n=e.direction,a=e.deltaX,o=e.deltaY;return n&t.direction||(t.direction&Xr?(n=0===a?Zr:a<0?Wr:Br,i=a!==this.pX,r=Math.abs(e.deltaX)):(n=0===o?Zr:o<0?Yr:qr,i=o!==this.pY,r=Math.abs(e.deltaY))),e.direction=n,i&&r>t.threshold&&n&t.direction},i.attrTest=function(e){return Zn.prototype.attrTest.call(this,e)&&(2&this.state||!(2&this.state)&&this.directionTest(e))},i.emit=function(t){this.pX=t.deltaX,this.pY=t.deltaY;var i=Wn(t.direction);i&&(t.additionalEvent=this.options.event+i),e.prototype.emit.call(this,t)},t}(Zn),Yn=function(e){function t(t){return void 0===t&&(t={}),e.call(this,_r({event:"swipe",threshold:10,velocity:.3,direction:Xr|Kr,pointers:1},t))||this}fr(t,e);var i=t.prototype;return i.getTouchAction=function(){return Bn.prototype.getTouchAction.call(this)},i.attrTest=function(t){var i,r=this.options.direction;return r&(Xr|Kr)?i=t.overallVelocity:r&Xr?i=t.overallVelocityX:r&Kr&&(i=t.overallVelocityY),e.prototype.attrTest.call(this,t)&&r&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers===this.options.pointers&&Ar(i)>this.options.velocity&&t.eventType&Fr},i.emit=function(e){var t=Wn(e.offsetDirection);t&&this.manager.emit(this.options.event+t,e),this.manager.emit(this.options.event,e)},t}(Zn),qn=function(e){function t(t){return void 0===t&&(t={}),e.call(this,_r({event:"pinch",threshold:0,pointers:2},t))||this}fr(t,e);var i=t.prototype;return i.getTouchAction=function(){return[jr]},i.attrTest=function(t){return e.prototype.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},i.emit=function(t){if(1!==t.scale){var i=t.scale<1?"in":"out";t.additionalEvent=this.options.event+i}e.prototype.emit.call(this,t)},t}(Zn),Xn=function(e){function t(t){return void 0===t&&(t={}),e.call(this,_r({event:"rotate",threshold:0,pointers:2},t))||this}fr(t,e);var i=t.prototype;return i.getTouchAction=function(){return[jr]},i.attrTest=function(t){return e.prototype.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)},t}(Zn),Kn=function(e){function t(t){var i;return void 0===t&&(t={}),(i=e.call(this,_r({event:"press",pointers:1,time:251,threshold:9},t))||this)._timer=null,i._input=null,i}fr(t,e);var i=t.prototype;return i.getTouchAction=function(){return[Tr]},i.process=function(e){var t=this,i=this.options,r=e.pointers.length===i.pointers,n=e.distance<i.threshold,a=e.deltaTime>i.time;if(this._input=e,!n||!r||e.eventType&(Fr|Ur)&&!a)this.reset();else if(e.eventType&Rr)this.reset(),this._timer=setTimeout((function(){t.state=8,t.tryEmit()}),i.time);else if(e.eventType&Fr)return 8;return Hn},i.reset=function(){clearTimeout(this._timer)},i.emit=function(e){8===this.state&&(e&&e.eventType&Fr?this.manager.emit(this.options.event+"up",e):(this._input.timeStamp=$r(),this.manager.emit(this.options.event,this._input)))},t}(Fn),Jn={domEvents:!1,touchAction:Er,enable:!0,inputTarget:null,inputClass:null,cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},Gn=[[Xn,{enable:!1}],[qn,{enable:!1},["rotate"]],[Yn,{direction:Xr}],[Bn,{direction:Xr},["swipe"]],[Un],[Un,{event:"doubletap",taps:2},["tap"]],[Kn]];function Qn(e,t){var i,r=e.element;r.style&&(en(e.options.cssProps,(function(n,a){i=xr(r.style,a),t?(e.oldCssProps[i]=r.style[i],r.style[i]=n):r.style[i]=e.oldCssProps[i]||""})),t||(e.oldCssProps={}))}var ea=function(){function e(e,t){var i,r=this;this.options=br({},Jn,t||{}),this.options.inputTarget=this.options.inputTarget||e,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new((i=this).options.inputClass||(Or?$n:Pr?En:Vr?On:jn))(i,mn),this.touchAction=new nn(this,this.options.touchAction),Qn(this,!0),en(this.options.recognizers,(function(e){var t=r.add(new e[0](e[1]));e[2]&&t.recognizeWith(e[2]),e[3]&&t.requireFailure(e[3])}),this)}var t=e.prototype;return t.set=function(e){return br(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this},t.stop=function(e){this.session.stopped=e?2:1},t.recognize=function(e){var t=this.session;if(!t.stopped){var i;this.touchAction.preventDefaults(e);var r=this.recognizers,n=t.curRecognizer;(!n||n&&8&n.state)&&(t.curRecognizer=null,n=null);for(var a=0;a<r.length;)i=r[a],2===t.stopped||n&&i!==n&&!i.canRecognizeWith(n)?i.reset():i.recognize(e),!n&&14&i.state&&(t.curRecognizer=i,n=i),a++}},t.get=function(e){if(e instanceof Fn)return e;for(var t=this.recognizers,i=0;i<t.length;i++)if(t[i].options.event===e)return t[i];return null},t.add=function(e){if(Pn(e,"add",this))return this;var t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e},t.remove=function(e){if(Pn(e,"remove",this))return this;var t=this.get(e);if(e){var i=this.recognizers,r=bn(i,t);-1!==r&&(i.splice(r,1),this.touchAction.update())}return this},t.on=function(e,t){if(void 0===e||void 0===t)return this;var i=this.handlers;return en(pn(e),(function(e){i[e]=i[e]||[],i[e].push(t)})),this},t.off=function(e,t){if(void 0===e)return this;var i=this.handlers;return en(pn(e),(function(e){t?i[e]&&i[e].splice(bn(i[e],t),1):delete i[e]})),this},t.emit=function(e,t){this.options.domEvents&&function(e,t){var i=document.createEvent("Event");i.initEvent(e,!0,!0),i.gesture=t,t.target.dispatchEvent(i)}(e,t);var i=this.handlers[e]&&this.handlers[e].slice();if(i&&i.length){t.type=e,t.preventDefault=function(){t.srcEvent.preventDefault()};for(var r=0;r<i.length;)i[r](t),r++}},t.destroy=function(){this.element&&Qn(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null},e}(),ta={touchstart:Rr,touchmove:2,touchend:Fr,touchcancel:Ur},ia=function(e){function t(){var i,r=t.prototype;return r.evTarget="touchstart",r.evWin="touchstart touchmove touchend touchcancel",(i=e.apply(this,arguments)||this).started=!1,i}return fr(t,e),t.prototype.handler=function(e){var t=ta[e.type];if(t===Rr&&(this.started=!0),this.started){var i=ra.call(this,e,t);t&(Fr|Ur)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,t,{pointers:i[0],changedPointers:i[1],pointerType:Hr,srcEvent:e})}},t}(gn);function ra(e,t){var i=xn(e.touches),r=xn(e.changedTouches);return t&(Fr|Ur)&&(i=Cn(i.concat(r),"identifier",!0)),[i,r]}function na(e,t,i){var r="DEPRECATED METHOD: "+t+"\n"+i+" AT \n";return function(){var t=new Error("get-stack-trace"),i=t&&t.stack?t.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",n=window.console&&(window.console.warn||window.console.log);return n&&n.call(window.console,r,i),e.apply(this,arguments)}}var aa=na((function(e,t,i){for(var r=Object.keys(t),n=0;n<r.length;)(!i||i&&void 0===e[r[n]])&&(e[r[n]]=t[r[n]]),n++;return e}),"extend","Use `assign`."),oa=na((function(e,t){return aa(e,t,!0)}),"merge","Use `assign`.");function sa(e,t,i){var r,n=t.prototype;(r=e.prototype=Object.create(n)).constructor=e,r._super=n,i&&br(r,i)}function la(e,t){return function(){return e.apply(t,arguments)}}(function(){var e=function(e,t){return void 0===t&&(t={}),new ea(e,_r({recognizers:Gn.concat()},t))};return e.VERSION="2.0.17-rc",e.DIRECTION_ALL=Jr,e.DIRECTION_DOWN=qr,e.DIRECTION_LEFT=Wr,e.DIRECTION_RIGHT=Br,e.DIRECTION_UP=Yr,e.DIRECTION_HORIZONTAL=Xr,e.DIRECTION_VERTICAL=Kr,e.DIRECTION_NONE=Zr,e.DIRECTION_DOWN=qr,e.INPUT_START=Rr,e.INPUT_MOVE=2,e.INPUT_END=Fr,e.INPUT_CANCEL=Ur,e.STATE_POSSIBLE=1,e.STATE_BEGAN=2,e.STATE_CHANGED=4,e.STATE_ENDED=8,e.STATE_RECOGNIZED=8,e.STATE_CANCELLED=16,e.STATE_FAILED=Hn,e.Manager=ea,e.Input=gn,e.TouchAction=nn,e.TouchInput=En,e.MouseInput=jn,e.PointerEventInput=$n,e.TouchMouseInput=On,e.SingleTouchInput=ia,e.Recognizer=Fn,e.AttrRecognizer=Zn,e.Tap=Un,e.Pan=Bn,e.Swipe=Yn,e.Pinch=qn,e.Rotate=Xn,e.Press=Kn,e.on=_n,e.off=fn,e.each=en,e.merge=oa,e.extend=aa,e.bindFn=la,e.assign=br,e.inherit=sa,e.bindFn=la,e.prefixed=xr,e.toArray=xn,e.inArray=bn,e.uniqueArray=Cn,e.splitStr=pn,e.boolOrFn=tn,e.hasParent=an,e.addEventListeners=_n,e.removeEventListeners=fn,e.defaults=br({},Jn,{preset:Gn}),e})().defaults;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ca=270;const ua=new Set(["ArrowRight","ArrowUp","ArrowLeft","ArrowDown","PageUp","PageDown","Home","End"]);let da=class extends se{constructor(){super(...arguments),this.disabled=!1,this.step=1,this.min=0,this.max=100,this._localValue=this.value,this._localLow=this.low,this._localHigh=this.high,this._getPercentageFromEvent=e=>{const t=this._slider.getBoundingClientRect(),i=2*(e.center.x-t.left-t.width/2)/t.width,r=2*(e.center.y-t.top-t.height/2)/t.height,[,n]=function(e,t){return[Math.sqrt(e*e+t*t),Math.atan2(t,e)]}(i,r),a=(n/(2*Math.PI)*360+45-135+360)%360-45;return Math.max(Math.min(a/ca,1),0)}}_valueToPercentage(e){return(Vi(e,this.min,this.max)-this.min)/(this.max-this.min)}_percentageToValue(e){return(this.max-this.min)*e+this.min}_steppedValue(e){return Math.round(e/this.step)*this.step}_boundedValue(e){var t,i;const r="high"===this._activeSlider?Math.min(null!==(t=this._localLow)&&void 0!==t?t:this.max):this.min,n="low"===this._activeSlider?Math.max(null!==(i=this._localHigh)&&void 0!==i?i:this.min):this.max;return Math.min(Math.max(e,r),n)}firstUpdated(e){super.firstUpdated(e),this._setupListeners()}updated(e){super.updated(e),this._activeSlider||(e.has("value")&&(this._localValue=this.value),e.has("low")&&(this._localLow=this.low),e.has("high")&&(this._localHigh=this.high))}connectedCallback(){super.connectedCallback(),this._setupListeners()}disconnectedCallback(){super.disconnectedCallback()}_findActiveSlider(e){var t,i;if(!this.dual)return"value";const r=Math.max(null!==(t=this._localLow)&&void 0!==t?t:this.min,this.min),n=Math.min(null!==(i=this._localHigh)&&void 0!==i?i:this.max,this.max);if(r>=e)return"low";if(n<=e)return"high";return Math.abs(e-r)<=Math.abs(e-n)?"low":"high"}_setActiveValue(e){switch(this._activeSlider){case"high":this._localHigh=e;break;case"low":this._localLow=e;break;case"value":this._localValue=e}}_getActiveValue(){switch(this._activeSlider){case"high":return this._localHigh;case"low":return this._localLow;case"value":return this._localValue}}_setupListeners(){this._interaction&&!this._mc&&(this._mc=new ea(this._interaction,{inputClass:On}),this._mc.add(new Bn({direction:Jr,enable:!0,threshold:0})),this._mc.add(new Un({event:"singletap"})),this._mc.on("pan",(e=>{e.srcEvent.stopPropagation(),e.srcEvent.preventDefault()})),this._mc.on("panstart",(e=>{var t,i;if(this.disabled)return;const r=this._getPercentageFromEvent(e),n=this._percentageToValue(r);this._activeSlider=this._findActiveSlider(n),this._lastSlider=this._activeSlider,null===(i=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("#slider"))||void 0===i||i.focus()})),this._mc.on("pancancel",(()=>{this.disabled||(this._activeSlider=void 0)})),this._mc.on("panmove",(e=>{if(this.disabled)return;const t=this._getPercentageFromEvent(e),i=this._percentageToValue(t),r=this._boundedValue(i);this._setActiveValue(r);const n=this._steppedValue(r);this._activeSlider&&Li(this,`${this._activeSlider}-changing`,{value:n})})),this._mc.on("panend",(e=>{if(this.disabled)return;const t=this._getPercentageFromEvent(e),i=this._percentageToValue(t),r=this._boundedValue(i),n=this._steppedValue(r);this._setActiveValue(n),this._activeSlider&&(Li(this,`${this._activeSlider}-changing`,{value:void 0}),Li(this,`${this._activeSlider}-changed`,{value:n})),this._activeSlider=void 0})),this._mc.on("singletap",(e=>{var t,i;if(this.disabled)return;const r=this._getPercentageFromEvent(e),n=this._percentageToValue(r);this._activeSlider=this._findActiveSlider(n);const a=this._boundedValue(n),o=this._steppedValue(a);this._setActiveValue(o),this._activeSlider&&(Li(this,`${this._activeSlider}-changing`,{value:void 0}),Li(this,`${this._activeSlider}-changed`,{value:o})),this._lastSlider=this._activeSlider,null===(i=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("#slider"))||void 0===i||i.focus(),this._activeSlider=void 0})))}get _tenPercentStep(){return Math.max(this.step,(this.max-this.min)/10)}_handleKeyDown(e){var t,i,r;if(!ua.has(e.code))return;e.preventDefault(),this._lastSlider&&(null===(i=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById(this._lastSlider))||void 0===i||i.focus()),this._activeSlider=null!==(r=this._lastSlider)&&void 0!==r?r:e.currentTarget.id,this._lastSlider=void 0;const n=this._getActiveValue();switch(e.code){case"ArrowRight":case"ArrowUp":this._setActiveValue(this._boundedValue((null!=n?n:this.min)+this.step));break;case"ArrowLeft":case"ArrowDown":this._setActiveValue(this._boundedValue((null!=n?n:this.min)-this.step));break;case"PageUp":this._setActiveValue(this._steppedValue(this._boundedValue((null!=n?n:this.min)+this._tenPercentStep)));break;case"PageDown":this._setActiveValue(this._steppedValue(this._boundedValue((null!=n?n:this.min)-this._tenPercentStep)));break;case"Home":this._setActiveValue(this._boundedValue(this.min));break;case"End":this._setActiveValue(this._boundedValue(this.max))}Li(this,`${this._activeSlider}-changing`,{value:this._getActiveValue()}),this._activeSlider=void 0}_handleKeyUp(e){ua.has(e.code)&&(this._activeSlider=e.currentTarget.id,e.preventDefault(),Li(this,`${this._activeSlider}-changing`,{value:void 0}),Li(this,`${this._activeSlider}-changed`,{value:this._getActiveValue()}),this._activeSlider=void 0)}destroyListeners(){this._mc&&(this._mc.destroy(),this._mc=void 0)}_strokeCircleDashArc(e){return this._strokeDashArc(e,e)}_strokeDashArc(e,t){const i=this._valueToPercentage(e),r=this._valueToPercentage(t),n=290*Math.PI*ca/360,a=Math.max((r-i)*n,0);return[`${a} ${n-a}`,`-${i*n-.5}`]}renderArc(e,t,i){var r,n;if(this.disabled)return B;const a=pr({x:0,y:0,start:0,end:ca,r:145}),o="end"===i?this.max:this.min,s=null!==(r=this.current)&&void 0!==r?r:o,l=null!=t?t:o,c="end"===i?l<=s:"start"===i&&s<=l,u=c?"end"===i?this._strokeDashArc(l,s):this._strokeDashArc(s,l):this._strokeCircleDashArc(l),d="full"===i?this._strokeDashArc(this.min,this.max):"end"===i?this._strokeDashArc(l,o):this._strokeDashArc(o,l),h=this._strokeCircleDashArc(l),m=null!=this.current&&this.current<=this.max&&this.current>=this.min&&(c||"full"===this.mode)?this._strokeCircleDashArc(this.current):void 0;return Z`
        <g class=${ge({inactive:Boolean(this.inactive)})}>
          <path
            class="arc arc-clear"
            d=${a}
            stroke-dasharray=${d[0]}
            stroke-dashoffset=${d[1]}
          />
          <path
            class="arc arc-colored ${ge({[e]:!0})}"
            d=${a}
            stroke-dasharray=${d[0]}
            stroke-dashoffset=${d[1]}
          />
          <path
            .id=${e}
            d=${a}
            class="arc arc-active ${ge({[e]:!0})}"
            stroke-dasharray=${u[0]}
            stroke-dashoffset=${u[1]}
            role="slider"
            tabindex="0"
            aria-valuemin=${this.min}
            aria-valuemax=${this.max}
            aria-valuenow=${null!=this._localValue?this._steppedValue(this._localValue):void 0}
            aria-disabled=${this.disabled}
            aria-label=${(e=>e??B)(null!==(n=this.lowLabel)&&void 0!==n?n:this.label)}
            @keydown=${this._handleKeyDown}
            @keyup=${this._handleKeyUp}
          />
          ${m?Z`
                <path
                  class="current arc-current"
                  d=${a}
                  stroke-dasharray=${m[0]}
                  stroke-dashoffset=${m[1]}
                />
            `:B}
          <path
            class="target-border ${ge({[e]:!0})}"
            d=${a}
            stroke-dasharray=${h[0]}
            stroke-dashoffset=${h[1]}
          />
          <path
            class="target"
            d=${a}
            stroke-dasharray=${h[0]}
            stroke-dashoffset=${h[1]}
          />
        </g>
      `}render(){const e=pr({x:0,y:0,start:0,end:ca,r:145}),t=this.dual?this._localLow:this._localValue,i=this._localHigh,r=this.current,n=r?this._strokeCircleDashArc(r):void 0;return U`
        <svg
          id="slider"
          viewBox="0 0 320 320"
          overflow="visible"
          class=${ge({pressed:Boolean(this._activeSlider)})}
          @keydown=${this._handleKeyDown}
          tabindex=${this._lastSlider?"0":"-1"}
        >
          <g
            id="container"
            transform="translate(160 160) rotate(${135})"
          >
            <g id="interaction">
              <path d=${e} />
            </g>
            <g id="display">
              <path class="background" d=${e} />
              ${n?Z`
                    <path
                      class="current"
                      d=${e}
                      stroke-dasharray=${n[0]}
                      stroke-dashoffset=${n[1]}
                    />
                  `:B}
              ${null!=t?this.renderArc(this.dual?"low":"value",t,!this.dual&&this.mode||"start"):B}
              ${this.dual&&null!=i?this.renderArc("high",i,"end"):B}
            </g>
          </g>
        </svg>
        <slot></slot>
      `}static get styles(){return o`
        :host {
          --clear-background-color: #111111;
          --control-circular-slider-color: var(--primary-color);
          --control-circular-slider-background: var(--disabled-color);
          --control-circular-slider-background-opacity: 0.3;
          --control-circular-slider-low-color: var(
            --control-circular-slider-color
          );
          --control-circular-slider-high-color: var(
            --control-circular-slider-color
          );
        }
        #wrapper {
          position: relative;
        }
        svg {
          width: 320px;
          display: block;
        }
        #slider {
          width: 100%;
          max-width: 233px;
          outline: none;
          margin: 0 auto;
          margin-top: 1em;
          position: relative;
          z-index: 2;
        }
        #interaction {
          display: flex;
          fill: none;
          stroke: transparent;
          stroke-linecap: round;
          stroke-width: 48px;
          cursor: pointer;
        }
        #display {
          pointer-events: none;
        }
        :host([disabled]) #interaction {
          cursor: initial;
        }
  
        .background {
          fill: none;
          stroke: var(--control-circular-slider-background);
          opacity: var(--control-circular-slider-background-opacity);
          transition:
            stroke 180ms ease-in-out,
            opacity 180ms ease-in-out;
          stroke-linecap: round;
          stroke-width: 24px;
        }
  
        .arc {
          fill: none;
          stroke-linecap: round;
          stroke-width: 24px;
          transition:
            stroke-width 300ms ease-in-out,
            stroke-dasharray 300ms ease-in-out,
            stroke-dashoffset 300ms ease-in-out,
            stroke 180ms ease-in-out,
            opacity 180ms ease-in-out;
        }
  
        .target {
          fill: none;
          stroke-linecap: round;
          stroke-width: 18px;
          stroke: white;
          transition:
            stroke-width 300ms ease-in-out,
            stroke-dasharray 300ms ease-in-out,
            stroke-dashoffset 300ms ease-in-out,
            stroke 180ms ease-in-out,
            opacity 180ms ease-in-out;
        }
  
        .target-border {
          fill: none;
          stroke-linecap: round;
          stroke-width: 24px;
          stroke: white;
          transition:
            stroke-width 300ms ease-in-out,
            stroke-dasharray 300ms ease-in-out,
            stroke-dashoffset 300ms ease-in-out,
            stroke 180ms ease-in-out,
            opacity 180ms ease-in-out;
        }


  
        .current {
          fill: none;
          stroke-linecap: round;
          stroke-width: 8px;
          stroke: var(--primary-text-color);
          opacity: 0.5;
          transition:
            stroke-width 300ms ease-in-out,
            stroke-dasharray 300ms ease-in-out,
            stroke-dashoffset 300ms ease-in-out,
            stroke 180ms ease-in-out,
            opacity 180ms ease-in-out;
        }
  
        .arc-current {
          stroke: var(--clear-background-color);
        }
  
        .arc-clear {
          stroke: var(--clear-background-color);
        }
        .arc-colored {
          opacity: 0.5;
        }
        .arc-active {
          outline: none;
        }
        .arc-active:focus-visible {
          stroke-width: 28px;
        }
  
        .pressed .arc,
        .pressed .target,
        .pressed .target-border,
        .pressed .current {
          transition:
            stroke-width 300ms ease-in-out,
            stroke 180ms ease-in-out,
            opacity 180ms ease-in-out;
        }
  
        .inactive .arc,
        .inactive .arc-current {
          opacity: 0;
        }
  
        .value {
          stroke: var(--control-circular-slider-color);
        }
  
        .low {
          stroke: var(--control-circular-slider-low-color);
        }
  
        .high {
          stroke: var(--state-climate-cool-color);
        }
      `}};e([he({type:Boolean,reflect:!0})],da.prototype,"disabled",void 0),e([he({type:Boolean})],da.prototype,"dual",void 0),e([he({type:String})],da.prototype,"mode",void 0),e([he({type:Boolean})],da.prototype,"inactive",void 0),e([he({type:String})],da.prototype,"label",void 0),e([he({type:String,attribute:"low-label"})],da.prototype,"lowLabel",void 0),e([he({type:String,attribute:"high-label"})],da.prototype,"highLabel",void 0),e([he({type:Number})],da.prototype,"value",void 0),e([he({type:Number})],da.prototype,"low",void 0),e([he({type:Number})],da.prototype,"high",void 0),e([he({type:Number})],da.prototype,"current",void 0),e([he({type:Number})],da.prototype,"step",void 0),e([he({type:Number})],da.prototype,"min",void 0),e([he({type:Number})],da.prototype,"max",void 0),e([me()],da.prototype,"_localValue",void 0),e([me()],da.prototype,"_localLow",void 0),e([me()],da.prototype,"_localHigh",void 0),e([me()],da.prototype,"_activeSlider",void 0),e([me()],da.prototype,"_lastSlider",void 0),e([_e("#slider")],da.prototype,"_slider",void 0),e([_e("#interaction")],da.prototype,"_interaction",void 0),da=e([ce("bt-ha-control-circular-slider")],da);const ha="unavailable",ma="unknown",pa={auto:"M18,11V12.5C21.19,12.5 23.09,16.05 21.33,18.71L20.24,17.62C21.06,15.96 19.85,14 18,14V15.5L15.75,13.25L18,11M18,22V20.5C14.81,20.5 12.91,16.95 14.67,14.29L15.76,15.38C14.94,17.04 16.15,19 18,19V17.5L20.25,19.75L18,22M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H14C13.36,20.45 12.86,19.77 12.5,19H5V8H19V10.59C19.71,10.7 20.39,10.94 21,11.31V5A2,2 0 0,0 19,3Z",heat_cool:"M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z",heat:"M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z",cool:"M20.79,13.95L18.46,14.57L16.46,13.44V10.56L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.45,8.82L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L15.5,15.17L17.5,16.3L18.12,18.63L20,18.12L19.53,16.35L21.3,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z",off:ye,fan_only:be,dry:"M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z",temperature:"M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",ok:"M6.59,0.66C8.93,-1.15 11.47,1.06 12.04,4.5C12.47,4.5 12.89,4.62 13.27,4.84C13.79,4.24 14.25,3.42 14.07,2.5C13.65,0.35 16.06,-1.39 18.35,1.58C20.16,3.92 17.95,6.46 14.5,7.03C14.5,7.46 14.39,7.89 14.16,8.27C14.76,8.78 15.58,9.24 16.5,9.06C18.63,8.64 20.38,11.04 17.41,13.34C15.07,15.15 12.53,12.94 11.96,9.5C11.53,9.5 11.11,9.37 10.74,9.15C10.22,9.75 9.75,10.58 9.93,11.5C10.35,13.64 7.94,15.39 5.65,12.42C3.83,10.07 6.05,7.53 9.5,6.97C9.5,6.54 9.63,6.12 9.85,5.74C9.25,5.23 8.43,4.76 7.5,4.94C5.37,5.36 3.62,2.96 6.59,0.66M5,16H7A2,2 0 0,1 9,18V24H7V22H5V24H3V18A2,2 0 0,1 5,16M5,18V20H7V18H5M12.93,16H15L12.07,24H10L12.93,16M18,16H21V18H18V22H21V24H18A2,2 0 0,1 16,22V18A2,2 0 0,1 18,16Z"};!function(e){const t=window;t.customCards=t.customCards||[],t.customCards.push(Object.assign(Object.assign({},e),{preview:!0}))}({type:"better-jacuzzi-ui-card",name:"Jacuzzi / spa card",description:"Climate ring with optional pumps and sanitizer"}),console.info("%c  BetterJacuzziUI-CARD \n%c  version: 1.0.0    ","color: #00bcd4; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");const _a={power:ye,jets:"M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z",filter:"M19,18.31V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V16.3C4.54,16.12 3.95,16 3,16A1,1 0 0,1 2,15A1,1 0 0,1 3,14C3.82,14 4.47,14.08 5,14.21V12.3C4.54,12.12 3.95,12 3,12A1,1 0 0,1 2,11A1,1 0 0,1 3,10C3.82,10 4.47,10.08 5,10.21V8.3C4.54,8.12 3.95,8 3,8A1,1 0 0,1 2,7A1,1 0 0,1 3,6C3.82,6 4.47,6.08 5,6.21V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V6.16C20.78,6.47 21.54,7.13 21.71,7.29C22.1,7.68 22.1,8.32 21.71,8.71C21.32,9.1 20.8,9.09 20.29,8.71V8.71C20.29,8.71 19.25,8 17,8C15.74,8 14.91,8.41 13.95,8.9C12.91,9.41 11.74,10 10,10C9.64,10 9.31,10 9,9.96V7.95C9.3,8 9.63,8 10,8C11.26,8 12.09,7.59 13.05,7.11C14.09,6.59 15.27,6 17,6V4H7V20H17V18C18.5,18 18.97,18.29 19,18.31M17,10C15.27,10 14.09,10.59 13.05,11.11C12.09,11.59 11.26,12 10,12C9.63,12 9.3,12 9,11.95V13.96C9.31,14 9.64,14 10,14C11.74,14 12.91,13.41 13.95,12.9C14.91,12.42 15.74,12 17,12C19.25,12 20.29,12.71 20.29,12.71V12.71C20.8,13.1 21.32,13.1 21.71,12.71C22.1,12.32 22.1,11.69 21.71,11.29C21.5,11.08 20.25,10 17,10M17,14C15.27,14 14.09,14.59 13.05,15.11C12.09,15.59 11.26,16 10,16C9.63,16 9.3,16 9,15.95V17.96C9.31,18 9.64,18 10,18C11.74,18 12.91,17.41 13.95,16.9C14.91,16.42 15.74,16 17,16C19.25,16 20.29,16.71 20.29,16.71V16.71C20.8,17.1 21.32,17.1 21.71,16.71C22.1,16.32 22.1,15.69 21.71,15.29C21.5,15.08 20.25,14 17,14Z",bubbles:"M7.2,11.2C8.97,11.2 10.4,12.63 10.4,14.4C10.4,16.17 8.97,17.6 7.2,17.6C5.43,17.6 4,16.17 4,14.4C4,12.63 5.43,11.2 7.2,11.2M14.8,16A2,2 0 0,1 16.8,18A2,2 0 0,1 14.8,20A2,2 0 0,1 12.8,18A2,2 0 0,1 14.8,16M15.2,4A4.8,4.8 0 0,1 20,8.8C20,11.45 17.85,13.6 15.2,13.6A4.8,4.8 0 0,1 10.4,8.8C10.4,6.15 12.55,4 15.2,4Z",sanitizer:"M21.82,15.42L19.32,19.75C18.83,20.61 17.92,21.06 17,21H15V23L12.5,18.5L15,14V16H17.82L15.6,12.15L19.93,9.65L21.73,12.77C22.25,13.54 22.32,14.57 21.82,15.42M9.21,3.06H14.21C15.19,3.06 16.04,3.63 16.45,4.45L17.45,6.19L19.18,5.19L16.54,9.6L11.39,9.69L13.12,8.69L11.71,6.24L9.5,10.09L5.16,7.59L6.96,4.47C7.37,3.64 8.22,3.06 9.21,3.06M5.05,19.76L2.55,15.43C2.06,14.58 2.13,13.56 2.64,12.79L3.64,11.06L1.91,10.06L7.05,10.14L9.7,14.56L7.97,13.56L6.56,16H11V21H7.4C6.47,21.07 5.55,20.61 5.05,19.76Z"};let fa=class extends se{constructor(){super(...arguments),this.value={},this.current=0,this.current_humidity=0,this.min=0,this.max=45,this.step=1,this.mode="off",this._fanModes=[],this._fanMode="",this._errorOverlay=null,this.target="value",this._display_bottom=0,this._display_top=0,this.modes=[],this._debouncedCallService=((e,t,i=!1)=>{let r;const n=(...n)=>{const a=i&&!r;clearTimeout(r),r=window.setTimeout((()=>{r=void 0,i||e(...n)}),t),a&&e(...n)};return n.cancel=()=>{clearTimeout(r)},n})((()=>this._callTemperatureService()),1e3)}static async getConfigElement(){return await Promise.resolve().then((function(){return Aa})),document.createElement("better-jacuzzi-ui-card-editor")}static async getStubConfig(e){var t;const i=Object.keys(e.states).filter((e=>"climate"===e.split(".")[0]));return{type:"custom:better-jacuzzi-ui-card",entity:null!==(t=i[0])&&void 0!==t?t:""}}setConfig(e){this._config=Object.assign({tap_action:{action:"toggle"},hold_action:{action:"more-info"}},e)}getCardSize(){return 1}_vibrate(e){try{navigator.vibrate(e)}catch(e){}}willUpdate(e){var t,i,r;if(!this.hass||!this._config)return;if(!e.has("hass")&&!e.has("_config"))return;const n=this._config.entity;if(!n)return;const a=this.hass.states[n];if(!a)return;this.stateObj=a;const o=this.stateObj.attributes;this.mode=this.stateObj.state||"off",this.modes=o.hvac_modes?Object.values(o.hvac_modes):[],this.value={value:null!==(t=o.temperature)&&void 0!==t?t:0},void 0!==o.target_temp_step&&(this.step=o.target_temp_step),void 0!==o.min_temp&&(this.min=o.min_temp),void 0!==o.max_temp&&(this.max=o.max_temp),void 0!==o.current_temperature&&(this.current=o.current_temperature);const s=null!==(i=o.current_humidity)&&void 0!==i?i:o.humidity;this.current_humidity=void 0!==s?parseFloat(String(s)):0;const l=o.fan_modes;this._fanModes=Array.isArray(l)?[...l]:[],this._fanMode=null!==(r=o.fan_mode)&&void 0!==r?r:"",this._syncErrorOverlay(),this._updateDisplay()}_syncErrorOverlay(){var e,t;const i=null===(e=this._config)||void 0===e?void 0:e.error_entity;if(!i||!(null===(t=this.hass)||void 0===t?void 0:t.states[i]))return void(this._errorOverlay=null);const r=this.hass.states[i].state;this._errorOverlay=r!==ha&&r!==ma&&"0"!==r&&"none"!==r&&""!==r?r:null}_updateDisplay(){var e,t;const i=null!==(e=this.value.value)&&void 0!==e?e:0;(null===(t=this._config)||void 0===t?void 0:t.set_current_as_main)?(this._display_bottom=i,this._display_top=this.current):(this._display_bottom=this.current,this._display_top=i)}_highChanged(e){const t=e.detail.value;void 0===t||isNaN(t)||(this.value={value:t},this._updateDisplay(),this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:t}))}_highChanging(e){const t=e.detail.value;void 0===t||isNaN(t)||(this.value={value:t},this._updateDisplay(),this._vibrate(20))}_callTemperatureService(){var e;void 0!==this.value.value&&(null===(e=this._config)||void 0===e?void 0:e.entity)&&this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:this.value.value})}_handleButton(e){var t,i;const r=null!==(t=e.currentTarget.step)&&void 0!==t?t:this.step;let n=null!==(i=this.value.value)&&void 0!==i?i:this.min;n+=r,n=Vi(n,this.min,this.max),this.value={value:n},this._updateDisplay(),this._vibrate(40),this._debouncedCallService()}_setHvacMode(e){var t;(null===(t=this._config)||void 0===t?void 0:t.entity)&&this.hass.callService("climate","set_hvac_mode",{entity_id:this._config.entity,hvac_mode:e})}_setFanMode(e){var t;(null===(t=this._config)||void 0===t?void 0:t.entity)&&this.hass.callService("climate","set_fan_mode",{entity_id:this._config.entity,fan_mode:e})}_toggleSwitchEntity(e){this.hass.callService("switch","toggle",{entity_id:e}),this._vibrate(30)}_handleMoreInfo(){Li(this,"hass-more-info",{entityId:this._config.entity})}_renderHVACAction(e=!1){var t;const i="heating"===(null===(t=this.stateObj)||void 0===t?void 0:t.attributes.hvac_action)&&"off"!==this.mode,r=e?"translate(-3,-3.5) scale(0.25)":"translate(5,-4) scale(0.25)",n=Ci(i?{hass:this.hass,string:"extra_states.heating"}:{hass:this.hass,string:"extra_states.heating_off"});return Z`<path class="status ${i?"active":""}" transform="${r}" fill="${"#9d9d9d"}" d="${"M8.5 4.5L5.4 9.5L8.5 14.7L5.2 20.5L3.4 19.6L6.1 14.7L3 9.5L6.7 3.6L8.5 4.5M14.7 4.4L11.6 9.5L14.7 14.5L11.4 20.3L9.6 19.4L12.3 14.5L9.2 9.5L12.9 3.5L14.7 4.4M21 4.4L17.9 9.5L21 14.5L17.7 20.3L15.9 19.4L18.6 14.5L15.5 9.5L19.2 3.5L21 4.4"}" title="Heat"><title>${n}</title></path>`}_renderModeIcon(e,t){const i=pa[e];if(!i)return U``;const r=this.hass.localize(`component.climate.state._.${e}`)||Ci({hass:this.hass,string:`extra_states.${e}`});return U`
            <ha-icon-button
                title="${t===e?e:""}"
                class=${ge({"selected-icon":t===e})}
                @click=${()=>this._setHvacMode(e)}
                tabindex="0"
                .path=${i}
                .label=${r}
            ></ha-icon-button>
        `}_renderFanChip(e){const t=this._fanMode===e;return U`
            <ha-icon-button
                class=${ge({"selected-icon":t})}
                @click=${()=>this._setFanMode(e)}
                tabindex="0"
                .path=${be}
                title=${e}
                .label=${e}
            ></ha-icon-button>
        `}_renderSwitch(e,t){var i,r;if(!t)return U``;const n=this.hass.states[t],a="on"===(null==n?void 0:n.state),o=_a[e],s=null!==(r=null===(i=null==n?void 0:n.attributes)||void 0===i?void 0:i.friendly_name)&&void 0!==r?r:e;return U`
            <ha-icon-button
                class=${ge({"switch-on":a})}
                @click=${()=>this._toggleSwitchEntity(t)}
                tabindex="0"
                .path=${o}
                .label=${s}
                title=${s}
            ></ha-icon-button>
        `}render(){var e,t,i,r;if(!(null===(e=this._config)||void 0===e?void 0:e.entity)||!this.hass)return U`<ha-card><div class="name">Jacuzzi</div></ha-card>`;const n=this._config,a=!n.hide_fan&&this._fanModes.length>0,o=n.set_current_as_main?Ci({hass:this.hass,string:"common.current_temperature"}):Ci({hass:this.hass,string:"common.target_temperature"}),s=Z`
      <text class="main-value" x="62.5" y="60%" dominant-baseline="middle" text-anchor="middle" style="font-size:15px;">
        <title>${o}</title>
        ${Oi(this._display_top,this.hass.locale,{minimumFractionDigits:1,maximumFractionDigits:1})}
        <tspan dx="-2" dy="-5.5" style="font-size: 5px;">${this.hass.config.unit_system.temperature}</tspan>
      </text>`,l=(null===(t=this.stateObj)||void 0===t?void 0:t.state)===ha||(null===(i=this.stateObj)||void 0===i?void 0:i.state)===ma?Z`<text x="62.5" y="63%" dominant-baseline="middle" text-anchor="middle" style="font-size:6px;">
        ${this.hass.localize("state.default.unavailable")}
      </text>`:Z``,c=Z`<line x1="35" y1="72" x2="90" y2="72" stroke="#e7e7e8" stroke-width="0.5" />`,u=n.set_current_as_main?Ci({hass:this.hass,string:"common.target_temperature"}):Ci({hass:this.hass,string:"common.current_temperature"}),d=this.current_humidity>0?Z`
    <g class="current-info" transform="translate(62.5,80)">
      <text x="-12.25%" y="0%" dominant-baseline="middle" text-anchor="middle" style="font-size:6px;">
        <title>${u}</title>
        ${Oi(this._display_bottom,this.hass.locale,{minimumFractionDigits:1,maximumFractionDigits:1})}
        <tspan dx="-0.3" dy="-2" style="font-size: 3px;">${this.hass.config.unit_system.temperature}</tspan>
      </text>
      <text x="12.25%" y="0%" dominant-baseline="middle" text-anchor="middle" style="font-size:6px;">
        <title>${Ci({hass:this.hass,string:"common.current_humidity"})}</title>
        ${Oi(this.current_humidity,this.hass.locale,{minimumFractionDigits:0,maximumFractionDigits:0})}
        <tspan dx="-0.3" dy="-2" style="font-size: 3px;">%</tspan>
      </text>
      ${this._renderHVACAction(!0)}
    </g>`:Z`
    <g class="current-info" transform="translate(62.5,80)">
      <text x="-5%" y="0%" dominant-baseline="middle" text-anchor="middle" style="font-size:6px;">
        <title>${u}</title>
        ${Oi(this._display_bottom,this.hass.locale,{minimumFractionDigits:1,maximumFractionDigits:1})}
        <tspan dx="-1" dy="-2" style="font-size: 3px;">${this.hass.config.unit_system.temperature}</tspan>
      </text>
      ${this._renderHVACAction()}
    </g>`,h=U`<div id="modes">
            ${this.modes.map((e=>!n.disable_heat||"heat"!==e&&"heat_cool"!==e?n.disable_off&&"off"===e?U``:this._renderModeIcon(e,this.mode):U``))}
        </div>`,m=a?U`<div id="fan-modes">${this._fanModes.map((e=>this._renderFanChip(e)))}</div>`:U``,p=U`<div id="jacuzzi-switches">
            ${this._renderSwitch("power",n.power)} ${this._renderSwitch("jets",n.jets)} ${this._renderSwitch("filter",n.filter)}
            ${this._renderSwitch("bubbles",n.bubbles)} ${this._renderSwitch("sanitizer",n.sanitizer)}
        </div>`,_=!!(n.power||n.jets||n.filter||n.bubbles||n.sanitizer),f=n.disable_buttons?U``:U`
                  <div id="bt-control-buttons">
                      <div class="button">
                          <bt-ha-outlined-icon-button .target=${this.target} .step=${-this.step} @click=${this._handleButton}>
                              <ha-svg-icon .path=${"M19,13H5V11H19V13Z"}></ha-svg-icon>
                          </bt-ha-outlined-icon-button>
                      </div>
                      <div class="button">
                          <bt-ha-outlined-icon-button .target=${this.target} .step=${this.step} @click=${this._handleButton}>
                              <ha-svg-icon .path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}></ha-svg-icon>
                          </bt-ha-outlined-icon-button>
                      </div>
                  </div>
              `;return U`
            <ha-card id="${n.disable_buttons?"":"expand"}" class=${ge({[this.mode]:!0})}>
                ${n.disable_menu?U``:U`<ha-icon-button
                          class="more-info"
                          .label=${this.hass.localize("ui.panel.lovelace.cards.show_more_info")}
                          .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}
                          @click=${this._handleMoreInfo}
                          tabindex="0"
                      ></ha-icon-button>`}
                <div class="name">${(null===(r=n.name)||void 0===r?void 0:r.length)?n.name:U`&nbsp;`}</div>
                <bt-ha-control-circular-slider
                    .mode=${"start"}
                    @value-changed=${this._highChanged}
                    @value-changing=${this._highChanging}
                    .value=${this.value.value}
                    .current=${this.current}
                    step=${this.step}
                    min=${this.min}
                    max=${this.max}
                >
                    <div class="content">
                        <svg id="main" viewbox="0 0 125 100">
                            ${s} ${l} ${c} ${d}
                        </svg>
                    </div>
                    ${this._errorOverlay?U`
                              <div class="error">
                                  <span>${Ci({hass:this.hass,string:"jacuzzi.error_code"})}</span>
                                  <span>${this._errorOverlay}</span>
                              </div>
                          `:U``}
                </bt-ha-control-circular-slider>
                ${h} ${m} ${_?p:U``} ${f}
            </ha-card>
        `}};fa.styles=o`
        :host {
            display: block;
            box-sizing: border-box;
            position: relative;
            container: bt-jacuzzi-card / inline-size;
        }
        ha-card {
            overflow: hidden;
            height: 100%;
            width: 100%;
            vertical-align: middle;
            justify-content: center;
            justify-items: center;
            padding-left: 1em;
            padding-right: 1em;
            padding-top: 1.5em;
            box-sizing: border-box;
            position: relative;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            align-content: center;
            justify-content: center;
            align-items: center;
        }
        bt-ha-outlined-icon-button {
            border: 1px solid var(--secondary-text-color);
            border-radius: 100%;
            padding: 0.5em;
            cursor: pointer;
        }
        .error {
            position: absolute;
            display: flex;
            flex-flow: column;
            align-items: center;
            place-content: center;
            width: -webkit-fill-available;
            height: -webkit-fill-available;
            left: 0px;
            top: 0px;
            background: rgba(200, 200, 200, 0.16);
            border-radius: var(--ha-card-border-radius, 12px);
            border-width: var(--ha-card-border-width, 1px);
            border-style: solid;
            border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
            pointer-events: all;
            font-size: 18px;
            text-align: center;
            line-height: 1.4;
            padding: 1em;
            --mdc-icon-size: 36px;
            backdrop-filter: blur(5px);
            z-index: 4;
        }
        .more-info {
            position: absolute;
            cursor: pointer;
            top: 0px;
            right: 0px;
            inset-inline-end: 0px;
            inset-inline-start: initial;
            border-radius: 100%;
            color: var(--secondary-text-color);
            z-index: 1;
            direction: var(--direction);
        }
        bt-ha-control-circular-slider {
            --primary-color: var(--mode-color);
        }
        .content {
            position: absolute;
            width: calc(70% - 40px);
            height: calc(70% - 100px);
            box-sizing: border-box;
            border-radius: 100%;
            left: 50%;
            top: calc(50% - 20px);
            text-align: center;
            overflow-wrap: break-word;
            pointer-events: none;
            display: flex;
            align-items: center;
            place-content: center;
            flex-flow: wrap;
            z-index: 3;
            transform: translate(-50%, -50%);
            max-width: 155px;
        }
        .content > svg * {
            pointer-events: auto;
        }
        #expand .content {
            top: calc(50% - 40px);
        }
        #main {
            transform: scale(2.3);
        }
        .name {
            display: block;
            width: 100%;
            text-align: center;
            font-size: 20px;
            word-break: keep-all;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        svg {
            height: auto;
            margin: auto;
            display: block;
            width: 100%;
            -webkit-backface-visibility: hidden;
            max-width: 233px;
        }
        path {
            stroke-linecap: round;
            stroke-width: 1;
        }
        text {
            fill: var(--primary-text-color);
        }
        .auto,
        .heat_cool {
            --mode-color: var(--state-climate-auto-color);
        }
        .cool {
            --mode-color: var(--label-badge-red);
        }
        .heat,
        .heat_cool {
            --mode-color: var(--label-badge-red);
        }
        .off {
            --mode-color: var(--slider-track-color);
        }
        .fan_only {
            --mode-color: var(--state-climate-fan_only-color);
        }
        .dry {
            --mode-color: var(--state-climate-dry-color);
        }
        .idle {
            --mode-color: var(--state-climate-idle-color);
        }
        .unknown-mode {
            --mode-color: var(--state-unknown-color);
        }
        #modes,
        #fan-modes,
        #jacuzzi-switches {
            z-index: 3;
            position: relative;
            display: flex;
            width: auto;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.15em;
        }
        #modes {
            margin-top: -3em;
            margin-bottom: 0.35em;
        }
        #fan-modes {
            margin-bottom: 0.35em;
        }
        #jacuzzi-switches {
            margin-bottom: 0.75em;
        }
        #bt-control-buttons {
            z-index: 3;
            position: relative;
            display: flex;
            width: auto;
            justify-content: center;
            padding-bottom: 0.2em;
        }
        #bt-control-buttons .button {
            z-index: 3;
            position: relative;
            display: flex;
            width: auto;
            justify-content: center;
            padding: 1em;
            padding-top: 0.2em;
        }
        #modes > *,
        #fan-modes > *,
        #jacuzzi-switches > * {
            color: var(--disabled-text-color);
            cursor: pointer;
            display: inline-block;
        }
        #modes .selected-icon,
        #fan-modes .selected-icon,
        #jacuzzi-switches .switch-on {
            color: var(--mode-color);
        }
        .status {
            transition: fill 0.6s ease-in-out, filter 0.6s ease-in-out;
            filter: none;
        }
        .status.active {
            fill: var(--error-color);
            filter: drop-shadow(0px 0px 6px var(--error-color));
        }
        line {
            stroke: var(--disabled-text-color);
        }
        ha-icon-button {
            transition: color 0.6s ease-in-out;
        }
        @container bt-jacuzzi-card (max-width: 280px) {
            .content {
                top: calc(50% - 10px);
            }
        }
        @container bt-jacuzzi-card (max-width: 255px) {
            #modes {
                margin-top: -2em;
            }
            ha-card {
                padding-top: 2em;
            }
        }
    `,e([he({attribute:!1})],fa.prototype,"hass",void 0),e([he({type:Number})],fa.prototype,"value",void 0),e([he({type:Number})],fa.prototype,"current",void 0),e([he({type:Number})],fa.prototype,"current_humidity",void 0),e([he({type:Number})],fa.prototype,"min",void 0),e([he({type:Number})],fa.prototype,"max",void 0),e([he({type:Number})],fa.prototype,"step",void 0),e([he({type:String})],fa.prototype,"mode",void 0),e([me()],fa.prototype,"_fanModes",void 0),e([me()],fa.prototype,"_fanMode",void 0),e([me()],fa.prototype,"_errorOverlay",void 0),e([me()],fa.prototype,"_config",void 0),fa=e([ce("better-jacuzzi-ui-card")],fa);const va=function(...e){const t="type"===e[0].type,i=e.map((e=>e.schema)),r=Object.assign({},...i);return t?tr(r):Gi(r)}(Gi({index:Qi(Ji()),view_index:Qi(Ji()),view_layout:Yi("any",(()=>!0)),type:er()}),Gi({entity:Qi(er()),name:Qi(er())}),Gi({power:Qi(er()),jets:Qi(er()),filter:Qi(er()),bubbles:Qi(er()),sanitizer:Qi(er()),error_entity:Qi(er()),hide_fan:Qi(Xi()),disable_menu:Qi(Xi()),disable_buttons:Qi(Xi()),set_current_as_main:Qi(Xi()),disable_heat:Qi(Xi()),disable_off:Qi(Xi())})),ga=["icon_color","layout","fill_container","primary_info","secondary_info","icon_type","content_info","use_entity_picture","collapsible_controls","icon_animation"],ba=e=>{var t,i;customElements.get("ha-form")&&(customElements.get("hui-action-editor")||((e,t,i,r)=>{const[n,a,o]=e.split(".",3);return Number(n)>t||Number(n)===t&&(void 0===r?Number(a)>=i:Number(a)>i)||void 0!==r&&Number(n)===t&&Number(a)===i&&Number(o)>=r})(e,2022,11))||null===(t=customElements.get("hui-button-card"))||void 0===t||t.getConfigElement(),customElements.get("ha-entity-picker")||null===(i=customElements.get("hui-entities-card"))||void 0===i||i.getConfigElement()},ya=["power","jets","filter","bubbles","sanitizer","error_entity","hide_fan","disable_menu","disable_buttons","set_current_as_main","disable_heat","disable_off"],wa=Di((()=>[{name:"entity",selector:{entity:{domain:["climate"]}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"power",selector:{entity:{domain:["switch"]}}},{name:"jets",selector:{entity:{domain:["switch"]}}},{name:"filter",selector:{entity:{domain:["switch"]}}},{name:"bubbles",selector:{entity:{domain:["switch"]}}},{name:"sanitizer",selector:{entity:{domain:["switch"]}}},{name:"error_entity",selector:{entity:{domain:["sensor"]}}}]},{type:"grid",name:"",schema:[{name:"hide_fan",selector:{boolean:{}}},{name:"disable_menu",selector:{boolean:{}}},{name:"disable_buttons",selector:{boolean:{}}},{name:"set_current_as_main",selector:{boolean:{}}},{name:"disable_heat",selector:{boolean:{}}},{name:"disable_off",selector:{boolean:{}}}]}]));let ka=class extends se{constructor(){super(...arguments),this._computeLabel=e=>{const t=(i=this.hass,function(e){var t;let r=zi(e,null!==(t=null==i?void 0:i.locale.language)&&void 0!==t?t:xi);return r||(r=zi(e,xi)),null!=r?r:e});var i;return ga.includes(e.name)?t(`editor.card.generic.${e.name}`):ya.includes(e.name)?t(`editor.card.jacuzzi.${e.name}`):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}connectedCallback(){super.connectedCallback(),ba(this.hass.connection.haVersion)}setConfig(e){Wi(e,va),this._config=e}render(){if(!this.hass||!this._config)return U``;const e=wa();return U`
            <ha-form
                .hass=${this.hass}
                .data=${this._config}
                .schema=${e}
                .computeLabel=${this._computeLabel}
                @value-changed=${this._valueChanged}
            ></ha-form>
        `}_valueChanged(e){Li(this,"config-changed",{config:e.detail.value}),Li(this,"hass",{config:e.detail.value})}};e([me()],ka.prototype,"_config",void 0),e([he({attribute:!1})],ka.prototype,"hass",void 0),ka=e([ce("better-jacuzzi-ui-card-editor")],ka);var Aa=Object.freeze({__proto__:null,get JacuzziCardEditor(){return ka}});export{fa as BetterJacuzziUi};
