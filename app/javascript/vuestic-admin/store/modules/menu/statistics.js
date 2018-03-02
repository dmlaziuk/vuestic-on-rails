// import lazyLoading from './lazyLoading'
import Charts from 'vuestic-admin/components/statistics/charts/Charts.vue'
import ProgressBars from 'vuestic-admin/components/statistics/progress-bars/ProgressBars.vue'

export default {
  name: 'Statistics',
  meta: {
    expanded: false,
    title: 'menu.statistics',
    iconClass: 'vuestic-icon vuestic-icon-statistics'
  },
  children: [
    {
      name: 'menu.charts',
      path: '/statistics/charts',
      component: Charts,
      // component: lazyLoading('statistics/charts/Charts'),
      meta: {
        title: 'menu.charts'
      }
    },
    {
      name: 'menu.progressBars',
      path: '/statistics/progress-bars',
      component: ProgressBars,
      // component: lazyLoading('statistics/progress-bars/ProgressBars'),
      meta: {
        title: 'menu.progressBars'
      }
    }
  ]
}
