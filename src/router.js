import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/tests/category/university/Index.vue'
import List from './views/tests/category/university/List'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/',
          name: 'universities',
          component: List
        },
        {
          path: '/universities/:slug',
          name: 'tests',
          component: () => import(/* webpackChunkName: "group-university" */ './views/tests/category/university/Tests.vue')
        },
        {
          path: '/universities/:slug/:test',
          name: 'instructions',
          component: () => import(/* webpackChunkName: "group-university" */ './views/tests/category/university/Instructions.vue')
        },
        {
          path: '/results',
          name: 'tests-results',
          component: () => import(/* webpackChunkName: "group-university" */ './views/tests/results/Index.vue')
        },
        {
          path: '/results/:slug',
          name: 'result-show',
          component: () => import(/* webpackChunkName: "group-university" */ './views/tests/results/Show.vue')
        }
      ]
    },
    {
      path: '/universities/:slug/:test/take-test',
      name: 'test',
      component: () => import(/* webpackChunkName: "group-university" */ './views/take-test/TakeTest.vue')
    },
    {
      path: '/test/tour-guide',
      name: 'tour-guide',
      component: () => import(/* webpackChunkName: "group-university" */ './views/take-test/TestTour.vue')
    },
    {
      path: '/admin',
      component: () => import(/* webpackChunkName: "group-admin" */ './views/admin-panel/Layout.vue'),
      children: [
        {
          path: '/',
          name: 'admin-overview',
          component: () => import(/* webpackChunkName: "group-admin" */ './views/admin-panel/Overview.vue')
        },
        {
          path: 'mcq',
          name: 'admin-mcq',
          component: () => import(/* webpackChunkName: "group-admin" */ './views/admin-panel/mcq/Index.vue')
        },
        {
          path: 'mcq/bank',
          name: 'mcq-bank',
          component: () => import(/* webpackChunkName: "group-admin" */ './views/admin-panel/mcq/List.vue')
        }
      ]
    }
  ]
})
