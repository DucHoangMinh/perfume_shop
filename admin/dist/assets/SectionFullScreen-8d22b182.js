import{c as n,a0 as t,ag as i,ah as l,ai as c,b as o,n as u,G as d,H as p}from"./index-749301d1.js";const m={__name:"SectionFullScreen",props:{bg:{type:String,required:!0,validator:e=>["purplePink","pinkRed"].includes(e)}},setup(e){const r=e,a=n(()=>{if(t().isEnabled)return i;switch(r.bg){case"purplePink":return c;case"pinkRed":return l}return""});return(s,g)=>(o(),u("div",{class:p(["flex min-h-screen items-center justify-center",a.value])},[d(s.$slots,"default",{cardClass:"w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl"})],2))}};export{m as _};
