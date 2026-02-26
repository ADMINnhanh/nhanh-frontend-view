import{d as oe,l as a,D as ln,j as g,J as l,k as B,H as L,I as S,p as w,A as fe,f as sn,g as $,aN as un,be as Q,S as cn,R as dn,aM as fn,C as ce,m as hn,L as _e,c2 as vn,d4 as pn,n as gn,y as me,aR as bn,b$ as mn,z as xe,q as xn,bp as wn,aS as we,E as yn,al as Cn,U as de,cF as zn,N as Sn,aZ as ye,G as Ce,aW as ze,b2 as y,aX as Se}from"./index-DmOXPNyi.js";import{a as Ae,N as An}from"./Suffix-uuGspmDq.js";import{u as Rn}from"./use-locale-zxqFhNlJ.js";const _n=oe({name:"Eye",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),a("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Fn=oe({name:"EyeOff",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),a("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),a("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),a("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),a("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Fe=ln("n-input"),Bn=g("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[l("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),l("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),l("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[S("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),S("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),S("&:-webkit-autofill ~",[l("placeholder","display: none;")])]),B("round",[L("textarea","border-radius: calc(var(--n-height) / 2);")]),l("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[S("span",`
 width: 100%;
 display: inline-block;
 `)]),B("textarea",[l("placeholder","overflow: visible;")]),L("autosize","width: 100%;"),B("autosize",[l("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),g("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),l("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),l("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[S("&[type=password]::-ms-reveal","display: none;"),S("+",[l("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),L("textarea",[l("placeholder","white-space: nowrap;")]),l("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),B("textarea","width: 100%;",[g("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),B("resizable",[g("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),l("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),l("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),B("pair",[l("input-el, placeholder","text-align: center;"),l("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[g("icon",`
 color: var(--n-icon-color);
 `),g("base-icon",`
 color: var(--n-icon-color);
 `)])]),B("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[l("border","border: var(--n-border-disabled);"),l("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),l("placeholder","color: var(--n-placeholder-color-disabled);"),l("separator","color: var(--n-text-color-disabled);",[g("icon",`
 color: var(--n-icon-color-disabled);
 `),g("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),g("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),l("suffix, prefix","color: var(--n-text-color-disabled);",[g("icon",`
 color: var(--n-icon-color-disabled);
 `),g("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),L("disabled",[l("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[S("&:hover",`
 color: var(--n-icon-color-hover);
 `),S("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),S("&:hover",[l("state-border","border: var(--n-border-hover);")]),B("focus","background-color: var(--n-color-focus);",[l("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),l("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),l("state-border",`
 border-color: #0000;
 z-index: 1;
 `),l("prefix","margin-right: 4px;"),l("suffix",`
 margin-left: 4px;
 `),l("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[g("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),g("base-clear",`
 font-size: var(--n-icon-size);
 `,[l("placeholder",[g("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),S(">",[g("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),g("base-icon",`
 font-size: var(--n-icon-size);
 `)]),g("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(n=>B(`${n}-status`,[L("disabled",[g("base-loading",`
 color: var(--n-loading-color-${n})
 `),l("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${n});
 `),l("state-border",`
 border: var(--n-border-${n});
 `),S("&:hover",[l("state-border",`
 border: var(--n-border-hover-${n});
 `)]),S("&:focus",`
 background-color: var(--n-color-focus-${n});
 `,[l("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)]),B("focus",`
 background-color: var(--n-color-focus-${n});
 `,[l("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)])])]))]),En=g("input",[B("disabled",[l("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);function $n(n){let b=0;for(const A of n)b++;return b}function ee(n){return n===""||n==null}function Pn(n){const b=w(null);function A(){const{value:m}=n;if(!(m!=null&&m.focus)){R();return}const{selectionStart:c,selectionEnd:r,value:p}=m;if(c==null||r==null){R();return}b.value={start:c,end:r,beforeText:p.slice(0,c),afterText:p.slice(r)}}function E(){var m;const{value:c}=b,{value:r}=n;if(!c||!r)return;const{value:p}=r,{start:T,beforeText:f,afterText:C}=c;let z=p.length;if(p.endsWith(C))z=p.length-C.length;else if(p.startsWith(f))z=f.length;else{const v=f[T-1],i=p.indexOf(v,T-1);i!==-1&&(z=i+1)}(m=r.setSelectionRange)===null||m===void 0||m.call(r,z,z)}function R(){b.value=null}return fe(n,R),{recordCursor:A,restoreCursor:E}}const Re=oe({name:"InputWordCount",setup(n,{slots:b}){const{mergedValueRef:A,maxlengthRef:E,mergedClsPrefixRef:R,countGraphemesRef:m}=sn(Fe),c=$(()=>{const{value:r}=A;return r===null||Array.isArray(r)?0:(m.value||$n)(r)});return()=>{const{value:r}=E,{value:p}=A;return a("span",{class:`${R.value}-input-word-count`},un(b.default,{value:p===null||Array.isArray(p)?"":p},()=>[r===void 0?c.value:`${c.value} / ${r}`]))}}}),Tn=Object.assign(Object.assign({},_e.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),Vn=oe({name:"Input",props:Tn,slots:Object,setup(n){const{mergedClsPrefixRef:b,mergedBorderedRef:A,inlineThemeDisabled:E,mergedRtlRef:R}=hn(n),m=_e("Input","-input",Bn,vn,n,b);pn&&gn("-input-safari",En,b);const c=w(null),r=w(null),p=w(null),T=w(null),f=w(null),C=w(null),z=w(null),v=Pn(z),i=w(null),{localeRef:d}=Rn("Input"),x=w(n.defaultValue),_=me(n,"value"),F=bn(_,x),O=mn(n),{mergedSizeRef:ne,mergedDisabledRef:V,mergedStatusRef:Be}=O,W=w(!1),N=w(!1),P=w(!1),H=w(!1);let re=null;const te=$(()=>{const{placeholder:e,pair:o}=n;return o?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[d.value.placeholder]:[e]}),Ee=$(()=>{const{value:e}=P,{value:o}=F,{value:t}=te;return!e&&(ee(o)||Array.isArray(o)&&ee(o[0]))&&t[0]}),$e=$(()=>{const{value:e}=P,{value:o}=F,{value:t}=te;return!e&&t[1]&&(ee(o)||Array.isArray(o)&&ee(o[1]))}),ae=xe(()=>n.internalForceFocus||W.value),Pe=xe(()=>{if(V.value||n.readonly||!n.clearable||!ae.value&&!N.value)return!1;const{value:e}=F,{value:o}=ae;return n.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(N.value||o):!!e&&(N.value||o)}),ie=$(()=>{const{showPasswordOn:e}=n;if(e)return e;if(n.showPasswordToggle)return"click"}),K=w(!1),Te=$(()=>{const{textDecoration:e}=n;return e?Array.isArray(e)?e.map(o=>({textDecoration:o})):[{textDecoration:e}]:["",""]}),he=w(void 0),Ie=()=>{var e,o;if(n.type==="textarea"){const{autosize:t}=n;if(t&&(he.value=(o=(e=i.value)===null||e===void 0?void 0:e.$el)===null||o===void 0?void 0:o.offsetWidth),!r.value||typeof t=="boolean")return;const{paddingTop:u,paddingBottom:h,lineHeight:s}=window.getComputedStyle(r.value),I=Number(u.slice(0,-2)),k=Number(h.slice(0,-2)),M=Number(s.slice(0,-2)),{value:j}=p;if(!j)return;if(t.minRows){const U=Math.max(t.minRows,1),ue=`${I+k+M*U}px`;j.style.minHeight=ue}if(t.maxRows){const U=`${I+k+M*t.maxRows}px`;j.style.maxHeight=U}}},ke=$(()=>{const{maxlength:e}=n;return e===void 0?void 0:Number(e)});xn(()=>{const{value:e}=F;Array.isArray(e)||se(e)});const Me=wn().proxy;function G(e,o){const{onUpdateValue:t,"onUpdate:value":u,onInput:h}=n,{nTriggerFormInput:s}=O;t&&y(t,e,o),u&&y(u,e,o),h&&y(h,e,o),x.value=e,s()}function X(e,o){const{onChange:t}=n,{nTriggerFormChange:u}=O;t&&y(t,e,o),x.value=e,u()}function Ve(e){const{onBlur:o}=n,{nTriggerFormBlur:t}=O;o&&y(o,e),t()}function We(e){const{onFocus:o}=n,{nTriggerFormFocus:t}=O;o&&y(o,e),t()}function De(e){const{onClear:o}=n;o&&y(o,e)}function Oe(e){const{onInputBlur:o}=n;o&&y(o,e)}function Ne(e){const{onInputFocus:o}=n;o&&y(o,e)}function He(){const{onDeactivate:e}=n;e&&y(e)}function Ke(){const{onActivate:e}=n;e&&y(e)}function je(e){const{onClick:o}=n;o&&y(o,e)}function Ue(e){const{onWrapperFocus:o}=n;o&&y(o,e)}function Le(e){const{onWrapperBlur:o}=n;o&&y(o,e)}function Ge(){P.value=!0}function Xe(e){P.value=!1,e.target===C.value?Y(e,1):Y(e,0)}function Y(e,o=0,t="input"){const u=e.target.value;if(se(u),e instanceof InputEvent&&!e.isComposing&&(P.value=!1),n.type==="textarea"){const{value:s}=i;s&&s.syncUnifiedContainer()}if(re=u,P.value)return;v.recordCursor();const h=Ye(u);if(h)if(!n.pair)t==="input"?G(u,{source:o}):X(u,{source:o});else{let{value:s}=F;Array.isArray(s)?s=[s[0],s[1]]:s=["",""],s[o]=u,t==="input"?G(s,{source:o}):X(s,{source:o})}Me.$forceUpdate(),h||Ce(v.restoreCursor)}function Ye(e){const{countGraphemes:o,maxlength:t,minlength:u}=n;if(o){let s;if(t!==void 0&&(s===void 0&&(s=o(e)),s>Number(t))||u!==void 0&&(s===void 0&&(s=o(e)),s<Number(t)))return!1}const{allowInput:h}=n;return typeof h=="function"?h(e):!0}function qe(e){Oe(e),e.relatedTarget===c.value&&He(),e.relatedTarget!==null&&(e.relatedTarget===f.value||e.relatedTarget===C.value||e.relatedTarget===r.value)||(H.value=!1),q(e,"blur"),z.value=null}function Je(e,o){Ne(e),W.value=!0,H.value=!0,Ke(),q(e,"focus"),o===0?z.value=f.value:o===1?z.value=C.value:o===2&&(z.value=r.value)}function Ze(e){n.passivelyActivated&&(Le(e),q(e,"blur"))}function Qe(e){n.passivelyActivated&&(W.value=!0,Ue(e),q(e,"focus"))}function q(e,o){e.relatedTarget!==null&&(e.relatedTarget===f.value||e.relatedTarget===C.value||e.relatedTarget===r.value||e.relatedTarget===c.value)||(o==="focus"?(We(e),W.value=!0):o==="blur"&&(Ve(e),W.value=!1))}function eo(e,o){Y(e,o,"change")}function oo(e){je(e)}function no(e){De(e),ve()}function ve(){n.pair?(G(["",""],{source:"clear"}),X(["",""],{source:"clear"})):(G("",{source:"clear"}),X("",{source:"clear"}))}function ro(e){const{onMousedown:o}=n;o&&o(e);const{tagName:t}=e.target;if(t!=="INPUT"&&t!=="TEXTAREA"){if(n.resizable){const{value:u}=c;if(u){const{left:h,top:s,width:I,height:k}=u.getBoundingClientRect(),M=14;if(h+I-M<e.clientX&&e.clientX<h+I&&s+k-M<e.clientY&&e.clientY<s+k)return}}e.preventDefault(),W.value||pe()}}function to(){var e;N.value=!0,n.type==="textarea"&&((e=i.value)===null||e===void 0||e.handleMouseEnterWrapper())}function ao(){var e;N.value=!1,n.type==="textarea"&&((e=i.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function io(){V.value||ie.value==="click"&&(K.value=!K.value)}function lo(e){if(V.value)return;e.preventDefault();const o=u=>{u.preventDefault(),Se("mouseup",document,o)};if(ze("mouseup",document,o),ie.value!=="mousedown")return;K.value=!0;const t=()=>{K.value=!1,Se("mouseup",document,t)};ze("mouseup",document,t)}function so(e){n.onKeyup&&y(n.onKeyup,e)}function uo(e){switch(n.onKeydown&&y(n.onKeydown,e),e.key){case"Escape":le();break;case"Enter":co(e);break}}function co(e){var o,t;if(n.passivelyActivated){const{value:u}=H;if(u){n.internalDeactivateOnEnter&&le();return}e.preventDefault(),n.type==="textarea"?(o=r.value)===null||o===void 0||o.focus():(t=f.value)===null||t===void 0||t.focus()}}function le(){n.passivelyActivated&&(H.value=!1,Ce(()=>{var e;(e=c.value)===null||e===void 0||e.focus()}))}function pe(){var e,o,t;V.value||(n.passivelyActivated?(e=c.value)===null||e===void 0||e.focus():((o=r.value)===null||o===void 0||o.focus(),(t=f.value)===null||t===void 0||t.focus()))}function fo(){var e;!((e=c.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function ho(){var e,o;(e=r.value)===null||e===void 0||e.select(),(o=f.value)===null||o===void 0||o.select()}function vo(){V.value||(r.value?r.value.focus():f.value&&f.value.focus())}function po(){const{value:e}=c;e!=null&&e.contains(document.activeElement)&&e!==document.activeElement&&le()}function go(e){if(n.type==="textarea"){const{value:o}=r;o==null||o.scrollTo(e)}else{const{value:o}=f;o==null||o.scrollTo(e)}}function se(e){const{type:o,pair:t,autosize:u}=n;if(!t&&u)if(o==="textarea"){const{value:h}=p;h&&(h.textContent=`${e??""}\r
`)}else{const{value:h}=T;h&&(e?h.textContent=e:h.innerHTML="&nbsp;")}}function bo(){Ie()}const ge=w({top:"0"});function mo(e){var o;const{scrollTop:t}=e.target;ge.value.top=`${-t}px`,(o=i.value)===null||o===void 0||o.syncUnifiedContainer()}let J=null;we(()=>{const{autosize:e,type:o}=n;e&&o==="textarea"?J=fe(F,t=>{!Array.isArray(t)&&t!==re&&se(t)}):J==null||J()});let Z=null;we(()=>{n.type==="textarea"?Z=fe(F,e=>{var o;!Array.isArray(e)&&e!==re&&((o=i.value)===null||o===void 0||o.syncUnifiedContainer())}):Z==null||Z()}),yn(Fe,{mergedValueRef:F,maxlengthRef:ke,mergedClsPrefixRef:b,countGraphemesRef:me(n,"countGraphemes")});const xo={wrapperElRef:c,inputElRef:f,textareaElRef:r,isCompositing:P,clear:ve,focus:pe,blur:fo,select:ho,deactivate:po,activate:vo,scrollTo:go},wo=Cn("Input",R,b),be=$(()=>{const{value:e}=ne,{common:{cubicBezierEaseInOut:o},self:{color:t,borderRadius:u,textColor:h,caretColor:s,caretColorError:I,caretColorWarning:k,textDecorationColor:M,border:j,borderDisabled:U,borderHover:ue,borderFocus:yo,placeholderColor:Co,placeholderColorDisabled:zo,lineHeightTextarea:So,colorDisabled:Ao,colorFocus:Ro,textColorDisabled:_o,boxShadowFocus:Fo,iconSize:Bo,colorFocusWarning:Eo,boxShadowFocusWarning:$o,borderWarning:Po,borderFocusWarning:To,borderHoverWarning:Io,colorFocusError:ko,boxShadowFocusError:Mo,borderError:Vo,borderFocusError:Wo,borderHoverError:Do,clearSize:Oo,clearColor:No,clearColorHover:Ho,clearColorPressed:Ko,iconColor:jo,iconColorDisabled:Uo,suffixTextColor:Lo,countTextColor:Go,countTextColorDisabled:Xo,iconColorHover:Yo,iconColorPressed:qo,loadingColor:Jo,loadingColorError:Zo,loadingColorWarning:Qo,fontWeight:en,[de("padding",e)]:on,[de("fontSize",e)]:nn,[de("height",e)]:rn}}=m.value,{left:tn,right:an}=zn(on);return{"--n-bezier":o,"--n-count-text-color":Go,"--n-count-text-color-disabled":Xo,"--n-color":t,"--n-font-size":nn,"--n-font-weight":en,"--n-border-radius":u,"--n-height":rn,"--n-padding-left":tn,"--n-padding-right":an,"--n-text-color":h,"--n-caret-color":s,"--n-text-decoration-color":M,"--n-border":j,"--n-border-disabled":U,"--n-border-hover":ue,"--n-border-focus":yo,"--n-placeholder-color":Co,"--n-placeholder-color-disabled":zo,"--n-icon-size":Bo,"--n-line-height-textarea":So,"--n-color-disabled":Ao,"--n-color-focus":Ro,"--n-text-color-disabled":_o,"--n-box-shadow-focus":Fo,"--n-loading-color":Jo,"--n-caret-color-warning":k,"--n-color-focus-warning":Eo,"--n-box-shadow-focus-warning":$o,"--n-border-warning":Po,"--n-border-focus-warning":To,"--n-border-hover-warning":Io,"--n-loading-color-warning":Qo,"--n-caret-color-error":I,"--n-color-focus-error":ko,"--n-box-shadow-focus-error":Mo,"--n-border-error":Vo,"--n-border-focus-error":Wo,"--n-border-hover-error":Do,"--n-loading-color-error":Zo,"--n-clear-color":No,"--n-clear-size":Oo,"--n-clear-color-hover":Ho,"--n-clear-color-pressed":Ko,"--n-icon-color":jo,"--n-icon-color-hover":Yo,"--n-icon-color-pressed":qo,"--n-icon-color-disabled":Uo,"--n-suffix-text-color":Lo}}),D=E?Sn("input",$(()=>{const{value:e}=ne;return e[0]}),be,n):void 0;return Object.assign(Object.assign({},xo),{wrapperElRef:c,inputElRef:f,inputMirrorElRef:T,inputEl2Ref:C,textareaElRef:r,textareaMirrorElRef:p,textareaScrollbarInstRef:i,rtlEnabled:wo,uncontrolledValue:x,mergedValue:F,passwordVisible:K,mergedPlaceholder:te,showPlaceholder1:Ee,showPlaceholder2:$e,mergedFocus:ae,isComposing:P,activated:H,showClearButton:Pe,mergedSize:ne,mergedDisabled:V,textDecorationStyle:Te,mergedClsPrefix:b,mergedBordered:A,mergedShowPasswordOn:ie,placeholderStyle:ge,mergedStatus:Be,textAreaScrollContainerWidth:he,handleTextAreaScroll:mo,handleCompositionStart:Ge,handleCompositionEnd:Xe,handleInput:Y,handleInputBlur:qe,handleInputFocus:Je,handleWrapperBlur:Ze,handleWrapperFocus:Qe,handleMouseEnter:to,handleMouseLeave:ao,handleMouseDown:ro,handleChange:eo,handleClick:oo,handleClear:no,handlePasswordToggleClick:io,handlePasswordToggleMousedown:lo,handleWrapperKeydown:uo,handleWrapperKeyup:so,handleTextAreaMirrorResize:bo,getTextareaScrollContainer:()=>r.value,mergedTheme:m,cssVars:E?void 0:be,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender})},render(){var n,b,A,E,R,m,c;const{mergedClsPrefix:r,mergedStatus:p,themeClass:T,type:f,countGraphemes:C,onRender:z}=this,v=this.$slots;return z==null||z(),a("div",{ref:"wrapperElRef",class:[`${r}-input`,T,p&&`${r}-input--${p}-status`,{[`${r}-input--rtl`]:this.rtlEnabled,[`${r}-input--disabled`]:this.mergedDisabled,[`${r}-input--textarea`]:f==="textarea",[`${r}-input--resizable`]:this.resizable&&!this.autosize,[`${r}-input--autosize`]:this.autosize,[`${r}-input--round`]:this.round&&f!=="textarea",[`${r}-input--pair`]:this.pair,[`${r}-input--focus`]:this.mergedFocus,[`${r}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},a("div",{class:`${r}-input-wrapper`},Q(v.prefix,i=>i&&a("div",{class:`${r}-input__prefix`},i)),f==="textarea"?a(cn,{ref:"textareaScrollbarInstRef",class:`${r}-input__textarea`,container:this.getTextareaScrollContainer,theme:(b=(n=this.theme)===null||n===void 0?void 0:n.peers)===null||b===void 0?void 0:b.Scrollbar,themeOverrides:(E=(A=this.themeOverrides)===null||A===void 0?void 0:A.peers)===null||E===void 0?void 0:E.Scrollbar,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var i,d;const{textAreaScrollContainerWidth:x}=this,_={width:this.autosize&&x&&`${x}px`};return a(dn,null,a("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${r}-input__textarea-el`,(i=this.inputProps)===null||i===void 0?void 0:i.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:C?void 0:this.maxlength,minlength:C?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(d=this.inputProps)===null||d===void 0?void 0:d.style,_],onBlur:this.handleInputBlur,onFocus:F=>{this.handleInputFocus(F,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?a("div",{class:`${r}-input__placeholder`,style:[this.placeholderStyle,_],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?a(fn,{onResize:this.handleTextAreaMirrorResize},{default:()=>a("div",{ref:"textareaMirrorElRef",class:`${r}-input__textarea-mirror`,key:"mirror"})}):null)}}):a("div",{class:`${r}-input__input`},a("input",Object.assign({type:f==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":f},this.inputProps,{ref:"inputElRef",class:[`${r}-input__input-el`,(R=this.inputProps)===null||R===void 0?void 0:R.class],style:[this.textDecorationStyle[0],(m=this.inputProps)===null||m===void 0?void 0:m.style],tabindex:this.passivelyActivated&&!this.activated?-1:(c=this.inputProps)===null||c===void 0?void 0:c.tabindex,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:C?void 0:this.maxlength,minlength:C?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:i=>{this.handleInputFocus(i,0)},onInput:i=>{this.handleInput(i,0)},onChange:i=>{this.handleChange(i,0)}})),this.showPlaceholder1?a("div",{class:`${r}-input__placeholder`},a("span",null,this.mergedPlaceholder[0])):null,this.autosize?a("div",{class:`${r}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&Q(v.suffix,i=>i||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?a("div",{class:`${r}-input__suffix`},[Q(v["clear-icon-placeholder"],d=>(this.clearable||d)&&a(Ae,{clsPrefix:r,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>d,icon:()=>{var x,_;return(_=(x=this.$slots)["clear-icon"])===null||_===void 0?void 0:_.call(x)}})),this.internalLoadingBeforeSuffix?null:i,this.loading!==void 0?a(An,{clsPrefix:r,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?i:null,this.showCount&&this.type!=="textarea"?a(Re,null,{default:d=>{var x;const{renderCount:_}=this;return _?_(d):(x=v.count)===null||x===void 0?void 0:x.call(v,d)}}):null,this.mergedShowPasswordOn&&this.type==="password"?a("div",{class:`${r}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?ce(v["password-visible-icon"],()=>[a(ye,{clsPrefix:r},{default:()=>a(_n,null)})]):ce(v["password-invisible-icon"],()=>[a(ye,{clsPrefix:r},{default:()=>a(Fn,null)})])):null]):null)),this.pair?a("span",{class:`${r}-input__separator`},ce(v.separator,()=>[this.separator])):null,this.pair?a("div",{class:`${r}-input-wrapper`},a("div",{class:`${r}-input__input`},a("input",{ref:"inputEl2Ref",type:this.type,class:`${r}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:C?void 0:this.maxlength,minlength:C?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:i=>{this.handleInputFocus(i,1)},onInput:i=>{this.handleInput(i,1)},onChange:i=>{this.handleChange(i,1)}}),this.showPlaceholder2?a("div",{class:`${r}-input__placeholder`},a("span",null,this.mergedPlaceholder[1])):null),Q(v.suffix,i=>(this.clearable||i)&&a("div",{class:`${r}-input__suffix`},[this.clearable&&a(Ae,{clsPrefix:r,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var d;return(d=v["clear-icon"])===null||d===void 0?void 0:d.call(v)},placeholder:()=>{var d;return(d=v["clear-icon-placeholder"])===null||d===void 0?void 0:d.call(v)}}),i]))):null,this.mergedBordered?a("div",{class:`${r}-input__border`}):null,this.mergedBordered?a("div",{class:`${r}-input__state-border`}):null,this.showCount&&f==="textarea"?a(Re,null,{default:i=>{var d;const{renderCount:x}=this;return x?x(i):(d=v.count)===null||d===void 0?void 0:d.call(v,i)}}):null)}});export{_n as E,Vn as N};
