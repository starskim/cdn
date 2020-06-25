(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{34:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=()=>l.a.createElement("div",{className:"container text-center",title:"Loading..."},l.a.createElement("i",{className:"fas fa-sync fa-spin"}))},39:function(e,a,t){"use strict";var n,l;t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return l})),function(e){e[e.Banned=-1]="Banned",e[e.Normal=0]="Normal",e[e.Admin=1]="Admin",e[e.SuperAdmin=2]="SuperAdmin"}(n||(n={})),function(e){e.Steve="steve",e.Alex="alex",e.Cape="cape"}(l||(l={}))},434:function(e,a,t){"use strict";t.r(a);var n,l=t(0),r=t.n(l),c=t(31),s=t(55),i=t(1),m=t(6),o=t(39),d=t(4),u=t(34),p=t(50),b=t(59),E=t(33);!function(e){e[e.Pending=0]="Pending",e[e.Resolved=1]="Resolved",e[e.Rejected=2]="Rejected"}(n||(n={}));const v=E.a.div`
  width: 240px;
  transition-property: box-shadow;
  transition-duration: 0.3s;

  .card-body {
    flex: unset;
    display: flex;
    justify-content: center;
  }

  img {
    cursor: pointer;
    width: 170px;
    height: 170px;
  }

  .card-footer {
    flex: 1 1 auto;
    * {
      margin: 2.5px 0;
    }
  }
`;var g=e=>{var a,t;const{report:l}=e;return r.a.createElement(v,{className:"card mr-3 mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("b",null,Object(i.a)("skinlib.show.uploader"),": "),r.a.createElement("span",{className:"mr-1"},null===(a=l.texture_uploader)||void 0===a?void 0:a.nickname),"(UID: ",l.uploader,")"),r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{src:`${blessing.base_url}/preview/${l.tid}?height=150`,alt:l.tid.toString(),className:"card-img-top",onClick:()=>e.onClick(l.texture)})),r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,l.status===n.Pending?r.a.createElement("span",{className:"badge bg-warning"},Object(i.a)("report.status.0")):l.status===n.Resolved?r.a.createElement("span",{className:"badge bg-success"},Object(i.a)("report.status.1")):r.a.createElement("span",{className:"badge bg-danger"},Object(i.a)("report.status.2")),r.a.createElement("span",{className:"badge bg-info ml-1"},"TID: ",l.tid)),r.a.createElement("div",{className:"dropdown"},r.a.createElement("a",{className:"text-gray",href:"#","data-toggle":"dropdown","aria-expanded":"false"},r.a.createElement("i",{className:"fas fa-cog"})),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right"},r.a.createElement("a",{href:`${blessing.base_url}/skinlib/show/${l.tid}`,className:"dropdown-item",target:"_blank"},r.a.createElement("i",{className:"fas fa-share-square mr-2"}),Object(i.a)("user.viewInSkinlib")),r.a.createElement("a",{href:"#",className:"dropdown-item",onClick:e.onBan},r.a.createElement("i",{className:"fas fa-user-slash mr-2"}),Object(i.a)("report.ban")),r.a.createElement("a",{href:"#",className:"dropdown-item dropdown-item-danger",onClick:e.onDelete},r.a.createElement("i",{className:"fas fa-trash mr-2"}),Object(i.a)("skinlib.show.delete-texture")),r.a.createElement("a",{href:"#",className:"dropdown-item",onClick:e.onReject},r.a.createElement("i",{className:"fas fa-thumbs-down mr-2"}),Object(i.a)("report.reject"))))),r.a.createElement("div",null,r.a.createElement("b",null,Object(i.a)("report.reporter"),": "),r.a.createElement("span",{className:"mr-1"},null===(t=l.informer)||void 0===t?void 0:t.nickname),"(UID: ",l.reporter,")"),r.a.createElement("details",null,r.a.createElement("summary",{className:"text-truncate"},r.a.createElement("b",null,Object(i.a)("report.reason"),": "),l.reason),r.a.createElement("div",null,l.reason),r.a.createElement("div",null,r.a.createElement("small",null,Object(i.a)("report.time"),": ",l.report_at)))))};const f=r.a.lazy(()=>Promise.all([t.e(0),t.e(4)]).then(t.bind(null,151)));a.default=Object(c.hot)(()=>{const[e,a]=Object(s.a)([]),[t,n]=Object(l.useState)(1),[c,E]=Object(l.useState)(1),[v,N]=Object(l.useState)(!1),[h,j]=Object(l.useState)("status:0 sort:-report_at"),[k,w]=Object(l.useState)(null),y=async()=>{N(!0);const{data:e,last_page:n}=await m.b("/admin/reports/list",{q:h,page:t});E(n),a(()=>e),N(!1)};Object(l.useEffect)(()=>{y()},[t]);const x=async(e,t,n)=>{const l=await m.d(`/admin/reports/${e.id}`,{action:n});0===l.code?(d.b.success(l.message),a(e=>{e[t].status=l.data.status})):d.b.error(l.message)},O=k&&`${blessing.base_url}/textures/${k.hash}`;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("form",{className:"input-group",onSubmit:e=>{e.preventDefault(),y()}},r.a.createElement("input",{type:"text",className:"form-control",title:Object(i.a)("vendor.datatable.search"),value:h,onChange:e=>{j(e.target.value)}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-primary",type:"submit"},Object(i.a)("vendor.datatable.search"))))),v?r.a.createElement("div",{className:"card-body"},r.a.createElement(u.a,null)):0===e.length?r.a.createElement("div",{className:"card-body text-center"},Object(i.a)("general.noResult")):r.a.createElement("div",{className:"card-body d-flex flex-wrap"},e.map((e,a)=>r.a.createElement(g,{key:e.id,report:e,onClick:w,onBan:()=>x(e,a,"ban"),onDelete:()=>(async(e,a)=>{try{await Object(d.a)({text:Object(i.a)("skinlib.deleteNotice"),okButtonType:"danger"})}catch(e){return}x(e,a,"delete")})(e,a),onReject:()=>x(e,a,"reject")}))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"float-right"},r.a.createElement(p.a,{page:t,totalPages:c,onChange:n}))))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(b.a,null)},r.a.createElement(f,Object.assign({},{[(null==k?void 0:k.type)===o.a.Cape?o.a.Cape:"skin"]:O},{isAlex:(null==k?void 0:k.type)===o.a.Alex})))))})},50:function(e,a,t){"use strict";var n=t(0),l=t.n(n);var r=e=>{const a=["page-item"];e.active&&a.push("active"),e.disabled&&a.push("disabled");return l.a.createElement("li",{className:a.join(" "),onClick:a=>{a.preventDefault(),!e.disabled&&e.onClick&&e.onClick()}},l.a.createElement("a",{href:"#",className:"page-link","aria-disabled":e.disabled},e.children))};const c="‹",s="›";a.a=e=>{const{page:a,totalPages:t,onChange:n}=e;return t<1?null:l.a.createElement("ul",{className:"pagination"},l.a.createElement(r,{disabled:1===a,onClick:()=>n(a-1)},c),t<8?Array.from({length:t}).map((e,t)=>l.a.createElement(r,{key:t,active:a===t+1,onClick:()=>n(t+1)},t+1)):l.a.createElement(l.a.Fragment,null,a<4?[1,2,3,4].map(e=>l.a.createElement(r,{key:e,active:a===e,onClick:()=>n(e)},e)):l.a.createElement(r,{onClick:()=>n(1)},"1"),l.a.createElement(r,{disabled:!0},"..."),a>3&&a<t-2&&l.a.createElement(l.a.Fragment,null,[a-1,a,a+1].map(e=>l.a.createElement(r,{key:e,active:a===e,onClick:()=>n(e)},e)),l.a.createElement(r,{disabled:!0},"...")),t-a<3?[t-3,t-2,t-1,t].map(e=>l.a.createElement(r,{key:e,active:a===e,onClick:()=>n(e)},e)):l.a.createElement(r,{onClick:()=>n(t)},t)),l.a.createElement(r,{disabled:a===t,onClick:()=>n(a+1)},s))}},59:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(1);a.a=()=>l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("h3",{className:"card-title"},l.a.createElement("span",null,Object(r.a)("general.texturePreview"))))),l.a.createElement("div",{className:"card-body"}))}}]);