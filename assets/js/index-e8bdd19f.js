import{C as x}from"./cropperjs-3e95362b.js";import{d,_ as C,ag as l,o as I,c as b,V as a,P as r,a as e,T as n,n as S,bb as D,b9 as B}from"./@vue-46b49e78.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const p=s=>(D("data-v-85a57838"),s=s(),B(),s),k={class:"cropper-warp"},y={class:"cropper-warp-left"},z=["src"],N={class:"cropper-warp-right"},R=p(()=>e("div",{class:"cropper-warp-right-title"},"预览",-1)),T={class:"cropper-warp-right-item"},A={class:"cropper-warp-right-value"},M=["src"],U=p(()=>e("div",{class:"cropper-warp-right-label"},"100 x 100",-1)),j={class:"cropper-warp-right-item"},q={class:"cropper-warp-right-value"},E=["src"],L=p(()=>e("div",{class:"cropper-warp-right-label"},"50 x 50",-1)),O={class:"dialog-footer"},P=d({name:"cropper"}),W=d({...P,setup(s,{expose:_}){const o=C({isShowDialog:!1,cropperImg:"",cropperImgBase64:"",cropper:""}),g=t=>{o.cropperImg=t,o.isShowDialog=!0,S(()=>{w()})},m=()=>{o.isShowDialog=!1},h=()=>{m()},u=()=>{},w=()=>{const t=document.querySelector(".cropper-warp-left-img");o.cropper=new x(t,{viewMode:1,dragMode:"none",initialAspectRatio:1,aspectRatio:1,preview:".before",background:!1,autoCropArea:.6,zoomOnWheel:!1,crop:()=>{o.cropperImgBase64=o.cropper.getCroppedCanvas().toDataURL("image/jpeg")}})};return _({openDialog:g}),(t,c)=>{const i=l("el-button"),v=l("el-dialog");return I(),b("div",null,[a(v,{title:"更换头像",modelValue:o.isShowDialog,"onUpdate:modelValue":c[0]||(c[0]=f=>o.isShowDialog=f),width:"769px"},{footer:r(()=>[e("span",O,[a(i,{onClick:h,size:"default"},{default:r(()=>[n("取 消")]),_:1}),a(i,{type:"primary",onClick:u,size:"default"},{default:r(()=>[n("更 换")]),_:1})])]),default:r(()=>[e("div",k,[e("div",y,[e("img",{src:o.cropperImg,class:"cropper-warp-left-img"},null,8,z)]),e("div",N,[R,e("div",T,[e("div",A,[e("img",{src:o.cropperImgBase64,class:"cropper-warp-right-value-img"},null,8,M)]),U]),e("div",j,[e("div",q,[e("img",{src:o.cropperImgBase64,class:"cropper-warp-right-value-img cropper-size"},null,8,E)]),L])])])]),_:1},8,["modelValue"])])}}});const J=V(W,[["__scopeId","data-v-85a57838"]]);export{J as default};
