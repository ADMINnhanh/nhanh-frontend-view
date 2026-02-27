import{d as D,l as p,m as le,c0 as te,p as V,g as K,aR as ae,E as Te,y as Y,D as $e,b2 as h,I as y,j as d,aj as Se,ak as Be,k as M,J as T,c6 as Ae,be as Me,c9 as De,aW as Ue,f as je,z as Ie,L as ie,dj as Fe,al as Pe,U as Q,N as He,b1 as Ke,c as E,o as G,W as $,ao as Ve,bi as Ee,A as Ge,q as Le,dh as Oe,ab as We,b as n,w as t,u as e,a1 as O,e as S,a2 as X,B as Z,a3 as F,R as qe,_ as Je}from"./index-BLf5CNBp.js";import{c as Ye}from"./headers-D9ke627I.js";import{H as ee}from"./HelpCircleOutline-B_BI_1i4.js";import{N as oe}from"./InputNumber-cVbS2VU4.js";import{N as ne}from"./Flex-C4-ZjijG.js";import{N as W}from"./p-DD-nHmZS.js";import{N as Qe}from"./text-CDylkr9z.js";import{N as re}from"./RadioGroup-BHunn4oc.js";import{N as q}from"./RadioButton-lZ09WnH1.js";import"./Input-CwAyHzh6.js";import"./Suffix-DzZbte5p.js";import"./use-locale-DuqdoS1F.js";const ce=$e("n-checkbox-group"),Xe={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},Ze=D({name:"CheckboxGroup",props:Xe,setup(r){const{mergedClsPrefixRef:c}=le(r),b=te(r),{mergedSizeRef:g,mergedDisabledRef:u}=b,v=V(r.defaultValue),k=K(()=>r.value),o=ae(k,v),a=K(()=>{var w;return((w=o.value)===null||w===void 0?void 0:w.length)||0}),i=K(()=>Array.isArray(o.value)?new Set(o.value):new Set);function B(w,s){const{nTriggerFormInput:N,nTriggerFormChange:C}=b,{onChange:f,"onUpdate:value":_,onUpdateValue:R}=r;if(Array.isArray(o.value)){const m=Array.from(o.value),P=m.findIndex(L=>L===s);w?~P||(m.push(s),R&&h(R,m,{actionType:"check",value:s}),_&&h(_,m,{actionType:"check",value:s}),N(),C(),v.value=m,f&&h(f,m)):~P&&(m.splice(P,1),R&&h(R,m,{actionType:"uncheck",value:s}),_&&h(_,m,{actionType:"uncheck",value:s}),f&&h(f,m),v.value=m,N(),C())}else w?(R&&h(R,[s],{actionType:"check",value:s}),_&&h(_,[s],{actionType:"check",value:s}),f&&h(f,[s]),v.value=[s],N(),C()):(R&&h(R,[],{actionType:"uncheck",value:s}),_&&h(_,[],{actionType:"uncheck",value:s}),f&&h(f,[]),v.value=[],N(),C())}return Te(ce,{checkedCountRef:a,maxRef:Y(r,"max"),minRef:Y(r,"min"),valueSetRef:i,disabledRef:u,mergedSizeRef:g,toggleCheckbox:B}),{mergedClsPrefix:c}},render(){return p("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),eo=()=>p("svg",{viewBox:"0 0 64 64",class:"check-icon"},p("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),oo=()=>p("svg",{viewBox:"0 0 100 100",class:"line-icon"},p("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),no=y([d("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[M("show-label","line-height: var(--n-label-line-height);"),y("&:hover",[d("checkbox-box",[T("border","border: var(--n-border-checked);")])]),y("&:focus:not(:active)",[d("checkbox-box",[T("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),M("inside-table",[d("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),M("checked",[d("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[d("checkbox-icon",[y(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),M("indeterminate",[d("checkbox-box",[d("checkbox-icon",[y(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),y(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),M("checked, indeterminate",[y("&:focus:not(:active)",[d("checkbox-box",[T("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),d("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[T("border",{border:"var(--n-border-checked)"})])]),M("disabled",{cursor:"not-allowed"},[M("checked",[d("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[T("border",{border:"var(--n-border-disabled-checked)"}),d("checkbox-icon",[y(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),d("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[T("border",`
 border: var(--n-border-disabled);
 `),d("checkbox-icon",[y(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),T("label",`
 color: var(--n-text-color-disabled);
 `)]),d("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),d("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[T("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),d("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[y(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),Ae({left:"1px",top:"1px"})])]),T("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[y("&:empty",{display:"none"})])]),Se(d("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Be(d("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),ro=Object.assign(Object.assign({},ie.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),H=D({name:"Checkbox",props:ro,setup(r){const c=je(ce,null),b=V(null),{mergedClsPrefixRef:g,inlineThemeDisabled:u,mergedRtlRef:v}=le(r),k=V(r.defaultChecked),o=Y(r,"checked"),a=ae(o,k),i=Ie(()=>{if(c){const l=c.valueSetRef.value;return l&&r.value!==void 0?l.has(r.value):!1}else return a.value===r.checkedValue}),B=te(r,{mergedSize(l){const{size:z}=r;if(z!==void 0)return z;if(c){const{value:x}=c.mergedSizeRef;if(x!==void 0)return x}if(l){const{mergedSize:x}=l;if(x!==void 0)return x.value}return"medium"},mergedDisabled(l){const{disabled:z}=r;if(z!==void 0)return z;if(c){if(c.disabledRef.value)return!0;const{maxRef:{value:x},checkedCountRef:A}=c;if(x!==void 0&&A.value>=x&&!i.value)return!0;const{minRef:{value:j}}=c;if(j!==void 0&&A.value<=j&&i.value)return!0}return l?l.disabled.value:!1}}),{mergedDisabledRef:w,mergedSizeRef:s}=B,N=ie("Checkbox","-checkbox",no,Fe,r,g);function C(l){if(c&&r.value!==void 0)c.toggleCheckbox(!i.value,r.value);else{const{onChange:z,"onUpdate:checked":x,onUpdateChecked:A}=r,{nTriggerFormInput:j,nTriggerFormChange:J}=B,I=i.value?r.uncheckedValue:r.checkedValue;x&&h(x,I,l),A&&h(A,I,l),z&&h(z,I,l),j(),J(),k.value=I}}function f(l){w.value||C(l)}function _(l){if(!w.value)switch(l.key){case" ":case"Enter":C(l)}}function R(l){switch(l.key){case" ":l.preventDefault()}}const m={focus:()=>{var l;(l=b.value)===null||l===void 0||l.focus()},blur:()=>{var l;(l=b.value)===null||l===void 0||l.blur()}},P=Pe("Checkbox",v,g),L=K(()=>{const{value:l}=s,{common:{cubicBezierEaseInOut:z},self:{borderRadius:x,color:A,colorChecked:j,colorDisabled:J,colorTableHeader:I,colorTableHeaderModal:se,colorTableHeaderPopover:de,checkMarkColor:ue,checkMarkColorDisabled:be,border:fe,borderFocus:he,borderDisabled:ve,borderChecked:ke,boxShadowFocus:me,textColor:xe,textColorDisabled:pe,checkMarkColorDisabledChecked:ge,colorDisabledChecked:we,borderDisabledChecked:ye,labelPadding:Ce,labelLineHeight:_e,labelFontWeight:Re,[Q("fontSize",l)]:ze,[Q("size",l)]:Ne}}=N.value;return{"--n-label-line-height":_e,"--n-label-font-weight":Re,"--n-size":Ne,"--n-bezier":z,"--n-border-radius":x,"--n-border":fe,"--n-border-checked":ke,"--n-border-focus":he,"--n-border-disabled":ve,"--n-border-disabled-checked":ye,"--n-box-shadow-focus":me,"--n-color":A,"--n-color-checked":j,"--n-color-table":I,"--n-color-table-modal":se,"--n-color-table-popover":de,"--n-color-disabled":J,"--n-color-disabled-checked":we,"--n-text-color":xe,"--n-text-color-disabled":pe,"--n-check-mark-color":ue,"--n-check-mark-color-disabled":be,"--n-check-mark-color-disabled-checked":ge,"--n-font-size":ze,"--n-label-padding":Ce}}),U=u?He("checkbox",K(()=>s.value[0]),L,r):void 0;return Object.assign(B,m,{rtlEnabled:P,selfRef:b,mergedClsPrefix:g,mergedDisabled:w,renderedChecked:i,mergedTheme:N,labelId:Ke(),handleClick:f,handleKeyUp:_,handleKeyDown:R,cssVars:u?void 0:L,themeClass:U==null?void 0:U.themeClass,onRender:U==null?void 0:U.onRender})},render(){var r;const{$slots:c,renderedChecked:b,mergedDisabled:g,indeterminate:u,privateInsideTable:v,cssVars:k,labelId:o,label:a,mergedClsPrefix:i,focusable:B,handleKeyUp:w,handleKeyDown:s,handleClick:N}=this;(r=this.onRender)===null||r===void 0||r.call(this);const C=Me(c.default,f=>a||f?p("span",{class:`${i}-checkbox__label`,id:o},a||f):null);return p("div",{ref:"selfRef",class:[`${i}-checkbox`,this.themeClass,this.rtlEnabled&&`${i}-checkbox--rtl`,b&&`${i}-checkbox--checked`,g&&`${i}-checkbox--disabled`,u&&`${i}-checkbox--indeterminate`,v&&`${i}-checkbox--inside-table`,C&&`${i}-checkbox--show-label`],tabindex:g||!B?void 0:0,role:"checkbox","aria-checked":u?"mixed":b,"aria-labelledby":o,style:k,onKeyup:w,onKeydown:s,onClick:N,onMousedown:()=>{Ue("selectstart",window,f=>{f.preventDefault()},{once:!0})}},p("div",{class:`${i}-checkbox-box-wrapper`}," ",p("div",{class:`${i}-checkbox-box`},p(De,null,{default:()=>this.indeterminate?p("div",{key:"indeterminate",class:`${i}-checkbox-icon`},oo()):p("div",{key:"check",class:`${i}-checkbox-icon`},eo())}),p("div",{class:`${i}-checkbox-box__border`}))),C)}}),lo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},to=$("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M244 400L100 256l144-144"},null,-1),ao=$("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M120 256h292"},null,-1),io=[to,ao],co=D({name:"ArrowBack",render:function(c,b){return G(),E("svg",lo,io)}}),so={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},uo=$("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M112 268l144 144l144-144"},null,-1),bo=$("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M256 392V100"},null,-1),fo=[uo,bo],ho=D({name:"ArrowDown",render:function(c,b){return G(),E("svg",so,fo)}}),vo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ko=$("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M268 112l144 144l-144 144"},null,-1),mo=$("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M392 256H100"},null,-1),xo=[ko,mo],po=D({name:"ArrowForward",render:function(c,b){return G(),E("svg",vo,xo)}}),go={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},wo=$("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M112 244l144-144l144 144"},null,-1),yo=$("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M256 120v292"},null,-1),Co=[wo,yo],_o=D({name:"ArrowUp",render:function(c,b){return G(),E("svg",go,Co)}}),Ro=["id"],zo=D({__name:"axis",setup(r,{expose:c}){const b=Ve(),g=V(["all","grid.main","grid.secondary","axis","axisText"]),u=V({x:1,y:1,count:2,min:100,size:100});let v=Ee();return Ge(()=>[g.value,u.value],([k,o])=>{const a={...o};a.min%5==0?a.size=a.min:Object.assign(a,{min:void 0,size:void 0}),v.value.setAxis(a),v.value.toggleAxis({all:k.includes("all"),grid:{main:k.includes("grid.main"),secondary:k.includes("grid.secondary")},axis:k.includes("axis"),axisText:k.includes("axisText")})},{deep:!0}),Le(()=>{v.value=new Oe({id:b,theme:We.value.theme})}),c({myCanvas:v}),(k,o)=>(G(),E(qe,null,[n(e(O),{vertical:"",style:{"margin-bottom":"10px"}},{default:t(()=>[n(e(Ze),{value:g.value,"onUpdate:value":o[0]||(o[0]=a=>g.value=a)},{default:t(()=>[n(e(O),null,{default:t(()=>[n(e(H),{value:"all",label:"全部"}),n(e(H),{value:"grid.main",label:"网格 - 主要的 "}),n(e(H),{value:"grid.secondary",label:"网格 - 次要的"}),n(e(H),{value:"axis",label:"x 、y 轴显示"}),n(e(H),{value:"axisText",label:"x 、y 轴文字显示"})]),_:1})]),_:1},8,["value"]),n(e(O),null,{default:t(()=>[n(e(oe),{value:u.value.min,"onUpdate:value":o[1]||(o[1]=a=>u.value.min=a),min:"5"},{prefix:t(()=>[n(e(ne),{style:{width:"125px"}},{default:t(()=>[o[9]||(o[9]=S(" 网格 min size ",-1)),n(e(X),{trigger:"hover"},{trigger:t(()=>[n(e(Z),{text:""},{icon:t(()=>[n(e(F),{component:e(ee)},null,8,["component"])]),_:1})]),default:t(()=>[n(e(Ye),null,{default:t(()=>[...o[5]||(o[5]=[S("网格大小设定规则：",-1)])]),_:1}),n(e(W),null,{default:t(()=>[...o[6]||(o[6]=[S(" 1. 基于 count 计算的网格，其内部会被均匀划分为 5 个子网格。 ",-1)])]),_:1}),n(e(W),null,{default:t(()=>[...o[7]||(o[7]=[S(" 2. 为确保网格在绘制时网格线正常显示，且在缩放操作时能实现平滑过渡 ",-1)])]),_:1}),n(e(W),{style:{"padding-left":"20px"}},{default:t(()=>[n(e(Qe),null,{default:t(()=>[...o[8]||(o[8]=[S(" min 必须是 5 的整数倍，即 min % 5 === 0。 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),suffix:t(()=>[...o[10]||(o[10]=[S("px",-1)])]),_:1},8,["value"]),n(e(oe),{value:u.value.count,"onUpdate:value":o[2]||(o[2]=a=>u.value.count=a),min:.1},{prefix:t(()=>[n(e(ne),{style:{width:"125px"}},{default:t(()=>[o[12]||(o[12]=S(" 网格 value ",-1)),n(e(X),{trigger:"hover"},{trigger:t(()=>[n(e(Z),{text:""},{icon:t(()=>[n(e(F),{component:e(ee)},null,8,["component"])]),_:1})]),default:t(()=>[n(e(W),null,{default:t(()=>[...o[11]||(o[11]=[S("滚轮滚动周期为 0 时单网格代表的数字",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),n(e(O),null,{default:t(()=>[n(e(re),{value:u.value.x,"onUpdate:value":o[3]||(o[3]=a=>u.value.x=a)},{default:t(()=>[n(e(q),{value:-1},{default:t(()=>[n(e(F),{component:e(co)},null,8,["component"])]),_:1}),n(e(q),{value:1},{default:t(()=>[n(e(F),{component:e(po)},null,8,["component"])]),_:1})]),_:1},8,["value"]),n(e(re),{value:u.value.y,"onUpdate:value":o[4]||(o[4]=a=>u.value.y=a)},{default:t(()=>[n(e(q),{value:1},{default:t(()=>[n(e(F),{component:e(ho)},null,8,["component"])]),_:1}),n(e(q),{value:-1},{default:t(()=>[n(e(F),{component:e(_o)},null,8,["component"])]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),$("canvas",{id:e(b),class:"my-canvas"},null,8,Ro)],64))}}),Po=Je(zo,[["__scopeId","data-v-edb90c50"]]);export{Po as default};
