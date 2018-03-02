// import lazyLoading from './lazyLoading'
import Dashboard from 'vuestic-admin/components/dashboard/Dashboard.vue'

export default {
  name: 'Dashboard',
  path: '/dashboard',
  component: Dashboard,
  // component: lazyLoading('dashboard/Dashboard'),
  meta: {
    default: true,
    title: 'menu.dashboard',
    iconClass: 'vuestic-icon vuestic-icon-dashboard'
  }
}
