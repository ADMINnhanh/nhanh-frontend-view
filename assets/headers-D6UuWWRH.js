import{m as w,O as d,P as c,d as z,h as $,q as T,v as l,d9 as H,y as f,Y as a,D as P}from"./index-Qjn_ELpF.js";const R=w("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[d("&:first-child",{marginTop:0}),c("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[c("align-text",{paddingLeft:0},[d("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),d("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),d("&::before",{backgroundColor:"var(--n-bar-color)"})])]),B=Object.assign(Object.assign({},l.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),h=r=>z({name:`H${r}`,props:B,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:o}=T(e),n=l("Typography","-h",R,H,e,i),s=f(()=>{const{type:g}=e,{common:{cubicBezierEaseInOut:b},self:{headerFontWeight:m,headerTextColor:p,[a("headerPrefixWidth",r)]:u,[a("headerFontSize",r)]:x,[a("headerMargin",r)]:v,[a("headerBarWidth",r)]:C,[a("headerBarColor",g)]:y}}=n.value;return{"--n-bezier":b,"--n-font-size":x,"--n-margin":v,"--n-bar-color":y,"--n-bar-width":C,"--n-font-weight":m,"--n-text-color":p,"--n-prefix-width":u}}),t=o?P(`h${r}`,f(()=>e.type[0]),s,e):void 0;return{mergedClsPrefix:i,cssVars:o?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{prefix:i,alignText:o,mergedClsPrefix:n,cssVars:s,$slots:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),$(`h${r}`,{class:[`${n}-h`,`${n}-h${r}`,this.themeClass,{[`${n}-h--prefix-bar`]:i,[`${n}-h--align-text`]:o}],style:s},t)}}),N=h("1"),O=h("4"),S=h("6");export{N,S as a,O as b};
