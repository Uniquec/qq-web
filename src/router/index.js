import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main.vue'
import Message from '../views/Message.vue'
import Contact from '../views/Contact.vue'
import Watching from '../views/Watching.vue'
import Dynamic from '../views/Dynamic.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/message'
    },
    {
      path: '/',
      component: Main,
      children: [
        {
          path: 'message',
          name: 'message',
          component: Message
        },
        {
          path: 'contact',
          name: 'contact',
          component: Contact
        },
        {
          path: 'watching',
          name: 'watching',
          component: Watching
        },
        {
          path: 'dynamic',
          name: 'dynamic',
          component: Dynamic
        },
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'register',
          name: 'register',
          component: Register
        }
      ]
    },
    {
      path: '*',
      redirect: '/message'
    }
  ]
})
