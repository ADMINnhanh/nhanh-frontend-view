import{d as B,l as p,m as le,bY as te,p as O,g as E,aR as ae,E as Ne,y as J,D as Se,b2 as f,I as C,j as d,aj as Te,ak as Be,k as D,J as S,c2 as Ae,be as Me,c5 as De,aW as Ue,f as je,z as Ie,L as ie,dh as Fe,al as Pe,U as Q,N as He,b1 as Ke,c as P,o as H,W as _,ao as Ve,cd as Ee,A as Oe,q as Ge,df as Le,ab as We,b as n,w as t,u as e,a1 as L,e as T,a2 as X,B as Z,a3 as F,R as Ye,_ as qe}from"./index-DJ1i5KOp.js";import{b as Je}from"./headers-DYnOng5p.js";import{N as ee}from"./InputNumber-CfXp4nxX.js";import{N as oe}from"./Flex-D4T6W4-C.js";import{N as W}from"./p-D5slj3G6.js";import{N as Qe}from"./text-BBEnx1FW.js";import{N as ne}from"./RadioGroup-DuAET5W1.js";import{N as Y}from"./RadioButton-9-DEgwy9.js";import"./Input-CrW7KBi3.js";import"./Suffix-zzuSc3rj.js";import"./use-locale-q1X7O_TX.js";const ce=Se("n-checkbox-group"),Xe={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},Ze=B({name:"CheckboxGroup",props:Xe,setup(r){const{mergedClsPrefixRef:i}=le(r),u=te(r),{mergedSizeRef:g,mergedDisabledRef:b}=u,v=O(r.defaultValue),k=E(()=>r.value),o=ae(k,v),a=E(()=>{var w;return((w=o.value)===null||w===void 0?void 0:w.length)||0}),c=E(()=>Array.isArray(o.value)?new Set(o.value):new Set);function A(w,s){const{nTriggerFormInput:N,nTriggerFormChange:y}=u,{onChange:h,"onUpdate:value":R,onUpdateValue:z}=r;if(Array.isArray(o.value)){const m=Array.from(o.value),K=m.findIndex(G=>G===s);w?~K||(m.push(s),z&&f(z,m,{actionType:"check",value:s}),R&&f(R,m,{actionType:"check",value:s}),N(),y(),v.value=m,h&&f(h,m)):~K&&(m.splice(K,1),z&&f(z,m,{actionType:"uncheck",value:s}),R&&f(R,m,{actionType:"uncheck",value:s}),h&&f(h,m),v.value=m,N(),y())}else w?(z&&f(z,[s],{actionType:"check",value:s}),R&&f(R,[s],{actionType:"check",value:s}),h&&f(h,[s]),v.value=[s],N(),y()):(z&&f(z,[],{actionType:"uncheck",value:s}),R&&f(R,[],{actionType:"uncheck",value:s}),h&&f(h,[]),v.value=[],N(),y())}return Ne(ce,{checkedCountRef:a,maxRef:J(r,"max"),minRef:J(r,"min"),valueSetRef:c,disabledRef:b,mergedSizeRef:g,toggleCheckbox:A}),{mergedClsPrefix:i}},render(){return p("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),eo=()=>p("svg",{viewBox:"0 0 64 64",class:"check-icon"},p("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),oo=()=>p("svg",{viewBox:"0 0 100 100",class:"line-icon"},p("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),no=C([d("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[D("show-label","line-height: var(--n-label-line-height);"),C("&:hover",[d("checkbox-box",[S("border","border: var(--n-border-checked);")])]),C("&:focus:not(:active)",[d("checkbox-box",[S("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),D("inside-table",[d("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),D("checked",[d("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[d("checkbox-icon",[C(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),D("indeterminate",[d("checkbox-box",[d("checkbox-icon",[C(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),C(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),D("checked, indeterminate",[C("&:focus:not(:active)",[d("checkbox-box",[S("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),d("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[S("border",{border:"var(--n-border-checked)"})])]),D("disabled",{cursor:"not-allowed"},[D("checked",[d("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[S("border",{border:"var(--n-border-disabled-checked)"}),d("checkbox-icon",[C(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),d("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[S("border",`
 border: var(--n-border-disabled);
 `),d("checkbox-icon",[C(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),S("label",`
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
 `,[S("border",`
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
 `,[C(".check-icon, .line-icon",`
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
 `),Ae({left:"1px",top:"1px"})])]),S("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[C("&:empty",{display:"none"})])]),Te(d("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Be(d("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),ro=Object.assign(Object.assign({},ie.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),V=B({name:"Checkbox",props:ro,setup(r){const i=je(ce,null),u=O(null),{mergedClsPrefixRef:g,inlineThemeDisabled:b,mergedRtlRef:v}=le(r),k=O(r.defaultChecked),o=J(r,"checked"),a=ae(o,k),c=Ie(()=>{if(i){const l=i.valueSetRef.value;return l&&r.value!==void 0?l.has(r.value):!1}else return a.value===r.checkedValue}),A=te(r,{mergedSize(l){const{size:$}=r;if($!==void 0)return $;if(i){const{value:x}=i.mergedSizeRef;if(x!==void 0)return x}if(l){const{mergedSize:x}=l;if(x!==void 0)return x.value}return"medium"},mergedDisabled(l){const{disabled:$}=r;if($!==void 0)return $;if(i){if(i.disabledRef.value)return!0;const{maxRef:{value:x},checkedCountRef:M}=i;if(x!==void 0&&M.value>=x&&!c.value)return!0;const{minRef:{value:j}}=i;if(j!==void 0&&M.value<=j&&c.value)return!0}return l?l.disabled.value:!1}}),{mergedDisabledRef:w,mergedSizeRef:s}=A,N=ie("Checkbox","-checkbox",no,Fe,r,g);function y(l){if(i&&r.value!==void 0)i.toggleCheckbox(!c.value,r.value);else{const{onChange:$,"onUpdate:checked":x,onUpdateChecked:M}=r,{nTriggerFormInput:j,nTriggerFormChange:q}=A,I=c.value?r.uncheckedValue:r.checkedValue;x&&f(x,I,l),M&&f(M,I,l),$&&f($,I,l),j(),q(),k.value=I}}function h(l){w.value||y(l)}function R(l){if(!w.value)switch(l.key){case" ":case"Enter":y(l)}}function z(l){switch(l.key){case" ":l.preventDefault()}}const m={focus:()=>{var l;(l=u.value)===null||l===void 0||l.focus()},blur:()=>{var l;(l=u.value)===null||l===void 0||l.blur()}},K=Pe("Checkbox",v,g),G=E(()=>{const{value:l}=s,{common:{cubicBezierEaseInOut:$},self:{borderRadius:x,color:M,colorChecked:j,colorDisabled:q,colorTableHeader:I,colorTableHeaderModal:se,colorTableHeaderPopover:de,checkMarkColor:ue,checkMarkColorDisabled:be,border:he,borderFocus:fe,borderDisabled:ve,borderChecked:ke,boxShadowFocus:me,textColor:xe,textColorDisabled:pe,checkMarkColorDisabledChecked:ge,colorDisabledChecked:we,borderDisabledChecked:_e,labelPadding:Ce,labelLineHeight:ye,labelFontWeight:Re,[Q("fontSize",l)]:ze,[Q("size",l)]:$e}}=N.value;return{"--n-label-line-height":ye,"--n-label-font-weight":Re,"--n-size":$e,"--n-bezier":$,"--n-border-radius":x,"--n-border":he,"--n-border-checked":ke,"--n-border-focus":fe,"--n-border-disabled":ve,"--n-border-disabled-checked":_e,"--n-box-shadow-focus":me,"--n-color":M,"--n-color-checked":j,"--n-color-table":I,"--n-color-table-modal":se,"--n-color-table-popover":de,"--n-color-disabled":q,"--n-color-disabled-checked":we,"--n-text-color":xe,"--n-text-color-disabled":pe,"--n-check-mark-color":ue,"--n-check-mark-color-disabled":be,"--n-check-mark-color-disabled-checked":ge,"--n-font-size":ze,"--n-label-padding":Ce}}),U=b?He("checkbox",E(()=>s.value[0]),G,r):void 0;return Object.assign(A,m,{rtlEnabled:K,selfRef:u,mergedClsPrefix:g,mergedDisabled:w,renderedChecked:c,mergedTheme:N,labelId:Ke(),handleClick:h,handleKeyUp:R,handleKeyDown:z,cssVars:b?void 0:G,themeClass:U==null?void 0:U.themeClass,onRender:U==null?void 0:U.onRender})},render(){var r;const{$slots:i,renderedChecked:u,mergedDisabled:g,indeterminate:b,privateInsideTable:v,cssVars:k,labelId:o,label:a,mergedClsPrefix:c,focusable:A,handleKeyUp:w,handleKeyDown:s,handleClick:N}=this;(r=this.onRender)===null||r===void 0||r.call(this);const y=Me(i.default,h=>a||h?p("span",{class:`${c}-checkbox__label`,id:o},a||h):null);return p("div",{ref:"selfRef",class:[`${c}-checkbox`,this.themeClass,this.rtlEnabled&&`${c}-checkbox--rtl`,u&&`${c}-checkbox--checked`,g&&`${c}-checkbox--disabled`,b&&`${c}-checkbox--indeterminate`,v&&`${c}-checkbox--inside-table`,y&&`${c}-checkbox--show-label`],tabindex:g||!A?void 0:0,role:"checkbox","aria-checked":b?"mixed":u,"aria-labelledby":o,style:k,onKeyup:w,onKeydown:s,onClick:N,onMousedown:()=>{Ue("selectstart",window,h=>{h.preventDefault()},{once:!0})}},p("div",{class:`${c}-checkbox-box-wrapper`}," ",p("div",{class:`${c}-checkbox-box`},p(De,null,{default:()=>this.indeterminate?p("div",{key:"indeterminate",class:`${c}-checkbox-icon`},oo()):p("div",{key:"check",class:`${c}-checkbox-icon`},eo())}),p("div",{class:`${c}-checkbox-box__border`}))),y)}}),lo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},to=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M244 400L100 256l144-144"},null,-1),ao=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M120 256h292"},null,-1),io=[to,ao],co=B({name:"ArrowBack",render:function(i,u){return H(),P("svg",lo,io)}}),so={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},uo=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M112 268l144 144l144-144"},null,-1),bo=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M256 392V100"},null,-1),ho=[uo,bo],fo=B({name:"ArrowDown",render:function(i,u){return H(),P("svg",so,ho)}}),vo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ko=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M268 112l144 144l-144 144"},null,-1),mo=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M392 256H100"},null,-1),xo=[ko,mo],po=B({name:"ArrowForward",render:function(i,u){return H(),P("svg",vo,xo)}}),go={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},wo=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M112 244l144-144l144 144"},null,-1),_o=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M256 120v292"},null,-1),Co=[wo,_o],yo=B({name:"ArrowUp",render:function(i,u){return H(),P("svg",go,Co)}}),Ro={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},zo=_("path",{d:"M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),$o=_("path",{d:"M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45c10 4.76 29.47 16.38 29.47 41.09c0 26-17 37.81-36.37 50.8S251 281.43 251 296",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"28"},null,-1),No=_("circle",{cx:"250",cy:"348",r:"20",fill:"currentColor"},null,-1),So=[zo,$o,No],re=B({name:"HelpCircleOutline",render:function(i,u){return H(),P("svg",Ro,So)}}),To=["id"],Bo=B({__name:"axis",setup(r,{expose:i}){const u=Ve(),g=O(["all","grid.main","grid.secondary","axis","axisText"]),b=O({x:1,y:1,count:2,min:100,size:100});let v=Ee();return Oe(()=>[g.value,b.value],([k,o])=>{const a={...o};a.min%5==0?a.size=a.min:Object.assign(a,{min:void 0,size:void 0}),v.value.setAxis(a),v.value.toggleAxis({all:k.includes("all"),grid:{main:k.includes("grid.main"),secondary:k.includes("grid.secondary")},axis:k.includes("axis"),axisText:k.includes("axisText")})},{deep:!0}),Ge(()=>{v.value=new Le({id:u,theme:We.value.theme})}),i({myCanvas:v}),(k,o)=>(H(),P(Ye,null,[n(e(L),{vertical:"",style:{"margin-bottom":"10px"}},{default:t(()=>[n(e(Ze),{value:g.value,"onUpdate:value":o[0]||(o[0]=a=>g.value=a)},{default:t(()=>[n(e(L),null,{default:t(()=>[n(e(V),{value:"all",label:"全部"}),n(e(V),{value:"grid.main",label:"网格 - 主要的 "}),n(e(V),{value:"grid.secondary",label:"网格 - 次要的"}),n(e(V),{value:"axis",label:"x 、y 轴显示"}),n(e(V),{value:"axisText",label:"x 、y 轴文字显示"})]),_:1})]),_:1},8,["value"]),n(e(L),null,{default:t(()=>[n(e(ee),{value:b.value.min,"onUpdate:value":o[1]||(o[1]=a=>b.value.min=a),min:"5"},{prefix:t(()=>[n(e(oe),{style:{width:"125px"}},{default:t(()=>[o[9]||(o[9]=T(" 网格 min size ",-1)),n(e(X),{trigger:"hover"},{trigger:t(()=>[n(e(Z),{text:""},{icon:t(()=>[n(e(F),{component:e(re)},null,8,["component"])]),_:1})]),default:t(()=>[n(e(Je),null,{default:t(()=>[...o[5]||(o[5]=[T("网格大小设定规则：",-1)])]),_:1}),n(e(W),null,{default:t(()=>[...o[6]||(o[6]=[T(" 1. 基于 count 计算的网格，其内部会被均匀划分为 5 个子网格。 ",-1)])]),_:1}),n(e(W),null,{default:t(()=>[...o[7]||(o[7]=[T(" 2. 为确保网格在绘制时网格线正常显示，且在缩放操作时能实现平滑过渡 ",-1)])]),_:1}),n(e(W),{style:{"padding-left":"20px"}},{default:t(()=>[n(e(Qe),null,{default:t(()=>[...o[8]||(o[8]=[T(" min 必须是 5 的整数倍，即 min % 5 === 0。 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),suffix:t(()=>[...o[10]||(o[10]=[T("px",-1)])]),_:1},8,["value"]),n(e(ee),{value:b.value.count,"onUpdate:value":o[2]||(o[2]=a=>b.value.count=a),min:.1},{prefix:t(()=>[n(e(oe),{style:{width:"125px"}},{default:t(()=>[o[12]||(o[12]=T(" 网格 value ",-1)),n(e(X),{trigger:"hover"},{trigger:t(()=>[n(e(Z),{text:""},{icon:t(()=>[n(e(F),{component:e(re)},null,8,["component"])]),_:1})]),default:t(()=>[n(e(W),null,{default:t(()=>[...o[11]||(o[11]=[T("滚轮滚动周期为 0 时单网格代表的数字",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),n(e(L),null,{default:t(()=>[n(e(ne),{value:b.value.x,"onUpdate:value":o[3]||(o[3]=a=>b.value.x=a)},{default:t(()=>[n(e(Y),{value:-1},{default:t(()=>[n(e(F),{component:e(co)},null,8,["component"])]),_:1}),n(e(Y),{value:1},{default:t(()=>[n(e(F),{component:e(po)},null,8,["component"])]),_:1})]),_:1},8,["value"]),n(e(ne),{value:b.value.y,"onUpdate:value":o[4]||(o[4]=a=>b.value.y=a)},{default:t(()=>[n(e(Y),{value:1},{default:t(()=>[n(e(F),{component:e(fo)},null,8,["component"])]),_:1}),n(e(Y),{value:-1},{default:t(()=>[n(e(F),{component:e(yo)},null,8,["component"])]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),_("canvas",{id:e(u),class:"my-canvas"},null,8,To)],64))}}),Eo=qe(Bo,[["__scopeId","data-v-edb90c50"]]);export{Eo as default};
