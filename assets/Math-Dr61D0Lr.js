function r(i,t=500){let e;function a(n){e||(e=n);let o=Math.min((n-e)/t,1);i(o),n-e<t&&requestAnimationFrame(a)}requestAnimationFrame(a)}export{r as _};
