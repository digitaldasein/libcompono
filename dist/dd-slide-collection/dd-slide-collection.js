function t(t,e,i,o){var s,n=arguments.length,l=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(l=(n<3?s(l):n>3?s(e,i,l):s(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;class s{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(i,t))}return t}toString(){return this.cssText}}const n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const r=window.trustedTypes,a=r?r.emptyScript:"",d=window.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:h};class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),o=window.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=p){var o,s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const l=(null!==(s=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==s?s:c.toAttribute)(e,i.type);this._$El=t,null==l?this.removeAttribute(n):this.setAttribute(n,l),this._$El=null}}_$AK(t,e){var i,o;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),l=t.converter,r=null!==(o=null!==(i=null==l?void 0:l.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==o?o:c.fromAttribute;this._$El=n,this[n]=r(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:u}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.3.3");const g=globalThis.trustedTypes,f=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,$="?"+m,y=`<${$}>`,_=document,w=(t="")=>_.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,x=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,T=/'/g,k=/"/g,P=/^(?:script|style|textarea|title)$/i,U=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),H=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),z=new WeakMap,R=_.createTreeWalker(_,129,null,!1),O=(t,e)=>{const i=t.length-1,o=[];let s,n=2===e?"<svg>":"",l=S;for(let e=0;e<i;e++){const i=t[e];let r,a,d=-1,c=0;for(;c<i.length&&(l.lastIndex=c,a=l.exec(i),null!==a);)c=l.lastIndex,l===S?"!--"===a[1]?l=E:void 0!==a[1]?l=x:void 0!==a[2]?(P.test(a[2])&&(s=RegExp("</"+a[2],"g")),l=C):void 0!==a[3]&&(l=C):l===C?">"===a[0]?(l=null!=s?s:S,d=-1):void 0===a[1]?d=-2:(d=l.lastIndex-a[2].length,r=a[1],l=void 0===a[3]?C:'"'===a[3]?k:T):l===k||l===T?l=C:l===E||l===x?l=S:(l=C,s=void 0);const h=l===C&&t[e+1].startsWith("/>")?" ":"";n+=l===S?i+y:d>=0?(o.push(r),i.slice(0,d)+"$lit$"+i.slice(d)+m+h):i+m+(-2===d?(o.push(void 0),e):h)}const r=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(r):r,o]};class N{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,n=0;const l=t.length-1,r=this.parts,[a,d]=O(t,e);if(this.el=N.createElement(a,i),R.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=R.nextNode())&&r.length<l;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const i=d[n++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(i);r.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?W:"@"===e[1]?V:j})}else r.push({type:6,index:s})}for(const e of t)o.removeAttribute(e)}if(P.test(o.tagName)){const t=o.textContent.split(m),e=t.length-1;if(e>0){o.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],w()),R.nextNode(),r.push({type:2,index:++s});o.append(t[e],w())}}}else if(8===o.nodeType)if(o.data===$)r.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(m,t+1));)r.push({type:7,index:s}),t+=m.length-1}s++}}static createElement(t,e){const i=_.createElement("template");return i.innerHTML=t,i}}function M(t,e,i=t,o){var s,n,l,r;if(e===H)return e;let a=void 0!==o?null===(s=i._$Cl)||void 0===s?void 0:s[o]:i._$Cu;const d=b(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==d&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===d?a=void 0:(a=new d(t),a._$AT(t,i,o)),void 0!==o?(null!==(l=(r=i)._$Cl)&&void 0!==l?l:r._$Cl=[])[o]=a:i._$Cu=a),void 0!==a&&(e=M(t,a._$AS(t,e.values),a,o)),e}class D{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:o}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:_).importNode(i,!0);R.currentNode=s;let n=R.nextNode(),l=0,r=0,a=o[0];for(;void 0!==a;){if(l===a.index){let e;2===a.type?e=new B(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new K(n,this,t)),this.v.push(e),a=o[++r]}l!==(null==a?void 0:a.index)&&(n=R.nextNode(),l++)}return s}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{constructor(t,e,i,o){var s;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cg=null===(s=null==o?void 0:o.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),b(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==H&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==L&&b(this._$AH)?this._$AA.nextSibling.data=t:this.k(_.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:o}=t,s="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=N.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(i);else{const t=new D(s,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new N(t)),e}S(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new B(this.M(w()),this.M(w()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,i,o,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const s=this.strings;let n=!1;if(void 0===s)t=M(this,t,e,0),n=!b(t)||t!==this._$AH&&t!==H,n&&(this._$AH=t);else{const o=t;let l,r;for(t=s[0],l=0;l<s.length-1;l++)r=M(this,o[i+l],e,l),r===H&&(r=this._$AH[l]),n||(n=!b(r)||r!==this._$AH[l]),r===L?t=L:t!==L&&(t+=(null!=r?r:"")+s[l+1]),this._$AH[l]=r}n&&!o&&this.C(t)}C(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends j{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===L?void 0:t}}const q=g?g.emptyScript:"";class W extends j{constructor(){super(...arguments),this.type=4}C(t){t&&t!==L?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class V extends j{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=M(this,t,e,0))&&void 0!==i?i:L)===H)return;const o=this._$AH,s=t===L&&o!==L||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==L&&(o===L||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const F=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var J,G;null==F||F(N,B),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.2.6");class Z extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,s;const n=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let l=n._$litPart$;if(void 0===l){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;n._$litPart$=l=new B(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return l._$AI(t),l})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return H}}Z.finalized=!0,Z._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:Z});const Q=globalThis.litElementPolyfillSupport;null==Q||Q({LitElement:Z}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.2.1");
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
class it extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){if(super(t),this.it=L,t.type!==et)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===L||null==t)return this.ft=void 0,this.it=t;if(t===H)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}it.directiveName="unsafeHTML",it.resultType=1;const ot=(t=>(...e)=>({_$litDirective$:t,values:e}))(it),st="",nt="dummy-title",lt="",rt="",at="",dt="",ct="",ht="",pt="",ut=!1,vt=1,gt="";class ft extends Z{constructor(){super(...arguments),this.mainTitle=nt,this.subTitle=lt,this.author=st,this.date=rt,this.url=at,this.imgUrl=ct,this.imgSrc=dt,this.organisation=ht,this.organisationUrl=pt,this.jsonConfig=gt,this.full=ut,this.fullScaleFactor=vt,this.goToPrint=!1,this._updateView=(t=!1)=>{if(this.goToPrint)return;t&&(this.full=!this.full);const e=this.shadowRoot.querySelector(".dd-caption");e&&(this.full?e.style.display="none":e.style.display="flex");if(document.querySelector(".shower"))return void(this.full?this.classList.remove("list"):this.classList.add("list"));if(this.full){this.classList.add("full"),this.classList.remove("list");const{innerWidth:t,innerHeight:e}=window,i=document.querySelector(".slide");if(i){const{offsetWidth:o,offsetHeight:s}=i,n=1/Math.max(o/t,s/e)*this.fullScaleFactor;this.style.setProperty("--slide-collect-full-scale-factor",`${n}`);const l=(e-s*n)/2,r=document.querySelectorAll(".slide");this.style.height=r.length*e+"px";for(const[i,s]of r.entries())s.id=`${i+1}`,s.style.marginTop=`\n              ${e*i+l}px`,s.style.marginLeft=`\n              ${(t-o*n)/2}px`,i===r.length-1&&(s.style.marginBottom=`${l}px`)}}else{this.classList.add("list"),this.classList.remove("full"),this.style.height="auto";const t=document.querySelectorAll(".slide");for(const e of t)e.style.marginTop="0px",e.style.marginLeft="0px"}const i=`${window.location.protocol}//${window.location.host}${window.location.pathname}`;this.full?window.history.pushState({fullPage:!0},"Slide",`${i}?full`):window.history.pushState({fullPage:!0},"Slide",`${i}`),this._updateStyle()},this._handleSlideClick=()=>{const t=document.querySelectorAll(".slide");for(const[e,i]of t.entries())i.addEventListener("click",(()=>{if(!this.full){if(this._updateView(!0),document.querySelector(".shower"))return;window.scrollBy(0,window.innerHeight*e),window.location.hash=`#${e+1}`}}))},this._handleResize=()=>{document.querySelector(".shower")||this._updateView()},this._handleLocation=()=>{const t=window.location.href.split("?")[1],e=new URLSearchParams(t);for(const t of e.entries())if(t[0].includes("full")){this.full||this._updateView(!0);break}},this._handleScroll=()=>{if(!document.querySelector(".shower")&&!this.goToPrint&&this.full){const t=document.documentElement.scrollTop,e=Math.floor(t/window.innerHeight);window.history.pushState(null,"",`?full#${e+1}`)}},this._interactKeys=()=>{document.onkeydown=t=>{const e=t||window.event;if(!(e.ctrlKey||e.altKey||e.metaKey))switch(e.key.toUpperCase()){case"ESC":case"ESCAPE":this.full&&(e.preventDefault(),this._updateView(!0));break;case"BACKSPACE":case"PAGEUP":case"ARROWUP":case"ARROWLEFT":case"P":this.full&&(e.preventDefault(),window.scrollBy(0,-window.innerHeight));break;case"PAGEDOWN":case"ARROWDOWN":case"ARROWRIGHT":case"N":this.full&&(e.preventDefault(),window.scrollBy(0,window.innerHeight));break;case" ":this.full&&(e.preventDefault(),e.shiftKey?window.scrollBy(0,-window.innerHeight):window.scrollBy(0,window.innerHeight))}}},this._updateStyle=()=>{this.full?this.parentElement.style.backgroundColor="rgba(0,0,0,1)":this.parentElement.style.backgroundColor=""}}async setPropsFromJson(){const t=await async function(t){if(await(async t=>404!==(await fetch(t,{method:"HEAD"})).status||(console.error(`JSON config does not exist at '${t}'`),!1))(t))try{const e=await fetch(t);return await e.json()}catch(e){console.error(`Error while reading config file at ${t} \n\n ${e}`)}return{error:"Could not parse JSON config, see console for errors"}}(this.jsonConfig);t.error?this.mainTitle=`<i><b>[ERROR]</b>${t.error} </i>`:(t.title&&(this.mainTitle=t.title),t.mainTitle&&(this.mainTitle=t.mainTitle),t.subTitle&&(this.subTitle=t.subTitle),t.author&&this.author===st&&(this.author=t.author),t.date&&(this.date=t.date),t.url&&(this.url=t.url),t.imgUrl&&(this.imgUrl=t.imgUrl),t.imgSrc&&(this.imgSrc=t.imgSrc),t.organisation&&(this.organisation=t.organisation),t.organisationUrl&&(this.organisationUrl=t.organisationUrl))}makeCaptionHeader(t=""){let e="";this.imgSrc&&(e=`<a class="caption-link"\n          href="${this.imgUrl}"\n          target="_blank"\n          title="Click to see IMG link">\n          <img class="caption-img" src="${this.imgSrc}" alt="img-src"></a>`);let i=`${this.organisation}`;this.organisationUrl&&(i=`<a href="${this.organisationUrl}"\n                           title="Organisation (click for link)"\n                           class="dd-slide-collect-org-url">${this.organisation}</a>`);let o="";return this.url&&(o=`\n      <a class="caption-url" href="${this.url}" target="_blank">\n          <i>${this.url}</i>\n      </a>`),t?`\n        <div class="dd-caption-custom">\n          ${t}\n        </div>\n        `:`\n        <header class="dd-caption" title="Slide collection caption">\n          <div class="dd-caption-item dd-caption-left">\n            ${e}\n          </div>\n          <div class="dd-caption-item dd-caption-center">\n            <div class="dd-caption-title" title="Title">\n              ${this.mainTitle}<br>\n            </div>\n            <div class="dd-caption-subtitle" title="Subtitle">\n              <i>${this.subTitle}</i>\n            </div>\n          </div>\n          <div class="dd-caption-item dd-caption-right">\n            <span title="Date">${this.date}</span><br>\n            <strong title="Author(s)">${this.author}</strong><br>\n            <span title="Organisation">${i}</span><br>\n            ${o}\n          </div>\n        </header>\n      `}connectedCallback(){super.connectedCallback(),window.addEventListener("DOMContentLoaded",this._handleSlideClick),window.addEventListener("DOMContentLoaded",this._handleLocation),window.addEventListener("resize",this._handleResize),document.addEventListener("scroll",this._handleScroll),window.addEventListener("beforeprint",(()=>{this.goToPrint=!0})),window.addEventListener("afterprint",(()=>{this.goToPrint=!1}))}disconnectedCallback(){window.removeEventListener("DOMContentLoaded",this._handleSlideClick),window.removeEventListener("DOMContentLoaded",this._handleLocation),window.removeEventListener("resize",this._handleResize),document.removeEventListener("scroll",this._handleScroll),window.removeEventListener("beforeprint",(()=>{this.goToPrint=!0})),window.removeEventListener("afterprint",(()=>{this.goToPrint=!1})),super.disconnectedCallback()}async firstUpdated(){this.full?this.classList.add("full"):this.classList.add("list");document.querySelector(".shower")||(this.parentElement.style.margin="0"),this._interactKeys(),this._updateStyle()}render(){let t="";this.jsonConfig&&this.setPropsFromJson();const e=this.querySelector('[slot="caption"]');e?(t+=this.makeCaptionHeader(e.innerHTML),e.style.display="none"):t+=this.makeCaptionHeader(),t+='<slot name="caption"></slot>',t+="<slot></slot>";const i=this.querySelectorAll('dd-slide-collection > *:not(.slide):not([slot="caption"]):not(section)');for(const t of i)t.innerHTML=`\n<i>[WARNING] <code>${t.nodeName}</code> element is not allowed.\n<br>\n<br>\nOnly include <code>section and dd-slide</code> elements, or elements with\n<code>.slide</code> class inside a <code>dd-slide-collection</code>, otherwise,\nthe slide will not be rendered properly</i>\n`;return U`${ot(t)}`}}ft.styles=((t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new s(o,t,i)})`
    :host {
      /* Ddpres fillers */

      /* dd color pallette */

      --slide-collect-color-prim: var(--dd-color-prim);
      --slide-collect-color-prim-dark: var(--dd-color-prim-dark);
      --slide-collect-color-sec: var(--dd-color-sec);
      --slide-collect-list-bg-color: var(
        --dd-color-list-bg,
        rgba(248, 237, 227, 0.5)
      );
      --slide-collect-text-color: var(--dd-color-text, rgba(0, 0, 0, 0.9));
      --slide-collect-text-color-light: var(
        --dd-color-text-light,
        rgba(255, 255, 255, 1)
      );

      --slide-collect-gap: var(--dd-slide-gap, 96px);
      --slide-collect-ratio: var(--dd-slide-ratio, calc(16 / 9));
      --slide-collect-width: var(--dd-slide-width, 1024px);
      --slide-collect-height: var(
        --dd-slide-height,
        calc(var(--slide-collect-width) / var(--slide-collect-ratio))
      );
      --slide-collect-full-scale-factor: var(--dd-full-scale-factor, 1);
      --slide-collect-font: var(--dd-font, 24px/2 'Roboto', sans-serif);
      --slide-collect-font-size: var(--dd-font-size, 24px);

      --caption-height: var(--dd-caption-height, 250px);
      --caption-center-width: 60%;
      --caption-font-size: calc(2.2 * var(--slide-collect-font-size));
      --caption-padding-left: 30px;
      --caption-padding-top: 30px;
      --caption-padding-right: 30px;
      --caption-padding-bottom: 30px;
      --caption-img-height: calc(0.6 * var(--caption-height));
      --caption-fg-color: var(
        --dd-color-caption-fg,
        var(--slide-collect-text-color-light)
      );

      --dd-color-caption-bg: var(--dd-color-prim-dark, rgba(65, 90, 72, 1));
      --caption-bg-color: var(--dd-color-caption-bg);

      --slide-collect-slide-nr-font-size: var(--dd-slide-nr-font-size, 16px);
      --slide-collect-slide-nr-right: var(--dd-slide-nr-right, 13px);

      --dd-slide-nr-bottom: 0em;

      --slide-collect-slide-nr-bottom: var(--dd-slide-nr-bottom, 0.2em);
      --slide-collect-slide-nr-color: var(
        --dd-slide-nr-color,
        var(--slide-collect-text-color)
      );

      --slide-scale: 1;

      margin: 0;
      padding: 0;
      color: black;
      counter-reset: slide;

      font: var(--slide-collect-font);
      font-size: var(--slide-collect-font-size);
    }

    /* Full */

    :host(.full) {
      display: block;
    }

    /* Hover */

    :host(.list) ::slotted(section:hover),
    :host(.list) ::slotted(.slide:hover) {
      box-shadow: 0 0 0 20px
        var(--slide-collect-color-prim, rgba(65, 90, 72, 0.5));
    }

    ::slotted(section),
    ::slotted(.slide) {
      position: relative;
      z-index: 0;
      overflow: hidden;
      box-sizing: border-box;
      width: var(--slide-collect-width);
      max-width: 100%;
      height: var(--slide-collect-height);
      background-color: white;
      margin: 0 auto;
      /*margin-bottom: var(--slide-collect-gap)*/
    }

    :host(.full) ::slotted(section),
    :host(.full) ::slotted(.slide) {
      position: absolute;
      transform-origin: 0 0;
      transform: scale(var(--slide-collect-full-scale-factor));
      border: 1px solid black;
    }

    /* Number */

    ::slotted(section)::after,
    ::slotted(.slide)::after {
      position: absolute;
      font-size: var(--slide-collect-slide-nr-font-size);
      right: var(--slide-collect-slide-nr-right);
      bottom: calc(var(--slide-collect-slide-nr-bottom));
      left: 0px;
      color: var(--slide-collect-slide-nr-color);
      text-align: right;
      counter-increment: slide;
      content: counter(slide);
      z-index: 2;
    }
    ::slotted(.slide.titlepage)::after,
    ::slotted(dd-titlepage)::after {
      counter-increment: slide;
      content: '';
    }

    /* List */

    :host(.list) ::slotted(.slide),
    :host(.list) ::slotted(section) {
      position: relative;
      box-shadow: calc(var(--slide-scale) * 4px) calc(var(--slide-scale) * 4px)
        0 calc(var(--slide-scale) * 4px)
        var(--slide-collect-color-prim-dark, rgba(0, 0, 0, 0.8));
      transform-origin: 0 0;
      transform: scale(var(--slide-scale));
      display: block;
      min-width: var(--slide-collect-width);
    }

    :host(.list) ::slotted(section *),
    :host(.list) ::slotted(.slide *) {
      pointer-events: none;
    }

    :host(.list) {
      padding: calc(var(--slide-collect-gap) * var(--slide-scale));
      box-sizing: border-box;
      width: 100%;
      display: grid;
      grid-gap: calc(var(--slide-collect-gap) * var(--slide-scale));
      grid-auto-rows: calc(var(--slide-collect-height) * var(--slide-scale));
      grid-template-rows: min-content;
      grid-template-columns: repeat(
        auto-fill,
        calc(var(--slide-collect-width) * var(--slide-scale))
      );
      background-color: var(--slide-collect-list-bg-color);
      /*overflow-x: hidden;*/
    }

    :host(.list) .dd-caption,
    :host(.list) .dd-caption-custom {
      grid-column: 1 / -1;
      margin-top: calc(-1 * var(--slide-collect-gap) * var(--slide-scale));
      margin-left: calc(-1 * var(--slide-collect-gap) * var(--slide-scale));
      box-sizing: border-box;
      width: 100vw;
    }

    /* IE & Edge Fix */

    :host(.list):not(.dd-caption):not(.dd-caption-custom) {
      position: absolute;
      clip: rect(0, auto, auto, 0);
    }

    /* Responsive */

    :host(.list) {
      --slide-scale: 0.25;
    }

    @media (min-width: 1168px) {
      :host(.list) {
        --slide-scale: 0.5;
      }
    }

    @media (min-width: 2336px) {
      :host(.list) {
        --slide-scale: 1;
      }
    }

    @media (max-width: 1168px) {
      :host {
        --caption-font-size: calc(1.3 * var(--slide-collect-font-size));
      }
    }
    @media (max-width: 700px) {
      :host {
        --caption-font-size: calc(1.1 * var(--slide-collect-font-size));
      }
    }

    /* Caption */

    .dd-caption {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: row;
      z-index: 1;
      color: var(--caption-fg-color);
      background-color: var(--caption-bg-color);
      height: var(--caption-height);
    }

    .dd-caption-item {
      font-size: var(--caption-font-size);
    }

    .dd-caption-left {
      flex-grow: 1;
      text-align: left;
      align-self: center;
      padding: var(--caption-padding-top) 0 var(--caption-padding-bottom)
        var(--caption-padding-left);
    }

    .dd-caption-center {
      flex-grow: 6;
      text-align: left;
      max-width: var(--caption-center-width);
      padding: var(--caption-padding-top) var(--caption-padding-right)
        var(--caption-padding-bottom) var(--caption-padding-left);
    }

    .dd-caption-title {
      padding-top: 20px;
      line-height: 1em;
      font-size: var(--caption-font-size);
      font-weight: 300;
    }

    .dd-caption-subtitle {
      padding-top: 20px;
      line-height: 1em;
      font-size: calc(0.55 * var(--caption-font-size));
      color: var(--caption-color-subtitle, rgba(255, 255, 255, 0.7));
    }

    .dd-caption-right {
      flex-grow: 1;
      text-align: right;
      font-size: calc(0.35 * var(--caption-font-size));
      align-self: flex-end;
      padding: var(--caption-padding-top) var(--caption-padding-right)
        var(--caption-padding-bottom) 0;
    }

    img.caption-img {
      height: var(--caption-img-height);
      display: block;
    }

    .caption-url {
      /*text-decoration: none;*/
      color: var(--caption-fg-color);
    }

    .dd-slide-collect-org-url {
      color: var(--slide-collect-text-color-light);
    }

    /* do not show custom caption slot */
    .dd-caption-custom {
      width: 100%;
      z-index: 1;
    }

    /* Print */

    @media print {
      :host(.full) {
        display: inline;
      }

      :host(.full) ::slotted(section),
      :host(.full) ::slotted(.slide) {
        position: relative;
        margin-left: 0 !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        transform: none;
      }
    }
  `,t([Y({type:String,attribute:"main-title"})],ft.prototype,"mainTitle",void 0),t([Y({type:String,attribute:"sub-title"})],ft.prototype,"subTitle",void 0),t([Y({type:String,attribute:"author"})],ft.prototype,"author",void 0),t([Y({type:String,attribute:"date"})],ft.prototype,"date",void 0),t([Y({type:String,attribute:"url"})],ft.prototype,"url",void 0),t([Y({type:String,attribute:"img-url"})],ft.prototype,"imgUrl",void 0),t([Y({type:String,attribute:"img-src"})],ft.prototype,"imgSrc",void 0),t([Y({type:String,attribute:"organisation"})],ft.prototype,"organisation",void 0),t([Y({type:String,attribute:"organisation-url"})],ft.prototype,"organisationUrl",void 0),t([Y({type:String,attribute:"config-path"})],ft.prototype,"jsonConfig",void 0),t([Y({type:Boolean,attribute:"full"})],ft.prototype,"full",void 0),t([Y({type:Number,attribute:"full-scale-factor"})],ft.prototype,"fullScaleFactor",void 0),t([Y({type:Boolean,attribute:!1})],ft.prototype,"goToPrint",void 0),window.customElements.define("dd-slide-collection",ft);
