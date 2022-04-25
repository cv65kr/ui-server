import{S as q,i as O,s as A,e as h,c as d,a as g,d as m,g as b,o as $,p as F,q as w,n as H,w as C,x as D,y as L,E as T,B as x,ai as N,l as P,aj as M,k as R,t as E,m as B,h as y,b as I,M as k,j as W}from"../../../../../../chunks/index-1f23a7bf.js";import{w as z}from"../../../../../../chunks/index.es-5d8285d6.js";import{g as V}from"../../../../../../chunks/query-service-c1b652e8.js";import{C as G}from"../../../../../../chunks/code-block-04156ba2.js";import{B as J}from"../../../../../../chunks/button-58010e31.js";import{E as j}from"../../../../../../chunks/empty-state-24481113.js";import"../../../../../../chunks/route-for-api-ecaff069.js";import"../../../../../../chunks/index-0cc6fed7.js";import"../../../../../../chunks/notifications-5ba321f4.js";import"../../../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../../../chunks/route-for-6c8ee7a8.js";import"../../../../../../chunks/atob-5f9d7101.js";function K(c){let e,n;return e=new j({props:{title:"No Stack Traces Found"}}),{c(){C(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,o){L(e,t,o),n=!0},p:T,i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function Q(c){let e,n,t,o={ctx:c,current:null,token:null,hasCatch:!0,pending:Z,then:X,catch:U,value:6,error:7,blocks:[,,,]};return N(n=c[2],o),{c(){e=P(),o.block.c()},l(r){e=P(),o.block.l(r)},m(r,s){b(r,e,s),o.block.m(r,o.anchor=s),o.mount=()=>e.parentNode,o.anchor=e,t=!0},p(r,s){c=r,o.ctx=c,s&4&&n!==(n=c[2])&&N(n,o)||M(o,c,s)},i(r){t||(w(o.block),t=!0)},o(r){for(let s=0;s<3;s+=1){const l=o.blocks[s];$(l)}t=!1},d(r){r&&m(e),o.block.d(r),o.token=null,o=null}}}function U(c){let e,n;return e=new j({props:{title:"An Error Occured",content:"Please make sure you have at least one worker running."}}),{c(){C(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,o){L(e,t,o),n=!0},p:T,i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function X(c){let e,n,t,o,r,s=c[1].toLocaleTimeString()+"",l,u,a,i,_;return n=new J({props:{icon:z,loading:te,$$slots:{default:[Y]},$$scope:{ctx:c}}}),n.$on("click",c[3]),i=new G({props:{content:c[6],language:"text"}}),{c(){e=h("div"),C(n.$$.fragment),t=R(),o=h("p"),r=E("Stack Trace at "),l=E(s),u=R(),a=h("div"),C(i.$$.fragment),this.h()},l(f){e=d(f,"DIV",{class:!0});var p=g(e);D(n.$$.fragment,p),t=B(p),o=d(p,"P",{});var v=g(o);r=y(v,"Stack Trace at "),l=y(v,s),v.forEach(m),p.forEach(m),u=B(f),a=d(f,"DIV",{class:!0});var S=g(a);D(i.$$.fragment,S),S.forEach(m),this.h()},h(){I(e,"class","flex items-center gap-4"),I(a,"class","flex items-start h-full")},m(f,p){b(f,e,p),L(n,e,null),k(e,t),k(e,o),k(o,r),k(o,l),b(f,u,p),b(f,a,p),L(i,a,null),_=!0},p(f,p){const v={};p&256&&(v.$$scope={dirty:p,ctx:f}),n.$set(v),(!_||p&2)&&s!==(s=f[1].toLocaleTimeString()+"")&&W(l,s);const S={};p&4&&(S.content=f[6]),i.$set(S)},i(f){_||(w(n.$$.fragment,f),w(i.$$.fragment,f),_=!0)},o(f){$(n.$$.fragment,f),$(i.$$.fragment,f),_=!1},d(f){f&&m(e),x(n),f&&m(u),f&&m(a),x(i)}}}function Y(c){let e;return{c(){e=E("Refresh")},l(n){e=y(n,"Refresh")},m(n,t){b(n,e,t)},d(n){n&&m(e)}}}function Z(c){let e,n,t,o,r,s;return{c(){e=h("div"),n=h("h2"),t=E("Loading\u2026"),o=R(),r=h("p"),s=E("(This will fail if you have no workers running.)"),this.h()},l(l){e=d(l,"DIV",{class:!0});var u=g(e);n=d(u,"H2",{class:!0});var a=g(n);t=y(a,"Loading\u2026"),a.forEach(m),o=B(u),r=d(u,"P",{});var i=g(r);s=y(i,"(This will fail if you have no workers running.)"),i.forEach(m),u.forEach(m),this.h()},h(){I(n,"class","font-bold text-2xl mb-4"),I(e,"class","text-center")},m(l,u){b(l,e,u),k(e,n),k(n,t),k(e,o),k(e,r),k(r,s)},p:T,i:T,o:T,d(l){l&&m(e)}}}function ee(c){let e,n,t,o,r;const s=[Q,K],l=[];function u(a,i){return i&1&&(n=null),n==null&&(n=String(a[0].status)==="Running"),n?0:1}return t=u(c,-1),o=l[t]=s[t](c),{c(){e=h("section"),o.c()},l(a){e=d(a,"SECTION",{});var i=g(e);o.l(i),i.forEach(m)},m(a,i){b(a,e,i),l[t].m(e,null),r=!0},p(a,[i]){let _=t;t=u(a,i),t===_?l[t].p(a,i):(H(),$(l[_],1,1,()=>{l[_]=null}),F(),o=l[t],o?o.p(a,i):(o=l[t]=s[t](a),o.c()),w(o,1),o.m(e,null))},i(a){r||(w(o),r=!0)},o(a){$(o),r=!1},d(a){a&&m(e),l[t].d()}}}const ke=async function({params:c,stuff:e}){const{namespace:n}=c,{workflow:t}=e;return{props:{workflow:t,namespace:n}}};let te=!1;function ne(c,e,n){let{namespace:t}=e,{workflow:o}=e,r=new Date,l=(()=>V({workflow:o,namespace:t}))();const u=()=>{n(2,l=V({workflow:o,namespace:t})),l.then(()=>{n(1,r=new Date)})};return c.$$set=a=>{"namespace"in a&&n(4,t=a.namespace),"workflow"in a&&n(0,o=a.workflow)},[o,r,l,u,t]}class he extends q{constructor(e){super(),O(this,e,ne,ee,A,{namespace:4,workflow:0})}}export{he as default,ke as load};