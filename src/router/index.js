import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import SignIn from '@/components/authentication/SignIn'
import SignUp from '@/components/authentication/SignUp'
import AboutAutor from '@/components/AboutAutor'
import ArticlePage from '@/components/ArticlePage'
import NotFound from '@/components/NotFound'

Vue.use(VueRouter)

function guardRoute (to, from, next) {
  if(localStorage.getItem('login')) {
    next()
  } else {
    next('/login')
  }
}

const routes = [
    {
      path: '',
      name: 'home',
      component: Home,
      beforeEnter: guardRoute,
    },
    {
      path: '/login',
      name: 'login',
      component: SignIn,
    },
    {
      path: '/register',
      name: 'register',
      component: SignUp,
    },
    {
      path: '/about-autor',
      name: 'about-autor',
      component: AboutAutor,
    },
    {
      path: '/article-page',
      name: 'article-page',
      component: ArticlePage,
      beforeEnter: guardRoute,
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
    }
  ]
  
  const router = new VueRouter({
    mode: 'history',
    routes
  })

  export default router