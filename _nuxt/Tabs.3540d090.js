import _ from"./client-only.03c2d431.js";import{a as y,e as x,f as c,h as m,j as g,k,o as f,b as p,l as w,m as I,p as o,F as C,q as $,u as b,r as T,s as B,t as S,x as z,y as M}from"./entry.f021650f.js";const q={class:"tabs-header relative overflow-hidden flex space-x-6 text-sm font-bold text-gray-300 bg-primary-700/45 rounded-t-lg px-5 py-3"},A=["onClick"],E=o("span",{class:"flex-1 bg-slate-500/40 rounded-lg"},null,-1),F=[E],H={class:"tabs-body relative text-slate-800 dark:text-white bg-gray-200 dark:bg-slate-800 shadow rounded-b-lg"},j=y({__name:"Tabs",setup(L){const v=x(),l=c(),r=c(),d=c([]),a=c();M("activeTab",a);const u=()=>{if(!l.value||!r.value)return;const e=r.value,s=d.value.findIndex(({name:h})=>h===a.value),t=l.value.querySelectorAll(".tabs-header-item")[s];if(!t)return;const n=24,i=30;e.style.width=`${t.offsetWidth+i}px`,e.style.left=`${t.offsetLeft-n-i/2}px`};return m(d,()=>u()),m(a,()=>u()),g(()=>{v.default&&v.default().forEach((e,s)=>{const t=e.props;d.value.push(t),s===0&&(a.value=t.name)})}),k(()=>{(async()=>{for(;typeof r.value>"u"||typeof l.value>"u";)await new Promise(e=>setTimeout(e,10));setTimeout(()=>{u()},350)})()}),(e,s)=>{const t=_;return f(),p("div",{ref_key:"tabs",ref:l,class:"tabs"},[w(t,null,{default:I(()=>[o("div",q,[(f(!0),p(C,null,$(b(d),n=>(f(),p("div",{key:n.name,class:B({"tabs-header-item":!0,"text-white":b(a)===n.name}),style:{zIndex:2},onClick:i=>a.value=n.name},[o("a",{href:"#",onClick:s[0]||(s[0]=S(i=>e.$emit("click"),["prevent"]))},z(n.title),1)],10,A))),128)),o("span",{ref_key:"tabHeaderIndicator",ref:r,class:"absolute flex h-full top-0 left-0 p-1 py-1.5 overflow-hidden transition-all duration-300",style:{zIndex:1}},F,512)])]),_:1}),o("div",H,[T(e.$slots,"default")])],512)}}});export{j as default};
