import{d as V,b as l,i as I,ag as f,o as n,c as _,F as v,a8 as B,O as i,a9 as S,u as g,P as y,T,n as E,U as F}from"./@vue-46b49e78.js";import{B as K}from"./@element-plus-5404d42b.js";import{d as O}from"./element-plus-2d1d410d.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import"./lodash-es-2e98bc53.js";import"./@vueuse-5cf8638e.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-6aac7dfa.js";import"./@intlify-9e8a497c.js";import"./source-map-7d7e1c08.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-b6f35736.js";const R=V({__name:"TagList",props:{defTags:{default:()=>[]},selectedTags:{default:()=>[]}},emits:["update"],setup(h,{emit:x}){const c=h,o=l(""),t=l([]),p=l(c.defTags),u=l(!1),m=l();I(()=>{c.selectedTags.forEach(e=>{t.value.push(e)})});const C=e=>{t.value.splice(t.value.indexOf(e),1)},k=()=>{u.value=!0,E(()=>{m.value.focus()})},d=()=>{o.value&&(t.value.push(o.value),t.value=[...new Set(t.value)]),u.value=!1,o.value="",x("update",t.value)},w=(e,a)=>{const r=e?p.value.filter(b(e)):p.value;a(r)},b=e=>a=>a.value.toLowerCase().indexOf(e.toLowerCase())===0;return(e,a)=>{const r=f("el-tag"),L=f("el-button");return n(),_(v,null,[(n(!0),_(v,null,B(t.value,s=>(n(),i(r,{key:s,closable:"","disable-transitions":!1,onClose:U=>C(String(s))},{default:y(()=>[T(F(s),1)]),_:2},1032,["onClose"]))),128)),u.value?(n(),i(g(O),{key:0,modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s),ref_key:"InputRef",ref:m,"fetch-suggestions":w,size:"default",class:"input-new-tag",placeholder:"请选择或输入",onSelect:d,onKeyup:S(d,["enter"]),style:{"margin-left":"10px"}},null,8,["modelValue","onKeyup"])):(n(),i(L,{key:1,class:"button-new-tag",size:"small",icon:g(K),onClick:k,title:"新增"},{default:y(()=>[T("新增")]),_:1},8,["icon"]))],64)}}});const Z=z(R,[["__scopeId","data-v-c8ece781"]]);export{Z as default};
