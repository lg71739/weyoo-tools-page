import{d as k,_ as F,j as R,i as $,ag as p,u as c,o as a,c as n,V as d,P as b,a1 as E,F as M,a8 as U,O as _,S as f,U as h,a3 as j,T as z}from"./@vue-46b49e78.js";import{u as D,b as G,o as O}from"./vue-router-38d1e73f.js";import{c as P,u as q,o as A,L as S}from"./index-44fff2cd.js";import{s as L}from"./pinia-f5f9267e.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import"./vue-i18n-d37bc68d.js";import"./@intlify-9e8a497c.js";import"./source-map-7d7e1c08.js";import"./vue-efe7a2be.js";import"./js-cookie-cf83ad76.js";import"./@element-plus-5404d42b.js";import"./nprogress-8d2808ea.js";import"./axios-a342f982.js";import"./qs-bbfcbdf3.js";import"./side-channel-eafc5c70.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-7b08a46e.js";import"./element-plus-2d1d410d.js";import"./lodash-es-2e98bc53.js";import"./@vueuse-5cf8638e.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-6aac7dfa.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-b6f35736.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-20080f74.js";import"./moment-a9aaa855.js";import"./vue-demi-71ba0ef2.js";const J={key:0,class:"layout-navbars-breadcrumb"},K={key:0,class:"layout-navbars-breadcrumb-span"},Q={key:1},W={key:2},X=["onClick"],Y=k({name:"layoutBreadcrumb"}),Z=k({...Y,setup(ee){const B=P(),I=q(),{themeConfig:s}=L(I),{routesList:g}=L(B),m=D(),v=G(),e=F({breadcrumbList:[],routeSplit:[],routeSplitFirst:"",routeSplitIndex:1}),V=R(()=>{u(m.path);const{layout:t,isBreadcrumb:r}=s.value;return t==="classic"||t==="transverse"?!1:!!r}),w=t=>{const{redirect:r,path:i}=t;r?v.push(r):v.push(i)},x=()=>{s.value.isCollapse=!s.value.isCollapse,N()},N=()=>{S.remove("themeConfig"),S.set("themeConfig",s.value)},y=t=>{t.forEach(r=>{e.routeSplit.forEach((i,C,l)=>{e.routeSplitFirst===r.path&&(e.routeSplitFirst+=`/${l[e.routeSplitIndex]}`,e.breadcrumbList.push(r),e.routeSplitIndex++,r.children&&y(r.children))})})},u=t=>{if(!s.value.isBreadcrumb)return!1;e.breadcrumbList=[g.value[0]],e.routeSplit=t.split("/"),e.routeSplit.shift(),e.routeSplitFirst=`/${e.routeSplit[0]}`,e.routeSplitIndex=1,y(g.value),(m.name==="home"||m.name==="notFound"&&e.breadcrumbList.length>1)&&e.breadcrumbList.shift(),e.breadcrumbList.length>0&&(e.breadcrumbList[e.breadcrumbList.length-1].meta.tagsViewName=A.setTagsViewNameI18n(m))};return $(()=>{u(m.path)}),O(t=>{u(t.path)}),(t,r)=>{const i=p("SvgIcon"),C=p("el-breadcrumb-item"),l=p("el-breadcrumb");return c(V)?(a(),n("div",J,[d(i,{class:"layout-navbars-breadcrumb-icon",name:c(s).isCollapse?"ele-Expand":"ele-Fold",size:16,onClick:x},null,8,["name"]),d(l,{class:"layout-navbars-breadcrumb-hide"},{default:b(()=>[d(E,{name:"breadcrumb"},{default:b(()=>[(a(!0),n(M,null,U(e.breadcrumbList,(o,T)=>(a(),_(C,{key:o.meta.tagsViewName?o.meta.tagsViewName:o.meta.title},{default:b(()=>[T===e.breadcrumbList.length-1?(a(),n("span",K,[c(s).isBreadcrumbIcon?(a(),_(i,{key:0,name:o.meta.icon,class:"layout-navbars-breadcrumb-iconfont"},null,8,["name"])):f("",!0),o.meta.tagsViewName?(a(),n("div",W,h(o.meta.tagsViewName),1)):(a(),n("div",Q,h(t.$t(o.meta.title)),1))])):(a(),n("a",{key:1,onClick:j(te=>w(o),["prevent"])},[c(s).isBreadcrumbIcon?(a(),_(i,{key:0,name:o.meta.icon,class:"layout-navbars-breadcrumb-iconfont"},null,8,["name"])):f("",!0),z(h(t.$t(o.meta.title)),1)],8,X))]),_:2},1024))),128))]),_:1})]),_:1})])):f("",!0)}}});const Ue=H(Z,[["__scopeId","data-v-20bced06"]]);export{Ue as default};
