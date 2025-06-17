import{p as M,ap as t,ao as A,Q as K,R as o,S as E,d as se,v as de,x as O,d8 as ce,ax as ue,J as P,E as he,U as be,z as V,X as f,ab as U,a4 as r,F as fe,d9 as j,k as n,b$ as v,ad as ve,ae as ge,I as H}from"./index-zsy9fzWA.js";const we=M("switch",`
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
 `),M("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[A({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
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
 `),K("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),o("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),E("disabled",[E("icon",[o("rubber-band",[o("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[K("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),o("active",[o("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[K("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),o("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
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
 `,[A()]),t("button",`
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
 `)]),o("active",[t("rail","background-color: var(--n-rail-color-active);")]),o("loading",[t("rail",`
 cursor: wait;
 `)]),o("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),me=Object.assign(Object.assign({},O.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let k;const ye=se({name:"Switch",props:me,setup(e){k===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?k=CSS.supports("width","max(1px)"):k=!1:k=!0);const{mergedClsPrefixRef:S,inlineThemeDisabled:m}=de(e),z=O("Switch","-switch",we,ce,e,S),l=ue(e),{mergedSizeRef:$,mergedDisabledRef:h}=l,p=P(e.defaultValue),C=he(e,"value"),b=be(C,p),y=V(()=>b.value===e.checkedValue),g=P(!1),a=P(!1),s=V(()=>{const{railStyle:i}=e;if(i)return i({focused:a.value,checked:y.value})});function d(i){const{"onUpdate:value":R,onChange:B,onUpdateValue:_}=e,{nTriggerFormInput:F,nTriggerFormChange:T}=l;R&&H(R,i),_&&H(_,i),B&&H(B,i),p.value=i,F(),T()}function X(){const{nTriggerFormFocus:i}=l;i()}function L(){const{nTriggerFormBlur:i}=l;i()}function Y(){e.loading||h.value||(b.value!==e.checkedValue?d(e.checkedValue):d(e.uncheckedValue))}function J(){a.value=!0,X()}function Q(){a.value=!1,L(),g.value=!1}function q(i){e.loading||h.value||i.key===" "&&(b.value!==e.checkedValue?d(e.checkedValue):d(e.uncheckedValue),g.value=!1)}function G(i){e.loading||h.value||i.key===" "&&(i.preventDefault(),g.value=!0)}const I=V(()=>{const{value:i}=$,{self:{opacityDisabled:R,railColor:B,railColorActive:_,buttonBoxShadow:F,buttonColor:T,boxShadowFocus:Z,loadingColor:ee,textColor:te,iconColor:ie,[f("buttonHeight",i)]:c,[f("buttonWidth",i)]:ae,[f("buttonWidthPressed",i)]:ne,[f("railHeight",i)]:u,[f("railWidth",i)]:x,[f("railBorderRadius",i)]:oe,[f("buttonBorderRadius",i)]:re},common:{cubicBezierEaseInOut:le}}=z.value;let N,W,D;return k?(N=`calc((${u} - ${c}) / 2)`,W=`max(${u}, ${c})`,D=`max(${x}, calc(${x} + ${c} - ${u}))`):(N=U((r(u)-r(c))/2),W=U(Math.max(r(u),r(c))),D=r(u)>r(c)?x:U(r(x)+r(c)-r(u))),{"--n-bezier":le,"--n-button-border-radius":re,"--n-button-box-shadow":F,"--n-button-color":T,"--n-button-width":ae,"--n-button-width-pressed":ne,"--n-button-height":c,"--n-height":W,"--n-offset":N,"--n-opacity-disabled":R,"--n-rail-border-radius":oe,"--n-rail-color":B,"--n-rail-color-active":_,"--n-rail-height":u,"--n-rail-width":x,"--n-width":D,"--n-box-shadow-focus":Z,"--n-loading-color":ee,"--n-text-color":te,"--n-icon-color":ie}}),w=m?fe("switch",V(()=>$.value[0]),I,e):void 0;return{handleClick:Y,handleBlur:Q,handleFocus:J,handleKeyup:q,handleKeydown:G,mergedRailStyle:s,pressed:g,mergedClsPrefix:S,mergedValue:b,checked:y,mergedDisabled:h,cssVars:m?void 0:I,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:S,checked:m,mergedRailStyle:z,onRender:l,$slots:$}=this;l==null||l();const{checked:h,unchecked:p,icon:C,"checked-icon":b,"unchecked-icon":y}=$,g=!(j(C)&&j(b)&&j(y));return n("div",{role:"switch","aria-checked":m,class:[`${e}-switch`,this.themeClass,g&&`${e}-switch--icon`,m&&`${e}-switch--active`,S&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},n("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:z},v(h,a=>v(p,s=>a||s?n("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),a),n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),s)):null)),n("div",{class:`${e}-switch__button`},v(C,a=>v(b,s=>v(y,d=>n(ve,null,{default:()=>this.loading?n(ge,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(s||a)?n("div",{class:`${e}-switch__button-icon`,key:s?"checked-icon":"icon"},s||a):!this.checked&&(d||a)?n("div",{class:`${e}-switch__button-icon`,key:d?"unchecked-icon":"icon"},d||a):null})))),v(h,a=>a&&n("div",{key:"checked",class:`${e}-switch__checked`},a)),v(p,a=>a&&n("div",{key:"unchecked",class:`${e}-switch__unchecked`},a)))))}});export{ye as N};
