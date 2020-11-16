import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Home'),
      children: [
        {
          path: 'tree',
          name: 'Tree',
          component: () => import('@/pages/Tree')
        },
        {
          path: 'search-highlight',
          name: 'SearchHighlight',
          component: () => import('@/pages/SearchHighlight')
        },
        {
          path: 'watermark',
          name: 'Watermark',
          component: () => import('@/pages/Watermark')
        },
        {
          path: 'circle-progress',
          name: 'CircleProgress',
          component: () => import('@/pages/CircleProgress')
        },
        {
          path: 'outline',
          name: 'Outline',
          component: () => import('@/pages/Outline')
        },
        {
          path: 'ellipsis',
          name: 'Ellipsis',
          component: () => import('@/pages/Ellipsis')
        }
      ]
    }
  ]
})