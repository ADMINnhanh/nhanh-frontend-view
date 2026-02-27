import{j as R,J as L,d as B,l as a,m as I,c0 as k,L as b,c3 as y,g as d,U as u,N as _}from"./index-BLf5CNBp.js";const w=R("input-group-label",`
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 box-sizing: border-box;
 padding: 0 12px;
 display: inline-block;
 border-radius: var(--n-border-radius);
 background-color: var(--n-group-label-color);
 color: var(--n-group-label-text-color);
 font-size: var(--n-font-size);
 line-height: var(--n-height);
 height: var(--n-height);
 flex-shrink: 0;
 white-space: nowrap;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[L("border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]),P=Object.assign(Object.assign({},b.props),{size:String,bordered:{type:Boolean,default:void 0}}),T=B({name:"InputGroupLabel",props:P,setup(e){const{mergedBorderedRef:s,mergedClsPrefixRef:r,inlineThemeDisabled:n}=I(e),c=k(e),{mergedSizeRef:i}=c,g=b("Input","-input-group-label",w,y,e,r),l=d(()=>{const{value:t}=i,{common:{cubicBezierEaseInOut:p},self:{groupLabelColor:h,borderRadius:m,groupLabelTextColor:v,lineHeight:f,groupLabelBorder:z,[u("fontSize",t)]:x,[u("height",t)]:C}}=g.value;return{"--n-bezier":p,"--n-group-label-color":h,"--n-group-label-border":z,"--n-border-radius":m,"--n-group-label-text-color":v,"--n-font-size":x,"--n-line-height":f,"--n-height":C}}),o=n?_("input-group-label",d(()=>{const{value:t}=i;return t[0]}),l,e):void 0;return{mergedClsPrefix:r,mergedBordered:s,cssVars:n?void 0:l,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e,s,r;const{mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{class:[`${n}-input-group-label`,this.themeClass],style:this.cssVars},(r=(s=this.$slots).default)===null||r===void 0?void 0:r.call(s),this.mergedBordered?a("div",{class:`${n}-input-group-label__border`}):null)}});export{T as N};
