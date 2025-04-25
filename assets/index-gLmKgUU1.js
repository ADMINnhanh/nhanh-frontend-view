const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./china-7ilTCNzT.js","./index-DC-Oli1Y.js","./index-DbiFBVec.css","./index-D6O9H15n.js","./index-DWf4t1z4.css","./a-rmPoR321.js","./china-3oW4tdWa.css","./axis-DtmPv9hN.js","./InputNumber-CxcfRZG2.js","./use-locale-BBz27kmF.js","./Input-DVF8SMKW.js","./Suffix-CtSvFg_o.js","./Add-7l7lrZKN.js","./p-Cd2JF3E6.js","./ArrowUp-Buwc54so.js","./Flex-B_ncUajk.js","./text-BDVwawlj.js","./RadioButton-DWxDmwou.js","./axis-BV4wtepe.css","./center-C6L9EEHR.js","./custom-DSDJGeY4.js","./layer-BOQOZWPa.js","./line-ErTK4mi0.js","./Switch-BntVhvI9.js","./original-Bj0wPfI2.js","./point-CRs2yFU8.js","./polygon-CRhT8IHY.js","./shortcutKey-Bb3A-LIw.js","./Divider-ZaY6tD3d.js","./show-DFiY_n2K.js","./show-BVOiUnqZ.css","./text-dail2kod.js"])))=>i.map(i=>d[i]);
import{i as ke,f as me,g as we,h as T,j as A,k as z,d as N,l as Y,m as Re,n as C,p as J,q as ge,s as j,v as Ce,x as pe,y as ce,z as O,A as K,C as $e,D as G,E as Ee,F as W,G as Te,H as je,S as Pe,I as Se,J as D,K as Be,L as _e,M as ue,N as Ae,O as Oe,P as Le,Q as de,R as Ie,T as Ne,U as I,o as y,c as L,V as le,W as ze,X as B,w as b,a as R,u,Y as q,Z as Q,B as X,$ as Z,a0 as Ve,a1 as He,e as ee,t as fe,a2 as De,a3 as Me,a4 as We,a5 as Fe,a6 as Ke,a7 as qe,_ as be,a8 as Ue,a9 as Ge,aa as Ye,ab as Je,ac as _,ad as F,ae as he,af as te}from"./index-DC-Oli1Y.js";import{S as re}from"./Scrollbar-C52-8VUy.js";import{u as Qe,a as Xe}from"./use-collection-gpyW0AsG.js";import{g as Ze}from"./attribute-Cz32yFEB.js";import{t as et}from"./throttle-CW_HxEXt.js";function xe(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}let ve=!1;function tt(){if(ke&&window.CSS&&!ve&&(ve=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function ot(e,t){const l=me(we,null);return T(()=>e.hljs||(l==null?void 0:l.mergedHljsRef.value))}function nt(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function rt(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const lt=A("affix",[z("affixed",{position:"fixed"},[z("absolute-positioned",{position:"absolute"})])]),ie={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},it=pe(ie),at=N({name:"Affix",props:ie,setup(e){const{mergedClsPrefixRef:t}=Y(e);Re("-affix",lt,t);let l=null;const i=C(!1),a=C(!1),c=C(null),d=C(null),v=T(()=>a.value||i.value),w=T(()=>{var n,r;return(r=(n=e.triggerTop)!==null&&n!==void 0?n:e.offsetTop)!==null&&r!==void 0?r:e.top}),g=T(()=>{var n,r;return(r=(n=e.top)!==null&&n!==void 0?n:e.triggerTop)!==null&&r!==void 0?r:e.offsetTop}),E=T(()=>{var n,r;return(r=(n=e.bottom)!==null&&n!==void 0?n:e.triggerBottom)!==null&&r!==void 0?r:e.offsetBottom}),o=T(()=>{var n,r;return(r=(n=e.triggerBottom)!==null&&n!==void 0?n:e.offsetBottom)!==null&&r!==void 0?r:e.bottom}),m=C(null),h=()=>{const{target:n,listenTo:r}=e;n?l=n():r?l=xe(r):l=document,l&&(l.addEventListener("scroll",f),f())};function f(){Ce(s)}function s(){const{value:n}=m;if(!l||!n)return;const r=nt(l);if(v.value){d.value!==null&&r<d.value&&(i.value=!1,d.value=null),c.value!==null&&r>c.value&&(a.value=!1,c.value=null);return}const k=rt(l),$=n.getBoundingClientRect(),S=$.top-k.top,P=k.bottom-$.bottom,x=w.value,p=o.value;x!==void 0&&S<=x?(i.value=!0,d.value=r-(x-S)):(i.value=!1,d.value=null),p!==void 0&&P<=p?(a.value=!0,c.value=r+p-P):(a.value=!1,c.value=null)}return J(()=>{h()}),ge(()=>{l&&l.removeEventListener("scroll",f)}),{selfRef:m,affixed:v,mergedClsPrefix:t,mergedstyle:T(()=>{const n={};return i.value&&w.value!==void 0&&g.value!==void 0&&(n.top=`${g.value}px`),a.value&&o.value!==void 0&&E.value!==void 0&&(n.bottom=`${E.value}px`),n})}},render(){const{mergedClsPrefix:e}=this;return j("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),st=A("anchor",`
 position: relative;
`,[ce("block",`
 padding-left: var(--n-rail-width);
 `,[A("anchor-link",[O("+, >",[A("anchor-link",`
 margin-top: .5em;
 `)])]),A("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),ce("show-rail",[O(">",[A("anchor-link","padding-left: 0;")])])]),z("block",[A("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[z("active",`
 background-color: var(--n-link-color);
 `)])]),A("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),A("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[K("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[z("active",{backgroundColor:"var(--n-rail-color-active)"})])]),A("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[z("active",[O(">",[K("title",`
 color: var(--n-link-text-color-active);
 `)])]),K("title",`
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
 `,[O("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),O("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),U=$e("n-anchor"),ct={title:String,href:String},ut=N({name:"AnchorLink",props:ct,setup(e,{slots:t}){const l=C(null),i=me(U),a=G(e,"href"),c=Ee(()=>a.value&&a.value===i.activeHref.value);Qe(U,"collectedLinkHrefs",a),Xe(U,"titleEls",()=>l.value),W(c,v=>{v&&l.value&&i.updateBarPosition(l.value)});function d(){e.href!==void 0&&i.setActiveHref(e.href)}return()=>{var v;const{value:w}=i.mergedClsPrefix;return j("div",{class:[`${w}-anchor-link`,c.value&&`${w}-anchor-link--active`]},j("a",{ref:l,class:[`${w}-anchor-link__title`],href:e.href,title:Ze(e.title),onClick:d},e.title),(v=t.default)===null||v===void 0?void 0:v.call(t))}}});function dt(e,t){const{top:l,height:i}=e.getBoundingClientRect(),a=t instanceof HTMLElement?t.getBoundingClientRect().top:0;return{top:l-a,height:i}}const ae={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},ft=pe(ae),ht=N({name:"BaseAnchor",props:Object.assign(Object.assign({},ae),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const t=[],l=[],i=C(null),a=C(null),c=C(null),d=C(null),v=T(()=>e.type==="block"),w=T(()=>!v.value&&e.showRail);function g(){const{value:f}=c,{value:s}=a;f&&(f.style.transition="none"),s&&(s.style.transition="none"),l&&l.forEach(n=>{n.style.transition="none"}),Se(()=>{const{value:n}=c,{value:r}=a;n&&(n.offsetWidth,n.style.transition=""),r&&(r.offsetWidth,r.style.transition=""),l&&l.forEach(k=>{k.offsetWidth,k.style.transition=""})})}function E(f,s=!0){const{value:n}=c,{value:r}=a,{value:k}=d;if(!k||!n)return;s||(n.style.transition="none",r&&(r.style.transition="none"));const{offsetHeight:$,offsetWidth:S}=f,{top:P,left:x}=f.getBoundingClientRect(),{top:p,left:V}=k.getBoundingClientRect(),H=P-p,M=x-V;n.style.top=`${H}px`,n.style.height=`${$}px`,r&&(r.style.top=`${H}px`,r.style.height=`${$}px`,r.style.maxWidth=`${S+M}px`),n.offsetHeight,r&&r.offsetHeight,s||(n.style.transition="",r&&(r.style.transition=""))}const o=et(()=>{h(!0)},128);function m(f,s=!0){const n=/^#([^#]+)$/.exec(f);if(!n)return;const r=document.getElementById(n[1]);r&&(i.value=f,r.scrollIntoView(),s||g(),o())}function h(f=!0){var s;const n=[],r=xe((s=e.offsetTarget)!==null&&s!==void 0?s:document);t.forEach(x=>{const p=/#([^#]+)$/.exec(x);if(!p)return;const V=document.getElementById(p[1]);if(V&&r){const{top:H,height:M}=dt(V,r);n.push({top:H,height:M,href:x})}}),n.sort((x,p)=>x.top>p.top?1:(x.top===p.top&&x.height<p.height,-1));const k=i.value,{bound:$,ignoreGap:S}=e,P=n.reduce((x,p)=>p.top+p.height<0?S?p:x:p.top<=$?x===null?p:p.top===x.top?p.href===k?p:x:p.top>x.top?p:x:x,null);f||g(),P?i.value=P.href:i.value=null}return Te(U,{activeHref:i,mergedClsPrefix:G(e,"mergedClsPrefix"),updateBarPosition:E,setActiveHref:m,collectedLinkHrefs:t,titleEls:l}),J(()=>{document.addEventListener("scroll",o,!0),m(window.location.hash),h(!1)}),je(()=>{m(window.location.hash),h(!1)}),ge(()=>{document.removeEventListener("scroll",o,!0)}),W(i,f=>{if(f===null){const{value:s}=a;s&&!v.value&&(s.style.maxWidth="0")}}),{selfRef:d,barRef:c,slotRef:a,setActiveHref:m,activeHref:i,isBlockType:v,mergedShowRail:w}},render(){var e;const{mergedClsPrefix:t,mergedShowRail:l,isBlockType:i,$slots:a}=this,c=j("div",{class:[`${t}-anchor`,i&&`${t}-anchor--block`,l&&`${t}-anchor--show-rail`],ref:"selfRef"},l&&this.showBackground?j("div",{ref:"slotRef",class:`${t}-anchor-link-background`}):null,l?j("div",{class:`${t}-anchor-rail`},j("div",{ref:"barRef",class:[`${t}-anchor-rail__bar`,this.activeHref!==null&&`${t}-anchor-rail__bar--active`]})):null,(e=a.default)===null||e===void 0?void 0:e.call(a));return this.internalScrollable?j(Pe,null,{default:()=>c}):c}}),vt=Object.assign(Object.assign(Object.assign(Object.assign({},D.props),{affix:Boolean}),ie),ae),mt=N({name:"Anchor",props:vt,setup(e,{slots:t}){const{mergedClsPrefixRef:l,inlineThemeDisabled:i}=Y(e),a=D("Anchor","-anchor",st,Be,e,l),c=C(null),d=T(()=>{const{self:{railColor:w,linkColor:g,railColorActive:E,linkTextColor:o,linkTextColorHover:m,linkTextColorPressed:h,linkTextColorActive:f,linkFontSize:s,railWidth:n,linkPadding:r,borderRadius:k},common:{cubicBezierEaseInOut:$}}=a.value;return{"--n-link-border-radius":k,"--n-link-color":g,"--n-link-font-size":s,"--n-link-text-color":o,"--n-link-text-color-hover":m,"--n-link-text-color-active":f,"--n-link-text-color-pressed":h,"--n-link-padding":r,"--n-bezier":$,"--n-rail-color":w,"--n-rail-color-active":E,"--n-rail-width":n}}),v=i?_e("anchor",void 0,d,e):void 0;return{scrollTo(w){var g;(g=c.value)===null||g===void 0||g.setActiveHref(w)},renderAnchor:()=>(v==null||v.onRender(),j(ht,Object.assign({ref:c,style:i?void 0:d.value,class:v==null?void 0:v.themeClass.value},ue(e,ft),{mergedClsPrefix:l.value}),t))}},render(){return this.affix?j(at,Object.assign({},ue(this,it)),{default:this.renderAnchor}):this.renderAnchor()}}),gt=O([A("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[z("show-line-numbers",`
 display: flex;
 `),K("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),z("word-wrap",[O("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),O("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),O("[class^=hljs]",`
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
 }`]}]),pt=Object.assign(Object.assign({},D.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),_t=N({name:"Code",props:pt,setup(e,{slots:t}){const{internalNoHighlight:l}=e,{mergedClsPrefixRef:i,inlineThemeDisabled:a}=Y(),c=C(null),d=l?{value:void 0}:ot(e),v=(h,f,s)=>{const{value:n}=d;return!n||!(h&&n.getLanguage(h))?null:n.highlight(s?f.trim():f,{language:h}).value},w=T(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),g=()=>{if(t.default)return;const{value:h}=c;if(!h)return;const{language:f}=e,s=e.uri?window.decodeURIComponent(e.code):e.code;if(f){const r=v(f,s,e.trim);if(r!==null){if(e.inline)h.innerHTML=r;else{const k=h.querySelector(".__code__");k&&h.removeChild(k);const $=document.createElement("pre");$.className="__code__",$.innerHTML=r,h.appendChild($)}return}}if(e.inline){h.textContent=s;return}const n=h.querySelector(".__code__");if(n)n.textContent=s;else{const r=document.createElement("pre");r.className="__code__",r.textContent=s,h.innerHTML="",h.appendChild(r)}};J(g),W(G(e,"language"),g),W(G(e,"code"),g),l||W(d,g);const E=D("Code","-code",gt,Ae,e,i),o=T(()=>{const{common:{cubicBezierEaseInOut:h,fontFamilyMono:f},self:{textColor:s,fontSize:n,fontWeightStrong:r,lineNumberTextColor:k,"mono-3":$,"hue-1":S,"hue-2":P,"hue-3":x,"hue-4":p,"hue-5":V,"hue-5-2":H,"hue-6":M,"hue-6-2":ye}}=E.value,{internalFontSize:se}=e;return{"--n-font-size":se?`${se}px`:n,"--n-font-family":f,"--n-font-weight-strong":r,"--n-bezier":h,"--n-text-color":s,"--n-mono-3":$,"--n-hue-1":S,"--n-hue-2":P,"--n-hue-3":x,"--n-hue-4":p,"--n-hue-5":V,"--n-hue-5-2":H,"--n-hue-6":M,"--n-hue-6-2":ye,"--n-line-number-text-color":k}}),m=a?_e("code",T(()=>`${e.internalFontSize||"a"}`),o,e):void 0;return{mergedClsPrefix:i,codeRef:c,mergedShowLineNumbers:w,lineNumbers:T(()=>{let h=1;const f=[];let s=!1;for(const n of e.code)n===`
`?(s=!0,f.push(h++)):s=!1;return s||f.push(h++),f.join(`
`)}),cssVars:a?void 0:o,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){var e,t;const{mergedClsPrefix:l,wordWrap:i,mergedShowLineNumbers:a,onRender:c}=this;return c==null||c(),j("code",{class:[`${l}-code`,this.themeClass,i&&`${l}-code--word-wrap`,a&&`${l}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},a?j("pre",{class:`${l}-code__line-numbers`},this.lineNumbers):null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}}),bt=O([A("skeleton",`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),O("@keyframes skeleton-loading",`
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
 `)]),xt=Object.assign(Object.assign({},D.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),oe=N({name:"Skeleton",inheritAttrs:!1,props:xt,setup(e){tt();const{mergedClsPrefixRef:t}=Y(e),l=D("Skeleton","-skeleton",bt,Oe,e,t);return{mergedClsPrefix:t,style:T(()=>{var i,a;const c=l.value,{common:{cubicBezierEaseInOut:d}}=c,v=c.self,{color:w,colorEnd:g,borderRadius:E}=v;let o;const{circle:m,sharp:h,round:f,width:s,height:n,size:r,text:k,animated:$}=e;r!==void 0&&(o=v[Le("height",r)]);const S=m?(i=s??n)!==null&&i!==void 0?i:o:s,P=(a=m?s??n:n)!==null&&a!==void 0?a:o;return{display:k?"inline-block":"",verticalAlign:k?"-0.125em":"",borderRadius:m?"50%":f?"4096px":h?"":E,width:typeof S=="number"?de(S):S,height:typeof P=="number"?de(P):P,animation:$?"":"none","--n-bezier":d,"--n-color-start":w,"--n-color-end":g}})}},render(){const{repeat:e,style:t,mergedClsPrefix:l,$attrs:i}=this,a=j("div",Ie({class:`${l}-skeleton`,style:t},i));return e>1?j(I,null,Ne(e,null).map(c=>[a,`
`])):a}}),yt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},kt=le("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M160 368L32 256l128-112"},null,-1),wt=le("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 368l128-112l-128-112"},null,-1),Rt=[kt,wt],Ct=N({name:"CodeOutline",render:function(t,l){return y(),L("svg",yt,Rt)}}),$t=N({__name:"card",props:{code:{}},setup(e){const t=C(!1),l=C(!1),i=C(),a=C();return J(()=>{i.value=function(c){return()=>{l.value=!l.value,c()}}(ze(a.value.$el))}),(c,d)=>(y(),B(u(qe),{ref_key:"cardRef",ref:a},{"header-extra":b(()=>[R(u(q),null,{default:b(()=>[R(u(Q),{trigger:"hover"},{trigger:b(()=>[R(u(X),{onClick:i.value,text:""},{icon:b(()=>[R(u(Z),{component:l.value?u(Ve):u(He)},null,8,["component"])]),_:1},8,["onClick"])]),default:b(()=>[ee(" "+fe(l.value?"退出全屏":"全屏"),1)]),_:1}),R(u(Q),{trigger:"hover"},{trigger:b(()=>[R(u(X),{onClick:d[0]||(d[0]=v=>u(De).success("复制成功").error("复制失败").run(u(Me)(c.code))),text:""},{icon:b(()=>[R(u(Z),{component:u(We)},null,8,["component"])]),_:1})]),default:b(()=>[ee(" 复制代码 ")]),_:1}),R(u(Q),{trigger:"hover"},{trigger:b(()=>[R(u(X),{onClick:d[1]||(d[1]=v=>t.value=!t.value),text:""},{icon:b(()=>[R(u(Z),{component:u(Ct)},null,8,["component"])]),_:1})]),default:b(()=>[ee(" "+fe(t.value?"收起代码":"显示代码"),1)]),_:1})]),_:1})]),default:b(()=>[Fe(c.$slots,"default",{},void 0,!0),R(u(Ke),{show:t.value},{default:b(()=>[R(u(re),{"x-scrollable":"",style:{"max-height":"50vh","margin-top":"10px"}},{default:b(()=>[R(u(_t),{code:c.code,language:"javascript","show-line-numbers":""},null,8,["code"])]),_:1})]),_:1},8,["show"])]),_:3},512))}}),ne=be($t,[["__scopeId","data-v-99943e2e"]]),Et={class:"list-box"},Tt=N({__name:"index",setup(e){const t=location.hash.replace(/(#[^/]+)*$/,"#"),l=[["china","中国地图"],["original","仅需初始化 _Canvas"],["center","中心点"],["shortcutKey","快捷键"],["axis","坐标轴"],["text","文字"],["point","点"],["line","线"],["polygon","面"],["custom","自定义绘制"],["layer","图层 & 层级"],["show","显示条件"]];function i(g){const E=[],o=[];for(let m=0;m<g.length;m++)m%2===0?o.push(g[m]):E.push(g[m]);return[o,E]}const[a,c]=i(l),d=C({});(async function(){const g=Object.assign({"./demo/China/china.vue":()=>_(()=>import("./china-DHVEilFp.js"),[],import.meta.url).then(o=>o.default),"./demo/axis.vue":()=>_(()=>import("./axis-WDJTMCGU.js"),[],import.meta.url).then(o=>o.default),"./demo/center.vue":()=>_(()=>import("./center-DWUfmm2h.js"),[],import.meta.url).then(o=>o.default),"./demo/custom.vue":()=>_(()=>import("./custom-CkO5T1xM.js"),[],import.meta.url).then(o=>o.default),"./demo/layer.vue":()=>_(()=>import("./layer-LHaf1vQi.js"),[],import.meta.url).then(o=>o.default),"./demo/line.vue":()=>_(()=>import("./line-BY5vlzFf.js"),[],import.meta.url).then(o=>o.default),"./demo/original.vue":()=>_(()=>import("./original-CtkyrDj4.js"),[],import.meta.url).then(o=>o.default),"./demo/point.vue":()=>_(()=>import("./point-CriQXmgt.js"),[],import.meta.url).then(o=>o.default),"./demo/polygon.vue":()=>_(()=>import("./polygon-CknUcNA5.js"),[],import.meta.url).then(o=>o.default),"./demo/shortcutKey.vue":()=>_(()=>import("./shortcutKey-Bin1XfvE.js"),[],import.meta.url).then(o=>o.default),"./demo/show.vue":()=>_(()=>import("./show-BomJ80cO.js"),[],import.meta.url).then(o=>o.default),"./demo/text.vue":()=>_(()=>import("./text-V9GF_wXp.js"),[],import.meta.url).then(o=>o.default)}),E=Object.assign({"./demo/China/china.vue":()=>_(()=>import("./china-7ilTCNzT.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),"./demo/axis.vue":()=>_(()=>import("./axis-DtmPv9hN.js"),__vite__mapDeps([7,1,2,3,4,8,9,10,11,12,13,14,15,16,17,18]),import.meta.url),"./demo/center.vue":()=>_(()=>import("./center-C6L9EEHR.js"),__vite__mapDeps([19,1,2,3,4,17,8,9,10,11,12,16]),import.meta.url),"./demo/custom.vue":()=>_(()=>import("./custom-DSDJGeY4.js"),__vite__mapDeps([20,1,2,3,4]),import.meta.url),"./demo/layer.vue":()=>_(()=>import("./layer-BOQOZWPa.js"),__vite__mapDeps([21,1,2,3,4,16,13]),import.meta.url),"./demo/line.vue":()=>_(()=>import("./line-ErTK4mi0.js"),__vite__mapDeps([22,1,2,3,4,23]),import.meta.url),"./demo/original.vue":()=>_(()=>import("./original-Bj0wPfI2.js"),__vite__mapDeps([24,1,2,3,4,5]),import.meta.url),"./demo/point.vue":()=>_(()=>import("./point-CRs2yFU8.js"),__vite__mapDeps([25,1,2,3,4,23]),import.meta.url),"./demo/polygon.vue":()=>_(()=>import("./polygon-CRhT8IHY.js"),__vite__mapDeps([26,1,2,3,4,23]),import.meta.url),"./demo/shortcutKey.vue":()=>_(()=>import("./shortcutKey-Bb3A-LIw.js"),__vite__mapDeps([27,1,2,3,4,16,15,28]),import.meta.url),"./demo/show.vue":()=>_(()=>import("./show-DFiY_n2K.js"),__vite__mapDeps([29,1,2,3,4,16,23,30]),import.meta.url),"./demo/text.vue":()=>_(()=>import("./text-dail2kod.js"),__vite__mapDeps([31,1,2,3,4,23]),import.meta.url)});for(const o in g){const m=o.split("/").pop().replace(".vue",""),h=await g[o](),f=await E[o]();d.value[m]={component:Ue(f.default),code:h}}})();const v=C(window.innerWidth>=1280),w=()=>{v.value=window.innerWidth>=1280};return window.addEventListener("resize",w),Ge(()=>{window.removeEventListener("resize",w)}),(g,E)=>(y(),L("div",{id:"/canvas/_Canvas",class:Je(["my-canvas-tools",u(he).isMobileStyle&&"mobile"])},[R(u(re),null,{default:b(()=>[le("div",Et,[v.value?(y(),L(I,{key:0},[R(u(q),{vertical:""},{default:b(()=>[(y(!0),L(I,null,F(u(a),o=>(y(),L(I,{key:o[0]},[d.value[o[0]]?(y(),B(ne,{key:0,id:o[0],title:o[1],code:d.value[o[0]].code},{default:b(()=>[(y(),B(te(d.value[o[0]].component)))]),_:2},1032,["id","title","code"])):(y(),B(u(oe),{key:1,id:o[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}),R(u(q),{vertical:""},{default:b(()=>[(y(!0),L(I,null,F(u(c),o=>(y(),L(I,{key:o[0]},[d.value[o[0]]?(y(),B(ne,{key:0,id:o[0],title:o[1],code:d.value[o[0]].code},{default:b(()=>[(y(),B(te(d.value[o[0]].component)))]),_:2},1032,["id","title","code"])):(y(),B(u(oe),{key:1,id:o[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1})],64)):(y(),B(u(q),{key:1,style:{width:"100%"},vertical:""},{default:b(()=>[(y(),L(I,null,F(l,o=>(y(),L(I,{key:o[0]},[d.value[o[0]]?(y(),B(ne,{key:0,id:o[0],title:o[1],code:d.value[o[0]].code},{default:b(()=>[(y(),B(te(d.value[o[0]].component)))]),_:2},1032,["id","title","code"])):(y(),B(u(oe),{key:1,id:o[0],sharp:!1},null,8,["id"]))],64))),64))]),_:1}))])]),_:1}),u(he).isMobileStyle?Ye("",!0):(y(),B(u(re),{key:0},{default:b(()=>[R(u(mt),{type:"block",bound:100,"ignore-gap":"","offset-target":".my-canvas-tools"},{default:b(()=>[(y(),L(I,null,F(l,o=>R(u(ut),{key:o[0],href:u(t)+o[0],title:o[1]},null,8,["href","title"])),64))]),_:1})]),_:1}))],2))}}),Ot=be(Tt,[["__scopeId","data-v-637c5a23"]]);export{Ot as default};
