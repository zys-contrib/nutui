import{c as a}from"./mobile.5eeba8fd.js";import{_ as d}from"./index.4b39d8d5.js";import{m as t,r as n,e as s,j as r,k as e,g as u,B as l,C as o,o as c}from"./vendor.73892dba.js";const{createDemo:m}=a("barrage"),i=m({props:{},setup(){const a=t(""),d=t(null);let n=t(["画美不看","不明觉厉","喜大普奔","男默女泪","累觉不爱","爷青结"]);return{inputVal:a,danmu:d,list:n,addDanmu:function(){let a=Math.random();d.value.add("随机——"+String(a).substr(2,10))}}}}),p={class:"demo"},b=(a=>(l("data-v-dc99d5cc"),a=a(),o(),a))((()=>u("h2",null,"基础用法",-1))),f={class:"test"};var v=d(i,[["render",function(a,d,t,l,o,m){const i=n("nut-barrage"),v=n("nut-cell");return c(),s("div",p,[b,r(v,null,{default:e((()=>[r(i,{ref:"danmu",danmu:a.list},null,8,["danmu"])])),_:1}),u("div",f,[u("button",{onClick:d[0]||(d[0]=(...d)=>a.addDanmu&&a.addDanmu(...d)),class:"add nut-button--primary"},"随机添加")])])}],["__scopeId","data-v-dc99d5cc"]]);export{v as default};