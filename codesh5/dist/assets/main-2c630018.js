import{E as B,a as j}from"./el-table-column-a0bb2edd.js";import{_ as R,I as P,a as S,k as T,r as N,u as x,l as E,m as U,e as f,s as C,o as H,c as V,b as u,d as c,w as y,q as F,g as W,N as M,v as O,t as Q,p as z,i as A}from"./index-d0334602.js";import{b as G,d as J,s as K}from"./chukudan-87c06866.js";import{_ as X}from"./btn_queren-a649dfc1.js";import{_ as Y}from"./btn_shoudong-49ae805b.js";import{_ as Z}from"./btn_tichu-bca5bbb8.js";const $={setup(){P({duration:3e3});const p=S(),m=T();let l=N([]),a=N([{yingjian:0,yijian:0,queshao:0},{yingjian:"",yijian:0,queshao:""}]);const g=()=>history.back(),r=x();E.await("scanner",e=>{w(e)});let h=0,n=0;const k=()=>{p.push({name:"manualUnqualifiedBarcodes"})};let i="";const I=(e,s,o)=>{i=F(e)},D=()=>{if(i){let e=l.value.filter(s=>s.barcode!=i.barcode);l.value=e,r.commit("setScandList",l.value),i="",b(e)}else f("请选择要剔除的行！")},q=()=>{if(l.value.length==0){f("没有拣配数据");return}r.state.chukudan;let e=r.state.chukudanListInfo,s=r.state.carInfo,o=r.state.userInfo,t={};t.carNo=s.plateNo,t.carUnit=s.forwardingUnit,t.deliveryNo=s.deliveryNo,t.materialCode=e.materialCode,t.materialId=e.materialDescribeId,t.materialName=e.materialDescribe,t.pickPackage=h,t.pickPerson=o.userId,t.pickWeight=n,t.receiveUnit=e.receiveUnit,t.remark=e.remark,t.sendPlanNo=e.billNo,t.type=e.type,t.unit=e.unit,t.warehouseCode=s.warehouseCode,t.warehouseName=s.warehouseName;let L=[];l.value.forEach(d=>{let _={};_.barcode=d.barcode,_.batchNo=d.batchNo,_.blocks=d.blocks,_.carNo=s.plateNo,_.code=d.code,_.unit=d.unit,_.weight=d.weight,L.push(_)}),C(),K({pickBill:t,pickBillDetailList:L}).then(d=>{(d.data.state=!0)?(l.value=[],r.commit("setScandList",l.value),W({message:"拣配成功!",type:"success",className:"toast",overlay:!0}),setTimeout(()=>{p.push({name:"chukudanQuery"})},2e3)):f(d.data.message)})},b=e=>{let s=r.state.chukudanListInfo;a.value[0].yingjian=s.planNum,a.value[0].queshao=s.planNum,h=0,n=0,e.forEach(o=>{h+=o.blocks,n+=o.weight}),a.value[0].yijian=n,a.value[1].yijian=h,n>0&&(a.value[0].queshao=(a.value[0].yingjian-n/1e3).toFixed(4)),a.value[0].queshao<0&&f("请求数量过多！")};U(()=>{let s=m.query.barcode,o=r.state.scandList||[];l.value=o,b(o),w(s)});const w=e=>{if(e){if(!G(e.trim())){f("条形码不符合规范");return}for(let o=0;o<scandList.length;o++)if(scandList[o].barcode==e){f("该批次已经选择，请勿重复选择！");return}C("加载中"),J(e).then(o=>{o.data.value===!0?f(o.data.message):(scandList.push(o.data.value),r.commit("setScandList",scandList),l.value=scandList,b(scandList))})}};return{onClickLeft:g,tableData1:l,tableData2:a,onHandle:k,onConfirm:q,selectRow:I,onDelete:D}}},v=p=>(z("data-v-c99e874f"),p=p(),A(),p),ee={class:"container"},ae={class:"btn-area"},te=v(()=>c("img",{src:X,alt:""},null,-1)),oe=v(()=>c("div",null,"确认",-1)),se=[te,oe],ne=v(()=>c("img",{src:Y,alt:"",type:"primary"},null,-1)),ie=v(()=>c("div",null,"手动",-1)),le=[ne,ie],ce=v(()=>c("img",{src:Z,alt:"",type:"primary"},null,-1)),re=v(()=>c("div",null,"剔除",-1)),de=[ce,re];function ue(p,m,l,a,g,r){const h=M,n=j,k=B;return H(),V("main",null,[u(h,{title:"拣配",class:"page-nav-bar","left-arrow":"",onClickLeft:a.onClickLeft},null,8,["onClickLeft"]),c("div",ee,[u(k,{data:a.tableData1,border:"",id:"data-area1",onRowClick:a.selectRow},{default:y(()=>[u(n,{label:"日期"},{default:y(i=>[O(Q(i.row.proDate.substr(0,10)),1)]),_:1}),u(n,{prop:"barcode",label:"条形码"}),u(n,{prop:"weight",label:"重量"})]),_:1},8,["data","onRowClick"]),u(k,{data:a.tableData2,border:"",id:"data-area2"},{default:y(()=>[u(n,{prop:"yingjian",label:"应拣"}),u(n,{prop:"yijian",label:"已拣"}),u(n,{prop:"queshao",label:"缺少"})]),_:1},8,["data"]),c("div",ae,[c("div",{onClick:m[0]||(m[0]=(...i)=>a.onConfirm&&a.onConfirm(...i))},se),c("div",{onClick:m[1]||(m[1]=(...i)=>a.onHandle&&a.onHandle(...i))},le),c("div",{onClick:m[2]||(m[2]=(...i)=>a.onDelete&&a.onDelete(...i))},de)])])])}const ke=R($,[["render",ue],["__scopeId","data-v-c99e874f"]]);export{ke as default};
