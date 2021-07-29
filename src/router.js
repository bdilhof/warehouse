import Vue from 'vue'
import Router from 'vue-router'

// Page content
import Api from '@/pages/Api'
import Home from '@/pages/Home'
import Location from '@/pages/Location'
import LocationShow from '@/pages/LocationShow'
import LocationHome from '@/pages/LocationHome'
import Product from '@/pages/Product'
import ProductAdd from '@/pages/ProductAdd'

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
      path: '/location',
      name: 'Location',
      component: Location,
      children: [
        {
          path: '',
          component: LocationHome
        },
        {
          path: 'add',
          component: ProductAdd
        },
        {
          path: 'products',
          component: LocationShow
        },
      ]
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '**',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
