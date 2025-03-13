import{d as D,C as A,bE as vt,bF as ht,x as c,bI as xe,c9 as gt,ca as Q,cb as xt,z as mt,i as ze,aa as yt,J as q,X as wt,aw as Ct,aJ as St,bN as Rt,ab as Tt,cc as zt,j as r,m as i,l as C,n as B,k as $t,p as Pt,H as $e,cd as _t,ak as me,N as ae,E as Wt,f as re,aK as ne,ah as kt,s as At,D as L,ce as Bt,Q as Et,K as j,aG as Y,L as Lt,M as ye,aI as oe,G as J,by as jt,T as It,U as Ht,cf as Ot,cg as Ft,o as Mt,c as Nt,al as Pe}from"./index-DL173VoU.js";import{A as Dt}from"./Add-D_pbhUBX.js";const Vt=xe(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[xe("&::-webkit-scrollbar",{width:0,height:0})]),Xt=D({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=A(null);function n(d){!(d.currentTarget.offsetWidth<d.currentTarget.scrollWidth)||d.deltaY===0||(d.currentTarget.scrollLeft+=d.deltaY+d.deltaX,d.preventDefault())}const l=vt();return Vt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:ht,ssr:l}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...d){var m;(m=e.value)===null||m===void 0||m.scrollTo(...d)}})},render(){return c("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Ut=/\s/;function Gt(e){for(var n=e.length;n--&&Ut.test(e.charAt(n)););return n}var Kt=/^\s+/;function Yt(e){return e&&e.slice(0,Gt(e)+1).replace(Kt,"")}var we=NaN,Jt=/^[-+]0x[0-9a-f]+$/i,qt=/^0b[01]+$/i,Qt=/^0o[0-7]+$/i,Zt=parseInt;function Ce(e){if(typeof e=="number")return e;if(gt(e))return we;if(Q(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=Q(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Yt(e);var l=qt.test(e);return l||Qt.test(e)?Zt(e.slice(2),l?2:8):Jt.test(e)?we:+e}var ie=function(){return xt.Date.now()},ea="Expected a function",ta=Math.max,aa=Math.min;function ra(e,n,l){var u,d,m,v,f,x,h=0,g=!1,_=!1,W=!0;if(typeof e!="function")throw new TypeError(ea);n=Ce(n)||0,Q(l)&&(g=!!l.leading,_="maxWait"in l,m=_?ta(Ce(l.maxWait)||0,n):m,W="trailing"in l?!!l.trailing:W);function y(b){var R=u,F=d;return u=d=void 0,h=b,v=e.apply(F,R),v}function T(b){return h=b,f=setTimeout(P,n),g?y(b):v}function S(b){var R=b-x,F=b-h,V=n-R;return _?aa(V,m-F):V}function $(b){var R=b-x,F=b-h;return x===void 0||R>=n||R<0||_&&F>=m}function P(){var b=ie();if($(b))return z(b);f=setTimeout(P,S(b))}function z(b){return f=void 0,W&&u?y(b):(u=d=void 0,v)}function O(){f!==void 0&&clearTimeout(f),h=0,u=x=d=f=void 0}function k(){return f===void 0?v:z(ie())}function p(){var b=ie(),R=$(b);if(u=arguments,d=this,x=b,R){if(f===void 0)return T(x);if(_)return clearTimeout(f),f=setTimeout(P,n),y(x)}return f===void 0&&(f=setTimeout(P,n)),v}return p.cancel=O,p.flush=k,p}var na="Expected a function";function se(e,n,l){var u=!0,d=!0;if(typeof e!="function")throw new TypeError(na);return Q(l)&&(u="leading"in l?!!l.leading:u,d="trailing"in l?!!l.trailing:d),ra(e,n,{leading:u,maxWait:n,trailing:d})}const ce=mt("n-tabs"),_e={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ua=D({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:_e,setup(e){const n=ze(ce,null);return n||yt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return c("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),oa=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},zt(_e,["displayDirective"])),de=D({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:oa,setup(e){const{mergedClsPrefixRef:n,valueRef:l,typeRef:u,closableRef:d,tabStyleRef:m,addTabStyleRef:v,tabClassRef:f,addTabClassRef:x,tabChangeIdRef:h,onBeforeLeaveRef:g,triggerRef:_,handleAdd:W,activateTab:y,handleClose:T}=ze(ce);return{trigger:_,mergedClosable:q(()=>{if(e.internalAddable)return!1;const{closable:S}=e;return S===void 0?d.value:S}),style:m,addStyle:v,tabClass:f,addTabClass:x,clsPrefix:n,value:l,type:u,handleClose(S){S.stopPropagation(),!e.disabled&&T(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){W();return}const{name:S}=e,$=++h.id;if(S!==l.value){const{value:P}=g;P?Promise.resolve(P(e.name,l.value)).then(z=>{z&&h.id===$&&y(S)}):y(S)}}}},render(){const{internalAddable:e,clsPrefix:n,name:l,disabled:u,label:d,tab:m,value:v,mergedClosable:f,trigger:x,$slots:{default:h}}=this,g=d??m;return c("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?c("div",{class:`${n}-tabs-tab-pad`}):null,c("div",Object.assign({key:l,"data-name":l,"data-disabled":u?!0:void 0},wt({class:[`${n}-tabs-tab`,v===l&&`${n}-tabs-tab--active`,u&&`${n}-tabs-tab--disabled`,f&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:x==="click"?this.activateTab:void 0,onMouseenter:x==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),c("span",{class:`${n}-tabs-tab__label`},e?c(Ct,null,c("div",{class:`${n}-tabs-tab__height-placeholder`}," "),c(St,{clsPrefix:n},{default:()=>c(Dt,null)})):h?h():typeof g=="object"?g:Rt(g??l)),f&&this.type==="card"?c(Tt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:u}):null))}}),ia=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[i("segment-type",[r("tabs-rail",[C("&.transition-disabled",[r("tabs-capsule",`
 transition: none;
 `)])])]),i("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),i("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),i("left, right",`
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
 `)]),i("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),i("bottom",`
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
 `,[i("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),C("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),i("flex",[r("tabs-nav",`
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
 `,[B("prefix, suffix",`
 display: flex;
 align-items: center;
 `),B("prefix","padding-right: 16px;"),B("suffix","padding-left: 16px;")]),i("top, bottom",[r("tabs-nav-scroll-wrapper",[C("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),C("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),i("shadow-start",[C("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[C("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),i("left, right",[r("tabs-nav-scroll-content",`
 flex-direction: column;
 `),r("tabs-nav-scroll-wrapper",[C("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),C("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),i("shadow-start",[C("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[C("&::after",`
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
 `,[C("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),C("&::before, &::after",`
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
 `,[i("disabled",{cursor:"not-allowed"}),B("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),B("label",`
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
 `,[C("&.transition-disabled",`
 transition: none;
 `),i("disabled",`
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
 `,[C("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),C("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),C("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),C("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),C("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),i("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[C("&:hover",{color:"var(--n-tab-text-color-hover)"}),i("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),i("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[i("line-type",[i("top",[B("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),i("left",[B("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),i("right",[B("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),i("bottom",[B("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),B("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),i("card-type",[B("prefix, suffix",`
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
 `,[i("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[B("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),$t("disabled",[C("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),i("closable","padding-right: 8px;"),i("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),i("disabled","color: var(--n-tab-text-color-disabled);")]),r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),i("left, right",[r("tabs-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),i("top",[i("card-type",[r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),i("left",[i("card-type",[r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),i("right",[i("card-type",[r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),i("bottom",[i("card-type",[r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),sa=Object.assign(Object.assign({},$e.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),va=D({name:"Tabs",props:sa,setup(e,{slots:n}){var l,u,d,m;const{mergedClsPrefixRef:v,inlineThemeDisabled:f}=Pt(e),x=$e("Tabs","-tabs",ia,_t,e,v),h=A(null),g=A(null),_=A(null),W=A(null),y=A(null),T=A(null),S=A(!0),$=A(!0),P=me(e,["labelSize","size"]),z=me(e,["activeName","value"]),O=A((u=(l=z.value)!==null&&l!==void 0?l:e.defaultValue)!==null&&u!==void 0?u:n.default?(m=(d=ae(n.default())[0])===null||d===void 0?void 0:d.props)===null||m===void 0?void 0:m.name:null),k=Wt(z,O),p={id:0},b=q(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});re(k,()=>{p.id=0,X(),fe()});function R(){var t;const{value:a}=k;return a===null?null:(t=h.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function F(t){if(e.type==="card")return;const{value:a}=g;if(!a)return;const o=a.style.opacity==="0";if(t){const s=`${v.value}-tabs-bar--disabled`,{barWidth:w,placement:E}=e;if(t.dataset.disabled==="true"?a.classList.add(s):a.classList.remove(s),["top","bottom"].includes(E)){if(be(["top","maxHeight","height"]),typeof w=="number"&&t.offsetWidth>=w){const H=Math.floor((t.offsetWidth-w)/2)+t.offsetLeft;a.style.left=`${H}px`,a.style.maxWidth=`${w}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",o&&(a.style.transition="none"),a.offsetWidth,o&&(a.style.transition="",a.style.opacity="1")}else{if(be(["left","maxWidth","width"]),typeof w=="number"&&t.offsetHeight>=w){const H=Math.floor((t.offsetHeight-w)/2)+t.offsetTop;a.style.top=`${H}px`,a.style.maxHeight=`${w}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",o&&(a.style.transition="none"),a.offsetHeight,o&&(a.style.transition="",a.style.opacity="1")}}}function V(){if(e.type==="card")return;const{value:t}=g;t&&(t.style.opacity="0")}function be(t){const{value:a}=g;if(a)for(const o of t)a.style[o]=""}function X(){if(e.type==="card")return;const t=R();t?F(t):V()}function fe(){var t;const a=(t=y.value)===null||t===void 0?void 0:t.$el;if(!a)return;const o=R();if(!o)return;const{scrollLeft:s,offsetWidth:w}=a,{offsetLeft:E,offsetWidth:H}=o;s>E?a.scrollTo({top:0,left:E,behavior:"smooth"}):E+H>s+w&&a.scrollTo({top:0,left:E+H-w,behavior:"smooth"})}const U=A(null);let Z=0,I=null;function We(t){const a=U.value;if(a){Z=t.getBoundingClientRect().height;const o=`${Z}px`,s=()=>{a.style.height=o,a.style.maxHeight=o};I?(s(),I(),I=null):I=s}}function ke(t){const a=U.value;if(a){const o=t.getBoundingClientRect().height,s=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(Z,o)}px`};I?(I(),I=null,s()):I=s}}function Ae(){const t=U.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:o,height:s}=a;o!==void 0&&(t.style.maxHeight=o),s!==void 0&&(t.style.height=s)}}}const pe={value:[]},ue=A("next");function Be(t){const a=k.value;let o="next";for(const s of pe.value){if(s===a)break;if(s===t){o="prev";break}}ue.value=o,Ee(t)}function Ee(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":s}=e;a&&J(a,t),o&&J(o,t),s&&J(s,t),O.value=t}function Le(t){const{onClose:a}=e;a&&J(a,t)}function ve(){const{value:t}=g;if(!t)return;const a="transition-disabled";t.classList.add(a),X(),t.classList.remove(a)}const M=A(null);function ee({transitionDisabled:t}){const a=h.value;if(!a)return;t&&a.classList.add("transition-disabled");const o=R();o&&M.value&&(M.value.style.width=`${o.offsetWidth}px`,M.value.style.height=`${o.offsetHeight}px`,M.value.style.transform=`translateX(${o.offsetLeft-jt(getComputedStyle(a).paddingLeft)}px)`,t&&M.value.offsetWidth),t&&a.classList.remove("transition-disabled")}re([k],()=>{e.type==="segment"&&ne(()=>{ee({transitionDisabled:!1})})}),kt(()=>{e.type==="segment"&&ee({transitionDisabled:!0})});let he=0;function je(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||he===t.contentRect.width)return;he=t.contentRect.width;const{type:o}=e;if((o==="line"||o==="bar")&&ve(),o!=="segment"){const{placement:s}=e;te((s==="top"||s==="bottom"?(a=y.value)===null||a===void 0?void 0:a.$el:T.value)||null)}}const Ie=se(je,64);re([()=>e.justifyContent,()=>e.size],()=>{ne(()=>{const{type:t}=e;(t==="line"||t==="bar")&&ve()})});const G=A(!1);function He(t){var a;const{target:o,contentRect:{width:s}}=t,w=o.parentElement.offsetWidth;if(!G.value)w<s&&(G.value=!0);else{const{value:E}=W;if(!E)return;w-s>E.$el.offsetWidth&&(G.value=!1)}te(((a=y.value)===null||a===void 0?void 0:a.$el)||null)}const Oe=se(He,64);function Fe(){const{onAdd:t}=e;t&&t(),ne(()=>{const a=R(),{value:o}=y;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function te(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:o,scrollWidth:s,offsetWidth:w}=t;S.value=o<=0,$.value=o+w>=s}else{const{scrollTop:o,scrollHeight:s,offsetHeight:w}=t;S.value=o<=0,$.value=o+w>=s}}const Me=se(t=>{te(t.target)},64);At(ce,{triggerRef:L(e,"trigger"),tabStyleRef:L(e,"tabStyle"),tabClassRef:L(e,"tabClass"),addTabStyleRef:L(e,"addTabStyle"),addTabClassRef:L(e,"addTabClass"),paneClassRef:L(e,"paneClass"),paneStyleRef:L(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:L(e,"type"),closableRef:L(e,"closable"),valueRef:k,tabChangeIdRef:p,onBeforeLeaveRef:L(e,"onBeforeLeave"),activateTab:Be,handleClose:Le,handleAdd:Fe}),Bt(()=>{X(),fe()}),Et(()=>{const{value:t}=_;if(!t)return;const{value:a}=v,o=`${a}-tabs-nav-scroll-wrapper--shadow-start`,s=`${a}-tabs-nav-scroll-wrapper--shadow-end`;S.value?t.classList.remove(o):t.classList.add(o),$.value?t.classList.remove(s):t.classList.add(s)});const Ne={syncBarPosition:()=>{X()}},De=()=>{ee({transitionDisabled:!0})},ge=q(()=>{const{value:t}=P,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],s=`${t}${o}`,{self:{barColor:w,closeIconColor:E,closeIconColorHover:H,closeIconColorPressed:Ve,tabColor:Xe,tabBorderColor:Ue,paneTextColor:Ge,tabFontWeight:Ke,tabBorderRadius:Ye,tabFontWeightActive:Je,colorSegment:qe,fontWeightStrong:Qe,tabColorSegment:Ze,closeSize:et,closeIconSize:tt,closeColorHover:at,closeColorPressed:rt,closeBorderRadius:nt,[j("panePadding",t)]:K,[j("tabPadding",s)]:ot,[j("tabPaddingVertical",s)]:it,[j("tabGap",s)]:st,[j("tabGap",`${s}Vertical`)]:lt,[j("tabTextColor",a)]:dt,[j("tabTextColorActive",a)]:ct,[j("tabTextColorHover",a)]:bt,[j("tabTextColorDisabled",a)]:ft,[j("tabFontSize",t)]:pt},common:{cubicBezierEaseInOut:ut}}=x.value;return{"--n-bezier":ut,"--n-color-segment":qe,"--n-bar-color":w,"--n-tab-font-size":pt,"--n-tab-text-color":dt,"--n-tab-text-color-active":ct,"--n-tab-text-color-disabled":ft,"--n-tab-text-color-hover":bt,"--n-pane-text-color":Ge,"--n-tab-border-color":Ue,"--n-tab-border-radius":Ye,"--n-close-size":et,"--n-close-icon-size":tt,"--n-close-color-hover":at,"--n-close-color-pressed":rt,"--n-close-border-radius":nt,"--n-close-icon-color":E,"--n-close-icon-color-hover":H,"--n-close-icon-color-pressed":Ve,"--n-tab-color":Xe,"--n-tab-font-weight":Ke,"--n-tab-font-weight-active":Je,"--n-tab-padding":ot,"--n-tab-padding-vertical":it,"--n-tab-gap":st,"--n-tab-gap-vertical":lt,"--n-pane-padding-left":Y(K,"left"),"--n-pane-padding-right":Y(K,"right"),"--n-pane-padding-top":Y(K,"top"),"--n-pane-padding-bottom":Y(K,"bottom"),"--n-font-weight-strong":Qe,"--n-tab-color-segment":Ze}}),N=f?Lt("tabs",q(()=>`${P.value[0]}${e.type[0]}`),ge,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:k,renderedNames:new Set,segmentCapsuleElRef:M,tabsPaneWrapperRef:U,tabsElRef:h,barElRef:g,addTabInstRef:W,xScrollInstRef:y,scrollWrapperElRef:_,addTabFixed:G,tabWrapperStyle:b,handleNavResize:Ie,mergedSize:P,handleScroll:Me,handleTabsResize:Oe,cssVars:f?void 0:ge,themeClass:N==null?void 0:N.themeClass,animationDirection:ue,renderNameListRef:pe,yScrollElRef:T,handleSegmentResize:De,onAnimationBeforeLeave:We,onAnimationEnter:ke,onAnimationAfterEnter:Ae,onRender:N==null?void 0:N.onRender},Ne)},render(){const{mergedClsPrefix:e,type:n,placement:l,addTabFixed:u,addable:d,mergedSize:m,renderNameListRef:v,onRender:f,paneWrapperClass:x,paneWrapperStyle:h,$slots:{default:g,prefix:_,suffix:W}}=this;f==null||f();const y=g?ae(g()).filter(p=>p.type.__TAB_PANE__===!0):[],T=g?ae(g()).filter(p=>p.type.__TAB__===!0):[],S=!T.length,$=n==="card",P=n==="segment",z=!$&&!P&&this.justifyContent;v.value=[];const O=()=>{const p=c("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},z?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),S?y.map((b,R)=>(v.value.push(b.props.name),le(c(de,Object.assign({},b.props,{internalCreatedByPane:!0,internalLeftPadded:R!==0&&(!z||z==="center"||z==="start"||z==="end")}),b.children?{default:b.children.tab}:void 0)))):T.map((b,R)=>(v.value.push(b.props.name),le(R!==0&&!z?Te(b):b))),!u&&d&&$?Re(d,(S?y.length:T.length)!==0):null,z?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return c("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},$&&d?c(oe,{onResize:this.handleTabsResize},{default:()=>p}):p,$?c("div",{class:`${e}-tabs-pad`}):null,$?null:c("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},k=P?"top":l;return c("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${m}-size`,z&&`${e}-tabs--flex`,`${e}-tabs--${k}`],style:this.cssVars},c("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav--${k}`,`${e}-tabs-nav`]},ye(_,p=>p&&c("div",{class:`${e}-tabs-nav__prefix`},p)),P?c(oe,{onResize:this.handleSegmentResize},{default:()=>c("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},c("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},c("div",{class:`${e}-tabs-wrapper`},c("div",{class:`${e}-tabs-tab`}))),S?y.map((p,b)=>(v.value.push(p.props.name),c(de,Object.assign({},p.props,{internalCreatedByPane:!0,internalLeftPadded:b!==0}),p.children?{default:p.children.tab}:void 0))):T.map((p,b)=>(v.value.push(p.props.name),b===0?p:Te(p))))}):c(oe,{onResize:this.handleNavResize},{default:()=>c("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(k)?c(Xt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:O}):c("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},O()))}),u&&d&&$?Re(d,!0):null,ye(W,p=>p&&c("div",{class:`${e}-tabs-nav__suffix`},p))),S&&(this.animated&&(k==="top"||k==="bottom")?c("div",{ref:"tabsPaneWrapperRef",style:h,class:[`${e}-tabs-pane-wrapper`,x]},Se(y,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Se(y,this.mergedValue,this.renderedNames)))}});function Se(e,n,l,u,d,m,v){const f=[];return e.forEach(x=>{const{name:h,displayDirective:g,"display-directive":_}=x.props,W=T=>g===T||_===T,y=n===h;if(x.key!==void 0&&(x.key=h),y||W("show")||W("show:lazy")&&l.has(h)){l.has(h)||l.add(h);const T=!W("if");f.push(T?It(x,[[Ht,y]]):x)}}),v?c(Ot,{name:`${v}-transition`,onBeforeLeave:u,onEnter:d,onAfterEnter:m},{default:()=>f}):f}function Re(e,n){return c(de,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function Te(e){const n=Ft(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function le(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const la={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},da=Pe("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 112v288"},null,-1),ca=Pe("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 256H112"},null,-1),ba=[da,ca],ha=D({name:"Add",render:function(n,l){return Mt(),Nt("svg",la,ba)}});export{ha as A,va as N,ua as a};
