import{d as p,k as d,s as c,cu as g,m,x,y,cv as v,aj as u,ce as h,cn as b,n as w}from"./index-CQ2Kx3BL.js";const R=Object.assign(Object.assign({},c.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrap:{type:Boolean,default:!0}}),z=p({name:"Flex",props:R,setup(r){const{mergedClsPrefixRef:t,mergedRtlRef:l}=d(r),a=c("Flex","-flex",void 0,g,r,t);return{rtlEnabled:m("Flex",l,t),mergedClsPrefix:t,margin:x(()=>{const{size:e}=r;if(Array.isArray(e))return{horizontal:e[0],vertical:e[1]};if(typeof e=="number")return{horizontal:e,vertical:e};const{self:{[y("gap",e)]:s}}=a.value,{row:n,col:i}=v(s);return{horizontal:u(i),vertical:u(n)}})}},render(){const{vertical:r,reverse:t,align:l,inline:a,justify:o,margin:e,wrap:s,mergedClsPrefix:n,rtlEnabled:i}=this,f=h(b(this),!1);return f.length?w("div",{role:"none",class:[`${n}-flex`,i&&`${n}-flex--rtl`],style:{display:a?"inline-flex":"flex",flexDirection:r&&!t?"column":r&&t?"column-reverse":!r&&t?"row-reverse":"row",justifyContent:o,flexWrap:!s||r?"nowrap":"wrap",alignItems:l,gap:`${e.vertical}px ${e.horizontal}px`}},f):null}});export{z as N};
