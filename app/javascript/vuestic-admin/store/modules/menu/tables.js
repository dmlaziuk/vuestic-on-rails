// import lazyLoading from './lazyLoading.js'
import Table from 'vuestic-admin/components/tables/Table.vue'

export default {
  name: 'tables',
  meta: {
    title: 'menu.tables',
    iconClass: 'vuestic-icon vuestic-icon-tables'
  },
  path: '/tables',
  component: Table
  // component: lazyLoading('tables/Table')
}
