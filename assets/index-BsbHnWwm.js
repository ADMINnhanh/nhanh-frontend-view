var I=Object.defineProperty;var L=(p,e,t)=>e in p?I(p,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[e]=t;var l=(p,e,t)=>L(p,typeof e!="symbol"?e+"":e,t);import{cw as z,cx as T,cy as E,bE as G}from"./index-BoTCiOhW.js";class B{constructor(e){l(this,"canvas");l(this,"show",{all:!0,grid:{main:!0,secondary:!0},axis:!0,axisText:!0});this.canvas=e}drawAxisAndGrid(){!this.canvas||!this.show.all||((this.show.grid.main||this.show.grid.secondary)&&this.drawGrid(),this.show.axis&&this.drawAxis(),this.show.axisText&&this.drawAxisText())}color(){const{theme:e,style:t}=this.canvas;return(t[e]||t.light).grid}drawGrid(){const e=this.canvas,{ctx:t,rect:s,center:i,axisConfig:n}=e,{width:a,height:r}=s.value,o=this.color(),h=n.size,m=h/5;t.lineWidth=1;const c=(f,v)=>{const d=i.x%f>0?i.x%f:f+i.x%f;t.strokeStyle=v,t.beginPath();for(let y=0;y*f+d<=a;y++)t.moveTo(y*f+d,0),t.lineTo(y*f+d,r);t.stroke()},u=(f,v)=>{const d=i.y%f>0?i.y%f:f+i.y%f;t.strokeStyle=v,t.beginPath();for(let y=0;y*f+d<=r;y++)t.moveTo(0,y*f+d),t.lineTo(a,y*f+d);t.stroke()};this.show.grid.secondary&&(c(m,o.innerGrid),u(m,o.innerGrid)),this.show.grid.main&&(c(h,o.grid),u(h,o.grid))}drawAxis(){const e=this.canvas,{ctx:t,rect:s,center:i}=e,{width:n,height:a}=s.value,r=this.color();t.lineWidth=2,t.strokeStyle=r.axis;const o=()=>{i.y>=0&&i.y<=a&&(t.beginPath(),t.moveTo(0,i.y),t.lineTo(n,i.y),t.stroke())},h=()=>{i.x>=0&&i.x<=n&&(t.beginPath(),t.moveTo(i.x,0),t.lineTo(i.x,a),t.stroke())};o(),h()}drawAxisText(){const e=this.canvas,{ctx:t,rect:s,center:i,axisConfig:n,style:a,theme:r}=e,{width:o,height:h}=s.value,m=d=>Math.ceil(t.measureText(d).width),c=4,u=a[r].text.size;{const d=m("0"),y=i.x<c||i.x>o+d+c,g=i.y<-(c+u)||i.y>h+u+c;!y&&!g&&e.drawText("0",i.x-d-c,i.y+u+c)}const f=e.getGridCount(),v=n.size;{let d=i.y+u+c;d=Math.max(Math.min(d,h-c),c+u);const y=i.y>h||i.y<0;let g=i.x>0?i.x%v:i.x<0?v+i.x%v:0,w=e.getAxisValueByPoint((g-i.x)*n.x,0).xV;for(;g<=o;){const x=m(String(w));w!==0&&e.drawText(String(w),g-x/2,d,y),g+=v,w=e.preservePrecision(w+f*n.x)}}{const d=i.x>o||i.x<0;let y=i.y>0?i.y%v:i.y<0?v+i.y%v:0,g=e.getAxisValueByPoint(0,(y-i.y)*n.y).yV;for(;y<=h;){const w=m(String(g));let x=i.x-w-c;x=Math.max(Math.min(x,o-w-c),c),g!==0&&e.drawText(String(g),x,y+u/2,d),y+=v,g=e.preservePrecision(g+f*n.y)}}}}class b{constructor(e){l(this,"show",!0);l(this,"scales");l(this,"notifyReload");(e==null?void 0:e.show)!==void 0&&(this.show=e.show),e!=null&&e.scales&&(this.scales=e.scales)}setShow(e){var t;e!=this.show&&(this.show=e,(t=this.notifyReload)==null||t.call(this,!0))}getShow(){return this.show}setScales(e){var t;e!=this.scales&&(this.scales=e,this.show&&((t=this.notifyReload)==null||t.call(this)))}getScales(){return this.scales}shouldRender(e,t){return this.show&&e!==void 0&&(this.scales?e>=this.scales[0]&&e<=this.scales[1]:!0)&&t!==0}}class V{constructor(e){l(this,"show",new b);l(this,"style");l(this,"position");l(this,"value");l(this,"zIndex");l(this,"dynamicPosition");l(this,"extData");l(this,"mainCanvas");l(this,"notifyReload");this.show.setShow(e.show??!0),this.style=e.style,this.zIndex=e.zIndex??0,this.position=e.position,this.value=e.value}setMainCanvas(e){this.mainCanvas=e,this.updateBaseData()}equalsMainCanvas(e){return this.mainCanvas===e}setNotifyReload(e){this.notifyReload=e?t=>{var s;(t||this.show.shouldRender((s=this.mainCanvas)==null?void 0:s.scale))&&e()}:void 0,this.show.notifyReload=this.notifyReload}setStyle(e){var t;this.style=e,this.dynamicPosition&&((t=this.notifyReload)==null||t.call(this))}setZIndex(e){var t;this.zIndex=e,this.dynamicPosition&&((t=this.notifyReload)==null||t.call(this))}setPosition(e){var s;this.position=e,this.value=void 0;const t=!!this.dynamicPosition;this.updateBaseData(),(this.dynamicPosition||t)&&((s=this.notifyReload)==null||s.call(this))}setValue(e){var s;this.value=e,this.position=void 0;const t=!!this.dynamicPosition;this.updateBaseData(),(this.dynamicPosition||t)&&((s=this.notifyReload)==null||s.call(this))}}class M extends V{constructor(t){super(t);l(this,"radiusValue",0);l(this,"angle",2*Math.PI)}updateBaseData(){var c;if(!this.mainCanvas)return;const t=this.mainCanvas.IsValid;let{value:s,position:i}=this;const[n,a]=[t(s),t(i)];if(!n&&!a)return this.dynamicPosition=void 0;if(n){const u=this.mainCanvas.getAxisPointByValue(s[0],s[1],!0);i=[u.x,u.y]}else{const u=this.mainCanvas.getAxisValueByPoint(i[0],i[1],!0);s=[u.xV,u.yV]}const r=this.mainCanvas.transformPosition([i])[0];this.dynamicPosition=r,this.value=s,this.position=i;const o=this.mainCanvas.style[this.mainCanvas.theme].point;let h={};typeof this.style=="string"?h=(c=this.mainCanvas.style[this.style])==null?void 0:c.point:typeof this.style=="object"&&(h=this.style);const m=((h==null?void 0:h.width)||o.width)+((h==null?void 0:h.radius)||o.radius);this.radiusValue=this.mainCanvas.preservePrecision(s[0]/i[0]*m)}draw(t){var c;const{dynamicPosition:s,mainCanvas:i}=this;if(!i)return;const n=i.style[i.theme].point;let a={};typeof this.style=="string"?a=((c=i.style[this.style])==null?void 0:c.point)||n:typeof this.style=="object"?a=Object.assign({},n,this.style):a=n;const{width:r,stroke:o,fill:h,radius:m}=a;t.lineWidth=r,t.strokeStyle=o,t.fillStyle=h,t.beginPath(),t.arc(s[0],s[1],m,0,this.angle),t.fill(),t.stroke()}getDraw(){const{show:t,dynamicPosition:s,position:i,value:n,radiusValue:a,mainCanvas:r}=this;if(!r)return;const{scale:o,maxMinValue:h,isRecalculate:m}=r;if(t.shouldRender(o)&&!!s){const[f,v]=n;if(h.maxXV>f-a&&h.minXV<f+a&&h.maxYV>v-a&&h.minYV<v+a)return m&&(this.dynamicPosition=r.transformPosition([i])[0]),this.draw.bind(this)}}}class A extends V{constructor(t){super(t);l(this,"infinite");l(this,"angle",2*Math.PI);this.infinite=t.infinite}updateBaseData(){if(!this.mainCanvas)return;let{value:t,position:s}=this;const[i,n]=[this.mainCanvas.IsValids(t)&&t.length>1,this.mainCanvas.IsValids(s)&&s.length>1];if(!i&&!n)return this.dynamicPosition=void 0;if(i){s=[];for(let r=0;r<t.length;r++){const o=t[r],h=this.mainCanvas.getAxisPointByValue(o[0],o[1],!0);s.push([h.x,h.y])}}else{t=[];for(let r=0;r<s.length;r++){const o=s[r],h=this.mainCanvas.getAxisValueByPoint(o[0],o[1],!0);t.push([h.xV,h.yV])}}const a=this.mainCanvas.transformPosition(s);this.dynamicPosition=a,this.value=t,this.position=s}setInfinite(t){var s;t!=this.infinite&&(this.infinite=t,this.dynamicPosition&&((s=this.notifyReload)==null||s.call(this)))}getInfinite(){return this.infinite}drawPoint(t){var c,u;const{mainCanvas:s,dynamicPosition:i}=this;if(!s)return;const n=s.style[s.theme].line.point;let a={};typeof this.style=="string"?a=((c=s.style[this.style])==null?void 0:c.line.point)||n:typeof((u=this.style)==null?void 0:u.point)=="object"?a=Object.assign({},n,this.style.point):a=n;const{width:r,stroke:o,fill:h,radius:m}=a;t.lineWidth=r,t.strokeStyle=o,t.fillStyle=h,i.forEach(f=>{t.beginPath(),t.arc(f[0],f[1],m,0,this.angle),t.fill(),t.stroke()})}drawLine(t,s){var v;const{mainCanvas:i}=this;if(s=s||this.dynamicPosition,!i)return;const n=i.style[i.theme].line;let a={};typeof this.style=="string"?a=((v=i.style[this.style])==null?void 0:v.line)||n:typeof this.style=="object"?a=Object.assign({},n,this.style):a=n;const{width:r,color:o,dash:h,dashGap:m,dashOffset:c,cap:u,join:f}=a;t.setLineDash(h?m:[]),t.lineDashOffset=c,t.lineCap=u,t.lineJoin=f,t.lineWidth=r,t.strokeStyle=o,t.beginPath(),s.forEach((d,y)=>{t[y==0?"moveTo":"lineTo"](d[0],d[1])}),t.stroke()}drawInfiniteStraightLine(t){const{mainCanvas:s,dynamicPosition:i}=this;if(!s)return;const{rect:n}=s,[a,r]=z(i),o=[r[0]-a[0],r[1]-a[1]];if(o[0]===0&&o[1]===0)return console.error("重合点无法确定方向");const h=(u,f)=>{const[v,d]=u,[y,g]=f;let w=1/0;if(y!==0){const x=y>0?(n.value.width-v)/y:-v/y;x>0&&(w=Math.min(w,x))}if(y!==0){const x=y>0?(n.value.width-v)/y:-v/y;x>0&&(w=Math.min(w,x))}return w===1/0?u:[v+y*w,d+g*w]},m=h(a,[-o[0],-o[1]]),c=h(r,o);this.drawLine(t,[m,c]),this.drawPoint(t)}getDraw(){const{show:t,dynamicPosition:s,position:i,infinite:n,mainCanvas:a}=this;if(!a)return;const{scale:r,isRecalculate:o}=a;if(t.shouldRender(r)&&!!s)return o&&(this.dynamicPosition=a.transformPosition(i)),n?this.drawInfiniteStraightLine.bind(this):this.drawLine.bind(this)}}class O extends V{constructor(t){super(t);l(this,"size");l(this,"dynamicSize");this.size=t.size}updateBaseData(){if(!this.mainCanvas)return;const{axisConfig:t,percentage:s}=this.mainCanvas;let{value:i,position:n,size:a}=this;const[r,o,h]=[this.mainCanvas.IsValids(i),this.mainCanvas.IsValids(n),this.mainCanvas.IsValid(a)];if(!r&&!o)return this.dynamicPosition=void 0;if(h)o?n.length=1:r&&(i.length=1);else{if(r&&i.length<3||o&&n.length<3)return this.dynamicPosition=void 0;a=void 0}if(r){n=[];for(let u=0;u<i.length;u++){const f=i[u],v=this.mainCanvas.getAxisPointByValue(f[0],f[1],!0);n.push([v.x,v.y])}}else{i=[];for(let u=0;u<n.length;u++){const f=n[u],v=this.mainCanvas.getAxisValueByPoint(f[0],f[1],!0);i.push([v.xV,v.yV])}}const m=this.mainCanvas.transformPosition(n),c=[];if(h){const[u,f]=a;c[0]=u*s*t.x,c[1]=f*s*t.y}this.dynamicSize=c,this.dynamicPosition=m,this.value=i,this.position=n,this.size=a}setSize(t){var i;this.size=t;const s=!!this.dynamicPosition;this.updateBaseData(),(this.dynamicPosition||s)&&((i=this.notifyReload)==null||i.call(this))}setCanvasStyles(t){var u;const{mainCanvas:s}=this;if(!s)return;const i=s.style[s.theme].polygon;let n={};typeof this.style=="string"?n=((u=s.style[this.style])==null?void 0:u.polygon)||i:typeof this.style=="object"?n=Object.assign({},i,this.style):n=i;const{width:a,stroke:r,dash:o,dashGap:h,dashOffset:m,fill:c}=n;t.setLineDash(o?h:[]),t.lineDashOffset=m,t.lineWidth=a,t.strokeStyle=r,t.fillStyle=c}drawRect(t){const{dynamicPosition:s,dynamicSize:i}=this;this.setCanvasStyles(t),t.beginPath(),t.rect(s[0][0],s[0][1],i[0],i[1]),t.stroke(),t.fill()}drawPolygon(t){const{dynamicPosition:s}=this;this.setCanvasStyles(t),t.beginPath(),s.forEach((i,n)=>{t[n==0?"moveTo":"lineTo"](i[0],i[1])}),t.closePath(),t.stroke(),t.fill()}getDraw(){var u;const{show:t,dynamicPosition:s,position:i,mainCanvas:n}=this;if(!n)return;const{scale:a,isRecalculate:r,percentage:o,axisConfig:h}=n;if(t.shouldRender(a)&&!!s)return r&&(this.dynamicPosition=n.transformPosition(i),this.size&&(this.dynamicSize=[this.size[0]*o*h.x,this.size[1]*o*h.y])),(u=this.dynamicSize)!=null&&u.length?this.drawRect.bind(this):this.drawPolygon.bind(this)}}class k extends V{constructor(t,s){super(t);l(this,"multiple");l(this,"draw");this.draw=s}isMultiple(){if(!this.mainCanvas)return;const t=this.mainCanvas.IsValid,s=this.mainCanvas.IsValids.bind(this.mainCanvas);let{value:i,position:n}=this;const a=r=>{const o=r(i),h=r(n);return o||h?(o||(this.value=void 0),h||(this.position=void 0),!0):!1};return a(t)?this.multiple=!1:a(s)&&(this.multiple=!0),this.multiple}updateBaseData(){this.mainCanvas&&(this.isMultiple(),this.dynamicPosition=void 0,this.multiple===!0?this.handleMultipleData():this.multiple===!1&&this.handleSingleData())}handleMultipleData(){let t=this.value,s=this.position;t?s=this.convertValuesToPositions(t):t=this.convertPositionsToValues(s),this.updateDataProperties(t,s)}handleSingleData(){let t=this.value,s=this.position;if(t){const i=this.mainCanvas.getAxisPointByValue(t[0],t[1],!0);s=[i.x,i.y]}else{const i=this.mainCanvas.getAxisValueByPoint(s[0],s[1],!0);t=[i.xV,i.yV]}this.updateDataProperties(t,s)}convertValuesToPositions(t){const s=[];let i=1;return t.forEach((n,a)=>{if(a===0){const r=this.mainCanvas.getAxisPointByValue(n[0],n[1],!0);s.push([r.x,r.y]),i=this.mainCanvas.preservePrecision(r.x/n[0])}else s.push([this.mainCanvas.preservePrecision(i*n[0]),this.mainCanvas.preservePrecision(i*n[1])])}),s}convertPositionsToValues(t){const s=[];let i=1;return t.forEach((n,a)=>{if(a===0){const r=this.mainCanvas.getAxisValueByPoint(n[0],n[1],!0);s.push([r.xV,r.yV]),i=this.mainCanvas.preservePrecision(r.xV/n[0])}else s.push([this.mainCanvas.preservePrecision(i*n[0]),this.mainCanvas.preservePrecision(i*n[1])])}),s}updateDataProperties(t,s){this.dynamicPosition=this.multiple?this.mainCanvas.transformPosition(s):this.mainCanvas.transformPosition([s])[0],this.value=t,this.position=s}getDraw(){const{show:t,dynamicPosition:s,mainCanvas:i,multiple:n,position:a}=this;if(!i||typeof n!="boolean")return;const{scale:r,isRecalculate:o}=i;if(t.shouldRender(r)&&!!s)return o&&(this.dynamicPosition=n?i.transformPosition(a):i.transformPosition([a])[0]),this.draw.bind(this)}}class P{constructor(e){l(this,"name");l(this,"show",new b);l(this,"overlays",new Set);l(this,"mainCanvas");l(this,"notifyReload");this.name=e}equalsMainCanvas(e){return this.mainCanvas===e}setMainCanvas(e){var t;this.mainCanvas=e,this.overlays.forEach(s=>s.setMainCanvas(e)),e&&this.overlays.size&&((t=this.notifyReload)==null||t.call(this))}setNotifyReload(e){this.notifyReload=e?t=>{var s;(t||this.show.shouldRender((s=this.mainCanvas)==null?void 0:s.scale)&&this.overlays.size)&&e()}:void 0,this.overlays.forEach(t=>t.setNotifyReload(this.notifyReload)),this.show.notifyReload=this.notifyReload}addOverlays(e){var t;[e].flat().forEach(s=>{s.setNotifyReload(this.notifyReload),s.setMainCanvas(this.mainCanvas),this.overlays.add(s)}),(t=this.notifyReload)==null||t.call(this)}hasOverlay(e){return this.overlays.has(e)}removeOverlays(e){var t;[e].flat().forEach(s=>{this.overlays.delete(s),s.setNotifyReload(),s.setMainCanvas()}),(t=this.notifyReload)==null||t.call(this)}clearOverlays(){var e;(e=this.notifyReload)==null||e.call(this),this.overlays.forEach(t=>{t.setNotifyReload(),t.setMainCanvas()}),this.overlays.clear()}getOverlays(){var t;const e=[];return this.show.shouldRender((t=this.mainCanvas)==null?void 0:t.scale)&&this.overlays.forEach(s=>{if(s.equalsMainCanvas(this.mainCanvas)){const i=s.getDraw();i&&e.push([s.zIndex,i])}else this.overlays.delete(s)}),e}}class R{constructor(e){l(this,"name");l(this,"show",new b);l(this,"opacity",1);l(this,"zIndex",4);l(this,"canvas",document.createElement("canvas"));l(this,"ctx",this.canvas.getContext("2d"));l(this,"isReload",!1);l(this,"groups",new Map);l(this,"mainCanvas");l(this,"notifyReload");this.name=e}equalsMainCanvas(e){return this.mainCanvas===e}setMainCanvas(e){var t,s;this.mainCanvas=e,this.canvas.width=((t=e==null?void 0:e.rect)==null?void 0:t.value.width)||0,this.canvas.height=((s=e==null?void 0:e.rect)==null?void 0:s.value.height)||0,this.groups.forEach(i=>i.setMainCanvas(e))}setNotifyReload(e){this.notifyReload=e?t=>{var s;(t||this.show.shouldRender((s=this.mainCanvas)==null?void 0:s.scale)&&this.groups.size)&&e()}:void 0,this.groups.forEach(t=>t.setNotifyReload(e?()=>{var s;(s=this.notifyReload)==null||s.call(this),this.isReload=!0}:void 0)),this.show.notifyReload=this.notifyReload}getGroup(e){return this.groups.get(e)}addGroup(e){[e].flat().forEach(t=>{t instanceof P&&(t.setNotifyReload(this.notifyReload),t.setMainCanvas(this.mainCanvas),this.groups.set(t.name,t))})}removeGroup(e){var s;let t=!1;[e].flat().forEach(i=>{i instanceof P&&(this.groups.delete(i.name),i.setNotifyReload(),i.setMainCanvas(),t=!0)}),t&&((s=this.notifyReload)==null||s.call(this))}clearGroup(){var e;this.groups.size&&(this.groups.forEach(t=>{t.setNotifyReload(),t.setMainCanvas()}),this.groups.clear(),(e=this.notifyReload)==null||e.call(this))}setzIndex(e){var t;e!=this.zIndex&&(this.zIndex=e,(t=this.notifyReload)==null||t.call(this,!1))}getzIndex(){return this.zIndex}setOpacity(e){var t;this.opacity!=e&&(e>=0&&e<=1?(this.opacity=e,(t=this.notifyReload)==null||t.call(this,!1)):console.warn("Opacity value should be between 0 and 1."))}getOpacity(){return this.opacity}getCanvas(){if(!this.mainCanvas)return;const{scale:e,rect:t,isRecalculate:s,isThemeUpdated:i}=this.mainCanvas,n=this.show.shouldRender(e),a=this.groups.size;if(n&&a){if(this.isReload||s||i){this.isReload=!1,this.canvas.width=(t==null?void 0:t.value.width)||0,this.canvas.height=(t==null?void 0:t.value.height)||0;const r=[];this.groups.forEach(o=>{o.equalsMainCanvas(this.mainCanvas)?r.push(...o.getOverlays()):this.groups.delete(o.name)}),r.sort((o,h)=>o[0]-h[0]),r.forEach(([,o])=>o(this.ctx))}return[this.zIndex,this.canvas]}}}class S{constructor(e){l(this,"name");l(this,"show",new b);l(this,"layers",new Map);l(this,"mainCanvas");l(this,"notifyReload");this.name=e}setMainCanvas(e){this.mainCanvas=e,this.layers.forEach(t=>t.setMainCanvas(e))}setNotifyReload(e){this.notifyReload=e?t=>{var s;(t||this.show.shouldRender((s=this.mainCanvas)==null?void 0:s.scale)&&this.layers.size)&&e()}:void 0,this.layers.forEach(t=>t.setNotifyReload(this.notifyReload)),this.show.notifyReload=this.notifyReload}getLayer(e){return this.layers.get(e)}addLayer(e){[e].flat().forEach(t=>{t instanceof R&&(t.setNotifyReload(this.notifyReload),t.setMainCanvas(this.mainCanvas),this.layers.set(t.name,t))})}removeLayer(e){var s;let t=!1;[e].flat().forEach(i=>{i instanceof R&&(this.layers.delete(i.name),i.setNotifyReload(),i.setMainCanvas(),t=!0)}),t&&((s=this.notifyReload)==null||s.call(this))}clearLayers(){var e;this.layers.size&&(this.layers.forEach(t=>{t.setNotifyReload(),t.setMainCanvas()}),this.layers.clear(),(e=this.notifyReload)==null||e.call(this))}fetchCanvas(){var e;if(this.show.shouldRender((e=this.mainCanvas)==null?void 0:e.scale)&&this.layers.size){const t=[];return this.layers.forEach(s=>{if(s.equalsMainCanvas(this.mainCanvas)){const i=s.getCanvas();i&&t.push(i)}else this.layers.delete(s.name)}),t}return[]}}class Y{constructor(e){l(this,"canvas");l(this,"ctx");l(this,"rect");l(this,"offset",{x:0,y:0});l(this,"center",{x:0,y:0});l(this,"defaultCenter",{top:void 0,bottom:void 0,left:void 0,right:void 0});l(this,"lockDragAndResize",!1);l(this,"accuracy",5);l(this,"scale",1);l(this,"percentage",1);l(this,"axisConfig",{count:2,min:100,max:200,size:100,x:1,y:1});l(this,"cycle",10);l(this,"delta",.02);l(this,"redrawInNextRenderFrame",!1);l(this,"isAuto",!1);l(this,"drawAxis");l(this,"layerGroups",new Map);const t=document.getElementById(e);if(t instanceof HTMLCanvasElement)if(t.getContext){this.canvas=t,this.ctx=t.getContext("2d"),this.rect=(n=>{let a=!0;Promise.resolve().then(()=>a=!1);const r={value:n.getBoundingClientRect()};return new Proxy(r,{get(o,h){return h=="value"?(a||(o.value=n.getBoundingClientRect(),a=!0,Promise.resolve().then(()=>a=!1)),o.value):o[h]},set(){return!1}})})(t);const{clientWidth:s,clientHeight:i}=t;[t.width,t.height]=[s,i]}else throw new Error("canvas-unsupported code here");else throw new Error("canvas is not HTMLCanvasElement")}updateCenter(){const{canvas:e,rect:t,offset:s,defaultCenter:i}=this;if(!e)return console.error("canvas is not HTMLCanvasElement");const{width:n,height:a}=t.value,{top:r,bottom:o,left:h,right:m}=i,c={vertical:(d,y)=>{if([0,"0","0%"].includes(d))return 0;if(!(d==1/0||d==-1/0))return typeof d=="number"?d:["top","left"].includes(d)?0:["bottom","right"].includes(d)?y:["middle","center"].includes(d)?y/2:/^(\d+)%$/.test(d)?(d=d.match(/^(\d+)%$/)[1],y*Number(d)/100):Number(d)||void 0},reverse:(d,y)=>{if([0,"0","0%"].includes(d))return y;if(d==1/0||d==-1/0)return;if(typeof d=="number")return y-d;const g=c.vertical(d,y);return g?y-g:void 0}},u=(d,y,g)=>{if(d!==void 0){const w=c.vertical(d,g);if(w!==void 0)return w}if(y!==void 0){const w=c.reverse(y,g);if(w!==void 0)return w}return g/2},f=u(r,o,a),v=u(h,m,n);this.center={x:Math.floor(v+s.x),y:Math.floor(f+s.y)}}updateSize(){const{scale:e,cycle:t,delta:s,axisConfig:i}=this;let n=Math.abs(e-1)%(t*s)/s;n=Math.round(e<1?t-n:n),i.size=n/t*(i.max-i.min)+i.min,this.percentage=this.getAxisPointByValue(i.count,0).x/i.min}setScale(e,t){const{canvas:s,lockDragAndResize:i,axisConfig:n}=this,a=this.rect.value;if(i)return;if(!s||!a)return console.error("canvas is not HTMLCanvasElement");let r,o;e==="center"?(r=a.left+a.width/2,o=a.top+a.height/2):[r,o]=[e.clientX,e.clientY];const h=this.getMousePositionOnAxis({clientX:r,clientY:o}),m=this.getAxisValueByPoint(h.x,h.y);this.scale+=t,this.updateSize();const c=this.getAxisPointByValue(m.xV,m.yV);this.offset.x-=(c.x-h.x)*n.x,this.offset.y-=(c.y-h.y)*n.y}setAxis(e){const t={...this.axisConfig,...e},s=Object.fromEntries(Object.entries(t).map(([d,y])=>[d,Number(y)])),{x:i,y:n,count:a,min:r,max:o,size:h}=s,m=[1,-1].includes(i),c=[1,-1].includes(n),u=a>0,f=r>0&&r<o,v=h>=r&&h<=o;if(!m||!c||!u||!f||!v){console.warn("Invalid axis configuration:",{x:i,y:n,count:a,min:r,max:o,size:h});return}this.axisConfig=s}setDefaultCenter(e){Object.assign(this.defaultCenter,e)}getGridCount(){const{axisConfig:e,scale:t,cycle:s,delta:i}=this;let n=e.count;return t>1?n/=Math.pow(2,Math.floor((t-1)/(s*i))):t<1&&(n*=Math.pow(2,Math.ceil(Math.abs(t-1)/(s*i)))),n}getMousePositionOnAxis(e){const{canvas:t,center:s,rect:i,axisConfig:n}=this;if(!t)return console.error("canvas is not HTMLCanvasElement");const{clientX:a,clientY:r}=e,{left:o,top:h}=i.value,m=(a-o-s.x)*n.x,c=(r-h-s.y)*n.y;return{x:m,y:c}}getAxisValueByPoint(e,t,s){const{axisConfig:i}=this;if(s)return{xV:e/i.min*i.count,yV:t/i.min*i.count};const n=this.getGridCount(),a=this.preservePrecision(e/i.size*n),r=this.preservePrecision(t/i.size*n);return{xV:a,yV:r}}getAxisPointByValue(e,t,s){const{axisConfig:i}=this;if(s)return{x:e/i.count*i.min,y:t/i.count*i.min};const n=this.getGridCount(),a=this.preservePrecision(e/n*i.size,3),r=this.preservePrecision(t/n*i.size,3);return{x:a,y:r}}getMaxMinValue(e){e=e||this.rect.value;const{left:t,top:s,right:i,bottom:n}=e,{axisConfig:a}=this,{x:r,y:o}=this.getMousePositionOnAxis({clientX:a.x==1?t:i,clientY:a.y==1?s:n}),{xV:h,yV:m}=this.getAxisValueByPoint(r,o),{x:c,y:u}=this.getMousePositionOnAxis({clientX:a.x==1?i:t,clientY:a.y==1?n:s}),{xV:f,yV:v}=this.getAxisValueByPoint(c,u);return{minXV:h,maxXV:f,minYV:m,maxYV:v}}preservePrecision(e,t){return e=Number(e),e?Number.isInteger(e)?e:Number(e.toFixed(t||this.accuracy)):0}transformPosition(e){const{center:t,percentage:s,axisConfig:i}=this,n=[];for(let a=0;a<e.length;a++){let[r,o]=e[a];r=t.x+r*s*i.x,o=t.y+o*s*i.y,n.push([r,o])}return n}LngLatToPlane(e,t){const i=85.05112878,n=Math.max(Math.min(e,180),-180),a=Math.max(Math.min(t,i),-i),r=n*(Math.PI/180)*6378137,o=Math.log(Math.tan((90+a)*Math.PI/360))*6378137;return[r,o]}PlaneToLngLat(e,t){const i=e/6378137*(180/Math.PI),n=(2*Math.atan(Math.exp(t/6378137))-Math.PI/2)*(180/Math.PI);return[i,n]}IsValid(e){return Array.isArray(e)&&typeof e[0]=="number"&&typeof e[1]=="number"&&isFinite(e[0])&&isFinite(e[1])}IsValids(e){return Array.isArray(e)&&e.every(t=>this.IsValid(t))}}class X extends Y{constructor(t){super(t);l(this,"theme","light");l(this,"isThemeUpdated",!1);l(this,"style",{light:{background:"#fff",text:{color:"#222",secondary:"#909399",size:12,family:"微软雅黑",bold:!0},grid:{axis:"#222",grid:"#666",innerGrid:"#e5e5e5"},point:{radius:4,fill:"#d03050",width:12,stroke:"#d0305080"},line:{color:"#f0a020",width:4,dash:!1,dashGap:[5,10],dashOffset:0,cap:"round",join:"round",point:{radius:4,stroke:"#f0a02080",width:12,fill:"#f0a020"}},polygon:{fill:"#18a05830",stroke:"#18a058",width:1,dash:!1,dashGap:[5,10],dashOffset:0}},dark:{background:"#000",text:{color:"#aeaeae",secondary:"#8c8c8c",size:12,family:"微软雅黑",bold:!0},grid:{axis:"#aeaeae",grid:"#666",innerGrid:"#454545"},point:{radius:4,fill:"#e88080",width:12,stroke:"#e8808070"},line:{color:"#f2c97d",width:4,dash:!1,dashGap:[5,10],dashOffset:0,cap:"round",join:"round",point:{radius:4,stroke:"#f2c97d80",width:12,fill:"#f2c97d"}},polygon:{fill:"#63e2b730",stroke:"#63e2b7",width:1,dash:!1,dashGap:[5,10],dashOffset:0}}});this.initStyle(),this.clearScreen()}initStyle(){const{canvas:t,ctx:s,theme:i}=this;t.classList.add("_nhanh_canvas");const n=this.style[i];s.font=`${n.text.bold?"bold":""} ${n.text.size}px ${n.text.family}`}clearScreen(){const{ctx:t,theme:s,rect:i}=this,{width:n,height:a}=i.value;t.fillStyle=this.style[s].background,t.fillRect(0,0,n,a)}setStyle(t){for(const s in t)if(Object.prototype.hasOwnProperty.call(t,s)){const i=z(this.style[s]||this.style[this.theme]);T(i,t[s]),this.style[s]=i}this.initStyle()}setTheme(t){t in this.style&&(this.theme=t,this.isThemeUpdated=!0)}}class N extends X{constructor(t){super(t);l(this,"resizeObserver");l(this,"rely","");l(this,"isRecalculate",!1);l(this,"maxMinValue",{minXV:0,maxXV:0,minYV:0,maxYV:0});l(this,"measureRedrawPerformance",W(()=>this.redraw(),[[1,"#F56C6C"],[.5,"#E6A23C"],[0,"#67C23A"]]));this.canvas&&(this.resizeObserver=new ResizeObserver(E(()=>{const s=this.rect.value;[this.canvas.width,this.canvas.height]=[s.width,s.height],this.redrawOnce()},200)),this.resizeObserver.observe(this.canvas)),this.updateRely(),this.isRecalculate=!1}updateRely(){const{center:t,scale:s,rect:i,axisConfig:n}=this,a=[t.x,t.y,s,JSON.stringify(n),i.value.width,i.value.height].join();this.isRecalculate=this.rely!==a,this.rely=a}redraw(){if(!this.canvas)return console.error("canvas is not HTMLCanvasElement");if(this.canvas.clientWidth==0||this.canvas.clientHeight==0)return console.error("The image argument is a canvas element with a width or height of 0.");this.updateCenter(),this.updateRely(),this.maxMinValue=this.getMaxMinValue(),this.clearScreen();let t=[[0,()=>{var s;return(s=this.drawAxis)==null?void 0:s.drawAxisAndGrid()}]];this.layerGroups.forEach(s=>t=t.concat(s.fetchCanvas())),t.sort((s,i)=>s[0]-i[0]),t.forEach(([,s])=>{typeof s=="function"?s():this.ctx.drawImage(s,0,0)}),this.isRecalculate=!1,this.isThemeUpdated=!1}redrawOnce(t){this.isAuto&&!t&&(this.isAuto=!1),this.redrawInNextRenderFrame||(this.redrawInNextRenderFrame=!0,requestAnimationFrame(()=>{this.redrawInNextRenderFrame=!1,this.measureRedrawPerformance()}))}drawText(t,s,i,n){const{ctx:a,theme:r}=this,o=this.style[r],{background:h}=o;a.font=`${o.text.bold?"bold":""} ${o.text.size}px ${o.text.family}`,a.strokeStyle=h,a.strokeText(t,s,i),a.fillStyle=o.text[n?"secondary":"color"],a.fillText(t,s,i)}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect()}}class j extends N{constructor(t){super(t);l(this,"mouseInCanvas",!1);l(this,"mouseIsDown",!1);l(this,"mouseLastPosition",{x:0,y:0});l(this,"unBind");l(this,"lastPressedKey",{key:"",keyupTime:0,dblclick:!1});l(this,"oldClientX",[]);l(this,"oldClientY",[]);this.initEvent()}initEvent(){const{canvas:t}=this;if(!t)return console.error("canvas is not HTMLCanvasElement");const s=[{type:"click",handler:this.click.bind(this)},{type:"contextmenu",handler:this.contextmenu.bind(this)},{type:"mouseenter",handler:this.mouseenter.bind(this)},{type:"mouseleave",handler:this.mouseleave.bind(this)},{type:"keydown",handler:this.keydown.bind(this),target:window},{type:"keyup",handler:this.keyup.bind(this),target:window},{type:"wheel",handler:this.wheel.bind(this)},{type:"mousedown",handler:this.mousedown.bind(this)},{type:"mouseup",handler:this.mouseup.bind(this),target:window},{type:"mousemove",handler:this.mousemove.bind(this),target:window},{type:"touchend",handler:this.touchend.bind(this)},{type:"touchmove",handler:this.touchmove.bind(this)}];s.forEach(({type:i,handler:n,target:a=t})=>{a.addEventListener(i,n)}),this.unBind=()=>{s.forEach(({type:i,handler:n,target:a=t})=>{a.removeEventListener(i,n)})}}click(t){console.log("mouseclick")}contextmenu(t){t.preventDefault(),console.log("mousecontextmenu")}mouseenter(t){this.mouseInCanvas=!0}mouseleave(t){this.mouseInCanvas=!1}getStep(t){const{lastPressedKey:s}=this;return s.dblclick?4:s.key===t&&Date.now()-s.keyupTime<300?(s.dblclick=!0,4):1}keydown(t){const{mouseInCanvas:s,offset:i,delta:n,lockDragAndResize:a}=this;if(s&&!a){const r=t.key,o=this.getStep(r);switch(r){case"ArrowUp":i.y-=o;break;case"ArrowDown":i.y+=o;break;case"ArrowLeft":i.x-=o;break;case"ArrowRight":i.x+=o;break;case"+":this.setScale("center",n);break;case"-":this.setScale("center",-n);break}["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","+","-"].includes(r)&&this.redrawOnce()}}keyup(t){const{mouseInCanvas:s,lastPressedKey:i}=this;if(s){const n=t.key;i.key=n,i.keyupTime=Date.now(),i.dblclick=!1}}wheel(t){t.preventDefault();const{delta:s,lockDragAndResize:i}=this;i||(this.setScale(t,t.deltaY<0?s:-s),this.redrawOnce())}mousedown(t){this.mouseIsDown=!0;const{clientX:s,clientY:i}=t;this.mouseLastPosition={x:s,y:i}}mouseup(t){this.mouseIsDown=!1}mousemove(t){const{mouseIsDown:s,offset:i,mouseLastPosition:n,lockDragAndResize:a}=this;if(s&&!a){const{clientX:r,clientY:o}=t;i.x+=r-n.x,i.y+=o-n.y,this.redrawOnce(),this.mouseLastPosition={x:r,y:o}}}touchend(t){this.oldClientX=this.oldClientY=[]}touchmove(t){const s=t.touches;t.preventDefault();const{oldClientX:i,oldClientY:n,offset:a,delta:r}=this;if(s.length===1){const{clientX:o,clientY:h}=s[0];i.length&&(a.x+=o-i[0],a.y+=h-n[0],this.redrawOnce()),this.oldClientX=[o],this.oldClientY=[h]}else if(s.length===2){const{clientX:o,clientY:h}=s[0],{clientX:m,clientY:c}=s[1];if(i.length==2){const u=D(i[0],n[0],i[1],n[1]),f=D(o,h,m,c),{x:v,y:d}=F(o,h,m,c);this.setScale({clientX:v,clientY:d},f>u?r:-r),this.redrawOnce()}this.oldClientX=[o,m],this.oldClientY=[h,c]}}destroy(){var t;super.destroy(),(t=this.unBind)==null||t.call(this)}}class $ extends j{getDefaultOverlayGroup(){var a,r,o,h;const e=this.layerGroups.get("默认图层群组");if(!e)return;const t=(a=e.getLayer("点位图层"))==null?void 0:a.getGroup("点位覆盖物群组"),s=(r=e.getLayer("线段图层"))==null?void 0:r.getGroup("线段覆盖物群组"),i=(o=e.getLayer("多边形图层"))==null?void 0:o.getGroup("多边形覆盖物群组"),n=(h=e.getLayer("自定义绘制图层"))==null?void 0:h.getGroup("自定义绘制覆盖物群组");return{overlays_point:t,overlays_line:s,overlays_polygon:i,overlays_custom:n}}reset(){if(this.lockDragAndResize)return;this.isAuto=!0;const e=300,t={offset:{...this.offset},scale:this.scale-1};G(s=>{!this.isAuto||!this.canvas||this.lockDragAndResize||(s===1?(this.offset={x:0,y:0},this.scale=1,this.updateSize(),this.isAuto=!1):s>0&&(s=1-s,this.offset={x:t.offset.x*s,y:t.offset.y*s},this.scale=1+t.scale*s,this.updateSize()),this.redrawOnce(!0))},e)}zoom(e){const{canvas:t,rect:s}=this;if(!t||!s)return console.error("canvas is not HTMLCanvasElement");this.setScale("center",e),this.redrawOnce()}zoomIn(){this.zoom(this.delta)}zoomOut(){this.zoom(-this.delta)}setStyle(e){super.setStyle(e),this.redrawOnce()}setTheme(e){super.setTheme(e),this.redrawOnce()}setAxis(e){super.setAxis(e),this.redrawOnce()}setDefaultCenter(e){super.setDefaultCenter(e),this.redrawOnce()}toggleAxis(e){const t=(()=>{if(typeof e=="object"){const{all:s=!0,grid:i={main:!0,secondary:!0},axis:n=!0,axisText:a=!0}=e;return Object.assign({main:!0,secondary:!0},i),{all:s,grid:i,axis:n,axisText:a}}return typeof e=="boolean"?{all:!0,grid:{main:e,secondary:e},axis:e,axisText:e}:!this.drawAxis.show.all})();typeof t=="boolean"?this.drawAxis.show.all=t:this.drawAxis.show=t,this.redrawOnce()}togglePoint(e){const{overlays_point:t}=this.getDefaultOverlayGroup()||{};return t?(t.show.setShow(e??!t.show),this.redrawOnce(),t.show):!1}toggleLine(e){const{overlays_line:t}=this.getDefaultOverlayGroup()||{};return t?(t.show.setShow(e??!t.show),this.redrawOnce(),t.show):!1}togglePolygon(e){const{overlays_polygon:t}=this.getDefaultOverlayGroup()||{};return t?(t.show.setShow(e??!t.show),this.redrawOnce(),t.show):!1}toggleLock(e){return this.lockDragAndResize=e??!this.lockDragAndResize,this.lockDragAndResize}}class C extends ${constructor(e,t){if(super(e),this.drawAxis=new B(this),t){const{theme:s,axisConfig:i,axisShow:n,defaultCenter:a}=t;s&&this.setTheme(s),i&&this.setAxis(i),n&&this.toggleAxis(n),a&&this.setDefaultCenter(a)}this.initLayerGroups(),this.updateCenter()}initLayerGroups(){const e=new R("多边形图层");e.addGroup(new P("多边形覆盖物群组")),e.setzIndex(1);const t=new R("线段图层");t.addGroup(new P("线段覆盖物群组")),t.setzIndex(2);const s=new R("点位图层");s.addGroup(new P("点位覆盖物群组")),s.setzIndex(3);const i=new R("自定义绘制图层");i.addGroup(new P("自定义绘制覆盖物群组")),i.setzIndex(4);const n=new S("默认图层群组");n.addLayer([s,t,e,i]),this.setLayerGroups(n)}gteLayerGroups(e){return this.layerGroups.get(e)}setLayerGroups(e){e instanceof S&&(this.layerGroups.set(e.name,e),e.setNotifyReload(()=>this.redrawOnce()),e.setMainCanvas(this))}removeLayerGroups(e){e instanceof S&&(this.layerGroups.delete(e.name),e.setNotifyReload(),e.setMainCanvas(),this.redrawOnce())}addLayer(e){const t=this.layerGroups.get("默认图层群组");t&&t.addLayer([e].flat())}removeLayer(e){const t=this.layerGroups.get("默认图层群组");t&&t.removeLayer([e].flat())}addOverlay(e){const{overlays_point:t,overlays_line:s,overlays_polygon:i,overlays_custom:n}=this.getDefaultOverlayGroup()||{};[e].flat().forEach(a=>{a instanceof M?t==null||t.addOverlays(a):a instanceof A?s==null||s.addOverlays(a):a instanceof O?i==null||i.addOverlays(a):a instanceof k&&(n==null||n.addOverlays(a))})}removeOverlay(e){const{overlays_point:t,overlays_line:s,overlays_polygon:i,overlays_custom:n}=this.getDefaultOverlayGroup()||{};[e].flat().forEach(a=>{a instanceof M?t==null||t.removeOverlays(a):a instanceof A?s==null||s.removeOverlays(a):a instanceof O?i==null||i.removeOverlays(a):a instanceof k&&(n==null||n.addOverlays(a))})}destroy(){super.destroy()}}l(C,"LayerGroup",S),l(C,"Layer",R),l(C,"OverlayGroup",P),l(C,"Point",M),l(C,"Line",A),l(C,"Polygon",O),l(C,"Custom",k);function W(p,e){if(typeof p!="function")throw new Error("The first argument must be a function.");if(!Array.isArray(e))throw new Error("The second argument must be an array.");let t=[],s=100,i=0;const n=(a,r)=>{for(const[o,h]of r)if(a>=o)return h;return"black"};return function(...a){const r=performance.now(),o=p(...a),h=performance.now()-r;t.push(h),t.length>s&&t.shift(),i=t.reduce((u,f)=>u+f,0)/t.length||0;const m=n(h,e),c=n(i,e);return console.log(`%c单次耗时：${h.toFixed(2)}ms
%c平均耗时（${t.length}次）：${i.toFixed(2)}ms`,`color: ${m}; padding: 2px 0;`,`color: ${c}; padding: 2px 0;`),o}}function D(p,e,t,s){return Math.sqrt(Math.pow(t-p,2)+Math.pow(s-e,2))}function F(p,e,t,s){const i=(p+t)/2,n=(e+s)/2;return{x:i,y:n}}export{C as _};
