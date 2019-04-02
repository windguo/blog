
<template>
  <div class="container">
    <h1>网名</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <NuxtLink :to="{ name: 'posts-id', params: { id: post.id } }">
          {{ post.title }}
        </NuxtLink>
      </li>
      <button @click="loadNext">加载下一页</button>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
var page= 1;
export default {
  asyncData({ req, params }) {
    return axios.get('https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=column&classid=9999&page=1')
      .then((res) => {
        return { posts: res.data.result}
      })
  },
  head: {
    title: '网名'
  },
  data(){
    return {
      posts:[]
    }
  },
  mounted:function(){
    console.log('---goPosts--');
  },
  methods:{
    loadNext:function(){
      page=page+1;
      return axios.get('https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=column&classid=9999&page=' + page)
      .then((res) => {
        this.posts = this.posts.concat(res.data.result)
      })
    }
  }
}
</script>
