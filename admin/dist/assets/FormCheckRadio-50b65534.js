import{c as s,b as c,n as r,w as p,ae as m,k as a,y,H as b}from"./index-749301d1.js";const h=["disabled","type","name","value"],V=a("span",{class:"check"},null,-1),k={class:"pl-2"},f={__name:"FormCheckRadio",props:{name:{type:String,required:!0},type:{type:String,default:"checkbox",validator:e=>["checkbox","radio","switch"].includes(e)},label:{type:String,default:null},modelValue:{type:[Array,String,Number,Boolean],default:null},inputValue:{type:[String,Number,Boolean],required:!0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:u}){const t=e,l=s({get:()=>t.modelValue,set:n=>{u("update:modelValue",n)}}),d=s(()=>t.type==="radio"?"radio":"checkbox");return(n,o)=>(c(),r("label",{class:b(e.type)},[p(a("input",{disabled:e.disabled,"onUpdate:modelValue":o[0]||(o[0]=i=>l.value=i),type:d.value,name:e.name,value:e.inputValue},null,8,h),[[m,l.value]]),V,a("span",k,y(e.label),1)],2))}};export{f as _};
