import{p as r}from"./stores-a6bbeb31.js";import{ab as c,ac as m}from"./vendor-cba54241.js";const o={segmentValueCharset:".a-zA-Z0-9_-"},p=new c("/namespaces/:namespace/*",o),t=e=>e(),f=m(r,e=>{const a=p.match(e.url.pathname),s=e.stuff.settings.defaultNamespace,n=t(()=>localStorage.getItem("currentNamespace")||s)||"default";return a?(t(()=>localStorage.setItem("currentNamespace",a.namespace)),a.namespace):n});export{f as n};