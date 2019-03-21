<template>
  <section class="container">
    <div>
      <logo />
      <ul>
      <li v-for="(i, index) in reArr" :key="index">
        <NuxtLink :to="{ name: 'i-id', params: { id: i.classid } }">
          {{ i.classname }}
        </NuxtLink>
      </li>
    </ul>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  asyncData({ req, params }) {
    return axios.get('https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=class')
      .then((res) => {
        console.log('_res___',res.data.result);
        return {
          reArr:res.data.result
        }
      })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
