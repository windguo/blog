(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(t,n,e){var content=e(170);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(47).default)("54a0e240",content,!0,{sourceMap:!1})},169:function(t,n,e){"use strict";var r=e(144);e.n(r).a},170:function(t,n,e){(t.exports=e(46)(!1)).push([t.i,".container[data-v-f9914794]{width:70%;margin:auto;text-align:center;padding-top:100px}ul[data-v-f9914794]{list-style-type:none;padding:0}ul li[data-v-f9914794]{border:1px solid #ddd;padding:20px;text-align:left}ul li a[data-v-f9914794]{color:grey}p[data-v-f9914794]{font-size:20px}a[data-v-f9914794]{color:#41b883}",""])},172:function(t,n,e){"use strict";e.r(n);e(45),e(24),e(61);var r=e(86),o=(e(44),e(5)),c=e(145),l=e.n(c),d={asyncData:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(n){var e,o,c,d,f,v,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.params,t.next=3,Promise.all([l.a.get("https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=content&id=".concat(e.id)),l.a.get("https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=column&classid=0")]);case 3:return o=t.sent,c=Object(r.a)(o,2),d=c[0],f=c[1],console.log("pageRes",d.data.result),console.log("countRes",f.data.result),t.abrupt("return",{post:d.data.result,posts:f.data.result});case 13:return v=t.sent,data=v.data,t.abrupt("return",{post:data.result});case 16:case"end":return t.stop()}},t)}));return function(n){return t.apply(this,arguments)}}(),head:function(){return{title:this.post.title+" 网名大全 wangming.org.cn"}}},f=(e(169),e(22)),component=Object(f.a)(d,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("h1",[t._v(t._s(t.post.title))]),t._v(" "),e("pre",[t._v(t._s(t.post.newstime)+" "+t._s(t.post.diggtop)+" "+t._s(t.post.username))]),t._v(" "),e("ul",t._l(t.posts,function(n,r){return e("li",{key:r},[e("NuxtLink",{attrs:{to:{name:"wangming-id",params:{id:n.id}}}},[t._v("\n        "+t._s(n.title)+"\n      ")]),t._v(" "),e("div",{staticClass:"bottom"},[t._v(t._s(n.newstime))])],1)}),0),t._v(" "),e("p",[e("NuxtLink",{attrs:{to:"/"}},[t._v("\n      返回首页\n    ")])],1)])},[],!1,null,"f9914794",null);n.default=component.exports}}]);