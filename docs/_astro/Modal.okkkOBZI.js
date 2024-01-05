import{r as f}from"./index.LFf77hJu.js";/* empty css                       */var i={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=f,y=Symbol.for("react.element"),x=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,R=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function p(r,e,n){var o,t={},s=null,l=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(l=e.ref);for(o in e)E.call(e,o)&&!v.hasOwnProperty(o)&&(t[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps,e)t[o]===void 0&&(t[o]=e[o]);return{$$typeof:y,type:r,key:s,ref:l,props:t,_owner:R.current}}c.Fragment=x;c.jsx=p;c.jsxs=p;i.exports=c;var u=i.exports;const j=({isOpen:r,hasCloseBtn:e=!0,onClose:n,children:o})=>{const[t,s]=f.useState(r),l=f.useRef(null),d=()=>{n&&n(),s(!1)},m=a=>{a.key==="Escape"&&d()};return f.useEffect(()=>{s(r)},[r]),f.useEffect(()=>{const a=l.current;a&&(t?a.showModal():a.close())},[t]),u.jsxs("dialog",{ref:l,onKeyDown:m,className:"modal",children:[e&&u.jsx("button",{className:"modal-close-btn",onClick:d,children:"Close"}),o]})};export{j as default};
