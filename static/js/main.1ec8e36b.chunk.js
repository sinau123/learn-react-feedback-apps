(this["webpackJsonpfeedback-ui"]=this["webpackJsonpfeedback-ui"]||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/5000x1500.d232155c.png"},36:function(e,t,a){e.exports=a(47)},41:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),i=a(35),o=a(18),u=a(21),m=a(3),s=(a(41),a(52)),d=function(e){var t=e.children;return r.a.createElement("div",{className:"card"},t)},v=function(e){var t=e.children,a=e.type,n=void 0===a?"button":a,c=e.version,l=void 0===c?"primary":c,i=e.disabled,o=void 0!==i&&i;return r.a.createElement("button",{type:n,disabled:o,className:"btn btn-".concat(l)},t)},E=function(e){var t=e.onChange,a=void 0===t?function(e){}:t,n=e.initSelected,c=function(e){var t=+e.currentTarget.value;a(t)},l=Array.from({length:10},(function(e,t){return t+1}));return r.a.createElement("ul",{className:"rating"},l.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("input",{type:"radio",id:"Rating-".concat(e),name:"rating",value:e,checked:n===e,onChange:c}),r.a.createElement("label",{htmlFor:"Rating-".concat(e)},e))})))},p=function(e){var t=e.handleAdd,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],i=c[1],u=Object(n.useState)(!1),m=Object(o.a)(u,2),p=m[0],f=m[1],b=Object(n.useState)(""),h=Object(o.a)(b,2),g=h[0],N=h[1],x=Object(n.useState)(10),y=Object(o.a)(x,2),k=y[0],O=y[1];return r.a.createElement(d,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=l.trim(),n=a.length;if(!(n<10&&n>25)){var r={text:a,rating:k,id:Object(s.a)()};t(r),i(""),O(10)}}},r.a.createElement("h2",null,"How Would you rate your service with us"),r.a.createElement(E,{initSelected:k,onChange:function(e){return O(e)}}),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",placeholder:"Write a review",value:l,onChange:function(e){var t=e.target.value;0===t.length?(f(!0),N("")):t.length<10?(f(!0),N("Text must be at least 10 characters")):t.length>25?(f(!0),N("Text can't be more than 25 characters")):(f(!1),N("")),i(e.target.value)}}),r.a.createElement(v,{type:"submit",version:"primary",disabled:p},"Send")),r.a.createElement("div",{className:"form__info"},r.a.createElement("div",{className:"form__error-message"},g),r.a.createElement("div",null,l.length,"/",25," Char(s)"))))},f=a(53),b=a(51),h=a(25),g=function(e){var t=e.item,a=t.id,n=t.rating,c=t.text,l=e.handleRemove;return r.a.createElement(d,null,r.a.createElement("div",{className:"num-display"},n),r.a.createElement("button",{className:"close",onClick:function(){return l(a)}},r.a.createElement(h.b,{color:"purple"})),r.a.createElement("div",{className:"text-display"},c))},N=function(e){var t=e.feedback,a=e.handleRemove;return t&&0!==t.length?r.a.createElement("div",{className:"feedback-list"},r.a.createElement(f.a,null,t.map((function(e){return r.a.createElement(b.a.div,{key:e.id,initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-200}},r.a.createElement(g,{key:e.id,item:e,handleRemove:a}))})))):r.a.createElement("div",null,"No Feedback Yet")},x=function(e){var t=e.feedback,a=t.reduce((function(e,t){return e+t.rating}),0)/t.length;return r.a.createElement("div",{className:"feedback-stats"},r.a.createElement("h4",null,t.length," Review(s)"),r.a.createElement("h4",null,"Average Rating:"," ",isNaN(a)?0:+a.toFixed(1).toLocaleString()))},y=function(e){var t=e.text,a=void 0===t?"Feedback UI":t;return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,a)))},k=[{id:"1",rating:10,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae."},{id:"2",rating:9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae."},{id:"3",rating:8,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae."}],O=a(32),j=a.n(O),S=function(e){return n.createElement(d,null,n.createElement("div",{className:"about"},n.createElement("h1",null,"About This Project"),n.createElement("p",null,"Lorem Epsum dolor si amet"),n.createElement("p",null,n.createElement(u.b,{to:"/"},"Go Home"))))},C=function(e){return n.createElement("div",{className:"about-link"},n.createElement(u.b,{to:"/about"},n.createElement(h.a,{size:30})))},w=a(28),F=a.n(w),L=!F.a.env.NODE_ENV||"development"===F.a.env.NODE_ENV;function R(){return L}var q=function(){var e=Object(n.useState)(k),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement(u.a,{basename:R()?void 0:"/learn-react-feedback-apps"},r.a.createElement("div",{className:"container"},R()?"halo":"hola",r.a.createElement("img",{className:"logo",src:j.a,alt:"Logo"}),r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(y,{text:void 0}),r.a.createElement(p,{handleAdd:function(e){return function(e){c([e].concat(Object(i.a)(a)))}(e)}}),r.a.createElement(x,{feedback:a}),r.a.createElement(N,{feedback:a,handleRemove:function(e){return function(e){window.confirm("Are you sure to remove item?")&&c(a.filter((function(t){return t.id!==e})))}(e)}})),r.a.createElement(m.a,{path:"/about",component:S})),r.a.createElement(C,null))},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),A()}},[[36,1,2]]]);
//# sourceMappingURL=main.1ec8e36b.chunk.js.map