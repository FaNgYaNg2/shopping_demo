import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import reg from '../views/reg.vue'
import home from "@/views/home.vue"
import allUser from '../views/allUser.vue'
import promanager from '../views/promanager.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    component: home,
    children: [{
      path: 'allUser',
      component: allUser
    },{
      path:'promanager',
      component :promanager
    }]
  },
  {
    path: '/reg',
    component: reg
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
