import{d as ee,bD as On,bE as _n,O as it,bF as kn,bG as Ht,x as F,E as _,as as Je,aj as wt,aA as Ye,n as a,$ as Wt,bH as Tt,bI as ft,ar as Fn,bJ as Ot,aq as Kt,f as $,j as L,h as ue,k as rt,s as he,bK as zn,G as Ct,ap as Mn,y as me,z as at,b9 as Ut,bL as St,bM as ze,T as qt,i as le,g as ot,aY as Gt,m as Yt,K as oe,bN as Pn,bO as In,M as Me,av as Zt,bP as Ve,p as _t,A as kt,bQ as Bn,au as $n,ah as En,bR as je,bS as Nn,bT as An,af as Ln,bU as Dn,bx as vt,bV as Ft,bW as Vn,Y as et,bX as jn,ag as zt,bY as Hn,bZ as Wn,aZ as Kn,a$ as Un,b0 as yt,b2 as qn,b3 as Gn,b4 as Yn,b5 as Zn,bc as Xn,b6 as Mt,b1 as Qn,b_ as Jn,ak as fe,b$ as eo,c0 as to,aC as no,o as ve,c as Te,Q as xe,an as tt,u as N,c1 as oo,_ as Rt,a as Y,w as q,a0 as xt,Z as nt,c2 as lo,a1 as ht,c3 as io,e as Le,t as De,W as Ze,c4 as ro,c5 as ao,ad as Pt,c6 as so,B as Xe,c7 as uo,c8 as co,a2 as fo,aG as vo}from"./index-CrYNh4GQ.js";import pt from"./setItem-DQdCAaZp.js";import{I as ho}from"./Interface text-CzHp74qh.js";import{a as It,N as po,A as go}from"./Add-didA_64c.js";import{u as Xt,N as bo}from"./Suffix-l9YZOMSf.js";import{g as Bt}from"./attribute-Cz32yFEB.js";import"./Add-CLxfsVyG.js";import"./throttle-kG-oNZFh.js";function gt(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(i=>{i&&i(o)})}}function $t(e){return e&-e}class mo{constructor(n,o){this.l=n,this.min=o;const i=new Array(n+1);for(let r=0;r<n+1;++r)i[r]=0;this.ft=i}add(n,o){if(o===0)return;const{l:i,ft:r}=this;for(n+=1;n<=i;)r[n]+=o,n+=$t(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:i,l:r}=this;if(n>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let u=n*i;for(;n>0;)u+=o[n],n-=$t(n);return u}getBound(n){let o=0,i=this.l;for(;i>o;){const r=Math.floor((o+i)/2),u=this.sum(r);if(u>n){i=r;continue}else if(u<n){if(o===r)return this.sum(o+1)<=n?o+1:r;o=r}else return r}return o}}let Qe;function wo(){return typeof document>"u"?!1:(Qe===void 0&&("matchMedia"in window?Qe=window.matchMedia("(pointer:coarse)").matches:Qe=!1),Qe)}let bt;function Et(){return typeof document>"u"?1:(bt===void 0&&(bt="chrome"in window?window.devicePixelRatio:1),bt)}const yo=ft(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[ft("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[ft("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),xo=ee({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=On();yo.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:_n,ssr:n}),it(()=>{const{defaultScrollIndex:h,defaultScrollKey:y}=e;h!=null?R({index:h}):y!=null&&R({key:y})});let o=!1,i=!1;kn(()=>{if(o=!1,!i){i=!0;return}R({top:O.value,left:g})}),Ht(()=>{o=!0,i||(i=!0)});const r=F(()=>{const h=new Map,{keyField:y}=e;return e.items.forEach((S,D)=>{h.set(S[y],D)}),h}),u=_(null),c=_(void 0),l=new Map,m=F(()=>{const{items:h,itemSize:y,keyField:S}=e,D=new mo(h.length,y);return h.forEach((H,W)=>{const K=H[S],U=l.get(K);U!==void 0&&D.add(W,U)}),D}),p=_(0);let g=0;const O=_(0),k=Je(()=>Math.max(m.value.getBound(O.value-wt(e.paddingTop))-1,0)),z=F(()=>{const{value:h}=c;if(h===void 0)return[];const{items:y,itemSize:S}=e,D=k.value,H=Math.min(D+Math.ceil(h/S+1),y.length-1),W=[];for(let K=D;K<=H;++K)W.push(y[K]);return W}),R=(h,y)=>{if(typeof h=="number"){C(h,y,"auto");return}const{left:S,top:D,index:H,key:W,position:K,behavior:U,debounce:te=!0}=h;if(S!==void 0||D!==void 0)C(S,D,U);else if(H!==void 0)x(H,U,te);else if(W!==void 0){const Q=r.value.get(W);Q!==void 0&&x(Q,U,te)}else K==="bottom"?C(0,Number.MAX_SAFE_INTEGER,U):K==="top"&&C(0,0,U)};let P,w=null;function x(h,y,S){const{value:D}=m,H=D.sum(h)+wt(e.paddingTop);if(!S)u.value.scrollTo({left:0,top:H,behavior:y});else{P=h,w!==null&&window.clearTimeout(w),w=window.setTimeout(()=>{P=void 0,w=null},16);const{scrollTop:W,offsetHeight:K}=u.value;if(H>W){const U=D.get(h);H+U<=W+K||u.value.scrollTo({left:0,top:H+U-K,behavior:y})}else u.value.scrollTo({left:0,top:H,behavior:y})}}function C(h,y,S){u.value.scrollTo({left:h,top:y,behavior:S})}function A(h,y){var S,D,H;if(o||e.ignoreItemResize||ae(y.target))return;const{value:W}=m,K=r.value.get(h),U=W.get(K),te=(H=(D=(S=y.borderBoxSize)===null||S===void 0?void 0:S[0])===null||D===void 0?void 0:D.blockSize)!==null&&H!==void 0?H:y.contentRect.height;if(te===U)return;te-e.itemSize===0?l.delete(h):l.set(h,te-e.itemSize);const J=te-U;if(J===0)return;W.add(K,J);const s=u.value;if(s!=null){if(P===void 0){const v=W.sum(K);s.scrollTop>v&&s.scrollBy(0,J)}else if(K<P)s.scrollBy(0,J);else if(K===P){const v=W.sum(K);te+v>s.scrollTop+s.offsetHeight&&s.scrollBy(0,J)}de()}p.value++}const V=!wo();let j=!1;function re(h){var y;(y=e.onScroll)===null||y===void 0||y.call(e,h),(!V||!j)&&de()}function ie(h){var y;if((y=e.onWheel)===null||y===void 0||y.call(e,h),V){const S=u.value;if(S!=null){if(h.deltaX===0&&(S.scrollTop===0&&h.deltaY<=0||S.scrollTop+S.offsetHeight>=S.scrollHeight&&h.deltaY>=0))return;h.preventDefault(),S.scrollTop+=h.deltaY/Et(),S.scrollLeft+=h.deltaX/Et(),de(),j=!0,Fn(()=>{j=!1})}}}function pe(h){if(o||ae(h.target)||h.contentRect.height===c.value)return;c.value=h.contentRect.height;const{onResize:y}=e;y!==void 0&&y(h)}function de(){const{value:h}=u;h!=null&&(O.value=h.scrollTop,g=h.scrollLeft)}function ae(h){let y=h;for(;y!==null;){if(y.style.display==="none")return!0;y=y.parentElement}return!1}return{listHeight:c,listStyle:{overflow:"auto"},keyToIndex:r,itemsStyle:F(()=>{const{itemResizable:h}=e,y=Ye(m.value.sum());return p.value,[e.itemsStyle,{boxSizing:"content-box",height:h?"":y,minHeight:h?y:"",paddingTop:Ye(e.paddingTop),paddingBottom:Ye(e.paddingBottom)}]}),visibleItemsStyle:F(()=>(p.value,{transform:`translateY(${Ye(m.value.sum(k.value))})`})),viewportItems:z,listElRef:u,itemsElRef:_(null),scrollTo:R,handleListResize:pe,handleListScroll:re,handleListWheel:ie,handleItemResize:A}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:i}=this;return a(Tt,{onResize:this.handleListResize},{default:()=>{var r,u;return a("div",Wt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?a("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[a(i,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(c=>{const l=c[n],m=o.get(l),p=this.$slots.default({item:c,index:m})[0];return e?a(Tt,{key:l,onResize:g=>this.handleItemResize(l,g)},{default:()=>p}):(p.key=l,p)})})]):(u=(r=this.$slots).empty)===null||u===void 0?void 0:u.call(r)])}})}});function Qt(e,n){n&&(it(()=>{const{value:o}=e;o&&Ot.registerHandler(o,n)}),Kt(()=>{const{value:o}=e;o&&Ot.unregisterHandler(o)}))}const Co=ee({name:"Checkmark",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},a("g",{fill:"none"},a("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),So=ee({name:"Empty",render(){return a("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),a("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Ro=ee({props:{onFocus:Function,onBlur:Function},setup(e){return()=>a("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),To=$("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[L("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[ue("+",[L("description",`
 margin-top: 8px;
 `)])]),L("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),L("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Oo=Object.assign(Object.assign({},he.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),_o=ee({name:"Empty",props:Oo,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=rt(e),i=he("Empty","-empty",To,zn,e,n),{localeRef:r}=Xt("Empty"),u=Ct(Mn,null),c=F(()=>{var g,O,k;return(g=e.description)!==null&&g!==void 0?g:(k=(O=u==null?void 0:u.mergedComponentPropsRef.value)===null||O===void 0?void 0:O.Empty)===null||k===void 0?void 0:k.description}),l=F(()=>{var g,O;return((O=(g=u==null?void 0:u.mergedComponentPropsRef.value)===null||g===void 0?void 0:g.Empty)===null||O===void 0?void 0:O.renderIcon)||(()=>a(So,null))}),m=F(()=>{const{size:g}=e,{common:{cubicBezierEaseInOut:O},self:{[me("iconSize",g)]:k,[me("fontSize",g)]:z,textColor:R,iconColor:P,extraTextColor:w}}=i.value;return{"--n-icon-size":k,"--n-font-size":z,"--n-bezier":O,"--n-text-color":R,"--n-icon-color":P,"--n-extra-text-color":w}}),p=o?at("empty",F(()=>{let g="";const{size:O}=e;return g+=O[0],g}),m,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:l,localizedDescription:F(()=>c.value||r.value.description),cssVars:o?void 0:m,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:o}=this;return o==null||o(),a("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?a("div",{class:`${n}-empty__icon`},e.icon?e.icon():a(Ut,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?a("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?a("div",{class:`${n}-empty__extra`},e.extra()):null)}});function ko(e,n){return a(qt,{name:"fade-in-scale-up-transition"},{default:()=>e?a(Ut,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>a(Co)}):null})}const Nt=ee({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:i,valueSetRef:r,renderLabelRef:u,renderOptionRef:c,labelFieldRef:l,valueFieldRef:m,showCheckmarkRef:p,nodePropsRef:g,handleOptionClick:O,handleOptionMouseEnter:k}=Ct(St),z=Je(()=>{const{value:x}=o;return x?e.tmNode.key===x.key:!1});function R(x){const{tmNode:C}=e;C.disabled||O(x,C)}function P(x){const{tmNode:C}=e;C.disabled||k(x,C)}function w(x){const{tmNode:C}=e,{value:A}=z;C.disabled||A||k(x,C)}return{multiple:i,isGrouped:Je(()=>{const{tmNode:x}=e,{parent:C}=x;return C&&C.rawNode.type==="group"}),showCheckmark:p,nodeProps:g,isPending:z,isSelected:Je(()=>{const{value:x}=n,{value:C}=i;if(x===null)return!1;const A=e.tmNode.rawNode[m.value];if(C){const{value:V}=r;return V.has(A)}else return x===A}),labelField:l,renderLabel:u,renderOption:c,handleMouseMove:w,handleMouseEnter:P,handleClick:R}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:i,isGrouped:r,showCheckmark:u,nodeProps:c,renderOption:l,renderLabel:m,handleClick:p,handleMouseEnter:g,handleMouseMove:O}=this,k=ko(o,e),z=m?[m(n,o),u&&k]:[ze(n[this.labelField],n,o),u&&k],R=c==null?void 0:c(n),P=a("div",Object.assign({},R,{class:[`${e}-base-select-option`,n.class,R==null?void 0:R.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:i,[`${e}-base-select-option--show-checkmark`]:u}],style:[(R==null?void 0:R.style)||"",n.style||""],onClick:gt([p,R==null?void 0:R.onClick]),onMouseenter:gt([g,R==null?void 0:R.onMouseenter]),onMousemove:gt([O,R==null?void 0:R.onMousemove])}),a("div",{class:`${e}-base-select-option__content`},z));return n.render?n.render({node:P,option:n,selected:o}):l?l({node:P,option:n,selected:o}):P}}),At=ee({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:i}=Ct(St);return{labelField:o,nodeProps:i,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:i,tmNode:{rawNode:r}}=this,u=i==null?void 0:i(r),c=n?n(r,!1):ze(r[this.labelField],r,!1),l=a("div",Object.assign({},u,{class:[`${e}-base-select-group-header`,u==null?void 0:u.class]}),c);return r.render?r.render({node:l,option:r}):o?o({node:l,option:r,selected:!1}):l}}),Fo=$("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[$("scrollbar",`
 max-height: var(--n-height);
 `),$("virtual-list",`
 max-height: var(--n-height);
 `),$("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[L("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),$("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),$("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),L("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),L("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),L("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),L("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),$("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),$("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[le("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ue("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ue("&:active",`
 color: var(--n-option-text-color-pressed);
 `),le("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),le("pending",[ue("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),le("selected",`
 color: var(--n-option-text-color-active);
 `,[ue("&::before",`
 background-color: var(--n-option-color-active);
 `),le("pending",[ue("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),le("disabled",`
 cursor: not-allowed;
 `,[ot("selected",`
 color: var(--n-option-text-color-disabled);
 `),le("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),L("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Gt({enterScale:"0.5"})])])]),zo=ee({name:"InternalSelectMenu",props:Object.assign(Object.assign({},he.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=rt(e),i=Yt("InternalSelectMenu",o,n),r=he("InternalSelectMenu","-internal-select-menu",Fo,Pn,e,oe(e,"clsPrefix")),u=_(null),c=_(null),l=_(null),m=F(()=>e.treeMate.getFlattenedNodes()),p=F(()=>In(m.value)),g=_(null);function O(){const{treeMate:s}=e;let v=null;const{value:G}=e;G===null?v=s.getFirstAvailableNode():(e.multiple?v=s.getNode((G||[])[(G||[]).length-1]):v=s.getNode(G),(!v||v.disabled)&&(v=s.getFirstAvailableNode())),D(v||null)}function k(){const{value:s}=g;s&&!e.treeMate.getNode(s.key)&&(g.value=null)}let z;Me(()=>e.show,s=>{s?z=Me(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?O():k(),Zt(H)):k()},{immediate:!0}):z==null||z()},{immediate:!0}),Kt(()=>{z==null||z()});const R=F(()=>wt(r.value.self[me("optionHeight",e.size)])),P=F(()=>Ve(r.value.self[me("padding",e.size)])),w=F(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),x=F(()=>{const s=m.value;return s&&s.length===0});function C(s){const{onToggle:v}=e;v&&v(s)}function A(s){const{onScroll:v}=e;v&&v(s)}function V(s){var v;(v=l.value)===null||v===void 0||v.sync(),A(s)}function j(){var s;(s=l.value)===null||s===void 0||s.sync()}function re(){const{value:s}=g;return s||null}function ie(s,v){v.disabled||D(v,!1)}function pe(s,v){v.disabled||C(v)}function de(s){var v;je(s,"action")||(v=e.onKeyup)===null||v===void 0||v.call(e,s)}function ae(s){var v;je(s,"action")||(v=e.onKeydown)===null||v===void 0||v.call(e,s)}function h(s){var v;(v=e.onMousedown)===null||v===void 0||v.call(e,s),!e.focusable&&s.preventDefault()}function y(){const{value:s}=g;s&&D(s.getNext({loop:!0}),!0)}function S(){const{value:s}=g;s&&D(s.getPrev({loop:!0}),!0)}function D(s,v=!1){g.value=s,v&&H()}function H(){var s,v;const G=g.value;if(!G)return;const ge=p.value(G.key);ge!==null&&(e.virtualScroll?(s=c.value)===null||s===void 0||s.scrollTo({index:ge}):(v=l.value)===null||v===void 0||v.scrollTo({index:ge,elSize:R.value}))}function W(s){var v,G;!((v=u.value)===null||v===void 0)&&v.contains(s.target)&&((G=e.onFocus)===null||G===void 0||G.call(e,s))}function K(s){var v,G;!((v=u.value)===null||v===void 0)&&v.contains(s.relatedTarget)||(G=e.onBlur)===null||G===void 0||G.call(e,s)}_t(St,{handleOptionMouseEnter:ie,handleOptionClick:pe,valueSetRef:w,pendingTmNodeRef:g,nodePropsRef:oe(e,"nodeProps"),showCheckmarkRef:oe(e,"showCheckmark"),multipleRef:oe(e,"multiple"),valueRef:oe(e,"value"),renderLabelRef:oe(e,"renderLabel"),renderOptionRef:oe(e,"renderOption"),labelFieldRef:oe(e,"labelField"),valueFieldRef:oe(e,"valueField")}),_t(Nn,u),it(()=>{const{value:s}=l;s&&s.sync()});const U=F(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:v},self:{height:G,borderRadius:ge,color:Oe,groupHeaderTextColor:_e,actionDividerColor:be,optionTextColorPressed:se,optionTextColor:ke,optionTextColorDisabled:we,optionTextColorActive:Pe,optionOpacityDisabled:Ie,optionCheckColor:Be,actionTextColor:$e,optionColorPending:Ce,optionColorActive:Se,loadingColor:Ee,loadingSize:Ne,optionColorActivePending:Ae,[me("optionFontSize",s)]:Fe,[me("optionHeight",s)]:Re,[me("optionPadding",s)]:ne}}=r.value;return{"--n-height":G,"--n-action-divider-color":be,"--n-action-text-color":$e,"--n-bezier":v,"--n-border-radius":ge,"--n-color":Oe,"--n-option-font-size":Fe,"--n-group-header-text-color":_e,"--n-option-check-color":Be,"--n-option-color-pending":Ce,"--n-option-color-active":Se,"--n-option-color-active-pending":Ae,"--n-option-height":Re,"--n-option-opacity-disabled":Ie,"--n-option-text-color":ke,"--n-option-text-color-active":Pe,"--n-option-text-color-disabled":we,"--n-option-text-color-pressed":se,"--n-option-padding":ne,"--n-option-padding-left":Ve(ne,"left"),"--n-option-padding-right":Ve(ne,"right"),"--n-loading-color":Ee,"--n-loading-size":Ne}}),{inlineThemeDisabled:te}=e,Q=te?at("internal-select-menu",F(()=>e.size[0]),U,e):void 0,J={selfRef:u,next:y,prev:S,getPendingTmNode:re};return Qt(u,e.onResize),Object.assign({mergedTheme:r,mergedClsPrefix:n,rtlEnabled:i,virtualListRef:c,scrollbarRef:l,itemSize:R,padding:P,flattenedNodes:m,empty:x,virtualListContainer(){const{value:s}=c;return s==null?void 0:s.listElRef},virtualListContent(){const{value:s}=c;return s==null?void 0:s.itemsElRef},doScroll:A,handleFocusin:W,handleFocusout:K,handleKeyUp:de,handleKeyDown:ae,handleMouseDown:h,handleVirtualListResize:j,handleVirtualListScroll:V,cssVars:te?void 0:U,themeClass:Q==null?void 0:Q.themeClass,onRender:Q==null?void 0:Q.onRender},J)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:i,themeClass:r,onRender:u}=this;return u==null||u(),a("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,r,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},kt(e.header,c=>c&&a("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},c)),this.loading?a("div",{class:`${o}-base-select-menu__loading`},a(Bn,{clsPrefix:o,strokeWidth:20})):this.empty?a("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},En(e.empty,()=>[a(_o,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty})])):a($n,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?a(xo,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:c})=>c.isGroup?a(At,{key:c.key,clsPrefix:o,tmNode:c}):c.ignored?null:a(Nt,{clsPrefix:o,key:c.key,tmNode:c})}):a("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(c=>c.isGroup?a(At,{key:c.key,clsPrefix:o,tmNode:c}):a(Nt,{clsPrefix:o,key:c.key,tmNode:c})))}),kt(e.action,c=>c&&[a("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},c),a(Ro,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Mo=ue([$("base-selection",`
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
 `,[$("base-loading",`
 color: var(--n-loading-color);
 `),$("base-selection-tags","min-height: var(--n-height);"),L("border, state-border",`
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
 `),L("state-border",`
 z-index: 1;
 border-color: #0000;
 `),$("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[L("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),$("base-selection-overlay",`
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
 `,[L("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),$("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[L("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),$("base-selection-tags",`
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
 `),$("base-selection-label",`
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
 `,[$("base-selection-input",`
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
 `,[L("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),L("render-label",`
 color: var(--n-text-color);
 `)]),ot("disabled",[ue("&:hover",[L("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),le("focus",[L("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),le("active",[L("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),$("base-selection-label","background-color: var(--n-color-active);"),$("base-selection-tags","background-color: var(--n-color-active);")])]),le("disabled","cursor: not-allowed;",[L("arrow",`
 color: var(--n-arrow-color-disabled);
 `),$("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[$("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),L("render-label",`
 color: var(--n-text-color-disabled);
 `)]),$("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),$("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),$("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[L("input",`
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
 `),L("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>le(`${e}-status`,[L("state-border",`border: var(--n-border-${e});`),ot("disabled",[ue("&:hover",[L("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),le("active",[L("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),$("base-selection-label",`background-color: var(--n-color-active-${e});`),$("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),le("focus",[L("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),$("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),$("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ue("&:last-child","padding-right: 0;"),$("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[L("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Po=ee({name:"InternalSelection",props:Object.assign(Object.assign({},he.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=rt(e),i=Yt("InternalSelection",o,n),r=_(null),u=_(null),c=_(null),l=_(null),m=_(null),p=_(null),g=_(null),O=_(null),k=_(null),z=_(null),R=_(!1),P=_(!1),w=_(!1),x=he("InternalSelection","-internal-selection",Mo,An,e,oe(e,"clsPrefix")),C=F(()=>e.clearable&&!e.disabled&&(w.value||e.active)),A=F(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ze(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),V=F(()=>{const d=e.selectedOption;if(d)return d[e.labelField]}),j=F(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function re(){var d;const{value:b}=r;if(b){const{value:Z}=u;Z&&(Z.style.width=`${b.offsetWidth}px`,e.maxTagCount!=="responsive"&&((d=k.value)===null||d===void 0||d.sync({showAllItemsBeforeCalculate:!1})))}}function ie(){const{value:d}=z;d&&(d.style.display="none")}function pe(){const{value:d}=z;d&&(d.style.display="inline-block")}Me(oe(e,"active"),d=>{d||ie()}),Me(oe(e,"pattern"),()=>{e.multiple&&Zt(re)});function de(d){const{onFocus:b}=e;b&&b(d)}function ae(d){const{onBlur:b}=e;b&&b(d)}function h(d){const{onDeleteOption:b}=e;b&&b(d)}function y(d){const{onClear:b}=e;b&&b(d)}function S(d){const{onPatternInput:b}=e;b&&b(d)}function D(d){var b;(!d.relatedTarget||!(!((b=c.value)===null||b===void 0)&&b.contains(d.relatedTarget)))&&de(d)}function H(d){var b;!((b=c.value)===null||b===void 0)&&b.contains(d.relatedTarget)||ae(d)}function W(d){y(d)}function K(){w.value=!0}function U(){w.value=!1}function te(d){!e.active||!e.filterable||d.target!==u.value&&d.preventDefault()}function Q(d){h(d)}const J=_(!1);function s(d){if(d.key==="Backspace"&&!J.value&&!e.pattern.length){const{selectedOptions:b}=e;b!=null&&b.length&&Q(b[b.length-1])}}let v=null;function G(d){const{value:b}=r;if(b){const Z=d.target.value;b.textContent=Z,re()}e.ignoreComposition&&J.value?v=d:S(d)}function ge(){J.value=!0}function Oe(){J.value=!1,e.ignoreComposition&&S(v),v=null}function _e(d){var b;P.value=!0,(b=e.onPatternFocus)===null||b===void 0||b.call(e,d)}function be(d){var b;P.value=!1,(b=e.onPatternBlur)===null||b===void 0||b.call(e,d)}function se(){var d,b;if(e.filterable)P.value=!1,(d=p.value)===null||d===void 0||d.blur(),(b=u.value)===null||b===void 0||b.blur();else if(e.multiple){const{value:Z}=l;Z==null||Z.blur()}else{const{value:Z}=m;Z==null||Z.blur()}}function ke(){var d,b,Z;e.filterable?(P.value=!1,(d=p.value)===null||d===void 0||d.focus()):e.multiple?(b=l.value)===null||b===void 0||b.focus():(Z=m.value)===null||Z===void 0||Z.focus()}function we(){const{value:d}=u;d&&(pe(),d.focus())}function Pe(){const{value:d}=u;d&&d.blur()}function Ie(d){const{value:b}=g;b&&b.setTextContent(`+${d}`)}function Be(){const{value:d}=O;return d}function $e(){return u.value}let Ce=null;function Se(){Ce!==null&&window.clearTimeout(Ce)}function Ee(){e.active||(Se(),Ce=window.setTimeout(()=>{j.value&&(R.value=!0)},100))}function Ne(){Se()}function Ae(d){d||(Se(),R.value=!1)}Me(j,d=>{d||(R.value=!1)}),it(()=>{Ln(()=>{const d=p.value;d&&(e.disabled?d.removeAttribute("tabindex"):d.tabIndex=P.value?-1:0)})}),Qt(c,e.onResize);const{inlineThemeDisabled:Fe}=e,Re=F(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:b},self:{borderRadius:Z,color:st,placeholderColor:dt,textColor:He,paddingSingle:We,paddingMultiple:Ke,caretColor:ut,colorDisabled:ct,textColorDisabled:Ue,placeholderColorDisabled:ye,colorActive:t,boxShadowFocus:f,boxShadowActive:T,boxShadowHover:E,border:I,borderFocus:M,borderHover:B,borderActive:X,arrowColor:ce,arrowColorDisabled:en,loadingColor:tn,colorActiveWarning:nn,boxShadowFocusWarning:on,boxShadowActiveWarning:ln,boxShadowHoverWarning:rn,borderWarning:an,borderFocusWarning:sn,borderHoverWarning:dn,borderActiveWarning:un,colorActiveError:cn,boxShadowFocusError:fn,boxShadowActiveError:vn,boxShadowHoverError:hn,borderError:pn,borderFocusError:gn,borderHoverError:bn,borderActiveError:mn,clearColor:wn,clearColorHover:yn,clearColorPressed:xn,clearSize:Cn,arrowSize:Sn,[me("height",d)]:Rn,[me("fontSize",d)]:Tn}}=x.value,qe=Ve(We),Ge=Ve(Ke);return{"--n-bezier":b,"--n-border":I,"--n-border-active":X,"--n-border-focus":M,"--n-border-hover":B,"--n-border-radius":Z,"--n-box-shadow-active":T,"--n-box-shadow-focus":f,"--n-box-shadow-hover":E,"--n-caret-color":ut,"--n-color":st,"--n-color-active":t,"--n-color-disabled":ct,"--n-font-size":Tn,"--n-height":Rn,"--n-padding-single-top":qe.top,"--n-padding-multiple-top":Ge.top,"--n-padding-single-right":qe.right,"--n-padding-multiple-right":Ge.right,"--n-padding-single-left":qe.left,"--n-padding-multiple-left":Ge.left,"--n-padding-single-bottom":qe.bottom,"--n-padding-multiple-bottom":Ge.bottom,"--n-placeholder-color":dt,"--n-placeholder-color-disabled":ye,"--n-text-color":He,"--n-text-color-disabled":Ue,"--n-arrow-color":ce,"--n-arrow-color-disabled":en,"--n-loading-color":tn,"--n-color-active-warning":nn,"--n-box-shadow-focus-warning":on,"--n-box-shadow-active-warning":ln,"--n-box-shadow-hover-warning":rn,"--n-border-warning":an,"--n-border-focus-warning":sn,"--n-border-hover-warning":dn,"--n-border-active-warning":un,"--n-color-active-error":cn,"--n-box-shadow-focus-error":fn,"--n-box-shadow-active-error":vn,"--n-box-shadow-hover-error":hn,"--n-border-error":pn,"--n-border-focus-error":gn,"--n-border-hover-error":bn,"--n-border-active-error":mn,"--n-clear-size":Cn,"--n-clear-color":wn,"--n-clear-color-hover":yn,"--n-clear-color-pressed":xn,"--n-arrow-size":Sn}}),ne=Fe?at("internal-selection",F(()=>e.size[0]),Re,e):void 0;return{mergedTheme:x,mergedClearable:C,mergedClsPrefix:n,rtlEnabled:i,patternInputFocused:P,filterablePlaceholder:A,label:V,selected:j,showTagsPanel:R,isComposing:J,counterRef:g,counterWrapperRef:O,patternInputMirrorRef:r,patternInputRef:u,selfRef:c,multipleElRef:l,singleElRef:m,patternInputWrapperRef:p,overflowRef:k,inputTagElRef:z,handleMouseDown:te,handleFocusin:D,handleClear:W,handleMouseEnter:K,handleMouseLeave:U,handleDeleteOption:Q,handlePatternKeyDown:s,handlePatternInputInput:G,handlePatternInputBlur:be,handlePatternInputFocus:_e,handleMouseEnterCounter:Ee,handleMouseLeaveCounter:Ne,handleFocusout:H,handleCompositionEnd:Oe,handleCompositionStart:ge,onPopoverUpdateShow:Ae,focus:ke,focusInput:we,blur:se,blurInput:Pe,updateCounter:Ie,getCounter:Be,getTail:$e,renderLabel:e.renderLabel,cssVars:Fe?void 0:Re,themeClass:ne==null?void 0:ne.themeClass,onRender:ne==null?void 0:ne.onRender}},render(){const{status:e,multiple:n,size:o,disabled:i,filterable:r,maxTagCount:u,bordered:c,clsPrefix:l,ellipsisTagPopoverProps:m,onRender:p,renderTag:g,renderLabel:O}=this;p==null||p();const k=u==="responsive",z=typeof u=="number",R=k||z,P=a(Dn,null,{default:()=>a(bo,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var x,C;return(C=(x=this.$slots).arrow)===null||C===void 0?void 0:C.call(x)}})});let w;if(n){const{labelField:x}=this,C=S=>a("div",{class:`${l}-base-selection-tag-wrapper`,key:S.value},g?g({option:S,handleClose:()=>{this.handleDeleteOption(S)}}):a(vt,{size:o,closable:!S.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(S)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>O?O(S,!0):ze(S[x],S,!0)})),A=()=>(z?this.selectedOptions.slice(0,u):this.selectedOptions).map(C),V=r?a("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),a("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,j=k?()=>a("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},a(vt,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let re;if(z){const S=this.selectedOptions.length-u;S>0&&(re=a("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},a(vt,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${S}`})))}const ie=k?r?a(Ft,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:A,counter:j,tail:()=>V}):a(Ft,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:A,counter:j}):z&&re?A().concat(re):A(),pe=R?()=>a("div",{class:`${l}-base-selection-popover`},k?A():this.selectedOptions.map(C)):void 0,de=R?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},m):null,h=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?a("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},a("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,y=r?a("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},ie,k?null:V,P):a("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:i?void 0:0},ie,P);w=a(et,null,R?a(Vn,Object.assign({},de,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>y,default:pe}):y,h)}else if(r){const x=this.pattern||this.isComposing,C=this.active?!x:!this.selected,A=this.active?!1:this.selected;w=a("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`,title:this.patternInputFocused?void 0:Bt(this.label)},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),A?a("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},a("div",{class:`${l}-base-selection-overlay__wrapper`},g?g({option:this.selectedOption,handleClose:()=>{}}):O?O(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):null,C?a("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,P)}else w=a("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?a("div",{class:`${l}-base-selection-input`,title:Bt(this.label),key:"input"},a("div",{class:`${l}-base-selection-input__content`},g?g({option:this.selectedOption,handleClose:()=>{}}):O?O(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):a("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),P);return a("div",{ref:"selfRef",class:[`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},w,c?a("div",{class:`${l}-base-selection__border`}):null,c?a("div",{class:`${l}-base-selection__state-border`}):null)}});function lt(e){return e.type==="group"}function Jt(e){return e.type==="ignored"}function mt(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Io(e,n){return{getIsGroup:lt,getIgnored:Jt,getKey(i){return lt(i)?i.name||i.key||"key-required":i[e]},getChildren(i){return i[n]}}}function Bo(e,n,o,i){if(!n)return e;function r(u){if(!Array.isArray(u))return[];const c=[];for(const l of u)if(lt(l)){const m=r(l[i]);m.length&&c.push(Object.assign({},l,{[i]:m}))}else{if(Jt(l))continue;n(o,l)&&c.push(l)}return c}return r(e)}function $o(e,n,o){const i=new Map;return e.forEach(r=>{lt(r)?r[o].forEach(u=>{i.set(u[n],u)}):i.set(r[n],r)}),i}const Eo=ue([$("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),$("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Gt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),No=Object.assign(Object.assign({},he.props),{to:yt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Lt=ee({name:"Select",props:No,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:i,inlineThemeDisabled:r}=rt(e),u=he("Select","-select",Eo,jn,e,n),c=_(e.defaultValue),l=oe(e,"value"),m=zt(l,c),p=_(!1),g=_(""),O=Hn(e,["items","options"]),k=_([]),z=_([]),R=F(()=>z.value.concat(k.value).concat(O.value)),P=F(()=>{const{filter:t}=e;if(t)return t;const{labelField:f,valueField:T}=e;return(E,I)=>{if(!I)return!1;const M=I[f];if(typeof M=="string")return mt(E,M);const B=I[T];return typeof B=="string"?mt(E,B):typeof B=="number"?mt(E,String(B)):!1}}),w=F(()=>{if(e.remote)return O.value;{const{value:t}=R,{value:f}=g;return!f.length||!e.filterable?t:Bo(t,P.value,f,e.childrenField)}}),x=F(()=>{const{valueField:t,childrenField:f}=e,T=Io(t,f);return Wn(w.value,T)}),C=F(()=>$o(R.value,e.valueField,e.childrenField)),A=_(!1),V=zt(oe(e,"show"),A),j=_(null),re=_(null),ie=_(null),{localeRef:pe}=Xt("Select"),de=F(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:pe.value.placeholder}),ae=[],h=_(new Map),y=F(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:f,valueField:T}=e;return E=>({[f]:String(E),[T]:E})}return t===!1?!1:f=>Object.assign(t(f),{value:f})});function S(t){const f=e.remote,{value:T}=h,{value:E}=C,{value:I}=y,M=[];return t.forEach(B=>{if(E.has(B))M.push(E.get(B));else if(f&&T.has(B))M.push(T.get(B));else if(I){const X=I(B);X&&M.push(X)}}),M}const D=F(()=>{if(e.multiple){const{value:t}=m;return Array.isArray(t)?S(t):[]}return null}),H=F(()=>{const{value:t}=m;return!e.multiple&&!Array.isArray(t)?t===null?null:S([t])[0]||null:null}),W=Kn(e),{mergedSizeRef:K,mergedDisabledRef:U,mergedStatusRef:te}=W;function Q(t,f){const{onChange:T,"onUpdate:value":E,onUpdateValue:I}=e,{nTriggerFormChange:M,nTriggerFormInput:B}=W;T&&fe(T,t,f),I&&fe(I,t,f),E&&fe(E,t,f),c.value=t,M(),B()}function J(t){const{onBlur:f}=e,{nTriggerFormBlur:T}=W;f&&fe(f,t),T()}function s(){const{onClear:t}=e;t&&fe(t)}function v(t){const{onFocus:f,showOnFocus:T}=e,{nTriggerFormFocus:E}=W;f&&fe(f,t),E(),T&&be()}function G(t){const{onSearch:f}=e;f&&fe(f,t)}function ge(t){const{onScroll:f}=e;f&&fe(f,t)}function Oe(){var t;const{remote:f,multiple:T}=e;if(f){const{value:E}=h;if(T){const{valueField:I}=e;(t=D.value)===null||t===void 0||t.forEach(M=>{E.set(M[I],M)})}else{const I=H.value;I&&E.set(I[e.valueField],I)}}}function _e(t){const{onUpdateShow:f,"onUpdate:show":T}=e;f&&fe(f,t),T&&fe(T,t),A.value=t}function be(){U.value||(_e(!0),A.value=!0,e.filterable&&Ke())}function se(){_e(!1)}function ke(){g.value="",z.value=ae}const we=_(!1);function Pe(){e.filterable&&(we.value=!0)}function Ie(){e.filterable&&(we.value=!1,V.value||ke())}function Be(){U.value||(V.value?e.filterable?Ke():se():be())}function $e(t){var f,T;!((T=(f=ie.value)===null||f===void 0?void 0:f.selfRef)===null||T===void 0)&&T.contains(t.relatedTarget)||(p.value=!1,J(t),se())}function Ce(t){v(t),p.value=!0}function Se(){p.value=!0}function Ee(t){var f;!((f=j.value)===null||f===void 0)&&f.$el.contains(t.relatedTarget)||(p.value=!1,J(t),se())}function Ne(){var t;(t=j.value)===null||t===void 0||t.focus(),se()}function Ae(t){var f;V.value&&(!((f=j.value)===null||f===void 0)&&f.$el.contains(Qn(t))||se())}function Fe(t){if(!Array.isArray(t))return[];if(y.value)return Array.from(t);{const{remote:f}=e,{value:T}=C;if(f){const{value:E}=h;return t.filter(I=>T.has(I)||E.has(I))}else return t.filter(E=>T.has(E))}}function Re(t){ne(t.rawNode)}function ne(t){if(U.value)return;const{tag:f,remote:T,clearFilterAfterSelect:E,valueField:I}=e;if(f&&!T){const{value:M}=z,B=M[0]||null;if(B){const X=k.value;X.length?X.push(B):k.value=[B],z.value=ae}}if(T&&h.value.set(t[I],t),e.multiple){const M=Fe(m.value),B=M.findIndex(X=>X===t[I]);if(~B){if(M.splice(B,1),f&&!T){const X=d(t[I]);~X&&(k.value.splice(X,1),E&&(g.value=""))}}else M.push(t[I]),E&&(g.value="");Q(M,S(M))}else{if(f&&!T){const M=d(t[I]);~M?k.value=[k.value[M]]:k.value=ae}We(),se(),Q(t[I],t)}}function d(t){return k.value.findIndex(T=>T[e.valueField]===t)}function b(t){V.value||be();const{value:f}=t.target;g.value=f;const{tag:T,remote:E}=e;if(G(f),T&&!E){if(!f){z.value=ae;return}const{onCreate:I}=e,M=I?I(f):{[e.labelField]:f,[e.valueField]:f},{valueField:B,labelField:X}=e;O.value.some(ce=>ce[B]===M[B]||ce[X]===M[X])||k.value.some(ce=>ce[B]===M[B]||ce[X]===M[X])?z.value=ae:z.value=[M]}}function Z(t){t.stopPropagation();const{multiple:f}=e;!f&&e.filterable&&se(),s(),f?Q([],[]):Q(null,null)}function st(t){!je(t,"action")&&!je(t,"empty")&&!je(t,"header")&&t.preventDefault()}function dt(t){ge(t)}function He(t){var f,T,E,I,M;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((f=j.value)===null||f===void 0)&&f.isComposing)){if(V.value){const B=(T=ie.value)===null||T===void 0?void 0:T.getPendingTmNode();B?Re(B):e.filterable||(se(),We())}else if(be(),e.tag&&we.value){const B=z.value[0];if(B){const X=B[e.valueField],{value:ce}=m;e.multiple&&Array.isArray(ce)&&ce.includes(X)||ne(B)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;V.value&&((E=ie.value)===null||E===void 0||E.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;V.value?(I=ie.value)===null||I===void 0||I.next():be();break;case"Escape":V.value&&(Jn(t),se()),(M=j.value)===null||M===void 0||M.focus();break}}function We(){var t;(t=j.value)===null||t===void 0||t.focus()}function Ke(){var t;(t=j.value)===null||t===void 0||t.focusInput()}function ut(){var t;V.value&&((t=re.value)===null||t===void 0||t.syncPosition())}Oe(),Me(oe(e,"options"),Oe);const ct={focus:()=>{var t;(t=j.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=j.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=j.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=j.value)===null||t===void 0||t.blurInput()}},Ue=F(()=>{const{self:{menuBoxShadow:t}}=u.value;return{"--n-menu-box-shadow":t}}),ye=r?at("select",void 0,Ue,e):void 0;return Object.assign(Object.assign({},ct),{mergedStatus:te,mergedClsPrefix:n,mergedBordered:o,namespace:i,treeMate:x,isMounted:Un(),triggerRef:j,menuRef:ie,pattern:g,uncontrolledShow:A,mergedShow:V,adjustedTo:yt(e),uncontrolledValue:c,mergedValue:m,followerRef:re,localizedPlaceholder:de,selectedOption:H,selectedOptions:D,mergedSize:K,mergedDisabled:U,focused:p,activeWithoutMenuOpen:we,inlineThemeDisabled:r,onTriggerInputFocus:Pe,onTriggerInputBlur:Ie,handleTriggerOrMenuResize:ut,handleMenuFocus:Se,handleMenuBlur:Ee,handleMenuTabOut:Ne,handleTriggerClick:Be,handleToggle:Re,handleDeleteOption:ne,handlePatternInput:b,handleClear:Z,handleTriggerBlur:$e,handleTriggerFocus:Ce,handleKeydown:He,handleMenuAfterLeave:ke,handleMenuClickOutside:Ae,handleMenuScroll:dt,handleMenuKeydown:He,handleMenuMousedown:st,mergedTheme:u,cssVars:r?void 0:Ue,themeClass:ye==null?void 0:ye.themeClass,onRender:ye==null?void 0:ye.onRender})},render(){return a("div",{class:`${this.mergedClsPrefix}-select`},a(qn,null,{default:()=>[a(Gn,null,{default:()=>a(Po,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),a(Yn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===yt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>a(qt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Zn(a(zo,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var i,r;return[(r=(i=this.$slots).empty)===null||r===void 0?void 0:r.call(i)]},header:()=>{var i,r;return[(r=(i=this.$slots).header)===null||r===void 0?void 0:r.call(i)]},action:()=>{var i,r;return[(r=(i=this.$slots).action)===null||r===void 0?void 0:r.call(i)]}}),this.displayDirective==="show"?[[Xn,this.mergedShow],[Mt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Mt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Ao=$("ellipsis",{overflow:"hidden"},[ot("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),le("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),le("cursor-pointer",`
 cursor: pointer;
 `)]);function Dt(e){return`${e}-ellipsis--line-clamp`}function Vt(e,n){return`${e}-ellipsis--cursor-${n}`}const Lo=Object.assign(Object.assign({},he.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),Do=ee({name:"Ellipsis",inheritAttrs:!1,props:Lo,setup(e,{slots:n,attrs:o}){const i=eo(),r=he("Ellipsis","-ellipsis",Ao,to,e,i),u=_(null),c=_(null),l=_(null),m=_(!1),p=F(()=>{const{lineClamp:w}=e,{value:x}=m;return w!==void 0?{textOverflow:"","-webkit-line-clamp":x?"":w}:{textOverflow:x?"":"ellipsis","-webkit-line-clamp":""}});function g(){let w=!1;const{value:x}=m;if(x)return!0;const{value:C}=u;if(C){const{lineClamp:A}=e;if(z(C),A!==void 0)w=C.scrollHeight<=C.offsetHeight;else{const{value:V}=c;V&&(w=V.getBoundingClientRect().width<=C.getBoundingClientRect().width)}R(C,w)}return w}const O=F(()=>e.expandTrigger==="click"?()=>{var w;const{value:x}=m;x&&((w=l.value)===null||w===void 0||w.setShow(!1)),m.value=!x}:void 0);Ht(()=>{var w;e.tooltip&&((w=l.value)===null||w===void 0||w.setShow(!1))});const k=()=>a("span",Object.assign({},Wt(o,{class:[`${i.value}-ellipsis`,e.lineClamp!==void 0?Dt(i.value):void 0,e.expandTrigger==="click"?Vt(i.value,"pointer"):void 0],style:p.value}),{ref:"triggerRef",onClick:O.value,onMouseenter:e.expandTrigger==="click"?g:void 0}),e.lineClamp?n:a("span",{ref:"triggerInnerRef"},n));function z(w){if(!w)return;const x=p.value,C=Dt(i.value);e.lineClamp!==void 0?P(w,C,"add"):P(w,C,"remove");for(const A in x)w.style[A]!==x[A]&&(w.style[A]=x[A])}function R(w,x){const C=Vt(i.value,"pointer");e.expandTrigger==="click"&&!x?P(w,C,"add"):P(w,C,"remove")}function P(w,x,C){C==="add"?w.classList.contains(x)||w.classList.add(x):w.classList.contains(x)&&w.classList.remove(x)}return{mergedTheme:r,triggerRef:u,triggerInnerRef:c,tooltipRef:l,handleClick:O,renderTrigger:k,getTooltipDisabled:g}},render(){var e;const{tooltip:n,renderTrigger:o,$slots:i}=this;if(n){const{mergedTheme:r}=this;return a(no,Object.assign({ref:"tooltipRef",placement:"top"},n,{getDisabled:this.getTooltipDisabled,theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip}),{trigger:o,default:(e=i.tooltip)!==null&&e!==void 0?e:i.default})}else return o()}}),Vo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},jo=xe("path",{d:"M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z",fill:"currentColor"},null,-1),Ho=[jo],Wo=ee({name:"Close",render:function(n,o){return ve(),Te("svg",Vo,Ho)}}),Ko={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Uo=xe("path",{d:"M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 0 0-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 0 0 140-66.92",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),qo=xe("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M32 256l44-44l46 44"},null,-1),Go=xe("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M480 256l-44 44l-46-44"},null,-1),Yo=[Uo,qo,Go],Zo=ee({name:"Sync",render:function(n,o){return ve(),Te("svg",Ko,Yo)}}),Xo={class:"moduls-scroll-section"},Qo=ee({__name:"Scroll",props:{dynamic:{type:Boolean}},emits:["bottomReached"],setup(e,{emit:n}){const o=e,i=n,r=_();function u(){const l=r.value;function m(){if(l){const p=l.clientHeight<l.scrollHeight?"var(--moduls-scroll-padding)":"0";l.style.paddingRight=p;const g=l.clientWidth<l.scrollWidth?"var(--moduls-scroll-padding)":"0";l.style.paddingBottom=g}}l?(m(),o.dynamic&&new ResizeObserver(m).observe(l)):requestAnimationFrame(u)}u();const c=oo(l=>i("bottomReached",l));return(l,m)=>(ve(),Te("section",Xo,[xe("div",{ref_key:"ScrollDom",ref:r,class:"moduls-scroll",onScroll:m[0]||(m[0]=(...p)=>N(c)&&N(c)(...p))},[xe("div",null,[tt(l.$slots,"default",{},void 0,!0)])],544)]))}}),jt=Rt(Qo,[["__scopeId","data-v-d9097fdd"]]),Jo={class:"popup-layout"},el=ee({__name:"Popup",emits:["Closure"],setup(e,{emit:n}){const o=n;return(i,r)=>(ve(),Te("section",Jo,[xe("header",null,[Y(N(Do),null,{default:q(()=>[tt(i.$slots,"header",{},void 0,!0)]),_:3}),Y(N(nt),null,{default:q(()=>[tt(i.$slots,"tool",{},void 0,!0),xe("div",{class:"clickable",onClick:r[0]||(r[0]=u=>o("Closure"))},[Y(N(xt),{size:"22",component:N(Wo)},null,8,["component"])])]),_:3})]),tt(i.$slots,"default",{},void 0,!0)]))}}),tl=Rt(el,[["__scopeId","data-v-abb3a2ef"]]),nl=ee({__name:"index",emits:["Closure"],setup(e,{emit:n}){const o=n;function i(){io(),o("Closure")}lo([".Settings.center-positioning"],i);const r=_(),u=_(),c=F(()=>{const l=ho.value.components.popups.settings;return u.value&&(r.value=l.tabs[0].name,requestAnimationFrame(()=>{u.value.syncBarPosition()})),l});return(l,m)=>(ve(),ht(tl,{class:"Settings center-positioning",onClosure:i},{header:q(()=>[Le(De(c.value.header),1)]),default:q(()=>[Y(N(po),{ref_key:"tabsRef",ref:u,value:r.value,"onUpdate:value":m[2]||(m[2]=p=>r.value=p),animated:!0},{default:q(()=>[Y(N(It),{name:c.value.tabs[0].name},{default:q(()=>[Y(jt,null,{default:q(()=>[Y(pt,null,{title:q(()=>[Le(De(c.value.tabs[0].items[0].title),1)]),value:q(()=>[Y(N(Lt),{value:N(Ze).language,"onUpdate:value":m[0]||(m[0]=p=>N(Ze).language=p),options:N(ro)},null,8,["value","options"])]),_:1}),Y(pt,null,{title:q(()=>[Le(De(c.value.tabs[0].items[1].title),1)]),value:q(()=>[Y(N(Lt),{value:N(Ze).theme,"onUpdate:value":m[1]||(m[1]=p=>N(Ze).theme=p),options:N(ao)},null,8,["value","options"])]),_:1})]),_:1})]),_:1},8,["name"]),Y(N(It),{name:c.value.tabs[1].name},{default:q(()=>[Y(jt,null,{default:q(()=>[(ve(!0),Te(et,null,Pt(N(so),p=>(ve(),ht(pt,{key:p.id},{title:q(()=>[Le(De(p.title),1)]),value:q(()=>[Y(N(nt),{justify:"space-between"},{default:q(()=>[Y(N(nt),null,{default:q(()=>[Y(N(Xe),{quaternary:"",disabled:!p.isCustom,onClick:g=>N(uo)(p.id)},{default:q(()=>[Y(N(xt),{size:"20",component:N(Zo)},null,8,["component"])]),_:2},1032,["disabled","onClick"]),Y(N(Xe),{quaternary:"",onClick:g=>N(co)(p)},{default:q(()=>[Y(N(fo),{size:"20",icon:"Edit"})]),_:2},1032,["onClick"])]),_:2},1024),Y(N(nt),null,{default:q(()=>[(ve(!0),Te(et,null,Pt(p.shortcutKey,(g,O)=>(ve(),Te(et,{key:O},[Y(N(Xe),null,{default:q(()=>[Le(De(g),1)]),_:2},1024),O!=p.shortcutKey.length-1?(ve(),ht(N(Xe),{key:0,bordered:!1,style:{"pointer-events":"none"}},{default:q(()=>[Y(N(xt),{size:"20",component:N(go)},null,8,["component"])]),_:1})):vo("",!0)],64))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["name"])]),_:1},8,["value"])]),_:1}))}}),cl=Rt(nl,[["__scopeId","data-v-36edbccb"]]);export{cl as default};
