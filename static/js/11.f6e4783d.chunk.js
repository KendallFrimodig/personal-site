(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[11],{170:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(5),s=n(21),i=function(e){var t=e.label,n=e.link,c=e.value,r=e.format;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{width:"70%",children:t}),Object(a.jsx)("td",{children:n?Object(a.jsx)("a",{href:n,children:r(c)}):r(c)})]})};i.defaultProps={format:function(e){return e},link:null,value:null};var l=i,u=function(e){var t=e.data;return Object(a.jsx)("table",{children:Object(a.jsx)("tbody",{children:t.map((function(e){return Object(a.jsx)(l,{format:e.format,label:e.label,link:e.link,value:e.value},e.label)}))})})},o=n(23),j=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("1993-10-01T09:24:00");r(((Date.now()-e)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(e)}}),[]),Object(a.jsx)(a.Fragment,{children:n})},b=[{key:"age",label:"Current age",value:Object(a.jsx)(j,{})},{key:"countries",label:"Countries visited",value:6,link:""},{key:"phish",label:"Phish Shows Attended",value:8,link:""},{key:"location",label:"Current city",value:"Santa Fe, NM"}],d=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:"Some stats about me"}),Object(a.jsx)(u,{data:b})]})},h=n(157),f=n.n(h),O=n(53),x=n(159),m=n(69),v=n.n(m),p=[{label:"Last updated at",key:"pushed_at",link:"https://github.com/kendallfrimodig/personal-site/commits",format:function(e){return v()(e).format("MMMM DD, YYYY")}}],k=function(){var e=Object(c.useState)(p),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useCallback)(Object(x.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/mldangelo/personal-site");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(p.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{value:Object.keys(n).includes(e.key)?n[e.key]:e.value})})));case 7:case"end":return e.stop()}}),e)}))),[]);return Object(c.useEffect)((function(){s()}),[s]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Some stats about this site"}),Object(a.jsx)(u,{data:n})]})};t.default=function(){return Object(a.jsx)(s.a,{title:"Stats",description:"Some statistics about Kendall Frimodig and kendallfrimodig.com",children:Object(a.jsxs)("article",{className:"post",id:"stats",children:[Object(a.jsx)("header",{children:Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h2",{"data-testid":"heading",children:Object(a.jsx)(r.b,{to:"/stats",children:"Stats"})})})}),Object(a.jsx)(d,{}),Object(a.jsx)(k,{})]})})}}}]);
//# sourceMappingURL=11.f6e4783d.chunk.js.map