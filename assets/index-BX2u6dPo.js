const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Attraction-C7HcUNJ9.js","assets/index-C79Lo4xg.js","assets/index-B5kna_Ud.css","assets/a-0G5CvdAO.js","assets/Attraction-DXBHlzUI.css","assets/Province-DewhFVzf.js","assets/blockquote-D3v0f01h.js","assets/text-BPorn9Rk.js","assets/Province-D1ajTJu2.css","assets/index-BePODDYF.js","assets/Switch-hSxRFdxL.js","assets/index-9H3to3Gp.css","assets/arc-B1DBfGnv.js","assets/updateData-DMNo0jra.js","assets/ButtonGroup-DodLCtEe.js","assets/updateData-BFH6DfQG.css","assets/arcTo-BnnDv-ah.js","assets/axis-w-2rQ0Hk.js","assets/headers-B5Z3pIOP.js","assets/HelpCircleOutline-BIL57lqJ.js","assets/InputNumber-UuDtaU5D.js","assets/Input-DnigbxZ8.js","assets/Suffix-BHtB1R7P.js","assets/use-locale-DwOTBB1x.js","assets/Flex-DdsqlzbQ.js","assets/p-DIkHLQFR.js","assets/RadioGroup-wmFpuQwa.js","assets/RadioButton-ovkZukn6.js","assets/axis-Dmtd-QOR.css","assets/bezierCurve-BmETzo2K.js","assets/center-DRKH7xoO.js","assets/custom-Cx_Gmtl3.js","assets/ellipse-BvejnQVS.js","assets/layer-Vhx4PhX0.js","assets/line-DD4iQha4.js","assets/original-DKBbgjHM.js","assets/point-CJTHXkZO.js","assets/polygon-DqdjItib.js","assets/shortcutKey-CdoE4S-G.js","assets/show-DqPradSe.js","assets/show-DYaGD_5c.css","assets/text-x7EVkbFg.js"])))=>i.map(i=>d[i]);
import{i as ye,f as ge,g as j,h as we,j as S,k as z,d as N,l as A,m as le,n as Ee,p as R,q as ie,s as ce,v as pe,x as Te,y as re,z as Re,A as W,C as Ce,D as $e,S as Pe,E as je,F as Ae,G as Oe,H as fe,I as V,J as oe,K as he,L as F,M as Ie,N as be,O as Le,P as Se,Q as Be,R as B,T as Ve,U as De,V as ve,c as I,o as x,W as X,X as Ne,Y as ze,Z as L,w as b,b as y,$ as He,u as s,a0 as Me,a1 as Q,a2 as q,e as G,B as U,a3 as Y,t as me,a4 as We,a5 as Fe,a6 as Ke,a7 as qe,a8 as Ge,a9 as Ue,aa as Ye,ab as Je,_ as xe,ac as Qe,ad as Xe,ae as Ze,af as et,ag as J,ah as tt,ai as f}from"./index-C79Lo4xg.js";import{S as se}from"./Scrollbar-0Xa-lE6h.js";import{u as ot,a as nt}from"./use-collection-DsowfuNF.js";import{g as rt}from"./attribute-Cz32yFEB.js";function ke(t){return typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t}let _e=!1;function lt(){if(ye&&window.CSS&&!_e&&(_e=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function it(t,o){const r=ge(we,null);return j(()=>t.hljs||(r==null?void 0:r.mergedHljsRef.value))}const at=S("affix",[z("affixed",{position:"fixed"},[z("absolute-positioned",{position:"absolute"})])]);function st(t){return t instanceof HTMLElement?t.scrollTop:window.scrollY}function ct(t){return t instanceof HTMLElement?t.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const ue={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},ut=pe(ue),dt=N({name:"Affix",props:ue,setup(t){const{mergedClsPrefixRef:o}=le(t);Ee("-affix",at,o);let r=null;const l=R(!1),u=R(!1),h=R(null),k=R(null),c=j(()=>u.value||l.value),d=j(()=>{var n,a;return(a=(n=t.triggerTop)!==null&&n!==void 0?n:t.offsetTop)!==null&&a!==void 0?a:t.top}),E=j(()=>{var n,a;return(a=(n=t.top)!==null&&n!==void 0?n:t.triggerTop)!==null&&a!==void 0?a:t.offsetTop}),C=j(()=>{var n,a;return(a=(n=t.bottom)!==null&&n!==void 0?n:t.triggerBottom)!==null&&a!==void 0?a:t.offsetBottom}),P=j(()=>{var n,a;return(a=(n=t.triggerBottom)!==null&&n!==void 0?n:t.offsetBottom)!==null&&a!==void 0?a:t.bottom}),w=R(null),i=()=>{const{target:n,listenTo:a}=t;n?r=n():a?r=ke(a):r=document,r&&(r.addEventListener("scroll",v),v())};function v(){Te(e)}function e(){const{value:n}=w;if(!r||!n)return;const a=st(r);if(c.value){k.value!==null&&a<k.value&&(l.value=!1,k.value=null),h.value!==null&&a>h.value&&(u.value=!1,h.value=null);return}const g=ct(r),p=n.getBoundingClientRect(),_=p.top-g.top,m=g.bottom-p.bottom,O=d.value,D=P.value;O!==void 0&&_<=O?(l.value=!0,k.value=a-(O-_)):(l.value=!1,k.value=null),D!==void 0&&m<=D?(u.value=!0,h.value=a+D-m):(u.value=!1,h.value=null)}return ie(()=>{i()}),ce(()=>{r&&r.removeEventListener("scroll",v)}),{selfRef:w,affixed:c,mergedClsPrefix:o,mergedstyle:j(()=>{const n={};return l.value&&d.value!==void 0&&E.value!==void 0&&(n.top=`${E.value}px`),u.value&&P.value!==void 0&&C.value!==void 0&&(n.bottom=`${C.value}px`),n})}},render(){const{mergedClsPrefix:t}=this;return A("div",{ref:"selfRef",class:[`${t}-affix`,{[`${t}-affix--affixed`]:this.affixed,[`${t}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),ne=$e("n-anchor"),ft={title:String,href:String},ht=N({name:"AnchorLink",props:ft,slots:Object,setup(t,{slots:o}){const r=R(null),l=ge(ne),u=re(t,"href"),h=Re(()=>u.value&&u.value===l.activeHref.value);ot(ne,"collectedLinkHrefs",u),nt(ne,"titleEls",()=>r.value),W(h,c=>{c&&r.value&&l.updateBarPosition(r.value)});function k(){t.href!==void 0&&l.setActiveHref(t.href)}return()=>{var c;const{value:d}=l.mergedClsPrefix;return A("div",{class:[`${d}-anchor-link`,h.value&&`${d}-anchor-link--active`]},A("a",{ref:r,class:[`${d}-anchor-link__title`],href:t.href,title:rt(t.title),onClick:k},{default:()=>Ce(o.title,()=>[t.title])}),(c=o.default)===null||c===void 0?void 0:c.call(o))}}});function vt(t,o){const{top:r,height:l}=t.getBoundingClientRect(),u=o instanceof HTMLElement?o.getBoundingClientRect().top:0;return{top:r-u,height:l}}const de={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},mt=pe(de),_t=N({name:"BaseAnchor",props:Object.assign(Object.assign({},de),{mergedClsPrefix:{type:String,required:!0}}),setup(t){const o=[],r=[],l=R(null),u=R(null),h=R(null),k=R(null);let c=!1;const d=j(()=>t.type==="block"),E=j(()=>!d.value&&t.showRail);function C(){const{value:g}=h,{value:p}=u;g&&(g.style.transition="none"),p&&(p.style.transition="none"),r&&r.forEach(_=>{_.style.transition="none"}),Oe(()=>{const{value:_}=h,{value:m}=u;_&&(_.offsetWidth,_.style.transition=""),m&&(m.offsetWidth,m.style.transition=""),r&&r.forEach(O=>{O.offsetWidth,O.style.transition=""})})}function P(g,p=!0){const{value:_}=h,{value:m}=u,{value:O}=k;if(!O||!_)return;p||(_.style.transition="none",m&&(m.style.transition="none"));const{offsetHeight:D,offsetWidth:K}=g,{top:M,left:$}=g.getBoundingClientRect(),{top:T,left:H}=O.getBoundingClientRect(),Z=M-T,ae=$-H;_.style.top=`${Z}px`,_.style.height=`${D}px`,m&&(m.style.top=`${Z}px`,m.style.height=`${D}px`,m.style.maxWidth=`${K+ae}px`),_.offsetHeight,m&&m.offsetHeight,p||(_.style.transition="",m&&(m.style.transition=""))}let w,i=!1,v=!1;const e=()=>{if(v)i=!0;else{if(c)return;a(!0),v=!0,clearTimeout(w),w=setTimeout(()=>{v=!1,i&&(i=!1,e())},128)}};function n(g,p=!0){const _=/^#([^#]+)$/.exec(g);if(!_)return;const m=document.getElementById(_[1]);m&&(c=!0,l.value=g,m.scrollIntoView(),p||C(),i=!1,setTimeout(()=>{c=!1},0))}function a(g=!0){var p;const _=[],m=ke((p=t.offsetTarget)!==null&&p!==void 0?p:document);o.forEach($=>{const T=/#([^#]+)$/.exec($);if(!T)return;const H=document.getElementById(T[1]);if(H&&m){const{top:Z,height:ae}=vt(H,m);_.push({top:Z,height:ae,href:$})}}),_.sort(($,T)=>$.top>T.top?1:($.top===T.top&&$.height<T.height,-1));const O=l.value,{bound:D,ignoreGap:K}=t,M=_.reduce(($,T)=>T.top+T.height<0?K?T:$:T.top<=D?$===null?T:T.top===$.top?T.href===O?T:$:T.top>$.top?T:$:$,null);g||C(),M?l.value=M.href:l.value=null}return je(ne,{activeHref:l,mergedClsPrefix:re(t,"mergedClsPrefix"),updateBarPosition:P,setActiveHref:n,collectedLinkHrefs:o,titleEls:r}),ie(()=>{document.addEventListener("scroll",e,!0),n(window.location.hash),a(!1)}),Ae(()=>{n(window.location.hash),a(!1)}),ce(()=>{clearTimeout(w),document.removeEventListener("scroll",e,!0)}),W(l,g=>{if(g===null){const{value:p}=u;p&&!d.value&&(p.style.maxWidth="0")}}),{selfRef:k,barRef:h,slotRef:u,setActiveHref:n,activeHref:l,isBlockType:d,mergedShowRail:E}},render(){var t;const{mergedClsPrefix:o,mergedShowRail:r,isBlockType:l,$slots:u}=this,h=A("div",{class:[`${o}-anchor`,l&&`${o}-anchor--block`,r&&`${o}-anchor--show-rail`],ref:"selfRef"},r&&this.showBackground?A("div",{ref:"slotRef",class:`${o}-anchor-link-background`}):null,r?A("div",{class:`${o}-anchor-rail`},A("div",{ref:"barRef",class:[`${o}-anchor-rail__bar`,this.activeHref!==null&&`${o}-anchor-rail__bar--active`]})):null,(t=u.default)===null||t===void 0?void 0:t.call(u));return this.internalScrollable?A(Pe,null,{default:()=>h}):h}}),gt=S("anchor",`
 position: relative;
`,[fe("block",`
 padding-left: var(--n-rail-width);
 `,[S("anchor-link",[V("+, >",[S("anchor-link",`
 margin-top: .5em;
 `)])]),S("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),fe("show-rail",[V(">",[S("anchor-link","padding-left: 0;")])])]),z("block",[S("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[z("active",`
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
 `,[oe("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[z("active",{backgroundColor:"var(--n-rail-color-active)"})])]),S("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[z("active",[V(">",[oe("title",`
 color: var(--n-link-text-color-active);
 `)])]),oe("title",`
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
 `,[V("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),V("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),pt=Object.assign(Object.assign(Object.assign(Object.assign({},F.props),{affix:Boolean}),ue),de),bt=N({name:"Anchor",props:pt,setup(t,{slots:o}){const{mergedClsPrefixRef:r,inlineThemeDisabled:l}=le(t),u=F("Anchor","-anchor",gt,Ie,t,r),h=R(null),k=j(()=>{const{self:{railColor:d,linkColor:E,railColorActive:C,linkTextColor:P,linkTextColorHover:w,linkTextColorPressed:i,linkTextColorActive:v,linkFontSize:e,railWidth:n,linkPadding:a,borderRadius:g},common:{cubicBezierEaseInOut:p}}=u.value;return{"--n-link-border-radius":g,"--n-link-color":E,"--n-link-font-size":e,"--n-link-text-color":P,"--n-link-text-color-hover":w,"--n-link-text-color-active":v,"--n-link-text-color-pressed":i,"--n-link-padding":a,"--n-bezier":p,"--n-rail-color":d,"--n-rail-color-active":C,"--n-rail-width":n}}),c=l?be("anchor",void 0,k,t):void 0;return{scrollTo(d){var E;(E=h.value)===null||E===void 0||E.setActiveHref(d)},renderAnchor:()=>(c==null||c.onRender(),A(_t,Object.assign({ref:h,style:l?void 0:k.value,class:c==null?void 0:c.themeClass.value},he(t,mt),{mergedClsPrefix:r.value}),o))}},render(){return this.affix?A(dt,Object.assign({},he(this,ut)),{default:this.renderAnchor}):this.renderAnchor()}}),xt=V([S("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[z("show-line-numbers",`
 display: flex;
 `),oe("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),z("word-wrap",[V("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),V("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),V("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:t})=>{const o=`${t.bPrefix}code`;return[`${o} .hljs-comment,
 ${o} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${o} .hljs-doctag,
 ${o} .hljs-keyword,
 ${o} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${o} .hljs-section,
 ${o} .hljs-name,
 ${o} .hljs-selector-tag,
 ${o} .hljs-deletion,
 ${o} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${o} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${o} .hljs-string,
 ${o} .hljs-regexp,
 ${o} .hljs-addition,
 ${o} .hljs-attribute,
 ${o} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${o} .hljs-built_in,
 ${o} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${o} .hljs-attr,
 ${o} .hljs-variable,
 ${o} .hljs-template-variable,
 ${o} .hljs-type,
 ${o} .hljs-selector-class,
 ${o} .hljs-selector-attr,
 ${o} .hljs-selector-pseudo,
 ${o} .hljs-number {
 color: var(--n-hue-6);
 }`,`${o} .hljs-symbol,
 ${o} .hljs-bullet,
 ${o} .hljs-link,
 ${o} .hljs-meta,
 ${o} .hljs-selector-id,
 ${o} .hljs-title {
 color: var(--n-hue-2);
 }`,`${o} .hljs-emphasis {
 font-style: italic;
 }`,`${o} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${o} .hljs-link {
 text-decoration: underline;
 }`]}]),kt=Object.assign(Object.assign({},F.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),yt=N({name:"Code",props:kt,setup(t,{slots:o}){const{internalNoHighlight:r}=t,{mergedClsPrefixRef:l,inlineThemeDisabled:u}=le(),h=R(null),k=r?{value:void 0}:it(t),c=(i,v,e)=>{const{value:n}=k;return!n||!(i&&n.getLanguage(i))?null:n.highlight(e?v.trim():v,{language:i}).value},d=j(()=>t.inline||t.wordWrap?!1:t.showLineNumbers),E=()=>{if(o.default)return;const{value:i}=h;if(!i)return;const{language:v}=t,e=t.uri?window.decodeURIComponent(t.code):t.code;if(v){const a=c(v,e,t.trim);if(a!==null){if(t.inline)i.innerHTML=a;else{const g=i.querySelector(".__code__");g&&i.removeChild(g);const p=document.createElement("pre");p.className="__code__",p.innerHTML=a,i.appendChild(p)}return}}if(t.inline){i.textContent=e;return}const n=i.querySelector(".__code__");if(n)n.textContent=e;else{const a=document.createElement("pre");a.className="__code__",a.textContent=e,i.innerHTML="",i.appendChild(a)}};ie(E),W(re(t,"language"),E),W(re(t,"code"),E),r||W(k,E);const C=F("Code","-code",xt,Le,t,l),P=j(()=>{const{common:{cubicBezierEaseInOut:i,fontFamilyMono:v},self:{textColor:e,fontSize:n,fontWeightStrong:a,lineNumberTextColor:g,"mono-3":p,"hue-1":_,"hue-2":m,"hue-3":O,"hue-4":D,"hue-5":K,"hue-5-2":M,"hue-6":$,"hue-6-2":T}}=C.value,{internalFontSize:H}=t;return{"--n-font-size":H?`${H}px`:n,"--n-font-family":v,"--n-font-weight-strong":a,"--n-bezier":i,"--n-text-color":e,"--n-mono-3":p,"--n-hue-1":_,"--n-hue-2":m,"--n-hue-3":O,"--n-hue-4":D,"--n-hue-5":K,"--n-hue-5-2":M,"--n-hue-6":$,"--n-hue-6-2":T,"--n-line-number-text-color":g}}),w=u?be("code",j(()=>`${t.internalFontSize||"a"}`),P,t):void 0;return{mergedClsPrefix:l,codeRef:h,mergedShowLineNumbers:d,lineNumbers:j(()=>{let i=1;const v=[];let e=!1;for(const n of t.code)n===`
`?(e=!0,v.push(i++)):e=!1;return e||v.push(i++),v.join(`
`)}),cssVars:u?void 0:P,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){var t,o;const{mergedClsPrefix:r,wordWrap:l,mergedShowLineNumbers:u,onRender:h}=this;return h==null||h(),A("code",{class:[`${r}-code`,this.themeClass,l&&`${r}-code--word-wrap`,u&&`${r}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},u?A("pre",{class:`${r}-code__line-numbers`},this.lineNumbers):null,(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t))}}),wt=V([S("skeleton",`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),V("@keyframes skeleton-loading",`
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
 `)]),Et=Object.assign(Object.assign({},F.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),ee=N({name:"Skeleton",inheritAttrs:!1,props:Et,setup(t){lt();const{mergedClsPrefixRef:o}=le(t),r=F("Skeleton","-skeleton",wt,Ve,t,o);return{mergedClsPrefix:o,style:j(()=>{var l,u;const h=r.value,{common:{cubicBezierEaseInOut:k}}=h,c=h.self,{color:d,colorEnd:E,borderRadius:C}=c;let P;const{circle:w,sharp:i,round:v,width:e,height:n,size:a,text:g,animated:p}=t;a!==void 0&&(P=c[De("height",a)]);const _=w?(l=e??n)!==null&&l!==void 0?l:P:e,m=(u=w?e??n:n)!==null&&u!==void 0?u:P;return{display:g?"inline-block":"",verticalAlign:g?"-0.125em":"",borderRadius:w?"50%":v?"4096px":i?"":C,width:typeof _=="number"?ve(_):_,height:typeof m=="number"?ve(m):m,animation:p?"":"none","--n-bezier":k,"--n-color-start":d,"--n-color-end":E}})}},render(){const{repeat:t,style:o,mergedClsPrefix:r,$attrs:l}=this,u=A("div",Se({class:`${r}-skeleton`,style:o},l));return t>1?A(B,null,Be(t,null).map(h=>[u,`
`])):u}}),Tt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Rt=X("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M160 368L32 256l128-112"},null,-1),Ct=X("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 368l128-112l-128-112"},null,-1),$t=[Rt,Ct],Pt=N({name:"CodeOutline",render:function(o,r){return x(),I("svg",Tt,$t)}}),jt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},At=X("path",{d:"M320 146s24.36-12-64-12a160 160 0 1 0 160 160",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Ot=X("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 58l80 80l-80 80"},null,-1),It=[At,Ot],Lt=N({name:"Refresh",render:function(o,r){return x(),I("svg",jt,It)}}),St=N({__name:"card",props:{path:{},code:{},component:{}},setup(t){const o=R(!1),r=R(),l=R();W(()=>Je.value.theme,c=>{var d;return(d=l.value)==null?void 0:d.myCanvas.setTheme(c)});const u=R(!1),h=R();let k;return ie(()=>{h.value=Ne(r.value.$el),k=ze(c=>u.value=c,r.value.$el)}),ce(()=>{var c;k==null||k(),(c=l.value)==null||c.myCanvas.destroy()}),(c,d)=>(x(),L(s(Ye),{ref_key:"cardRef",ref:r,hoverable:""},{"header-extra":b(()=>[y(s(Q),null,{default:b(()=>[y(s(q),{trigger:"hover"},{trigger:b(()=>[y(s(U),{onClick:d[0]||(d[0]=E=>{var C;return(C=l.value)==null?void 0:C.myCanvas.returnToOrigin()}),text:""},{icon:b(()=>[y(s(Y),{component:s(Lt)},null,8,["component"])]),_:1})]),default:b(()=>[d[3]||(d[3]=G(" 复位视图 ",-1))]),_:1}),y(s(q),{trigger:"hover"},{trigger:b(()=>[y(s(U),{onClick:h.value,text:""},{icon:b(()=>[y(s(Y),{component:u.value?s(We):s(Fe)},null,8,["component"])]),_:1},8,["onClick"])]),default:b(()=>[G(" "+me(u.value?"退出全屏":"全屏"),1)]),_:1}),y(s(q),{trigger:"hover"},{trigger:b(()=>[y(s(U),{tag:"a",href:"https://github.com/ADMINnhanh/nhanh-frontend-view/tree/main/src/views/canvas/_Canvas/demo/"+t.path,target:"_blank",text:""},{icon:b(()=>[y(s(Y),{component:s(Ke)},null,8,["component"])]),_:1},8,["href"])]),default:b(()=>[d[4]||(d[4]=G(" 在 GitHub 查看源码 ",-1))]),_:1}),y(s(q),{trigger:"hover"},{trigger:b(()=>[y(s(U),{onClick:d[1]||(d[1]=E=>s(qe).success("复制完成").error("复制失败").run(s(Ge)(t.code))),text:""},{icon:b(()=>[y(s(Y),{component:s(Ue)},null,8,["component"])]),_:1})]),default:b(()=>[d[5]||(d[5]=G(" 复制代码 ",-1))]),_:1}),y(s(q),{trigger:"hover"},{trigger:b(()=>[y(s(U),{onClick:d[2]||(d[2]=E=>o.value=!o.value),text:""},{icon:b(()=>[y(s(Y),{component:s(Pt)},null,8,["component"])]),_:1})]),default:b(()=>[G(" "+me(o.value?"收起代码":"显示代码"),1)]),_:1})]),_:1})]),default:b(()=>[(x(),L(He(t.component),{ref_key:"componentRef",ref:l},null,512)),y(s(Me),{show:o.value},{default:b(()=>[y(s(se),{"x-scrollable":"",style:{"max-height":"50vh","margin-top":"10px"}},{default:b(()=>[y(s(yt),{code:t.code,language:"javascript","show-line-numbers":""},null,8,["code"])]),_:1})]),_:1},8,["show"])]),_:1},512))}}),te=xe(St,[["__scopeId","data-v-b4a68cc1"]]),Bt={class:"my-canvas-tools"},Vt={class:"list-box"},Dt=N({__name:"index",setup(t){const o=location.hash.replace(/(#[^/]+)*$/,"#"),r=[["China%2Findex.vue","最佳实践 - 中国地图"]],l=[["text.vue","文字"],["point.vue","点"],["line.vue","线"],["arc.vue","圆弧"],["polygon.vue","面"],["custom.vue","自定义绘制"],["original.vue","仅需初始化 _Canvas"],["center.vue","中心点"],["shortcutKey.vue","快捷键"],["axis.vue","坐标轴"],["layer.vue","图层 & 层级"],["show.vue","显示条件"]];function u(i){const v=[],e=[];for(let n=0;n<i.length;n++)n%2===0?e.push(i[n]):v.push(i[n]);return[e,v]}const[h,k]=u(l),c=R({});(async function(){const i=Object.assign({"./demo/China/InfoWindow/Attraction.vue":()=>f(()=>import("./Attraction-C41E9W95.js"),[]).then(e=>e.default),"./demo/China/InfoWindow/Province.vue":()=>f(()=>import("./Province-BsAxOTfi.js"),[]).then(e=>e.default),"./demo/China/index.vue":()=>f(()=>import("./index-BaCZVbH_.js"),[]).then(e=>e.default),"./demo/arc.vue":()=>f(()=>import("./arc-DzmprLQX.js"),[]).then(e=>e.default),"./demo/arcTo.vue":()=>f(()=>import("./arcTo-DH8RJDLO.js"),[]).then(e=>e.default),"./demo/axis.vue":()=>f(()=>import("./axis-CLk6eZ-5.js"),[]).then(e=>e.default),"./demo/bezierCurve.vue":()=>f(()=>import("./bezierCurve-U6Ck1b4w.js"),[]).then(e=>e.default),"./demo/center.vue":()=>f(()=>import("./center-Cuzzs4BH.js"),[]).then(e=>e.default),"./demo/custom.vue":()=>f(()=>import("./custom-DX8mM-t-.js"),[]).then(e=>e.default),"./demo/ellipse.vue":()=>f(()=>import("./ellipse-U6Ck1b4w.js"),[]).then(e=>e.default),"./demo/layer.vue":()=>f(()=>import("./layer-Dz0sLPWI.js"),[]).then(e=>e.default),"./demo/line.vue":()=>f(()=>import("./line-_-Km9scS.js"),[]).then(e=>e.default),"./demo/original.vue":()=>f(()=>import("./original-N_PFTFd2.js"),[]).then(e=>e.default),"./demo/point.vue":()=>f(()=>import("./point-DNTvxYZc.js"),[]).then(e=>e.default),"./demo/polygon.vue":()=>f(()=>import("./polygon-Eidwmw6Q.js"),[]).then(e=>e.default),"./demo/shortcutKey.vue":()=>f(()=>import("./shortcutKey-mthZZQA8.js"),[]).then(e=>e.default),"./demo/show.vue":()=>f(()=>import("./show-BPuBuIIa.js"),[]).then(e=>e.default),"./demo/text.vue":()=>f(()=>import("./text-yVgvH-w3.js"),[]).then(e=>e.default)}),v=Object.assign({"./demo/China/InfoWindow/Attraction.vue":()=>f(()=>import("./Attraction-C7HcUNJ9.js"),__vite__mapDeps([0,1,2,3,4])),"./demo/China/InfoWindow/Province.vue":()=>f(()=>import("./Province-DewhFVzf.js"),__vite__mapDeps([5,1,2,3,6,7,8])),"./demo/China/index.vue":()=>f(()=>import("./index-BePODDYF.js"),__vite__mapDeps([9,1,2,5,3,6,7,8,0,4,10,11])),"./demo/arc.vue":()=>f(()=>import("./arc-B1DBfGnv.js"),__vite__mapDeps([12,1,2,13,10,14,15])),"./demo/arcTo.vue":()=>f(()=>import("./arcTo-BnnDv-ah.js"),__vite__mapDeps([16,1,2,15])),"./demo/axis.vue":()=>f(()=>import("./axis-w-2rQ0Hk.js"),__vite__mapDeps([17,1,2,18,19,20,21,22,23,24,25,7,26,27,28])),"./demo/bezierCurve.vue":()=>f(()=>import("./bezierCurve-BmETzo2K.js"),__vite__mapDeps([29,1,2,15])),"./demo/center.vue":()=>f(()=>import("./center-DRKH7xoO.js"),__vite__mapDeps([30,1,2,26,27,20,21,22,23,7])),"./demo/custom.vue":()=>f(()=>import("./custom-Cx_Gmtl3.js"),__vite__mapDeps([31,1,2])),"./demo/ellipse.vue":()=>f(()=>import("./ellipse-BvejnQVS.js"),__vite__mapDeps([32,1,2,15])),"./demo/layer.vue":()=>f(()=>import("./layer-Vhx4PhX0.js"),__vite__mapDeps([33,1,2,7,25])),"./demo/line.vue":()=>f(()=>import("./line-DD4iQha4.js"),__vite__mapDeps([34,1,2,13,10,14,15])),"./demo/original.vue":()=>f(()=>import("./original-DKBbgjHM.js"),__vite__mapDeps([35,1,2])),"./demo/point.vue":()=>f(()=>import("./point-CJTHXkZO.js"),__vite__mapDeps([36,1,2,13,10,14,15])),"./demo/polygon.vue":()=>f(()=>import("./polygon-DqdjItib.js"),__vite__mapDeps([37,1,2,13,10,14,15])),"./demo/shortcutKey.vue":()=>f(()=>import("./shortcutKey-CdoE4S-G.js"),__vite__mapDeps([38,1,2,7,24])),"./demo/show.vue":()=>f(()=>import("./show-DqPradSe.js"),__vite__mapDeps([39,1,2,7,10,40])),"./demo/text.vue":()=>f(()=>import("./text-x7EVkbFg.js"),__vite__mapDeps([41,1,2,13,10,14,15]))});for(const e in i){const n=e.replace("./demo/","").replace(/\//g,"%2F"),a=await i[e](),g=await v[e]();c.value[n]={component:Qe(g.default),code:a}}})();const d=R({});let E=new IntersectionObserver((i,v)=>{i.forEach(e=>{if(e.isIntersecting){const n=e.target;d.value[n.id]=!0,v.unobserve(n),Object.keys(d.value).length==r.length+l.length&&(v.disconnect(),v=null)}})});requestAnimationFrame(()=>{document.querySelectorAll(".my-canvas-tools .n-skeleton").forEach(v=>E.observe(v))});const C=i=>d.value[i]&&c.value[i],P=R(window.innerWidth>=1280),w=()=>{document.querySelector(".my-canvas-tools")&&(P.value=window.innerWidth>=1280)};return window.addEventListener("resize",w),Xe(()=>{w()}),Ze(()=>{window.removeEventListener("resize",w)}),(i,v)=>(x(),I("div",Bt,[y(s(se),null,{default:b(()=>[X("div",Vt,[P.value?(x(),I(B,{key:0},[y(s(Q),{class:"independent-space",vertical:""},{default:b(()=>[(x(),I(B,null,J(r,e=>(x(),I(B,{key:e[0]},[C(e[0])?(x(),L(te,{key:0,id:e[0],path:e[0],title:e[1],code:c.value[e[0]].code,component:c.value[e[0]].component},null,8,["id","path","title","code","component"])):(x(),L(s(ee),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),64))]),_:1}),y(s(Q),{vertical:""},{default:b(()=>[(x(!0),I(B,null,J(s(h),e=>(x(),I(B,{key:e[0]},[C(e[0])?(x(),L(te,{key:0,id:e[0],path:e[0],title:e[1],code:c.value[e[0]].code,component:c.value[e[0]].component},null,8,["id","path","title","code","component"])):(x(),L(s(ee),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}),y(s(Q),{vertical:""},{default:b(()=>[(x(!0),I(B,null,J(s(k),e=>(x(),I(B,{key:e[0]},[C(e[0])?(x(),L(te,{key:0,id:e[0],path:e[0],title:e[1],code:c.value[e[0]].code,component:c.value[e[0]].component},null,8,["id","path","title","code","component"])):(x(),L(s(ee),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1})],64)):(x(),L(s(Q),{key:1,style:{width:"100%"},vertical:""},{default:b(()=>[(x(!0),I(B,null,J(r.concat(l),e=>(x(),I(B,{key:e[0]},[C(e[0])?(x(),L(te,{key:0,id:e[0],path:e[0],title:e[1],code:c.value[e[0]].code,component:c.value[e[0]].component},null,8,["id","path","title","code","component"])):(x(),L(s(ee),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}))])]),_:1}),s(tt).isMobileStyle?et("",!0):(x(),L(s(se),{key:0},{default:b(()=>[y(s(bt),{type:"block",bound:100,"ignore-gap":"","offset-target":".my-canvas-tools"},{default:b(()=>[(x(!0),I(B,null,J(r.concat(l),e=>(x(),L(s(ht),{key:e[0],href:s(o)+e[0],title:e[1]},null,8,["href","title"]))),128))]),_:1})]),_:1}))]))}}),Wt=xe(Dt,[["__scopeId","data-v-462538b7"]]);export{Wt as default};
