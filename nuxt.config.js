import axios from 'axios'

export default {
  loading: {
    color: '#4FC08D',
    failedColor: '#bf5050',
    duration: 1500
  },
  head: {
    title: 'Default title'
  },
  generate: {
    routes: function () {
      return axios.get('https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=getAllId')
        .then((res) => {
          return res.data.result.map((i) => {
            return '/posts/' + i.id
          })
        })
    }
  }
}
