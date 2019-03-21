const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#c00' },
  router: {
    base: '/' // 此为根目录，如果有具体目录需求按实际情况写
  },
  /*
  ** Global CSS
  */
  css: [],
  generate: {
    generate: {
      routes: function (callback) {
        axios.get('https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=class')
          .then((res) => {
            var routes = res.data.map((user) => {
              return '/list/' + user.classid
            })
            callback(null, routes)
          })
          .catch(callback)
        };
        axios.get('https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=content')
          .then((res) => {
            var routes = res.data.map((user) => {
              return '/content/' + user.id
            })
            callback(null, routes)
          })
          .catch(callback)
        }
    }
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  }
}
