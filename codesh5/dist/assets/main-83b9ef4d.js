import{E as R,a as S}from"./el-table-column-c22f4609.js";import{y as T,x,I as E,z as O,A as U,b as m,B as H,J as V,_ as F,K as W,a as z,j as A,r as D,u as J,k as K,l as M,e as _,s as I,o as Q,c as G,d as c,w as y,q as X,g as Y,N as Z,v as $,t as ee,p as ae,h as te}from"./index-99b6d89a.js";import{b as oe,d as se,s as ne}from"./chukudan-e467d923.js";import{_ as le}from"./btn_queren-a649dfc1.js";import{_ as ie}from"./btn_shoudong-49ae805b.js";import{_ as re}from"./btn_tichu-bca5bbb8.js";let L,v;const ce=a=>E(a)?a:{message:a};function ue(){({instance:v}=O({setup(){const{state:a,toggle:u}=U();return()=>m(V,H(a,{"onUpdate:show":u}),null)}}))}const de=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0});let me=de();const pe=()=>{v&&v.toggle(!1)};function B(a){if(T)return v||ue(),a=x({},me,ce(a)),v.open(a),clearTimeout(L),a.duration>0&&(L=setTimeout(pe,a.duration)),v}const fe={setup(){W({duration:3e3});const a=z(),u=A();let n=D([]),t=D([{yingjian:0,yijian:0,queshao:0},{yingjian:"",yijian:0,queshao:""}]);const w=()=>history.back(),d=J();K.await("scanner",e=>{B({message:e}),N(e)});let h=0,i=0;const b=()=>{a.push({name:"manualUnqualifiedBarcodes"})};let r="";const j=(e,l,o)=>{r=X(e)},q=()=>{if(r){let e=n.value.filter(l=>l.barcode!=r.barcode);n.value=e,d.commit("setScandList",n.value),r="",g(e)}else _("请选择要剔除的行！")},P=()=>{if(n.value.length==0){_("没有拣配数据");return}d.state.chukudan;let e=d.state.chukudanListInfo,l=d.state.carInfo,o=d.state.user,s={};s.carNo=l.plateNo,s.carUnit=l.forwardingUnit,s.deliveryNo=e.billNo,s.materialCode=e.materialCode,s.materialId=e.materialDescribeId,s.materialName=e.materialDescribe,s.pickPackage=h,s.pickPerson=(o==null?void 0:o.userId)||"",s.pickWeight=i,s.receiveUnit=e.receiveUnit,s.remark=e.remark,s.sendPlanNo=e.planNo,s.type=e.type,s.unit=e.unit,s.warehouseCode=l.warehouseCode,s.warehouseName=l.warehouseName;let C=[];n.value.forEach(p=>{let f={};f.barcode=p.barcode,f.batchNo=p.batchNo,f.blocks=p.blocks,f.carNo=l.plateNo,f.code=p.code,f.unit=p.unit,f.weight=p.weight,C.push(f)}),I(),ne({pickBill:s,pickBillDetailList:C}).then(p=>{(p.data.state=!0)?(n.value=[],d.commit("setScandList",n.value),Y({message:"拣配成功!",type:"success",className:"toast",overlay:!0}),setTimeout(()=>{a.push({name:"chukudanQuery"})},2e3)):_(p.data.message)})},g=e=>{let l=d.state.chukudanListInfo;t.value[0].yingjian=l.planNum,t.value[0].queshao=l.planNum,h=0,i=0,e.forEach(o=>{h+=o.blocks,i+=o.weight}),t.value[0].yijian=i,t.value[1].yijian=h,i>0&&(t.value[0].queshao=(t.value[0].yingjian-i).toFixed(2)),t.value[0].queshao<0&&_("请求数量过多！")};M(()=>{let l=u.query.barcode,o=d.state.scandList||[];n.value=o,g(o),B({message:l}),N(l)});const N=e=>{if(e){if(!oe(e.trim())){_("条形码不符合规范");return}for(let o=0;o<n.value.length;o++)if(n.value[o].barcode==e){_("该批次已经选择，请勿重复选择！");return}I("加载中"),se(e).then(o=>{o.data.value===!0?_(o.data.message):(n.value.push(o.data.value),d.commit("setScandList",n.value),g(n.value))})}};return{onClickLeft:w,tableData1:n,tableData2:t,onHandle:b,onConfirm:P,selectRow:j,onDelete:q}}},k=a=>(ae("data-v-f75e963c"),a=a(),te(),a),_e={class:"container"},he={class:"btn-area"},ve=k(()=>c("img",{src:le,alt:""},null,-1)),ke=k(()=>c("div",null,"确认",-1)),be=[ve,ke],ge=k(()=>c("img",{src:ie,alt:"",type:"primary"},null,-1)),ye=k(()=>c("div",null,"手动",-1)),we=[ge,ye],Ne=k(()=>c("img",{src:re,alt:"",type:"primary"},null,-1)),Ce=k(()=>c("div",null,"剔除",-1)),De=[Ne,Ce];function Ie(a,u,n,t,w,d){const h=Z,i=S,b=R;return Q(),G("main",null,[m(h,{title:"拣配",class:"page-nav-bar","left-arrow":"",onClickLeft:t.onClickLeft},null,8,["onClickLeft"]),c("div",_e,[m(b,{data:t.tableData1,border:"",id:"data-area1",onRowClick:t.selectRow},{default:y(()=>[m(i,{label:"日期"},{default:y(r=>[$(ee(r.row.proDate.substr(0,10)),1)]),_:1}),m(i,{prop:"barcode",label:"条形码"}),m(i,{prop:"weight",label:"重量"})]),_:1},8,["data","onRowClick"]),m(b,{data:t.tableData2,border:"",id:"data-area2"},{default:y(()=>[m(i,{prop:"yingjian",label:"应拣"}),m(i,{prop:"yijian",label:"已拣"}),m(i,{prop:"queshao",label:"缺少"})]),_:1},8,["data"]),c("div",he,[c("div",{onClick:u[0]||(u[0]=(...r)=>t.onConfirm&&t.onConfirm(...r))},be),c("div",{onClick:u[1]||(u[1]=(...r)=>t.onHandle&&t.onHandle(...r))},we),c("div",{onClick:u[2]||(u[2]=(...r)=>t.onDelete&&t.onDelete(...r))},De)])])])}const Se=F(fe,[["render",Ie],["__scopeId","data-v-f75e963c"]]);export{Se as default};