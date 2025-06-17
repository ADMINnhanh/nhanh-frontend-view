const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Attraction-BWtrtgBy.js","./index-zsy9fzWA.js","./index-Ck9oTqIj.css","./a-DmzVol90.js","./Attraction-1dFfJNh_.css","./Province-B6QNExkn.js","./blockquote-su0ubiZy.js","./Province-BBdlX_sf.css","./index-B_oUY1d2.js","./index-IpBi1HkK.js","./index-Wpkr_eJU.css","./Switch-DLtL_xwT.js","./index-CSg4uFAC.css","./arc-CnbLm0JX.js","./updateData.vue_vue_type_script_setup_true_lang-BAiOZqNl.js","./ButtonGroup-dihZWap_.js","./axis-BOXtj_F_.js","./Checkbox-C_QNOOcW.js","./InputNumber-9_UBPMx2.js","./use-locale-A7i226ge.js","./Input-BdmKObqF.js","./Suffix-Dmwhv5Dr.js","./headers-BbVtvOuC.js","./ArrowUp-BKsASTrb.js","./Flex-Ddul2L6Z.js","./RadioGroup-BXVdwY5N.js","./RadioButton-Blvi0UlV.js","./axis-D3d5TSm5.css","./center-wceKb2yF.js","./custom-D7EbZtuE.js","./layer-EQ-4aeiY.js","./line-DAwqHYcB.js","./original-CN3H28-6.js","./point-DPF-T2eA.js","./polygon-DKF0TYvO.js","./shortcutKey-CBmxI1PU.js","./show-D0H2SN5Q.js","./show-BGxjbJFU.css","./text-SK3X-hjX.js"])))=>i.map(i=>d[i]);
import{q as fe,b7 as ge,z as $,p as O,R as N,d as V,v as ne,a2 as be,J as R,aI as ee,a7 as re,k as A,am as xe,G as ve,S as ue,Q as B,ap as J,n as ye,E as X,ag as ke,C as H,b8 as we,K as Re,b9 as Ee,a6 as Te,D as Ce,x as te,ba as $e,F as he,L as ce,bb as je,o as g,c as P,aM as le,aO as Pe,bc as Ae,bd as Oe,aS as j,w as p,b,u as a,aY as U,be as W,B as F,aZ as K,e as q,bf as Le,bg as Ie,t as de,bh as Be,bi as Se,bj as Ne,bk as Ve,bl as De,bm as ze,b5 as He,_ as me,aU as Me,ah as We,b4 as Fe,bn as m,Z as L,aT as G,aP as Ke}from"./index-zsy9fzWA.js";import{R as qe,N as Y}from"./Refresh-D-ViNpA_.js";import{S as oe}from"./Scrollbar-M66xqy7N.js";import{u as Ge,a as Ue}from"./use-collection-BFYhWeEa.js";import{g as Ye}from"./attribute-Cz32yFEB.js";function pe(t){return typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t}function Ze(t,o){const l=fe(ge,null);return $(()=>t.hljs||(l==null?void 0:l.mergedHljsRef.value))}function Je(t){return t instanceof HTMLElement?t.scrollTop:window.scrollY}function Qe(t){return t instanceof HTMLElement?t.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const Xe=O("affix",[N("affixed",{position:"fixed"},[N("absolute-positioned",{position:"absolute"})])]),ie={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},et=ve(ie),tt=V({name:"Affix",props:ie,setup(t){const{mergedClsPrefixRef:o}=ne(t);be("-affix",Xe,o);let l=null;const s=R(!1),u=R(!1),h=R(null),x=R(null),i=$(()=>u.value||s.value),d=$(()=>{var n,r;return(r=(n=t.triggerTop)!==null&&n!==void 0?n:t.offsetTop)!==null&&r!==void 0?r:t.top}),y=$(()=>{var n,r;return(r=(n=t.top)!==null&&n!==void 0?n:t.triggerTop)!==null&&r!==void 0?r:t.offsetTop}),w=$(()=>{var n,r;return(r=(n=t.bottom)!==null&&n!==void 0?n:t.triggerBottom)!==null&&r!==void 0?r:t.offsetBottom}),E=$(()=>{var n,r;return(r=(n=t.triggerBottom)!==null&&n!==void 0?n:t.offsetBottom)!==null&&r!==void 0?r:t.bottom}),e=R(null),c=()=>{const{target:n,listenTo:r}=t;n?l=n():r?l=pe(r):l=document,l&&(l.addEventListener("scroll",v),v())};function v(){xe(f)}function f(){const{value:n}=e;if(!l||!n)return;const r=Je(l);if(i.value){x.value!==null&&r<x.value&&(s.value=!1,x.value=null),h.value!==null&&r>h.value&&(u.value=!1,h.value=null);return}const T=Qe(l),C=n.getBoundingClientRect(),S=C.top-T.top,I=T.bottom-C.bottom,k=d.value,_=E.value;k!==void 0&&S<=k?(s.value=!0,x.value=r-(k-S)):(s.value=!1,x.value=null),_!==void 0&&I<=_?(u.value=!0,h.value=r+_-I):(u.value=!1,h.value=null)}return ee(()=>{c()}),re(()=>{l&&l.removeEventListener("scroll",v)}),{selfRef:e,affixed:i,mergedClsPrefix:o,mergedstyle:$(()=>{const n={};return s.value&&d.value!==void 0&&y.value!==void 0&&(n.top=`${y.value}px`),u.value&&E.value!==void 0&&w.value!==void 0&&(n.bottom=`${w.value}px`),n})}},render(){const{mergedClsPrefix:t}=this;return A("div",{ref:"selfRef",class:[`${t}-affix`,{[`${t}-affix--affixed`]:this.affixed,[`${t}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),ot=O("anchor",`
 position: relative;
`,[ue("block",`
 padding-left: var(--n-rail-width);
 `,[O("anchor-link",[B("+, >",[O("anchor-link",`
 margin-top: .5em;
 `)])]),O("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),ue("show-rail",[B(">",[O("anchor-link","padding-left: 0;")])])]),N("block",[O("anchor-link",`
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
 `,[N("active",[B(">",[J("title",`
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
 `,[B("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),B("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),Q=ye("n-anchor"),nt={title:String,href:String},rt=V({name:"AnchorLink",props:nt,setup(t,{slots:o}){const l=R(null),s=fe(Q),u=X(t,"href"),h=ke(()=>u.value&&u.value===s.activeHref.value);Ge(Q,"collectedLinkHrefs",u),Ue(Q,"titleEls",()=>l.value),H(h,i=>{i&&l.value&&s.updateBarPosition(l.value)});function x(){t.href!==void 0&&s.setActiveHref(t.href)}return()=>{var i;const{value:d}=s.mergedClsPrefix;return A("div",{class:[`${d}-anchor-link`,h.value&&`${d}-anchor-link--active`]},A("a",{ref:l,class:[`${d}-anchor-link__title`],href:t.href,title:Ye(t.title),onClick:x},t.title),(i=o.default)===null||i===void 0?void 0:i.call(o))}}});function lt(t,o){const{top:l,height:s}=t.getBoundingClientRect(),u=o instanceof HTMLElement?o.getBoundingClientRect().top:0;return{top:l-u,height:s}}const ae={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},it=ve(ae),at=V({name:"BaseAnchor",props:Object.assign(Object.assign({},ae),{mergedClsPrefix:{type:String,required:!0}}),setup(t){const o=[],l=[],s=R(null),u=R(null),h=R(null),x=R(null),i=$(()=>t.type==="block"),d=$(()=>!i.value&&t.showRail);function y(){const{value:v}=h,{value:f}=u;v&&(v.style.transition="none"),f&&(f.style.transition="none"),l&&l.forEach(n=>{n.style.transition="none"}),Ce(()=>{const{value:n}=h,{value:r}=u;n&&(n.offsetWidth,n.style.transition=""),r&&(r.offsetWidth,r.style.transition=""),l&&l.forEach(T=>{T.offsetWidth,T.style.transition=""})})}function w(v,f=!0){const{value:n}=h,{value:r}=u,{value:T}=x;if(!T||!n)return;f||(n.style.transition="none",r&&(r.style.transition="none"));const{offsetHeight:C,offsetWidth:S}=v,{top:I,left:k}=v.getBoundingClientRect(),{top:_,left:D}=T.getBoundingClientRect(),z=I-_,M=k-D;n.style.top=`${z}px`,n.style.height=`${C}px`,r&&(r.style.top=`${z}px`,r.style.height=`${C}px`,r.style.maxWidth=`${S+M}px`),n.offsetHeight,r&&r.offsetHeight,f||(n.style.transition="",r&&(r.style.transition=""))}const E=we(()=>{c(!0)},128);function e(v,f=!0){const n=/^#([^#]+)$/.exec(v);if(!n)return;const r=document.getElementById(n[1]);r&&(s.value=v,r.scrollIntoView(),f||y(),E())}function c(v=!0){var f;const n=[],r=pe((f=t.offsetTarget)!==null&&f!==void 0?f:document);o.forEach(k=>{const _=/#([^#]+)$/.exec(k);if(!_)return;const D=document.getElementById(_[1]);if(D&&r){const{top:z,height:M}=lt(D,r);n.push({top:z,height:M,href:k})}}),n.sort((k,_)=>k.top>_.top?1:(k.top===_.top&&k.height<_.height,-1));const T=s.value,{bound:C,ignoreGap:S}=t,I=n.reduce((k,_)=>_.top+_.height<0?S?_:k:_.top<=C?k===null?_:_.top===k.top?_.href===T?_:k:_.top>k.top?_:k:k,null);v||y(),I?s.value=I.href:s.value=null}return Re(Q,{activeHref:s,mergedClsPrefix:X(t,"mergedClsPrefix"),updateBarPosition:w,setActiveHref:e,collectedLinkHrefs:o,titleEls:l}),ee(()=>{document.addEventListener("scroll",E,!0),e(window.location.hash),c(!1)}),Ee(()=>{e(window.location.hash),c(!1)}),re(()=>{document.removeEventListener("scroll",E,!0)}),H(s,v=>{if(v===null){const{value:f}=u;f&&!i.value&&(f.style.maxWidth="0")}}),{selfRef:x,barRef:h,slotRef:u,setActiveHref:e,activeHref:s,isBlockType:i,mergedShowRail:d}},render(){var t;const{mergedClsPrefix:o,mergedShowRail:l,isBlockType:s,$slots:u}=this,h=A("div",{class:[`${o}-anchor`,s&&`${o}-anchor--block`,l&&`${o}-anchor--show-rail`],ref:"selfRef"},l&&this.showBackground?A("div",{ref:"slotRef",class:`${o}-anchor-link-background`}):null,l?A("div",{class:`${o}-anchor-rail`},A("div",{ref:"barRef",class:[`${o}-anchor-rail__bar`,this.activeHref!==null&&`${o}-anchor-rail__bar--active`]})):null,(t=u.default)===null||t===void 0?void 0:t.call(u));return this.internalScrollable?A(Te,null,{default:()=>h}):h}}),st=Object.assign(Object.assign(Object.assign(Object.assign({},te.props),{affix:Boolean}),ie),ae),ut=V({name:"Anchor",props:st,setup(t,{slots:o}){const{mergedClsPrefixRef:l,inlineThemeDisabled:s}=ne(t),u=te("Anchor","-anchor",ot,$e,t,l),h=R(null),x=$(()=>{const{self:{railColor:d,linkColor:y,railColorActive:w,linkTextColor:E,linkTextColorHover:e,linkTextColorPressed:c,linkTextColorActive:v,linkFontSize:f,railWidth:n,linkPadding:r,borderRadius:T},common:{cubicBezierEaseInOut:C}}=u.value;return{"--n-link-border-radius":T,"--n-link-color":y,"--n-link-font-size":f,"--n-link-text-color":E,"--n-link-text-color-hover":e,"--n-link-text-color-active":v,"--n-link-text-color-pressed":c,"--n-link-padding":r,"--n-bezier":C,"--n-rail-color":d,"--n-rail-color-active":w,"--n-rail-width":n}}),i=s?he("anchor",void 0,x,t):void 0;return{scrollTo(d){var y;(y=h.value)===null||y===void 0||y.setActiveHref(d)},renderAnchor:()=>(i==null||i.onRender(),A(at,Object.assign({ref:h,style:s?void 0:x.value,class:i==null?void 0:i.themeClass.value},ce(t,it),{mergedClsPrefix:l.value}),o))}},render(){return this.affix?A(tt,Object.assign({},ce(this,et)),{default:this.renderAnchor}):this.renderAnchor()}}),ct=B([O("code",`
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
 `),N("word-wrap",[B("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),B("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),B("[class^=hljs]",`
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
 }`]}]),dt=Object.assign(Object.assign({},te.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),ft=V({name:"Code",props:dt,setup(t,{slots:o}){const{internalNoHighlight:l}=t,{mergedClsPrefixRef:s,inlineThemeDisabled:u}=ne(),h=R(null),x=l?{value:void 0}:Ze(t),i=(c,v,f)=>{const{value:n}=x;return!n||!(c&&n.getLanguage(c))?null:n.highlight(f?v.trim():v,{language:c}).value},d=$(()=>t.inline||t.wordWrap?!1:t.showLineNumbers),y=()=>{if(o.default)return;const{value:c}=h;if(!c)return;const{language:v}=t,f=t.uri?window.decodeURIComponent(t.code):t.code;if(v){const r=i(v,f,t.trim);if(r!==null){if(t.inline)c.innerHTML=r;else{const T=c.querySelector(".__code__");T&&c.removeChild(T);const C=document.createElement("pre");C.className="__code__",C.innerHTML=r,c.appendChild(C)}return}}if(t.inline){c.textContent=f;return}const n=c.querySelector(".__code__");if(n)n.textContent=f;else{const r=document.createElement("pre");r.className="__code__",r.textContent=f,c.innerHTML="",c.appendChild(r)}};ee(y),H(X(t,"language"),y),H(X(t,"code"),y),l||H(x,y);const w=te("Code","-code",ct,je,t,s),E=$(()=>{const{common:{cubicBezierEaseInOut:c,fontFamilyMono:v},self:{textColor:f,fontSize:n,fontWeightStrong:r,lineNumberTextColor:T,"mono-3":C,"hue-1":S,"hue-2":I,"hue-3":k,"hue-4":_,"hue-5":D,"hue-5-2":z,"hue-6":M,"hue-6-2":_e}}=w.value,{internalFontSize:se}=t;return{"--n-font-size":se?`${se}px`:n,"--n-font-family":v,"--n-font-weight-strong":r,"--n-bezier":c,"--n-text-color":f,"--n-mono-3":C,"--n-hue-1":S,"--n-hue-2":I,"--n-hue-3":k,"--n-hue-4":_,"--n-hue-5":D,"--n-hue-5-2":z,"--n-hue-6":M,"--n-hue-6-2":_e,"--n-line-number-text-color":T}}),e=u?he("code",$(()=>`${t.internalFontSize||"a"}`),E,t):void 0;return{mergedClsPrefix:s,codeRef:h,mergedShowLineNumbers:d,lineNumbers:$(()=>{let c=1;const v=[];let f=!1;for(const n of t.code)n===`
`?(f=!0,v.push(c++)):f=!1;return f||v.push(c++),v.join(`
`)}),cssVars:u?void 0:E,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){var t,o;const{mergedClsPrefix:l,wordWrap:s,mergedShowLineNumbers:u,onRender:h}=this;return h==null||h(),A("code",{class:[`${l}-code`,this.themeClass,s&&`${l}-code--word-wrap`,u&&`${l}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},u?A("pre",{class:`${l}-code__line-numbers`},this.lineNumbers):null,(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t))}}),vt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ht=le("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M160 368L32 256l128-112"},null,-1),mt=le("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 368l128-112l-128-112"},null,-1),pt=[ht,mt],_t=V({name:"CodeOutline",render:function(o,l){return g(),P("svg",vt,pt)}}),gt=V({__name:"card",props:{path:{},code:{},component:{}},setup(t){const o=R(!1),l=R(),s=R();H(()=>Pe.value.theme,i=>{var d;return(d=s.value)==null?void 0:d.myCanvas.setTheme(i)});const u=R(!1),h=R(),x=new ResizeObserver(()=>{var i;u.value=Ae((i=l.value)==null?void 0:i.$el)});return ee(()=>{h.value=Oe(l.value.$el),x.observe(l.value.$el)}),re(()=>{var i;(i=s.value)==null||i.myCanvas.destroy(),x==null||x.disconnect()}),(i,d)=>(g(),j(a(He),{ref_key:"cardRef",ref:l,hoverable:""},{"header-extra":p(()=>[b(a(U),null,{default:p(()=>[b(a(W),{trigger:"hover"},{trigger:p(()=>[b(a(F),{onClick:d[0]||(d[0]=y=>{var w;return(w=s.value)==null?void 0:w.myCanvas.returnToOrigin()}),text:""},{icon:p(()=>[b(a(K),{component:a(qe)},null,8,["component"])]),_:1})]),default:p(()=>[d[3]||(d[3]=q(" 复位 "))]),_:1,__:[3]}),b(a(W),{trigger:"hover"},{trigger:p(()=>[b(a(F),{onClick:h.value,text:""},{icon:p(()=>[b(a(K),{component:u.value?a(Le):a(Ie)},null,8,["component"])]),_:1},8,["onClick"])]),default:p(()=>[q(" "+de(u.value?"退出全屏":"全屏"),1)]),_:1}),b(a(W),{trigger:"hover"},{trigger:p(()=>[b(a(F),{tag:"a",href:"https://github.com/ADMINnhanh/nhanh-frontend-view/tree/main/src/views/canvas/_Canvas/demo/"+i.path,target:"_blank",text:""},{icon:p(()=>[b(a(K),{component:a(Be)},null,8,["component"])]),_:1},8,["href"])]),default:p(()=>[d[4]||(d[4]=q(" 在 GitHub 查看源码 "))]),_:1,__:[4]}),b(a(W),{trigger:"hover"},{trigger:p(()=>[b(a(F),{onClick:d[1]||(d[1]=y=>a(Se).success("复制成功").error("复制失败").run(a(Ne)(i.code))),text:""},{icon:p(()=>[b(a(K),{component:a(Ve)},null,8,["component"])]),_:1})]),default:p(()=>[d[5]||(d[5]=q(" 复制代码 "))]),_:1,__:[5]}),b(a(W),{trigger:"hover"},{trigger:p(()=>[b(a(F),{onClick:d[2]||(d[2]=y=>o.value=!o.value),text:""},{icon:p(()=>[b(a(K),{component:a(_t)},null,8,["component"])]),_:1})]),default:p(()=>[q(" "+de(o.value?"收起代码":"显示代码"),1)]),_:1})]),_:1})]),default:p(()=>[(g(),j(De(i.component),{ref_key:"componentRef",ref:s},null,512)),b(a(ze),{show:o.value},{default:p(()=>[b(a(oe),{"x-scrollable":"",style:{"max-height":"50vh","margin-top":"10px"}},{default:p(()=>[b(a(ft),{code:i.code,language:"javascript","show-line-numbers":""},null,8,["code"])]),_:1})]),_:1},8,["show"])]),_:1},512))}}),Z=me(gt,[["__scopeId","data-v-0d5337e6"]]),bt={id:"/canvas/_Canvas",class:"my-canvas-tools"},xt={class:"list-box"},yt=V({__name:"index",setup(t){const o=location.hash.replace(/(#[^/]+)*$/,"#"),l=[["China%2Findex.vue","最佳实践 - 中国地图"]],s=[["original.vue","仅需初始化 _Canvas"],["center.vue","中心点"],["shortcutKey.vue","快捷键"],["axis.vue","坐标轴"],["text.vue","文字"],["point.vue","点"],["line.vue","线"],["arc.vue","圆弧"],["polygon.vue","面"],["custom.vue","自定义绘制"],["layer.vue","图层 & 层级"],["show.vue","显示条件"]];function u(w){const E=[],e=[];for(let c=0;c<w.length;c++)c%2===0?e.push(w[c]):E.push(w[c]);return[e,E]}const[h,x]=u(s),i=R({});(async function(){const w=Object.assign({"./demo/China/InfoWindow/Attraction.vue":()=>m(()=>import("./Attraction-m_V9WBei.js"),[],import.meta.url).then(e=>e.default),"./demo/China/InfoWindow/Province.vue":()=>m(()=>import("./Province-BsAxOTfi.js"),[],import.meta.url).then(e=>e.default),"./demo/China/index.vue":()=>m(()=>import("./index-W6JKGRCO.js"),[],import.meta.url).then(e=>e.default),"./demo/arc.vue":()=>m(()=>import("./arc-CLFqxabK.js"),[],import.meta.url).then(e=>e.default),"./demo/axis.vue":()=>m(()=>import("./axis-CmBv1h4s.js"),[],import.meta.url).then(e=>e.default),"./demo/center.vue":()=>m(()=>import("./center-a4DfpEtX.js"),[],import.meta.url).then(e=>e.default),"./demo/custom.vue":()=>m(()=>import("./custom-vuAhThuI.js"),[],import.meta.url).then(e=>e.default),"./demo/layer.vue":()=>m(()=>import("./layer-CsMjAsZx.js"),[],import.meta.url).then(e=>e.default),"./demo/line.vue":()=>m(()=>import("./line-Cru1hV3t.js"),[],import.meta.url).then(e=>e.default),"./demo/original.vue":()=>m(()=>import("./original-B9xNEMHc.js"),[],import.meta.url).then(e=>e.default),"./demo/point.vue":()=>m(()=>import("./point-Be5T8uJN.js"),[],import.meta.url).then(e=>e.default),"./demo/polygon.vue":()=>m(()=>import("./polygon-DWeEnKPh.js"),[],import.meta.url).then(e=>e.default),"./demo/shortcutKey.vue":()=>m(()=>import("./shortcutKey-HH3WhOTM.js"),[],import.meta.url).then(e=>e.default),"./demo/show.vue":()=>m(()=>import("./show-DhkH3sHZ.js"),[],import.meta.url).then(e=>e.default),"./demo/text.vue":()=>m(()=>import("./text-C_QIl7Ec.js"),[],import.meta.url).then(e=>e.default)}),E=Object.assign({"./demo/China/InfoWindow/Attraction.vue":()=>m(()=>import("./Attraction-BWtrtgBy.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),"./demo/China/InfoWindow/Province.vue":()=>m(()=>import("./Province-B6QNExkn.js"),__vite__mapDeps([5,1,2,3,6,7]),import.meta.url),"./demo/China/index.vue":()=>m(()=>import("./index-B_oUY1d2.js"),__vite__mapDeps([8,1,2,9,10,5,3,6,7,0,4,11,12]),import.meta.url),"./demo/arc.vue":()=>m(()=>import("./arc-CnbLm0JX.js"),__vite__mapDeps([13,1,2,9,10,14,11,15]),import.meta.url),"./demo/axis.vue":()=>m(()=>import("./axis-BOXtj_F_.js"),__vite__mapDeps([16,1,2,9,10,17,18,19,20,21,22,23,24,25,26,27]),import.meta.url),"./demo/center.vue":()=>m(()=>import("./center-wceKb2yF.js"),__vite__mapDeps([28,1,2,9,10,25,26,18,19,20,21]),import.meta.url),"./demo/custom.vue":()=>m(()=>import("./custom-D7EbZtuE.js"),__vite__mapDeps([29,1,2,9,10]),import.meta.url),"./demo/layer.vue":()=>m(()=>import("./layer-EQ-4aeiY.js"),__vite__mapDeps([30,1,2,9,10]),import.meta.url),"./demo/line.vue":()=>m(()=>import("./line-DAwqHYcB.js"),__vite__mapDeps([31,1,2,9,10,14,11,15]),import.meta.url),"./demo/original.vue":()=>m(()=>import("./original-CN3H28-6.js"),__vite__mapDeps([32,1,2,9,10]),import.meta.url),"./demo/point.vue":()=>m(()=>import("./point-DPF-T2eA.js"),__vite__mapDeps([33,1,2,9,10,14,11,15]),import.meta.url),"./demo/polygon.vue":()=>m(()=>import("./polygon-DKF0TYvO.js"),__vite__mapDeps([34,1,2,9,10,14,11,15]),import.meta.url),"./demo/shortcutKey.vue":()=>m(()=>import("./shortcutKey-CBmxI1PU.js"),__vite__mapDeps([35,1,2,9,10,24]),import.meta.url),"./demo/show.vue":()=>m(()=>import("./show-D0H2SN5Q.js"),__vite__mapDeps([36,1,2,9,10,11,37]),import.meta.url),"./demo/text.vue":()=>m(()=>import("./text-SK3X-hjX.js"),__vite__mapDeps([38,1,2,9,10,14,11,15]),import.meta.url)});for(const e in w){const c=e.replace("./demo/","").replace(/\//g,"%2F"),v=await w[e](),f=await E[e]();i.value[c]={component:Me(f.default),code:v}}})();const d=R(window.innerWidth>=1280),y=()=>{d.value=window.innerWidth>=1280};return window.addEventListener("resize",y),We(()=>{window.removeEventListener("resize",y)}),(w,E)=>(g(),P("div",bt,[b(a(oe),null,{default:p(()=>[le("div",xt,[d.value?(g(),P(L,{key:0},[b(a(U),{class:"independent-space",vertical:""},{default:p(()=>[(g(),P(L,null,G(l,e=>(g(),P(L,{key:e[0]},[i.value[e[0]]?(g(),j(Z,{key:0,id:e[0],path:e[0],title:e[1],code:i.value[e[0]].code,component:i.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),j(a(Y),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),64))]),_:1}),b(a(U),{vertical:""},{default:p(()=>[(g(!0),P(L,null,G(a(h),e=>(g(),P(L,{key:e[0]},[i.value[e[0]]?(g(),j(Z,{key:0,id:e[0],path:e[0],title:e[1],code:i.value[e[0]].code,component:i.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),j(a(Y),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}),b(a(U),{vertical:""},{default:p(()=>[(g(!0),P(L,null,G(a(x),e=>(g(),P(L,{key:e[0]},[i.value[e[0]]?(g(),j(Z,{key:0,id:e[0],path:e[0],title:e[1],code:i.value[e[0]].code,component:i.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),j(a(Y),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1})],64)):(g(),j(a(U),{key:1,style:{width:"100%"},vertical:""},{default:p(()=>[(g(!0),P(L,null,G(l.concat(s),e=>(g(),P(L,{key:e[0]},[i.value[e[0]]?(g(),j(Z,{key:0,id:e[0],path:e[0],title:e[1],code:i.value[e[0]].code,component:i.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),j(a(Y),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}))])]),_:1}),a(Ke).isMobileStyle?Fe("",!0):(g(),j(a(oe),{key:0},{default:p(()=>[b(a(ut),{type:"block",bound:100,"ignore-gap":"","offset-target":".my-canvas-tools"},{default:p(()=>[(g(!0),P(L,null,G(l.concat(s),e=>(g(),j(a(rt),{key:e[0],href:a(o)+e[0],title:e[1]},null,8,["href","title"]))),128))]),_:1})]),_:1}))]))}}),Ct=me(yt,[["__scopeId","data-v-aed58f12"]]);export{Ct as default};
