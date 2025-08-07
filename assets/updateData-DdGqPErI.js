import{p as v,S as C,Q as d,R as f,ap as y,d as V,v as A,a2 as D,K as G,W as H,k as T,dk as z,J as I,o as h,aS as w,w as o,b as a,u as s,e as l,b4 as B,B as m,aY as k,bm as W,_ as K}from"./index-Bas7IHTD.js";import{N as $}from"./Switch-CRv01swy.js";/* empty css                                                                   */const r="0!important",P="-1px!important";function p(i){return f(`${i}-type`,[d("& +",[v("button",{},[f(`${i}-type`,[y("border",{borderLeftWidth:r}),y("state-border",{left:P})])])])])}function b(i){return f(`${i}-type`,[d("& +",[v("button",[f(`${i}-type`,[y("border",{borderTopWidth:r}),y("state-border",{top:P})])])])])}const L=v("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[C("vertical",{flexDirection:"row"},[C("rtl",[v("button",[d("&:first-child:not(:last-child)",`
 margin-right: ${r};
 border-top-right-radius: ${r};
 border-bottom-right-radius: ${r};
 `),d("&:last-child:not(:first-child)",`
 margin-left: ${r};
 border-top-left-radius: ${r};
 border-bottom-left-radius: ${r};
 `),d("&:not(:first-child):not(:last-child)",`
 margin-left: ${r};
 margin-right: ${r};
 border-radius: ${r};
 `),p("default"),f("ghost",[p("primary"),p("info"),p("success"),p("warning"),p("error")])])])]),f("vertical",{flexDirection:"column"},[v("button",[d("&:first-child:not(:last-child)",`
 margin-bottom: ${r};
 margin-left: ${r};
 margin-right: ${r};
 border-bottom-left-radius: ${r};
 border-bottom-right-radius: ${r};
 `),d("&:last-child:not(:first-child)",`
 margin-top: ${r};
 margin-left: ${r};
 margin-right: ${r};
 border-top-left-radius: ${r};
 border-top-right-radius: ${r};
 `),d("&:not(:first-child):not(:last-child)",`
 margin: ${r};
 border-radius: ${r};
 `),b("default"),f("ghost",[b("primary"),b("info"),b("success"),b("warning"),b("error")])])])]),M={size:{type:String,default:void 0},vertical:Boolean},U=V({name:"ButtonGroup",props:M,setup(i){const{mergedClsPrefixRef:u,mergedRtlRef:g}=A(i);return D("-button-group",L,u),G(z,i),{rtlEnabled:H("ButtonGroup",g,u),mergedClsPrefix:u}},render(){const{mergedClsPrefix:i}=this;return T("div",{class:[`${i}-button-group`,this.rtlEnabled&&`${i}-button-group--rtl`,this.vertical&&`${i}-button-group--vertical`],role:"group"},this.$slots)}}),j=V({__name:"updateData",props:{canvas:{},overlays:{}},setup(i){const u=i,g=I(!1);function c(e){u.overlays.forEach(t=>{t.value=t.value.map(n=>Array.isArray(n)?[n[0]+e,n[1]+e]:n+e)})}function x(e){u.overlays.forEach(t=>{t.position=t.position.map(n=>Array.isArray(n)?[n[0]+e,n[1]+e]:n+e)})}function E(e){u.overlays.forEach(t=>{t.isDraggable=e})}function N(){var e;(e=u.canvas)==null||e.setAxis({x:-u.canvas.axisConfig.x,y:-u.canvas.axisConfig.y})}const S=u.overlays.some(e=>"isHandlePointsVisible"in e);function R(e){u.overlays.forEach(t=>{"isHandlePointsVisible"in t&&(t.isHandlePointsVisible=e)})}return(e,t)=>e.canvas?(h(),w(s(k),{key:0,vertical:"",style:{"margin-bottom":"10px"}},{default:o(()=>[a(s(k),null,{default:o(()=>[a(s($),{round:!1,"onUpdate:value":N},{checked:o(()=>t[6]||(t[6]=[l(" 颠倒坐标轴 ")])),unchecked:o(()=>t[7]||(t[7]=[l(" 颠倒坐标轴 ")])),_:1}),a(s($),{round:!1,onUpdateValue:E,"default-value":!0},{checked:o(()=>t[8]||(t[8]=[l(" 拖拽 ")])),unchecked:o(()=>t[9]||(t[9]=[l(" 拖拽 ")])),_:1}),s(S)?(h(),w(s($),{key:0,round:!1,onUpdateValue:R,"default-value":!0},{checked:o(()=>t[10]||(t[10]=[l(" 控制点 ")])),unchecked:o(()=>t[11]||(t[11]=[l(" 控制点 ")])),_:1})):B("",!0),a(s(m),{onClick:t[0]||(t[0]=n=>e.canvas.setFitView()),size:"small",type:"primary"},{default:o(()=>t[12]||(t[12]=[l(" 调整视图 ")])),_:1,__:[12]}),a(s($),{round:!1,value:g.value,"onUpdate:value":t[1]||(t[1]=n=>g.value=n)},{checked:o(()=>t[13]||(t[13]=[l(" 更多控制项 ")])),unchecked:o(()=>t[14]||(t[14]=[l(" 更多控制项 ")])),_:1},8,["value"])]),_:1}),a(s(W),{show:g.value},{default:o(()=>[a(s(k),null,{default:o(()=>[a(s(U),null,{default:o(()=>[a(s(m),{ghost:"",onClick:t[2]||(t[2]=n=>c(1))},{default:o(()=>t[15]||(t[15]=[l(" value + 1 ")])),_:1,__:[15]}),a(s(m),{ghost:"",onClick:t[3]||(t[3]=n=>c(-1))},{default:o(()=>t[16]||(t[16]=[l(" value - 1 ")])),_:1,__:[16]})]),_:1}),a(s(U),null,{default:o(()=>[a(s(m),{ghost:"",onClick:t[4]||(t[4]=n=>x(100))},{default:o(()=>t[17]||(t[17]=[l(" position + 100 ")])),_:1,__:[17]}),a(s(m),{ghost:"",onClick:t[5]||(t[5]=n=>x(-100))},{default:o(()=>t[18]||(t[18]=[l(" position - 100 ")])),_:1,__:[18]})]),_:1})]),_:1})]),_:1},8,["show"])]),_:1})):B("",!0)}}),Y=K(j,[["__scopeId","data-v-8ad380b6"]]);export{Y as U};
