import{I as m,j as o,aj as ee,ak as te,H as oe,k,J as K,d as G,aL as re,l as s,Q as ne,bn as le,m as se,L as Y,de as ie,g as F,U as E,N as ae,cK as de,p as W,A as ce,Z as be,o as J,u as i,aa as pe,aw as ge,bu as he,w as b,ah as Q,b as u,e as h,c as fe,af as me,W as ue,R as ve,t as x,by as L,_ as we}from"./index-DXxc82lc.js";import{N as I}from"./a-D1SwIVBP.js";function U(t,p="default",c=[]){const{children:a}=t;if(a!==null&&typeof a=="object"&&!Array.isArray(a)){const d=a[p];if(typeof d=="function")return d()}return c}const ye=m([o("descriptions",{fontSize:"var(--n-font-size)"},[o("descriptions-separator",`
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
 `))]),_="DESCRIPTION_ITEM_FLAG";function xe(t){return typeof t=="object"&&t&&!Array.isArray(t)?t.type&&t.type[_]:!1}const Se=Object.assign(Object.assign({},Y.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),Ce=G({name:"Descriptions",props:Se,slots:Object,setup(t){const{mergedClsPrefixRef:p,inlineThemeDisabled:c}=se(t),a=Y("Descriptions","-descriptions",ye,ie,t,p),d=F(()=>{const{size:e,bordered:g}=t,{common:{cubicBezierEaseInOut:v},self:{titleTextColor:P,thColor:D,thColorModal:n,thColorPopover:A,thTextColor:S,thFontWeight:j,tdTextColor:M,tdColor:H,tdColorModal:N,tdColorPopover:r,borderColor:C,borderColorModal:O,borderColorPopover:f,borderRadius:w,lineHeight:z,[E("fontSize",e)]:R,[E(g?"thPaddingBordered":"thPadding",e)]:y,[E(g?"tdPaddingBordered":"tdPadding",e)]:$}}=a.value;return{"--n-title-text-color":P,"--n-th-padding":y,"--n-td-padding":$,"--n-font-size":R,"--n-bezier":v,"--n-th-font-weight":j,"--n-line-height":z,"--n-th-text-color":S,"--n-td-text-color":M,"--n-th-color":D,"--n-th-color-modal":n,"--n-th-color-popover":A,"--n-td-color":H,"--n-td-color-modal":N,"--n-td-color-popover":r,"--n-border-radius":w,"--n-border-color":C,"--n-border-color-modal":O,"--n-border-color-popover":f}}),l=c?ae("descriptions",F(()=>{let e="";const{size:g,bordered:v}=t;return v&&(e+="a"),e+=g[0],e}),d,t):void 0;return{mergedClsPrefix:p,cssVars:c?void 0:d,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender,compitableColumn:de(t,["columns","column"]),inlineThemeDisabled:c}},render(){const t=this.$slots.default,p=t?re(t()):[];p.length;const{contentClass:c,labelClass:a,compitableColumn:d,labelPlacement:l,labelAlign:e,size:g,bordered:v,title:P,cssVars:D,mergedClsPrefix:n,separator:A,onRender:S}=this;S==null||S();const j=p.filter(r=>xe(r)),M={span:0,row:[],secondRow:[],rows:[]},N=j.reduce((r,C,O)=>{const f=C.props||{},w=j.length-1===O,z=["label"in f?f.label:U(C,"label")],R=[U(C)],y=f.span||1,$=r.span;r.span+=y;const T=f.labelStyle||f["label-style"]||this.labelStyle,V=f.contentStyle||f["content-style"]||this.contentStyle;if(l==="left")v?r.row.push(s("th",{class:[`${n}-descriptions-table-header`,a],colspan:1,style:T},z),s("td",{class:[`${n}-descriptions-table-content`,c],colspan:w?(d-$)*2+1:y*2-1,style:V},R)):r.row.push(s("td",{class:`${n}-descriptions-table-content`,colspan:w?(d-$)*2:y*2},s("span",{class:[`${n}-descriptions-table-content__label`,a],style:T},[...z,A&&s("span",{class:`${n}-descriptions-separator`},A)]),s("span",{class:[`${n}-descriptions-table-content__content`,c],style:V},R)));else{const q=w?(d-$)*2:y*2;r.row.push(s("th",{class:[`${n}-descriptions-table-header`,a],colspan:q,style:T},z)),r.secondRow.push(s("td",{class:[`${n}-descriptions-table-content`,c],colspan:q,style:V},R))}return(r.span>=d||w)&&(r.span=0,r.row.length&&(r.rows.push(r.row),r.row=[]),l!=="left"&&r.secondRow.length&&(r.rows.push(r.secondRow),r.secondRow=[])),r},M).rows.map(r=>s("tr",{class:`${n}-descriptions-table-row`},r));return s("div",{style:D,class:[`${n}-descriptions`,this.themeClass,`${n}-descriptions--${l}-label-placement`,`${n}-descriptions--${e}-label-align`,`${n}-descriptions--${g}-size`,v&&`${n}-descriptions--bordered`]},P||this.$slots.header?s("div",{class:`${n}-descriptions-header`},P||le(this,"header")):null,s("div",{class:`${n}-descriptions-table-wrapper`},s("table",{class:`${n}-descriptions-table`},s("tbody",null,l==="top"&&s("tr",{class:`${n}-descriptions-table-row`,style:{visibility:"collapse"}},ne(d*2,s("td",null))),N))))}}),ze={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},B=G({name:"DescriptionsItem",[_]:!0,props:ze,slots:Object,render(){return null}}),Z="https://www.google.com/search?q=",X="https://www.baidu.com/s?wd=",Re=G({__name:"Attraction",props:{info:{}},setup(t){const p=t,c=W(),a=W();ce(()=>p.info,()=>{requestAnimationFrame(()=>{var l,e;a.value=(e=(l=c.value)==null?void 0:l.$el)==null?void 0:e.getBoundingClientRect()})},{immediate:!0});const d=F(()=>{const l=a.value;let{x:e,y:g}=p.info;return l&&e&&g&&(e-=l.width/2,g-=l.height+20),{left:(e||0)+"px",top:(g||0)+"px"}});return(l,e)=>(J(),be(i(pe),{ref_key:"cardRef",ref:c,title:t.info.name,size:"small",style:ge(d.value)},he({default:b(()=>[i(Q).isMobileStyle?(J(),fe(ve,{key:0},[u(i(I),{href:X+t.info.name,target:"_blank"},{default:b(()=>[...e[3]||(e[3]=[h(" 百度一下 ",-1)])]),_:1},8,["href"]),e[5]||(e[5]=h("   ",-1)),u(i(I),{href:Z+t.info.name,target:"_blank"},{default:b(()=>[...e[4]||(e[4]=[h(" 谷歌搜索 ",-1)])]),_:1},8,["href"])],64)):me("",!0),u(i(Ce),{bordered:"",size:"small",column:2},{default:b(()=>[u(i(B),{label:"坐标"},{default:b(()=>[h(x(t.info.coordinates),1)]),_:1}),u(i(B),{label:"访问量"},{default:b(()=>[h(x(i(L)(t.info.visitors,{join:!0}))+"人 ",1)]),_:1}),u(i(B),{label:"积极评价"},{default:b(()=>[h(x(i(L)(t.info.positiveReviews,{join:!0}))+"人 ("+x(t.info.positiveRate)+"%) ",1)]),_:1}),u(i(B),{label:"消极评价"},{default:b(()=>[h(x(i(L)(t.info.negativeReviews,{join:!0}))+"人 ("+x(t.info.negativeRate)+"%) ",1)]),_:1})]),_:1}),e[6]||(e[6]=ue("div",{class:"n-popover-arrow"},null,-1))]),_:2},[i(Q).isMobileStyle?void 0:{name:"header-extra",fn:b(()=>[u(i(I),{href:X+t.info.name,target:"_blank"},{default:b(()=>[...e[0]||(e[0]=[h(" 百度一下 ",-1)])]),_:1},8,["href"]),e[2]||(e[2]=h("   ",-1)),u(i(I),{href:Z+t.info.name,target:"_blank"},{default:b(()=>[...e[1]||(e[1]=[h(" 谷歌搜索 ",-1)])]),_:1},8,["href"])]),key:"0"}]),1032,["title","style"]))}}),Pe=we(Re,[["__scopeId","data-v-4d060bc7"]]);export{Pe as default};
