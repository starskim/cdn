(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{138:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(1),i=t(139),s=t.n(i);a.a=e=>{var a;const t=Object(n.useRef)(null);return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"select-file"},Object(c.a)("skinlib.upload.select-file")),l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"custom-file"},l.a.createElement("input",{type:"file",className:"custom-file-input",id:"select-file",accept:e.accept,title:Object(c.a)("skinlib.upload.select-file"),ref:t,onChange:e.onChange}),l.a.createElement("label",{className:`custom-file-label ${s.a.label}`},null===(a=e.file)||void 0===a?void 0:a.name)),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-default",onClick:()=>{t.current.click()}},Object(c.a)("skinlib.upload.select-file")))))}},139:function(e,a,t){var n=t(12),l=t(140);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var c={insert:"head",singleton:!1},i=(n(e.i,l,c),l.locals?l.locals:{});e.exports=i},140:function(e,a,t){"use strict";t.r(a);var n=t(9),l=t.n(n)()(!1);l.push([e.i,".label__3djMO::after{display:none}",""]),l.locals={label:"label__3djMO"},a.default=l},29:function(e,a,t){a.hot=function(e){return e}},38:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=()=>l.a.createElement("div",{className:"container text-center",title:"Loading..."},l.a.createElement("i",{className:"fas fa-sync fa-spin"}))},395:function(e,a,t){var n=t(12),l=t(396);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var c={insert:"head",singleton:!1},i=(n(e.i,l,c),l.locals?l.locals:{});e.exports=i},396:function(e,a,t){"use strict";t.r(a);var n=t(9),l=t.n(n)()(!1);l.push([e.i,".box__1UZFa{cursor:default;transition-property:box-shadow;transition-duration:.3s}.box__1UZFa:hover{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)}.content__1FQ2F{max-width:calc(100% - 70px)}.header__3qwdO{max-width:calc(100% - 40px)}.title__3rPP0{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.actions__ai6b5 a{transition-property:color;transition-duration:.3s;color:#000}.actions__ai6b5 a:hover{color:#999}.actions__ai6b5 a:not(:last-child){margin-right:9px}.description__2oYix{font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",""]),l.locals={box:"box__1UZFa",content:"content__1FQ2F",header:"header__3qwdO",title:"title__3rPP0",actions:"actions__ai6b5",description:"description__2oYix"},a.default=l},437:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(29),i=t(1),s=t(5),r=t(3),o=t(138),m=t(38),d=t(395),u=t.n(d);var b=e=>{const{plugin:a}=e;return l.a.createElement("div",{className:`info-box mr-3 ${u.a.box}`},l.a.createElement("span",{className:`info-box-icon bg-${a.icon.bg}`},l.a.createElement("i",{className:`${a.icon.faType} fa-${a.icon.fa}`})),l.a.createElement("div",{className:`info-box-content ${u.a.content}`},l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:`d-flex ${u.a.header}`},l.a.createElement("input",{className:"mr-2 d-inline-block",type:"checkbox",checked:a.enabled,title:a.enabled?Object(i.a)("admin.disablePlugin"):Object(i.a)("admin.enablePlugin"),onChange:t=>{t.preventDefault(),t.target.checked?e.onEnable(a):e.onDisable(a)}}),l.a.createElement("strong",{className:`d-inline-block mr-2 ${u.a.title}`},a.title),l.a.createElement("span",{className:"d-none d-sm-inline-block text-gray"},"v",a.version)),l.a.createElement("div",{className:u.a.actions},a.readme&&l.a.createElement("a",{href:`${e.baseUrl}/admin/plugins/readme/${a.name}`,title:Object(i.a)("admin.pluginReadme")},l.a.createElement("i",{className:"fas fa-question"})),a.enabled&&a.config&&l.a.createElement("a",{href:`${e.baseUrl}/admin/plugins/config/${a.name}`,title:Object(i.a)("admin.configurePlugin")},l.a.createElement("i",{className:"fas fa-cog"})),l.a.createElement("a",{href:"#",title:Object(i.a)("admin.deletePlugin"),onClick:()=>e.onDelete(a)},l.a.createElement("i",{className:"fas fa-trash"})))),l.a.createElement("div",{className:`mt-2 ${u.a.description}`},a.description)))};a.default=Object(c.hot)(()=>{const[e,a]=Object(n.useState)(!1),[t,c]=Object(n.useState)([]),[d,u]=Object(n.useState)(null),[p,f]=Object(n.useState)(!1),[g,E]=Object(n.useState)(""),[v,h]=Object(n.useState)(!1);Object(n.useEffect)(()=>{(async()=>{a(!0),c(await s.b("/admin/plugins/data")),a(!1)})()},[]);const N=async e=>{try{await Object(r.a)({title:e.title,text:Object(i.a)("admin.confirmDeletion"),okButtonType:"danger"})}catch(e){return}const{code:a,message:t}=await s.c("/admin/plugins/manage",{action:"delete",name:e.name});if(0===a){const{name:a}=e;c(e=>e.filter(e=>e.name!==a)),r.b.success(t)}else r.b.error(t)},_=Array(Math.ceil(t.length/2)).fill(null).map((e,a)=>t.slice(2*a,2*(a+1)));return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-8"},e?l.a.createElement(m.a,null):_.map((e,a)=>{var t;return l.a.createElement("div",{className:"row",key:`${e[0].name}&${null===(t=e[1])||void 0===t?void 0:t.name}`},e.map((e,t)=>l.a.createElement("div",{className:"col-md-6",key:e.name},l.a.createElement(b,{plugin:e,onEnable:e=>(async(e,a)=>{const{code:t,message:n,data:{reason:i}={reason:[]}}=await s.c("/admin/plugins/manage",{action:"enable",name:e.name});0===t?(r.b.success(n),c(t=>(t.splice(a,1,Object.assign(Object.assign({},e),{enabled:!0})),t.slice()))):Object(r.a)({mode:"alert",children:l.a.createElement("div",null,l.a.createElement("p",null,n),l.a.createElement("ul",null,i.map((e,a)=>l.a.createElement("li",{key:a},e))))})})(e,2*a+t),onDisable:e=>(async(e,a)=>{const{code:t,message:n}=await s.c("/admin/plugins/manage",{action:"disable",name:e.name});0===t?(r.b.success(n),c(t=>(t.splice(a,1,Object.assign(Object.assign({},e),{enabled:!1})),t.slice()))):r.b.error(n)})(e,2*a+t),onDelete:N,baseUrl:blessing.base_url}))))})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"card card-primary card-outline"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h3",{className:"card-title"},Object(i.a)("admin.uploadArchive"))),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",null,Object(i.a)("admin.uploadArchiveNotice")),l.a.createElement(o.a,{file:d,accept:"application/zip",onChange:e=>{u(e.target.files[0])}})),l.a.createElement("div",{className:"card-footer"},l.a.createElement("button",{className:"btn btn-primary float-right",disabled:p,onClick:async()=>{if(!d)return;f(!0);const e=new FormData;e.append("file",d,d.name);const{code:a,message:t}=await s.c("/admin/plugins/upload",e);f(!1),0===a?(r.b.success(t),u(null),c(await s.b("/admin/plugins/data"))):r.b.error(t)}},p?l.a.createElement(m.a,null):Object(i.a)("general.submit")))),l.a.createElement("div",{className:"card card-primary card-outline"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h3",{className:"card-title"},Object(i.a)("admin.downloadRemote"))),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",null,Object(i.a)("admin.downloadRemoteNotice")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"zip-url"},"URL"),l.a.createElement("input",{type:"text",id:"zip-url",className:"form-control",value:g,onChange:e=>{E(e.target.value)}}))),l.a.createElement("div",{className:"card-footer"},l.a.createElement("button",{className:"btn btn-primary float-right",disabled:v,onClick:async()=>{h(!0);const{code:e,message:a}=await s.c("/admin/plugins/wget",{url:g});h(!1),0===e?(r.b.success(a),E(""),c(await s.b("/admin/plugins/data"))):r.b.error(a)}},v?l.a.createElement(m.a,null):Object(i.a)("general.submit"))))))})}}]);