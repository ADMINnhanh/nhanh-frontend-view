import{j as k,H as x,J as p,k as v,d as y,l as m,R as z,m as R,L as _,dk as A,g as B,N as P,ao as D,bi as V,q as T,dh as L,ab as M,c as S,o as j,b as t,W as b,w as s,u as e,a1 as w,by as n,e as l}from"./index-W6lJaD9i.js";import{N as o}from"./text-Cmc6m-a7.js";import{N as f}from"./Flex-B0wPcGFn.js";const E=k("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[x("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[x("no-title",`
 display: flex;
 align-items: center;
 `)]),p("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),v("title-position-left",[p("line",[v("left",{width:"28px"})])]),v("title-position-right",[p("line",[v("right",{width:"28px"})])]),v("dashed",[p("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),v("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),p("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),x("dashed",[p("line",{backgroundColor:"var(--n-color)"})]),v("dashed",[p("line",{borderColor:"var(--n-color)"})]),v("vertical",{backgroundColor:"var(--n-color)"})]),O=Object.assign(Object.assign({},_.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),h=y({name:"Divider",props:O,setup(a){const{mergedClsPrefixRef:d,inlineThemeDisabled:u}=R(a),c=_("Divider","-divider",E,A,a,d),g=B(()=>{const{common:{cubicBezierEaseInOut:r},self:{color:C,textColor:$,fontWeight:N}}=c.value;return{"--n-bezier":r,"--n-color":C,"--n-text-color":$,"--n-font-weight":N}}),i=u?P("divider",void 0,g,a):void 0;return{mergedClsPrefix:d,cssVars:u?void 0:g,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var a;const{$slots:d,titlePlacement:u,vertical:c,dashed:g,cssVars:i,mergedClsPrefix:r}=this;return(a=this.onRender)===null||a===void 0||a.call(this),m("div",{role:"separator",class:[`${r}-divider`,this.themeClass,{[`${r}-divider--vertical`]:c,[`${r}-divider--no-title`]:!d.default,[`${r}-divider--dashed`]:g,[`${r}-divider--title-position-${u}`]:d.default&&u}],style:i},c?null:m("div",{class:`${r}-divider__line ${r}-divider__line--left`}),!c&&d.default?m(z,null,m("div",{class:`${r}-divider__title`},this.$slots),m("div",{class:`${r}-divider__line ${r}-divider__line--right`})):null)}}),F=["id"],q=y({__name:"shortcutKey",setup(a,{expose:d}){const u=D();let c=V();return T(()=>{c.value=new L({id:u,theme:M.value.theme})}),d({myCanvas:c}),(g,i)=>(j(),S(z,null,[t(e(w),{vertical:""},{default:s(()=>[t(e(o),{type:"success",strong:""},{default:s(()=>[t(e(w),null,{default:s(()=>[t(e(n),{icon:"ArrowUp",size:"30"}),t(e(n),{icon:"ArrowDown",size:"30"}),t(e(n),{icon:"ArrowLeft",size:"30"}),t(e(n),{icon:"ArrowRight",size:"30"})]),_:1})]),_:1}),b("div",null,[i[2]||(i[2]=l(" 按下不放画布会以每次键盘事件",-1)),t(e(o),{type:"info",strong:""},{default:s(()=>[...i[0]||(i[0]=[l(" 1px ",-1)])]),_:1}),i[3]||(i[3]=l(" 的速度移动画布，双击速度 ",-1)),t(e(o),{type:"error",strong:""},{default:s(()=>[...i[1]||(i[1]=[l(" x4 ",-1)])]),_:1}),i[4]||(i[4]=l("。 ",-1))]),t(e(f),null,{default:s(()=>[t(e(f),null,{default:s(()=>[t(e(o),{type:"success",strong:""},{default:s(()=>[t(e(n),{icon:"ArrowUp",size:"30"})]),_:1}),i[5]||(i[5]=l(" 向上移动 ",-1))]),_:1}),t(e(h),{vertical:""}),t(e(f),null,{default:s(()=>[t(e(o),{type:"success",strong:""},{default:s(()=>[t(e(n),{icon:"ArrowDown",size:"30"})]),_:1}),i[6]||(i[6]=l(" 向下移动 ",-1))]),_:1}),t(e(h),{vertical:""}),t(e(f),null,{default:s(()=>[t(e(o),{type:"success",strong:""},{default:s(()=>[t(e(n),{icon:"ArrowLeft",size:"30"})]),_:1}),i[7]||(i[7]=l(" 向左移动 ",-1))]),_:1}),t(e(h),{vertical:""}),t(e(f),null,{default:s(()=>[t(e(o),{type:"success",strong:""},{default:s(()=>[t(e(n),{icon:"ArrowRight",size:"30"})]),_:1}),i[8]||(i[8]=l(" 向右移动 ",-1))]),_:1})]),_:1}),t(e(f),null,{default:s(()=>[t(e(f),null,{default:s(()=>[t(e(o),{type:"success",strong:""},{default:s(()=>[t(e(n),{icon:"Plus",size:"30"})]),_:1}),i[9]||(i[9]=l(" 画布比例 + 0.02 ",-1))]),_:1}),t(e(h),{vertical:""}),t(e(f),null,{default:s(()=>[t(e(o),{type:"success",strong:""},{default:s(()=>[t(e(n),{icon:"Minus",size:"30"})]),_:1}),i[10]||(i[10]=l(" 画布比例 - 0.02 ",-1))]),_:1})]),_:1})]),_:1}),b("canvas",{id:e(u),class:"my-canvas"},null,8,F)],64))}});export{q as default};
