import{u as f}from"./useSyncProps.ee450083.js";import{a as h,f as c,k as b,o as k,b as m,p as d,u as e,r as g}from"./entry.11bfcd3e.js";const _=["for"],v=["for"],w=["id","checked"],y=["for"],B=h({__name:"Switch",props:{modelValue:{type:Boolean,default:!1},on:{type:Boolean,default:!1},id:{type:String,default:void 0}},emits:["update:modelValue"],setup(u,{emit:t}){const a=u,i=()=>Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),o=c(a.id||i()),r=c(),n=f(a,"modelValue",t),p=s=>{const l=s.target;n.value=l.checked,t("update:modelValue",l.checked)};return b(()=>{a.on&&(n.value=!0,t("update:modelValue",!0),r.value&&(r.value.checked=!0))}),(s,l)=>(k(),m("label",{for:e(o),class:"flex cursor-pointer"},[d("label",{for:e(o),class:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},[d("input",{id:e(o),ref_key:"input",ref:r,type:"checkbox",class:"switch-checkbox absolute block w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 appearance-none cursor-pointer",checked:e(n),onChange:p},null,40,w),d("label",{for:e(o),class:"switch-label block overflow-hidden h-6 rounded-full bg-gray-200 dark:bg-slate-700 cursor-pointer border border-slate-300 dark:border-slate-500"},null,8,y)],8,v),g(s.$slots,"default")],8,_))}});export{B as _};