function t(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new Map;class s{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=r.get(this.cssText);return e&&void 0===t&&(r.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var n;const l=window.trustedTypes,a=l?l.emptyScript:"",h=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},c=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:c};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Eh(i,e);void 0!==r&&(this._$Eu.set(r,i),t.push(r))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),r=window.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=u){var r,s;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const n=(null!==(s=null===(r=i.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==s?s:d.toAttribute)(e,i.type);this._$Ei=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Ei=null}}_$AK(t,e){var i,r,s;const o=this.constructor,n=o._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=o.getPropertyOptions(n),l=t.converter,a=null!==(s=null!==(r=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==r?r:"function"==typeof l?l:null)&&void 0!==s?s:d.fromAttribute;this._$Ei=n,this[n]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:p}),(null!==(n=globalThis.reactiveElementVersions)&&void 0!==n?n:globalThis.reactiveElementVersions=[]).push("1.3.2");const f=globalThis.trustedTypes,v=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,$="?"+m,y=`<${$}>`,_=document,A=(t="")=>_.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,C=/>/g,w=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,L=/"/g,P=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),T=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),N=new WeakMap,O=_.createTreeWalker(_,129,null,!1),H=(t,e)=>{const i=t.length-1,r=[];let s,o=2===e?"<svg>":"",n=E;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,d=0;for(;d<i.length&&(n.lastIndex=d,a=n.exec(i),null!==a);)d=n.lastIndex,n===E?"!--"===a[1]?n=x:void 0!==a[1]?n=C:void 0!==a[2]?(P.test(a[2])&&(s=RegExp("</"+a[2],"g")),n=w):void 0!==a[3]&&(n=w):n===w?">"===a[0]?(n=null!=s?s:E,h=-1):void 0===a[1]?h=-2:(h=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?w:'"'===a[3]?L:k):n===L||n===k?n=w:n===x||n===C?n=E:(n=w,s=void 0);const c=n===w&&t[e+1].startsWith("/>")?" ":"";o+=n===E?i+y:h>=0?(r.push(l),i.slice(0,h)+"$lit$"+i.slice(h)+m+c):i+m+(-2===h?(r.push(void 0),e):c)}const l=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==v?v.createHTML(l):l,r]};class M{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,o=0;const n=t.length-1,l=this.parts,[a,h]=H(t,e);if(this.el=M.createElement(a,i),O.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=O.nextNode())&&l.length<n;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const i=h[o++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?F:"@"===e[1]?q:I})}else l.push({type:6,index:s})}for(const e of t)r.removeAttribute(e)}if(P.test(r.tagName)){const t=r.textContent.split(m),e=t.length-1;if(e>0){r.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],A()),O.nextNode(),l.push({type:2,index:++s});r.append(t[e],A())}}}else if(8===r.nodeType)if(r.data===$)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(m,t+1));)l.push({type:7,index:s}),t+=m.length-1}s++}}static createElement(t,e){const i=_.createElement("template");return i.innerHTML=t,i}}function D(t,e,i=t,r){var s,o,n,l;if(e===T)return e;let a=void 0!==r?null===(s=i._$Cl)||void 0===s?void 0:s[r]:i._$Cu;const h=b(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,r)),void 0!==r?(null!==(n=(l=i)._$Cl)&&void 0!==n?n:l._$Cl=[])[r]=a:i._$Cu=a),void 0!==a&&(e=D(t,a._$AS(t,e.values),a,r)),e}class z{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:r}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:_).importNode(i,!0);O.currentNode=s;let o=O.nextNode(),n=0,l=0,a=r[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new j(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new J(o,this,t)),this.v.push(e),a=r[++l]}n!==(null==a?void 0:a.index)&&(o=O.nextNode(),n++)}return s}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class j{constructor(t,e,i,r){var s;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cg=null===(s=null==r?void 0:r.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),b(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return S(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==U&&b(this._$AH)?this._$AA.nextSibling.data=t:this.k(_.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:r}=t,s="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=M.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(i);else{const t=new z(s,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new M(t)),e}S(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new j(this.M(A()),this.M(A()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class I{constructor(t,e,i,r,s){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const s=this.strings;let o=!1;if(void 0===s)t=D(this,t,e,0),o=!b(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const r=t;let n,l;for(t=s[0],n=0;n<s.length-1;n++)l=D(this,r[i+n],e,n),l===T&&(l=this._$AH[n]),o||(o=!b(l)||l!==this._$AH[n]),l===U?t=U:t!==U&&(t+=(null!=l?l:"")+s[n+1]),this._$AH[n]=l}o&&!r&&this.C(t)}C(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends I{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===U?void 0:t}}const B=f?f.emptyScript:"";class F extends I{constructor(){super(...arguments),this.type=4}C(t){t&&t!==U?this.element.setAttribute(this.name,B):this.element.removeAttribute(this.name)}}class q extends I{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=D(this,t,e,0))&&void 0!==i?i:U)===T)return;const r=this._$AH,s=t===U&&r!==U||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==U&&(r===U||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}}const W=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,Z;null==W||W(M,j),(null!==(g=globalThis.litHtmlVersions)&&void 0!==g?g:globalThis.litHtmlVersions=[]).push("2.2.6");class G extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var r,s;const o=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let n=o._$litPart$;if(void 0===n){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=n=new j(e.insertBefore(A(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return T}}G.finalized=!0,G._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:G});const Q=globalThis.litElementPolyfillSupport;null==Q||Q({LitElement:G}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.2.0");
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
class it extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){if(super(t),this.it=U,t.type!==et)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===U||null==t)return this.ft=void 0,this.it=t;if(t===T)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}it.directiveName="unsafeHTML",it.resultType=1;const rt=(t=>(...e)=>({_$litDirective$:t,values:e}))(it),st="",ot="",nt="",lt="",at="",ht="",dt="",ct="",ut="",pt="",gt="center",ft="dd-slide",vt="dd-slide-collection";class mt extends G{constructor(){super(...arguments),this.textLeft=st,this.imgLeft=ot,this.imgLeftLink=nt,this.textCenter=lt,this.imgCenter=at,this.imgCenterLink=ht,this.textRight=dt,this.imgRight=ct,this.imgRightLink=ut,this.configPath=pt,this.alignVertical=gt,this.toSelector=ft,this.fromSelector=vt,this._injectIntoSelector=()=>{var t,e;if("DD-SLIDE"===(null===(t=this.parentElement)||void 0===t?void 0:t.nodeName))return;if("SECTION"===(null===(e=this.parentElement)||void 0===e?void 0:e.nodeName))return;const i=document.querySelectorAll(this.toSelector);if(i.length>0){this.style.display="none";for(const t of i)if(t.querySelector("dd-footer"));else{const e=document.createElement("dd-footer");e.setAttribute("text-left",this.textLeft),e.setAttribute("img-left",this.imgLeft),e.setAttribute("img-left-link",this.imgLeftLink),e.setAttribute("text-center",this.textCenter),e.setAttribute("img-center",this.imgCenter),e.setAttribute("img-center-link",this.imgCenterLink),e.setAttribute("text-right",this.textRight),e.setAttribute("img-right",this.imgRight),e.setAttribute("img-right-link",this.imgRightLink),e.setAttribute("align-v",this.alignVertical),e.setAttribute("config-path",this.configPath),e.setAttribute("to-selector",""),e.setAttribute("from-selector",""),this.setVerticalAlignment(e),t.append(e)}}},this._injectFromSelector=()=>{var t,e;if("DD-SLIDE"===(null===(t=this.parentElement)||void 0===t?void 0:t.nodeName))return;if("SECTION"===(null===(e=this.parentElement)||void 0===e?void 0:e.nodeName))return;const i=document.querySelector(this.fromSelector);i&&(null==this.getAttribute("text-center")&&(i.getAttribute("main-title")&&(this.textCenter=`<b>${i.getAttribute("main-title")}</b>`),i.getAttribute("author")&&(this.textCenter+=` &ndash; <i>${i.getAttribute("author")}</i>`),i.getAttribute("date")&&(this.textCenter+=` &ndash; ${i.getAttribute("date")}`)),i.getAttribute("url-logo")&&null==this.getAttribute("img-left-link")&&(this.imgLeftLink=i.getAttribute("url-logo")),i.getAttribute("img-src")&&null==this.getAttribute("img-left")&&(this.imgLeft=i.getAttribute("img-src")))}}makeFooter(){let t="none",e="none",i="none";return this.imgLeft&&(t="inline"),this.imgCenter&&(e="inline"),this.imgRight&&(i="inline"),`\n      <div class="dd-footer">\n        <div class="dd-footer-item dd-footer-left">\n            <a class="footer-link" style="display:${t};"\n                                   href="${this.imgLeftLink}"\n                                   target="_blank">\n              <img class="footer-img footer-img-left"  src="${this.imgLeft}" alt="imgLeft"></a>\n            <div class="footer-text" style="display:inline-block;">${this.textLeft}</div>\n        </div>\n\n        <div class="dd-footer-item dd-footer-center">\n            <a class="footer-link" style="display:${e};"\n                                   href="${this.imgCenterLink}"\n                                   target="_blank">\n              <img class="footer-img" footer-img-center" src="${this.imgCenter}" alt="imgCenter">\n            </a>\n            <div class="footer-text" style="display:inline-block;">${this.textCenter}</div>\n        </div>\n\n        <div class="dd-footer-item dd-footer-right">\n            <div class="footer-text" style="display:inline-block;">${this.textRight}</div>\n            <a class="footer-link" style="display:${i};"\n                                   href="${this.imgRightLink}"\n                                   target="_blank">\n              <img class="footer-img footer-img-right" src="${this.imgRight}" alt="imgRight">\n            </a>\n        </div>\n\n      </div>\n    `}async setPropsFromJson(){const t=await async function(t){if(await(async t=>404!==(await fetch(t,{method:"HEAD"})).status||(console.error(`JSON config does not exist at '${t}'`),!1))(t))try{const e=await fetch(t);return await e.json()}catch(e){console.error(`Error while reading config file at ${t} \n\n ${e}`)}return{error:"Could not parse JSON config, see console for errors"}}(this.configPath);t.error?this.textCenter=`<i><b>[ERROR]</b>${t.error} </i>`:(this.textCenter||(t.title&&(this.textCenter=`<b>${t.title}</b>`),t.mainTitle&&(this.textCenter=`<b>${t.mainTitle}</b>`),t.author&&(this.textCenter+=` &ndash; <i>${t.author}</i>`),t.date&&(this.textCenter+=` &ndash; ${t.date}`)),t.urlLogo&&!this.imgLeftLink&&(this.imgLeftLink=t.urlLogo),t.imgSrc&&!this.imgLeft&&(this.imgLeft=t.imgSrc))}setVerticalAlignment(t){"center"===this.alignVertical?(t.style.setProperty("--footer-align-v","center"),t.style.setProperty("--footer-align-flex-v","center")):"top"===this.alignVertical?(t.style.setProperty("--footer-align-v","start"),t.style.setProperty("--footer-align-flex-v","flex-start")):"bottom"===this.alignVertical&&(t.style.setProperty("--footer-align-v","end"),t.style.setProperty("--footer-align-flex-v","flex-end"))}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",this._injectFromSelector),document.addEventListener("DOMContentLoaded",this._injectIntoSelector)}disconnectedCallback(){window.removeEventListener("DOMContentLoaded",this._injectIntoSelector),window.removeEventListener("DOMContentLoaded",this._injectFromSelector),super.disconnectedCallback()}render(){let t="";return this.setVerticalAlignment(this),this.configPath&&this.setPropsFromJson(),t+=this.makeFooter(),R`${rt(t)}`}}mt.styles=((t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new s(r,i)})`
    :host {
      --footer-height: var(--dd-footer-height, 30px);
      --footer-img-height: var(--dd-footer-img-height, var(--dd-footer-height));
      --footer-align-v: var(--dd-footer-align-v, center);
      --footer-align-flex-v: var(--dd-footer-align-flex-v, center);
      --footer-padding-side: var(--dd-footer-padding-side, 0px);
      --footer-padding-bottom: var(--dd-footer-padding-bottom, 0px);
      --footer-padding-text: var(--dd-footer-padding-text, 0 2px 0 2px);
      --footer-font-size: var(--dd-footer-font-size, 14px);
      --footer-bottom: var(--dd-footer-bottom, var(--progress-height));
      --footer-color-bg: var(--dd-footer-color-bg);
    }

    .footer-link {
      z-index: 10;
    }

    .dd-footer {
      width: 100%;
      position: absolute;
      padding-bottom: var(--footer-bottom);
      bottom: 0;
      left: 0;
      display: grid;
      grid-template-areas: 'left center right';
      grid-template-columns: 1fr auto 1fr;
      align-items: var(--footer-align-v);
      height: var(--footer-height);
      justify-content: space-between;
      z-index: 10;
      font-size: var(--footer-font-size);
      background-color: var(--footer-color-bg);
      line-height: normal;
    }

    .dd-footer-item {
      display: flex;
    }

    .dd-footer-left {
      grid-area: left;
      padding-left: var(--footer-padding-side);
      padding-bottom: var(--footer-padding-bottom);
      text-align: left;
      align-items: center;
    }

    .dd-footer-center {
      grid-area: center;
      padding-bottom: var(--footer-padding-bottom);
      text-align: center;
    }

    .dd-footer-right {
      grid-area: right;
      padding-bottom: var(--footer-padding-bottom);
      padding-right: var(--footer-padding-side);
      text-align: right;
      justify-content: flex-end;
    }

    .footer-text {
      align-self: var(--footer-align-flex-v);
      padding: var(--footer-padding-text);
    }

    img.footer-img {
      height: var(--footer-img-height, var(--footer-height));
      display: block;
    }
  `,t([Y({type:String,attribute:"text-left"})],mt.prototype,"textLeft",void 0),t([Y({type:String,attribute:"img-left"})],mt.prototype,"imgLeft",void 0),t([Y({type:String,attribute:"img-left-link"})],mt.prototype,"imgLeftLink",void 0),t([Y({type:String,attribute:"text-center"})],mt.prototype,"textCenter",void 0),t([Y({type:String,attribute:"img-center"})],mt.prototype,"imgCenter",void 0),t([Y({type:String,attribute:"img-center-link"})],mt.prototype,"imgCenterLink",void 0),t([Y({type:String,attribute:"text-right"})],mt.prototype,"textRight",void 0),t([Y({type:String,attribute:"img-right"})],mt.prototype,"imgRight",void 0),t([Y({type:String,attribute:"img-right-link"})],mt.prototype,"imgRightLink",void 0),t([Y({type:String,attribute:"config-path"})],mt.prototype,"configPath",void 0),t([Y({type:String,attribute:"align-v"})],mt.prototype,"alignVertical",void 0),t([Y({type:String,attribute:"to-selector"})],mt.prototype,"toSelector",void 0),t([Y({type:String,attribute:"from-selector"})],mt.prototype,"fromSelector",void 0),window.customElements.define("dd-footer",mt);