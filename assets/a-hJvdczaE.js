import{z as c,d,h,D as m,E as r,dp as u,G as f,K as p}from"./index-SnQg8QuD.js";const v=c("a",`
 cursor: pointer;
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 text-decoration-color: var(--n-text-color);
 color: var(--n-text-color);
`),C=Object.assign({},r.props),g=d({name:"A",props:C,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=m(e),a=r("Typography","-a",v,u,e,o),n=f(()=>{const{common:{cubicBezierEaseInOut:i},self:{aTextColor:l}}=a.value;return{"--n-text-color":l,"--n-bezier":i}}),s=t?p("a",void 0,n,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:n,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),h("a",{class:[`${this.mergedClsPrefix}-a`,this.themeClass],style:this.cssVars},this.$slots)}});export{g as N};
