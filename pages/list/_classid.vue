
<template>
  <div class="container">
    <h1>Blog</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <NuxtLink :to="{ name: 'content-id', params: { id: post.id } }">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
    <p>
      <NuxtLink to="/">
        Back to home page
      </NuxtLink>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData({ req, params }) {
    return axios.get(`https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=column&classid=${params.classid}`)
      .then((res) => {
        console.log(`https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=column&classid=${params.classid}`);
        return { posts: res.data.result}
      })
  },
  head: {
    title: 'List of posts'
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
