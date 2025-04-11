import{n as p,d as V,k as Y,aW as ce,E as K,x as A,ag as se,p as De,K as q,C as Pe,ak as g,h as m,f,i as B,j as $,bn as Me,bb as Fe,bc as Ie,G as Ue,as as Ve,s as H,ck as He,m as Oe,y as P,z as J,L as je,A as Ee,bl as Ke,ai as Le,bA as de,o as ue,c as be,Q,V as We,M as X,W as ee,O as Ge,a as n,w as c,u as o,Z as j,e as N,aC as oe,B as ne,a0 as U,Y as Ye,_ as Qe}from"./index-CFKI3qLN.js";import{_ as Ze}from"./index-DyTFKQ6h.js";import{N as re}from"./InputNumber-2Oy3hSG0.js";import{A as qe,a as Je,b as Xe,c as eo}from"./ArrowUp-DlBsLVGp.js";import{N as ae}from"./Flex-zPf791ko.js";import{N as te}from"./text-DaQcC-I0.js";import{N as le,a as W}from"./RadioButton-DadOsIQI.js";import"./Suffix-D_uBt2jI.js";import"./Input-DAUdDxvF.js";import"./Add-BKSaeg94.js";const oo=p("svg",{viewBox:"0 0 64 64",class:"check-icon"},p("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),no=p("svg",{viewBox:"0 0 100 100",class:"line-icon"},p("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),he=Pe("n-checkbox-group"),ro={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},ao=V({name:"CheckboxGroup",props:ro,setup(e){const{mergedClsPrefixRef:a}=Y(e),h=ce(e),{mergedSizeRef:s,mergedDisabledRef:d}=h,i=K(e.defaultValue),t=A(()=>e.value),r=se(t,i),z=A(()=>{var x;return((x=r.value)===null||x===void 0?void 0:x.length)||0}),u=A(()=>Array.isArray(r.value)?new Set(r.value):new Set);function _(x,b){const{nTriggerFormInput:k,nTriggerFormChange:w}=h,{onChange:v,"onUpdate:value":R,onUpdateValue:T}=e;if(Array.isArray(r.value)){const C=Array.from(r.value),O=C.findIndex(L=>L===b);x?~O||(C.push(b),T&&g(T,C,{actionType:"check",value:b}),R&&g(R,C,{actionType:"check",value:b}),k(),w(),i.value=C,v&&g(v,C)):~O&&(C.splice(O,1),T&&g(T,C,{actionType:"uncheck",value:b}),R&&g(R,C,{actionType:"uncheck",value:b}),v&&g(v,C),i.value=C,k(),w())}else x?(T&&g(T,[b],{actionType:"check",value:b}),R&&g(R,[b],{actionType:"check",value:b}),v&&g(v,[b]),i.value=[b],k(),w()):(T&&g(T,[],{actionType:"uncheck",value:b}),R&&g(R,[],{actionType:"uncheck",value:b}),v&&g(v,[]),i.value=[],k(),w())}return De(he,{checkedCountRef:z,maxRef:q(e,"max"),minRef:q(e,"min"),valueSetRef:u,disabledRef:d,mergedSizeRef:s,toggleCheckbox:_}),{mergedClsPrefix:a}},render(){return p("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),to=m([f("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[B("show-label","line-height: var(--n-label-line-height);"),m("&:hover",[f("checkbox-box",[$("border","border: var(--n-border-checked);")])]),m("&:focus:not(:active)",[f("checkbox-box",[$("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),B("inside-table",[f("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),B("checked",[f("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[f("checkbox-icon",[m(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),B("indeterminate",[f("checkbox-box",[f("checkbox-icon",[m(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),m(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),B("checked, indeterminate",[m("&:focus:not(:active)",[f("checkbox-box",[$("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),f("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[$("border",{border:"var(--n-border-checked)"})])]),B("disabled",{cursor:"not-allowed"},[B("checked",[f("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[$("border",{border:"var(--n-border-disabled-checked)"}),f("checkbox-icon",[m(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),f("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[$("border",`
 border: var(--n-border-disabled);
 `),f("checkbox-icon",[m(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),$("label",`
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
 `,[$("border",`
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
 `,[m(".check-icon, .line-icon",`
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
 `),Me({left:"1px",top:"1px"})])]),$("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[m("&:empty",{display:"none"})])]),Fe(f("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Ie(f("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),lo=Object.assign(Object.assign({},H.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),E=V({name:"Checkbox",props:lo,setup(e){const a=Ue(he,null),h=K(null),{mergedClsPrefixRef:s,inlineThemeDisabled:d,mergedRtlRef:i}=Y(e),t=K(e.defaultChecked),r=q(e,"checked"),z=se(r,t),u=Ve(()=>{if(a){const l=a.valueSetRef.value;return l&&e.value!==void 0?l.has(e.value):!1}else return z.value===e.checkedValue}),_=ce(e,{mergedSize(l){const{size:S}=e;if(S!==void 0)return S;if(a){const{value:y}=a.mergedSizeRef;if(y!==void 0)return y}if(l){const{mergedSize:y}=l;if(y!==void 0)return y.value}return"medium"},mergedDisabled(l){const{disabled:S}=e;if(S!==void 0)return S;if(a){if(a.disabledRef.value)return!0;const{maxRef:{value:y},checkedCountRef:D}=a;if(y!==void 0&&D.value>=y&&!u.value)return!0;const{minRef:{value:F}}=a;if(F!==void 0&&D.value<=F&&u.value)return!0}return l?l.disabled.value:!1}}),{mergedDisabledRef:x,mergedSizeRef:b}=_,k=H("Checkbox","-checkbox",to,He,e,s);function w(l){if(a&&e.value!==void 0)a.toggleCheckbox(!u.value,e.value);else{const{onChange:S,"onUpdate:checked":y,onUpdateChecked:D}=e,{nTriggerFormInput:F,nTriggerFormChange:Z}=_,I=u.value?e.uncheckedValue:e.checkedValue;y&&g(y,I,l),D&&g(D,I,l),S&&g(S,I,l),F(),Z(),t.value=I}}function v(l){x.value||w(l)}function R(l){if(!x.value)switch(l.key){case" ":case"Enter":w(l)}}function T(l){switch(l.key){case" ":l.preventDefault()}}const C={focus:()=>{var l;(l=h.value)===null||l===void 0||l.focus()},blur:()=>{var l;(l=h.value)===null||l===void 0||l.blur()}},O=Oe("Checkbox",i,s),L=A(()=>{const{value:l}=b,{common:{cubicBezierEaseInOut:S},self:{borderRadius:y,color:D,colorChecked:F,colorDisabled:Z,colorTableHeader:I,colorTableHeaderModal:fe,colorTableHeaderPopover:ve,checkMarkColor:me,checkMarkColorDisabled:xe,border:ge,borderFocus:pe,borderDisabled:ke,borderChecked:Ce,boxShadowFocus:ye,textColor:we,textColorDisabled:_e,checkMarkColorDisabledChecked:ze,colorDisabledChecked:Re,borderDisabledChecked:Te,labelPadding:Se,labelLineHeight:$e,labelFontWeight:Ne,[P("fontSize",l)]:Be,[P("size",l)]:Ae}}=k.value;return{"--n-label-line-height":$e,"--n-label-font-weight":Ne,"--n-size":Ae,"--n-bezier":S,"--n-border-radius":y,"--n-border":ge,"--n-border-checked":Ce,"--n-border-focus":pe,"--n-border-disabled":ke,"--n-border-disabled-checked":Te,"--n-box-shadow-focus":ye,"--n-color":D,"--n-color-checked":F,"--n-color-table":I,"--n-color-table-modal":fe,"--n-color-table-popover":ve,"--n-color-disabled":Z,"--n-color-disabled-checked":Re,"--n-text-color":we,"--n-text-color-disabled":_e,"--n-check-mark-color":me,"--n-check-mark-color-disabled":xe,"--n-check-mark-color-disabled-checked":ze,"--n-font-size":Be,"--n-label-padding":Se}}),M=d?J("checkbox",A(()=>b.value[0]),L,e):void 0;return Object.assign(_,C,{rtlEnabled:O,selfRef:h,mergedClsPrefix:s,mergedDisabled:x,renderedChecked:u,mergedTheme:k,labelId:je(),handleClick:v,handleKeyUp:R,handleKeyDown:T,cssVars:d?void 0:L,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender})},render(){var e;const{$slots:a,renderedChecked:h,mergedDisabled:s,indeterminate:d,privateInsideTable:i,cssVars:t,labelId:r,label:z,mergedClsPrefix:u,focusable:_,handleKeyUp:x,handleKeyDown:b,handleClick:k}=this;(e=this.onRender)===null||e===void 0||e.call(this);const w=Ee(a.default,v=>z||v?p("span",{class:`${u}-checkbox__label`,id:r},z||v):null);return p("div",{ref:"selfRef",class:[`${u}-checkbox`,this.themeClass,this.rtlEnabled&&`${u}-checkbox--rtl`,h&&`${u}-checkbox--checked`,s&&`${u}-checkbox--disabled`,d&&`${u}-checkbox--indeterminate`,i&&`${u}-checkbox--inside-table`,w&&`${u}-checkbox--show-label`],tabindex:s||!_?void 0:0,role:"checkbox","aria-checked":d?"mixed":h,"aria-labelledby":r,style:t,onKeyup:x,onKeydown:b,onClick:k,onMousedown:()=>{Le("selectstart",window,v=>{v.preventDefault()},{once:!0})}},p("div",{class:`${u}-checkbox-box-wrapper`}," ",p("div",{class:`${u}-checkbox-box`},p(Ke,null,{default:()=>this.indeterminate?p("div",{key:"indeterminate",class:`${u}-checkbox-icon`},no):p("div",{key:"check",class:`${u}-checkbox-icon`},oo)}),p("div",{class:`${u}-checkbox-box__border`}))),w)}}),io=f("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[m("&:first-child",{marginTop:0}),B("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[B("align-text",{paddingLeft:0},[m("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),m("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),m("&::before",{backgroundColor:"var(--n-bar-color)"})])]),co=Object.assign(Object.assign({},H.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),so=e=>V({name:`H${e}`,props:co,setup(a){const{mergedClsPrefixRef:h,inlineThemeDisabled:s}=Y(a),d=H("Typography","-h",io,de,a,h),i=A(()=>{const{type:r}=a,{common:{cubicBezierEaseInOut:z},self:{headerFontWeight:u,headerTextColor:_,[P("headerPrefixWidth",e)]:x,[P("headerFontSize",e)]:b,[P("headerMargin",e)]:k,[P("headerBarWidth",e)]:w,[P("headerBarColor",r)]:v}}=d.value;return{"--n-bezier":z,"--n-font-size":b,"--n-margin":k,"--n-bar-color":v,"--n-bar-width":w,"--n-font-weight":u,"--n-text-color":_,"--n-prefix-width":x}}),t=s?J(`h${e}`,A(()=>a.type[0]),i,a):void 0;return{mergedClsPrefix:h,cssVars:s?void 0:i,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var a;const{prefix:h,alignText:s,mergedClsPrefix:d,cssVars:i,$slots:t}=this;return(a=this.onRender)===null||a===void 0||a.call(this),p(`h${e}`,{class:[`${d}-h`,`${d}-h${e}`,this.themeClass,{[`${d}-h--prefix-bar`]:h,[`${d}-h--align-text`]:s}],style:i},t)}}),uo=so("4"),bo=f("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[m("&:first-child","margin-top: 0;"),m("&:last-child","margin-bottom: 0;")]),ho=Object.assign(Object.assign({},H.props),{depth:[String,Number]}),G=V({name:"P",props:ho,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:h}=Y(e),s=H("Typography","-p",bo,de,e,a),d=A(()=>{const{depth:t}=e,r=t||"1",{common:{cubicBezierEaseInOut:z},self:{pFontSize:u,pLineHeight:_,pMargin:x,pTextColor:b,[`pTextColor${r}Depth`]:k}}=s.value;return{"--n-bezier":z,"--n-font-size":u,"--n-line-height":_,"--n-margin":x,"--n-text-color":t===void 0?b:k}}),i=h?J("p",A(()=>`${e.depth||""}`),d,e):void 0;return{mergedClsPrefix:a,cssVars:h?void 0:d,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),p("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}}),fo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},vo=Q("path",{d:"M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),mo=Q("path",{d:"M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45c10 4.76 29.47 16.38 29.47 41.09c0 26-17 37.81-36.37 50.8S251 281.43 251 296",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"28"},null,-1),xo=Q("circle",{cx:"250",cy:"348",r:"20",fill:"currentColor"},null,-1),go=[vo,mo,xo],ie=V({name:"HelpCircleOutline",render:function(a,h){return ue(),be("svg",fo,go)}}),po=["id"],ko=V({__name:"axis",setup(e){const a=We(),h=K(["all","grid.main","grid.secondary","axis","axisText"]),s=K({x:1,y:1,count:2,min:100,max:200,size:100});let d;return X(()=>ee.value.theme,i=>d==null?void 0:d.setTheme(i)),X(()=>[h.value,s.value],([i,t])=>{const r={...t};r.min%5==0?(r.size=r.min,r.max=r.min*2):Object.assign(r,{min:void 0,max:void 0,size:void 0}),d.setAxis(r),d.toggleAxis({all:i.includes("all"),grid:{main:i.includes("grid.main"),secondary:i.includes("grid.secondary")},axis:i.includes("axis"),axisText:i.includes("axisText")})},{deep:!0}),Ge(()=>{d=new Ze(a),d.setTheme(ee.value.theme)}),(i,t)=>(ue(),be(Ye,null,[n(o(j),{vertical:"",style:{"margin-bottom":"10px"}},{default:c(()=>[n(o(ao),{value:h.value,"onUpdate:value":t[0]||(t[0]=r=>h.value=r)},{default:c(()=>[n(o(j),null,{default:c(()=>[n(o(E),{value:"all",label:"全部"}),n(o(E),{value:"grid.main",label:"网格 - 主要的 "}),n(o(E),{value:"grid.secondary",label:"网格 - 次要的"}),n(o(E),{value:"axis",label:"x 、y 轴显示"}),n(o(E),{value:"axisText",label:"x 、y 轴文字显示"})]),_:1})]),_:1},8,["value"]),n(o(j),null,{default:c(()=>[n(o(re),{value:s.value.min,"onUpdate:value":t[1]||(t[1]=r=>s.value.min=r),min:"5"},{prefix:c(()=>[n(o(ae),{style:{width:"125px"}},{default:c(()=>[N(" 网格 max size "),n(o(oe),{trigger:"hover"},{trigger:c(()=>[n(o(ne),{text:""},{icon:c(()=>[n(o(U),{component:o(ie)},null,8,["component"])]),_:1})]),default:c(()=>[n(o(uo),null,{default:c(()=>[N("网格大小设定规则：")]),_:1}),n(o(G),null,{default:c(()=>[N(" 1. 基于 count 计算的网格，其内部会被均匀划分为 5 个子网格。 ")]),_:1}),n(o(G),null,{default:c(()=>[N(" 2. 为确保网格在绘制时网格线正常显示，且在缩放操作时能实现平滑过渡，max 和 min 的取值需要满足以下两个条件： ")]),_:1}),n(o(G),{style:{"padding-left":"20px"}},{default:c(()=>[n(o(j),{vertical:""},{default:c(()=>[n(o(te),null,{default:c(()=>[N(" - 条件一：max 必须是 min 的 2 倍，即 max / min === 2。 ")]),_:1}),n(o(te),null,{default:c(()=>[N(" - 条件二：min 必须是 5 的整数倍，即 min % 5 === 0。 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),suffix:c(()=>[N("px")]),_:1},8,["value"]),n(o(re),{value:s.value.count,"onUpdate:value":t[2]||(t[2]=r=>s.value.count=r),min:.1},{prefix:c(()=>[n(o(ae),{style:{width:"125px"}},{default:c(()=>[N(" 网格 value "),n(o(oe),{trigger:"hover"},{trigger:c(()=>[n(o(ne),{text:""},{icon:c(()=>[n(o(U),{component:o(ie)},null,8,["component"])]),_:1})]),default:c(()=>[n(o(G),null,{default:c(()=>[N("滚轮滚动周期为 0 时单网格代表的数字")]),_:1})]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),n(o(j),null,{default:c(()=>[n(o(le),{value:s.value.x,"onUpdate:value":t[3]||(t[3]=r=>s.value.x=r)},{default:c(()=>[n(o(W),{value:-1},{default:c(()=>[n(o(U),{component:o(qe)},null,8,["component"])]),_:1}),n(o(W),{value:1},{default:c(()=>[n(o(U),{component:o(Je)},null,8,["component"])]),_:1})]),_:1},8,["value"]),n(o(le),{value:s.value.y,"onUpdate:value":t[4]||(t[4]=r=>s.value.y=r)},{default:c(()=>[n(o(W),{value:1},{default:c(()=>[n(o(U),{component:o(Xe)},null,8,["component"])]),_:1}),n(o(W),{value:-1},{default:c(()=>[n(o(U),{component:o(eo)},null,8,["component"])]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),Q("canvas",{id:o(a),class:"my-canvas"},null,8,po)],64))}}),Bo=Qe(ko,[["__scopeId","data-v-2785adf5"]]);export{Bo as default};
