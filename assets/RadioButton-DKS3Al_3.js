import{C as oe,f as te,ax as E,n as k,D as V,az as P,E as $,l as A,aJ as w,j as F,A as m,k as x,z as _,y as T,d as G,J as N,bf as re,G as ne,aM as ae,h as U,P as D,L as ie,bz as de,bA as se,s as y,bg as le}from"./index-Do2VL4Ea.js";const ue={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},j=oe("n-radio-group");function ce(e){const o=te(j,null),r=E(e,{mergedSize(t){const{size:a}=e;if(a!==void 0)return a;if(o){const{mergedSizeRef:{value:d}}=o;if(d!==void 0)return d}return t?t.mergedSize.value:"medium"},mergedDisabled(t){return!!(e.disabled||o!=null&&o.disabledRef.value||t!=null&&t.disabled.value)}}),{mergedSizeRef:b,mergedDisabledRef:n}=r,s=k(null),l=k(null),u=k(e.defaultChecked),h=V(e,"checked"),g=P(h,u),v=$(()=>o?o.valueRef.value===e.value:g.value),R=$(()=>{const{name:t}=e;if(t!==void 0)return t;if(o)return o.nameRef.value}),f=k(!1);function C(){if(o){const{doUpdateValue:t}=o,{value:a}=e;w(t,a)}else{const{onUpdateChecked:t,"onUpdate:checked":a}=e,{nTriggerFormInput:d,nTriggerFormChange:i}=r;t&&w(t,!0),a&&w(a,!0),d(),i(),u.value=!0}}function p(){n.value||v.value||C()}function z(){p(),s.value&&(s.value.checked=v.value)}function S(){f.value=!1}function B(){f.value=!0}return{mergedClsPrefix:o?o.mergedClsPrefixRef:A(e).mergedClsPrefixRef,inputRef:s,labelRef:l,mergedName:R,mergedDisabled:n,renderSafeChecked:v,focus:f,mergedSize:b,handleRadioInputChange:z,handleRadioInputBlur:S,handleRadioInputFocus:B}}const be=F("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[m("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[x("checked",{backgroundColor:"var(--n-button-border-color-active)"}),x("disabled",{opacity:"var(--n-opacity-disabled)"})]),x("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[F("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),m("splitor",{height:"var(--n-height)"})]),F("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[F("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),m("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),_("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[m("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),_("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[m("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),T("disabled",`
 cursor: pointer;
 `,[_("&:hover",[m("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),T("checked",{color:"var(--n-button-text-color-hover)"})]),x("focus",[_("&:not(:active)",[m("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),x("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),x("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function he(e,o,r){var b;const n=[];let s=!1;for(let l=0;l<e.length;++l){const u=e[l],h=(b=u.type)===null||b===void 0?void 0:b.name;h==="RadioButton"&&(s=!0);const g=u.props;if(h!=="RadioButton"){n.push(u);continue}if(l===0)n.push(u);else{const v=n[n.length-1].props,R=o===v.value,f=v.disabled,C=o===g.value,p=g.disabled,z=(R?2:0)+(f?0:1),S=(C?2:0)+(p?0:1),B={[`${r}-radio-group__splitor--disabled`]:f,[`${r}-radio-group__splitor--checked`]:R},t={[`${r}-radio-group__splitor--disabled`]:p,[`${r}-radio-group__splitor--checked`]:C},a=z<S?t:B;n.push(y("div",{class:[`${r}-radio-group__splitor`,a]}),u)}}return{children:n,isButtonGroup:s}}const fe=Object.assign(Object.assign({},N.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ge=G({name:"RadioGroup",props:fe,setup(e){const o=k(null),{mergedSizeRef:r,mergedDisabledRef:b,nTriggerFormChange:n,nTriggerFormInput:s,nTriggerFormBlur:l,nTriggerFormFocus:u}=E(e),{mergedClsPrefixRef:h,inlineThemeDisabled:g,mergedRtlRef:v}=A(e),R=N("Radio","-radio-group",be,re,e,h),f=k(e.defaultValue),C=V(e,"value"),p=P(C,f);function z(i){const{onUpdateValue:c,"onUpdate:value":I}=e;c&&w(c,i),I&&w(I,i),f.value=i,n(),s()}function S(i){const{value:c}=o;c&&(c.contains(i.relatedTarget)||u())}function B(i){const{value:c}=o;c&&(c.contains(i.relatedTarget)||l())}ne(j,{mergedClsPrefixRef:h,nameRef:V(e,"name"),valueRef:p,disabledRef:b,mergedSizeRef:r,doUpdateValue:z});const t=ae("Radio",v,h),a=U(()=>{const{value:i}=r,{common:{cubicBezierEaseInOut:c},self:{buttonBorderColor:I,buttonBorderColorActive:H,buttonBorderRadius:M,buttonBoxShadow:K,buttonBoxShadowFocus:O,buttonBoxShadowHover:J,buttonColor:L,buttonColorActive:W,buttonTextColor:q,buttonTextColorActive:Q,buttonTextColorHover:X,opacityDisabled:Y,[D("buttonHeight",i)]:Z,[D("fontSize",i)]:ee}}=R.value;return{"--n-font-size":ee,"--n-bezier":c,"--n-button-border-color":I,"--n-button-border-color-active":H,"--n-button-border-radius":M,"--n-button-box-shadow":K,"--n-button-box-shadow-focus":O,"--n-button-box-shadow-hover":J,"--n-button-color":L,"--n-button-color-active":W,"--n-button-text-color":q,"--n-button-text-color-hover":X,"--n-button-text-color-active":Q,"--n-height":Z,"--n-opacity-disabled":Y}}),d=g?ie("radio-group",U(()=>r.value[0]),a,e):void 0;return{selfElRef:o,rtlEnabled:t,mergedClsPrefix:h,mergedValue:p,handleFocusout:B,handleFocusin:S,cssVars:g?void 0:a,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:r,handleFocusin:b,handleFocusout:n}=this,{children:s,isButtonGroup:l}=he(de(se(this)),o,r);return(e=this.onRender)===null||e===void 0||e.call(this),y("div",{onFocusin:b,onFocusout:n,ref:"selfElRef",class:[`${r}-radio-group`,this.rtlEnabled&&`${r}-radio-group--rtl`,this.themeClass,l&&`${r}-radio-group--button-group`],style:this.cssVars},s)}}),pe=G({name:"RadioButton",props:ue,setup:ce,render(){const{mergedClsPrefix:e}=this;return y("label",{class:[`${e}-radio-button`,this.mergedDisabled&&`${e}-radio-button--disabled`,this.renderSafeChecked&&`${e}-radio-button--checked`,this.focus&&[`${e}-radio-button--focus`]]},y("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),y("div",{class:`${e}-radio-button__state-border`}),le(this.$slots.default,o=>!o&&!this.label?null:y("div",{ref:"labelRef",class:`${e}-radio__label`},o||this.label)))}});export{ge as N,pe as a,ue as r,ce as s};
