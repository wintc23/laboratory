import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

import Home from '@/pages/Home'
import Tree from '@/pages/Tree'
import SearchHighlight from '@/pages/SearchHighlight'
import Watermark from '@/pages/Watermark'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'tree',
          name: 'Tree',
          component: Tree
        },
        {
          path: 'search-highlight',
          name: 'SearchHighlight',
          component: SearchHighlight
        },
        {
          path: 'watermark',
          name: 'Watermark',
          component: Watermark
        }
      ]
    }
  ]
})
