import{d as i,r as T,w}from"./index-c9e619a8.js";import{p as l}from"./stores-810822a9.js";import{w as d}from"./with-loading-22689bcc.js";import{f as y}from"./workflow-service-127b45bd.js";import{r as m,a as p}from"./route-for-api-1c9b93c7.js";import{k as Q}from"./route-for-93451b94.js";async function A(e,t=fetch){const a=await m(p("task-queue",e),{request:t,params:{taskQueueType:"1"}}),r=await m(p("task-queue",e),{request:t,params:{taskQueueType:"2"}});r.pollers.forEach(s=>{s.taskQueueTypes=["ACTIVITY"]}),a.pollers.forEach(s=>{s.taskQueueTypes=["WORKFLOW"]});const u=s=>(o,c)=>{const n=o[c.identity]||{lastAccessTime:void 0,taskQueueTypes:[]};return o[c.identity]={lastAccessTime:!n.lastAccessTime||n.lastAccessTime<c.lastAccessTime?c.lastAccessTime:n.lastAccessTime,taskQueueTypes:n.taskQueueTypes.concat([s])},o};return r.pollers.filter(s=>a.pollers.some(o=>{if(s.identity===o.identity)return s.taskQueueTypes=[...o.taskQueueTypes,...s.taskQueueTypes],s})),r.pollers.reduce(u("ACTIVITY"),a.pollers.reduce(u("WORKFLOW"),{})),{pollers:r.pollers,taskQueueStatus:r.taskQueueStatus}}const I=i([l],([e])=>e.params.namespace),R=i([l],([e])=>e.params.workflow),W=i([l],([e])=>e.params.run),g=i([I,R,W],([e,t,a])=>({namespace:e,workflowId:Q(t!=null?t:""),runId:a})),h={workflow:null,workers:null},F=e=>g.subscribe(({namespace:t,workflowId:a,runId:r})=>{t&&a&&r?d(f,k,async()=>{const u=await y({namespace:t,workflowId:a,runId:r}),{taskQueue:s}=u,o=await A({queue:s,namespace:t});e({workflow:u,workers:o})}):(f.set(!0),k.set(!1))}),k=w(!0),f=w(!0),S=T(h,F);export{f as l,S as w};