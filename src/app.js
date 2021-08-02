import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft, faTrashAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft, faTrashAlt, faPlus, faMinus)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker-cache.js')
    .then(() => {
      console.log('Service Worker Registered')
    })
}

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
