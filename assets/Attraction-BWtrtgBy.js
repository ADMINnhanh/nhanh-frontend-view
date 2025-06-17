import{Q as m,p as o,S as ee,R as P,ap as H,aq as te,ar as oe,d as L,v as re,x as U,d0 as ne,z as F,X as V,F as le,cP as se,cd as ie,k as s,al as ae,ce as de,J,C as ce,o as K,aS as pe,b1 as be,u as i,aP as Q,w as p,b as u,e as h,c as ge,Z as he,b4 as fe,t as S,c_ as E,aM as me,a_ as ue,b5 as ve,_ as we}from"./index-zsy9fzWA.js";import{N as B}from"./a-DmzVol90.js";function W(l,b="default",c=[]){const{children:a}=l;if(a!==null&&typeof a=="object"&&!Array.isArray(a)){const d=a[b];if(typeof d=="function")return d()}return c}const Y="DESCRIPTION_ITEM_FLAG";function ye(l){return typeof l=="object"&&l&&!Array.isArray(l)?l.type&&l.type[Y]:!1}const Se=m([o("descriptions",{fontSize:"var(--n-font-size)"},[o("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),o("descriptions-table-wrapper",[o("descriptions-table",[o("descriptions-table-row",[o("descriptions-table-header",{padding:"var(--n-th-padding)"}),o("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),ee("bordered",[o("descriptions-table-wrapper",[o("descriptions-table",[o("descriptions-table-row",[m("&:last-child",[o("descriptions-table-content",{paddingBottom:0})])])])])]),P("left-label-placement",[o("descriptions-table-content",[m("> *",{verticalAlign:"top"})])]),P("left-label-align",[m("th",{textAlign:"left"})]),P("center-label-align",[m("th",{textAlign:"center"})]),P("right-label-align",[m("th",{textAlign:"right"})]),P("bordered",[o("descriptions-table-wrapper",`
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
 `))]),Ce=Object.assign(Object.assign({},U.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),xe=L({name:"Descriptions",props:Ce,setup(l){const{mergedClsPrefixRef:b,inlineThemeDisabled:c}=re(l),a=U("Descriptions","-descriptions",Se,ne,l,b),d=F(()=>{const{size:e,bordered:g}=l,{common:{cubicBezierEaseInOut:v},self:{titleTextColor:k,thColor:M,thColorModal:n,thColorPopover:_,thTextColor:C,thFontWeight:A,tdTextColor:j,tdColor:q,tdColorModal:T,tdColorPopover:r,borderColor:x,borderColorModal:D,borderColorPopover:f,borderRadius:w,lineHeight:z,[V("fontSize",e)]:R,[V(g?"thPaddingBordered":"thPadding",e)]:y,[V(g?"tdPaddingBordered":"tdPadding",e)]:$}}=a.value;return{"--n-title-text-color":k,"--n-th-padding":y,"--n-td-padding":$,"--n-font-size":R,"--n-bezier":v,"--n-th-font-weight":A,"--n-line-height":z,"--n-th-text-color":C,"--n-td-text-color":j,"--n-th-color":M,"--n-th-color-modal":n,"--n-th-color-popover":_,"--n-td-color":q,"--n-td-color-modal":T,"--n-td-color-popover":r,"--n-border-radius":w,"--n-border-color":x,"--n-border-color-modal":D,"--n-border-color-popover":f}}),t=c?le("descriptions",F(()=>{let e="";const{size:g,bordered:v}=l;return v&&(e+="a"),e+=g[0],e}),d,l):void 0;return{mergedClsPrefix:b,cssVars:c?void 0:d,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender,compitableColumn:se(l,["columns","column"]),inlineThemeDisabled:c}},render(){const l=this.$slots.default,b=l?ie(l()):[];b.length;const{contentClass:c,labelClass:a,compitableColumn:d,labelPlacement:t,labelAlign:e,size:g,bordered:v,title:k,cssVars:M,mergedClsPrefix:n,separator:_,onRender:C}=this;C==null||C();const A=b.filter(r=>ye(r)),j={span:0,row:[],secondRow:[],rows:[]},T=A.reduce((r,x,D)=>{const f=x.props||{},w=A.length-1===D,z=["label"in f?f.label:W(x,"label")],R=[W(x)],y=f.span||1,$=r.span;r.span+=y;const N=f.labelStyle||f["label-style"]||this.labelStyle,O=f.contentStyle||f["content-style"]||this.contentStyle;if(t==="left")v?r.row.push(s("th",{class:[`${n}-descriptions-table-header`,a],colspan:1,style:N},z),s("td",{class:[`${n}-descriptions-table-content`,c],colspan:w?(d-$)*2+1:y*2-1,style:O},R)):r.row.push(s("td",{class:`${n}-descriptions-table-content`,colspan:w?(d-$)*2:y*2},s("span",{class:[`${n}-descriptions-table-content__label`,a],style:N},[...z,_&&s("span",{class:`${n}-descriptions-separator`},_)]),s("span",{class:[`${n}-descriptions-table-content__content`,c],style:O},R)));else{const G=w?(d-$)*2:y*2;r.row.push(s("th",{class:[`${n}-descriptions-table-header`,a],colspan:G,style:N},z)),r.secondRow.push(s("td",{class:[`${n}-descriptions-table-content`,c],colspan:G,style:O},R))}return(r.span>=d||w)&&(r.span=0,r.row.length&&(r.rows.push(r.row),r.row=[]),t!=="left"&&r.secondRow.length&&(r.rows.push(r.secondRow),r.secondRow=[])),r},j).rows.map(r=>s("tr",{class:`${n}-descriptions-table-row`},r));return s("div",{style:M,class:[`${n}-descriptions`,this.themeClass,`${n}-descriptions--${t}-label-placement`,`${n}-descriptions--${e}-label-align`,`${n}-descriptions--${g}-size`,v&&`${n}-descriptions--bordered`]},k||this.$slots.header?s("div",{class:`${n}-descriptions-header`},k||de(this,"header")):null,s("div",{class:`${n}-descriptions-table-wrapper`},s("table",{class:`${n}-descriptions-table`},s("tbody",null,t==="top"&&s("tr",{class:`${n}-descriptions-table-row`,style:{visibility:"collapse"}},ae(d*2,s("td",null))),T))))}}),ze={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},I=L({name:"DescriptionsItem",[Y]:!0,props:ze,render(){return null}}),X="https://www.google.com/search?q=",Z="https://www.baidu.com/s?wd=",Re=L({__name:"Attraction",props:{info:{}},setup(l){const b=l,c=J(),a=J();ce(()=>b.info,()=>{requestAnimationFrame(()=>{var t,e;a.value=(e=(t=c.value)==null?void 0:t.$el)==null?void 0:e.getBoundingClientRect()})},{immediate:!0});const d=F(()=>{const t=a.value;let{x:e,y:g}=b.info;return t&&e&&g&&(e-=t.width/2,g-=t.height+20),{left:(e||0)+"px",top:(g||0)+"px"}});return(t,e)=>(K(),pe(i(ve),{ref_key:"cardRef",ref:c,title:t.info.name,size:"small",style:ue(d.value)},be({default:p(()=>[i(Q).isMobileStyle?(K(),ge(he,{key:0},[u(i(B),{href:Z+t.info.name,target:"_blank"},{default:p(()=>e[3]||(e[3]=[h(" 百度一下 ")])),_:1,__:[3]},8,["href"]),e[5]||(e[5]=h("   ")),u(i(B),{href:X+t.info.name,target:"_blank"},{default:p(()=>e[4]||(e[4]=[h(" 谷歌搜索 ")])),_:1,__:[4]},8,["href"])],64)):fe("",!0),u(i(xe),{bordered:"",size:"small",column:2},{default:p(()=>[u(i(I),{label:"坐标"},{default:p(()=>[h(S(t.info.coordinates),1)]),_:1}),u(i(I),{label:"访问量"},{default:p(()=>[h(S(i(E)(t.info.visitors,{join:!0}))+"人 ",1)]),_:1}),u(i(I),{label:"积极评价"},{default:p(()=>[h(S(i(E)(t.info.positiveReviews,{join:!0}))+"人 ("+S(t.info.positiveRate)+"%) ",1)]),_:1}),u(i(I),{label:"消极评价"},{default:p(()=>[h(S(i(E)(t.info.negativeReviews,{join:!0}))+"人 ("+S(t.info.negativeRate)+"%) ",1)]),_:1})]),_:1}),e[6]||(e[6]=me("div",{class:"n-popover-arrow"},null,-1))]),_:2},[i(Q).isMobileStyle?void 0:{name:"header-extra",fn:p(()=>[u(i(B),{href:Z+t.info.name,target:"_blank"},{default:p(()=>e[0]||(e[0]=[h(" 百度一下 ")])),_:1,__:[0]},8,["href"]),e[2]||(e[2]=h("   ")),u(i(B),{href:X+t.info.name,target:"_blank"},{default:p(()=>e[1]||(e[1]=[h(" 谷歌搜索 ")])),_:1,__:[1]},8,["href"])]),key:"0"}]),1032,["title","style"]))}}),ke=we(Re,[["__scopeId","data-v-1ce3b599"]]);export{ke as default};
