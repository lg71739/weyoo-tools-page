import{d as u,_ as f,ag as a,o as _,c,V as e,P as r}from"./@vue-46b49e78.js";const i={class:"form-rules-three-container"},g=u({name:"pagesFormRulesThree"}),x=u({...g,setup(b){const l=f({form:{createUser:"",editUser:"",user:"",department:""},rules:{createUser:{required:!0,message:"请输入创建用户",trigger:"blur"},editUser:{required:!0,message:"请输入修改用户",trigger:"blur"},user:{required:!0,message:"请输入所属用户",trigger:"blur"},department:{required:!0,message:"请输入所属部门",trigger:"blur"}}});return(U,t)=>{const s=a("el-input"),m=a("el-form-item"),d=a("el-col"),n=a("el-row"),p=a("el-form");return _(),c("div",i,[e(p,{model:l.form,rules:l.rules,ref:"formRulesThreeRef",size:"default","label-width":"100px",class:"mt35"},{default:r(()=>[e(n,{gutter:35},{default:r(()=>[e(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:r(()=>[e(m,{label:"创建用户",prop:"createUser"},{default:r(()=>[e(s,{modelValue:l.form.createUser,"onUpdate:modelValue":t[0]||(t[0]=o=>l.form.createUser=o),placeholder:"请输入创建用户",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:r(()=>[e(m,{label:"修改用户",prop:"editUser"},{default:r(()=>[e(s,{modelValue:l.form.editUser,"onUpdate:modelValue":t[1]||(t[1]=o=>l.form.editUser=o),placeholder:"请输入修改用户",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:r(()=>[e(m,{label:"所属用户",prop:"user"},{default:r(()=>[e(s,{modelValue:l.form.user,"onUpdate:modelValue":t[2]||(t[2]=o=>l.form.user=o),placeholder:"请输入所属用户",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:r(()=>[e(m,{label:"所属部门",prop:"department"},{default:r(()=>[e(s,{modelValue:l.form.department,"onUpdate:modelValue":t[3]||(t[3]=o=>l.form.department=o),placeholder:"请输入所属部门",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])])}}});export{x as default};
