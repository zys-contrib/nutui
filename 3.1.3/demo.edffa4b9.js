var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a;import{c as i}from"./mobile.a60a85b8.js";import{a as m,m as r,b as u,A as c,B as d,C as g,r as p,o as b,e as h,g as f,j as v,k as y,l as j}from"./vendor.f7062dc0.js";import"./index.e71f5246.js";const{createDemo:w}=i("countup");var z=w({props:{},setup(){const e=m({customNumber:618,bgImage:"https://img10.360buyimg.com/imagetools/jfs/t1/133024/3/2251/2646/5ee7549aE8dc02d7e/de6901b6c72db396.png",startFlag:!1,startFlag2:!1,machineNum:3,bgImage2:"https://img10.360buyimg.com/imagetools/jfs/t1/121466/20/6784/28830/5f06e7f2Edbb8998c/9bdd9e7b24dff9fe.png",prizeLevel:0}),i=r(null);return u((()=>{setInterval((()=>{e.customNumber=Math.floor(601*Math.random()+100)}),5e3)})),d=((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n]);if(a)for(var n of a(t))l.call(t,n)&&s(e,n,t[n]);return e})({},c(e)),t(d,n({scrollAniEnd:t=>{console.log(t?"恭喜中奖！！！":"很遗憾！没有中奖"),setTimeout((()=>{e.startFlag=!1}),300)},startRole:()=>{e.prizeLevel=Math.floor(5*Math.random()+1),console.log(e.prizeLevel,"中奖"),e.startFlag=!0,setTimeout((()=>{i.value.machineLuck()}),500)},startRole2:()=>{e.prizeLevel=-1,console.log(e.prizeLevel,"不中奖"),e.startFlag=!0,setTimeout((()=>{i.value.machineLuck()}),500)},countupMachine:i}));var d}});d("data-v-f4fab49e");const O={class:"demo"},L=f("h2",null,"基础用法",-1),k={class:"show-demo"},E=f("h2",null,"数字滚动",-1),F={class:"show-demo"},I=f("h2",null,"自定义滚动图片展示",-1),M={class:"show-demo"},C=f("h2",null,"抽奖（模拟滚动抽奖）",-1),N={class:"show-demo"},P={class:"btnBtn"},x=j("抽奖"),R=j("不中奖");g(),z.render=function(e,t,n,a,o,l){const s=p("nut-countup"),i=p("nut-button");return b(),h("div",O,[L,f("div",k,[v(s,{"init-num":0,"end-num":200}),v(s,{"init-num":150,"end-num":0,speed:6.18,"to-fixed":2},null,8,["init-num","end-num","speed"]),v(s,{"init-num":500,"end-num":0,speed:17,"to-fixed":2},null,8,["init-num","end-num"])]),E,f("div",F,[v(s,{scrolling:!0,"init-num":17.618,during:600},null,8,["init-num"])]),I,f("div",M,[v(s,{"custom-change-num":e.customNumber,"custom-bg-img":e.bgImage,"custom-spac-num":11,"num-width":33,"num-height":47,during:8e3},null,8,["custom-change-num","custom-bg-img"])]),C,f("div",N,[v(s,{ref:"countupMachine",type:"machine","machine-num":e.machineNum,"machine-prize-num":5,"machine-prize-level":e.prizeLevel,"custom-bg-img":e.bgImage2,"num-width":100,"num-height":100,during:3e3,onScrollEnd:e.scrollAniEnd},null,8,["machine-num","machine-prize-level","custom-bg-img","onScrollEnd"]),f("div",P,[v(i,{type:"danger",onClick:e.startRole,disabled:e.startFlag},{default:y((()=>[x])),_:1},8,["onClick","disabled"]),v(i,{type:"danger",onClick:e.startRole2,disabled:e.startFlag},{default:y((()=>[R])),_:1},8,["onClick","disabled"])])])])},z.__scopeId="data-v-f4fab49e";export{z as default};