import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faGithub, faInstagram, faStrava, faWhatsapp, faHtml5, faVuejs, faAndroid, faBootstrap, faJs, faNpm, faPhp, faCss3 } from '@fortawesome/free-brands-svg-icons'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

library.add(faTwitter, faFacebook, faGithub, faInstagram, faStrava, faWhatsapp, faHtml5, faVuejs, faAndroid, faBootstrap, faJs, faNpm, faPhp, faCss3)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
