import{a5 as d}from"./index-8ca2078c.js";function g(l,m){for(var u=0;u<m.length;u++){const r=m[u];if(typeof r!="string"&&!Array.isArray(r)){for(const c in r)if(c!=="default"&&!(c in l)){const s=Object.getOwnPropertyDescriptor(r,c);s&&Object.defineProperty(l,c,s.get?s:{enumerable:!0,get:()=>r[c]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var v={},O={get exports(){return v},set exports(l){v=l}};(function(l,m){(function(u,r){r()})(d,function(){function u(e,t){return typeof t>"u"?t={autoBom:!1}:typeof t!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function r(e,t,i){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){p(n.response,t,i)},n.onerror=function(){console.error("could not download file")},n.send()}function c(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return 200<=t.status&&299>=t.status}function s(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof d=="object"&&d.global===d?d:void 0,b=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),p=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!b?function(e,t,i){var n=a.URL||a.webkitURL,o=document.createElement("a");t=t||e.name||"download",o.download=t,o.rel="noopener",typeof e=="string"?(o.href=e,o.origin===location.origin?s(o):c(o.href)?r(e,t,i):s(o,o.target="_blank")):(o.href=n.createObjectURL(e),setTimeout(function(){n.revokeObjectURL(o.href)},4e4),setTimeout(function(){s(o)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,i){if(t=t||e.name||"download",typeof e!="string")navigator.msSaveOrOpenBlob(u(e,i),t);else if(c(e))r(e,t,i);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout(function(){s(n)})}}:function(e,t,i,n){if(n=n||open("","_blank"),n&&(n.document.title=n.document.body.innerText="downloading..."),typeof e=="string")return r(e,t,i);var o=e.type==="application/octet-stream",E=/constructor/i.test(a.HTMLElement)||a.safari,h=/CriOS\/[\d]+/.test(navigator.userAgent);if((h||o&&E||b)&&typeof FileReader<"u"){var w=new FileReader;w.onloadend=function(){var f=w.result;f=h?f:f.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=f:location=f,n=null},w.readAsDataURL(e)}else{var j=a.URL||a.webkitURL,y=j.createObjectURL(e);n?n.location=y:location.href=y,n=null,setTimeout(function(){j.revokeObjectURL(y)},4e4)}});a.saveAs=p.saveAs=p,l.exports=p})})(O);const A=v,R=g({__proto__:null,default:A},[v]);export{R as F};
