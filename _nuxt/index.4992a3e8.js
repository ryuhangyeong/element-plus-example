import{c as K,d as ee,q as re,_ as de,B as Ce,C as Ne,E as I,r as oe,g as Ee,D as ce,w as Pe,f as ke}from"./AppContainer.197120c0.js";/* empty css             */import{m as ue,E as Te,a as Se,b as $e}from"./card.79189e17.js";import{z as te,J as j,I as Be,U as fe,E as Oe}from"./_type_.d660026c.js";/* empty css               */import{aJ as ze,ab as Re,aG as Ae,e as L,v as ae,J as W,i as k,w as D,W as se,o as ne,l as be,K as me,u as E,p as De,q,j as M,x as pe,az as Ve,R as e,aK as Fe,aC as Le,aA as Ie,H as Me,aL as Ue,I as _e,X as je,a3 as Ke,r as We,A as qe,L as He,Z as Je,V as Ge,ac as U,c as Xe,S as s,a5 as l,a7 as v,aF as Qe,aM as Ye,aN as Ze,aO as et,aP as tt,aQ as at}from"./entry.3e235f6c.js";import{f as st}from"./vnode.21b4ef13.js";import{E as nt}from"./index.4c914c2a.js";import"./_plugin-vue_export-helper.a1a6add7.js";import"./composables.de9807b8.js";const A=t=>ze(t),H=Symbol("tabsRootContextKey"),lt=(t,c,h)=>st(t.subTree).filter(n=>{var o;return Ae(n)&&((o=n.type)==null?void 0:o.name)===c&&!!n.component}).map(n=>n.component.uid).map(n=>h[n]).filter(n=>!!n),ot=(t,c)=>{const h={},x=Re([]);return{children:x,addChild:o=>{h[o.uid]=o,x.value=lt(t,c,h)},removeChild:o=>{delete h[o],x.value=x.value.filter(B=>B.uid!==o)}}},ct=K({tabs:{type:ee(Array),default:()=>ue([])}}),ve="ElTabBar",it=L({name:ve}),rt=L({...it,props:ct,setup(t,{expose:c}){const h=t,x=q(),f=ae(H);f||te(ve,"<el-tabs><el-tab-bar /></el-tabs>");const n=W("tabs"),o=k(),B=k(),p=()=>{let b=0,r=0;const a=["top","bottom"].includes(f.props.tabPosition)?"width":"height",m=a==="width"?"x":"y",O=m==="x"?"left":"top";return h.tabs.every(T=>{var R,i;const w=(i=(R=x.parent)==null?void 0:R.refs)==null?void 0:i[`tab-${T.uid}`];if(!w)return!1;if(!T.active)return!0;b=w[`offset${A(O)}`],r=w[`client${A(a)}`];const C=window.getComputedStyle(w);return a==="width"&&(h.tabs.length>1&&(r-=Number.parseFloat(C.paddingLeft)+Number.parseFloat(C.paddingRight)),b+=Number.parseFloat(C.paddingLeft)),!1}),{[a]:`${r}px`,transform:`translate${A(m)}(${b}px)`}},g=()=>B.value=p();return D(()=>h.tabs,async()=>{await se(),g()},{immediate:!0}),re(o,()=>g()),c({ref:o,update:g}),(b,r)=>(ne(),be("div",{ref_key:"barRef",ref:o,class:me([E(n).e("active-bar"),E(n).is(E(f).props.tabPosition)]),style:De(B.value)},null,6))}});var dt=de(rt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const ut=K({panes:{type:ee(Array),default:()=>ue([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),ft={tabClick:(t,c,h)=>h instanceof Event,tabRemove:(t,c)=>c instanceof Event},ie="ElTabNav",bt=L({name:ie,props:ut,emits:ft,setup(t,{expose:c,emit:h}){const x=q(),f=ae(H);f||te(ie,"<el-tabs><tab-nav /></el-tabs>");const n=W("tabs"),o=Ce(),B=Ne(),p=k(),g=k(),b=k(),r=k(!1),a=k(0),m=k(!1),O=k(!0),T=M(()=>["top","bottom"].includes(f.props.tabPosition)?"width":"height"),R=M(()=>({transform:`translate${T.value==="width"?"X":"Y"}(-${a.value}px)`})),i=()=>{if(!p.value)return;const d=p.value[`offset${A(T.value)}`],_=a.value;if(!_)return;const u=_>d?_-d:0;a.value=u},w=()=>{if(!p.value||!g.value)return;const d=g.value[`offset${A(T.value)}`],_=p.value[`offset${A(T.value)}`],u=a.value;if(d-u<=_)return;const S=d-u>_*2?u+_:d-_;a.value=S},C=async()=>{const d=g.value;if(!r.value||!b.value||!p.value||!d)return;await se();const _=b.value.querySelector(".is-active");if(!_)return;const u=p.value,S=["top","bottom"].includes(f.props.tabPosition),P=_.getBoundingClientRect(),N=u.getBoundingClientRect(),z=S?d.offsetWidth-N.width:d.offsetHeight-N.height,$=a.value;let y=$;S?(P.left<N.left&&(y=$-(N.left-P.left)),P.right>N.right&&(y=$+P.right-N.right)):(P.top<N.top&&(y=$-(N.top-P.top)),P.bottom>N.bottom&&(y=$+(P.bottom-N.bottom))),y=Math.max(y,0),a.value=Math.min(y,z)},V=()=>{if(!g.value||!p.value)return;const d=g.value[`offset${A(T.value)}`],_=p.value[`offset${A(T.value)}`],u=a.value;if(_<d){const S=a.value;r.value=r.value||{},r.value.prev=S,r.value.next=S+_<d,d-S<_&&(a.value=d-_)}else r.value=!1,u>0&&(a.value=0)},J=d=>{const _=d.code,{up:u,down:S,left:P,right:N}=j;if(![u,S,P,N].includes(_))return;const z=Array.from(d.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),$=z.indexOf(d.target);let y;_===P||_===u?$===0?y=z.length-1:y=$-1:$<z.length-1?y=$+1:y=0,z[y].focus({preventScroll:!0}),z[y].click(),le()},le=()=>{O.value&&(m.value=!0)},G=()=>m.value=!1;return D(o,d=>{d==="hidden"?O.value=!1:d==="visible"&&setTimeout(()=>O.value=!0,50)}),D(B,d=>{d?setTimeout(()=>O.value=!0,50):O.value=!1}),re(b,V),pe(()=>setTimeout(()=>C(),0)),Ve(()=>V()),c({scrollToActiveTab:C,removeFocus:G}),D(()=>t.panes,()=>x.update(),{flush:"post"}),()=>{const d=r.value?[e("span",{class:[n.e("nav-prev"),n.is("disabled",!r.value.prev)],onClick:i},[e(I,null,{default:()=>[e(Fe,null,null)]})]),e("span",{class:[n.e("nav-next"),n.is("disabled",!r.value.next)],onClick:w},[e(I,null,{default:()=>[e(Le,null,null)]})])]:null,_=t.panes.map((u,S)=>{var P,N,z,$;const y=u.uid,X=u.props.disabled,Q=(N=(P=u.props.name)!=null?P:u.index)!=null?N:`${S}`,Y=!X&&(u.isClosable||t.editable);u.index=`${S}`;const ye=Y?e(I,{class:"is-icon-close",onClick:F=>h("tabRemove",u,F)},{default:()=>[e(Ie,null,null)]}):null,xe=(($=(z=u.slots).label)==null?void 0:$.call(z))||u.props.label,we=!X&&u.active?0:-1;return e("div",{ref:`tab-${y}`,class:[n.e("item"),n.is(f.props.tabPosition),n.is("active",u.active),n.is("disabled",X),n.is("closable",Y),n.is("focus",m.value)],id:`tab-${Q}`,key:`tab-${y}`,"aria-controls":`pane-${Q}`,role:"tab","aria-selected":u.active,tabindex:we,onFocus:()=>le(),onBlur:()=>G(),onClick:F=>{G(),h("tabClick",u,Q,F)},onKeydown:F=>{Y&&(F.code===j.delete||F.code===j.backspace)&&h("tabRemove",u,F)}},[xe,ye])});return e("div",{ref:b,class:[n.e("nav-wrap"),n.is("scrollable",!!r.value),n.is(f.props.tabPosition)]},[d,e("div",{class:n.e("nav-scroll"),ref:p},[e("div",{class:[n.e("nav"),n.is(f.props.tabPosition),n.is("stretch",t.stretch&&["top","bottom"].includes(f.props.tabPosition))],ref:g,style:R.value,role:"tablist",onKeydown:J},[t.type?null:e(dt,{tabs:[...t.panes]},null),_])])])}}}),mt=K({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:ee(Function),default:()=>!0},stretch:Boolean}),Z=t=>je(t)||Ee(t),pt={[fe]:t=>Z(t),tabClick:(t,c)=>c instanceof Event,tabChange:t=>Z(t),edit:(t,c)=>["remove","add"].includes(c),tabRemove:t=>Z(t),tabAdd:()=>!0};var _t=L({name:"ElTabs",props:mt,emits:pt,setup(t,{emit:c,slots:h,expose:x}){var f,n;const o=W("tabs"),{children:B,addChild:p,removeChild:g}=ot(q(),"ElTabPane"),b=k(),r=k((n=(f=t.modelValue)!=null?f:t.activeName)!=null?n:"0"),a=i=>{r.value=i,c(fe,i),c("tabChange",i)},m=async i=>{var w,C,V;if(!(r.value===i||oe(i)))try{await((w=t.beforeLeave)==null?void 0:w.call(t,i,r.value))!==!1&&(a(i),(V=(C=b.value)==null?void 0:C.removeFocus)==null||V.call(C))}catch{}},O=(i,w,C)=>{i.props.disabled||(m(w),c("tabClick",i,C))},T=(i,w)=>{i.props.disabled||oe(i.props.name)||(w.stopPropagation(),c("edit",i.props.name,"remove"),c("tabRemove",i.props.name))},R=()=>{c("edit",void 0,"add"),c("tabAdd")};return Be({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},M(()=>!!t.activeName)),D(()=>t.activeName,i=>m(i)),D(()=>t.modelValue,i=>m(i)),D(r,async()=>{var i;await se(),(i=b.value)==null||i.scrollToActiveTab()}),Me(H,{props:t,currentName:r,registerPane:p,unregisterPane:g}),x({currentName:r}),()=>{const i=t.editable||t.addable?e("span",{class:o.e("new-tab"),tabindex:"0",onClick:R,onKeydown:V=>{V.code===j.enter&&R()}},[e(I,{class:o.is("icon-plus")},{default:()=>[e(Ue,null,null)]})]):null,w=e("div",{class:[o.e("header"),o.is(t.tabPosition)]},[i,e(bt,{ref:b,currentName:r.value,editable:t.editable,type:t.type,panes:B.value,stretch:t.stretch,onTabClick:O,onTabRemove:T},null)]),C=e("div",{class:o.e("content")},[_e(h,"default")]);return e("div",{class:[o.b(),o.m(t.tabPosition),{[o.m("card")]:t.type==="card",[o.m("border-card")]:t.type==="border-card"}]},[...t.tabPosition!=="bottom"?[w,C]:[C,w]])}}});const vt=K({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ht=["id","aria-hidden","aria-labelledby"],he="ElTabPane",gt=L({name:he}),yt=L({...gt,props:vt,setup(t){const c=t,h=q(),x=Ke(),f=ae(H);f||te(he,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const n=W("tab-pane"),o=k(),B=M(()=>c.closable||f.props.closable),p=ce(()=>{var m;return f.currentName.value===((m=c.name)!=null?m:o.value)}),g=k(p.value),b=M(()=>{var m;return(m=c.name)!=null?m:o.value}),r=ce(()=>!c.lazy||g.value||p.value);D(p,m=>{m&&(g.value=!0)});const a=We({uid:h.uid,slots:x,props:c,paneName:b,active:p,index:o,isClosable:B});return pe(()=>{f.registerPane(a)}),qe(()=>{f.unregisterPane(a.uid)}),(m,O)=>E(r)?He((ne(),be("div",{key:0,id:`pane-${E(b)}`,class:me(E(n).b()),role:"tabpanel","aria-hidden":!E(p),"aria-labelledby":`tab-${E(b)}`},[_e(m.$slots,"default")],10,ht)),[[Je,E(p)]]):Ge("v-if",!0)}});var ge=de(yt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const xt=Pe(_t,{TabPane:ge}),wt=ke(ge);const Ct=l("div",{class:"flex items-center justify-between px-2 mx-auto max-w-5xl lg:px-0"},[l("h1",null,[l("a",{href:"https://element-plus.org/en-US/",class:"block py-5",target:"_blank"},[l("img",{src:"https://element-plus.org/images/element-plus-logo.svg",alt:"Element Plus Logo",class:"block w-[120px] h-[28px]"})])])],-1),Nt={class:"relative before:absolute before:top-[39px] before:border:left-0 before:border-b before:border-b-[#e4e7ed] before:w-full before:h-[1px] before:content-empty dark:before:border-b-[#414243]"},Et={class:"px-2 mx-auto max-w-5xl lg:px-0"},Pt=l("h2",{class:"py-10 font-semibold text-3xl text-[#606266]"}," Design Disciplines ",-1),kt={class:"rounded-md mb-4 py-14 bg-[#fafafa] text-center dark:bg-[#242424]"},Tt={class:"inline-flex items-center justify-center rounded-full bg-[#eff5fd] w-24 h-24 leading-24 dark:bg-[#36393d]"},St=l("p",{class:"mt-3"},"Consistency",-1),$t={class:"rounded-md mb-4 py-14 bg-[#fafafa] text-center dark:bg-[#242424]"},Bt={class:"inline-flex items-center justify-center rounded-full bg-[#eff5fd] w-24 h-24 leading-24 dark:bg-[#36393d]"},Ot=l("p",{class:"mt-3"},"Feedback",-1),zt={class:"rounded-md mb-4 py-14 bg-[#fafafa] text-center dark:bg-[#242424]"},Rt={class:"inline-flex items-center justify-center rounded-full bg-[#eff5fd] w-24 h-24 leading-24 dark:bg-[#36393d]"},At=l("p",{class:"mt-3"},"Efficiency",-1),Dt={class:"rounded-md mb-4 py-14 bg-[#fafafa] text-center dark:bg-[#242424]"},Vt={class:"inline-flex items-center justify-center rounded-full bg-[#eff5fd] w-24 h-24 leading-24 dark:bg-[#36393d]"},Ft=l("p",{class:"mt-3"},"Controllability",-1),Lt=l("h2",{class:"py-10 font-semibold text-3xl text-[#606266]"}," Button ",-1),It=l("p",{class:"my-3"},"Commonly used button.",-1),Mt=l("h3",{class:"py-6 font-semibold text-3xl text-[#606266]"}," Basic usage ",-1),Ut={class:"flex flex-col h-60"},jt=l("h3",{class:"pb-4 font-semibold text-xl text-gray-700 dark:text-white"}," Axure Components ",-1),Kt=l("p",{class:"text-gray-400"}," By importing Element Plus in Axure, you can easily apply all the components we provide during interaction design. ",-1),Wt={class:"mt-auto"},qt={class:"flex flex-col h-60"},Ht=l("h3",{class:"pb-4 font-semibold text-xl text-gray-700 dark:text-white"}," Sketch Template ",-1),Jt=l("p",{class:"text-gray-400"}," Newly designed Sketch component library in 2022 with full components for Element Plus to improve design efficiency while keeping a unified visual style. ",-1),Gt={class:"mt-auto"},Xt={class:"flex flex-col h-60"},Qt=l("h3",{class:"pb-4 font-semibold text-xl text-gray-700 dark:text-white"}," Figma Template ",-1),Yt=l("p",{class:"text-gray-400"}," Newly designed Figma component library in 2022 with new features such as Auto-layout and Variants. ",-1),Zt={class:"mt-auto"},da={__name:"index",setup(t){const c=k("guide");return(h,x)=>{const f=U("Document"),n=I,o=Te,B=U("EditPen"),p=U("Tools"),g=U("Operation"),b=Se,r=wt,a=Oe,m=$e,O=xt,T=nt;return ne(),Xe(T,{class:"p-0 w-full"},{default:s(()=>[Ct,l("div",Nt,[l("div",Et,[e(O,{modelValue:c.value,"onUpdate:modelValue":x[0]||(x[0]=R=>c.value=R),type:"card"},{default:s(()=>[e(r,{label:"Guide",name:"guide"},{default:s(()=>[l("section",null,[Pt,e(b,{gutter:10},{default:s(()=>[e(o,{xs:24,sm:12,md:12,lg:6,xl:6},{default:s(()=>[l("div",kt,[l("span",Tt,[e(n,{size:"60",color:"#409eff"},{default:s(()=>[e(f)]),_:1})]),St])]),_:1}),e(o,{xs:24,sm:12,md:12,lg:6,xl:6},{default:s(()=>[l("div",$t,[l("span",Bt,[e(n,{size:"60",color:"#409eff"},{default:s(()=>[e(B)]),_:1})]),Ot])]),_:1}),e(o,{xs:24,sm:12,md:12,lg:6,xl:6},{default:s(()=>[l("div",zt,[l("span",Rt,[e(n,{size:"60",color:"#409eff"},{default:s(()=>[e(p)]),_:1})]),At])]),_:1}),e(o,{xs:24,sm:12,md:12,lg:6,xl:6},{default:s(()=>[l("div",Dt,[l("span",Vt,[e(n,{size:"60",color:"#409eff"},{default:s(()=>[e(g)]),_:1})]),Ft])]),_:1})]),_:1})])]),_:1}),e(r,{label:"Component",name:"component"},{default:s(()=>[l("section",null,[Lt,It,Mt,l("div",null,[e(b,{class:"mb-4"},{default:s(()=>[e(a,null,{default:s(()=>[v("Default")]),_:1}),e(a,{type:"primary"},{default:s(()=>[v("Primary")]),_:1}),e(a,{type:"success"},{default:s(()=>[v("Success")]),_:1}),e(a,{type:"info"},{default:s(()=>[v("Info")]),_:1}),e(a,{type:"warning"},{default:s(()=>[v("Warning")]),_:1}),e(a,{type:"danger"},{default:s(()=>[v("Danger")]),_:1})]),_:1}),e(b,{class:"mb-4"},{default:s(()=>[e(a,{plain:""},{default:s(()=>[v("Plain")]),_:1}),e(a,{type:"primary",plain:""},{default:s(()=>[v("Primary")]),_:1}),e(a,{type:"success",plain:""},{default:s(()=>[v("Success")]),_:1}),e(a,{type:"info",plain:""},{default:s(()=>[v("Info")]),_:1}),e(a,{type:"warning",plain:""},{default:s(()=>[v("Warning")]),_:1}),e(a,{type:"danger",plain:""},{default:s(()=>[v("Danger")]),_:1})]),_:1}),e(b,{class:"mb-4"},{default:s(()=>[e(a,{round:""},{default:s(()=>[v("Round")]),_:1}),e(a,{type:"primary",round:""},{default:s(()=>[v("Primary")]),_:1}),e(a,{type:"success",round:""},{default:s(()=>[v("Success")]),_:1}),e(a,{type:"info",round:""},{default:s(()=>[v("Info")]),_:1}),e(a,{type:"warning",round:""},{default:s(()=>[v("Warning")]),_:1}),e(a,{type:"danger",round:""},{default:s(()=>[v("Danger")]),_:1})]),_:1}),e(b,null,{default:s(()=>[e(a,{icon:E(Qe),circle:""},null,8,["icon"]),e(a,{type:"primary",icon:E(Ye),circle:""},null,8,["icon"]),e(a,{type:"success",icon:E(Ze),circle:""},null,8,["icon"]),e(a,{type:"info",icon:E(et),circle:""},null,8,["icon"]),e(a,{type:"warning",icon:E(tt),circle:""},null,8,["icon"]),e(a,{type:"danger",icon:E(at),circle:""},null,8,["icon"])]),_:1})])])]),_:1}),e(r,{label:"Resource",name:"resource"},{default:s(()=>[e(b,{gutter:10,class:"mt-10"},{default:s(()=>[e(o,{xs:24,sm:12,md:12,lg:8,xl:8},{default:s(()=>[e(m,{shadow:"never",class:"text-center mb-4"},{default:s(()=>[l("div",Ut,[jt,Kt,l("div",Wt,[e(a,{type:"primary",class:"mt-4"},{default:s(()=>[v(" Download ")]),_:1})])])]),_:1})]),_:1}),e(o,{xs:24,sm:12,md:12,lg:8,xl:8},{default:s(()=>[e(m,{shadow:"never",class:"text-center mb-4"},{default:s(()=>[l("div",qt,[Ht,Jt,l("div",Gt,[e(a,{type:"primary",class:"mt-4"},{default:s(()=>[v(" Download ")]),_:1})])])]),_:1})]),_:1}),e(o,{xs:24,sm:12,md:12,lg:8,xl:8},{default:s(()=>[e(m,{shadow:"never",class:"text-center mb-4"},{default:s(()=>[l("div",Xt,[Qt,Yt,l("div",Zt,[e(a,{type:"primary",class:"mt-4"},{default:s(()=>[v(" Download ")]),_:1})])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]),_:1})}}};export{da as default};
