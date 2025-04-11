const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./axis-DYf09sEH.js","./index-Bsi_D0Vm.js","./index-Cfj9n6rm.css","./index-BcwvJFUx.js","./index-aLqCqA5N.css","./InputNumber-BOF43pus.js","./Suffix-EDxlOKru.js","./Input-CVeftoL1.js","./Add-DSSPoDa-.js","./ArrowUp-Bk33jI72.js","./Flex-BdbPTs-x.js","./text-S_TWMUU2.js","./RadioButton-B2WpKXfO.js","./axis-0mTtjct4.css","./center-DID7xLts.js","./center-BkiLei1l.css","./line-BH1jG4y_.js","./line-D4jaOENS.css","./original-Cnc2mOIr.js","./original-DNMErwDO.css","./point-BROHdhgk.js","./point-DKk5Rw6O.css","./polygon-DAq8S6Cr.js","./polygon-DXh2iIso.css","./shortcutKey-Cu3JFn4S.js","./Divider-DEyChAS1.js","./shortcutKey-DDnMfobB.css"])))=>i.map(i=>d[i]);
import{ao as be,G as he,ap as xe,x as R,f as P,i as H,d as z,k as Q,l as ye,E as T,O as te,aq as ve,n as E,ar as ke,F as me,g as le,h as N,j as q,C as we,K as Y,as as $e,M as W,p as Ce,at as Re,au as Te,av as je,s as D,aw as Ee,z as ge,ax as ie,ay as Be,az as Se,y as Pe,aA as ae,$ as Ae,aB as Oe,Y as L,o as b,c as O,Q as F,a1 as A,w as x,a as C,u as m,Z as G,aC as se,B as ce,a9 as Ne,aa as ze,a0 as ue,e as de,t as Le,aD as He,an as Ie,ac as Ve,aE as De,X as Me,aF as j,ad as K,aG as X,_ as We}from"./index-Bsi_D0Vm.js";import{S as ee}from"./Scrollbar-DXvAwMY3.js";import{a as Fe,b as Ke}from"./use-collection-Dmvls4pW.js";import{g as qe}from"./attribute-Cz32yFEB.js";import{t as Ge}from"./throttle-9GvoOSMz.js";function pe(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}let fe=!1;function Ue(){if(be&&window.CSS&&!fe&&(fe=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function Ye(e,t){const l=he(xe,null);return R(()=>e.hljs||(l==null?void 0:l.mergedHljsRef.value))}function Qe(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function Xe(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const Ze=P("affix",[H("affixed",{position:"fixed"},[H("absolute-positioned",{position:"absolute"})])]),oe={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},Je=me(oe),et=z({name:"Affix",props:oe,setup(e){const{mergedClsPrefixRef:t}=Q(e);ye("-affix",Ze,t);let l=null;const i=T(!1),a=T(!1),u=T(null),f=T(null),v=R(()=>a.value||i.value),k=R(()=>{var n,r;return(r=(n=e.triggerTop)!==null&&n!==void 0?n:e.offsetTop)!==null&&r!==void 0?r:e.top}),g=R(()=>{var n,r;return(r=(n=e.top)!==null&&n!==void 0?n:e.triggerTop)!==null&&r!==void 0?r:e.offsetTop}),$=R(()=>{var n,r;return(r=(n=e.bottom)!==null&&n!==void 0?n:e.triggerBottom)!==null&&r!==void 0?r:e.offsetBottom}),o=R(()=>{var n,r;return(r=(n=e.triggerBottom)!==null&&n!==void 0?n:e.offsetBottom)!==null&&r!==void 0?r:e.bottom}),h=T(null),d=()=>{const{target:n,listenTo:r}=e;n?l=n():r?l=pe(r):l=document,l&&(l.addEventListener("scroll",c),c())};function c(){ke(s)}function s(){const{value:n}=h;if(!l||!n)return;const r=Qe(l);if(v.value){f.value!==null&&r<f.value&&(i.value=!1,f.value=null),u.value!==null&&r>u.value&&(a.value=!1,u.value=null);return}const y=Xe(l),w=n.getBoundingClientRect(),S=w.top-y.top,B=y.bottom-w.bottom,_=k.value,p=o.value;_!==void 0&&S<=_?(i.value=!0,f.value=r-(_-S)):(i.value=!1,f.value=null),p!==void 0&&B<=p?(a.value=!0,u.value=r+p-B):(a.value=!1,u.value=null)}return te(()=>{d()}),ve(()=>{l&&l.removeEventListener("scroll",c)}),{selfRef:h,affixed:v,mergedClsPrefix:t,mergedstyle:R(()=>{const n={};return i.value&&k.value!==void 0&&g.value!==void 0&&(n.top=`${g.value}px`),a.value&&o.value!==void 0&&$.value!==void 0&&(n.bottom=`${$.value}px`),n})}},render(){const{mergedClsPrefix:e}=this;return E("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),tt=P("anchor",`
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
 `)])])]),U=we("n-anchor"),ot={title:String,href:String},nt=z({name:"AnchorLink",props:ot,setup(e,{slots:t}){const l=T(null),i=he(U),a=Y(e,"href"),u=$e(()=>a.value&&a.value===i.activeHref.value);Fe(U,"collectedLinkHrefs",a),Ke(U,"titleEls",()=>l.value),W(u,v=>{v&&l.value&&i.updateBarPosition(l.value)});function f(){e.href!==void 0&&i.setActiveHref(e.href)}return()=>{var v;const{value:k}=i.mergedClsPrefix;return E("div",{class:[`${k}-anchor-link`,u.value&&`${k}-anchor-link--active`]},E("a",{ref:l,class:[`${k}-anchor-link__title`],href:e.href,title:qe(e.title),onClick:f},e.title),(v=t.default)===null||v===void 0?void 0:v.call(t))}}});function rt(e,t){const{top:l,height:i}=e.getBoundingClientRect(),a=t instanceof HTMLElement?t.getBoundingClientRect().top:0;return{top:l-a,height:i}}const ne={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},lt=me(ne),it=z({name:"BaseAnchor",props:Object.assign(Object.assign({},ne),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const t=[],l=[],i=T(null),a=T(null),u=T(null),f=T(null),v=R(()=>e.type==="block"),k=R(()=>!v.value&&e.showRail);function g(){const{value:c}=u,{value:s}=a;c&&(c.style.transition="none"),s&&(s.style.transition="none"),l&&l.forEach(n=>{n.style.transition="none"}),je(()=>{const{value:n}=u,{value:r}=a;n&&(n.offsetWidth,n.style.transition=""),r&&(r.offsetWidth,r.style.transition=""),l&&l.forEach(y=>{y.offsetWidth,y.style.transition=""})})}function $(c,s=!0){const{value:n}=u,{value:r}=a,{value:y}=f;if(!y||!n)return;s||(n.style.transition="none",r&&(r.style.transition="none"));const{offsetHeight:w,offsetWidth:S}=c,{top:B,left:_}=c.getBoundingClientRect(),{top:p,left:I}=y.getBoundingClientRect(),V=B-p,M=_-I;n.style.top=`${V}px`,n.style.height=`${w}px`,r&&(r.style.top=`${V}px`,r.style.height=`${w}px`,r.style.maxWidth=`${S+M}px`),n.offsetHeight,r&&r.offsetHeight,s||(n.style.transition="",r&&(r.style.transition=""))}const o=Ge(()=>{d(!0)},128);function h(c,s=!0){const n=/^#([^#]+)$/.exec(c);if(!n)return;const r=document.getElementById(n[1]);r&&(i.value=c,r.scrollIntoView(),s||g(),o())}function d(c=!0){var s;const n=[],r=pe((s=e.offsetTarget)!==null&&s!==void 0?s:document);t.forEach(_=>{const p=/#([^#]+)$/.exec(_);if(!p)return;const I=document.getElementById(p[1]);if(I&&r){const{top:V,height:M}=rt(I,r);n.push({top:V,height:M,href:_})}}),n.sort((_,p)=>_.top>p.top?1:(_.top===p.top&&_.height<p.height,-1));const y=i.value,{bound:w,ignoreGap:S}=e,B=n.reduce((_,p)=>p.top+p.height<0?S?p:_:p.top<=w?_===null?p:p.top===_.top?p.href===y?p:_:p.top>_.top?p:_:_,null);c||g(),B?i.value=B.href:i.value=null}return Ce(U,{activeHref:i,mergedClsPrefix:Y(e,"mergedClsPrefix"),updateBarPosition:$,setActiveHref:h,collectedLinkHrefs:t,titleEls:l}),te(()=>{document.addEventListener("scroll",o,!0),h(window.location.hash),d(!1)}),Re(()=>{h(window.location.hash),d(!1)}),ve(()=>{document.removeEventListener("scroll",o,!0)}),W(i,c=>{if(c===null){const{value:s}=a;s&&!v.value&&(s.style.maxWidth="0")}}),{selfRef:f,barRef:u,slotRef:a,setActiveHref:h,activeHref:i,isBlockType:v,mergedShowRail:k}},render(){var e;const{mergedClsPrefix:t,mergedShowRail:l,isBlockType:i,$slots:a}=this,u=E("div",{class:[`${t}-anchor`,i&&`${t}-anchor--block`,l&&`${t}-anchor--show-rail`],ref:"selfRef"},l&&this.showBackground?E("div",{ref:"slotRef",class:`${t}-anchor-link-background`}):null,l?E("div",{class:`${t}-anchor-rail`},E("div",{ref:"barRef",class:[`${t}-anchor-rail__bar`,this.activeHref!==null&&`${t}-anchor-rail__bar--active`]})):null,(e=a.default)===null||e===void 0?void 0:e.call(a));return this.internalScrollable?E(Te,null,{default:()=>u}):u}}),at=Object.assign(Object.assign(Object.assign(Object.assign({},D.props),{affix:Boolean}),oe),ne),st=z({name:"Anchor",props:at,setup(e,{slots:t}){const{mergedClsPrefixRef:l,inlineThemeDisabled:i}=Q(e),a=D("Anchor","-anchor",tt,Ee,e,l),u=T(null),f=R(()=>{const{self:{railColor:k,linkColor:g,railColorActive:$,linkTextColor:o,linkTextColorHover:h,linkTextColorPressed:d,linkTextColorActive:c,linkFontSize:s,railWidth:n,linkPadding:r,borderRadius:y},common:{cubicBezierEaseInOut:w}}=a.value;return{"--n-link-border-radius":y,"--n-link-color":g,"--n-link-font-size":s,"--n-link-text-color":o,"--n-link-text-color-hover":h,"--n-link-text-color-active":c,"--n-link-text-color-pressed":d,"--n-link-padding":r,"--n-bezier":w,"--n-rail-color":k,"--n-rail-color-active":$,"--n-rail-width":n}}),v=i?ge("anchor",void 0,f,e):void 0;return{scrollTo(k){var g;(g=u.value)===null||g===void 0||g.setActiveHref(k)},renderAnchor:()=>(v==null||v.onRender(),E(it,Object.assign({ref:u,style:i?void 0:f.value,class:v==null?void 0:v.themeClass.value},ie(e,lt),{mergedClsPrefix:l.value}),t))}},render(){return this.affix?E(et,Object.assign({},ie(this,Je)),{default:this.renderAnchor}):this.renderAnchor()}}),ct=N([P("code",`
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
 }`]}]),ut=Object.assign(Object.assign({},D.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),dt=z({name:"Code",props:ut,setup(e,{slots:t}){const{internalNoHighlight:l}=e,{mergedClsPrefixRef:i,inlineThemeDisabled:a}=Q(),u=T(null),f=l?{value:void 0}:Ye(e),v=(d,c,s)=>{const{value:n}=f;return!n||!(d&&n.getLanguage(d))?null:n.highlight(s?c.trim():c,{language:d}).value},k=R(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),g=()=>{if(t.default)return;const{value:d}=u;if(!d)return;const{language:c}=e,s=e.uri?window.decodeURIComponent(e.code):e.code;if(c){const r=v(c,s,e.trim);if(r!==null){if(e.inline)d.innerHTML=r;else{const y=d.querySelector(".__code__");y&&d.removeChild(y);const w=document.createElement("pre");w.className="__code__",w.innerHTML=r,d.appendChild(w)}return}}if(e.inline){d.textContent=s;return}const n=d.querySelector(".__code__");if(n)n.textContent=s;else{const r=document.createElement("pre");r.className="__code__",r.textContent=s,d.innerHTML="",d.appendChild(r)}};te(g),W(Y(e,"language"),g),W(Y(e,"code"),g),l||W(f,g);const $=D("Code","-code",ct,Be,e,i),o=R(()=>{const{common:{cubicBezierEaseInOut:d,fontFamilyMono:c},self:{textColor:s,fontSize:n,fontWeightStrong:r,lineNumberTextColor:y,"mono-3":w,"hue-1":S,"hue-2":B,"hue-3":_,"hue-4":p,"hue-5":I,"hue-5-2":V,"hue-6":M,"hue-6-2":_e}}=$.value,{internalFontSize:re}=e;return{"--n-font-size":re?`${re}px`:n,"--n-font-family":c,"--n-font-weight-strong":r,"--n-bezier":d,"--n-text-color":s,"--n-mono-3":w,"--n-hue-1":S,"--n-hue-2":B,"--n-hue-3":_,"--n-hue-4":p,"--n-hue-5":I,"--n-hue-5-2":V,"--n-hue-6":M,"--n-hue-6-2":_e,"--n-line-number-text-color":y}}),h=a?ge("code",R(()=>`${e.internalFontSize||"a"}`),o,e):void 0;return{mergedClsPrefix:i,codeRef:u,mergedShowLineNumbers:k,lineNumbers:R(()=>{let d=1;const c=[];let s=!1;for(const n of e.code)n===`
`?(s=!0,c.push(d++)):s=!1;return s||c.push(d++),c.join(`
`)}),cssVars:a?void 0:o,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){var e,t;const{mergedClsPrefix:l,wordWrap:i,mergedShowLineNumbers:a,onRender:u}=this;return u==null||u(),E("code",{class:[`${l}-code`,this.themeClass,i&&`${l}-code--word-wrap`,a&&`${l}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},a?E("pre",{class:`${l}-code__line-numbers`},this.lineNumbers):null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}}),ft=N([P("skeleton",`
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
 `)]),ht=Object.assign(Object.assign({},D.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),Z=z({name:"Skeleton",inheritAttrs:!1,props:ht,setup(e){Ue();const{mergedClsPrefixRef:t}=Q(e),l=D("Skeleton","-skeleton",ft,Se,e,t);return{mergedClsPrefix:t,style:R(()=>{var i,a;const u=l.value,{common:{cubicBezierEaseInOut:f}}=u,v=u.self,{color:k,colorEnd:g,borderRadius:$}=v;let o;const{circle:h,sharp:d,round:c,width:s,height:n,size:r,text:y,animated:w}=e;r!==void 0&&(o=v[Pe("height",r)]);const S=h?(i=s??n)!==null&&i!==void 0?i:o:s,B=(a=h?s??n:n)!==null&&a!==void 0?a:o;return{display:y?"inline-block":"",verticalAlign:y?"-0.125em":"",borderRadius:h?"50%":c?"4096px":d?"":$,width:typeof S=="number"?ae(S):S,height:typeof B=="number"?ae(B):B,animation:w?"":"none","--n-bezier":f,"--n-color-start":k,"--n-color-end":g}})}},render(){const{repeat:e,style:t,mergedClsPrefix:l,$attrs:i}=this,a=E("div",Ae({class:`${l}-skeleton`,style:t},i));return e>1?E(L,null,Oe(e,null).map(u=>[a,`
`])):a}}),vt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},mt=F("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M160 368L32 256l128-112"},null,-1),gt=F("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 368l128-112l-128-112"},null,-1),pt=[mt,gt],_t=z({name:"CodeOutline",render:function(t,l){return b(),O("svg",vt,pt)}}),bt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},xt=F("rect",{x:"128",y:"128",width:"336",height:"336",rx:"57",ry:"57",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),yt=F("path",{d:"M383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),kt=[xt,yt],wt=z({name:"CopyOutline",render:function(t,l){return b(),O("svg",bt,kt)}}),J=z({__name:"card",props:{code:{}},setup(e){const t=T(!1);return(l,i)=>(b(),A(m(Ve),null,{"header-extra":x(()=>[C(m(G),null,{default:x(()=>[C(m(se),{trigger:"hover"},{trigger:x(()=>[C(m(ce),{onClick:i[0]||(i[0]=a=>m(Ne).success("复制成功").error("复制失败").run(m(ze)(l.code))),text:""},{icon:x(()=>[C(m(ue),{component:m(wt)},null,8,["component"])]),_:1})]),default:x(()=>[de(" 复制代码 ")]),_:1}),C(m(se),{trigger:"hover"},{trigger:x(()=>[C(m(ce),{onClick:i[1]||(i[1]=a=>t.value=!t.value),text:""},{icon:x(()=>[C(m(ue),{component:m(_t)},null,8,["component"])]),_:1})]),default:x(()=>[de(" "+Le(t.value?"收起代码":"显示代码"),1)]),_:1})]),_:1})]),footer:x(()=>[C(m(He),{show:t.value},{default:x(()=>[C(m(ee),{"x-scrollable":"",style:{"max-height":"50vh"}},{default:x(()=>[C(m(dt),{code:l.code,language:"javascript","show-line-numbers":""},null,8,["code"])]),_:1})]),_:1},8,["show"])]),default:x(()=>[Ie(l.$slots,"default")]),_:3}))}}),$t={class:"my-canvas-tools"},Ct={class:"list-box"},Rt=z({__name:"index",setup(e){const t=location.hash.replace(/#[^/]+/,"")+"#",l=[["original","仅需初始化 _Canvas"],["center","中心点"],["shortcutKey","快捷键"],["axis","坐标轴"],["point","点"],["line","线"],["polygon","面"]];function i(g){const $=[],o=[];for(let h=0;h<g.length;h++)h%2===0?o.push(g[h]):$.push(g[h]);return[o,$]}const[a,u]=i(l),f=T({});(async function(){const g=Object.assign({"./demo/axis.vue":()=>j(()=>import("./axis-D_aZDWNF.js"),[],import.meta.url).then(o=>o.default),"./demo/center.vue":()=>j(()=>import("./center-DhH0efib.js"),[],import.meta.url).then(o=>o.default),"./demo/line.vue":()=>j(()=>import("./line-mme-zZ2T.js"),[],import.meta.url).then(o=>o.default),"./demo/original.vue":()=>j(()=>import("./original-CaSuBOch.js"),[],import.meta.url).then(o=>o.default),"./demo/point.vue":()=>j(()=>import("./point-DZOc2Qa7.js"),[],import.meta.url).then(o=>o.default),"./demo/polygon.vue":()=>j(()=>import("./polygon-C5x8Nyu1.js"),[],import.meta.url).then(o=>o.default),"./demo/shortcutKey.vue":()=>j(()=>import("./shortcutKey-yIbEqP5a.js"),[],import.meta.url).then(o=>o.default)}),$=Object.assign({"./demo/axis.vue":()=>j(()=>import("./axis-DYf09sEH.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url),"./demo/center.vue":()=>j(()=>import("./center-DID7xLts.js"),__vite__mapDeps([14,1,2,3,4,12,5,6,7,8,11,15]),import.meta.url),"./demo/line.vue":()=>j(()=>import("./line-BH1jG4y_.js"),__vite__mapDeps([16,1,2,3,4,17]),import.meta.url),"./demo/original.vue":()=>j(()=>import("./original-Cnc2mOIr.js"),__vite__mapDeps([18,1,2,3,4,19]),import.meta.url),"./demo/point.vue":()=>j(()=>import("./point-BROHdhgk.js"),__vite__mapDeps([20,1,2,3,4,21]),import.meta.url),"./demo/polygon.vue":()=>j(()=>import("./polygon-DAq8S6Cr.js"),__vite__mapDeps([22,1,2,3,4,23]),import.meta.url),"./demo/shortcutKey.vue":()=>j(()=>import("./shortcutKey-Cu3JFn4S.js"),__vite__mapDeps([24,1,2,3,4,11,10,25,26]),import.meta.url)});for(const o in g){const h=o.split("/").pop().replace(".vue",""),d=await g[o](),c=await $[o]();f.value[h]={component:De(c.default),code:d}}})();const v=T(window.innerWidth>=1280),k=()=>{v.value=window.innerWidth>=1280};return window.addEventListener("resize",k),Me(()=>{window.removeEventListener("resize",k)}),(g,$)=>(b(),O("div",$t,[C(m(ee),{style:{"margin-right":"30px"}},{default:x(()=>[F("div",Ct,[v.value?(b(),O(L,{key:0},[C(m(G),{vertical:""},{default:x(()=>[(b(!0),O(L,null,K(m(a),o=>(b(),O(L,{key:o[0]},[f.value[o[0]]?(b(),A(J,{key:0,id:o[0],title:o[1],code:f.value[o[0]].code},{default:x(()=>[(b(),A(X(f.value[o[0]].component)))]),_:2},1032,["id","title","code"])):(b(),A(m(Z),{key:1,id:o[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}),C(m(G),{vertical:""},{default:x(()=>[(b(!0),O(L,null,K(m(u),o=>(b(),O(L,{key:o[0]},[f.value[o[0]]?(b(),A(J,{key:0,id:o[0],title:o[1],code:f.value[o[0]].code},{default:x(()=>[(b(),A(X(f.value[o[0]].component)))]),_:2},1032,["id","title","code"])):(b(),A(m(Z),{key:1,id:o[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1})],64)):(b(),A(m(G),{key:1,style:{width:"100%"},vertical:""},{default:x(()=>[(b(),O(L,null,K(l,o=>(b(),O(L,{key:o[0]},[f.value[o[0]]?(b(),A(J,{key:0,id:o[0],title:o[1],code:f.value[o[0]].code},{default:x(()=>[(b(),A(X(f.value[o[0]].component)))]),_:2},1032,["id","title","code"])):(b(),A(m(Z),{key:1,id:o[0],sharp:!1},null,8,["id"]))],64))),64))]),_:1}))])]),_:1}),C(m(ee),{style:{width:"200px","flex-shrink":"0"}},{default:x(()=>[C(m(st),{type:"block",bound:100,"ignore-gap":"","offset-target":".my-canvas-tools"},{default:x(()=>[(b(),O(L,null,K(l,o=>C(m(nt),{key:o[0],href:t+o[0],title:o[1]},null,8,["href","title"])),64))]),_:1})]),_:1})]))}}),Pt=We(Rt,[["__scopeId","data-v-60c95a62"]]);export{Pt as default};
