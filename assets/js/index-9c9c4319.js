import{u as y}from"./vue-i18n-d37bc68d.js";import{s as C}from"./pinia-f5f9267e.js";import{u as w,L as m}from"./index-44fff2cd.js";import{d as c,_ as U,j as k,i as L,ag as n,o as V,c as N,V as a,P as i,a as t,U as o,T as r,u as G}from"./@vue-46b49e78.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import"./@intlify-9e8a497c.js";import"./source-map-7d7e1c08.js";import"./vue-efe7a2be.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-38d1e73f.js";import"./js-cookie-cf83ad76.js";import"./@element-plus-5404d42b.js";import"./nprogress-8d2808ea.js";import"./axios-a342f982.js";import"./qs-bbfcbdf3.js";import"./side-channel-eafc5c70.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-7b08a46e.js";import"./element-plus-2d1d410d.js";import"./lodash-es-2e98bc53.js";import"./@vueuse-5cf8638e.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-6aac7dfa.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-b6f35736.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-20080f74.js";import"./moment-a9aaa855.js";const B={class:"upgrade-dialog"},E={class:"upgrade-title"},O={class:"upgrade-title-warp"},z={class:"upgrade-title-warp-txt"},A={class:"upgrade-title-warp-version"},H={class:"upgrade-content"},I={class:"mt5"},S={class:"upgrade-content-desc mt5"},j={class:"upgrade-btn"},D=c({name:"layoutUpgrade"}),M=c({...D,setup(P){const{t:p}=y(),_=w(),{themeConfig:u}=C(_),e=U({isUpgrade:!1,version:"2.4.33",isLoading:!1,btnTxt:""}),g=k(()=>u.value),f=()=>{e.isUpgrade=!1},v=()=>{e.isLoading=!0,e.btnTxt=p("message.upgrade.btnTwoLoading"),setTimeout(()=>{m.clear(),window.location.reload(),m.set("version",e.version)},2e3)},h=()=>{setTimeout(()=>{e.isUpgrade=!0},2e3)};return L(()=>{h(),setTimeout(()=>{e.btnTxt=p("message.upgrade.btnTwo")},200)}),(s,d)=>{const b=n("el-link"),l=n("el-button"),T=n("el-dialog");return V(),N("div",B,[a(T,{modelValue:e.isUpgrade,"onUpdate:modelValue":d[0]||(d[0]=x=>e.isUpgrade=x),width:"300px","destroy-on-close":"","show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1},{default:i(()=>[t("div",E,[t("div",O,[t("span",z,o(s.$t("message.upgrade.title")),1),t("span",A,"v"+o(e.version),1)])]),t("div",H,[r(o(G(g).globalTitle)+" "+o(s.$t("message.upgrade.msg"))+" ",1),t("div",I,[a(b,{type:"primary",class:"font12",href:"https://gitee.com/lyt-top/vue-next-admin/blob/master/CHANGELOG.md",target:"_black"},{default:i(()=>[r(" CHANGELOG.md ")]),_:1})]),t("div",S,o(s.$t("message.upgrade.desc")),1)]),t("div",j,[a(l,{round:"",size:"default",type:"info",text:"",onClick:f},{default:i(()=>[r(o(s.$t("message.upgrade.btnOne")),1)]),_:1}),a(l,{type:"primary",round:"",size:"default",onClick:v,loading:e.isLoading},{default:i(()=>[r(o(e.btnTxt),1)]),_:1},8,["loading"])])]),_:1},8,["modelValue"])])}}});const Ue=$(M,[["__scopeId","data-v-94db5a9a"]]);export{Ue as default};
