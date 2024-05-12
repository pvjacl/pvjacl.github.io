import{j as s}from"./jsx-runtime.Biu9vCfE.js";import{R as U,r as i}from"./index.CSLRt44l.js";/* empty css                              */var V=Object.defineProperty,Z=Object.defineProperties,Y=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,S=(e,n,r)=>n in e?V(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,E=(e,n)=>{for(var r in n||(n={}))G.call(n,r)&&S(e,r,n[r]);if(O)for(var r of O(n))J.call(n,r)&&S(e,r,n[r]);return e},X=(e,n)=>Z(e,Y(n)),I=U.createContext({}),$=I.Provider,L=()=>i.useContext(I);function ee(e,n,r=!0){const t=i.useRef();i.useEffect(()=>{t.current=e},[e]),i.useEffect(()=>{if(r&&n!==null){const o=setInterval(()=>{t.current&&t.current()},n);return()=>clearInterval(o)}},[n,r])}function ne({totalPages:e,wrapMode:n}){const[r,t]=i.useState(0);return{currentPage:r,goToPage:u=>{u<0||u>=e||t(u)},goForward:()=>{t(n==="wrap"?u=>(u+1)%e:u=>Math.min(u+1,e-1))},goBack:()=>{t(n==="wrap"?u=>(u-1+e)%e:u=>Math.max(u-1,0))}}}function te(e,n){const r=i.useRef();return i.useCallback((...t)=>{r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{e(...t)},n)},[e,n])}function N(e,n){return new Array(e).fill(0).map((r,t)=>t*n)}function re(e){let n=0;return e.map(r=>n+=r)}function oe(e,n){return e.reduce((r,t)=>Math.abs(t-n)<Math.abs(r-n)?t:r)}function y(...e){return e.filter(Boolean).join(" ")}var B=()=>typeof window<"u";function ae(e){const[n,r]=i.useState();return i.useEffect(()=>{if(!e.current)return;const t=e.current,o=new ResizeObserver(()=>r(t.getBoundingClientRect()));return o.observe(t),()=>{o.unobserve(t)}},[e]),n}function se({element:e,scrollDistance:n}){const[r,t]=i.useState(0),[o,a]=i.useState(N(r,0)),c=ae(e);return i.useEffect(()=>{var u;const d=e.current;if(!(d&&c))return;const p=d.scrollWidth,v=d.offsetWidth,b=p-v;if(v!==0)switch(n){case"screen":{const l=Math.round(p/v);t(l),a(N(l,v));break}case"slide":{const l=((u=d.querySelector("#nuka-wrapper"))==null?void 0:u.children)||[],j=Array.from(l).map(m=>m.offsetWidth),h=re([0,...j.slice(0,-1)]),P=h.findIndex(m=>m>=b)+1;t(P),a(h);break}default:if(typeof n=="number"&&n>0){const l=Math.ceil(b/n)+1;t(l),a(N(l,n))}}},[e,n,c]),{totalPages:r,scrollOffset:o}}function ie({element:e,enabled:n}){const[r,t]=i.useState(!1),o=e?.current;return i.useEffect(()=>{if(o&&o.addEventListener&&n){const a=()=>t(!0),c=()=>t(!1);return o.addEventListener("mouseover",a),o.addEventListener("mouseout",c),()=>{o.removeEventListener("mouseover",a),o.removeEventListener("mouseout",c)}}},[o,n]),r}function ue({element:e,enabled:n,goForward:r,goBack:t}){const o=e?.current;i.useEffect(()=>{if(o&&n){const a=c=>{c.key==="ArrowLeft"?t():c.key==="ArrowRight"&&r()};return o.addEventListener("keydown",a),()=>o.removeEventListener("keydown",a)}},[n,t,r,o])}var T="(prefers-reduced-motion: no-preference)",ce=()=>B()?!window.matchMedia(T).matches:!0;function le({enabled:e}){const[n,r]=i.useState(ce);return i.useEffect(()=>{if(!(B()&&e))return;const t=window.matchMedia(T),o=a=>{r(!a.matches)};return t.addEventListener("change",o),()=>{t.removeEventListener("change",o)}},[e]),n}function de(){const{currentPage:e,totalPages:n,wrapMode:r,goBack:t,goForward:o}=L(),a=r!=="nowrap",c=a||e>0,u=a||e<n-1,d=y("nuka-nav-button","nuka-nav-button-prev",c&&"nuka-nav-button-enabled"),p=y("nuka-nav-button","nuka-nav-button-next",u&&"nuka-nav-button-enabled");return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:d,onClick:t,children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentcolor",children:s.jsx("path",{fillRule:"evenodd",d:"M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})})}),s.jsx("div",{className:p,onClick:o,children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentcolor",children:s.jsx("path",{fillRule:"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})}var fe=()=>{const{totalPages:e,currentPage:n,goToPage:r}=L(),t=o=>y("nuka-page-indicator",n===o?"nuka-page-indicator-active":"");return s.jsx("div",{className:"nuka-page-container","data-testid":"pageIndicatorContainer",children:[...Array(e)].map((o,a)=>s.jsx("button",{onClick:()=>r(a),className:t(a),children:s.jsx("span",{className:"nuka-hidden",children:a+1})},a))})};function pe(e,{insertAt:n}={}){if(typeof document>"u")return;const r=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",n==="top"&&r.firstChild?r.insertBefore(t,r.firstChild):r.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}pe(`.nuka-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.nuka-container {
  position: relative;
}
.nuka-slide-container {
  position: relative;
}
.nuka-overflow {
  overflow: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.nuka-overflow::-webkit-scrollbar {
  display: none;
}
.nuka-wrapper {
  display: flex;
}
.nuka-nav-button {
  position: absolute;
  top: calc(50% - 2rem);
  margin: 1rem;
  display: none;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  background-color: rgba(146, 148, 151, 0.5);
  color: white;
  border-radius: 9999px;
  font-size: 1rem;
  user-select: none;
}
.nuka-nav-button.nuka-nav-button-prev {
  left: 0;
  margin-right: 1rem;
}
.nuka-nav-button.nuka-nav-button-next {
  right: 0;
  margin-left: 1rem;
}
.nuka-nav-button:hover {
  background-color: rgba(146, 148, 151, 0.65);
}
.nuka-nav-button-enabled {
  display: block;
}
.nuka-container-auto-hide .nuka-nav-button {
  display: none;
}
.nuka-container-auto-hide:hover .nuka-nav-button-enabled {
  display: block;
}
.nuka-page-container {
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
}
.nuka-page-indicator {
  width: 0.75rem;
  height: 0.75rem;
  cursor: pointer;
  border-radius: 9999px;
  border-style: none;
  background-color: rgba(146, 148, 151, 0.65);
}
.nuka-page-indicator.nuka-page-indicator-active,
.nuka-page-indicator.nuka-page-indicator-active:hover {
  background-color: rgb(229 231 235 / 1);
}
.nuka-page-indicator:hover {
  background-color: rgb(229 231 235 / 1);
}
`);var ve={arrows:s.jsx(de,{}),autoplay:!1,autoplayInterval:3e3,dots:s.jsx(fe,{}),id:"nuka-carousel",keyboard:!0,scrollDistance:"screen",showArrows:!1,showDots:!1,swiping:!0,wrapMode:"nowrap"},A=i.forwardRef((e,n)=>{const r=E(E({},ve),e),{afterSlide:t,arrows:o,autoplay:a,autoplayInterval:c,beforeSlide:u,children:d,className:p,dots:v,id:b,keyboard:l,scrollDistance:j,showArrows:h,showDots:P,swiping:m,title:R,wrapMode:W}=r,_=i.useRef(null),f=i.useRef(null),{totalPages:M,scrollOffset:g}=se({element:f,scrollDistance:j}),{currentPage:C,goBack:k,goForward:w,goToPage:x}=ne({totalPages:M,wrapMode:W}),D=te(()=>{if(!f.current)return;const K=f.current.scrollLeft,Q=g.indexOf(oe(g,K));x(Q)},100);ue({element:_,enabled:l,goForward:w,goBack:k}),i.useImperativeHandle(n,()=>({goForward:w,goBack:k,goToPage:x}),[w,k,x]);const F=ie({element:f,enabled:a}),H=le({enabled:a});ee(w,c,a&&!(F||H)),i.useEffect(()=>{f.current&&(u&&u(),f.current.scrollLeft=g[C],t&&setTimeout(()=>t(),0))},[C,g,u,t]);const z=y("nuka-container",h==="hover"&&"nuka-container-auto-hide",p),q=X(E({},r),{totalPages:M,currentPage:C,scrollOffset:g,goBack:k,goForward:w,goToPage:x});return s.jsxs($,{value:q,children:[s.jsxs("div",{className:z,"aria-labelledby":"nuka-carousel-heading",tabIndex:l?0:void 0,ref:_,id:b,children:[R&&s.jsx("h3",{id:"nuka-carousel-heading",className:"nuka-hidden",children:R}),s.jsxs("div",{className:"nuka-slide-container",children:[s.jsx("div",{className:"nuka-overflow",ref:f,onTouchMove:D,id:"nuka-overflow","data-testid":"nuka-overflow",style:{touchAction:m?"pan-x":"none"},children:s.jsx("div",{className:"nuka-wrapper",id:"nuka-wrapper","data-testid":"nuka-wrapper",children:d})}),h&&o]})]}),P&&v]})});A.displayName="Carousel";const be=({items:e})=>{const n=r=>r.map((t,o)=>s.jsxs("div",{className:"slide",children:[s.jsx("img",{src:t.imageUrl,alt:t.caption,width:600}),s.jsx("p",{children:t.caption})]},o));return s.jsx(A,{showDots:!0,showArrows:!0,wrapMode:"wrap",children:n(e)})};export{be as default};
