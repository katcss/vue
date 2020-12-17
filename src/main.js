import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Kat from '@/katui'
import '@/assets/core.css'
import "tailwindcss/tailwind.css"
import Prism from 'vue-prism-component'
import '@/assets/prism.css'




Vue.use(Kat)
Vue.component('prism', Prism)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
