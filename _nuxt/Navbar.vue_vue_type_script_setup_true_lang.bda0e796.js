import{a7 as L,o,b as l,p as e,a as B,f as z,E as v,k as O,av as S,r as c,u as _,c as m,a8 as u,l as d,m as f,aw as T,au as M,K as D}from"./entry.98134a4f.js";import E from"./client-only.bfd56353.js";const I=(a,s)=>{const n=()=>{(window.pageYOffset||document.documentElement.scrollTop)>s?a.classList.add("sticky"):a.classList.remove("sticky")};return window.addEventListener("scroll",n),L(()=>{window.removeEventListener("scroll",n)}),{onScroll:n}},N={viewBox:"0 0 192 512",width:"1.2em",height:"1.2em"},j=e("path",{fill:"currentColor",d:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72s32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8S24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72z"},null,-1),U=[j];function Z(a,s){return o(),l("svg",N,U)}const H={name:"fa-solid-ellipsis-v",render:Z},V={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},W=e("path",{fill:"currentColor",d:"M9.078 3.965c-.588 0-1.177.289-1.514.867L.236 17.433c-.672 1.156.17 2.601 1.514 2.601h5.72a1.676 1.676 0 0 1-.35-2.117l5.547-9.513l-2.076-3.572a1.734 1.734 0 0 0-1.513-.867zm7.407 2.922c-.487 0-.973.236-1.252.709L9.17 17.906c-.557.945.138 2.13 1.251 2.13h12.13c1.114 0 1.81-1.185 1.253-2.13l-6.067-10.31a1.437 1.437 0 0 0-1.252-.71z"},null,-1),K=[W];function Y(a,s){return o(),l("svg",V,K)}const q={name:"simple-icons-nuxtdotjs",render:Y},A={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},F=e("path",{fill:"currentColor",d:"m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"},null,-1),G=[F];function J(a,s){return o(),l("svg",A,G)}const P={name:"uil-times",render:J},Q={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},R=e("path",{fill:"currentColor",d:"M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"},null,-1),X=[R];function ee(a,s){return o(),l("svg",Q,X)}const te={name:"uil-bars",render:ee},oe={id:"navbar-banner",class:"banner"},se={class:"max-w-8xl w-full mx-auto"},ne={class:"py-3 lg:px-8 mx-4 lg:mx-0"},le={class:"relative flex items-center"},ae={key:0,class:"lg:hidden flex items-center self-center justify-center mr-2"},re={class:"flex items-center text-gray-600 dark:text-gray-300 text-lg","aria-hidden":"true"},ie=e("span",{class:"sr-only"},"home",-1),ce={class:"flex items-center"},de={key:1,class:"flex-1 flex justify-end lg:hidden"},_e={class:"flex items-center text-gray-600 dark:text-gray-300 text-sm","aria-hidden":"true"},ue={key:0,class:"fixed lg:hidden bg-gray-100 dark:bg-slate-800 pt-12 top-0 left-0 w-screen h-screen z-30 flex flex-col"},me={class:"flex-1 flex flex-col relative overflow-y-auto"},fe={key:0},ve=B({__name:"Navbar",setup(a){const s=z(null),n=v("navbar.showDrawer",()=>!1),r=v("navbar.showOptions",()=>!1);O(()=>{if(!s.value)return;const{onScroll:t}=I(s.value,0);setTimeout(()=>t(),50),setInterval(()=>{window.innerWidth<1024&&g()},100)}),S(()=>{});const g=()=>{n.value||r.value?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")},h=()=>n.value=!n.value,p=t=>{t?r.value=t:r.value=!r.value};return(t,i)=>{const x=te,w=P,b=q,y=D,k=H,$=E;return o(),l("div",{ref_key:"navbar",ref:s,class:"backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-900/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-slate-900/[0.5]"},[e("div",oe,[c(t.$slots,"banner")]),e("div",se,[e("div",ne,[e("div",le,[t.$slots.drawer?(o(),l("div",ae,[e("button",{class:"flex items-center focus:outline-none","aria-label":"Toggle Drawer Menu",onClick:i[0]||(i[0]=C=>h())},[e("span",re,[_(n)?(o(),m(w,{key:1})):(o(),m(x,{key:0}))])])])):u("",!0),c(t.$slots,"title",{},()=>[d(y,{tag:"a",class:"mr-3 flex-none overflow-hidden md:w-auto text-md font-bold text-gray-900 dark:text-gray-200",to:{name:"index"}},{default:f(()=>[ie,e("span",ce,[d(b,{class:"inline-block mr-2 text-lg text-primary-500"})])]),_:1})]),c(t.$slots,"menu"),t.$slots.options?(o(),l("div",de,[e("button",{class:"flex items-center focus:outline-none","aria-label":"Toggle Options Menu",onClick:i[1]||(i[1]=C=>p())},[e("span",_e,[d(k)])])])):u("",!0)])])]),d($,null,{default:f(()=>[(o(),m(M,{to:"#app-after"},[d(T,{name:"slide-fade-from-up",mode:"out-in"},{default:f(()=>[_(n)&&t.$slots.drawer?(o(),l("div",ue,[e("div",me,[c(t.$slots,"drawer",{toggleDrawer:h})])])):u("",!0)]),_:3}),_(r)&&t.$slots.options?(o(),l("div",fe,[c(t.$slots,"options",{toggleOptions:p,showOptions:_(r)})])):u("",!0)]))]),_:3})],512)}}});export{ve as _};
