import{s as p,d as K,l as q,ax as le,n as j,h as M,az as ie,G as Be,D as Z,C as Ae,aJ as x,z as k,j as h,k as $,A as N,a_ as De,aK as Me,aL as Ue,f as Fe,E as Pe,J as W,ct as Ie,aM as He,P as D,L as ce,b1 as Ve,bg as je,aY as Ke,ao as Oe,bu as Ee,o as se,c as de,V as Y,b2 as Le,bM as Ge,F as Q,bo as X,p as We,a,w as t,u as e,Y as E,e as B,Z as ee,B as oe,$ as I,U as Ye,_ as Je}from"./index-Do2VL4Ea.js";import{_ as Ze}from"./index-BYsnuTmQ.js";import{N as ae}from"./InputNumber-lzCd3fZt.js";import{N as L}from"./p-nyLTrGIW.js";import{A as qe,a as Qe,b as Xe,c as eo}from"./ArrowUp-D2yfgQLL.js";import{N as ne}from"./Flex-DC9XFU6W.js";import{N as oo}from"./text-ghYU1PHq.js";import{N as re,a as G}from"./RadioButton-DKS3Al_3.js";import"./use-locale-JHkQZVLL.js";import"./Input-CZIoqFD6.js";import"./Suffix-GYVavVXE.js";import"./Add-B4zulZj3.js";const ao=p("svg",{viewBox:"0 0 64 64",class:"check-icon"},p("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),no=p("svg",{viewBox:"0 0 100 100",class:"line-icon"},p("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),ue=Ae("n-checkbox-group"),ro={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},to=K({name:"CheckboxGroup",props:ro,setup(o){const{mergedClsPrefixRef:l}=q(o),f=le(o),{mergedSizeRef:v,mergedDisabledRef:i}=f,u=j(o.defaultValue),c=M(()=>o.value),r=ie(c,u),s=M(()=>{var g;return((g=r.value)===null||g===void 0?void 0:g.length)||0}),d=M(()=>Array.isArray(r.value)?new Set(r.value):new Set);function S(g,b){const{nTriggerFormInput:_,nTriggerFormChange:w}=f,{onChange:m,"onUpdate:value":z,onUpdateValue:R}=o;if(Array.isArray(r.value)){const y=Array.from(r.value),H=y.findIndex(O=>O===b);g?~H||(y.push(b),R&&x(R,y,{actionType:"check",value:b}),z&&x(z,y,{actionType:"check",value:b}),_(),w(),u.value=y,m&&x(m,y)):~H&&(y.splice(H,1),R&&x(R,y,{actionType:"uncheck",value:b}),z&&x(z,y,{actionType:"uncheck",value:b}),m&&x(m,y),u.value=y,_(),w())}else g?(R&&x(R,[b],{actionType:"check",value:b}),z&&x(z,[b],{actionType:"check",value:b}),m&&x(m,[b]),u.value=[b],_(),w()):(R&&x(R,[],{actionType:"uncheck",value:b}),z&&x(z,[],{actionType:"uncheck",value:b}),m&&x(m,[]),u.value=[],_(),w())}return Be(ue,{checkedCountRef:s,maxRef:Z(o,"max"),minRef:Z(o,"min"),valueSetRef:d,disabledRef:i,mergedSizeRef:v,toggleCheckbox:S}),{mergedClsPrefix:l}},render(){return p("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),lo=k([h("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[$("show-label","line-height: var(--n-label-line-height);"),k("&:hover",[h("checkbox-box",[N("border","border: var(--n-border-checked);")])]),k("&:focus:not(:active)",[h("checkbox-box",[N("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),$("inside-table",[h("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),$("checked",[h("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[h("checkbox-icon",[k(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),$("indeterminate",[h("checkbox-box",[h("checkbox-icon",[k(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),k(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),$("checked, indeterminate",[k("&:focus:not(:active)",[h("checkbox-box",[N("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),h("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[N("border",{border:"var(--n-border-checked)"})])]),$("disabled",{cursor:"not-allowed"},[$("checked",[h("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[N("border",{border:"var(--n-border-disabled-checked)"}),h("checkbox-icon",[k(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),h("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[N("border",`
 border: var(--n-border-disabled);
 `),h("checkbox-icon",[k(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),N("label",`
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
 `,[N("border",`
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
 `,[k(".check-icon, .line-icon",`
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
 `),De({left:"1px",top:"1px"})])]),N("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[k("&:empty",{display:"none"})])]),Me(h("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Ue(h("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),io=Object.assign(Object.assign({},W.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),V=K({name:"Checkbox",props:io,setup(o){const l=Fe(ue,null),f=j(null),{mergedClsPrefixRef:v,inlineThemeDisabled:i,mergedRtlRef:u}=q(o),c=j(o.defaultChecked),r=Z(o,"checked"),s=ie(r,c),d=Pe(()=>{if(l){const n=l.valueSetRef.value;return n&&o.value!==void 0?n.has(o.value):!1}else return s.value===o.checkedValue}),S=le(o,{mergedSize(n){const{size:T}=o;if(T!==void 0)return T;if(l){const{value:C}=l.mergedSizeRef;if(C!==void 0)return C}if(n){const{mergedSize:C}=n;if(C!==void 0)return C.value}return"medium"},mergedDisabled(n){const{disabled:T}=o;if(T!==void 0)return T;if(l){if(l.disabledRef.value)return!0;const{maxRef:{value:C},checkedCountRef:A}=l;if(C!==void 0&&A.value>=C&&!d.value)return!0;const{minRef:{value:F}}=l;if(F!==void 0&&A.value<=F&&d.value)return!0}return n?n.disabled.value:!1}}),{mergedDisabledRef:g,mergedSizeRef:b}=S,_=W("Checkbox","-checkbox",lo,Ie,o,v);function w(n){if(l&&o.value!==void 0)l.toggleCheckbox(!d.value,o.value);else{const{onChange:T,"onUpdate:checked":C,onUpdateChecked:A}=o,{nTriggerFormInput:F,nTriggerFormChange:J}=S,P=d.value?o.uncheckedValue:o.checkedValue;C&&x(C,P,n),A&&x(A,P,n),T&&x(T,P,n),F(),J(),c.value=P}}function m(n){g.value||w(n)}function z(n){if(!g.value)switch(n.key){case" ":case"Enter":w(n)}}function R(n){switch(n.key){case" ":n.preventDefault()}}const y={focus:()=>{var n;(n=f.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=f.value)===null||n===void 0||n.blur()}},H=He("Checkbox",u,v),O=M(()=>{const{value:n}=b,{common:{cubicBezierEaseInOut:T},self:{borderRadius:C,color:A,colorChecked:F,colorDisabled:J,colorTableHeader:P,colorTableHeaderModal:be,colorTableHeaderPopover:he,checkMarkColor:fe,checkMarkColorDisabled:ve,border:me,borderFocus:xe,borderDisabled:ke,borderChecked:ge,boxShadowFocus:pe,textColor:ye,textColorDisabled:Ce,checkMarkColorDisabledChecked:we,colorDisabledChecked:_e,borderDisabledChecked:ze,labelPadding:Re,labelLineHeight:Te,labelFontWeight:Se,[D("fontSize",n)]:Ne,[D("size",n)]:$e}}=_.value;return{"--n-label-line-height":Te,"--n-label-font-weight":Se,"--n-size":$e,"--n-bezier":T,"--n-border-radius":C,"--n-border":me,"--n-border-checked":ge,"--n-border-focus":xe,"--n-border-disabled":ke,"--n-border-disabled-checked":ze,"--n-box-shadow-focus":pe,"--n-color":A,"--n-color-checked":F,"--n-color-table":P,"--n-color-table-modal":be,"--n-color-table-popover":he,"--n-color-disabled":J,"--n-color-disabled-checked":_e,"--n-text-color":ye,"--n-text-color-disabled":Ce,"--n-check-mark-color":fe,"--n-check-mark-color-disabled":ve,"--n-check-mark-color-disabled-checked":we,"--n-font-size":Ne,"--n-label-padding":Re}}),U=i?ce("checkbox",M(()=>b.value[0]),O,o):void 0;return Object.assign(S,y,{rtlEnabled:H,selfRef:f,mergedClsPrefix:v,mergedDisabled:g,renderedChecked:d,mergedTheme:_,labelId:Ve(),handleClick:m,handleKeyUp:z,handleKeyDown:R,cssVars:i?void 0:O,themeClass:U==null?void 0:U.themeClass,onRender:U==null?void 0:U.onRender})},render(){var o;const{$slots:l,renderedChecked:f,mergedDisabled:v,indeterminate:i,privateInsideTable:u,cssVars:c,labelId:r,label:s,mergedClsPrefix:d,focusable:S,handleKeyUp:g,handleKeyDown:b,handleClick:_}=this;(o=this.onRender)===null||o===void 0||o.call(this);const w=je(l.default,m=>s||m?p("span",{class:`${d}-checkbox__label`,id:r},s||m):null);return p("div",{ref:"selfRef",class:[`${d}-checkbox`,this.themeClass,this.rtlEnabled&&`${d}-checkbox--rtl`,f&&`${d}-checkbox--checked`,v&&`${d}-checkbox--disabled`,i&&`${d}-checkbox--indeterminate`,u&&`${d}-checkbox--inside-table`,w&&`${d}-checkbox--show-label`],tabindex:v||!S?void 0:0,role:"checkbox","aria-checked":i?"mixed":f,"aria-labelledby":r,style:c,onKeyup:g,onKeydown:b,onClick:_,onMousedown:()=>{Oe("selectstart",window,m=>{m.preventDefault()},{once:!0})}},p("div",{class:`${d}-checkbox-box-wrapper`}," ",p("div",{class:`${d}-checkbox-box`},p(Ke,null,{default:()=>this.indeterminate?p("div",{key:"indeterminate",class:`${d}-checkbox-icon`},no):p("div",{key:"check",class:`${d}-checkbox-icon`},ao)}),p("div",{class:`${d}-checkbox-box__border`}))),w)}}),co=h("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[k("&:first-child",{marginTop:0}),$("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[$("align-text",{paddingLeft:0},[k("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),k("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),k("&::before",{backgroundColor:"var(--n-bar-color)"})])]),so=Object.assign(Object.assign({},W.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),uo=o=>K({name:`H${o}`,props:so,setup(l){const{mergedClsPrefixRef:f,inlineThemeDisabled:v}=q(l),i=W("Typography","-h",co,Ee,l,f),u=M(()=>{const{type:r}=l,{common:{cubicBezierEaseInOut:s},self:{headerFontWeight:d,headerTextColor:S,[D("headerPrefixWidth",o)]:g,[D("headerFontSize",o)]:b,[D("headerMargin",o)]:_,[D("headerBarWidth",o)]:w,[D("headerBarColor",r)]:m}}=i.value;return{"--n-bezier":s,"--n-font-size":b,"--n-margin":_,"--n-bar-color":m,"--n-bar-width":w,"--n-font-weight":d,"--n-text-color":S,"--n-prefix-width":g}}),c=v?ce(`h${o}`,M(()=>l.type[0]),u,l):void 0;return{mergedClsPrefix:f,cssVars:v?void 0:u,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var l;const{prefix:f,alignText:v,mergedClsPrefix:i,cssVars:u,$slots:c}=this;return(l=this.onRender)===null||l===void 0||l.call(this),p(`h${o}`,{class:[`${i}-h`,`${i}-h${o}`,this.themeClass,{[`${i}-h--prefix-bar`]:f,[`${i}-h--align-text`]:v}],style:u},c)}}),bo=uo("4"),ho={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},fo=Y("path",{d:"M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),vo=Y("path",{d:"M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45c10 4.76 29.47 16.38 29.47 41.09c0 26-17 37.81-36.37 50.8S251 281.43 251 296",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"28"},null,-1),mo=Y("circle",{cx:"250",cy:"348",r:"20",fill:"currentColor"},null,-1),xo=[fo,vo,mo],te=K({name:"HelpCircleOutline",render:function(l,f){return se(),de("svg",ho,xo)}}),ko=["id"],go=K({__name:"axis",setup(o,{expose:l}){const f=Le(),v=j(["all","grid.main","grid.secondary","axis","axisText"]),i=j({x:1,y:1,count:2,min:100,size:100});let u=Ge();return Q(()=>X.value.theme,c=>{var r;return(r=u.value)==null?void 0:r.setTheme(c)}),Q(()=>[v.value,i.value],([c,r])=>{const s={...r};s.min%5==0?s.size=s.min:Object.assign(s,{min:void 0,size:void 0}),u.value.setAxis(s),u.value.toggleAxis({all:c.includes("all"),grid:{main:c.includes("grid.main"),secondary:c.includes("grid.secondary")},axis:c.includes("axis"),axisText:c.includes("axisText")})},{deep:!0}),We(()=>{u.value=new Ze(f),u.value.setTheme(X.value.theme)}),l({myCanvas:u}),(c,r)=>(se(),de(Ye,null,[a(e(E),{vertical:"",style:{"margin-bottom":"10px"}},{default:t(()=>[a(e(to),{value:v.value,"onUpdate:value":r[0]||(r[0]=s=>v.value=s)},{default:t(()=>[a(e(E),null,{default:t(()=>[a(e(V),{value:"all",label:"全部"}),a(e(V),{value:"grid.main",label:"网格 - 主要的 "}),a(e(V),{value:"grid.secondary",label:"网格 - 次要的"}),a(e(V),{value:"axis",label:"x 、y 轴显示"}),a(e(V),{value:"axisText",label:"x 、y 轴文字显示"})]),_:1})]),_:1},8,["value"]),a(e(E),null,{default:t(()=>[a(e(ae),{value:i.value.min,"onUpdate:value":r[1]||(r[1]=s=>i.value.min=s),min:"5"},{prefix:t(()=>[a(e(ne),{style:{width:"125px"}},{default:t(()=>[B(" 网格 min size "),a(e(ee),{trigger:"hover"},{trigger:t(()=>[a(e(oe),{text:""},{icon:t(()=>[a(e(I),{component:e(te)},null,8,["component"])]),_:1})]),default:t(()=>[a(e(bo),null,{default:t(()=>[B("网格大小设定规则：")]),_:1}),a(e(L),null,{default:t(()=>[B(" 1. 基于 count 计算的网格，其内部会被均匀划分为 5 个子网格。 ")]),_:1}),a(e(L),null,{default:t(()=>[B(" 2. 为确保网格在绘制时网格线正常显示，且在缩放操作时能实现平滑过渡 ")]),_:1}),a(e(L),{style:{"padding-left":"20px"}},{default:t(()=>[a(e(oo),null,{default:t(()=>[B(" min 必须是 5 的整数倍，即 min % 5 === 0。 ")]),_:1})]),_:1})]),_:1})]),_:1})]),suffix:t(()=>[B("px")]),_:1},8,["value"]),a(e(ae),{value:i.value.count,"onUpdate:value":r[2]||(r[2]=s=>i.value.count=s),min:.1},{prefix:t(()=>[a(e(ne),{style:{width:"125px"}},{default:t(()=>[B(" 网格 value "),a(e(ee),{trigger:"hover"},{trigger:t(()=>[a(e(oe),{text:""},{icon:t(()=>[a(e(I),{component:e(te)},null,8,["component"])]),_:1})]),default:t(()=>[a(e(L),null,{default:t(()=>[B("滚轮滚动周期为 0 时单网格代表的数字")]),_:1})]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),a(e(E),null,{default:t(()=>[a(e(re),{value:i.value.x,"onUpdate:value":r[3]||(r[3]=s=>i.value.x=s)},{default:t(()=>[a(e(G),{value:-1},{default:t(()=>[a(e(I),{component:e(qe)},null,8,["component"])]),_:1}),a(e(G),{value:1},{default:t(()=>[a(e(I),{component:e(Qe)},null,8,["component"])]),_:1})]),_:1},8,["value"]),a(e(re),{value:i.value.y,"onUpdate:value":r[4]||(r[4]=s=>i.value.y=s)},{default:t(()=>[a(e(G),{value:1},{default:t(()=>[a(e(I),{component:e(Xe)},null,8,["component"])]),_:1}),a(e(G),{value:-1},{default:t(()=>[a(e(I),{component:e(eo)},null,8,["component"])]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),Y("canvas",{id:e(f),class:"my-canvas"},null,8,ko)],64))}}),Ao=Je(go,[["__scopeId","data-v-a5fc1e40"]]);export{Ao as default};
