import{n as g,d as K,k as Q,aZ as ie,E as O,x as M,ag as ce,p as Ae,K as q,C as De,ak as m,h as x,f,i as $,j as S,bq as Me,be as Ue,bf as Fe,G as Ie,as as Pe,s as G,ci as je,m as He,y as D,z as se,L as Ve,A as Oe,bo as Ke,ai as Ee,cj as Le,o as de,c as ue,Q as Y,V as We,M as J,W as X,O as Ge,a,w as t,u as e,Z as H,e as N,aC as ee,B as oe,a0 as P,Y as Ye,_ as Ze}from"./index-C8qi1Iv6.js";import{_ as qe}from"./index-CIljf-s1.js";import{N as ae}from"./InputNumber-Dwwp3Xs7.js";import{N as L}from"./p-Dy5U_fN6.js";import{A as Qe,a as Je,b as Xe,c as eo}from"./ArrowUp-kG-ZCC33.js";import{N as ne}from"./Flex-CfI93_F1.js";import{N as re}from"./text-B4dofyHA.js";import{N as te,a as W}from"./RadioButton-DKckVWyl.js";import"./Suffix-SqLio9SE.js";import"./Input-CFXEiRjb.js";import"./Add-NLUmICO-.js";const oo=g("svg",{viewBox:"0 0 64 64",class:"check-icon"},g("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),ao=g("svg",{viewBox:"0 0 100 100",class:"line-icon"},g("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),be=De("n-checkbox-group"),no={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},ro=K({name:"CheckboxGroup",props:no,setup(o){const{mergedClsPrefixRef:l}=Q(o),h=ie(o),{mergedSizeRef:c,mergedDisabledRef:u}=h,s=O(o.defaultValue),i=M(()=>o.value),r=ce(i,s),B=M(()=>{var k;return((k=r.value)===null||k===void 0?void 0:k.length)||0}),d=M(()=>Array.isArray(r.value)?new Set(r.value):new Set);function T(k,b){const{nTriggerFormInput:w,nTriggerFormChange:C}=h,{onChange:v,"onUpdate:value":_,onUpdateValue:z}=o;if(Array.isArray(r.value)){const p=Array.from(r.value),j=p.findIndex(E=>E===b);k?~j||(p.push(b),z&&m(z,p,{actionType:"check",value:b}),_&&m(_,p,{actionType:"check",value:b}),w(),C(),s.value=p,v&&m(v,p)):~j&&(p.splice(j,1),z&&m(z,p,{actionType:"uncheck",value:b}),_&&m(_,p,{actionType:"uncheck",value:b}),v&&m(v,p),s.value=p,w(),C())}else k?(z&&m(z,[b],{actionType:"check",value:b}),_&&m(_,[b],{actionType:"check",value:b}),v&&m(v,[b]),s.value=[b],w(),C()):(z&&m(z,[],{actionType:"uncheck",value:b}),_&&m(_,[],{actionType:"uncheck",value:b}),v&&m(v,[]),s.value=[],w(),C())}return Ae(be,{checkedCountRef:B,maxRef:q(o,"max"),minRef:q(o,"min"),valueSetRef:d,disabledRef:u,mergedSizeRef:c,toggleCheckbox:T}),{mergedClsPrefix:l}},render(){return g("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),to=x([f("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[$("show-label","line-height: var(--n-label-line-height);"),x("&:hover",[f("checkbox-box",[S("border","border: var(--n-border-checked);")])]),x("&:focus:not(:active)",[f("checkbox-box",[S("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),$("inside-table",[f("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),$("checked",[f("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[f("checkbox-icon",[x(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),$("indeterminate",[f("checkbox-box",[f("checkbox-icon",[x(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),x(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),$("checked, indeterminate",[x("&:focus:not(:active)",[f("checkbox-box",[S("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),f("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[S("border",{border:"var(--n-border-checked)"})])]),$("disabled",{cursor:"not-allowed"},[$("checked",[f("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[S("border",{border:"var(--n-border-disabled-checked)"}),f("checkbox-icon",[x(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),f("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[S("border",`
 border: var(--n-border-disabled);
 `),f("checkbox-icon",[x(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),S("label",`
 color: var(--n-text-color-disabled);
 `)]),f("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),f("checkbox-box",`
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
 `),f("checkbox-icon",`
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
 `),Me({left:"1px",top:"1px"})])]),S("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[x("&:empty",{display:"none"})])]),Ue(f("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Fe(f("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),lo=Object.assign(Object.assign({},G.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),V=K({name:"Checkbox",props:lo,setup(o){const l=Ie(be,null),h=O(null),{mergedClsPrefixRef:c,inlineThemeDisabled:u,mergedRtlRef:s}=Q(o),i=O(o.defaultChecked),r=q(o,"checked"),B=ce(r,i),d=Pe(()=>{if(l){const n=l.valueSetRef.value;return n&&o.value!==void 0?n.has(o.value):!1}else return B.value===o.checkedValue}),T=ie(o,{mergedSize(n){const{size:R}=o;if(R!==void 0)return R;if(l){const{value:y}=l.mergedSizeRef;if(y!==void 0)return y}if(n){const{mergedSize:y}=n;if(y!==void 0)return y.value}return"medium"},mergedDisabled(n){const{disabled:R}=o;if(R!==void 0)return R;if(l){if(l.disabledRef.value)return!0;const{maxRef:{value:y},checkedCountRef:A}=l;if(y!==void 0&&A.value>=y&&!d.value)return!0;const{minRef:{value:F}}=l;if(F!==void 0&&A.value<=F&&d.value)return!0}return n?n.disabled.value:!1}}),{mergedDisabledRef:k,mergedSizeRef:b}=T,w=G("Checkbox","-checkbox",to,je,o,c);function C(n){if(l&&o.value!==void 0)l.toggleCheckbox(!d.value,o.value);else{const{onChange:R,"onUpdate:checked":y,onUpdateChecked:A}=o,{nTriggerFormInput:F,nTriggerFormChange:Z}=T,I=d.value?o.uncheckedValue:o.checkedValue;y&&m(y,I,n),A&&m(A,I,n),R&&m(R,I,n),F(),Z(),i.value=I}}function v(n){k.value||C(n)}function _(n){if(!k.value)switch(n.key){case" ":case"Enter":C(n)}}function z(n){switch(n.key){case" ":n.preventDefault()}}const p={focus:()=>{var n;(n=h.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=h.value)===null||n===void 0||n.blur()}},j=He("Checkbox",s,c),E=M(()=>{const{value:n}=b,{common:{cubicBezierEaseInOut:R},self:{borderRadius:y,color:A,colorChecked:F,colorDisabled:Z,colorTableHeader:I,colorTableHeaderModal:fe,colorTableHeaderPopover:he,checkMarkColor:ve,checkMarkColorDisabled:me,border:xe,borderFocus:ke,borderDisabled:ge,borderChecked:pe,boxShadowFocus:ye,textColor:Ce,textColorDisabled:we,checkMarkColorDisabledChecked:_e,colorDisabledChecked:ze,borderDisabledChecked:Re,labelPadding:Te,labelLineHeight:Se,labelFontWeight:Ne,[D("fontSize",n)]:$e,[D("size",n)]:Be}}=w.value;return{"--n-label-line-height":Se,"--n-label-font-weight":Ne,"--n-size":Be,"--n-bezier":R,"--n-border-radius":y,"--n-border":xe,"--n-border-checked":pe,"--n-border-focus":ke,"--n-border-disabled":ge,"--n-border-disabled-checked":Re,"--n-box-shadow-focus":ye,"--n-color":A,"--n-color-checked":F,"--n-color-table":I,"--n-color-table-modal":fe,"--n-color-table-popover":he,"--n-color-disabled":Z,"--n-color-disabled-checked":ze,"--n-text-color":Ce,"--n-text-color-disabled":we,"--n-check-mark-color":ve,"--n-check-mark-color-disabled":me,"--n-check-mark-color-disabled-checked":_e,"--n-font-size":$e,"--n-label-padding":Te}}),U=u?se("checkbox",M(()=>b.value[0]),E,o):void 0;return Object.assign(T,p,{rtlEnabled:j,selfRef:h,mergedClsPrefix:c,mergedDisabled:k,renderedChecked:d,mergedTheme:w,labelId:Ve(),handleClick:v,handleKeyUp:_,handleKeyDown:z,cssVars:u?void 0:E,themeClass:U==null?void 0:U.themeClass,onRender:U==null?void 0:U.onRender})},render(){var o;const{$slots:l,renderedChecked:h,mergedDisabled:c,indeterminate:u,privateInsideTable:s,cssVars:i,labelId:r,label:B,mergedClsPrefix:d,focusable:T,handleKeyUp:k,handleKeyDown:b,handleClick:w}=this;(o=this.onRender)===null||o===void 0||o.call(this);const C=Oe(l.default,v=>B||v?g("span",{class:`${d}-checkbox__label`,id:r},B||v):null);return g("div",{ref:"selfRef",class:[`${d}-checkbox`,this.themeClass,this.rtlEnabled&&`${d}-checkbox--rtl`,h&&`${d}-checkbox--checked`,c&&`${d}-checkbox--disabled`,u&&`${d}-checkbox--indeterminate`,s&&`${d}-checkbox--inside-table`,C&&`${d}-checkbox--show-label`],tabindex:c||!T?void 0:0,role:"checkbox","aria-checked":u?"mixed":h,"aria-labelledby":r,style:i,onKeyup:k,onKeydown:b,onClick:w,onMousedown:()=>{Ee("selectstart",window,v=>{v.preventDefault()},{once:!0})}},g("div",{class:`${d}-checkbox-box-wrapper`}," ",g("div",{class:`${d}-checkbox-box`},g(Ke,null,{default:()=>this.indeterminate?g("div",{key:"indeterminate",class:`${d}-checkbox-icon`},ao):g("div",{key:"check",class:`${d}-checkbox-icon`},oo)}),g("div",{class:`${d}-checkbox-box__border`}))),C)}}),io=f("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[x("&:first-child",{marginTop:0}),$("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[$("align-text",{paddingLeft:0},[x("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),x("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),x("&::before",{backgroundColor:"var(--n-bar-color)"})])]),co=Object.assign(Object.assign({},G.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),so=o=>K({name:`H${o}`,props:co,setup(l){const{mergedClsPrefixRef:h,inlineThemeDisabled:c}=Q(l),u=G("Typography","-h",io,Le,l,h),s=M(()=>{const{type:r}=l,{common:{cubicBezierEaseInOut:B},self:{headerFontWeight:d,headerTextColor:T,[D("headerPrefixWidth",o)]:k,[D("headerFontSize",o)]:b,[D("headerMargin",o)]:w,[D("headerBarWidth",o)]:C,[D("headerBarColor",r)]:v}}=u.value;return{"--n-bezier":B,"--n-font-size":b,"--n-margin":w,"--n-bar-color":v,"--n-bar-width":C,"--n-font-weight":d,"--n-text-color":T,"--n-prefix-width":k}}),i=c?se(`h${o}`,M(()=>l.type[0]),s,l):void 0;return{mergedClsPrefix:h,cssVars:c?void 0:s,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var l;const{prefix:h,alignText:c,mergedClsPrefix:u,cssVars:s,$slots:i}=this;return(l=this.onRender)===null||l===void 0||l.call(this),g(`h${o}`,{class:[`${u}-h`,`${u}-h${o}`,this.themeClass,{[`${u}-h--prefix-bar`]:h,[`${u}-h--align-text`]:c}],style:s},i)}}),uo=so("4"),bo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},fo=Y("path",{d:"M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),ho=Y("path",{d:"M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45c10 4.76 29.47 16.38 29.47 41.09c0 26-17 37.81-36.37 50.8S251 281.43 251 296",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"28"},null,-1),vo=Y("circle",{cx:"250",cy:"348",r:"20",fill:"currentColor"},null,-1),mo=[fo,ho,vo],le=K({name:"HelpCircleOutline",render:function(l,h){return de(),ue("svg",bo,mo)}}),xo=["id"],ko=K({__name:"axis",setup(o){const l=We(),h=O(["all","grid.main","grid.secondary","axis","axisText"]),c=O({x:1,y:1,count:2,min:100,max:200,size:100});let u;return J(()=>X.value.theme,s=>u==null?void 0:u.setTheme(s)),J(()=>[h.value,c.value],([s,i])=>{const r={...i};r.min%5==0?(r.size=r.min,r.max=r.min*2):Object.assign(r,{min:void 0,max:void 0,size:void 0}),u.setAxis(r),u.toggleAxis({all:s.includes("all"),grid:{main:s.includes("grid.main"),secondary:s.includes("grid.secondary")},axis:s.includes("axis"),axisText:s.includes("axisText")})},{deep:!0}),Ge(()=>{u=new qe(l),u.setTheme(X.value.theme)}),(s,i)=>(de(),ue(Ye,null,[a(e(H),{vertical:"",style:{"margin-bottom":"10px"}},{default:t(()=>[a(e(ro),{value:h.value,"onUpdate:value":i[0]||(i[0]=r=>h.value=r)},{default:t(()=>[a(e(H),null,{default:t(()=>[a(e(V),{value:"all",label:"全部"}),a(e(V),{value:"grid.main",label:"网格 - 主要的 "}),a(e(V),{value:"grid.secondary",label:"网格 - 次要的"}),a(e(V),{value:"axis",label:"x 、y 轴显示"}),a(e(V),{value:"axisText",label:"x 、y 轴文字显示"})]),_:1})]),_:1},8,["value"]),a(e(H),null,{default:t(()=>[a(e(ae),{value:c.value.min,"onUpdate:value":i[1]||(i[1]=r=>c.value.min=r),min:"5"},{prefix:t(()=>[a(e(ne),{style:{width:"125px"}},{default:t(()=>[N(" 网格 max size "),a(e(ee),{trigger:"hover"},{trigger:t(()=>[a(e(oe),{text:""},{icon:t(()=>[a(e(P),{component:e(le)},null,8,["component"])]),_:1})]),default:t(()=>[a(e(uo),null,{default:t(()=>[N("网格大小设定规则：")]),_:1}),a(e(L),null,{default:t(()=>[N(" 1. 基于 count 计算的网格，其内部会被均匀划分为 5 个子网格。 ")]),_:1}),a(e(L),null,{default:t(()=>[N(" 2. 为确保网格在绘制时网格线正常显示，且在缩放操作时能实现平滑过渡，max 和 min 的取值需要满足以下两个条件： ")]),_:1}),a(e(L),{style:{"padding-left":"20px"}},{default:t(()=>[a(e(H),{vertical:""},{default:t(()=>[a(e(re),null,{default:t(()=>[N(" - 条件一：max 必须是 min 的 2 倍，即 max / min === 2。 ")]),_:1}),a(e(re),null,{default:t(()=>[N(" - 条件二：min 必须是 5 的整数倍，即 min % 5 === 0。 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),suffix:t(()=>[N("px")]),_:1},8,["value"]),a(e(ae),{value:c.value.count,"onUpdate:value":i[2]||(i[2]=r=>c.value.count=r),min:.1},{prefix:t(()=>[a(e(ne),{style:{width:"125px"}},{default:t(()=>[N(" 网格 value "),a(e(ee),{trigger:"hover"},{trigger:t(()=>[a(e(oe),{text:""},{icon:t(()=>[a(e(P),{component:e(le)},null,8,["component"])]),_:1})]),default:t(()=>[a(e(L),null,{default:t(()=>[N("滚轮滚动周期为 0 时单网格代表的数字")]),_:1})]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),a(e(H),null,{default:t(()=>[a(e(te),{value:c.value.x,"onUpdate:value":i[3]||(i[3]=r=>c.value.x=r)},{default:t(()=>[a(e(W),{value:-1},{default:t(()=>[a(e(P),{component:e(Qe)},null,8,["component"])]),_:1}),a(e(W),{value:1},{default:t(()=>[a(e(P),{component:e(Je)},null,8,["component"])]),_:1})]),_:1},8,["value"]),a(e(te),{value:c.value.y,"onUpdate:value":i[4]||(i[4]=r=>c.value.y=r)},{default:t(()=>[a(e(W),{value:1},{default:t(()=>[a(e(P),{component:e(Xe)},null,8,["component"])]),_:1}),a(e(W),{value:-1},{default:t(()=>[a(e(P),{component:e(eo)},null,8,["component"])]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),Y("canvas",{id:e(l),class:"my-canvas"},null,8,xo)],64))}}),$o=Ze(ko,[["__scopeId","data-v-2785adf5"]]);export{$o as default};
