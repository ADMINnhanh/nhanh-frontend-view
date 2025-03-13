import{j as U,n as t,bj as I,l as A,m as l,k as O,d as L,p as X,H as F,bw as ue,A as he,C as K,D as be,E as fe,J as R,K as w,bx as W,by as c,L as Y,bz as H,x as o,M as p,bh as ve,bA as ge,G as M,aj as me}from"./index-DL173VoU.js";const we=U("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),U("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[I({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),A("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),l("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),O("disabled",[O("icon",[l("rubber-band",[l("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[A("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),l("active",[l("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[A("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),l("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[I()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),l("active",[t("rail","background-color: var(--n-rail-color-active);")]),l("loading",[t("rail",`
 cursor: wait;
 `)]),l("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),pe=Object.assign(Object.assign({},F.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let S;const Ce=L({name:"Switch",props:pe,setup(e){S===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?S=CSS.supports("width","max(1px)"):S=!1:S=!0);const{mergedClsPrefixRef:v,inlineThemeDisabled:d}=X(e),k=F("Switch","-switch",we,ue,e,v),a=he(e),{mergedSizeRef:r,mergedDisabledRef:s}=a,g=K(e.defaultValue),z=be(e,"value"),m=fe(z,g),C=R(()=>m.value===e.checkedValue),y=K(!1),i=K(!1),u=R(()=>{const{railStyle:n}=e;if(n)return n({focused:i.value,checked:C.value})});function h(n){const{"onUpdate:value":V,onChange:B,onUpdateValue:_}=e,{nTriggerFormInput:T,nTriggerFormChange:P}=a;V&&M(V,n),_&&M(_,n),B&&M(B,n),g.value=n,T(),P()}function G(){const{nTriggerFormFocus:n}=a;n()}function J(){const{nTriggerFormBlur:n}=a;n()}function q(){e.loading||s.value||(m.value!==e.checkedValue?h(e.checkedValue):h(e.uncheckedValue))}function Q(){i.value=!0,G()}function Z(){i.value=!1,J(),y.value=!1}function ee(n){e.loading||s.value||n.key===" "&&(m.value!==e.checkedValue?h(e.checkedValue):h(e.uncheckedValue),y.value=!1)}function te(n){e.loading||s.value||n.key===" "&&(n.preventDefault(),y.value=!0)}const E=R(()=>{const{value:n}=r,{self:{opacityDisabled:V,railColor:B,railColorActive:_,buttonBoxShadow:T,buttonColor:P,boxShadowFocus:ne,loadingColor:ie,textColor:oe,iconColor:ae,[w("buttonHeight",n)]:b,[w("buttonWidth",n)]:re,[w("buttonWidthPressed",n)]:se,[w("railHeight",n)]:f,[w("railWidth",n)]:$,[w("railBorderRadius",n)]:le,[w("buttonBorderRadius",n)]:ce},common:{cubicBezierEaseInOut:de}}=k.value;let N,j,D;return S?(N=`calc((${f} - ${b}) / 2)`,j=`max(${f}, ${b})`,D=`max(${$}, calc(${$} + ${b} - ${f}))`):(N=W((c(f)-c(b))/2),j=W(Math.max(c(f),c(b))),D=c(f)>c(b)?$:W(c($)+c(b)-c(f))),{"--n-bezier":de,"--n-button-border-radius":ce,"--n-button-box-shadow":T,"--n-button-color":P,"--n-button-width":re,"--n-button-width-pressed":se,"--n-button-height":b,"--n-height":j,"--n-offset":N,"--n-opacity-disabled":V,"--n-rail-border-radius":le,"--n-rail-color":B,"--n-rail-color-active":_,"--n-rail-height":f,"--n-rail-width":$,"--n-width":D,"--n-box-shadow-focus":ne,"--n-loading-color":ie,"--n-text-color":oe,"--n-icon-color":ae}}),x=d?Y("switch",R(()=>r.value[0]),E,e):void 0;return{handleClick:q,handleBlur:Z,handleFocus:Q,handleKeyup:ee,handleKeydown:te,mergedRailStyle:u,pressed:y,mergedClsPrefix:v,mergedValue:m,checked:C,mergedDisabled:s,cssVars:d?void 0:E,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:v,checked:d,mergedRailStyle:k,onRender:a,$slots:r}=this;a==null||a();const{checked:s,unchecked:g,icon:z,"checked-icon":m,"unchecked-icon":C}=r,y=!(H(z)&&H(m)&&H(C));return o("div",{role:"switch","aria-checked":d,class:[`${e}-switch`,this.themeClass,y&&`${e}-switch--icon`,d&&`${e}-switch--active`,v&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},o("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:k},p(s,i=>p(g,u=>i||u?o("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},o("div",{class:`${e}-switch__rail-placeholder`},o("div",{class:`${e}-switch__button-placeholder`}),i),o("div",{class:`${e}-switch__rail-placeholder`},o("div",{class:`${e}-switch__button-placeholder`}),u)):null)),o("div",{class:`${e}-switch__button`},p(z,i=>p(m,u=>p(C,h=>o(ve,null,{default:()=>this.loading?o(ge,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(u||i)?o("div",{class:`${e}-switch__button-icon`,key:u?"checked-icon":"icon"},u||i):!this.checked&&(h||i)?o("div",{class:`${e}-switch__button-icon`,key:h?"unchecked-icon":"icon"},h||i):null})))),p(s,i=>i&&o("div",{key:"checked",class:`${e}-switch__checked`},i)),p(g,i=>i&&o("div",{key:"unchecked",class:`${e}-switch__unchecked`},i)))))}}),ye=U("a",`
 cursor: pointer;
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 text-decoration-color: var(--n-text-color);
 color: var(--n-text-color);
`),xe=Object.assign({},F.props),$e=L({name:"A",props:xe,setup(e){const{mergedClsPrefixRef:v,inlineThemeDisabled:d}=X(e),k=F("Typography","-a",ye,me,e,v),a=R(()=>{const{common:{cubicBezierEaseInOut:s},self:{aTextColor:g}}=k.value;return{"--n-text-color":g,"--n-bezier":s}}),r=d?Y("a",void 0,a,e):void 0;return{mergedClsPrefix:v,cssVars:d?void 0:a,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),o("a",{class:[`${this.mergedClsPrefix}-a`,this.themeClass],style:this.cssVars},this.$slots)}});export{$e as N,Ce as a};
