const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./axis-7UXMGICr.js","./index-CM8YAFq6.js","./index-CwuHvz6W.css","./index-39NccdRp.js","./index-DWf4t1z4.css","./InputNumber-BjfqsFIi.js","./Suffix-DzqnPYbm.js","./Input-DPA3AIPm.js","./Add-BGf4kbGY.js","./p-BBFnwITn.js","./ArrowUp-Bgk1FKUS.js","./Flex-BbcawNaa.js","./text-tt6bHQMJ.js","./RadioButton-dwVe0ZIG.js","./axis-0mTtjct4.css","./center-D1HbSvhW.js","./center-BkiLei1l.css","./custom-Cci2AOA_.js","./custom-C147e9Rq.css","./layer-K33sr6On.js","./layer-wu9zz0eR.css","./line-DQxbx8MH.js","./Switch-Cjcztovs.js","./line-Cptl5ODW.css","./original-BxnWBcOW.js","./a-BsDMU6bb.js","./original-wHgele1Q.css","./point-CMG6nGj5.js","./point-DYGcw2a4.css","./polygon-BbDQOCJ0.js","./polygon-D2uYOcTk.css","./shortcutKey-Cmcm-33b.js","./Divider-DplAS6Yc.js","./shortcutKey-DDnMfobB.css","./show-CmuzO5bq.js","./show-BVOiUnqZ.css","./text-CEYuMU-Z.js","./text-jaqtPcOs.css"])))=>i.map(i=>d[i]);
import{ao as xe,G as ve,ap as ye,x as E,f as A,i as z,d as N,k as Y,l as ke,E as T,O as ee,aq as me,n as j,ar as we,F as ge,g as le,h as O,j as K,C as Re,K as U,as as $e,M as W,p as Ce,at as Ee,au as Te,av as je,s as D,aw as Pe,z as pe,ax as ie,ay as Be,az as Se,y as Ae,aA as ae,$ as Oe,aB as Le,Y as I,o as x,c as L,Q as te,a1 as S,w as y,a as C,u as f,Z as q,aC as se,B as ce,a9 as Ie,aa as Ne,a0 as ue,aD as ze,e as de,t as He,aE as Ve,an as De,ac as Me,aF as We,X as Fe,aG as Ke,aH as qe,aI as b,ad as F,a5 as fe,aJ as J,_ as Ge}from"./index-CM8YAFq6.js";import{S as Z}from"./Scrollbar-3iA1cJrO.js";import{a as Ue,b as Ye}from"./use-collection-BrMBFwCG.js";import{g as Je}from"./attribute-Cz32yFEB.js";import{t as Qe}from"./throttle-BlkaWfY5.js";function _e(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}let he=!1;function Xe(){if(xe&&window.CSS&&!he&&(he=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function Ze(e,t){const l=ve(ye,null);return E(()=>e.hljs||(l==null?void 0:l.mergedHljsRef.value))}function et(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function tt(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const ot=A("affix",[z("affixed",{position:"fixed"},[z("absolute-positioned",{position:"absolute"})])]),oe={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},nt=ge(oe),rt=N({name:"Affix",props:oe,setup(e){const{mergedClsPrefixRef:t}=Y(e);ke("-affix",ot,t);let l=null;const i=T(!1),a=T(!1),u=T(null),h=T(null),m=E(()=>a.value||i.value),w=E(()=>{var n,r;return(r=(n=e.triggerTop)!==null&&n!==void 0?n:e.offsetTop)!==null&&r!==void 0?r:e.top}),g=E(()=>{var n,r;return(r=(n=e.top)!==null&&n!==void 0?n:e.triggerTop)!==null&&r!==void 0?r:e.offsetTop}),$=E(()=>{var n,r;return(r=(n=e.bottom)!==null&&n!==void 0?n:e.triggerBottom)!==null&&r!==void 0?r:e.offsetBottom}),o=E(()=>{var n,r;return(r=(n=e.triggerBottom)!==null&&n!==void 0?n:e.offsetBottom)!==null&&r!==void 0?r:e.bottom}),v=T(null),d=()=>{const{target:n,listenTo:r}=e;n?l=n():r?l=_e(r):l=document,l&&(l.addEventListener("scroll",c),c())};function c(){we(s)}function s(){const{value:n}=v;if(!l||!n)return;const r=et(l);if(m.value){h.value!==null&&r<h.value&&(i.value=!1,h.value=null),u.value!==null&&r>u.value&&(a.value=!1,u.value=null);return}const k=tt(l),R=n.getBoundingClientRect(),B=R.top-k.top,P=k.bottom-R.bottom,_=w.value,p=o.value;_!==void 0&&B<=_?(i.value=!0,h.value=r-(_-B)):(i.value=!1,h.value=null),p!==void 0&&P<=p?(a.value=!0,u.value=r+p-P):(a.value=!1,u.value=null)}return ee(()=>{d()}),me(()=>{l&&l.removeEventListener("scroll",c)}),{selfRef:v,affixed:m,mergedClsPrefix:t,mergedstyle:E(()=>{const n={};return i.value&&w.value!==void 0&&g.value!==void 0&&(n.top=`${g.value}px`),a.value&&o.value!==void 0&&$.value!==void 0&&(n.bottom=`${$.value}px`),n})}},render(){const{mergedClsPrefix:e}=this;return j("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),lt=A("anchor",`
 position: relative;
`,[le("block",`
 padding-left: var(--n-rail-width);
 `,[A("anchor-link",[O("+, >",[A("anchor-link",`
 margin-top: .5em;
 `)])]),A("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),le("show-rail",[O(">",[A("anchor-link","padding-left: 0;")])])]),z("block",[A("anchor-link",`
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
 `)])])]),G=Re("n-anchor"),it={title:String,href:String},at=N({name:"AnchorLink",props:it,setup(e,{slots:t}){const l=T(null),i=ve(G),a=U(e,"href"),u=$e(()=>a.value&&a.value===i.activeHref.value);Ue(G,"collectedLinkHrefs",a),Ye(G,"titleEls",()=>l.value),W(u,m=>{m&&l.value&&i.updateBarPosition(l.value)});function h(){e.href!==void 0&&i.setActiveHref(e.href)}return()=>{var m;const{value:w}=i.mergedClsPrefix;return j("div",{class:[`${w}-anchor-link`,u.value&&`${w}-anchor-link--active`]},j("a",{ref:l,class:[`${w}-anchor-link__title`],href:e.href,title:Je(e.title),onClick:h},e.title),(m=t.default)===null||m===void 0?void 0:m.call(t))}}});function st(e,t){const{top:l,height:i}=e.getBoundingClientRect(),a=t instanceof HTMLElement?t.getBoundingClientRect().top:0;return{top:l-a,height:i}}const ne={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},ct=ge(ne),ut=N({name:"BaseAnchor",props:Object.assign(Object.assign({},ne),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const t=[],l=[],i=T(null),a=T(null),u=T(null),h=T(null),m=E(()=>e.type==="block"),w=E(()=>!m.value&&e.showRail);function g(){const{value:c}=u,{value:s}=a;c&&(c.style.transition="none"),s&&(s.style.transition="none"),l&&l.forEach(n=>{n.style.transition="none"}),je(()=>{const{value:n}=u,{value:r}=a;n&&(n.offsetWidth,n.style.transition=""),r&&(r.offsetWidth,r.style.transition=""),l&&l.forEach(k=>{k.offsetWidth,k.style.transition=""})})}function $(c,s=!0){const{value:n}=u,{value:r}=a,{value:k}=h;if(!k||!n)return;s||(n.style.transition="none",r&&(r.style.transition="none"));const{offsetHeight:R,offsetWidth:B}=c,{top:P,left:_}=c.getBoundingClientRect(),{top:p,left:H}=k.getBoundingClientRect(),V=P-p,M=_-H;n.style.top=`${V}px`,n.style.height=`${R}px`,r&&(r.style.top=`${V}px`,r.style.height=`${R}px`,r.style.maxWidth=`${B+M}px`),n.offsetHeight,r&&r.offsetHeight,s||(n.style.transition="",r&&(r.style.transition=""))}const o=Qe(()=>{d(!0)},128);function v(c,s=!0){const n=/^#([^#]+)$/.exec(c);if(!n)return;const r=document.getElementById(n[1]);r&&(i.value=c,r.scrollIntoView(),s||g(),o())}function d(c=!0){var s;const n=[],r=_e((s=e.offsetTarget)!==null&&s!==void 0?s:document);t.forEach(_=>{const p=/#([^#]+)$/.exec(_);if(!p)return;const H=document.getElementById(p[1]);if(H&&r){const{top:V,height:M}=st(H,r);n.push({top:V,height:M,href:_})}}),n.sort((_,p)=>_.top>p.top?1:(_.top===p.top&&_.height<p.height,-1));const k=i.value,{bound:R,ignoreGap:B}=e,P=n.reduce((_,p)=>p.top+p.height<0?B?p:_:p.top<=R?_===null?p:p.top===_.top?p.href===k?p:_:p.top>_.top?p:_:_,null);c||g(),P?i.value=P.href:i.value=null}return Ce(G,{activeHref:i,mergedClsPrefix:U(e,"mergedClsPrefix"),updateBarPosition:$,setActiveHref:v,collectedLinkHrefs:t,titleEls:l}),ee(()=>{document.addEventListener("scroll",o,!0),v(window.location.hash),d(!1)}),Ee(()=>{v(window.location.hash),d(!1)}),me(()=>{document.removeEventListener("scroll",o,!0)}),W(i,c=>{if(c===null){const{value:s}=a;s&&!m.value&&(s.style.maxWidth="0")}}),{selfRef:h,barRef:u,slotRef:a,setActiveHref:v,activeHref:i,isBlockType:m,mergedShowRail:w}},render(){var e;const{mergedClsPrefix:t,mergedShowRail:l,isBlockType:i,$slots:a}=this,u=j("div",{class:[`${t}-anchor`,i&&`${t}-anchor--block`,l&&`${t}-anchor--show-rail`],ref:"selfRef"},l&&this.showBackground?j("div",{ref:"slotRef",class:`${t}-anchor-link-background`}):null,l?j("div",{class:`${t}-anchor-rail`},j("div",{ref:"barRef",class:[`${t}-anchor-rail__bar`,this.activeHref!==null&&`${t}-anchor-rail__bar--active`]})):null,(e=a.default)===null||e===void 0?void 0:e.call(a));return this.internalScrollable?j(Te,null,{default:()=>u}):u}}),dt=Object.assign(Object.assign(Object.assign(Object.assign({},D.props),{affix:Boolean}),oe),ne),ft=N({name:"Anchor",props:dt,setup(e,{slots:t}){const{mergedClsPrefixRef:l,inlineThemeDisabled:i}=Y(e),a=D("Anchor","-anchor",lt,Pe,e,l),u=T(null),h=E(()=>{const{self:{railColor:w,linkColor:g,railColorActive:$,linkTextColor:o,linkTextColorHover:v,linkTextColorPressed:d,linkTextColorActive:c,linkFontSize:s,railWidth:n,linkPadding:r,borderRadius:k},common:{cubicBezierEaseInOut:R}}=a.value;return{"--n-link-border-radius":k,"--n-link-color":g,"--n-link-font-size":s,"--n-link-text-color":o,"--n-link-text-color-hover":v,"--n-link-text-color-active":c,"--n-link-text-color-pressed":d,"--n-link-padding":r,"--n-bezier":R,"--n-rail-color":w,"--n-rail-color-active":$,"--n-rail-width":n}}),m=i?pe("anchor",void 0,h,e):void 0;return{scrollTo(w){var g;(g=u.value)===null||g===void 0||g.setActiveHref(w)},renderAnchor:()=>(m==null||m.onRender(),j(ut,Object.assign({ref:u,style:i?void 0:h.value,class:m==null?void 0:m.themeClass.value},ie(e,ct),{mergedClsPrefix:l.value}),t))}},render(){return this.affix?j(rt,Object.assign({},ie(this,nt)),{default:this.renderAnchor}):this.renderAnchor()}}),ht=O([A("code",`
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
 }`]}]),vt=Object.assign(Object.assign({},D.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),mt=N({name:"Code",props:vt,setup(e,{slots:t}){const{internalNoHighlight:l}=e,{mergedClsPrefixRef:i,inlineThemeDisabled:a}=Y(),u=T(null),h=l?{value:void 0}:Ze(e),m=(d,c,s)=>{const{value:n}=h;return!n||!(d&&n.getLanguage(d))?null:n.highlight(s?c.trim():c,{language:d}).value},w=E(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),g=()=>{if(t.default)return;const{value:d}=u;if(!d)return;const{language:c}=e,s=e.uri?window.decodeURIComponent(e.code):e.code;if(c){const r=m(c,s,e.trim);if(r!==null){if(e.inline)d.innerHTML=r;else{const k=d.querySelector(".__code__");k&&d.removeChild(k);const R=document.createElement("pre");R.className="__code__",R.innerHTML=r,d.appendChild(R)}return}}if(e.inline){d.textContent=s;return}const n=d.querySelector(".__code__");if(n)n.textContent=s;else{const r=document.createElement("pre");r.className="__code__",r.textContent=s,d.innerHTML="",d.appendChild(r)}};ee(g),W(U(e,"language"),g),W(U(e,"code"),g),l||W(h,g);const $=D("Code","-code",ht,Be,e,i),o=E(()=>{const{common:{cubicBezierEaseInOut:d,fontFamilyMono:c},self:{textColor:s,fontSize:n,fontWeightStrong:r,lineNumberTextColor:k,"mono-3":R,"hue-1":B,"hue-2":P,"hue-3":_,"hue-4":p,"hue-5":H,"hue-5-2":V,"hue-6":M,"hue-6-2":be}}=$.value,{internalFontSize:re}=e;return{"--n-font-size":re?`${re}px`:n,"--n-font-family":c,"--n-font-weight-strong":r,"--n-bezier":d,"--n-text-color":s,"--n-mono-3":R,"--n-hue-1":B,"--n-hue-2":P,"--n-hue-3":_,"--n-hue-4":p,"--n-hue-5":H,"--n-hue-5-2":V,"--n-hue-6":M,"--n-hue-6-2":be,"--n-line-number-text-color":k}}),v=a?pe("code",E(()=>`${e.internalFontSize||"a"}`),o,e):void 0;return{mergedClsPrefix:i,codeRef:u,mergedShowLineNumbers:w,lineNumbers:E(()=>{let d=1;const c=[];let s=!1;for(const n of e.code)n===`
`?(s=!0,c.push(d++)):s=!1;return s||c.push(d++),c.join(`
`)}),cssVars:a?void 0:o,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){var e,t;const{mergedClsPrefix:l,wordWrap:i,mergedShowLineNumbers:a,onRender:u}=this;return u==null||u(),j("code",{class:[`${l}-code`,this.themeClass,i&&`${l}-code--word-wrap`,a&&`${l}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},a?j("pre",{class:`${l}-code__line-numbers`},this.lineNumbers):null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}}),gt=O([A("skeleton",`
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
 `)]),pt=Object.assign(Object.assign({},D.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),Q=N({name:"Skeleton",inheritAttrs:!1,props:pt,setup(e){Xe();const{mergedClsPrefixRef:t}=Y(e),l=D("Skeleton","-skeleton",gt,Se,e,t);return{mergedClsPrefix:t,style:E(()=>{var i,a;const u=l.value,{common:{cubicBezierEaseInOut:h}}=u,m=u.self,{color:w,colorEnd:g,borderRadius:$}=m;let o;const{circle:v,sharp:d,round:c,width:s,height:n,size:r,text:k,animated:R}=e;r!==void 0&&(o=m[Ae("height",r)]);const B=v?(i=s??n)!==null&&i!==void 0?i:o:s,P=(a=v?s??n:n)!==null&&a!==void 0?a:o;return{display:k?"inline-block":"",verticalAlign:k?"-0.125em":"",borderRadius:v?"50%":c?"4096px":d?"":$,width:typeof B=="number"?ae(B):B,height:typeof P=="number"?ae(P):P,animation:R?"":"none","--n-bezier":h,"--n-color-start":w,"--n-color-end":g}})}},render(){const{repeat:e,style:t,mergedClsPrefix:l,$attrs:i}=this,a=j("div",Oe({class:`${l}-skeleton`,style:t},i));return e>1?j(I,null,Le(e,null).map(u=>[a,`
`])):a}}),_t={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},bt=te("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M160 368L32 256l128-112"},null,-1),xt=te("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 368l128-112l-128-112"},null,-1),yt=[bt,xt],kt=N({name:"CodeOutline",render:function(t,l){return x(),L("svg",_t,yt)}}),X=N({__name:"card",props:{code:{}},setup(e){const t=T(!1);return(l,i)=>(x(),S(f(Me),null,{"header-extra":y(()=>[C(f(q),null,{default:y(()=>[C(f(se),{trigger:"hover"},{trigger:y(()=>[C(f(ce),{onClick:i[0]||(i[0]=a=>f(Ie).success("复制成功").error("复制失败").run(f(Ne)(l.code))),text:""},{icon:y(()=>[C(f(ue),{component:f(ze)},null,8,["component"])]),_:1})]),default:y(()=>[de(" 复制代码 ")]),_:1}),C(f(se),{trigger:"hover"},{trigger:y(()=>[C(f(ce),{onClick:i[1]||(i[1]=a=>t.value=!t.value),text:""},{icon:y(()=>[C(f(ue),{component:f(kt)},null,8,["component"])]),_:1})]),default:y(()=>[de(" "+He(t.value?"收起代码":"显示代码"),1)]),_:1})]),_:1})]),footer:y(()=>[C(f(Ve),{show:t.value},{default:y(()=>[C(f(Z),{"x-scrollable":"",style:{"max-height":"50vh"}},{default:y(()=>[C(f(mt),{code:l.code,language:"javascript","show-line-numbers":""},null,8,["code"])]),_:1})]),_:1},8,["show"])]),default:y(()=>[De(l.$slots,"default")]),_:3}))}}),wt={class:"list-box"},Rt=N({__name:"index",setup(e){const t=location.hash.replace(/(#[^/]+)*$/,"#"),l=[["original","仅需初始化 _Canvas"],["center","中心点"],["shortcutKey","快捷键"],["axis","坐标轴"],["text","文字"],["point","点"],["line","线"],["polygon","面"],["custom","自定义绘制"],["layer","图层 & 层级"],["show","显示条件"]];function i(g){const $=[],o=[];for(let v=0;v<g.length;v++)v%2===0?o.push(g[v]):$.push(g[v]);return[o,$]}const[a,u]=i(l),h=T({});(async function(){const g=Object.assign({"./demo/axis.vue":()=>b(()=>import("./axis-D_aZDWNF.js"),[],import.meta.url).then(o=>o.default),"./demo/center.vue":()=>b(()=>import("./center-DhH0efib.js"),[],import.meta.url).then(o=>o.default),"./demo/custom.vue":()=>b(()=>import("./custom-CIoioDwv.js"),[],import.meta.url).then(o=>o.default),"./demo/layer.vue":()=>b(()=>import("./layer-BcptgL20.js"),[],import.meta.url).then(o=>o.default),"./demo/line.vue":()=>b(()=>import("./line-DQGyLgNP.js"),[],import.meta.url).then(o=>o.default),"./demo/original.vue":()=>b(()=>import("./original-C7fnAPiR.js"),[],import.meta.url).then(o=>o.default),"./demo/point.vue":()=>b(()=>import("./point-s1ZUw335.js"),[],import.meta.url).then(o=>o.default),"./demo/polygon.vue":()=>b(()=>import("./polygon-Cpl_nlKe.js"),[],import.meta.url).then(o=>o.default),"./demo/shortcutKey.vue":()=>b(()=>import("./shortcutKey-yIbEqP5a.js"),[],import.meta.url).then(o=>o.default),"./demo/show.vue":()=>b(()=>import("./show-BomJ80cO.js"),[],import.meta.url).then(o=>o.default),"./demo/text.vue":()=>b(()=>import("./text-DPxGpn8_.js"),[],import.meta.url).then(o=>o.default)}),$=Object.assign({"./demo/axis.vue":()=>b(()=>import("./axis-7UXMGICr.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url),"./demo/center.vue":()=>b(()=>import("./center-D1HbSvhW.js"),__vite__mapDeps([15,1,2,3,4,13,5,6,7,8,12,16]),import.meta.url),"./demo/custom.vue":()=>b(()=>import("./custom-Cci2AOA_.js"),__vite__mapDeps([17,1,2,3,4,18]),import.meta.url),"./demo/layer.vue":()=>b(()=>import("./layer-K33sr6On.js"),__vite__mapDeps([19,1,2,3,4,12,9,20]),import.meta.url),"./demo/line.vue":()=>b(()=>import("./line-DQxbx8MH.js"),__vite__mapDeps([21,1,2,3,4,22,23]),import.meta.url),"./demo/original.vue":()=>b(()=>import("./original-BxnWBcOW.js"),__vite__mapDeps([24,1,2,3,4,25,26]),import.meta.url),"./demo/point.vue":()=>b(()=>import("./point-CMG6nGj5.js"),__vite__mapDeps([27,1,2,3,4,22,28]),import.meta.url),"./demo/polygon.vue":()=>b(()=>import("./polygon-BbDQOCJ0.js"),__vite__mapDeps([29,1,2,3,4,22,30]),import.meta.url),"./demo/shortcutKey.vue":()=>b(()=>import("./shortcutKey-Cmcm-33b.js"),__vite__mapDeps([31,1,2,3,4,12,11,32,33]),import.meta.url),"./demo/show.vue":()=>b(()=>import("./show-CmuzO5bq.js"),__vite__mapDeps([34,1,2,3,4,12,22,35]),import.meta.url),"./demo/text.vue":()=>b(()=>import("./text-CEYuMU-Z.js"),__vite__mapDeps([36,1,2,3,4,22,37]),import.meta.url)});for(const o in g){const v=o.split("/").pop().replace(".vue",""),d=await g[o](),c=await $[o]();h.value[v]={component:We(c.default),code:d}}})();const m=T(window.innerWidth>=1280),w=()=>{m.value=window.innerWidth>=1280};return window.addEventListener("resize",w),Fe(()=>{window.removeEventListener("resize",w)}),(g,$)=>(x(),L("div",{class:qe(["my-canvas-tools",f(fe).isMobileStyle&&"mobile"])},[C(f(Z),null,{default:y(()=>[te("div",wt,[m.value?(x(),L(I,{key:0},[C(f(q),{vertical:""},{default:y(()=>[(x(!0),L(I,null,F(f(a),o=>(x(),L(I,{key:o[0]},[h.value[o[0]]?(x(),S(X,{key:0,id:o[0],title:o[1],code:h.value[o[0]].code},{default:y(()=>[(x(),S(J(h.value[o[0]].component)))]),_:2},1032,["id","title","code"])):(x(),S(f(Q),{key:1,id:o[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}),C(f(q),{vertical:""},{default:y(()=>[(x(!0),L(I,null,F(f(u),o=>(x(),L(I,{key:o[0]},[h.value[o[0]]?(x(),S(X,{key:0,id:o[0],title:o[1],code:h.value[o[0]].code},{default:y(()=>[(x(),S(J(h.value[o[0]].component)))]),_:2},1032,["id","title","code"])):(x(),S(f(Q),{key:1,id:o[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1})],64)):(x(),S(f(q),{key:1,style:{width:"100%"},vertical:""},{default:y(()=>[(x(),L(I,null,F(l,o=>(x(),L(I,{key:o[0]},[h.value[o[0]]?(x(),S(X,{key:0,id:o[0],title:o[1],code:h.value[o[0]].code},{default:y(()=>[(x(),S(J(h.value[o[0]].component)))]),_:2},1032,["id","title","code"])):(x(),S(f(Q),{key:1,id:o[0],sharp:!1},null,8,["id"]))],64))),64))]),_:1}))])]),_:1}),f(fe).isMobileStyle?Ke("",!0):(x(),S(f(Z),{key:0},{default:y(()=>[C(f(ft),{type:"block",bound:100,"ignore-gap":"","offset-target":".my-canvas-tools"},{default:y(()=>[(x(),L(I,null,F(l,o=>C(f(at),{key:o[0],href:f(t)+o[0],title:o[1]},null,8,["href","title"])),64))]),_:1})]),_:1}))],2))}}),Pt=Ge(Rt,[["__scopeId","data-v-e435c851"]]);export{Pt as default};
