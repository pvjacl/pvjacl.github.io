import{j as t}from"./jsx-runtime.TfmNsVeH.js";/* empty css                       */import"./index.C9rmetsa.js";const u=({events:n})=>{const s=new Date().getTime(),c=e=>new Date(e.landingEventPullDate).getTime()>=s,d=e=>new Date(e.landingEventPullDate).getTime()<s,a=n.filter(e=>c(e)),h=n.filter(e=>d(e)),i=(e,l)=>e.length<1?l?t.jsx("h4",{children:"No Announced Upcoming Events"}):void 0:t.jsxs(t.Fragment,{children:[t.jsx("h4",{children:l?"Upcoming Events":"Past Events"}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Event"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Date"})]})}),t.jsx("tbody",{children:e.map(r=>t.jsxs("tr",{children:[t.jsx("td",{children:r.photo?t.jsx("a",{href:r.photo.src,children:t.jsx("img",{src:r.photo.src,alt:"featured image"})}):" "}),t.jsxs("td",{children:[t.jsx("strong",{children:r.title})," – ",r.description]}),t.jsx("td",{children:r.dateStr})]}))})]})]});return t.jsxs(t.Fragment,{children:[i(a,!0),i(h,!1)]})};export{u as default};
