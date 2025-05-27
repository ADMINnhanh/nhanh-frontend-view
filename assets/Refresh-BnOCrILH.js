import{bp as R,Q as f,p as N,d as w,v as V,x as v,bq as j,z as E,X as H,ab as p,k,a3 as M,al as O,Z as A,o as T,c as $,aM as y}from"./index-BGnhaH91.js";let b=!1;function q(){if(R&&window.CSS&&!b&&(b=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const F=f([N("skeleton",`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),f("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]),I=Object.assign(Object.assign({},v.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),Z=w({name:"Skeleton",inheritAttrs:!1,props:I,setup(e){q();const{mergedClsPrefixRef:r}=V(e),s=v("Skeleton","-skeleton",F,j,e,r);return{mergedClsPrefix:r,style:E(()=>{var o,n;const i=s.value,{common:{cubicBezierEaseInOut:x}}=i,h=i.self,{color:S,colorEnd:_,borderRadius:B}=h;let a;const{circle:l,sharp:C,round:z,width:t,height:c,size:m,text:g,animated:P}=e;m!==void 0&&(a=h[H("height",m)]);const d=l?(o=t??c)!==null&&o!==void 0?o:a:t,u=(n=l?t??c:c)!==null&&n!==void 0?n:a;return{display:g?"inline-block":"",verticalAlign:g?"-0.125em":"",borderRadius:l?"50%":z?"4096px":C?"":B,width:typeof d=="number"?p(d):d,height:typeof u=="number"?p(u):u,animation:P?"":"none","--n-bezier":x,"--n-color-start":S,"--n-color-end":_}})}},render(){const{repeat:e,style:r,mergedClsPrefix:s,$attrs:o}=this,n=k("div",M({class:`${s}-skeleton`,style:r},o));return e>1?k(A,null,O(e,null).map(i=>[n,`
`])):n}}),K={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},L=y("path",{d:"M320 146s24.36-12-64-12a160 160 0 1 0 160 160",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Q=y("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 58l80 80l-80 80"},null,-1),W=[L,Q],D=w({name:"Refresh",render:function(r,s){return T(),$("svg",K,W)}});export{Z as N,D as R};
