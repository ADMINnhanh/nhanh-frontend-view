import{k as f,d as j,v as E,ax as V,J as _,z as B,U as W,K as he,E as K,n as ue,I as l,Q as d,p as c,R as S,ap as R,ao as fe,aq as ve,ar as ke,q as ge,ag as xe,x as U,cT as me,W as pe,X as D,F as L,at as Ce,c0 as ye,ad as we,a9 as ze,c1 as Re}from"./index-Cdga8aNU.js";const Se=f("svg",{viewBox:"0 0 64 64",class:"check-icon"},f("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Te=f("svg",{viewBox:"0 0 100 100",class:"line-icon"},f("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),O=ue("n-checkbox-group"),$e={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},Me=j({name:"CheckboxGroup",props:$e,setup(e){const{mergedClsPrefixRef:r}=E(e),s=V(e),{mergedSizeRef:v,mergedDisabledRef:b}=s,h=_(e.defaultValue),i=B(()=>e.value),x=W(i,h),T=B(()=>{var u;return((u=x.value)===null||u===void 0?void 0:u.length)||0}),n=B(()=>Array.isArray(x.value)?new Set(x.value):new Set);function z(u,a){const{nTriggerFormInput:p,nTriggerFormChange:m}=s,{onChange:t,"onUpdate:value":C,onUpdateValue:y}=e;if(Array.isArray(x.value)){const k=Array.from(x.value),N=k.findIndex(A=>A===a);u?~N||(k.push(a),y&&l(y,k,{actionType:"check",value:a}),C&&l(C,k,{actionType:"check",value:a}),p(),m(),h.value=k,t&&l(t,k)):~N&&(k.splice(N,1),y&&l(y,k,{actionType:"uncheck",value:a}),C&&l(C,k,{actionType:"uncheck",value:a}),t&&l(t,k),h.value=k,p(),m())}else u?(y&&l(y,[a],{actionType:"check",value:a}),C&&l(C,[a],{actionType:"check",value:a}),t&&l(t,[a]),h.value=[a],p(),m()):(y&&l(y,[],{actionType:"uncheck",value:a}),C&&l(C,[],{actionType:"uncheck",value:a}),t&&l(t,[]),h.value=[],p(),m())}return he(O,{checkedCountRef:T,maxRef:K(e,"max"),minRef:K(e,"min"),valueSetRef:n,disabledRef:b,mergedSizeRef:v,toggleCheckbox:z}),{mergedClsPrefix:r}},render(){return f("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),De=d([c("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[S("show-label","line-height: var(--n-label-line-height);"),d("&:hover",[c("checkbox-box",[R("border","border: var(--n-border-checked);")])]),d("&:focus:not(:active)",[c("checkbox-box",[R("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),S("inside-table",[c("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),S("checked",[c("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[c("checkbox-icon",[d(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),S("indeterminate",[c("checkbox-box",[c("checkbox-icon",[d(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),d(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),S("checked, indeterminate",[d("&:focus:not(:active)",[c("checkbox-box",[R("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),c("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[R("border",{border:"var(--n-border-checked)"})])]),S("disabled",{cursor:"not-allowed"},[S("checked",[c("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[R("border",{border:"var(--n-border-disabled-checked)"}),c("checkbox-icon",[d(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),c("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[R("border",`
 border: var(--n-border-disabled);
 `),c("checkbox-icon",[d(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),R("label",`
 color: var(--n-text-color-disabled);
 `)]),c("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),c("checkbox-box",`
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
 `,[R("border",`
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
 `),c("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[d(".check-icon, .line-icon",`
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
 `),fe({left:"1px",top:"1px"})])]),R("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[d("&:empty",{display:"none"})])]),ve(c("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),ke(c("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Be=Object.assign(Object.assign({},U.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Ne=j({name:"Checkbox",props:Be,setup(e){const r=ge(O,null),s=_(null),{mergedClsPrefixRef:v,inlineThemeDisabled:b,mergedRtlRef:h}=E(e),i=_(e.defaultChecked),x=K(e,"checked"),T=W(x,i),n=xe(()=>{if(r){const o=r.valueSetRef.value;return o&&e.value!==void 0?o.has(e.value):!1}else return T.value===e.checkedValue}),z=V(e,{mergedSize(o){const{size:w}=e;if(w!==void 0)return w;if(r){const{value:g}=r.mergedSizeRef;if(g!==void 0)return g}if(o){const{mergedSize:g}=o;if(g!==void 0)return g.value}return"medium"},mergedDisabled(o){const{disabled:w}=e;if(w!==void 0)return w;if(r){if(r.disabledRef.value)return!0;const{maxRef:{value:g},checkedCountRef:$}=r;if(g!==void 0&&$.value>=g&&!n.value)return!0;const{minRef:{value:F}}=r;if(F!==void 0&&$.value<=F&&n.value)return!0}return o?o.disabled.value:!1}}),{mergedDisabledRef:u,mergedSizeRef:a}=z,p=U("Checkbox","-checkbox",De,me,e,v);function m(o){if(r&&e.value!==void 0)r.toggleCheckbox(!n.value,e.value);else{const{onChange:w,"onUpdate:checked":g,onUpdateChecked:$}=e,{nTriggerFormInput:F,nTriggerFormChange:H}=z,I=n.value?e.uncheckedValue:e.checkedValue;g&&l(g,I,o),$&&l($,I,o),w&&l(w,I,o),F(),H(),i.value=I}}function t(o){u.value||m(o)}function C(o){if(!u.value)switch(o.key){case" ":case"Enter":m(o)}}function y(o){switch(o.key){case" ":o.preventDefault()}}const k={focus:()=>{var o;(o=s.value)===null||o===void 0||o.focus()},blur:()=>{var o;(o=s.value)===null||o===void 0||o.blur()}},N=pe("Checkbox",h,v),A=B(()=>{const{value:o}=a,{common:{cubicBezierEaseInOut:w},self:{borderRadius:g,color:$,colorChecked:F,colorDisabled:H,colorTableHeader:I,colorTableHeaderModal:G,colorTableHeaderPopover:q,checkMarkColor:J,checkMarkColorDisabled:Q,border:X,borderFocus:Y,borderDisabled:Z,borderChecked:ee,boxShadowFocus:oe,textColor:re,textColorDisabled:ne,checkMarkColorDisabledChecked:ae,colorDisabledChecked:ce,borderDisabledChecked:te,labelPadding:ie,labelLineHeight:le,labelFontWeight:de,[D("fontSize",o)]:se,[D("size",o)]:be}}=p.value;return{"--n-label-line-height":le,"--n-label-font-weight":de,"--n-size":be,"--n-bezier":w,"--n-border-radius":g,"--n-border":X,"--n-border-checked":ee,"--n-border-focus":Y,"--n-border-disabled":Z,"--n-border-disabled-checked":te,"--n-box-shadow-focus":oe,"--n-color":$,"--n-color-checked":F,"--n-color-table":I,"--n-color-table-modal":G,"--n-color-table-popover":q,"--n-color-disabled":H,"--n-color-disabled-checked":ce,"--n-text-color":re,"--n-text-color-disabled":ne,"--n-check-mark-color":J,"--n-check-mark-color-disabled":Q,"--n-check-mark-color-disabled-checked":ae,"--n-font-size":se,"--n-label-padding":ie}}),P=b?L("checkbox",B(()=>a.value[0]),A,e):void 0;return Object.assign(z,k,{rtlEnabled:N,selfRef:s,mergedClsPrefix:v,mergedDisabled:u,renderedChecked:n,mergedTheme:p,labelId:Ce(),handleClick:t,handleKeyUp:C,handleKeyDown:y,cssVars:b?void 0:A,themeClass:P==null?void 0:P.themeClass,onRender:P==null?void 0:P.onRender})},render(){var e;const{$slots:r,renderedChecked:s,mergedDisabled:v,indeterminate:b,privateInsideTable:h,cssVars:i,labelId:x,label:T,mergedClsPrefix:n,focusable:z,handleKeyUp:u,handleKeyDown:a,handleClick:p}=this;(e=this.onRender)===null||e===void 0||e.call(this);const m=ye(r.default,t=>T||t?f("span",{class:`${n}-checkbox__label`,id:x},T||t):null);return f("div",{ref:"selfRef",class:[`${n}-checkbox`,this.themeClass,this.rtlEnabled&&`${n}-checkbox--rtl`,s&&`${n}-checkbox--checked`,v&&`${n}-checkbox--disabled`,b&&`${n}-checkbox--indeterminate`,h&&`${n}-checkbox--inside-table`,m&&`${n}-checkbox--show-label`],tabindex:v||!z?void 0:0,role:"checkbox","aria-checked":b?"mixed":s,"aria-labelledby":x,style:i,onKeyup:u,onKeydown:a,onClick:p,onMousedown:()=>{ze("selectstart",window,t=>{t.preventDefault()},{once:!0})}},f("div",{class:`${n}-checkbox-box-wrapper`}," ",f("div",{class:`${n}-checkbox-box`},f(we,null,{default:()=>this.indeterminate?f("div",{key:"indeterminate",class:`${n}-checkbox-icon`},Te):f("div",{key:"check",class:`${n}-checkbox-icon`},Se)}),f("div",{class:`${n}-checkbox-box__border`}))),m)}}),Pe=c("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[d("&:first-child",{marginTop:0}),S("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[S("align-text",{paddingLeft:0},[d("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),d("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),d("&::before",{backgroundColor:"var(--n-bar-color)"})])]),Fe=Object.assign(Object.assign({},U.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),M=e=>j({name:`H${e}`,props:Fe,setup(r){const{mergedClsPrefixRef:s,inlineThemeDisabled:v}=E(r),b=U("Typography","-h",Pe,Re,r,s),h=B(()=>{const{type:x}=r,{common:{cubicBezierEaseInOut:T},self:{headerFontWeight:n,headerTextColor:z,[D("headerPrefixWidth",e)]:u,[D("headerFontSize",e)]:a,[D("headerMargin",e)]:p,[D("headerBarWidth",e)]:m,[D("headerBarColor",x)]:t}}=b.value;return{"--n-bezier":T,"--n-font-size":a,"--n-margin":p,"--n-bar-color":t,"--n-bar-width":m,"--n-font-weight":n,"--n-text-color":z,"--n-prefix-width":u}}),i=v?L(`h${e}`,B(()=>r.type[0]),h,r):void 0;return{mergedClsPrefix:s,cssVars:v?void 0:h,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var r;const{prefix:s,alignText:v,mergedClsPrefix:b,cssVars:h,$slots:i}=this;return(r=this.onRender)===null||r===void 0||r.call(this),f(`h${e}`,{class:[`${b}-h`,`${b}-h${e}`,this.themeClass,{[`${b}-h--prefix-bar`]:s,[`${b}-h--align-text`]:v}],style:h},i)}}),Ae=M("1");M("2");M("3");const Ue=M("4");M("5");const He=M("6");export{Me as N,Ne as a,Ae as b,He as c,Ue as d};
