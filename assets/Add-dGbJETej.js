import{d as D,E as z,bF as bt,bG as ft,n as l,bK as ue,C as pt,G as ye,be as ut,x as Y,$ as vt,Y as ht,b6 as gt,bO as xt,cb as mt,cc as yt,f as r,i as n,h as u,j as _,g as wt,k as Ct,s as we,cd as St,bZ as ve,ce as Z,ag as Rt,M as ee,av as te,O as zt,p as $t,K as k,at as Tt,af as Pt,y as L,bR as U,z as _t,A as he,bJ as ae,ak as K,aj as Wt,b2 as At,b9 as Bt,cf as kt,cg as Lt,o as jt,c as Et,Q as Ce}from"./index-CQ2Kx3BL.js";import{A as Ht}from"./Add-C3Qv92Kr.js";import{t as re}from"./throttle-C3l-RV82.js";const Ot=ue(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[ue("&::-webkit-scrollbar",{width:0,height:0})]),Ft=D({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=z(null);function s(d){!(d.currentTarget.offsetWidth<d.currentTarget.scrollWidth)||d.deltaY===0||(d.currentTarget.scrollLeft+=d.deltaY+d.deltaX,d.preventDefault())}const b=bt();return Ot.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:ft,ssr:b}),Object.assign({selfRef:e,handleWheel:s},{scrollTo(...d){var m;(m=e.value)===null||m===void 0||m.scrollTo(...d)}})},render(){return l("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),se=pt("n-tabs"),Se={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},qt=D({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Se,setup(e){const s=ye(se,null);return s||ut("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:s.paneStyleRef,class:s.paneClassRef,mergedClsPrefix:s.mergedClsPrefixRef}},render(){return l("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),It=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},yt(Se,["displayDirective"])),ne=D({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:It,setup(e){const{mergedClsPrefixRef:s,valueRef:b,typeRef:y,closableRef:d,tabStyleRef:m,addTabStyleRef:v,tabClassRef:w,addTabClassRef:C,tabChangeIdRef:h,onBeforeLeaveRef:f,triggerRef:j,handleAdd:A,activateTab:g,handleClose:S}=ye(se);return{trigger:j,mergedClosable:Y(()=>{if(e.internalAddable)return!1;const{closable:x}=e;return x===void 0?d.value:x}),style:m,addStyle:v,tabClass:w,addTabClass:C,clsPrefix:s,value:b,type:y,handleClose(x){x.stopPropagation(),!e.disabled&&S(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){A();return}const{name:x}=e,T=++h.id;if(x!==b.value){const{value:B}=f;B?Promise.resolve(B(e.name,b.value)).then($=>{$&&h.id===T&&g(x)}):g(x)}}}},render(){const{internalAddable:e,clsPrefix:s,name:b,disabled:y,label:d,tab:m,value:v,mergedClosable:w,trigger:C,$slots:{default:h}}=this,f=d??m;return l("div",{class:`${s}-tabs-tab-wrapper`},this.internalLeftPadded?l("div",{class:`${s}-tabs-tab-pad`}):null,l("div",Object.assign({key:b,"data-name":b,"data-disabled":y?!0:void 0},vt({class:[`${s}-tabs-tab`,v===b&&`${s}-tabs-tab--active`,y&&`${s}-tabs-tab--disabled`,w&&`${s}-tabs-tab--closable`,e&&`${s}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:C==="click"?this.activateTab:void 0,onMouseenter:C==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),l("span",{class:`${s}-tabs-tab__label`},e?l(ht,null,l("div",{class:`${s}-tabs-tab__height-placeholder`}," "),l(gt,{clsPrefix:s},{default:()=>l(Ht,null)})):h?h():typeof f=="object"?f:xt(f??b)),w&&this.type==="card"?l(mt,{clsPrefix:s,class:`${s}-tabs-tab__close`,onClick:this.handleClose,disabled:y}):null))}}),Mt=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[n("segment-type",[r("tabs-rail",[u("&.transition-disabled",[r("tabs-capsule",`
 transition: none;
 `)])])]),n("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),n("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),n("left, right",`
 flex-direction: row;
 `,[r("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),n("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),n("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),r("tabs-bar",`
 top: 0;
 `)]),r("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[r("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),r("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[r("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[n("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),u("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),n("flex",[r("tabs-nav",`
 width: 100%;
 position: relative;
 `,[r("tabs-wrapper",`
 width: 100%;
 `,[r("tabs-tab",`
 margin-right: 0;
 `)])])]),r("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[_("prefix, suffix",`
 display: flex;
 align-items: center;
 `),_("prefix","padding-right: 16px;"),_("suffix","padding-left: 16px;")]),n("top, bottom",[r("tabs-nav-scroll-wrapper",[u("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),u("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),n("shadow-start",[u("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),n("shadow-end",[u("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),n("left, right",[r("tabs-nav-scroll-content",`
 flex-direction: column;
 `),r("tabs-nav-scroll-wrapper",[u("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),u("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),n("shadow-start",[u("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),n("shadow-end",[u("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),r("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[r("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[u("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),u("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),r("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),r("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),r("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),r("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[n("disabled",{cursor:"not-allowed"}),_("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),_("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),r("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[u("&.transition-disabled",`
 transition: none;
 `),n("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),r("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),r("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[u("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),u("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),u("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),u("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),u("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),n("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[u("&:hover",{color:"var(--n-tab-text-color-hover)"}),n("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),n("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[n("line-type",[n("top",[_("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),n("left",[_("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),n("right",[_("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),n("bottom",[_("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),_("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),n("card-type",[_("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[n("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[_("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),wt("disabled",[u("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),n("closable","padding-right: 8px;"),n("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),n("disabled","color: var(--n-tab-text-color-disabled);")]),r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),n("left, right",[r("tabs-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),n("top",[n("card-type",[r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[n("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),n("left",[n("card-type",[r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[n("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),n("right",[n("card-type",[r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[n("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),n("bottom",[n("card-type",[r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[n("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Dt=Object.assign(Object.assign({},we.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Jt=D({name:"Tabs",props:Dt,setup(e,{slots:s}){var b,y,d,m;const{mergedClsPrefixRef:v,inlineThemeDisabled:w}=Ct(e),C=we("Tabs","-tabs",Mt,St,e,v),h=z(null),f=z(null),j=z(null),A=z(null),g=z(null),S=z(null),x=z(!0),T=z(!0),B=ve(e,["labelSize","size"]),$=ve(e,["activeName","value"]),M=z((y=(b=$.value)!==null&&b!==void 0?b:e.defaultValue)!==null&&y!==void 0?y:s.default?(m=(d=Z(s.default())[0])===null||d===void 0?void 0:d.props)===null||m===void 0?void 0:m.name:null),P=Rt($,M),c={id:0},R=Y(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ee(P,()=>{c.id=0,N(),le()});function E(){var t;const{value:a}=P;return a===null?null:(t=h.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function Re(t){if(e.type==="card")return;const{value:a}=f;if(!a)return;const o=a.style.opacity==="0";if(t){const i=`${v.value}-tabs-bar--disabled`,{barWidth:p,placement:W}=e;if(t.dataset.disabled==="true"?a.classList.add(i):a.classList.remove(i),["top","bottom"].includes(W)){if(ie(["top","maxHeight","height"]),typeof p=="number"&&t.offsetWidth>=p){const O=Math.floor((t.offsetWidth-p)/2)+t.offsetLeft;a.style.left=`${O}px`,a.style.maxWidth=`${p}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",o&&(a.style.transition="none"),a.offsetWidth,o&&(a.style.transition="",a.style.opacity="1")}else{if(ie(["left","maxWidth","width"]),typeof p=="number"&&t.offsetHeight>=p){const O=Math.floor((t.offsetHeight-p)/2)+t.offsetTop;a.style.top=`${O}px`,a.style.maxHeight=`${p}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",o&&(a.style.transition="none"),a.offsetHeight,o&&(a.style.transition="",a.style.opacity="1")}}}function ze(){if(e.type==="card")return;const{value:t}=f;t&&(t.style.opacity="0")}function ie(t){const{value:a}=f;if(a)for(const o of t)a.style[o]=""}function N(){if(e.type==="card")return;const t=E();t?Re(t):ze()}function le(){var t;const a=(t=g.value)===null||t===void 0?void 0:t.$el;if(!a)return;const o=E();if(!o)return;const{scrollLeft:i,offsetWidth:p}=a,{offsetLeft:W,offsetWidth:O}=o;i>W?a.scrollTo({top:0,left:W,behavior:"smooth"}):W+O>i+p&&a.scrollTo({top:0,left:W+O-p,behavior:"smooth"})}const V=z(null);let q=0,H=null;function $e(t){const a=V.value;if(a){q=t.getBoundingClientRect().height;const o=`${q}px`,i=()=>{a.style.height=o,a.style.maxHeight=o};H?(i(),H(),H=null):H=i}}function Te(t){const a=V.value;if(a){const o=t.getBoundingClientRect().height,i=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(q,o)}px`};H?(H(),H=null,i()):H=i}}function Pe(){const t=V.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:o,height:i}=a;o!==void 0&&(t.style.maxHeight=o),i!==void 0&&(t.style.height=i)}}}const de={value:[]},ce=z("next");function _e(t){const a=P.value;let o="next";for(const i of de.value){if(i===a)break;if(i===t){o="prev";break}}ce.value=o,We(t)}function We(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":i}=e;a&&K(a,t),o&&K(o,t),i&&K(i,t),M.value=t}function Ae(t){const{onClose:a}=e;a&&K(a,t)}function be(){const{value:t}=f;if(!t)return;const a="transition-disabled";t.classList.add(a),N(),t.classList.remove(a)}const F=z(null);function J({transitionDisabled:t}){const a=h.value;if(!a)return;t&&a.classList.add("transition-disabled");const o=E();o&&F.value&&(F.value.style.width=`${o.offsetWidth}px`,F.value.style.height=`${o.offsetHeight}px`,F.value.style.transform=`translateX(${o.offsetLeft-Wt(getComputedStyle(a).paddingLeft)}px)`,t&&F.value.offsetWidth),t&&a.classList.remove("transition-disabled")}ee([P],()=>{e.type==="segment"&&te(()=>{J({transitionDisabled:!1})})}),zt(()=>{e.type==="segment"&&J({transitionDisabled:!0})});let fe=0;function Be(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||fe===t.contentRect.width)return;fe=t.contentRect.width;const{type:o}=e;if((o==="line"||o==="bar")&&be(),o!=="segment"){const{placement:i}=e;Q((i==="top"||i==="bottom"?(a=g.value)===null||a===void 0?void 0:a.$el:S.value)||null)}}const ke=re(Be,64);ee([()=>e.justifyContent,()=>e.size],()=>{te(()=>{const{type:t}=e;(t==="line"||t==="bar")&&be()})});const G=z(!1);function Le(t){var a;const{target:o,contentRect:{width:i}}=t,p=o.parentElement.offsetWidth;if(!G.value)p<i&&(G.value=!0);else{const{value:W}=A;if(!W)return;p-i>W.$el.offsetWidth&&(G.value=!1)}Q(((a=g.value)===null||a===void 0?void 0:a.$el)||null)}const je=re(Le,64);function Ee(){const{onAdd:t}=e;t&&t(),te(()=>{const a=E(),{value:o}=g;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function Q(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:o,scrollWidth:i,offsetWidth:p}=t;x.value=o<=0,T.value=o+p>=i}else{const{scrollTop:o,scrollHeight:i,offsetHeight:p}=t;x.value=o<=0,T.value=o+p>=i}}const He=re(t=>{Q(t.target)},64);$t(se,{triggerRef:k(e,"trigger"),tabStyleRef:k(e,"tabStyle"),tabClassRef:k(e,"tabClass"),addTabStyleRef:k(e,"addTabStyle"),addTabClassRef:k(e,"addTabClass"),paneClassRef:k(e,"paneClass"),paneStyleRef:k(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:k(e,"type"),closableRef:k(e,"closable"),valueRef:P,tabChangeIdRef:c,onBeforeLeaveRef:k(e,"onBeforeLeave"),activateTab:_e,handleClose:Ae,handleAdd:Ee}),Tt(()=>{N(),le()}),Pt(()=>{const{value:t}=j;if(!t)return;const{value:a}=v,o=`${a}-tabs-nav-scroll-wrapper--shadow-start`,i=`${a}-tabs-nav-scroll-wrapper--shadow-end`;x.value?t.classList.remove(o):t.classList.add(o),T.value?t.classList.remove(i):t.classList.add(i)});const Oe={syncBarPosition:()=>{N()}},Fe=()=>{J({transitionDisabled:!0})},pe=Y(()=>{const{value:t}=B,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],i=`${t}${o}`,{self:{barColor:p,closeIconColor:W,closeIconColorHover:O,closeIconColorPressed:Ie,tabColor:Me,tabBorderColor:De,paneTextColor:Ne,tabFontWeight:Ve,tabBorderRadius:Ge,tabFontWeightActive:Xe,colorSegment:Ue,fontWeightStrong:Ke,tabColorSegment:Ye,closeSize:qe,closeIconSize:Je,closeColorHover:Qe,closeColorPressed:Ze,closeBorderRadius:et,[L("panePadding",t)]:X,[L("tabPadding",i)]:tt,[L("tabPaddingVertical",i)]:at,[L("tabGap",i)]:rt,[L("tabGap",`${i}Vertical`)]:ot,[L("tabTextColor",a)]:nt,[L("tabTextColorActive",a)]:st,[L("tabTextColorHover",a)]:it,[L("tabTextColorDisabled",a)]:lt,[L("tabFontSize",t)]:dt},common:{cubicBezierEaseInOut:ct}}=C.value;return{"--n-bezier":ct,"--n-color-segment":Ue,"--n-bar-color":p,"--n-tab-font-size":dt,"--n-tab-text-color":nt,"--n-tab-text-color-active":st,"--n-tab-text-color-disabled":lt,"--n-tab-text-color-hover":it,"--n-pane-text-color":Ne,"--n-tab-border-color":De,"--n-tab-border-radius":Ge,"--n-close-size":qe,"--n-close-icon-size":Je,"--n-close-color-hover":Qe,"--n-close-color-pressed":Ze,"--n-close-border-radius":et,"--n-close-icon-color":W,"--n-close-icon-color-hover":O,"--n-close-icon-color-pressed":Ie,"--n-tab-color":Me,"--n-tab-font-weight":Ve,"--n-tab-font-weight-active":Xe,"--n-tab-padding":tt,"--n-tab-padding-vertical":at,"--n-tab-gap":rt,"--n-tab-gap-vertical":ot,"--n-pane-padding-left":U(X,"left"),"--n-pane-padding-right":U(X,"right"),"--n-pane-padding-top":U(X,"top"),"--n-pane-padding-bottom":U(X,"bottom"),"--n-font-weight-strong":Ke,"--n-tab-color-segment":Ye}}),I=w?_t("tabs",Y(()=>`${B.value[0]}${e.type[0]}`),pe,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:P,renderedNames:new Set,segmentCapsuleElRef:F,tabsPaneWrapperRef:V,tabsElRef:h,barElRef:f,addTabInstRef:A,xScrollInstRef:g,scrollWrapperElRef:j,addTabFixed:G,tabWrapperStyle:R,handleNavResize:ke,mergedSize:B,handleScroll:He,handleTabsResize:je,cssVars:w?void 0:pe,themeClass:I==null?void 0:I.themeClass,animationDirection:ce,renderNameListRef:de,yScrollElRef:S,handleSegmentResize:Fe,onAnimationBeforeLeave:$e,onAnimationEnter:Te,onAnimationAfterEnter:Pe,onRender:I==null?void 0:I.onRender},Oe)},render(){const{mergedClsPrefix:e,type:s,placement:b,addTabFixed:y,addable:d,mergedSize:m,renderNameListRef:v,onRender:w,paneWrapperClass:C,paneWrapperStyle:h,$slots:{default:f,prefix:j,suffix:A}}=this;w==null||w();const g=f?Z(f()).filter(c=>c.type.__TAB_PANE__===!0):[],S=f?Z(f()).filter(c=>c.type.__TAB__===!0):[],x=!S.length,T=s==="card",B=s==="segment",$=!T&&!B&&this.justifyContent;v.value=[];const M=()=>{const c=l("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},$?null:l("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),x?g.map((R,E)=>(v.value.push(R.props.name),oe(l(ne,Object.assign({},R.props,{internalCreatedByPane:!0,internalLeftPadded:E!==0&&(!$||$==="center"||$==="start"||$==="end")}),R.children?{default:R.children.tab}:void 0)))):S.map((R,E)=>(v.value.push(R.props.name),oe(E!==0&&!$?me(R):R))),!y&&d&&T?xe(d,(x?g.length:S.length)!==0):null,$?null:l("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return l("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},T&&d?l(ae,{onResize:this.handleTabsResize},{default:()=>c}):c,T?l("div",{class:`${e}-tabs-pad`}):null,T?null:l("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},P=B?"top":b;return l("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${s}-type`,`${e}-tabs--${m}-size`,$&&`${e}-tabs--flex`,`${e}-tabs--${P}`],style:this.cssVars},l("div",{class:[`${e}-tabs-nav--${s}-type`,`${e}-tabs-nav--${P}`,`${e}-tabs-nav`]},he(j,c=>c&&l("div",{class:`${e}-tabs-nav__prefix`},c)),B?l(ae,{onResize:this.handleSegmentResize},{default:()=>l("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},l("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},l("div",{class:`${e}-tabs-wrapper`},l("div",{class:`${e}-tabs-tab`}))),x?g.map((c,R)=>(v.value.push(c.props.name),l(ne,Object.assign({},c.props,{internalCreatedByPane:!0,internalLeftPadded:R!==0}),c.children?{default:c.children.tab}:void 0))):S.map((c,R)=>(v.value.push(c.props.name),R===0?c:me(c))))}):l(ae,{onResize:this.handleNavResize},{default:()=>l("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(P)?l(Ft,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:M}):l("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},M()))}),y&&d&&T?xe(d,!0):null,he(A,c=>c&&l("div",{class:`${e}-tabs-nav__suffix`},c))),x&&(this.animated&&(P==="top"||P==="bottom")?l("div",{ref:"tabsPaneWrapperRef",style:h,class:[`${e}-tabs-pane-wrapper`,C]},ge(g,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):ge(g,this.mergedValue,this.renderedNames)))}});function ge(e,s,b,y,d,m,v){const w=[];return e.forEach(C=>{const{name:h,displayDirective:f,"display-directive":j}=C.props,A=S=>f===S||j===S,g=s===h;if(C.key!==void 0&&(C.key=h),g||A("show")||A("show:lazy")&&b.has(h)){b.has(h)||b.add(h);const S=!A("if");w.push(S?At(C,[[Bt,g]]):C)}}),v?l(kt,{name:`${v}-transition`,onBeforeLeave:y,onEnter:d,onAfterEnter:m},{default:()=>w}):w}function xe(e,s){return l(ne,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:s,disabled:typeof e=="object"&&e.disabled})}function me(e){const s=Lt(e);return s.props?s.props.internalLeftPadded=!0:s.props={internalLeftPadded:!0},s}function oe(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const Nt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Vt=Ce("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 112v288"},null,-1),Gt=Ce("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 256H112"},null,-1),Xt=[Vt,Gt],Qt=D({name:"Add",render:function(s,b){return jt(),Et("svg",Nt,Xt)}});export{Qt as A,Jt as N,qt as a};
