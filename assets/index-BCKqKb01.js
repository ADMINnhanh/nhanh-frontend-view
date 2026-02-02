import{q as ht,cm as ot,A as xe,s as Pt,d as ie,l as r,cn as Te,f as Mt,co as vt,z as lt,aY as fn,aQ as zt,j as F,J as M,k as Q,I as le,H as ct,bO as Bt,b4 as bt,cp as hn,S as vn,C as gn,m as gt,al as It,L as ke,y as H,cq as pn,p as O,g as z,cr as bn,c7 as mn,U as ye,cs as De,E as mt,N as pt,ct as Ve,G as $t,cu as wn,cv as yn,as as it,cw as wt,R as Ze,bj as xn,cx as Cn,aS as Sn,bP as On,bQ as Fn,bR as Rn,bS as ft,aO as Tn,aP as kn,bT as yt,cy as _n,aR as xt,cz as Pn,cA as Mn,bg as zn,bV as Bn,aV as In,cB as $n,bl as oe,c as Le,o as he,W as je,az as Nn,u as _,cC as En,_ as Nt,c9 as An,Z as at,w as V,b as K,aE as Dn,aD as Ct,cD as Vn,ab as Qe,e as Ee,t as Ae,cE as Ln,ag as St,cF as jn,a1 as rt,B as Ye,cG as Kn,a3 as Ot,cH as Wn,bq as Hn,af as Un,cI as qn}from"./index-WoHDOd6n.js";import st from"./setItem--wZCIrYi.js";import{I as Gn}from"./Interface text-CILqG2cF.js";import{P as Qn}from"./Popup-BVEZwrA9.js";import{N as Yn}from"./Suffix-BTjmzZwq.js";import{g as Ft}from"./attribute-Cz32yFEB.js";import{V as Zn,N as Jn}from"./Empty-B7nCMpwt.js";import{u as Xn}from"./use-locale-B6Mm7iUE.js";import{A as eo}from"./Add-B95PJawR.js";import"./Ellipsis-NDltLstw.js";function Et(e,a){a&&(ht(()=>{const{value:s}=e;s&&ot.registerHandler(s,a)}),xe(e,(s,d)=>{d&&ot.unregisterHandler(d)},{deep:!1}),Pt(()=>{const{value:s}=e;s&&ot.unregisterHandler(s)}))}function dt(e){const a=e.filter(s=>s!==void 0);if(a.length!==0)return a.length===1?a[0]:s=>{e.forEach(d=>{d&&d(s)})}}const to=ie({name:"Checkmark",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},r("g",{fill:"none"},r("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),no=ie({props:{onFocus:Function,onBlur:Function},setup(e){return()=>r("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),Rt=ie({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:a,labelFieldRef:s,nodePropsRef:d}=Mt(vt);return{labelField:s,nodeProps:d,renderLabel:e,renderOption:a}},render(){const{clsPrefix:e,renderLabel:a,renderOption:s,nodeProps:d,tmNode:{rawNode:u}}=this,v=d==null?void 0:d(u),h=a?a(u,!1):Te(u[this.labelField],u,!1),n=r("div",Object.assign({},v,{class:[`${e}-base-select-group-header`,v==null?void 0:v.class]}),h);return u.render?u.render({node:n,option:u}):s?s({node:n,option:u,selected:!1}):n}});function oo(e,a){return r(zt,{name:"fade-in-scale-up-transition"},{default:()=>e?r(fn,{clsPrefix:a,class:`${a}-base-select-option__check`},{default:()=>r(to)}):null})}const Tt=ie({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:a,pendingTmNodeRef:s,multipleRef:d,valueSetRef:u,renderLabelRef:v,renderOptionRef:h,labelFieldRef:n,valueFieldRef:y,showCheckmarkRef:C,nodePropsRef:g,handleOptionClick:B,handleOptionMouseEnter:R}=Mt(vt),T=lt(()=>{const{value:P}=s;return P?e.tmNode.key===P.key:!1});function x(P){const{tmNode:k}=e;k.disabled||B(P,k)}function $(P){const{tmNode:k}=e;k.disabled||R(P,k)}function U(P){const{tmNode:k}=e,{value:I}=T;k.disabled||I||R(P,k)}return{multiple:d,isGrouped:lt(()=>{const{tmNode:P}=e,{parent:k}=P;return k&&k.rawNode.type==="group"}),showCheckmark:C,nodeProps:g,isPending:T,isSelected:lt(()=>{const{value:P}=a,{value:k}=d;if(P===null)return!1;const I=e.tmNode.rawNode[y.value];if(k){const{value:L}=u;return L.has(I)}else return P===I}),labelField:n,renderLabel:v,renderOption:h,handleMouseMove:U,handleMouseEnter:$,handleClick:x}},render(){const{clsPrefix:e,tmNode:{rawNode:a},isSelected:s,isPending:d,isGrouped:u,showCheckmark:v,nodeProps:h,renderOption:n,renderLabel:y,handleClick:C,handleMouseEnter:g,handleMouseMove:B}=this,R=oo(s,e),T=y?[y(a,s),v&&R]:[Te(a[this.labelField],a,s),v&&R],x=h==null?void 0:h(a),$=r("div",Object.assign({},x,{class:[`${e}-base-select-option`,a.class,x==null?void 0:x.class,{[`${e}-base-select-option--disabled`]:a.disabled,[`${e}-base-select-option--selected`]:s,[`${e}-base-select-option--grouped`]:u,[`${e}-base-select-option--pending`]:d,[`${e}-base-select-option--show-checkmark`]:v}],style:[(x==null?void 0:x.style)||"",a.style||""],onClick:dt([C,x==null?void 0:x.onClick]),onMouseenter:dt([g,x==null?void 0:x.onMouseenter]),onMousemove:dt([B,x==null?void 0:x.onMousemove])}),r("div",{class:`${e}-base-select-option__content`},T));return a.render?a.render({node:$,option:a,selected:s}):n?n({node:$,option:a,selected:s}):$}}),lo=F("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[F("scrollbar",`
 max-height: var(--n-height);
 `),F("virtual-list",`
 max-height: var(--n-height);
 `),F("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[M("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),F("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),F("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),M("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),M("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),M("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),M("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),F("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),F("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[Q("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),le("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),le("&:active",`
 color: var(--n-option-text-color-pressed);
 `),Q("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),Q("pending",[le("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),Q("selected",`
 color: var(--n-option-text-color-active);
 `,[le("&::before",`
 background-color: var(--n-option-color-active);
 `),Q("pending",[le("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),Q("disabled",`
 cursor: not-allowed;
 `,[ct("selected",`
 color: var(--n-option-text-color-disabled);
 `),Q("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),M("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Bt({enterScale:"0.5"})])])]),io=ie({name:"InternalSelectMenu",props:Object.assign(Object.assign({},ke.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:s}=gt(e),d=It("InternalSelectMenu",s,a),u=ke("InternalSelectMenu","-internal-select-menu",lo,pn,e,H(e,"clsPrefix")),v=O(null),h=O(null),n=O(null),y=z(()=>e.treeMate.getFlattenedNodes()),C=z(()=>bn(y.value)),g=O(null);function B(){const{treeMate:l}=e;let c=null;const{value:A}=e;A===null?c=l.getFirstAvailableNode():(e.multiple?c=l.getNode((A||[])[(A||[]).length-1]):c=l.getNode(A),(!c||c.disabled)&&(c=l.getFirstAvailableNode())),ee(c||null)}function R(){const{value:l}=g;l&&!e.treeMate.getNode(l.key)&&(g.value=null)}let T;xe(()=>e.show,l=>{l?T=xe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?B():R(),$t(pe)):R()},{immediate:!0}):T==null||T()},{immediate:!0}),Pt(()=>{T==null||T()});const x=z(()=>mn(u.value.self[ye("optionHeight",e.size)])),$=z(()=>De(u.value.self[ye("padding",e.size)])),U=z(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),P=z(()=>{const l=y.value;return l&&l.length===0});function k(l){const{onToggle:c}=e;c&&c(l)}function I(l){const{onScroll:c}=e;c&&c(l)}function L(l){var c;(c=n.value)===null||c===void 0||c.sync(),I(l)}function N(){var l;(l=n.value)===null||l===void 0||l.sync()}function Z(){const{value:l}=g;return l||null}function Y(l,c){c.disabled||ee(c,!1)}function ve(l,c){c.disabled||k(c)}function ge(l){var c;Ve(l,"action")||(c=e.onKeyup)===null||c===void 0||c.call(e,l)}function J(l){var c;Ve(l,"action")||(c=e.onKeydown)===null||c===void 0||c.call(e,l)}function X(l){var c;(c=e.onMousedown)===null||c===void 0||c.call(e,l),!e.focusable&&l.preventDefault()}function ae(){const{value:l}=g;l&&ee(l.getNext({loop:!0}),!0)}function E(){const{value:l}=g;l&&ee(l.getPrev({loop:!0}),!0)}function ee(l,c=!1){g.value=l,c&&pe()}function pe(){var l,c;const A=g.value;if(!A)return;const se=C.value(A.key);se!==null&&(e.virtualScroll?(l=h.value)===null||l===void 0||l.scrollTo({index:se}):(c=n.value)===null||c===void 0||c.scrollTo({index:se,elSize:x.value}))}function ue(l){var c,A;!((c=v.value)===null||c===void 0)&&c.contains(l.target)&&((A=e.onFocus)===null||A===void 0||A.call(e,l))}function _e(l){var c,A;!((c=v.value)===null||c===void 0)&&c.contains(l.relatedTarget)||(A=e.onBlur)===null||A===void 0||A.call(e,l)}mt(vt,{handleOptionMouseEnter:Y,handleOptionClick:ve,valueSetRef:U,pendingTmNodeRef:g,nodePropsRef:H(e,"nodeProps"),showCheckmarkRef:H(e,"showCheckmark"),multipleRef:H(e,"multiple"),valueRef:H(e,"value"),renderLabelRef:H(e,"renderLabel"),renderOptionRef:H(e,"renderOption"),labelFieldRef:H(e,"labelField"),valueFieldRef:H(e,"valueField")}),mt(wn,v),ht(()=>{const{value:l}=n;l&&l.sync()});const re=z(()=>{const{size:l}=e,{common:{cubicBezierEaseInOut:c},self:{height:A,borderRadius:se,color:Se,groupHeaderTextColor:Oe,actionDividerColor:de,optionTextColorPressed:G,optionTextColor:Fe,optionTextColorDisabled:ce,optionTextColorActive:Pe,optionOpacityDisabled:Me,optionCheckColor:ze,actionTextColor:Be,optionColorPending:be,optionColorActive:me,loadingColor:Ie,loadingSize:$e,optionColorActivePending:Ne,[ye("optionFontSize",l)]:Re,[ye("optionHeight",l)]:we,[ye("optionPadding",l)]:W}}=u.value;return{"--n-height":A,"--n-action-divider-color":de,"--n-action-text-color":Be,"--n-bezier":c,"--n-border-radius":se,"--n-color":Se,"--n-option-font-size":Re,"--n-group-header-text-color":Oe,"--n-option-check-color":ze,"--n-option-color-pending":be,"--n-option-color-active":me,"--n-option-color-active-pending":Ne,"--n-option-height":we,"--n-option-opacity-disabled":Me,"--n-option-text-color":Fe,"--n-option-text-color-active":Pe,"--n-option-text-color-disabled":ce,"--n-option-text-color-pressed":G,"--n-option-padding":W,"--n-option-padding-left":De(W,"left"),"--n-option-padding-right":De(W,"right"),"--n-loading-color":Ie,"--n-loading-size":$e}}),{inlineThemeDisabled:Ce}=e,q=Ce?pt("internal-select-menu",z(()=>e.size[0]),re,e):void 0,te={selfRef:v,next:ae,prev:E,getPendingTmNode:Z};return Et(v,e.onResize),Object.assign({mergedTheme:u,mergedClsPrefix:a,rtlEnabled:d,virtualListRef:h,scrollbarRef:n,itemSize:x,padding:$,flattenedNodes:y,empty:P,virtualListContainer(){const{value:l}=h;return l==null?void 0:l.listElRef},virtualListContent(){const{value:l}=h;return l==null?void 0:l.itemsElRef},doScroll:I,handleFocusin:ue,handleFocusout:_e,handleKeyUp:ge,handleKeyDown:J,handleMouseDown:X,handleVirtualListResize:N,handleVirtualListScroll:L,cssVars:Ce?void 0:re,themeClass:q==null?void 0:q.themeClass,onRender:q==null?void 0:q.onRender},te)},render(){const{$slots:e,virtualScroll:a,clsPrefix:s,mergedTheme:d,themeClass:u,onRender:v}=this;return v==null||v(),r("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${s}-base-select-menu`,this.rtlEnabled&&`${s}-base-select-menu--rtl`,u,this.multiple&&`${s}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},bt(e.header,h=>h&&r("div",{class:`${s}-base-select-menu__header`,"data-header":!0,key:"header"},h)),this.loading?r("div",{class:`${s}-base-select-menu__loading`},r(hn,{clsPrefix:s,strokeWidth:20})):this.empty?r("div",{class:`${s}-base-select-menu__empty`,"data-empty":!0},gn(e.empty,()=>[r(Jn,{theme:d.peers.Empty,themeOverrides:d.peerOverrides.Empty,size:this.size})])):r(vn,{ref:"scrollbarRef",theme:d.peers.Scrollbar,themeOverrides:d.peerOverrides.Scrollbar,scrollable:this.scrollable,container:a?this.virtualListContainer:void 0,content:a?this.virtualListContent:void 0,onScroll:a?void 0:this.doScroll},{default:()=>a?r(Zn,{ref:"virtualListRef",class:`${s}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:h})=>h.isGroup?r(Rt,{key:h.key,clsPrefix:s,tmNode:h}):h.ignored?null:r(Tt,{clsPrefix:s,key:h.key,tmNode:h})}):r("div",{class:`${s}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(h=>h.isGroup?r(Rt,{key:h.key,clsPrefix:s,tmNode:h}):r(Tt,{clsPrefix:s,key:h.key,tmNode:h})))}),bt(e.action,h=>h&&[r("div",{class:`${s}-base-select-menu__action`,"data-action":!0,key:"action"},h),r(no,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),ao=le([F("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[F("base-loading",`
 color: var(--n-loading-color);
 `),F("base-selection-tags","min-height: var(--n-height);"),M("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),M("state-border",`
 z-index: 1;
 border-color: #0000;
 `),F("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[M("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),F("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[M("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),F("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[M("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),F("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),F("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[F("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[M("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),M("render-label",`
 color: var(--n-text-color);
 `)]),ct("disabled",[le("&:hover",[M("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),Q("focus",[M("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),Q("active",[M("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),F("base-selection-label","background-color: var(--n-color-active);"),F("base-selection-tags","background-color: var(--n-color-active);")])]),Q("disabled","cursor: not-allowed;",[M("arrow",`
 color: var(--n-arrow-color-disabled);
 `),F("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[F("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),M("render-label",`
 color: var(--n-text-color-disabled);
 `)]),F("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),F("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),F("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[M("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),M("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>Q(`${e}-status`,[M("state-border",`border: var(--n-border-${e});`),ct("disabled",[le("&:hover",[M("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),Q("active",[M("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),F("base-selection-label",`background-color: var(--n-color-active-${e});`),F("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),Q("focus",[M("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),F("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),F("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[le("&:last-child","padding-right: 0;"),F("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[M("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),ro=ie({name:"InternalSelection",props:Object.assign(Object.assign({},ke.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:s}=gt(e),d=It("InternalSelection",s,a),u=O(null),v=O(null),h=O(null),n=O(null),y=O(null),C=O(null),g=O(null),B=O(null),R=O(null),T=O(null),x=O(!1),$=O(!1),U=O(!1),P=ke("InternalSelection","-internal-selection",ao,Cn,e,H(e,"clsPrefix")),k=z(()=>e.clearable&&!e.disabled&&(U.value||e.active)),I=z(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Te(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),L=z(()=>{const o=e.selectedOption;if(o)return o[e.labelField]}),N=z(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function Z(){var o;const{value:f}=u;if(f){const{value:D}=v;D&&(D.style.width=`${f.offsetWidth}px`,e.maxTagCount!=="responsive"&&((o=R.value)===null||o===void 0||o.sync({showAllItemsBeforeCalculate:!1})))}}function Y(){const{value:o}=T;o&&(o.style.display="none")}function ve(){const{value:o}=T;o&&(o.style.display="inline-block")}xe(H(e,"active"),o=>{o||Y()}),xe(H(e,"pattern"),()=>{e.multiple&&$t(Z)});function ge(o){const{onFocus:f}=e;f&&f(o)}function J(o){const{onBlur:f}=e;f&&f(o)}function X(o){const{onDeleteOption:f}=e;f&&f(o)}function ae(o){const{onClear:f}=e;f&&f(o)}function E(o){const{onPatternInput:f}=e;f&&f(o)}function ee(o){var f;(!o.relatedTarget||!(!((f=h.value)===null||f===void 0)&&f.contains(o.relatedTarget)))&&ge(o)}function pe(o){var f;!((f=h.value)===null||f===void 0)&&f.contains(o.relatedTarget)||J(o)}function ue(o){ae(o)}function _e(){U.value=!0}function re(){U.value=!1}function Ce(o){!e.active||!e.filterable||o.target!==v.value&&o.preventDefault()}function q(o){X(o)}const te=O(!1);function l(o){if(o.key==="Backspace"&&!te.value&&!e.pattern.length){const{selectedOptions:f}=e;f!=null&&f.length&&q(f[f.length-1])}}let c=null;function A(o){const{value:f}=u;if(f){const D=o.target.value;f.textContent=D,Z()}e.ignoreComposition&&te.value?c=o:E(o)}function se(){te.value=!0}function Se(){te.value=!1,e.ignoreComposition&&E(c),c=null}function Oe(o){var f;$.value=!0,(f=e.onPatternFocus)===null||f===void 0||f.call(e,o)}function de(o){var f;$.value=!1,(f=e.onPatternBlur)===null||f===void 0||f.call(e,o)}function G(){var o,f;if(e.filterable)$.value=!1,(o=C.value)===null||o===void 0||o.blur(),(f=v.value)===null||f===void 0||f.blur();else if(e.multiple){const{value:D}=n;D==null||D.blur()}else{const{value:D}=y;D==null||D.blur()}}function Fe(){var o,f,D;e.filterable?($.value=!1,(o=C.value)===null||o===void 0||o.focus()):e.multiple?(f=n.value)===null||f===void 0||f.focus():(D=y.value)===null||D===void 0||D.focus()}function ce(){const{value:o}=v;o&&(ve(),o.focus())}function Pe(){const{value:o}=v;o&&o.blur()}function Me(o){const{value:f}=g;f&&f.setTextContent(`+${o}`)}function ze(){const{value:o}=B;return o}function Be(){return v.value}let be=null;function me(){be!==null&&window.clearTimeout(be)}function Ie(){e.active||(me(),be=window.setTimeout(()=>{N.value&&(x.value=!0)},100))}function $e(){me()}function Ne(o){o||(me(),x.value=!1)}xe(N,o=>{o||(x.value=!1)}),ht(()=>{Sn(()=>{const o=C.value;o&&(e.disabled?o.removeAttribute("tabindex"):o.tabIndex=$.value?-1:0)})}),Et(h,e.onResize);const{inlineThemeDisabled:Re}=e,we=z(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:f},self:{fontWeight:D,borderRadius:Xe,color:et,placeholderColor:Ke,textColor:We,paddingSingle:He,paddingMultiple:tt,caretColor:nt,colorDisabled:Ue,textColorDisabled:fe,placeholderColorDisabled:t,colorActive:i,boxShadowFocus:p,boxShadowActive:S,boxShadowHover:m,border:b,borderFocus:w,borderHover:j,borderActive:ne,arrowColor:Dt,arrowColorDisabled:Vt,loadingColor:Lt,colorActiveWarning:jt,boxShadowFocusWarning:Kt,boxShadowActiveWarning:Wt,boxShadowHoverWarning:Ht,borderWarning:Ut,borderFocusWarning:qt,borderHoverWarning:Gt,borderActiveWarning:Qt,colorActiveError:Yt,boxShadowFocusError:Zt,boxShadowActiveError:Jt,boxShadowHoverError:Xt,borderError:en,borderFocusError:tn,borderHoverError:nn,borderActiveError:on,clearColor:ln,clearColorHover:an,clearColorPressed:rn,clearSize:sn,arrowSize:dn,[ye("height",o)]:un,[ye("fontSize",o)]:cn}}=P.value,qe=De(He),Ge=De(tt);return{"--n-bezier":f,"--n-border":b,"--n-border-active":ne,"--n-border-focus":w,"--n-border-hover":j,"--n-border-radius":Xe,"--n-box-shadow-active":S,"--n-box-shadow-focus":p,"--n-box-shadow-hover":m,"--n-caret-color":nt,"--n-color":et,"--n-color-active":i,"--n-color-disabled":Ue,"--n-font-size":cn,"--n-height":un,"--n-padding-single-top":qe.top,"--n-padding-multiple-top":Ge.top,"--n-padding-single-right":qe.right,"--n-padding-multiple-right":Ge.right,"--n-padding-single-left":qe.left,"--n-padding-multiple-left":Ge.left,"--n-padding-single-bottom":qe.bottom,"--n-padding-multiple-bottom":Ge.bottom,"--n-placeholder-color":Ke,"--n-placeholder-color-disabled":t,"--n-text-color":We,"--n-text-color-disabled":fe,"--n-arrow-color":Dt,"--n-arrow-color-disabled":Vt,"--n-loading-color":Lt,"--n-color-active-warning":jt,"--n-box-shadow-focus-warning":Kt,"--n-box-shadow-active-warning":Wt,"--n-box-shadow-hover-warning":Ht,"--n-border-warning":Ut,"--n-border-focus-warning":qt,"--n-border-hover-warning":Gt,"--n-border-active-warning":Qt,"--n-color-active-error":Yt,"--n-box-shadow-focus-error":Zt,"--n-box-shadow-active-error":Jt,"--n-box-shadow-hover-error":Xt,"--n-border-error":en,"--n-border-focus-error":tn,"--n-border-hover-error":nn,"--n-border-active-error":on,"--n-clear-size":sn,"--n-clear-color":ln,"--n-clear-color-hover":an,"--n-clear-color-pressed":rn,"--n-arrow-size":dn,"--n-font-weight":D}}),W=Re?pt("internal-selection",z(()=>e.size[0]),we,e):void 0;return{mergedTheme:P,mergedClearable:k,mergedClsPrefix:a,rtlEnabled:d,patternInputFocused:$,filterablePlaceholder:I,label:L,selected:N,showTagsPanel:x,isComposing:te,counterRef:g,counterWrapperRef:B,patternInputMirrorRef:u,patternInputRef:v,selfRef:h,multipleElRef:n,singleElRef:y,patternInputWrapperRef:C,overflowRef:R,inputTagElRef:T,handleMouseDown:Ce,handleFocusin:ee,handleClear:ue,handleMouseEnter:_e,handleMouseLeave:re,handleDeleteOption:q,handlePatternKeyDown:l,handlePatternInputInput:A,handlePatternInputBlur:de,handlePatternInputFocus:Oe,handleMouseEnterCounter:Ie,handleMouseLeaveCounter:$e,handleFocusout:pe,handleCompositionEnd:Se,handleCompositionStart:se,onPopoverUpdateShow:Ne,focus:Fe,focusInput:ce,blur:G,blurInput:Pe,updateCounter:Me,getCounter:ze,getTail:Be,renderLabel:e.renderLabel,cssVars:Re?void 0:we,themeClass:W==null?void 0:W.themeClass,onRender:W==null?void 0:W.onRender}},render(){const{status:e,multiple:a,size:s,disabled:d,filterable:u,maxTagCount:v,bordered:h,clsPrefix:n,ellipsisTagPopoverProps:y,onRender:C,renderTag:g,renderLabel:B}=this;C==null||C();const R=v==="responsive",T=typeof v=="number",x=R||T,$=r(yn,null,{default:()=>r(Yn,{clsPrefix:n,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var P,k;return(k=(P=this.$slots).arrow)===null||k===void 0?void 0:k.call(P)}})});let U;if(a){const{labelField:P}=this,k=E=>r("div",{class:`${n}-base-selection-tag-wrapper`,key:E.value},g?g({option:E,handleClose:()=>{this.handleDeleteOption(E)}}):r(it,{size:s,closable:!E.disabled,disabled:d,onClose:()=>{this.handleDeleteOption(E)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>B?B(E,!0):Te(E[P],E,!0)})),I=()=>(T?this.selectedOptions.slice(0,v):this.selectedOptions).map(k),L=u?r("div",{class:`${n}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:d,value:this.pattern,autofocus:this.autofocus,class:`${n}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r("span",{ref:"patternInputMirrorRef",class:`${n}-base-selection-input-tag__mirror`},this.pattern)):null,N=R?()=>r("div",{class:`${n}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},r(it,{size:s,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:d})):void 0;let Z;if(T){const E=this.selectedOptions.length-v;E>0&&(Z=r("div",{class:`${n}-base-selection-tag-wrapper`,key:"__counter__"},r(it,{size:s,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:d},{default:()=>`+${E}`})))}const Y=R?u?r(wt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:I,counter:N,tail:()=>L}):r(wt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:I,counter:N}):T&&Z?I().concat(Z):I(),ve=x?()=>r("div",{class:`${n}-base-selection-popover`},R?I():this.selectedOptions.map(k)):void 0,ge=x?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},y):null,X=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?r("div",{class:`${n}-base-selection-placeholder ${n}-base-selection-overlay`},r("div",{class:`${n}-base-selection-placeholder__inner`},this.placeholder)):null,ae=u?r("div",{ref:"patternInputWrapperRef",class:`${n}-base-selection-tags`},Y,R?null:L,$):r("div",{ref:"multipleElRef",class:`${n}-base-selection-tags`,tabindex:d?void 0:0},Y,$);U=r(Ze,null,x?r(xn,Object.assign({},ge,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>ae,default:ve}):ae,X)}else if(u){const P=this.pattern||this.isComposing,k=this.active?!P:!this.selected,I=this.active?!1:this.selected;U=r("div",{ref:"patternInputWrapperRef",class:`${n}-base-selection-label`,title:this.patternInputFocused?void 0:Ft(this.label)},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${n}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:d,disabled:d,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),I?r("div",{class:`${n}-base-selection-label__render-label ${n}-base-selection-overlay`,key:"input"},r("div",{class:`${n}-base-selection-overlay__wrapper`},g?g({option:this.selectedOption,handleClose:()=>{}}):B?B(this.selectedOption,!0):Te(this.label,this.selectedOption,!0))):null,k?r("div",{class:`${n}-base-selection-placeholder ${n}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${n}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,$)}else U=r("div",{ref:"singleElRef",class:`${n}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?r("div",{class:`${n}-base-selection-input`,title:Ft(this.label),key:"input"},r("div",{class:`${n}-base-selection-input__content`},g?g({option:this.selectedOption,handleClose:()=>{}}):B?B(this.selectedOption,!0):Te(this.label,this.selectedOption,!0))):r("div",{class:`${n}-base-selection-placeholder ${n}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${n}-base-selection-placeholder__inner`},this.placeholder)),$);return r("div",{ref:"selfRef",class:[`${n}-base-selection`,this.rtlEnabled&&`${n}-base-selection--rtl`,this.themeClass,e&&`${n}-base-selection--${e}-status`,{[`${n}-base-selection--active`]:this.active,[`${n}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${n}-base-selection--disabled`]:this.disabled,[`${n}-base-selection--multiple`]:this.multiple,[`${n}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},U,h?r("div",{class:`${n}-base-selection__border`}):null,h?r("div",{class:`${n}-base-selection__state-border`}):null)}});function Je(e){return e.type==="group"}function At(e){return e.type==="ignored"}function ut(e,a){try{return!!(1+a.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function so(e,a){return{getIsGroup:Je,getIgnored:At,getKey(d){return Je(d)?d.name||d.key||"key-required":d[e]},getChildren(d){return d[a]}}}function uo(e,a,s,d){if(!a)return e;function u(v){if(!Array.isArray(v))return[];const h=[];for(const n of v)if(Je(n)){const y=u(n[d]);y.length&&h.push(Object.assign({},n,{[d]:y}))}else{if(At(n))continue;a(s,n)&&h.push(n)}return h}return u(e)}function co(e,a,s){const d=new Map;return e.forEach(u=>{Je(u)?u[s].forEach(v=>{d.set(v[a],v)}):d.set(u[a],u)}),d}const fo=le([F("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),F("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Bt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),ho=Object.assign(Object.assign({},ke.props),{to:ft.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),kt=ie({name:"Select",props:ho,slots:Object,setup(e){const{mergedClsPrefixRef:a,mergedBorderedRef:s,namespaceRef:d,inlineThemeDisabled:u}=gt(e),v=ke("Select","-select",fo,_n,e,a),h=O(e.defaultValue),n=H(e,"value"),y=xt(n,h),C=O(!1),g=O(""),B=Pn(e,["items","options"]),R=O([]),T=O([]),x=z(()=>T.value.concat(R.value).concat(B.value)),$=z(()=>{const{filter:t}=e;if(t)return t;const{labelField:i,valueField:p}=e;return(S,m)=>{if(!m)return!1;const b=m[i];if(typeof b=="string")return ut(S,b);const w=m[p];return typeof w=="string"?ut(S,w):typeof w=="number"?ut(S,String(w)):!1}}),U=z(()=>{if(e.remote)return B.value;{const{value:t}=x,{value:i}=g;return!i.length||!e.filterable?t:uo(t,$.value,i,e.childrenField)}}),P=z(()=>{const{valueField:t,childrenField:i}=e,p=so(t,i);return Mn(U.value,p)}),k=z(()=>co(x.value,e.valueField,e.childrenField)),I=O(!1),L=xt(H(e,"show"),I),N=O(null),Z=O(null),Y=O(null),{localeRef:ve}=Xn("Select"),ge=z(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:ve.value.placeholder}),J=[],X=O(new Map),ae=z(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:i,valueField:p}=e;return S=>({[i]:String(S),[p]:S})}return t===!1?!1:i=>Object.assign(t(i),{value:i})});function E(t){const i=e.remote,{value:p}=X,{value:S}=k,{value:m}=ae,b=[];return t.forEach(w=>{if(S.has(w))b.push(S.get(w));else if(i&&p.has(w))b.push(p.get(w));else if(m){const j=m(w);j&&b.push(j)}}),b}const ee=z(()=>{if(e.multiple){const{value:t}=y;return Array.isArray(t)?E(t):[]}return null}),pe=z(()=>{const{value:t}=y;return!e.multiple&&!Array.isArray(t)?t===null?null:E([t])[0]||null:null}),ue=zn(e),{mergedSizeRef:_e,mergedDisabledRef:re,mergedStatusRef:Ce}=ue;function q(t,i){const{onChange:p,"onUpdate:value":S,onUpdateValue:m}=e,{nTriggerFormChange:b,nTriggerFormInput:w}=ue;p&&oe(p,t,i),m&&oe(m,t,i),S&&oe(S,t,i),h.value=t,b(),w()}function te(t){const{onBlur:i}=e,{nTriggerFormBlur:p}=ue;i&&oe(i,t),p()}function l(){const{onClear:t}=e;t&&oe(t)}function c(t){const{onFocus:i,showOnFocus:p}=e,{nTriggerFormFocus:S}=ue;i&&oe(i,t),S(),p&&de()}function A(t){const{onSearch:i}=e;i&&oe(i,t)}function se(t){const{onScroll:i}=e;i&&oe(i,t)}function Se(){var t;const{remote:i,multiple:p}=e;if(i){const{value:S}=X;if(p){const{valueField:m}=e;(t=ee.value)===null||t===void 0||t.forEach(b=>{S.set(b[m],b)})}else{const m=pe.value;m&&S.set(m[e.valueField],m)}}}function Oe(t){const{onUpdateShow:i,"onUpdate:show":p}=e;i&&oe(i,t),p&&oe(p,t),I.value=t}function de(){re.value||(Oe(!0),I.value=!0,e.filterable&&He())}function G(){Oe(!1)}function Fe(){g.value="",T.value=J}const ce=O(!1);function Pe(){e.filterable&&(ce.value=!0)}function Me(){e.filterable&&(ce.value=!1,L.value||Fe())}function ze(){re.value||(L.value?e.filterable?He():G():de())}function Be(t){var i,p;!((p=(i=Y.value)===null||i===void 0?void 0:i.selfRef)===null||p===void 0)&&p.contains(t.relatedTarget)||(C.value=!1,te(t),G())}function be(t){c(t),C.value=!0}function me(){C.value=!0}function Ie(t){var i;!((i=N.value)===null||i===void 0)&&i.$el.contains(t.relatedTarget)||(C.value=!1,te(t),G())}function $e(){var t;(t=N.value)===null||t===void 0||t.focus(),G()}function Ne(t){var i;L.value&&(!((i=N.value)===null||i===void 0)&&i.$el.contains(In(t))||G())}function Re(t){if(!Array.isArray(t))return[];if(ae.value)return Array.from(t);{const{remote:i}=e,{value:p}=k;if(i){const{value:S}=X;return t.filter(m=>p.has(m)||S.has(m))}else return t.filter(S=>p.has(S))}}function we(t){W(t.rawNode)}function W(t){if(re.value)return;const{tag:i,remote:p,clearFilterAfterSelect:S,valueField:m}=e;if(i&&!p){const{value:b}=T,w=b[0]||null;if(w){const j=R.value;j.length?j.push(w):R.value=[w],T.value=J}}if(p&&X.value.set(t[m],t),e.multiple){const b=Re(y.value),w=b.findIndex(j=>j===t[m]);if(~w){if(b.splice(w,1),i&&!p){const j=o(t[m]);~j&&(R.value.splice(j,1),S&&(g.value=""))}}else b.push(t[m]),S&&(g.value="");q(b,E(b))}else{if(i&&!p){const b=o(t[m]);~b?R.value=[R.value[b]]:R.value=J}We(),G(),q(t[m],t)}}function o(t){return R.value.findIndex(p=>p[e.valueField]===t)}function f(t){L.value||de();const{value:i}=t.target;g.value=i;const{tag:p,remote:S}=e;if(A(i),p&&!S){if(!i){T.value=J;return}const{onCreate:m}=e,b=m?m(i):{[e.labelField]:i,[e.valueField]:i},{valueField:w,labelField:j}=e;B.value.some(ne=>ne[w]===b[w]||ne[j]===b[j])||R.value.some(ne=>ne[w]===b[w]||ne[j]===b[j])?T.value=J:T.value=[b]}}function D(t){t.stopPropagation();const{multiple:i}=e;!i&&e.filterable&&G(),l(),i?q([],[]):q(null,null)}function Xe(t){!Ve(t,"action")&&!Ve(t,"empty")&&!Ve(t,"header")&&t.preventDefault()}function et(t){se(t)}function Ke(t){var i,p,S,m,b;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((i=N.value)===null||i===void 0)&&i.isComposing)){if(L.value){const w=(p=Y.value)===null||p===void 0?void 0:p.getPendingTmNode();w?we(w):e.filterable||(G(),We())}else if(de(),e.tag&&ce.value){const w=T.value[0];if(w){const j=w[e.valueField],{value:ne}=y;e.multiple&&Array.isArray(ne)&&ne.includes(j)||W(w)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;L.value&&((S=Y.value)===null||S===void 0||S.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;L.value?(m=Y.value)===null||m===void 0||m.next():de();break;case"Escape":L.value&&($n(t),G()),(b=N.value)===null||b===void 0||b.focus();break}}function We(){var t;(t=N.value)===null||t===void 0||t.focus()}function He(){var t;(t=N.value)===null||t===void 0||t.focusInput()}function tt(){var t;L.value&&((t=Z.value)===null||t===void 0||t.syncPosition())}Se(),xe(H(e,"options"),Se);const nt={focus:()=>{var t;(t=N.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=N.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=N.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=N.value)===null||t===void 0||t.blurInput()}},Ue=z(()=>{const{self:{menuBoxShadow:t}}=v.value;return{"--n-menu-box-shadow":t}}),fe=u?pt("select",void 0,Ue,e):void 0;return Object.assign(Object.assign({},nt),{mergedStatus:Ce,mergedClsPrefix:a,mergedBordered:s,namespace:d,treeMate:P,isMounted:Bn(),triggerRef:N,menuRef:Y,pattern:g,uncontrolledShow:I,mergedShow:L,adjustedTo:ft(e),uncontrolledValue:h,mergedValue:y,followerRef:Z,localizedPlaceholder:ge,selectedOption:pe,selectedOptions:ee,mergedSize:_e,mergedDisabled:re,focused:C,activeWithoutMenuOpen:ce,inlineThemeDisabled:u,onTriggerInputFocus:Pe,onTriggerInputBlur:Me,handleTriggerOrMenuResize:tt,handleMenuFocus:me,handleMenuBlur:Ie,handleMenuTabOut:$e,handleTriggerClick:ze,handleToggle:we,handleDeleteOption:W,handlePatternInput:f,handleClear:D,handleTriggerBlur:Be,handleTriggerFocus:be,handleKeydown:Ke,handleMenuAfterLeave:Fe,handleMenuClickOutside:Ne,handleMenuScroll:et,handleMenuKeydown:Ke,handleMenuMousedown:Xe,mergedTheme:v,cssVars:u?void 0:Ue,themeClass:fe==null?void 0:fe.themeClass,onRender:fe==null?void 0:fe.onRender})},render(){return r("div",{class:`${this.mergedClsPrefix}-select`},r(On,null,{default:()=>[r(Fn,null,{default:()=>r(ro,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,a;return[(a=(e=this.$slots).arrow)===null||a===void 0?void 0:a.call(e)]}})}),r(Rn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===ft.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>r(zt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,a,s;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Tn(r(io,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(a=this.menuProps)===null||a===void 0?void 0:a.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(s=this.menuProps)===null||s===void 0?void 0:s.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var d,u;return[(u=(d=this.$slots).empty)===null||u===void 0?void 0:u.call(d)]},header:()=>{var d,u;return[(u=(d=this.$slots).header)===null||u===void 0?void 0:u.call(d)]},action:()=>{var d,u;return[(u=(d=this.$slots).action)===null||u===void 0?void 0:u.call(d)]}}),this.displayDirective==="show"?[[kn,this.mergedShow],[yt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[yt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),vo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},go=je("path",{d:"M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 0 0-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 0 0 140-66.92",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),po=je("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M32 256l44-44l46 44"},null,-1),bo=je("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M480 256l-44 44l-46-44"},null,-1),mo=[go,po,bo],wo=ie({name:"Sync",render:function(a,s){return he(),Le("svg",vo,mo)}}),yo={class:"moduls-scroll-section"},xo=ie({__name:"Scroll",props:{dynamic:{type:Boolean}},emits:["bottomReached"],setup(e,{emit:a}){const s=e,d=a,u=O();function v(){const n=u.value;function y(){if(n){const C=n.clientHeight<n.scrollHeight?"var(--moduls-scroll-padding)":"0";n.style.paddingRight=C;const g=n.clientWidth<n.scrollWidth?"var(--moduls-scroll-padding)":"0";n.style.paddingBottom=g}}n?(y(),s.dynamic&&new ResizeObserver(y).observe(n)):requestAnimationFrame(v)}v();const h=En(n=>d("bottomReached",n));return(n,y)=>(he(),Le("section",yo,[je("div",{ref_key:"ScrollDom",ref:u,class:"moduls-scroll",onScroll:y[0]||(y[0]=(...C)=>_(h)&&_(h)(...C))},[je("div",null,[Nn(n.$slots,"default",{},void 0,!0)])],544)]))}}),_t=Nt(xo,[["__scopeId","data-v-a113a007"]]),Co=ie({__name:"index",props:{zIndex:{}},emits:["closure"],setup(e,{emit:a}){const s=e,d=a;function u(){qn(),d("closure")}An(["#settings-popup"],u,s.zIndex);const v=O(),h=O(),n=z(()=>{const y=Gn.value.components.popups.settings;return h.value&&(v.value=y.tabs[0].name,requestAnimationFrame(()=>{h.value.syncBarPosition()})),y});return(y,C)=>(he(),at(Qn,{id:"settings-popup","component-name":"settings",width:550,height:700,onClosure:u},{header:V(()=>[Ee(Ae(n.value.header),1)]),default:V(()=>[K(_(Dn),{ref_key:"tabsRef",ref:h,value:v.value,"onUpdate:value":C[2]||(C[2]=g=>v.value=g),animated:!0},{default:V(()=>[K(_(Ct),{name:n.value.tabs[0].name},{default:V(()=>[K(_t,null,{default:V(()=>[K(st,null,{title:V(()=>[Ee(Ae(n.value.tabs[0].items[0].title),1)]),value:V(()=>[K(_(kt),{value:_(Qe).language,"onUpdate:value":C[0]||(C[0]=g=>_(Qe).language=g),options:_(Vn)},null,8,["value","options"])]),_:1}),K(st,null,{title:V(()=>[Ee(Ae(n.value.tabs[0].items[1].title),1)]),value:V(()=>[K(_(kt),{value:_(Qe).theme,"onUpdate:value":C[1]||(C[1]=g=>_(Qe).theme=g),options:_(Ln)},null,8,["value","options"])]),_:1})]),_:1})]),_:1},8,["name"]),K(_(Ct),{name:n.value.tabs[1].name},{default:V(()=>[K(_t,null,{default:V(()=>[(he(!0),Le(Ze,null,St(_(jn),g=>(he(),at(st,{key:g.id},{title:V(()=>[Ee(Ae(g.title),1)]),value:V(()=>[K(_(rt),{justify:"space-between"},{default:V(()=>[K(_(rt),null,{default:V(()=>[K(_(Ye),{quaternary:"",disabled:!g.isCustom,onClick:B=>_(Kn)(g.id)},{default:V(()=>[K(_(Ot),{size:"20",component:_(wo)},null,8,["component"])]),_:1},8,["disabled","onClick"]),K(_(Ye),{quaternary:"",onClick:B=>_(Wn)(g)},{default:V(()=>[K(_(Hn),{size:"20",icon:"Edit"})]),_:1},8,["onClick"])]),_:2},1024),K(_(rt),null,{default:V(()=>[(he(!0),Le(Ze,null,St(g.shortcutKey,(B,R)=>(he(),Le(Ze,{key:R},[K(_(Ye),null,{default:V(()=>[Ee(Ae(B),1)]),_:2},1024),R!=g.shortcutKey.length-1?(he(),at(_(Ye),{key:0,bordered:!1,style:{"pointer-events":"none"}},{default:V(()=>[K(_(Ot),{size:"20",component:_(eo)},null,8,["component"])]),_:1})):Un("",!0)],64))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["name"])]),_:1},8,["value"])]),_:1}))}}),Bo=Nt(Co,[["__scopeId","data-v-b8ee9399"]]);export{Bo as default};
