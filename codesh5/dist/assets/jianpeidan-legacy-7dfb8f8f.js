System.register(["./index-legacy-37ee8fb2.js"],(function(e,t){"use strict";var i,a;return{setters:[e=>{i=e.G,a=e.H}],execute:function(){e({a:function(e){return i({url:`${a.api_base_url}/pick/pickBill/v1/${e}`,method:"delete"})},b:function(e,t){return e.pageSize=10,e.pageNum=t,i({url:`${a.api_base_url}/pick/pickBill/v1/queryPickData`,method:"post",data:e})},j:function(e,t){return e.pageSize=10,e.pageNum=t,i({url:`${a.api_base_url}/pick/pickBill/v1/queryPickDataDetail`,method:"post",data:e})}})}}}));