import{l as h,bn as v,m as c,bU as w,bV as C,d as n,h as e,g as L,p,s as t,q as i,aH as g,D as m,E as x,aM as b,R as d,U as u,aN as B}from"./index-CDio4FtF.js";function D(o){const{mergedLocaleRef:r,mergedDateLocaleRef:l}=h(v,null)||{},f=c(()=>{var a,s;return(s=(a=r==null?void 0:r.value)===null||a===void 0?void 0:a[o])!==null&&s!==void 0?s:w[o]});return{dateLocaleRef:c(()=>{var a;return(a=l==null?void 0:l.value)!==null&&a!==void 0?a:C}),localeRef:f}}const I=n({name:"Add",render(){return e("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),y=n({name:"ChevronDown",render(){return e("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),k=L("clear",e("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},e("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},e("g",{fill:"currentColor","fill-rule":"nonzero"},e("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),_=p("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[t(">",[i("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[t("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),t("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),i("placeholder",`
 display: flex;
 `),i("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[g({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),P=n({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(o){return m("-base-clear",_,x(o,"clsPrefix")),{handleMouseDown(r){r.preventDefault()}}},render(){const{clsPrefix:o}=this;return e("div",{class:`${o}-base-clear`},e(b,null,{default:()=>{var r,l;return this.show?e("div",{key:"dismiss",class:`${o}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},d(this.$slots.icon,()=>[e(u,{clsPrefix:o},{default:()=>e(k,null)})])):e("div",{key:"icon",class:`${o}-base-clear__placeholder`},(l=(r=this.$slots).placeholder)===null||l===void 0?void 0:l.call(r))}}))}}),N=n({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(o,{slots:r}){return()=>{const{clsPrefix:l}=o;return e(B,{clsPrefix:l,class:`${l}-base-suffix`,strokeWidth:24,scale:.85,show:o.loading},{default:()=>o.showArrow?e(P,{clsPrefix:l,show:o.showClear,onClear:o.onClear},{placeholder:()=>e(u,{clsPrefix:l,class:`${l}-base-suffix__arrow`},{default:()=>d(r.default,()=>[e(y,null)])})}):null})}}});export{I as A,P as N,N as a,D as u};
