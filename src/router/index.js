import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Classes from '@/components/Classes'
import Class from '@/components/Class'
import Groups from '@/components/Groups'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/classes',
      name: 'Classes',
      component: Classes
    },
    {
      path: '/class/:class_id',
      name: 'Class',
      component: Class
    },
    {
      path: '/project/:project_id/groups',
      name: 'Groups',
      component: Groups
    }
  ]
})
