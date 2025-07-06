(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,z=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol(),j=new WeakMap;let tt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==B)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(z&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=j.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&j.set(e,t))}return t}toString(){return this.cssText}};const ot=n=>new tt(typeof n=="string"?n:n+"",void 0,B),lt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new tt(e,n,B)},ht=(n,t)=>{if(z)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=O.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},W=z?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ot(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:at,defineProperty:ct,getOwnPropertyDescriptor:pt,getOwnPropertyNames:ut,getOwnPropertySymbols:dt,getPrototypeOf:$t}=Object,_=globalThis,q=_.trustedTypes,ft=q?q.emptyScript:"",M=_.reactiveElementPolyfillSupport,E=(n,t)=>n,V={toAttribute(n,t){switch(t){case Boolean:n=n?ft:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},et=(n,t)=>!at(n,t),K={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:et};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=K){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ct(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=pt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const a=i==null?void 0:i.call(this);r.call(this,o),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??K}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=$t(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,s=[...ut(e),...dt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(W(i))}else t!==void 0&&e.push(W(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ht(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var r;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:V).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var r;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:V;this._$Em=i,this[i]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??et)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[E("elementProperties")]=new Map,A[E("finalized")]=new Map,M==null||M({ReactiveElement:A}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=globalThis,H=S.trustedTypes,F=H?H.createPolicy("lit-html",{createHTML:n=>n}):void 0,st="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,it="?"+f,_t=`<${it}>`,y=document,P=()=>y.createComment(""),N=n=>n===null||typeof n!="object"&&typeof n!="function",D=Array.isArray,gt=n=>D(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",R=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,J=/>/g,g=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Z=/'/g,Q=/"/g,nt=/^(?:script|style|textarea|title)$/i,mt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),yt=mt(1),v=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),X=new WeakMap,m=y.createTreeWalker(y,129);function rt(n,t){if(!D(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return F!==void 0?F.createHTML(t):t}const At=(n,t)=>{const e=n.length-1,s=[];let i,r=t===2?"<svg>":t===3?"<math>":"",o=C;for(let a=0;a<e;a++){const l=n[a];let c,u,h=-1,d=0;for(;d<l.length&&(o.lastIndex=d,u=o.exec(l),u!==null);)d=o.lastIndex,o===C?u[1]==="!--"?o=G:u[1]!==void 0?o=J:u[2]!==void 0?(nt.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=g):u[3]!==void 0&&(o=g):o===g?u[0]===">"?(o=i??C,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?g:u[3]==='"'?Q:Z):o===Q||o===Z?o=g:o===G||o===J?o=C:(o=g,i=void 0);const $=o===g&&n[a+1].startsWith("/>")?" ":"";r+=o===C?l+_t:h>=0?(s.push(c),l.slice(0,h)+st+l.slice(h)+f+$):l+f+(h===-2?a:$)}return[rt(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class x{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const a=t.length-1,l=this.parts,[c,u]=At(t,e);if(this.el=x.createElement(c,s),m.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=m.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(st)){const d=u[o++],$=i.getAttribute(h).split(f),U=/([.?@])?(.*)/.exec(d);l.push({type:1,index:r,name:U[2],strings:$,ctor:U[1]==="."?bt:U[1]==="?"?Ct:U[1]==="@"?Et:T}),i.removeAttribute(h)}else h.startsWith(f)&&(l.push({type:6,index:r}),i.removeAttribute(h));if(nt.test(i.tagName)){const h=i.textContent.split(f),d=h.length-1;if(d>0){i.textContent=H?H.emptyScript:"";for(let $=0;$<d;$++)i.append(h[$],P()),m.nextNode(),l.push({type:2,index:++r});i.append(h[d],P())}}}else if(i.nodeType===8)if(i.data===it)l.push({type:2,index:r});else{let h=-1;for(;(h=i.data.indexOf(f,h+1))!==-1;)l.push({type:7,index:r}),h+=f.length-1}r++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function b(n,t,e=n,s){var o,a;if(t===v)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const r=N(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=b(n,i._$AS(n,t.values),i,s)),t}class vt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??y).importNode(e,!0);m.currentNode=i;let r=m.nextNode(),o=0,a=0,l=s[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new I(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new St(r,this,t)),this._$AV.push(c),l=s[++a]}o!==(l==null?void 0:l.index)&&(r=m.nextNode(),o++)}return m.currentNode=y,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class I{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),N(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==v&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):gt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=x.createElement(rt(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(e);else{const o=new vt(i,this),a=o.u(this.options);o.p(e),this.T(a),this._$AH=o}}_$AC(t){let e=X.get(t.strings);return e===void 0&&X.set(t.strings,e=new x(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new I(this.O(P()),this.O(P()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class T{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(r===void 0)t=b(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==v,o&&(this._$AH=t);else{const a=t;let l,c;for(t=r[0],l=0;l<r.length-1;l++)c=b(this,a[s+l],e,l),c===v&&(c=this._$AH[l]),o||(o=!N(c)||c!==this._$AH[l]),c===p?t=p:t!==p&&(t+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class bt extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Ct extends T{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Et extends T{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??p)===v)return;const s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class St{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const L=S.litHtmlPolyfillSupport;L==null||L(x,I),(S.litHtmlVersions??(S.litHtmlVersions=[])).push("3.2.1");const wt=(n,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new I(t.insertBefore(P(),r),r,void 0,e??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class w extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=wt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return v}}var Y;w._$litElement$=!0,w.finalized=!0,(Y=globalThis.litElementHydrateSupport)==null||Y.call(globalThis,{LitElement:w});const k=globalThis.litElementPolyfillSupport;k==null||k({LitElement:w});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");class Pt extends w{static get properties(){return{ppInput:Number,gpInput:Number,epInput:Number,spInput:Number,cpInput:Number,selectedValue:String,ppCalculated:Number,gpCalculated:Number,epCalculated:Number,spCalculated:Number,cpCalculated:Number}}constructor(){super(),this.ppInput=0,this.gpInput=0,this.epInput=0,this.spInput=0,this.cpInput=0,this.selectedValue="gold",this.ppCalculated=0,this.gpCalculated=0,this.epCalculated=0,this.spCalculated=0,this.cpCalculated=0}onInputChange(t){const e=t.target.id,s=Number(t.target.value);Number.isNaN(s)||(this[e]=s,this.calculateExchange())}handleChange(t){this.selectedValue=t.target.value,this.calculateExchange()}calculateExchange(){let t=this.ppInput*250+this.gpInput*50+this.epInput*25+this.spInput*5+this.cpInput;switch(this.ppCalculated=0,this.gpCalculated=0,this.epCalculated=0,this.spCalculated=0,this.cpCalculated=0,this.selectedValue){case"platinum":this.ppCalculated=Math.floor(t/250),t=t%250;case"gold":this.gpCalculated=Math.floor(t/50),t=t%50;case"electrum":this.epCalculated=Math.floor(t/25),t=t%25;case"silver":this.spCalculated=Math.floor(t/5),t=t%5;case"copper":this.cpCalculated=t}}render(){return yt`
    <form>
      <div>
        <label>Platinum pieces</label>
        <input id="ppInput" type="number" .value=${this.ppInput} @change=${this.onInputChange}></input>
      </div>
      <div>
        <label>Gold pieces</label>
        <input id="gpInput" type="number" .value=${this.gpInput} @change=${this.onInputChange}></input>
      </div>
      <div>
        <label>Electrum pieces</label>
        <input id="epInput" type="number" .value=${this.epInput} @change=${this.onInputChange}></input>
      </div>
      <div>
        <label>Silver pieces</label>
        <input id="spInput" type="number" .value=${this.spInput} @change=${this.onInputChange}></input>
      </div>
      <div>
        <label>Copper pieces</label>
        <input id="cpInput" type="number" .value=${this.cpInput} @change=${this.onInputChange}></input>
      </div>
      <div>
        <label>
          <input type="radio"
            name="options"
            value="platinum"
            @change="${this.handleChange}"
            ?checked="${this.selectedValue==="platinum"}">
          Platinum
        </label>
        <label>
          <input type="radio"
            name="options"
            value="gold"
            @change="${this.handleChange}"
            ?checked="${this.selectedValue==="gold"}">
          Gold
        </label>
        <label>
          <input type="radio"
            name="options"
            value="electrum"
            @change="${this.handleChange}"
            ?checked="${this.selectedValue==="electrum"}">
          Electrum
        </label>
        <label>
          <input type="radio"
            name="options"
            value="silver"
            @change="${this.handleChange}"
            ?checked="${this.selectedValue==="silver"}">
          Silver
        </label>
        <label>
          <input type="radio"
            name="options"
            value="copper"
            @change="${this.handleChange}"
            ?checked="${this.selectedValue==="copper"}">
          Copper
        </label>
      </div>
      <div>
        <table>
          <thead>
            <tr>
                <th>pp</th>
                <th>gp</th>
                <th>ep</th>
                <th>sp</th>
                <th>cp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>${this.ppCalculated}</td>
                <td>${this.gpCalculated}</td>
                <td>${this.epCalculated}</td>
                <td>${this.spCalculated}</td>
                <td>${this.cpCalculated}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
    `}static get styles(){return lt`
      
    `}}window.customElements.define("my-element",Pt);
