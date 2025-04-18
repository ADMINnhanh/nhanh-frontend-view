const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./axis-DieePg38.js","./index-BPBd_PCe.js","./index-Cfj9n6rm.css","./index-CgqViCbd.js","./index-C12i57eR.css","./InputNumber-Cwpe94o3.js","./Suffix-DgCFgBxO.js","./Input-CTKYTMqi.js","./Add-BAq-Wdhj.js","./p-C2YPguOn.js","./ArrowUp-BfCt-oDw.js","./Flex-D6d5qbD6.js","./text-BvCHEl3t.js","./RadioButton-IAgt4dam.js","./axis-0mTtjct4.css","./center-DfwSIXrq.js","./center-BkiLei1l.css","./custom-DfHx8Nwg.js","./custom-C147e9Rq.css","./layer-DgB19EaX.js","./layer-MSZP-WiS.css","./line-BrSx61WM.js","./line-DW690jL7.css","./original-pjgQzhg0.js","./a-Czl231de.js","./original-wHgele1Q.css","./point-BhVC224S.js","./point-DILwNrqC.css","./polygon-8iGZLDdc.js","./polygon-DTFPluSY.css","./shortcutKey-DbZEjXiw.js","./Divider-DnkBubci.js","./shortcutKey-DDnMfobB.css","./show-5e6aogKu.js","./Switch-Bu3QjIa_.js","./show-BVOiUnqZ.css","./text-Cj6TkqL8.js","./text-CVpfAr5h.css"])))=>i.map(i=>d[i]);
import{ao as xe,G as ve,ap as ye,x as E,f as A,i as z,d as I,k as Q,l as ke,E as T,O as te,aq as me,n as j,ar as we,F as ge,g as le,h as L,j as q,C as $e,K as Y,as as Re,M as W,p as Ce,at as Ee,au as Te,av as je,s as D,aw as Pe,z as pe,ax as ie,ay as Be,az as Se,y as Ae,aA as ae,$ as Oe,aB as Le,Y as N,o as _,c as O,Q as F,a1 as S,w as y,a as C,u as f,Z as G,aC as se,B as ce,a9 as Ie,aa as Ne,a0 as ue,e as de,t as ze,aD as He,an as Ve,ac as De,aE as Me,X as We,aF as Fe,aG as Ke,aH as x,ad as K,a5 as fe,aI as X,_ as qe}from"./index-BPBd_PCe.js";import{S as ee}from"./Scrollbar-C2CLAH-2.js";import{a as Ge,b as Ue}from"./use-collection-j6B9O5kn.js";import{g as Ye}from"./attribute-Cz32yFEB.js";import{t as Qe}from"./throttle-U7BD6kZ5.js";function _e(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}let he=!1;function Xe(){if(xe&&window.CSS&&!he&&(he=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function Ze(e,t){const l=ve(ye,null);return E(()=>e.hljs||(l==null?void 0:l.mergedHljsRef.value))}function Je(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function et(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const tt=A("affix",[z("affixed",{position:"fixed"},[z("absolute-positioned",{position:"absolute"})])]),oe={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},ot=ge(oe),nt=I({name:"Affix",props:oe,setup(e){const{mergedClsPrefixRef:t}=Q(e);ke("-affix",tt,t);let l=null;const i=T(!1),a=T(!1),u=T(null),h=T(null),m=E(()=>a.value||i.value),w=E(()=>{var n,r;return(r=(n=e.triggerTop)!==null&&n!==void 0?n:e.offsetTop)!==null&&r!==void 0?r:e.top}),g=E(()=>{var n,r;return(r=(n=e.top)!==null&&n!==void 0?n:e.triggerTop)!==null&&r!==void 0?r:e.offsetTop}),R=E(()=>{var n,r;return(r=(n=e.bottom)!==null&&n!==void 0?n:e.triggerBottom)!==null&&r!==void 0?r:e.offsetBottom}),o=E(()=>{var n,r;return(r=(n=e.triggerBottom)!==null&&n!==void 0?n:e.offsetBottom)!==null&&r!==void 0?r:e.bottom}),v=T(null),d=()=>{const{target:n,listenTo:r}=e;n?l=n():r?l=_e(r):l=document,l&&(l.addEventListener("scroll",c),c())};function c(){we(s)}function s(){const{value:n}=v;if(!l||!n)return;const r=Je(l);if(m.value){h.value!==null&&r<h.value&&(i.value=!1,h.value=null),u.value!==null&&r>u.value&&(a.value=!1,u.value=null);return}const k=et(l),$=n.getBoundingClientRect(),B=$.top-k.top,P=k.bottom-$.bottom,b=w.value,p=o.value;b!==void 0&&B<=b?(i.value=!0,h.value=r-(b-B)):(i.value=!1,h.value=null),p!==void 0&&P<=p?(a.value=!0,u.value=r+p-P):(a.value=!1,u.value=null)}return te(()=>{d()}),me(()=>{l&&l.removeEventListener("scroll",c)}),{selfRef:v,affixed:m,mergedClsPrefix:t,mergedstyle:E(()=>{const n={};return i.value&&w.value!==void 0&&g.value!==void 0&&(n.top=`${g.value}px`),a.value&&o.value!==void 0&&R.value!==void 0&&(n.bottom=`${R.value}px`),n})}},render(){const{mergedClsPrefix:e}=this;return j("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),rt=A("anchor",`
 position: relative;
`,[le("block",`
 padding-left: var(--n-rail-width);
 `,[A("anchor-link",[L("+, >",[A("anchor-link",`
 margin-top: .5em;
 `)])]),A("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),le("show-rail",[L(">",[A("anchor-link","padding-left: 0;")])])]),z("block",[A("anchor-link",`
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
 `,[q("bar",`
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
 `,[z("active",[L(">",[q("title",`
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
 `)])])]),U=$e("n-anchor"),lt={title:String,href:String},it=I({name:"AnchorLink",props:lt,setup(e,{slots:t}){const l=T(null),i=ve(U),a=Y(e,"href"),u=Re(()=>a.value&&a.value===i.activeHref.value);Ge(U,"collectedLinkHrefs",a),Ue(U,"titleEls",()=>l.value),W(u,m=>{m&&l.value&&i.updateBarPosition(l.value)});function h(){e.href!==void 0&&i.setActiveHref(e.href)}return()=>{var m;const{value:w}=i.mergedClsPrefix;return j("div",{class:[`${w}-anchor-link`,u.value&&`${w}-anchor-link--active`]},j("a",{ref:l,class:[`${w}-anchor-link__title`],href:e.href,title:Ye(e.title),onClick:h},e.title),(m=t.default)===null||m===void 0?void 0:m.call(t))}}});function at(e,t){const{top:l,height:i}=e.getBoundingClientRect(),a=t instanceof HTMLElement?t.getBoundingClientRect().top:0;return{top:l-a,height:i}}const ne={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},st=ge(ne),ct=I({name:"BaseAnchor",props:Object.assign(Object.assign({},ne),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const t=[],l=[],i=T(null),a=T(null),u=T(null),h=T(null),m=E(()=>e.type==="block"),w=E(()=>!m.value&&e.showRail);function g(){const{value:c}=u,{value:s}=a;c&&(c.style.transition="none"),s&&(s.style.transition="none"),l&&l.forEach(n=>{n.style.transition="none"}),je(()=>{const{value:n}=u,{value:r}=a;n&&(n.offsetWidth,n.style.transition=""),r&&(r.offsetWidth,r.style.transition=""),l&&l.forEach(k=>{k.offsetWidth,k.style.transition=""})})}function R(c,s=!0){const{value:n}=u,{value:r}=a,{value:k}=h;if(!k||!n)return;s||(n.style.transition="none",r&&(r.style.transition="none"));const{offsetHeight:$,offsetWidth:B}=c,{top:P,left:b}=c.getBoundingClientRect(),{top:p,left:H}=k.getBoundingClientRect(),V=P-p,M=b-H;n.style.top=`${V}px`,n.style.height=`${$}px`,r&&(r.style.top=`${V}px`,r.style.height=`${$}px`,r.style.maxWidth=`${B+M}px`),n.offsetHeight,r&&r.offsetHeight,s||(n.style.transition="",r&&(r.style.transition=""))}const o=Qe(()=>{d(!0)},128);function v(c,s=!0){const n=/^#([^#]+)$/.exec(c);if(!n)return;const r=document.getElementById(n[1]);r&&(i.value=c,r.scrollIntoView(),s||g(),o())}function d(c=!0){var s;const n=[],r=_e((s=e.offsetTarget)!==null&&s!==void 0?s:document);t.forEach(b=>{const p=/#([^#]+)$/.exec(b);if(!p)return;const H=document.getElementById(p[1]);if(H&&r){const{top:V,height:M}=at(H,r);n.push({top:V,height:M,href:b})}}),n.sort((b,p)=>b.top>p.top?1:(b.top===p.top&&b.height<p.height,-1));const k=i.value,{bound:$,ignoreGap:B}=e,P=n.reduce((b,p)=>p.top+p.height<0?B?p:b:p.top<=$?b===null?p:p.top===b.top?p.href===k?p:b:p.top>b.top?p:b:b,null);c||g(),P?i.value=P.href:i.value=null}return Ce(U,{activeHref:i,mergedClsPrefix:Y(e,"mergedClsPrefix"),updateBarPosition:R,setActiveHref:v,collectedLinkHrefs:t,titleEls:l}),te(()=>{document.addEventListener("scroll",o,!0),v(window.location.hash),d(!1)}),Ee(()=>{v(window.location.hash),d(!1)}),me(()=>{document.removeEventListener("scroll",o,!0)}),W(i,c=>{if(c===null){const{value:s}=a;s&&!m.value&&(s.style.maxWidth="0")}}),{selfRef:h,barRef:u,slotRef:a,setActiveHref:v,activeHref:i,isBlockType:m,mergedShowRail:w}},render(){var e;const{mergedClsPrefix:t,mergedShowRail:l,isBlockType:i,$slots:a}=this,u=j("div",{class:[`${t}-anchor`,i&&`${t}-anchor--block`,l&&`${t}-anchor--show-rail`],ref:"selfRef"},l&&this.showBackground?j("div",{ref:"slotRef",class:`${t}-anchor-link-background`}):null,l?j("div",{class:`${t}-anchor-rail`},j("div",{ref:"barRef",class:[`${t}-anchor-rail__bar`,this.activeHref!==null&&`${t}-anchor-rail__bar--active`]})):null,(e=a.default)===null||e===void 0?void 0:e.call(a));return this.internalScrollable?j(Te,null,{default:()=>u}):u}}),ut=Object.assign(Object.assign(Object.assign(Object.assign({},D.props),{affix:Boolean}),oe),ne),dt=I({name:"Anchor",props:ut,setup(e,{slots:t}){const{mergedClsPrefixRef:l,inlineThemeDisabled:i}=Q(e),a=D("Anchor","-anchor",rt,Pe,e,l),u=T(null),h=E(()=>{const{self:{railColor:w,linkColor:g,railColorActive:R,linkTextColor:o,linkTextColorHover:v,linkTextColorPressed:d,linkTextColorActive:c,linkFontSize:s,railWidth:n,linkPadding:r,borderRadius:k},common:{cubicBezierEaseInOut:$}}=a.value;return{"--n-link-border-radius":k,"--n-link-color":g,"--n-link-font-size":s,"--n-link-text-color":o,"--n-link-text-color-hover":v,"--n-link-text-color-active":c,"--n-link-text-color-pressed":d,"--n-link-padding":r,"--n-bezier":$,"--n-rail-color":w,"--n-rail-color-active":R,"--n-rail-width":n}}),m=i?pe("anchor",void 0,h,e):void 0;return{scrollTo(w){var g;(g=u.value)===null||g===void 0||g.setActiveHref(w)},renderAnchor:()=>(m==null||m.onRender(),j(ct,Object.assign({ref:u,style:i?void 0:h.value,class:m==null?void 0:m.themeClass.value},ie(e,st),{mergedClsPrefix:l.value}),t))}},render(){return this.affix?j(nt,Object.assign({},ie(this,ot)),{default:this.renderAnchor}):this.renderAnchor()}}),ft=L([A("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[z("show-line-numbers",`
 display: flex;
 `),q("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),z("word-wrap",[L("pre",`
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
 }`]}]),ht=Object.assign(Object.assign({},D.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),vt=I({name:"Code",props:ht,setup(e,{slots:t}){const{internalNoHighlight:l}=e,{mergedClsPrefixRef:i,inlineThemeDisabled:a}=Q(),u=T(null),h=l?{value:void 0}:Ze(e),m=(d,c,s)=>{const{value:n}=h;return!n||!(d&&n.getLanguage(d))?null:n.highlight(s?c.trim():c,{language:d}).value},w=E(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),g=()=>{if(t.default)return;const{value:d}=u;if(!d)return;const{language:c}=e,s=e.uri?window.decodeURIComponent(e.code):e.code;if(c){const r=m(c,s,e.trim);if(r!==null){if(e.inline)d.innerHTML=r;else{const k=d.querySelector(".__code__");k&&d.removeChild(k);const $=document.createElement("pre");$.className="__code__",$.innerHTML=r,d.appendChild($)}return}}if(e.inline){d.textContent=s;return}const n=d.querySelector(".__code__");if(n)n.textContent=s;else{const r=document.createElement("pre");r.className="__code__",r.textContent=s,d.innerHTML="",d.appendChild(r)}};te(g),W(Y(e,"language"),g),W(Y(e,"code"),g),l||W(h,g);const R=D("Code","-code",ft,Be,e,i),o=E(()=>{const{common:{cubicBezierEaseInOut:d,fontFamilyMono:c},self:{textColor:s,fontSize:n,fontWeightStrong:r,lineNumberTextColor:k,"mono-3":$,"hue-1":B,"hue-2":P,"hue-3":b,"hue-4":p,"hue-5":H,"hue-5-2":V,"hue-6":M,"hue-6-2":be}}=R.value,{internalFontSize:re}=e;return{"--n-font-size":re?`${re}px`:n,"--n-font-family":c,"--n-font-weight-strong":r,"--n-bezier":d,"--n-text-color":s,"--n-mono-3":$,"--n-hue-1":B,"--n-hue-2":P,"--n-hue-3":b,"--n-hue-4":p,"--n-hue-5":H,"--n-hue-5-2":V,"--n-hue-6":M,"--n-hue-6-2":be,"--n-line-number-text-color":k}}),v=a?pe("code",E(()=>`${e.internalFontSize||"a"}`),o,e):void 0;return{mergedClsPrefix:i,codeRef:u,mergedShowLineNumbers:w,lineNumbers:E(()=>{let d=1;const c=[];let s=!1;for(const n of e.code)n===`
`?(s=!0,c.push(d++)):s=!1;return s||c.push(d++),c.join(`
`)}),cssVars:a?void 0:o,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){var e,t;const{mergedClsPrefix:l,wordWrap:i,mergedShowLineNumbers:a,onRender:u}=this;return u==null||u(),j("code",{class:[`${l}-code`,this.themeClass,i&&`${l}-code--word-wrap`,a&&`${l}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},a?j("pre",{class:`${l}-code__line-numbers`},this.lineNumbers):null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}}),mt=L([A("skeleton",`
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
 `)]),gt=Object.assign(Object.assign({},D.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),Z=I({name:"Skeleton",inheritAttrs:!1,props:gt,setup(e){Xe();const{mergedClsPrefixRef:t}=Q(e),l=D("Skeleton","-skeleton",mt,Se,e,t);return{mergedClsPrefix:t,style:E(()=>{var i,a;const u=l.value,{common:{cubicBezierEaseInOut:h}}=u,m=u.self,{color:w,colorEnd:g,borderRadius:R}=m;let o;const{circle:v,sharp:d,round:c,width:s,height:n,size:r,text:k,animated:$}=e;r!==void 0&&(o=m[Ae("height",r)]);const B=v?(i=s??n)!==null&&i!==void 0?i:o:s,P=(a=v?s??n:n)!==null&&a!==void 0?a:o;return{display:k?"inline-block":"",verticalAlign:k?"-0.125em":"",borderRadius:v?"50%":c?"4096px":d?"":R,width:typeof B=="number"?ae(B):B,height:typeof P=="number"?ae(P):P,animation:$?"":"none","--n-bezier":h,"--n-color-start":w,"--n-color-end":g}})}},render(){const{repeat:e,style:t,mergedClsPrefix:l,$attrs:i}=this,a=j("div",Oe({class:`${l}-skeleton`,style:t},i));return e>1?j(N,null,Le(e,null).map(u=>[a,`
`])):a}}),pt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},_t=F("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M160 368L32 256l128-112"},null,-1),bt=F("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 368l128-112l-128-112"},null,-1),xt=[_t,bt],yt=I({name:"CodeOutline",render:function(t,l){return _(),O("svg",pt,xt)}}),kt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},wt=F("rect",{x:"128",y:"128",width:"336",height:"336",rx:"57",ry:"57",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),$t=F("path",{d:"M383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Rt=[wt,$t],Ct=I({name:"CopyOutline",render:function(t,l){return _(),O("svg",kt,Rt)}}),J=I({__name:"card",props:{code:{}},setup(e){const t=T(!1);return(l,i)=>(_(),S(f(De),null,{"header-extra":y(()=>[C(f(G),null,{default:y(()=>[C(f(se),{trigger:"hover"},{trigger:y(()=>[C(f(ce),{onClick:i[0]||(i[0]=a=>f(Ie).success("复制成功").error("复制失败").run(f(Ne)(l.code))),text:""},{icon:y(()=>[C(f(ue),{component:f(Ct)},null,8,["component"])]),_:1})]),default:y(()=>[de(" 复制代码 ")]),_:1}),C(f(se),{trigger:"hover"},{trigger:y(()=>[C(f(ce),{onClick:i[1]||(i[1]=a=>t.value=!t.value),text:""},{icon:y(()=>[C(f(ue),{component:f(yt)},null,8,["component"])]),_:1})]),default:y(()=>[de(" "+ze(t.value?"收起代码":"显示代码"),1)]),_:1})]),_:1})]),footer:y(()=>[C(f(He),{show:t.value},{default:y(()=>[C(f(ee),{"x-scrollable":"",style:{"max-height":"50vh"}},{default:y(()=>[C(f(vt),{code:l.code,language:"javascript","show-line-numbers":""},null,8,["code"])]),_:1})]),_:1},8,["show"])]),default:y(()=>[Ve(l.$slots,"default")]),_:3}))}}),Et={class:"list-box"},Tt=I({__name:"index",setup(e){const t=location.hash.replace(/(#[^/]+)*$/,"#"),l=[["original","仅需初始化 _Canvas"],["center","中心点"],["shortcutKey","快捷键"],["axis","坐标轴"],["text","文字"],["point","点"],["line","线"],["polygon","面"],["custom","自定义绘制"],["layer","图层 & 层级"],["show","显示条件"]];function i(g){const R=[],o=[];for(let v=0;v<g.length;v++)v%2===0?o.push(g[v]):R.push(g[v]);return[o,R]}const[a,u]=i(l),h=T({});(async function(){const g=Object.assign({"./demo/axis.vue":()=>x(()=>import("./axis-D_aZDWNF.js"),[],import.meta.url).then(o=>o.default),"./demo/center.vue":()=>x(()=>import("./center-DhH0efib.js"),[],import.meta.url).then(o=>o.default),"./demo/custom.vue":()=>x(()=>import("./custom-CIoioDwv.js"),[],import.meta.url).then(o=>o.default),"./demo/layer.vue":()=>x(()=>import("./layer-B_UvvbhW.js"),[],import.meta.url).then(o=>o.default),"./demo/line.vue":()=>x(()=>import("./line-JI5mjkVx.js"),[],import.meta.url).then(o=>o.default),"./demo/original.vue":()=>x(()=>import("./original-C7fnAPiR.js"),[],import.meta.url).then(o=>o.default),"./demo/point.vue":()=>x(()=>import("./point-DTa0e2-f.js"),[],import.meta.url).then(o=>o.default),"./demo/polygon.vue":()=>x(()=>import("./polygon-Bh9xeM0c.js"),[],import.meta.url).then(o=>o.default),"./demo/shortcutKey.vue":()=>x(()=>import("./shortcutKey-yIbEqP5a.js"),[],import.meta.url).then(o=>o.default),"./demo/show.vue":()=>x(()=>import("./show-BomJ80cO.js"),[],import.meta.url).then(o=>o.default),"./demo/text.vue":()=>x(()=>import("./text-D2wh1c3A.js"),[],import.meta.url).then(o=>o.default)}),R=Object.assign({"./demo/axis.vue":()=>x(()=>import("./axis-DieePg38.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url),"./demo/center.vue":()=>x(()=>import("./center-DfwSIXrq.js"),__vite__mapDeps([15,1,2,3,4,13,5,6,7,8,12,16]),import.meta.url),"./demo/custom.vue":()=>x(()=>import("./custom-DfHx8Nwg.js"),__vite__mapDeps([17,1,2,3,4,18]),import.meta.url),"./demo/layer.vue":()=>x(()=>import("./layer-DgB19EaX.js"),__vite__mapDeps([19,1,2,3,4,12,9,20]),import.meta.url),"./demo/line.vue":()=>x(()=>import("./line-BrSx61WM.js"),__vite__mapDeps([21,1,2,3,4,22]),import.meta.url),"./demo/original.vue":()=>x(()=>import("./original-pjgQzhg0.js"),__vite__mapDeps([23,1,2,3,4,24,25]),import.meta.url),"./demo/point.vue":()=>x(()=>import("./point-BhVC224S.js"),__vite__mapDeps([26,1,2,3,4,27]),import.meta.url),"./demo/polygon.vue":()=>x(()=>import("./polygon-8iGZLDdc.js"),__vite__mapDeps([28,1,2,3,4,29]),import.meta.url),"./demo/shortcutKey.vue":()=>x(()=>import("./shortcutKey-DbZEjXiw.js"),__vite__mapDeps([30,1,2,3,4,12,11,31,32]),import.meta.url),"./demo/show.vue":()=>x(()=>import("./show-5e6aogKu.js"),__vite__mapDeps([33,1,2,3,4,12,34,35]),import.meta.url),"./demo/text.vue":()=>x(()=>import("./text-Cj6TkqL8.js"),__vite__mapDeps([36,1,2,3,4,37]),import.meta.url)});for(const o in g){const v=o.split("/").pop().replace(".vue",""),d=await g[o](),c=await R[o]();h.value[v]={component:Me(c.default),code:d}}})();const m=T(window.innerWidth>=1280),w=()=>{m.value=window.innerWidth>=1280};return window.addEventListener("resize",w),We(()=>{window.removeEventListener("resize",w)}),(g,R)=>(_(),O("div",{class:Ke(["my-canvas-tools",f(fe).isMobileStyle&&"mobile"])},[C(f(ee),null,{default:y(()=>[F("div",Et,[m.value?(_(),O(N,{key:0},[C(f(G),{vertical:""},{default:y(()=>[(_(!0),O(N,null,K(f(a),o=>(_(),O(N,{key:o[0]},[h.value[o[0]]?(_(),S(J,{key:0,id:o[0],title:o[1],code:h.value[o[0]].code},{default:y(()=>[(_(),S(X(h.value[o[0]].component)))]),_:2},1032,["id","title","code"])):(_(),S(f(Z),{key:1,id:o[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}),C(f(G),{vertical:""},{default:y(()=>[(_(!0),O(N,null,K(f(u),o=>(_(),O(N,{key:o[0]},[h.value[o[0]]?(_(),S(J,{key:0,id:o[0],title:o[1],code:h.value[o[0]].code},{default:y(()=>[(_(),S(X(h.value[o[0]].component)))]),_:2},1032,["id","title","code"])):(_(),S(f(Z),{key:1,id:o[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1})],64)):(_(),S(f(G),{key:1,style:{width:"100%"},vertical:""},{default:y(()=>[(_(),O(N,null,K(l,o=>(_(),O(N,{key:o[0]},[h.value[o[0]]?(_(),S(J,{key:0,id:o[0],title:o[1],code:h.value[o[0]].code},{default:y(()=>[(_(),S(X(h.value[o[0]].component)))]),_:2},1032,["id","title","code"])):(_(),S(f(Z),{key:1,id:o[0],sharp:!1},null,8,["id"]))],64))),64))]),_:1}))])]),_:1}),f(fe).isMobileStyle?Fe("",!0):(_(),S(f(ee),{key:0},{default:y(()=>[C(f(dt),{type:"block",bound:100,"ignore-gap":"","offset-target":".my-canvas-tools"},{default:y(()=>[(_(),O(N,null,K(l,o=>C(f(it),{key:o[0],href:f(t)+o[0],title:o[1]},null,8,["href","title"])),64))]),_:1})]),_:1}))],2))}}),Ot=qe(Tt,[["__scopeId","data-v-e435c851"]]);export{Ot as default};
