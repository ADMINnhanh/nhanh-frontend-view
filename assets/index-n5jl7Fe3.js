const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Attraction-BVuCCumG.js","./index-EfoIWUQ8.js","./index-CGN5xsX-.css","./a-Dox9C1LU.js","./Attraction-DdUmmkax.css","./Province-Co9XaqO6.js","./blockquote-huS6-WKe.js","./Province-BBdlX_sf.css","./index-CqZ5Zy__.js","./Switch-BKQpdUNm.js","./index-CpPu3icc.css","./arc-CwmqrIeh.js","./updateData-Bz3cSEIx.js","./ButtonGroup-DAicjwOe.js","./updateData-ClA6T_zJ.css","./arcTo-bQ1u0gaK.js","./axis-7YlmNYPm.js","./Checkbox-Da41GgBW.js","./InputNumber-8O1Knxq3.js","./RadioGroup-BC2hWICE.js","./use-locale-CDsbb8i-.js","./Input-attIFO8G.js","./Suffix-B02ZbL0b.js","./headers-DtVXYmSy.js","./Flex-BkwK7Em5.js","./axis-CZp3py_i.css","./bezierCurve-yNiLf3Hl.js","./center-XXfeYj6y.js","./custom-BvE0yiRu.js","./ellipse-1l2L2nCw.js","./layer-CP3Gw59_.js","./line-hOG_hHH8.js","./original-D_ISjzBf.js","./point-BslVekjb.js","./polygon-DqU9iLsz.js","./shortcutKey-Cll1OXHQ.js","./show-I4G1pvx4.js","./show-DjeBxkB6.css","./text-CLtXcCYc.js"])))=>i.map(i=>d[i]);
import{n as he,ae as xe,x as A,m as B,P as D,d as z,p as ae,a2 as ye,H as R,av as ne,a9 as se,h as L,aq as ke,E as _e,l as Ee,C as oe,af as Te,z as W,W as Re,I as we,b7 as Ce,a8 as $e,A as Ae,Q as fe,O as N,an as ee,q as re,b8 as Pe,D as pe,J as me,b9 as je,o as g,c as I,aL as ue,aN as Oe,ba as Ie,bb as Le,aR as j,w as h,b as y,u as i,aY as Z,bc as q,B as K,aZ as G,e as U,bd as Be,be as Se,t as ve,bf as Ve,bg as Ne,bh as De,bi as ze,bj as He,bk as Me,b5 as We,_ as ge,aT as Fe,ag as qe,b4 as Ke,bl as c,X as V,aS as Y,aO as Ge}from"./index-EfoIWUQ8.js";import{R as Ue,N as Q}from"./Refresh-cfODh5G_.js";import{S as ie}from"./Scrollbar-BJTCaxia.js";import{u as Ye,a as Ze}from"./use-collection-DipvZxQf.js";import{g as Je}from"./attribute-Cz32yFEB.js";function be(t){return typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t}function Qe(t,o){const r=he(xe,null);return A(()=>t.hljs||(r==null?void 0:r.mergedHljsRef.value))}const Xe=B("affix",[D("affixed",{position:"fixed"},[D("absolute-positioned",{position:"absolute"})])]);function et(t){return t instanceof HTMLElement?t.scrollTop:window.scrollY}function tt(t){return t instanceof HTMLElement?t.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const ce={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},ot=_e(ce),nt=z({name:"Affix",props:ce,setup(t){const{mergedClsPrefixRef:o}=ae(t);ye("-affix",Xe,o);let r=null;const u=R(!1),d=R(!1),m=R(null),v=R(null),l=A(()=>d.value||u.value),k=A(()=>{var n,s;return(s=(n=t.triggerTop)!==null&&n!==void 0?n:t.offsetTop)!==null&&s!==void 0?s:t.top}),T=A(()=>{var n,s;return(s=(n=t.top)!==null&&n!==void 0?n:t.triggerTop)!==null&&s!==void 0?s:t.offsetTop}),$=A(()=>{var n,s;return(s=(n=t.bottom)!==null&&n!==void 0?n:t.triggerBottom)!==null&&s!==void 0?s:t.offsetBottom}),O=A(()=>{var n,s;return(s=(n=t.triggerBottom)!==null&&n!==void 0?n:t.offsetBottom)!==null&&s!==void 0?s:t.bottom}),w=R(null),a=()=>{const{target:n,listenTo:s}=t;n?r=n():s?r=be(s):r=document,r&&(r.addEventListener("scroll",f),f())};function f(){ke(e)}function e(){const{value:n}=w;if(!r||!n)return;const s=et(r);if(l.value){v.value!==null&&s<v.value&&(u.value=!1,v.value=null),m.value!==null&&s>m.value&&(d.value=!1,m.value=null);return}const b=tt(r),_=n.getBoundingClientRect(),x=_.top-b.top,p=b.bottom-_.bottom,P=k.value,S=O.value;P!==void 0&&x<=P?(u.value=!0,v.value=s-(P-x)):(u.value=!1,v.value=null),S!==void 0&&p<=S?(d.value=!0,m.value=s+S-p):(d.value=!1,m.value=null)}return ne(()=>{a()}),se(()=>{r&&r.removeEventListener("scroll",f)}),{selfRef:w,affixed:l,mergedClsPrefix:o,mergedstyle:A(()=>{const n={};return u.value&&k.value!==void 0&&T.value!==void 0&&(n.top=`${T.value}px`),d.value&&O.value!==void 0&&$.value!==void 0&&(n.bottom=`${$.value}px`),n})}},render(){const{mergedClsPrefix:t}=this;return L("div",{ref:"selfRef",class:[`${t}-affix`,{[`${t}-affix--affixed`]:this.affixed,[`${t}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),te=Ee("n-anchor"),rt={title:String,href:String},lt=z({name:"AnchorLink",props:rt,slots:Object,setup(t,{slots:o}){const r=R(null),u=he(te),d=oe(t,"href"),m=Te(()=>d.value&&d.value===u.activeHref.value);Ye(te,"collectedLinkHrefs",d),Ze(te,"titleEls",()=>r.value),W(m,l=>{l&&r.value&&u.updateBarPosition(r.value)});function v(){t.href!==void 0&&u.setActiveHref(t.href)}return()=>{var l;const{value:k}=u.mergedClsPrefix;return L("div",{class:[`${k}-anchor-link`,m.value&&`${k}-anchor-link--active`]},L("a",{ref:r,class:[`${k}-anchor-link__title`],href:t.href,title:Je(t.title),onClick:v},{default:()=>Re(o.title,()=>[t.title])}),(l=o.default)===null||l===void 0?void 0:l.call(o))}}});function it(t,o){const{top:r,height:u}=t.getBoundingClientRect(),d=o instanceof HTMLElement?o.getBoundingClientRect().top:0;return{top:r-d,height:u}}const de={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},at=_e(de),st=z({name:"BaseAnchor",props:Object.assign(Object.assign({},de),{mergedClsPrefix:{type:String,required:!0}}),setup(t){const o=[],r=[],u=R(null),d=R(null),m=R(null),v=R(null);let l=!1;const k=A(()=>t.type==="block"),T=A(()=>!k.value&&t.showRail);function $(){const{value:b}=m,{value:_}=d;b&&(b.style.transition="none"),_&&(_.style.transition="none"),r&&r.forEach(x=>{x.style.transition="none"}),Ae(()=>{const{value:x}=m,{value:p}=d;x&&(x.offsetWidth,x.style.transition=""),p&&(p.offsetWidth,p.style.transition=""),r&&r.forEach(P=>{P.offsetWidth,P.style.transition=""})})}function O(b,_=!0){const{value:x}=m,{value:p}=d,{value:P}=v;if(!P||!x)return;_||(x.style.transition="none",p&&(p.style.transition="none"));const{offsetHeight:S,offsetWidth:F}=b,{top:M,left:C}=b.getBoundingClientRect(),{top:E,left:H}=P.getBoundingClientRect(),J=M-E,le=C-H;x.style.top=`${J}px`,x.style.height=`${S}px`,p&&(p.style.top=`${J}px`,p.style.height=`${S}px`,p.style.maxWidth=`${F+le}px`),x.offsetHeight,p&&p.offsetHeight,_||(x.style.transition="",p&&(p.style.transition=""))}let w,a=!1,f=!1;const e=()=>{if(f)a=!0;else{if(l)return;s(!0),f=!0,clearTimeout(w),w=setTimeout(()=>{f=!1,a&&(a=!1,e())},128)}};function n(b,_=!0){const x=/^#([^#]+)$/.exec(b);if(!x)return;const p=document.getElementById(x[1]);p&&(l=!0,u.value=b,p.scrollIntoView(),_||$(),a=!1,setTimeout(()=>{l=!1},0))}function s(b=!0){var _;const x=[],p=be((_=t.offsetTarget)!==null&&_!==void 0?_:document);o.forEach(C=>{const E=/#([^#]+)$/.exec(C);if(!E)return;const H=document.getElementById(E[1]);if(H&&p){const{top:J,height:le}=it(H,p);x.push({top:J,height:le,href:C})}}),x.sort((C,E)=>C.top>E.top?1:(C.top===E.top&&C.height<E.height,-1));const P=u.value,{bound:S,ignoreGap:F}=t,M=x.reduce((C,E)=>E.top+E.height<0?F?E:C:E.top<=S?C===null?E:E.top===C.top?E.href===P?E:C:E.top>C.top?E:C:C,null);b||$(),M?u.value=M.href:u.value=null}return we(te,{activeHref:u,mergedClsPrefix:oe(t,"mergedClsPrefix"),updateBarPosition:O,setActiveHref:n,collectedLinkHrefs:o,titleEls:r}),ne(()=>{document.addEventListener("scroll",e,!0),n(window.location.hash),s(!1)}),Ce(()=>{n(window.location.hash),s(!1)}),se(()=>{clearTimeout(w),document.removeEventListener("scroll",e,!0)}),W(u,b=>{if(b===null){const{value:_}=d;_&&!k.value&&(_.style.maxWidth="0")}}),{selfRef:v,barRef:m,slotRef:d,setActiveHref:n,activeHref:u,isBlockType:k,mergedShowRail:T}},render(){var t;const{mergedClsPrefix:o,mergedShowRail:r,isBlockType:u,$slots:d}=this,m=L("div",{class:[`${o}-anchor`,u&&`${o}-anchor--block`,r&&`${o}-anchor--show-rail`],ref:"selfRef"},r&&this.showBackground?L("div",{ref:"slotRef",class:`${o}-anchor-link-background`}):null,r?L("div",{class:`${o}-anchor-rail`},L("div",{ref:"barRef",class:[`${o}-anchor-rail__bar`,this.activeHref!==null&&`${o}-anchor-rail__bar--active`]})):null,(t=d.default)===null||t===void 0?void 0:t.call(d));return this.internalScrollable?L($e,null,{default:()=>m}):m}}),ut=B("anchor",`
 position: relative;
`,[fe("block",`
 padding-left: var(--n-rail-width);
 `,[B("anchor-link",[N("+, >",[B("anchor-link",`
 margin-top: .5em;
 `)])]),B("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),fe("show-rail",[N(">",[B("anchor-link","padding-left: 0;")])])]),D("block",[B("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[D("active",`
 background-color: var(--n-link-color);
 `)])]),B("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),B("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[ee("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[D("active",{backgroundColor:"var(--n-rail-color-active)"})])]),B("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[D("active",[N(">",[ee("title",`
 color: var(--n-link-text-color-active);
 `)])]),ee("title",`
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
 `)])])]),ct=Object.assign(Object.assign(Object.assign(Object.assign({},re.props),{affix:Boolean}),ce),de),dt=z({name:"Anchor",props:ct,setup(t,{slots:o}){const{mergedClsPrefixRef:r,inlineThemeDisabled:u}=ae(t),d=re("Anchor","-anchor",ut,Pe,t,r),m=R(null),v=A(()=>{const{self:{railColor:k,linkColor:T,railColorActive:$,linkTextColor:O,linkTextColorHover:w,linkTextColorPressed:a,linkTextColorActive:f,linkFontSize:e,railWidth:n,linkPadding:s,borderRadius:b},common:{cubicBezierEaseInOut:_}}=d.value;return{"--n-link-border-radius":b,"--n-link-color":T,"--n-link-font-size":e,"--n-link-text-color":O,"--n-link-text-color-hover":w,"--n-link-text-color-active":f,"--n-link-text-color-pressed":a,"--n-link-padding":s,"--n-bezier":_,"--n-rail-color":k,"--n-rail-color-active":$,"--n-rail-width":n}}),l=u?pe("anchor",void 0,v,t):void 0;return{scrollTo(k){var T;(T=m.value)===null||T===void 0||T.setActiveHref(k)},renderAnchor:()=>(l==null||l.onRender(),L(st,Object.assign({ref:m,style:u?void 0:v.value,class:l==null?void 0:l.themeClass.value},me(t,at),{mergedClsPrefix:r.value}),o))}},render(){return this.affix?L(nt,Object.assign({},me(this,ot)),{default:this.renderAnchor}):this.renderAnchor()}}),ft=N([B("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[D("show-line-numbers",`
 display: flex;
 `),ee("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),D("word-wrap",[N("pre",`
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
 }`]}]),mt=Object.assign(Object.assign({},re.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),vt=z({name:"Code",props:mt,setup(t,{slots:o}){const{internalNoHighlight:r}=t,{mergedClsPrefixRef:u,inlineThemeDisabled:d}=ae(),m=R(null),v=r?{value:void 0}:Qe(t),l=(a,f,e)=>{const{value:n}=v;return!n||!(a&&n.getLanguage(a))?null:n.highlight(e?f.trim():f,{language:a}).value},k=A(()=>t.inline||t.wordWrap?!1:t.showLineNumbers),T=()=>{if(o.default)return;const{value:a}=m;if(!a)return;const{language:f}=t,e=t.uri?window.decodeURIComponent(t.code):t.code;if(f){const s=l(f,e,t.trim);if(s!==null){if(t.inline)a.innerHTML=s;else{const b=a.querySelector(".__code__");b&&a.removeChild(b);const _=document.createElement("pre");_.className="__code__",_.innerHTML=s,a.appendChild(_)}return}}if(t.inline){a.textContent=e;return}const n=a.querySelector(".__code__");if(n)n.textContent=e;else{const s=document.createElement("pre");s.className="__code__",s.textContent=e,a.innerHTML="",a.appendChild(s)}};ne(T),W(oe(t,"language"),T),W(oe(t,"code"),T),r||W(v,T);const $=re("Code","-code",ft,je,t,u),O=A(()=>{const{common:{cubicBezierEaseInOut:a,fontFamilyMono:f},self:{textColor:e,fontSize:n,fontWeightStrong:s,lineNumberTextColor:b,"mono-3":_,"hue-1":x,"hue-2":p,"hue-3":P,"hue-4":S,"hue-5":F,"hue-5-2":M,"hue-6":C,"hue-6-2":E}}=$.value,{internalFontSize:H}=t;return{"--n-font-size":H?`${H}px`:n,"--n-font-family":f,"--n-font-weight-strong":s,"--n-bezier":a,"--n-text-color":e,"--n-mono-3":_,"--n-hue-1":x,"--n-hue-2":p,"--n-hue-3":P,"--n-hue-4":S,"--n-hue-5":F,"--n-hue-5-2":M,"--n-hue-6":C,"--n-hue-6-2":E,"--n-line-number-text-color":b}}),w=d?pe("code",A(()=>`${t.internalFontSize||"a"}`),O,t):void 0;return{mergedClsPrefix:u,codeRef:m,mergedShowLineNumbers:k,lineNumbers:A(()=>{let a=1;const f=[];let e=!1;for(const n of t.code)n===`
`?(e=!0,f.push(a++)):e=!1;return e||f.push(a++),f.join(`
`)}),cssVars:d?void 0:O,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){var t,o;const{mergedClsPrefix:r,wordWrap:u,mergedShowLineNumbers:d,onRender:m}=this;return m==null||m(),L("code",{class:[`${r}-code`,this.themeClass,u&&`${r}-code--word-wrap`,d&&`${r}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},d?L("pre",{class:`${r}-code__line-numbers`},this.lineNumbers):null,(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t))}}),ht={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},_t=ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M160 368L32 256l128-112"},null,-1),pt=ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 368l128-112l-128-112"},null,-1),gt=[_t,pt],bt=z({name:"CodeOutline",render:function(o,r){return g(),I("svg",ht,gt)}}),xt=z({__name:"card",props:{path:{},code:{},component:{}},setup(t){const o=R(!1),r=R(),u=R();W(()=>Oe.value.theme,v=>{var l;return(l=u.value)==null?void 0:l.myCanvas.setTheme(v)});const d=R(!1),m=R();return ne(()=>{m.value=Ie(r.value.$el),Le(v=>d.value=v,r.value.$el)}),se(()=>{var v;(v=u.value)==null||v.myCanvas.destroy()}),(v,l)=>(g(),j(i(We),{ref_key:"cardRef",ref:r,hoverable:""},{"header-extra":h(()=>[y(i(Z),null,{default:h(()=>[y(i(q),{trigger:"hover"},{trigger:h(()=>[y(i(K),{onClick:l[0]||(l[0]=k=>{var T;return(T=u.value)==null?void 0:T.myCanvas.returnToOrigin()}),text:""},{icon:h(()=>[y(i(G),{component:i(Ue)},null,8,["component"])]),_:1})]),default:h(()=>[l[3]||(l[3]=U(" 复位视图 "))]),_:1,__:[3]}),y(i(q),{trigger:"hover"},{trigger:h(()=>[y(i(K),{onClick:m.value,text:""},{icon:h(()=>[y(i(G),{component:d.value?i(Be):i(Se)},null,8,["component"])]),_:1},8,["onClick"])]),default:h(()=>[U(" "+ve(d.value?"退出全屏":"全屏"),1)]),_:1}),y(i(q),{trigger:"hover"},{trigger:h(()=>[y(i(K),{tag:"a",href:"https://github.com/ADMINnhanh/nhanh-frontend-view/tree/main/src/views/canvas/_Canvas/demo/"+v.path,target:"_blank",text:""},{icon:h(()=>[y(i(G),{component:i(Ve)},null,8,["component"])]),_:1},8,["href"])]),default:h(()=>[l[4]||(l[4]=U(" 在 GitHub 查看源码 "))]),_:1,__:[4]}),y(i(q),{trigger:"hover"},{trigger:h(()=>[y(i(K),{onClick:l[1]||(l[1]=k=>i(Ne).success("复制成功").error("复制失败").run(i(De)(v.code))),text:""},{icon:h(()=>[y(i(G),{component:i(ze)},null,8,["component"])]),_:1})]),default:h(()=>[l[5]||(l[5]=U(" 复制代码 "))]),_:1,__:[5]}),y(i(q),{trigger:"hover"},{trigger:h(()=>[y(i(K),{onClick:l[2]||(l[2]=k=>o.value=!o.value),text:""},{icon:h(()=>[y(i(G),{component:i(bt)},null,8,["component"])]),_:1})]),default:h(()=>[U(" "+ve(o.value?"收起代码":"显示代码"),1)]),_:1})]),_:1})]),default:h(()=>[(g(),j(He(v.component),{ref_key:"componentRef",ref:u},null,512)),y(i(Me),{show:o.value},{default:h(()=>[y(i(ie),{"x-scrollable":"",style:{"max-height":"50vh","margin-top":"10px"}},{default:h(()=>[y(i(vt),{code:v.code,language:"javascript","show-line-numbers":""},null,8,["code"])]),_:1})]),_:1},8,["show"])]),_:1},512))}}),X=ge(xt,[["__scopeId","data-v-2c1f7fe5"]]),yt={id:"/canvas/_Canvas",class:"my-canvas-tools"},kt={class:"list-box"},Et=z({__name:"index",setup(t){const o=location.hash.replace(/(#[^/]+)*$/,"#"),r=[],u=[["original.vue","仅需初始化 _Canvas"]];function d(a){const f=[],e=[];for(let n=0;n<a.length;n++)n%2===0?e.push(a[n]):f.push(a[n]);return[e,f]}const[m,v]=d(u),l=R({});(async function(){const a=Object.assign({"./demo/China/InfoWindow/Attraction.vue":()=>c(()=>import("./Attraction-C41E9W95.js"),[],import.meta.url).then(e=>e.default),"./demo/China/InfoWindow/Province.vue":()=>c(()=>import("./Province-BsAxOTfi.js"),[],import.meta.url).then(e=>e.default),"./demo/China/index.vue":()=>c(()=>import("./index-BaCZVbH_.js"),[],import.meta.url).then(e=>e.default),"./demo/arc.vue":()=>c(()=>import("./arc-DzmprLQX.js"),[],import.meta.url).then(e=>e.default),"./demo/arcTo.vue":()=>c(()=>import("./arcTo-DH8RJDLO.js"),[],import.meta.url).then(e=>e.default),"./demo/axis.vue":()=>c(()=>import("./axis-CLk6eZ-5.js"),[],import.meta.url).then(e=>e.default),"./demo/bezierCurve.vue":()=>c(()=>import("./bezierCurve-U6Ck1b4w.js"),[],import.meta.url).then(e=>e.default),"./demo/center.vue":()=>c(()=>import("./center-Cuzzs4BH.js"),[],import.meta.url).then(e=>e.default),"./demo/custom.vue":()=>c(()=>import("./custom-DX8mM-t-.js"),[],import.meta.url).then(e=>e.default),"./demo/ellipse.vue":()=>c(()=>import("./ellipse-U6Ck1b4w.js"),[],import.meta.url).then(e=>e.default),"./demo/layer.vue":()=>c(()=>import("./layer-Dz0sLPWI.js"),[],import.meta.url).then(e=>e.default),"./demo/line.vue":()=>c(()=>import("./line-_-Km9scS.js"),[],import.meta.url).then(e=>e.default),"./demo/original.vue":()=>c(()=>import("./original-N_PFTFd2.js"),[],import.meta.url).then(e=>e.default),"./demo/point.vue":()=>c(()=>import("./point-DNTvxYZc.js"),[],import.meta.url).then(e=>e.default),"./demo/polygon.vue":()=>c(()=>import("./polygon-Eidwmw6Q.js"),[],import.meta.url).then(e=>e.default),"./demo/shortcutKey.vue":()=>c(()=>import("./shortcutKey-mthZZQA8.js"),[],import.meta.url).then(e=>e.default),"./demo/show.vue":()=>c(()=>import("./show-BPuBuIIa.js"),[],import.meta.url).then(e=>e.default),"./demo/text.vue":()=>c(()=>import("./text-yVgvH-w3.js"),[],import.meta.url).then(e=>e.default)}),f=Object.assign({"./demo/China/InfoWindow/Attraction.vue":()=>c(()=>import("./Attraction-BVuCCumG.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),"./demo/China/InfoWindow/Province.vue":()=>c(()=>import("./Province-Co9XaqO6.js"),__vite__mapDeps([5,1,2,3,6,7]),import.meta.url),"./demo/China/index.vue":()=>c(()=>import("./index-CqZ5Zy__.js"),__vite__mapDeps([8,1,2,5,3,6,7,0,4,9,10]),import.meta.url),"./demo/arc.vue":()=>c(()=>import("./arc-CwmqrIeh.js"),__vite__mapDeps([11,1,2,12,9,13,14]),import.meta.url),"./demo/arcTo.vue":()=>c(()=>import("./arcTo-bQ1u0gaK.js"),__vite__mapDeps([15,1,2,14]),import.meta.url),"./demo/axis.vue":()=>c(()=>import("./axis-7YlmNYPm.js"),__vite__mapDeps([16,1,2,17,18,19,20,21,22,23,24,25]),import.meta.url),"./demo/bezierCurve.vue":()=>c(()=>import("./bezierCurve-yNiLf3Hl.js"),__vite__mapDeps([26,1,2,14]),import.meta.url),"./demo/center.vue":()=>c(()=>import("./center-XXfeYj6y.js"),__vite__mapDeps([27,1,2,19,18,20,21,22]),import.meta.url),"./demo/custom.vue":()=>c(()=>import("./custom-BvE0yiRu.js"),__vite__mapDeps([28,1,2]),import.meta.url),"./demo/ellipse.vue":()=>c(()=>import("./ellipse-1l2L2nCw.js"),__vite__mapDeps([29,1,2,14]),import.meta.url),"./demo/layer.vue":()=>c(()=>import("./layer-CP3Gw59_.js"),__vite__mapDeps([30,1,2]),import.meta.url),"./demo/line.vue":()=>c(()=>import("./line-hOG_hHH8.js"),__vite__mapDeps([31,1,2,12,9,13,14]),import.meta.url),"./demo/original.vue":()=>c(()=>import("./original-D_ISjzBf.js"),__vite__mapDeps([32,1,2]),import.meta.url),"./demo/point.vue":()=>c(()=>import("./point-BslVekjb.js"),__vite__mapDeps([33,1,2,12,9,13,14]),import.meta.url),"./demo/polygon.vue":()=>c(()=>import("./polygon-DqU9iLsz.js"),__vite__mapDeps([34,1,2,12,9,13,14]),import.meta.url),"./demo/shortcutKey.vue":()=>c(()=>import("./shortcutKey-Cll1OXHQ.js"),__vite__mapDeps([35,1,2,24]),import.meta.url),"./demo/show.vue":()=>c(()=>import("./show-I4G1pvx4.js"),__vite__mapDeps([36,1,2,9,37]),import.meta.url),"./demo/text.vue":()=>c(()=>import("./text-CLtXcCYc.js"),__vite__mapDeps([38,1,2,12,9,13,14]),import.meta.url)});for(const e in a){const n=e.replace("./demo/","").replace(/\//g,"%2F"),s=await a[e](),b=await f[e]();l.value[n]={component:Fe(b.default),code:s}}})();const k=R({});let T=new IntersectionObserver((a,f)=>{a.forEach(e=>{if(e.isIntersecting){const n=e.target;k.value[n.id]=!0,f.unobserve(n),Object.keys(k.value).length==r.length+u.length&&(f.disconnect(),f=null,console.log("加载完成"))}})});requestAnimationFrame(()=>{document.querySelectorAll(".my-canvas-tools .n-skeleton").forEach(f=>T.observe(f))});const $=a=>k.value[a]&&l.value[a],O=R(window.innerWidth>=1280),w=()=>{O.value=window.innerWidth>=1280};return window.addEventListener("resize",w),qe(()=>{window.removeEventListener("resize",w)}),(a,f)=>(g(),I("div",yt,[y(i(ie),null,{default:h(()=>[ue("div",kt,[O.value?(g(),I(V,{key:0},[y(i(Z),{class:"independent-space",vertical:""},{default:h(()=>[(g(),I(V,null,Y(r,e=>(g(),I(V,{key:e[0]},[$(e[0])?(g(),j(X,{key:0,id:e[0],path:e[0],title:e[1],code:l.value[e[0]].code,component:l.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),j(i(Q),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),64))]),_:1}),y(i(Z),{vertical:""},{default:h(()=>[(g(!0),I(V,null,Y(i(m),e=>(g(),I(V,{key:e[0]},[$(e[0])?(g(),j(X,{key:0,id:e[0],path:e[0],title:e[1],code:l.value[e[0]].code,component:l.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),j(i(Q),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}),y(i(Z),{vertical:""},{default:h(()=>[(g(!0),I(V,null,Y(i(v),e=>(g(),I(V,{key:e[0]},[$(e[0])?(g(),j(X,{key:0,id:e[0],path:e[0],title:e[1],code:l.value[e[0]].code,component:l.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),j(i(Q),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1})],64)):(g(),j(i(Z),{key:1,style:{width:"100%"},vertical:""},{default:h(()=>[(g(!0),I(V,null,Y(r.concat(u),e=>(g(),I(V,{key:e[0]},[$(e[0])?(g(),j(X,{key:0,id:e[0],path:e[0],title:e[1],code:l.value[e[0]].code,component:l.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),j(i(Q),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}))])]),_:1}),i(Ge).isMobileStyle?Ke("",!0):(g(),j(i(ie),{key:0},{default:h(()=>[y(i(dt),{type:"block",bound:100,"ignore-gap":"","offset-target":".my-canvas-tools"},{default:h(()=>[(g(!0),I(V,null,Y(r.concat(u),e=>(g(),j(i(lt),{key:e[0],href:i(o)+e[0],title:e[1]},null,8,["href","title"]))),128))]),_:1})]),_:1}))]))}}),At=ge(Et,[["__scopeId","data-v-52960b7d"]]);export{At as default};
