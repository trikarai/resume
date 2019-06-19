import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Resume from './views/resume/Resume.vue'
import Maintenance from './views/Maintenance.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Mainteance',
      component: Maintenance
    },
    {
      path: '/resume',
      name: 'resume',
      props: true,
      component: Resume
    }
    // {
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
