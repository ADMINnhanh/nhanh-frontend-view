const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./InfoWindow-C0yQC5La.js","./index-CB9RYJs1.js","./index-Ck9oTqIj.css","./a-oRVt2mfB.js","./blockquote-Bn8nYGzG.js","./InfoWindow-C3FJYEKt.css","./index-BLJ1jrCR.js","./index-BmXo0xQl.js","./index-BuuKJlB2.css","./index-Dry5xNgc.css","./axis-DvogCbd7.js","./Checkbox-N6HqGJNG.js","./InputNumber-BUy6oeTZ.js","./use-locale-BgVUyKHt.js","./Input-ByCvPI7d.js","./Suffix-B7RzdCgz.js","./headers-CBeD9dz4.js","./ArrowUp-DbCwVkla.js","./Flex-4eoldFAV.js","./RadioGroup-t5YadvOb.js","./RadioButton-DRAb_Fr-.js","./axis-D3d5TSm5.css","./center-Cl9wfOS6.js","./custom-BhiACtSw.js","./layer-DheU1Roj.js","./line-QWECKrl7.js","./Switch-Q7Kw5K8N.js","./original-BQ1qdtvw.js","./point-D32QZkfr.js","./polygon-CVLUen7i.js","./shortcutKey-Af2DpeGd.js","./show-C3E01r-e.js","./show-Lm5Cvto2.css","./text-CQhwCm8q.js"])))=>i.map(i=>d[i]);
import{q as fe,b7 as ge,z as $,p as O,R as N,d as V,v as ne,a2 as be,J as R,aI as ee,a7 as re,k as A,am as xe,G as he,S as ue,Q as I,ap as J,n as ye,E as X,ag as ke,C as H,b8 as we,K as Re,b9 as Ce,a6 as Ee,D as Te,x as te,ba as $e,F as ve,L as ce,bb as je,o as g,c as P,aM as le,aO as Pe,bc as Ae,bd as Oe,aS as j,w as m,b,u as a,aY as U,be as F,B as W,aZ as K,e as q,bf as Le,bg as Be,t as de,bh as Ie,bi as Se,bj as Ne,bk as Ve,bl as ze,bm as De,b5 as He,_ as me,aU as Me,ah as Fe,b4 as We,bn as p,Z as L,aT as G,aP as Ke}from"./index-CB9RYJs1.js";import{R as qe,N as Y}from"./Refresh-BJF_-d3O.js";import{S as oe}from"./Scrollbar-CLCV4CF7.js";import{u as Ge,a as Ue}from"./use-collection-CWffu6HY.js";import{g as Ye}from"./attribute-Cz32yFEB.js";function pe(t){return typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t}function Ze(t,o){const l=fe(ge,null);return $(()=>t.hljs||(l==null?void 0:l.mergedHljsRef.value))}function Je(t){return t instanceof HTMLElement?t.scrollTop:window.scrollY}function Qe(t){return t instanceof HTMLElement?t.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const Xe=O("affix",[N("affixed",{position:"fixed"},[N("absolute-positioned",{position:"absolute"})])]),ie={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},et=he(ie),tt=V({name:"Affix",props:ie,setup(t){const{mergedClsPrefixRef:o}=ne(t);be("-affix",Xe,o);let l=null;const s=R(!1),u=R(!1),v=R(null),x=R(null),i=$(()=>u.value||s.value),d=$(()=>{var n,r;return(r=(n=t.triggerTop)!==null&&n!==void 0?n:t.offsetTop)!==null&&r!==void 0?r:t.top}),y=$(()=>{var n,r;return(r=(n=t.top)!==null&&n!==void 0?n:t.triggerTop)!==null&&r!==void 0?r:t.offsetTop}),w=$(()=>{var n,r;return(r=(n=t.bottom)!==null&&n!==void 0?n:t.triggerBottom)!==null&&r!==void 0?r:t.offsetBottom}),C=$(()=>{var n,r;return(r=(n=t.triggerBottom)!==null&&n!==void 0?n:t.offsetBottom)!==null&&r!==void 0?r:t.bottom}),e=R(null),c=()=>{const{target:n,listenTo:r}=t;n?l=n():r?l=pe(r):l=document,l&&(l.addEventListener("scroll",h),h())};function h(){xe(f)}function f(){const{value:n}=e;if(!l||!n)return;const r=Je(l);if(i.value){x.value!==null&&r<x.value&&(s.value=!1,x.value=null),v.value!==null&&r>v.value&&(u.value=!1,v.value=null);return}const E=Qe(l),T=n.getBoundingClientRect(),S=T.top-E.top,B=E.bottom-T.bottom,k=d.value,_=C.value;k!==void 0&&S<=k?(s.value=!0,x.value=r-(k-S)):(s.value=!1,x.value=null),_!==void 0&&B<=_?(u.value=!0,v.value=r+_-B):(u.value=!1,v.value=null)}return ee(()=>{c()}),re(()=>{l&&l.removeEventListener("scroll",h)}),{selfRef:e,affixed:i,mergedClsPrefix:o,mergedstyle:$(()=>{const n={};return s.value&&d.value!==void 0&&y.value!==void 0&&(n.top=`${y.value}px`),u.value&&C.value!==void 0&&w.value!==void 0&&(n.bottom=`${w.value}px`),n})}},render(){const{mergedClsPrefix:t}=this;return A("div",{ref:"selfRef",class:[`${t}-affix`,{[`${t}-affix--affixed`]:this.affixed,[`${t}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),ot=O("anchor",`
 position: relative;
`,[ue("block",`
 padding-left: var(--n-rail-width);
 `,[O("anchor-link",[I("+, >",[O("anchor-link",`
 margin-top: .5em;
 `)])]),O("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),ue("show-rail",[I(">",[O("anchor-link","padding-left: 0;")])])]),N("block",[O("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[N("active",`
 background-color: var(--n-link-color);
 `)])]),O("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),O("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[J("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[N("active",{backgroundColor:"var(--n-rail-color-active)"})])]),O("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[N("active",[I(">",[J("title",`
 color: var(--n-link-text-color-active);
 `)])]),J("title",`
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
 `,[I("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),I("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),Q=ye("n-anchor"),nt={title:String,href:String},rt=V({name:"AnchorLink",props:nt,setup(t,{slots:o}){const l=R(null),s=fe(Q),u=X(t,"href"),v=ke(()=>u.value&&u.value===s.activeHref.value);Ge(Q,"collectedLinkHrefs",u),Ue(Q,"titleEls",()=>l.value),H(v,i=>{i&&l.value&&s.updateBarPosition(l.value)});function x(){t.href!==void 0&&s.setActiveHref(t.href)}return()=>{var i;const{value:d}=s.mergedClsPrefix;return A("div",{class:[`${d}-anchor-link`,v.value&&`${d}-anchor-link--active`]},A("a",{ref:l,class:[`${d}-anchor-link__title`],href:t.href,title:Ye(t.title),onClick:x},t.title),(i=o.default)===null||i===void 0?void 0:i.call(o))}}});function lt(t,o){const{top:l,height:s}=t.getBoundingClientRect(),u=o instanceof HTMLElement?o.getBoundingClientRect().top:0;return{top:l-u,height:s}}const ae={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},it=he(ae),at=V({name:"BaseAnchor",props:Object.assign(Object.assign({},ae),{mergedClsPrefix:{type:String,required:!0}}),setup(t){const o=[],l=[],s=R(null),u=R(null),v=R(null),x=R(null),i=$(()=>t.type==="block"),d=$(()=>!i.value&&t.showRail);function y(){const{value:h}=v,{value:f}=u;h&&(h.style.transition="none"),f&&(f.style.transition="none"),l&&l.forEach(n=>{n.style.transition="none"}),Te(()=>{const{value:n}=v,{value:r}=u;n&&(n.offsetWidth,n.style.transition=""),r&&(r.offsetWidth,r.style.transition=""),l&&l.forEach(E=>{E.offsetWidth,E.style.transition=""})})}function w(h,f=!0){const{value:n}=v,{value:r}=u,{value:E}=x;if(!E||!n)return;f||(n.style.transition="none",r&&(r.style.transition="none"));const{offsetHeight:T,offsetWidth:S}=h,{top:B,left:k}=h.getBoundingClientRect(),{top:_,left:z}=E.getBoundingClientRect(),D=B-_,M=k-z;n.style.top=`${D}px`,n.style.height=`${T}px`,r&&(r.style.top=`${D}px`,r.style.height=`${T}px`,r.style.maxWidth=`${S+M}px`),n.offsetHeight,r&&r.offsetHeight,f||(n.style.transition="",r&&(r.style.transition=""))}const C=we(()=>{c(!0)},128);function e(h,f=!0){const n=/^#([^#]+)$/.exec(h);if(!n)return;const r=document.getElementById(n[1]);r&&(s.value=h,r.scrollIntoView(),f||y(),C())}function c(h=!0){var f;const n=[],r=pe((f=t.offsetTarget)!==null&&f!==void 0?f:document);o.forEach(k=>{const _=/#([^#]+)$/.exec(k);if(!_)return;const z=document.getElementById(_[1]);if(z&&r){const{top:D,height:M}=lt(z,r);n.push({top:D,height:M,href:k})}}),n.sort((k,_)=>k.top>_.top?1:(k.top===_.top&&k.height<_.height,-1));const E=s.value,{bound:T,ignoreGap:S}=t,B=n.reduce((k,_)=>_.top+_.height<0?S?_:k:_.top<=T?k===null?_:_.top===k.top?_.href===E?_:k:_.top>k.top?_:k:k,null);h||y(),B?s.value=B.href:s.value=null}return Re(Q,{activeHref:s,mergedClsPrefix:X(t,"mergedClsPrefix"),updateBarPosition:w,setActiveHref:e,collectedLinkHrefs:o,titleEls:l}),ee(()=>{document.addEventListener("scroll",C,!0),e(window.location.hash),c(!1)}),Ce(()=>{e(window.location.hash),c(!1)}),re(()=>{document.removeEventListener("scroll",C,!0)}),H(s,h=>{if(h===null){const{value:f}=u;f&&!i.value&&(f.style.maxWidth="0")}}),{selfRef:x,barRef:v,slotRef:u,setActiveHref:e,activeHref:s,isBlockType:i,mergedShowRail:d}},render(){var t;const{mergedClsPrefix:o,mergedShowRail:l,isBlockType:s,$slots:u}=this,v=A("div",{class:[`${o}-anchor`,s&&`${o}-anchor--block`,l&&`${o}-anchor--show-rail`],ref:"selfRef"},l&&this.showBackground?A("div",{ref:"slotRef",class:`${o}-anchor-link-background`}):null,l?A("div",{class:`${o}-anchor-rail`},A("div",{ref:"barRef",class:[`${o}-anchor-rail__bar`,this.activeHref!==null&&`${o}-anchor-rail__bar--active`]})):null,(t=u.default)===null||t===void 0?void 0:t.call(u));return this.internalScrollable?A(Ee,null,{default:()=>v}):v}}),st=Object.assign(Object.assign(Object.assign(Object.assign({},te.props),{affix:Boolean}),ie),ae),ut=V({name:"Anchor",props:st,setup(t,{slots:o}){const{mergedClsPrefixRef:l,inlineThemeDisabled:s}=ne(t),u=te("Anchor","-anchor",ot,$e,t,l),v=R(null),x=$(()=>{const{self:{railColor:d,linkColor:y,railColorActive:w,linkTextColor:C,linkTextColorHover:e,linkTextColorPressed:c,linkTextColorActive:h,linkFontSize:f,railWidth:n,linkPadding:r,borderRadius:E},common:{cubicBezierEaseInOut:T}}=u.value;return{"--n-link-border-radius":E,"--n-link-color":y,"--n-link-font-size":f,"--n-link-text-color":C,"--n-link-text-color-hover":e,"--n-link-text-color-active":h,"--n-link-text-color-pressed":c,"--n-link-padding":r,"--n-bezier":T,"--n-rail-color":d,"--n-rail-color-active":w,"--n-rail-width":n}}),i=s?ve("anchor",void 0,x,t):void 0;return{scrollTo(d){var y;(y=v.value)===null||y===void 0||y.setActiveHref(d)},renderAnchor:()=>(i==null||i.onRender(),A(at,Object.assign({ref:v,style:s?void 0:x.value,class:i==null?void 0:i.themeClass.value},ce(t,it),{mergedClsPrefix:l.value}),o))}},render(){return this.affix?A(tt,Object.assign({},ce(this,et)),{default:this.renderAnchor}):this.renderAnchor()}}),ct=I([O("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[N("show-line-numbers",`
 display: flex;
 `),J("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),N("word-wrap",[I("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),I("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),I("[class^=hljs]",`
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
 }`]}]),dt=Object.assign(Object.assign({},te.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),ft=V({name:"Code",props:dt,setup(t,{slots:o}){const{internalNoHighlight:l}=t,{mergedClsPrefixRef:s,inlineThemeDisabled:u}=ne(),v=R(null),x=l?{value:void 0}:Ze(t),i=(c,h,f)=>{const{value:n}=x;return!n||!(c&&n.getLanguage(c))?null:n.highlight(f?h.trim():h,{language:c}).value},d=$(()=>t.inline||t.wordWrap?!1:t.showLineNumbers),y=()=>{if(o.default)return;const{value:c}=v;if(!c)return;const{language:h}=t,f=t.uri?window.decodeURIComponent(t.code):t.code;if(h){const r=i(h,f,t.trim);if(r!==null){if(t.inline)c.innerHTML=r;else{const E=c.querySelector(".__code__");E&&c.removeChild(E);const T=document.createElement("pre");T.className="__code__",T.innerHTML=r,c.appendChild(T)}return}}if(t.inline){c.textContent=f;return}const n=c.querySelector(".__code__");if(n)n.textContent=f;else{const r=document.createElement("pre");r.className="__code__",r.textContent=f,c.innerHTML="",c.appendChild(r)}};ee(y),H(X(t,"language"),y),H(X(t,"code"),y),l||H(x,y);const w=te("Code","-code",ct,je,t,s),C=$(()=>{const{common:{cubicBezierEaseInOut:c,fontFamilyMono:h},self:{textColor:f,fontSize:n,fontWeightStrong:r,lineNumberTextColor:E,"mono-3":T,"hue-1":S,"hue-2":B,"hue-3":k,"hue-4":_,"hue-5":z,"hue-5-2":D,"hue-6":M,"hue-6-2":_e}}=w.value,{internalFontSize:se}=t;return{"--n-font-size":se?`${se}px`:n,"--n-font-family":h,"--n-font-weight-strong":r,"--n-bezier":c,"--n-text-color":f,"--n-mono-3":T,"--n-hue-1":S,"--n-hue-2":B,"--n-hue-3":k,"--n-hue-4":_,"--n-hue-5":z,"--n-hue-5-2":D,"--n-hue-6":M,"--n-hue-6-2":_e,"--n-line-number-text-color":E}}),e=u?ve("code",$(()=>`${t.internalFontSize||"a"}`),C,t):void 0;return{mergedClsPrefix:s,codeRef:v,mergedShowLineNumbers:d,lineNumbers:$(()=>{let c=1;const h=[];let f=!1;for(const n of t.code)n===`
`?(f=!0,h.push(c++)):f=!1;return f||h.push(c++),h.join(`
`)}),cssVars:u?void 0:C,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){var t,o;const{mergedClsPrefix:l,wordWrap:s,mergedShowLineNumbers:u,onRender:v}=this;return v==null||v(),A("code",{class:[`${l}-code`,this.themeClass,s&&`${l}-code--word-wrap`,u&&`${l}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},u?A("pre",{class:`${l}-code__line-numbers`},this.lineNumbers):null,(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t))}}),ht={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},vt=le("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M160 368L32 256l128-112"},null,-1),mt=le("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 368l128-112l-128-112"},null,-1),pt=[vt,mt],_t=V({name:"CodeOutline",render:function(o,l){return g(),P("svg",ht,pt)}}),gt=V({__name:"card",props:{path:{},code:{},component:{}},setup(t){const o=R(!1),l=R(),s=R();H(()=>Pe.value.theme,i=>{var d;return(d=s.value)==null?void 0:d.myCanvas.setTheme(i)});const u=R(!1),v=R(),x=new ResizeObserver(()=>{var i;u.value=Ae((i=l.value)==null?void 0:i.$el)});return ee(()=>{v.value=Oe(l.value.$el),x.observe(l.value.$el)}),re(()=>{var i;(i=s.value)==null||i.myCanvas.destroy(),x==null||x.disconnect()}),(i,d)=>(g(),j(a(He),{ref_key:"cardRef",ref:l},{"header-extra":m(()=>[b(a(U),null,{default:m(()=>[b(a(F),{trigger:"hover"},{trigger:m(()=>[b(a(W),{onClick:d[0]||(d[0]=y=>{var w;return(w=s.value)==null?void 0:w.myCanvas.returnToOrigin()}),text:""},{icon:m(()=>[b(a(K),{component:a(qe)},null,8,["component"])]),_:1})]),default:m(()=>[d[3]||(d[3]=q(" 复位 "))]),_:1,__:[3]}),b(a(F),{trigger:"hover"},{trigger:m(()=>[b(a(W),{onClick:v.value,text:""},{icon:m(()=>[b(a(K),{component:u.value?a(Le):a(Be)},null,8,["component"])]),_:1},8,["onClick"])]),default:m(()=>[q(" "+de(u.value?"退出全屏":"全屏"),1)]),_:1}),b(a(F),{trigger:"hover"},{trigger:m(()=>[b(a(W),{tag:"a",href:"https://github.com/ADMINnhanh/nhanh-frontend-view/tree/main/src/views/canvas/_Canvas/demo/"+i.path,target:"_blank",text:""},{icon:m(()=>[b(a(K),{component:a(Ie)},null,8,["component"])]),_:1},8,["href"])]),default:m(()=>[d[4]||(d[4]=q(" 在 GitHub 查看源码 "))]),_:1,__:[4]}),b(a(F),{trigger:"hover"},{trigger:m(()=>[b(a(W),{onClick:d[1]||(d[1]=y=>a(Se).success("复制成功").error("复制失败").run(a(Ne)(i.code))),text:""},{icon:m(()=>[b(a(K),{component:a(Ve)},null,8,["component"])]),_:1})]),default:m(()=>[d[5]||(d[5]=q(" 复制代码 "))]),_:1,__:[5]}),b(a(F),{trigger:"hover"},{trigger:m(()=>[b(a(W),{onClick:d[2]||(d[2]=y=>o.value=!o.value),text:""},{icon:m(()=>[b(a(K),{component:a(_t)},null,8,["component"])]),_:1})]),default:m(()=>[q(" "+de(o.value?"收起代码":"显示代码"),1)]),_:1})]),_:1})]),default:m(()=>[(g(),j(ze(i.component),{ref_key:"componentRef",ref:s},null,512)),b(a(De),{show:o.value},{default:m(()=>[b(a(oe),{"x-scrollable":"",style:{"max-height":"50vh","margin-top":"10px"}},{default:m(()=>[b(a(ft),{code:i.code,language:"javascript","show-line-numbers":""},null,8,["code"])]),_:1})]),_:1},8,["show"])]),_:1},512))}}),Z=me(gt,[["__scopeId","data-v-21b6c991"]]),bt={id:"/canvas/_Canvas",class:"my-canvas-tools"},xt={class:"list-box"},yt=V({__name:"index",setup(t){const o=location.hash.replace(/(#[^/]+)*$/,"#"),l=[["China%2Findex.vue","最佳实现 - 中国地图"]],s=[["original.vue","仅需初始化 _Canvas"],["center.vue","中心点"],["shortcutKey.vue","快捷键"],["axis.vue","坐标轴"],["text.vue","文字"],["point.vue","点"],["line.vue","线"],["polygon.vue","面"],["custom.vue","自定义绘制"],["layer.vue","图层 & 层级"],["show.vue","显示条件"]];function u(w){const C=[],e=[];for(let c=0;c<w.length;c++)c%2===0?e.push(w[c]):C.push(w[c]);return[e,C]}const[v,x]=u(s),i=R({});(async function(){const w=Object.assign({"./demo/China/InfoWindow.vue":()=>p(()=>import("./InfoWindow-UNahwlu5.js"),[],import.meta.url).then(e=>e.default),"./demo/China/index.vue":()=>p(()=>import("./index-D_j3hOmL.js"),[],import.meta.url).then(e=>e.default),"./demo/axis.vue":()=>p(()=>import("./axis-CmBv1h4s.js"),[],import.meta.url).then(e=>e.default),"./demo/center.vue":()=>p(()=>import("./center-C_FgnQXD.js"),[],import.meta.url).then(e=>e.default),"./demo/custom.vue":()=>p(()=>import("./custom-BVw4wZ8q.js"),[],import.meta.url).then(e=>e.default),"./demo/layer.vue":()=>p(()=>import("./layer-CyUV680f.js"),[],import.meta.url).then(e=>e.default),"./demo/line.vue":()=>p(()=>import("./line-B2dqyG61.js"),[],import.meta.url).then(e=>e.default),"./demo/original.vue":()=>p(()=>import("./original-gmbYn265.js"),[],import.meta.url).then(e=>e.default),"./demo/point.vue":()=>p(()=>import("./point-DkSObZDj.js"),[],import.meta.url).then(e=>e.default),"./demo/polygon.vue":()=>p(()=>import("./polygon-CQQYhI7V.js"),[],import.meta.url).then(e=>e.default),"./demo/shortcutKey.vue":()=>p(()=>import("./shortcutKey-NkOA4PHY.js"),[],import.meta.url).then(e=>e.default),"./demo/show.vue":()=>p(()=>import("./show-CUtXt6oS.js"),[],import.meta.url).then(e=>e.default),"./demo/text.vue":()=>p(()=>import("./text-CJmi6Rn8.js"),[],import.meta.url).then(e=>e.default)}),C=Object.assign({"./demo/China/InfoWindow.vue":()=>p(()=>import("./InfoWindow-C0yQC5La.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"./demo/China/index.vue":()=>p(()=>import("./index-BLJ1jrCR.js"),__vite__mapDeps([6,1,2,7,8,0,3,4,5,9]),import.meta.url),"./demo/axis.vue":()=>p(()=>import("./axis-DvogCbd7.js"),__vite__mapDeps([10,1,2,7,8,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url),"./demo/center.vue":()=>p(()=>import("./center-Cl9wfOS6.js"),__vite__mapDeps([22,1,2,7,8,19,20,12,13,14,15]),import.meta.url),"./demo/custom.vue":()=>p(()=>import("./custom-BhiACtSw.js"),__vite__mapDeps([23,1,2,7,8]),import.meta.url),"./demo/layer.vue":()=>p(()=>import("./layer-DheU1Roj.js"),__vite__mapDeps([24,1,2,7,8]),import.meta.url),"./demo/line.vue":()=>p(()=>import("./line-QWECKrl7.js"),__vite__mapDeps([25,1,2,7,8,26]),import.meta.url),"./demo/original.vue":()=>p(()=>import("./original-BQ1qdtvw.js"),__vite__mapDeps([27,1,2,7,8]),import.meta.url),"./demo/point.vue":()=>p(()=>import("./point-D32QZkfr.js"),__vite__mapDeps([28,1,2,7,8,26]),import.meta.url),"./demo/polygon.vue":()=>p(()=>import("./polygon-CVLUen7i.js"),__vite__mapDeps([29,1,2,7,8,26]),import.meta.url),"./demo/shortcutKey.vue":()=>p(()=>import("./shortcutKey-Af2DpeGd.js"),__vite__mapDeps([30,1,2,7,8,18]),import.meta.url),"./demo/show.vue":()=>p(()=>import("./show-C3E01r-e.js"),__vite__mapDeps([31,1,2,7,8,26,32]),import.meta.url),"./demo/text.vue":()=>p(()=>import("./text-CQhwCm8q.js"),__vite__mapDeps([33,1,2,7,8,26]),import.meta.url)});for(const e in w){const c=e.replace("./demo/","").replace(/\//g,"%2F"),h=await w[e](),f=await C[e]();i.value[c]={component:Me(f.default),code:h}}})();const d=R(window.innerWidth>=1280),y=()=>{d.value=window.innerWidth>=1280};return window.addEventListener("resize",y),Fe(()=>{window.removeEventListener("resize",y)}),(w,C)=>(g(),P("div",bt,[b(a(oe),null,{default:m(()=>[le("div",xt,[d.value?(g(),P(L,{key:0},[b(a(U),{class:"independent-space",vertical:""},{default:m(()=>[(g(),P(L,null,G(l,e=>(g(),P(L,{key:e[0]},[i.value[e[0]]?(g(),j(Z,{key:0,id:e[0],path:e[0],title:e[1],code:i.value[e[0]].code,component:i.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),j(a(Y),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),64))]),_:1}),b(a(U),{vertical:""},{default:m(()=>[(g(!0),P(L,null,G(a(v),e=>(g(),P(L,{key:e[0]},[i.value[e[0]]?(g(),j(Z,{key:0,id:e[0],path:e[0],title:e[1],code:i.value[e[0]].code,component:i.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),j(a(Y),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}),b(a(U),{vertical:""},{default:m(()=>[(g(!0),P(L,null,G(a(x),e=>(g(),P(L,{key:e[0]},[i.value[e[0]]?(g(),j(Z,{key:0,id:e[0],path:e[0],title:e[1],code:i.value[e[0]].code,component:i.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),j(a(Y),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1})],64)):(g(),j(a(U),{key:1,style:{width:"100%"},vertical:""},{default:m(()=>[(g(!0),P(L,null,G(l.concat(s),e=>(g(),P(L,{key:e[0]},[i.value[e[0]]?(g(),j(Z,{key:0,id:e[0],path:e[0],title:e[1],code:i.value[e[0]].code,component:i.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),j(a(Y),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}))])]),_:1}),a(Ke).isMobileStyle?We("",!0):(g(),j(a(oe),{key:0},{default:m(()=>[b(a(ut),{type:"block",bound:100,"ignore-gap":"","offset-target":".my-canvas-tools"},{default:m(()=>[(g(!0),P(L,null,G(l.concat(s),e=>(g(),j(a(rt),{key:e[0],href:a(o)+e[0],title:e[1]},null,8,["href","title"]))),128))]),_:1})]),_:1}))]))}}),Tt=me(yt,[["__scopeId","data-v-991b31a5"]]);export{Tt as default};
