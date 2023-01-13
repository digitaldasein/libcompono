function t(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class o{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=s.get(this.cssText);return e&&void 0===t&&(s.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var n;const l=window.trustedTypes,d=l?l.emptyScript:"",h=window.reactiveElementPolyfillSupport,a={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},c=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:a,reflect:!1,hasChanged:c};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=p){var s,o;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const n=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:a.toAttribute)(e,i.type);this._$Ei=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Ei=null}}_$AK(t,e){var i,s,o;const r=this.constructor,n=r._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=r.getPropertyOptions(n),l=t.converter,d=null!==(o=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==o?o:a.fromAttribute;this._$Ei=n,this[n]=d(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:u}),(null!==(n=globalThis.reactiveElementVersions)&&void 0!==n?n:globalThis.reactiveElementVersions=[]).push("1.3.2");const $=globalThis.trustedTypes,f=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,g="?"+y,_=`<${g}>`,m=document,A=(t="")=>m.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,C=/>/g,x=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,U=/'/g,P=/"/g,T=/^(?:script|style|textarea|title)$/i,k=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),H=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),M=new WeakMap,O=m.createTreeWalker(m,129,null,!1),R=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":"",n=S;for(let e=0;e<i;e++){const i=t[e];let l,d,h=-1,a=0;for(;a<i.length&&(n.lastIndex=a,d=n.exec(i),null!==d);)a=n.lastIndex,n===S?"!--"===d[1]?n=E:void 0!==d[1]?n=C:void 0!==d[2]?(T.test(d[2])&&(o=RegExp("</"+d[2],"g")),n=x):void 0!==d[3]&&(n=x):n===x?">"===d[0]?(n=null!=o?o:S,h=-1):void 0===d[1]?h=-2:(h=n.lastIndex-d[2].length,l=d[1],n=void 0===d[3]?x:'"'===d[3]?P:U):n===P||n===U?n=x:n===E||n===C?n=S:(n=x,o=void 0);const c=n===x&&t[e+1].startsWith("/>")?" ":"";r+=n===S?i+_:h>=0?(s.push(l),i.slice(0,h)+"$lit$"+i.slice(h)+y+c):i+y+(-2===h?(s.push(void 0),e):c)}const l=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(l):l,s]};class z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,l=this.parts,[d,h]=R(t,e);if(this.el=z.createElement(d,i),O.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=O.nextNode())&&l.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=h[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?V:"@"===e[1]?W:j})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(T.test(s.tagName)){const t=s.textContent.split(y),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],A()),O.nextNode(),l.push({type:2,index:++o});s.append(t[e],A())}}}else if(8===s.nodeType)if(s.data===g)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(y,t+1));)l.push({type:7,index:o}),t+=y.length-1}o++}}static createElement(t,e){const i=m.createElement("template");return i.innerHTML=t,i}}function L(t,e,i=t,s){var o,r,n,l;if(e===H)return e;let d=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const h=b(e)?void 0:e._$litDirective$;return(null==d?void 0:d.constructor)!==h&&(null===(r=null==d?void 0:d._$AO)||void 0===r||r.call(d,!1),void 0===h?d=void 0:(d=new h(t),d._$AT(t,i,s)),void 0!==s?(null!==(n=(l=i)._$Cl)&&void 0!==n?n:l._$Cl=[])[s]=d:i._$Cu=d),void 0!==d&&(e=L(t,d._$AS(t,e.values),d,s)),e}class D{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:m).importNode(i,!0);O.currentNode=o;let r=O.nextNode(),n=0,l=0,d=s[0];for(;void 0!==d;){if(n===d.index){let e;2===d.type?e=new B(r,r.nextSibling,this,t):1===d.type?e=new d.ctor(r,d.name,d.strings,this,t):6===d.type&&(e=new q(r,this,t)),this.v.push(e),d=s[++l]}n!==(null==d?void 0:d.index)&&(r=O.nextNode(),n++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{constructor(t,e,i,s){var o;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),b(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==H&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return w(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==N&&b(this._$AH)?this._$AA.nextSibling.data=t:this.k(m.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=z.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new D(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=M.get(t.strings);return void 0===e&&M.set(t.strings,e=new z(t)),e}S(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new B(this.M(A()),this.M(A()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,i,s,o){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=L(this,t,e,0),r=!b(t)||t!==this._$AH&&t!==H,r&&(this._$AH=t);else{const s=t;let n,l;for(t=o[0],n=0;n<o.length-1;n++)l=L(this,s[i+n],e,n),l===H&&(l=this._$AH[n]),r||(r=!b(l)||l!==this._$AH[n]),l===N?t=N:t!==N&&(t+=(null!=l?l:"")+o[n+1]),this._$AH[n]=l}r&&!s&&this.C(t)}C(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends j{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===N?void 0:t}}const F=$?$.emptyScript:"";class V extends j{constructor(){super(...arguments),this.type=4}C(t){t&&t!==N?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class W extends j{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=L(this,t,e,0))&&void 0!==i?i:N)===H)return;const s=this._$AH,o=t===N&&s!==N||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==N&&(s===N||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const G=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,J;null==G||G(z,B),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.2.6");class Z extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,o;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=r._$litPart$;if(void 0===n){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new B(e.insertBefore(A(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return H}}Z.finalized=!0,Z._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:Z});const Q=globalThis.litElementPolyfillSupport;null==Q||Q({LitElement:Z}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Y(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):X(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var tt;null===(tt=window.HTMLSlotElement)||void 0===tt||tt.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class it extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){if(super(t),this.it=N,t.type!==et)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===N||null==t)return this.ft=void 0,this.it=t;if(t===H)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}it.directiveName="unsafeHTML",it.resultType=1;const st=(t=>(...e)=>({_$litDirective$:t,values:e}))(it),ot="",rt="",nt="",lt="",dt=!1,ht=!1,at=!1,ct=!1;class pt extends Z{constructor(){super(...arguments),this.dim=ot,this.slotStyle=rt,this.cellStyle=rt,this.rowStyle=nt,this.hostStyle=lt,this.noFillers=dt,this.noFooter=ht,this.center=at,this.shout=ct,this.slotCounter=0,this._checkFooter=()=>{if(this.noFooter){this.querySelector("dd-footer").style.display="none"}}}_makeGridDim(){this.slotCounter=0;let t="";const e=this.dim.split(/[;]/);""===e.at(-1)&&e.pop();let i=!1;if(e.length>0&&1===e.length&&1===e[0].split(" ").length&&(i=!0),!i){const i=e.length;for(let s=0;s<i;s++){const i=e[s].split(" ").filter((t=>t));let o="";for(let t=0;t<i.length;t++)i[t]=`${i[t]}%`,this.noFillers?o+=`\n             <div style="${this.slotStyle} ${this.cellStyle}">\n                <slot name="${this.slotCounter+1}"> </slot>\n            </div>`:o+=`\n             <div style="${this.slotStyle} ${this.cellStyle}">\n                <slot name="${this.slotCounter+1}">\n                  <i>replace me with: <br>\n                  <code>\n                  &lt;div slot=${this.slotCounter+1}&gt;your content&lt;/div&gt;\n                  </code>\n                  </i>\n                </slot>\n            </div>`,this.slotCounter++;t+=`\n        <div class="gridrow grid-${s+1}" style="${`display: grid;\n            grid-template-columns: ${i.join(" ")};\n            grid-gap: var(--gridspace-col);`} ${this.rowStyle}">\n          ${o}\n        </div>\n        `}}return`\n      ${`\n        ${t}\n    `}\n    `}async firstUpdated(){}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",this._checkFooter)}disconnectedCallback(){window.removeEventListener("DOMContentLoaded",this._checkFooter),super.disconnectedCallback()}render(){this.classList.add("slide");const t=["dd-slide"];return this.center&&t.push("center"),this.shout&&(t.push("center"),t.push("shout")),this.dim?this.noFillers?k`
        <div class="${t.join(" ")}">
          <div>
            <slot></slot>
            ${st(this._makeGridDim())}
            <slot name="postgrid"></slot>
          </div>
        </div>
      `:k`
          <div class="${t.join(" ")}">
            <div>
              <slot>
                <h2>Put a title to remove me</h2>
              </slot>
              ${st(this._makeGridDim())}
              <slot name="postgrid"></slot>
            </div>
          </div>
        `:k`
      <div class="${t.join(" ")}">
        <div>
          <slot>
            <h2>
              No content added, or no grid layout defined. Default will be an
              empty page. Typing content in your slide will replace this
              message.
            </h2>
          </slot>
        </div>
      </div>
    `}}pt.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,i)})`
    /****************************************************************
     * Element styling
     ****************************************************************/

    :host {
      /* color pallette */
      --slide-color-heading: var(--dd-color-heading, var(--dd-color-prim-dark));
      --slide-color-link: var(--dd-color-link, rgba(65, 90, 72, 0.7));
      --slide-color-link-hover: var(--dd-color-link-hover, rgba(65, 90, 72, 1));

      --slide-ratio: var(--dd-slide-ratio, calc(16 / 9));
      --slide-width: var(--dd-slide-width, 1024px);
      --slide-height: calc(var(--slide-width) / var(--slide-ratio));
      --slide-font: var(--dd-font, 24px/2 'Roboto', sans-serif);

      --slide-pad-top: var(--dd-slide-pad-top, 0px);
      --slide-pad-top-content: var(--dd-slide-pad-top-content, 0px);
      --slide-pad-right: var(--dd-slide-pad-right, 25px);
      --slide-pad-left: var(--dd-slide-pad-left, 25px);

      --slide-gridspace-row: var(--dd-slide-gridspace-row, 10px);
      --slide-gridspace-col: var(--dd-slide-gridspace-col, 10px);

      --slide-shout-size: var(--dd-slide-shout-size, 2.5em);

      display: block;
      font: var(--slide-font);
    }

    ::slotted(h1:first-child),
    h1:first-child,
    ::slotted(h2:first-child),
    h2:first-child,
    ::slotted(h3:first-child),
    h3:first-child,
    ::slotted(h4:first-child),
    h4:first-child,
    ::slotted(h5:first-child),
    h5:first-child,
    ::slotted(h6:first-child),
    h6:first-child {
      /* style headings in the template "<slot> dummy text </slot>" */
      color: var(--slide-color-heading);
      margin: 0;
      padding: 0 0 var(--slide-pad-top-content) 0;
    }

    :host(.slide) {
      padding: var(--slide-pad-top) var(--slide-pad-right) 0
        var(--slide-pad-left);

      position: relative;
      z-index: 0;
      overflow: hidden;
      box-sizing: border-box;
      width: var(--slide-width);
      max-width: 100%;
      height: var(--slide-height);
      background-color: white;
      margin: 0;
    }

    .center {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .shout {
      font-size: var(--slide-shout-size);
      text-align: center;
      line-height: 1.25em;
    }

    .gridrow {
      padding-bottom: var(--slide-gridspace-row);
    }

    /* https://github.com/WICG/webcomponents/issues/889 */
  `,t([Y({type:String,attribute:"dim"})],pt.prototype,"dim",void 0),t([Y({type:String,attribute:"slot-style"})],pt.prototype,"slotStyle",void 0),t([Y({type:String,attribute:"cell-style"})],pt.prototype,"cellStyle",void 0),t([Y({type:String,attribute:"row-style"})],pt.prototype,"rowStyle",void 0),t([Y({type:String,attribute:"style"})],pt.prototype,"hostStyle",void 0),t([Y({type:Boolean,attribute:"no-fillers",reflect:!0})],pt.prototype,"noFillers",void 0),t([Y({type:Boolean,attribute:"no-footer",reflect:!0})],pt.prototype,"noFooter",void 0),t([Y({type:Boolean,attribute:"center",reflect:!0})],pt.prototype,"center",void 0),t([Y({type:Boolean,attribute:"shout",reflect:!0})],pt.prototype,"shout",void 0),t([Y({type:Number})],pt.prototype,"slotCounter",void 0),window.customElements.define("dd-slide",pt);
