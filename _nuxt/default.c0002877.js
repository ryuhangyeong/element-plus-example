import{o as s,c as d,A as o,D as g,H as y,e as w,i as C,P as T,l as x,O as v,Q as A,y as p,q as a,z as f,u as r,R as $,S as z,v as B,J as D,F as N}from"./entry.d69b84c4.js";import{_ as h}from"./_plugin-vue_export-helper.a1a6add7.js";import E from"./Icon.2ef1b704.js";import{_ as H}from"./AppContainer.03279736.js";const S={};function V(l,e){const t=y;return s(),d(t,{to:"/",class:"text-gray-800 text-base dark:text-white"},{default:o(()=>[g(" Element Plus Example ")]),_:1})}const F=h(S,[["render",V]]),L=w({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(l,{slots:e,attrs:t}){const i=C(!1);return T(()=>{i.value=!0}),n=>{var u;if(i.value)return(u=e.default)==null?void 0:u.call(e);const c=e.fallback||e.placeholder;if(c)return c();const _=n.fallback||n.placeholder||"",m=n.fallbackTag||n.placeholderTag||"span";return x(m,t,_)}}}),O={class:"m-0 text-base"},P={class:"flex items-center"},j={__name:"AppHeader",setup(l){const e=v(),t=A(e);return(i,n)=>{const c=F,_=p("el-icon"),m=E,u=L,b=H,k=p("el-header");return s(),d(k,{height:"55px",class:"fixed z-[1000] border-b border-b-solid border-b-gray-200 bg-white px-0 w-full font-semibold dark:bg-[#1a1a1a] dark:border-b-[#414243] dark:text-white"},{default:o(()=>[a(b,{class:"flex justify-between items-center h-full"},{default:o(()=>[f("h1",O,[a(c)]),f("div",P,[a(u,null,{default:o(()=>[f("a",{href:"#",onClick:n[0]||(n[0]=J=>r(t)()),class:"flex mr-4 cursor-pointer"},[r(e)?(s(),d(_,{key:0,size:20,class:"dark:text-white"},{default:o(()=>[a(r($))]),_:1})):(s(),d(_,{key:1,size:20},{default:o(()=>[a(r(z))]),_:1}))]),f("a",{href:"https://github.com/ryuhangyeong/element-plus-example",class:B(r(e)?"text-white":"text-gray-800"),target:"_blank"},[a(m,{name:"uil:github",class:"text-2xl"})],2)]),_:1})])]),_:1})]),_:1})}}},q={};function I(l,e){const t=j;return s(),x(N,null,[a(t),D(l.$slots,"default")],64)}const K=h(q,[["render",I]]);export{K as default};
