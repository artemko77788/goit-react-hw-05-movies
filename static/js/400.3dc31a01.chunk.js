"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[400],{8942:function(r,e,t){t.d(e,{Z:function(){return c}});var n=t(3504),a="ListItem_item__3+qKK",u=t(184);var c=function(r){var e=r.film;return(0,u.jsx)("li",{className:a,children:(0,u.jsxs)(n.rU,{to:"/movies/".concat(e.id),children:[" ",e.original_title||e.name]})})}},9645:function(r,e,t){t.d(e,{Z:function(){return c}});var n=t(6373),a="Loader_circle__DzuXv",u=t(184),c=function(){return(0,u.jsx)("div",{className:a,children:(0,u.jsx)(n.p2,{height:"100",width:"100",color:"grey",ariaLabel:"loading"})})}},400:function(r,e,t){t.r(e),t.d(e,{default:function(){return l}});var n=t(885),a=t(8942),u="HomePage_title__Iqtik",c=t(184);var i=function(r){var e=r.films;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{className:u,children:"Trending today"}),(0,c.jsx)("ul",{children:e&&e.map((function(r){return(0,c.jsx)(a.Z,{film:r},r.id)}))})]})},s=t(9645),o=t(6094),f=t(2791),p=t(2690),l=function(){var r=(0,f.useState)([]),e=(0,n.Z)(r,2),t=e[0],a=e[1],u=(0,f.useState)(!1),l=(0,n.Z)(u,2),h=l[0],m=l[1],v=(0,f.useState)(o.qb.IDLE),d=(0,n.Z)(v,2),b=d[0],x=d[1];return(0,f.useEffect)((function(){x(o.qb.PENDING),(0,p.E9)().then(a).catch((function(r){return m(r)}),x(o.qb.REJECTED)),x(o.qb.RESOLVED)}),[]),(0,c.jsxs)(c.Fragment,{children:[b===o.qb.PENDING&&(0,c.jsx)(s.Z,{}),b===o.qb.REJECTED&&(0,c.jsxs)("p",{children:["Something went wrong `$",h,"`"]}),(b===o.qb.RESOLVED||0!==t.length)&&(0,c.jsx)(i,{films:t})]})}},6094:function(r,e,t){t.d(e,{MY:function(){return c},am:function(){return u},mD:function(){return a},qb:function(){return n}});var n={IDLE:"idle",REJECTED:"rejected",RESOLVED:"resolved",PENDING:"pending"},a="https://image.tmdb.org/t/p/w1280",u="https://b.rgbimg.com/users/h/hi/hisks/300/mhYExIC.jpg",c="https://parkridgevet.com.au/wp-content/uploads/2020/11/Profile-300x300.png"},2690:function(r,e,t){t.d(e,{E9:function(){return s},G2:function(){return p},h5:function(){return l},rT:function(){return o},vU:function(){return f}});var n=t(5861),a=t(7757),u=t.n(a),c=t(4569),i=t.n(c)().create({url:"",baseURL:"https://api.themoviedb.org/3",params:{api_key:"f7834c478b364ada45f63f10c4befe7b",language:"en-US",include_adult:!1}}),s=function(){var r=(0,n.Z)(u().mark((function r(){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i("/trending/all/day",{});case 3:return e=r.sent,t=e.data,r.abrupt("return",t.results);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",Promise.reject("There is no information ..."));case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""!==e){r.next=2;break}return r.abrupt("return");case 2:return r.prev=2,r.next=5,i("/search/movie",{params:{query:e}});case 5:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 10:return r.prev=10,r.t0=r.catch(2),r.abrupt("return",Promise.reject("There is no information t..."));case 13:case"end":return r.stop()}}),r,null,[[2,10]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""!==e){r.next=2;break}return r.abrupt("return");case 2:return r.prev=2,r.next=5,i("/movie/".concat(e),{});case 5:return t=r.sent,n=t.data,r.abrupt("return",n);case 10:return r.prev=10,r.t0=r.catch(2),r.abrupt("return",Promise.reject("There is no information ..."));case 13:case"end":return r.stop()}}),r,null,[[2,10]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""!==e){r.next=2;break}return r.abrupt("return");case 2:return r.prev=2,r.next=5,i("/movie/".concat(e,"/reviews"),{});case 5:return t=r.sent,n=t.data,r.abrupt("return",n);case 10:return r.prev=10,r.t0=r.catch(2),r.abrupt("return",Promise.reject("There is no information ..."));case 13:case"end":return r.stop()}}),r,null,[[2,10]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""!==e){r.next=2;break}return r.abrupt("return");case 2:return r.prev=2,r.next=5,i("/movie/".concat(e,"/credits"),{});case 5:return t=r.sent,n=t.data,r.abrupt("return",n);case 10:return r.prev=10,r.t0=r.catch(2),r.abrupt("return",Promise.reject("There is no information ..."));case 13:case"end":return r.stop()}}),r,null,[[2,10]])})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=400.3dc31a01.chunk.js.map