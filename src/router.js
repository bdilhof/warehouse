import Vue from 'vue'
import Router from 'vue-router'

// Page content
import Api from '@/pages/Api'
import Home from '@/pages/Home'

// Fallback page
import PageNotFound from '@/pages/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/api',
      name: 'API',
      component: Api
    },
    {
      path: '**',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
