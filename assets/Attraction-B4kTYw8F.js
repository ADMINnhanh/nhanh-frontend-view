import{V as m,z as o,as as ee,at as te,X as oe,W as k,au as K,d as G,bQ as re,h as s,ap as ne,c8 as le,D as se,E as J,dD as ie,G as L,a4 as E,K as ae,da as de,Q,I as ce,aY as be,o as W,u as i,bc as pe,b4 as ge,b8 as he,w as b,aU as U,b as u,e as h,c as fe,bb as me,aS as ue,Z as ve,t as x,cg as F,_ as we}from"./index-B6jRmsKc.js";import{N as B}from"./a-3YtSQHkE.js";function X(t,p="default",c=[]){const{children:a}=t;if(a!==null&&typeof a=="object"&&!Array.isArray(a)){const d=a[p];if(typeof d=="function")return d()}return c}const ye=m([o("descriptions",{fontSize:"var(--n-font-size)"},[o("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),o("descriptions-table-wrapper",[o("descriptions-table",[o("descriptions-table-row",[o("descriptions-table-header",{padding:"var(--n-th-padding)"}),o("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),oe("bordered",[o("descriptions-table-wrapper",[o("descriptions-table",[o("descriptions-table-row",[m("&:last-child",[o("descriptions-table-content",{paddingBottom:0})])])])])]),k("left-label-placement",[o("descriptions-table-content",[m("> *",{verticalAlign:"top"})])]),k("left-label-align",[m("th",{textAlign:"left"})]),k("center-label-align",[m("th",{textAlign:"center"})]),k("right-label-align",[m("th",{textAlign:"right"})]),k("bordered",[o("descriptions-table-wrapper",`
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
 `,[K("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),K("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),ee(o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),te(o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),_="DESCRIPTION_ITEM_FLAG";function xe(t){return typeof t=="object"&&t&&!Array.isArray(t)?t.type&&t.type[_]:!1}const Se=Object.assign(Object.assign({},J.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),Ce=G({name:"Descriptions",props:Se,slots:Object,setup(t){const{mergedClsPrefixRef:p,inlineThemeDisabled:c}=se(t),a=J("Descriptions","-descriptions",ye,ie,t,p),d=L(()=>{const{size:e,bordered:g}=t,{common:{cubicBezierEaseInOut:v},self:{titleTextColor:P,thColor:D,thColorModal:n,thColorPopover:A,thTextColor:S,thFontWeight:I,tdTextColor:M,tdColor:q,tdColorModal:O,tdColorPopover:r,borderColor:C,borderColorModal:T,borderColorPopover:f,borderRadius:w,lineHeight:z,[E("fontSize",e)]:R,[E(g?"thPaddingBordered":"thPadding",e)]:y,[E(g?"tdPaddingBordered":"tdPadding",e)]:$}}=a.value;return{"--n-title-text-color":P,"--n-th-padding":y,"--n-td-padding":$,"--n-font-size":R,"--n-bezier":v,"--n-th-font-weight":I,"--n-line-height":z,"--n-th-text-color":S,"--n-td-text-color":M,"--n-th-color":D,"--n-th-color-modal":n,"--n-th-color-popover":A,"--n-td-color":q,"--n-td-color-modal":O,"--n-td-color-popover":r,"--n-border-radius":w,"--n-border-color":C,"--n-border-color-modal":T,"--n-border-color-popover":f}}),l=c?ae("descriptions",L(()=>{let e="";const{size:g,bordered:v}=t;return v&&(e+="a"),e+=g[0],e}),d,t):void 0;return{mergedClsPrefix:p,cssVars:c?void 0:d,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender,compitableColumn:de(t,["columns","column"]),inlineThemeDisabled:c}},render(){const t=this.$slots.default,p=t?re(t()):[];p.length;const{contentClass:c,labelClass:a,compitableColumn:d,labelPlacement:l,labelAlign:e,size:g,bordered:v,title:P,cssVars:D,mergedClsPrefix:n,separator:A,onRender:S}=this;S==null||S();const I=p.filter(r=>xe(r)),M={span:0,row:[],secondRow:[],rows:[]},O=I.reduce((r,C,T)=>{const f=C.props||{},w=I.length-1===T,z=["label"in f?f.label:X(C,"label")],R=[X(C)],y=f.span||1,$=r.span;r.span+=y;const N=f.labelStyle||f["label-style"]||this.labelStyle,V=f.contentStyle||f["content-style"]||this.contentStyle;if(l==="left")v?r.row.push(s("th",{class:[`${n}-descriptions-table-header`,a],colspan:1,style:N},z),s("td",{class:[`${n}-descriptions-table-content`,c],colspan:w?(d-$)*2+1:y*2-1,style:V},R)):r.row.push(s("td",{class:`${n}-descriptions-table-content`,colspan:w?(d-$)*2:y*2},s("span",{class:[`${n}-descriptions-table-content__label`,a],style:N},[...z,A&&s("span",{class:`${n}-descriptions-separator`},A)]),s("span",{class:[`${n}-descriptions-table-content__content`,c],style:V},R)));else{const H=w?(d-$)*2:y*2;r.row.push(s("th",{class:[`${n}-descriptions-table-header`,a],colspan:H,style:N},z)),r.secondRow.push(s("td",{class:[`${n}-descriptions-table-content`,c],colspan:H,style:V},R))}return(r.span>=d||w)&&(r.span=0,r.row.length&&(r.rows.push(r.row),r.row=[]),l!=="left"&&r.secondRow.length&&(r.rows.push(r.secondRow),r.secondRow=[])),r},M).rows.map(r=>s("tr",{class:`${n}-descriptions-table-row`},r));return s("div",{style:D,class:[`${n}-descriptions`,this.themeClass,`${n}-descriptions--${l}-label-placement`,`${n}-descriptions--${e}-label-align`,`${n}-descriptions--${g}-size`,v&&`${n}-descriptions--bordered`]},P||this.$slots.header?s("div",{class:`${n}-descriptions-header`},P||le(this,"header")):null,s("div",{class:`${n}-descriptions-table-wrapper`},s("table",{class:`${n}-descriptions-table`},s("tbody",null,l==="top"&&s("tr",{class:`${n}-descriptions-table-row`,style:{visibility:"collapse"}},ne(d*2,s("td",null))),O))))}}),ze={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},j=G({name:"DescriptionsItem",[_]:!0,props:ze,slots:Object,render(){return null}}),Y="https://www.google.com/search?q=",Z="https://www.baidu.com/s?wd=",Re=G({__name:"Attraction",props:{info:{}},setup(t){const p=t,c=Q(),a=Q();ce(()=>p.info,()=>{requestAnimationFrame(()=>{var l,e;a.value=(e=(l=c.value)==null?void 0:l.$el)==null?void 0:e.getBoundingClientRect()})},{immediate:!0});const d=L(()=>{const l=a.value;let{x:e,y:g}=p.info;return l&&e&&g&&(e-=l.width/2,g-=l.height+20),{left:(e||0)+"px",top:(g||0)+"px"}});return(l,e)=>(W(),be(i(pe),{ref_key:"cardRef",ref:c,title:t.info.name,size:"small",style:ge(d.value)},he({default:b(()=>[i(U).isMobileStyle?(W(),fe(ve,{key:0},[u(i(B),{href:Z+t.info.name,target:"_blank"},{default:b(()=>[...e[3]||(e[3]=[h(" 百度一下 ",-1)])]),_:1},8,["href"]),e[5]||(e[5]=h("   ",-1)),u(i(B),{href:Y+t.info.name,target:"_blank"},{default:b(()=>[...e[4]||(e[4]=[h(" 谷歌搜索 ",-1)])]),_:1},8,["href"])],64)):me("",!0),u(i(Ce),{bordered:"",size:"small",column:2},{default:b(()=>[u(i(j),{label:"坐标"},{default:b(()=>[h(x(t.info.coordinates),1)]),_:1}),u(i(j),{label:"访问量"},{default:b(()=>[h(x(i(F)(t.info.visitors,{join:!0}))+"人 ",1)]),_:1}),u(i(j),{label:"积极评价"},{default:b(()=>[h(x(i(F)(t.info.positiveReviews,{join:!0}))+"人 ("+x(t.info.positiveRate)+"%) ",1)]),_:1}),u(i(j),{label:"消极评价"},{default:b(()=>[h(x(i(F)(t.info.negativeReviews,{join:!0}))+"人 ("+x(t.info.negativeRate)+"%) ",1)]),_:1})]),_:1}),e[6]||(e[6]=ue("div",{class:"n-popover-arrow"},null,-1))]),_:2},[i(U).isMobileStyle?void 0:{name:"header-extra",fn:b(()=>[u(i(B),{href:Z+t.info.name,target:"_blank"},{default:b(()=>[...e[0]||(e[0]=[h(" 百度一下 ",-1)])]),_:1},8,["href"]),e[2]||(e[2]=h("   ",-1)),u(i(B),{href:Y+t.info.name,target:"_blank"},{default:b(()=>[...e[1]||(e[1]=[h(" 谷歌搜索 ",-1)])]),_:1},8,["href"])]),key:"0"}]),1032,["title","style"]))}}),Pe=we(Re,[["__scopeId","data-v-4d060bc7"]]);export{Pe as default};
