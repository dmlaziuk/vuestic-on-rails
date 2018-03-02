// import lazyLoading from './lazyLoading'
import Extra from 'vuestic-admin/components/extra/Extra.vue'

export default {
  name: 'menu.extra',
  path: '/extra',
  component: Extra,
  // component: lazyLoading('extra/Extra'),
  meta: {
    default: false,
    title: 'menu.extra',
    iconClass: 'vuestic-icon vuestic-icon-extras',
    expanded: false
  }
}
