import{c as k,E as y,_ as h,w as v}from"./AppContainer.80fccb05.js";import{i as b}from"./card.1771f9b7.js";import{e as u,J as E,j as C,o,l as t,c as r,S as _,m as g,u as l,V as i,K as c,I as d}from"./entry.cb23761d.js";const w=k({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:b}}),B={click:a=>a instanceof MouseEvent},S=["href"],$=u({name:"ElLink"}),I=u({...$,props:w,emits:B,setup(a,{emit:p}){const s=a,n=E("link"),f=C(()=>[n.b(),n.m(s.type),n.is("disabled",s.disabled),n.is("underline",s.underline&&!s.disabled)]);function m(e){s.disabled||p("click",e)}return(e,P)=>(o(),t("a",{class:c(l(f)),href:e.disabled||!e.href?void 0:e.href,onClick:m},[e.icon?(o(),r(l(y),{key:0},{default:_(()=>[(o(),r(g(e.icon)))]),_:1})):i("v-if",!0),e.$slots.default?(o(),t("span",{key:1,class:c(l(n).e("inner"))},[d(e.$slots,"default")],2)):i("v-if",!0),e.$slots.icon?d(e.$slots,"icon",{key:2}):i("v-if",!0)],10,S))}});var L=h(I,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const j=v(L);export{j as E};
