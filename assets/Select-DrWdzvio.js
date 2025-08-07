import{d as de,cy as en,cz as tn,aI as Ke,cA as nn,cB as on,z as k,J as P,ag as je,a4 as ot,ab as Ve,k as r,a3 as ln,ai as st,cC as Je,am as rn,cD as dt,a7 as yt,p as _,ap as E,Q as re,v as Ue,x as pe,cE as an,q as rt,b7 as sn,X as he,F as Ge,$ as xt,cF as at,cG as Re,au as Ct,R as le,S as lt,an as St,W as Rt,E as Q,cH as dn,cI as cn,C as Fe,D as Ft,cJ as _e,K as ct,c0 as ut,ae as un,a6 as fn,Y as hn,H as Be,cK as vn,cL as gn,V as pn,cM as bn,aW as Qe,cN as ft,O as mn,Z as wn,cO as yn,U as ht,cP as xn,A as Cn,ax as Sn,aA as Rn,a0 as it,aB as Fn,aC as Tn,aD as On,aE as zn,c9 as Mn,aF as vt,aH as Pn,aG as kn,I as se}from"./index-Bas7IHTD.js";import{u as Tt}from"./use-locale-D-nnFvm4.js";import{N as In}from"./Suffix-D2ps6rD6.js";import{g as gt}from"./attribute-Cz32yFEB.js";function et(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(d=>{d&&d(o)})}}function pt(e){return e&-e}class _n{constructor(n,o){this.l=n,this.min=o;const d=new Array(n+1);for(let a=0;a<n+1;++a)d[a]=0;this.ft=d}add(n,o){if(o===0)return;const{l:d,ft:a}=this;for(n+=1;n<=d;)a[n]+=o,n+=pt(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:d,l:a}=this;if(n>a)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let c=n*d;for(;n>0;)c+=o[n],n-=pt(n);return c}getBound(n){let o=0,d=this.l;for(;d>o;){const a=Math.floor((o+d)/2),c=this.sum(a);if(c>n){d=a;continue}else if(c<n){if(o===a)return this.sum(o+1)<=n?o+1:a;o=a}else return a}return o}}let He;function Bn(){return typeof document>"u"?!1:(He===void 0&&("matchMedia"in window?He=window.matchMedia("(pointer:coarse)").matches:He=!1),He)}let tt;function bt(){return typeof document>"u"?1:(tt===void 0&&(tt="chrome"in window?window.devicePixelRatio:1),tt)}const $n=Je(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Je("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Je("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),En=de({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=en();$n.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:tn,ssr:n}),Ke(()=>{const{defaultScrollIndex:h,defaultScrollKey:p}=e;h!=null?y({index:h}):p!=null&&y({key:p})});let o=!1,d=!1;nn(()=>{if(o=!1,!d){d=!0;return}y({top:S.value,left:b})}),on(()=>{o=!0,d||(d=!0)});const a=k(()=>{const h=new Map,{keyField:p}=e;return e.items.forEach((m,A)=>{h.set(m[p],A)}),h}),c=P(null),v=P(void 0),s=new Map,F=k(()=>{const{items:h,itemSize:p,keyField:m}=e,A=new _n(h.length,p);return h.forEach((D,V)=>{const H=D[m],j=s.get(H);j!==void 0&&A.add(V,j)}),A}),C=P(0);let b=0;const S=P(0),x=je(()=>Math.max(F.value.getBound(S.value-ot(e.paddingTop))-1,0)),T=k(()=>{const{value:h}=v;if(h===void 0)return[];const{items:p,itemSize:m}=e,A=x.value,D=Math.min(A+Math.ceil(h/m+1),p.length-1),V=[];for(let H=A;H<=D;++H)V.push(p[H]);return V}),y=(h,p)=>{if(typeof h=="number"){O(h,p,"auto");return}const{left:m,top:A,index:D,key:V,position:H,behavior:j,debounce:X=!0}=h;if(m!==void 0||A!==void 0)O(m,A,j);else if(D!==void 0)B(D,j,X);else if(V!==void 0){const Y=a.value.get(V);Y!==void 0&&B(Y,j,X)}else H==="bottom"?O(0,Number.MAX_SAFE_INTEGER,j):H==="top"&&O(0,0,j)};let $,K=null;function B(h,p,m){const{value:A}=F,D=A.sum(h)+ot(e.paddingTop);if(!m)c.value.scrollTo({left:0,top:D,behavior:p});else{$=h,K!==null&&window.clearTimeout(K),K=window.setTimeout(()=>{$=void 0,K=null},16);const{scrollTop:V,offsetHeight:H}=c.value;if(D>V){const j=A.get(h);D+j<=V+H||c.value.scrollTo({left:0,top:D+j-H,behavior:p})}else c.value.scrollTo({left:0,top:D,behavior:p})}}function O(h,p,m){c.value.scrollTo({left:h,top:p,behavior:m})}function L(h,p){var m,A,D;if(o||e.ignoreItemResize||ne(p.target))return;const{value:V}=F,H=a.value.get(h),j=V.get(H),X=(D=(A=(m=p.borderBoxSize)===null||m===void 0?void 0:m[0])===null||A===void 0?void 0:A.blockSize)!==null&&D!==void 0?D:p.contentRect.height;if(X===j)return;X-e.itemSize===0?s.delete(h):s.set(h,X-e.itemSize);const Z=X-j;if(Z===0)return;V.add(H,Z);const l=c.value;if(l!=null){if($===void 0){const f=V.sum(H);l.scrollTop>f&&l.scrollBy(0,Z)}else if(H<$)l.scrollBy(0,Z);else if(H===$){const f=V.sum(H);X+f>l.scrollTop+l.offsetHeight&&l.scrollBy(0,Z)}ie()}C.value++}const W=!Bn();let N=!1;function te(h){var p;(p=e.onScroll)===null||p===void 0||p.call(e,h),(!W||!N)&&ie()}function ee(h){var p;if((p=e.onWheel)===null||p===void 0||p.call(e,h),W){const m=c.value;if(m!=null){if(h.deltaX===0&&(m.scrollTop===0&&h.deltaY<=0||m.scrollTop+m.offsetHeight>=m.scrollHeight&&h.deltaY>=0))return;h.preventDefault(),m.scrollTop+=h.deltaY/bt(),m.scrollLeft+=h.deltaX/bt(),ie(),N=!0,rn(()=>{N=!1})}}}function ce(h){if(o||ne(h.target)||h.contentRect.height===v.value)return;v.value=h.contentRect.height;const{onResize:p}=e;p!==void 0&&p(h)}function ie(){const{value:h}=c;h!=null&&(S.value=h.scrollTop,b=h.scrollLeft)}function ne(h){let p=h;for(;p!==null;){if(p.style.display==="none")return!0;p=p.parentElement}return!1}return{listHeight:v,listStyle:{overflow:"auto"},keyToIndex:a,itemsStyle:k(()=>{const{itemResizable:h}=e,p=Ve(F.value.sum());return C.value,[e.itemsStyle,{boxSizing:"content-box",height:h?"":p,minHeight:h?p:"",paddingTop:Ve(e.paddingTop),paddingBottom:Ve(e.paddingBottom)}]}),visibleItemsStyle:k(()=>(C.value,{transform:`translateY(${Ve(F.value.sum(x.value))})`})),viewportItems:T,listElRef:c,itemsElRef:P(null),scrollTo:y,handleListResize:ce,handleListScroll:te,handleListWheel:ee,handleItemResize:L}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:d}=this;return r(st,{onResize:this.handleListResize},{default:()=>{var a,c;return r("div",ln(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?r("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[r(d,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(v=>{const s=v[n],F=o.get(s),C=this.$slots.default({item:v,index:F})[0];return e?r(st,{key:s,onResize:b=>this.handleItemResize(s,b)},{default:()=>C}):(C.key=s,C)})})]):(c=(a=this.$slots).empty)===null||c===void 0?void 0:c.call(a)])}})}});function Ot(e,n){n&&(Ke(()=>{const{value:o}=e;o&&dt.registerHandler(o,n)}),yt(()=>{const{value:o}=e;o&&dt.unregisterHandler(o)}))}const An=de({name:"Checkmark",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},r("g",{fill:"none"},r("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Nn=de({name:"Empty",render(){return r("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),r("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Ln=de({props:{onFocus:Function,onBlur:Function},setup(e){return()=>r("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),Dn=_("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[E("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[re("+",[E("description",`
 margin-top: 8px;
 `)])]),E("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),E("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Vn=Object.assign(Object.assign({},pe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Hn=de({name:"Empty",props:Vn,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=Ue(e),d=pe("Empty","-empty",Dn,an,e,n),{localeRef:a}=Tt("Empty"),c=rt(sn,null),v=k(()=>{var b,S,x;return(b=e.description)!==null&&b!==void 0?b:(x=(S=c==null?void 0:c.mergedComponentPropsRef.value)===null||S===void 0?void 0:S.Empty)===null||x===void 0?void 0:x.description}),s=k(()=>{var b,S;return((S=(b=c==null?void 0:c.mergedComponentPropsRef.value)===null||b===void 0?void 0:b.Empty)===null||S===void 0?void 0:S.renderIcon)||(()=>r(Nn,null))}),F=k(()=>{const{size:b}=e,{common:{cubicBezierEaseInOut:S},self:{[he("iconSize",b)]:x,[he("fontSize",b)]:T,textColor:y,iconColor:$,extraTextColor:K}}=d.value;return{"--n-icon-size":x,"--n-font-size":T,"--n-bezier":S,"--n-text-color":y,"--n-icon-color":$,"--n-extra-text-color":K}}),C=o?Ge("empty",k(()=>{let b="";const{size:S}=e;return b+=S[0],b}),F,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:s,localizedDescription:k(()=>v.value||a.value.description),cssVars:o?void 0:F,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:o}=this;return o==null||o(),r("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?r("div",{class:`${n}-empty__icon`},e.icon?e.icon():r(xt,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?r("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?r("div",{class:`${n}-empty__extra`},e.extra()):null)}});function jn(e,n){return r(Ct,{name:"fade-in-scale-up-transition"},{default:()=>e?r(xt,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>r(An)}):null})}const mt=de({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:d,valueSetRef:a,renderLabelRef:c,renderOptionRef:v,labelFieldRef:s,valueFieldRef:F,showCheckmarkRef:C,nodePropsRef:b,handleOptionClick:S,handleOptionMouseEnter:x}=rt(at),T=je(()=>{const{value:B}=o;return B?e.tmNode.key===B.key:!1});function y(B){const{tmNode:O}=e;O.disabled||S(B,O)}function $(B){const{tmNode:O}=e;O.disabled||x(B,O)}function K(B){const{tmNode:O}=e,{value:L}=T;O.disabled||L||x(B,O)}return{multiple:d,isGrouped:je(()=>{const{tmNode:B}=e,{parent:O}=B;return O&&O.rawNode.type==="group"}),showCheckmark:C,nodeProps:b,isPending:T,isSelected:je(()=>{const{value:B}=n,{value:O}=d;if(B===null)return!1;const L=e.tmNode.rawNode[F.value];if(O){const{value:W}=a;return W.has(L)}else return B===L}),labelField:s,renderLabel:c,renderOption:v,handleMouseMove:K,handleMouseEnter:$,handleClick:y}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:d,isGrouped:a,showCheckmark:c,nodeProps:v,renderOption:s,renderLabel:F,handleClick:C,handleMouseEnter:b,handleMouseMove:S}=this,x=jn(o,e),T=F?[F(n,o),c&&x]:[Re(n[this.labelField],n,o),c&&x],y=v==null?void 0:v(n),$=r("div",Object.assign({},y,{class:[`${e}-base-select-option`,n.class,y==null?void 0:y.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:a,[`${e}-base-select-option--pending`]:d,[`${e}-base-select-option--show-checkmark`]:c}],style:[(y==null?void 0:y.style)||"",n.style||""],onClick:et([C,y==null?void 0:y.onClick]),onMouseenter:et([b,y==null?void 0:y.onMouseenter]),onMousemove:et([S,y==null?void 0:y.onMousemove])}),r("div",{class:`${e}-base-select-option__content`},T));return n.render?n.render({node:$,option:n,selected:o}):s?s({node:$,option:n,selected:o}):$}}),wt=de({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:d}=rt(at);return{labelField:o,nodeProps:d,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:d,tmNode:{rawNode:a}}=this,c=d==null?void 0:d(a),v=n?n(a,!1):Re(a[this.labelField],a,!1),s=r("div",Object.assign({},c,{class:[`${e}-base-select-group-header`,c==null?void 0:c.class]}),v);return a.render?a.render({node:s,option:a}):o?o({node:s,option:a,selected:!1}):s}}),Wn=_("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[_("scrollbar",`
 max-height: var(--n-height);
 `),_("virtual-list",`
 max-height: var(--n-height);
 `),_("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[E("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),_("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),_("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),E("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),E("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),E("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),E("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),_("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),_("base-select-option",`
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
 `),re("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),re("&:active",`
 color: var(--n-option-text-color-pressed);
 `),le("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),le("pending",[re("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),le("selected",`
 color: var(--n-option-text-color-active);
 `,[re("&::before",`
 background-color: var(--n-option-color-active);
 `),le("pending",[re("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),le("disabled",`
 cursor: not-allowed;
 `,[lt("selected",`
 color: var(--n-option-text-color-disabled);
 `),le("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),E("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[St({enterScale:"0.5"})])])]),Kn=de({name:"InternalSelectMenu",props:Object.assign(Object.assign({},pe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=Ue(e),d=Rt("InternalSelectMenu",o,n),a=pe("InternalSelectMenu","-internal-select-menu",Wn,dn,e,Q(e,"clsPrefix")),c=P(null),v=P(null),s=P(null),F=k(()=>e.treeMate.getFlattenedNodes()),C=k(()=>cn(F.value)),b=P(null);function S(){const{treeMate:l}=e;let f=null;const{value:U}=e;U===null?f=l.getFirstAvailableNode():(e.multiple?f=l.getNode((U||[])[(U||[]).length-1]):f=l.getNode(U),(!f||f.disabled)&&(f=l.getFirstAvailableNode())),A(f||null)}function x(){const{value:l}=b;l&&!e.treeMate.getNode(l.key)&&(b.value=null)}let T;Fe(()=>e.show,l=>{l?T=Fe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?S():x(),Ft(D)):x()},{immediate:!0}):T==null||T()},{immediate:!0}),yt(()=>{T==null||T()});const y=k(()=>ot(a.value.self[he("optionHeight",e.size)])),$=k(()=>_e(a.value.self[he("padding",e.size)])),K=k(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),B=k(()=>{const l=F.value;return l&&l.length===0});function O(l){const{onToggle:f}=e;f&&f(l)}function L(l){const{onScroll:f}=e;f&&f(l)}function W(l){var f;(f=s.value)===null||f===void 0||f.sync(),L(l)}function N(){var l;(l=s.value)===null||l===void 0||l.sync()}function te(){const{value:l}=b;return l||null}function ee(l,f){f.disabled||A(f,!1)}function ce(l,f){f.disabled||O(f)}function ie(l){var f;Be(l,"action")||(f=e.onKeyup)===null||f===void 0||f.call(e,l)}function ne(l){var f;Be(l,"action")||(f=e.onKeydown)===null||f===void 0||f.call(e,l)}function h(l){var f;(f=e.onMousedown)===null||f===void 0||f.call(e,l),!e.focusable&&l.preventDefault()}function p(){const{value:l}=b;l&&A(l.getNext({loop:!0}),!0)}function m(){const{value:l}=b;l&&A(l.getPrev({loop:!0}),!0)}function A(l,f=!1){b.value=l,f&&D()}function D(){var l,f;const U=b.value;if(!U)return;const ue=C.value(U.key);ue!==null&&(e.virtualScroll?(l=v.value)===null||l===void 0||l.scrollTo({index:ue}):(f=s.value)===null||f===void 0||f.scrollTo({index:ue,elSize:y.value}))}function V(l){var f,U;!((f=c.value)===null||f===void 0)&&f.contains(l.target)&&((U=e.onFocus)===null||U===void 0||U.call(e,l))}function H(l){var f,U;!((f=c.value)===null||f===void 0)&&f.contains(l.relatedTarget)||(U=e.onBlur)===null||U===void 0||U.call(e,l)}ct(at,{handleOptionMouseEnter:ee,handleOptionClick:ce,valueSetRef:K,pendingTmNodeRef:b,nodePropsRef:Q(e,"nodeProps"),showCheckmarkRef:Q(e,"showCheckmark"),multipleRef:Q(e,"multiple"),valueRef:Q(e,"value"),renderLabelRef:Q(e,"renderLabel"),renderOptionRef:Q(e,"renderOption"),labelFieldRef:Q(e,"labelField"),valueFieldRef:Q(e,"valueField")}),ct(vn,c),Ke(()=>{const{value:l}=s;l&&l.sync()});const j=k(()=>{const{size:l}=e,{common:{cubicBezierEaseInOut:f},self:{height:U,borderRadius:ue,color:ye,groupHeaderTextColor:xe,actionDividerColor:fe,optionTextColorPressed:oe,optionTextColor:Ce,optionTextColorDisabled:ve,optionTextColorActive:Te,optionOpacityDisabled:Oe,optionCheckColor:ze,actionTextColor:Me,optionColorPending:be,optionColorActive:me,loadingColor:Pe,loadingSize:ke,optionColorActivePending:Ie,[he("optionFontSize",l)]:Se,[he("optionHeight",l)]:we,[he("optionPadding",l)]:J}}=a.value;return{"--n-height":U,"--n-action-divider-color":fe,"--n-action-text-color":Me,"--n-bezier":f,"--n-border-radius":ue,"--n-color":ye,"--n-option-font-size":Se,"--n-group-header-text-color":xe,"--n-option-check-color":ze,"--n-option-color-pending":be,"--n-option-color-active":me,"--n-option-color-active-pending":Ie,"--n-option-height":we,"--n-option-opacity-disabled":Oe,"--n-option-text-color":Ce,"--n-option-text-color-active":Te,"--n-option-text-color-disabled":ve,"--n-option-text-color-pressed":oe,"--n-option-padding":J,"--n-option-padding-left":_e(J,"left"),"--n-option-padding-right":_e(J,"right"),"--n-loading-color":Pe,"--n-loading-size":ke}}),{inlineThemeDisabled:X}=e,Y=X?Ge("internal-select-menu",k(()=>e.size[0]),j,e):void 0,Z={selfRef:c,next:p,prev:m,getPendingTmNode:te};return Ot(c,e.onResize),Object.assign({mergedTheme:a,mergedClsPrefix:n,rtlEnabled:d,virtualListRef:v,scrollbarRef:s,itemSize:y,padding:$,flattenedNodes:F,empty:B,virtualListContainer(){const{value:l}=v;return l==null?void 0:l.listElRef},virtualListContent(){const{value:l}=v;return l==null?void 0:l.itemsElRef},doScroll:L,handleFocusin:V,handleFocusout:H,handleKeyUp:ie,handleKeyDown:ne,handleMouseDown:h,handleVirtualListResize:N,handleVirtualListScroll:W,cssVars:X?void 0:j,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender},Z)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:d,themeClass:a,onRender:c}=this;return c==null||c(),r("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,a,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},ut(e.header,v=>v&&r("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},v)),this.loading?r("div",{class:`${o}-base-select-menu__loading`},r(un,{clsPrefix:o,strokeWidth:20})):this.empty?r("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},hn(e.empty,()=>[r(Hn,{theme:d.peers.Empty,themeOverrides:d.peerOverrides.Empty})])):r(fn,{ref:"scrollbarRef",theme:d.peers.Scrollbar,themeOverrides:d.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?r(En,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:v})=>v.isGroup?r(wt,{key:v.key,clsPrefix:o,tmNode:v}):v.ignored?null:r(mt,{clsPrefix:o,key:v.key,tmNode:v})}):r("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(v=>v.isGroup?r(wt,{key:v.key,clsPrefix:o,tmNode:v}):r(mt,{clsPrefix:o,key:v.key,tmNode:v})))}),ut(e.action,v=>v&&[r("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},v),r(Ln,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Un=re([_("base-selection",`
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
 `,[_("base-loading",`
 color: var(--n-loading-color);
 `),_("base-selection-tags","min-height: var(--n-height);"),E("border, state-border",`
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
 `),E("state-border",`
 z-index: 1;
 border-color: #0000;
 `),_("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[E("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),_("base-selection-overlay",`
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
 `,[E("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),_("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[E("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),_("base-selection-tags",`
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
 `),_("base-selection-label",`
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
 `,[_("base-selection-input",`
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
 `,[E("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),E("render-label",`
 color: var(--n-text-color);
 `)]),lt("disabled",[re("&:hover",[E("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),le("focus",[E("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),le("active",[E("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),_("base-selection-label","background-color: var(--n-color-active);"),_("base-selection-tags","background-color: var(--n-color-active);")])]),le("disabled","cursor: not-allowed;",[E("arrow",`
 color: var(--n-arrow-color-disabled);
 `),_("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[_("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),E("render-label",`
 color: var(--n-text-color-disabled);
 `)]),_("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),_("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),_("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[E("input",`
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
 `),E("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>le(`${e}-status`,[E("state-border",`border: var(--n-border-${e});`),lt("disabled",[re("&:hover",[E("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),le("active",[E("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),_("base-selection-label",`background-color: var(--n-color-active-${e});`),_("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),le("focus",[E("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),_("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),_("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[re("&:last-child","padding-right: 0;"),_("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[E("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Gn=de({name:"InternalSelection",props:Object.assign(Object.assign({},pe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=Ue(e),d=Rt("InternalSelection",o,n),a=P(null),c=P(null),v=P(null),s=P(null),F=P(null),C=P(null),b=P(null),S=P(null),x=P(null),T=P(null),y=P(!1),$=P(!1),K=P(!1),B=pe("InternalSelection","-internal-selection",Un,gn,e,Q(e,"clsPrefix")),O=k(()=>e.clearable&&!e.disabled&&(K.value||e.active)),L=k(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Re(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),W=k(()=>{const i=e.selectedOption;if(i)return i[e.labelField]}),N=k(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function te(){var i;const{value:g}=a;if(g){const{value:G}=c;G&&(G.style.width=`${g.offsetWidth}px`,e.maxTagCount!=="responsive"&&((i=x.value)===null||i===void 0||i.sync({showAllItemsBeforeCalculate:!1})))}}function ee(){const{value:i}=T;i&&(i.style.display="none")}function ce(){const{value:i}=T;i&&(i.style.display="inline-block")}Fe(Q(e,"active"),i=>{i||ee()}),Fe(Q(e,"pattern"),()=>{e.multiple&&Ft(te)});function ie(i){const{onFocus:g}=e;g&&g(i)}function ne(i){const{onBlur:g}=e;g&&g(i)}function h(i){const{onDeleteOption:g}=e;g&&g(i)}function p(i){const{onClear:g}=e;g&&g(i)}function m(i){const{onPatternInput:g}=e;g&&g(i)}function A(i){var g;(!i.relatedTarget||!(!((g=v.value)===null||g===void 0)&&g.contains(i.relatedTarget)))&&ie(i)}function D(i){var g;!((g=v.value)===null||g===void 0)&&g.contains(i.relatedTarget)||ne(i)}function V(i){p(i)}function H(){K.value=!0}function j(){K.value=!1}function X(i){!e.active||!e.filterable||i.target!==c.value&&i.preventDefault()}function Y(i){h(i)}const Z=P(!1);function l(i){if(i.key==="Backspace"&&!Z.value&&!e.pattern.length){const{selectedOptions:g}=e;g!=null&&g.length&&Y(g[g.length-1])}}let f=null;function U(i){const{value:g}=a;if(g){const G=i.target.value;g.textContent=G,te()}e.ignoreComposition&&Z.value?f=i:m(i)}function ue(){Z.value=!0}function ye(){Z.value=!1,e.ignoreComposition&&m(f),f=null}function xe(i){var g;$.value=!0,(g=e.onPatternFocus)===null||g===void 0||g.call(e,i)}function fe(i){var g;$.value=!1,(g=e.onPatternBlur)===null||g===void 0||g.call(e,i)}function oe(){var i,g;if(e.filterable)$.value=!1,(i=C.value)===null||i===void 0||i.blur(),(g=c.value)===null||g===void 0||g.blur();else if(e.multiple){const{value:G}=s;G==null||G.blur()}else{const{value:G}=F;G==null||G.blur()}}function Ce(){var i,g,G;e.filterable?($.value=!1,(i=C.value)===null||i===void 0||i.focus()):e.multiple?(g=s.value)===null||g===void 0||g.focus():(G=F.value)===null||G===void 0||G.focus()}function ve(){const{value:i}=c;i&&(ce(),i.focus())}function Te(){const{value:i}=c;i&&i.blur()}function Oe(i){const{value:g}=b;g&&g.setTextContent(`+${i}`)}function ze(){const{value:i}=S;return i}function Me(){return c.value}let be=null;function me(){be!==null&&window.clearTimeout(be)}function Pe(){e.active||(me(),be=window.setTimeout(()=>{N.value&&(y.value=!0)},100))}function ke(){me()}function Ie(i){i||(me(),y.value=!1)}Fe(N,i=>{i||(y.value=!1)}),Ke(()=>{pn(()=>{const i=C.value;i&&(e.disabled?i.removeAttribute("tabindex"):i.tabIndex=$.value?-1:0)})}),Ot(v,e.onResize);const{inlineThemeDisabled:Se}=e,we=k(()=>{const{size:i}=e,{common:{cubicBezierEaseInOut:g},self:{borderRadius:G,color:qe,placeholderColor:Ye,textColor:$e,paddingSingle:Ee,paddingMultiple:Ae,caretColor:Ze,colorDisabled:Xe,textColorDisabled:Ne,placeholderColorDisabled:ge,colorActive:t,boxShadowFocus:u,boxShadowActive:w,boxShadowHover:I,border:z,borderFocus:R,borderHover:M,borderActive:q,arrowColor:ae,arrowColorDisabled:Mt,loadingColor:Pt,colorActiveWarning:kt,boxShadowFocusWarning:It,boxShadowActiveWarning:_t,boxShadowHoverWarning:Bt,borderWarning:$t,borderFocusWarning:Et,borderHoverWarning:At,borderActiveWarning:Nt,colorActiveError:Lt,boxShadowFocusError:Dt,boxShadowActiveError:Vt,boxShadowHoverError:Ht,borderError:jt,borderFocusError:Wt,borderHoverError:Kt,borderActiveError:Ut,clearColor:Gt,clearColorHover:qt,clearColorPressed:Yt,clearSize:Zt,arrowSize:Xt,[he("height",i)]:Jt,[he("fontSize",i)]:Qt}}=B.value,Le=_e(Ee),De=_e(Ae);return{"--n-bezier":g,"--n-border":z,"--n-border-active":q,"--n-border-focus":R,"--n-border-hover":M,"--n-border-radius":G,"--n-box-shadow-active":w,"--n-box-shadow-focus":u,"--n-box-shadow-hover":I,"--n-caret-color":Ze,"--n-color":qe,"--n-color-active":t,"--n-color-disabled":Xe,"--n-font-size":Qt,"--n-height":Jt,"--n-padding-single-top":Le.top,"--n-padding-multiple-top":De.top,"--n-padding-single-right":Le.right,"--n-padding-multiple-right":De.right,"--n-padding-single-left":Le.left,"--n-padding-multiple-left":De.left,"--n-padding-single-bottom":Le.bottom,"--n-padding-multiple-bottom":De.bottom,"--n-placeholder-color":Ye,"--n-placeholder-color-disabled":ge,"--n-text-color":$e,"--n-text-color-disabled":Ne,"--n-arrow-color":ae,"--n-arrow-color-disabled":Mt,"--n-loading-color":Pt,"--n-color-active-warning":kt,"--n-box-shadow-focus-warning":It,"--n-box-shadow-active-warning":_t,"--n-box-shadow-hover-warning":Bt,"--n-border-warning":$t,"--n-border-focus-warning":Et,"--n-border-hover-warning":At,"--n-border-active-warning":Nt,"--n-color-active-error":Lt,"--n-box-shadow-focus-error":Dt,"--n-box-shadow-active-error":Vt,"--n-box-shadow-hover-error":Ht,"--n-border-error":jt,"--n-border-focus-error":Wt,"--n-border-hover-error":Kt,"--n-border-active-error":Ut,"--n-clear-size":Zt,"--n-clear-color":Gt,"--n-clear-color-hover":qt,"--n-clear-color-pressed":Yt,"--n-arrow-size":Xt}}),J=Se?Ge("internal-selection",k(()=>e.size[0]),we,e):void 0;return{mergedTheme:B,mergedClearable:O,mergedClsPrefix:n,rtlEnabled:d,patternInputFocused:$,filterablePlaceholder:L,label:W,selected:N,showTagsPanel:y,isComposing:Z,counterRef:b,counterWrapperRef:S,patternInputMirrorRef:a,patternInputRef:c,selfRef:v,multipleElRef:s,singleElRef:F,patternInputWrapperRef:C,overflowRef:x,inputTagElRef:T,handleMouseDown:X,handleFocusin:A,handleClear:V,handleMouseEnter:H,handleMouseLeave:j,handleDeleteOption:Y,handlePatternKeyDown:l,handlePatternInputInput:U,handlePatternInputBlur:fe,handlePatternInputFocus:xe,handleMouseEnterCounter:Pe,handleMouseLeaveCounter:ke,handleFocusout:D,handleCompositionEnd:ye,handleCompositionStart:ue,onPopoverUpdateShow:Ie,focus:Ce,focusInput:ve,blur:oe,blurInput:Te,updateCounter:Oe,getCounter:ze,getTail:Me,renderLabel:e.renderLabel,cssVars:Se?void 0:we,themeClass:J==null?void 0:J.themeClass,onRender:J==null?void 0:J.onRender}},render(){const{status:e,multiple:n,size:o,disabled:d,filterable:a,maxTagCount:c,bordered:v,clsPrefix:s,ellipsisTagPopoverProps:F,onRender:C,renderTag:b,renderLabel:S}=this;C==null||C();const x=c==="responsive",T=typeof c=="number",y=x||T,$=r(bn,null,{default:()=>r(In,{clsPrefix:s,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var B,O;return(O=(B=this.$slots).arrow)===null||O===void 0?void 0:O.call(B)}})});let K;if(n){const{labelField:B}=this,O=m=>r("div",{class:`${s}-base-selection-tag-wrapper`,key:m.value},b?b({option:m,handleClose:()=>{this.handleDeleteOption(m)}}):r(Qe,{size:o,closable:!m.disabled,disabled:d,onClose:()=>{this.handleDeleteOption(m)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>S?S(m,!0):Re(m[B],m,!0)})),L=()=>(T?this.selectedOptions.slice(0,c):this.selectedOptions).map(O),W=a?r("div",{class:`${s}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:d,value:this.pattern,autofocus:this.autofocus,class:`${s}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r("span",{ref:"patternInputMirrorRef",class:`${s}-base-selection-input-tag__mirror`},this.pattern)):null,N=x?()=>r("div",{class:`${s}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},r(Qe,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:d})):void 0;let te;if(T){const m=this.selectedOptions.length-c;m>0&&(te=r("div",{class:`${s}-base-selection-tag-wrapper`,key:"__counter__"},r(Qe,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:d},{default:()=>`+${m}`})))}const ee=x?a?r(ft,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:L,counter:N,tail:()=>W}):r(ft,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:L,counter:N}):T&&te?L().concat(te):L(),ce=y?()=>r("div",{class:`${s}-base-selection-popover`},x?L():this.selectedOptions.map(O)):void 0,ie=y?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},F):null,h=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?r("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`},r("div",{class:`${s}-base-selection-placeholder__inner`},this.placeholder)):null,p=a?r("div",{ref:"patternInputWrapperRef",class:`${s}-base-selection-tags`},ee,x?null:W,$):r("div",{ref:"multipleElRef",class:`${s}-base-selection-tags`,tabindex:d?void 0:0},ee,$);K=r(wn,null,y?r(mn,Object.assign({},ie,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>p,default:ce}):p,h)}else if(a){const B=this.pattern||this.isComposing,O=this.active?!B:!this.selected,L=this.active?!1:this.selected;K=r("div",{ref:"patternInputWrapperRef",class:`${s}-base-selection-label`,title:this.patternInputFocused?void 0:gt(this.label)},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${s}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:d,disabled:d,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),L?r("div",{class:`${s}-base-selection-label__render-label ${s}-base-selection-overlay`,key:"input"},r("div",{class:`${s}-base-selection-overlay__wrapper`},b?b({option:this.selectedOption,handleClose:()=>{}}):S?S(this.selectedOption,!0):Re(this.label,this.selectedOption,!0))):null,O?r("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${s}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,$)}else K=r("div",{ref:"singleElRef",class:`${s}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?r("div",{class:`${s}-base-selection-input`,title:gt(this.label),key:"input"},r("div",{class:`${s}-base-selection-input__content`},b?b({option:this.selectedOption,handleClose:()=>{}}):S?S(this.selectedOption,!0):Re(this.label,this.selectedOption,!0))):r("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${s}-base-selection-placeholder__inner`},this.placeholder)),$);return r("div",{ref:"selfRef",class:[`${s}-base-selection`,this.rtlEnabled&&`${s}-base-selection--rtl`,this.themeClass,e&&`${s}-base-selection--${e}-status`,{[`${s}-base-selection--active`]:this.active,[`${s}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${s}-base-selection--disabled`]:this.disabled,[`${s}-base-selection--multiple`]:this.multiple,[`${s}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},K,v?r("div",{class:`${s}-base-selection__border`}):null,v?r("div",{class:`${s}-base-selection__state-border`}):null)}});function We(e){return e.type==="group"}function zt(e){return e.type==="ignored"}function nt(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function qn(e,n){return{getIsGroup:We,getIgnored:zt,getKey(d){return We(d)?d.name||d.key||"key-required":d[e]},getChildren(d){return d[n]}}}function Yn(e,n,o,d){if(!n)return e;function a(c){if(!Array.isArray(c))return[];const v=[];for(const s of c)if(We(s)){const F=a(s[d]);F.length&&v.push(Object.assign({},s,{[d]:F}))}else{if(zt(s))continue;n(o,s)&&v.push(s)}return v}return a(e)}function Zn(e,n,o){const d=new Map;return e.forEach(a=>{We(a)?a[o].forEach(c=>{d.set(c[n],c)}):d.set(a[n],a)}),d}const Xn=re([_("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),_("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[St({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Jn=Object.assign(Object.assign({},pe.props),{to:it.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),oo=de({name:"Select",props:Jn,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:d,inlineThemeDisabled:a}=Ue(e),c=pe("Select","-select",Xn,yn,e,n),v=P(e.defaultValue),s=Q(e,"value"),F=ht(s,v),C=P(!1),b=P(""),S=xn(e,["items","options"]),x=P([]),T=P([]),y=k(()=>T.value.concat(x.value).concat(S.value)),$=k(()=>{const{filter:t}=e;if(t)return t;const{labelField:u,valueField:w}=e;return(I,z)=>{if(!z)return!1;const R=z[u];if(typeof R=="string")return nt(I,R);const M=z[w];return typeof M=="string"?nt(I,M):typeof M=="number"?nt(I,String(M)):!1}}),K=k(()=>{if(e.remote)return S.value;{const{value:t}=y,{value:u}=b;return!u.length||!e.filterable?t:Yn(t,$.value,u,e.childrenField)}}),B=k(()=>{const{valueField:t,childrenField:u}=e,w=qn(t,u);return Cn(K.value,w)}),O=k(()=>Zn(y.value,e.valueField,e.childrenField)),L=P(!1),W=ht(Q(e,"show"),L),N=P(null),te=P(null),ee=P(null),{localeRef:ce}=Tt("Select"),ie=k(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:ce.value.placeholder}),ne=[],h=P(new Map),p=k(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:u,valueField:w}=e;return I=>({[u]:String(I),[w]:I})}return t===!1?!1:u=>Object.assign(t(u),{value:u})});function m(t){const u=e.remote,{value:w}=h,{value:I}=O,{value:z}=p,R=[];return t.forEach(M=>{if(I.has(M))R.push(I.get(M));else if(u&&w.has(M))R.push(w.get(M));else if(z){const q=z(M);q&&R.push(q)}}),R}const A=k(()=>{if(e.multiple){const{value:t}=F;return Array.isArray(t)?m(t):[]}return null}),D=k(()=>{const{value:t}=F;return!e.multiple&&!Array.isArray(t)?t===null?null:m([t])[0]||null:null}),V=Sn(e),{mergedSizeRef:H,mergedDisabledRef:j,mergedStatusRef:X}=V;function Y(t,u){const{onChange:w,"onUpdate:value":I,onUpdateValue:z}=e,{nTriggerFormChange:R,nTriggerFormInput:M}=V;w&&se(w,t,u),z&&se(z,t,u),I&&se(I,t,u),v.value=t,R(),M()}function Z(t){const{onBlur:u}=e,{nTriggerFormBlur:w}=V;u&&se(u,t),w()}function l(){const{onClear:t}=e;t&&se(t)}function f(t){const{onFocus:u,showOnFocus:w}=e,{nTriggerFormFocus:I}=V;u&&se(u,t),I(),w&&fe()}function U(t){const{onSearch:u}=e;u&&se(u,t)}function ue(t){const{onScroll:u}=e;u&&se(u,t)}function ye(){var t;const{remote:u,multiple:w}=e;if(u){const{value:I}=h;if(w){const{valueField:z}=e;(t=A.value)===null||t===void 0||t.forEach(R=>{I.set(R[z],R)})}else{const z=D.value;z&&I.set(z[e.valueField],z)}}}function xe(t){const{onUpdateShow:u,"onUpdate:show":w}=e;u&&se(u,t),w&&se(w,t),L.value=t}function fe(){j.value||(xe(!0),L.value=!0,e.filterable&&Ae())}function oe(){xe(!1)}function Ce(){b.value="",T.value=ne}const ve=P(!1);function Te(){e.filterable&&(ve.value=!0)}function Oe(){e.filterable&&(ve.value=!1,W.value||Ce())}function ze(){j.value||(W.value?e.filterable?Ae():oe():fe())}function Me(t){var u,w;!((w=(u=ee.value)===null||u===void 0?void 0:u.selfRef)===null||w===void 0)&&w.contains(t.relatedTarget)||(C.value=!1,Z(t),oe())}function be(t){f(t),C.value=!0}function me(){C.value=!0}function Pe(t){var u;!((u=N.value)===null||u===void 0)&&u.$el.contains(t.relatedTarget)||(C.value=!1,Z(t),oe())}function ke(){var t;(t=N.value)===null||t===void 0||t.focus(),oe()}function Ie(t){var u;W.value&&(!((u=N.value)===null||u===void 0)&&u.$el.contains(Pn(t))||oe())}function Se(t){if(!Array.isArray(t))return[];if(p.value)return Array.from(t);{const{remote:u}=e,{value:w}=O;if(u){const{value:I}=h;return t.filter(z=>w.has(z)||I.has(z))}else return t.filter(I=>w.has(I))}}function we(t){J(t.rawNode)}function J(t){if(j.value)return;const{tag:u,remote:w,clearFilterAfterSelect:I,valueField:z}=e;if(u&&!w){const{value:R}=T,M=R[0]||null;if(M){const q=x.value;q.length?q.push(M):x.value=[M],T.value=ne}}if(w&&h.value.set(t[z],t),e.multiple){const R=Se(F.value),M=R.findIndex(q=>q===t[z]);if(~M){if(R.splice(M,1),u&&!w){const q=i(t[z]);~q&&(x.value.splice(q,1),I&&(b.value=""))}}else R.push(t[z]),I&&(b.value="");Y(R,m(R))}else{if(u&&!w){const R=i(t[z]);~R?x.value=[x.value[R]]:x.value=ne}Ee(),oe(),Y(t[z],t)}}function i(t){return x.value.findIndex(w=>w[e.valueField]===t)}function g(t){W.value||fe();const{value:u}=t.target;b.value=u;const{tag:w,remote:I}=e;if(U(u),w&&!I){if(!u){T.value=ne;return}const{onCreate:z}=e,R=z?z(u):{[e.labelField]:u,[e.valueField]:u},{valueField:M,labelField:q}=e;S.value.some(ae=>ae[M]===R[M]||ae[q]===R[q])||x.value.some(ae=>ae[M]===R[M]||ae[q]===R[q])?T.value=ne:T.value=[R]}}function G(t){t.stopPropagation();const{multiple:u}=e;!u&&e.filterable&&oe(),l(),u?Y([],[]):Y(null,null)}function qe(t){!Be(t,"action")&&!Be(t,"empty")&&!Be(t,"header")&&t.preventDefault()}function Ye(t){ue(t)}function $e(t){var u,w,I,z,R;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((u=N.value)===null||u===void 0)&&u.isComposing)){if(W.value){const M=(w=ee.value)===null||w===void 0?void 0:w.getPendingTmNode();M?we(M):e.filterable||(oe(),Ee())}else if(fe(),e.tag&&ve.value){const M=T.value[0];if(M){const q=M[e.valueField],{value:ae}=F;e.multiple&&Array.isArray(ae)&&ae.includes(q)||J(M)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;W.value&&((I=ee.value)===null||I===void 0||I.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;W.value?(z=ee.value)===null||z===void 0||z.next():fe();break;case"Escape":W.value&&(kn(t),oe()),(R=N.value)===null||R===void 0||R.focus();break}}function Ee(){var t;(t=N.value)===null||t===void 0||t.focus()}function Ae(){var t;(t=N.value)===null||t===void 0||t.focusInput()}function Ze(){var t;W.value&&((t=te.value)===null||t===void 0||t.syncPosition())}ye(),Fe(Q(e,"options"),ye);const Xe={focus:()=>{var t;(t=N.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=N.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=N.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=N.value)===null||t===void 0||t.blurInput()}},Ne=k(()=>{const{self:{menuBoxShadow:t}}=c.value;return{"--n-menu-box-shadow":t}}),ge=a?Ge("select",void 0,Ne,e):void 0;return Object.assign(Object.assign({},Xe),{mergedStatus:X,mergedClsPrefix:n,mergedBordered:o,namespace:d,treeMate:B,isMounted:Rn(),triggerRef:N,menuRef:ee,pattern:b,uncontrolledShow:L,mergedShow:W,adjustedTo:it(e),uncontrolledValue:v,mergedValue:F,followerRef:te,localizedPlaceholder:ie,selectedOption:D,selectedOptions:A,mergedSize:H,mergedDisabled:j,focused:C,activeWithoutMenuOpen:ve,inlineThemeDisabled:a,onTriggerInputFocus:Te,onTriggerInputBlur:Oe,handleTriggerOrMenuResize:Ze,handleMenuFocus:me,handleMenuBlur:Pe,handleMenuTabOut:ke,handleTriggerClick:ze,handleToggle:we,handleDeleteOption:J,handlePatternInput:g,handleClear:G,handleTriggerBlur:Me,handleTriggerFocus:be,handleKeydown:$e,handleMenuAfterLeave:Ce,handleMenuClickOutside:Ie,handleMenuScroll:Ye,handleMenuKeydown:$e,handleMenuMousedown:qe,mergedTheme:c,cssVars:a?void 0:Ne,themeClass:ge==null?void 0:ge.themeClass,onRender:ge==null?void 0:ge.onRender})},render(){return r("div",{class:`${this.mergedClsPrefix}-select`},r(Fn,null,{default:()=>[r(Tn,null,{default:()=>r(Gn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),r(On,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===it.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>r(Ct,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),zn(r(Kn,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var d,a;return[(a=(d=this.$slots).empty)===null||a===void 0?void 0:a.call(d)]},header:()=>{var d,a;return[(a=(d=this.$slots).header)===null||a===void 0?void 0:a.call(d)]},action:()=>{var d,a;return[(a=(d=this.$slots).action)===null||a===void 0?void 0:a.call(d)]}}),this.displayDirective==="show"?[[Mn,this.mergedShow],[vt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[vt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Ln as F,Kn as N,En as V,oo as a,Hn as b,qn as c,et as m};
