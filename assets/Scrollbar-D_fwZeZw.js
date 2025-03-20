import{d as V,x as a,z as sr,C as y,f as ce,i as ur,J as F,bw as cr,j as d,n as i,l as b,m as S,k as K,p as Re,H as de,bx as dr,by as hr,q as _e,D as be,E as fr,A as pr,F as me,a0 as vr,g as gr,au as xe,s as br,v as mr,K as se,bz as xr,L as wr,M as Q,av as ue,bA as Fe,Q as yr,bB as Cr,aZ as we,aw as ye,G as z,b0 as Ce,ax as ze}from"./index-D24jBNt-.js";import{u as zr,N as Se,a as Sr}from"./Suffix-B485YR5W.js";const Ar=V({name:"Eye",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),a("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Rr=V({name:"EyeOff",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),a("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),a("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),a("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),a("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Be=sr("n-input");function _r(r){let v=0;for(const n of r)v++;return v}function Z(r){return r===""||r==null}function Fr(r){const v=y(null);function n(){const{value:x}=r;if(!(x!=null&&x.focus)){R();return}const{selectionStart:f,selectionEnd:s,value:c}=x;if(f==null||s==null){R();return}v.value={start:f,end:s,beforeText:c.slice(0,f),afterText:c.slice(s)}}function C(){var x;const{value:f}=v,{value:s}=r;if(!f||!s)return;const{value:c}=s,{start:u,beforeText:l,afterText:m}=f;let w=c.length;if(c.endsWith(m))w=c.length-m.length;else if(c.startsWith(l))w=l.length;else{const I=l[u-1],A=c.indexOf(I,u-1);A!==-1&&(w=A+1)}(x=s.setSelectionRange)===null||x===void 0||x.call(s,w,w)}function R(){v.value=null}return ce(r,R),{recordCursor:n,restoreCursor:C}}const Ae=V({name:"InputWordCount",setup(r,{slots:v}){const{mergedValueRef:n,maxlengthRef:C,mergedClsPrefixRef:R,countGraphemesRef:x}=ur(Be),f=F(()=>{const{value:s}=n;return s===null||Array.isArray(s)?0:(x.value||_r)(s)});return()=>{const{value:s}=C,{value:c}=n;return a("span",{class:`${R.value}-input-word-count`},cr(v.default,{value:c===null||Array.isArray(c)?"":c},()=>[s===void 0?f.value:`${f.value} / ${s}`]))}}}),Br=d("input",`
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
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[i("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),i("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
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
 `),i("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[b("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),b("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),b("&:-webkit-autofill ~",[i("placeholder","display: none;")])]),S("round",[K("textarea","border-radius: calc(var(--n-height) / 2);")]),i("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[b("span",`
 width: 100%;
 display: inline-block;
 `)]),S("textarea",[i("placeholder","overflow: visible;")]),K("autosize","width: 100%;"),S("autosize",[i("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),d("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),i("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),i("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[b("&[type=password]::-ms-reveal","display: none;"),b("+",[i("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),K("textarea",[i("placeholder","white-space: nowrap;")]),i("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),S("textarea","width: 100%;",[d("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),S("resizable",[d("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),i("textarea-el, textarea-mirror, placeholder",`
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
 `),i("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),S("pair",[i("input-el, placeholder","text-align: center;"),i("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[d("icon",`
 color: var(--n-icon-color);
 `),d("base-icon",`
 color: var(--n-icon-color);
 `)])]),S("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[i("border","border: var(--n-border-disabled);"),i("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),i("placeholder","color: var(--n-placeholder-color-disabled);"),i("separator","color: var(--n-text-color-disabled);",[d("icon",`
 color: var(--n-icon-color-disabled);
 `),d("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),d("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),i("suffix, prefix","color: var(--n-text-color-disabled);",[d("icon",`
 color: var(--n-icon-color-disabled);
 `),d("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),K("disabled",[i("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[b("&:hover",`
 color: var(--n-icon-color-hover);
 `),b("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),b("&:hover",[i("state-border","border: var(--n-border-hover);")]),S("focus","background-color: var(--n-color-focus);",[i("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),i("border, state-border",`
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
 `),i("state-border",`
 border-color: #0000;
 z-index: 1;
 `),i("prefix","margin-right: 4px;"),i("suffix",`
 margin-left: 4px;
 `),i("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[d("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),d("base-clear",`
 font-size: var(--n-icon-size);
 `,[i("placeholder",[d("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),b(">",[d("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),d("base-icon",`
 font-size: var(--n-icon-size);
 `)]),d("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(r=>S(`${r}-status`,[K("disabled",[d("base-loading",`
 color: var(--n-loading-color-${r})
 `),i("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${r});
 `),i("state-border",`
 border: var(--n-border-${r});
 `),b("&:hover",[i("state-border",`
 border: var(--n-border-hover-${r});
 `)]),b("&:focus",`
 background-color: var(--n-color-focus-${r});
 `,[i("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)]),S("focus",`
 background-color: var(--n-color-focus-${r});
 `,[i("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)])])]))]),$r=d("input",[S("disabled",[i("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),Pr=Object.assign(Object.assign({},de.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),Vr=V({name:"Input",props:Pr,setup(r){const{mergedClsPrefixRef:v,mergedBorderedRef:n,inlineThemeDisabled:C,mergedRtlRef:R}=Re(r),x=de("Input","-input",Br,dr,r,v);hr&&_e("-input-safari",$r,v);const f=y(null),s=y(null),c=y(null),u=y(null),l=y(null),m=y(null),w=y(null),I=Fr(w),A=y(null),{localeRef:$e}=zr("Input"),L=y(r.defaultValue),Pe=be(r,"value"),_=fr(Pe,L),W=pr(r),{mergedSizeRef:ee,mergedDisabledRef:T,mergedStatusRef:Ee}=W,k=y(!1),D=y(!1),B=y(!1),O=y(!1);let oe=null;const re=F(()=>{const{placeholder:e,pair:o}=r;return o?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[$e.value.placeholder]:[e]}),Ie=F(()=>{const{value:e}=B,{value:o}=_,{value:t}=re;return!e&&(Z(o)||Array.isArray(o)&&Z(o[0]))&&t[0]}),Te=F(()=>{const{value:e}=B,{value:o}=_,{value:t}=re;return!e&&t[1]&&(Z(o)||Array.isArray(o)&&Z(o[1]))}),te=me(()=>r.internalForceFocus||k.value),ke=me(()=>{if(T.value||r.readonly||!r.clearable||!te.value&&!D.value)return!1;const{value:e}=_,{value:o}=te;return r.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(D.value||o):!!e&&(D.value||o)}),ne=F(()=>{const{showPasswordOn:e}=r;if(e)return e;if(r.showPasswordToggle)return"click"}),N=y(!1),Me=F(()=>{const{textDecoration:e}=r;return e?Array.isArray(e)?e.map(o=>({textDecoration:o})):[{textDecoration:e}]:["",""]}),he=y(void 0),Ve=()=>{var e,o;if(r.type==="textarea"){const{autosize:t}=r;if(t&&(he.value=(o=(e=A.value)===null||e===void 0?void 0:e.$el)===null||o===void 0?void 0:o.offsetWidth),!s.value||typeof t=="boolean")return;const{paddingTop:p,paddingBottom:g,lineHeight:h}=window.getComputedStyle(s.value),$=Number(p.slice(0,-2)),P=Number(g.slice(0,-2)),E=Number(h.slice(0,-2)),{value:j}=c;if(!j)return;if(t.minRows){const H=Math.max(t.minRows,1),le=`${$+P+E*H}px`;j.style.minHeight=le}if(t.maxRows){const H=`${$+P+E*t.maxRows}px`;j.style.maxHeight=H}}},We=F(()=>{const{maxlength:e}=r;return e===void 0?void 0:Number(e)});vr(()=>{const{value:e}=_;Array.isArray(e)||ie(e)});const De=gr().proxy;function U(e,o){const{onUpdateValue:t,"onUpdate:value":p,onInput:g}=r,{nTriggerFormInput:h}=W;t&&z(t,e,o),p&&z(p,e,o),g&&z(g,e,o),L.value=e,h()}function G(e,o){const{onChange:t}=r,{nTriggerFormChange:p}=W;t&&z(t,e,o),L.value=e,p()}function Oe(e){const{onBlur:o}=r,{nTriggerFormBlur:t}=W;o&&z(o,e),t()}function Ne(e){const{onFocus:o}=r,{nTriggerFormFocus:t}=W;o&&z(o,e),t()}function je(e){const{onClear:o}=r;o&&z(o,e)}function He(e){const{onInputBlur:o}=r;o&&z(o,e)}function Ke(e){const{onInputFocus:o}=r;o&&z(o,e)}function Le(){const{onDeactivate:e}=r;e&&z(e)}function Ue(){const{onActivate:e}=r;e&&z(e)}function Ge(e){const{onClick:o}=r;o&&z(o,e)}function Xe(e){const{onWrapperFocus:o}=r;o&&z(o,e)}function Ye(e){const{onWrapperBlur:o}=r;o&&z(o,e)}function qe(){B.value=!0}function Je(e){B.value=!1,e.target===m.value?X(e,1):X(e,0)}function X(e,o=0,t="input"){const p=e.target.value;if(ie(p),e instanceof InputEvent&&!e.isComposing&&(B.value=!1),r.type==="textarea"){const{value:h}=A;h&&h.syncUnifiedContainer()}if(oe=p,B.value)return;I.recordCursor();const g=Qe(p);if(g)if(!r.pair)t==="input"?U(p,{source:o}):G(p,{source:o});else{let{value:h}=_;Array.isArray(h)?h=[h[0],h[1]]:h=["",""],h[o]=p,t==="input"?U(h,{source:o}):G(h,{source:o})}De.$forceUpdate(),g||we(I.restoreCursor)}function Qe(e){const{countGraphemes:o,maxlength:t,minlength:p}=r;if(o){let h;if(t!==void 0&&(h===void 0&&(h=o(e)),h>Number(t))||p!==void 0&&(h===void 0&&(h=o(e)),h<Number(t)))return!1}const{allowInput:g}=r;return typeof g=="function"?g(e):!0}function Ze(e){He(e),e.relatedTarget===f.value&&Le(),e.relatedTarget!==null&&(e.relatedTarget===l.value||e.relatedTarget===m.value||e.relatedTarget===s.value)||(O.value=!1),Y(e,"blur"),w.value=null}function eo(e,o){Ke(e),k.value=!0,O.value=!0,Ue(),Y(e,"focus"),o===0?w.value=l.value:o===1?w.value=m.value:o===2&&(w.value=s.value)}function oo(e){r.passivelyActivated&&(Ye(e),Y(e,"blur"))}function ro(e){r.passivelyActivated&&(k.value=!0,Xe(e),Y(e,"focus"))}function Y(e,o){e.relatedTarget!==null&&(e.relatedTarget===l.value||e.relatedTarget===m.value||e.relatedTarget===s.value||e.relatedTarget===f.value)||(o==="focus"?(Ne(e),k.value=!0):o==="blur"&&(Oe(e),k.value=!1))}function to(e,o){X(e,o,"change")}function no(e){Ge(e)}function ao(e){je(e),fe()}function fe(){r.pair?(U(["",""],{source:"clear"}),G(["",""],{source:"clear"})):(U("",{source:"clear"}),G("",{source:"clear"}))}function io(e){const{onMousedown:o}=r;o&&o(e);const{tagName:t}=e.target;if(t!=="INPUT"&&t!=="TEXTAREA"){if(r.resizable){const{value:p}=f;if(p){const{left:g,top:h,width:$,height:P}=p.getBoundingClientRect(),E=14;if(g+$-E<e.clientX&&e.clientX<g+$&&h+P-E<e.clientY&&e.clientY<h+P)return}}e.preventDefault(),k.value||pe()}}function lo(){var e;D.value=!0,r.type==="textarea"&&((e=A.value)===null||e===void 0||e.handleMouseEnterWrapper())}function so(){var e;D.value=!1,r.type==="textarea"&&((e=A.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function uo(){T.value||ne.value==="click"&&(N.value=!N.value)}function co(e){if(T.value)return;e.preventDefault();const o=p=>{p.preventDefault(),ze("mouseup",document,o)};if(ye("mouseup",document,o),ne.value!=="mousedown")return;N.value=!0;const t=()=>{N.value=!1,ze("mouseup",document,t)};ye("mouseup",document,t)}function ho(e){r.onKeyup&&z(r.onKeyup,e)}function fo(e){switch(r.onKeydown&&z(r.onKeydown,e),e.key){case"Escape":ae();break;case"Enter":po(e);break}}function po(e){var o,t;if(r.passivelyActivated){const{value:p}=O;if(p){r.internalDeactivateOnEnter&&ae();return}e.preventDefault(),r.type==="textarea"?(o=s.value)===null||o===void 0||o.focus():(t=l.value)===null||t===void 0||t.focus()}}function ae(){r.passivelyActivated&&(O.value=!1,we(()=>{var e;(e=f.value)===null||e===void 0||e.focus()}))}function pe(){var e,o,t;T.value||(r.passivelyActivated?(e=f.value)===null||e===void 0||e.focus():((o=s.value)===null||o===void 0||o.focus(),(t=l.value)===null||t===void 0||t.focus()))}function vo(){var e;!((e=f.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function go(){var e,o;(e=s.value)===null||e===void 0||e.select(),(o=l.value)===null||o===void 0||o.select()}function bo(){T.value||(s.value?s.value.focus():l.value&&l.value.focus())}function mo(){const{value:e}=f;e!=null&&e.contains(document.activeElement)&&e!==document.activeElement&&ae()}function xo(e){if(r.type==="textarea"){const{value:o}=s;o==null||o.scrollTo(e)}else{const{value:o}=l;o==null||o.scrollTo(e)}}function ie(e){const{type:o,pair:t,autosize:p}=r;if(!t&&p)if(o==="textarea"){const{value:g}=c;g&&(g.textContent=`${e??""}\r
`)}else{const{value:g}=u;g&&(e?g.textContent=e:g.innerHTML="&nbsp;")}}function wo(){Ve()}const ve=y({top:"0"});function yo(e){var o;const{scrollTop:t}=e.target;ve.value.top=`${-t}px`,(o=A.value)===null||o===void 0||o.syncUnifiedContainer()}let q=null;xe(()=>{const{autosize:e,type:o}=r;e&&o==="textarea"?q=ce(_,t=>{!Array.isArray(t)&&t!==oe&&ie(t)}):q==null||q()});let J=null;xe(()=>{r.type==="textarea"?J=ce(_,e=>{var o;!Array.isArray(e)&&e!==oe&&((o=A.value)===null||o===void 0||o.syncUnifiedContainer())}):J==null||J()}),br(Be,{mergedValueRef:_,maxlengthRef:We,mergedClsPrefixRef:v,countGraphemesRef:be(r,"countGraphemes")});const Co={wrapperElRef:f,inputElRef:l,textareaElRef:s,isCompositing:B,clear:fe,focus:pe,blur:vo,select:go,deactivate:mo,activate:bo,scrollTo:xo},zo=mr("Input",R,v),ge=F(()=>{const{value:e}=ee,{common:{cubicBezierEaseInOut:o},self:{color:t,borderRadius:p,textColor:g,caretColor:h,caretColorError:$,caretColorWarning:P,textDecorationColor:E,border:j,borderDisabled:H,borderHover:le,borderFocus:So,placeholderColor:Ao,placeholderColorDisabled:Ro,lineHeightTextarea:_o,colorDisabled:Fo,colorFocus:Bo,textColorDisabled:$o,boxShadowFocus:Po,iconSize:Eo,colorFocusWarning:Io,boxShadowFocusWarning:To,borderWarning:ko,borderFocusWarning:Mo,borderHoverWarning:Vo,colorFocusError:Wo,boxShadowFocusError:Do,borderError:Oo,borderFocusError:No,borderHoverError:jo,clearSize:Ho,clearColor:Ko,clearColorHover:Lo,clearColorPressed:Uo,iconColor:Go,iconColorDisabled:Xo,suffixTextColor:Yo,countTextColor:qo,countTextColorDisabled:Jo,iconColorHover:Qo,iconColorPressed:Zo,loadingColor:er,loadingColorError:or,loadingColorWarning:rr,[se("padding",e)]:tr,[se("fontSize",e)]:nr,[se("height",e)]:ar}}=x.value,{left:ir,right:lr}=xr(tr);return{"--n-bezier":o,"--n-count-text-color":qo,"--n-count-text-color-disabled":Jo,"--n-color":t,"--n-font-size":nr,"--n-border-radius":p,"--n-height":ar,"--n-padding-left":ir,"--n-padding-right":lr,"--n-text-color":g,"--n-caret-color":h,"--n-text-decoration-color":E,"--n-border":j,"--n-border-disabled":H,"--n-border-hover":le,"--n-border-focus":So,"--n-placeholder-color":Ao,"--n-placeholder-color-disabled":Ro,"--n-icon-size":Eo,"--n-line-height-textarea":_o,"--n-color-disabled":Fo,"--n-color-focus":Bo,"--n-text-color-disabled":$o,"--n-box-shadow-focus":Po,"--n-loading-color":er,"--n-caret-color-warning":P,"--n-color-focus-warning":Io,"--n-box-shadow-focus-warning":To,"--n-border-warning":ko,"--n-border-focus-warning":Mo,"--n-border-hover-warning":Vo,"--n-loading-color-warning":rr,"--n-caret-color-error":$,"--n-color-focus-error":Wo,"--n-box-shadow-focus-error":Do,"--n-border-error":Oo,"--n-border-focus-error":No,"--n-border-hover-error":jo,"--n-loading-color-error":or,"--n-clear-color":Ko,"--n-clear-size":Ho,"--n-clear-color-hover":Lo,"--n-clear-color-pressed":Uo,"--n-icon-color":Go,"--n-icon-color-hover":Qo,"--n-icon-color-pressed":Zo,"--n-icon-color-disabled":Xo,"--n-suffix-text-color":Yo}}),M=C?wr("input",F(()=>{const{value:e}=ee;return e[0]}),ge,r):void 0;return Object.assign(Object.assign({},Co),{wrapperElRef:f,inputElRef:l,inputMirrorElRef:u,inputEl2Ref:m,textareaElRef:s,textareaMirrorElRef:c,textareaScrollbarInstRef:A,rtlEnabled:zo,uncontrolledValue:L,mergedValue:_,passwordVisible:N,mergedPlaceholder:re,showPlaceholder1:Ie,showPlaceholder2:Te,mergedFocus:te,isComposing:B,activated:O,showClearButton:ke,mergedSize:ee,mergedDisabled:T,textDecorationStyle:Me,mergedClsPrefix:v,mergedBordered:n,mergedShowPasswordOn:ne,placeholderStyle:ve,mergedStatus:Ee,textAreaScrollContainerWidth:he,handleTextAreaScroll:yo,handleCompositionStart:qe,handleCompositionEnd:Je,handleInput:X,handleInputBlur:Ze,handleInputFocus:eo,handleWrapperBlur:oo,handleWrapperFocus:ro,handleMouseEnter:lo,handleMouseLeave:so,handleMouseDown:io,handleChange:to,handleClick:no,handleClear:ao,handlePasswordToggleClick:uo,handlePasswordToggleMousedown:co,handleWrapperKeydown:fo,handleWrapperKeyup:ho,handleTextAreaMirrorResize:wo,getTextareaScrollContainer:()=>s.value,mergedTheme:x,cssVars:C?void 0:ge,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender})},render(){var r,v;const{mergedClsPrefix:n,mergedStatus:C,themeClass:R,type:x,countGraphemes:f,onRender:s}=this,c=this.$slots;return s==null||s(),a("div",{ref:"wrapperElRef",class:[`${n}-input`,R,C&&`${n}-input--${C}-status`,{[`${n}-input--rtl`]:this.rtlEnabled,[`${n}-input--disabled`]:this.mergedDisabled,[`${n}-input--textarea`]:x==="textarea",[`${n}-input--resizable`]:this.resizable&&!this.autosize,[`${n}-input--autosize`]:this.autosize,[`${n}-input--round`]:this.round&&x!=="textarea",[`${n}-input--pair`]:this.pair,[`${n}-input--focus`]:this.mergedFocus,[`${n}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},a("div",{class:`${n}-input-wrapper`},Q(c.prefix,u=>u&&a("div",{class:`${n}-input__prefix`},u)),x==="textarea"?a(Fe,{ref:"textareaScrollbarInstRef",class:`${n}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var u,l;const{textAreaScrollContainerWidth:m}=this,w={width:this.autosize&&m&&`${m}px`};return a(yr,null,a("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${n}-input__textarea-el`,(u=this.inputProps)===null||u===void 0?void 0:u.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:f?void 0:this.maxlength,minlength:f?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(l=this.inputProps)===null||l===void 0?void 0:l.style,w],onBlur:this.handleInputBlur,onFocus:I=>{this.handleInputFocus(I,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?a("div",{class:`${n}-input__placeholder`,style:[this.placeholderStyle,w],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?a(Cr,{onResize:this.handleTextAreaMirrorResize},{default:()=>a("div",{ref:"textareaMirrorElRef",class:`${n}-input__textarea-mirror`,key:"mirror"})}):null)}}):a("div",{class:`${n}-input__input`},a("input",Object.assign({type:x==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":x},this.inputProps,{ref:"inputElRef",class:[`${n}-input__input-el`,(r=this.inputProps)===null||r===void 0?void 0:r.class],style:[this.textDecorationStyle[0],(v=this.inputProps)===null||v===void 0?void 0:v.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:f?void 0:this.maxlength,minlength:f?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:u=>{this.handleInputFocus(u,0)},onInput:u=>{this.handleInput(u,0)},onChange:u=>{this.handleChange(u,0)}})),this.showPlaceholder1?a("div",{class:`${n}-input__placeholder`},a("span",null,this.mergedPlaceholder[0])):null,this.autosize?a("div",{class:`${n}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&Q(c.suffix,u=>u||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?a("div",{class:`${n}-input__suffix`},[Q(c["clear-icon-placeholder"],l=>(this.clearable||l)&&a(Se,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>l,icon:()=>{var m,w;return(w=(m=this.$slots)["clear-icon"])===null||w===void 0?void 0:w.call(m)}})),this.internalLoadingBeforeSuffix?null:u,this.loading!==void 0?a(Sr,{clsPrefix:n,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?u:null,this.showCount&&this.type!=="textarea"?a(Ae,null,{default:l=>{var m;return(m=c.count)===null||m===void 0?void 0:m.call(c,l)}}):null,this.mergedShowPasswordOn&&this.type==="password"?a("div",{class:`${n}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?ue(c["password-visible-icon"],()=>[a(Ce,{clsPrefix:n},{default:()=>a(Ar,null)})]):ue(c["password-invisible-icon"],()=>[a(Ce,{clsPrefix:n},{default:()=>a(Rr,null)})])):null]):null)),this.pair?a("span",{class:`${n}-input__separator`},ue(c.separator,()=>[this.separator])):null,this.pair?a("div",{class:`${n}-input-wrapper`},a("div",{class:`${n}-input__input`},a("input",{ref:"inputEl2Ref",type:this.type,class:`${n}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:f?void 0:this.maxlength,minlength:f?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:u=>{this.handleInputFocus(u,1)},onInput:u=>{this.handleInput(u,1)},onChange:u=>{this.handleChange(u,1)}}),this.showPlaceholder2?a("div",{class:`${n}-input__placeholder`},a("span",null,this.mergedPlaceholder[1])):null),Q(c.suffix,u=>(this.clearable||u)&&a("div",{class:`${n}-input__suffix`},[this.clearable&&a(Se,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var l;return(l=c["clear-icon"])===null||l===void 0?void 0:l.call(c)},placeholder:()=>{var l;return(l=c["clear-icon-placeholder"])===null||l===void 0?void 0:l.call(c)}}),u]))):null,this.mergedBordered?a("div",{class:`${n}-input__border`}):null,this.mergedBordered?a("div",{class:`${n}-input__state-border`}):null,this.showCount&&x==="textarea"?a(Ae,null,{default:u=>{var l;const{renderCount:m}=this;return m?m(u):(l=c.count)===null||l===void 0?void 0:l.call(c,u)}}):null)}}),Er=d("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[b(">",[d("input",[b("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),b("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),d("button",[b("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[i("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),b("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[i("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),b("*",[b("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[b(">",[d("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),d("base-selection",[d("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),d("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),i("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),b("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[b(">",[d("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),d("base-selection",[d("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),d("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),i("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),Ir={},Wr=V({name:"InputGroup",props:Ir,setup(r){const{mergedClsPrefixRef:v}=Re(r);return _e("-input-group",Er,v),{mergedClsPrefix:v}},render(){const{mergedClsPrefix:r}=this;return a("div",{class:`${r}-input-group`},this.$slots)}}),Tr=Object.assign(Object.assign({},de.props),{trigger:String,xScrollable:Boolean,onScroll:Function,contentClass:String,contentStyle:[Object,String],size:Number}),Dr=V({name:"Scrollbar",props:Tr,setup(){const r=y(null);return Object.assign(Object.assign({},{scrollTo:(...n)=>{var C;(C=r.value)===null||C===void 0||C.scrollTo(n[0],n[1])},scrollBy:(...n)=>{var C;(C=r.value)===null||C===void 0||C.scrollBy(n[0],n[1])}}),{scrollbarInstRef:r})},render(){return a(Fe,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}});export{Ar as E,Wr as N,Dr as S,Vr as a};
