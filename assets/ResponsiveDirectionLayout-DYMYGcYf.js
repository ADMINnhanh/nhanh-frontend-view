import{j as T,m as u,n as G,l as J,d as k,p as W,H as R,au as q,J as x,C as U,D as Q,av as Z,E as ee,L as I,x as a,aw as te,ax as V,T as O,G as j,ay as F,az as ie,K as oe,aA as re,o as ne,ah as se,w as H,u as L,aB as A,al as le,_ as ae}from"./index-Bm85rG3o.js";const ce=T("split",`
 display: flex;
 width: 100%;
 height: 100%;
`,[u("horizontal",`
 flex-direction: row;
 `),u("vertical",`
 flex-direction: column;
 `),T("split-pane-1",`
 overflow: hidden;
 `),T("split-pane-2",`
 overflow: hidden;
 flex: 1;
 `),G("resize-trigger",`
 background-color: var(--n-resize-trigger-color);
 transition: background-color .3s var(--n-bezier);
 `,[u("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `),J("&:hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)])]),de=Object.assign(Object.assign({},R.props),{direction:{type:String,default:"horizontal"},resizeTriggerSize:{type:Number,default:3},disabled:Boolean,defaultSize:{type:[String,Number],default:.5},"onUpdate:size":[Function,Array],onUpdateSize:[Function,Array],size:[String,Number],min:{type:[String,Number],default:0},max:{type:[String,Number],default:1},pane1Class:String,pane1Style:[Object,String],pane2Class:String,pane2Style:[Object,String],onDragStart:Function,onDragMove:Function,onDragEnd:Function,watchProps:Array}),ge=k({name:"Split",props:de,setup(e){var i;const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=W(e),l=R("Split","-split",ce,q,e,o),n=x(()=>{const{common:{cubicBezierEaseInOut:t},self:{resizableTriggerColor:s,resizableTriggerColorHover:c}}=l.value;return{"--n-bezier":t,"--n-resize-trigger-color":s,"--n-resize-trigger-color-hover":c}}),h=U(null),f=U(!1),w=Q(e,"size"),y=U(e.defaultSize);!((i=e.watchProps)===null||i===void 0)&&i.includes("defaultSize")&&Z(()=>y.value=e.defaultSize);const b=t=>{const s=e["onUpdate:size"];e.onUpdateSize&&j(e.onUpdateSize,t),s&&j(s,t),y.value=t},p=ee(w,y),D=x(()=>{const t=p.value;if(typeof t=="string")return{flex:`0 0 ${t}`};if(typeof t=="number"){const s=t*100;return{flex:`0 0 calc(${s}% - ${e.resizeTriggerSize*s/100}px)`}}}),P=x(()=>e.direction==="horizontal"?{width:`${e.resizeTriggerSize}px`,height:"100%"}:{width:"100%",height:`${e.resizeTriggerSize}px`}),C=x(()=>{const t=e.direction==="horizontal";return{width:t?`${e.resizeTriggerSize}px`:"",height:t?"":`${e.resizeTriggerSize}px`,cursor:e.direction==="horizontal"?"col-resize":"row-resize"}});let v=0;const M=t=>{t.preventDefault(),f.value=!0,e.onDragStart&&e.onDragStart(t);const s="mousemove",c="mouseup",d=g=>{N(g),e.onDragMove&&e.onDragMove(g)},S=()=>{F(s,document,d),F(c,document,S),f.value=!1,e.onDragEnd&&e.onDragEnd(t),document.body.style.cursor=""};document.body.style.cursor=C.value.cursor,V(s,document,d),V(c,document,S);const $=h.value;if($){const g=$.getBoundingClientRect();e.direction==="horizontal"?v=t.clientX-g.left:v=g.top-t.clientY}N(t)};function N(t){var s,c;const d=(c=(s=h.value)===null||s===void 0?void 0:s.parentElement)===null||c===void 0?void 0:c.getBoundingClientRect();if(!d)return;const{direction:S}=e,$=d.width-e.resizeTriggerSize,g=d.height-e.resizeTriggerSize,_=S==="horizontal"?$:g,K=S==="horizontal"?t.clientX-d.left-v:t.clientY-d.top+v,{min:B,max:E}=e,X=typeof B=="string"?O(B):B*_,Y=typeof E=="string"?O(E):E*_;let z=K;z=Math.max(z,X),z=Math.min(z,Y,_),typeof p.value=="string"?b(`${z}px`):b(z/_)}const m=r?I("split",void 0,n,e):void 0;return{themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender,cssVars:r?void 0:n,resizeTriggerElRef:h,isDragging:f,mergedClsPrefix:o,resizeTriggerWrapperStyle:C,resizeTriggerStyle:P,handleMouseDown:M,firstPaneStyle:D}},render(){var e,i,o,r,l;return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{class:[`${this.mergedClsPrefix}-split`,`${this.mergedClsPrefix}-split--${this.direction}`,this.themeClass],style:this.cssVars},a("div",{class:[`${this.mergedClsPrefix}-split-pane-1`,this.pane1Class],style:[this.firstPaneStyle,this.pane1Style]},(o=(i=this.$slots)[1])===null||o===void 0?void 0:o.call(i)),!this.disabled&&a("div",{ref:"resizeTriggerElRef",class:`${this.mergedClsPrefix}-split__resize-trigger-wrapper`,style:this.resizeTriggerWrapperStyle,onMousedown:this.handleMouseDown},te(this.$slots["resize-trigger"],()=>[a("div",{style:this.resizeTriggerStyle,class:[`${this.mergedClsPrefix}-split__resize-trigger`,this.isDragging&&`${this.mergedClsPrefix}-split__resize-trigger--hover`]})])),a("div",{class:[`${this.mergedClsPrefix}-split-pane-2`,this.pane2Class],style:this.pane2Style},(l=(r=this.$slots)[2])===null||l===void 0?void 0:l.call(r)))}}),ue=T("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[u("strong",`
 font-weight: var(--n-font-weight-strong);
 `),u("italic",{fontStyle:"italic"}),u("underline",{textDecoration:"underline"}),u("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),he=Object.assign(Object.assign({},R.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),me=k({name:"Text",props:he,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:o}=W(e),r=R("Typography","-text",ue,ie,e,i),l=x(()=>{const{depth:h,type:f}=e,w=f==="default"?h===void 0?"textColor":`textColor${h}Depth`:oe("textColor",f),{common:{fontWeightStrong:y,fontFamilyMono:b,cubicBezierEaseInOut:p},self:{codeTextColor:D,codeBorderRadius:P,codeColor:C,codeBorder:v,[w]:M}}=r.value;return{"--n-bezier":p,"--n-text-color":M,"--n-font-weight-strong":y,"--n-font-famliy-mono":b,"--n-code-border-radius":P,"--n-code-text-color":D,"--n-code-color":C,"--n-code-border":v}}),n=o?I("text",x(()=>`${e.type[0]}${e.depth||""}`),l,e):void 0;return{mergedClsPrefix:i,compitableTag:re(e,["as","tag"]),cssVars:o?void 0:l,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e,i,o;const{mergedClsPrefix:r}=this;(e=this.onRender)===null||e===void 0||e.call(this);const l=[`${r}-text`,this.themeClass,{[`${r}-text--code`]:this.code,[`${r}-text--delete`]:this.delete,[`${r}-text--strong`]:this.strong,[`${r}-text--italic`]:this.italic,[`${r}-text--underline`]:this.underline}],n=(o=(i=this.$slots).default)===null||o===void 0?void 0:o.call(i);return this.code?a("code",{class:l,style:this.cssVars},this.delete?a("del",null,n):n):this.delete?a("del",{class:l,style:this.cssVars},n):a(this.compitableTag||"span",{class:l,style:this.cssVars},n)}}),fe=k({__name:"ResponsiveDirectionLayout",setup(e){return(i,o)=>(ne(),se(L(ge),{direction:L(le).isMobileStyle?"vertical":"horizontal",max:.75,min:.25,"default-size":.25},{1:H(()=>[A(i.$slots,"left",{},void 0,!0)]),2:H(()=>[A(i.$slots,"right",{},void 0,!0)]),_:3},8,["direction"]))}}),ze=ae(fe,[["__scopeId","data-v-ad75fb31"]]);export{me as N,ze as R};
