import i from"./Wrapper.2b08e3f7.js";import{_ as m}from"./Button.vue_vue_type_script_setup_true_lang.796762f5.js";import{a as _,D as d,o as u,c as f,m as x,p as t,x as n,u as s,l as h,s as b,V as g}from"./entry.11bfcd3e.js";const B={class:"text-center mb-6 leading-3"},k={class:"font-bold text-8xl block"},w={class:"block italic"},D=_({__name:"Error",props:{code:{type:Number,default:400},wrap:{type:Boolean,default:!1}},setup(r){const e=r,c=i,p={400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found"},a=d(()=>{const{code:o}=e;return{code:o,message:p[o.toString()]||"Unknown Error"}});return(o,y)=>{const l=m;return u(),f(g(e.wrap?s(c):"div"),{class:b(e.wrap?"flex flex-col items-center justify-center":"")},{default:x(()=>[t("h1",B,[t("span",k,n(s(a).code),1),t("span",w,n(s(a).message),1)]),h(l,{text:"Home",to:"/",size:"sm"})]),_:1},8,["class"])}}});export{D as _};