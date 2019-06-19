import Vue from 'vue'
import Router from 'vue-router'

import ProductCatalog from '@/components/ProductCatalog'
import ManageProducts from '@/components/ManageProducts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/home', alias: '/', component: ProductCatalog },
    { path: '/manage-products', component: ManageProducts }
  ]
})
