import{I as D,j as n,aj as We,ak as Je,k as v,J as N,bW as de,aJ as Ge,d as Qe,l as f,bX as Ze,bY as qe,C as et,bZ as tt,b_ as G,aQ as ot,m as at,L as ve,da as nt,p as k,c0 as rt,g as w,y as it,aR as lt,A as ce,s as st,N as ue,c2 as dt,b2 as j,aW as P,aX as U,G as J}from"./index-CWGjrrMU.js";const ct=D([n("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[v("reverse",[n("slider-handles",[n("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),n("slider-dots",[n("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),v("vertical",[n("slider-handles",[n("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),n("slider-marks",[n("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),n("slider-dots",[n("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),v("vertical",`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[n("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[n("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),n("slider-rail",`
 height: 100%;
 `,[N("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),v("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),n("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[n("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),n("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[n("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),v("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[n("slider-handle",`
 cursor: not-allowed;
 `)]),v("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),D("&:hover",[n("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[N("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),n("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),v("active",[n("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[N("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),n("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),n("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[n("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),n("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[N("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),n("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[n("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[n("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[D("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),D("&:focus",[n("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[D("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),n("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[v("transition-disabled",[n("slider-dot","transition: none;")]),n("slider-dot",`
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
 `,[v("active","border: var(--n-dot-border-active);")])])]),n("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[de()]),n("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[v("top",`
 margin-bottom: 12px;
 `),v("right",`
 margin-left: 12px;
 `),v("bottom",`
 margin-top: 12px;
 `),v("left",`
 margin-right: 12px;
 `),de()]),We(n("slider",[n("slider-dot","background-color: var(--n-dot-color-modal);")])),Je(n("slider",[n("slider-dot","background-color: var(--n-dot-color-popover);")]))]);function he(a){return window.TouchEvent&&a instanceof window.TouchEvent}function fe(){const a=new Map,l=T=>p=>{a.set(T,p)};return Ge(()=>{a.clear()}),[a,l]}const ut=0,ht=Object.assign(Object.assign({},ve.props),{to:G.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),vt=Qe({name:"Slider",props:ht,slots:Object,setup(a){const{mergedClsPrefixRef:l,namespaceRef:T,inlineThemeDisabled:p}=at(a),s=ve("Slider","-slider",ct,nt,a,l),u=k(null),[M,C]=fe(),[me,be]=fe(),ge=k(new Set),Q=rt(a),{mergedDisabledRef:V}=Q,Z=w(()=>{const{step:e}=a;if(Number(e)<=0||e==="mark")return 0;const t=e.toString();let o=0;return t.includes(".")&&(o=t.length-t.indexOf(".")-1),o}),O=k(a.defaultValue),we=it(a,"value"),_=lt(we,O),m=w(()=>{const{value:e}=_;return(a.range?e:[e]).map(re)}),q=w(()=>m.value.length>2),pe=w(()=>a.placement===void 0?a.vertical?"right":"top":a.placement),ee=w(()=>{const{marks:e}=a;return e?Object.keys(e).map(Number.parseFloat):null}),b=k(-1),te=k(-1),y=k(-1),R=k(!1),$=k(!1),L=w(()=>{const{vertical:e,reverse:t}=a;return e?t?"top":"bottom":t?"right":"left"}),xe=w(()=>{if(q.value)return;const e=m.value,t=I(a.range?Math.min(...e):a.min),o=I(a.range?Math.max(...e):e[0]),{value:r}=L;return a.vertical?{[r]:`${t}%`,height:`${o-t}%`}:{[r]:`${t}%`,width:`${o-t}%`}}),ke=w(()=>{const e=[],{marks:t}=a;if(t){const o=m.value.slice();o.sort((h,c)=>h-c);const{value:r}=L,{value:i}=q,{range:d}=a,g=i?()=>!1:h=>d?h>=o[0]&&h<=o[o.length-1]:h<=o[0];for(const h of Object.keys(t)){const c=Number(h);e.push({active:g(c),key:c,label:t[h],style:{[r]:`${I(c)}%`}})}}return e});function ye(e,t){const o=I(e),{value:r}=L;return{[r]:`${o}%`,zIndex:t===b.value?1:0}}function oe(e){return a.showTooltip||y.value===e||b.value===e&&R.value}function Re(e){return R.value?!(b.value===e&&te.value===e):!0}function ze(e){var t;~e&&(b.value=e,(t=M.get(e))===null||t===void 0||t.focus())}function Se(){me.forEach((e,t)=>{oe(t)&&e.syncPosition()})}function ae(e){const{"onUpdate:value":t,onUpdateValue:o}=a,{nTriggerFormInput:r,nTriggerFormChange:i}=Q;o&&j(o,e),t&&j(t,e),O.value=e,r(),i()}function ne(e){const{range:t}=a;if(t){if(Array.isArray(e)){const{value:o}=m;e.join()!==o.join()&&ae(e)}}else Array.isArray(e)||m.value[0]!==e&&ae(e)}function X(e,t){if(a.range){const o=m.value.slice();o.splice(t,1,e),ne(o)}else ne(e)}function Y(e,t,o){const r=o!==void 0;o||(o=e-t>0?1:-1);const i=ee.value||[],{step:d}=a;if(d==="mark"){const c=B(e,i.concat(t),r?o:void 0);return c?c.value:t}if(d<=0)return t;const{value:g}=Z;let h;if(r){const c=Number((t/d).toFixed(g)),x=Math.floor(c),K=c>x?x:x-1,W=c<x?x:x+1;h=B(t,[Number((K*d).toFixed(g)),Number((W*d).toFixed(g)),...i],o)}else{const c=Ce(e);h=B(e,[...i,c])}return h?re(h.value):t}function re(e){return Math.min(a.max,Math.max(a.min,e))}function I(e){const{max:t,min:o}=a;return(e-o)/(t-o)*100}function Te(e){const{max:t,min:o}=a;return o+(t-o)*e}function Ce(e){const{step:t,min:o}=a;if(Number(t)<=0||t==="mark")return e;const r=Math.round((e-o)/t)*t+o;return Number(r.toFixed(Z.value))}function B(e,t=ee.value,o){if(!(t!=null&&t.length))return null;let r=null,i=-1;for(;++i<t.length;){const d=t[i]-e,g=Math.abs(d);(o===void 0||d*o>0)&&(r===null||g<r.distance)&&(r={index:i,distance:g,value:t[i]})}return r}function ie(e){const t=u.value;if(!t)return;const o=he(e)?e.touches[0]:e,r=t.getBoundingClientRect();let i;return a.vertical?i=(r.bottom-o.clientY)/r.height:i=(o.clientX-r.left)/r.width,a.reverse&&(i=1-i),Te(i)}function De(e){if(V.value||!a.keyboard)return;const{vertical:t,reverse:o}=a;switch(e.key){case"ArrowUp":e.preventDefault(),F(t&&o?-1:1);break;case"ArrowRight":e.preventDefault(),F(!t&&o?-1:1);break;case"ArrowDown":e.preventDefault(),F(t&&o?1:-1);break;case"ArrowLeft":e.preventDefault(),F(!t&&o?1:-1);break}}function F(e){const t=b.value;if(t===-1)return;const{step:o}=a,r=m.value[t],i=Number(o)<=0||o==="mark"?r:r+o*e;X(Y(i,r,e>0?1:-1),t)}function Me(e){var t,o;if(V.value||!he(e)&&e.button!==ut)return;const r=ie(e);if(r===void 0)return;const i=m.value.slice(),d=a.range?(o=(t=B(r,i))===null||t===void 0?void 0:t.index)!==null&&o!==void 0?o:-1:0;d!==-1&&(e.preventDefault(),ze(d),Ve(),X(Y(r,m.value[d]),d))}function Ve(){R.value||(R.value=!0,a.onDragstart&&j(a.onDragstart),P("touchend",document,E),P("mouseup",document,E),P("touchmove",document,A),P("mousemove",document,A))}function H(){R.value&&(R.value=!1,a.onDragend&&j(a.onDragend),U("touchend",document,E),U("mouseup",document,E),U("touchmove",document,A),U("mousemove",document,A))}function A(e){const{value:t}=b;if(!R.value||t===-1){H();return}const o=ie(e);o!==void 0&&X(Y(o,m.value[t]),t)}function E(){H()}function $e(e){b.value=e,V.value||(y.value=e)}function Ie(e){b.value===e&&(b.value=-1,H()),y.value===e&&(y.value=-1)}function Be(e){y.value=e}function Fe(e){y.value===e&&(y.value=-1)}ce(b,(e,t)=>void J(()=>te.value=t)),ce(_,()=>{if(a.marks){if($.value)return;$.value=!0,J(()=>{$.value=!1})}J(Se)}),st(()=>{H()});const le=w(()=>{const{self:{markFontSize:e,railColor:t,railColorHover:o,fillColor:r,fillColorHover:i,handleColor:d,opacityDisabled:g,dotColor:h,dotColorModal:c,handleBoxShadow:x,handleBoxShadowHover:K,handleBoxShadowActive:W,handleBoxShadowFocus:He,dotBorder:Ae,dotBoxShadow:Ee,railHeight:Ne,railWidthVertical:je,handleSize:Pe,dotHeight:Ue,dotWidth:Oe,dotBorderRadius:_e,fontSize:Le,dotBorderActive:Xe,dotColorPopover:Ye},common:{cubicBezierEaseInOut:Ke}}=s.value;return{"--n-bezier":Ke,"--n-dot-border":Ae,"--n-dot-border-active":Xe,"--n-dot-border-radius":_e,"--n-dot-box-shadow":Ee,"--n-dot-color":h,"--n-dot-color-modal":c,"--n-dot-color-popover":Ye,"--n-dot-height":Ue,"--n-dot-width":Oe,"--n-fill-color":r,"--n-fill-color-hover":i,"--n-font-size":Le,"--n-handle-box-shadow":x,"--n-handle-box-shadow-active":W,"--n-handle-box-shadow-focus":He,"--n-handle-box-shadow-hover":K,"--n-handle-color":d,"--n-handle-size":Pe,"--n-opacity-disabled":g,"--n-rail-color":t,"--n-rail-color-hover":o,"--n-rail-height":Ne,"--n-rail-width-vertical":je,"--n-mark-font-size":e}}),z=p?ue("slider",void 0,le,a):void 0,se=w(()=>{const{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:o,indicatorTextColor:r,indicatorBorderRadius:i}}=s.value;return{"--n-font-size":e,"--n-indicator-border-radius":i,"--n-indicator-box-shadow":o,"--n-indicator-color":t,"--n-indicator-text-color":r}}),S=p?ue("slider-indicator",void 0,se,a):void 0;return{mergedClsPrefix:l,namespace:T,uncontrolledValue:O,mergedValue:_,mergedDisabled:V,mergedPlacement:pe,isMounted:dt(),adjustedTo:G(a),dotTransitionDisabled:$,markInfos:ke,isShowTooltip:oe,shouldKeepTooltipTransition:Re,handleRailRef:u,setHandleRefs:C,setFollowerRefs:be,fillStyle:xe,getHandleStyle:ye,activeIndex:b,arrifiedValues:m,followerEnabledIndexSet:ge,handleRailMouseDown:Me,handleHandleFocus:$e,handleHandleBlur:Ie,handleHandleMouseEnter:Be,handleHandleMouseLeave:Fe,handleRailKeyDown:De,indicatorCssVars:p?void 0:se,indicatorThemeClass:S==null?void 0:S.themeClass,indicatorOnRender:S==null?void 0:S.onRender,cssVars:p?void 0:le,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender}},render(){var a;const{mergedClsPrefix:l,themeClass:T,formatTooltip:p}=this;return(a=this.onRender)===null||a===void 0||a.call(this),f("div",{class:[`${l}-slider`,T,{[`${l}-slider--disabled`]:this.mergedDisabled,[`${l}-slider--active`]:this.activeIndex!==-1,[`${l}-slider--with-mark`]:this.marks,[`${l}-slider--vertical`]:this.vertical,[`${l}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},f("div",{class:`${l}-slider-rail`},f("div",{class:`${l}-slider-rail__fill`,style:this.fillStyle}),this.marks?f("div",{class:[`${l}-slider-dots`,this.dotTransitionDisabled&&`${l}-slider-dots--transition-disabled`]},this.markInfos.map(s=>f("div",{key:s.key,class:[`${l}-slider-dot`,{[`${l}-slider-dot--active`]:s.active}],style:s.style}))):null,f("div",{ref:"handleRailRef",class:`${l}-slider-handles`},this.arrifiedValues.map((s,u)=>{const M=this.isShowTooltip(u);return f(Ze,null,{default:()=>[f(qe,null,{default:()=>f("div",{ref:this.setHandleRefs(u),class:`${l}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":s,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(s,u),onFocus:()=>{this.handleHandleFocus(u)},onBlur:()=>{this.handleHandleBlur(u)},onMouseenter:()=>{this.handleHandleMouseEnter(u)},onMouseleave:()=>{this.handleHandleMouseLeave(u)}},et(this.$slots.thumb,()=>[f("div",{class:`${l}-slider-handle`})]))}),this.tooltip&&f(tt,{ref:this.setFollowerRefs(u),show:M,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(u),teleportDisabled:this.adjustedTo===G.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>f(ot,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(u),onEnter:()=>{this.followerEnabledIndexSet.add(u)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(u)}},{default:()=>{var C;return M?((C=this.indicatorOnRender)===null||C===void 0||C.call(this),f("div",{class:[`${l}-slider-handle-indicator`,this.indicatorThemeClass,`${l}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof p=="function"?p(s):s)):null}})})]})})),this.marks?f("div",{class:`${l}-slider-marks`},this.markInfos.map(s=>f("div",{key:s.key,class:`${l}-slider-mark`,style:s.style},typeof s.label=="function"?s.label():s.label))):null))}});export{vt as N};
