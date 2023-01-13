function t(t,e,i,s){var o,r=arguments.length,l=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(l=(r<3?o(l):r>3?o(e,i,l):o(e,i))||l);return r>3&&l&&Object.defineProperty(e,i,l),l
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class o{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=s.get(this.cssText);return e&&void 0===t&&(s.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const n=window.trustedTypes,a=n?n.emptyScript:"",d=window.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),c={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:p};class g extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=c){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=c){var s,o;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const l=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:h.toAttribute)(e,i.type);this._$Ei=t,null==l?this.removeAttribute(r):this.setAttribute(r,l),this._$Ei=null}}_$AK(t,e){var i,s,o;const r=this.constructor,l=r._$Eu.get(t);if(void 0!==l&&this._$Ei!==l){const t=r.getPropertyOptions(l),n=t.converter,a=null!==(o=null!==(s=null===(i=n)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof n?n:null)&&void 0!==o?o:h.fromAttribute;this._$Ei=l,this[l]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var u;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:g}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.3.2");const v=globalThis.trustedTypes,f=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,$="?"+m,y=`<${$}>`,b=document,_=(t="")=>b.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,x=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,C=/'/g,P=/"/g,U=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),M=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),H=new WeakMap,L=b.createTreeWalker(b,129,null,!1),N=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":"",l=w;for(let e=0;e<i;e++){const i=t[e];let n,a,d=-1,h=0;for(;h<i.length&&(l.lastIndex=h,a=l.exec(i),null!==a);)h=l.lastIndex,l===w?"!--"===a[1]?l=E:void 0!==a[1]?l=x:void 0!==a[2]?(U.test(a[2])&&(o=RegExp("</"+a[2],"g")),l=T):void 0!==a[3]&&(l=T):l===T?">"===a[0]?(l=null!=o?o:w,d=-1):void 0===a[1]?d=-2:(d=l.lastIndex-a[2].length,n=a[1],l=void 0===a[3]?T:'"'===a[3]?P:C):l===P||l===C?l=T:l===E||l===x?l=w:(l=T,o=void 0);const p=l===T&&t[e+1].startsWith("/>")?" ":"";r+=l===w?i+y:d>=0?(s.push(n),i.slice(0,d)+"$lit$"+i.slice(d)+m+p):i+m+(-2===d?(s.push(void 0),e):p)}const n=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(n):n,s]};class k{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const l=t.length-1,n=this.parts,[a,d]=N(t,e);if(this.el=k.createElement(a,i),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=L.nextNode())&&n.length<l;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const i=d[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(i);n.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?q:"@"===e[1]?J:j})}else n.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(U.test(s.tagName)){const t=s.textContent.split(m),e=t.length-1;if(e>0){s.textContent=v?v.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],_()),L.nextNode(),n.push({type:2,index:++o});s.append(t[e],_())}}}else if(8===s.nodeType)if(s.data===$)n.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(m,t+1));)n.push({type:7,index:o}),t+=m.length-1}o++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function O(t,e,i=t,s){var o,r,l,n;if(e===M)return e;let a=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const d=A(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==d&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===d?a=void 0:(a=new d(t),a._$AT(t,i,s)),void 0!==s?(null!==(l=(n=i)._$Cl)&&void 0!==l?l:n._$Cl=[])[s]=a:i._$Cu=a),void 0!==a&&(e=O(t,a._$AS(t,e.values),a,s)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:b).importNode(i,!0);L.currentNode=o;let r=L.nextNode(),l=0,n=0,a=s[0];for(;void 0!==a;){if(l===a.index){let e;2===a.type?e=new D(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new W(r,this,t)),this.v.push(e),a=s[++n]}l!==(null==a?void 0:a.index)&&(r=L.nextNode(),l++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{constructor(t,e,i,s){var o;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),A(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==M&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return S(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==z&&A(this._$AH)?this._$AA.nextSibling.data=t:this.k(b.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=k.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new B(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new k(t)),e}S(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new D(this.M(_()),this.M(_()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,i,s,o){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=O(this,t,e,0),r=!A(t)||t!==this._$AH&&t!==M,r&&(this._$AH=t);else{const s=t;let l,n;for(t=o[0],l=0;l<o.length-1;l++)n=O(this,s[i+l],e,l),n===M&&(n=this._$AH[l]),r||(r=!A(n)||n!==this._$AH[l]),n===z?t=z:t!==z&&(t+=(null!=n?n:"")+o[l+1]),this._$AH[l]=n}r&&!s&&this.C(t)}C(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends j{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===z?void 0:t}}const V=v?v.emptyScript:"";class q extends j{constructor(){super(...arguments),this.type=4}C(t){t&&t!==z?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class J extends j{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=O(this,t,e,0))&&void 0!==i?i:z)===M)return;const s=this._$AH,o=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==z&&(s===z||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const F=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,Z;null==F||F(k,D),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.2.6");class G extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,o;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let l=r._$litPart$;if(void 0===l){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=l=new D(e.insertBefore(_(),t),t,void 0,null!=i?i:{})}return l._$AI(t),l})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return M}}G.finalized=!0,G._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:G});const Q=globalThis.litElementPolyfillSupport;null==Q||Q({LitElement:G}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.2.0");
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
class it extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){if(super(t),this.it=z,t.type!==et)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===z||null==t)return this.ft=void 0,this.it=t;if(t===M)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}it.directiveName="unsafeHTML",it.resultType=1;const st=(t=>(...e)=>({_$litDirective$:t,values:e}))(it),ot="",rt="",lt="",nt="",at="",dt="",ht="",pt="dd-slide-collection",ct="",gt=!1,ut=!1,vt=!1,ft=!1,mt="100%",$t="",yt="",bt="",_t="",At="",St="";class wt extends G{constructor(){super(...arguments),this.imgSrc=lt,this.mainTitle=ot,this.subTitle=rt,this.author=nt,this.organisation=at,this.organisationUrl=dt,this.date=ht,this.noDefaultMap=gt,this.centerText=vt,this.centerImg=ft,this.center=ut,this.configPath=ct,this.fromSelector=pt,this.htmlTopLeft=$t,this.htmlTopRight=yt,this.htmlMidLeft=bt,this.htmlMidRight=_t,this.htmlBotLeft=At,this.htmlBotRight=St,this.widthLeft=mt}makeTitlePage(){return`\n        <div class='dd-titlepage'>\n\n          \x3c!-- logo --\x3e\n          <div id="dd-titlepage-logo">\n            <img src="${this.imgSrc}" alt="dd-logo";>\n          </div>\n\n          \x3c!-- top --\x3e\n          <div class="dd-titlepage-top-l dd-titlepage-top">\n              ${this.htmlTopLeft}\n          </div>\n          <div class="dd-titlepage-top-r dd-titlepage-top">\n              ${this.htmlTopRight}\n          </div>\n\n          \x3c!-- middle --\x3e\n          <div class="dd-titlepage-mid-l dd-titlepage-middle">\n            ${this.htmlMidLeft}\n          </div>\n          <div class="dd-titlepage-mid-r dd-titlepage-middle">\n            ${this.htmlMidRight}\n          </div>\n\n          \x3c!-- bottom --\x3e\n          <div class="dd-titlepage-bot-l dd-titlepage-bottom">\n            ${this.htmlBotLeft}\n          </div>\n          <div class="dd-titlepage-bot-r dd-titlepage-bottom">\n            ${this.htmlBotRight}\n          </div>\n        </div>\n      `}_mapDefault(){(this.mainTitle||this.subTitle)&&(this.htmlMidLeft=`\n        <div class="dd-titlepage-title dd-titlepage-mid-l default">\n          <strong>${this.mainTitle}</strong>\n        </div>\n        <div class="dd-titlepage-subtitle dd-titlepage-mid-l default">\n          ${this.subTitle}\n        </div>`),(this.author||this.organisation||this.date)&&!this.htmlBotLeft&&(this.organisationUrl?this.htmlBotLeft=`\n          <div class="dd-titlepage-bot-l default">\n          <strong>${this.author}</strong>  <br>\n          <a class="dd-titlepage-org-url" href="${this.organisationUrl}">${this.organisation}</a> <br>\n          ${this.date}\n        </div>`:this.htmlBotLeft=`\n          <div class="dd-titlepage-bot-l default">\n          <strong>${this.author}</strong>  <br>\n                  ${this.organisation}     <br>\n                  ${this.date}\n        </div>`)}async setPropsFromJson(){const t=await async function(t){if(await(async t=>404!==(await fetch(t,{method:"HEAD"})).status||(console.error(`JSON config does not exist at '${t}'`),!1))(t))try{const e=await fetch(t);return await e.json()}catch(e){console.error(`Error while reading config file at ${t} \n\n ${e}`)}return{error:"Could not parse JSON config, see console for errors"}}(this.configPath);t.error?this.htmlMidLeft=`<i><b>[ERROR]</b>${t.error} </i>`:(t.title&&(this.mainTitle=t.title),t.mainTitle&&(this.mainTitle=t.mainTitle),t.subTitle&&(this.subTitle=t.subTitle),t.author&&(this.author=t.author),t.organisation&&(this.organisation=t.organisation),t.date&&(this.date=t.date),t.imgSrc&&(this.imgSrc=t.imgSrc))}injectFromSelector(){const t=document.querySelector(this.fromSelector);t&&(t.getAttribute("main-title")&&null==this.getAttribute("main-title")&&(this.mainTitle=t.getAttribute("main-title")),t.getAttribute("sub-title")&&null==this.getAttribute("sub-title")&&(this.subTitle=t.getAttribute("sub-title")),t.getAttribute("author")&&null==this.getAttribute("author")&&(this.author=t.getAttribute("author")),t.getAttribute("date")&&null==this.getAttribute("date")&&(this.date=t.getAttribute("date")),t.getAttribute("organisation")&&null==this.getAttribute("organisation")&&(this.organisation=t.getAttribute("organisation")),t.getAttribute("organisation-url")&&null==this.getAttribute("organisation-url")&&(this.organisationUrl=t.getAttribute("organisation-url")),t.getAttribute("img-src")&&null==this.getAttribute("img-src")&&(this.imgSrc=t.getAttribute("img-src")))}async firstUpdated(){if(!this.imgSrc){this.shadowRoot.querySelector("#dd-titlepage-logo").style.display="none"}(this.centerText||this.center)&&(this.style.setProperty("--titlepage-align-lsec","center"),this.style.setProperty("--titlepage-padding-left","0px"),this.style.setProperty("--titlepage-padding-right","0px"),this.style.setProperty("--titlepage-w-left","100%")),this.widthLeft!==mt&&this.style.setProperty("--titlepage-w-left",this.widthLeft),(this.centerImg||this.center)&&window.addEventListener("load",(()=>{const t=this.shadowRoot.querySelector("#dd-titlepage-logo img").clientWidth;this.style.setProperty("--titlepage-logo-left",`calc( 50% - ${t/2}px )`)}))}render(){let t="";return this.configPath&&this.setPropsFromJson(),this.classList.add("slide"),this.classList.add("titlepage"),this.fromSelector&&this.injectFromSelector(),this.noDefaultMap||this._mapDefault(),t+=this.makeTitlePage(),R`${st(t)}`}}wt.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,i)})`
    :host {
      /* slide placeholders */
      --slide-ratio: var(--dd-slide-ratio, calc(16 / 9));
      --slide-width: var(--dd-slide-width, 1024px);
      --slide-height: var(
        --dd-slide-height,
        calc(var(--slide-width) / var(--slide-ratio))
      );
      --titlepage-font-size: var(--dd-titlepage-font-size, 24px);
      --titlepage-font: var(--dd-font, 24px/2 'Roboto', sans-serif);

      /* titlepage */
      --titlepage-padding-side: var(--dd-titlepage-padding-side, 50px);
      --titlepage-padding-left: var(--titlepage-padding-side);
      --titlepage-padding-right: var(--titlepage-padding-side);
      --titlepage-padding-top-top: var(--dd-titlepage-padding-top-top, 10px);
      --titlepage-padding-mid-top: var(--dd-titlepage-padding-mid-top, 100px);
      --titlepage-padding-bot-top: var(--dd-titlepage-padding-bot-top, 10px);
      --titlepage-padding-sectop: var(--titlepage-padding-top-top)
        var(--titlepage-padding-right) 0 var(--titlepage-padding-left);
      --titlepage-padding-secmid: var(--titlepage-padding-mid-top)
        var(--titlepage-padding-right) 0 var(--titlepage-padding-left);
      --titlepage-padding-secbot: var(--titlepage-padding-bot-top)
        var(--titlepage-padding-right) 0 var(--titlepage-padding-left);

      /* dd color pallette */
      --dd-titlepage-color-fg-top: var(--dd-color-text);
      --dd-titlepage-color-bg-top: var(--dd-color-sec);
      --dd-titlepage-color-fg-mid: var(--dd-color-text-light);
      --dd-titlepage-color-bg-mid: var(--dd-color-prim);
      --dd-titlepage-color-fg-bot: var(--dd-color-text);
      --dd-titlepage-color-bg-bot: var(--dd-color-sec);

      --dd-titlepage-color-link: inherit;

      --titlepage-align-lsec: var(--dd-titlepage-align-lsec, left);
      --titlepage-align-rsec: var(--dd-titlepage-align-rsec, right);

      --titlepage-w-left: var(--dd-titlepage-w-left, 100%);
      --titlepage-h-top: var(
        --dd-titlepage-h-top,
        calc(0.15 * var(--slide-height))
      );
      --titlepage-h-middle: var(
        --dd-titlepage-h-middle,
        calc(
          var(--slide-height) - var(--titlepage-h-top) -
            var(--titlepage-h-bottom)
        )
      );
      --titlepage-h-bottom: var(
        --dd-titlepage-h-bottom,
        calc(0.2 * var(--slide-height))
      );

      --titlepage-title-font-size: var(
        --dd-titlepage-title-font-size,
        calc(2.15 * var(--titlepage-font-size))
      );
      --titlepage-subtitle-font-size: var(
        --dd-titlepage-subtitle-font-size,
        calc(0.6 * var(--titlepage-title-font-size))
      );

      --titlepage-logo-height: var(
        --dd-titlepage-logo-height,
        calc(var(--titlepage-h-top) / 1.3)
      );
      --titlepage-logo-top: var(
        --dd-titlepage-logo-top,
        calc(var(--titlepage-h-top) - var(--titlepage-logo-height) / 2)
      );
      --titlepage-logo-left: var(
        --dd-titlepage-logo-left,
        var(--titlepage-padding-side)
      );

      font: var(--titlepage-font);
      font-size: var(--titlepage-font-size);

      display: block;
    }

    :host(.slide) {
      position: relative;
      z-index: 0;
      overflow: hidden;
      box-sizing: border-box;
      width: var(--slide-width);
      height: var(--slide-height);
      background-color: white;
      max-width: 100%;
    }

    .dd-titlepage {
      min-height: 100%;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0;
      display: grid;
      grid-template-areas:
        'top-l top-r'
        'mid-l mid-r'
        'bot-l bot-r';
      grid-template-columns: var(--titlepage-w-left) 1fr;
      grid-template-rows: var(--titlepage-h-top) auto var(--titlepage-h-bottom);
      align-items: top;
      justify-content: space-between;
      /* make sure slide number is not shown */
      z-index: 5;
    }

    #dd-titlepage-logo {
      position: absolute;
      top: var(--titlepage-logo-top);
      left: var(--titlepage-logo-left);
    }

    #dd-titlepage-logo img {
      height: var(--titlepage-logo-height);
      width: auto;
    }

    .dd-titlepage-top-l {
      grid-area: top-l;
      text-align: var(--titlepage-align-lsec);
    }
    .dd-titlepage-top-r {
      grid-area: top-r;
      text-align: var(--titlepage-align-rsec);
    }

    .dd-titlepage-mid-l {
      text-align: var(--titlepage-align-lsec);
      grid-area: mid-l;
    }
    .dd-titlepage-mid-r {
      grid-area: mid-r;
      text-align: var(--titlepage-align-rsec);
    }

    .dd-titlepage-bot-l {
      grid-area: bot-l;
      text-align: var(--titlepage-align-lsec);
    }
    .dd-titlepage-bot-r {
      grid-area: bot-r;
      text-align: var(--titlepage-align-rsec);
    }

    .dd-titlepage-top {
      top: 0;
      background-color: var(--dd-titlepage-color-bg-top);
      color: var(--dd-titlepage-color-fg-top);
      padding: var(--titlepage-padding-sectop);
    }

    .dd-titlepage-middle {
      max-height: var(--titlepage-h-middle);
      background-color: var(--dd-titlepage-color-bg-mid);
      color: var(--dd-titlepage-color-fg-mid);
      padding: var(--titlepage-padding-secmid);
    }

    .dd-titlepage-bottom {
      padding: var(--titlepage-padding-secbot);
      background-color: var(--dd-titlepage-color-bg-bot);
      color: var(--dd-titlepage-color-fg-bot);
    }
    .dd-titlepage-bottom .default {
      font-size: calc(0.45 * var(--titlepage-title-font-size));
      line-height: 1.3em;
    }

    .dd-titlepage-title {
      font-size: var(--titlepage-title-font-size);
      line-height: 1.3em;
    }

    .dd-titlepage-subtitle {
      padding-top: 0.8em;
      font-size: var(--titlepage-subtitle-font-size);
      line-height: 1.3em;
    }

    .dd-titlepage-org-url {
      text-decoration: none;
      /*color: var(--dd-titlepage-color-text)*/
    }

    a {
      color: var(--dd-titlepage-color-link);
    }

    @media (max-width: 1168px) {
      :host {
        --titlepage-title-font-size: calc(1.8 * var(--titlepage-font-size));
        --slide-width: 1000px;
      }
    }
    @media (max-width: 700px) {
      :host {
        --titlepage-title-font-size: calc(1.2 * var(--titlepage-font-size));
        --slide-width: 600px;
      }
    }
  `,t([Y({type:String,attribute:"img-src"})],wt.prototype,"imgSrc",void 0),t([Y({type:String,attribute:"main-title"})],wt.prototype,"mainTitle",void 0),t([Y({type:String,attribute:"sub-title"})],wt.prototype,"subTitle",void 0),t([Y({type:String,attribute:"author"})],wt.prototype,"author",void 0),t([Y({type:String,attribute:"organisation"})],wt.prototype,"organisation",void 0),t([Y({type:String,attribute:"organisation-url"})],wt.prototype,"organisationUrl",void 0),t([Y({type:String,attribute:"date"})],wt.prototype,"date",void 0),t([Y({type:Boolean,attribute:"no-default-map"})],wt.prototype,"noDefaultMap",void 0),t([Y({type:Boolean,attribute:"center-text"})],wt.prototype,"centerText",void 0),t([Y({type:Boolean,attribute:"center-img"})],wt.prototype,"centerImg",void 0),t([Y({type:Boolean,attribute:"center"})],wt.prototype,"center",void 0),t([Y({type:String,attribute:"config-path"})],wt.prototype,"configPath",void 0),t([Y({type:String,attribute:"from-selector"})],wt.prototype,"fromSelector",void 0),t([Y({type:String,attribute:"html-top-left"})],wt.prototype,"htmlTopLeft",void 0),t([Y({type:String,attribute:"html-top-right"})],wt.prototype,"htmlTopRight",void 0),t([Y({type:String,attribute:"html-mid-left"})],wt.prototype,"htmlMidLeft",void 0),t([Y({type:String,attribute:"html-mid-right"})],wt.prototype,"htmlMidRight",void 0),t([Y({type:String,attribute:"html-bot-left"})],wt.prototype,"htmlBotLeft",void 0),t([Y({type:String,attribute:"html-bot-right"})],wt.prototype,"htmlBotRight",void 0),t([Y({type:String,attribute:"width-left"})],wt.prototype,"widthLeft",void 0),window.customElements.define("dd-titlepage",wt);
