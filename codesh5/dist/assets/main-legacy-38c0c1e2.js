System.register(["./el-table-column-legacy-aa4a13aa.js","./index-legacy-37ee8fb2.js","./jianpeidan-legacy-7dfb8f8f.js","./btn_fanhui2-legacy-d0efd4a4.js"],(function(e,a){"use strict";var t,l,n,o,c,i,r,d,b,s,u,p,f,v,h,w,g,x;return{setters:[e=>{t=e.E,l=e.a},e=>{n=e._,o=e.j,c=e.r,i=e.l,r=e.s,d=e.f,b=e.o,s=e.c,u=e.b,p=e.d,f=e.w,v=e.N,h=e.p,w=e.h},e=>{g=e.j},e=>{x=e._}],execute:function(){var a=document.createElement("style");a.textContent=".table-content[data-v-8ce966a1]{display:flex;flex-direction:column;justify-content:space-between}#data-area[data-v-8ce966a1]{flex-grow:1}.btn-area[data-v-8ce966a1]{flex-grow:0}.table-content>.btn-area[data-v-8ce966a1]{justify-content:center}.btn-area img[data-v-8ce966a1]{width:45px}.btn-area div[data-v-8ce966a1]{border-radius:25px;font-size:20px;width:30%;min-height:50px}.btn-area>div[data-v-8ce966a1]:nth-child(1){background-color:var(--btn-color1)}\n",document.head.appendChild(a);const k={setup(){const e=o(),a=c([]);return i((()=>{r({duration:0,message:"加载中..."});let t=JSON.parse(decodeURIComponent(e.query.rowData));g({billId:t.id,billNo:t.billNo}).then((e=>{d(),a.value=e.data.value,a.value.unshift({billNo:"拣配单号",batchNo:"批次号",barcode:"批次编码",weight:"重量",blocks:"块数",unit:"计量单位"})}))})),{onClickLeft:()=>history.back(),tableData:a}}},m={class:"table-content container noTableHeader"},C={class:"btn-area"},y=(e=>(h("data-v-8ce966a1"),e=e(),w(),e))((()=>p("div",null,"返回",-1)));e("default",n(k,[["render",function(e,a,n,o,c,i){const r=v,d=l,h=t;return b(),s("main",null,[u(r,{title:"拣配单明细",class:"page-nav-bar","left-arrow":"",onClickLeft:o.onClickLeft},null,8,["onClickLeft"]),p("div",m,[u(h,{data:o.tableData,border:"",id:"data-area",onRowClick:e.selectRow},{default:f((()=>[u(d,{prop:"billNo",label:"拣配单号",width:"120px;"}),u(d,{prop:"batchNo",label:"批次号",width:"100px;"}),u(d,{prop:"barcode",label:"批次编码",width:"120px;"}),u(d,{prop:"weight",label:"重量"}),u(d,{prop:"blocks",label:"块数"}),u(d,{prop:"unit",label:"计量单位",width:"120px;"})])),_:1},8,["data","onRowClick"]),p("div",C,[p("div",null,[p("img",{src:x,alt:"",onClick:a[0]||(a[0]=(...e)=>o.onClickLeft&&o.onClickLeft(...e))}),y])])])])}],["__scopeId","data-v-8ce966a1"]]))}}}));