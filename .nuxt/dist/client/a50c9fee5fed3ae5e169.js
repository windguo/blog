(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{171:function(t,n,e){"use strict";e.r(n);var o=e(145),c=e.n(o),l=1,r={asyncData:function(t){t.req,t.params;return c.a.get("https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=column&classid=9999&page=1&pageSize=10").then(function(t){return{posts:t.data.result}})},head:{title:"网名大全 wangming.org.cn"},methods:{loadNext:function(){var t=this;return l+=1,c.a.get("https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=column&classid=9999&page="+l).then(function(n){t.posts=t.posts.concat(n.data.result)})}}},w=e(22),component=Object(w.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("ul",[t._l(t.posts,function(n,o){return e("li",{key:o},[e("NuxtLink",{attrs:{to:{name:"wangming-id",params:{id:n.id}}}},[t._v("\n        "+t._s(n.title)+"\n      ")]),t._v(" "),e("div",{staticClass:"bottom"},[t._v(t._s(n.newstime))])],1)}),t._v(" "),e("button",{on:{click:t.loadNext}},[t._v("加载下一页")])],2)])},[],!1,null,null,null);n.default=component.exports}}]);