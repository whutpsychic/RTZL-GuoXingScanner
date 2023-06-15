import{_ as v,j as r,k as _,a as A,u as g,l as h,m as b,o as p,c as m,b as w,d as a,t as n,N as D,p as N,i as k}from"./index-d0334602.js";const Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAWCAYAAAB64jRmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0E1NTJGNzIwNUU5MTFFQUIwMEZBNjkwMDg5OTE1MzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E1NTJGNzMwNUU5MTFFQUIwMEZBNjkwMDg5OTE1MzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQTU1MkY3MDA1RTkxMUVBQjAwRkE2OTAwODk5MTUzMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQTU1MkY3MTA1RTkxMUVBQjAwRkE2OTAwODk5MTUzMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvuT0QwAAAD9SURBVHjaYgzJqmQYymD11DaCapgYRgAY9eRwASykpG1kEJpdRVE+obY5o8kVhzgnEDcC8R0g/gmlG6HipABqmUORWSxYxLiAeDcQWyGJKQNxHRC7ALErEH8jwlHUModis7DFZAWaYcgAJF5GpMOoZQ7FZmHzZBQBC2OJdBi1zKHYLGyelCVgoAyRDqOWORSbhc2TjwkY+JRIh1HLHIrNwubJ5QQMXEykw6hlDsVmYfNkOxAfw6EeJN5JpMOoZQ7FZmHz5DdosdwExHeB+BeUboKKE1vsU8scis1iwSH+HYjroZgSQC1zKDKLcbQ/OdrVGvXkqCdHPUkDABBgAFw4UwCXTnC4AAAAAElFTkSuQmCC";const M={setup(){let i=r({billNo:"",zhidanriqi:"",jihuashuliang:"",yifashuliang:"",yingjianshuliang:"",shouhuodanwei:"",chehao:""});_();const l=A(),e=g(),o=()=>history.back(),c=()=>{l.push({name:"chooseCarNumber"})};h.await("scanner",s=>{l.push({name:"jianpeiScannedResult",query:{barcode:s}})});const d=()=>{h.scan()};return b(()=>{let s="";e.state.chukudan&&(s=e.state.chukudan,i.billNo=s.billNo,i.zhidanriqi=s.zhidanriqi,i.jihuashuliang=s.jihuashuliang,i.yifashuliang=s.yifashuliang,i.yingjianshuliang=s.yingjianshuliang,i.shouhuodanwei=s.shouhuodanwei),e.state.chukudanListInfo&&(s=e.state.chukudanListInfo,i.billNo=s.billNo,i.zhidanriqi=s.deliveryDate,i.jihuashuliang=s.planNum,i.yifashuliang=s.actualNum,i.yingjianshuliang=parseInt(s.planNum)-parseInt(s.actualNum),i.shouhuodanwei=s.receiveUnit),e.state.carInfo&&(i.chehao=e.state.carInfo.plateNo),e.commit("setChukudan",i)}),{formData:i,onClickLeft:o,onScan:d,selectCarNo:c}}},t=i=>(N("data-v-9823b443"),i=i(),k(),i),G={class:"container"},I={class:"prop-value-div"},j=t(()=>a("div",{class:"label"},"发货单号",-1)),R={class:"value"},y={class:"prop-value-div"},Y=t(()=>a("div",{class:"label"},"制单日期",-1)),f={class:"value"},U={class:"prop-value-div"},C=t(()=>a("div",{class:"label"},"计划数量",-1)),E={class:"value"},S={class:"prop-value-div"},L=t(()=>a("div",{class:"label"},"已发数量",-1)),z={class:"value"},B={class:"prop-value-div"},V=t(()=>a("div",{class:"label"},"应捡数量",-1)),J={class:"value"},Q={class:"prop-value-div"},T=t(()=>a("div",{class:"label"},"收货单位",-1)),H={class:"value"},W={class:"prop-value-div"},O=t(()=>a("div",{class:"label"},"车号",-1)),F={class:"showMoreDiv"},x={class:"value"},X=t(()=>a("img",{src:Z,alt:""},null,-1)),P=[X];function q(i,l,e,o,c,d){const s=D;return p(),m("main",null,[w(s,{title:"出库单内容",class:"page-nav-bar","left-arrow":"",onClickLeft:o.onClickLeft},null,8,["onClickLeft"]),a("div",G,[a("div",I,[j,a("div",R,n(o.formData.billNo),1)]),a("div",y,[Y,a("div",f,n(o.formData.zhidanriqi.substr(0,10)),1)]),a("div",U,[C,a("div",E,n(o.formData.jihuashuliang),1)]),a("div",S,[L,a("div",z,n(o.formData.yifashuliang),1)]),a("div",B,[V,a("div",J,n(o.formData.yingjianshuliang),1)]),a("div",Q,[T,a("div",H,n(o.formData.shouhuodanwei),1)]),a("div",W,[O,a("div",F,[a("div",x,n(o.formData.chehao),1),a("div",{class:"showMore",onClick:l[0]||(l[0]=(...u)=>o.selectCarNo&&o.selectCarNo(...u))},P)])])])])}const $=v(M,[["render",q],["__scopeId","data-v-9823b443"]]);export{$ as default};