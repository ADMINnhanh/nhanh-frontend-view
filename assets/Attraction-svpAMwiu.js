import{O as m,m as o,Q as ee,P as k,an as H,ao as te,ap as oe,d as F,p as re,q as U,dk as ne,x as L,V,D as le,cZ as se,c4 as ie,h as s,ak as ae,c5 as de,H as K,z as ce,o as Q,aR as pe,b1 as be,u as i,aO as W,w as p,b as u,e as h,c as ge,X as he,b4 as fe,t as S,ca as E,aL as me,a_ as ue,b5 as ve,_ as we}from"./index-DRU1KIa-.js";import{N as B}from"./a-NORd1bi0.js";function X(l,b="default",c=[]){const{children:a}=l;if(a!==null&&typeof a=="object"&&!Array.isArray(a)){const d=a[b];if(typeof d=="function")return d()}return c}const ye=m([o("descriptions",{fontSize:"var(--n-font-size)"},[o("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),o("descriptions-table-wrapper",[o("descriptions-table",[o("descriptions-table-row",[o("descriptions-table-header",{padding:"var(--n-th-padding)"}),o("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),ee("bordered",[o("descriptions-table-wrapper",[o("descriptions-table",[o("descriptions-table-row",[m("&:last-child",[o("descriptions-table-content",{paddingBottom:0})])])])])]),k("left-label-placement",[o("descriptions-table-content",[m("> *",{verticalAlign:"top"})])]),k("left-label-align",[m("th",{textAlign:"left"})]),k("center-label-align",[m("th",{textAlign:"center"})]),k("right-label-align",[m("th",{textAlign:"right"})]),k("bordered",[o("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[o("descriptions-table",[o("descriptions-table-row",[m("&:not(:last-child)",[o("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),o("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),o("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[m("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),o("descriptions-table-content",[m("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),o("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),o("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[o("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[o("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[o("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),o("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[H("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),H("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),te(o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),oe(o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),Y="DESCRIPTION_ITEM_FLAG";function Se(l){return typeof l=="object"&&l&&!Array.isArray(l)?l.type&&l.type[Y]:!1}const Ce=Object.assign(Object.assign({},U.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),xe=F({name:"Descriptions",props:Ce,slots:Object,setup(l){const{mergedClsPrefixRef:b,inlineThemeDisabled:c}=re(l),a=U("Descriptions","-descriptions",ye,ne,l,b),d=L(()=>{const{size:e,bordered:g}=l,{common:{cubicBezierEaseInOut:v},self:{titleTextColor:P,thColor:j,thColorModal:n,thColorPopover:_,thTextColor:C,thFontWeight:A,tdTextColor:O,tdColor:q,tdColorModal:D,tdColorPopover:r,borderColor:x,borderColorModal:M,borderColorPopover:f,borderRadius:w,lineHeight:z,[V("fontSize",e)]:R,[V(g?"thPaddingBordered":"thPadding",e)]:y,[V(g?"tdPaddingBordered":"tdPadding",e)]:$}}=a.value;return{"--n-title-text-color":P,"--n-th-padding":y,"--n-td-padding":$,"--n-font-size":R,"--n-bezier":v,"--n-th-font-weight":A,"--n-line-height":z,"--n-th-text-color":C,"--n-td-text-color":O,"--n-th-color":j,"--n-th-color-modal":n,"--n-th-color-popover":_,"--n-td-color":q,"--n-td-color-modal":D,"--n-td-color-popover":r,"--n-border-radius":w,"--n-border-color":x,"--n-border-color-modal":M,"--n-border-color-popover":f}}),t=c?le("descriptions",L(()=>{let e="";const{size:g,bordered:v}=l;return v&&(e+="a"),e+=g[0],e}),d,l):void 0;return{mergedClsPrefix:b,cssVars:c?void 0:d,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender,compitableColumn:se(l,["columns","column"]),inlineThemeDisabled:c}},render(){const l=this.$slots.default,b=l?ie(l()):[];b.length;const{contentClass:c,labelClass:a,compitableColumn:d,labelPlacement:t,labelAlign:e,size:g,bordered:v,title:P,cssVars:j,mergedClsPrefix:n,separator:_,onRender:C}=this;C==null||C();const A=b.filter(r=>Se(r)),O={span:0,row:[],secondRow:[],rows:[]},D=A.reduce((r,x,M)=>{const f=x.props||{},w=A.length-1===M,z=["label"in f?f.label:X(x,"label")],R=[X(x)],y=f.span||1,$=r.span;r.span+=y;const T=f.labelStyle||f["label-style"]||this.labelStyle,N=f.contentStyle||f["content-style"]||this.contentStyle;if(t==="left")v?r.row.push(s("th",{class:[`${n}-descriptions-table-header`,a],colspan:1,style:T},z),s("td",{class:[`${n}-descriptions-table-content`,c],colspan:w?(d-$)*2+1:y*2-1,style:N},R)):r.row.push(s("td",{class:`${n}-descriptions-table-content`,colspan:w?(d-$)*2:y*2},s("span",{class:[`${n}-descriptions-table-content__label`,a],style:T},[...z,_&&s("span",{class:`${n}-descriptions-separator`},_)]),s("span",{class:[`${n}-descriptions-table-content__content`,c],style:N},R)));else{const G=w?(d-$)*2:y*2;r.row.push(s("th",{class:[`${n}-descriptions-table-header`,a],colspan:G,style:T},z)),r.secondRow.push(s("td",{class:[`${n}-descriptions-table-content`,c],colspan:G,style:N},R))}return(r.span>=d||w)&&(r.span=0,r.row.length&&(r.rows.push(r.row),r.row=[]),t!=="left"&&r.secondRow.length&&(r.rows.push(r.secondRow),r.secondRow=[])),r},O).rows.map(r=>s("tr",{class:`${n}-descriptions-table-row`},r));return s("div",{style:j,class:[`${n}-descriptions`,this.themeClass,`${n}-descriptions--${t}-label-placement`,`${n}-descriptions--${e}-label-align`,`${n}-descriptions--${g}-size`,v&&`${n}-descriptions--bordered`]},P||this.$slots.header?s("div",{class:`${n}-descriptions-header`},P||de(this,"header")):null,s("div",{class:`${n}-descriptions-table-wrapper`},s("table",{class:`${n}-descriptions-table`},s("tbody",null,t==="top"&&s("tr",{class:`${n}-descriptions-table-row`,style:{visibility:"collapse"}},ae(d*2,s("td",null))),D))))}}),ze={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},I=F({name:"DescriptionsItem",[Y]:!0,props:ze,slots:Object,render(){return null}}),Z="https://www.google.com/search?q=",J="https://www.baidu.com/s?wd=",Re=F({__name:"Attraction",props:{info:{}},setup(l){const b=l,c=K(),a=K();ce(()=>b.info,()=>{requestAnimationFrame(()=>{var t,e;a.value=(e=(t=c.value)==null?void 0:t.$el)==null?void 0:e.getBoundingClientRect()})},{immediate:!0});const d=L(()=>{const t=a.value;let{x:e,y:g}=b.info;return t&&e&&g&&(e-=t.width/2,g-=t.height+20),{left:(e||0)+"px",top:(g||0)+"px"}});return(t,e)=>(Q(),pe(i(ve),{ref_key:"cardRef",ref:c,title:t.info.name,size:"small",style:ue(d.value)},be({default:p(()=>[i(W).isMobileStyle?(Q(),ge(he,{key:0},[u(i(B),{href:J+t.info.name,target:"_blank"},{default:p(()=>e[3]||(e[3]=[h(" 百度一下 ")])),_:1,__:[3]},8,["href"]),e[5]||(e[5]=h("   ")),u(i(B),{href:Z+t.info.name,target:"_blank"},{default:p(()=>e[4]||(e[4]=[h(" 谷歌搜索 ")])),_:1,__:[4]},8,["href"])],64)):fe("",!0),u(i(xe),{bordered:"",size:"small",column:2},{default:p(()=>[u(i(I),{label:"坐标"},{default:p(()=>[h(S(t.info.coordinates),1)]),_:1}),u(i(I),{label:"访问量"},{default:p(()=>[h(S(i(E)(t.info.visitors,{join:!0}))+"人 ",1)]),_:1}),u(i(I),{label:"积极评价"},{default:p(()=>[h(S(i(E)(t.info.positiveReviews,{join:!0}))+"人 ("+S(t.info.positiveRate)+"%) ",1)]),_:1}),u(i(I),{label:"消极评价"},{default:p(()=>[h(S(i(E)(t.info.negativeReviews,{join:!0}))+"人 ("+S(t.info.negativeRate)+"%) ",1)]),_:1})]),_:1}),e[6]||(e[6]=me("div",{class:"n-popover-arrow"},null,-1))]),_:2},[i(W).isMobileStyle?void 0:{name:"header-extra",fn:p(()=>[u(i(B),{href:J+t.info.name,target:"_blank"},{default:p(()=>e[0]||(e[0]=[h(" 百度一下 ")])),_:1,__:[0]},8,["href"]),e[2]||(e[2]=h("   ")),u(i(B),{href:Z+t.info.name,target:"_blank"},{default:p(()=>e[1]||(e[1]=[h(" 谷歌搜索 ")])),_:1,__:[1]},8,["href"])]),key:"0"}]),1032,["title","style"]))}}),Pe=we(Re,[["__scopeId","data-v-4d060bc7"]]);export{Pe as default};
