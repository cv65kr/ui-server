var We=Object.defineProperty;var se=Object.getOwnPropertySymbols;var Ve=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var Ne=(r,e,t)=>e in r?We(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Oe=(r,e)=>{for(var t in e||(e={}))Ve.call(e,t)&&Ne(r,t,e[t]);if(se)for(var t of se(e))Ce.call(e,t)&&Ne(r,t,e[t]);return r};var Te=(r,e)=>{var t={};for(var s in r)Ve.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&se)for(var s of se(r))e.indexOf(s)<0&&Ce.call(r,s)&&(t[s]=r[s]);return t};import{S as X,i as Y,s as Z,e as p,c as v,a as $,d,b,U as Q,g as O,W as Qe,n as Ue,o as D,p as ze,q as S,I as ae,ag as Xe,K as le,M as oe,N as ie,O as fe,P as Ye,w as B,k as I,x as q,m as A,y as M,L as m,B as G,aJ as Ze,T as ne,r as xe,t as V,h as C,f as Fe,J as et,l as Le,v as tt,aD as st,aK as rt,aL as nt,aM as at}from"../../../../../../../chunks/vendor-cba54241.js";import{h as lt,c as ge,r as ot,a as it}from"../../../../../../../chunks/route-for-api-f58641b9.js";import{t as ft}from"../../../../../../../chunks/index-1b7e586f.js";import{c as ct,b as _e,g as je}from"../../../../../../../chunks/route-for-bfb45385.js";import{p as ce}from"../../../../../../../chunks/stores-a6bbeb31.js";import{a as Je}from"../../../../../../../chunks/append-query-parameters-b8619cc0.js";import{g as ut}from"../../../../../../../chunks/get-context-c9307e22.js";import{C as Re}from"../../../../../../../chunks/code-block-fa59ce22.js";import{f as mt}from"../../../../../../../chunks/format-date-b92a742e.js";import"../../../../../../../chunks/navigation-093db9e2.js";import"../../../../../../../chunks/singletons-a6a7384f.js";import"../../../../../../../chunks/notifications-dc83cd3a.js";import"../../../../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../../../../chunks/data-converter-config-343799f1.js";import"../../../../../../../chunks/atob-5f9d7101.js";const Me=(r={},e={})=>{const t=Oe({},r);for(const s of Object.keys(e)){const a=t[s];Array.isArray(a)?t[s]=t[s].concat(e[s]):typeof a=="object"&&!Array.isArray(a)?t[s]=Me(t[s],e[s]):t[s]=e[s]}return t},Ge=async(r,{onStart:e,onUpdate:t,onComplete:s,onError:a=lt,token:l,previousProps:i}={})=>{!i&&ge(e)&&e();try{const n=await r(l),{nextPageToken:u}=n,g=Te(n,["nextPageToken"]),c=Me(i,g);return ge(t)&&t(c,g),u?Ge(r,{onStart:e,onUpdate:t,onComplete:s,token:u,previousProps:c}):(ge(s)&&s(c),c)}catch(f){a(f)}},Ke=async({namespace:r,executionId:e,runId:t,onStart:s,onUpdate:a,onComplete:l},i=fetch)=>(await Ge(async f=>ot(it("events",{namespace:r,executionId:e,runId:t}),{token:f,request:i}),{onStart:s,onUpdate:a,onComplete:l})).history.events,dt=async(r,e=fetch)=>Ke(r,e).then(ft),ht=r=>{var l,i,n,f;let e,t;const s=r==null?void 0:r.find(u=>!!u.workflowExecutionStartedEventAttributes),a=r==null?void 0:r.find(u=>!!u.workflowExecutionCompletedEventAttributes);return s&&(e=JSON.stringify((i=(l=s==null?void 0:s.workflowExecutionStartedEventAttributes)==null?void 0:l.input)==null?void 0:i.payloads)),a&&(t=JSON.stringify((f=(n=a==null?void 0:a.workflowExecutionCompletedEventAttributes)==null?void 0:n.result)==null?void 0:f.payloads)),{input:e,result:t}};function gt(r){let e;const t=r[7].default,s=le(t,r,r[6],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,l){s&&s.m(a,l),e=!0},p(a,l){s&&s.p&&(!e||l&64)&&oe(s,t,a,a[6],e?fe(t,a[6],l,null):ie(a[6]),null)},i(a){e||(S(s,a),e=!0)},o(a){D(s,a),e=!1},d(a){s&&s.d(a)}}}function _t(r){let e,t,s,a;t=new Ye({props:{icon:r[0],scale:r[2]}});const l=r[7].default,i=le(l,r,r[6],null);return{c(){e=p("div"),B(t.$$.fragment),s=I(),i&&i.c(),this.h()},l(n){e=v(n,"DIV",{class:!0});var f=$(e);q(t.$$.fragment,f),s=A(f),i&&i.l(f),f.forEach(d),this.h()},h(){b(e,"class","flex gap-2 items-center")},m(n,f){O(n,e,f),M(t,e,null),m(e,s),i&&i.m(e,null),a=!0},p(n,f){const u={};f&1&&(u.icon=n[0]),f&4&&(u.scale=n[2]),t.$set(u),i&&i.p&&(!a||f&64)&&oe(i,l,n,n[6],a?fe(l,n[6],f,null):ie(n[6]),null)},i(n){a||(S(t.$$.fragment,n),S(i,n),a=!0)},o(n){D(t.$$.fragment,n),D(i,n),a=!1},d(n){n&&d(e),G(t),i&&i.d(n)}}}function pt(r){let e,t,s,a,l,i,n;const f=[_t,gt],u=[];function g(c,o){return c[0]?0:1}return t=g(r),s=u[t]=f[t](r),{c(){e=p("a"),s.c(),this.h()},l(c){e=v(c,"A",{class:!0,href:!0});var o=$(e);s.l(o),o.forEach(d),this.h()},h(){b(e,"class","border-2 py-2 px-4 hover:text-white hover:bg-gray-600 flex items-center justify-center svelte-1orl6nd"),b(e,"href",a=Je(r[3],r[5].url.searchParams)),Q(e,"rounded-lg",!r[1]),Q(e,"active",r[5].url.pathname.includes(r[4])),Q(e,"group",r[1])},m(c,o){O(c,e,o),u[t].m(e,null),l=!0,i||(n=Qe(e,"click",r[8]),i=!0)},p(c,[o]){let w=t;t=g(c),t===w?u[t].p(c,o):(Ue(),D(u[w],1,1,()=>{u[w]=null}),ze(),s=u[t],s?s.p(c,o):(s=u[t]=f[t](c),s.c()),S(s,1),s.m(e,null)),(!l||o&40&&a!==(a=Je(c[3],c[5].url.searchParams)))&&b(e,"href",a),o&2&&Q(e,"rounded-lg",!c[1]),o&48&&Q(e,"active",c[5].url.pathname.includes(c[4])),o&2&&Q(e,"group",c[1])},i(c){l||(S(s),l=!0)},o(c){D(s),l=!1},d(c){c&&d(e),u[t].d(),i=!1,n()}}}function vt(r,e,t){let s;ae(r,ce,o=>t(5,s=o));let{$$slots:a={},$$scope:l}=e,{icon:i}=e,{group:n=ut("group")}=e,{scale:f=1}=e,{href:u="#"}=e,{base:g=u}=e;function c(o){Xe.call(this,r,o)}return r.$$set=o=>{"icon"in o&&t(0,i=o.icon),"group"in o&&t(1,n=o.group),"scale"in o&&t(2,f=o.scale),"href"in o&&t(3,u=o.href),"base"in o&&t(4,g=o.base),"$$scope"in o&&t(6,l=o.$$scope)},[i,n,f,u,g,s,l,a,c]}class re extends X{constructor(e){super();Y(this,e,vt,pt,Z,{icon:0,group:1,scale:2,href:3,base:4})}}function $t(r){let e,t;return e=new re({props:{icon:Ze}}),e.$on("click",r[0]),{c(){B(e.$$.fragment)},l(s){q(e.$$.fragment,s)},m(s,a){M(e,s,a),t=!0},p:ne,i(s){t||(S(e.$$.fragment,s),t=!0)},o(s){D(e.$$.fragment,s),t=!1},d(s){G(e,s)}}}function bt(r,e,t){let s;ae(r,ce,f=>t(1,s=f));const{workflow:a,run:l,namespace:i}=s.params;return[async()=>{const f=await Ke({namespace:i,executionId:a,runId:l}),u=JSON.stringify(f,null,2);g(u,`${l}/events.json`,"text/plain");function g(c,o,w){const h=document.createElement("a"),y=new Blob([c],{type:w});h.href=URL.createObjectURL(y),h.download=o,h.click()}}]}class wt extends X{constructor(e){super();Y(this,e,bt,$t,Z,{})}}function Et(r){let e,t;const s=r[1].default,a=le(s,r,r[0],null);return{c(){e=p("div"),a&&a.c(),this.h()},l(l){e=v(l,"DIV",{class:!0});var i=$(e);a&&a.l(i),i.forEach(d),this.h()},h(){b(e,"class","flex")},m(l,i){O(l,e,i),a&&a.m(e,null),t=!0},p(l,[i]){a&&a.p&&(!t||i&1)&&oe(a,s,l,l[0],t?fe(s,l[0],i,null):ie(l[0]),null)},i(l){t||(S(a,l),t=!0)},o(l){D(a,l),t=!1},d(l){l&&d(e),a&&a.d(l)}}}function yt(r,e,t){let{$$slots:s={},$$scope:a}=e;return xe("group",!0),r.$$set=l=>{"$$scope"in l&&t(0,a=l.$$scope)},[a,s]}class kt extends X{constructor(e){super();Y(this,e,yt,Et,Z,{})}}function Be(r,e,t){const s=r.slice();return s[6]=e[t].id,s[7]=st(e[t],["id"]),s}function It(r){let e,t,s,a,l,i,n,f,u,g=r[0],c=[];for(let o=0;o<g.length;o+=1)c[o]=qe(Be(r,g,o));return{c(){e=p("section"),t=p("h3"),s=V("Pending Activities"),a=I(),l=p("table");for(let o=0;o<c.length;o+=1)c[o].c();i=I(),n=p("div"),f=p("a"),u=V("Show all"),this.h()},l(o){e=v(o,"SECTION",{class:!0});var w=$(e);t=v(w,"H3",{class:!0});var h=$(t);s=C(h,"Pending Activities"),h.forEach(d),a=A(w),l=v(w,"TABLE",{class:!0});var y=$(l);for(let N=0;N<c.length;N+=1)c[N].l(y);y.forEach(d),i=A(w),n=v(w,"DIV",{class:!0});var H=$(n);f=v(H,"A",{href:!0,class:!0});var k=$(f);u=C(k,"Show all"),k.forEach(d),H.forEach(d),w.forEach(d),this.h()},h(){b(t,"class","text-lg font-medium mb-4"),b(l,"class","w-full table-auto space-x-4"),b(f,"href",r[1]),b(f,"class","border-b-2 border-blue-600"),b(n,"class","text-right"),b(e,"class","border-2 border-gray-300 rounded-lg p-4")},m(o,w){O(o,e,w),m(e,t),m(t,s),m(e,a),m(e,l);for(let h=0;h<c.length;h+=1)c[h].m(l,null);m(e,i),m(e,n),m(n,f),m(f,u)},p(o,w){if(w&3){g=o[0];let h;for(h=0;h<g.length;h+=1){const y=Be(o,g,h);c[h]?c[h].p(y,w):(c[h]=qe(y),c[h].c(),c[h].m(l,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=g.length}},d(o){o&&d(e),et(c,o)}}}function qe(r){var ve;let e,t,s=r[7].activityId+"",a,l,i,n,f,u,g,c,o,w=((ve=r[7].activityType)==null?void 0:ve.name)+"",h,y,H,k,N,J,W,E,_,P=r[7].lastFailure+"",T,K,F,L,R,ue,me,U,pe=mt(r[7].lastHeartbeatTime)+"",de,he;return{c(){e=p("a"),t=p("div"),a=V(s),l=I(),i=p("div"),n=p("div"),f=p("h4"),u=V("Activity Name"),g=I(),c=p("p"),o=p("span"),h=V(w),y=I(),H=p("div"),k=p("div"),N=p("h3"),J=V("Last Failure"),W=I(),E=p("pre"),_=p("code"),T=V(P),K=I(),F=p("div"),L=p("div"),R=p("h4"),ue=V("Last Heartbeat Time"),me=I(),U=p("p"),de=V(pe),he=I(),this.h()},l(z){e=v(z,"A",{class:!0,href:!0});var j=$(e);t=v(j,"DIV",{class:!0});var $e=$(t);a=C($e,s),$e.forEach(d),l=A(j),i=v(j,"DIV",{class:!0});var be=$(i);n=v(be,"DIV",{class:!0});var x=$(n);f=v(x,"H4",{});var we=$(f);u=C(we,"Activity Name"),we.forEach(d),g=A(x),c=v(x,"P",{});var Ee=$(c);o=v(Ee,"SPAN",{class:!0});var ye=$(o);h=C(ye,w),ye.forEach(d),Ee.forEach(d),x.forEach(d),be.forEach(d),y=A(j),H=v(j,"DIV",{class:!0});var ke=$(H);k=v(ke,"DIV",{class:!0});var ee=$(k);N=v(ee,"H3",{});var Ie=$(N);J=C(Ie,"Last Failure"),Ie.forEach(d),W=A(ee),E=v(ee,"PRE",{style:!0,class:!0});var Ae=$(E);_=v(Ae,"CODE",{class:!0});var Pe=$(_);T=C(Pe,P),Pe.forEach(d),Ae.forEach(d),ee.forEach(d),ke.forEach(d),K=A(j),F=v(j,"DIV",{class:!0});var De=$(F);L=v(De,"DIV",{class:!0});var te=$(L);R=v(te,"H4",{});var Se=$(R);ue=C(Se,"Last Heartbeat Time"),Se.forEach(d),me=A(te),U=v(te,"P",{});var He=$(U);de=C(He,pe),He.forEach(d),te.forEach(d),De.forEach(d),he=A(j),j.forEach(d),this.h()},h(){b(t,"class","text-left font-normal text-gray-500 w-40"),b(o,"class","bg-gray-300 text-gray-700 px-2"),b(n,"class","flex gap-2"),b(i,"class","w-full"),b(_,"class","language-json"),Fe(E,"padding","0 1em"),Fe(E,"margin","0"),b(E,"class","rounded-lg"),b(k,"class","flex gap-2"),b(H,"class","w-full"),b(L,"class","flex gap-2"),b(F,"class","w-full"),b(e,"class","flex content-between w-full border-b-2 border-gray-300 p-2 last-of-type:border-b-0 hover:bg-gray-50"),b(e,"href",r[1])},m(z,j){O(z,e,j),m(e,t),m(t,a),m(e,l),m(e,i),m(i,n),m(n,f),m(f,u),m(n,g),m(n,c),m(c,o),m(o,h),m(e,y),m(e,H),m(H,k),m(k,N),m(N,J),m(k,W),m(k,E),m(E,_),m(_,T),m(e,K),m(e,F),m(F,L),m(L,R),m(R,ue),m(L,me),m(L,U),m(U,de),m(e,he)},p:ne,d(z){z&&d(e)}}}function At(r){let e,t=r[0].length&&It(r);return{c(){t&&t.c(),e=Le()},l(s){t&&t.l(s),e=Le()},m(s,a){t&&t.m(s,a),O(s,e,a)},p(s,[a]){s[0].length&&t.p(s,a)},i:ne,o:ne,d(s){t&&t.d(s),s&&d(e)}}}function Pt(r,e,t){let s;ae(r,ce,u=>t(2,s=u));const{pendingActivities:a}=s.stuff.workflow,{namespace:l,workflow:i,run:n}=s.params,f=ct({namespace:l,workflow:i,run:n});return tt(()=>{window.Prism.highlightAll()}),[a,f]}class Dt extends X{constructor(e){super();Y(this,e,Pt,At,Z,{})}}function St(r){let e;return{c(){e=V("Summary")},l(t){e=C(t,"Summary")},m(t,s){O(t,e,s)},d(t){t&&d(e)}}}function Ht(r){let e;return{c(){e=V("Compact")},l(t){e=C(t,"Compact")},m(t,s){O(t,e,s)},d(t){t&&d(e)}}}function Nt(r){let e;return{c(){e=V("JSON")},l(t){e=C(t,"JSON")},m(t,s){O(t,e,s)},d(t){t&&d(e)}}}function Vt(r){let e,t,s,a,l,i;return e=new re({props:{icon:rt,base:_e(r[3]("summary")),href:je(r[3]("summary",r[0].params.eventId||"1")),$$slots:{default:[St]},$$scope:{ctx:r}}}),s=new re({props:{icon:nt,href:_e(r[3]("compact")),$$slots:{default:[Ht]},$$scope:{ctx:r}}}),l=new re({props:{icon:at,href:_e(r[3]("json")),$$slots:{default:[Nt]},$$scope:{ctx:r}}}),{c(){B(e.$$.fragment),t=I(),B(s.$$.fragment),a=I(),B(l.$$.fragment)},l(n){q(e.$$.fragment,n),t=A(n),q(s.$$.fragment,n),a=A(n),q(l.$$.fragment,n)},m(n,f){M(e,n,f),O(n,t,f),M(s,n,f),O(n,a,f),M(l,n,f),i=!0},p(n,f){const u={};f&1&&(u.href=je(n[3]("summary",n[0].params.eventId||"1"))),f&256&&(u.$$scope={dirty:f,ctx:n}),e.$set(u);const g={};f&256&&(g.$$scope={dirty:f,ctx:n}),s.$set(g);const c={};f&256&&(c.$$scope={dirty:f,ctx:n}),l.$set(c)},i(n){i||(S(e.$$.fragment,n),S(s.$$.fragment,n),S(l.$$.fragment,n),i=!0)},o(n){D(e.$$.fragment,n),D(s.$$.fragment,n),D(l.$$.fragment,n),i=!1},d(n){G(e,n),n&&d(t),G(s,n),n&&d(a),G(l,n)}}}function Ct(r){let e,t,s,a,l,i,n,f,u,g,c,o,w,h,y,H,k,N,J;s=new Re({props:{heading:"Input",content:r[1],framed:!0}}),l=new Re({props:{heading:"Result",content:r[2],framed:!0}}),n=new Dt({}),y=new kt({props:{$$slots:{default:[Vt]},$$scope:{ctx:r}}}),k=new wt({});const W=r[7].default,E=le(W,r,r[8],null);return{c(){e=p("section"),t=p("div"),B(s.$$.fragment),a=I(),B(l.$$.fragment),i=I(),B(n.$$.fragment),f=I(),u=p("section"),g=p("nav"),c=p("h3"),o=V("Event History"),w=I(),h=p("div"),B(y.$$.fragment),H=I(),B(k.$$.fragment),N=I(),E&&E.c(),this.h()},l(_){e=v(_,"SECTION",{class:!0});var P=$(e);t=v(P,"DIV",{class:!0});var T=$(t);q(s.$$.fragment,T),a=A(T),q(l.$$.fragment,T),T.forEach(d),i=A(P),q(n.$$.fragment,P),f=A(P),u=v(P,"SECTION",{id:!0});var K=$(u);g=v(K,"NAV",{class:!0});var F=$(g);c=v(F,"H3",{class:!0});var L=$(c);o=C(L,"Event History"),L.forEach(d),w=A(F),h=v(F,"DIV",{class:!0});var R=$(h);q(y.$$.fragment,R),H=A(R),q(k.$$.fragment,R),R.forEach(d),F.forEach(d),N=A(K),E&&E.l(K),K.forEach(d),P.forEach(d),this.h()},h(){b(t,"class","flex gap-4"),b(c,"class","text-lg font-medium"),b(h,"class","flex gap-4"),b(g,"class","flex gap-4 justify-between items-end pb-4"),b(u,"id","event-history"),b(e,"class","flex flex-col gap-4")},m(_,P){O(_,e,P),m(e,t),M(s,t,null),m(t,a),M(l,t,null),m(e,i),M(n,e,null),m(e,f),m(e,u),m(u,g),m(g,c),m(c,o),m(g,w),m(g,h),M(y,h,null),m(h,H),M(k,h,null),m(u,N),E&&E.m(u,null),J=!0},p(_,[P]){const T={};P&257&&(T.$$scope={dirty:P,ctx:_}),y.$set(T),E&&E.p&&(!J||P&256)&&oe(E,W,_,_[8],J?fe(W,_[8],P,null):ie(_[8]),null)},i(_){J||(S(s.$$.fragment,_),S(l.$$.fragment,_),S(n.$$.fragment,_),S(y.$$.fragment,_),S(k.$$.fragment,_),S(E,_),J=!0)},o(_){D(s.$$.fragment,_),D(l.$$.fragment,_),D(n.$$.fragment,_),D(y.$$.fragment,_),D(k.$$.fragment,_),D(E,_),J=!1},d(_){_&&d(e),G(s),G(l),G(n),G(y),G(k),E&&E.d(_)}}}const Yt=async function({params:r,stuff:e}){const{workflow:t}=e,{namespace:s}=r,a={namespace:s,executionId:t.id,runId:t.runId},{events:l,eventGroups:i}=await dt(a);return{props:{namespace:s,workflow:t,events:l,eventGroups:i},stuff:{events:l,eventGroups:i}}};function Ot(r,e,t){let s;ae(r,ce,o=>t(0,s=o));let{$$slots:a={},$$scope:l}=e,{namespace:i}=e,{workflow:n}=e,{events:f}=e;const{input:u,result:g}=ht(f),c=(o,w)=>({namespace:i,workflow:n.id,run:n.runId,view:o,eventId:w});return r.$$set=o=>{"namespace"in o&&t(4,i=o.namespace),"workflow"in o&&t(5,n=o.workflow),"events"in o&&t(6,f=o.events),"$$scope"in o&&t(8,l=o.$$scope)},[s,u,g,c,i,n,f,a,l]}class Zt extends X{constructor(e){super();Y(this,e,Ot,Ct,Z,{namespace:4,workflow:5,events:6})}}export{Zt as default,Yt as load};