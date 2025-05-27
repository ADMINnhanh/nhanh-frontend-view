import{p as C,Q as p,R as q,d as x,v as z,x as v,cV as S,z as k,F as B,k as R,J as T,o as h,aS as b,b1 as w,u as a,aP as m,w as n,a as f,e as u,b4 as N,b6 as V,t as I,a_ as P,b5 as M,bU as $,bV as L,aM as O,_ as j}from"./index-CNq_cRb_.js";import{N as g}from"./a-Dedg8Xl1.js";const D=C("blockquote",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 margin: 0;
 margin-top: 12px;
 margin-bottom: 12px;
 box-sizing: border-box;
 padding-left: 12px;
 border-left: 4px solid var(--n-prefix-color);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[p("&:first-child",{marginTop:0}),p("&:last-child",{marginBottom:0}),q("align-text",{marginLeft:"-16px"})]),F=Object.assign(Object.assign({},v.props),{alignText:Boolean}),H=x({name:"Blockquote",props:F,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:r}=z(e),d=v("Typography","-blockquote",D,S,e,s),t=k(()=>{const{common:{cubicBezierEaseInOut:i},self:{blockquoteTextColor:l,blockquotePrefixColor:c,blockquoteLineHeight:_,blockquoteFontSize:y}}=d.value;return{"--n-bezier":i,"--n-font-size":y,"--n-line-height":_,"--n-prefix-color":c,"--n-text-color":l}}),o=r?B("blockquote",void 0,t,e):void 0;return{mergedClsPrefix:s,cssVars:r?void 0:t,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;const{mergedClsPrefix:s}=this;return(e=this.onRender)===null||e===void 0||e.call(this),R("blockquote",{class:[`${s}-blockquote`,this.themeClass,this.alignText&&`${s}-blockquote--align-text`],style:this.cssVars},this.$slots)}}),W=e=>($("data-v-18a0e205"),e=e(),L(),e),A=W(()=>O("div",{class:"n-popover-arrow"},null,-1)),E=x({__name:"InfoWindow",props:{info:{}},setup(e){const s=e,r=T(),d=k(()=>{var l,c;const t=(c=(l=r.value)==null?void 0:l.$el)==null?void 0:c.getBoundingClientRect();let{x:o,y:i}=s.info;return t&&o&&i&&(o-=t.width/2,i-=t.height+20),{left:(o||0)+"px",top:(i||0)+"px"}});return(t,o)=>(h(),b(a(M),{ref_key:"cardRef",ref:r,title:t.info.name,size:"small",style:P(d.value)},w({default:n(()=>[a(m).isMobileStyle?(h(),b(a(g),{key:0,href:t.info.website,target:"_blank"},{default:n(()=>[u(" 前往政府网站了解更多 ")]),_:1},8,["href"])):N("",!0),f(a(H),null,{default:n(()=>[f(a(V),{depth:"3"},{default:n(()=>[u(I(t.info.description),1)]),_:1})]),_:1}),A]),_:2},[a(m).isMobileStyle?void 0:{name:"header-extra",fn:n(()=>[f(a(g),{href:t.info.website,target:"_blank"},{default:n(()=>[u(" 前往政府网站了解更多 ")]),_:1},8,["href"])]),key:"0"}]),1032,["title","style"]))}}),U=j(E,[["__scopeId","data-v-18a0e205"]]);export{U as default};
