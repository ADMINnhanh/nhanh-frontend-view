import{bD as V,bE as P,bF as Z,bG as be,bH as B,bI as E,bJ as O,bK as oe,bL as W,bM as Fe,bN as Ue,bO as _e,bP as Ae,d as A,l as i,p as w,g as _,aW as ae,aX as le,D as it,f as Te,aS as Ne,bQ as ue,bR as $e,bS as Re,bT as Ve,bU as st,I as re,j as b,bV as ut,J as U,k as Ie,bW as ct,bX as dt,bY as ht,bZ as Me,aQ as pt,aO as ft,b_ as gt,b$ as vt,m as bt,L as Ee,c0 as mt,E as xt,y as Se,aR as Pe,A as kt,U as Be,N as wt,c1 as yt,aV as Ct,b2 as he,B as pe,G as St,c as Oe,o as qe,W as J}from"./index-2obne4Ep.js";import{N as Ut}from"./Input-DosXqQzA.js";import{N as _t}from"./InputGroup-kVinSR_Z.js";import{u as At}from"./use-locale-BrweaMSH.js";function $t(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function ce(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function Rt(e,t=[255,255,255],l="AA"){const[n,a,o,s]=V(P(e));if(s===1){const L=fe([n,a,o]),z=fe(t);return(Math.max(L,z)+.05)/(Math.min(L,z)+.05)>=(l==="AA"?4.5:7)}const u=Math.round(n*s+t[0]*(1-s)),h=Math.round(a*s+t[1]*(1-s)),M=Math.round(o*s+t[2]*(1-s)),H=fe([u,h,M]),$=fe(t);return(Math.max(H,$)+.05)/(Math.min(H,$)+.05)>=(l==="AA"?4.5:7)}function fe(e){const[t,l,n]=e.map(a=>(a/=255,a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4)));return .2126*t+.7152*l+.0722*n}function Vt(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Mt(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const zt={rgb:{hex(e){return O(V(e))},hsl(e){const[t,l,n,a]=V(e);return P([...Ae(t,l,n),a])},hsv(e){const[t,l,n,a]=V(e);return W([..._e(t,l,n),a])}},hex:{rgb(e){return B(V(e))},hsl(e){const[t,l,n,a]=V(e);return P([...Ae(t,l,n),a])},hsv(e){const[t,l,n,a]=V(e);return W([..._e(t,l,n),a])}},hsl:{hex(e){const[t,l,n,a]=oe(e);return O([...Ue(t,l,n),a])},rgb(e){const[t,l,n,a]=oe(e);return B([...Ue(t,l,n),a])},hsv(e){const[t,l,n,a]=oe(e);return W([...Fe(t,l,n),a])}},hsv:{hex(e){const[t,l,n,a]=Z(e);return O([...E(t,l,n),a])},rgb(e){const[t,l,n,a]=Z(e);return B([...E(t,l,n),a])},hsl(e){const[t,l,n,a]=Z(e);return P([...be(t,l,n),a])}}};function Le(e,t,l){return l=l||ce(e),l?l===t?e:zt[l][t](e):null}const se="12px",Dt=12,G="6px",It=A({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=w(null);function l(o){!t.value||!e.rgba||(ae("mousemove",document,n),ae("mouseup",document,a),n(o))}function n(o){const{value:s}=t;if(!s)return;const{width:u,left:h}=s.getBoundingClientRect(),M=(o.clientX-h)/(u-Dt);e.onUpdateAlpha(Mt(M))}function a(){var o;le("mousemove",document,n),le("mouseup",document,a),(o=e.onComplete)===null||o===void 0||o.call(e)}return{railRef:t,railBackgroundImage:_(()=>{const{rgba:o}=e;return o?`linear-gradient(to right, rgba(${o[0]}, ${o[1]}, ${o[2]}, 0) 0%, rgba(${o[0]}, ${o[1]}, ${o[2]}, 1) 100%)`:""}),handleMouseDown:l}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:se,borderRadius:G},onMousedown:this.handleMouseDown},i("div",{style:{borderRadius:G,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},i("div",{class:`${e}-color-picker-checkboard`}),i("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&i("div",{style:{position:"absolute",left:G,right:G,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${G})`,borderRadius:G,width:se,height:se}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:B(this.rgba),borderRadius:G,width:se,height:se}}))))}}),ze=it("n-color-picker");function Pt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function Bt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function Ht(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function Ft(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Tt(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const Nt={paddingSmall:"0 4px"},He=A({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=w(""),{themeRef:l}=Te(ze,null);Ne(()=>{t.value=n()});function n(){const{value:s}=e;if(s===null)return"";const{label:u}=e;return u==="HEX"?s:u==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function a(s){t.value=s}function o(s){let u,h;switch(e.label){case"HEX":h=Ft(s),h&&e.onUpdateValue(s),t.value=n();break;case"H":u=Bt(s),u===!1?t.value=n():e.onUpdateValue(u);break;case"S":case"L":case"V":u=Ht(s),u===!1?t.value=n():e.onUpdateValue(u);break;case"A":u=Tt(s),u===!1?t.value=n():e.onUpdateValue(u);break;case"R":case"G":case"B":u=Pt(s),u===!1?t.value=n():e.onUpdateValue(u);break}}return{mergedTheme:l,inputValue:t,handleInputChange:o,handleInputUpdateValue:a}},render(){const{mergedTheme:e}=this;return i(Ut,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Nt,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Et=A({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,l){const{showAlpha:n}=e;if(e.mode==="hex"){e.onUpdateValue((n?O:ue)(l));return}let a;switch(e.valueArr===null?a=[0,0,0,0]:a=Array.from(e.valueArr),e.mode){case"hsv":a[t]=l,e.onUpdateValue((n?W:Ve)(a));break;case"rgb":a[t]=l,e.onUpdateValue((n?B:Re)(a));break;case"hsl":a[t]=l,e.onUpdateValue((n?P:$e)(a));break}}}},render(){const{clsPrefix:e,modes:t}=this;return i("div",{class:`${e}-color-picker-input`},i("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),i(_t,null,{default:()=>{const{mode:l,valueArr:n,showAlpha:a}=this;if(l==="hex"){let o=null;try{o=n===null?null:(a?O:ue)(n)}catch{}return i(He,{label:"HEX",showAlpha:a,value:o,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(l+(a?"a":"")).split("").map((o,s)=>i(He,{label:o.toUpperCase(),value:n===null?null:n[s],onUpdateValue:u=>{this.handleUnitUpdateValue(s,u)}}))}}))}});function Ot(e,t){if(t==="hsv"){const[l,n,a,o]=Z(e);return B([...E(l,n,a),o])}return e}function qt(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const Lt=A({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=_(()=>e.swatches.map(o=>{const s=ce(o);return{value:o,mode:s,legalValue:Ot(o,s)}}));function l(o){const{mode:s}=e;let{value:u,mode:h}=o;return h||(h="hex",/^[a-zA-Z]+$/.test(u)?u=qt(u):(st("color-picker",`color ${u} in swatches is invalid.`),u="#000000")),h===s?u:Le(u,s,h)}function n(o){e.onUpdateColor(l(o))}function a(o,s){o.key==="Enter"&&n(s)}return{parsedSwatchesRef:t,handleSwatchSelect:n,handleSwatchKeyDown:a}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>i("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:l=>{this.handleSwatchKeyDown(l,t)}},i("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),jt=A({name:"ColorPickerTrigger",slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:l}=Te(ze,null);return()=>{const{hsla:n,value:a,clsPrefix:o,onClick:s,disabled:u}=e,h=t.label||l.value;return i("div",{class:[`${o}-color-picker-trigger`,u&&`${o}-color-picker-trigger--disabled`],onClick:u?void 0:s},i("div",{class:`${o}-color-picker-trigger__fill`},i("div",{class:`${o}-color-picker-checkboard`}),i("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?P(n):""}}),a&&n?i("div",{class:`${o}-color-picker-trigger__value`,style:{color:Rt(n)?"white":"black"}},h?h(a):a):null))}}}),Xt=A({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=ce(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(l){var n;const a=l.target.value;(n=e.onUpdateColor)===null||n===void 0||n.call(e,Le(a.toUpperCase(),e.mode,"hex")),l.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-preview__preview`},i("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),i("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),ne="12px",Gt=12,K="6px",Kt=6,Zt="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",Wt=A({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=w(null);function l(o){t.value&&(ae("mousemove",document,n),ae("mouseup",document,a),n(o))}function n(o){const{value:s}=t;if(!s)return;const{width:u,left:h}=s.getBoundingClientRect(),M=Vt((o.clientX-h-Kt)/(u-Gt)*360);e.onUpdateHue(M)}function a(){var o;le("mousemove",document,n),le("mouseup",document,a),(o=e.onComplete)===null||o===void 0||o.call(e)}return{railRef:t,handleMouseDown:l}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,style:{height:ne,borderRadius:K}},i("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Zt,height:ne,borderRadius:K,position:"relative"},onMousedown:this.handleMouseDown},i("div",{style:{position:"absolute",left:K,right:K,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${K})`,borderRadius:K,width:ne,height:ne}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:K,width:ne,height:ne}})))))}}),ge="12px",ve="6px",Jt=A({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=w(null);function l(o){t.value&&(ae("mousemove",document,n),ae("mouseup",document,a),n(o))}function n(o){const{value:s}=t;if(!s)return;const{width:u,height:h,left:M,bottom:H}=s.getBoundingClientRect(),$=(H-o.clientY)/h,q=(o.clientX-M)/u,L=100*(q>1?1:q<0?0:q),z=100*($>1?1:$<0?0:$);e.onUpdateSV(L,z)}function a(){var o;le("mousemove",document,n),le("mouseup",document,a),(o=e.onComplete)===null||o===void 0||o.call(e)}return{palleteRef:t,handleColor:_(()=>{const{rgba:o}=e;return o?`rgb(${o[0]}, ${o[1]}, ${o[2]})`:""}),handleMouseDown:l}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},i("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),i("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&i("div",{class:`${e}-color-picker-handle`,style:{width:ge,height:ge,borderRadius:ve,left:`calc(${this.displayedSv[0]}% - ${ve})`,bottom:`calc(${this.displayedSv[1]}% - ${ve})`}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:ve,width:ge,height:ge}})))}}),Qt=re([b("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),b("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[ut(),b("input",`
 text-align: center;
 `)]),b("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[re("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),b("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[U("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),re("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),b("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[U("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),b("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[U("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[Ie("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),b("color-picker-preview",`
 display: flex;
 `,[U("sliders",`
 flex: 1 0 auto;
 `),U("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),U("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),U("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),b("color-picker-input",`
 display: flex;
 align-items: center;
 `,[b("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),U("mode",`
 width: 72px;
 text-align: center;
 `)]),b("color-picker-control",`
 padding: 12px;
 `),b("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[b("button","margin-left: 8px;")]),b("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[U("value",`
 white-space: nowrap;
 position: relative;
 `),U("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),Ie("disabled","cursor: not-allowed"),b("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[re("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),b("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[b("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[U("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),re("&:focus",`
 outline: none;
 `,[U("fill",[re("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),Yt=Object.assign(Object.assign({},Ee.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Me.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),gr=A({name:"ColorPicker",props:Yt,slots:Object,setup(e,{slots:t}){const l=w(null);let n=null;const a=vt(e),{mergedSizeRef:o,mergedDisabledRef:s}=a,{localeRef:u}=At("global"),{mergedClsPrefixRef:h,namespaceRef:M,inlineThemeDisabled:H}=bt(e),$=Ee("ColorPicker","-color-picker",Qt,mt,e,h);xt(ze,{themeRef:$,renderLabelRef:Se(e,"renderLabel"),colorPickerSlots:t});const q=w(e.defaultShow),L=Pe(Se(e,"show"),q);function z(r){const{onUpdateShow:c,"onUpdate:show":p}=e;c&&he(c,r),p&&he(p,r),q.value=r}const{defaultValue:me}=e,De=w(me===void 0?$t(e.modes,e.showAlpha):me),x=Pe(Se(e,"value"),De),Q=w([x.value]),D=w(0),xe=_(()=>ce(x.value)),{modes:je}=e,R=w(ce(x.value)||je[0]||"rgb");function Xe(){const{modes:r}=e,{value:c}=R,p=r.findIndex(f=>f===c);~p?R.value=r[(p+1)%r.length]:R.value="rgb"}let y,C,Y,ee,F,T,N,S;const ie=_(()=>{const{value:r}=x;if(!r)return null;switch(xe.value){case"hsv":return Z(r);case"hsl":return[y,C,Y,S]=oe(r),[...Fe(y,C,Y),S];case"rgb":case"hex":return[F,T,N,S]=V(r),[..._e(F,T,N),S]}}),j=_(()=>{const{value:r}=x;if(!r)return null;switch(xe.value){case"rgb":case"hex":return V(r);case"hsv":return[y,C,ee,S]=Z(r),[...E(y,C,ee),S];case"hsl":return[y,C,Y,S]=oe(r),[...Ue(y,C,Y),S]}}),ke=_(()=>{const{value:r}=x;if(!r)return null;switch(xe.value){case"hsl":return oe(r);case"hsv":return[y,C,ee,S]=Z(r),[...be(y,C,ee),S];case"rgb":case"hex":return[F,T,N,S]=V(r),[...Ae(F,T,N),S]}}),Ge=_(()=>{switch(R.value){case"rgb":case"hex":return j.value;case"hsv":return ie.value;case"hsl":return ke.value}}),de=w(0),we=w(1),ye=w([0,0]);function Ke(r,c){const{value:p}=ie,f=de.value,g=p?p[3]:1;ye.value=[r,c];const{showAlpha:d}=e;switch(R.value){case"hsv":v((d?W:Ve)([f,r,c,g]),"cursor");break;case"hsl":v((d?P:$e)([...be(f,r,c),g]),"cursor");break;case"rgb":v((d?B:Re)([...E(f,r,c),g]),"cursor");break;case"hex":v((d?O:ue)([...E(f,r,c),g]),"cursor");break}}function Ze(r){de.value=r;const{value:c}=ie;if(!c)return;const[,p,f,g]=c,{showAlpha:d}=e;switch(R.value){case"hsv":v((d?W:Ve)([r,p,f,g]),"cursor");break;case"rgb":v((d?B:Re)([...E(r,p,f),g]),"cursor");break;case"hex":v((d?O:ue)([...E(r,p,f),g]),"cursor");break;case"hsl":v((d?P:$e)([...be(r,p,f),g]),"cursor");break}}function We(r){switch(R.value){case"hsv":[y,C,ee]=ie.value,v(W([y,C,ee,r]),"cursor");break;case"rgb":[F,T,N]=j.value,v(B([F,T,N,r]),"cursor");break;case"hex":[F,T,N]=j.value,v(O([F,T,N,r]),"cursor");break;case"hsl":[y,C,Y]=ke.value,v(P([y,C,Y,r]),"cursor");break}we.value=r}function v(r,c){c==="cursor"?n=r:n=null;const{nTriggerFormChange:p,nTriggerFormInput:f}=a,{onUpdateValue:g,"onUpdate:value":d}=e;g&&he(g,r),d&&he(d,r),p(),f(),De.value=r}function Je(r){v(r,"input"),St(te)}function te(r=!0){const{value:c}=x;if(c){const{nTriggerFormChange:p,nTriggerFormInput:f}=a,{onComplete:g}=e;g&&g(c);const{value:d}=Q,{value:k}=D;r&&(d.splice(k+1,d.length,c),D.value=k+1),p(),f()}}function Qe(){const{value:r}=D;r-1<0||(v(Q.value[r-1],"input"),te(!1),D.value=r-1)}function Ye(){const{value:r}=D;r<0||r+1>=Q.value.length||(v(Q.value[r+1],"input"),te(!1),D.value=r+1)}function et(){v(null,"input");const{onClear:r}=e;r&&r(),z(!1)}function tt(){const{value:r}=x,{onConfirm:c}=e;c&&c(r),z(!1)}const rt=_(()=>D.value>=1),nt=_(()=>{const{value:r}=Q;return r.length>1&&D.value<r.length-1});kt(L,r=>{r||(Q.value=[x.value],D.value=0)}),Ne(()=>{if(!(n&&n===x.value)){const{value:r}=ie;r&&(de.value=r[0],we.value=r[3],ye.value=[r[1],r[2]])}n=null});const Ce=_(()=>{const{value:r}=o,{common:{cubicBezierEaseInOut:c},self:{textColor:p,color:f,panelFontSize:g,boxShadow:d,border:k,borderRadius:m,dividerColor:X,[Be("height",r)]:at,[Be("fontSize",r)]:lt}}=$.value;return{"--n-bezier":c,"--n-text-color":p,"--n-color":f,"--n-panel-font-size":g,"--n-font-size":lt,"--n-box-shadow":d,"--n-border":k,"--n-border-radius":m,"--n-height":at,"--n-divider-color":X}}),I=H?wt("color-picker",_(()=>o.value[0]),Ce,e):void 0;function ot(){var r;const{value:c}=j,{value:p}=de,{internalActions:f,modes:g,actions:d}=e,{value:k}=$,{value:m}=h;return i("div",{class:[`${m}-color-picker-panel`,I==null?void 0:I.themeClass.value],onDragstart:X=>{X.preventDefault()},style:H?void 0:Ce.value},i("div",{class:`${m}-color-picker-control`},i(Jt,{clsPrefix:m,rgba:c,displayedHue:p,displayedSv:ye.value,onUpdateSV:Ke,onComplete:te}),i("div",{class:`${m}-color-picker-preview`},i("div",{class:`${m}-color-picker-preview__sliders`},i(Wt,{clsPrefix:m,hue:p,onUpdateHue:Ze,onComplete:te}),e.showAlpha?i(It,{clsPrefix:m,rgba:c,alpha:we.value,onUpdateAlpha:We,onComplete:te}):null),e.showPreview?i(Xt,{clsPrefix:m,mode:R.value,color:j.value&&ue(j.value),onUpdateColor:X=>{v(X,"input")}}):null),i(Et,{clsPrefix:m,showAlpha:e.showAlpha,mode:R.value,modes:g,onUpdateMode:Xe,value:x.value,valueArr:Ge.value,onUpdateValue:Je}),((r=e.swatches)===null||r===void 0?void 0:r.length)&&i(Lt,{clsPrefix:m,mode:R.value,swatches:e.swatches,onUpdateColor:X=>{v(X,"input")}})),d!=null&&d.length?i("div",{class:`${m}-color-picker-action`},d.includes("confirm")&&i(pe,{size:"small",onClick:tt,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>u.value.confirm}),d.includes("clear")&&i(pe,{size:"small",onClick:et,disabled:!x.value,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>u.value.clear})):null,t.action?i("div",{class:`${m}-color-picker-action`},{default:t.action}):f?i("div",{class:`${m}-color-picker-action`},f.includes("undo")&&i(pe,{size:"small",onClick:Qe,disabled:!rt.value,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>u.value.undo}),f.includes("redo")&&i(pe,{size:"small",onClick:Ye,disabled:!nt.value,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>u.value.redo})):null)}return{mergedClsPrefix:h,namespace:M,selfRef:l,hsla:ke,rgba:j,mergedShow:L,mergedDisabled:s,isMounted:yt(),adjustedTo:Me(e),mergedValue:x,handleTriggerClick(){z(!0)},handleClickOutside(r){var c;!((c=l.value)===null||c===void 0)&&c.contains(Ct(r))||z(!1)},renderPanel:ot,cssVars:H?void 0:Ce,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t==null||t(),i("div",{class:[this.themeClass,`${e}-color-picker`],ref:"selfRef",style:this.cssVars},i(ct,null,{default:()=>[i(dt,null,{default:()=>i(jt,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick})}),i(ht,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Me.tdkey,to:this.adjustedTo},{default:()=>i(pt,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?ft(this.renderPanel(),[[gt,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),er={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},tr=J("path",{d:"M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),rr=J("path",{d:"M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38z",fill:"currentColor"},null,-1),nr=J("path",{d:"M399.34 90L218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0z",fill:"currentColor"},null,-1),or=[tr,rr,nr],vr=A({name:"CreateOutline",render:function(t,l){return qe(),Oe("svg",er,or)}}),ar={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},lr=J("path",{d:"M432 144l-28.67 275.74A32 32 0 0 1 371.55 448H140.46a32 32 0 0 1-31.78-28.26L80 144",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ir=J("rect",{x:"32",y:"64",width:"448",height:"80",rx:"16",ry:"16",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),sr=J("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M312 240L200 352"},null,-1),ur=J("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M312 352L200 240"},null,-1),cr=[lr,ir,sr,ur],br=A({name:"TrashBinOutline",render:function(t,l){return qe(),Oe("svg",ar,cr)}});export{vr as C,gr as N,br as T};
