import{f as M,j as t,bq as E,h as j,i as o,g as I,d as se,k as ce,s as O,cv as de,aZ as ue,E as D,K as he,ag as be,x as V,y as f,aA as P,aj as r,z as fe,cw as A,n,A as v,bo as ve,bQ as ge,ak as U}from"./index-CrYNh4GQ.js";const we=M("switch",`
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
 `,[E({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
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
 `),j("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),o("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),I("disabled",[I("icon",[o("rubber-band",[o("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[j("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),o("active",[o("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[j("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),o("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
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
 `,[E()]),t("button",`
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
 `)])]),me=Object.assign(Object.assign({},O.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let x;const ye=se({name:"Switch",props:me,setup(e){x===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?x=CSS.supports("width","max(1px)"):x=!1:x=!0);const{mergedClsPrefixRef:S,inlineThemeDisabled:m}=ce(e),z=O("Switch","-switch",we,de,e,S),l=ue(e),{mergedSizeRef:$,mergedDisabledRef:h}=l,p=D(e.defaultValue),C=he(e,"value"),b=be(C,p),y=V(()=>b.value===e.checkedValue),g=D(!1),a=D(!1),s=V(()=>{const{railStyle:i}=e;if(i)return i({focused:a.value,checked:y.value})});function c(i){const{"onUpdate:value":B,onChange:R,onUpdateValue:_}=e,{nTriggerFormInput:F,nTriggerFormChange:T}=l;B&&U(B,i),_&&U(_,i),R&&U(R,i),p.value=i,F(),T()}function L(){const{nTriggerFormFocus:i}=l;i()}function X(){const{nTriggerFormBlur:i}=l;i()}function Y(){e.loading||h.value||(b.value!==e.checkedValue?c(e.checkedValue):c(e.uncheckedValue))}function q(){a.value=!0,L()}function Q(){a.value=!1,X(),g.value=!1}function Z(i){e.loading||h.value||i.key===" "&&(b.value!==e.checkedValue?c(e.checkedValue):c(e.uncheckedValue),g.value=!1)}function G(i){e.loading||h.value||i.key===" "&&(i.preventDefault(),g.value=!0)}const H=V(()=>{const{value:i}=$,{self:{opacityDisabled:B,railColor:R,railColorActive:_,buttonBoxShadow:F,buttonColor:T,boxShadowFocus:J,loadingColor:ee,textColor:te,iconColor:ie,[f("buttonHeight",i)]:d,[f("buttonWidth",i)]:ae,[f("buttonWidthPressed",i)]:ne,[f("railHeight",i)]:u,[f("railWidth",i)]:k,[f("railBorderRadius",i)]:oe,[f("buttonBorderRadius",i)]:re},common:{cubicBezierEaseInOut:le}}=z.value;let N,K,W;return x?(N=`calc((${u} - ${d}) / 2)`,K=`max(${u}, ${d})`,W=`max(${k}, calc(${k} + ${d} - ${u}))`):(N=P((r(u)-r(d))/2),K=P(Math.max(r(u),r(d))),W=r(u)>r(d)?k:P(r(k)+r(d)-r(u))),{"--n-bezier":le,"--n-button-border-radius":re,"--n-button-box-shadow":F,"--n-button-color":T,"--n-button-width":ae,"--n-button-width-pressed":ne,"--n-button-height":d,"--n-height":K,"--n-offset":N,"--n-opacity-disabled":B,"--n-rail-border-radius":oe,"--n-rail-color":R,"--n-rail-color-active":_,"--n-rail-height":u,"--n-rail-width":k,"--n-width":W,"--n-box-shadow-focus":J,"--n-loading-color":ee,"--n-text-color":te,"--n-icon-color":ie}}),w=m?fe("switch",V(()=>$.value[0]),H,e):void 0;return{handleClick:Y,handleBlur:Q,handleFocus:q,handleKeyup:Z,handleKeydown:G,mergedRailStyle:s,pressed:g,mergedClsPrefix:S,mergedValue:b,checked:y,mergedDisabled:h,cssVars:m?void 0:H,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:S,checked:m,mergedRailStyle:z,onRender:l,$slots:$}=this;l==null||l();const{checked:h,unchecked:p,icon:C,"checked-icon":b,"unchecked-icon":y}=$,g=!(A(C)&&A(b)&&A(y));return n("div",{role:"switch","aria-checked":m,class:[`${e}-switch`,this.themeClass,g&&`${e}-switch--icon`,m&&`${e}-switch--active`,S&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},n("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:z},v(h,a=>v(p,s=>a||s?n("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),a),n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),s)):null)),n("div",{class:`${e}-switch__button`},v(C,a=>v(b,s=>v(y,c=>n(ve,null,{default:()=>this.loading?n(ge,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(s||a)?n("div",{class:`${e}-switch__button-icon`,key:s?"checked-icon":"icon"},s||a):!this.checked&&(c||a)?n("div",{class:`${e}-switch__button-icon`,key:c?"unchecked-icon":"icon"},c||a):null})))),v(h,a=>a&&n("div",{key:"checked",class:`${e}-switch__checked`},a)),v(p,a=>a&&n("div",{key:"unchecked",class:`${e}-switch__unchecked`},a)))))}});export{ye as N};
