import{j as t}from"./jsx-runtime.TfmNsVeH.js";/* empty css                       */import"./index.C9rmetsa.js";const m=({events:s})=>{const n=new Date().getTime(),c=e=>new Date(e.landingEventPullDate).getTime()>=n,d=e=>new Date(e.landingEventPullDate).getTime()<n,a=s.filter(e=>c(e)),h=s.filter(e=>d(e)),i=(e,l)=>e.length<1?t.jsxs("h4",{children:["No ",l," Available"]}):t.jsxs(t.Fragment,{children:[t.jsx("h4",{children:l}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Event"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Date"})]})}),t.jsx("tbody",{children:e.map(r=>t.jsxs("tr",{children:[t.jsx("td",{children:r.photo?t.jsx("a",{href:r.photo.src,children:t.jsx("img",{src:r.photo.src,alt:"featured image"})}):" "}),t.jsxs("td",{children:[t.jsx("strong",{children:r.title})," – ",r.description]}),t.jsx("td",{children:r.dateStr})]}))})]})]});return t.jsxs(t.Fragment,{children:[i(a,"Upcoming Events"),i(h,"Past Events")]})};export{m as default};
