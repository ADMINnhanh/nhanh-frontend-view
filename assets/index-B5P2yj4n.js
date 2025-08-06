const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Attraction-BNuZ0ttD.js","./index-gVmBTWk7.js","./index-DUnURvtu.css","./a-CQJXyJbj.js","./Attraction-DdUmmkax.css","./Province-D0cCcXEQ.js","./blockquote-G0gD_8Ah.js","./Province-BBdlX_sf.css","./index-B_Ce4OpO.js","./index--WlHysRm.js","./index-Bl2TsqoG.css","./Switch-C_FcSfcZ.js","./index-C-fYzbtF.css","./arc-CgXio8GF.js","./updateData-DiE9smKh.js","./updateData-3Lc4LTPK.css","./arcTo-CYt3BHGs.js","./axis-CQmONhbP.js","./Checkbox-BNORzOqf.js","./InputNumber-CwhG422b.js","./RadioGroup-CeqTxc09.js","./use-locale-CaFJGgHw.js","./Input-BbTGOIYb.js","./Suffix-DZYCfJWI.js","./Flex-D-ST8ILU.js","./headers-C1Ve5P9y.js","./axis-KWxowbTl.css","./bezierCurve-CY-3Cuw5.js","./center-Cql-Bewj.js","./custom-DER6UqsX.js","./ellipse-Be8SPB8-.js","./layer-BXQVQxAW.js","./line-BYKsJW16.js","./original-S0Ld9gu9.js","./point-CLSWZ-Q9.js","./polygon-CVjTjrbx.js","./shortcutKey-Bw1pwlxB.js","./show-D2oTBK5e.js","./show-DGeKlMl8.css","./text-NLvkVt--.js"])))=>i.map(i=>d[i]);
import{q as fe,b7 as ge,z as $,p as O,R as V,d as D,v as ne,a2 as be,J as k,aI as ee,a7 as re,k as j,am as xe,G as ve,S as ue,Q as B,ap as J,n as ye,E as X,ag as ke,C as H,b8 as Ee,K as Re,b9 as we,a6 as Te,D as Ce,x as te,ba as $e,F as he,L as ce,bb as Ae,o as p,c as P,aM as le,aO as Pe,bc as je,bd as Oe,aS as A,w as m,b as g,u as a,aY as U,be as F,B as W,aZ as K,e as q,bf as Ie,bg as Le,t as de,bh as Be,bi as Se,bj as Ve,bk as De,bl as Ne,bm as ze,b5 as He,_ as me,aU as Me,ah as Fe,b4 as We,bn as d,Z as I,aT as G,aP as Ke}from"./index-gVmBTWk7.js";import{R as qe,N as Y}from"./Refresh-DaTpR3Rv.js";import{S as oe}from"./Scrollbar-BlrEY93R.js";import{u as Ge,a as Ue}from"./use-collection-cbsYWw8K.js";import{g as Ye}from"./attribute-Cz32yFEB.js";function _e(t){return typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t}function Ze(t,o){const l=fe(ge,null);return $(()=>t.hljs||(l==null?void 0:l.mergedHljsRef.value))}function Je(t){return t instanceof HTMLElement?t.scrollTop:window.scrollY}function Qe(t){return t instanceof HTMLElement?t.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const Xe=O("affix",[V("affixed",{position:"fixed"},[V("absolute-positioned",{position:"absolute"})])]),ie={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},et=ve(ie),tt=D({name:"Affix",props:ie,setup(t){const{mergedClsPrefixRef:o}=ne(t);be("-affix",Xe,o);let l=null;const u=k(!1),f=k(!1),h=k(null),b=k(null),i=$(()=>f.value||u.value),v=$(()=>{var n,r;return(r=(n=t.triggerTop)!==null&&n!==void 0?n:t.offsetTop)!==null&&r!==void 0?r:t.top}),y=$(()=>{var n,r;return(r=(n=t.top)!==null&&n!==void 0?n:t.triggerTop)!==null&&r!==void 0?r:t.offsetTop}),w=$(()=>{var n,r;return(r=(n=t.bottom)!==null&&n!==void 0?n:t.triggerBottom)!==null&&r!==void 0?r:t.offsetBottom}),C=$(()=>{var n,r;return(r=(n=t.triggerBottom)!==null&&n!==void 0?n:t.offsetBottom)!==null&&r!==void 0?r:t.bottom}),E=k(null),c=()=>{const{target:n,listenTo:r}=t;n?l=n():r?l=_e(r):l=document,l&&(l.addEventListener("scroll",s),s())};function s(){xe(e)}function e(){const{value:n}=E;if(!l||!n)return;const r=Je(l);if(i.value){b.value!==null&&r<b.value&&(u.value=!1,b.value=null),h.value!==null&&r>h.value&&(f.value=!1,h.value=null);return}const R=Qe(l),T=n.getBoundingClientRect(),S=T.top-R.top,L=R.bottom-T.bottom,x=v.value,_=C.value;x!==void 0&&S<=x?(u.value=!0,b.value=r-(x-S)):(u.value=!1,b.value=null),_!==void 0&&L<=_?(f.value=!0,h.value=r+_-L):(f.value=!1,h.value=null)}return ee(()=>{c()}),re(()=>{l&&l.removeEventListener("scroll",s)}),{selfRef:E,affixed:i,mergedClsPrefix:o,mergedstyle:$(()=>{const n={};return u.value&&v.value!==void 0&&y.value!==void 0&&(n.top=`${y.value}px`),f.value&&C.value!==void 0&&w.value!==void 0&&(n.bottom=`${w.value}px`),n})}},render(){const{mergedClsPrefix:t}=this;return j("div",{ref:"selfRef",class:[`${t}-affix`,{[`${t}-affix--affixed`]:this.affixed,[`${t}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),ot=O("anchor",`
 position: relative;
`,[ue("block",`
 padding-left: var(--n-rail-width);
 `,[O("anchor-link",[B("+, >",[O("anchor-link",`
 margin-top: .5em;
 `)])]),O("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),ue("show-rail",[B(">",[O("anchor-link","padding-left: 0;")])])]),V("block",[O("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[V("active",`
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
 `,[V("active",{backgroundColor:"var(--n-rail-color-active)"})])]),O("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[V("active",[B(">",[J("title",`
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
 `)])])]),Q=ye("n-anchor"),nt={title:String,href:String},rt=D({name:"AnchorLink",props:nt,setup(t,{slots:o}){const l=k(null),u=fe(Q),f=X(t,"href"),h=ke(()=>f.value&&f.value===u.activeHref.value);Ge(Q,"collectedLinkHrefs",f),Ue(Q,"titleEls",()=>l.value),H(h,i=>{i&&l.value&&u.updateBarPosition(l.value)});function b(){t.href!==void 0&&u.setActiveHref(t.href)}return()=>{var i;const{value:v}=u.mergedClsPrefix;return j("div",{class:[`${v}-anchor-link`,h.value&&`${v}-anchor-link--active`]},j("a",{ref:l,class:[`${v}-anchor-link__title`],href:t.href,title:Ye(t.title),onClick:b},t.title),(i=o.default)===null||i===void 0?void 0:i.call(o))}}});function lt(t,o){const{top:l,height:u}=t.getBoundingClientRect(),f=o instanceof HTMLElement?o.getBoundingClientRect().top:0;return{top:l-f,height:u}}const ae={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},it=ve(ae),at=D({name:"BaseAnchor",props:Object.assign(Object.assign({},ae),{mergedClsPrefix:{type:String,required:!0}}),setup(t){const o=[],l=[],u=k(null),f=k(null),h=k(null),b=k(null),i=$(()=>t.type==="block"),v=$(()=>!i.value&&t.showRail);function y(){const{value:s}=h,{value:e}=f;s&&(s.style.transition="none"),e&&(e.style.transition="none"),l&&l.forEach(n=>{n.style.transition="none"}),Ce(()=>{const{value:n}=h,{value:r}=f;n&&(n.offsetWidth,n.style.transition=""),r&&(r.offsetWidth,r.style.transition=""),l&&l.forEach(R=>{R.offsetWidth,R.style.transition=""})})}function w(s,e=!0){const{value:n}=h,{value:r}=f,{value:R}=b;if(!R||!n)return;e||(n.style.transition="none",r&&(r.style.transition="none"));const{offsetHeight:T,offsetWidth:S}=s,{top:L,left:x}=s.getBoundingClientRect(),{top:_,left:N}=R.getBoundingClientRect(),z=L-_,M=x-N;n.style.top=`${z}px`,n.style.height=`${T}px`,r&&(r.style.top=`${z}px`,r.style.height=`${T}px`,r.style.maxWidth=`${S+M}px`),n.offsetHeight,r&&r.offsetHeight,e||(n.style.transition="",r&&(r.style.transition=""))}const C=Ee(()=>{c(!0)},128);function E(s,e=!0){const n=/^#([^#]+)$/.exec(s);if(!n)return;const r=document.getElementById(n[1]);r&&(u.value=s,r.scrollIntoView(),e||y(),C())}function c(s=!0){var e;const n=[],r=_e((e=t.offsetTarget)!==null&&e!==void 0?e:document);o.forEach(x=>{const _=/#([^#]+)$/.exec(x);if(!_)return;const N=document.getElementById(_[1]);if(N&&r){const{top:z,height:M}=lt(N,r);n.push({top:z,height:M,href:x})}}),n.sort((x,_)=>x.top>_.top?1:(x.top===_.top&&x.height<_.height,-1));const R=u.value,{bound:T,ignoreGap:S}=t,L=n.reduce((x,_)=>_.top+_.height<0?S?_:x:_.top<=T?x===null?_:_.top===x.top?_.href===R?_:x:_.top>x.top?_:x:x,null);s||y(),L?u.value=L.href:u.value=null}return Re(Q,{activeHref:u,mergedClsPrefix:X(t,"mergedClsPrefix"),updateBarPosition:w,setActiveHref:E,collectedLinkHrefs:o,titleEls:l}),ee(()=>{document.addEventListener("scroll",C,!0),E(window.location.hash),c(!1)}),we(()=>{E(window.location.hash),c(!1)}),re(()=>{document.removeEventListener("scroll",C,!0)}),H(u,s=>{if(s===null){const{value:e}=f;e&&!i.value&&(e.style.maxWidth="0")}}),{selfRef:b,barRef:h,slotRef:f,setActiveHref:E,activeHref:u,isBlockType:i,mergedShowRail:v}},render(){var t;const{mergedClsPrefix:o,mergedShowRail:l,isBlockType:u,$slots:f}=this,h=j("div",{class:[`${o}-anchor`,u&&`${o}-anchor--block`,l&&`${o}-anchor--show-rail`],ref:"selfRef"},l&&this.showBackground?j("div",{ref:"slotRef",class:`${o}-anchor-link-background`}):null,l?j("div",{class:`${o}-anchor-rail`},j("div",{ref:"barRef",class:[`${o}-anchor-rail__bar`,this.activeHref!==null&&`${o}-anchor-rail__bar--active`]})):null,(t=f.default)===null||t===void 0?void 0:t.call(f));return this.internalScrollable?j(Te,null,{default:()=>h}):h}}),st=Object.assign(Object.assign(Object.assign(Object.assign({},te.props),{affix:Boolean}),ie),ae),ut=D({name:"Anchor",props:st,setup(t,{slots:o}){const{mergedClsPrefixRef:l,inlineThemeDisabled:u}=ne(t),f=te("Anchor","-anchor",ot,$e,t,l),h=k(null),b=$(()=>{const{self:{railColor:v,linkColor:y,railColorActive:w,linkTextColor:C,linkTextColorHover:E,linkTextColorPressed:c,linkTextColorActive:s,linkFontSize:e,railWidth:n,linkPadding:r,borderRadius:R},common:{cubicBezierEaseInOut:T}}=f.value;return{"--n-link-border-radius":R,"--n-link-color":y,"--n-link-font-size":e,"--n-link-text-color":C,"--n-link-text-color-hover":E,"--n-link-text-color-active":s,"--n-link-text-color-pressed":c,"--n-link-padding":r,"--n-bezier":T,"--n-rail-color":v,"--n-rail-color-active":w,"--n-rail-width":n}}),i=u?he("anchor",void 0,b,t):void 0;return{scrollTo(v){var y;(y=h.value)===null||y===void 0||y.setActiveHref(v)},renderAnchor:()=>(i==null||i.onRender(),j(at,Object.assign({ref:h,style:u?void 0:b.value,class:i==null?void 0:i.themeClass.value},ce(t,it),{mergedClsPrefix:l.value}),o))}},render(){return this.affix?j(tt,Object.assign({},ce(this,et)),{default:this.renderAnchor}):this.renderAnchor()}}),ct=B([O("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[V("show-line-numbers",`
 display: flex;
 `),J("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),V("word-wrap",[B("pre",`
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
 }`]}]),dt=Object.assign(Object.assign({},te.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),ft=D({name:"Code",props:dt,setup(t,{slots:o}){const{internalNoHighlight:l}=t,{mergedClsPrefixRef:u,inlineThemeDisabled:f}=ne(),h=k(null),b=l?{value:void 0}:Ze(t),i=(c,s,e)=>{const{value:n}=b;return!n||!(c&&n.getLanguage(c))?null:n.highlight(e?s.trim():s,{language:c}).value},v=$(()=>t.inline||t.wordWrap?!1:t.showLineNumbers),y=()=>{if(o.default)return;const{value:c}=h;if(!c)return;const{language:s}=t,e=t.uri?window.decodeURIComponent(t.code):t.code;if(s){const r=i(s,e,t.trim);if(r!==null){if(t.inline)c.innerHTML=r;else{const R=c.querySelector(".__code__");R&&c.removeChild(R);const T=document.createElement("pre");T.className="__code__",T.innerHTML=r,c.appendChild(T)}return}}if(t.inline){c.textContent=e;return}const n=c.querySelector(".__code__");if(n)n.textContent=e;else{const r=document.createElement("pre");r.className="__code__",r.textContent=e,c.innerHTML="",c.appendChild(r)}};ee(y),H(X(t,"language"),y),H(X(t,"code"),y),l||H(b,y);const w=te("Code","-code",ct,Ae,t,u),C=$(()=>{const{common:{cubicBezierEaseInOut:c,fontFamilyMono:s},self:{textColor:e,fontSize:n,fontWeightStrong:r,lineNumberTextColor:R,"mono-3":T,"hue-1":S,"hue-2":L,"hue-3":x,"hue-4":_,"hue-5":N,"hue-5-2":z,"hue-6":M,"hue-6-2":pe}}=w.value,{internalFontSize:se}=t;return{"--n-font-size":se?`${se}px`:n,"--n-font-family":s,"--n-font-weight-strong":r,"--n-bezier":c,"--n-text-color":e,"--n-mono-3":T,"--n-hue-1":S,"--n-hue-2":L,"--n-hue-3":x,"--n-hue-4":_,"--n-hue-5":N,"--n-hue-5-2":z,"--n-hue-6":M,"--n-hue-6-2":pe,"--n-line-number-text-color":R}}),E=f?he("code",$(()=>`${t.internalFontSize||"a"}`),C,t):void 0;return{mergedClsPrefix:u,codeRef:h,mergedShowLineNumbers:v,lineNumbers:$(()=>{let c=1;const s=[];let e=!1;for(const n of t.code)n===`
`?(e=!0,s.push(c++)):e=!1;return e||s.push(c++),s.join(`
`)}),cssVars:f?void 0:C,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender}},render(){var t,o;const{mergedClsPrefix:l,wordWrap:u,mergedShowLineNumbers:f,onRender:h}=this;return h==null||h(),j("code",{class:[`${l}-code`,this.themeClass,u&&`${l}-code--word-wrap`,f&&`${l}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},f?j("pre",{class:`${l}-code__line-numbers`},this.lineNumbers):null,(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t))}}),vt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ht=le("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M160 368L32 256l128-112"},null,-1),mt=le("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 368l128-112l-128-112"},null,-1),_t=[ht,mt],pt=D({name:"CodeOutline",render:function(o,l){return p(),P("svg",vt,_t)}}),gt=D({__name:"card",props:{path:{},code:{},component:{}},setup(t){const o=k(!1),l=k(),u=k();H(()=>Pe.value.theme,i=>{var v;return(v=u.value)==null?void 0:v.myCanvas.setTheme(i)});const f=k(!1),h=k(),b=new ResizeObserver(()=>{var i;f.value=je((i=l.value)==null?void 0:i.$el)});return ee(()=>{h.value=Oe(l.value.$el),b.observe(l.value.$el)}),re(()=>{var i;(i=u.value)==null||i.myCanvas.destroy(),b==null||b.disconnect()}),(i,v)=>(p(),A(a(He),{ref_key:"cardRef",ref:l,hoverable:""},{"header-extra":m(()=>[g(a(U),null,{default:m(()=>[g(a(F),{trigger:"hover"},{trigger:m(()=>[g(a(W),{onClick:v[0]||(v[0]=y=>{var w;return(w=u.value)==null?void 0:w.myCanvas.returnToOrigin()}),text:""},{icon:m(()=>[g(a(K),{component:a(qe)},null,8,["component"])]),_:1})]),default:m(()=>[v[3]||(v[3]=q(" 复位视图 "))]),_:1,__:[3]}),g(a(F),{trigger:"hover"},{trigger:m(()=>[g(a(W),{onClick:h.value,text:""},{icon:m(()=>[g(a(K),{component:f.value?a(Ie):a(Le)},null,8,["component"])]),_:1},8,["onClick"])]),default:m(()=>[q(" "+de(f.value?"退出全屏":"全屏"),1)]),_:1}),g(a(F),{trigger:"hover"},{trigger:m(()=>[g(a(W),{tag:"a",href:"https://github.com/ADMINnhanh/nhanh-frontend-view/tree/main/src/views/canvas/_Canvas/demo/"+i.path,target:"_blank",text:""},{icon:m(()=>[g(a(K),{component:a(Be)},null,8,["component"])]),_:1},8,["href"])]),default:m(()=>[v[4]||(v[4]=q(" 在 GitHub 查看源码 "))]),_:1,__:[4]}),g(a(F),{trigger:"hover"},{trigger:m(()=>[g(a(W),{onClick:v[1]||(v[1]=y=>a(Se).success("复制成功").error("复制失败").run(a(Ve)(i.code))),text:""},{icon:m(()=>[g(a(K),{component:a(De)},null,8,["component"])]),_:1})]),default:m(()=>[v[5]||(v[5]=q(" 复制代码 "))]),_:1,__:[5]}),g(a(F),{trigger:"hover"},{trigger:m(()=>[g(a(W),{onClick:v[2]||(v[2]=y=>o.value=!o.value),text:""},{icon:m(()=>[g(a(K),{component:a(pt)},null,8,["component"])]),_:1})]),default:m(()=>[q(" "+de(o.value?"收起代码":"显示代码"),1)]),_:1})]),_:1})]),default:m(()=>[(p(),A(Ne(i.component),{ref_key:"componentRef",ref:u},null,512)),g(a(ze),{show:o.value},{default:m(()=>[g(a(oe),{"x-scrollable":"",style:{"max-height":"50vh","margin-top":"10px"}},{default:m(()=>[g(a(ft),{code:i.code,language:"javascript","show-line-numbers":""},null,8,["code"])]),_:1})]),_:1},8,["show"])]),_:1},512))}}),Z=me(gt,[["__scopeId","data-v-fb72e3a7"]]),bt={id:"/canvas/_Canvas",class:"my-canvas-tools"},xt={class:"list-box"},yt=D({__name:"index",setup(t){const o=location.hash.replace(/(#[^/]+)*$/,"#"),l=[["China%2Findex.vue","最佳实践 - 中国地图"]],u=[["text.vue","文字"],["point.vue","点"],["line.vue","线"],["arc.vue","圆弧"],["polygon.vue","面"],["custom.vue","自定义绘制"],["original.vue","仅需初始化 _Canvas"],["center.vue","中心点"],["shortcutKey.vue","快捷键"],["axis.vue","坐标轴"],["layer.vue","图层 & 层级"],["show.vue","显示条件"]];function f(c){const s=[],e=[];for(let n=0;n<c.length;n++)n%2===0?e.push(c[n]):s.push(c[n]);return[e,s]}const[h,b]=f(u),i=k({});(async function(){const c=Object.assign({"./demo/China/InfoWindow/Attraction.vue":()=>d(()=>import("./Attraction-C41E9W95.js"),[],import.meta.url).then(e=>e.default),"./demo/China/InfoWindow/Province.vue":()=>d(()=>import("./Province-BsAxOTfi.js"),[],import.meta.url).then(e=>e.default),"./demo/China/index.vue":()=>d(()=>import("./index-CdcBZSpR.js"),[],import.meta.url).then(e=>e.default),"./demo/arc.vue":()=>d(()=>import("./arc-D1cDhdD6.js"),[],import.meta.url).then(e=>e.default),"./demo/arcTo.vue":()=>d(()=>import("./arcTo-wi1NzIkv.js"),[],import.meta.url).then(e=>e.default),"./demo/axis.vue":()=>d(()=>import("./axis-c0fW05bC.js"),[],import.meta.url).then(e=>e.default),"./demo/bezierCurve.vue":()=>d(()=>import("./bezierCurve-Bv9v0zEd.js"),[],import.meta.url).then(e=>e.default),"./demo/center.vue":()=>d(()=>import("./center-CneSbZa5.js"),[],import.meta.url).then(e=>e.default),"./demo/custom.vue":()=>d(()=>import("./custom-vfrhWLrX.js"),[],import.meta.url).then(e=>e.default),"./demo/ellipse.vue":()=>d(()=>import("./ellipse-Bv9v0zEd.js"),[],import.meta.url).then(e=>e.default),"./demo/layer.vue":()=>d(()=>import("./layer-DpdkhONQ.js"),[],import.meta.url).then(e=>e.default),"./demo/line.vue":()=>d(()=>import("./line-BKIARmNS.js"),[],import.meta.url).then(e=>e.default),"./demo/original.vue":()=>d(()=>import("./original-D3N2f57Q.js"),[],import.meta.url).then(e=>e.default),"./demo/point.vue":()=>d(()=>import("./point-CREJ7nAD.js"),[],import.meta.url).then(e=>e.default),"./demo/polygon.vue":()=>d(()=>import("./polygon-BBl9_ZhT.js"),[],import.meta.url).then(e=>e.default),"./demo/shortcutKey.vue":()=>d(()=>import("./shortcutKey-D9NliJVG.js"),[],import.meta.url).then(e=>e.default),"./demo/show.vue":()=>d(()=>import("./show-ZbVnsvJA.js"),[],import.meta.url).then(e=>e.default),"./demo/text.vue":()=>d(()=>import("./text-DOk6ayET.js"),[],import.meta.url).then(e=>e.default)}),s=Object.assign({"./demo/China/InfoWindow/Attraction.vue":()=>d(()=>import("./Attraction-BNuZ0ttD.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),"./demo/China/InfoWindow/Province.vue":()=>d(()=>import("./Province-D0cCcXEQ.js"),__vite__mapDeps([5,1,2,3,6,7]),import.meta.url),"./demo/China/index.vue":()=>d(()=>import("./index-B_Ce4OpO.js"),__vite__mapDeps([8,1,2,9,10,5,3,6,7,0,4,11,12]),import.meta.url),"./demo/arc.vue":()=>d(()=>import("./arc-CgXio8GF.js"),__vite__mapDeps([13,1,2,9,10,14,11,15]),import.meta.url),"./demo/arcTo.vue":()=>d(()=>import("./arcTo-CYt3BHGs.js"),__vite__mapDeps([16,1,2,9,10,15]),import.meta.url),"./demo/axis.vue":()=>d(()=>import("./axis-CQmONhbP.js"),__vite__mapDeps([17,1,2,9,10,18,19,20,21,22,23,24,25,26]),import.meta.url),"./demo/bezierCurve.vue":()=>d(()=>import("./bezierCurve-CY-3Cuw5.js"),__vite__mapDeps([27,1,2,9,10,15]),import.meta.url),"./demo/center.vue":()=>d(()=>import("./center-Cql-Bewj.js"),__vite__mapDeps([28,1,2,9,10,20,19,21,22,23]),import.meta.url),"./demo/custom.vue":()=>d(()=>import("./custom-DER6UqsX.js"),__vite__mapDeps([29,1,2,9,10]),import.meta.url),"./demo/ellipse.vue":()=>d(()=>import("./ellipse-Be8SPB8-.js"),__vite__mapDeps([30,1,2,9,10,15]),import.meta.url),"./demo/layer.vue":()=>d(()=>import("./layer-BXQVQxAW.js"),__vite__mapDeps([31,1,2,9,10]),import.meta.url),"./demo/line.vue":()=>d(()=>import("./line-BYKsJW16.js"),__vite__mapDeps([32,1,2,9,10,14,11,15]),import.meta.url),"./demo/original.vue":()=>d(()=>import("./original-S0Ld9gu9.js"),__vite__mapDeps([33,1,2,9,10]),import.meta.url),"./demo/point.vue":()=>d(()=>import("./point-CLSWZ-Q9.js"),__vite__mapDeps([34,1,2,9,10,14,11,15]),import.meta.url),"./demo/polygon.vue":()=>d(()=>import("./polygon-CVjTjrbx.js"),__vite__mapDeps([35,1,2,9,10,14,11,15]),import.meta.url),"./demo/shortcutKey.vue":()=>d(()=>import("./shortcutKey-Bw1pwlxB.js"),__vite__mapDeps([36,1,2,9,10,24]),import.meta.url),"./demo/show.vue":()=>d(()=>import("./show-D2oTBK5e.js"),__vite__mapDeps([37,1,2,9,10,11,38]),import.meta.url),"./demo/text.vue":()=>d(()=>import("./text-NLvkVt--.js"),__vite__mapDeps([39,1,2,9,10,14,11,15]),import.meta.url)});for(const e in c){const n=e.replace("./demo/","").replace(/\//g,"%2F"),r=await c[e](),R=await s[e]();i.value[n]={component:Me(R.default),code:r}}})();const v=k({});let y=new IntersectionObserver((c,s)=>{c.forEach(e=>{if(e.isIntersecting){const n=e.target;v.value[n.id]=!0,s.unobserve(n),Object.keys(v.value).length==l.length+u.length&&(s.disconnect(),s=null,console.log("加载完成"))}})});requestAnimationFrame(()=>{document.querySelectorAll(".my-canvas-tools .n-skeleton").forEach(s=>y.observe(s))});const w=c=>v.value[c]&&i.value[c],C=k(window.innerWidth>=1280),E=()=>{C.value=window.innerWidth>=1280};return window.addEventListener("resize",E),Fe(()=>{window.removeEventListener("resize",E)}),(c,s)=>(p(),P("div",bt,[g(a(oe),null,{default:m(()=>[le("div",xt,[C.value?(p(),P(I,{key:0},[g(a(U),{class:"independent-space",vertical:""},{default:m(()=>[(p(),P(I,null,G(l,e=>(p(),P(I,{key:e[0]},[w(e[0])?(p(),A(Z,{key:0,id:e[0],path:e[0],title:e[1],code:i.value[e[0]].code,component:i.value[e[0]].component},null,8,["id","path","title","code","component"])):(p(),A(a(Y),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),64))]),_:1}),g(a(U),{vertical:""},{default:m(()=>[(p(!0),P(I,null,G(a(h),e=>(p(),P(I,{key:e[0]},[w(e[0])?(p(),A(Z,{key:0,id:e[0],path:e[0],title:e[1],code:i.value[e[0]].code,component:i.value[e[0]].component},null,8,["id","path","title","code","component"])):(p(),A(a(Y),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}),g(a(U),{vertical:""},{default:m(()=>[(p(!0),P(I,null,G(a(b),e=>(p(),P(I,{key:e[0]},[w(e[0])?(p(),A(Z,{key:0,id:e[0],path:e[0],title:e[1],code:i.value[e[0]].code,component:i.value[e[0]].component},null,8,["id","path","title","code","component"])):(p(),A(a(Y),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1})],64)):(p(),A(a(U),{key:1,style:{width:"100%"},vertical:""},{default:m(()=>[(p(!0),P(I,null,G(l.concat(u),e=>(p(),P(I,{key:e[0]},[w(e[0])?(p(),A(Z,{key:0,id:e[0],path:e[0],title:e[1],code:i.value[e[0]].code,component:i.value[e[0]].component},null,8,["id","path","title","code","component"])):(p(),A(a(Y),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}))])]),_:1}),a(Ke).isMobileStyle?We("",!0):(p(),A(a(oe),{key:0},{default:m(()=>[g(a(ut),{type:"block",bound:100,"ignore-gap":"","offset-target":".my-canvas-tools"},{default:m(()=>[(p(!0),P(I,null,G(l.concat(u),e=>(p(),A(a(rt),{key:e[0],href:a(o)+e[0],title:e[1]},null,8,["href","title"]))),128))]),_:1})]),_:1}))]))}}),Ct=me(yt,[["__scopeId","data-v-0ff497f3"]]);export{Ct as default};
