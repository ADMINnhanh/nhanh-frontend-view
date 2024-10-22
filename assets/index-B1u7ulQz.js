import{d as se,b5 as dn,b6 as cn,E as nt,b7 as Dn,b8 as jn,k as W,r as M,D as ft,aH as bt,aG as st,h as r,b9 as un,V as Ze,ba as Je,as as Hn,bb as Vt,am as fn,bc as Vn,bd as vt,be as Un,m as u,n as A,p as Z,u as ot,v as ze,bf as Kn,j as it,bg as Gn,J as le,L as at,P as Dt,bh as jt,bi as We,ag as bn,q as z,s as ht,a8 as vn,I as hn,A as ne,bj as qn,bk as Xn,w as Ie,Q as Qe,K as $e,H as Et,M as pt,aK as Yn,S as Zn,N as Jn,bl as et,bm as Qn,bn as eo,G as pn,bo as to,a$ as zt,bp as Ut,bq as no,O as tt,br as oo,B as Lt,bs as At,bt as io,C as ao,aa as ro,ab as Wt,ad as lo,ae as so,af as co,ah as gn,ap as mn,ai as Kt,ac as uo,bu as fo,T as ge,i as bo,ax as vo,bv as ho,bw as po,bx as go,by as _t,bz as mo,bA as xo,bB as yo,o as Te,c as Be,a as _e,bC as wo,aU as Y,_ as xn,bD as Ye,aV as qe,t as Xe,aS as re,aT as ue,bE as Co,aQ as dt,bF as So,bG as Ro,aW as Gt,bH as To,a_ as qt,aP as kt,aj as ct,bI as zo,bJ as _o,bK as ko,bL as Po}from"./index-BaVkY6kX.js";import{c as Oo}from"./Utility-DQfYChMj.js";import Pt from"./setItem-CDYFHjWo.js";import{u as yn,a as Fo,A as $o}from"./Suffix-CZwGsq5w.js";function Xt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Ot(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(l=>{l&&l(n)})}}function Yt(e){return e&-e}class Io{constructor(t,n){this.l=t,this.min=n;const l=new Array(t+1);for(let a=0;a<t+1;++a)l[a]=0;this.ft=l}add(t,n){if(n===0)return;const{l,ft:a}=this;for(t+=1;t<=l;)a[t]+=n,t+=Yt(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:n,min:l,l:a}=this;if(t>a)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let s=t*l;for(;t>0;)s+=n[t],t-=Yt(t);return s}getBound(t){let n=0,l=this.l;for(;l>n;){const a=Math.floor((n+l)/2),s=this.sum(a);if(s>t){l=a;continue}else if(s<t){if(n===a)return this.sum(n+1)<=t?n+1:a;n=a}else return a}return n}}let ut;function Mo(){return typeof document>"u"?!1:(ut===void 0&&("matchMedia"in window?ut=window.matchMedia("(pointer:coarse)").matches:ut=!1),ut)}let Ft;function Zt(){return typeof document>"u"?1:(Ft===void 0&&(Ft="chrome"in window?window.devicePixelRatio:1),Ft)}const Bo=Je(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Je("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Je("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Eo=se({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=dn();Bo.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:cn,ssr:t}),nt(()=>{const{defaultScrollIndex:y,defaultScrollKey:k}=e;y!=null?C({index:y}):k!=null&&C({key:k})});let n=!1,l=!1;Dn(()=>{if(n=!1,!l){l=!0;return}C({top:S.value,left:h})}),jn(()=>{n=!0,l||(l=!0)});const a=W(()=>{const y=new Map,{keyField:k}=e;return e.items.forEach((I,X)=>{y.set(I[k],X)}),y}),s=M(null),c=M(void 0),i=new Map,g=W(()=>{const{items:y,itemSize:k,keyField:I}=e,X=new Io(y.length,k);return y.forEach((K,Q)=>{const ee=K[I],te=i.get(ee);te!==void 0&&X.add(Q,te)}),X}),f=M(0);let h=0;const S=M(0),O=ft(()=>Math.max(g.value.getBound(S.value-bt(e.paddingTop))-1,0)),R=W(()=>{const{value:y}=c;if(y===void 0)return[];const{items:k,itemSize:I}=e,X=O.value,K=Math.min(X+Math.ceil(y/I+1),k.length-1),Q=[];for(let ee=X;ee<=K;++ee)Q.push(k[ee]);return Q}),C=(y,k)=>{if(typeof y=="number"){$(y,k,"auto");return}const{left:I,top:X,index:K,key:Q,position:ee,behavior:te,debounce:de=!0}=y;if(I!==void 0||X!==void 0)$(I,X,te);else if(K!==void 0)E(K,te,de);else if(Q!==void 0){const ie=a.value.get(Q);ie!==void 0&&E(ie,te,de)}else ee==="bottom"?$(0,Number.MAX_SAFE_INTEGER,te):ee==="top"&&$(0,0,te)};let F,D=null;function E(y,k,I){const{value:X}=g,K=X.sum(y)+bt(e.paddingTop);if(!I)s.value.scrollTo({left:0,top:K,behavior:k});else{F=y,D!==null&&window.clearTimeout(D),D=window.setTimeout(()=>{F=void 0,D=null},16);const{scrollTop:Q,offsetHeight:ee}=s.value;if(K>Q){const te=X.get(y);K+te<=Q+ee||s.value.scrollTo({left:0,top:K+te-ee,behavior:k})}else s.value.scrollTo({left:0,top:K,behavior:k})}}function $(y,k,I){s.value.scrollTo({left:y,top:k,behavior:I})}function G(y,k){var I,X,K;if(n||e.ignoreItemResize||ve(k.target))return;const{value:Q}=g,ee=a.value.get(y),te=Q.get(ee),de=(K=(X=(I=k.borderBoxSize)===null||I===void 0?void 0:I[0])===null||X===void 0?void 0:X.blockSize)!==null&&K!==void 0?K:k.contentRect.height;if(de===te)return;de-e.itemSize===0?i.delete(y):i.set(y,de-e.itemSize);const ce=de-te;if(ce===0)return;Q.add(ee,ce);const p=s.value;if(p!=null){if(F===void 0){const w=Q.sum(ee);p.scrollTop>w&&p.scrollBy(0,ce)}else if(ee<F)p.scrollBy(0,ce);else if(ee===F){const w=Q.sum(ee);de+w>p.scrollTop+p.offsetHeight&&p.scrollBy(0,ce)}be()}f.value++}const j=!Mo();let _=!1;function B(y){var k;(k=e.onScroll)===null||k===void 0||k.call(e,y),(!j||!_)&&be()}function q(y){var k;if((k=e.onWheel)===null||k===void 0||k.call(e,y),j){const I=s.value;if(I!=null){if(y.deltaX===0&&(I.scrollTop===0&&y.deltaY<=0||I.scrollTop+I.offsetHeight>=I.scrollHeight&&y.deltaY>=0))return;y.preventDefault(),I.scrollTop+=y.deltaY/Zt(),I.scrollLeft+=y.deltaX/Zt(),be(),_=!0,Hn(()=>{_=!1})}}}function fe(y){if(n||ve(y.target)||y.contentRect.height===c.value)return;c.value=y.contentRect.height;const{onResize:k}=e;k!==void 0&&k(y)}function be(){const{value:y}=s;y!=null&&(S.value=y.scrollTop,h=y.scrollLeft)}function ve(y){let k=y;for(;k!==null;){if(k.style.display==="none")return!0;k=k.parentElement}return!1}return{listHeight:c,listStyle:{overflow:"auto"},keyToIndex:a,itemsStyle:W(()=>{const{itemResizable:y}=e,k=st(g.value.sum());return f.value,[e.itemsStyle,{boxSizing:"content-box",height:y?"":k,minHeight:y?k:"",paddingTop:st(e.paddingTop),paddingBottom:st(e.paddingBottom)}]}),visibleItemsStyle:W(()=>(f.value,{transform:`translateY(${st(g.value.sum(O.value))})`})),viewportItems:R,listElRef:s,itemsElRef:M(null),scrollTo:C,handleListResize:fe,handleListScroll:B,handleListWheel:q,handleItemResize:G}},render(){const{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:l}=this;return r(Ze,{onResize:this.handleListResize},{default:()=>{var a,s;return r("div",un(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?r("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[r(l,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(c=>{const i=c[t],g=n.get(i),f=this.$slots.default({item:c,index:g})[0];return e?r(Ze,{key:i,onResize:h=>this.handleItemResize(i,h)},{default:()=>f}):(f.key=i,f)})})]):(s=(a=this.$slots).empty)===null||s===void 0?void 0:s.call(a)])}})}}),Lo=Je(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Je("&::-webkit-scrollbar",{width:0,height:0})]),Ao=se({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=M(null);function t(a){!(a.currentTarget.offsetWidth<a.currentTarget.scrollWidth)||a.deltaY===0||(a.currentTarget.scrollLeft+=a.deltaY+a.deltaX,a.preventDefault())}const n=dn();return Lo.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:cn,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...a){var s;(s=e.value)===null||s===void 0||s.scrollTo(...a)}})},render(){return r("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});function wn(e,t){t&&(nt(()=>{const{value:n}=e;n&&Vt.registerHandler(n,t)}),fn(()=>{const{value:n}=e;n&&Vt.unregisterHandler(n)}))}var Wo=/\s/;function No(e){for(var t=e.length;t--&&Wo.test(e.charAt(t)););return t}var Do=/^\s+/;function jo(e){return e&&e.slice(0,No(e)+1).replace(Do,"")}var Jt=NaN,Ho=/^[-+]0x[0-9a-f]+$/i,Vo=/^0b[01]+$/i,Uo=/^0o[0-7]+$/i,Ko=parseInt;function Qt(e){if(typeof e=="number")return e;if(Vn(e))return Jt;if(vt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=vt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=jo(e);var n=Vo.test(e);return n||Uo.test(e)?Ko(e.slice(2),n?2:8):Ho.test(e)?Jt:+e}var $t=function(){return Un.Date.now()},Go="Expected a function",qo=Math.max,Xo=Math.min;function Yo(e,t,n){var l,a,s,c,i,g,f=0,h=!1,S=!1,O=!0;if(typeof e!="function")throw new TypeError(Go);t=Qt(t)||0,vt(n)&&(h=!!n.leading,S="maxWait"in n,s=S?qo(Qt(n.maxWait)||0,t):s,O="trailing"in n?!!n.trailing:O);function R(B){var q=l,fe=a;return l=a=void 0,f=B,c=e.apply(fe,q),c}function C(B){return f=B,i=setTimeout(E,t),h?R(B):c}function F(B){var q=B-g,fe=B-f,be=t-q;return S?Xo(be,s-fe):be}function D(B){var q=B-g,fe=B-f;return g===void 0||q>=t||q<0||S&&fe>=s}function E(){var B=$t();if(D(B))return $(B);i=setTimeout(E,F(B))}function $(B){return i=void 0,O&&l?R(B):(l=a=void 0,c)}function G(){i!==void 0&&clearTimeout(i),f=0,l=g=a=i=void 0}function j(){return i===void 0?c:$($t())}function _(){var B=$t(),q=D(B);if(l=arguments,a=this,g=B,q){if(i===void 0)return C(g);if(S)return clearTimeout(i),i=setTimeout(E,t),R(g)}return i===void 0&&(i=setTimeout(E,t)),c}return _.cancel=G,_.flush=j,_}var Zo="Expected a function";function It(e,t,n){var l=!0,a=!0;if(typeof e!="function")throw new TypeError(Zo);return vt(n)&&(l="leading"in n?!!n.leading:l,a="trailing"in n?!!n.trailing:a),Yo(e,t,{leading:l,maxWait:t,trailing:a})}const Jo=se({name:"Checkmark",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},r("g",{fill:"none"},r("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Qo=se({name:"Empty",render(){return r("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),r("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),ei=se({props:{onFocus:Function,onBlur:Function},setup(e){return()=>r("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),ti=u("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[A("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[Z("+",[A("description",`
 margin-top: 8px;
 `)])]),A("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),A("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),ni=Object.assign(Object.assign({},ze.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),oi=se({name:"Empty",props:ni,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=ot(e),l=ze("Empty","-empty",ti,Kn,e,t),{localeRef:a}=yn("Empty"),s=it(Gn,null),c=W(()=>{var h,S,O;return(h=e.description)!==null&&h!==void 0?h:(O=(S=s==null?void 0:s.mergedComponentPropsRef.value)===null||S===void 0?void 0:S.Empty)===null||O===void 0?void 0:O.description}),i=W(()=>{var h,S;return((S=(h=s==null?void 0:s.mergedComponentPropsRef.value)===null||h===void 0?void 0:h.Empty)===null||S===void 0?void 0:S.renderIcon)||(()=>r(Qo,null))}),g=W(()=>{const{size:h}=e,{common:{cubicBezierEaseInOut:S},self:{[le("iconSize",h)]:O,[le("fontSize",h)]:R,textColor:C,iconColor:F,extraTextColor:D}}=l.value;return{"--n-icon-size":O,"--n-font-size":R,"--n-bezier":S,"--n-text-color":C,"--n-icon-color":F,"--n-extra-text-color":D}}),f=n?at("empty",W(()=>{let h="";const{size:S}=e;return h+=S[0],h}),g,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:i,localizedDescription:W(()=>c.value||a.value.description),cssVars:n?void 0:g,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),r("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?r("div",{class:`${t}-empty__icon`},e.icon?e.icon():r(Dt,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?r("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?r("div",{class:`${t}-empty__extra`},e.extra()):null)}});function ii(e,t){return r(bn,{name:"fade-in-scale-up-transition"},{default:()=>e?r(Dt,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>r(Jo)}):null})}const en=se({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:l,valueSetRef:a,renderLabelRef:s,renderOptionRef:c,labelFieldRef:i,valueFieldRef:g,showCheckmarkRef:f,nodePropsRef:h,handleOptionClick:S,handleOptionMouseEnter:O}=it(jt),R=ft(()=>{const{value:E}=n;return E?e.tmNode.key===E.key:!1});function C(E){const{tmNode:$}=e;$.disabled||S(E,$)}function F(E){const{tmNode:$}=e;$.disabled||O(E,$)}function D(E){const{tmNode:$}=e,{value:G}=R;$.disabled||G||O(E,$)}return{multiple:l,isGrouped:ft(()=>{const{tmNode:E}=e,{parent:$}=E;return $&&$.rawNode.type==="group"}),showCheckmark:f,nodeProps:h,isPending:R,isSelected:ft(()=>{const{value:E}=t,{value:$}=l;if(E===null)return!1;const G=e.tmNode.rawNode[g.value];if($){const{value:j}=a;return j.has(G)}else return E===G}),labelField:i,renderLabel:s,renderOption:c,handleMouseMove:D,handleMouseEnter:F,handleClick:C}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:l,isGrouped:a,showCheckmark:s,nodeProps:c,renderOption:i,renderLabel:g,handleClick:f,handleMouseEnter:h,handleMouseMove:S}=this,O=ii(n,e),R=g?[g(t,n),s&&O]:[We(t[this.labelField],t,n),s&&O],C=c==null?void 0:c(t),F=r("div",Object.assign({},C,{class:[`${e}-base-select-option`,t.class,C==null?void 0:C.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:a,[`${e}-base-select-option--pending`]:l,[`${e}-base-select-option--show-checkmark`]:s}],style:[(C==null?void 0:C.style)||"",t.style||""],onClick:Ot([f,C==null?void 0:C.onClick]),onMouseenter:Ot([h,C==null?void 0:C.onMouseenter]),onMousemove:Ot([S,C==null?void 0:C.onMousemove])}),r("div",{class:`${e}-base-select-option__content`},R));return t.render?t.render({node:F,option:t,selected:n}):i?i({node:F,option:t,selected:n}):F}}),tn=se({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:l}=it(jt);return{labelField:n,nodeProps:l,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:l,tmNode:{rawNode:a}}=this,s=l==null?void 0:l(a),c=t?t(a,!1):We(a[this.labelField],a,!1),i=r("div",Object.assign({},s,{class:[`${e}-base-select-group-header`,s==null?void 0:s.class]}),c);return a.render?a.render({node:i,option:a}):n?n({node:i,option:a,selected:!1}):i}}),ai=u("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[u("scrollbar",`
 max-height: var(--n-height);
 `),u("virtual-list",`
 max-height: var(--n-height);
 `),u("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[A("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),u("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),u("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),A("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),A("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),A("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),A("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),u("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),u("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[z("show-checkmark",`
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
 `),z("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),z("pending",[Z("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),z("selected",`
 color: var(--n-option-text-color-active);
 `,[Z("&::before",`
 background-color: var(--n-option-color-active);
 `),z("pending",[Z("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),z("disabled",`
 cursor: not-allowed;
 `,[ht("selected",`
 color: var(--n-option-text-color-disabled);
 `),z("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),A("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[vn({enterScale:"0.5"})])])]),ri=se({name:"InternalSelectMenu",props:Object.assign(Object.assign({},ze.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=ot(e),l=hn("InternalSelectMenu",n,t),a=ze("InternalSelectMenu","-internal-select-menu",ai,qn,e,ne(e,"clsPrefix")),s=M(null),c=M(null),i=M(null),g=W(()=>e.treeMate.getFlattenedNodes()),f=W(()=>Xn(g.value)),h=M(null);function S(){const{treeMate:p}=e;let w=null;const{value:oe}=e;oe===null?w=p.getFirstAvailableNode():(e.multiple?w=p.getNode((oe||[])[(oe||[]).length-1]):w=p.getNode(oe),(!w||w.disabled)&&(w=p.getFirstAvailableNode())),X(w||null)}function O(){const{value:p}=h;p&&!e.treeMate.getNode(p.key)&&(h.value=null)}let R;Ie(()=>e.show,p=>{p?R=Ie(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?S():O(),Qe(K)):O()},{immediate:!0}):R==null||R()},{immediate:!0}),fn(()=>{R==null||R()});const C=W(()=>bt(a.value.self[le("optionHeight",e.size)])),F=W(()=>$e(a.value.self[le("padding",e.size)])),D=W(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),E=W(()=>{const p=g.value;return p&&p.length===0});function $(p){const{onToggle:w}=e;w&&w(p)}function G(p){const{onScroll:w}=e;w&&w(p)}function j(p){var w;(w=i.value)===null||w===void 0||w.sync(),G(p)}function _(){var p;(p=i.value)===null||p===void 0||p.sync()}function B(){const{value:p}=h;return p||null}function q(p,w){w.disabled||X(w,!1)}function fe(p,w){w.disabled||$(w)}function be(p){var w;et(p,"action")||(w=e.onKeyup)===null||w===void 0||w.call(e,p)}function ve(p){var w;et(p,"action")||(w=e.onKeydown)===null||w===void 0||w.call(e,p)}function y(p){var w;(w=e.onMousedown)===null||w===void 0||w.call(e,p),!e.focusable&&p.preventDefault()}function k(){const{value:p}=h;p&&X(p.getNext({loop:!0}),!0)}function I(){const{value:p}=h;p&&X(p.getPrev({loop:!0}),!0)}function X(p,w=!1){h.value=p,w&&K()}function K(){var p,w;const oe=h.value;if(!oe)return;const he=f.value(oe.key);he!==null&&(e.virtualScroll?(p=c.value)===null||p===void 0||p.scrollTo({index:he}):(w=i.value)===null||w===void 0||w.scrollTo({index:he,elSize:C.value}))}function Q(p){var w,oe;!((w=s.value)===null||w===void 0)&&w.contains(p.target)&&((oe=e.onFocus)===null||oe===void 0||oe.call(e,p))}function ee(p){var w,oe;!((w=s.value)===null||w===void 0)&&w.contains(p.relatedTarget)||(oe=e.onBlur)===null||oe===void 0||oe.call(e,p)}Et(jt,{handleOptionMouseEnter:q,handleOptionClick:fe,valueSetRef:D,pendingTmNodeRef:h,nodePropsRef:ne(e,"nodeProps"),showCheckmarkRef:ne(e,"showCheckmark"),multipleRef:ne(e,"multiple"),valueRef:ne(e,"value"),renderLabelRef:ne(e,"renderLabel"),renderOptionRef:ne(e,"renderOption"),labelFieldRef:ne(e,"labelField"),valueFieldRef:ne(e,"valueField")}),Et(Qn,s),nt(()=>{const{value:p}=i;p&&p.sync()});const te=W(()=>{const{size:p}=e,{common:{cubicBezierEaseInOut:w},self:{height:oe,borderRadius:he,color:Ce,groupHeaderTextColor:ke,actionDividerColor:ye,optionTextColorPressed:pe,optionTextColor:we,optionTextColorDisabled:Se,optionTextColorActive:Ee,optionOpacityDisabled:Le,optionCheckColor:Pe,actionTextColor:Ae,optionColorPending:Oe,optionColorActive:Fe,loadingColor:Me,loadingSize:me,optionColorActivePending:b,[le("optionFontSize",p)]:v,[le("optionHeight",p)]:T,[le("optionPadding",p)]:P}}=a.value;return{"--n-height":oe,"--n-action-divider-color":ye,"--n-action-text-color":Ae,"--n-bezier":w,"--n-border-radius":he,"--n-color":Ce,"--n-option-font-size":v,"--n-group-header-text-color":ke,"--n-option-check-color":Pe,"--n-option-color-pending":Oe,"--n-option-color-active":Fe,"--n-option-color-active-pending":b,"--n-option-height":T,"--n-option-opacity-disabled":Le,"--n-option-text-color":we,"--n-option-text-color-active":Ee,"--n-option-text-color-disabled":Se,"--n-option-text-color-pressed":pe,"--n-option-padding":P,"--n-option-padding-left":$e(P,"left"),"--n-option-padding-right":$e(P,"right"),"--n-loading-color":Me,"--n-loading-size":me}}),{inlineThemeDisabled:de}=e,ie=de?at("internal-select-menu",W(()=>e.size[0]),te,e):void 0,ce={selfRef:s,next:k,prev:I,getPendingTmNode:B};return wn(s,e.onResize),Object.assign({mergedTheme:a,mergedClsPrefix:t,rtlEnabled:l,virtualListRef:c,scrollbarRef:i,itemSize:C,padding:F,flattenedNodes:g,empty:E,virtualListContainer(){const{value:p}=c;return p==null?void 0:p.listElRef},virtualListContent(){const{value:p}=c;return p==null?void 0:p.itemsElRef},doScroll:G,handleFocusin:Q,handleFocusout:ee,handleKeyUp:be,handleKeyDown:ve,handleMouseDown:y,handleVirtualListResize:_,handleVirtualListScroll:j,cssVars:de?void 0:te,themeClass:ie==null?void 0:ie.themeClass,onRender:ie==null?void 0:ie.onRender},ce)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:l,themeClass:a,onRender:s}=this;return s==null||s(),r("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,a,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},pt(e.header,c=>c&&r("div",{class:`${n}-base-select-menu__header`,"data-header":!0,key:"header"},c)),this.loading?r("div",{class:`${n}-base-select-menu__loading`},r(Yn,{clsPrefix:n,strokeWidth:20})):this.empty?r("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},Jn(e.empty,()=>[r(oi,{theme:l.peers.Empty,themeOverrides:l.peerOverrides.Empty})])):r(Zn,{ref:"scrollbarRef",theme:l.peers.Scrollbar,themeOverrides:l.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?r(Eo,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:c})=>c.isGroup?r(tn,{key:c.key,clsPrefix:n,tmNode:c}):c.ignored?null:r(en,{clsPrefix:n,key:c.key,tmNode:c})}):r("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(c=>c.isGroup?r(tn,{key:c.key,clsPrefix:n,tmNode:c}):r(en,{clsPrefix:n,key:c.key,tmNode:c})))}),pt(e.action,c=>c&&[r("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},c),r(ei,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),li=Z([u("base-selection",`
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
 `,[u("base-loading",`
 color: var(--n-loading-color);
 `),u("base-selection-tags","min-height: var(--n-height);"),A("border, state-border",`
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
 `),A("state-border",`
 z-index: 1;
 border-color: #0000;
 `),u("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[A("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),u("base-selection-overlay",`
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
 `,[A("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),u("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[A("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),u("base-selection-tags",`
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
 `),u("base-selection-label",`
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
 `,[u("base-selection-input",`
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
 `,[A("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),A("render-label",`
 color: var(--n-text-color);
 `)]),ht("disabled",[Z("&:hover",[A("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),z("focus",[A("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),z("active",[A("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),u("base-selection-label","background-color: var(--n-color-active);"),u("base-selection-tags","background-color: var(--n-color-active);")])]),z("disabled","cursor: not-allowed;",[A("arrow",`
 color: var(--n-arrow-color-disabled);
 `),u("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[u("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),A("render-label",`
 color: var(--n-text-color-disabled);
 `)]),u("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),u("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),u("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[A("input",`
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
 `),A("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>z(`${e}-status`,[A("state-border",`border: var(--n-border-${e});`),ht("disabled",[Z("&:hover",[A("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),z("active",[A("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),u("base-selection-label",`background-color: var(--n-color-active-${e});`),u("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),z("focus",[A("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),u("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),u("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[Z("&:last-child","padding-right: 0;"),u("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[A("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),si=se({name:"InternalSelection",props:Object.assign(Object.assign({},ze.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=ot(e),l=hn("InternalSelection",n,t),a=M(null),s=M(null),c=M(null),i=M(null),g=M(null),f=M(null),h=M(null),S=M(null),O=M(null),R=M(null),C=M(!1),F=M(!1),D=M(!1),E=ze("InternalSelection","-internal-selection",li,eo,e,ne(e,"clsPrefix")),$=W(()=>e.clearable&&!e.disabled&&(D.value||e.active)),G=W(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):We(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),j=W(()=>{const d=e.selectedOption;if(d)return d[e.labelField]}),_=W(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function B(){var d;const{value:x}=a;if(x){const{value:J}=s;J&&(J.style.width=`${x.offsetWidth}px`,e.maxTagCount!=="responsive"&&((d=O.value)===null||d===void 0||d.sync({showAllItemsBeforeCalculate:!1})))}}function q(){const{value:d}=R;d&&(d.style.display="none")}function fe(){const{value:d}=R;d&&(d.style.display="inline-block")}Ie(ne(e,"active"),d=>{d||q()}),Ie(ne(e,"pattern"),()=>{e.multiple&&Qe(B)});function be(d){const{onFocus:x}=e;x&&x(d)}function ve(d){const{onBlur:x}=e;x&&x(d)}function y(d){const{onDeleteOption:x}=e;x&&x(d)}function k(d){const{onClear:x}=e;x&&x(d)}function I(d){const{onPatternInput:x}=e;x&&x(d)}function X(d){var x;(!d.relatedTarget||!(!((x=c.value)===null||x===void 0)&&x.contains(d.relatedTarget)))&&be(d)}function K(d){var x;!((x=c.value)===null||x===void 0)&&x.contains(d.relatedTarget)||ve(d)}function Q(d){k(d)}function ee(){D.value=!0}function te(){D.value=!1}function de(d){!e.active||!e.filterable||d.target!==s.value&&d.preventDefault()}function ie(d){y(d)}const ce=M(!1);function p(d){if(d.key==="Backspace"&&!ce.value&&!e.pattern.length){const{selectedOptions:x}=e;x!=null&&x.length&&ie(x[x.length-1])}}let w=null;function oe(d){const{value:x}=a;if(x){const J=d.target.value;x.textContent=J,B()}e.ignoreComposition&&ce.value?w=d:I(d)}function he(){ce.value=!0}function Ce(){ce.value=!1,e.ignoreComposition&&I(w),w=null}function ke(d){var x;F.value=!0,(x=e.onPatternFocus)===null||x===void 0||x.call(e,d)}function ye(d){var x;F.value=!1,(x=e.onPatternBlur)===null||x===void 0||x.call(e,d)}function pe(){var d,x;if(e.filterable)F.value=!1,(d=f.value)===null||d===void 0||d.blur(),(x=s.value)===null||x===void 0||x.blur();else if(e.multiple){const{value:J}=i;J==null||J.blur()}else{const{value:J}=g;J==null||J.blur()}}function we(){var d,x,J;e.filterable?(F.value=!1,(d=f.value)===null||d===void 0||d.focus()):e.multiple?(x=i.value)===null||x===void 0||x.focus():(J=g.value)===null||J===void 0||J.focus()}function Se(){const{value:d}=s;d&&(fe(),d.focus())}function Ee(){const{value:d}=s;d&&d.blur()}function Le(d){const{value:x}=h;x&&x.setTextContent(`+${d}`)}function Pe(){const{value:d}=S;return d}function Ae(){return s.value}let Oe=null;function Fe(){Oe!==null&&window.clearTimeout(Oe)}function Me(){e.active||(Fe(),Oe=window.setTimeout(()=>{_.value&&(C.value=!0)},100))}function me(){Fe()}function b(d){d||(Fe(),C.value=!1)}Ie(_,d=>{d||(C.value=!1)}),nt(()=>{pn(()=>{const d=f.value;d&&(e.disabled?d.removeAttribute("tabindex"):d.tabIndex=F.value?-1:0)})}),wn(c,e.onResize);const{inlineThemeDisabled:v}=e,T=W(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:x},self:{borderRadius:J,color:Ve,placeholderColor:Ue,textColor:Ne,paddingSingle:De,paddingMultiple:je,caretColor:Ke,colorDisabled:Ge,textColorDisabled:He,placeholderColorDisabled:Re,colorActive:o,boxShadowFocus:m,boxShadowActive:L,boxShadowHover:U,border:V,borderFocus:H,borderHover:N,borderActive:ae,arrowColor:xe,arrowColorDisabled:mt,loadingColor:xt,colorActiveWarning:yt,boxShadowFocusWarning:wt,boxShadowActiveWarning:Ct,boxShadowHoverWarning:St,borderWarning:Rt,borderFocusWarning:Tt,borderHoverWarning:Rn,borderActiveWarning:Tn,colorActiveError:zn,boxShadowFocusError:_n,boxShadowActiveError:kn,boxShadowHoverError:Pn,borderError:On,borderFocusError:Fn,borderHoverError:$n,borderActiveError:In,clearColor:Mn,clearColorHover:Bn,clearColorPressed:En,clearSize:Ln,arrowSize:An,[le("height",d)]:Wn,[le("fontSize",d)]:Nn}}=E.value,rt=$e(De),lt=$e(je);return{"--n-bezier":x,"--n-border":V,"--n-border-active":ae,"--n-border-focus":H,"--n-border-hover":N,"--n-border-radius":J,"--n-box-shadow-active":L,"--n-box-shadow-focus":m,"--n-box-shadow-hover":U,"--n-caret-color":Ke,"--n-color":Ve,"--n-color-active":o,"--n-color-disabled":Ge,"--n-font-size":Nn,"--n-height":Wn,"--n-padding-single-top":rt.top,"--n-padding-multiple-top":lt.top,"--n-padding-single-right":rt.right,"--n-padding-multiple-right":lt.right,"--n-padding-single-left":rt.left,"--n-padding-multiple-left":lt.left,"--n-padding-single-bottom":rt.bottom,"--n-padding-multiple-bottom":lt.bottom,"--n-placeholder-color":Ue,"--n-placeholder-color-disabled":Re,"--n-text-color":Ne,"--n-text-color-disabled":He,"--n-arrow-color":xe,"--n-arrow-color-disabled":mt,"--n-loading-color":xt,"--n-color-active-warning":yt,"--n-box-shadow-focus-warning":wt,"--n-box-shadow-active-warning":Ct,"--n-box-shadow-hover-warning":St,"--n-border-warning":Rt,"--n-border-focus-warning":Tt,"--n-border-hover-warning":Rn,"--n-border-active-warning":Tn,"--n-color-active-error":zn,"--n-box-shadow-focus-error":_n,"--n-box-shadow-active-error":kn,"--n-box-shadow-hover-error":Pn,"--n-border-error":On,"--n-border-focus-error":Fn,"--n-border-hover-error":$n,"--n-border-active-error":In,"--n-clear-size":Ln,"--n-clear-color":Mn,"--n-clear-color-hover":Bn,"--n-clear-color-pressed":En,"--n-arrow-size":An}}),P=v?at("internal-selection",W(()=>e.size[0]),T,e):void 0;return{mergedTheme:E,mergedClearable:$,mergedClsPrefix:t,rtlEnabled:l,patternInputFocused:F,filterablePlaceholder:G,label:j,selected:_,showTagsPanel:C,isComposing:ce,counterRef:h,counterWrapperRef:S,patternInputMirrorRef:a,patternInputRef:s,selfRef:c,multipleElRef:i,singleElRef:g,patternInputWrapperRef:f,overflowRef:O,inputTagElRef:R,handleMouseDown:de,handleFocusin:X,handleClear:Q,handleMouseEnter:ee,handleMouseLeave:te,handleDeleteOption:ie,handlePatternKeyDown:p,handlePatternInputInput:oe,handlePatternInputBlur:ye,handlePatternInputFocus:ke,handleMouseEnterCounter:Me,handleMouseLeaveCounter:me,handleFocusout:K,handleCompositionEnd:Ce,handleCompositionStart:he,onPopoverUpdateShow:b,focus:we,focusInput:Se,blur:pe,blurInput:Ee,updateCounter:Le,getCounter:Pe,getTail:Ae,renderLabel:e.renderLabel,cssVars:v?void 0:T,themeClass:P==null?void 0:P.themeClass,onRender:P==null?void 0:P.onRender}},render(){const{status:e,multiple:t,size:n,disabled:l,filterable:a,maxTagCount:s,bordered:c,clsPrefix:i,ellipsisTagPopoverProps:g,onRender:f,renderTag:h,renderLabel:S}=this;f==null||f();const O=s==="responsive",R=typeof s=="number",C=O||R,F=r(to,null,{default:()=>r(Fo,{clsPrefix:i,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var E,$;return($=(E=this.$slots).arrow)===null||$===void 0?void 0:$.call(E)}})});let D;if(t){const{labelField:E}=this,$=I=>r("div",{class:`${i}-base-selection-tag-wrapper`,key:I.value},h?h({option:I,handleClose:()=>{this.handleDeleteOption(I)}}):r(zt,{size:n,closable:!I.disabled,disabled:l,onClose:()=>{this.handleDeleteOption(I)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>S?S(I,!0):We(I[E],I,!0)})),G=()=>(R?this.selectedOptions.slice(0,s):this.selectedOptions).map($),j=a?r("div",{class:`${i}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:l,value:this.pattern,autofocus:this.autofocus,class:`${i}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r("span",{ref:"patternInputMirrorRef",class:`${i}-base-selection-input-tag__mirror`},this.pattern)):null,_=O?()=>r("div",{class:`${i}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},r(zt,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:l})):void 0;let B;if(R){const I=this.selectedOptions.length-s;I>0&&(B=r("div",{class:`${i}-base-selection-tag-wrapper`,key:"__counter__"},r(zt,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:l},{default:()=>`+${I}`})))}const q=O?a?r(Ut,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:G,counter:_,tail:()=>j}):r(Ut,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:G,counter:_}):R&&B?G().concat(B):G(),fe=C?()=>r("div",{class:`${i}-base-selection-popover`},O?G():this.selectedOptions.map($)):void 0,be=C?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},g):null,y=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?r("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`},r("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)):null,k=a?r("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-tags`},q,O?null:j,F):r("div",{ref:"multipleElRef",class:`${i}-base-selection-tags`,tabindex:l?void 0:0},q,F);D=r(tt,null,C?r(no,Object.assign({},be,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>k,default:fe}):k,y)}else if(a){const E=this.pattern||this.isComposing,$=this.active?!E:!this.selected,G=this.active?!1:this.selected;D=r("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-label`,title:this.patternInputFocused?void 0:Xt(this.label)},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${i}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:l,disabled:l,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),G?r("div",{class:`${i}-base-selection-label__render-label ${i}-base-selection-overlay`,key:"input"},r("div",{class:`${i}-base-selection-overlay__wrapper`},h?h({option:this.selectedOption,handleClose:()=>{}}):S?S(this.selectedOption,!0):We(this.label,this.selectedOption,!0))):null,$?r("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${i}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,F)}else D=r("div",{ref:"singleElRef",class:`${i}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?r("div",{class:`${i}-base-selection-input`,title:Xt(this.label),key:"input"},r("div",{class:`${i}-base-selection-input__content`},h?h({option:this.selectedOption,handleClose:()=>{}}):S?S(this.selectedOption,!0):We(this.label,this.selectedOption,!0))):r("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)),F);return r("div",{ref:"selfRef",class:[`${i}-base-selection`,this.rtlEnabled&&`${i}-base-selection--rtl`,this.themeClass,e&&`${i}-base-selection--${e}-status`,{[`${i}-base-selection--active`]:this.active,[`${i}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${i}-base-selection--disabled`]:this.disabled,[`${i}-base-selection--multiple`]:this.multiple,[`${i}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},D,c?r("div",{class:`${i}-base-selection__border`}):null,c?r("div",{class:`${i}-base-selection__state-border`}):null)}});function gt(e){return e.type==="group"}function Cn(e){return e.type==="ignored"}function Mt(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function di(e,t){return{getIsGroup:gt,getIgnored:Cn,getKey(l){return gt(l)?l.name||l.key||"key-required":l[e]},getChildren(l){return l[t]}}}function ci(e,t,n,l){if(!t)return e;function a(s){if(!Array.isArray(s))return[];const c=[];for(const i of s)if(gt(i)){const g=a(i[l]);g.length&&c.push(Object.assign({},i,{[l]:g}))}else{if(Cn(i))continue;t(n,i)&&c.push(i)}return c}return a(e)}function ui(e,t,n){const l=new Map;return e.forEach(a=>{gt(a)?a[n].forEach(s=>{l.set(s[t],s)}):l.set(a[t],a)}),l}const fi=Z([u("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),u("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[vn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),bi=Object.assign(Object.assign({},ze.props),{to:Wt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),nn=se({name:"Select",props:bi,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:l,inlineThemeDisabled:a}=ot(e),s=ze("Select","-select",fi,oo,e,t),c=M(e.defaultValue),i=ne(e,"value"),g=Lt(i,c),f=M(!1),h=M(""),S=At(e,["items","options"]),O=M([]),R=M([]),C=W(()=>R.value.concat(O.value).concat(S.value)),F=W(()=>{const{filter:o}=e;if(o)return o;const{labelField:m,valueField:L}=e;return(U,V)=>{if(!V)return!1;const H=V[m];if(typeof H=="string")return Mt(U,H);const N=V[L];return typeof N=="string"?Mt(U,N):typeof N=="number"?Mt(U,String(N)):!1}}),D=W(()=>{if(e.remote)return S.value;{const{value:o}=C,{value:m}=h;return!m.length||!e.filterable?o:ci(o,F.value,m,e.childrenField)}}),E=W(()=>{const{valueField:o,childrenField:m}=e,L=di(o,m);return io(D.value,L)}),$=W(()=>ui(C.value,e.valueField,e.childrenField)),G=M(!1),j=Lt(ne(e,"show"),G),_=M(null),B=M(null),q=M(null),{localeRef:fe}=yn("Select"),be=W(()=>{var o;return(o=e.placeholder)!==null&&o!==void 0?o:fe.value.placeholder}),ve=[],y=M(new Map),k=W(()=>{const{fallbackOption:o}=e;if(o===void 0){const{labelField:m,valueField:L}=e;return U=>({[m]:String(U),[L]:U})}return o===!1?!1:m=>Object.assign(o(m),{value:m})});function I(o){const m=e.remote,{value:L}=y,{value:U}=$,{value:V}=k,H=[];return o.forEach(N=>{if(U.has(N))H.push(U.get(N));else if(m&&L.has(N))H.push(L.get(N));else if(V){const ae=V(N);ae&&H.push(ae)}}),H}const X=W(()=>{if(e.multiple){const{value:o}=g;return Array.isArray(o)?I(o):[]}return null}),K=W(()=>{const{value:o}=g;return!e.multiple&&!Array.isArray(o)?o===null?null:I([o])[0]||null:null}),Q=ao(e),{mergedSizeRef:ee,mergedDisabledRef:te,mergedStatusRef:de}=Q;function ie(o,m){const{onChange:L,"onUpdate:value":U,onUpdateValue:V}=e,{nTriggerFormChange:H,nTriggerFormInput:N}=Q;L&&ge(L,o,m),V&&ge(V,o,m),U&&ge(U,o,m),c.value=o,H(),N()}function ce(o){const{onBlur:m}=e,{nTriggerFormBlur:L}=Q;m&&ge(m,o),L()}function p(){const{onClear:o}=e;o&&ge(o)}function w(o){const{onFocus:m,showOnFocus:L}=e,{nTriggerFormFocus:U}=Q;m&&ge(m,o),U(),L&&ye()}function oe(o){const{onSearch:m}=e;m&&ge(m,o)}function he(o){const{onScroll:m}=e;m&&ge(m,o)}function Ce(){var o;const{remote:m,multiple:L}=e;if(m){const{value:U}=y;if(L){const{valueField:V}=e;(o=X.value)===null||o===void 0||o.forEach(H=>{U.set(H[V],H)})}else{const V=K.value;V&&U.set(V[e.valueField],V)}}}function ke(o){const{onUpdateShow:m,"onUpdate:show":L}=e;m&&ge(m,o),L&&ge(L,o),G.value=o}function ye(){te.value||(ke(!0),G.value=!0,e.filterable&&je())}function pe(){ke(!1)}function we(){h.value="",R.value=ve}const Se=M(!1);function Ee(){e.filterable&&(Se.value=!0)}function Le(){e.filterable&&(Se.value=!1,j.value||we())}function Pe(){te.value||(j.value?e.filterable?je():pe():ye())}function Ae(o){var m,L;!((L=(m=q.value)===null||m===void 0?void 0:m.selfRef)===null||L===void 0)&&L.contains(o.relatedTarget)||(f.value=!1,ce(o),pe())}function Oe(o){w(o),f.value=!0}function Fe(){f.value=!0}function Me(o){var m;!((m=_.value)===null||m===void 0)&&m.$el.contains(o.relatedTarget)||(f.value=!1,ce(o),pe())}function me(){var o;(o=_.value)===null||o===void 0||o.focus(),pe()}function b(o){var m;j.value&&(!((m=_.value)===null||m===void 0)&&m.$el.contains(uo(o))||pe())}function v(o){if(!Array.isArray(o))return[];if(k.value)return Array.from(o);{const{remote:m}=e,{value:L}=$;if(m){const{value:U}=y;return o.filter(V=>L.has(V)||U.has(V))}else return o.filter(U=>L.has(U))}}function T(o){P(o.rawNode)}function P(o){if(te.value)return;const{tag:m,remote:L,clearFilterAfterSelect:U,valueField:V}=e;if(m&&!L){const{value:H}=R,N=H[0]||null;if(N){const ae=O.value;ae.length?ae.push(N):O.value=[N],R.value=ve}}if(L&&y.value.set(o[V],o),e.multiple){const H=v(g.value),N=H.findIndex(ae=>ae===o[V]);if(~N){if(H.splice(N,1),m&&!L){const ae=d(o[V]);~ae&&(O.value.splice(ae,1),U&&(h.value=""))}}else H.push(o[V]),U&&(h.value="");ie(H,I(H))}else{if(m&&!L){const H=d(o[V]);~H?O.value=[O.value[H]]:O.value=ve}De(),pe(),ie(o[V],o)}}function d(o){return O.value.findIndex(L=>L[e.valueField]===o)}function x(o){j.value||ye();const{value:m}=o.target;h.value=m;const{tag:L,remote:U}=e;if(oe(m),L&&!U){if(!m){R.value=ve;return}const{onCreate:V}=e,H=V?V(m):{[e.labelField]:m,[e.valueField]:m},{valueField:N,labelField:ae}=e;S.value.some(xe=>xe[N]===H[N]||xe[ae]===H[ae])||O.value.some(xe=>xe[N]===H[N]||xe[ae]===H[ae])?R.value=ve:R.value=[H]}}function J(o){o.stopPropagation();const{multiple:m}=e;!m&&e.filterable&&pe(),p(),m?ie([],[]):ie(null,null)}function Ve(o){!et(o,"action")&&!et(o,"empty")&&!et(o,"header")&&o.preventDefault()}function Ue(o){he(o)}function Ne(o){var m,L,U,V,H;if(!e.keyboard){o.preventDefault();return}switch(o.key){case" ":if(e.filterable)break;o.preventDefault();case"Enter":if(!(!((m=_.value)===null||m===void 0)&&m.isComposing)){if(j.value){const N=(L=q.value)===null||L===void 0?void 0:L.getPendingTmNode();N?T(N):e.filterable||(pe(),De())}else if(ye(),e.tag&&Se.value){const N=R.value[0];if(N){const ae=N[e.valueField],{value:xe}=g;e.multiple&&Array.isArray(xe)&&xe.includes(ae)||P(N)}}}o.preventDefault();break;case"ArrowUp":if(o.preventDefault(),e.loading)return;j.value&&((U=q.value)===null||U===void 0||U.prev());break;case"ArrowDown":if(o.preventDefault(),e.loading)return;j.value?(V=q.value)===null||V===void 0||V.next():ye();break;case"Escape":j.value&&(fo(o),pe()),(H=_.value)===null||H===void 0||H.focus();break}}function De(){var o;(o=_.value)===null||o===void 0||o.focus()}function je(){var o;(o=_.value)===null||o===void 0||o.focusInput()}function Ke(){var o;j.value&&((o=B.value)===null||o===void 0||o.syncPosition())}Ce(),Ie(ne(e,"options"),Ce);const Ge={focus:()=>{var o;(o=_.value)===null||o===void 0||o.focus()},focusInput:()=>{var o;(o=_.value)===null||o===void 0||o.focusInput()},blur:()=>{var o;(o=_.value)===null||o===void 0||o.blur()},blurInput:()=>{var o;(o=_.value)===null||o===void 0||o.blurInput()}},He=W(()=>{const{self:{menuBoxShadow:o}}=s.value;return{"--n-menu-box-shadow":o}}),Re=a?at("select",void 0,He,e):void 0;return Object.assign(Object.assign({},Ge),{mergedStatus:de,mergedClsPrefix:t,mergedBordered:n,namespace:l,treeMate:E,isMounted:ro(),triggerRef:_,menuRef:q,pattern:h,uncontrolledShow:G,mergedShow:j,adjustedTo:Wt(e),uncontrolledValue:c,mergedValue:g,followerRef:B,localizedPlaceholder:be,selectedOption:K,selectedOptions:X,mergedSize:ee,mergedDisabled:te,focused:f,activeWithoutMenuOpen:Se,inlineThemeDisabled:a,onTriggerInputFocus:Ee,onTriggerInputBlur:Le,handleTriggerOrMenuResize:Ke,handleMenuFocus:Fe,handleMenuBlur:Me,handleMenuTabOut:me,handleTriggerClick:Pe,handleToggle:T,handleDeleteOption:P,handlePatternInput:x,handleClear:J,handleTriggerBlur:Ae,handleTriggerFocus:Oe,handleKeydown:Ne,handleMenuAfterLeave:we,handleMenuClickOutside:b,handleMenuScroll:Ue,handleMenuKeydown:Ne,handleMenuMousedown:Ve,mergedTheme:s,cssVars:a?void 0:He,themeClass:Re==null?void 0:Re.themeClass,onRender:Re==null?void 0:Re.onRender})},render(){return r("div",{class:`${this.mergedClsPrefix}-select`},r(lo,null,{default:()=>[r(so,null,{default:()=>r(si,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),r(co,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Wt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>r(bn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),gn(r(ri,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var l,a;return[(a=(l=this.$slots).empty)===null||a===void 0?void 0:a.call(l)]},header:()=>{var l,a;return[(a=(l=this.$slots).header)===null||a===void 0?void 0:a.call(l)]},action:()=>{var l,a;return[(a=(l=this.$slots).action)===null||a===void 0?void 0:a.call(l)]}}),this.displayDirective==="show"?[[mn,this.mergedShow],[Kt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Kt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Ht=bo("n-tabs"),Sn={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},on=se({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Sn,setup(e){const t=it(Ht,null);return t||vo("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return r("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),vi=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},po(Sn,["displayDirective"])),Nt=se({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:vi,setup(e){const{mergedClsPrefixRef:t,valueRef:n,typeRef:l,closableRef:a,tabStyleRef:s,addTabStyleRef:c,tabClassRef:i,addTabClassRef:g,tabChangeIdRef:f,onBeforeLeaveRef:h,triggerRef:S,handleAdd:O,activateTab:R,handleClose:C}=it(Ht);return{trigger:S,mergedClosable:W(()=>{if(e.internalAddable)return!1;const{closable:F}=e;return F===void 0?a.value:F}),style:s,addStyle:c,tabClass:i,addTabClass:g,clsPrefix:t,value:n,type:l,handleClose(F){F.stopPropagation(),!e.disabled&&C(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){O();return}const{name:F}=e,D=++f.id;if(F!==n.value){const{value:E}=h;E?Promise.resolve(E(e.name,n.value)).then($=>{$&&f.id===D&&R(F)}):R(F)}}}},render(){const{internalAddable:e,clsPrefix:t,name:n,disabled:l,label:a,tab:s,value:c,mergedClosable:i,trigger:g,$slots:{default:f}}=this,h=a??s;return r("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?r("div",{class:`${t}-tabs-tab-pad`}):null,r("div",Object.assign({key:n,"data-name":n,"data-disabled":l?!0:void 0},un({class:[`${t}-tabs-tab`,c===n&&`${t}-tabs-tab--active`,l&&`${t}-tabs-tab--disabled`,i&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:g==="click"?this.activateTab:void 0,onMouseenter:g==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),r("span",{class:`${t}-tabs-tab__label`},e?r(tt,null,r("div",{class:`${t}-tabs-tab__height-placeholder`}," "),r(Dt,{clsPrefix:t},{default:()=>r($o,null)})):f?f():typeof h=="object"?h:We(h??n)),i&&this.type==="card"?r(ho,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:l}):null))}}),hi=u("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[z("segment-type",[u("tabs-rail",[Z("&.transition-disabled",[u("tabs-capsule",`
 transition: none;
 `)])])]),z("top",[u("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),z("left",[u("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),z("left, right",`
 flex-direction: row;
 `,[u("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),u("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),z("right",`
 flex-direction: row-reverse;
 `,[u("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),u("tabs-bar",`
 left: 0;
 `)]),z("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[u("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),u("tabs-bar",`
 top: 0;
 `)]),u("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[u("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),u("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[u("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[z("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),Z("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),z("flex",[u("tabs-nav",`
 width: 100%;
 position: relative;
 `,[u("tabs-wrapper",`
 width: 100%;
 `,[u("tabs-tab",`
 margin-right: 0;
 `)])])]),u("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[A("prefix, suffix",`
 display: flex;
 align-items: center;
 `),A("prefix","padding-right: 16px;"),A("suffix","padding-left: 16px;")]),z("top, bottom",[u("tabs-nav-scroll-wrapper",[Z("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),Z("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),z("shadow-start",[Z("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),z("shadow-end",[Z("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),z("left, right",[u("tabs-nav-scroll-content",`
 flex-direction: column;
 `),u("tabs-nav-scroll-wrapper",[Z("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),Z("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),z("shadow-start",[Z("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),z("shadow-end",[Z("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),u("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[u("tabs-nav-y-scroll",`
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
 `)]),u("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),u("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),u("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),u("tabs-tab",`
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
 `,[z("disabled",{cursor:"not-allowed"}),A("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),A("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),u("tabs-bar",`
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
 `),z("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),u("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),u("tab-pane",`
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
 `)]),u("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),z("line-type, bar-type",[u("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[Z("&:hover",{color:"var(--n-tab-text-color-hover)"}),z("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),z("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),u("tabs-nav",[z("line-type",[z("top",[A("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),u("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),u("tabs-bar",`
 bottom: -1px;
 `)]),z("left",[A("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),u("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),u("tabs-bar",`
 right: -1px;
 `)]),z("right",[A("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),u("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),u("tabs-bar",`
 left: -1px;
 `)]),z("bottom",[A("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),u("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),u("tabs-bar",`
 top: -1px;
 `)]),A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),u("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),u("tabs-bar",`
 border-radius: 0;
 `)]),z("card-type",[A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),u("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),u("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),u("tabs-tab",`
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
 `,[z("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[A("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ht("disabled",[Z("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),z("closable","padding-right: 8px;"),z("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),z("disabled","color: var(--n-tab-text-color-disabled);")]),u("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),z("left, right",[u("tabs-wrapper",`
 flex-direction: column;
 `,[u("tabs-tab-wrapper",`
 flex-direction: column;
 `,[u("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),z("top",[z("card-type",[u("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[z("active",`
 border-bottom: 1px solid #0000;
 `)]),u("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),u("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),z("left",[z("card-type",[u("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[z("active",`
 border-right: 1px solid #0000;
 `)]),u("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),u("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),z("right",[z("card-type",[u("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[z("active",`
 border-left: 1px solid #0000;
 `)]),u("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),u("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),z("bottom",[z("card-type",[u("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[z("active",`
 border-top: 1px solid #0000;
 `)]),u("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),u("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),pi=Object.assign(Object.assign({},ze.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),gi=se({name:"Tabs",props:pi,setup(e,{slots:t}){var n,l,a,s;const{mergedClsPrefixRef:c,inlineThemeDisabled:i}=ot(e),g=ze("Tabs","-tabs",hi,go,e,c),f=M(null),h=M(null),S=M(null),O=M(null),R=M(null),C=M(null),F=M(!0),D=M(!0),E=At(e,["labelSize","size"]),$=At(e,["activeName","value"]),G=M((l=(n=$.value)!==null&&n!==void 0?n:e.defaultValue)!==null&&l!==void 0?l:t.default?(s=(a=_t(t.default())[0])===null||a===void 0?void 0:a.props)===null||s===void 0?void 0:s.name:null),j=Lt($,G),_={id:0},B=W(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});Ie(j,()=>{_.id=0,y(),k()});function q(){var b;const{value:v}=j;return v===null?null:(b=f.value)===null||b===void 0?void 0:b.querySelector(`[data-name="${v}"]`)}function fe(b){if(e.type==="card")return;const{value:v}=h;if(!v)return;const T=v.style.opacity==="0";if(b){const P=`${c.value}-tabs-bar--disabled`,{barWidth:d,placement:x}=e;if(b.dataset.disabled==="true"?v.classList.add(P):v.classList.remove(P),["top","bottom"].includes(x)){if(ve(["top","maxHeight","height"]),typeof d=="number"&&b.offsetWidth>=d){const J=Math.floor((b.offsetWidth-d)/2)+b.offsetLeft;v.style.left=`${J}px`,v.style.maxWidth=`${d}px`}else v.style.left=`${b.offsetLeft}px`,v.style.maxWidth=`${b.offsetWidth}px`;v.style.width="8192px",T&&(v.style.transition="none"),v.offsetWidth,T&&(v.style.transition="",v.style.opacity="1")}else{if(ve(["left","maxWidth","width"]),typeof d=="number"&&b.offsetHeight>=d){const J=Math.floor((b.offsetHeight-d)/2)+b.offsetTop;v.style.top=`${J}px`,v.style.maxHeight=`${d}px`}else v.style.top=`${b.offsetTop}px`,v.style.maxHeight=`${b.offsetHeight}px`;v.style.height="8192px",T&&(v.style.transition="none"),v.offsetHeight,T&&(v.style.transition="",v.style.opacity="1")}}}function be(){if(e.type==="card")return;const{value:b}=h;b&&(b.style.opacity="0")}function ve(b){const{value:v}=h;if(v)for(const T of b)v.style[T]=""}function y(){if(e.type==="card")return;const b=q();b?fe(b):be()}function k(){var b;const v=(b=R.value)===null||b===void 0?void 0:b.$el;if(!v)return;const T=q();if(!T)return;const{scrollLeft:P,offsetWidth:d}=v,{offsetLeft:x,offsetWidth:J}=T;P>x?v.scrollTo({top:0,left:x,behavior:"smooth"}):x+J>P+d&&v.scrollTo({top:0,left:x+J-d,behavior:"smooth"})}const I=M(null);let X=0,K=null;function Q(b){const v=I.value;if(v){X=b.getBoundingClientRect().height;const T=`${X}px`,P=()=>{v.style.height=T,v.style.maxHeight=T};K?(P(),K(),K=null):K=P}}function ee(b){const v=I.value;if(v){const T=b.getBoundingClientRect().height,P=()=>{document.body.offsetHeight,v.style.maxHeight=`${T}px`,v.style.height=`${Math.max(X,T)}px`};K?(K(),K=null,P()):K=P}}function te(){const b=I.value;if(b){b.style.maxHeight="",b.style.height="";const{paneWrapperStyle:v}=e;if(typeof v=="string")b.style.cssText=v;else if(v){const{maxHeight:T,height:P}=v;T!==void 0&&(b.style.maxHeight=T),P!==void 0&&(b.style.height=P)}}}const de={value:[]},ie=M("next");function ce(b){const v=j.value;let T="next";for(const P of de.value){if(P===v)break;if(P===b){T="prev";break}}ie.value=T,p(b)}function p(b){const{onActiveNameChange:v,onUpdateValue:T,"onUpdate:value":P}=e;v&&ge(v,b),T&&ge(T,b),P&&ge(P,b),G.value=b}function w(b){const{onClose:v}=e;v&&ge(v,b)}function oe(){const{value:b}=h;if(!b)return;const v="transition-disabled";b.classList.add(v),y(),b.classList.remove(v)}const he=M(null);function Ce({transitionDisabled:b}){const v=f.value;if(!v)return;b&&v.classList.add("transition-disabled");const T=q();T&&he.value&&(he.value.style.width=`${T.offsetWidth}px`,he.value.style.height=`${T.offsetHeight}px`,he.value.style.transform=`translateX(${T.offsetLeft-bt(getComputedStyle(v).paddingLeft)}px)`,b&&he.value.offsetWidth),b&&v.classList.remove("transition-disabled")}Ie([j],()=>{e.type==="segment"&&Qe(()=>{Ce({transitionDisabled:!1})})}),nt(()=>{e.type==="segment"&&Ce({transitionDisabled:!0})});let ke=0;function ye(b){var v;if(b.contentRect.width===0&&b.contentRect.height===0||ke===b.contentRect.width)return;ke=b.contentRect.width;const{type:T}=e;if((T==="line"||T==="bar")&&oe(),T!=="segment"){const{placement:P}=e;Pe((P==="top"||P==="bottom"?(v=R.value)===null||v===void 0?void 0:v.$el:C.value)||null)}}const pe=It(ye,64);Ie([()=>e.justifyContent,()=>e.size],()=>{Qe(()=>{const{type:b}=e;(b==="line"||b==="bar")&&oe()})});const we=M(!1);function Se(b){var v;const{target:T,contentRect:{width:P}}=b,d=T.parentElement.offsetWidth;if(!we.value)d<P&&(we.value=!0);else{const{value:x}=O;if(!x)return;d-P>x.$el.offsetWidth&&(we.value=!1)}Pe(((v=R.value)===null||v===void 0?void 0:v.$el)||null)}const Ee=It(Se,64);function Le(){const{onAdd:b}=e;b&&b(),Qe(()=>{const v=q(),{value:T}=R;!v||!T||T.scrollTo({left:v.offsetLeft,top:0,behavior:"smooth"})})}function Pe(b){if(!b)return;const{placement:v}=e;if(v==="top"||v==="bottom"){const{scrollLeft:T,scrollWidth:P,offsetWidth:d}=b;F.value=T<=0,D.value=T+d>=P}else{const{scrollTop:T,scrollHeight:P,offsetHeight:d}=b;F.value=T<=0,D.value=T+d>=P}}const Ae=It(b=>{Pe(b.target)},64);Et(Ht,{triggerRef:ne(e,"trigger"),tabStyleRef:ne(e,"tabStyle"),tabClassRef:ne(e,"tabClass"),addTabStyleRef:ne(e,"addTabStyle"),addTabClassRef:ne(e,"addTabClass"),paneClassRef:ne(e,"paneClass"),paneStyleRef:ne(e,"paneStyle"),mergedClsPrefixRef:c,typeRef:ne(e,"type"),closableRef:ne(e,"closable"),valueRef:j,tabChangeIdRef:_,onBeforeLeaveRef:ne(e,"onBeforeLeave"),activateTab:ce,handleClose:w,handleAdd:Le}),mo(()=>{y(),k()}),pn(()=>{const{value:b}=S;if(!b)return;const{value:v}=c,T=`${v}-tabs-nav-scroll-wrapper--shadow-start`,P=`${v}-tabs-nav-scroll-wrapper--shadow-end`;F.value?b.classList.remove(T):b.classList.add(T),D.value?b.classList.remove(P):b.classList.add(P)});const Oe={syncBarPosition:()=>{y()}},Fe=()=>{Ce({transitionDisabled:!0})},Me=W(()=>{const{value:b}=E,{type:v}=e,T={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[v],P=`${b}${T}`,{self:{barColor:d,closeIconColor:x,closeIconColorHover:J,closeIconColorPressed:Ve,tabColor:Ue,tabBorderColor:Ne,paneTextColor:De,tabFontWeight:je,tabBorderRadius:Ke,tabFontWeightActive:Ge,colorSegment:He,fontWeightStrong:Re,tabColorSegment:o,closeSize:m,closeIconSize:L,closeColorHover:U,closeColorPressed:V,closeBorderRadius:H,[le("panePadding",b)]:N,[le("tabPadding",P)]:ae,[le("tabPaddingVertical",P)]:xe,[le("tabGap",P)]:mt,[le("tabGap",`${P}Vertical`)]:xt,[le("tabTextColor",v)]:yt,[le("tabTextColorActive",v)]:wt,[le("tabTextColorHover",v)]:Ct,[le("tabTextColorDisabled",v)]:St,[le("tabFontSize",b)]:Rt},common:{cubicBezierEaseInOut:Tt}}=g.value;return{"--n-bezier":Tt,"--n-color-segment":He,"--n-bar-color":d,"--n-tab-font-size":Rt,"--n-tab-text-color":yt,"--n-tab-text-color-active":wt,"--n-tab-text-color-disabled":St,"--n-tab-text-color-hover":Ct,"--n-pane-text-color":De,"--n-tab-border-color":Ne,"--n-tab-border-radius":Ke,"--n-close-size":m,"--n-close-icon-size":L,"--n-close-color-hover":U,"--n-close-color-pressed":V,"--n-close-border-radius":H,"--n-close-icon-color":x,"--n-close-icon-color-hover":J,"--n-close-icon-color-pressed":Ve,"--n-tab-color":Ue,"--n-tab-font-weight":je,"--n-tab-font-weight-active":Ge,"--n-tab-padding":ae,"--n-tab-padding-vertical":xe,"--n-tab-gap":mt,"--n-tab-gap-vertical":xt,"--n-pane-padding-left":$e(N,"left"),"--n-pane-padding-right":$e(N,"right"),"--n-pane-padding-top":$e(N,"top"),"--n-pane-padding-bottom":$e(N,"bottom"),"--n-font-weight-strong":Re,"--n-tab-color-segment":o}}),me=i?at("tabs",W(()=>`${E.value[0]}${e.type[0]}`),Me,e):void 0;return Object.assign({mergedClsPrefix:c,mergedValue:j,renderedNames:new Set,segmentCapsuleElRef:he,tabsPaneWrapperRef:I,tabsElRef:f,barElRef:h,addTabInstRef:O,xScrollInstRef:R,scrollWrapperElRef:S,addTabFixed:we,tabWrapperStyle:B,handleNavResize:pe,mergedSize:E,handleScroll:Ae,handleTabsResize:Ee,cssVars:i?void 0:Me,themeClass:me==null?void 0:me.themeClass,animationDirection:ie,renderNameListRef:de,yScrollElRef:C,handleSegmentResize:Fe,onAnimationBeforeLeave:Q,onAnimationEnter:ee,onAnimationAfterEnter:te,onRender:me==null?void 0:me.onRender},Oe)},render(){const{mergedClsPrefix:e,type:t,placement:n,addTabFixed:l,addable:a,mergedSize:s,renderNameListRef:c,onRender:i,paneWrapperClass:g,paneWrapperStyle:f,$slots:{default:h,prefix:S,suffix:O}}=this;i==null||i();const R=h?_t(h()).filter(_=>_.type.__TAB_PANE__===!0):[],C=h?_t(h()).filter(_=>_.type.__TAB__===!0):[],F=!C.length,D=t==="card",E=t==="segment",$=!D&&!E&&this.justifyContent;c.value=[];const G=()=>{const _=r("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},$?null:r("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),F?R.map((B,q)=>(c.value.push(B.props.name),Bt(r(Nt,Object.assign({},B.props,{internalCreatedByPane:!0,internalLeftPadded:q!==0&&(!$||$==="center"||$==="start"||$==="end")}),B.children?{default:B.children.tab}:void 0)))):C.map((B,q)=>(c.value.push(B.props.name),Bt(q!==0&&!$?ln(B):B))),!l&&a&&D?rn(a,(F?R.length:C.length)!==0):null,$?null:r("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return r("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},D&&a?r(Ze,{onResize:this.handleTabsResize},{default:()=>_}):_,D?r("div",{class:`${e}-tabs-pad`}):null,D?null:r("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},j=E?"top":n;return r("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${s}-size`,$&&`${e}-tabs--flex`,`${e}-tabs--${j}`],style:this.cssVars},r("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${j}`,`${e}-tabs-nav`]},pt(S,_=>_&&r("div",{class:`${e}-tabs-nav__prefix`},_)),E?r(Ze,{onResize:this.handleSegmentResize},{default:()=>r("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},r("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},r("div",{class:`${e}-tabs-wrapper`},r("div",{class:`${e}-tabs-tab`}))),F?R.map((_,B)=>(c.value.push(_.props.name),r(Nt,Object.assign({},_.props,{internalCreatedByPane:!0,internalLeftPadded:B!==0}),_.children?{default:_.children.tab}:void 0))):C.map((_,B)=>(c.value.push(_.props.name),B===0?_:ln(_))))}):r(Ze,{onResize:this.handleNavResize},{default:()=>r("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(j)?r(Ao,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:G}):r("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},G()))}),l&&a&&D?rn(a,!0):null,pt(O,_=>_&&r("div",{class:`${e}-tabs-nav__suffix`},_))),F&&(this.animated&&(j==="top"||j==="bottom")?r("div",{ref:"tabsPaneWrapperRef",style:f,class:[`${e}-tabs-pane-wrapper`,g]},an(R,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):an(R,this.mergedValue,this.renderedNames)))}});function an(e,t,n,l,a,s,c){const i=[];return e.forEach(g=>{const{name:f,displayDirective:h,"display-directive":S}=g.props,O=C=>h===C||S===C,R=t===f;if(g.key!==void 0&&(g.key=f),R||O("show")||O("show:lazy")&&n.has(f)){n.has(f)||n.add(f);const C=!O("if");i.push(C?gn(g,[[mn,R]]):g)}}),c?r(xo,{name:`${c}-transition`,onBeforeLeave:l,onEnter:a,onAfterEnter:s},{default:()=>i}):i}function rn(e,t){return r(Nt,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function ln(e){const t=yo(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Bt(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}function mi(e){const t=Oo(e,100);let n=0,l=0;return function(a){const s=a.target;if(!s)return;const{scrollTop:c,scrollHeight:i,clientHeight:g,scrollLeft:f,scrollWidth:h,clientWidth:S}=s;function O(){if(n==c)return;const C=n>c;if(n=c,C)return;i-c-g<=1&&t("vertical")}function R(){if(l==f)return;const C=l>f;if(l=f,C)return;h-f-S<=1&&t("horizontal")}O(),R()}}function xi(e,t,n){const{isClickAllowed:l,uiLibrary:a=["naiveUI","ElementPlus","Element"]}={},s=function(g){const f=[];for(const h in g)Object.hasOwnProperty.call(g,h)&&a.includes(h)&&f.push(...g[h]);return f}({naiveUI:[".v-binder-follower-container",".n-image-preview-container",".n-modal-container"],ElementPlus:[".el-popper"],Element:[".el-popper"]});function c(){t(),document.removeEventListener("mousedown",i)}function i(g){if(l){const S=l(g);if(S)return;if(S===!1)return c()}const f=g.target;if(!(f!=null&&f.closest("body")))return;e.concat(s).some(S=>!!(f!=null&&f.closest(S)))||c()}requestAnimationFrame(()=>document.addEventListener("mousedown",i))}const yi={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},wi=_e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 112v288"},null,-1),Ci=_e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 256H112"},null,-1),Si=[wi,Ci],Ri=se({name:"Add",render:function(t,n){return Te(),Be("svg",yi,Si)}}),Ti={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},zi=_e("path",{d:"M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z",fill:"currentColor"},null,-1),_i=[zi],ki=se({name:"Close",render:function(t,n){return Te(),Be("svg",Ti,_i)}}),Pi={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Oi=_e("path",{d:"M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 0 0-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 0 0 140-66.92",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Fi=_e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M32 256l44-44l46 44"},null,-1),$i=_e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M480 256l-44 44l-46-44"},null,-1),Ii=[Oi,Fi,$i],Mi=se({name:"Sync",render:function(t,n){return Te(),Be("svg",Pi,Ii)}}),Bi={class:"moduls-scroll-section"},Ei=se({__name:"Scroll",props:{dynamic:{type:Boolean}},emits:["bottomReached"],setup(e,{emit:t}){const n=e,l=t,a=M();function s(){const i=a.value;function g(){if(i){const f=i.clientHeight<i.scrollHeight?"var(--moduls-scroll-padding)":"0";i.style.paddingRight=f;const h=i.clientWidth<i.scrollWidth?"var(--moduls-scroll-padding)":"0";i.style.paddingBottom=h}}i?(g(),n.dynamic&&new ResizeObserver(g).observe(i)):requestAnimationFrame(s)}s();const c=mi(i=>l("bottomReached",i));return(i,g)=>(Te(),Be("section",Bi,[_e("div",{ref_key:"ScrollDom",ref:a,class:"moduls-scroll",onScroll:g[0]||(g[0]=(...f)=>Y(c)&&Y(c)(...f))},[_e("div",null,[wo(i.$slots,"default",{},void 0,!0)])],544)]))}}),sn=xn(Ei,[["__scopeId","data-v-ead1cee0"]]),Li={components:{popups:{settings:{header:"设置",tabs:[{name:"常用",items:[{title:"语言"},{title:"主题"}]},{name:"快捷键"}]}}}},Ai={components:{popups:{settings:{header:"Settings",tabs:[{name:"General",items:[{title:"Language"},{title:"Theme"}]},{name:"Shortcuts"}]}}}},Wi=W(()=>Ye.value.language=="enUS"?Ai:Li),Ni={class:"Settings center-positioning"},Di=se({__name:"index",emits:["closure"],setup(e,{emit:t}){const n=t;function l(){Co(),n("closure")}xi([".Settings.center-positioning"],l);const a=M(),s=M(),c=W(()=>{const i=Wi.value.components.popups.settings;return s.value&&(a.value=i.tabs[0].name,requestAnimationFrame(()=>{s.value.syncBarPosition()})),i});return(i,g)=>(Te(),Be("section",Ni,[_e("header",null,[qe(Xe(c.value.header)+" ",1),_e("div",{class:"clickable",onClick:l},[re(Y(dt),{size:"22",component:Y(ki)},null,8,["component"])])]),re(Y(gi),{ref_key:"tabsRef",ref:s,value:a.value,"onUpdate:value":g[2]||(g[2]=f=>a.value=f),animated:!0},{default:ue(()=>[re(Y(on),{name:c.value.tabs[0].name},{default:ue(()=>[re(sn,null,{default:ue(()=>[re(Pt,null,{title:ue(()=>[qe(Xe(c.value.tabs[0].items[0].title),1)]),value:ue(()=>[re(Y(nn),{value:Y(Ye).language,"onUpdate:value":g[0]||(g[0]=f=>Y(Ye).language=f),options:Y(So)},null,8,["value","options"])]),_:1}),re(Pt,null,{title:ue(()=>[qe(Xe(c.value.tabs[0].items[1].title),1)]),value:ue(()=>[re(Y(nn),{value:Y(Ye).theme,"onUpdate:value":g[1]||(g[1]=f=>Y(Ye).theme=f),options:Y(Ro)},null,8,["value","options"])]),_:1})]),_:1})]),_:1},8,["name"]),re(Y(on),{name:c.value.tabs[1].name},{default:ue(()=>[re(sn,null,{default:ue(()=>[(Te(!0),Be(tt,null,Gt(Y(To),f=>(Te(),qt(Pt,{key:f.id},{title:ue(()=>[qe(Xe(f.title),1)]),value:ue(()=>[re(Y(kt),{justify:"space-between"},{default:ue(()=>[re(Y(kt),null,{default:ue(()=>[re(Y(ct),{quaternary:"",disabled:!f.isCustom,onClick:h=>Y(zo)(f.id)},{default:ue(()=>[re(Y(dt),{size:"20",component:Y(Mi)},null,8,["component"])]),_:2},1032,["disabled","onClick"]),re(Y(ct),{quaternary:"",onClick:h=>Y(_o)(f)},{default:ue(()=>[re(Y(dt),{size:"20",component:Y(ko)("Edit")},null,8,["component"])]),_:2},1032,["onClick"])]),_:2},1024),re(Y(kt),null,{default:ue(()=>[(Te(!0),Be(tt,null,Gt(f.shortcutKey,(h,S)=>(Te(),Be(tt,{key:S},[re(Y(ct),null,{default:ue(()=>[qe(Xe(h),1)]),_:2},1024),S!=f.shortcutKey.length-1?(Te(),qt(Y(ct),{key:0,bordered:!1,style:{"pointer-events":"none"}},{default:ue(()=>[re(Y(dt),{size:"20",component:Y(Ri)},null,8,["component"])]),_:1})):Po("",!0)],64))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["name"])]),_:1},8,["value"])]))}}),Ki=xn(Di,[["__scopeId","data-v-459c3eba"]]);export{Ki as default};
