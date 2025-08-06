import"./index--WlHysRm.js";import{p as v,ap as a,R as m,bF as q,Q as G,d as I,v as J,x as $,dq as Q,W as X,z as y,cD as Z,X as i,F as U,J as ee,k as n,a3 as te,dr as oe,Y as re,$ as ne,d2 as ae,d3 as se,d4 as ie,d1 as le,bW as ce,bE as de,aP as A,C as ue,aO as ve,o as g,aS as p,w as f,u as h,c as he,Z as be,e as ge,t as fe,b4 as C,aK as k,aM as R,bN as S,b as x,aY as me,B as pe,cr as Ce,b5 as ye,_ as ze}from"./index-gVmBTWk7.js";const Be=v("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[a("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),m("closable",[v("alert-body",[a("title",`
 padding-right: 24px;
 `)])]),a("icon",{color:"var(--n-icon-color)"}),v("alert-body",{padding:"var(--n-padding)"},[a("title",{color:"var(--n-title-text-color)"}),a("content",{color:"var(--n-content-text-color)"})]),q({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),a("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),a("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),m("show-icon",[v("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),m("right-adjust",[v("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),v("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[a("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[G("& +",[a("content",{marginTop:"9px"})])]),a("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),a("icon",{transition:"color .3s var(--n-bezier)"})]),_e=Object.assign(Object.assign({},$.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),Ae=I({name:"Alert",inheritAttrs:!1,props:_e,setup(r){const{mergedClsPrefixRef:e,mergedBorderedRef:l,inlineThemeDisabled:t,mergedRtlRef:d}=J(r),b=$("Alert","-alert",Be,Q,r,e),w=X("Alert",d,e),z=y(()=>{const{common:{cubicBezierEaseInOut:c},self:o}=b.value,{fontSize:N,borderRadius:P,titleFontWeight:E,lineHeight:M,iconSize:F,iconMargin:_,iconMarginRtl:L,closeIconSize:H,closeBorderRadius:V,closeSize:j,closeMargin:O,closeMarginRtl:W,padding:D}=o,{type:s}=r,{left:K,right:Y}=Z(_);return{"--n-bezier":c,"--n-color":o[i("color",s)],"--n-close-icon-size":H,"--n-close-border-radius":V,"--n-close-color-hover":o[i("closeColorHover",s)],"--n-close-color-pressed":o[i("closeColorPressed",s)],"--n-close-icon-color":o[i("closeIconColor",s)],"--n-close-icon-color-hover":o[i("closeIconColorHover",s)],"--n-close-icon-color-pressed":o[i("closeIconColorPressed",s)],"--n-icon-color":o[i("iconColor",s)],"--n-border":o[i("border",s)],"--n-title-text-color":o[i("titleTextColor",s)],"--n-content-text-color":o[i("contentTextColor",s)],"--n-line-height":M,"--n-border-radius":P,"--n-font-size":N,"--n-title-font-weight":E,"--n-icon-size":F,"--n-icon-margin":_,"--n-icon-margin-rtl":L,"--n-close-size":j,"--n-close-margin":O,"--n-close-margin-rtl":W,"--n-padding":D,"--n-icon-margin-left":K,"--n-icon-margin-right":Y}}),u=t?U("alert",y(()=>r.type[0]),z,r):void 0,B=ee(!0),T=()=>{const{onAfterLeave:c,onAfterHide:o}=r;c&&c(),o&&o()};return{rtlEnabled:w,mergedClsPrefix:e,mergedBordered:l,visible:B,handleCloseClick:()=>{var c;Promise.resolve((c=r.onClose)===null||c===void 0?void 0:c.call(r)).then(o=>{o!==!1&&(B.value=!1)})},handleAfterLeave:()=>{T()},mergedTheme:b,cssVars:t?void 0:z,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),n(de,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:l}=this,t={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?n("div",Object.assign({},te(this.$attrs,t)),this.closable&&n(oe,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&n("div",{class:`${e}-alert__border`}),this.showIcon&&n("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},re(l.icon,()=>[n(ne,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return n(le,null);case"info":return n(ie,null);case"warning":return n(se,null);case"error":return n(ae,null);default:return null}}})])),n("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},ce(l.header,d=>{const b=d||this.title;return b?n("div",{class:`${e}-alert-body__title`},b):null}),l.default&&n("div",{class:`${e}-alert-body__content`},l))):null}})}}),ke={class:"float-button"},Re=I({__name:"Card",props:{vertical:{type:Boolean},canvas:{},alert:{},alertContent:{},hasNoAlertContent:{type:Boolean},tipsAnimation:{type:Function}},setup(r){const e=r,l=y(()=>e.vertical||A.value.isMobileStyle);return ue(()=>ve.value.theme,t=>{var d;(d=e.canvas)==null||d.setTheme(t)}),(t,d)=>(g(),p(h(ye),{size:h(A).isMobileStyle?"small":"medium",class:S([t.hasNoAlertContent&&"no-alert-content"])},{default:f(()=>[t.alert?(g(),p(h(Ae),{key:0,title:t.alert,type:"info",bordered:!1,closable:""},{default:f(()=>[t.alertContent?(g(),he(be,{key:0},[ge(fe(t.alertContent),1)],64)):C("",!0),k(t.$slots,"alert-content",{},void 0,!0)]),_:3},8,["title"])):C("",!0),R("div",{class:S(["content",l.value?"vertical":""])},[R("div",ke,[x(h(me),{vertical:""},{default:f(()=>[t.tipsAnimation?(g(),p(h(pe),{key:0,strong:"",secondary:"",circle:"",type:"success",onClick:t.tipsAnimation},{icon:f(()=>[x(h(Ce),{icon:"Bulb"})]),_:1},8,["onClick"])):C("",!0)]),_:1})]),k(t.$slots,"default",{},void 0,!0)],2)]),_:3},8,["size","class"]))}}),we=ze(Re,[["__scopeId","data-v-25be4c2d"]]);export{we as C};
