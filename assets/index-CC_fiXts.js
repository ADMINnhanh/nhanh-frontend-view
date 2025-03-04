import{d as se,bi as bn,bj as hn,I as nt,bk as Kn,bl as pn,m as W,j as O,H as ft,aK as pt,aJ as st,h as r,bh as Ht,V as Ye,bm as Ze,av as Un,bn as Gt,ap as gn,bo as qn,bp as gt,bq as Gn,p as c,q as N,s as Z,y as ot,z as ye,br as Xn,l as it,bs as Yn,N as de,P as at,U as Vt,bt as Kt,bu as Ae,ak as mn,v as P,x as tt,ac as xn,M as yn,E as ne,bv as Zn,bw as Jn,k as $e,W as Je,O as Fe,L as At,Q as mt,aN as Qn,S as eo,R as to,bx as Qe,by as no,bz as oo,K as wn,bA as io,b3 as Pt,bB as Xt,bC as ao,T as et,bD as lo,F as Nt,bc as Wt,bE as ro,G as so,ae as co,af as Dt,ah as uo,ai as fo,aj as vo,al as Cn,as as Sn,am as Yt,ag as bo,bF as ho,Y as ge,bG as po,bH as go,au as mo,i as xo,aA as yo,bI as wo,bJ as Co,bK as So,bL as kt,bM as Ro,bN as To,bO as zo,o as ze,c as Ne,aS as Me,bP as vt,u as G,bQ as _o,_ as Ut,a as re,w as ie,aV as bt,aU as ht,bR as Po,b2 as Ot,bS as ko,e as Ge,t as Xe,bg as dt,bT as Oo,bU as Fo,a_ as Zt,bV as $o,B as ct,bW as Io,bX as Mo,bY as Bo,bZ as Eo}from"./index-3X3NLLhv.js";import Ft from"./setItem-CcOxe6cP.js";import{I as Lo}from"./Interface text-JiW04w4-.js";import{u as Rn,a as Ao,A as No}from"./Suffix-CR5Rw-Bb.js";import{A as Wo}from"./Add-C5JPzrtU.js";function Jt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function $t(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(l=>{l&&l(n)})}}function Qt(e){return e&-e}class Do{constructor(t,n){this.l=t,this.min=n;const l=new Array(t+1);for(let i=0;i<t+1;++i)l[i]=0;this.ft=l}add(t,n){if(n===0)return;const{l,ft:i}=this;for(t+=1;t<=l;)i[t]+=n,t+=Qt(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:n,min:l,l:i}=this;if(t>i)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let s=t*l;for(;t>0;)s+=n[t],t-=Qt(t);return s}getBound(t){let n=0,l=this.l;for(;l>n;){const i=Math.floor((n+l)/2),s=this.sum(i);if(s>t){l=i;continue}else if(s<t){if(n===i)return this.sum(n+1)<=t?n+1:i;n=i}else return i}return n}}let ut;function jo(){return typeof document>"u"?!1:(ut===void 0&&("matchMedia"in window?ut=window.matchMedia("(pointer:coarse)").matches:ut=!1),ut)}let It;function en(){return typeof document>"u"?1:(It===void 0&&(It="chrome"in window?window.devicePixelRatio:1),It)}const Ho=Ze(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Ze("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Ze("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Vo=se({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=bn();Ho.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:hn,ssr:t}),nt(()=>{const{defaultScrollIndex:C,defaultScrollKey:I}=e;C!=null?T({index:C}):I!=null&&T({key:I})});let n=!1,l=!1;Kn(()=>{if(n=!1,!l){l=!0;return}T({top:k.value,left:p})}),pn(()=>{n=!0,l||(l=!0)});const i=W(()=>{const C=new Map,{keyField:I}=e;return e.items.forEach((E,Y)=>{C.set(E[I],Y)}),C}),s=O(null),u=O(void 0),a=new Map,g=W(()=>{const{items:C,itemSize:I,keyField:E}=e,Y=new Do(C.length,I);return C.forEach((q,Q)=>{const ee=q[E],te=a.get(ee);te!==void 0&&Y.add(Q,te)}),Y}),h=O(0);let p=0;const k=O(0),B=ft(()=>Math.max(g.value.getBound(k.value-pt(e.paddingTop))-1,0)),z=W(()=>{const{value:C}=u;if(C===void 0)return[];const{items:I,itemSize:E}=e,Y=B.value,q=Math.min(Y+Math.ceil(C/E+1),I.length-1),Q=[];for(let ee=Y;ee<=q;++ee)Q.push(I[ee]);return Q}),T=(C,I)=>{if(typeof C=="number"){w(C,I,"auto");return}const{left:E,top:Y,index:q,key:Q,position:ee,behavior:te,debounce:ce=!0}=C;if(E!==void 0||Y!==void 0)w(E,Y,te);else if(q!==void 0)S(q,te,ce);else if(Q!==void 0){const ae=i.value.get(Q);ae!==void 0&&S(ae,te,ce)}else ee==="bottom"?w(0,Number.MAX_SAFE_INTEGER,te):ee==="top"&&w(0,0,te)};let F,y=null;function S(C,I,E){const{value:Y}=g,q=Y.sum(C)+pt(e.paddingTop);if(!E)s.value.scrollTo({left:0,top:q,behavior:I});else{F=C,y!==null&&window.clearTimeout(y),y=window.setTimeout(()=>{F=void 0,y=null},16);const{scrollTop:Q,offsetHeight:ee}=s.value;if(q>Q){const te=Y.get(C);q+te<=Q+ee||s.value.scrollTo({left:0,top:q+te-ee,behavior:I})}else s.value.scrollTo({left:0,top:q,behavior:I})}}function w(C,I,E){s.value.scrollTo({left:C,top:I,behavior:E})}function j(C,I){var E,Y,q;if(n||e.ignoreItemResize||be(I.target))return;const{value:Q}=g,ee=i.value.get(C),te=Q.get(ee),ce=(q=(Y=(E=I.borderBoxSize)===null||E===void 0?void 0:E[0])===null||Y===void 0?void 0:Y.blockSize)!==null&&q!==void 0?q:I.contentRect.height;if(ce===te)return;ce-e.itemSize===0?a.delete(C):a.set(C,ce-e.itemSize);const ue=ce-te;if(ue===0)return;Q.add(ee,ue);const b=s.value;if(b!=null){if(F===void 0){const R=Q.sum(ee);b.scrollTop>R&&b.scrollBy(0,ue)}else if(ee<F)b.scrollBy(0,ue);else if(ee===F){const R=Q.sum(ee);ce+R>b.scrollTop+b.offsetHeight&&b.scrollBy(0,ue)}ve()}h.value++}const D=!jo();let $=!1;function L(C){var I;(I=e.onScroll)===null||I===void 0||I.call(e,C),(!D||!$)&&ve()}function X(C){var I;if((I=e.onWheel)===null||I===void 0||I.call(e,C),D){const E=s.value;if(E!=null){if(C.deltaX===0&&(E.scrollTop===0&&C.deltaY<=0||E.scrollTop+E.offsetHeight>=E.scrollHeight&&C.deltaY>=0))return;C.preventDefault(),E.scrollTop+=C.deltaY/en(),E.scrollLeft+=C.deltaX/en(),ve(),$=!0,Un(()=>{$=!1})}}}function fe(C){if(n||be(C.target)||C.contentRect.height===u.value)return;u.value=C.contentRect.height;const{onResize:I}=e;I!==void 0&&I(C)}function ve(){const{value:C}=s;C!=null&&(k.value=C.scrollTop,p=C.scrollLeft)}function be(C){let I=C;for(;I!==null;){if(I.style.display==="none")return!0;I=I.parentElement}return!1}return{listHeight:u,listStyle:{overflow:"auto"},keyToIndex:i,itemsStyle:W(()=>{const{itemResizable:C}=e,I=st(g.value.sum());return h.value,[e.itemsStyle,{boxSizing:"content-box",height:C?"":I,minHeight:C?I:"",paddingTop:st(e.paddingTop),paddingBottom:st(e.paddingBottom)}]}),visibleItemsStyle:W(()=>(h.value,{transform:`translateY(${st(g.value.sum(B.value))})`})),viewportItems:z,listElRef:s,itemsElRef:O(null),scrollTo:T,handleListResize:fe,handleListScroll:L,handleListWheel:X,handleItemResize:j}},render(){const{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:l}=this;return r(Ye,{onResize:this.handleListResize},{default:()=>{var i,s;return r("div",Ht(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?r("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[r(l,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(u=>{const a=u[t],g=n.get(a),h=this.$slots.default({item:u,index:g})[0];return e?r(Ye,{key:a,onResize:p=>this.handleItemResize(a,p)},{default:()=>h}):(h.key=a,h)})})]):(s=(i=this.$slots).empty)===null||s===void 0?void 0:s.call(i)])}})}}),Ko=Ze(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Ze("&::-webkit-scrollbar",{width:0,height:0})]),Uo=se({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=O(null);function t(i){!(i.currentTarget.offsetWidth<i.currentTarget.scrollWidth)||i.deltaY===0||(i.currentTarget.scrollLeft+=i.deltaY+i.deltaX,i.preventDefault())}const n=bn();return Ko.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:hn,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...i){var s;(s=e.value)===null||s===void 0||s.scrollTo(...i)}})},render(){return r("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});function Tn(e,t){t&&(nt(()=>{const{value:n}=e;n&&Gt.registerHandler(n,t)}),gn(()=>{const{value:n}=e;n&&Gt.unregisterHandler(n)}))}var qo=/\s/;function Go(e){for(var t=e.length;t--&&qo.test(e.charAt(t)););return t}var Xo=/^\s+/;function Yo(e){return e&&e.slice(0,Go(e)+1).replace(Xo,"")}var tn=NaN,Zo=/^[-+]0x[0-9a-f]+$/i,Jo=/^0b[01]+$/i,Qo=/^0o[0-7]+$/i,ei=parseInt;function nn(e){if(typeof e=="number")return e;if(qn(e))return tn;if(gt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=gt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Yo(e);var n=Jo.test(e);return n||Qo.test(e)?ei(e.slice(2),n?2:8):Zo.test(e)?tn:+e}var Mt=function(){return Gn.Date.now()},ti="Expected a function",ni=Math.max,oi=Math.min;function ii(e,t,n){var l,i,s,u,a,g,h=0,p=!1,k=!1,B=!0;if(typeof e!="function")throw new TypeError(ti);t=nn(t)||0,gt(n)&&(p=!!n.leading,k="maxWait"in n,s=k?ni(nn(n.maxWait)||0,t):s,B="trailing"in n?!!n.trailing:B);function z(L){var X=l,fe=i;return l=i=void 0,h=L,u=e.apply(fe,X),u}function T(L){return h=L,a=setTimeout(S,t),p?z(L):u}function F(L){var X=L-g,fe=L-h,ve=t-X;return k?oi(ve,s-fe):ve}function y(L){var X=L-g,fe=L-h;return g===void 0||X>=t||X<0||k&&fe>=s}function S(){var L=Mt();if(y(L))return w(L);a=setTimeout(S,F(L))}function w(L){return a=void 0,B&&l?z(L):(l=i=void 0,u)}function j(){a!==void 0&&clearTimeout(a),h=0,l=g=i=a=void 0}function D(){return a===void 0?u:w(Mt())}function $(){var L=Mt(),X=y(L);if(l=arguments,i=this,g=L,X){if(a===void 0)return T(g);if(k)return clearTimeout(a),a=setTimeout(S,t),z(g)}return a===void 0&&(a=setTimeout(S,t)),u}return $.cancel=j,$.flush=D,$}var ai="Expected a function";function Bt(e,t,n){var l=!0,i=!0;if(typeof e!="function")throw new TypeError(ai);return gt(n)&&(l="leading"in n?!!n.leading:l,i="trailing"in n?!!n.trailing:i),ii(e,t,{leading:l,maxWait:t,trailing:i})}const li=se({name:"Checkmark",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},r("g",{fill:"none"},r("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),ri=se({name:"Empty",render(){return r("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),r("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),si=se({props:{onFocus:Function,onBlur:Function},setup(e){return()=>r("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),di=c("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[N("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[Z("+",[N("description",`
 margin-top: 8px;
 `)])]),N("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),N("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),ci=Object.assign(Object.assign({},ye.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),ui=se({name:"Empty",props:ci,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=ot(e),l=ye("Empty","-empty",di,Xn,e,t),{localeRef:i}=Rn("Empty"),s=it(Yn,null),u=W(()=>{var p,k,B;return(p=e.description)!==null&&p!==void 0?p:(B=(k=s==null?void 0:s.mergedComponentPropsRef.value)===null||k===void 0?void 0:k.Empty)===null||B===void 0?void 0:B.description}),a=W(()=>{var p,k;return((k=(p=s==null?void 0:s.mergedComponentPropsRef.value)===null||p===void 0?void 0:p.Empty)===null||k===void 0?void 0:k.renderIcon)||(()=>r(ri,null))}),g=W(()=>{const{size:p}=e,{common:{cubicBezierEaseInOut:k},self:{[de("iconSize",p)]:B,[de("fontSize",p)]:z,textColor:T,iconColor:F,extraTextColor:y}}=l.value;return{"--n-icon-size":B,"--n-font-size":z,"--n-bezier":k,"--n-text-color":T,"--n-icon-color":F,"--n-extra-text-color":y}}),h=n?at("empty",W(()=>{let p="";const{size:k}=e;return p+=k[0],p}),g,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:a,localizedDescription:W(()=>u.value||i.value.description),cssVars:n?void 0:g,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),r("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?r("div",{class:`${t}-empty__icon`},e.icon?e.icon():r(Vt,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?r("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?r("div",{class:`${t}-empty__extra`},e.extra()):null)}});function fi(e,t){return r(mn,{name:"fade-in-scale-up-transition"},{default:()=>e?r(Vt,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>r(li)}):null})}const on=se({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:l,valueSetRef:i,renderLabelRef:s,renderOptionRef:u,labelFieldRef:a,valueFieldRef:g,showCheckmarkRef:h,nodePropsRef:p,handleOptionClick:k,handleOptionMouseEnter:B}=it(Kt),z=ft(()=>{const{value:S}=n;return S?e.tmNode.key===S.key:!1});function T(S){const{tmNode:w}=e;w.disabled||k(S,w)}function F(S){const{tmNode:w}=e;w.disabled||B(S,w)}function y(S){const{tmNode:w}=e,{value:j}=z;w.disabled||j||B(S,w)}return{multiple:l,isGrouped:ft(()=>{const{tmNode:S}=e,{parent:w}=S;return w&&w.rawNode.type==="group"}),showCheckmark:h,nodeProps:p,isPending:z,isSelected:ft(()=>{const{value:S}=t,{value:w}=l;if(S===null)return!1;const j=e.tmNode.rawNode[g.value];if(w){const{value:D}=i;return D.has(j)}else return S===j}),labelField:a,renderLabel:s,renderOption:u,handleMouseMove:y,handleMouseEnter:F,handleClick:T}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:l,isGrouped:i,showCheckmark:s,nodeProps:u,renderOption:a,renderLabel:g,handleClick:h,handleMouseEnter:p,handleMouseMove:k}=this,B=fi(n,e),z=g?[g(t,n),s&&B]:[Ae(t[this.labelField],t,n),s&&B],T=u==null?void 0:u(t),F=r("div",Object.assign({},T,{class:[`${e}-base-select-option`,t.class,T==null?void 0:T.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:l,[`${e}-base-select-option--show-checkmark`]:s}],style:[(T==null?void 0:T.style)||"",t.style||""],onClick:$t([h,T==null?void 0:T.onClick]),onMouseenter:$t([p,T==null?void 0:T.onMouseenter]),onMousemove:$t([k,T==null?void 0:T.onMousemove])}),r("div",{class:`${e}-base-select-option__content`},z));return t.render?t.render({node:F,option:t,selected:n}):a?a({node:F,option:t,selected:n}):F}}),an=se({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:l}=it(Kt);return{labelField:n,nodeProps:l,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:l,tmNode:{rawNode:i}}=this,s=l==null?void 0:l(i),u=t?t(i,!1):Ae(i[this.labelField],i,!1),a=r("div",Object.assign({},s,{class:[`${e}-base-select-group-header`,s==null?void 0:s.class]}),u);return i.render?i.render({node:a,option:i}):n?n({node:a,option:i,selected:!1}):a}}),vi=c("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[c("scrollbar",`
 max-height: var(--n-height);
 `),c("virtual-list",`
 max-height: var(--n-height);
 `),c("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[N("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),c("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),c("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),N("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),N("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),N("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),N("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),c("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),c("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[P("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),Z("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Z("&:active",`
 color: var(--n-option-text-color-pressed);
 `),P("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),P("pending",[Z("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),P("selected",`
 color: var(--n-option-text-color-active);
 `,[Z("&::before",`
 background-color: var(--n-option-color-active);
 `),P("pending",[Z("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),P("disabled",`
 cursor: not-allowed;
 `,[tt("selected",`
 color: var(--n-option-text-color-disabled);
 `),P("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),N("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[xn({enterScale:"0.5"})])])]),bi=se({name:"InternalSelectMenu",props:Object.assign(Object.assign({},ye.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=ot(e),l=yn("InternalSelectMenu",n,t),i=ye("InternalSelectMenu","-internal-select-menu",vi,Zn,e,ne(e,"clsPrefix")),s=O(null),u=O(null),a=O(null),g=W(()=>e.treeMate.getFlattenedNodes()),h=W(()=>Jn(g.value)),p=O(null);function k(){const{treeMate:b}=e;let R=null;const{value:oe}=e;oe===null?R=b.getFirstAvailableNode():(e.multiple?R=b.getNode((oe||[])[(oe||[]).length-1]):R=b.getNode(oe),(!R||R.disabled)&&(R=b.getFirstAvailableNode())),Y(R||null)}function B(){const{value:b}=p;b&&!e.treeMate.getNode(b.key)&&(p.value=null)}let z;$e(()=>e.show,b=>{b?z=$e(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?k():B(),Je(q)):B()},{immediate:!0}):z==null||z()},{immediate:!0}),gn(()=>{z==null||z()});const T=W(()=>pt(i.value.self[de("optionHeight",e.size)])),F=W(()=>Fe(i.value.self[de("padding",e.size)])),y=W(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),S=W(()=>{const b=g.value;return b&&b.length===0});function w(b){const{onToggle:R}=e;R&&R(b)}function j(b){const{onScroll:R}=e;R&&R(b)}function D(b){var R;(R=a.value)===null||R===void 0||R.sync(),j(b)}function $(){var b;(b=a.value)===null||b===void 0||b.sync()}function L(){const{value:b}=p;return b||null}function X(b,R){R.disabled||Y(R,!1)}function fe(b,R){R.disabled||w(R)}function ve(b){var R;Qe(b,"action")||(R=e.onKeyup)===null||R===void 0||R.call(e,b)}function be(b){var R;Qe(b,"action")||(R=e.onKeydown)===null||R===void 0||R.call(e,b)}function C(b){var R;(R=e.onMousedown)===null||R===void 0||R.call(e,b),!e.focusable&&b.preventDefault()}function I(){const{value:b}=p;b&&Y(b.getNext({loop:!0}),!0)}function E(){const{value:b}=p;b&&Y(b.getPrev({loop:!0}),!0)}function Y(b,R=!1){p.value=b,R&&q()}function q(){var b,R;const oe=p.value;if(!oe)return;const he=h.value(oe.key);he!==null&&(e.virtualScroll?(b=u.value)===null||b===void 0||b.scrollTo({index:he}):(R=a.value)===null||R===void 0||R.scrollTo({index:he,elSize:T.value}))}function Q(b){var R,oe;!((R=s.value)===null||R===void 0)&&R.contains(b.target)&&((oe=e.onFocus)===null||oe===void 0||oe.call(e,b))}function ee(b){var R,oe;!((R=s.value)===null||R===void 0)&&R.contains(b.relatedTarget)||(oe=e.onBlur)===null||oe===void 0||oe.call(e,b)}At(Kt,{handleOptionMouseEnter:X,handleOptionClick:fe,valueSetRef:y,pendingTmNodeRef:p,nodePropsRef:ne(e,"nodeProps"),showCheckmarkRef:ne(e,"showCheckmark"),multipleRef:ne(e,"multiple"),valueRef:ne(e,"value"),renderLabelRef:ne(e,"renderLabel"),renderOptionRef:ne(e,"renderOption"),labelFieldRef:ne(e,"labelField"),valueFieldRef:ne(e,"valueField")}),At(no,s),nt(()=>{const{value:b}=a;b&&b.sync()});const te=W(()=>{const{size:b}=e,{common:{cubicBezierEaseInOut:R},self:{height:oe,borderRadius:he,color:Se,groupHeaderTextColor:_e,actionDividerColor:we,optionTextColorPressed:pe,optionTextColor:Ce,optionTextColorDisabled:Re,optionTextColorActive:Be,optionOpacityDisabled:Ee,optionCheckColor:Pe,actionTextColor:Le,optionColorPending:ke,optionColorActive:Oe,loadingColor:Ie,loadingSize:me,optionColorActivePending:f,[de("optionFontSize",b)]:v,[de("optionHeight",b)]:_,[de("optionPadding",b)]:M}}=i.value;return{"--n-height":oe,"--n-action-divider-color":we,"--n-action-text-color":Le,"--n-bezier":R,"--n-border-radius":he,"--n-color":Se,"--n-option-font-size":v,"--n-group-header-text-color":_e,"--n-option-check-color":Pe,"--n-option-color-pending":ke,"--n-option-color-active":Oe,"--n-option-color-active-pending":f,"--n-option-height":_,"--n-option-opacity-disabled":Ee,"--n-option-text-color":Ce,"--n-option-text-color-active":Be,"--n-option-text-color-disabled":Re,"--n-option-text-color-pressed":pe,"--n-option-padding":M,"--n-option-padding-left":Fe(M,"left"),"--n-option-padding-right":Fe(M,"right"),"--n-loading-color":Ie,"--n-loading-size":me}}),{inlineThemeDisabled:ce}=e,ae=ce?at("internal-select-menu",W(()=>e.size[0]),te,e):void 0,ue={selfRef:s,next:I,prev:E,getPendingTmNode:L};return Tn(s,e.onResize),Object.assign({mergedTheme:i,mergedClsPrefix:t,rtlEnabled:l,virtualListRef:u,scrollbarRef:a,itemSize:T,padding:F,flattenedNodes:g,empty:S,virtualListContainer(){const{value:b}=u;return b==null?void 0:b.listElRef},virtualListContent(){const{value:b}=u;return b==null?void 0:b.itemsElRef},doScroll:j,handleFocusin:Q,handleFocusout:ee,handleKeyUp:ve,handleKeyDown:be,handleMouseDown:C,handleVirtualListResize:$,handleVirtualListScroll:D,cssVars:ce?void 0:te,themeClass:ae==null?void 0:ae.themeClass,onRender:ae==null?void 0:ae.onRender},ue)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:l,themeClass:i,onRender:s}=this;return s==null||s(),r("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,i,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},mt(e.header,u=>u&&r("div",{class:`${n}-base-select-menu__header`,"data-header":!0,key:"header"},u)),this.loading?r("div",{class:`${n}-base-select-menu__loading`},r(Qn,{clsPrefix:n,strokeWidth:20})):this.empty?r("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},to(e.empty,()=>[r(ui,{theme:l.peers.Empty,themeOverrides:l.peerOverrides.Empty})])):r(eo,{ref:"scrollbarRef",theme:l.peers.Scrollbar,themeOverrides:l.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?r(Vo,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:u})=>u.isGroup?r(an,{key:u.key,clsPrefix:n,tmNode:u}):u.ignored?null:r(on,{clsPrefix:n,key:u.key,tmNode:u})}):r("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(u=>u.isGroup?r(an,{key:u.key,clsPrefix:n,tmNode:u}):r(on,{clsPrefix:n,key:u.key,tmNode:u})))}),mt(e.action,u=>u&&[r("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},u),r(si,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),hi=Z([c("base-selection",`
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
 `,[c("base-loading",`
 color: var(--n-loading-color);
 `),c("base-selection-tags","min-height: var(--n-height);"),N("border, state-border",`
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
 `),N("state-border",`
 z-index: 1;
 border-color: #0000;
 `),c("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[N("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),c("base-selection-overlay",`
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
 `,[N("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),c("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[N("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),c("base-selection-tags",`
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
 `),c("base-selection-label",`
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
 `,[c("base-selection-input",`
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
 `,[N("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),N("render-label",`
 color: var(--n-text-color);
 `)]),tt("disabled",[Z("&:hover",[N("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),P("focus",[N("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),P("active",[N("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),c("base-selection-label","background-color: var(--n-color-active);"),c("base-selection-tags","background-color: var(--n-color-active);")])]),P("disabled","cursor: not-allowed;",[N("arrow",`
 color: var(--n-arrow-color-disabled);
 `),c("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[c("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),N("render-label",`
 color: var(--n-text-color-disabled);
 `)]),c("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),c("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),c("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[N("input",`
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
 `),N("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>P(`${e}-status`,[N("state-border",`border: var(--n-border-${e});`),tt("disabled",[Z("&:hover",[N("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),P("active",[N("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),c("base-selection-label",`background-color: var(--n-color-active-${e});`),c("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),P("focus",[N("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),c("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),c("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[Z("&:last-child","padding-right: 0;"),c("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[N("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),pi=se({name:"InternalSelection",props:Object.assign(Object.assign({},ye.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=ot(e),l=yn("InternalSelection",n,t),i=O(null),s=O(null),u=O(null),a=O(null),g=O(null),h=O(null),p=O(null),k=O(null),B=O(null),z=O(null),T=O(!1),F=O(!1),y=O(!1),S=ye("InternalSelection","-internal-selection",hi,oo,e,ne(e,"clsPrefix")),w=W(()=>e.clearable&&!e.disabled&&(y.value||e.active)),j=W(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Ae(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),D=W(()=>{const d=e.selectedOption;if(d)return d[e.labelField]}),$=W(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function L(){var d;const{value:x}=i;if(x){const{value:J}=s;J&&(J.style.width=`${x.offsetWidth}px`,e.maxTagCount!=="responsive"&&((d=B.value)===null||d===void 0||d.sync({showAllItemsBeforeCalculate:!1})))}}function X(){const{value:d}=z;d&&(d.style.display="none")}function fe(){const{value:d}=z;d&&(d.style.display="inline-block")}$e(ne(e,"active"),d=>{d||X()}),$e(ne(e,"pattern"),()=>{e.multiple&&Je(L)});function ve(d){const{onFocus:x}=e;x&&x(d)}function be(d){const{onBlur:x}=e;x&&x(d)}function C(d){const{onDeleteOption:x}=e;x&&x(d)}function I(d){const{onClear:x}=e;x&&x(d)}function E(d){const{onPatternInput:x}=e;x&&x(d)}function Y(d){var x;(!d.relatedTarget||!(!((x=u.value)===null||x===void 0)&&x.contains(d.relatedTarget)))&&ve(d)}function q(d){var x;!((x=u.value)===null||x===void 0)&&x.contains(d.relatedTarget)||be(d)}function Q(d){I(d)}function ee(){y.value=!0}function te(){y.value=!1}function ce(d){!e.active||!e.filterable||d.target!==s.value&&d.preventDefault()}function ae(d){C(d)}const ue=O(!1);function b(d){if(d.key==="Backspace"&&!ue.value&&!e.pattern.length){const{selectedOptions:x}=e;x!=null&&x.length&&ae(x[x.length-1])}}let R=null;function oe(d){const{value:x}=i;if(x){const J=d.target.value;x.textContent=J,L()}e.ignoreComposition&&ue.value?R=d:E(d)}function he(){ue.value=!0}function Se(){ue.value=!1,e.ignoreComposition&&E(R),R=null}function _e(d){var x;F.value=!0,(x=e.onPatternFocus)===null||x===void 0||x.call(e,d)}function we(d){var x;F.value=!1,(x=e.onPatternBlur)===null||x===void 0||x.call(e,d)}function pe(){var d,x;if(e.filterable)F.value=!1,(d=h.value)===null||d===void 0||d.blur(),(x=s.value)===null||x===void 0||x.blur();else if(e.multiple){const{value:J}=a;J==null||J.blur()}else{const{value:J}=g;J==null||J.blur()}}function Ce(){var d,x,J;e.filterable?(F.value=!1,(d=h.value)===null||d===void 0||d.focus()):e.multiple?(x=a.value)===null||x===void 0||x.focus():(J=g.value)===null||J===void 0||J.focus()}function Re(){const{value:d}=s;d&&(fe(),d.focus())}function Be(){const{value:d}=s;d&&d.blur()}function Ee(d){const{value:x}=p;x&&x.setTextContent(`+${d}`)}function Pe(){const{value:d}=k;return d}function Le(){return s.value}let ke=null;function Oe(){ke!==null&&window.clearTimeout(ke)}function Ie(){e.active||(Oe(),ke=window.setTimeout(()=>{$.value&&(T.value=!0)},100))}function me(){Oe()}function f(d){d||(Oe(),T.value=!1)}$e($,d=>{d||(T.value=!1)}),nt(()=>{wn(()=>{const d=h.value;d&&(e.disabled?d.removeAttribute("tabindex"):d.tabIndex=F.value?-1:0)})}),Tn(u,e.onResize);const{inlineThemeDisabled:v}=e,_=W(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:x},self:{borderRadius:J,color:Ve,placeholderColor:Ke,textColor:We,paddingSingle:De,paddingMultiple:je,caretColor:Ue,colorDisabled:qe,textColorDisabled:He,placeholderColorDisabled:Te,colorActive:o,boxShadowFocus:m,boxShadowActive:A,boxShadowHover:U,border:K,borderFocus:V,borderHover:H,borderActive:le,arrowColor:xe,arrowColorDisabled:yt,loadingColor:wt,colorActiveWarning:Ct,boxShadowFocusWarning:St,boxShadowActiveWarning:Rt,boxShadowHoverWarning:Tt,borderWarning:zt,borderFocusWarning:_t,borderHoverWarning:Pn,borderActiveWarning:kn,colorActiveError:On,boxShadowFocusError:Fn,boxShadowActiveError:$n,boxShadowHoverError:In,borderError:Mn,borderFocusError:Bn,borderHoverError:En,borderActiveError:Ln,clearColor:An,clearColorHover:Nn,clearColorPressed:Wn,clearSize:Dn,arrowSize:jn,[de("height",d)]:Hn,[de("fontSize",d)]:Vn}}=S.value,lt=Fe(De),rt=Fe(je);return{"--n-bezier":x,"--n-border":K,"--n-border-active":le,"--n-border-focus":V,"--n-border-hover":H,"--n-border-radius":J,"--n-box-shadow-active":A,"--n-box-shadow-focus":m,"--n-box-shadow-hover":U,"--n-caret-color":Ue,"--n-color":Ve,"--n-color-active":o,"--n-color-disabled":qe,"--n-font-size":Vn,"--n-height":Hn,"--n-padding-single-top":lt.top,"--n-padding-multiple-top":rt.top,"--n-padding-single-right":lt.right,"--n-padding-multiple-right":rt.right,"--n-padding-single-left":lt.left,"--n-padding-multiple-left":rt.left,"--n-padding-single-bottom":lt.bottom,"--n-padding-multiple-bottom":rt.bottom,"--n-placeholder-color":Ke,"--n-placeholder-color-disabled":Te,"--n-text-color":We,"--n-text-color-disabled":He,"--n-arrow-color":xe,"--n-arrow-color-disabled":yt,"--n-loading-color":wt,"--n-color-active-warning":Ct,"--n-box-shadow-focus-warning":St,"--n-box-shadow-active-warning":Rt,"--n-box-shadow-hover-warning":Tt,"--n-border-warning":zt,"--n-border-focus-warning":_t,"--n-border-hover-warning":Pn,"--n-border-active-warning":kn,"--n-color-active-error":On,"--n-box-shadow-focus-error":Fn,"--n-box-shadow-active-error":$n,"--n-box-shadow-hover-error":In,"--n-border-error":Mn,"--n-border-focus-error":Bn,"--n-border-hover-error":En,"--n-border-active-error":Ln,"--n-clear-size":Dn,"--n-clear-color":An,"--n-clear-color-hover":Nn,"--n-clear-color-pressed":Wn,"--n-arrow-size":jn}}),M=v?at("internal-selection",W(()=>e.size[0]),_,e):void 0;return{mergedTheme:S,mergedClearable:w,mergedClsPrefix:t,rtlEnabled:l,patternInputFocused:F,filterablePlaceholder:j,label:D,selected:$,showTagsPanel:T,isComposing:ue,counterRef:p,counterWrapperRef:k,patternInputMirrorRef:i,patternInputRef:s,selfRef:u,multipleElRef:a,singleElRef:g,patternInputWrapperRef:h,overflowRef:B,inputTagElRef:z,handleMouseDown:ce,handleFocusin:Y,handleClear:Q,handleMouseEnter:ee,handleMouseLeave:te,handleDeleteOption:ae,handlePatternKeyDown:b,handlePatternInputInput:oe,handlePatternInputBlur:we,handlePatternInputFocus:_e,handleMouseEnterCounter:Ie,handleMouseLeaveCounter:me,handleFocusout:q,handleCompositionEnd:Se,handleCompositionStart:he,onPopoverUpdateShow:f,focus:Ce,focusInput:Re,blur:pe,blurInput:Be,updateCounter:Ee,getCounter:Pe,getTail:Le,renderLabel:e.renderLabel,cssVars:v?void 0:_,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender}},render(){const{status:e,multiple:t,size:n,disabled:l,filterable:i,maxTagCount:s,bordered:u,clsPrefix:a,ellipsisTagPopoverProps:g,onRender:h,renderTag:p,renderLabel:k}=this;h==null||h();const B=s==="responsive",z=typeof s=="number",T=B||z,F=r(io,null,{default:()=>r(Ao,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var S,w;return(w=(S=this.$slots).arrow)===null||w===void 0?void 0:w.call(S)}})});let y;if(t){const{labelField:S}=this,w=E=>r("div",{class:`${a}-base-selection-tag-wrapper`,key:E.value},p?p({option:E,handleClose:()=>{this.handleDeleteOption(E)}}):r(Pt,{size:n,closable:!E.disabled,disabled:l,onClose:()=>{this.handleDeleteOption(E)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>k?k(E,!0):Ae(E[S],E,!0)})),j=()=>(z?this.selectedOptions.slice(0,s):this.selectedOptions).map(w),D=i?r("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:l,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,$=B?()=>r("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},r(Pt,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:l})):void 0;let L;if(z){const E=this.selectedOptions.length-s;E>0&&(L=r("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},r(Pt,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:l},{default:()=>`+${E}`})))}const X=B?i?r(Xt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:j,counter:$,tail:()=>D}):r(Xt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:j,counter:$}):z&&L?j().concat(L):j(),fe=T?()=>r("div",{class:`${a}-base-selection-popover`},B?j():this.selectedOptions.map(w)):void 0,ve=T?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},g):null,C=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},r("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,I=i?r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},X,B?null:D,F):r("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:l?void 0:0},X,F);y=r(et,null,T?r(ao,Object.assign({},ve,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>I,default:fe}):I,C)}else if(i){const S=this.pattern||this.isComposing,w=this.active?!S:!this.selected,j=this.active?!1:this.selected;y=r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:Jt(this.label)},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:l,disabled:l,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),j?r("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},r("div",{class:`${a}-base-selection-overlay__wrapper`},p?p({option:this.selectedOption,handleClose:()=>{}}):k?k(this.selectedOption,!0):Ae(this.label,this.selectedOption,!0))):null,w?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,F)}else y=r("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?r("div",{class:`${a}-base-selection-input`,title:Jt(this.label),key:"input"},r("div",{class:`${a}-base-selection-input__content`},p?p({option:this.selectedOption,handleClose:()=>{}}):k?k(this.selectedOption,!0):Ae(this.label,this.selectedOption,!0))):r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),F);return r("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},y,u?r("div",{class:`${a}-base-selection__border`}):null,u?r("div",{class:`${a}-base-selection__state-border`}):null)}});function xt(e){return e.type==="group"}function zn(e){return e.type==="ignored"}function Et(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function gi(e,t){return{getIsGroup:xt,getIgnored:zn,getKey(l){return xt(l)?l.name||l.key||"key-required":l[e]},getChildren(l){return l[t]}}}function mi(e,t,n,l){if(!t)return e;function i(s){if(!Array.isArray(s))return[];const u=[];for(const a of s)if(xt(a)){const g=i(a[l]);g.length&&u.push(Object.assign({},a,{[l]:g}))}else{if(zn(a))continue;t(n,a)&&u.push(a)}return u}return i(e)}function xi(e,t,n){const l=new Map;return e.forEach(i=>{xt(i)?i[n].forEach(s=>{l.set(s[t],s)}):l.set(i[t],i)}),l}const yi=Z([c("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),c("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[xn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),wi=Object.assign(Object.assign({},ye.props),{to:Dt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),ln=se({name:"Select",props:wi,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:l,inlineThemeDisabled:i}=ot(e),s=ye("Select","-select",yi,lo,e,t),u=O(e.defaultValue),a=ne(e,"value"),g=Nt(a,u),h=O(!1),p=O(""),k=Wt(e,["items","options"]),B=O([]),z=O([]),T=W(()=>z.value.concat(B.value).concat(k.value)),F=W(()=>{const{filter:o}=e;if(o)return o;const{labelField:m,valueField:A}=e;return(U,K)=>{if(!K)return!1;const V=K[m];if(typeof V=="string")return Et(U,V);const H=K[A];return typeof H=="string"?Et(U,H):typeof H=="number"?Et(U,String(H)):!1}}),y=W(()=>{if(e.remote)return k.value;{const{value:o}=T,{value:m}=p;return!m.length||!e.filterable?o:mi(o,F.value,m,e.childrenField)}}),S=W(()=>{const{valueField:o,childrenField:m}=e,A=gi(o,m);return ro(y.value,A)}),w=W(()=>xi(T.value,e.valueField,e.childrenField)),j=O(!1),D=Nt(ne(e,"show"),j),$=O(null),L=O(null),X=O(null),{localeRef:fe}=Rn("Select"),ve=W(()=>{var o;return(o=e.placeholder)!==null&&o!==void 0?o:fe.value.placeholder}),be=[],C=O(new Map),I=W(()=>{const{fallbackOption:o}=e;if(o===void 0){const{labelField:m,valueField:A}=e;return U=>({[m]:String(U),[A]:U})}return o===!1?!1:m=>Object.assign(o(m),{value:m})});function E(o){const m=e.remote,{value:A}=C,{value:U}=w,{value:K}=I,V=[];return o.forEach(H=>{if(U.has(H))V.push(U.get(H));else if(m&&A.has(H))V.push(A.get(H));else if(K){const le=K(H);le&&V.push(le)}}),V}const Y=W(()=>{if(e.multiple){const{value:o}=g;return Array.isArray(o)?E(o):[]}return null}),q=W(()=>{const{value:o}=g;return!e.multiple&&!Array.isArray(o)?o===null?null:E([o])[0]||null:null}),Q=so(e),{mergedSizeRef:ee,mergedDisabledRef:te,mergedStatusRef:ce}=Q;function ae(o,m){const{onChange:A,"onUpdate:value":U,onUpdateValue:K}=e,{nTriggerFormChange:V,nTriggerFormInput:H}=Q;A&&ge(A,o,m),K&&ge(K,o,m),U&&ge(U,o,m),u.value=o,V(),H()}function ue(o){const{onBlur:m}=e,{nTriggerFormBlur:A}=Q;m&&ge(m,o),A()}function b(){const{onClear:o}=e;o&&ge(o)}function R(o){const{onFocus:m,showOnFocus:A}=e,{nTriggerFormFocus:U}=Q;m&&ge(m,o),U(),A&&we()}function oe(o){const{onSearch:m}=e;m&&ge(m,o)}function he(o){const{onScroll:m}=e;m&&ge(m,o)}function Se(){var o;const{remote:m,multiple:A}=e;if(m){const{value:U}=C;if(A){const{valueField:K}=e;(o=Y.value)===null||o===void 0||o.forEach(V=>{U.set(V[K],V)})}else{const K=q.value;K&&U.set(K[e.valueField],K)}}}function _e(o){const{onUpdateShow:m,"onUpdate:show":A}=e;m&&ge(m,o),A&&ge(A,o),j.value=o}function we(){te.value||(_e(!0),j.value=!0,e.filterable&&je())}function pe(){_e(!1)}function Ce(){p.value="",z.value=be}const Re=O(!1);function Be(){e.filterable&&(Re.value=!0)}function Ee(){e.filterable&&(Re.value=!1,D.value||Ce())}function Pe(){te.value||(D.value?e.filterable?je():pe():we())}function Le(o){var m,A;!((A=(m=X.value)===null||m===void 0?void 0:m.selfRef)===null||A===void 0)&&A.contains(o.relatedTarget)||(h.value=!1,ue(o),pe())}function ke(o){R(o),h.value=!0}function Oe(){h.value=!0}function Ie(o){var m;!((m=$.value)===null||m===void 0)&&m.$el.contains(o.relatedTarget)||(h.value=!1,ue(o),pe())}function me(){var o;(o=$.value)===null||o===void 0||o.focus(),pe()}function f(o){var m;D.value&&(!((m=$.value)===null||m===void 0)&&m.$el.contains(bo(o))||pe())}function v(o){if(!Array.isArray(o))return[];if(I.value)return Array.from(o);{const{remote:m}=e,{value:A}=w;if(m){const{value:U}=C;return o.filter(K=>A.has(K)||U.has(K))}else return o.filter(U=>A.has(U))}}function _(o){M(o.rawNode)}function M(o){if(te.value)return;const{tag:m,remote:A,clearFilterAfterSelect:U,valueField:K}=e;if(m&&!A){const{value:V}=z,H=V[0]||null;if(H){const le=B.value;le.length?le.push(H):B.value=[H],z.value=be}}if(A&&C.value.set(o[K],o),e.multiple){const V=v(g.value),H=V.findIndex(le=>le===o[K]);if(~H){if(V.splice(H,1),m&&!A){const le=d(o[K]);~le&&(B.value.splice(le,1),U&&(p.value=""))}}else V.push(o[K]),U&&(p.value="");ae(V,E(V))}else{if(m&&!A){const V=d(o[K]);~V?B.value=[B.value[V]]:B.value=be}De(),pe(),ae(o[K],o)}}function d(o){return B.value.findIndex(A=>A[e.valueField]===o)}function x(o){D.value||we();const{value:m}=o.target;p.value=m;const{tag:A,remote:U}=e;if(oe(m),A&&!U){if(!m){z.value=be;return}const{onCreate:K}=e,V=K?K(m):{[e.labelField]:m,[e.valueField]:m},{valueField:H,labelField:le}=e;k.value.some(xe=>xe[H]===V[H]||xe[le]===V[le])||B.value.some(xe=>xe[H]===V[H]||xe[le]===V[le])?z.value=be:z.value=[V]}}function J(o){o.stopPropagation();const{multiple:m}=e;!m&&e.filterable&&pe(),b(),m?ae([],[]):ae(null,null)}function Ve(o){!Qe(o,"action")&&!Qe(o,"empty")&&!Qe(o,"header")&&o.preventDefault()}function Ke(o){he(o)}function We(o){var m,A,U,K,V;if(!e.keyboard){o.preventDefault();return}switch(o.key){case" ":if(e.filterable)break;o.preventDefault();case"Enter":if(!(!((m=$.value)===null||m===void 0)&&m.isComposing)){if(D.value){const H=(A=X.value)===null||A===void 0?void 0:A.getPendingTmNode();H?_(H):e.filterable||(pe(),De())}else if(we(),e.tag&&Re.value){const H=z.value[0];if(H){const le=H[e.valueField],{value:xe}=g;e.multiple&&Array.isArray(xe)&&xe.includes(le)||M(H)}}}o.preventDefault();break;case"ArrowUp":if(o.preventDefault(),e.loading)return;D.value&&((U=X.value)===null||U===void 0||U.prev());break;case"ArrowDown":if(o.preventDefault(),e.loading)return;D.value?(K=X.value)===null||K===void 0||K.next():we();break;case"Escape":D.value&&(ho(o),pe()),(V=$.value)===null||V===void 0||V.focus();break}}function De(){var o;(o=$.value)===null||o===void 0||o.focus()}function je(){var o;(o=$.value)===null||o===void 0||o.focusInput()}function Ue(){var o;D.value&&((o=L.value)===null||o===void 0||o.syncPosition())}Se(),$e(ne(e,"options"),Se);const qe={focus:()=>{var o;(o=$.value)===null||o===void 0||o.focus()},focusInput:()=>{var o;(o=$.value)===null||o===void 0||o.focusInput()},blur:()=>{var o;(o=$.value)===null||o===void 0||o.blur()},blurInput:()=>{var o;(o=$.value)===null||o===void 0||o.blurInput()}},He=W(()=>{const{self:{menuBoxShadow:o}}=s.value;return{"--n-menu-box-shadow":o}}),Te=i?at("select",void 0,He,e):void 0;return Object.assign(Object.assign({},qe),{mergedStatus:ce,mergedClsPrefix:t,mergedBordered:n,namespace:l,treeMate:S,isMounted:co(),triggerRef:$,menuRef:X,pattern:p,uncontrolledShow:j,mergedShow:D,adjustedTo:Dt(e),uncontrolledValue:u,mergedValue:g,followerRef:L,localizedPlaceholder:ve,selectedOption:q,selectedOptions:Y,mergedSize:ee,mergedDisabled:te,focused:h,activeWithoutMenuOpen:Re,inlineThemeDisabled:i,onTriggerInputFocus:Be,onTriggerInputBlur:Ee,handleTriggerOrMenuResize:Ue,handleMenuFocus:Oe,handleMenuBlur:Ie,handleMenuTabOut:me,handleTriggerClick:Pe,handleToggle:_,handleDeleteOption:M,handlePatternInput:x,handleClear:J,handleTriggerBlur:Le,handleTriggerFocus:ke,handleKeydown:We,handleMenuAfterLeave:Ce,handleMenuClickOutside:f,handleMenuScroll:Ke,handleMenuKeydown:We,handleMenuMousedown:Ve,mergedTheme:s,cssVars:i?void 0:He,themeClass:Te==null?void 0:Te.themeClass,onRender:Te==null?void 0:Te.onRender})},render(){return r("div",{class:`${this.mergedClsPrefix}-select`},r(uo,null,{default:()=>[r(fo,null,{default:()=>r(pi,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),r(vo,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Dt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>r(mn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Cn(r(bi,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var l,i;return[(i=(l=this.$slots).empty)===null||i===void 0?void 0:i.call(l)]},header:()=>{var l,i;return[(i=(l=this.$slots).header)===null||i===void 0?void 0:i.call(l)]},action:()=>{var l,i;return[(i=(l=this.$slots).action)===null||i===void 0?void 0:i.call(l)]}}),this.displayDirective==="show"?[[Sn,this.mergedShow],[Yt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Yt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Ci=c("ellipsis",{overflow:"hidden"},[tt("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),P("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),P("cursor-pointer",`
 cursor: pointer;
 `)]);function rn(e){return`${e}-ellipsis--line-clamp`}function sn(e,t){return`${e}-ellipsis--cursor-${t}`}const Si=Object.assign(Object.assign({},ye.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),Ri=se({name:"Ellipsis",inheritAttrs:!1,props:Si,setup(e,{slots:t,attrs:n}){const l=po(),i=ye("Ellipsis","-ellipsis",Ci,go,e,l),s=O(null),u=O(null),a=O(null),g=O(!1),h=W(()=>{const{lineClamp:y}=e,{value:S}=g;return y!==void 0?{textOverflow:"","-webkit-line-clamp":S?"":y}:{textOverflow:S?"":"ellipsis","-webkit-line-clamp":""}});function p(){let y=!1;const{value:S}=g;if(S)return!0;const{value:w}=s;if(w){const{lineClamp:j}=e;if(z(w),j!==void 0)y=w.scrollHeight<=w.offsetHeight;else{const{value:D}=u;D&&(y=D.getBoundingClientRect().width<=w.getBoundingClientRect().width)}T(w,y)}return y}const k=W(()=>e.expandTrigger==="click"?()=>{var y;const{value:S}=g;S&&((y=a.value)===null||y===void 0||y.setShow(!1)),g.value=!S}:void 0);pn(()=>{var y;e.tooltip&&((y=a.value)===null||y===void 0||y.setShow(!1))});const B=()=>r("span",Object.assign({},Ht(n,{class:[`${l.value}-ellipsis`,e.lineClamp!==void 0?rn(l.value):void 0,e.expandTrigger==="click"?sn(l.value,"pointer"):void 0],style:h.value}),{ref:"triggerRef",onClick:k.value,onMouseenter:e.expandTrigger==="click"?p:void 0}),e.lineClamp?t:r("span",{ref:"triggerInnerRef"},t));function z(y){if(!y)return;const S=h.value,w=rn(l.value);e.lineClamp!==void 0?F(y,w,"add"):F(y,w,"remove");for(const j in S)y.style[j]!==S[j]&&(y.style[j]=S[j])}function T(y,S){const w=sn(l.value,"pointer");e.expandTrigger==="click"&&!S?F(y,w,"add"):F(y,w,"remove")}function F(y,S,w){w==="add"?y.classList.contains(S)||y.classList.add(S):y.classList.contains(S)&&y.classList.remove(S)}return{mergedTheme:i,triggerRef:s,triggerInnerRef:u,tooltipRef:a,handleClick:k,renderTrigger:B,getTooltipDisabled:p}},render(){var e;const{tooltip:t,renderTrigger:n,$slots:l}=this;if(t){const{mergedTheme:i}=this;return r(mo,Object.assign({ref:"tooltipRef",placement:"top"},t,{getDisabled:this.getTooltipDisabled,theme:i.peers.Tooltip,themeOverrides:i.peerOverrides.Tooltip}),{trigger:n,default:(e=l.tooltip)!==null&&e!==void 0?e:l.default})}else return n()}}),qt=xo("n-tabs"),_n={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},dn=se({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:_n,setup(e){const t=it(qt,null);return t||yo("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return r("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ti=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Co(_n,["displayDirective"])),jt=se({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Ti,setup(e){const{mergedClsPrefixRef:t,valueRef:n,typeRef:l,closableRef:i,tabStyleRef:s,addTabStyleRef:u,tabClassRef:a,addTabClassRef:g,tabChangeIdRef:h,onBeforeLeaveRef:p,triggerRef:k,handleAdd:B,activateTab:z,handleClose:T}=it(qt);return{trigger:k,mergedClosable:W(()=>{if(e.internalAddable)return!1;const{closable:F}=e;return F===void 0?i.value:F}),style:s,addStyle:u,tabClass:a,addTabClass:g,clsPrefix:t,value:n,type:l,handleClose(F){F.stopPropagation(),!e.disabled&&T(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){B();return}const{name:F}=e,y=++h.id;if(F!==n.value){const{value:S}=p;S?Promise.resolve(S(e.name,n.value)).then(w=>{w&&h.id===y&&z(F)}):z(F)}}}},render(){const{internalAddable:e,clsPrefix:t,name:n,disabled:l,label:i,tab:s,value:u,mergedClosable:a,trigger:g,$slots:{default:h}}=this,p=i??s;return r("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?r("div",{class:`${t}-tabs-tab-pad`}):null,r("div",Object.assign({key:n,"data-name":n,"data-disabled":l?!0:void 0},Ht({class:[`${t}-tabs-tab`,u===n&&`${t}-tabs-tab--active`,l&&`${t}-tabs-tab--disabled`,a&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:g==="click"?this.activateTab:void 0,onMouseenter:g==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),r("span",{class:`${t}-tabs-tab__label`},e?r(et,null,r("div",{class:`${t}-tabs-tab__height-placeholder`}," "),r(Vt,{clsPrefix:t},{default:()=>r(No,null)})):h?h():typeof p=="object"?p:Ae(p??n)),a&&this.type==="card"?r(wo,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:l}):null))}}),zi=c("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[P("segment-type",[c("tabs-rail",[Z("&.transition-disabled",[c("tabs-capsule",`
 transition: none;
 `)])])]),P("top",[c("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),P("left",[c("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),P("left, right",`
 flex-direction: row;
 `,[c("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),c("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),P("right",`
 flex-direction: row-reverse;
 `,[c("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),c("tabs-bar",`
 left: 0;
 `)]),P("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[c("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),c("tabs-bar",`
 top: 0;
 `)]),c("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[c("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),c("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[c("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[P("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),Z("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),P("flex",[c("tabs-nav",`
 width: 100%;
 position: relative;
 `,[c("tabs-wrapper",`
 width: 100%;
 `,[c("tabs-tab",`
 margin-right: 0;
 `)])])]),c("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[N("prefix, suffix",`
 display: flex;
 align-items: center;
 `),N("prefix","padding-right: 16px;"),N("suffix","padding-left: 16px;")]),P("top, bottom",[c("tabs-nav-scroll-wrapper",[Z("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),Z("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),P("shadow-start",[Z("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),P("shadow-end",[Z("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),P("left, right",[c("tabs-nav-scroll-content",`
 flex-direction: column;
 `),c("tabs-nav-scroll-wrapper",[Z("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),Z("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),P("shadow-start",[Z("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),P("shadow-end",[Z("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),c("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[c("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[Z("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),Z("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),c("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),c("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),c("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),c("tabs-tab",`
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
 `,[P("disabled",{cursor:"not-allowed"}),N("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),N("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),c("tabs-bar",`
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
 `,[Z("&.transition-disabled",`
 transition: none;
 `),P("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),c("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),c("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[Z("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),Z("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),Z("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),Z("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),Z("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),c("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),P("line-type, bar-type",[c("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[Z("&:hover",{color:"var(--n-tab-text-color-hover)"}),P("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),P("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),c("tabs-nav",[P("line-type",[P("top",[N("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),c("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),c("tabs-bar",`
 bottom: -1px;
 `)]),P("left",[N("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),c("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),c("tabs-bar",`
 right: -1px;
 `)]),P("right",[N("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),c("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),c("tabs-bar",`
 left: -1px;
 `)]),P("bottom",[N("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),c("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),c("tabs-bar",`
 top: -1px;
 `)]),N("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),c("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),c("tabs-bar",`
 border-radius: 0;
 `)]),P("card-type",[N("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),c("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),c("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),c("tabs-tab",`
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
 `,[P("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[N("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),tt("disabled",[Z("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),P("closable","padding-right: 8px;"),P("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),P("disabled","color: var(--n-tab-text-color-disabled);")]),c("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),P("left, right",[c("tabs-wrapper",`
 flex-direction: column;
 `,[c("tabs-tab-wrapper",`
 flex-direction: column;
 `,[c("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),P("top",[P("card-type",[c("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[P("active",`
 border-bottom: 1px solid #0000;
 `)]),c("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),c("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),P("left",[P("card-type",[c("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[P("active",`
 border-right: 1px solid #0000;
 `)]),c("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),c("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),P("right",[P("card-type",[c("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[P("active",`
 border-left: 1px solid #0000;
 `)]),c("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),c("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),P("bottom",[P("card-type",[c("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[P("active",`
 border-top: 1px solid #0000;
 `)]),c("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),c("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),_i=Object.assign(Object.assign({},ye.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Pi=se({name:"Tabs",props:_i,setup(e,{slots:t}){var n,l,i,s;const{mergedClsPrefixRef:u,inlineThemeDisabled:a}=ot(e),g=ye("Tabs","-tabs",zi,So,e,u),h=O(null),p=O(null),k=O(null),B=O(null),z=O(null),T=O(null),F=O(!0),y=O(!0),S=Wt(e,["labelSize","size"]),w=Wt(e,["activeName","value"]),j=O((l=(n=w.value)!==null&&n!==void 0?n:e.defaultValue)!==null&&l!==void 0?l:t.default?(s=(i=kt(t.default())[0])===null||i===void 0?void 0:i.props)===null||s===void 0?void 0:s.name:null),D=Nt(w,j),$={id:0},L=W(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});$e(D,()=>{$.id=0,C(),I()});function X(){var f;const{value:v}=D;return v===null?null:(f=h.value)===null||f===void 0?void 0:f.querySelector(`[data-name="${v}"]`)}function fe(f){if(e.type==="card")return;const{value:v}=p;if(!v)return;const _=v.style.opacity==="0";if(f){const M=`${u.value}-tabs-bar--disabled`,{barWidth:d,placement:x}=e;if(f.dataset.disabled==="true"?v.classList.add(M):v.classList.remove(M),["top","bottom"].includes(x)){if(be(["top","maxHeight","height"]),typeof d=="number"&&f.offsetWidth>=d){const J=Math.floor((f.offsetWidth-d)/2)+f.offsetLeft;v.style.left=`${J}px`,v.style.maxWidth=`${d}px`}else v.style.left=`${f.offsetLeft}px`,v.style.maxWidth=`${f.offsetWidth}px`;v.style.width="8192px",_&&(v.style.transition="none"),v.offsetWidth,_&&(v.style.transition="",v.style.opacity="1")}else{if(be(["left","maxWidth","width"]),typeof d=="number"&&f.offsetHeight>=d){const J=Math.floor((f.offsetHeight-d)/2)+f.offsetTop;v.style.top=`${J}px`,v.style.maxHeight=`${d}px`}else v.style.top=`${f.offsetTop}px`,v.style.maxHeight=`${f.offsetHeight}px`;v.style.height="8192px",_&&(v.style.transition="none"),v.offsetHeight,_&&(v.style.transition="",v.style.opacity="1")}}}function ve(){if(e.type==="card")return;const{value:f}=p;f&&(f.style.opacity="0")}function be(f){const{value:v}=p;if(v)for(const _ of f)v.style[_]=""}function C(){if(e.type==="card")return;const f=X();f?fe(f):ve()}function I(){var f;const v=(f=z.value)===null||f===void 0?void 0:f.$el;if(!v)return;const _=X();if(!_)return;const{scrollLeft:M,offsetWidth:d}=v,{offsetLeft:x,offsetWidth:J}=_;M>x?v.scrollTo({top:0,left:x,behavior:"smooth"}):x+J>M+d&&v.scrollTo({top:0,left:x+J-d,behavior:"smooth"})}const E=O(null);let Y=0,q=null;function Q(f){const v=E.value;if(v){Y=f.getBoundingClientRect().height;const _=`${Y}px`,M=()=>{v.style.height=_,v.style.maxHeight=_};q?(M(),q(),q=null):q=M}}function ee(f){const v=E.value;if(v){const _=f.getBoundingClientRect().height,M=()=>{document.body.offsetHeight,v.style.maxHeight=`${_}px`,v.style.height=`${Math.max(Y,_)}px`};q?(q(),q=null,M()):q=M}}function te(){const f=E.value;if(f){f.style.maxHeight="",f.style.height="";const{paneWrapperStyle:v}=e;if(typeof v=="string")f.style.cssText=v;else if(v){const{maxHeight:_,height:M}=v;_!==void 0&&(f.style.maxHeight=_),M!==void 0&&(f.style.height=M)}}}const ce={value:[]},ae=O("next");function ue(f){const v=D.value;let _="next";for(const M of ce.value){if(M===v)break;if(M===f){_="prev";break}}ae.value=_,b(f)}function b(f){const{onActiveNameChange:v,onUpdateValue:_,"onUpdate:value":M}=e;v&&ge(v,f),_&&ge(_,f),M&&ge(M,f),j.value=f}function R(f){const{onClose:v}=e;v&&ge(v,f)}function oe(){const{value:f}=p;if(!f)return;const v="transition-disabled";f.classList.add(v),C(),f.classList.remove(v)}const he=O(null);function Se({transitionDisabled:f}){const v=h.value;if(!v)return;f&&v.classList.add("transition-disabled");const _=X();_&&he.value&&(he.value.style.width=`${_.offsetWidth}px`,he.value.style.height=`${_.offsetHeight}px`,he.value.style.transform=`translateX(${_.offsetLeft-pt(getComputedStyle(v).paddingLeft)}px)`,f&&he.value.offsetWidth),f&&v.classList.remove("transition-disabled")}$e([D],()=>{e.type==="segment"&&Je(()=>{Se({transitionDisabled:!1})})}),nt(()=>{e.type==="segment"&&Se({transitionDisabled:!0})});let _e=0;function we(f){var v;if(f.contentRect.width===0&&f.contentRect.height===0||_e===f.contentRect.width)return;_e=f.contentRect.width;const{type:_}=e;if((_==="line"||_==="bar")&&oe(),_!=="segment"){const{placement:M}=e;Pe((M==="top"||M==="bottom"?(v=z.value)===null||v===void 0?void 0:v.$el:T.value)||null)}}const pe=Bt(we,64);$e([()=>e.justifyContent,()=>e.size],()=>{Je(()=>{const{type:f}=e;(f==="line"||f==="bar")&&oe()})});const Ce=O(!1);function Re(f){var v;const{target:_,contentRect:{width:M}}=f,d=_.parentElement.offsetWidth;if(!Ce.value)d<M&&(Ce.value=!0);else{const{value:x}=B;if(!x)return;d-M>x.$el.offsetWidth&&(Ce.value=!1)}Pe(((v=z.value)===null||v===void 0?void 0:v.$el)||null)}const Be=Bt(Re,64);function Ee(){const{onAdd:f}=e;f&&f(),Je(()=>{const v=X(),{value:_}=z;!v||!_||_.scrollTo({left:v.offsetLeft,top:0,behavior:"smooth"})})}function Pe(f){if(!f)return;const{placement:v}=e;if(v==="top"||v==="bottom"){const{scrollLeft:_,scrollWidth:M,offsetWidth:d}=f;F.value=_<=0,y.value=_+d>=M}else{const{scrollTop:_,scrollHeight:M,offsetHeight:d}=f;F.value=_<=0,y.value=_+d>=M}}const Le=Bt(f=>{Pe(f.target)},64);At(qt,{triggerRef:ne(e,"trigger"),tabStyleRef:ne(e,"tabStyle"),tabClassRef:ne(e,"tabClass"),addTabStyleRef:ne(e,"addTabStyle"),addTabClassRef:ne(e,"addTabClass"),paneClassRef:ne(e,"paneClass"),paneStyleRef:ne(e,"paneStyle"),mergedClsPrefixRef:u,typeRef:ne(e,"type"),closableRef:ne(e,"closable"),valueRef:D,tabChangeIdRef:$,onBeforeLeaveRef:ne(e,"onBeforeLeave"),activateTab:ue,handleClose:R,handleAdd:Ee}),Ro(()=>{C(),I()}),wn(()=>{const{value:f}=k;if(!f)return;const{value:v}=u,_=`${v}-tabs-nav-scroll-wrapper--shadow-start`,M=`${v}-tabs-nav-scroll-wrapper--shadow-end`;F.value?f.classList.remove(_):f.classList.add(_),y.value?f.classList.remove(M):f.classList.add(M)});const ke={syncBarPosition:()=>{C()}},Oe=()=>{Se({transitionDisabled:!0})},Ie=W(()=>{const{value:f}=S,{type:v}=e,_={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[v],M=`${f}${_}`,{self:{barColor:d,closeIconColor:x,closeIconColorHover:J,closeIconColorPressed:Ve,tabColor:Ke,tabBorderColor:We,paneTextColor:De,tabFontWeight:je,tabBorderRadius:Ue,tabFontWeightActive:qe,colorSegment:He,fontWeightStrong:Te,tabColorSegment:o,closeSize:m,closeIconSize:A,closeColorHover:U,closeColorPressed:K,closeBorderRadius:V,[de("panePadding",f)]:H,[de("tabPadding",M)]:le,[de("tabPaddingVertical",M)]:xe,[de("tabGap",M)]:yt,[de("tabGap",`${M}Vertical`)]:wt,[de("tabTextColor",v)]:Ct,[de("tabTextColorActive",v)]:St,[de("tabTextColorHover",v)]:Rt,[de("tabTextColorDisabled",v)]:Tt,[de("tabFontSize",f)]:zt},common:{cubicBezierEaseInOut:_t}}=g.value;return{"--n-bezier":_t,"--n-color-segment":He,"--n-bar-color":d,"--n-tab-font-size":zt,"--n-tab-text-color":Ct,"--n-tab-text-color-active":St,"--n-tab-text-color-disabled":Tt,"--n-tab-text-color-hover":Rt,"--n-pane-text-color":De,"--n-tab-border-color":We,"--n-tab-border-radius":Ue,"--n-close-size":m,"--n-close-icon-size":A,"--n-close-color-hover":U,"--n-close-color-pressed":K,"--n-close-border-radius":V,"--n-close-icon-color":x,"--n-close-icon-color-hover":J,"--n-close-icon-color-pressed":Ve,"--n-tab-color":Ke,"--n-tab-font-weight":je,"--n-tab-font-weight-active":qe,"--n-tab-padding":le,"--n-tab-padding-vertical":xe,"--n-tab-gap":yt,"--n-tab-gap-vertical":wt,"--n-pane-padding-left":Fe(H,"left"),"--n-pane-padding-right":Fe(H,"right"),"--n-pane-padding-top":Fe(H,"top"),"--n-pane-padding-bottom":Fe(H,"bottom"),"--n-font-weight-strong":Te,"--n-tab-color-segment":o}}),me=a?at("tabs",W(()=>`${S.value[0]}${e.type[0]}`),Ie,e):void 0;return Object.assign({mergedClsPrefix:u,mergedValue:D,renderedNames:new Set,segmentCapsuleElRef:he,tabsPaneWrapperRef:E,tabsElRef:h,barElRef:p,addTabInstRef:B,xScrollInstRef:z,scrollWrapperElRef:k,addTabFixed:Ce,tabWrapperStyle:L,handleNavResize:pe,mergedSize:S,handleScroll:Le,handleTabsResize:Be,cssVars:a?void 0:Ie,themeClass:me==null?void 0:me.themeClass,animationDirection:ae,renderNameListRef:ce,yScrollElRef:T,handleSegmentResize:Oe,onAnimationBeforeLeave:Q,onAnimationEnter:ee,onAnimationAfterEnter:te,onRender:me==null?void 0:me.onRender},ke)},render(){const{mergedClsPrefix:e,type:t,placement:n,addTabFixed:l,addable:i,mergedSize:s,renderNameListRef:u,onRender:a,paneWrapperClass:g,paneWrapperStyle:h,$slots:{default:p,prefix:k,suffix:B}}=this;a==null||a();const z=p?kt(p()).filter($=>$.type.__TAB_PANE__===!0):[],T=p?kt(p()).filter($=>$.type.__TAB__===!0):[],F=!T.length,y=t==="card",S=t==="segment",w=!y&&!S&&this.justifyContent;u.value=[];const j=()=>{const $=r("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},w?null:r("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),F?z.map((L,X)=>(u.value.push(L.props.name),Lt(r(jt,Object.assign({},L.props,{internalCreatedByPane:!0,internalLeftPadded:X!==0&&(!w||w==="center"||w==="start"||w==="end")}),L.children?{default:L.children.tab}:void 0)))):T.map((L,X)=>(u.value.push(L.props.name),Lt(X!==0&&!w?fn(L):L))),!l&&i&&y?un(i,(F?z.length:T.length)!==0):null,w?null:r("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return r("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},y&&i?r(Ye,{onResize:this.handleTabsResize},{default:()=>$}):$,y?r("div",{class:`${e}-tabs-pad`}):null,y?null:r("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},D=S?"top":n;return r("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${s}-size`,w&&`${e}-tabs--flex`,`${e}-tabs--${D}`],style:this.cssVars},r("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${D}`,`${e}-tabs-nav`]},mt(k,$=>$&&r("div",{class:`${e}-tabs-nav__prefix`},$)),S?r(Ye,{onResize:this.handleSegmentResize},{default:()=>r("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},r("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},r("div",{class:`${e}-tabs-wrapper`},r("div",{class:`${e}-tabs-tab`}))),F?z.map(($,L)=>(u.value.push($.props.name),r(jt,Object.assign({},$.props,{internalCreatedByPane:!0,internalLeftPadded:L!==0}),$.children?{default:$.children.tab}:void 0))):T.map(($,L)=>(u.value.push($.props.name),L===0?$:fn($))))}):r(Ye,{onResize:this.handleNavResize},{default:()=>r("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(D)?r(Uo,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:j}):r("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},j()))}),l&&i&&y?un(i,!0):null,mt(B,$=>$&&r("div",{class:`${e}-tabs-nav__suffix`},$))),F&&(this.animated&&(D==="top"||D==="bottom")?r("div",{ref:"tabsPaneWrapperRef",style:h,class:[`${e}-tabs-pane-wrapper`,g]},cn(z,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):cn(z,this.mergedValue,this.renderedNames)))}});function cn(e,t,n,l,i,s,u){const a=[];return e.forEach(g=>{const{name:h,displayDirective:p,"display-directive":k}=g.props,B=T=>p===T||k===T,z=t===h;if(g.key!==void 0&&(g.key=h),z||B("show")||B("show:lazy")&&n.has(h)){n.has(h)||n.add(h);const T=!B("if");a.push(T?Cn(g,[[Sn,z]]):g)}}),u?r(To,{name:`${u}-transition`,onBeforeLeave:l,onEnter:i,onAfterEnter:s},{default:()=>a}):a}function un(e,t){return r(jt,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function fn(e){const t=zo(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Lt(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const ki={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Oi=Me("path",{d:"M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z",fill:"currentColor"},null,-1),Fi=[Oi],$i=se({name:"Close",render:function(t,n){return ze(),Ne("svg",ki,Fi)}}),Ii={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Mi=Me("path",{d:"M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 0 0-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 0 0 140-66.92",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Bi=Me("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M32 256l44-44l46 44"},null,-1),Ei=Me("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M480 256l-44 44l-46-44"},null,-1),Li=[Mi,Bi,Ei],Ai=se({name:"Sync",render:function(t,n){return ze(),Ne("svg",Ii,Li)}}),Ni={class:"moduls-scroll-section"},Wi=se({__name:"Scroll",props:{dynamic:{type:Boolean}},emits:["bottomReached"],setup(e,{emit:t}){const n=e,l=t,i=O();function s(){const a=i.value;function g(){if(a){const h=a.clientHeight<a.scrollHeight?"var(--moduls-scroll-padding)":"0";a.style.paddingRight=h;const p=a.clientWidth<a.scrollWidth?"var(--moduls-scroll-padding)":"0";a.style.paddingBottom=p}}a?(g(),n.dynamic&&new ResizeObserver(g).observe(a)):requestAnimationFrame(s)}s();const u=_o(a=>l("bottomReached",a));return(a,g)=>(ze(),Ne("section",Ni,[Me("div",{ref_key:"ScrollDom",ref:i,class:"moduls-scroll",onScroll:g[0]||(g[0]=(...h)=>G(u)&&G(u)(...h))},[Me("div",null,[vt(a.$slots,"default",{},void 0,!0)])],544)]))}}),vn=Ut(Wi,[["__scopeId","data-v-d9097fdd"]]),Di={class:"popup-layout"},ji=se({__name:"Popup",emits:["Closure"],setup(e,{emit:t}){const n=t;return(l,i)=>(ze(),Ne("section",Di,[Me("header",null,[re(G(Ri),null,{default:ie(()=>[vt(l.$slots,"header",{},void 0,!0)]),_:3}),re(G(ht),null,{default:ie(()=>[vt(l.$slots,"tool",{},void 0,!0),Me("div",{class:"clickable",onClick:i[0]||(i[0]=s=>n("Closure"))},[re(G(bt),{size:"22",component:G($i)},null,8,["component"])])]),_:3})]),vt(l.$slots,"default",{},void 0,!0)]))}}),Hi=Ut(ji,[["__scopeId","data-v-abb3a2ef"]]),Vi=se({__name:"index",emits:["Closure"],setup(e,{emit:t}){const n=t;function l(){ko(),n("Closure")}Po([".Settings.center-positioning"],l);const i=O(),s=O(),u=W(()=>{const a=Lo.value.components.popups.settings;return s.value&&(i.value=a.tabs[0].name,requestAnimationFrame(()=>{s.value.syncBarPosition()})),a});return(a,g)=>(ze(),Ot(Hi,{class:"Settings center-positioning",onClosure:l},{header:ie(()=>[Ge(Xe(u.value.header),1)]),default:ie(()=>[re(G(Pi),{ref_key:"tabsRef",ref:s,value:i.value,"onUpdate:value":g[2]||(g[2]=h=>i.value=h),animated:!0},{default:ie(()=>[re(G(dn),{name:u.value.tabs[0].name},{default:ie(()=>[re(vn,null,{default:ie(()=>[re(Ft,null,{title:ie(()=>[Ge(Xe(u.value.tabs[0].items[0].title),1)]),value:ie(()=>[re(G(ln),{value:G(dt).language,"onUpdate:value":g[0]||(g[0]=h=>G(dt).language=h),options:G(Oo)},null,8,["value","options"])]),_:1}),re(Ft,null,{title:ie(()=>[Ge(Xe(u.value.tabs[0].items[1].title),1)]),value:ie(()=>[re(G(ln),{value:G(dt).theme,"onUpdate:value":g[1]||(g[1]=h=>G(dt).theme=h),options:G(Fo)},null,8,["value","options"])]),_:1})]),_:1})]),_:1},8,["name"]),re(G(dn),{name:u.value.tabs[1].name},{default:ie(()=>[re(vn,null,{default:ie(()=>[(ze(!0),Ne(et,null,Zt(G($o),h=>(ze(),Ot(Ft,{key:h.id},{title:ie(()=>[Ge(Xe(h.title),1)]),value:ie(()=>[re(G(ht),{justify:"space-between"},{default:ie(()=>[re(G(ht),null,{default:ie(()=>[re(G(ct),{quaternary:"",disabled:!h.isCustom,onClick:p=>G(Io)(h.id)},{default:ie(()=>[re(G(bt),{size:"20",component:G(Ai)},null,8,["component"])]),_:2},1032,["disabled","onClick"]),re(G(ct),{quaternary:"",onClick:p=>G(Mo)(h)},{default:ie(()=>[re(G(bt),{size:"20",component:G(Bo)("Edit")},null,8,["component"])]),_:2},1032,["onClick"])]),_:2},1024),re(G(ht),null,{default:ie(()=>[(ze(!0),Ne(et,null,Zt(h.shortcutKey,(p,k)=>(ze(),Ne(et,{key:k},[re(G(ct),null,{default:ie(()=>[Ge(Xe(p),1)]),_:2},1024),k!=h.shortcutKey.length-1?(ze(),Ot(G(ct),{key:0,bordered:!1,style:{"pointer-events":"none"}},{default:ie(()=>[re(G(bt),{size:"20",component:G(Wo)},null,8,["component"])]),_:1})):Eo("",!0)],64))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["name"])]),_:1},8,["value"])]),_:1}))}}),Yi=Ut(Vi,[["__scopeId","data-v-0fb11e8c"]]);export{Yi as default};
