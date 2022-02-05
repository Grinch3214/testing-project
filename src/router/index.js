import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import SignIn from '@/components/authentication/SignIn'
import SignUp from '@/components/authentication/SignUp'

Vue.use(VueRouter)

const routes = [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: SignIn
    },
    {
      path: '/register',
      name: 'register',
      component: SignUp
    }
  ]
  
  const router = new VueRouter({
    mode: 'history',
    routes
  })

  export default router