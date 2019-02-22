import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Login from '@/components/Login'
import ReadMe from '@/components/ReadMe'
import SearchResultPage from '@/components/SearchResultPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/readme',
      name: 'ReadMe',
      component: ReadMe
    },
    {
      path: '/searchresult',
      name: 'SearchResultPage',
      component: SearchResultPage
    }
  ]
})
