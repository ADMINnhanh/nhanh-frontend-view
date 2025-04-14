const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./axis-B5YyV77R.js","./index-BoTCiOhW.js","./index-Cfj9n6rm.css","./index-BsbHnWwm.js","./index-aLqCqA5N.css","./InputNumber-DqXzBvEw.js","./Suffix-RETq5xYq.js","./Input-DC6W2ndR.js","./Add-DjgjE_63.js","./p-Kw_BIWOF.js","./ArrowUp-DlHStPw6.js","./Flex-BquRCxOf.js","./text-gWb4Knae.js","./RadioButton-nXw87zFh.js","./axis-0mTtjct4.css","./center-COcxfxko.js","./center-BkiLei1l.css","./custom-BdK6s2RN.js","./custom-C147e9Rq.css","./layer-DiWdITER.js","./layer-DnHV_uVN.css","./line-6FSdNF8w.js","./line-CxZDCrT2.css","./original-MEfq6wcB.js","./original-DNMErwDO.css","./point-Bwxv3S2x.js","./point-DdIinxW8.css","./polygon-wrWobR43.js","./polygon-DTFPluSY.css","./shortcutKey-sqRTlehV.js","./Divider-hWg9A3WT.js","./shortcutKey-DDnMfobB.css"])))=>i.map(i=>d[i]);
import{ao as be,G as he,ap as xe,x as T,f as S,i as I,d as N,k as Q,l as ye,E,O as te,aq as ve,n as j,ar as ke,F as me,g as le,h as L,j as q,C as we,K as Y,as as $e,M as W,p as Ce,at as Re,au as Te,av as Ee,s as D,aw as je,z as ge,ax as ie,ay as Be,az as Pe,y as Se,aA as ae,$ as Ae,aB as Oe,Y as z,o as b,c as O,Q as F,a1 as A,w as x,a as R,u as v,Z as G,aC as se,B as ce,a9 as Le,aa as Ne,a0 as ue,e as de,t as ze,aD as Ie,an as He,ac as Ve,aE as De,X as Me,aF as w,ad as K,aG as X,_ as We}from"./index-BoTCiOhW.js";import{S as ee}from"./Scrollbar-CEG23Qmm.js";import{a as Fe,b as Ke}from"./use-collection-7kFymj4E.js";import{g as qe}from"./attribute-Cz32yFEB.js";import{t as Ge}from"./throttle-DkT067YB.js";function pe(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}let fe=!1;function Ue(){if(be&&window.CSS&&!fe&&(fe=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function Ye(e,t){const l=he(xe,null);return T(()=>e.hljs||(l==null?void 0:l.mergedHljsRef.value))}function Qe(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function Xe(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const Ze=S("affix",[I("affixed",{position:"fixed"},[I("absolute-positioned",{position:"absolute"})])]),oe={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},Je=me(oe),et=N({name:"Affix",props:oe,setup(e){const{mergedClsPrefixRef:t}=Q(e);ye("-affix",Ze,t);let l=null;const i=E(!1),a=E(!1),u=E(null),f=E(null),m=T(()=>a.value||i.value),k=T(()=>{var n,r;return(r=(n=e.triggerTop)!==null&&n!==void 0?n:e.offsetTop)!==null&&r!==void 0?r:e.top}),g=T(()=>{var n,r;return(r=(n=e.top)!==null&&n!==void 0?n:e.triggerTop)!==null&&r!==void 0?r:e.offsetTop}),C=T(()=>{var n,r;return(r=(n=e.bottom)!==null&&n!==void 0?n:e.triggerBottom)!==null&&r!==void 0?r:e.offsetBottom}),o=T(()=>{var n,r;return(r=(n=e.triggerBottom)!==null&&n!==void 0?n:e.offsetBottom)!==null&&r!==void 0?r:e.bottom}),h=E(null),d=()=>{const{target:n,listenTo:r}=e;n?l=n():r?l=pe(r):l=document,l&&(l.addEventListener("scroll",c),c())};function c(){ke(s)}function s(){const{value:n}=h;if(!l||!n)return;const r=Qe(l);if(m.value){f.value!==null&&r<f.value&&(i.value=!1,f.value=null),u.value!==null&&r>u.value&&(a.value=!1,u.value=null);return}const y=Xe(l),$=n.getBoundingClientRect(),P=$.top-y.top,B=y.bottom-$.bottom,_=k.value,p=o.value;_!==void 0&&P<=_?(i.value=!0,f.value=r-(_-P)):(i.value=!1,f.value=null),p!==void 0&&B<=p?(a.value=!0,u.value=r+p-B):(a.value=!1,u.value=null)}return te(()=>{d()}),ve(()=>{l&&l.removeEventListener("scroll",c)}),{selfRef:h,affixed:m,mergedClsPrefix:t,mergedstyle:T(()=>{const n={};return i.value&&k.value!==void 0&&g.value!==void 0&&(n.top=`${g.value}px`),a.value&&o.value!==void 0&&C.value!==void 0&&(n.bottom=`${C.value}px`),n})}},render(){const{mergedClsPrefix:e}=this;return j("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),tt=S("anchor",`
 position: relative;
`,[le("block",`
 padding-left: var(--n-rail-width);
 `,[S("anchor-link",[L("+, >",[S("anchor-link",`
 margin-top: .5em;
 `)])]),S("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),le("show-rail",[L(">",[S("anchor-link","padding-left: 0;")])])]),I("block",[S("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[I("active",`
 background-color: var(--n-link-color);
 `)])]),S("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),S("anchor-rail",`
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
 `,[I("active",{backgroundColor:"var(--n-rail-color-active)"})])]),S("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[I("active",[L(">",[q("title",`
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
 `,[L("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),L("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),U=we("n-anchor"),ot={title:String,href:String},nt=N({name:"AnchorLink",props:ot,setup(e,{slots:t}){const l=E(null),i=he(U),a=Y(e,"href"),u=$e(()=>a.value&&a.value===i.activeHref.value);Fe(U,"collectedLinkHrefs",a),Ke(U,"titleEls",()=>l.value),W(u,m=>{m&&l.value&&i.updateBarPosition(l.value)});function f(){e.href!==void 0&&i.setActiveHref(e.href)}return()=>{var m;const{value:k}=i.mergedClsPrefix;return j("div",{class:[`${k}-anchor-link`,u.value&&`${k}-anchor-link--active`]},j("a",{ref:l,class:[`${k}-anchor-link__title`],href:e.href,title:qe(e.title),onClick:f},e.title),(m=t.default)===null||m===void 0?void 0:m.call(t))}}});function rt(e,t){const{top:l,height:i}=e.getBoundingClientRect(),a=t instanceof HTMLElement?t.getBoundingClientRect().top:0;return{top:l-a,height:i}}const ne={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},lt=me(ne),it=N({name:"BaseAnchor",props:Object.assign(Object.assign({},ne),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const t=[],l=[],i=E(null),a=E(null),u=E(null),f=E(null),m=T(()=>e.type==="block"),k=T(()=>!m.value&&e.showRail);function g(){const{value:c}=u,{value:s}=a;c&&(c.style.transition="none"),s&&(s.style.transition="none"),l&&l.forEach(n=>{n.style.transition="none"}),Ee(()=>{const{value:n}=u,{value:r}=a;n&&(n.offsetWidth,n.style.transition=""),r&&(r.offsetWidth,r.style.transition=""),l&&l.forEach(y=>{y.offsetWidth,y.style.transition=""})})}function C(c,s=!0){const{value:n}=u,{value:r}=a,{value:y}=f;if(!y||!n)return;s||(n.style.transition="none",r&&(r.style.transition="none"));const{offsetHeight:$,offsetWidth:P}=c,{top:B,left:_}=c.getBoundingClientRect(),{top:p,left:H}=y.getBoundingClientRect(),V=B-p,M=_-H;n.style.top=`${V}px`,n.style.height=`${$}px`,r&&(r.style.top=`${V}px`,r.style.height=`${$}px`,r.style.maxWidth=`${P+M}px`),n.offsetHeight,r&&r.offsetHeight,s||(n.style.transition="",r&&(r.style.transition=""))}const o=Ge(()=>{d(!0)},128);function h(c,s=!0){const n=/^#([^#]+)$/.exec(c);if(!n)return;const r=document.getElementById(n[1]);r&&(i.value=c,r.scrollIntoView(),s||g(),o())}function d(c=!0){var s;const n=[],r=pe((s=e.offsetTarget)!==null&&s!==void 0?s:document);t.forEach(_=>{const p=/#([^#]+)$/.exec(_);if(!p)return;const H=document.getElementById(p[1]);if(H&&r){const{top:V,height:M}=rt(H,r);n.push({top:V,height:M,href:_})}}),n.sort((_,p)=>_.top>p.top?1:(_.top===p.top&&_.height<p.height,-1));const y=i.value,{bound:$,ignoreGap:P}=e,B=n.reduce((_,p)=>p.top+p.height<0?P?p:_:p.top<=$?_===null?p:p.top===_.top?p.href===y?p:_:p.top>_.top?p:_:_,null);c||g(),B?i.value=B.href:i.value=null}return Ce(U,{activeHref:i,mergedClsPrefix:Y(e,"mergedClsPrefix"),updateBarPosition:C,setActiveHref:h,collectedLinkHrefs:t,titleEls:l}),te(()=>{document.addEventListener("scroll",o,!0),h(window.location.hash),d(!1)}),Re(()=>{h(window.location.hash),d(!1)}),ve(()=>{document.removeEventListener("scroll",o,!0)}),W(i,c=>{if(c===null){const{value:s}=a;s&&!m.value&&(s.style.maxWidth="0")}}),{selfRef:f,barRef:u,slotRef:a,setActiveHref:h,activeHref:i,isBlockType:m,mergedShowRail:k}},render(){var e;const{mergedClsPrefix:t,mergedShowRail:l,isBlockType:i,$slots:a}=this,u=j("div",{class:[`${t}-anchor`,i&&`${t}-anchor--block`,l&&`${t}-anchor--show-rail`],ref:"selfRef"},l&&this.showBackground?j("div",{ref:"slotRef",class:`${t}-anchor-link-background`}):null,l?j("div",{class:`${t}-anchor-rail`},j("div",{ref:"barRef",class:[`${t}-anchor-rail__bar`,this.activeHref!==null&&`${t}-anchor-rail__bar--active`]})):null,(e=a.default)===null||e===void 0?void 0:e.call(a));return this.internalScrollable?j(Te,null,{default:()=>u}):u}}),at=Object.assign(Object.assign(Object.assign(Object.assign({},D.props),{affix:Boolean}),oe),ne),st=N({name:"Anchor",props:at,setup(e,{slots:t}){const{mergedClsPrefixRef:l,inlineThemeDisabled:i}=Q(e),a=D("Anchor","-anchor",tt,je,e,l),u=E(null),f=T(()=>{const{self:{railColor:k,linkColor:g,railColorActive:C,linkTextColor:o,linkTextColorHover:h,linkTextColorPressed:d,linkTextColorActive:c,linkFontSize:s,railWidth:n,linkPadding:r,borderRadius:y},common:{cubicBezierEaseInOut:$}}=a.value;return{"--n-link-border-radius":y,"--n-link-color":g,"--n-link-font-size":s,"--n-link-text-color":o,"--n-link-text-color-hover":h,"--n-link-text-color-active":c,"--n-link-text-color-pressed":d,"--n-link-padding":r,"--n-bezier":$,"--n-rail-color":k,"--n-rail-color-active":C,"--n-rail-width":n}}),m=i?ge("anchor",void 0,f,e):void 0;return{scrollTo(k){var g;(g=u.value)===null||g===void 0||g.setActiveHref(k)},renderAnchor:()=>(m==null||m.onRender(),j(it,Object.assign({ref:u,style:i?void 0:f.value,class:m==null?void 0:m.themeClass.value},ie(e,lt),{mergedClsPrefix:l.value}),t))}},render(){return this.affix?j(et,Object.assign({},ie(this,Je)),{default:this.renderAnchor}):this.renderAnchor()}}),ct=L([S("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[I("show-line-numbers",`
 display: flex;
 `),q("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),I("word-wrap",[L("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),L("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),L("[class^=hljs]",`
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
 }`]}]),ut=Object.assign(Object.assign({},D.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),dt=N({name:"Code",props:ut,setup(e,{slots:t}){const{internalNoHighlight:l}=e,{mergedClsPrefixRef:i,inlineThemeDisabled:a}=Q(),u=E(null),f=l?{value:void 0}:Ye(e),m=(d,c,s)=>{const{value:n}=f;return!n||!(d&&n.getLanguage(d))?null:n.highlight(s?c.trim():c,{language:d}).value},k=T(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),g=()=>{if(t.default)return;const{value:d}=u;if(!d)return;const{language:c}=e,s=e.uri?window.decodeURIComponent(e.code):e.code;if(c){const r=m(c,s,e.trim);if(r!==null){if(e.inline)d.innerHTML=r;else{const y=d.querySelector(".__code__");y&&d.removeChild(y);const $=document.createElement("pre");$.className="__code__",$.innerHTML=r,d.appendChild($)}return}}if(e.inline){d.textContent=s;return}const n=d.querySelector(".__code__");if(n)n.textContent=s;else{const r=document.createElement("pre");r.className="__code__",r.textContent=s,d.innerHTML="",d.appendChild(r)}};te(g),W(Y(e,"language"),g),W(Y(e,"code"),g),l||W(f,g);const C=D("Code","-code",ct,Be,e,i),o=T(()=>{const{common:{cubicBezierEaseInOut:d,fontFamilyMono:c},self:{textColor:s,fontSize:n,fontWeightStrong:r,lineNumberTextColor:y,"mono-3":$,"hue-1":P,"hue-2":B,"hue-3":_,"hue-4":p,"hue-5":H,"hue-5-2":V,"hue-6":M,"hue-6-2":_e}}=C.value,{internalFontSize:re}=e;return{"--n-font-size":re?`${re}px`:n,"--n-font-family":c,"--n-font-weight-strong":r,"--n-bezier":d,"--n-text-color":s,"--n-mono-3":$,"--n-hue-1":P,"--n-hue-2":B,"--n-hue-3":_,"--n-hue-4":p,"--n-hue-5":H,"--n-hue-5-2":V,"--n-hue-6":M,"--n-hue-6-2":_e,"--n-line-number-text-color":y}}),h=a?ge("code",T(()=>`${e.internalFontSize||"a"}`),o,e):void 0;return{mergedClsPrefix:i,codeRef:u,mergedShowLineNumbers:k,lineNumbers:T(()=>{let d=1;const c=[];let s=!1;for(const n of e.code)n===`
`?(s=!0,c.push(d++)):s=!1;return s||c.push(d++),c.join(`
`)}),cssVars:a?void 0:o,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){var e,t;const{mergedClsPrefix:l,wordWrap:i,mergedShowLineNumbers:a,onRender:u}=this;return u==null||u(),j("code",{class:[`${l}-code`,this.themeClass,i&&`${l}-code--word-wrap`,a&&`${l}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},a?j("pre",{class:`${l}-code__line-numbers`},this.lineNumbers):null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}}),ft=L([S("skeleton",`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),L("@keyframes skeleton-loading",`
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
 `)]),ht=Object.assign(Object.assign({},D.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),Z=N({name:"Skeleton",inheritAttrs:!1,props:ht,setup(e){Ue();const{mergedClsPrefixRef:t}=Q(e),l=D("Skeleton","-skeleton",ft,Pe,e,t);return{mergedClsPrefix:t,style:T(()=>{var i,a;const u=l.value,{common:{cubicBezierEaseInOut:f}}=u,m=u.self,{color:k,colorEnd:g,borderRadius:C}=m;let o;const{circle:h,sharp:d,round:c,width:s,height:n,size:r,text:y,animated:$}=e;r!==void 0&&(o=m[Se("height",r)]);const P=h?(i=s??n)!==null&&i!==void 0?i:o:s,B=(a=h?s??n:n)!==null&&a!==void 0?a:o;return{display:y?"inline-block":"",verticalAlign:y?"-0.125em":"",borderRadius:h?"50%":c?"4096px":d?"":C,width:typeof P=="number"?ae(P):P,height:typeof B=="number"?ae(B):B,animation:$?"":"none","--n-bezier":f,"--n-color-start":k,"--n-color-end":g}})}},render(){const{repeat:e,style:t,mergedClsPrefix:l,$attrs:i}=this,a=j("div",Ae({class:`${l}-skeleton`,style:t},i));return e>1?j(z,null,Oe(e,null).map(u=>[a,`
`])):a}}),vt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},mt=F("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M160 368L32 256l128-112"},null,-1),gt=F("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 368l128-112l-128-112"},null,-1),pt=[mt,gt],_t=N({name:"CodeOutline",render:function(t,l){return b(),O("svg",vt,pt)}}),bt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},xt=F("rect",{x:"128",y:"128",width:"336",height:"336",rx:"57",ry:"57",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),yt=F("path",{d:"M383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),kt=[xt,yt],wt=N({name:"CopyOutline",render:function(t,l){return b(),O("svg",bt,kt)}}),J=N({__name:"card",props:{code:{}},setup(e){const t=E(!1);return(l,i)=>(b(),A(v(Ve),null,{"header-extra":x(()=>[R(v(G),null,{default:x(()=>[R(v(se),{trigger:"hover"},{trigger:x(()=>[R(v(ce),{onClick:i[0]||(i[0]=a=>v(Le).success("复制成功").error("复制失败").run(v(Ne)(l.code))),text:""},{icon:x(()=>[R(v(ue),{component:v(wt)},null,8,["component"])]),_:1})]),default:x(()=>[de(" 复制代码 ")]),_:1}),R(v(se),{trigger:"hover"},{trigger:x(()=>[R(v(ce),{onClick:i[1]||(i[1]=a=>t.value=!t.value),text:""},{icon:x(()=>[R(v(ue),{component:v(_t)},null,8,["component"])]),_:1})]),default:x(()=>[de(" "+ze(t.value?"收起代码":"显示代码"),1)]),_:1})]),_:1})]),footer:x(()=>[R(v(Ie),{show:t.value},{default:x(()=>[R(v(ee),{"x-scrollable":"",style:{"max-height":"50vh"}},{default:x(()=>[R(v(dt),{code:l.code,language:"javascript","show-line-numbers":""},null,8,["code"])]),_:1})]),_:1},8,["show"])]),default:x(()=>[He(l.$slots,"default")]),_:3}))}}),$t={class:"my-canvas-tools"},Ct={class:"list-box"},Rt=N({__name:"index",setup(e){const t=location.hash.replace(/(#[^/]+)*$/,"#"),l=[["original","仅需初始化 _Canvas"],["center","中心点"],["shortcutKey","快捷键"],["axis","坐标轴"],["point","点"],["line","线"],["polygon","面"],["custom","自定义绘制"],["layer","图层 & 层级"]];function i(g){const C=[],o=[];for(let h=0;h<g.length;h++)h%2===0?o.push(g[h]):C.push(g[h]);return[o,C]}const[a,u]=i(l),f=E({});(async function(){const g=Object.assign({"./demo/axis.vue":()=>w(()=>import("./axis-D_aZDWNF.js"),[],import.meta.url).then(o=>o.default),"./demo/center.vue":()=>w(()=>import("./center-DhH0efib.js"),[],import.meta.url).then(o=>o.default),"./demo/custom.vue":()=>w(()=>import("./custom-CIoioDwv.js"),[],import.meta.url).then(o=>o.default),"./demo/layer.vue":()=>w(()=>import("./layer-BOxtljkB.js"),[],import.meta.url).then(o=>o.default),"./demo/line.vue":()=>w(()=>import("./line-C1P10bpj.js"),[],import.meta.url).then(o=>o.default),"./demo/original.vue":()=>w(()=>import("./original-CaSuBOch.js"),[],import.meta.url).then(o=>o.default),"./demo/point.vue":()=>w(()=>import("./point-CLbj-SnP.js"),[],import.meta.url).then(o=>o.default),"./demo/polygon.vue":()=>w(()=>import("./polygon-Bh9xeM0c.js"),[],import.meta.url).then(o=>o.default),"./demo/shortcutKey.vue":()=>w(()=>import("./shortcutKey-yIbEqP5a.js"),[],import.meta.url).then(o=>o.default)}),C=Object.assign({"./demo/axis.vue":()=>w(()=>import("./axis-B5YyV77R.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url),"./demo/center.vue":()=>w(()=>import("./center-COcxfxko.js"),__vite__mapDeps([15,1,2,3,4,13,5,6,7,8,12,16]),import.meta.url),"./demo/custom.vue":()=>w(()=>import("./custom-BdK6s2RN.js"),__vite__mapDeps([17,1,2,3,4,18]),import.meta.url),"./demo/layer.vue":()=>w(()=>import("./layer-DiWdITER.js"),__vite__mapDeps([19,1,2,3,4,12,9,20]),import.meta.url),"./demo/line.vue":()=>w(()=>import("./line-6FSdNF8w.js"),__vite__mapDeps([21,1,2,3,4,22]),import.meta.url),"./demo/original.vue":()=>w(()=>import("./original-MEfq6wcB.js"),__vite__mapDeps([23,1,2,3,4,24]),import.meta.url),"./demo/point.vue":()=>w(()=>import("./point-Bwxv3S2x.js"),__vite__mapDeps([25,1,2,3,4,26]),import.meta.url),"./demo/polygon.vue":()=>w(()=>import("./polygon-wrWobR43.js"),__vite__mapDeps([27,1,2,3,4,28]),import.meta.url),"./demo/shortcutKey.vue":()=>w(()=>import("./shortcutKey-sqRTlehV.js"),__vite__mapDeps([29,1,2,3,4,12,11,30,31]),import.meta.url)});for(const o in g){const h=o.split("/").pop().replace(".vue",""),d=await g[o](),c=await C[o]();f.value[h]={component:De(c.default),code:d}}})();const m=E(window.innerWidth>=1280),k=()=>{m.value=window.innerWidth>=1280};return window.addEventListener("resize",k),Me(()=>{window.removeEventListener("resize",k)}),(g,C)=>(b(),O("div",$t,[R(v(ee),{style:{"margin-right":"30px"}},{default:x(()=>[F("div",Ct,[m.value?(b(),O(z,{key:0},[R(v(G),{vertical:""},{default:x(()=>[(b(!0),O(z,null,K(v(a),o=>(b(),O(z,{key:o[0]},[f.value[o[0]]?(b(),A(J,{key:0,id:o[0],title:o[1],code:f.value[o[0]].code},{default:x(()=>[(b(),A(X(f.value[o[0]].component)))]),_:2},1032,["id","title","code"])):(b(),A(v(Z),{key:1,id:o[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}),R(v(G),{vertical:""},{default:x(()=>[(b(!0),O(z,null,K(v(u),o=>(b(),O(z,{key:o[0]},[f.value[o[0]]?(b(),A(J,{key:0,id:o[0],title:o[1],code:f.value[o[0]].code},{default:x(()=>[(b(),A(X(f.value[o[0]].component)))]),_:2},1032,["id","title","code"])):(b(),A(v(Z),{key:1,id:o[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1})],64)):(b(),A(v(G),{key:1,style:{width:"100%"},vertical:""},{default:x(()=>[(b(),O(z,null,K(l,o=>(b(),O(z,{key:o[0]},[f.value[o[0]]?(b(),A(J,{key:0,id:o[0],title:o[1],code:f.value[o[0]].code},{default:x(()=>[(b(),A(X(f.value[o[0]].component)))]),_:2},1032,["id","title","code"])):(b(),A(v(Z),{key:1,id:o[0],sharp:!1},null,8,["id"]))],64))),64))]),_:1}))])]),_:1}),R(v(ee),{style:{width:"200px","flex-shrink":"0"}},{default:x(()=>[R(v(st),{type:"block",bound:100,"ignore-gap":"","offset-target":".my-canvas-tools"},{default:x(()=>[(b(),O(z,null,K(l,o=>R(v(nt),{key:o[0],href:v(t)+o[0],title:o[1]},null,8,["href","title"])),64))]),_:1})]),_:1})]))}}),St=We(Rt,[["__scopeId","data-v-68c70de1"]]);export{St as default};
