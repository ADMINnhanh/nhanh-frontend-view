import{d as M,r as u,aR as w,o as b,c as L,a as E,b4 as X,aq as Y,_ as I}from"./index-BDaFlk6A.js";import{_ as q,b as B}from"./Utility-DQfYChMj.js";const S=1e3*1.2,U=M({__name:"index",setup(g){const l=u({x:0,y:0}),a=u(),o=u(),m=u(),n={x:0,y:0};requestAnimationFrame(()=>{const e=document.querySelector(".speed-nhanh");e&&(n.x=e.clientWidth-100,n.y=e.clientHeight-100)});const t=u({x:0,y:0}),i={x:0,y:0};let c="";function y(e){const s={x:i.x<a.value?1:-1,y:i.y<o.value?1:-1};let v={x:l.value.x,y:l.value.y};const _=e;B(d=>{if(c!=_)return;const h=(1-d)*v.x,p=(1-d)*v.y;t.value.x+=h*s.x,t.value.y+=p*s.y,(t.value.x>=n.x||t.value.x<=0)&&(v.x/=2,s.x*=-1),(t.value.y>=n.y||t.value.y<=0)&&(v.y/=2,s.y*=-1),t.value.x=Math.min(Math.max(t.value.x,0),n.x),t.value.y=Math.min(Math.max(t.value.y,0),n.y)},S)}function f(e){document.body.classList.add("no-select"),m.value=!0,c="",a.value=e.clientX,o.value=e.clientY}function x(e){document.body.classList.remove("no-select"),m.value=!1,a.value=e.clientX,o.value=e.clientY,c=q(),y(c)}function r(e){m.value&&(l.value.x=Math.abs(e.clientX-a.value),l.value.y=Math.abs(e.clientY-o.value),t.value.x+=e.clientX-a.value,t.value.y+=e.clientY-o.value,t.value.x=Math.min(Math.max(t.value.x,0),n.x),t.value.y=Math.min(Math.max(t.value.y,0),n.y),i.x=a.value,i.y=o.value,a.value=e.clientX,o.value=e.clientY)}return window.addEventListener("mouseup",x),window.addEventListener("mousemove",r),w(()=>{window.removeEventListener("mouseup",x),window.removeEventListener("mousemove",r)}),(e,s)=>(b(),L("div",{class:"speed-nhanh",onMousedown:f},[E("img",{src:X,alt:"",style:Y({top:`${t.value.y}px`,left:`${t.value.x}px`})},null,4)],32))}}),z=I(U,[["__scopeId","data-v-05f8132f"]]);export{z as default};
