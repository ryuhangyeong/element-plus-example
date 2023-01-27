import{_ as de,y as H,z as oe,v as we,c as pe,E as ye,A as ge,d as ue,q as Ne,w as Oe,f as me}from"./AppContainer.197120c0.js";import{e as F,J as w,o as W,c as Ie,S as re,I as B,U as Pe,$ as _e,j as p,v as U,i as k,aH as Ae,aC as Be,r as ve,w as K,H as ie,x as fe,D as Ce,h as b,X as j,L as ze,Z as Le,P as he,q as be,aj as We,aI as je,O as De,W as Re,z as qe,ac as Fe,l as Z,a5 as ce,K as X,a7 as Ve,t as He}from"./entry.3e235f6c.js";import{J as E,T as Ge,z as Q,K as ke}from"./_type_.d660026c.js";import{_ as Ke}from"./index.067fcdff.js";import{i as G,m as Je}from"./card.79189e17.js";import{f as Ue}from"./vnode.21b4ef13.js";const J=function(e,n,...t){let u;n.includes("mouse")||n.includes("click")?u="MouseEvents":n.includes("key")?u="KeyboardEvent":u="HTMLEvents";const r=document.createEvent(u);return r.initEvent(n,...t),e.dispatchEvent(r),e};class Ze{constructor(n,t){this.parent=n,this.domNode=t,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(n){n===this.subMenuItems.length?n=0:n<0&&(n=this.subMenuItems.length-1),this.subMenuItems[n].focus(),this.subIndex=n}addListeners(){const n=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,t=>{t.addEventListener("keydown",u=>{let r=!1;switch(u.code){case E.down:{this.gotoSubIndex(this.subIndex+1),r=!0;break}case E.up:{this.gotoSubIndex(this.subIndex-1),r=!0;break}case E.tab:{J(n,"mouseleave");break}case E.enter:case E.space:{r=!0,u.currentTarget.click();break}}return r&&(u.preventDefault(),u.stopPropagation()),!1})})}}class Xe{constructor(n,t){this.domNode=n,this.submenu=null,this.submenu=null,this.init(t)}init(n){this.domNode.setAttribute("tabindex","0");const t=this.domNode.querySelector(`.${n}-menu`);t&&(this.submenu=new Ze(this,t)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",n=>{let t=!1;switch(n.code){case E.down:{J(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),t=!0;break}case E.up:{J(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),t=!0;break}case E.tab:{J(n.currentTarget,"mouseleave");break}case E.enter:case E.space:{t=!0,n.currentTarget.click();break}}t&&n.preventDefault()})}}class Qe{constructor(n,t){this.domNode=n,this.init(t)}init(n){const t=this.domNode.childNodes;Array.from(t).forEach(u=>{u.nodeType===1&&new Xe(u,n)})}}const Ye=F({name:"ElMenuCollapseTransition",setup(){const e=w("menu");return{listeners:{onBeforeEnter:t=>t.style.opacity="0.2",onEnter(t,u){H(t,`${e.namespace.value}-opacity-transition`),t.style.opacity="1",u()},onAfterEnter(t){oe(t,`${e.namespace.value}-opacity-transition`),t.style.opacity=""},onBeforeLeave(t){t.dataset||(t.dataset={}),we(t,e.m("collapse"))?(oe(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),H(t,e.m("collapse"))):(H(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),oe(t,e.m("collapse"))),t.style.width=`${t.scrollWidth}px`,t.style.overflow="hidden"},onLeave(t){H(t,"horizontal-collapse-transition"),t.style.width=`${t.dataset.scrollWidth}px`}}}}});function et(e,n,t,u,r,C){return W(),Ie(_e,Pe({mode:"out-in"},e.listeners),{default:re(()=>[B(e.$slots,"default")]),_:3},16)}var tt=de(Ye,[["render",et],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function xe(e,n){const t=p(()=>{let r=e.parent;const C=[n.value];for(;r.type.name!=="ElMenu";)r.props.index&&C.unshift(r.props.index),r=r.parent;return C});return{parentMenu:p(()=>{let r=e.parent;for(;r&&!["ElMenu","ElSubMenu"].includes(r.type.name);)r=r.parent;return r}),indexPath:t}}function nt(e){return p(()=>{const t=e.backgroundColor;return t?new Ge(t).shade(20).toString():""})}const Se=(e,n)=>{const t=w("menu");return p(()=>t.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":nt(e).value||"","active-color":e.activeTextColor||"",level:`${n}`}))},ot=pe({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:G},expandOpenIcon:{type:G},collapseCloseIcon:{type:G},collapseOpenIcon:{type:G}}),le="ElSubMenu";var Me=F({name:le,props:ot,setup(e,{slots:n,expose:t}){const u=be(),{indexPath:r,parentMenu:C}=xe(u,p(()=>e.index)),c=w("menu"),f=w("sub-menu"),s=U("rootMenu");s||Q(le,"can not inject root menu");const d=U(`subMenu:${C.value.uid}`);d||Q(le,"can not inject sub menu");const m=k({}),M=k({});let I;const N=k(!1),Y=k(),V=k(null),_=p(()=>l.value==="horizontal"&&z.value?"bottom-start":"right-start"),A=p(()=>l.value==="horizontal"&&z.value||l.value==="vertical"&&!s.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?S.value?e.expandOpenIcon:e.expandCloseIcon:Ae:e.collapseCloseIcon&&e.collapseOpenIcon?S.value?e.collapseOpenIcon:e.collapseCloseIcon:Be),z=p(()=>d.level===0),D=p(()=>e.popperAppendToBody===void 0?z.value:Boolean(e.popperAppendToBody)),ee=p(()=>s.props.collapse?`${c.namespace.value}-zoom-in-left`:`${c.namespace.value}-zoom-in-top`),te=p(()=>l.value==="horizontal"&&z.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","left-start","bottom-start","bottom-end","top-start","top-end"]),S=p(()=>s.openedMenus.includes(e.index)),O=p(()=>{let i=!1;return Object.values(m.value).forEach(v=>{v.active&&(i=!0)}),Object.values(M.value).forEach(v=>{v.active&&(i=!0)}),i}),R=p(()=>s.props.backgroundColor||""),L=p(()=>s.props.activeTextColor||""),o=p(()=>s.props.textColor||""),l=p(()=>s.props.mode),a=ve({index:e.index,indexPath:r,active:O}),g=p(()=>l.value!=="horizontal"?{color:o.value}:{borderBottomColor:O.value?s.props.activeTextColor?L.value:"":"transparent",color:O.value?L.value:o.value}),h=()=>{var i,v,y;return(y=(v=(i=V.value)==null?void 0:i.popperRef)==null?void 0:v.popperInstanceRef)==null?void 0:y.destroy()},T=i=>{i||h()},P=()=>{s.props.menuTrigger==="hover"&&s.props.mode==="horizontal"||s.props.collapse&&s.props.mode==="vertical"||e.disabled||s.handleSubMenuClick({index:e.index,indexPath:r.value,active:O.value})},$=(i,v=e.showTimeout)=>{var y;i.type!=="focus"&&(s.props.menuTrigger==="click"&&s.props.mode==="horizontal"||!s.props.collapse&&s.props.mode==="vertical"||e.disabled||(d.mouseInChild.value=!0,I==null||I(),{stop:I}=ge(()=>{s.openMenu(e.index,r.value)},v),D.value&&((y=C.value.vnode.el)==null||y.dispatchEvent(new MouseEvent("mouseenter")))))},x=(i=!1)=>{var v,y;s.props.menuTrigger==="click"&&s.props.mode==="horizontal"||!s.props.collapse&&s.props.mode==="vertical"||(I==null||I(),d.mouseInChild.value=!1,{stop:I}=ge(()=>!N.value&&s.closeMenu(e.index,r.value),e.hideTimeout),D.value&&i&&((v=u.parent)==null?void 0:v.type.name)==="ElSubMenu"&&((y=d.handleMouseleave)==null||y.call(d,!0)))};K(()=>s.props.collapse,i=>T(Boolean(i)));{const i=y=>{M.value[y.index]=y},v=y=>{delete M.value[y.index]};ie(`subMenu:${u.uid}`,{addSubMenu:i,removeSubMenu:v,handleMouseleave:x,mouseInChild:N,level:d.level+1})}return t({opened:S}),fe(()=>{s.addSubMenu(a),d.addSubMenu(a)}),Ce(()=>{d.removeSubMenu(a),s.removeSubMenu(a)}),()=>{var i;const v=[(i=n.title)==null?void 0:i.call(n),b(ye,{class:f.e("icon-arrow"),style:{transform:S.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&s.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>j(A.value)?b(u.appContext.components[A.value]):b(A.value)})],y=Se(s.props,d.level+1),$e=s.isMenuPopup?b(ke,{ref:V,visible:S.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:_.value,teleported:D.value,fallbackPlacements:te.value,transition:ee.value,gpuAcceleration:!1},{content:()=>{var q;return b("div",{class:[c.m(l.value),c.m("popup-container"),e.popperClass],onMouseenter:ne=>$(ne,100),onMouseleave:()=>x(!0),onFocus:ne=>$(ne,100)},[b("ul",{class:[c.b(),c.m("popup"),c.m(`popup-${_.value}`)],style:y.value},[(q=n.default)==null?void 0:q.call(n)])])},default:()=>b("div",{class:f.e("title"),style:[g.value,{backgroundColor:R.value}],onClick:P},v)}):b(he,{},[b("div",{class:f.e("title"),style:[g.value,{backgroundColor:R.value}],ref:Y,onClick:P},v),b(Ke,{},{default:()=>{var q;return ze(b("ul",{role:"menu",class:[c.b(),c.m("inline")],style:y.value},[(q=n.default)==null?void 0:q.call(n)]),[[Le,S.value]])}})]);return b("li",{class:[f.b(),f.is("active",O.value),f.is("opened",S.value),f.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:S.value,onMouseenter:$,onMouseleave:()=>x(!0),onFocus:$},[$e])}}});const lt=pe({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:ue(Array),default:()=>Je([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperEffect:{type:String,values:["dark","light"],default:"dark"}}),se=e=>Array.isArray(e)&&e.every(n=>j(n)),st={close:(e,n)=>j(e)&&se(n),open:(e,n)=>j(e)&&se(n),select:(e,n,t,u)=>j(e)&&se(n)&&De(t)&&(u===void 0||u instanceof Promise)};var at=F({name:"ElMenu",props:lt,emits:st,setup(e,{emit:n,slots:t,expose:u}){const r=be(),C=r.appContext.config.globalProperties.$router,c=k(),f=w("menu"),s=w("sub-menu"),d=k(-1),m=k(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),M=k(e.defaultActive),I=k({}),N=k({}),Y=p(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),V=()=>{const o=M.value&&I.value[M.value];if(!o||e.mode==="horizontal"||e.collapse)return;o.indexPath.forEach(a=>{const g=N.value[a];g&&_(a,g.indexPath)})},_=(o,l)=>{m.value.includes(o)||(e.uniqueOpened&&(m.value=m.value.filter(a=>l.includes(a))),m.value.push(o),n("open",o,l))},A=(o,l)=>{const a=m.value.indexOf(o);a!==-1&&m.value.splice(a,1),n("close",o,l)},z=({index:o,indexPath:l})=>{m.value.includes(o)?A(o,l):_(o,l)},D=o=>{(e.mode==="horizontal"||e.collapse)&&(m.value=[]);const{index:l,indexPath:a}=o;if(!(l===void 0||a===void 0))if(e.router&&C){const g=o.route||l,h=C.push(g).then(T=>(T||(M.value=l),T));n("select",l,a,{index:l,indexPath:a,route:g},h)}else M.value=l,n("select",l,a,{index:l,indexPath:a})},ee=o=>{const l=I.value,a=l[o]||M.value&&l[M.value]||l[e.defaultActive];a?M.value=a.index:M.value=o},te=()=>{var o,l;if(!c.value)return-1;const a=Array.from((l=(o=c.value)==null?void 0:o.childNodes)!=null?l:[]).filter(i=>i.nodeName!=="#text"||i.nodeValue),g=64,h=Number.parseInt(getComputedStyle(c.value).paddingLeft,10),T=Number.parseInt(getComputedStyle(c.value).paddingRight,10),P=c.value.clientWidth-h-T;let $=0,x=0;return a.forEach((i,v)=>{$+=i.offsetWidth||0,$<=P-g&&(x=v+1)}),x===a.length?-1:x},S=(o,l=33.34)=>{let a;return()=>{a&&clearTimeout(a),a=setTimeout(()=>{o()},l)}};let O=!0;const R=()=>{const o=()=>{d.value=-1,Re(()=>{d.value=te()})};O?o():S(o)(),O=!1};K(()=>e.defaultActive,o=>{I.value[o]||(M.value=""),ee(o)}),K(()=>e.collapse,o=>{o&&(m.value=[])}),K(I.value,V);let L;We(()=>{e.mode==="horizontal"&&e.ellipsis?L=Ne(c,R).stop:L==null||L()});{const o=h=>{N.value[h.index]=h},l=h=>{delete N.value[h.index]};ie("rootMenu",ve({props:e,openedMenus:m,items:I,subMenus:N,activeIndex:M,isMenuPopup:Y,addMenuItem:h=>{I.value[h.index]=h},removeMenuItem:h=>{delete I.value[h.index]},addSubMenu:o,removeSubMenu:l,openMenu:_,closeMenu:A,handleMenuItemClick:D,handleSubMenuClick:z})),ie(`subMenu:${r.uid}`,{addSubMenu:o,removeSubMenu:l,mouseInChild:k(!1),level:0})}return fe(()=>{e.mode==="horizontal"&&new Qe(r.vnode.el,f.namespace.value)}),u({open:l=>{const{indexPath:a}=N.value[l];a.forEach(g=>_(g,a))},close:A,handleResize:R}),()=>{var o,l;let a=(l=(o=t.default)==null?void 0:o.call(t))!=null?l:[];const g=[];if(e.mode==="horizontal"&&c.value){const P=Ue(a),$=d.value===-1?P:P.slice(0,d.value),x=d.value===-1?[]:P.slice(d.value);(x==null?void 0:x.length)&&e.ellipsis&&(a=$,g.push(b(Me,{index:"sub-menu-more",class:s.e("hide-arrow")},{title:()=>b(ye,{class:s.e("icon-more")},{default:()=>b(je)}),default:()=>x})))}const h=Se(e,0),T=b("ul",{key:String(e.collapse),role:"menubar",ref:c,style:h.value,class:{[f.b()]:!0,[f.m(e.mode)]:!0,[f.m("collapse")]:e.collapse}},[...a,...g]);return e.collapseTransition&&e.mode==="vertical"?b(tt,()=>T):T}}});const ut=pe({index:{type:ue([String,null]),default:null},route:{type:ue([String,Object])},disabled:Boolean}),rt={click:e=>j(e.index)&&Array.isArray(e.indexPath)},ae="ElMenuItem",it=F({name:ae,components:{ElTooltip:ke},props:ut,emits:rt,setup(e,{emit:n}){const t=be(),u=U("rootMenu"),r=w("menu"),C=w("menu-item");u||Q(ae,"can not inject root menu");const{parentMenu:c,indexPath:f}=xe(t,qe(e,"index")),s=U(`subMenu:${c.value.uid}`);s||Q(ae,"can not inject sub menu");const d=p(()=>e.index===u.activeIndex),m=ve({index:e.index,indexPath:f,active:d}),M=()=>{e.disabled||(u.handleMenuItemClick({index:e.index,indexPath:f.value,route:e.route}),n("click",m))};return fe(()=>{s.addSubMenu(m),u.addMenuItem(m)}),Ce(()=>{s.removeSubMenu(m),u.removeMenuItem(m)}),{parentMenu:c,rootMenu:u,active:d,nsMenu:r,nsMenuItem:C,handleClick:M}}});function ct(e,n,t,u,r,C){const c=Fe("el-tooltip");return W(),Z("li",{class:X([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:n[0]||(n[0]=(...f)=>e.handleClick&&e.handleClick(...f))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(W(),Ie(c,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:re(()=>[B(e.$slots,"title")]),default:re(()=>[ce("div",{class:X(e.nsMenu.be("tooltip","trigger"))},[B(e.$slots,"default")],2)]),_:3},8,["effect"])):(W(),Z(he,{key:1},[B(e.$slots,"default"),B(e.$slots,"title")],64))],2)}var Ee=de(it,[["render",ct],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const dt={title:String},pt="ElMenuItemGroup",mt=F({name:pt,props:dt,setup(){return{ns:w("menu-item-group")}}});function vt(e,n,t,u,r,C){return W(),Z("li",{class:X(e.ns.b())},[ce("div",{class:X(e.ns.e("title"))},[e.$slots.title?B(e.$slots,"title",{key:1}):(W(),Z(he,{key:0},[Ve(He(e.title),1)],64))],2),ce("ul",null,[B(e.$slots,"default")])],2)}var Te=de(mt,[["render",vt],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const It=Oe(at,{MenuItem:Ee,MenuItemGroup:Te,SubMenu:Me}),Ct=me(Ee);me(Te);const kt=me(Me);export{Ct as E,kt as a,It as b};
