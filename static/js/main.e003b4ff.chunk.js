(this["webpackJsonptagview-taggram"]=this["webpackJsonptagview-taggram"]||[]).push([[0],{17:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(10),o=a.n(r),i=(a(17),a(2)),u=a.n(i),m=a(3),j=a(5),l=a.n(j),d="https://taggram.herokuapp.com",O=l.a.get("".concat(d,"/me")).then((function(e){return e.body})),b=l.a.get("".concat(d,"/post")).then((function(e){return e.body}));function h(){return(h=Object(m.a)(u.a.mark((function e(t){var a,c,n,s,r,o,i=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=!(i.length>1&&void 0!==i[1])||i[1],c=a?"?stable=true":"",e.next=4,b;case 4:return n=e.sent,s=n.uuid,e.next=8,O;case 8:return r=e.sent,o=r.username,e.abrupt("return",l.a.post("".concat(d,"/posts/").concat(s,"/comments").concat(c)).send({username:o,message:t}).set("Accept","application/json"));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=a(4);a(28);function f(){var e=Object(n.useState)({username:"",avatar:""}),t=Object(p.a)(e,2),a=t[0],s=t[1];function r(){return(r=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O.then((function(e){var t=e.username,a=e.avatar;s({username:t,avatar:a})})).catch((function(){}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){r.apply(this,arguments)}()}),[]),Object(c.jsx)("header",{className:"taggram-header",children:Object(c.jsxs)("div",{className:"content-container",children:[Object(c.jsx)("img",{className:"logo",alt:"logo",src:"./images/logo.svg"}),Object(c.jsxs)("div",{className:"logged-user",children:[Object(c.jsx)("p",{children:a.username}),a.avatar?Object(c.jsx)("img",{className:"avatar",src:a.avatar}):Object(c.jsx)("div",{className:"avatar empty"})]})]})})}var v=a(11);a(29),a(30);function g(e){var t=e.image,a=e.name,n=e.text,s=e.time;return Object(c.jsxs)("div",{className:"comment",children:[t?Object(c.jsx)("img",{src:t,className:"comment-image"}):Object(c.jsx)("div",{className:"comment-image empty"}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{className:"content",children:[Object(c.jsx)("strong",{children:a})," ",n]}),Object(c.jsx)("p",{className:"time",children:function(){var e=Math.floor((Date.now()-new Date(s))/1e3),t="s";return e/31536e3>=1?(e=Math.floor(e/31536e3),t="y"):e/86400>=1?(e=Math.round(e/86400),t="d"):e/3600>=1?(e=Math.floor(e/3600),t="h"):e/60>=1&&(e=Math.floor(e/60),t="m"),e+t}()})]})]})}function x(){var e=Object(n.useState)({photo:"",user:{},location:{},comments:[],created_at:""}),t=Object(p.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),o=Object(p.a)(r,2),i=o[0],j=o[1],l=Object(n.useState)({status:!1,critical:!1}),d=Object(p.a)(l,2),O=d[0],f=d[1];function x(){return(x=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.then((function(e){var t=e.photo,a=e.user,c=e.location,n=e.comments,r=e.created_at;s({photo:t,user:a,location:c,comments:n,created_at:r})})).catch((function(e){f({status:!0,critical:!0})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){x.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){O.status&&(O.critical||setTimeout((function(){f({status:!1,critical:!1})}),3e3))}),[O]);var N=a.photo?Object(c.jsx)("img",{className:"post-image",src:a.photo}):Object(c.jsx)("div",{className:"post-image empty"}),y=Object(c.jsxs)("div",{className:"post-owner-info",children:[a.user.avatar?Object(c.jsx)("img",{src:a.user.avatar}):Object(c.jsx)("div",{className:"empty"}),Object(c.jsxs)("div",{className:"info-area",children:[a.user.username?Object(c.jsx)("p",{className:"name",children:a.user.username}):null,a.location.city&&a.location.country?Object(c.jsx)("p",{className:"location",children:"".concat(a.location.city,", ").concat(a.location.country)}):null]})]}),w=Object(c.jsxs)("div",{className:"comments-details",children:[Object(c.jsx)("strong",{children:"".concat(a.comments.length," coment\xe1rios")}),Object(c.jsx)("p",{children:function(){if(!a.created_at)return"";var e=new Date(a.created_at),t=e.getDate(),c=["JANEIRO","FEVEREIRO","MAR\xc7O","ABRIL","MAIO","JUNHO","JULHO","AGOSTO","SETEMBRO","OUTUBRO","NOVEMBRO","DEZEMBRO"][e.getMonth()];return"".concat(t," DE ").concat(c)}()})]}),E=Object(c.jsxs)("div",{className:"new-comment-area",children:[Object(c.jsx)("textarea",{value:i,onChange:function(e){j(e.target.value)},placeholder:"Comente sobre essa postagem..."}),Object(c.jsx)("button",{onClick:function(){(function(e){return h.apply(this,arguments)})(i,!1).then((function(e){if(a.created_at){var t=Object(v.a)({},a);t.comments=e.body,s(t)}})).catch((function(e){f({status:!0,critical:!1})}))},children:"Enviar"})]}),M=Object(c.jsx)("div",{className:"new-comment-area error",children:Object(c.jsx)("p",{children:O.critical?"Ocorreu um erro ao tentar se conectar ao servidor":"N\xe3o foi poss\xedvel enviar seu coment\xe1rio"})});return Object(c.jsx)("div",{className:"taggram-post",children:Object(c.jsxs)("div",{className:"post-area",children:[N,Object(c.jsxs)("div",{className:"post-details",children:[y,Object(c.jsx)("div",{className:"comments-area",children:a.comments.map((function(e,t){return Object(c.jsx)(g,{image:e.user.avatar,name:e.user.username,text:e.message,time:e.created_at},"comment_id_".concat(t))}))}),Object(c.jsxs)("div",{className:"above-comments",children:[w,O.status?M:E]})]})]})})}a(31);function N(){return Object(c.jsx)("div",{className:"taggram-footer",children:Object(c.jsx)("img",{src:"./images/tagview.svg"})})}var y=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(f,{}),Object(c.jsx)(x,{}),Object(c.jsx)(N,{})]})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),w()}},[[32,1,2]]]);
//# sourceMappingURL=main.e003b4ff.chunk.js.map