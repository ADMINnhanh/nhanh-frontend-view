import{j as T,m,n as G,l as J,d as V,p as X,H as D,au as Q,J as S,C as w,D as Z,av as ee,E as te,L as Y,x as d,aw as ie,ax as j,T as F,G as L,ay as A,az as oe,K as re,aA as ne,aB as se,al as k,o as le,ah as ae,w as H,u as N,aC as W,_ as ce}from"./index-CQhpZ8uN.js";const de=T("split",`
 display: flex;
 width: 100%;
 height: 100%;
`,[m("horizontal",`
 flex-direction: row;
 `),m("vertical",`
 flex-direction: column;
 `),T("split-pane-1",`
 overflow: hidden;
 `),T("split-pane-2",`
 overflow: hidden;
 flex: 1;
 `),G("resize-trigger",`
 background-color: var(--n-resize-trigger-color);
 transition: background-color .3s var(--n-bezier);
 `,[m("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `),J("&:hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)])]),ge=Object.assign(Object.assign({},D.props),{direction:{type:String,default:"horizontal"},resizeTriggerSize:{type:Number,default:3},disabled:Boolean,defaultSize:{type:[String,Number],default:.5},"onUpdate:size":[Function,Array],onUpdateSize:[Function,Array],size:[String,Number],min:{type:[String,Number],default:0},max:{type:[String,Number],default:1},pane1Class:String,pane1Style:[Object,String],pane2Class:String,pane2Style:[Object,String],onDragStart:Function,onDragMove:Function,onDragEnd:Function,watchProps:Array}),ue=V({name:"Split",props:ge,setup(e){var o;const{mergedClsPrefixRef:n,inlineThemeDisabled:i}=X(e),s=D("Split","-split",de,Q,e,n),r=S(()=>{const{common:{cubicBezierEaseInOut:t},self:{resizableTriggerColor:l,resizableTriggerColorHover:u}}=s.value;return{"--n-bezier":t,"--n-resize-trigger-color":l,"--n-resize-trigger-color-hover":u}}),a=w(null),c=w(!1),b=Z(e,"size"),g=w(e.defaultSize);!((o=e.watchProps)===null||o===void 0)&&o.includes("defaultSize")&&ee(()=>g.value=e.defaultSize);const f=t=>{const l=e["onUpdate:size"];e.onUpdateSize&&L(e.onUpdateSize,t),l&&L(l,t),g.value=t},C=te(b,g),M=S(()=>{const t=C.value;if(typeof t=="string")return{flex:`0 0 ${t}`};if(typeof t=="number"){const l=t*100;return{flex:`0 0 calc(${l}% - ${e.resizeTriggerSize*l/100}px)`}}}),P=S(()=>e.direction==="horizontal"?{width:`${e.resizeTriggerSize}px`,height:"100%"}:{width:"100%",height:`${e.resizeTriggerSize}px`}),$=S(()=>{const t=e.direction==="horizontal";return{width:t?`${e.resizeTriggerSize}px`:"",height:t?"":`${e.resizeTriggerSize}px`,cursor:e.direction==="horizontal"?"col-resize":"row-resize"}});let z=0;const B=t=>{t.preventDefault(),c.value=!0,e.onDragStart&&e.onDragStart(t);const l="mousemove",u="mouseup",h=v=>{O(v),e.onDragMove&&e.onDragMove(v)},p=()=>{A(l,document,h),A(u,document,p),c.value=!1,e.onDragEnd&&e.onDragEnd(t),document.body.style.cursor=""};document.body.style.cursor=$.value.cursor,j(l,document,h),j(u,document,p);const _=a.value;if(_){const v=_.getBoundingClientRect();e.direction==="horizontal"?z=t.clientX-v.left:z=v.top-t.clientY}O(t)};function O(t){var l,u;const h=(u=(l=a.value)===null||l===void 0?void 0:l.parentElement)===null||u===void 0?void 0:u.getBoundingClientRect();if(!h)return;const{direction:p}=e,_=h.width-e.resizeTriggerSize,v=h.height-e.resizeTriggerSize,R=p==="horizontal"?_:v,I=p==="horizontal"?t.clientX-h.left-z:t.clientY-h.top+z,{min:E,max:U}=e,K=typeof E=="string"?F(E):E*R,q=typeof U=="string"?F(U):U*R;let y=I;y=Math.max(y,K),y=Math.min(y,q,R),typeof C.value=="string"?f(`${y}px`):f(y/R)}const x=i?Y("split",void 0,r,e):void 0;return{themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender,cssVars:i?void 0:r,resizeTriggerElRef:a,isDragging:c,mergedClsPrefix:n,resizeTriggerWrapperStyle:$,resizeTriggerStyle:P,handleMouseDown:B,firstPaneStyle:M}},render(){var e,o,n,i,s;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${this.mergedClsPrefix}-split`,`${this.mergedClsPrefix}-split--${this.direction}`,this.themeClass],style:this.cssVars},d("div",{class:[`${this.mergedClsPrefix}-split-pane-1`,this.pane1Class],style:[this.firstPaneStyle,this.pane1Style]},(n=(o=this.$slots)[1])===null||n===void 0?void 0:n.call(o)),!this.disabled&&d("div",{ref:"resizeTriggerElRef",class:`${this.mergedClsPrefix}-split__resize-trigger-wrapper`,style:this.resizeTriggerWrapperStyle,onMousedown:this.handleMouseDown},ie(this.$slots["resize-trigger"],()=>[d("div",{style:this.resizeTriggerStyle,class:[`${this.mergedClsPrefix}-split__resize-trigger`,this.isDragging&&`${this.mergedClsPrefix}-split__resize-trigger--hover`]})])),d("div",{class:[`${this.mergedClsPrefix}-split-pane-2`,this.pane2Class],style:this.pane2Style},(s=(i=this.$slots)[2])===null||s===void 0?void 0:s.call(i)))}}),he=T("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[m("strong",`
 font-weight: var(--n-font-weight-strong);
 `),m("italic",{fontStyle:"italic"}),m("underline",{textDecoration:"underline"}),m("code",`
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
 `)]),fe=Object.assign(Object.assign({},D.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),ze=V({name:"Text",props:fe,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=X(e),i=D("Typography","-text",he,oe,e,o),s=S(()=>{const{depth:a,type:c}=e,b=c==="default"?a===void 0?"textColor":`textColor${a}Depth`:re("textColor",c),{common:{fontWeightStrong:g,fontFamilyMono:f,cubicBezierEaseInOut:C},self:{codeTextColor:M,codeBorderRadius:P,codeColor:$,codeBorder:z,[b]:B}}=i.value;return{"--n-bezier":C,"--n-text-color":B,"--n-font-weight-strong":g,"--n-font-famliy-mono":f,"--n-code-border-radius":P,"--n-code-text-color":M,"--n-code-color":$,"--n-code-border":z}}),r=n?Y("text",S(()=>`${e.type[0]}${e.depth||""}`),s,e):void 0;return{mergedClsPrefix:o,compitableTag:ne(e,["as","tag"]),cssVars:n?void 0:s,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e,o,n;const{mergedClsPrefix:i}=this;(e=this.onRender)===null||e===void 0||e.call(this);const s=[`${i}-text`,this.themeClass,{[`${i}-text--code`]:this.code,[`${i}-text--delete`]:this.delete,[`${i}-text--strong`]:this.strong,[`${i}-text--italic`]:this.italic,[`${i}-text--underline`]:this.underline}],r=(n=(o=this.$slots).default)===null||n===void 0?void 0:n.call(o);return this.code?d("code",{class:s,style:this.cssVars},this.delete?d("del",null,r):r):this.delete?d("del",{class:s,style:this.cssVars},r):d(this.compitableTag||"span",{class:s,style:this.cssVars},r)}}),ve=V({__name:"ResponsiveDirectionLayout",setup(e){const o=w(.25),n=se();return requestAnimationFrame(()=>{const i=n.value.$el.querySelector(".n-split__resize-trigger-wrapper");if(i){const{width:s,height:r}=n.value.$el.getBoundingClientRect();let a,c;i.addEventListener("touchmove",b=>{const{clientX:g,clientY:f}=b.touches[0];k.value.isMobileStyle?(c&&(o.value+=(f-c)/r),c=f):(a&&(o.value+=(g-a)/s),a=g),o.value=Math.max(.25,Math.min(.75,o.value))}),i.addEventListener("touchend",()=>{a=c=void 0,console.log(123)})}}),(i,s)=>(le(),ae(N(ue),{ref_key:"split",ref:n,direction:N(k).isMobileStyle?"vertical":"horizontal","resize-trigger-size":N(k).isMobileStyle?6:3,max:.75,min:.25,size:o.value,"onUpdate:size":s[0]||(s[0]=r=>o.value=r)},{1:H(()=>[W(i.$slots,"left",{},void 0,!0)]),2:H(()=>[W(i.$slots,"right",{},void 0,!0)]),_:3},8,["direction","resize-trigger-size","size"]))}}),xe=ce(ve,[["__scopeId","data-v-628cd754"]]);export{ze as N,xe as R};
