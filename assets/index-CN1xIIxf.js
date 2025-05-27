const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./InfoWindow-cu9_yxvI.js","./index-CNq_cRb_.js","./index-lYA9llZA.css","./a-Dedg8Xl1.js","./InfoWindow-CWN5qX7Q.css","./index-D_vxkSq7.js","./index-2JgbZguM.js","./index-BuuKJlB2.css","./index-Dry5xNgc.css","./axis-Bgrfi9Wx.js","./headers-3Gh9E0j8.js","./InputNumber-DWr0AqMd.js","./use-locale-EBX4u1uP.js","./Input-x1xhYjDg.js","./Suffix-C4mvMg4O.js","./ArrowUp-zA8haPW7.js","./Flex-CbhDdOUx.js","./RadioGroup-D6GVnPBG.js","./RadioButton-CQeWnw1k.js","./axis-D3d5TSm5.css","./center-DoBOv6SI.js","./custom-BFfHPw1Z.js","./layer-C7wNkI7B.js","./line-DZmqQQIi.js","./Switch-BnDcjuBD.js","./original-s8ROv3eh.js","./point-D4P6jDyt.js","./polygon-BB5diqat.js","./shortcutKey-Dp7R1eZo.js","./show-CYFW-osg.js","./show-Lm5Cvto2.css","./text-BFA5iLqx.js"])))=>i.map(i=>d[i]);
import{q as he,b7 as be,z as $,p as O,R as N,d as V,v as ne,a2 as xe,J as R,aI as ee,a7 as re,k as A,am as ye,G as ve,S as ue,Q as I,ap as J,n as ke,E as X,ag as we,C as H,b8 as Re,K as Ce,b9 as Ee,a6 as Te,D as $e,x as te,ba as je,F as me,L as ce,bb as Pe,o as g,c as P,aM as le,aO as Ae,bc as Oe,bd as Le,aS as j,w as m,a as b,u as a,aY as U,be as F,B as W,aZ as K,e as q,bf as Be,bg as Ie,t as de,bh as Se,bi as Ne,bj as Ve,bk as ze,bl as De,bm as He,b5 as Me,_ as pe,aU as Fe,ah as We,b4 as Ke,bn as qe,bo as p,Z as L,aT as G,aP as fe}from"./index-CNq_cRb_.js";import{R as Ge,N as Y}from"./Refresh-CAWWwevp.js";import{S as oe}from"./Scrollbar-CMuhqfox.js";import{u as Ue,a as Ye}from"./use-collection-X_fTqxh7.js";import{g as Ze}from"./attribute-Cz32yFEB.js";function _e(t){return typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t}function Je(t,o){const l=he(be,null);return $(()=>t.hljs||(l==null?void 0:l.mergedHljsRef.value))}function Qe(t){return t instanceof HTMLElement?t.scrollTop:window.scrollY}function Xe(t){return t instanceof HTMLElement?t.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const et=O("affix",[N("affixed",{position:"fixed"},[N("absolute-positioned",{position:"absolute"})])]),ie={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},tt=ve(ie),ot=V({name:"Affix",props:ie,setup(t){const{mergedClsPrefixRef:o}=ne(t);xe("-affix",et,o);let l=null;const s=R(!1),u=R(!1),h=R(null),x=R(null),i=$(()=>u.value||s.value),v=$(()=>{var n,r;return(r=(n=t.triggerTop)!==null&&n!==void 0?n:t.offsetTop)!==null&&r!==void 0?r:t.top}),y=$(()=>{var n,r;return(r=(n=t.top)!==null&&n!==void 0?n:t.triggerTop)!==null&&r!==void 0?r:t.offsetTop}),w=$(()=>{var n,r;return(r=(n=t.bottom)!==null&&n!==void 0?n:t.triggerBottom)!==null&&r!==void 0?r:t.offsetBottom}),C=$(()=>{var n,r;return(r=(n=t.triggerBottom)!==null&&n!==void 0?n:t.offsetBottom)!==null&&r!==void 0?r:t.bottom}),e=R(null),c=()=>{const{target:n,listenTo:r}=t;n?l=n():r?l=_e(r):l=document,l&&(l.addEventListener("scroll",f),f())};function f(){ye(d)}function d(){const{value:n}=e;if(!l||!n)return;const r=Qe(l);if(i.value){x.value!==null&&r<x.value&&(s.value=!1,x.value=null),h.value!==null&&r>h.value&&(u.value=!1,h.value=null);return}const E=Xe(l),T=n.getBoundingClientRect(),S=T.top-E.top,B=E.bottom-T.bottom,k=v.value,_=C.value;k!==void 0&&S<=k?(s.value=!0,x.value=r-(k-S)):(s.value=!1,x.value=null),_!==void 0&&B<=_?(u.value=!0,h.value=r+_-B):(u.value=!1,h.value=null)}return ee(()=>{c()}),re(()=>{l&&l.removeEventListener("scroll",f)}),{selfRef:e,affixed:i,mergedClsPrefix:o,mergedstyle:$(()=>{const n={};return s.value&&v.value!==void 0&&y.value!==void 0&&(n.top=`${y.value}px`),u.value&&C.value!==void 0&&w.value!==void 0&&(n.bottom=`${w.value}px`),n})}},render(){const{mergedClsPrefix:t}=this;return A("div",{ref:"selfRef",class:[`${t}-affix`,{[`${t}-affix--affixed`]:this.affixed,[`${t}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),nt=O("anchor",`
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
 `)])])]),Q=ke("n-anchor"),rt={title:String,href:String},lt=V({name:"AnchorLink",props:rt,setup(t,{slots:o}){const l=R(null),s=he(Q),u=X(t,"href"),h=we(()=>u.value&&u.value===s.activeHref.value);Ue(Q,"collectedLinkHrefs",u),Ye(Q,"titleEls",()=>l.value),H(h,i=>{i&&l.value&&s.updateBarPosition(l.value)});function x(){t.href!==void 0&&s.setActiveHref(t.href)}return()=>{var i;const{value:v}=s.mergedClsPrefix;return A("div",{class:[`${v}-anchor-link`,h.value&&`${v}-anchor-link--active`]},A("a",{ref:l,class:[`${v}-anchor-link__title`],href:t.href,title:Ze(t.title),onClick:x},t.title),(i=o.default)===null||i===void 0?void 0:i.call(o))}}});function it(t,o){const{top:l,height:s}=t.getBoundingClientRect(),u=o instanceof HTMLElement?o.getBoundingClientRect().top:0;return{top:l-u,height:s}}const ae={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},at=ve(ae),st=V({name:"BaseAnchor",props:Object.assign(Object.assign({},ae),{mergedClsPrefix:{type:String,required:!0}}),setup(t){const o=[],l=[],s=R(null),u=R(null),h=R(null),x=R(null),i=$(()=>t.type==="block"),v=$(()=>!i.value&&t.showRail);function y(){const{value:f}=h,{value:d}=u;f&&(f.style.transition="none"),d&&(d.style.transition="none"),l&&l.forEach(n=>{n.style.transition="none"}),$e(()=>{const{value:n}=h,{value:r}=u;n&&(n.offsetWidth,n.style.transition=""),r&&(r.offsetWidth,r.style.transition=""),l&&l.forEach(E=>{E.offsetWidth,E.style.transition=""})})}function w(f,d=!0){const{value:n}=h,{value:r}=u,{value:E}=x;if(!E||!n)return;d||(n.style.transition="none",r&&(r.style.transition="none"));const{offsetHeight:T,offsetWidth:S}=f,{top:B,left:k}=f.getBoundingClientRect(),{top:_,left:z}=E.getBoundingClientRect(),D=B-_,M=k-z;n.style.top=`${D}px`,n.style.height=`${T}px`,r&&(r.style.top=`${D}px`,r.style.height=`${T}px`,r.style.maxWidth=`${S+M}px`),n.offsetHeight,r&&r.offsetHeight,d||(n.style.transition="",r&&(r.style.transition=""))}const C=Re(()=>{c(!0)},128);function e(f,d=!0){const n=/^#([^#]+)$/.exec(f);if(!n)return;const r=document.getElementById(n[1]);r&&(s.value=f,r.scrollIntoView(),d||y(),C())}function c(f=!0){var d;const n=[],r=_e((d=t.offsetTarget)!==null&&d!==void 0?d:document);o.forEach(k=>{const _=/#([^#]+)$/.exec(k);if(!_)return;const z=document.getElementById(_[1]);if(z&&r){const{top:D,height:M}=it(z,r);n.push({top:D,height:M,href:k})}}),n.sort((k,_)=>k.top>_.top?1:(k.top===_.top&&k.height<_.height,-1));const E=s.value,{bound:T,ignoreGap:S}=t,B=n.reduce((k,_)=>_.top+_.height<0?S?_:k:_.top<=T?k===null?_:_.top===k.top?_.href===E?_:k:_.top>k.top?_:k:k,null);f||y(),B?s.value=B.href:s.value=null}return Ce(Q,{activeHref:s,mergedClsPrefix:X(t,"mergedClsPrefix"),updateBarPosition:w,setActiveHref:e,collectedLinkHrefs:o,titleEls:l}),ee(()=>{document.addEventListener("scroll",C,!0),e(window.location.hash),c(!1)}),Ee(()=>{e(window.location.hash),c(!1)}),re(()=>{document.removeEventListener("scroll",C,!0)}),H(s,f=>{if(f===null){const{value:d}=u;d&&!i.value&&(d.style.maxWidth="0")}}),{selfRef:x,barRef:h,slotRef:u,setActiveHref:e,activeHref:s,isBlockType:i,mergedShowRail:v}},render(){var t;const{mergedClsPrefix:o,mergedShowRail:l,isBlockType:s,$slots:u}=this,h=A("div",{class:[`${o}-anchor`,s&&`${o}-anchor--block`,l&&`${o}-anchor--show-rail`],ref:"selfRef"},l&&this.showBackground?A("div",{ref:"slotRef",class:`${o}-anchor-link-background`}):null,l?A("div",{class:`${o}-anchor-rail`},A("div",{ref:"barRef",class:[`${o}-anchor-rail__bar`,this.activeHref!==null&&`${o}-anchor-rail__bar--active`]})):null,(t=u.default)===null||t===void 0?void 0:t.call(u));return this.internalScrollable?A(Te,null,{default:()=>h}):h}}),ut=Object.assign(Object.assign(Object.assign(Object.assign({},te.props),{affix:Boolean}),ie),ae),ct=V({name:"Anchor",props:ut,setup(t,{slots:o}){const{mergedClsPrefixRef:l,inlineThemeDisabled:s}=ne(t),u=te("Anchor","-anchor",nt,je,t,l),h=R(null),x=$(()=>{const{self:{railColor:v,linkColor:y,railColorActive:w,linkTextColor:C,linkTextColorHover:e,linkTextColorPressed:c,linkTextColorActive:f,linkFontSize:d,railWidth:n,linkPadding:r,borderRadius:E},common:{cubicBezierEaseInOut:T}}=u.value;return{"--n-link-border-radius":E,"--n-link-color":y,"--n-link-font-size":d,"--n-link-text-color":C,"--n-link-text-color-hover":e,"--n-link-text-color-active":f,"--n-link-text-color-pressed":c,"--n-link-padding":r,"--n-bezier":T,"--n-rail-color":v,"--n-rail-color-active":w,"--n-rail-width":n}}),i=s?me("anchor",void 0,x,t):void 0;return{scrollTo(v){var y;(y=h.value)===null||y===void 0||y.setActiveHref(v)},renderAnchor:()=>(i==null||i.onRender(),A(st,Object.assign({ref:h,style:s?void 0:x.value,class:i==null?void 0:i.themeClass.value},ce(t,at),{mergedClsPrefix:l.value}),o))}},render(){return this.affix?A(ot,Object.assign({},ce(this,tt)),{default:this.renderAnchor}):this.renderAnchor()}}),dt=I([O("code",`
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
 }`]}]),ft=Object.assign(Object.assign({},te.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),ht=V({name:"Code",props:ft,setup(t,{slots:o}){const{internalNoHighlight:l}=t,{mergedClsPrefixRef:s,inlineThemeDisabled:u}=ne(),h=R(null),x=l?{value:void 0}:Je(t),i=(c,f,d)=>{const{value:n}=x;return!n||!(c&&n.getLanguage(c))?null:n.highlight(d?f.trim():f,{language:c}).value},v=$(()=>t.inline||t.wordWrap?!1:t.showLineNumbers),y=()=>{if(o.default)return;const{value:c}=h;if(!c)return;const{language:f}=t,d=t.uri?window.decodeURIComponent(t.code):t.code;if(f){const r=i(f,d,t.trim);if(r!==null){if(t.inline)c.innerHTML=r;else{const E=c.querySelector(".__code__");E&&c.removeChild(E);const T=document.createElement("pre");T.className="__code__",T.innerHTML=r,c.appendChild(T)}return}}if(t.inline){c.textContent=d;return}const n=c.querySelector(".__code__");if(n)n.textContent=d;else{const r=document.createElement("pre");r.className="__code__",r.textContent=d,c.innerHTML="",c.appendChild(r)}};ee(y),H(X(t,"language"),y),H(X(t,"code"),y),l||H(x,y);const w=te("Code","-code",dt,Pe,t,s),C=$(()=>{const{common:{cubicBezierEaseInOut:c,fontFamilyMono:f},self:{textColor:d,fontSize:n,fontWeightStrong:r,lineNumberTextColor:E,"mono-3":T,"hue-1":S,"hue-2":B,"hue-3":k,"hue-4":_,"hue-5":z,"hue-5-2":D,"hue-6":M,"hue-6-2":ge}}=w.value,{internalFontSize:se}=t;return{"--n-font-size":se?`${se}px`:n,"--n-font-family":f,"--n-font-weight-strong":r,"--n-bezier":c,"--n-text-color":d,"--n-mono-3":T,"--n-hue-1":S,"--n-hue-2":B,"--n-hue-3":k,"--n-hue-4":_,"--n-hue-5":z,"--n-hue-5-2":D,"--n-hue-6":M,"--n-hue-6-2":ge,"--n-line-number-text-color":E}}),e=u?me("code",$(()=>`${t.internalFontSize||"a"}`),C,t):void 0;return{mergedClsPrefix:s,codeRef:h,mergedShowLineNumbers:v,lineNumbers:$(()=>{let c=1;const f=[];let d=!1;for(const n of t.code)n===`
`?(d=!0,f.push(c++)):d=!1;return d||f.push(c++),f.join(`
`)}),cssVars:u?void 0:C,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){var t,o;const{mergedClsPrefix:l,wordWrap:s,mergedShowLineNumbers:u,onRender:h}=this;return h==null||h(),A("code",{class:[`${l}-code`,this.themeClass,s&&`${l}-code--word-wrap`,u&&`${l}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},u?A("pre",{class:`${l}-code__line-numbers`},this.lineNumbers):null,(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t))}}),vt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},mt=le("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M160 368L32 256l128-112"},null,-1),pt=le("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 368l128-112l-128-112"},null,-1),_t=[mt,pt],gt=V({name:"CodeOutline",render:function(o,l){return g(),P("svg",vt,_t)}}),bt=V({__name:"card",props:{path:{},code:{},component:{}},setup(t){const o=R(!1),l=R(),s=R();H(()=>Ae.value.theme,i=>{var v;return(v=s.value)==null?void 0:v.myCanvas.setTheme(i)});const u=R(!1),h=R(),x=new ResizeObserver(()=>{var i;u.value=Oe((i=l.value)==null?void 0:i.$el)});return ee(()=>{h.value=Le(l.value.$el),x.observe(l.value.$el)}),re(()=>{var i;(i=s.value)==null||i.myCanvas.destroy(),x==null||x.disconnect()}),(i,v)=>(g(),j(a(Me),{ref_key:"cardRef",ref:l},{"header-extra":m(()=>[b(a(U),null,{default:m(()=>[b(a(F),{trigger:"hover"},{trigger:m(()=>[b(a(W),{onClick:v[0]||(v[0]=y=>{var w;return(w=s.value)==null?void 0:w.myCanvas.returnToOrigin()}),text:""},{icon:m(()=>[b(a(K),{component:a(Ge)},null,8,["component"])]),_:1})]),default:m(()=>[q(" 复位 ")]),_:1}),b(a(F),{trigger:"hover"},{trigger:m(()=>[b(a(W),{onClick:h.value,text:""},{icon:m(()=>[b(a(K),{component:u.value?a(Be):a(Ie)},null,8,["component"])]),_:1},8,["onClick"])]),default:m(()=>[q(" "+de(u.value?"退出全屏":"全屏"),1)]),_:1}),b(a(F),{trigger:"hover"},{trigger:m(()=>[b(a(W),{tag:"a",href:"https://github.com/ADMINnhanh/nhanh-frontend-view/tree/main/src/views/canvas/_Canvas/demo/"+i.path,target:"_blank",text:""},{icon:m(()=>[b(a(K),{component:a(Se)},null,8,["component"])]),_:1},8,["href"])]),default:m(()=>[q(" 在 GitHub 查看源码 ")]),_:1}),b(a(F),{trigger:"hover"},{trigger:m(()=>[b(a(W),{onClick:v[1]||(v[1]=y=>a(Ne).success("复制成功").error("复制失败").run(a(Ve)(i.code))),text:""},{icon:m(()=>[b(a(K),{component:a(ze)},null,8,["component"])]),_:1})]),default:m(()=>[q(" 复制代码 ")]),_:1}),b(a(F),{trigger:"hover"},{trigger:m(()=>[b(a(W),{onClick:v[2]||(v[2]=y=>o.value=!o.value),text:""},{icon:m(()=>[b(a(K),{component:a(gt)},null,8,["component"])]),_:1})]),default:m(()=>[q(" "+de(o.value?"收起代码":"显示代码"),1)]),_:1})]),_:1})]),default:m(()=>[(g(),j(De(i.component),{ref_key:"componentRef",ref:s},null,512)),b(a(He),{show:o.value},{default:m(()=>[b(a(oe),{"x-scrollable":"",style:{"max-height":"50vh","margin-top":"10px"}},{default:m(()=>[b(a(ht),{code:i.code,language:"javascript","show-line-numbers":""},null,8,["code"])]),_:1})]),_:1},8,["show"])]),_:1},512))}}),Z=pe(bt,[["__scopeId","data-v-21b6c991"]]),xt={class:"list-box"},yt=V({__name:"index",setup(t){const o=location.hash.replace(/(#[^/]+)*$/,"#"),l=[["China%2Findex.vue","最佳实现 - 中国地图"]],s=[["original.vue","仅需初始化 _Canvas"],["center.vue","中心点"],["shortcutKey.vue","快捷键"],["axis.vue","坐标轴"],["text.vue","文字"],["point.vue","点"],["line.vue","线"],["polygon.vue","面"],["custom.vue","自定义绘制"],["layer.vue","图层 & 层级"],["show.vue","显示条件"]];function u(w){const C=[],e=[];for(let c=0;c<w.length;c++)c%2===0?e.push(w[c]):C.push(w[c]);return[e,C]}const[h,x]=u(s),i=R({});(async function(){const w=Object.assign({"./demo/China/InfoWindow.vue":()=>p(()=>import("./InfoWindow-g7xquq8S.js"),[],import.meta.url).then(e=>e.default),"./demo/China/index.vue":()=>p(()=>import("./index-D_j3hOmL.js"),[],import.meta.url).then(e=>e.default),"./demo/axis.vue":()=>p(()=>import("./axis-CmBv1h4s.js"),[],import.meta.url).then(e=>e.default),"./demo/center.vue":()=>p(()=>import("./center-C_FgnQXD.js"),[],import.meta.url).then(e=>e.default),"./demo/custom.vue":()=>p(()=>import("./custom-BVw4wZ8q.js"),[],import.meta.url).then(e=>e.default),"./demo/layer.vue":()=>p(()=>import("./layer-CyUV680f.js"),[],import.meta.url).then(e=>e.default),"./demo/line.vue":()=>p(()=>import("./line-B2dqyG61.js"),[],import.meta.url).then(e=>e.default),"./demo/original.vue":()=>p(()=>import("./original-gmbYn265.js"),[],import.meta.url).then(e=>e.default),"./demo/point.vue":()=>p(()=>import("./point-DkSObZDj.js"),[],import.meta.url).then(e=>e.default),"./demo/polygon.vue":()=>p(()=>import("./polygon-CQQYhI7V.js"),[],import.meta.url).then(e=>e.default),"./demo/shortcutKey.vue":()=>p(()=>import("./shortcutKey-NkOA4PHY.js"),[],import.meta.url).then(e=>e.default),"./demo/show.vue":()=>p(()=>import("./show-CUtXt6oS.js"),[],import.meta.url).then(e=>e.default),"./demo/text.vue":()=>p(()=>import("./text-CJmi6Rn8.js"),[],import.meta.url).then(e=>e.default)}),C=Object.assign({"./demo/China/InfoWindow.vue":()=>p(()=>import("./InfoWindow-cu9_yxvI.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),"./demo/China/index.vue":()=>p(()=>import("./index-D_vxkSq7.js"),__vite__mapDeps([5,1,2,6,7,0,3,4,8]),import.meta.url),"./demo/axis.vue":()=>p(()=>import("./axis-Bgrfi9Wx.js"),__vite__mapDeps([9,1,2,6,7,10,11,12,13,14,15,16,17,18,19]),import.meta.url),"./demo/center.vue":()=>p(()=>import("./center-DoBOv6SI.js"),__vite__mapDeps([20,1,2,6,7,17,18,11,12,13,14]),import.meta.url),"./demo/custom.vue":()=>p(()=>import("./custom-BFfHPw1Z.js"),__vite__mapDeps([21,1,2,6,7]),import.meta.url),"./demo/layer.vue":()=>p(()=>import("./layer-C7wNkI7B.js"),__vite__mapDeps([22,1,2,6,7]),import.meta.url),"./demo/line.vue":()=>p(()=>import("./line-DZmqQQIi.js"),__vite__mapDeps([23,1,2,6,7,24]),import.meta.url),"./demo/original.vue":()=>p(()=>import("./original-s8ROv3eh.js"),__vite__mapDeps([25,1,2,6,7]),import.meta.url),"./demo/point.vue":()=>p(()=>import("./point-D4P6jDyt.js"),__vite__mapDeps([26,1,2,6,7,24]),import.meta.url),"./demo/polygon.vue":()=>p(()=>import("./polygon-BB5diqat.js"),__vite__mapDeps([27,1,2,6,7,24]),import.meta.url),"./demo/shortcutKey.vue":()=>p(()=>import("./shortcutKey-Dp7R1eZo.js"),__vite__mapDeps([28,1,2,6,7,16]),import.meta.url),"./demo/show.vue":()=>p(()=>import("./show-CYFW-osg.js"),__vite__mapDeps([29,1,2,6,7,24,30]),import.meta.url),"./demo/text.vue":()=>p(()=>import("./text-BFA5iLqx.js"),__vite__mapDeps([31,1,2,6,7,24]),import.meta.url)});for(const e in w){const c=e.replace("./demo/","").replace(/\//g,"%2F"),f=await w[e](),d=await C[e]();i.value[c]={component:Fe(d.default),code:f}}})();const v=R(window.innerWidth>=1280),y=()=>{v.value=window.innerWidth>=1280};return window.addEventListener("resize",y),We(()=>{window.removeEventListener("resize",y)}),(w,C)=>(g(),P("div",{id:"/canvas/_Canvas",class:qe(["my-canvas-tools",a(fe).isMobileStyle&&"mobile"])},[b(a(oe),null,{default:m(()=>[le("div",xt,[v.value?(g(),P(L,{key:0},[b(a(U),{class:"independent-space",vertical:""},{default:m(()=>[(g(),P(L,null,G(l,e=>(g(),P(L,{key:e[0]},[i.value[e[0]]?(g(),j(Z,{key:0,id:e[0],path:e[0],title:e[1],code:i.value[e[0]].code,component:i.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),j(a(Y),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),64))]),_:1}),b(a(U),{vertical:""},{default:m(()=>[(g(!0),P(L,null,G(a(h),e=>(g(),P(L,{key:e[0]},[i.value[e[0]]?(g(),j(Z,{key:0,id:e[0],path:e[0],title:e[1],code:i.value[e[0]].code,component:i.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),j(a(Y),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}),b(a(U),{vertical:""},{default:m(()=>[(g(!0),P(L,null,G(a(x),e=>(g(),P(L,{key:e[0]},[i.value[e[0]]?(g(),j(Z,{key:0,id:e[0],path:e[0],title:e[1],code:i.value[e[0]].code,component:i.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),j(a(Y),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1})],64)):(g(),j(a(U),{key:1,style:{width:"100%"},vertical:""},{default:m(()=>[(g(!0),P(L,null,G(l.concat(s),e=>(g(),P(L,{key:e[0]},[i.value[e[0]]?(g(),j(Z,{key:0,id:e[0],path:e[0],title:e[1],code:i.value[e[0]].code,component:i.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),j(a(Y),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}))])]),_:1}),a(fe).isMobileStyle?Ke("",!0):(g(),j(a(oe),{key:0},{default:m(()=>[b(a(ct),{type:"block",bound:100,"ignore-gap":"","offset-target":".my-canvas-tools"},{default:m(()=>[(g(!0),P(L,null,G(l.concat(s),e=>(g(),j(a(lt),{key:e[0],href:a(o)+e[0],title:e[1]},null,8,["href","title"]))),128))]),_:1})]),_:1}))],2))}}),Tt=pe(yt,[["__scopeId","data-v-469e881c"]]);export{Tt as default};
