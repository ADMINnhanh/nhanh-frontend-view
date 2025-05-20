const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-sJV9mlv7.js","./index-DkBP3Coy.js","./index-06dLpedM.css","./index-DsYI8wSi.js","./index-DWf4t1z4.css","./index-D8uc4L3U.css","./axis-CrroaquH.js","./headers-BtQdtwWs.js","./InputNumber-DBHVjWk1.js","./use-locale-L_HZf68T.js","./Input-CxR6dhJ6.js","./Suffix--f9PtGLx.js","./ArrowUp-DosHeqAw.js","./Flex-BcN8w7wF.js","./RadioGroup-CYG_Rn2k.js","./RadioButton-CT7GUw7Y.js","./axis-BbuAE8s7.css","./center-djEVyYd3.js","./custom-Cxbct4o3.js","./layer-CtSXT-fv.js","./line-CgCZiUUy.js","./Switch-Gv9qMThV.js","./original-C-cIhEze.js","./point-AssDoHmV.js","./polygon-oZ9-2tEd.js","./shortcutKey-Csk8vXug.js","./show-ZXaJupSx.js","./show-DdF5Z1wE.css","./text-tMIOE2II.js"])))=>i.map(i=>d[i]);
import{q as fe,b6 as be,z as $,p as P,R as N,d as V,v as ne,a2 as xe,J as R,aI as X,a7 as he,k as j,am as ye,G as ve,S as se,Q as L,ap as U,n as ke,E as Q,ag as we,C as D,b7 as Re,K as Ce,b8 as Te,a6 as Ee,D as $e,x as Z,b9 as je,F as me,L as ue,ba as Pe,o as w,c as A,aM as re,bb as Ae,aN as Oe,aR as O,w as p,a as x,u as i,aX as Y,bc as F,B as W,aY as K,e as q,bd as Be,be as Le,t as ce,bf as Se,bg as Ie,bh as Ne,bi as Ve,bj as ze,bk as He,b4 as De,_ as pe,aT as Me,ah as Fe,b3 as We,bl as Ke,bm as b,Z as I,aS as G,aV as de}from"./index-DkBP3Coy.js";import{R as qe,N as ee}from"./Refresh-DciI8ZLM.js";import{S as oe}from"./Scrollbar-BPi9QS0G.js";import{u as Ge,a as Ue}from"./use-collection-HgFb0hnq.js";import{g as Ye}from"./attribute-Cz32yFEB.js";function ge(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function Je(e,o){const l=fe(be,null);return $(()=>e.hljs||(l==null?void 0:l.mergedHljsRef.value))}function Qe(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function Xe(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const Ze=P("affix",[N("affixed",{position:"fixed"},[N("absolute-positioned",{position:"absolute"})])]),le={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},et=ve(le),tt=V({name:"Affix",props:le,setup(e){const{mergedClsPrefixRef:o}=ne(e);xe("-affix",Ze,o);let l=null;const a=R(!1),c=R(!1),f=R(null),s=R(null),u=$(()=>c.value||a.value),k=$(()=>{var n,r;return(r=(n=e.triggerTop)!==null&&n!==void 0?n:e.offsetTop)!==null&&r!==void 0?r:e.top}),m=$(()=>{var n,r;return(r=(n=e.top)!==null&&n!==void 0?n:e.triggerTop)!==null&&r!==void 0?r:e.offsetTop}),E=$(()=>{var n,r;return(r=(n=e.bottom)!==null&&n!==void 0?n:e.triggerBottom)!==null&&r!==void 0?r:e.offsetBottom}),t=$(()=>{var n,r;return(r=(n=e.triggerBottom)!==null&&n!==void 0?n:e.offsetBottom)!==null&&r!==void 0?r:e.bottom}),_=R(null),v=()=>{const{target:n,listenTo:r}=e;n?l=n():r?l=ge(r):l=document,l&&(l.addEventListener("scroll",d),d())};function d(){ye(h)}function h(){const{value:n}=_;if(!l||!n)return;const r=Qe(l);if(u.value){s.value!==null&&r<s.value&&(a.value=!1,s.value=null),f.value!==null&&r>f.value&&(c.value=!1,f.value=null);return}const C=Xe(l),T=n.getBoundingClientRect(),S=T.top-C.top,B=C.bottom-T.bottom,y=k.value,g=t.value;y!==void 0&&S<=y?(a.value=!0,s.value=r-(y-S)):(a.value=!1,s.value=null),g!==void 0&&B<=g?(c.value=!0,f.value=r+g-B):(c.value=!1,f.value=null)}return X(()=>{v()}),he(()=>{l&&l.removeEventListener("scroll",d)}),{selfRef:_,affixed:u,mergedClsPrefix:o,mergedstyle:$(()=>{const n={};return a.value&&k.value!==void 0&&m.value!==void 0&&(n.top=`${m.value}px`),c.value&&t.value!==void 0&&E.value!==void 0&&(n.bottom=`${E.value}px`),n})}},render(){const{mergedClsPrefix:e}=this;return j("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),ot=P("anchor",`
 position: relative;
`,[se("block",`
 padding-left: var(--n-rail-width);
 `,[P("anchor-link",[L("+, >",[P("anchor-link",`
 margin-top: .5em;
 `)])]),P("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),se("show-rail",[L(">",[P("anchor-link","padding-left: 0;")])])]),N("block",[P("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[N("active",`
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
 `,[U("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[N("active",{backgroundColor:"var(--n-rail-color-active)"})])]),P("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[N("active",[L(">",[U("title",`
 color: var(--n-link-text-color-active);
 `)])]),U("title",`
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
 `)])])]),J=ke("n-anchor"),nt={title:String,href:String},rt=V({name:"AnchorLink",props:nt,setup(e,{slots:o}){const l=R(null),a=fe(J),c=Q(e,"href"),f=we(()=>c.value&&c.value===a.activeHref.value);Ge(J,"collectedLinkHrefs",c),Ue(J,"titleEls",()=>l.value),D(f,u=>{u&&l.value&&a.updateBarPosition(l.value)});function s(){e.href!==void 0&&a.setActiveHref(e.href)}return()=>{var u;const{value:k}=a.mergedClsPrefix;return j("div",{class:[`${k}-anchor-link`,f.value&&`${k}-anchor-link--active`]},j("a",{ref:l,class:[`${k}-anchor-link__title`],href:e.href,title:Ye(e.title),onClick:s},e.title),(u=o.default)===null||u===void 0?void 0:u.call(o))}}});function lt(e,o){const{top:l,height:a}=e.getBoundingClientRect(),c=o instanceof HTMLElement?o.getBoundingClientRect().top:0;return{top:l-c,height:a}}const ie={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},it=ve(ie),at=V({name:"BaseAnchor",props:Object.assign(Object.assign({},ie),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const o=[],l=[],a=R(null),c=R(null),f=R(null),s=R(null),u=$(()=>e.type==="block"),k=$(()=>!u.value&&e.showRail);function m(){const{value:d}=f,{value:h}=c;d&&(d.style.transition="none"),h&&(h.style.transition="none"),l&&l.forEach(n=>{n.style.transition="none"}),$e(()=>{const{value:n}=f,{value:r}=c;n&&(n.offsetWidth,n.style.transition=""),r&&(r.offsetWidth,r.style.transition=""),l&&l.forEach(C=>{C.offsetWidth,C.style.transition=""})})}function E(d,h=!0){const{value:n}=f,{value:r}=c,{value:C}=s;if(!C||!n)return;h||(n.style.transition="none",r&&(r.style.transition="none"));const{offsetHeight:T,offsetWidth:S}=d,{top:B,left:y}=d.getBoundingClientRect(),{top:g,left:z}=C.getBoundingClientRect(),H=B-g,M=y-z;n.style.top=`${H}px`,n.style.height=`${T}px`,r&&(r.style.top=`${H}px`,r.style.height=`${T}px`,r.style.maxWidth=`${S+M}px`),n.offsetHeight,r&&r.offsetHeight,h||(n.style.transition="",r&&(r.style.transition=""))}const t=Re(()=>{v(!0)},128);function _(d,h=!0){const n=/^#([^#]+)$/.exec(d);if(!n)return;const r=document.getElementById(n[1]);r&&(a.value=d,r.scrollIntoView(),h||m(),t())}function v(d=!0){var h;const n=[],r=ge((h=e.offsetTarget)!==null&&h!==void 0?h:document);o.forEach(y=>{const g=/#([^#]+)$/.exec(y);if(!g)return;const z=document.getElementById(g[1]);if(z&&r){const{top:H,height:M}=lt(z,r);n.push({top:H,height:M,href:y})}}),n.sort((y,g)=>y.top>g.top?1:(y.top===g.top&&y.height<g.height,-1));const C=a.value,{bound:T,ignoreGap:S}=e,B=n.reduce((y,g)=>g.top+g.height<0?S?g:y:g.top<=T?y===null?g:g.top===y.top?g.href===C?g:y:g.top>y.top?g:y:y,null);d||m(),B?a.value=B.href:a.value=null}return Ce(J,{activeHref:a,mergedClsPrefix:Q(e,"mergedClsPrefix"),updateBarPosition:E,setActiveHref:_,collectedLinkHrefs:o,titleEls:l}),X(()=>{document.addEventListener("scroll",t,!0),_(window.location.hash),v(!1)}),Te(()=>{_(window.location.hash),v(!1)}),he(()=>{document.removeEventListener("scroll",t,!0)}),D(a,d=>{if(d===null){const{value:h}=c;h&&!u.value&&(h.style.maxWidth="0")}}),{selfRef:s,barRef:f,slotRef:c,setActiveHref:_,activeHref:a,isBlockType:u,mergedShowRail:k}},render(){var e;const{mergedClsPrefix:o,mergedShowRail:l,isBlockType:a,$slots:c}=this,f=j("div",{class:[`${o}-anchor`,a&&`${o}-anchor--block`,l&&`${o}-anchor--show-rail`],ref:"selfRef"},l&&this.showBackground?j("div",{ref:"slotRef",class:`${o}-anchor-link-background`}):null,l?j("div",{class:`${o}-anchor-rail`},j("div",{ref:"barRef",class:[`${o}-anchor-rail__bar`,this.activeHref!==null&&`${o}-anchor-rail__bar--active`]})):null,(e=c.default)===null||e===void 0?void 0:e.call(c));return this.internalScrollable?j(Ee,null,{default:()=>f}):f}}),st=Object.assign(Object.assign(Object.assign(Object.assign({},Z.props),{affix:Boolean}),le),ie),ut=V({name:"Anchor",props:st,setup(e,{slots:o}){const{mergedClsPrefixRef:l,inlineThemeDisabled:a}=ne(e),c=Z("Anchor","-anchor",ot,je,e,l),f=R(null),s=$(()=>{const{self:{railColor:k,linkColor:m,railColorActive:E,linkTextColor:t,linkTextColorHover:_,linkTextColorPressed:v,linkTextColorActive:d,linkFontSize:h,railWidth:n,linkPadding:r,borderRadius:C},common:{cubicBezierEaseInOut:T}}=c.value;return{"--n-link-border-radius":C,"--n-link-color":m,"--n-link-font-size":h,"--n-link-text-color":t,"--n-link-text-color-hover":_,"--n-link-text-color-active":d,"--n-link-text-color-pressed":v,"--n-link-padding":r,"--n-bezier":T,"--n-rail-color":k,"--n-rail-color-active":E,"--n-rail-width":n}}),u=a?me("anchor",void 0,s,e):void 0;return{scrollTo(k){var m;(m=f.value)===null||m===void 0||m.setActiveHref(k)},renderAnchor:()=>(u==null||u.onRender(),j(at,Object.assign({ref:f,style:a?void 0:s.value,class:u==null?void 0:u.themeClass.value},ue(e,it),{mergedClsPrefix:l.value}),o))}},render(){return this.affix?j(tt,Object.assign({},ue(this,et)),{default:this.renderAnchor}):this.renderAnchor()}}),ct=L([P("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[N("show-line-numbers",`
 display: flex;
 `),U("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),N("word-wrap",[L("pre",`
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
 `)]),({props:e})=>{const o=`${e.bPrefix}code`;return[`${o} .hljs-comment,
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
 }`]}]),dt=Object.assign(Object.assign({},Z.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),ft=V({name:"Code",props:dt,setup(e,{slots:o}){const{internalNoHighlight:l}=e,{mergedClsPrefixRef:a,inlineThemeDisabled:c}=ne(),f=R(null),s=l?{value:void 0}:Je(e),u=(v,d,h)=>{const{value:n}=s;return!n||!(v&&n.getLanguage(v))?null:n.highlight(h?d.trim():d,{language:v}).value},k=$(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),m=()=>{if(o.default)return;const{value:v}=f;if(!v)return;const{language:d}=e,h=e.uri?window.decodeURIComponent(e.code):e.code;if(d){const r=u(d,h,e.trim);if(r!==null){if(e.inline)v.innerHTML=r;else{const C=v.querySelector(".__code__");C&&v.removeChild(C);const T=document.createElement("pre");T.className="__code__",T.innerHTML=r,v.appendChild(T)}return}}if(e.inline){v.textContent=h;return}const n=v.querySelector(".__code__");if(n)n.textContent=h;else{const r=document.createElement("pre");r.className="__code__",r.textContent=h,v.innerHTML="",v.appendChild(r)}};X(m),D(Q(e,"language"),m),D(Q(e,"code"),m),l||D(s,m);const E=Z("Code","-code",ct,Pe,e,a),t=$(()=>{const{common:{cubicBezierEaseInOut:v,fontFamilyMono:d},self:{textColor:h,fontSize:n,fontWeightStrong:r,lineNumberTextColor:C,"mono-3":T,"hue-1":S,"hue-2":B,"hue-3":y,"hue-4":g,"hue-5":z,"hue-5-2":H,"hue-6":M,"hue-6-2":_e}}=E.value,{internalFontSize:ae}=e;return{"--n-font-size":ae?`${ae}px`:n,"--n-font-family":d,"--n-font-weight-strong":r,"--n-bezier":v,"--n-text-color":h,"--n-mono-3":T,"--n-hue-1":S,"--n-hue-2":B,"--n-hue-3":y,"--n-hue-4":g,"--n-hue-5":z,"--n-hue-5-2":H,"--n-hue-6":M,"--n-hue-6-2":_e,"--n-line-number-text-color":C}}),_=c?me("code",$(()=>`${e.internalFontSize||"a"}`),t,e):void 0;return{mergedClsPrefix:a,codeRef:f,mergedShowLineNumbers:k,lineNumbers:$(()=>{let v=1;const d=[];let h=!1;for(const n of e.code)n===`
`?(h=!0,d.push(v++)):h=!1;return h||d.push(v++),d.join(`
`)}),cssVars:c?void 0:t,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){var e,o;const{mergedClsPrefix:l,wordWrap:a,mergedShowLineNumbers:c,onRender:f}=this;return f==null||f(),j("code",{class:[`${l}-code`,this.themeClass,a&&`${l}-code--word-wrap`,c&&`${l}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},c?j("pre",{class:`${l}-code__line-numbers`},this.lineNumbers):null,(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e))}}),ht={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},vt=re("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M160 368L32 256l128-112"},null,-1),mt=re("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 368l128-112l-128-112"},null,-1),pt=[vt,mt],gt=V({name:"CodeOutline",render:function(o,l){return w(),A("svg",ht,pt)}}),_t=V({__name:"card",props:{path:{},code:{},component:{}},setup(e){const o=R(!1),l=R(),a=R(!1),c=R(),f=R();return X(()=>{c.value=function(s){return()=>{a.value=!a.value,s()}}(Ae(f.value.$el))}),D(()=>Oe.value.theme,s=>{var u;return(u=l.value)==null?void 0:u.myCanvas.setTheme(s)}),(s,u)=>(w(),O(i(De),{ref_key:"cardRef",ref:f},{"header-extra":p(()=>[x(i(Y),null,{default:p(()=>[x(i(F),{trigger:"hover"},{trigger:p(()=>[x(i(W),{onClick:u[0]||(u[0]=k=>{var m;return(m=l.value)==null?void 0:m.myCanvas.returnToOrigin()}),text:""},{icon:p(()=>[x(i(K),{component:i(qe)},null,8,["component"])]),_:1})]),default:p(()=>[q(" 复位 ")]),_:1}),x(i(F),{trigger:"hover"},{trigger:p(()=>[x(i(W),{onClick:c.value,text:""},{icon:p(()=>[x(i(K),{component:a.value?i(Be):i(Le)},null,8,["component"])]),_:1},8,["onClick"])]),default:p(()=>[q(" "+ce(a.value?"退出全屏":"全屏"),1)]),_:1}),x(i(F),{trigger:"hover"},{trigger:p(()=>[x(i(W),{tag:"a",href:"https://github.com/ADMINnhanh/nhanh-frontend-view/tree/main/src/views/canvas/_Canvas/demo/"+s.path,target:"_blank",text:""},{icon:p(()=>[x(i(K),{component:i(Se)},null,8,["component"])]),_:1},8,["href"])]),default:p(()=>[q(" 在 GitHub 查看源码 ")]),_:1}),x(i(F),{trigger:"hover"},{trigger:p(()=>[x(i(W),{onClick:u[1]||(u[1]=k=>i(Ie).success("复制成功").error("复制失败").run(i(Ne)(s.code))),text:""},{icon:p(()=>[x(i(K),{component:i(Ve)},null,8,["component"])]),_:1})]),default:p(()=>[q(" 复制代码 ")]),_:1}),x(i(F),{trigger:"hover"},{trigger:p(()=>[x(i(W),{onClick:u[2]||(u[2]=k=>o.value=!o.value),text:""},{icon:p(()=>[x(i(K),{component:i(gt)},null,8,["component"])]),_:1})]),default:p(()=>[q(" "+ce(o.value?"收起代码":"显示代码"),1)]),_:1})]),_:1})]),default:p(()=>[(w(),O(ze(s.component),{ref_key:"componentRef",ref:l},null,512)),x(i(He),{show:o.value},{default:p(()=>[x(i(oe),{"x-scrollable":"",style:{"max-height":"50vh","margin-top":"10px"}},{default:p(()=>[x(i(ft),{code:s.code,language:"javascript","show-line-numbers":""},null,8,["code"])]),_:1})]),_:1},8,["show"])]),_:1},512))}}),te=pe(_t,[["__scopeId","data-v-729abdb3"]]),bt={class:"list-box"},xt=V({__name:"index",setup(e){const o=location.hash.replace(/(#[^/]+)*$/,"#"),l=[["China%2Findex.vue","中国地图"],["original.vue","仅需初始化 _Canvas"],["center.vue","中心点"],["shortcutKey.vue","快捷键"],["axis.vue","坐标轴"],["text.vue","文字"],["point.vue","点"],["line.vue","线"],["polygon.vue","面"],["custom.vue","自定义绘制"],["layer.vue","图层 & 层级"],["show.vue","显示条件"]];function a(m){const E=[],t=[];for(let _=0;_<m.length;_++)_%2===0?t.push(m[_]):E.push(m[_]);return[t,E]}const[c,f]=a(l),s=R({});(async function(){const m=Object.assign({"./demo/China/index.vue":()=>b(()=>import("./index-bGoNy9Lz.js"),[],import.meta.url).then(t=>t.default),"./demo/axis.vue":()=>b(()=>import("./axis-BzOZo77p.js"),[],import.meta.url).then(t=>t.default),"./demo/center.vue":()=>b(()=>import("./center-C2JpTx_k.js"),[],import.meta.url).then(t=>t.default),"./demo/custom.vue":()=>b(()=>import("./custom-BBf04d4H.js"),[],import.meta.url).then(t=>t.default),"./demo/layer.vue":()=>b(()=>import("./layer-CG7ZZaAd.js"),[],import.meta.url).then(t=>t.default),"./demo/line.vue":()=>b(()=>import("./line-FqQ8GbXe.js"),[],import.meta.url).then(t=>t.default),"./demo/original.vue":()=>b(()=>import("./original-CcrsEQiL.js"),[],import.meta.url).then(t=>t.default),"./demo/point.vue":()=>b(()=>import("./point-3ExFAdGY.js"),[],import.meta.url).then(t=>t.default),"./demo/polygon.vue":()=>b(()=>import("./polygon-BlcGpaGY.js"),[],import.meta.url).then(t=>t.default),"./demo/shortcutKey.vue":()=>b(()=>import("./shortcutKey-CxzQgiIh.js"),[],import.meta.url).then(t=>t.default),"./demo/show.vue":()=>b(()=>import("./show-CtVg1Tvd.js"),[],import.meta.url).then(t=>t.default),"./demo/text.vue":()=>b(()=>import("./text-B5VeQRQi.js"),[],import.meta.url).then(t=>t.default)}),E=Object.assign({"./demo/China/index.vue":()=>b(()=>import("./index-sJV9mlv7.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"./demo/axis.vue":()=>b(()=>import("./axis-CrroaquH.js"),__vite__mapDeps([6,1,2,3,4,7,8,9,10,11,12,13,14,15,16]),import.meta.url),"./demo/center.vue":()=>b(()=>import("./center-djEVyYd3.js"),__vite__mapDeps([17,1,2,3,4,14,15,8,9,10,11]),import.meta.url),"./demo/custom.vue":()=>b(()=>import("./custom-Cxbct4o3.js"),__vite__mapDeps([18,1,2,3,4]),import.meta.url),"./demo/layer.vue":()=>b(()=>import("./layer-CtSXT-fv.js"),__vite__mapDeps([19,1,2,3,4]),import.meta.url),"./demo/line.vue":()=>b(()=>import("./line-CgCZiUUy.js"),__vite__mapDeps([20,1,2,3,4,21]),import.meta.url),"./demo/original.vue":()=>b(()=>import("./original-C-cIhEze.js"),__vite__mapDeps([22,1,2,3,4]),import.meta.url),"./demo/point.vue":()=>b(()=>import("./point-AssDoHmV.js"),__vite__mapDeps([23,1,2,3,4,21]),import.meta.url),"./demo/polygon.vue":()=>b(()=>import("./polygon-oZ9-2tEd.js"),__vite__mapDeps([24,1,2,3,4,21]),import.meta.url),"./demo/shortcutKey.vue":()=>b(()=>import("./shortcutKey-Csk8vXug.js"),__vite__mapDeps([25,1,2,3,4,13]),import.meta.url),"./demo/show.vue":()=>b(()=>import("./show-ZXaJupSx.js"),__vite__mapDeps([26,1,2,3,4,21,27]),import.meta.url),"./demo/text.vue":()=>b(()=>import("./text-tMIOE2II.js"),__vite__mapDeps([28,1,2,3,4,21]),import.meta.url)});for(const t in m){const _=t.replace("./demo/","").replace(/\//g,"%2F"),v=await m[t](),d=await E[t]();s.value[_]={component:Me(d.default),code:v}}})();const u=R(window.innerWidth>=1280),k=()=>{u.value=window.innerWidth>=1280};return window.addEventListener("resize",k),Fe(()=>{window.removeEventListener("resize",k)}),(m,E)=>(w(),A("div",{id:"/canvas/_Canvas",class:Ke(["my-canvas-tools",i(de).isMobileStyle&&"mobile"])},[x(i(oe),null,{default:p(()=>[re("div",bt,[u.value?(w(),A(I,{key:0},[x(i(Y),{vertical:""},{default:p(()=>[(w(!0),A(I,null,G(i(c),t=>(w(),A(I,{key:t[0]},[s.value[t[0]]?(w(),O(te,{key:0,id:t[0],path:t[0],title:t[1],code:s.value[t[0]].code,component:s.value[t[0]].component},null,8,["id","path","title","code","component"])):(w(),O(i(ee),{key:1,id:t[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1}),x(i(Y),{vertical:""},{default:p(()=>[(w(!0),A(I,null,G(i(f),t=>(w(),A(I,{key:t[0]},[s.value[t[0]]?(w(),O(te,{key:0,id:t[0],path:t[0],title:t[1],code:s.value[t[0]].code,component:s.value[t[0]].component},null,8,["id","path","title","code","component"])):(w(),O(i(ee),{key:1,id:t[0],sharp:!1},null,8,["id"]))],64))),128))]),_:1})],64)):(w(),O(i(Y),{key:1,style:{width:"100%"},vertical:""},{default:p(()=>[(w(),A(I,null,G(l,t=>(w(),A(I,{key:t[0]},[s.value[t[0]]?(w(),O(te,{key:0,id:t[0],path:t[0],title:t[1],code:s.value[t[0]].code,component:s.value[t[0]].component},null,8,["id","path","title","code","component"])):(w(),O(i(ee),{key:1,id:t[0],sharp:!1},null,8,["id"]))],64))),64))]),_:1}))])]),_:1}),i(de).isMobileStyle?We("",!0):(w(),O(i(oe),{key:0},{default:p(()=>[x(i(ut),{type:"block",bound:100,"ignore-gap":"","offset-target":".my-canvas-tools"},{default:p(()=>[(w(),A(I,null,G(l,t=>x(i(rt),{key:t[0],href:i(o)+t[0],title:t[1]},null,8,["href","title"])),64))]),_:1})]),_:1}))],2))}}),Tt=pe(xt,[["__scopeId","data-v-19c34585"]]);export{Tt as default};
