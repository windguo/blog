
<template>
  <div class="container">
    <h1>{{ post.title }}</h1>
    <pre>{{ post.newstime }} {{ post.diggtop }} {{ post.username }}</pre>
    <ul>
      <li v-for="(wangming, index) in posts" :key="index">
        <NuxtLink :to="{ name: 'wangming-id', params: { id: wangming.id } }">
          {{ wangming.title }}
        </NuxtLink>
        <div class="bottom">{{wangming.newstime}}</div>
      </li>
    </ul>
    <p>
      <NuxtLink to="/">
        返回首页
      </NuxtLink>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    let [pageRes, countRes] = await Promise.all([
      axios.get(`https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=content&id=${params.id}`),
      axios.get(`https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=column&classid=0`)
    ]);
    console.log('pageRes',pageRes.data.result);
    console.log('countRes',countRes.data.result);
    
    return {
      post:pageRes.data.result,
      posts:countRes.data.result
    };return false;
    const { data } = await axios.get(`https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=content&id=${params.id}`)
    return { post: data.result }
  },
  head() {
    return {
      title: this.post.title + ' 网名大全 wangming.org.cn'
    }
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  border: 1px #ddd solid;
  padding: 20px;
  text-align: left;
}
ul li a {
  color: gray;
}
p {
  font-size: 20px;
}
a {
  color: #41B883;
}
</style>
