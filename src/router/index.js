import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
Vue.use(VueRouter)
// eslint-disable-next-line no-undef
export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/Home' },
    {
      path: '/Home',
      component: Home,
      redirect: '/Welcome',
      children: [
        { path: '/Welcome', component: resolve => require(['@/components/Welcome'], resolve) },
        { path: '/About', component: resolve => require(['@/components/About'], resolve) },
        { path: '/Project', component: resolve => require(['@/components/Project'], resolve) },
        { path: '/Blog', component: resolve => require(['@/components/Blog'], resolve) }
      ]
    },
    { path: '/Music', component: resolve => require(['@/components/Music'], resolve) },
    { path: '/Todo', component: resolve => require(['@/components/Todo'], resolve) },
    { path: '/Login', component: resolve => require(['@/components/Login'], resolve) },
    { path: '/ADjump', component: resolve => require(['@/components/ADjump'], resolve) },
    { path: '/Register', component: resolve => require(['@/components/Register'], resolve) },
    {
      path: '/Server',
      component: resolve => require(['@/components/Server'], resolve),
      redirect: '/Editor',
      children: [
        { path: '/Editor', component: resolve => require(['@/components/ServerView/Editor'], resolve) },
        { path: '/DelBlog', component: resolve => require(['@/components/ServerView/DelBlog'], resolve) }
      ]
    }
  ]
})
