import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import messages from './i18n/i18n'

Vue.config.productionTip = false
Vue.use(VueI18n)

const lang = window.navigator.language ? window.navigator.language.substr(0, 2) : 'en'

const i18n = new VueI18n({
  locale: lang,
  fallbackLocale: 'en',
  messages
})

new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')
