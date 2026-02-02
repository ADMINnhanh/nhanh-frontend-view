import{I,j as a,aj as rt,ak as lt,k as g,J as K,bO as xe,aJ as it,d as F,l as f,bP as st,bQ as dt,C as ct,bR as ut,bS as ie,aQ as ht,m as vt,L as Me,dg as ft,p as C,bg as mt,g as y,y as bt,aR as gt,A as se,s as Te,N as ye,bV as wt,bl as Y,aW as q,aX as W,G as ae,c as G,o as P,W as S,df as pt,ah as Ce,az as kt,Z as xt,af as yt,b as D,u as k,B as re,w as le,bq as Ct,a3 as Re,P as Rt,at as zt,_ as St}from"./index-1AQuBEyl.js";const Mt=I([a("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[g("reverse",[a("slider-handles",[a("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),a("slider-dots",[a("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),g("vertical",[a("slider-handles",[a("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),a("slider-marks",[a("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),a("slider-dots",[a("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),g("vertical",`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[a("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[a("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),a("slider-rail",`
 height: 100%;
 `,[K("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),g("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),a("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[a("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),a("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[a("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),g("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[a("slider-handle",`
 cursor: not-allowed;
 `)]),g("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),I("&:hover",[a("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[K("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),a("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),g("active",[a("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[K("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),a("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),a("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[a("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),a("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[K("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),a("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[a("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[a("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[I("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),I("&:focus",[a("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[I("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),a("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[g("transition-disabled",[a("slider-dot","transition: none;")]),a("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[g("active","border: var(--n-dot-border-active);")])])]),a("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[xe()]),a("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[g("top",`
 margin-bottom: 12px;
 `),g("right",`
 margin-left: 12px;
 `),g("bottom",`
 margin-top: 12px;
 `),g("left",`
 margin-right: 12px;
 `),xe()]),rt(a("slider",[a("slider-dot","background-color: var(--n-dot-color-modal);")])),lt(a("slider",[a("slider-dot","background-color: var(--n-dot-color-popover);")]))]);function ze(o){return window.TouchEvent&&o instanceof window.TouchEvent}function Se(){const o=new Map,l=h=>m=>{o.set(h,m)};return it(()=>{o.clear()}),[o,l]}const Tt=0,$t=Object.assign(Object.assign({},Me.props),{to:ie.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),Vt=F({name:"Slider",props:$t,slots:Object,setup(o){const{mergedClsPrefixRef:l,namespaceRef:h,inlineThemeDisabled:m}=vt(o),s=Me("Slider","-slider",Mt,ft,o,l),d=C(null),[M,b]=Se(),[R,_]=Se(),O=C(new Set),de=mt(o),{mergedDisabledRef:H}=de,ce=y(()=>{const{step:e}=o;if(Number(e)<=0||e==="mark")return 0;const t=e.toString();let n=0;return t.includes(".")&&(n=t.length-t.indexOf(".")-1),n}),J=C(o.defaultValue),$e=bt(o,"value"),Q=gt($e,J),w=y(()=>{const{value:e}=Q;return(o.range?e:[e]).map(ge)}),ue=y(()=>w.value.length>2),Ve=y(()=>o.placement===void 0?o.vertical?"right":"top":o.placement),he=y(()=>{const{marks:e}=o;return e?Object.keys(e).map(Number.parseFloat):null}),p=C(-1),ve=C(-1),T=C(-1),$=C(!1),N=C(!1),Z=y(()=>{const{vertical:e,reverse:t}=o;return e?t?"top":"bottom":t?"right":"left"}),Be=y(()=>{if(ue.value)return;const e=w.value,t=A(o.range?Math.min(...e):o.min),n=A(o.range?Math.max(...e):e[0]),{value:r}=Z;return o.vertical?{[r]:`${t}%`,height:`${n-t}%`}:{[r]:`${t}%`,width:`${n-t}%`}}),De=y(()=>{const e=[],{marks:t}=o;if(t){const n=w.value.slice();n.sort((v,u)=>v-u);const{value:r}=Z,{value:i}=ue,{range:c}=o,x=i?()=>!1:v=>c?v>=n[0]&&v<=n[n.length-1]:v<=n[0];for(const v of Object.keys(t)){const u=Number(v);e.push({active:x(u),key:u,label:t[v],style:{[r]:`${A(u)}%`}})}}return e});function _e(e,t){const n=A(e),{value:r}=Z;return{[r]:`${n}%`,zIndex:t===p.value?1:0}}function fe(e){return o.showTooltip||T.value===e||p.value===e&&$.value}function Ie(e){return $.value?!(p.value===e&&ve.value===e):!0}function Pe(e){var t;~e&&(p.value=e,(t=M.get(e))===null||t===void 0||t.focus())}function Fe(){R.forEach((e,t)=>{fe(t)&&e.syncPosition()})}function me(e){const{"onUpdate:value":t,onUpdateValue:n}=o,{nTriggerFormInput:r,nTriggerFormChange:i}=de;n&&Y(n,e),t&&Y(t,e),J.value=e,r(),i()}function be(e){const{range:t}=o;if(t){if(Array.isArray(e)){const{value:n}=w;e.join()!==n.join()&&me(e)}}else Array.isArray(e)||w.value[0]!==e&&me(e)}function ee(e,t){if(o.range){const n=w.value.slice();n.splice(t,1,e),be(n)}else be(e)}function te(e,t,n){const r=n!==void 0;n||(n=e-t>0?1:-1);const i=he.value||[],{step:c}=o;if(c==="mark"){const u=E(e,i.concat(t),r?n:void 0);return u?u.value:t}if(c<=0)return t;const{value:x}=ce;let v;if(r){const u=Number((t/c).toFixed(x)),z=Math.floor(u),oe=u>z?z:z-1,ne=u<z?z:z+1;v=E(t,[Number((oe*c).toFixed(x)),Number((ne*c).toFixed(x)),...i],n)}else{const u=He(e);v=E(e,[...i,u])}return v?ge(v.value):t}function ge(e){return Math.min(o.max,Math.max(o.min,e))}function A(e){const{max:t,min:n}=o;return(e-n)/(t-n)*100}function Oe(e){const{max:t,min:n}=o;return n+(t-n)*e}function He(e){const{step:t,min:n}=o;if(Number(t)<=0||t==="mark")return e;const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(ce.value))}function E(e,t=he.value,n){if(!(t!=null&&t.length))return null;let r=null,i=-1;for(;++i<t.length;){const c=t[i]-e,x=Math.abs(c);(n===void 0||c*n>0)&&(r===null||x<r.distance)&&(r={index:i,distance:x,value:t[i]})}return r}function we(e){const t=d.value;if(!t)return;const n=ze(e)?e.touches[0]:e,r=t.getBoundingClientRect();let i;return o.vertical?i=(r.bottom-n.clientY)/r.height:i=(n.clientX-r.left)/r.width,o.reverse&&(i=1-i),Oe(i)}function Ne(e){if(H.value||!o.keyboard)return;const{vertical:t,reverse:n}=o;switch(e.key){case"ArrowUp":e.preventDefault(),j(t&&n?-1:1);break;case"ArrowRight":e.preventDefault(),j(!t&&n?-1:1);break;case"ArrowDown":e.preventDefault(),j(t&&n?1:-1);break;case"ArrowLeft":e.preventDefault(),j(!t&&n?1:-1);break}}function j(e){const t=p.value;if(t===-1)return;const{step:n}=o,r=w.value[t],i=Number(n)<=0||n==="mark"?r:r+n*e;ee(te(i,r,e>0?1:-1),t)}function Ae(e){var t,n;if(H.value||!ze(e)&&e.button!==Tt)return;const r=we(e);if(r===void 0)return;const i=w.value.slice(),c=o.range?(n=(t=E(r,i))===null||t===void 0?void 0:t.index)!==null&&n!==void 0?n:-1:0;c!==-1&&(e.preventDefault(),Pe(c),Ee(),ee(te(r,w.value[c]),c))}function Ee(){$.value||($.value=!0,o.onDragstart&&Y(o.onDragstart),q("touchend",document,X),q("mouseup",document,X),q("touchmove",document,L),q("mousemove",document,L))}function U(){$.value&&($.value=!1,o.onDragend&&Y(o.onDragend),W("touchend",document,X),W("mouseup",document,X),W("touchmove",document,L),W("mousemove",document,L))}function L(e){const{value:t}=p;if(!$.value||t===-1){U();return}const n=we(e);n!==void 0&&ee(te(n,w.value[t]),t)}function X(){U()}function je(e){p.value=e,H.value||(T.value=e)}function Ue(e){p.value===e&&(p.value=-1,U()),T.value===e&&(T.value=-1)}function Le(e){T.value=e}function Xe(e){T.value===e&&(T.value=-1)}se(p,(e,t)=>void ae(()=>ve.value=t)),se(Q,()=>{if(o.marks){if(N.value)return;N.value=!0,ae(()=>{N.value=!1})}ae(Fe)}),Te(()=>{U()});const pe=y(()=>{const{self:{markFontSize:e,railColor:t,railColorHover:n,fillColor:r,fillColorHover:i,handleColor:c,opacityDisabled:x,dotColor:v,dotColorModal:u,handleBoxShadow:z,handleBoxShadowHover:oe,handleBoxShadowActive:ne,handleBoxShadowFocus:Ke,dotBorder:Ye,dotBoxShadow:qe,railHeight:We,railWidthVertical:Ge,handleSize:Je,dotHeight:Qe,dotWidth:Ze,dotBorderRadius:et,fontSize:tt,dotBorderActive:ot,dotColorPopover:nt},common:{cubicBezierEaseInOut:at}}=s.value;return{"--n-bezier":at,"--n-dot-border":Ye,"--n-dot-border-active":ot,"--n-dot-border-radius":et,"--n-dot-box-shadow":qe,"--n-dot-color":v,"--n-dot-color-modal":u,"--n-dot-color-popover":nt,"--n-dot-height":Qe,"--n-dot-width":Ze,"--n-fill-color":r,"--n-fill-color-hover":i,"--n-font-size":tt,"--n-handle-box-shadow":z,"--n-handle-box-shadow-active":ne,"--n-handle-box-shadow-focus":Ke,"--n-handle-box-shadow-hover":oe,"--n-handle-color":c,"--n-handle-size":Je,"--n-opacity-disabled":x,"--n-rail-color":t,"--n-rail-color-hover":n,"--n-rail-height":We,"--n-rail-width-vertical":Ge,"--n-mark-font-size":e}}),V=m?ye("slider",void 0,pe,o):void 0,ke=y(()=>{const{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:n,indicatorTextColor:r,indicatorBorderRadius:i}}=s.value;return{"--n-font-size":e,"--n-indicator-border-radius":i,"--n-indicator-box-shadow":n,"--n-indicator-color":t,"--n-indicator-text-color":r}}),B=m?ye("slider-indicator",void 0,ke,o):void 0;return{mergedClsPrefix:l,namespace:h,uncontrolledValue:J,mergedValue:Q,mergedDisabled:H,mergedPlacement:Ve,isMounted:wt(),adjustedTo:ie(o),dotTransitionDisabled:N,markInfos:De,isShowTooltip:fe,shouldKeepTooltipTransition:Ie,handleRailRef:d,setHandleRefs:b,setFollowerRefs:_,fillStyle:Be,getHandleStyle:_e,activeIndex:p,arrifiedValues:w,followerEnabledIndexSet:O,handleRailMouseDown:Ae,handleHandleFocus:je,handleHandleBlur:Ue,handleHandleMouseEnter:Le,handleHandleMouseLeave:Xe,handleRailKeyDown:Ne,indicatorCssVars:m?void 0:ke,indicatorThemeClass:B==null?void 0:B.themeClass,indicatorOnRender:B==null?void 0:B.onRender,cssVars:m?void 0:pe,themeClass:V==null?void 0:V.themeClass,onRender:V==null?void 0:V.onRender}},render(){var o;const{mergedClsPrefix:l,themeClass:h,formatTooltip:m}=this;return(o=this.onRender)===null||o===void 0||o.call(this),f("div",{class:[`${l}-slider`,h,{[`${l}-slider--disabled`]:this.mergedDisabled,[`${l}-slider--active`]:this.activeIndex!==-1,[`${l}-slider--with-mark`]:this.marks,[`${l}-slider--vertical`]:this.vertical,[`${l}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},f("div",{class:`${l}-slider-rail`},f("div",{class:`${l}-slider-rail__fill`,style:this.fillStyle}),this.marks?f("div",{class:[`${l}-slider-dots`,this.dotTransitionDisabled&&`${l}-slider-dots--transition-disabled`]},this.markInfos.map(s=>f("div",{key:s.key,class:[`${l}-slider-dot`,{[`${l}-slider-dot--active`]:s.active}],style:s.style}))):null,f("div",{ref:"handleRailRef",class:`${l}-slider-handles`},this.arrifiedValues.map((s,d)=>{const M=this.isShowTooltip(d);return f(st,null,{default:()=>[f(dt,null,{default:()=>f("div",{ref:this.setHandleRefs(d),class:`${l}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":s,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(s,d),onFocus:()=>{this.handleHandleFocus(d)},onBlur:()=>{this.handleHandleBlur(d)},onMouseenter:()=>{this.handleHandleMouseEnter(d)},onMouseleave:()=>{this.handleHandleMouseLeave(d)}},ct(this.$slots.thumb,()=>[f("div",{class:`${l}-slider-handle`})]))}),this.tooltip&&f(ut,{ref:this.setFollowerRefs(d),show:M,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(d),teleportDisabled:this.adjustedTo===ie.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>f(ht,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(d),onEnter:()=>{this.followerEnabledIndexSet.add(d)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(d)}},{default:()=>{var b;return M?((b=this.indicatorOnRender)===null||b===void 0||b.call(this),f("div",{class:[`${l}-slider-handle-indicator`,this.indicatorThemeClass,`${l}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof m=="function"?m(s):s)):null}})})]})})),this.marks?f("div",{class:`${l}-slider-marks`},this.markInfos.map(s=>f("div",{key:s.key,class:`${l}-slider-mark`,style:s.style},typeof s.label=="function"?s.label():s.label))):null))}}),Bt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Dt=S("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),_t=S("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M208 192v128"},null,-1),It=S("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M304 192v128"},null,-1),Pt=[Dt,_t,It],Ft=F({name:"PauseCircleOutline",render:function(l,h){return P(),G("svg",Bt,Pt)}}),Ot={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ht=S("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Nt=S("path",{d:"M216.32 334.44l114.45-69.14a10.89 10.89 0 0 0 0-18.6l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31z",fill:"currentColor"},null,-1),At=[Ht,Nt],Et=F({name:"PlayCircleOutline",render:function(l,h){return P(),G("svg",Ot,At)}}),jt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ut=S("path",{d:"M288 193s12.18-6-32-6a80 80 0 1 0 80 80",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"28"},null,-1),Lt=S("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"28",d:"M256 149l40 40l-40 40"},null,-1),Xt=S("path",{d:"M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Kt=[Ut,Lt,Xt],Yt=F({name:"RefreshCircleOutline",render:function(l,h){return P(),G("svg",jt,Kt)}}),qt=F({__name:"Oscillator",props:{canvas:{},value:{},marks:{},min:{default:0},max:{default:100},step:{},disabled:{type:Boolean},reverse:{type:Boolean},Tips:{}},emits:["update:value","change"],setup(o,{emit:l}){const h=o,m=l,s=C(!1),d=pt(h.min,h.max,300,b=>{m("update:value",b),m("change")});Ce.value.fpsCallback(b=>{d.updateParams(h.min,h.max,b/60*300)});function M(){s.value=!s.value,s.value?d.play(h.value):d.pause()}return se(()=>h.disabled,b=>{b&&s.value&&M()}),Te(()=>{d.pause()}),(b,R)=>(P(),G("div",{class:zt(["oscillator",o.disabled&&"disabled"])},[kt(b.$slots,"default",{},void 0,!0),o.Tips?(P(),xt(k(re),{key:0,quaternary:"",circle:"",type:"success",style:{"font-size":"24px"},onClick:o.Tips},{default:le(()=>[D(k(Ct),{icon:"Bulb"})]),_:1},8,["onClick"])):yt("",!0),D(k(re),{quaternary:"",circle:"",style:{"font-size":"24px"},onClick:R[0]||(R[0]=_=>{var O;return(O=o.canvas)==null?void 0:O.returnToOrigin()})},{default:le(()=>[D(k(Re),{component:k(Yt)},null,8,["component"])]),_:1}),D(k(re),{quaternary:"",circle:"",type:s.value?"primary":"default",style:{"font-size":"24px"},onClick:R[1]||(R[1]=_=>M())},{default:le(()=>[D(k(Re),{component:s.value?k(Ft):k(Et)},null,8,["component"])]),_:1},8,["type"]),D(k(Vt),Rt({"onUpdate:value":R[2]||(R[2]=_=>{m("update:value",_),m("change")})},{value:o.value,marks:o.marks,min:o.min,max:o.max,step:o.step,reverse:o.reverse},{vertical:!k(Ce).isMobileStyle}),null,16,["vertical"])],2))}}),Gt=St(qt,[["__scopeId","data-v-83544455"]]);export{Gt as O};
