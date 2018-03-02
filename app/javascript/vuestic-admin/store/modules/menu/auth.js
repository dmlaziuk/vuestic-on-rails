/**
 * Created by yarik on 18.7.17.
 */
// import lazyLoading from './lazyLoading'
import Login from 'vuestic-admin/components/auth/login/Login.vue'
import Signup from 'vuestic-admin/components/auth/signup/Signup.vue'

export default {
  name: 'auth',
  meta: {
    expanded: false,
    title: 'menu.auth',
    iconClass: 'vuestic-icon vuestic-icon-auth'
  },
  children: [
    {
      name: 'Login',
      path: '/auth/login',
      component: Login,
      // component: lazyLoading('auth/login/Login'),
      meta: {
        default: false,
        title: 'menu.login',
        newWindow: true
      }
    },
    {
      name: 'Signup',
      path: '/auth/signup',
      component: Signup,
      // component: lazyLoading('auth/signup/Signup'),
      meta: {
        default: false,
        title: 'menu.signUp',
        newWindow: true
      }
    }
  ]
}
