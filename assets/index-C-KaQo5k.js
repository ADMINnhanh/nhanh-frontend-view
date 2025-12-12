const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Attraction-C0Npr1Ot.js","./index-C3drNslq.js","./index-BmHOSbM7.css","./a-CI054nMX.js","./Attraction-DXBHlzUI.css","./Province-D-hnNOxe.js","./blockquote-wDXuzFf6.js","./Province-D1ajTJu2.css","./index-CLl2L3KM.js","./Switch-CpCKO3BD.js","./index-9H3to3Gp.css","./arc-DOaUicdL.js","./updateData-AwChWugA.js","./ButtonGroup-Bym5xpfW.js","./updateData-BFH6DfQG.css","./arcTo-BjUcK4md.js","./axis-COVLrDL8.js","./Checkbox-BuXt-KEs.js","./headers-Cg5W8S-X.js","./InputNumber-XYjQzb2e.js","./RadioGroup-nw1wvCDa.js","./Input-BKQEzpfU.js","./Suffix-BATODfaL.js","./use-locale-2k8Ty2jw.js","./Flex-Mj-7Z7HR.js","./axis-Dmtd-QOR.css","./bezierCurve-D_qxs_l8.js","./center-Cw2aUlYU.js","./custom-BTwJpArN.js","./ellipse-DhT9xZmM.js","./layer-DhgFIUmL.js","./line-CAvOz7QX.js","./original-BQXS1XZZ.js","./point-B9Ow5-OM.js","./polygon-CWNQ0bQw.js","./shortcutKey-D7KAfQNa.js","./show-D8KDKyqg.js","./show-DYaGD_5c.css","./text-9W-cn-4Q.js"])))=>i.map(i=>d[i]);
import{C as he,G as A,ar as xe,z as B,W as N,A as _e,d as z,h as L,D as ae,aa as ye,Q as R,aF as ne,ag as se,ax as ke,J as oe,am as Ee,I as W,Y as Te,y as Re,af as we,U as Ce,be as $e,N as Ae,X as fe,V as D,au as ee,R as ve,E as re,bf as je,K as pe,bg as Pe,c as I,o as g,aS as ue,bh as Oe,bi as Ie,aY as P,w as h,b as y,bj as Le,u as l,bk as Be,b2 as X,bl as q,e as K,B as G,b3 as U,t as me,bm as Se,bn as Ve,bo as De,bp as Ne,bq as ze,br as He,bc as Me,aZ as We,_ as ge,a_ as Fe,bs as qe,ao as Ke,bb as Ge,Z as V,aX as Y,aU as Ue,bt as d}from"./index-C3drNslq.js";import{S as ie}from"./Scrollbar-CpXSpcCD.js";import{R as Ye,N as J}from"./Refresh-CSKA2hza.js";import{u as Xe,a as Ze}from"./use-collection-CNgWuOgy.js";import{g as Je}from"./attribute-Cz32yFEB.js";function be(t){return typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t}function Qe(t,o){const r=he(xe,null);return A(()=>t.hljs||(r==null?void 0:r.mergedHljsRef.value))}const et=B("affix",[N("affixed",{position:"fixed"},[N("absolute-positioned",{position:"absolute"})])]);function tt(t){return t instanceof HTMLElement?t.scrollTop:window.scrollY}function ot(t){return t instanceof HTMLElement?t.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const ce={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},nt=_e(ce),rt=z({name:"Affix",props:ce,setup(t){const{mergedClsPrefixRef:o}=ae(t);ye("-affix",et,o);let r=null;const s=R(!1),f=R(!1),m=R(null),k=R(null),u=A(()=>f.value||s.value),c=A(()=>{var n,a;return(a=(n=t.triggerTop)!==null&&n!==void 0?n:t.offsetTop)!==null&&a!==void 0?a:t.top}),T=A(()=>{var n,a;return(a=(n=t.top)!==null&&n!==void 0?n:t.triggerTop)!==null&&a!==void 0?a:t.offsetTop}),$=A(()=>{var n,a;return(a=(n=t.bottom)!==null&&n!==void 0?n:t.triggerBottom)!==null&&a!==void 0?a:t.offsetBottom}),O=A(()=>{var n,a;return(a=(n=t.triggerBottom)!==null&&n!==void 0?n:t.offsetBottom)!==null&&a!==void 0?a:t.bottom}),w=R(null),i=()=>{const{target:n,listenTo:a}=t;n?r=n():a?r=be(a):r=document,r&&(r.addEventListener("scroll",v),v())};function v(){ke(e)}function e(){const{value:n}=w;if(!r||!n)return;const a=tt(r);if(u.value){k.value!==null&&a<k.value&&(s.value=!1,k.value=null),m.value!==null&&a>m.value&&(f.value=!1,m.value=null);return}const b=ot(r),_=n.getBoundingClientRect(),x=_.top-b.top,p=b.bottom-_.bottom,j=c.value,S=O.value;j!==void 0&&x<=j?(s.value=!0,k.value=a-(j-x)):(s.value=!1,k.value=null),S!==void 0&&p<=S?(f.value=!0,m.value=a+S-p):(f.value=!1,m.value=null)}return ne(()=>{i()}),se(()=>{r&&r.removeEventListener("scroll",v)}),{selfRef:w,affixed:u,mergedClsPrefix:o,mergedstyle:A(()=>{const n={};return s.value&&c.value!==void 0&&T.value!==void 0&&(n.top=`${T.value}px`),f.value&&O.value!==void 0&&$.value!==void 0&&(n.bottom=`${$.value}px`),n})}},render(){const{mergedClsPrefix:t}=this;return L("div",{ref:"selfRef",class:[`${t}-affix`,{[`${t}-affix--affixed`]:this.affixed,[`${t}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),te=Re("n-anchor"),lt={title:String,href:String},it=z({name:"AnchorLink",props:lt,slots:Object,setup(t,{slots:o}){const r=R(null),s=he(te),f=oe(t,"href"),m=Ee(()=>f.value&&f.value===s.activeHref.value);Xe(te,"collectedLinkHrefs",f),Ze(te,"titleEls",()=>r.value),W(m,u=>{u&&r.value&&s.updateBarPosition(r.value)});function k(){t.href!==void 0&&s.setActiveHref(t.href)}return()=>{var u;const{value:c}=s.mergedClsPrefix;return L("div",{class:[`${c}-anchor-link`,m.value&&`${c}-anchor-link--active`]},L("a",{ref:r,class:[`${c}-anchor-link__title`],href:t.href,title:Je(t.title),onClick:k},{default:()=>Te(o.title,()=>[t.title])}),(u=o.default)===null||u===void 0?void 0:u.call(o))}}});function at(t,o){const{top:r,height:s}=t.getBoundingClientRect(),f=o instanceof HTMLElement?o.getBoundingClientRect().top:0;return{top:r-f,height:s}}const de={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},st=_e(de),ut=z({name:"BaseAnchor",props:Object.assign(Object.assign({},de),{mergedClsPrefix:{type:String,required:!0}}),setup(t){const o=[],r=[],s=R(null),f=R(null),m=R(null),k=R(null);let u=!1;const c=A(()=>t.type==="block"),T=A(()=>!c.value&&t.showRail);function $(){const{value:b}=m,{value:_}=f;b&&(b.style.transition="none"),_&&(_.style.transition="none"),r&&r.forEach(x=>{x.style.transition="none"}),Ae(()=>{const{value:x}=m,{value:p}=f;x&&(x.offsetWidth,x.style.transition=""),p&&(p.offsetWidth,p.style.transition=""),r&&r.forEach(j=>{j.offsetWidth,j.style.transition=""})})}function O(b,_=!0){const{value:x}=m,{value:p}=f,{value:j}=k;if(!j||!x)return;_||(x.style.transition="none",p&&(p.style.transition="none"));const{offsetHeight:S,offsetWidth:F}=b,{top:M,left:C}=b.getBoundingClientRect(),{top:E,left:H}=j.getBoundingClientRect(),Z=M-E,le=C-H;x.style.top=`${Z}px`,x.style.height=`${S}px`,p&&(p.style.top=`${Z}px`,p.style.height=`${S}px`,p.style.maxWidth=`${F+le}px`),x.offsetHeight,p&&p.offsetHeight,_||(x.style.transition="",p&&(p.style.transition=""))}let w,i=!1,v=!1;const e=()=>{if(v)i=!0;else{if(u)return;a(!0),v=!0,clearTimeout(w),w=setTimeout(()=>{v=!1,i&&(i=!1,e())},128)}};function n(b,_=!0){const x=/^#([^#]+)$/.exec(b);if(!x)return;const p=document.getElementById(x[1]);p&&(u=!0,s.value=b,p.scrollIntoView(),_||$(),i=!1,setTimeout(()=>{u=!1},0))}function a(b=!0){var _;const x=[],p=be((_=t.offsetTarget)!==null&&_!==void 0?_:document);o.forEach(C=>{const E=/#([^#]+)$/.exec(C);if(!E)return;const H=document.getElementById(E[1]);if(H&&p){const{top:Z,height:le}=at(H,p);x.push({top:Z,height:le,href:C})}}),x.sort((C,E)=>C.top>E.top?1:(C.top===E.top&&C.height<E.height,-1));const j=s.value,{bound:S,ignoreGap:F}=t,M=x.reduce((C,E)=>E.top+E.height<0?F?E:C:E.top<=S?C===null?E:E.top===C.top?E.href===j?E:C:E.top>C.top?E:C:C,null);b||$(),M?s.value=M.href:s.value=null}return Ce(te,{activeHref:s,mergedClsPrefix:oe(t,"mergedClsPrefix"),updateBarPosition:O,setActiveHref:n,collectedLinkHrefs:o,titleEls:r}),ne(()=>{document.addEventListener("scroll",e,!0),n(window.location.hash),a(!1)}),$e(()=>{n(window.location.hash),a(!1)}),se(()=>{clearTimeout(w),document.removeEventListener("scroll",e,!0)}),W(s,b=>{if(b===null){const{value:_}=f;_&&!c.value&&(_.style.maxWidth="0")}}),{selfRef:k,barRef:m,slotRef:f,setActiveHref:n,activeHref:s,isBlockType:c,mergedShowRail:T}},render(){var t;const{mergedClsPrefix:o,mergedShowRail:r,isBlockType:s,$slots:f}=this,m=L("div",{class:[`${o}-anchor`,s&&`${o}-anchor--block`,r&&`${o}-anchor--show-rail`],ref:"selfRef"},r&&this.showBackground?L("div",{ref:"slotRef",class:`${o}-anchor-link-background`}):null,r?L("div",{class:`${o}-anchor-rail`},L("div",{ref:"barRef",class:[`${o}-anchor-rail__bar`,this.activeHref!==null&&`${o}-anchor-rail__bar--active`]})):null,(t=f.default)===null||t===void 0?void 0:t.call(f));return this.internalScrollable?L(we,null,{default:()=>m}):m}}),ct=B("anchor",`
 position: relative;
`,[fe("block",`
 padding-left: var(--n-rail-width);
 `,[B("anchor-link",[D("+, >",[B("anchor-link",`
 margin-top: .5em;
 `)])]),B("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),fe("show-rail",[D(">",[B("anchor-link","padding-left: 0;")])])]),N("block",[B("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[N("active",`
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
 `,[N("active",{backgroundColor:"var(--n-rail-color-active)"})])]),B("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[N("active",[D(">",[ee("title",`
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
 `,[D("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),D("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),dt=Object.assign(Object.assign(Object.assign(Object.assign({},re.props),{affix:Boolean}),ce),de),ft=z({name:"Anchor",props:dt,setup(t,{slots:o}){const{mergedClsPrefixRef:r,inlineThemeDisabled:s}=ae(t),f=re("Anchor","-anchor",ct,je,t,r),m=R(null),k=A(()=>{const{self:{railColor:c,linkColor:T,railColorActive:$,linkTextColor:O,linkTextColorHover:w,linkTextColorPressed:i,linkTextColorActive:v,linkFontSize:e,railWidth:n,linkPadding:a,borderRadius:b},common:{cubicBezierEaseInOut:_}}=f.value;return{"--n-link-border-radius":b,"--n-link-color":T,"--n-link-font-size":e,"--n-link-text-color":O,"--n-link-text-color-hover":w,"--n-link-text-color-active":v,"--n-link-text-color-pressed":i,"--n-link-padding":a,"--n-bezier":_,"--n-rail-color":c,"--n-rail-color-active":$,"--n-rail-width":n}}),u=s?pe("anchor",void 0,k,t):void 0;return{scrollTo(c){var T;(T=m.value)===null||T===void 0||T.setActiveHref(c)},renderAnchor:()=>(u==null||u.onRender(),L(ut,Object.assign({ref:m,style:s?void 0:k.value,class:u==null?void 0:u.themeClass.value},ve(t,st),{mergedClsPrefix:r.value}),o))}},render(){return this.affix?L(rt,Object.assign({},ve(this,nt)),{default:this.renderAnchor}):this.renderAnchor()}}),vt=D([B("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[N("show-line-numbers",`
 display: flex;
 `),ee("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),N("word-wrap",[D("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),D("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),D("[class^=hljs]",`
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
 }`]}]),mt=Object.assign(Object.assign({},re.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),ht=z({name:"Code",props:mt,setup(t,{slots:o}){const{internalNoHighlight:r}=t,{mergedClsPrefixRef:s,inlineThemeDisabled:f}=ae(),m=R(null),k=r?{value:void 0}:Qe(t),u=(i,v,e)=>{const{value:n}=k;return!n||!(i&&n.getLanguage(i))?null:n.highlight(e?v.trim():v,{language:i}).value},c=A(()=>t.inline||t.wordWrap?!1:t.showLineNumbers),T=()=>{if(o.default)return;const{value:i}=m;if(!i)return;const{language:v}=t,e=t.uri?window.decodeURIComponent(t.code):t.code;if(v){const a=u(v,e,t.trim);if(a!==null){if(t.inline)i.innerHTML=a;else{const b=i.querySelector(".__code__");b&&i.removeChild(b);const _=document.createElement("pre");_.className="__code__",_.innerHTML=a,i.appendChild(_)}return}}if(t.inline){i.textContent=e;return}const n=i.querySelector(".__code__");if(n)n.textContent=e;else{const a=document.createElement("pre");a.className="__code__",a.textContent=e,i.innerHTML="",i.appendChild(a)}};ne(T),W(oe(t,"language"),T),W(oe(t,"code"),T),r||W(k,T);const $=re("Code","-code",vt,Pe,t,s),O=A(()=>{const{common:{cubicBezierEaseInOut:i,fontFamilyMono:v},self:{textColor:e,fontSize:n,fontWeightStrong:a,lineNumberTextColor:b,"mono-3":_,"hue-1":x,"hue-2":p,"hue-3":j,"hue-4":S,"hue-5":F,"hue-5-2":M,"hue-6":C,"hue-6-2":E}}=$.value,{internalFontSize:H}=t;return{"--n-font-size":H?`${H}px`:n,"--n-font-family":v,"--n-font-weight-strong":a,"--n-bezier":i,"--n-text-color":e,"--n-mono-3":_,"--n-hue-1":x,"--n-hue-2":p,"--n-hue-3":j,"--n-hue-4":S,"--n-hue-5":F,"--n-hue-5-2":M,"--n-hue-6":C,"--n-hue-6-2":E,"--n-line-number-text-color":b}}),w=f?pe("code",A(()=>`${t.internalFontSize||"a"}`),O,t):void 0;return{mergedClsPrefix:s,codeRef:m,mergedShowLineNumbers:c,lineNumbers:A(()=>{let i=1;const v=[];let e=!1;for(const n of t.code)n===`
`?(e=!0,v.push(i++)):e=!1;return e||v.push(i++),v.join(`
`)}),cssVars:f?void 0:O,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){var t,o;const{mergedClsPrefix:r,wordWrap:s,mergedShowLineNumbers:f,onRender:m}=this;return m==null||m(),L("code",{class:[`${r}-code`,this.themeClass,s&&`${r}-code--word-wrap`,f&&`${r}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},f?L("pre",{class:`${r}-code__line-numbers`},this.lineNumbers):null,(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t))}}),_t={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},pt=ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M160 368L32 256l128-112"},null,-1),gt=ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 368l128-112l-128-112"},null,-1),bt=[pt,gt],xt=z({name:"CodeOutline",render:function(o,r){return g(),I("svg",_t,bt)}}),yt=z({__name:"card",props:{path:{},code:{},component:{}},setup(t){const o=R(!1),r=R(),s=R();W(()=>We.value.theme,u=>{var c;return(c=s.value)==null?void 0:c.myCanvas.setTheme(u)});const f=R(!1),m=R();let k;return ne(()=>{m.value=Oe(r.value.$el),k=Ie(u=>f.value=u,r.value.$el)}),se(()=>{var u;k==null||k(),(u=s.value)==null||u.myCanvas.destroy()}),(u,c)=>(g(),P(l(Me),{ref_key:"cardRef",ref:r,hoverable:""},{"header-extra":h(()=>[y(l(X),null,{default:h(()=>[y(l(q),{trigger:"hover"},{trigger:h(()=>[y(l(G),{onClick:c[0]||(c[0]=T=>{var $;return($=s.value)==null?void 0:$.myCanvas.returnToOrigin()}),text:""},{icon:h(()=>[y(l(U),{component:l(Ye)},null,8,["component"])]),_:1})]),default:h(()=>[c[3]||(c[3]=K(" 复位视图 ",-1))]),_:1}),y(l(q),{trigger:"hover"},{trigger:h(()=>[y(l(G),{onClick:m.value,text:""},{icon:h(()=>[y(l(U),{component:f.value?l(Se):l(Ve)},null,8,["component"])]),_:1},8,["onClick"])]),default:h(()=>[K(" "+me(f.value?"退出全屏":"全屏"),1)]),_:1}),y(l(q),{trigger:"hover"},{trigger:h(()=>[y(l(G),{tag:"a",href:"https://github.com/ADMINnhanh/nhanh-frontend-view/tree/main/src/views/canvas/_Canvas/demo/"+t.path,target:"_blank",text:""},{icon:h(()=>[y(l(U),{component:l(De)},null,8,["component"])]),_:1},8,["href"])]),default:h(()=>[c[4]||(c[4]=K(" 在 GitHub 查看源码 ",-1))]),_:1}),y(l(q),{trigger:"hover"},{trigger:h(()=>[y(l(G),{onClick:c[1]||(c[1]=T=>l(Ne).success("复制成功").error("复制失败").run(l(ze)(t.code))),text:""},{icon:h(()=>[y(l(U),{component:l(He)},null,8,["component"])]),_:1})]),default:h(()=>[c[5]||(c[5]=K(" 复制代码 ",-1))]),_:1}),y(l(q),{trigger:"hover"},{trigger:h(()=>[y(l(G),{onClick:c[2]||(c[2]=T=>o.value=!o.value),text:""},{icon:h(()=>[y(l(U),{component:l(xt)},null,8,["component"])]),_:1})]),default:h(()=>[K(" "+me(o.value?"收起代码":"显示代码"),1)]),_:1})]),_:1})]),default:h(()=>[(g(),P(Le(t.component),{ref_key:"componentRef",ref:s},null,512)),y(l(Be),{show:o.value},{default:h(()=>[y(l(ie),{"x-scrollable":"",style:{"max-height":"50vh","margin-top":"10px"}},{default:h(()=>[y(l(ht),{code:t.code,language:"javascript","show-line-numbers":""},null,8,["code"])]),_:1})]),_:1},8,["show"])]),_:1},512))}}),Q=ge(yt,[["__scopeId","data-v-664046be"]]),kt={class:"my-canvas-tools"},Et={class:"list-box"},Tt=z({__name:"index",setup(t){const o=location.hash.replace(/(#[^/]+)*$/,"#"),r=[],s=[["text.vue","文字"],["point.vue","点"],["line.vue","线"],["arc.vue","圆弧"],["polygon.vue","面"],["custom.vue","自定义绘制"],["original.vue","仅需初始化 _Canvas"],["center.vue","中心点"],["shortcutKey.vue","快捷键"],["axis.vue","坐标轴"],["layer.vue","图层 & 层级"],["show.vue","显示条件"]];function f(i){const v=[],e=[];for(let n=0;n<i.length;n++)n%2===0?e.push(i[n]):v.push(i[n]);return[e,v]}const[m,k]=f(s),u=R({});(async function(){const i=Object.assign({"./demo/China/InfoWindow/Attraction.vue":()=>d(()=>import("./Attraction-C41E9W95.js"),[],import.meta.url).then(e=>e.default),"./demo/China/InfoWindow/Province.vue":()=>d(()=>import("./Province-BsAxOTfi.js"),[],import.meta.url).then(e=>e.default),"./demo/China/index.vue":()=>d(()=>import("./index-BaCZVbH_.js"),[],import.meta.url).then(e=>e.default),"./demo/arc.vue":()=>d(()=>import("./arc-DzmprLQX.js"),[],import.meta.url).then(e=>e.default),"./demo/arcTo.vue":()=>d(()=>import("./arcTo-DH8RJDLO.js"),[],import.meta.url).then(e=>e.default),"./demo/axis.vue":()=>d(()=>import("./axis-CLk6eZ-5.js"),[],import.meta.url).then(e=>e.default),"./demo/bezierCurve.vue":()=>d(()=>import("./bezierCurve-U6Ck1b4w.js"),[],import.meta.url).then(e=>e.default),"./demo/center.vue":()=>d(()=>import("./center-Cuzzs4BH.js"),[],import.meta.url).then(e=>e.default),"./demo/custom.vue":()=>d(()=>import("./custom-DX8mM-t-.js"),[],import.meta.url).then(e=>e.default),"./demo/ellipse.vue":()=>d(()=>import("./ellipse-U6Ck1b4w.js"),[],import.meta.url).then(e=>e.default),"./demo/layer.vue":()=>d(()=>import("./layer-Dz0sLPWI.js"),[],import.meta.url).then(e=>e.default),"./demo/line.vue":()=>d(()=>import("./line-_-Km9scS.js"),[],import.meta.url).then(e=>e.default),"./demo/original.vue":()=>d(()=>import("./original-N_PFTFd2.js"),[],import.meta.url).then(e=>e.default),"./demo/point.vue":()=>d(()=>import("./point-DNTvxYZc.js"),[],import.meta.url).then(e=>e.default),"./demo/polygon.vue":()=>d(()=>import("./polygon-Eidwmw6Q.js"),[],import.meta.url).then(e=>e.default),"./demo/shortcutKey.vue":()=>d(()=>import("./shortcutKey-mthZZQA8.js"),[],import.meta.url).then(e=>e.default),"./demo/show.vue":()=>d(()=>import("./show-BPuBuIIa.js"),[],import.meta.url).then(e=>e.default),"./demo/text.vue":()=>d(()=>import("./text-yVgvH-w3.js"),[],import.meta.url).then(e=>e.default)}),v=Object.assign({"./demo/China/InfoWindow/Attraction.vue":()=>d(()=>import("./Attraction-C0Npr1Ot.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),"./demo/China/InfoWindow/Province.vue":()=>d(()=>import("./Province-D-hnNOxe.js"),__vite__mapDeps([5,1,2,3,6,7]),import.meta.url),"./demo/China/index.vue":()=>d(()=>import("./index-CLl2L3KM.js"),__vite__mapDeps([8,1,2,5,3,6,7,0,4,9,10]),import.meta.url),"./demo/arc.vue":()=>d(()=>import("./arc-DOaUicdL.js"),__vite__mapDeps([11,1,2,12,9,13,14]),import.meta.url),"./demo/arcTo.vue":()=>d(()=>import("./arcTo-BjUcK4md.js"),__vite__mapDeps([15,1,2,14]),import.meta.url),"./demo/axis.vue":()=>d(()=>import("./axis-COVLrDL8.js"),__vite__mapDeps([16,1,2,17,18,19,20,21,22,23,24,25]),import.meta.url),"./demo/bezierCurve.vue":()=>d(()=>import("./bezierCurve-D_qxs_l8.js"),__vite__mapDeps([26,1,2,14]),import.meta.url),"./demo/center.vue":()=>d(()=>import("./center-Cw2aUlYU.js"),__vite__mapDeps([27,1,2,20,19,21,22,23]),import.meta.url),"./demo/custom.vue":()=>d(()=>import("./custom-BTwJpArN.js"),__vite__mapDeps([28,1,2]),import.meta.url),"./demo/ellipse.vue":()=>d(()=>import("./ellipse-DhT9xZmM.js"),__vite__mapDeps([29,1,2,14]),import.meta.url),"./demo/layer.vue":()=>d(()=>import("./layer-DhgFIUmL.js"),__vite__mapDeps([30,1,2]),import.meta.url),"./demo/line.vue":()=>d(()=>import("./line-CAvOz7QX.js"),__vite__mapDeps([31,1,2,12,9,13,14]),import.meta.url),"./demo/original.vue":()=>d(()=>import("./original-BQXS1XZZ.js"),__vite__mapDeps([32,1,2]),import.meta.url),"./demo/point.vue":()=>d(()=>import("./point-B9Ow5-OM.js"),__vite__mapDeps([33,1,2,12,9,13,14]),import.meta.url),"./demo/polygon.vue":()=>d(()=>import("./polygon-CWNQ0bQw.js"),__vite__mapDeps([34,1,2,12,9,13,14]),import.meta.url),"./demo/shortcutKey.vue":()=>d(()=>import("./shortcutKey-D7KAfQNa.js"),__vite__mapDeps([35,1,2,24]),import.meta.url),"./demo/show.vue":()=>d(()=>import("./show-D8KDKyqg.js"),__vite__mapDeps([36,1,2,9,37]),import.meta.url),"./demo/text.vue":()=>d(()=>import("./text-9W-cn-4Q.js"),__vite__mapDeps([38,1,2,12,9,13,14]),import.meta.url)});for(const e in i){const n=e.replace("./demo/","").replace(/\//g,"%2F"),a=await i[e](),b=await v[e]();u.value[n]={component:Fe(b.default),code:a}}})();const c=R({});let T=new IntersectionObserver((i,v)=>{i.forEach(e=>{if(e.isIntersecting){const n=e.target;c.value[n.id]=!0,v.unobserve(n),Object.keys(c.value).length==r.length+s.length&&(v.disconnect(),v=null)}})});requestAnimationFrame(()=>{document.querySelectorAll(".my-canvas-tools .n-skeleton").forEach(v=>T.observe(v))});const $=i=>c.value[i]&&u.value[i],O=R(window.innerWidth>=1280),w=()=>{document.querySelector(".my-canvas-tools")&&(O.value=window.innerWidth>=1280)};return window.addEventListener("resize",w),qe(()=>{w()}),Ke(()=>{window.removeEventListener("resize",w)}),(i,v)=>(g(),I("div",kt,[y(l(ie),null,{default:h(()=>[ue("div",Et,[O.value?(g(),I(V,{key:0},[y(l(X),{class:"independent-space",vertical:""},{default:h(()=>[(g(),I(V,null,Y(r,e=>(g(),I(V,{key:e[0]},[$(e[0])?(g(),P(Q,{key:0,id:e[0],path:e[0],title:e[1],code:u.value[e[0]].code,component:u.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),P(l(J),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),64))]),_:1}),y(l(X),{vertical:""},{default:h(()=>[(g(!0),I(V,null,Y(l(m),e=>(g(),I(V,{key:e[0]},[$(e[0])?(g(),P(Q,{key:0,id:e[0],path:e[0],title:e[1],code:u.value[e[0]].code,component:u.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),P(l(J),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}),y(l(X),{vertical:""},{default:h(()=>[(g(!0),I(V,null,Y(l(k),e=>(g(),I(V,{key:e[0]},[$(e[0])?(g(),P(Q,{key:0,id:e[0],path:e[0],title:e[1],code:u.value[e[0]].code,component:u.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),P(l(J),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1})],64)):(g(),P(l(X),{key:1,style:{width:"100%"},vertical:""},{default:h(()=>[(g(!0),I(V,null,Y(r.concat(s),e=>(g(),I(V,{key:e[0]},[$(e[0])?(g(),P(Q,{key:0,id:e[0],path:e[0],title:e[1],code:u.value[e[0]].code,component:u.value[e[0]].component},null,8,["id","path","title","code","component"])):(g(),P(l(J),{key:1,id:e[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}))])]),_:1}),l(Ue).isMobileStyle?Ge("",!0):(g(),P(l(ie),{key:0},{default:h(()=>[y(l(ft),{type:"block",bound:100,"ignore-gap":"","offset-target":".my-canvas-tools"},{default:h(()=>[(g(!0),I(V,null,Y(r.concat(s),e=>(g(),P(l(it),{key:e[0],href:l(o)+e[0],title:e[1]},null,8,["href","title"]))),128))]),_:1})]),_:1}))]))}}),jt=ge(Tt,[["__scopeId","data-v-98ba8a57"]]);export{jt as default};
