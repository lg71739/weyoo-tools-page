import{_ as b,c as D,u as P,a as N,e as a}from"./index-44fff2cd.js";import{d as R,aN as L,b as O,_ as H,j as g,G as I,e as S,ag as F,Q as j,W as q,u as r,o as w,c as z,V as p,P as A,O as $,S as G,J}from"./@vue-46b49e78.js";import{s as f}from"./pinia-f5f9267e.js";import"./vue-router-38d1e73f.js";import"./vue-i18n-d37bc68d.js";import"./@intlify-9e8a497c.js";import"./source-map-7d7e1c08.js";import"./vue-efe7a2be.js";import"./js-cookie-cf83ad76.js";import"./@element-plus-5404d42b.js";import"./nprogress-8d2808ea.js";import"./axios-a342f982.js";import"./qs-bbfcbdf3.js";import"./side-channel-eafc5c70.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-7b08a46e.js";import"./element-plus-2d1d410d.js";import"./lodash-es-2e98bc53.js";import"./@vueuse-5cf8638e.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-6aac7dfa.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-b6f35736.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-20080f74.js";import"./moment-a9aaa855.js";import"./vue-demi-71ba0ef2.js";const Q={class:"h100"},K=R({name:"layoutAside"}),Ee=R({...K,setup(U){const M=L(()=>b(()=>import("./index-83eb112f.js"),["assets/js/index-83eb112f.js","assets/js/pinia-f5f9267e.js","assets/js/vue-demi-71ba0ef2.js","assets/js/@vue-46b49e78.js","assets/js/index-44fff2cd.js","assets/js/vue-router-38d1e73f.js","assets/js/vue-i18n-d37bc68d.js","assets/js/@intlify-9e8a497c.js","assets/js/source-map-7d7e1c08.js","assets/js/vue-efe7a2be.js","assets/js/js-cookie-cf83ad76.js","assets/js/@element-plus-5404d42b.js","assets/js/nprogress-8d2808ea.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-a342f982.js","assets/js/qs-bbfcbdf3.js","assets/js/side-channel-eafc5c70.js","assets/js/get-intrinsic-b9397c9a.js","assets/js/has-symbols-e8f3ca0e.js","assets/js/function-bind-22e7ee79.js","assets/js/has-26d28e02.js","assets/js/call-bind-9ceb8f5b.js","assets/js/object-inspect-7b08a46e.js","assets/js/element-plus-2d1d410d.js","assets/js/lodash-es-2e98bc53.js","assets/js/@vueuse-5cf8638e.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-6aac7dfa.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-b6f35736.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-20080f74.js","assets/js/moment-a9aaa855.js","assets/css/index-01086270.css","assets/js/logo-mini-e5e11e88.js","assets/js/_plugin-vue_export-helper-c27b6911.js","assets/css/index-4220e213.css"])),T=L(()=>b(()=>import("./vertical-dbdbd904.js"),["assets/js/vertical-dbdbd904.js","assets/js/index-44fff2cd.js","assets/js/@vue-46b49e78.js","assets/js/pinia-f5f9267e.js","assets/js/vue-demi-71ba0ef2.js","assets/js/vue-router-38d1e73f.js","assets/js/vue-i18n-d37bc68d.js","assets/js/@intlify-9e8a497c.js","assets/js/source-map-7d7e1c08.js","assets/js/vue-efe7a2be.js","assets/js/js-cookie-cf83ad76.js","assets/js/@element-plus-5404d42b.js","assets/js/nprogress-8d2808ea.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-a342f982.js","assets/js/qs-bbfcbdf3.js","assets/js/side-channel-eafc5c70.js","assets/js/get-intrinsic-b9397c9a.js","assets/js/has-symbols-e8f3ca0e.js","assets/js/function-bind-22e7ee79.js","assets/js/has-26d28e02.js","assets/js/call-bind-9ceb8f5b.js","assets/js/object-inspect-7b08a46e.js","assets/js/element-plus-2d1d410d.js","assets/js/lodash-es-2e98bc53.js","assets/js/@vueuse-5cf8638e.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-6aac7dfa.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-b6f35736.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-20080f74.js","assets/js/moment-a9aaa855.js","assets/css/index-01086270.css"])),u=O(),v=D(),B=P(),E=N(),{routesList:y}=f(v),{themeConfig:o}=f(B),{isTagsViewCurrenFull:V}=f(E),l=H({menuList:[],clientWidth:0}),W=g(()=>{const{layout:e,isCollapse:t,menuBar:s}=o.value,i=["#FFFFFF","#FFF","#fff","#ffffff"].includes(s)?"layout-el-aside-br-color":"";if(l.clientWidth<=1e3)if(t){document.body.setAttribute("class","el-popup-parent--hidden");const x=document.querySelector(".layout-container"),d=document.createElement("div");return d.setAttribute("class","layout-aside-mobile-mode"),x.appendChild(d),d.addEventListener("click",c),[i,"layout-aside-mobile","layout-aside-mobile-open"]}else return c(),[i,"layout-aside-mobile","layout-aside-mobile-close"];else return e==="columns"||e==="classic"?t?[i,"layout-aside-pc-1"]:[i,"layout-aside-pc-220"]:t?[i,"layout-aside-pc-64"]:[i,"layout-aside-pc-220"]}),k=g(()=>{let{layout:e,isShowLogo:t}=o.value;return t&&e==="defaults"||t&&e==="columns"}),c=()=>{const e=document.querySelector(".layout-aside-mobile-mode");e==null||e.setAttribute("style","animation: error-img-two 0.3s"),setTimeout(()=>{var s;(s=e==null?void 0:e.parentNode)==null||s.removeChild(e)},300),document.body.clientWidth<1e3&&(o.value.isCollapse=!1),document.body.setAttribute("class","")},m=()=>{if(o.value.layout==="columns")return!1;l.menuList=h(y.value)},h=e=>e.filter(t=>{var s;return!((s=t.meta)!=null&&s.isHide)}).map(t=>(t=Object.assign({},t),t.children&&(t.children=h(t.children)),t)),_=e=>{l.clientWidth=e},C=e=>{let{layout:t}=o.value;if(t!=="columns")return!1;e||a.emit("restoreDefault"),o.value.isColumnsMenuHoverPreload&&v.setColumnsMenuHover(e)};return I(()=>{_(document.body.clientWidth),m(),a.on("setSendColumnsChildren",e=>{l.menuList=e.children}),a.on("setSendClassicChildren",e=>{let{layout:t,isClassicSplitMenu:s}=o.value;t==="classic"&&s&&(e.children.length<=1?o.value.isCollapse=!0:o.value.isCollapse=!1,l.menuList=[],l.menuList=e.children)}),a.on("getBreadcrumbIndexSetFilterRoutes",()=>{m()}),a.on("layoutMobileResize",e=>{_(e.clientWidth),c()})}),S(()=>[o.value.isShowLogoChange,o.value.isShowLogo,o.value.layout,o.value.isClassicSplitMenu],([e,t,s,n])=>{if(e!==t&&u.value&&u.value.update(),s==="classic"&&n)return!1}),S(()=>y.value,()=>{m()}),(e,t)=>{const s=F("el-scrollbar"),n=F("el-aside");return j((w(),z("div",Q,[p(n,{class:J(["layout-aside",r(W)])},{default:A(()=>[r(k)?(w(),$(r(M),{key:0})):G("",!0),p(s,{class:"flex-auto",ref_key:"layoutAsideScrollbarRef",ref:u,onMouseenter:t[0]||(t[0]=i=>C(!0)),onMouseleave:t[1]||(t[1]=i=>C(!1))},{default:A(()=>[p(r(T),{menuList:l.menuList},null,8,["menuList"])]),_:1},512)]),_:1},8,["class"])],512)),[[q,!r(V)]])}}});export{Ee as default};
