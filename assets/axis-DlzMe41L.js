import{s as g,d as K,l as q,ay as le,n as j,h as U,aA as ie,G as Be,D as Z,C as Ae,aK as m,z as x,j as h,k as N,A as S,b7 as De,aU as Ue,aV as Fe,f as Me,E as Pe,J as G,cm as Ie,aW as Ve,P as D,L as ce,aS as He,bn as je,b5 as Ke,ap as Oe,cn as Ee,o as se,c as de,V as Y,ba as Le,F as Q,bv as X,p as We,a as n,w as i,u as e,Y as E,e as B,Z as ee,B as oe,$ as I,U as Ge,_ as Ye}from"./index-BkR46lIp.js";import{_ as Je}from"./index-r40iqb4e.js";import{N as ne}from"./InputNumber-B3YbTCsw.js";import{N as L}from"./p-ByDnZuca.js";import{A as Ze,a as qe,b as Qe,c as Xe}from"./ArrowUp-UxknLKf3.js";import{N as re}from"./Flex-B4SbrQFv.js";import{N as eo}from"./text-CniX64gf.js";import{N as ae,a as W}from"./RadioButton-CPMfgZyg.js";import"./Suffix-pNY0STD_.js";import"./Input-CpJcIgnY.js";import"./Add-X1iR_OYX.js";const oo=g("svg",{viewBox:"0 0 64 64",class:"check-icon"},g("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),no=g("svg",{viewBox:"0 0 100 100",class:"line-icon"},g("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),ue=Ae("n-checkbox-group"),ro={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},ao=K({name:"CheckboxGroup",props:ro,setup(o){const{mergedClsPrefixRef:a}=q(o),f=le(o),{mergedSizeRef:c,mergedDisabledRef:u}=f,s=j(o.defaultValue),t=U(()=>o.value),l=ie(t,s),$=U(()=>{var k;return((k=l.value)===null||k===void 0?void 0:k.length)||0}),d=U(()=>Array.isArray(l.value)?new Set(l.value):new Set);function T(k,b){const{nTriggerFormInput:w,nTriggerFormChange:C}=f,{onChange:v,"onUpdate:value":_,onUpdateValue:z}=o;if(Array.isArray(l.value)){const p=Array.from(l.value),V=p.findIndex(O=>O===b);k?~V||(p.push(b),z&&m(z,p,{actionType:"check",value:b}),_&&m(_,p,{actionType:"check",value:b}),w(),C(),s.value=p,v&&m(v,p)):~V&&(p.splice(V,1),z&&m(z,p,{actionType:"uncheck",value:b}),_&&m(_,p,{actionType:"uncheck",value:b}),v&&m(v,p),s.value=p,w(),C())}else k?(z&&m(z,[b],{actionType:"check",value:b}),_&&m(_,[b],{actionType:"check",value:b}),v&&m(v,[b]),s.value=[b],w(),C()):(z&&m(z,[],{actionType:"uncheck",value:b}),_&&m(_,[],{actionType:"uncheck",value:b}),v&&m(v,[]),s.value=[],w(),C())}return Be(ue,{checkedCountRef:$,maxRef:Z(o,"max"),minRef:Z(o,"min"),valueSetRef:d,disabledRef:u,mergedSizeRef:c,toggleCheckbox:T}),{mergedClsPrefix:a}},render(){return g("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),to=x([h("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[N("show-label","line-height: var(--n-label-line-height);"),x("&:hover",[h("checkbox-box",[S("border","border: var(--n-border-checked);")])]),x("&:focus:not(:active)",[h("checkbox-box",[S("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),N("inside-table",[h("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),N("checked",[h("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[h("checkbox-icon",[x(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),N("indeterminate",[h("checkbox-box",[h("checkbox-icon",[x(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),x(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),N("checked, indeterminate",[x("&:focus:not(:active)",[h("checkbox-box",[S("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),h("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[S("border",{border:"var(--n-border-checked)"})])]),N("disabled",{cursor:"not-allowed"},[N("checked",[h("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[S("border",{border:"var(--n-border-disabled-checked)"}),h("checkbox-icon",[x(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),h("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[S("border",`
 border: var(--n-border-disabled);
 `),h("checkbox-icon",[x(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),S("label",`
 color: var(--n-text-color-disabled);
 `)]),h("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),h("checkbox-box",`
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
 `),h("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[x(".check-icon, .line-icon",`
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
 `),De({left:"1px",top:"1px"})])]),S("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[x("&:empty",{display:"none"})])]),Ue(h("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Fe(h("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),lo=Object.assign(Object.assign({},G.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),H=K({name:"Checkbox",props:lo,setup(o){const a=Me(ue,null),f=j(null),{mergedClsPrefixRef:c,inlineThemeDisabled:u,mergedRtlRef:s}=q(o),t=j(o.defaultChecked),l=Z(o,"checked"),$=ie(l,t),d=Pe(()=>{if(a){const r=a.valueSetRef.value;return r&&o.value!==void 0?r.has(o.value):!1}else return $.value===o.checkedValue}),T=le(o,{mergedSize(r){const{size:R}=o;if(R!==void 0)return R;if(a){const{value:y}=a.mergedSizeRef;if(y!==void 0)return y}if(r){const{mergedSize:y}=r;if(y!==void 0)return y.value}return"medium"},mergedDisabled(r){const{disabled:R}=o;if(R!==void 0)return R;if(a){if(a.disabledRef.value)return!0;const{maxRef:{value:y},checkedCountRef:A}=a;if(y!==void 0&&A.value>=y&&!d.value)return!0;const{minRef:{value:M}}=a;if(M!==void 0&&A.value<=M&&d.value)return!0}return r?r.disabled.value:!1}}),{mergedDisabledRef:k,mergedSizeRef:b}=T,w=G("Checkbox","-checkbox",to,Ie,o,c);function C(r){if(a&&o.value!==void 0)a.toggleCheckbox(!d.value,o.value);else{const{onChange:R,"onUpdate:checked":y,onUpdateChecked:A}=o,{nTriggerFormInput:M,nTriggerFormChange:J}=T,P=d.value?o.uncheckedValue:o.checkedValue;y&&m(y,P,r),A&&m(A,P,r),R&&m(R,P,r),M(),J(),t.value=P}}function v(r){k.value||C(r)}function _(r){if(!k.value)switch(r.key){case" ":case"Enter":C(r)}}function z(r){switch(r.key){case" ":r.preventDefault()}}const p={focus:()=>{var r;(r=f.value)===null||r===void 0||r.focus()},blur:()=>{var r;(r=f.value)===null||r===void 0||r.blur()}},V=Ve("Checkbox",s,c),O=U(()=>{const{value:r}=b,{common:{cubicBezierEaseInOut:R},self:{borderRadius:y,color:A,colorChecked:M,colorDisabled:J,colorTableHeader:P,colorTableHeaderModal:be,colorTableHeaderPopover:he,checkMarkColor:fe,checkMarkColorDisabled:ve,border:me,borderFocus:xe,borderDisabled:ke,borderChecked:ge,boxShadowFocus:pe,textColor:ye,textColorDisabled:Ce,checkMarkColorDisabledChecked:we,colorDisabledChecked:_e,borderDisabledChecked:ze,labelPadding:Re,labelLineHeight:Te,labelFontWeight:Se,[D("fontSize",r)]:Ne,[D("size",r)]:$e}}=w.value;return{"--n-label-line-height":Te,"--n-label-font-weight":Se,"--n-size":$e,"--n-bezier":R,"--n-border-radius":y,"--n-border":me,"--n-border-checked":ge,"--n-border-focus":xe,"--n-border-disabled":ke,"--n-border-disabled-checked":ze,"--n-box-shadow-focus":pe,"--n-color":A,"--n-color-checked":M,"--n-color-table":P,"--n-color-table-modal":be,"--n-color-table-popover":he,"--n-color-disabled":J,"--n-color-disabled-checked":_e,"--n-text-color":ye,"--n-text-color-disabled":Ce,"--n-check-mark-color":fe,"--n-check-mark-color-disabled":ve,"--n-check-mark-color-disabled-checked":we,"--n-font-size":Ne,"--n-label-padding":Re}}),F=u?ce("checkbox",U(()=>b.value[0]),O,o):void 0;return Object.assign(T,p,{rtlEnabled:V,selfRef:f,mergedClsPrefix:c,mergedDisabled:k,renderedChecked:d,mergedTheme:w,labelId:He(),handleClick:v,handleKeyUp:_,handleKeyDown:z,cssVars:u?void 0:O,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender})},render(){var o;const{$slots:a,renderedChecked:f,mergedDisabled:c,indeterminate:u,privateInsideTable:s,cssVars:t,labelId:l,label:$,mergedClsPrefix:d,focusable:T,handleKeyUp:k,handleKeyDown:b,handleClick:w}=this;(o=this.onRender)===null||o===void 0||o.call(this);const C=je(a.default,v=>$||v?g("span",{class:`${d}-checkbox__label`,id:l},$||v):null);return g("div",{ref:"selfRef",class:[`${d}-checkbox`,this.themeClass,this.rtlEnabled&&`${d}-checkbox--rtl`,f&&`${d}-checkbox--checked`,c&&`${d}-checkbox--disabled`,u&&`${d}-checkbox--indeterminate`,s&&`${d}-checkbox--inside-table`,C&&`${d}-checkbox--show-label`],tabindex:c||!T?void 0:0,role:"checkbox","aria-checked":u?"mixed":f,"aria-labelledby":l,style:t,onKeyup:k,onKeydown:b,onClick:w,onMousedown:()=>{Oe("selectstart",window,v=>{v.preventDefault()},{once:!0})}},g("div",{class:`${d}-checkbox-box-wrapper`}," ",g("div",{class:`${d}-checkbox-box`},g(Ke,null,{default:()=>this.indeterminate?g("div",{key:"indeterminate",class:`${d}-checkbox-icon`},no):g("div",{key:"check",class:`${d}-checkbox-icon`},oo)}),g("div",{class:`${d}-checkbox-box__border`}))),C)}}),io=h("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[x("&:first-child",{marginTop:0}),N("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[N("align-text",{paddingLeft:0},[x("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),x("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),x("&::before",{backgroundColor:"var(--n-bar-color)"})])]),co=Object.assign(Object.assign({},G.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),so=o=>K({name:`H${o}`,props:co,setup(a){const{mergedClsPrefixRef:f,inlineThemeDisabled:c}=q(a),u=G("Typography","-h",io,Ee,a,f),s=U(()=>{const{type:l}=a,{common:{cubicBezierEaseInOut:$},self:{headerFontWeight:d,headerTextColor:T,[D("headerPrefixWidth",o)]:k,[D("headerFontSize",o)]:b,[D("headerMargin",o)]:w,[D("headerBarWidth",o)]:C,[D("headerBarColor",l)]:v}}=u.value;return{"--n-bezier":$,"--n-font-size":b,"--n-margin":w,"--n-bar-color":v,"--n-bar-width":C,"--n-font-weight":d,"--n-text-color":T,"--n-prefix-width":k}}),t=c?ce(`h${o}`,U(()=>a.type[0]),s,a):void 0;return{mergedClsPrefix:f,cssVars:c?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var a;const{prefix:f,alignText:c,mergedClsPrefix:u,cssVars:s,$slots:t}=this;return(a=this.onRender)===null||a===void 0||a.call(this),g(`h${o}`,{class:[`${u}-h`,`${u}-h${o}`,this.themeClass,{[`${u}-h--prefix-bar`]:f,[`${u}-h--align-text`]:c}],style:s},t)}}),uo=so("4"),bo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ho=Y("path",{d:"M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),fo=Y("path",{d:"M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45c10 4.76 29.47 16.38 29.47 41.09c0 26-17 37.81-36.37 50.8S251 281.43 251 296",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"28"},null,-1),vo=Y("circle",{cx:"250",cy:"348",r:"20",fill:"currentColor"},null,-1),mo=[ho,fo,vo],te=K({name:"HelpCircleOutline",render:function(a,f){return se(),de("svg",bo,mo)}}),xo=["id"],ko=K({__name:"axis",setup(o){const a=Le(),f=j(["all","grid.main","grid.secondary","axis","axisText"]),c=j({x:1,y:1,count:2,min:100,size:100});let u;return Q(()=>X.value.theme,s=>u==null?void 0:u.setTheme(s)),Q(()=>[f.value,c.value],([s,t])=>{const l={...t};l.min%5==0?l.size=l.min:Object.assign(l,{min:void 0,size:void 0}),u.setAxis(l),u.toggleAxis({all:s.includes("all"),grid:{main:s.includes("grid.main"),secondary:s.includes("grid.secondary")},axis:s.includes("axis"),axisText:s.includes("axisText")})},{deep:!0}),We(()=>{u=new Je(a),u.setTheme(X.value.theme)}),(s,t)=>(se(),de(Ge,null,[n(e(E),{vertical:"",style:{"margin-bottom":"10px"}},{default:i(()=>[n(e(ao),{value:f.value,"onUpdate:value":t[0]||(t[0]=l=>f.value=l)},{default:i(()=>[n(e(E),null,{default:i(()=>[n(e(H),{value:"all",label:"全部"}),n(e(H),{value:"grid.main",label:"网格 - 主要的 "}),n(e(H),{value:"grid.secondary",label:"网格 - 次要的"}),n(e(H),{value:"axis",label:"x 、y 轴显示"}),n(e(H),{value:"axisText",label:"x 、y 轴文字显示"})]),_:1})]),_:1},8,["value"]),n(e(E),null,{default:i(()=>[n(e(ne),{value:c.value.min,"onUpdate:value":t[1]||(t[1]=l=>c.value.min=l),min:"5"},{prefix:i(()=>[n(e(re),{style:{width:"125px"}},{default:i(()=>[B(" 网格 min size "),n(e(ee),{trigger:"hover"},{trigger:i(()=>[n(e(oe),{text:""},{icon:i(()=>[n(e(I),{component:e(te)},null,8,["component"])]),_:1})]),default:i(()=>[n(e(uo),null,{default:i(()=>[B("网格大小设定规则：")]),_:1}),n(e(L),null,{default:i(()=>[B(" 1. 基于 count 计算的网格，其内部会被均匀划分为 5 个子网格。 ")]),_:1}),n(e(L),null,{default:i(()=>[B(" 2. 为确保网格在绘制时网格线正常显示，且在缩放操作时能实现平滑过渡 ")]),_:1}),n(e(L),{style:{"padding-left":"20px"}},{default:i(()=>[n(e(eo),null,{default:i(()=>[B(" min 必须是 5 的整数倍，即 min % 5 === 0。 ")]),_:1})]),_:1})]),_:1})]),_:1})]),suffix:i(()=>[B("px")]),_:1},8,["value"]),n(e(ne),{value:c.value.count,"onUpdate:value":t[2]||(t[2]=l=>c.value.count=l),min:.1},{prefix:i(()=>[n(e(re),{style:{width:"125px"}},{default:i(()=>[B(" 网格 value "),n(e(ee),{trigger:"hover"},{trigger:i(()=>[n(e(oe),{text:""},{icon:i(()=>[n(e(I),{component:e(te)},null,8,["component"])]),_:1})]),default:i(()=>[n(e(L),null,{default:i(()=>[B("滚轮滚动周期为 0 时单网格代表的数字")]),_:1})]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),n(e(E),null,{default:i(()=>[n(e(ae),{value:c.value.x,"onUpdate:value":t[3]||(t[3]=l=>c.value.x=l)},{default:i(()=>[n(e(W),{value:-1},{default:i(()=>[n(e(I),{component:e(Ze)},null,8,["component"])]),_:1}),n(e(W),{value:1},{default:i(()=>[n(e(I),{component:e(qe)},null,8,["component"])]),_:1})]),_:1},8,["value"]),n(e(ae),{value:c.value.y,"onUpdate:value":t[4]||(t[4]=l=>c.value.y=l)},{default:i(()=>[n(e(W),{value:1},{default:i(()=>[n(e(I),{component:e(Qe)},null,8,["component"])]),_:1}),n(e(W),{value:-1},{default:i(()=>[n(e(I),{component:e(Xe)},null,8,["component"])]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),Y("canvas",{id:e(a),class:"my-canvas"},null,8,xo)],64))}}),$o=Ye(ko,[["__scopeId","data-v-d5a08e17"]]);export{$o as default};
