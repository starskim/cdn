(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{38:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),s=a(2);function c(){Object(n.useEffect)(()=>{Object(s.a)("mounted")},[])}},42:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return c}));var n=a(5);const s=n.b`
  cursor: pointer;
`,c=n.b`
  display: flex;
  justify-content: center;
  align-items: center;
`},421:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(31),i=a(52),r=a(38),l=a(1),u=a(6),o=a(4),m=a(11),p=a(72),h=a(93),g=a(94);t.default=Object(c.hot)(()=>{const[e,t]=Object(n.useState)(""),[a,c]=Object(n.useState)(""),[b,d]=Object(n.useState)(""),[f,v]=Object(n.useState)(""),[j,O]=Object(n.useState)(""),[E,N]=Object(n.useState)(!1),[w,y]=Object(n.useState)(""),S=Object(i.a)("player"),x=Object(n.useRef)(null),C=Object(n.useRef)(null);Object(r.a)();return s.a.createElement("form",{onSubmit:async t=>{if(t.preventDefault(),y(""),a!==b)return y(Object(l.a)("auth.invalidConfirmPwd")),void x.current.focus();N(!0);const{code:n,message:s}=await u.c(m.a.auth.register(),Object.assign({email:e,password:a,captcha:await C.current.execute()},S?{player_name:j}:{nickname:f}));0===n?(o.b.success(s),setTimeout(()=>{window.location.href=`${blessing.base_url}/user`},3e3)):(y(s),C.current.reset()),N(!1)}},s.a.createElement(g.a,{type:"email",required:!0,placeholder:Object(l.a)("auth.email"),value:e,onChange:t}),s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("input",{type:"password",required:!0,minLength:8,maxLength:32,className:"form-control",placeholder:Object(l.a)("auth.password"),value:a,onChange:e=>{c(e.target.value)}}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("div",{className:"input-group-text"},s.a.createElement("i",{className:"fas fa-lock"})))),s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("input",{type:"password",required:!0,minLength:8,maxLength:32,className:"form-control",placeholder:Object(l.a)("auth.repeat-pwd"),ref:x,value:b,onChange:e=>{d(e.target.value)}}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("div",{className:"input-group-text"},s.a.createElement("i",{className:"fas fa-sign-in-alt"})))),S?s.a.createElement("div",{className:"input-group mb-3",title:Object(l.a)("auth.player-name-intro")},s.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:Object(l.a)("auth.player-name"),value:j,onChange:e=>{O(e.target.value)}}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("div",{className:"input-group-text"},s.a.createElement("i",{className:"fas fa-gamepad"})))):s.a.createElement("div",{className:"input-group mb-3",title:Object(l.a)("auth.nickname-intro")},s.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:Object(l.a)("auth.nickname"),value:f,onChange:e=>{v(e.target.value)}}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("div",{className:"input-group-text"},s.a.createElement("i",{className:"fas fa-gamepad"})))),s.a.createElement(h.a,{ref:C}),s.a.createElement(p.a,{type:"warning"},w),s.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-3"},s.a.createElement("a",{href:`${blessing.base_url}/auth/login`},Object(l.a)("auth.login-link")),s.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:E},E?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin mr-1"}),Object(l.a)("auth.registering")):Object(l.a)("auth.register-button"))))})},52:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0);function s(e,t){const[a,s]=Object(n.useState)(t);return Object(n.useEffect)(()=>{s(blessing.extra[e])},[]),a}},72:function(e,t,a){"use strict";var n=a(0),s=a.n(n);const c=new Map([["success","check"],["info","info"],["warning","exclamation-triangle"],["danger","times-circle"]]);t.a=e=>{const{type:t}=e,a=c.get(t);return e.children?s.a.createElement("div",{className:`alert alert-${t}`},s.a.createElement("i",{className:`icon fas fa-${a}`}),e.children):null}},93:function(e,t,a){"use strict";var n=a(0),s=a(5),c=a(145),i=a.n(c),r=a(2),l=a(1),u=a(42);const o=Symbol();t.a=class extends n.Component{constructor(e){super(e),this.execute=async()=>{const e=this.ref.current;return e&&this.state.invisible?new Promise(t=>{const a=Object(r.b)(o,e=>{t(e),a()});e.execute()}):this.state.value},this.reset=()=>{const e=this.ref.current;e?e.reset():this.setState({time:Date.now()})},this.handleValueChange=e=>{this.setState({value:e.target.value})},this.handleVerify=e=>{Object(r.a)(o,e),this.setState({value:e})},this.handleRefresh=()=>{this.setState({time:Date.now()})},this.state={value:"",time:Date.now(),sitekey:blessing.extra.recaptcha,invisible:blessing.extra.invisible},this.ref=n.createRef()}render(){return this.state.sitekey?Object(s.c)("div",{className:"mb-2"},Object(s.c)(i.a,{ref:this.ref,sitekey:this.state.sitekey,size:this.state.invisible?"invisible":"normal",onVerify:this.handleVerify})):Object(s.c)("div",{className:"d-flex"},Object(s.c)("div",{className:"form-group mb-3 mr-2"},Object(s.c)("input",{type:"text",className:"form-control",placeholder:Object(l.a)("auth.captcha"),required:!0,value:this.state.value,onChange:this.handleValueChange})),Object(s.c)("img",{src:`${blessing.base_url}/auth/captcha?v=${this.state.time}`,alt:Object(l.a)("auth.captcha"),css:u.b,height:34,title:Object(l.a)("auth.change-captcha"),onClick:this.handleRefresh}))}}},94:function(e,t,a){"use strict";var n=a(0),s=a(146),c=a.n(s),i=a(5),r=a(2),l=a(42);const u=i.b`
  .dropdown-menu li {
    ${l.b}
  }
`,o=new Set(["qq.com","163.com","gmail.com","hotmail.com"]);t.a=e=>{const[t,a]=Object(n.useState)([]);Object(n.useEffect)(()=>{Object(r.a)("emailDomainsSuggestion",o)},[]);return Object(i.c)("div",{css:u},Object(i.c)(c.a,{suggestions:t,onSuggestionsFetchRequested:({value:e})=>{const t=e.split("@");a([...o].map(e=>`${t[0]}@${e}`))},onSuggestionsClearRequested:()=>{a([])},getSuggestionValue:e=>e,renderSuggestion:e=>e,shouldRenderSuggestions:e=>{return[...o].some(t=>e.endsWith(`@${t}`))||e.length>0&&!e.includes("@")},inputProps:Object.assign({},e,{onChange:(t,a)=>{e.onChange(a.newValue)}}),renderInputComponent:e=>Object(i.c)("div",{className:"input-group"},Object(i.c)("input",Object.assign({className:"form-control"},e)),Object(i.c)("div",{className:"input-group-append"},Object(i.c)("div",{className:"input-group-text"},Object(i.c)("i",{className:"fas fa-envelope"})))),theme:{container:"mb-3",suggestion:"dropdown-item",suggestionsContainer:"dropdown",suggestionsList:`dropdown-menu ${t.length?"show":""}`,suggestionHighlighted:"active"}}))}}}]);