const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./axis-CslnMUsg.js","./index-CFKI3qLN.js","./index-Cfj9n6rm.css","./index-DyTFKQ6h.js","./index-aLqCqA5N.css","./InputNumber-2Oy3hSG0.js","./Suffix-D_uBt2jI.js","./Input-DAUdDxvF.js","./Add-BKSaeg94.js","./ArrowUp-DlBsLVGp.js","./Flex-zPf791ko.js","./text-DaQcC-I0.js","./RadioButton-DadOsIQI.js","./axis-0mTtjct4.css","./center-Bf-JpZPk.js","./center-BkiLei1l.css","./line-D31i9pca.js","./line-D4jaOENS.css","./original-DLna-lPZ.js","./original-DNMErwDO.css","./point-CDPPYnZL.js","./point-DKk5Rw6O.css","./polygon-DHB683pv.js","./polygon-DXh2iIso.css","./shortcutKey-DMkOToLF.js","./Divider-BIjBseZZ.js","./shortcutKey-DDnMfobB.css"])))=>i.map(i=>d[i]);
import{ao as be,G as he,ap as xe,x as R,f as P,i as H,d as z,k as Q,l as ye,E as T,O as te,aq as ve,n as E,ar as ke,F as me,g as le,h as N,j as q,C as we,K as Y,as as $e,M as W,p as Ce,at as Re,au as Te,av as je,s as D,aw as Ee,z as ge,ax as ie,ay as Be,az as Se,y as Pe,aA as se,$ as Ae,aB as Oe,Y as L,o as x,c as O,Q as F,a1 as A,w as k,a as C,u as h,Z as G,aC as ae,B as ce,a9 as Ne,aa as ze,a0 as ue,e as de,t as Le,aD as He,an as Ie,ac as Ve,aE as De,X as Me,aF as j,ad as K,aG as X,_ as We}from"./index-CFKI3qLN.js";import{S as ee}from"./Scrollbar-DaoFYc7M.js";import{a as Fe,b as Ke}from"./use-collection-CEVHPlOV.js";import{g as qe}from"./attribute-Cz32yFEB.js";import{t as Ge}from"./throttle-DdCImyG4.js";function pe(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}let fe=!1;function Ue(){if(be&&window.CSS&&!fe&&(fe=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function Ye(e,t){const l=he(xe,null);return R(()=>e.hljs||(l==null?void 0:l.mergedHljsRef.value))}function Qe(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function Xe(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const Ze=P("affix",[H("affixed",{position:"fixed"},[H("absolute-positioned",{position:"absolute"})])]),oe={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},Je=me(oe),et=z({name:"Affix",props:oe,setup(e){const{mergedClsPrefixRef:t}=Q(e);ye("-affix",Ze,t);let l=null;const i=T(!1),a=T(!1),s=T(null),y=T(null),f=R(()=>a.value||i.value),m=R(()=>{var o,r;return(r=(o=e.triggerTop)!==null&&o!==void 0?o:e.offsetTop)!==null&&r!==void 0?r:e.top}),g=R(()=>{var o,r;return(r=(o=e.top)!==null&&o!==void 0?o:e.triggerTop)!==null&&r!==void 0?r:e.offsetTop}),n=R(()=>{var o,r;return(r=(o=e.bottom)!==null&&o!==void 0?o:e.triggerBottom)!==null&&r!==void 0?r:e.offsetBottom}),p=R(()=>{var o,r;return(r=(o=e.triggerBottom)!==null&&o!==void 0?o:e.offsetBottom)!==null&&r!==void 0?r:e.bottom}),_=T(null),d=()=>{const{target:o,listenTo:r}=e;o?l=o():r?l=pe(r):l=document,l&&(l.addEventListener("scroll",u),u())};function u(){ke(c)}function c(){const{value:o}=_;if(!l||!o)return;const r=Qe(l);if(f.value){y.value!==null&&r<y.value&&(i.value=!1,y.value=null),s.value!==null&&r>s.value&&(a.value=!1,s.value=null);return}const w=Xe(l),$=o.getBoundingClientRect(),S=$.top-w.top,B=w.bottom-$.bottom,b=m.value,v=p.value;b!==void 0&&S<=b?(i.value=!0,y.value=r-(b-S)):(i.value=!1,y.value=null),v!==void 0&&B<=v?(a.value=!0,s.value=r+v-B):(a.value=!1,s.value=null)}return te(()=>{d()}),ve(()=>{l&&l.removeEventListener("scroll",u)}),{selfRef:_,affixed:f,mergedClsPrefix:t,mergedstyle:R(()=>{const o={};return i.value&&m.value!==void 0&&g.value!==void 0&&(o.top=`${g.value}px`),a.value&&p.value!==void 0&&n.value!==void 0&&(o.bottom=`${n.value}px`),o})}},render(){const{mergedClsPrefix:e}=this;return E("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),tt=P("anchor",`
 position: relative;
`,[le("block",`
 padding-left: var(--n-rail-width);
 `,[P("anchor-link",[N("+, >",[P("anchor-link",`
 margin-top: .5em;
 `)])]),P("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),le("show-rail",[N(">",[P("anchor-link","padding-left: 0;")])])]),H("block",[P("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[H("active",`
 background-color: var(--n-link-color);
 `)])]),P("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),P("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[q("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[H("active",{backgroundColor:"var(--n-rail-color-active)"})])]),P("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[H("active",[N(">",[q("title",`
 color: var(--n-link-text-color-active);
 `)])]),q("title",`
 outline: none;
 max-width: 100%;
 text-decoration: none;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 cursor: pointer;
 display: inline-block;
 padding-right: 16px;
 transition: color .3s var(--n-bezier);
 color: var(--n-link-text-color);
 `,[N("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),N("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),U=we("n-anchor"),ot={title:String,href:String},nt=z({name:"AnchorLink",props:ot,setup(e,{slots:t}){const l=T(null),i=he(U),a=Y(e,"href"),s=$e(()=>a.value&&a.value===i.activeHref.value);Fe(U,"collectedLinkHrefs",a),Ke(U,"titleEls",()=>l.value),W(s,f=>{f&&l.value&&i.updateBarPosition(l.value)});function y(){e.href!==void 0&&i.setActiveHref(e.href)}return()=>{var f;const{value:m}=i.mergedClsPrefix;return E("div",{class:[`${m}-anchor-link`,s.value&&`${m}-anchor-link--active`]},E("a",{ref:l,class:[`${m}-anchor-link__title`],href:e.href,title:qe(e.title),onClick:y},e.title),(f=t.default)===null||f===void 0?void 0:f.call(t))}}});function rt(e,t){const{top:l,height:i}=e.getBoundingClientRect(),a=t instanceof HTMLElement?t.getBoundingClientRect().top:0;return{top:l-a,height:i}}const ne={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},lt=me(ne),it=z({name:"BaseAnchor",props:Object.assign(Object.assign({},ne),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const t=[],l=[],i=T(null),a=T(null),s=T(null),y=T(null),f=R(()=>e.type==="block"),m=R(()=>!f.value&&e.showRail);function g(){const{value:u}=s,{value:c}=a;u&&(u.style.transition="none"),c&&(c.style.transition="none"),l&&l.forEach(o=>{o.style.transition="none"}),je(()=>{const{value:o}=s,{value:r}=a;o&&(o.offsetWidth,o.style.transition=""),r&&(r.offsetWidth,r.style.transition=""),l&&l.forEach(w=>{w.offsetWidth,w.style.transition=""})})}function n(u,c=!0){const{value:o}=s,{value:r}=a,{value:w}=y;if(!w||!o)return;c||(o.style.transition="none",r&&(r.style.transition="none"));const{offsetHeight:$,offsetWidth:S}=u,{top:B,left:b}=u.getBoundingClientRect(),{top:v,left:I}=w.getBoundingClientRect(),V=B-v,M=b-I;o.style.top=`${V}px`,o.style.height=`${$}px`,r&&(r.style.top=`${V}px`,r.style.height=`${$}px`,r.style.maxWidth=`${S+M}px`),o.offsetHeight,r&&r.offsetHeight,c||(o.style.transition="",r&&(r.style.transition=""))}const p=Ge(()=>{d(!0)},128);function _(u,c=!0){const o=/^#([^#]+)$/.exec(u);if(!o)return;const r=document.getElementById(o[1]);r&&(i.value=u,r.scrollIntoView(),c||g(),p())}function d(u=!0){var c;const o=[],r=pe((c=e.offsetTarget)!==null&&c!==void 0?c:document);t.forEach(b=>{const v=/#([^#]+)$/.exec(b);if(!v)return;const I=document.getElementById(v[1]);if(I&&r){const{top:V,height:M}=rt(I,r);o.push({top:V,height:M,href:b})}}),o.sort((b,v)=>b.top>v.top?1:(b.top===v.top&&b.height<v.height,-1));const w=i.value,{bound:$,ignoreGap:S}=e,B=o.reduce((b,v)=>v.top+v.height<0?S?v:b:v.top<=$?b===null?v:v.top===b.top?v.href===w?v:b:v.top>b.top?v:b:b,null);u||g(),B?i.value=B.href:i.value=null}return Ce(U,{activeHref:i,mergedClsPrefix:Y(e,"mergedClsPrefix"),updateBarPosition:n,setActiveHref:_,collectedLinkHrefs:t,titleEls:l}),te(()=>{document.addEventListener("scroll",p,!0),_(window.location.hash),d(!1)}),Re(()=>{_(window.location.hash),d(!1)}),ve(()=>{document.removeEventListener("scroll",p,!0)}),W(i,u=>{if(u===null){const{value:c}=a;c&&!f.value&&(c.style.maxWidth="0")}}),{selfRef:y,barRef:s,slotRef:a,setActiveHref:_,activeHref:i,isBlockType:f,mergedShowRail:m}},render(){var e;const{mergedClsPrefix:t,mergedShowRail:l,isBlockType:i,$slots:a}=this,s=E("div",{class:[`${t}-anchor`,i&&`${t}-anchor--block`,l&&`${t}-anchor--show-rail`],ref:"selfRef"},l&&this.showBackground?E("div",{ref:"slotRef",class:`${t}-anchor-link-background`}):null,l?E("div",{class:`${t}-anchor-rail`},E("div",{ref:"barRef",class:[`${t}-anchor-rail__bar`,this.activeHref!==null&&`${t}-anchor-rail__bar--active`]})):null,(e=a.default)===null||e===void 0?void 0:e.call(a));return this.internalScrollable?E(Te,null,{default:()=>s}):s}}),st=Object.assign(Object.assign(Object.assign(Object.assign({},D.props),{affix:Boolean}),oe),ne),at=z({name:"Anchor",props:st,setup(e,{slots:t}){const{mergedClsPrefixRef:l,inlineThemeDisabled:i}=Q(e),a=D("Anchor","-anchor",tt,Ee,e,l),s=T(null),y=R(()=>{const{self:{railColor:m,linkColor:g,railColorActive:n,linkTextColor:p,linkTextColorHover:_,linkTextColorPressed:d,linkTextColorActive:u,linkFontSize:c,railWidth:o,linkPadding:r,borderRadius:w},common:{cubicBezierEaseInOut:$}}=a.value;return{"--n-link-border-radius":w,"--n-link-color":g,"--n-link-font-size":c,"--n-link-text-color":p,"--n-link-text-color-hover":_,"--n-link-text-color-active":u,"--n-link-text-color-pressed":d,"--n-link-padding":r,"--n-bezier":$,"--n-rail-color":m,"--n-rail-color-active":n,"--n-rail-width":o}}),f=i?ge("anchor",void 0,y,e):void 0;return{scrollTo(m){var g;(g=s.value)===null||g===void 0||g.setActiveHref(m)},renderAnchor:()=>(f==null||f.onRender(),E(it,Object.assign({ref:s,style:i?void 0:y.value,class:f==null?void 0:f.themeClass.value},ie(e,lt),{mergedClsPrefix:l.value}),t))}},render(){return this.affix?E(et,Object.assign({},ie(this,Je)),{default:this.renderAnchor}):this.renderAnchor()}}),ct=N([P("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[H("show-line-numbers",`
 display: flex;
 `),q("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),H("word-wrap",[N("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),N("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),N("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{const t=`${e.bPrefix}code`;return[`${t} .hljs-comment,
 ${t} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${t} .hljs-doctag,
 ${t} .hljs-keyword,
 ${t} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${t} .hljs-section,
 ${t} .hljs-name,
 ${t} .hljs-selector-tag,
 ${t} .hljs-deletion,
 ${t} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${t} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${t} .hljs-string,
 ${t} .hljs-regexp,
 ${t} .hljs-addition,
 ${t} .hljs-attribute,
 ${t} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${t} .hljs-built_in,
 ${t} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${t} .hljs-attr,
 ${t} .hljs-variable,
 ${t} .hljs-template-variable,
 ${t} .hljs-type,
 ${t} .hljs-selector-class,
 ${t} .hljs-selector-attr,
 ${t} .hljs-selector-pseudo,
 ${t} .hljs-number {
 color: var(--n-hue-6);
 }`,`${t} .hljs-symbol,
 ${t} .hljs-bullet,
 ${t} .hljs-link,
 ${t} .hljs-meta,
 ${t} .hljs-selector-id,
 ${t} .hljs-title {
 color: var(--n-hue-2);
 }`,`${t} .hljs-emphasis {
 font-style: italic;
 }`,`${t} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${t} .hljs-link {
 text-decoration: underline;
 }`]}]),ut=Object.assign(Object.assign({},D.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),dt=z({name:"Code",props:ut,setup(e,{slots:t}){const{internalNoHighlight:l}=e,{mergedClsPrefixRef:i,inlineThemeDisabled:a}=Q(),s=T(null),y=l?{value:void 0}:Ye(e),f=(d,u,c)=>{const{value:o}=y;return!o||!(d&&o.getLanguage(d))?null:o.highlight(c?u.trim():u,{language:d}).value},m=R(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),g=()=>{if(t.default)return;const{value:d}=s;if(!d)return;const{language:u}=e,c=e.uri?window.decodeURIComponent(e.code):e.code;if(u){const r=f(u,c,e.trim);if(r!==null){if(e.inline)d.innerHTML=r;else{const w=d.querySelector(".__code__");w&&d.removeChild(w);const $=document.createElement("pre");$.className="__code__",$.innerHTML=r,d.appendChild($)}return}}if(e.inline){d.textContent=c;return}const o=d.querySelector(".__code__");if(o)o.textContent=c;else{const r=document.createElement("pre");r.className="__code__",r.textContent=c,d.innerHTML="",d.appendChild(r)}};te(g),W(Y(e,"language"),g),W(Y(e,"code"),g),l||W(y,g);const n=D("Code","-code",ct,Be,e,i),p=R(()=>{const{common:{cubicBezierEaseInOut:d,fontFamilyMono:u},self:{textColor:c,fontSize:o,fontWeightStrong:r,lineNumberTextColor:w,"mono-3":$,"hue-1":S,"hue-2":B,"hue-3":b,"hue-4":v,"hue-5":I,"hue-5-2":V,"hue-6":M,"hue-6-2":_e}}=n.value,{internalFontSize:re}=e;return{"--n-font-size":re?`${re}px`:o,"--n-font-family":u,"--n-font-weight-strong":r,"--n-bezier":d,"--n-text-color":c,"--n-mono-3":$,"--n-hue-1":S,"--n-hue-2":B,"--n-hue-3":b,"--n-hue-4":v,"--n-hue-5":I,"--n-hue-5-2":V,"--n-hue-6":M,"--n-hue-6-2":_e,"--n-line-number-text-color":w}}),_=a?ge("code",R(()=>`${e.internalFontSize||"a"}`),p,e):void 0;return{mergedClsPrefix:i,codeRef:s,mergedShowLineNumbers:m,lineNumbers:R(()=>{let d=1;const u=[];let c=!1;for(const o of e.code)o===`
`?(c=!0,u.push(d++)):c=!1;return c||u.push(d++),u.join(`
`)}),cssVars:a?void 0:p,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){var e,t;const{mergedClsPrefix:l,wordWrap:i,mergedShowLineNumbers:a,onRender:s}=this;return s==null||s(),E("code",{class:[`${l}-code`,this.themeClass,i&&`${l}-code--word-wrap`,a&&`${l}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},a?E("pre",{class:`${l}-code__line-numbers`},this.lineNumbers):null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}}),ft=N([P("skeleton",`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),N("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]),ht=Object.assign(Object.assign({},D.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),Z=z({name:"Skeleton",inheritAttrs:!1,props:ht,setup(e){Ue();const{mergedClsPrefixRef:t}=Q(e),l=D("Skeleton","-skeleton",ft,Se,e,t);return{mergedClsPrefix:t,style:R(()=>{var i,a;const s=l.value,{common:{cubicBezierEaseInOut:y}}=s,f=s.self,{color:m,colorEnd:g,borderRadius:n}=f;let p;const{circle:_,sharp:d,round:u,width:c,height:o,size:r,text:w,animated:$}=e;r!==void 0&&(p=f[Pe("height",r)]);const S=_?(i=c??o)!==null&&i!==void 0?i:p:c,B=(a=_?c??o:o)!==null&&a!==void 0?a:p;return{display:w?"inline-block":"",verticalAlign:w?"-0.125em":"",borderRadius:_?"50%":u?"4096px":d?"":n,width:typeof S=="number"?se(S):S,height:typeof B=="number"?se(B):B,animation:$?"":"none","--n-bezier":y,"--n-color-start":m,"--n-color-end":g}})}},render(){const{repeat:e,style:t,mergedClsPrefix:l,$attrs:i}=this,a=E("div",Ae({class:`${l}-skeleton`,style:t},i));return e>1?E(L,null,Oe(e,null).map(s=>[a,`
`])):a}}),vt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},mt=F("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M160 368L32 256l128-112"},null,-1),gt=F("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 368l128-112l-128-112"},null,-1),pt=[mt,gt],_t=z({name:"CodeOutline",render:function(t,l){return x(),O("svg",vt,pt)}}),bt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},xt=F("rect",{x:"128",y:"128",width:"336",height:"336",rx:"57",ry:"57",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),yt=F("path",{d:"M383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),kt=[xt,yt],wt=z({name:"CopyOutline",render:function(t,l){return x(),O("svg",bt,kt)}}),J=z({__name:"card",props:{code:{}},setup(e){const t=T(!1);return(l,i)=>(x(),A(h(Ve),null,{"header-extra":k(()=>[C(h(G),null,{default:k(()=>[C(h(ae),{trigger:"hover"},{trigger:k(()=>[C(h(ce),{onClick:i[0]||(i[0]=a=>h(Ne).success("复制成功").error("复制失败").run(h(ze)(l.code))),text:""},{icon:k(()=>[C(h(ue),{component:h(wt)},null,8,["component"])]),_:1})]),default:k(()=>[de(" 复制代码 ")]),_:1}),C(h(ae),{trigger:"hover"},{trigger:k(()=>[C(h(ce),{onClick:i[1]||(i[1]=a=>t.value=!t.value),text:""},{icon:k(()=>[C(h(ue),{component:h(_t)},null,8,["component"])]),_:1})]),default:k(()=>[de(" "+Le(t.value?"收起代码":"显示代码"),1)]),_:1})]),_:1})]),footer:k(()=>[C(h(He),{show:t.value},{default:k(()=>[C(h(ee),{"x-scrollable":"",style:{"max-height":"50vh"}},{default:k(()=>[C(h(dt),{code:l.code,language:"javascript","show-line-numbers":""},null,8,["code"])]),_:1})]),_:1},8,["show"])]),default:k(()=>[Ie(l.$slots,"default")]),_:3}))}}),$t={class:"my-canvas-tools"},Ct={class:"list-box"},Rt=z({__name:"index",setup(e){const t=[["original","仅需初始化 _Canvas"],["center","中心点"],["shortcutKey","快捷键"],["axis","坐标轴"],["point","点"],["line","线"],["polygon","面"]];function l(m){const g=[],n=[];for(let p=0;p<m.length;p++)p%2===0?n.push(m[p]):g.push(m[p]);return[n,g]}const[i,a]=l(t),s=T({});(async function(){const m=Object.assign({"./demo/axis.vue":()=>j(()=>import("./axis-D_aZDWNF.js"),[],import.meta.url).then(n=>n.default),"./demo/center.vue":()=>j(()=>import("./center-DhH0efib.js"),[],import.meta.url).then(n=>n.default),"./demo/line.vue":()=>j(()=>import("./line-mme-zZ2T.js"),[],import.meta.url).then(n=>n.default),"./demo/original.vue":()=>j(()=>import("./original-CaSuBOch.js"),[],import.meta.url).then(n=>n.default),"./demo/point.vue":()=>j(()=>import("./point-DZOc2Qa7.js"),[],import.meta.url).then(n=>n.default),"./demo/polygon.vue":()=>j(()=>import("./polygon-C5x8Nyu1.js"),[],import.meta.url).then(n=>n.default),"./demo/shortcutKey.vue":()=>j(()=>import("./shortcutKey-yIbEqP5a.js"),[],import.meta.url).then(n=>n.default)}),g=Object.assign({"./demo/axis.vue":()=>j(()=>import("./axis-CslnMUsg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url),"./demo/center.vue":()=>j(()=>import("./center-Bf-JpZPk.js"),__vite__mapDeps([14,1,2,3,4,12,5,6,7,8,11,15]),import.meta.url),"./demo/line.vue":()=>j(()=>import("./line-D31i9pca.js"),__vite__mapDeps([16,1,2,3,4,17]),import.meta.url),"./demo/original.vue":()=>j(()=>import("./original-DLna-lPZ.js"),__vite__mapDeps([18,1,2,3,4,19]),import.meta.url),"./demo/point.vue":()=>j(()=>import("./point-CDPPYnZL.js"),__vite__mapDeps([20,1,2,3,4,21]),import.meta.url),"./demo/polygon.vue":()=>j(()=>import("./polygon-DHB683pv.js"),__vite__mapDeps([22,1,2,3,4,23]),import.meta.url),"./demo/shortcutKey.vue":()=>j(()=>import("./shortcutKey-DMkOToLF.js"),__vite__mapDeps([24,1,2,3,4,11,10,25,26]),import.meta.url)});for(const n in m){const p=n.split("/").pop().replace(".vue",""),_=await m[n](),d=await g[n]();s.value[p]={component:De(d.default),code:_}}})();const y=T(window.innerWidth>=1280),f=()=>{y.value=window.innerWidth>=1280};return window.addEventListener("resize",f),Me(()=>{window.removeEventListener("resize",f)}),(m,g)=>(x(),O("div",$t,[C(h(ee),{style:{"margin-right":"30px"}},{default:k(()=>[F("div",Ct,[y.value?(x(),O(L,{key:0},[C(h(G),{vertical:""},{default:k(()=>[(x(!0),O(L,null,K(h(i),n=>(x(),O(L,{key:n[0]},[s.value[n[0]]?(x(),A(J,{key:0,id:n[0],title:n[1],code:s.value[n[0]].code},{default:k(()=>[(x(),A(X(s.value[n[0]].component)))]),_:2},1032,["id","title","code"])):(x(),A(h(Z),{key:1,id:n[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}),C(h(G),{vertical:""},{default:k(()=>[(x(!0),O(L,null,K(h(a),n=>(x(),O(L,{key:n[0]},[s.value[n[0]]?(x(),A(J,{key:0,id:n[0],title:n[1],code:s.value[n[0]].code},{default:k(()=>[(x(),A(X(s.value[n[0]].component)))]),_:2},1032,["id","title","code"])):(x(),A(h(Z),{key:1,id:n[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1})],64)):(x(),A(h(G),{key:1,style:{width:"100%"},vertical:""},{default:k(()=>[(x(),O(L,null,K(t,n=>(x(),O(L,{key:n[0]},[s.value[n[0]]?(x(),A(J,{key:0,id:n[0],title:n[1],code:s.value[n[0]].code},{default:k(()=>[(x(),A(X(s.value[n[0]].component)))]),_:2},1032,["id","title","code"])):(x(),A(h(Z),{key:1,id:n[0],sharp:!1},null,8,["id"]))],64))),64))]),_:1}))])]),_:1}),C(h(ee),{style:{width:"200px","flex-shrink":"0"}},{default:k(()=>[C(h(at),{type:"block",bound:100,"offset-target":".my-canvas-tools"},{default:k(()=>[(x(),O(L,null,K(t,n=>C(h(nt),{key:n[0],href:"#"+n[0],title:n[1]},null,8,["href","title"])),64))]),_:1})]),_:1})]))}}),Pt=We(Rt,[["__scopeId","data-v-62abee7b"]]);export{Pt as default};
