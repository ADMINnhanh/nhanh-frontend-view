import{d as h,V as k,M as x,W as v,O as C,o as y,c as B,a,w as i,u as s,B as l,e as u,Z as N,Q as $,Y as b,_ as E}from"./index-BoTCiOhW.js";import{_ as r}from"./index-BsbHnWwm.js";const L=["id"],P=h({__name:"line",setup(T){const d=k();let o;const w=new r.Line({value:[[1,1],[2,2],[3,1]]}),g=new r.Line({position:[[-100,50],[-100,-100],[50,-100]]}),V=new r.Line({value:[[1,-1],[-1,1]],infinite:!0}),p=[w,g,V];function _(t){p.forEach(e=>{const n=e.value.map(([f,c])=>[f+t,c+t]);e.setValue(n)})}function m(t){p.forEach(e=>{const n=e.position.map(([f,c])=>[f+t,c+t]);e.setPosition(n)})}return x(()=>v.value.theme,t=>o==null?void 0:o.setTheme(t)),C(()=>{o=new r(d),o.setTheme(v.value.theme),o.addOverlay(p)}),(t,e)=>(y(),B(b,null,[a(s(N),{style:{"margin-bottom":"10px"}},{default:i(()=>[a(s(l),{type:"info",ghost:"",onClick:e[0]||(e[0]=n=>_(1))},{default:i(()=>[u(" value + 1 ")]),_:1}),a(s(l),{type:"info",ghost:"",onClick:e[1]||(e[1]=n=>_(-1))},{default:i(()=>[u(" value - 1 ")]),_:1}),a(s(l),{ghost:"",onClick:e[2]||(e[2]=n=>m(100))},{default:i(()=>[u(" position + 100 ")]),_:1}),a(s(l),{ghost:"",onClick:e[3]||(e[3]=n=>m(-100))},{default:i(()=>[u(" position - 100 ")]),_:1})]),_:1}),$("canvas",{id:s(d),class:"my-canvas"},null,8,L)],64))}}),O=E(P,[["__scopeId","data-v-5213f9bb"]]);export{O as default};
