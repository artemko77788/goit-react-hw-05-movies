"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[72],{9645:function(e,r,n){n.d(r,{Z:function(){return i}});var t=n(6373),a="Loader_circle__DzuXv",s=n(184),i=function(){return(0,s.jsx)("div",{className:a,children:(0,s.jsx)(t.p2,{height:"100",width:"100",color:"grey",ariaLabel:"loading"})})}},5072:function(e,r,n){n.r(r),n.d(r,{default:function(){return w}});var t=n(885),a=n(9645),s=n(6094),i=n(501),c=n(6871),u="MovieCard_img__Cc+08",o="MovieCard_wrap__P7j00",l="MovieCard_text__alWKY",d="MovieCard_wraper__5GeRN",p="MovieCard_overview__jewAI",v="MovieCard_container__n6svd",h="MovieCard_button__3hXD2",m=n(184),f=function(e){var r,n,t,a=e.movie,f=e.children,x=a.poster_path,j=a.original_title,b=a.release_date,_=a.vote_average,N=a.overview,w=a.genres;var g,k=(0,c.TH)();return console.log(k),console.log(null===k||void 0===k||null===(r=k.state)||void 0===r?void 0:r.from),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)(i.rU,{to:null!==(n=null===k||void 0===k||null===(t=k.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",children:(0,m.jsx)("button",{type:"button",className:h,children:"Go back"})}),(0,m.jsxs)("div",{className:o,children:[(0,m.jsx)("img",{src:x?s.mD+x:s.am,alt:j,className:u}),(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:d,children:(0,m.jsxs)("p",{className:l,children:[j," ","(".concat(b.substr(0,4),")")]})}),(0,m.jsx)("div",{className:d,children:(0,m.jsxs)("p",{className:l,children:["User score: ",10*_,"%"]})}),(0,m.jsxs)("div",{className:p,children:[(0,m.jsx)("p",{className:l,children:"Overview"}),(0,m.jsx)("p",{className:l,children:N})]}),(0,m.jsxs)("div",{className:p,children:[(0,m.jsx)("p",{className:l,children:"Genres"}),(0,m.jsx)("p",{className:l,children:(g=w,g?g.map((function(e){return e.name})).join(", "):"")})]})]})]})]}),f]})},x=n(2791),j=n(2690),b={list:"MovieDetails_list__y5Rs9",item:"MovieDetails_item__9ATw3",link:"MovieDetails_link__wf74g"},_=(0,x.lazy)((function(){return n.e(483).then(n.bind(n,9483))})),N=(0,x.lazy)((function(){return n.e(200).then(n.bind(n,8200))})),w=function(){var e=(0,x.useState)(null),r=(0,t.Z)(e,2),n=r[0],u=r[1],o=(0,x.useState)(null),l=(0,t.Z)(o,2),d=l[0],p=l[1],v=(0,c.UO)().id,h=(0,x.useState)(s.qb.IDLE),w=(0,t.Z)(h,2),g=w[0],k=w[1],E=(0,c.TH)();return(0,x.useEffect)((function(){k(s.qb.PENDING),(0,j.vU)(v).then(p).catch((function(e){return u(e)}),k(s.qb.REJECTED)),k(s.qb.RESOLVED)}),[v]),(0,m.jsxs)(m.Fragment,{children:[g===s.qb.PENDING&&(0,m.jsx)(a.Z,{}),g===s.qb.REJECTED&&(0,m.jsxs)("p",{children:["`$",n,"`"]}),null===d&&(0,m.jsx)("p",{children:" No information"}),d&&g===s.qb.RESOLVED&&(0,m.jsxs)(f,{movie:d,children:[(0,m.jsxs)("div",{className:b.container,children:[(0,m.jsx)("h3",{className:b.textInf,children:"Aditional Information"}),(0,m.jsxs)("ul",{className:b.list,children:[(0,m.jsx)("li",{className:b.item,children:(0,m.jsx)(i.OL,{to:"cast",className:b.link,state:{from:E},children:"Cast"})}),(0,m.jsx)("li",{className:b.item,children:(0,m.jsx)(i.OL,{to:"reviews",className:b.link,state:{from:E},children:"Reviews"})})]})]}),(0,m.jsx)(x.Suspense,{fallback:(0,m.jsx)("p",{children:"Loading..."}),children:(0,m.jsxs)(c.Z5,{children:[(0,m.jsx)(c.AW,{path:"cast",element:(0,m.jsx)(_,{id:v})}),(0,m.jsx)(c.AW,{path:"reviews",element:(0,m.jsx)(N,{id:v})})]})})]})]})}},6094:function(e,r,n){n.d(r,{MY:function(){return i},am:function(){return s},mD:function(){return a},qb:function(){return t}});var t={IDLE:"idle",REJECTED:"rejected",RESOLVED:"resolved",PENDING:"pending"},a="https://image.tmdb.org/t/p/w1280",s="https://b.rgbimg.com/users/h/hi/hisks/300/mhYExIC.jpg",i="https://parkridgevet.com.au/wp-content/uploads/2020/11/Profile-300x300.png"},2690:function(e,r,n){n.d(r,{E9:function(){return u},G2:function(){return d},h5:function(){return p},rT:function(){return o},vU:function(){return l}});var t=n(5861),a=n(7757),s=n.n(a),i=n(4569),c=n.n(i)().create({url:"",baseURL:"https://api.themoviedb.org/3",params:{api_key:"f7834c478b364ada45f63f10c4befe7b",language:"en-US",include_adult:!1}}),u=function(){var e=(0,t.Z)(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("/trending/all/day",{});case 3:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject("There is no information ..."));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,c("/search/movie",{params:{query:r}});case 5:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",Promise.reject("There is no information t..."));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,c("/movie/".concat(r),{});case 5:return n=e.sent,t=n.data,e.abrupt("return",t);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",Promise.reject("There is no information ..."));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,c("/movie/".concat(r,"/reviews"),{});case 5:return n=e.sent,t=n.data,e.abrupt("return",t);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",Promise.reject("There is no information ..."));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,c("/movie/".concat(r,"/credits"),{});case 5:return n=e.sent,t=n.data,e.abrupt("return",t);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",Promise.reject("There is no information ..."));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=72.ef016689.chunk.js.map