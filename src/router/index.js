import Vue from 'vue'
import Router from 'vue-router'
import RouterHello from '@/components/RouterHello'
import RouterWorld from '@/components/RouterWorld'
import RouterChild from '@/components/RouterChild'
import RouterQuery from '@/components/RouterQuery'
import RouterRequest from '@/components/RouterRequest'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        component: RouterHello
      },
      {
        path: '/index/:id',
        component: RouterWorld,
        children: [
            {
                path: 'child-route',
                component: RouterChild
            },
            {
                path: 'query',
                component: RouterQuery
            }
        ]
      },
      {
        path:'/request/:id',
        component: RouterRequest
      }
    ]
  })