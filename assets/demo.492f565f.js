import{c as t}from"./mobile.4f5c2ce5.js";import{A as e,B as n,r as i,o,c as l,f as c,z as u,j as a}from"./index.d870aa4d.js";const{createDemo:s}=t("steps");var d=s({props:{},setup:()=>({})});const f=u();e("data-v-8a796002");const r={class:"demo"},_=c("h2",null,"基本用法",-1),p=a("1"),h=a("2"),v=a("3"),m=a("4"),g=c("h2",null,"标题和描述信息",-1),x=a("1"),j=c("h2",null,"自定义图标",-1),w=a("1"),y=a("2"),b=a("3"),z=c("h2",null,"竖向步骤条",-1),A={style:{height:"300px"}},B=a("1"),D=a("2"),I=a("3"),k={style:{height:"300px"}},q=a("1"),C=a("2"),E=a("3");n();const F=f(((t,e,n,u,a,s)=>{const d=i("nut-step"),F=i("nut-steps");return o(),l("div",r,[_,c(F,{current:"1"},{default:f((()=>[c(d,{title:"进行中"},{default:f((()=>[p])),_:1}),c(d,{title:"未开始"},{default:f((()=>[h])),_:1}),c(d,{title:"未开始"},{default:f((()=>[v])),_:1}),c(d,{title:"未开始"},{default:f((()=>[m])),_:1})])),_:1}),g,c(F,{current:"2"},{default:f((()=>[c(d,{title:"已完成",content:"步骤描述",icon:"nutui-iconfont nut-icon-wanshangshide"},{default:f((()=>[x])),_:1}),c(d,{title:"进行中",content:"步骤描述"}),c(d,{title:"未开始",content:"步骤描述"})])),_:1}),j,c(F,{current:"1"},{default:f((()=>[c(d,{title:"已完成",icon:"nutui-iconfont nut-icon-notice"},{default:f((()=>[w])),_:1}),c(d,{title:"进行中",icon:"nutui-iconfont nut-icon-notice"},{default:f((()=>[y])),_:1}),c(d,{class:"nut-step-wait",title:"未开始",icon:"nutui-iconfont nut-icon-notice"},{default:f((()=>[b])),_:1})])),_:1}),z,c("div",A,[c(F,{direction:"vertical",current:"2"},{default:f((()=>[c(d,{title:"已完成",icon:"nutui-iconfont nut-icon-wanshangshide",content:"您的订单已经打包完成，商品已发出"},{default:f((()=>[B])),_:1}),c(d,{title:"进行中",content:"您的订单正在配送途中"},{default:f((()=>[D])),_:1}),c(d,{title:"未开始",content:"收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"},{default:f((()=>[I])),_:1})])),_:1})]),c("div",k,[c(F,{direction:"vertical","progress-dot":"",current:"2"},{default:f((()=>[c(d,{title:"已完成",content:"您的订单已经打包完成，商品已发出"},{default:f((()=>[q])),_:1}),c(d,{title:"进行中",content:"您的订单正在配送途中"},{default:f((()=>[C])),_:1}),c(d,{title:"未开始",content:"<p>收货地址为：</p><p>北京市经济技术开发区科创十一街18号院京东大厦</p>"},{default:f((()=>[E])),_:1})])),_:1})])])}));d.render=F,d.__scopeId="data-v-8a796002";export default d;