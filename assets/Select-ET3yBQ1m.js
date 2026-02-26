import{q as Xe,cz as Ue,A as be,s as fn,d as pe,l as i,cA as Oe,f as hn,cB as en,z as Ge,aZ as Un,aQ as vn,j as x,J as M,k as U,I as ne,H as Ze,bV as gn,be as on,cC as Gn,S as qn,C as Jn,m as nn,al as bn,L as Fe,y as j,cD as Yn,p as S,g as P,cE as Zn,cf as Qn,U as ge,cF as Be,E as ln,N as tn,cG as Ie,G as pn,cH as Xn,cI as et,as as qe,cJ as rn,R as nt,bs as tt,cK as ot,aS as lt,bW as it,bX as rt,bY as at,bZ as Qe,aO as st,aP as dt,b_ as an,cL as ut,aR as sn,cM as ct,cN as ft,b$ as ht,c1 as vt,aV as gt,cO as bt,b2 as ee}from"./index-DiLUuH_l.js";import{N as pt}from"./Suffix-CA9ZK8zK.js";import{g as dn}from"./attribute-Cz32yFEB.js";import{V as mt,N as wt}from"./Empty-O7ecwSWW.js";import{u as yt}from"./use-locale-DjTo9B-1.js";function mn(e,a){a&&(Xe(()=>{const{value:s}=e;s&&Ue.registerHandler(s,a)}),be(e,(s,d)=>{d&&Ue.unregisterHandler(d)},{deep:!1}),fn(()=>{const{value:s}=e;s&&Ue.unregisterHandler(s)}))}function Je(e){const a=e.filter(s=>s!==void 0);if(a.length!==0)return a.length===1?a[0]:s=>{e.forEach(d=>{d&&d(s)})}}const xt=pe({name:"Checkmark",render(){return i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},i("g",{fill:"none"},i("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Ct=pe({props:{onFocus:Function,onBlur:Function},setup(e){return()=>i("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),un=pe({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:a,labelFieldRef:s,nodePropsRef:d}=hn(en);return{labelField:s,nodeProps:d,renderLabel:e,renderOption:a}},render(){const{clsPrefix:e,renderLabel:a,renderOption:s,nodeProps:d,tmNode:{rawNode:f}}=this,v=d==null?void 0:d(f),h=a?a(f,!1):Oe(f[this.labelField],f,!1),r=i("div",Object.assign({},v,{class:[`${e}-base-select-group-header`,v==null?void 0:v.class]}),h);return f.render?f.render({node:r,option:f}):s?s({node:r,option:f,selected:!1}):r}});function Ot(e,a){return i(vn,{name:"fade-in-scale-up-transition"},{default:()=>e?i(Un,{clsPrefix:a,class:`${a}-base-select-option__check`},{default:()=>i(xt)}):null})}const cn=pe({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:a,pendingTmNodeRef:s,multipleRef:d,valueSetRef:f,renderLabelRef:v,renderOptionRef:h,labelFieldRef:r,valueFieldRef:z,showCheckmarkRef:A,nodePropsRef:O,handleOptionClick:N,handleOptionMouseEnter:R}=hn(en),C=Ge(()=>{const{value:T}=s;return T?e.tmNode.key===T.key:!1});function w(T){const{tmNode:F}=e;F.disabled||N(T,F)}function _(T){const{tmNode:F}=e;F.disabled||R(T,F)}function W(T){const{tmNode:F}=e,{value:k}=C;F.disabled||k||R(T,F)}return{multiple:d,isGrouped:Ge(()=>{const{tmNode:T}=e,{parent:F}=T;return F&&F.rawNode.type==="group"}),showCheckmark:A,nodeProps:O,isPending:C,isSelected:Ge(()=>{const{value:T}=a,{value:F}=d;if(T===null)return!1;const k=e.tmNode.rawNode[z.value];if(F){const{value:D}=f;return D.has(k)}else return T===k}),labelField:r,renderLabel:v,renderOption:h,handleMouseMove:W,handleMouseEnter:_,handleClick:w}},render(){const{clsPrefix:e,tmNode:{rawNode:a},isSelected:s,isPending:d,isGrouped:f,showCheckmark:v,nodeProps:h,renderOption:r,renderLabel:z,handleClick:A,handleMouseEnter:O,handleMouseMove:N}=this,R=Ot(s,e),C=z?[z(a,s),v&&R]:[Oe(a[this.labelField],a,s),v&&R],w=h==null?void 0:h(a),_=i("div",Object.assign({},w,{class:[`${e}-base-select-option`,a.class,w==null?void 0:w.class,{[`${e}-base-select-option--disabled`]:a.disabled,[`${e}-base-select-option--selected`]:s,[`${e}-base-select-option--grouped`]:f,[`${e}-base-select-option--pending`]:d,[`${e}-base-select-option--show-checkmark`]:v}],style:[(w==null?void 0:w.style)||"",a.style||""],onClick:Je([A,w==null?void 0:w.onClick]),onMouseenter:Je([O,w==null?void 0:w.onMouseenter]),onMousemove:Je([N,w==null?void 0:w.onMousemove])}),i("div",{class:`${e}-base-select-option__content`},C));return a.render?a.render({node:_,option:a,selected:s}):r?r({node:_,option:a,selected:s}):_}}),Ft=x("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[x("scrollbar",`
 max-height: var(--n-height);
 `),x("virtual-list",`
 max-height: var(--n-height);
 `),x("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[M("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),x("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),x("base-select-menu-option-wrapper",`
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
 `),x("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),x("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[U("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ne("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ne("&:active",`
 color: var(--n-option-text-color-pressed);
 `),U("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),U("pending",[ne("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),U("selected",`
 color: var(--n-option-text-color-active);
 `,[ne("&::before",`
 background-color: var(--n-option-color-active);
 `),U("pending",[ne("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),U("disabled",`
 cursor: not-allowed;
 `,[Ze("selected",`
 color: var(--n-option-text-color-disabled);
 `),U("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),M("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[gn({enterScale:"0.5"})])])]),St=pe({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Fe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:s}=nn(e),d=bn("InternalSelectMenu",s,a),f=Fe("InternalSelectMenu","-internal-select-menu",Ft,Yn,e,j(e,"clsPrefix")),v=S(null),h=S(null),r=S(null),z=P(()=>e.treeMate.getFlattenedNodes()),A=P(()=>Zn(z.value)),O=S(null);function N(){const{treeMate:o}=e;let u=null;const{value:$}=e;$===null?u=o.getFirstAvailableNode():(e.multiple?u=o.getNode(($||[])[($||[]).length-1]):u=o.getNode($),(!u||u.disabled)&&(u=o.getFirstAvailableNode())),Z(u||null)}function R(){const{value:o}=O;o&&!e.treeMate.getNode(o.key)&&(O.value=null)}let C;be(()=>e.show,o=>{o?C=be(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?N():R(),pn(ce)):R()},{immediate:!0}):C==null||C()},{immediate:!0}),fn(()=>{C==null||C()});const w=P(()=>Qn(f.value.self[ge("optionHeight",e.size)])),_=P(()=>Be(f.value.self[ge("padding",e.size)])),W=P(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),T=P(()=>{const o=z.value;return o&&o.length===0});function F(o){const{onToggle:u}=e;u&&u(o)}function k(o){const{onScroll:u}=e;u&&u(o)}function D(o){var u;(u=r.value)===null||u===void 0||u.sync(),k(o)}function B(){var o;(o=r.value)===null||o===void 0||o.sync()}function q(){const{value:o}=O;return o||null}function G(o,u){u.disabled||Z(u,!1)}function de(o,u){u.disabled||F(u)}function ue(o){var u;Ie(o,"action")||(u=e.onKeyup)===null||u===void 0||u.call(e,o)}function J(o){var u;Ie(o,"action")||(u=e.onKeydown)===null||u===void 0||u.call(e,o)}function Y(o){var u;(u=e.onMousedown)===null||u===void 0||u.call(e,o),!e.focusable&&o.preventDefault()}function te(){const{value:o}=O;o&&Z(o.getNext({loop:!0}),!0)}function I(){const{value:o}=O;o&&Z(o.getPrev({loop:!0}),!0)}function Z(o,u=!1){O.value=o,u&&ce()}function ce(){var o,u;const $=O.value;if(!$)return;const le=A.value($.key);le!==null&&(e.virtualScroll?(o=h.value)===null||o===void 0||o.scrollTo({index:le}):(u=r.value)===null||u===void 0||u.scrollTo({index:le,elSize:w.value}))}function re(o){var u,$;!((u=v.value)===null||u===void 0)&&u.contains(o.target)&&(($=e.onFocus)===null||$===void 0||$.call(e,o))}function Se(o){var u,$;!((u=v.value)===null||u===void 0)&&u.contains(o.relatedTarget)||($=e.onBlur)===null||$===void 0||$.call(e,o)}ln(en,{handleOptionMouseEnter:G,handleOptionClick:de,valueSetRef:W,pendingTmNodeRef:O,nodePropsRef:j(e,"nodeProps"),showCheckmarkRef:j(e,"showCheckmark"),multipleRef:j(e,"multiple"),valueRef:j(e,"value"),renderLabelRef:j(e,"renderLabel"),renderOptionRef:j(e,"renderOption"),labelFieldRef:j(e,"labelField"),valueFieldRef:j(e,"valueField")}),ln(Xn,v),Xe(()=>{const{value:o}=r;o&&o.sync()});const oe=P(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:u},self:{height:$,borderRadius:le,color:we,groupHeaderTextColor:ye,actionDividerColor:ie,optionTextColorPressed:H,optionTextColor:xe,optionTextColorDisabled:ae,optionTextColorActive:Re,optionOpacityDisabled:Te,optionCheckColor:Me,actionTextColor:Pe,optionColorPending:fe,optionColorActive:he,loadingColor:ze,loadingSize:ke,optionColorActivePending:_e,[ge("optionFontSize",o)]:Ce,[ge("optionHeight",o)]:ve,[ge("optionPadding",o)]:V}}=f.value;return{"--n-height":$,"--n-action-divider-color":ie,"--n-action-text-color":Pe,"--n-bezier":u,"--n-border-radius":le,"--n-color":we,"--n-option-font-size":Ce,"--n-group-header-text-color":ye,"--n-option-check-color":Me,"--n-option-color-pending":fe,"--n-option-color-active":he,"--n-option-color-active-pending":_e,"--n-option-height":ve,"--n-option-opacity-disabled":Te,"--n-option-text-color":xe,"--n-option-text-color-active":Re,"--n-option-text-color-disabled":ae,"--n-option-text-color-pressed":H,"--n-option-padding":V,"--n-option-padding-left":Be(V,"left"),"--n-option-padding-right":Be(V,"right"),"--n-loading-color":ze,"--n-loading-size":ke}}),{inlineThemeDisabled:me}=e,K=me?tn("internal-select-menu",P(()=>e.size[0]),oe,e):void 0,Q={selfRef:v,next:te,prev:I,getPendingTmNode:q};return mn(v,e.onResize),Object.assign({mergedTheme:f,mergedClsPrefix:a,rtlEnabled:d,virtualListRef:h,scrollbarRef:r,itemSize:w,padding:_,flattenedNodes:z,empty:T,virtualListContainer(){const{value:o}=h;return o==null?void 0:o.listElRef},virtualListContent(){const{value:o}=h;return o==null?void 0:o.itemsElRef},doScroll:k,handleFocusin:re,handleFocusout:Se,handleKeyUp:ue,handleKeyDown:J,handleMouseDown:Y,handleVirtualListResize:B,handleVirtualListScroll:D,cssVars:me?void 0:oe,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender},Q)},render(){const{$slots:e,virtualScroll:a,clsPrefix:s,mergedTheme:d,themeClass:f,onRender:v}=this;return v==null||v(),i("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${s}-base-select-menu`,this.rtlEnabled&&`${s}-base-select-menu--rtl`,f,this.multiple&&`${s}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},on(e.header,h=>h&&i("div",{class:`${s}-base-select-menu__header`,"data-header":!0,key:"header"},h)),this.loading?i("div",{class:`${s}-base-select-menu__loading`},i(Gn,{clsPrefix:s,strokeWidth:20})):this.empty?i("div",{class:`${s}-base-select-menu__empty`,"data-empty":!0},Jn(e.empty,()=>[i(wt,{theme:d.peers.Empty,themeOverrides:d.peerOverrides.Empty,size:this.size})])):i(qn,{ref:"scrollbarRef",theme:d.peers.Scrollbar,themeOverrides:d.peerOverrides.Scrollbar,scrollable:this.scrollable,container:a?this.virtualListContainer:void 0,content:a?this.virtualListContent:void 0,onScroll:a?void 0:this.doScroll},{default:()=>a?i(mt,{ref:"virtualListRef",class:`${s}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:h})=>h.isGroup?i(un,{key:h.key,clsPrefix:s,tmNode:h}):h.ignored?null:i(cn,{clsPrefix:s,key:h.key,tmNode:h})}):i("div",{class:`${s}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(h=>h.isGroup?i(un,{key:h.key,clsPrefix:s,tmNode:h}):i(cn,{clsPrefix:s,key:h.key,tmNode:h})))}),on(e.action,h=>h&&[i("div",{class:`${s}-base-select-menu__action`,"data-action":!0,key:"action"},h),i(Ct,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Rt=ne([x("base-selection",`
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
 `,[x("base-loading",`
 color: var(--n-loading-color);
 `),x("base-selection-tags","min-height: var(--n-height);"),M("border, state-border",`
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
 `),x("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[M("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),x("base-selection-overlay",`
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
 `)]),x("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[M("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),x("base-selection-tags",`
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
 `),x("base-selection-label",`
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
 `,[x("base-selection-input",`
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
 `)]),Ze("disabled",[ne("&:hover",[M("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),U("focus",[M("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),U("active",[M("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),x("base-selection-label","background-color: var(--n-color-active);"),x("base-selection-tags","background-color: var(--n-color-active);")])]),U("disabled","cursor: not-allowed;",[M("arrow",`
 color: var(--n-arrow-color-disabled);
 `),x("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[x("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),M("render-label",`
 color: var(--n-text-color-disabled);
 `)]),x("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),x("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),x("base-selection-input-tag",`
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
 `)]),["warning","error"].map(e=>U(`${e}-status`,[M("state-border",`border: var(--n-border-${e});`),Ze("disabled",[ne("&:hover",[M("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),U("active",[M("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),x("base-selection-label",`background-color: var(--n-color-active-${e});`),x("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),U("focus",[M("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),x("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),x("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ne("&:last-child","padding-right: 0;"),x("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[M("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Tt=pe({name:"InternalSelection",props:Object.assign(Object.assign({},Fe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:s}=nn(e),d=bn("InternalSelection",s,a),f=S(null),v=S(null),h=S(null),r=S(null),z=S(null),A=S(null),O=S(null),N=S(null),R=S(null),C=S(null),w=S(!1),_=S(!1),W=S(!1),T=Fe("InternalSelection","-internal-selection",Rt,ot,e,j(e,"clsPrefix")),F=P(()=>e.clearable&&!e.disabled&&(W.value||e.active)),k=P(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Oe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),D=P(()=>{const t=e.selectedOption;if(t)return t[e.labelField]}),B=P(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function q(){var t;const{value:c}=f;if(c){const{value:E}=v;E&&(E.style.width=`${c.offsetWidth}px`,e.maxTagCount!=="responsive"&&((t=R.value)===null||t===void 0||t.sync({showAllItemsBeforeCalculate:!1})))}}function G(){const{value:t}=C;t&&(t.style.display="none")}function de(){const{value:t}=C;t&&(t.style.display="inline-block")}be(j(e,"active"),t=>{t||G()}),be(j(e,"pattern"),()=>{e.multiple&&pn(q)});function ue(t){const{onFocus:c}=e;c&&c(t)}function J(t){const{onBlur:c}=e;c&&c(t)}function Y(t){const{onDeleteOption:c}=e;c&&c(t)}function te(t){const{onClear:c}=e;c&&c(t)}function I(t){const{onPatternInput:c}=e;c&&c(t)}function Z(t){var c;(!t.relatedTarget||!(!((c=h.value)===null||c===void 0)&&c.contains(t.relatedTarget)))&&ue(t)}function ce(t){var c;!((c=h.value)===null||c===void 0)&&c.contains(t.relatedTarget)||J(t)}function re(t){te(t)}function Se(){W.value=!0}function oe(){W.value=!1}function me(t){!e.active||!e.filterable||t.target!==v.value&&t.preventDefault()}function K(t){Y(t)}const Q=S(!1);function o(t){if(t.key==="Backspace"&&!Q.value&&!e.pattern.length){const{selectedOptions:c}=e;c!=null&&c.length&&K(c[c.length-1])}}let u=null;function $(t){const{value:c}=f;if(c){const E=t.target.value;c.textContent=E,q()}e.ignoreComposition&&Q.value?u=t:I(t)}function le(){Q.value=!0}function we(){Q.value=!1,e.ignoreComposition&&I(u),u=null}function ye(t){var c;_.value=!0,(c=e.onPatternFocus)===null||c===void 0||c.call(e,t)}function ie(t){var c;_.value=!1,(c=e.onPatternBlur)===null||c===void 0||c.call(e,t)}function H(){var t,c;if(e.filterable)_.value=!1,(t=A.value)===null||t===void 0||t.blur(),(c=v.value)===null||c===void 0||c.blur();else if(e.multiple){const{value:E}=r;E==null||E.blur()}else{const{value:E}=z;E==null||E.blur()}}function xe(){var t,c,E;e.filterable?(_.value=!1,(t=A.value)===null||t===void 0||t.focus()):e.multiple?(c=r.value)===null||c===void 0||c.focus():(E=z.value)===null||E===void 0||E.focus()}function ae(){const{value:t}=v;t&&(de(),t.focus())}function Re(){const{value:t}=v;t&&t.blur()}function Te(t){const{value:c}=O;c&&c.setTextContent(`+${t}`)}function Me(){const{value:t}=N;return t}function Pe(){return v.value}let fe=null;function he(){fe!==null&&window.clearTimeout(fe)}function ze(){e.active||(he(),fe=window.setTimeout(()=>{B.value&&(w.value=!0)},100))}function ke(){he()}function _e(t){t||(he(),w.value=!1)}be(B,t=>{t||(w.value=!1)}),Xe(()=>{lt(()=>{const t=A.value;t&&(e.disabled?t.removeAttribute("tabindex"):t.tabIndex=_.value?-1:0)})}),mn(h,e.onResize);const{inlineThemeDisabled:Ce}=e,ve=P(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:c},self:{fontWeight:E,borderRadius:je,color:We,placeholderColor:$e,textColor:Ae,paddingSingle:Ee,paddingMultiple:Ke,caretColor:He,colorDisabled:Ne,textColorDisabled:se,placeholderColorDisabled:n,colorActive:l,boxShadowFocus:g,boxShadowActive:y,boxShadowHover:p,border:b,borderFocus:m,borderHover:L,borderActive:X,arrowColor:yn,arrowColorDisabled:xn,loadingColor:Cn,colorActiveWarning:On,boxShadowFocusWarning:Fn,boxShadowActiveWarning:Sn,boxShadowHoverWarning:Rn,borderWarning:Tn,borderFocusWarning:Mn,borderHoverWarning:Pn,borderActiveWarning:zn,colorActiveError:kn,boxShadowFocusError:_n,boxShadowActiveError:Bn,boxShadowHoverError:In,borderError:$n,borderFocusError:An,borderHoverError:En,borderActiveError:Nn,clearColor:Dn,clearColorHover:Ln,clearColorPressed:Vn,clearSize:jn,arrowSize:Wn,[ge("height",t)]:Kn,[ge("fontSize",t)]:Hn}}=T.value,De=Be(Ee),Le=Be(Ke);return{"--n-bezier":c,"--n-border":b,"--n-border-active":X,"--n-border-focus":m,"--n-border-hover":L,"--n-border-radius":je,"--n-box-shadow-active":y,"--n-box-shadow-focus":g,"--n-box-shadow-hover":p,"--n-caret-color":He,"--n-color":We,"--n-color-active":l,"--n-color-disabled":Ne,"--n-font-size":Hn,"--n-height":Kn,"--n-padding-single-top":De.top,"--n-padding-multiple-top":Le.top,"--n-padding-single-right":De.right,"--n-padding-multiple-right":Le.right,"--n-padding-single-left":De.left,"--n-padding-multiple-left":Le.left,"--n-padding-single-bottom":De.bottom,"--n-padding-multiple-bottom":Le.bottom,"--n-placeholder-color":$e,"--n-placeholder-color-disabled":n,"--n-text-color":Ae,"--n-text-color-disabled":se,"--n-arrow-color":yn,"--n-arrow-color-disabled":xn,"--n-loading-color":Cn,"--n-color-active-warning":On,"--n-box-shadow-focus-warning":Fn,"--n-box-shadow-active-warning":Sn,"--n-box-shadow-hover-warning":Rn,"--n-border-warning":Tn,"--n-border-focus-warning":Mn,"--n-border-hover-warning":Pn,"--n-border-active-warning":zn,"--n-color-active-error":kn,"--n-box-shadow-focus-error":_n,"--n-box-shadow-active-error":Bn,"--n-box-shadow-hover-error":In,"--n-border-error":$n,"--n-border-focus-error":An,"--n-border-hover-error":En,"--n-border-active-error":Nn,"--n-clear-size":jn,"--n-clear-color":Dn,"--n-clear-color-hover":Ln,"--n-clear-color-pressed":Vn,"--n-arrow-size":Wn,"--n-font-weight":E}}),V=Ce?tn("internal-selection",P(()=>e.size[0]),ve,e):void 0;return{mergedTheme:T,mergedClearable:F,mergedClsPrefix:a,rtlEnabled:d,patternInputFocused:_,filterablePlaceholder:k,label:D,selected:B,showTagsPanel:w,isComposing:Q,counterRef:O,counterWrapperRef:N,patternInputMirrorRef:f,patternInputRef:v,selfRef:h,multipleElRef:r,singleElRef:z,patternInputWrapperRef:A,overflowRef:R,inputTagElRef:C,handleMouseDown:me,handleFocusin:Z,handleClear:re,handleMouseEnter:Se,handleMouseLeave:oe,handleDeleteOption:K,handlePatternKeyDown:o,handlePatternInputInput:$,handlePatternInputBlur:ie,handlePatternInputFocus:ye,handleMouseEnterCounter:ze,handleMouseLeaveCounter:ke,handleFocusout:ce,handleCompositionEnd:we,handleCompositionStart:le,onPopoverUpdateShow:_e,focus:xe,focusInput:ae,blur:H,blurInput:Re,updateCounter:Te,getCounter:Me,getTail:Pe,renderLabel:e.renderLabel,cssVars:Ce?void 0:ve,themeClass:V==null?void 0:V.themeClass,onRender:V==null?void 0:V.onRender}},render(){const{status:e,multiple:a,size:s,disabled:d,filterable:f,maxTagCount:v,bordered:h,clsPrefix:r,ellipsisTagPopoverProps:z,onRender:A,renderTag:O,renderLabel:N}=this;A==null||A();const R=v==="responsive",C=typeof v=="number",w=R||C,_=i(et,null,{default:()=>i(pt,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var T,F;return(F=(T=this.$slots).arrow)===null||F===void 0?void 0:F.call(T)}})});let W;if(a){const{labelField:T}=this,F=I=>i("div",{class:`${r}-base-selection-tag-wrapper`,key:I.value},O?O({option:I,handleClose:()=>{this.handleDeleteOption(I)}}):i(qe,{size:s,closable:!I.disabled,disabled:d,onClose:()=>{this.handleDeleteOption(I)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>N?N(I,!0):Oe(I[T],I,!0)})),k=()=>(C?this.selectedOptions.slice(0,v):this.selectedOptions).map(F),D=f?i("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:d,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),i("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,B=R?()=>i("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},i(qe,{size:s,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:d})):void 0;let q;if(C){const I=this.selectedOptions.length-v;I>0&&(q=i("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},i(qe,{size:s,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:d},{default:()=>`+${I}`})))}const G=R?f?i(rn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:k,counter:B,tail:()=>D}):i(rn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:k,counter:B}):C&&q?k().concat(q):k(),de=w?()=>i("div",{class:`${r}-base-selection-popover`},R?k():this.selectedOptions.map(F)):void 0,ue=w?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},z):null,Y=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},i("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,te=f?i("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},G,R?null:D,_):i("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:d?void 0:0},G,_);W=i(nt,null,w?i(tt,Object.assign({},ue,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>te,default:de}):te,Y)}else if(f){const T=this.pattern||this.isComposing,F=this.active?!T:!this.selected,k=this.active?!1:this.selected;W=i("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`,title:this.patternInputFocused?void 0:dn(this.label)},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:d,disabled:d,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),k?i("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},i("div",{class:`${r}-base-selection-overlay__wrapper`},O?O({option:this.selectedOption,handleClose:()=>{}}):N?N(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):null,F?i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,_)}else W=i("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?i("div",{class:`${r}-base-selection-input`,title:dn(this.label),key:"input"},i("div",{class:`${r}-base-selection-input__content`},O?O({option:this.selectedOption,handleClose:()=>{}}):N?N(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),_);return i("div",{ref:"selfRef",class:[`${r}-base-selection`,this.rtlEnabled&&`${r}-base-selection--rtl`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},W,h?i("div",{class:`${r}-base-selection__border`}):null,h?i("div",{class:`${r}-base-selection__state-border`}):null)}});function Ve(e){return e.type==="group"}function wn(e){return e.type==="ignored"}function Ye(e,a){try{return!!(1+a.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Mt(e,a){return{getIsGroup:Ve,getIgnored:wn,getKey(d){return Ve(d)?d.name||d.key||"key-required":d[e]},getChildren(d){return d[a]}}}function Pt(e,a,s,d){if(!a)return e;function f(v){if(!Array.isArray(v))return[];const h=[];for(const r of v)if(Ve(r)){const z=f(r[d]);z.length&&h.push(Object.assign({},r,{[d]:z}))}else{if(wn(r))continue;a(s,r)&&h.push(r)}return h}return f(e)}function zt(e,a,s){const d=new Map;return e.forEach(f=>{Ve(f)?f[s].forEach(v=>{d.set(v[a],v)}):d.set(f[a],f)}),d}const kt=ne([x("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),x("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[gn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),_t=Object.assign(Object.assign({},Fe.props),{to:Qe.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Nt=pe({name:"Select",props:_t,slots:Object,setup(e){const{mergedClsPrefixRef:a,mergedBorderedRef:s,namespaceRef:d,inlineThemeDisabled:f}=nn(e),v=Fe("Select","-select",kt,ut,e,a),h=S(e.defaultValue),r=j(e,"value"),z=sn(r,h),A=S(!1),O=S(""),N=ct(e,["items","options"]),R=S([]),C=S([]),w=P(()=>C.value.concat(R.value).concat(N.value)),_=P(()=>{const{filter:n}=e;if(n)return n;const{labelField:l,valueField:g}=e;return(y,p)=>{if(!p)return!1;const b=p[l];if(typeof b=="string")return Ye(y,b);const m=p[g];return typeof m=="string"?Ye(y,m):typeof m=="number"?Ye(y,String(m)):!1}}),W=P(()=>{if(e.remote)return N.value;{const{value:n}=w,{value:l}=O;return!l.length||!e.filterable?n:Pt(n,_.value,l,e.childrenField)}}),T=P(()=>{const{valueField:n,childrenField:l}=e,g=Mt(n,l);return ft(W.value,g)}),F=P(()=>zt(w.value,e.valueField,e.childrenField)),k=S(!1),D=sn(j(e,"show"),k),B=S(null),q=S(null),G=S(null),{localeRef:de}=yt("Select"),ue=P(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:de.value.placeholder}),J=[],Y=S(new Map),te=P(()=>{const{fallbackOption:n}=e;if(n===void 0){const{labelField:l,valueField:g}=e;return y=>({[l]:String(y),[g]:y})}return n===!1?!1:l=>Object.assign(n(l),{value:l})});function I(n){const l=e.remote,{value:g}=Y,{value:y}=F,{value:p}=te,b=[];return n.forEach(m=>{if(y.has(m))b.push(y.get(m));else if(l&&g.has(m))b.push(g.get(m));else if(p){const L=p(m);L&&b.push(L)}}),b}const Z=P(()=>{if(e.multiple){const{value:n}=z;return Array.isArray(n)?I(n):[]}return null}),ce=P(()=>{const{value:n}=z;return!e.multiple&&!Array.isArray(n)?n===null?null:I([n])[0]||null:null}),re=ht(e),{mergedSizeRef:Se,mergedDisabledRef:oe,mergedStatusRef:me}=re;function K(n,l){const{onChange:g,"onUpdate:value":y,onUpdateValue:p}=e,{nTriggerFormChange:b,nTriggerFormInput:m}=re;g&&ee(g,n,l),p&&ee(p,n,l),y&&ee(y,n,l),h.value=n,b(),m()}function Q(n){const{onBlur:l}=e,{nTriggerFormBlur:g}=re;l&&ee(l,n),g()}function o(){const{onClear:n}=e;n&&ee(n)}function u(n){const{onFocus:l,showOnFocus:g}=e,{nTriggerFormFocus:y}=re;l&&ee(l,n),y(),g&&ie()}function $(n){const{onSearch:l}=e;l&&ee(l,n)}function le(n){const{onScroll:l}=e;l&&ee(l,n)}function we(){var n;const{remote:l,multiple:g}=e;if(l){const{value:y}=Y;if(g){const{valueField:p}=e;(n=Z.value)===null||n===void 0||n.forEach(b=>{y.set(b[p],b)})}else{const p=ce.value;p&&y.set(p[e.valueField],p)}}}function ye(n){const{onUpdateShow:l,"onUpdate:show":g}=e;l&&ee(l,n),g&&ee(g,n),k.value=n}function ie(){oe.value||(ye(!0),k.value=!0,e.filterable&&Ee())}function H(){ye(!1)}function xe(){O.value="",C.value=J}const ae=S(!1);function Re(){e.filterable&&(ae.value=!0)}function Te(){e.filterable&&(ae.value=!1,D.value||xe())}function Me(){oe.value||(D.value?e.filterable?Ee():H():ie())}function Pe(n){var l,g;!((g=(l=G.value)===null||l===void 0?void 0:l.selfRef)===null||g===void 0)&&g.contains(n.relatedTarget)||(A.value=!1,Q(n),H())}function fe(n){u(n),A.value=!0}function he(){A.value=!0}function ze(n){var l;!((l=B.value)===null||l===void 0)&&l.$el.contains(n.relatedTarget)||(A.value=!1,Q(n),H())}function ke(){var n;(n=B.value)===null||n===void 0||n.focus(),H()}function _e(n){var l;D.value&&(!((l=B.value)===null||l===void 0)&&l.$el.contains(gt(n))||H())}function Ce(n){if(!Array.isArray(n))return[];if(te.value)return Array.from(n);{const{remote:l}=e,{value:g}=F;if(l){const{value:y}=Y;return n.filter(p=>g.has(p)||y.has(p))}else return n.filter(y=>g.has(y))}}function ve(n){V(n.rawNode)}function V(n){if(oe.value)return;const{tag:l,remote:g,clearFilterAfterSelect:y,valueField:p}=e;if(l&&!g){const{value:b}=C,m=b[0]||null;if(m){const L=R.value;L.length?L.push(m):R.value=[m],C.value=J}}if(g&&Y.value.set(n[p],n),e.multiple){const b=Ce(z.value),m=b.findIndex(L=>L===n[p]);if(~m){if(b.splice(m,1),l&&!g){const L=t(n[p]);~L&&(R.value.splice(L,1),y&&(O.value=""))}}else b.push(n[p]),y&&(O.value="");K(b,I(b))}else{if(l&&!g){const b=t(n[p]);~b?R.value=[R.value[b]]:R.value=J}Ae(),H(),K(n[p],n)}}function t(n){return R.value.findIndex(g=>g[e.valueField]===n)}function c(n){D.value||ie();const{value:l}=n.target;O.value=l;const{tag:g,remote:y}=e;if($(l),g&&!y){if(!l){C.value=J;return}const{onCreate:p}=e,b=p?p(l):{[e.labelField]:l,[e.valueField]:l},{valueField:m,labelField:L}=e;N.value.some(X=>X[m]===b[m]||X[L]===b[L])||R.value.some(X=>X[m]===b[m]||X[L]===b[L])?C.value=J:C.value=[b]}}function E(n){n.stopPropagation();const{multiple:l}=e;!l&&e.filterable&&H(),o(),l?K([],[]):K(null,null)}function je(n){!Ie(n,"action")&&!Ie(n,"empty")&&!Ie(n,"header")&&n.preventDefault()}function We(n){le(n)}function $e(n){var l,g,y,p,b;if(!e.keyboard){n.preventDefault();return}switch(n.key){case" ":if(e.filterable)break;n.preventDefault();case"Enter":if(!(!((l=B.value)===null||l===void 0)&&l.isComposing)){if(D.value){const m=(g=G.value)===null||g===void 0?void 0:g.getPendingTmNode();m?ve(m):e.filterable||(H(),Ae())}else if(ie(),e.tag&&ae.value){const m=C.value[0];if(m){const L=m[e.valueField],{value:X}=z;e.multiple&&Array.isArray(X)&&X.includes(L)||V(m)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;D.value&&((y=G.value)===null||y===void 0||y.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;D.value?(p=G.value)===null||p===void 0||p.next():ie();break;case"Escape":D.value&&(bt(n),H()),(b=B.value)===null||b===void 0||b.focus();break}}function Ae(){var n;(n=B.value)===null||n===void 0||n.focus()}function Ee(){var n;(n=B.value)===null||n===void 0||n.focusInput()}function Ke(){var n;D.value&&((n=q.value)===null||n===void 0||n.syncPosition())}we(),be(j(e,"options"),we);const He={focus:()=>{var n;(n=B.value)===null||n===void 0||n.focus()},focusInput:()=>{var n;(n=B.value)===null||n===void 0||n.focusInput()},blur:()=>{var n;(n=B.value)===null||n===void 0||n.blur()},blurInput:()=>{var n;(n=B.value)===null||n===void 0||n.blurInput()}},Ne=P(()=>{const{self:{menuBoxShadow:n}}=v.value;return{"--n-menu-box-shadow":n}}),se=f?tn("select",void 0,Ne,e):void 0;return Object.assign(Object.assign({},He),{mergedStatus:me,mergedClsPrefix:a,mergedBordered:s,namespace:d,treeMate:T,isMounted:vt(),triggerRef:B,menuRef:G,pattern:O,uncontrolledShow:k,mergedShow:D,adjustedTo:Qe(e),uncontrolledValue:h,mergedValue:z,followerRef:q,localizedPlaceholder:ue,selectedOption:ce,selectedOptions:Z,mergedSize:Se,mergedDisabled:oe,focused:A,activeWithoutMenuOpen:ae,inlineThemeDisabled:f,onTriggerInputFocus:Re,onTriggerInputBlur:Te,handleTriggerOrMenuResize:Ke,handleMenuFocus:he,handleMenuBlur:ze,handleMenuTabOut:ke,handleTriggerClick:Me,handleToggle:ve,handleDeleteOption:V,handlePatternInput:c,handleClear:E,handleTriggerBlur:Pe,handleTriggerFocus:fe,handleKeydown:$e,handleMenuAfterLeave:xe,handleMenuClickOutside:_e,handleMenuScroll:We,handleMenuKeydown:$e,handleMenuMousedown:je,mergedTheme:v,cssVars:f?void 0:Ne,themeClass:se==null?void 0:se.themeClass,onRender:se==null?void 0:se.onRender})},render(){return i("div",{class:`${this.mergedClsPrefix}-select`},i(it,null,{default:()=>[i(rt,null,{default:()=>i(Tt,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,a;return[(a=(e=this.$slots).arrow)===null||a===void 0?void 0:a.call(e)]}})}),i(at,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Qe.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>i(vn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,a,s;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),st(i(St,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(a=this.menuProps)===null||a===void 0?void 0:a.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(s=this.menuProps)===null||s===void 0?void 0:s.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var d,f;return[(f=(d=this.$slots).empty)===null||f===void 0?void 0:f.call(d)]},header:()=>{var d,f;return[(f=(d=this.$slots).header)===null||f===void 0?void 0:f.call(d)]},action:()=>{var d,f;return[(f=(d=this.$slots).action)===null||f===void 0?void 0:f.call(d)]}}),this.displayDirective==="show"?[[dt,this.mergedShow],[an,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[an,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Nt as N};
