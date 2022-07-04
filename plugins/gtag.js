import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  Vue.use(VueGtag, {
    config: {
      id: 'G-LD498CBMDN',
      enable: process.env.NODE_ENV === 'production'
    }
  }, app.router)
}
