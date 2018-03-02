// import lazyLoading from './lazyLoading'
import Typography from 'vuestic-admin/components/ui/typography/Typography.vue'
import Buttons from 'vuestic-admin/components/ui/buttons/Buttons.vue'
import Notifications from 'vuestic-admin/components/ui/notifications/Notifications.vue'
import Icons from 'vuestic-admin/components/ui/icons/Icons.vue'
import SetsList from 'vuestic-admin/components/ui/icons/SetsList.vue'
import IconsSet from 'vuestic-admin/components/ui/icons/Set.vue'
import Spinners from 'vuestic-admin/components/ui/spinners/Spinners.vue'
import Grid from 'vuestic-admin/components/ui/grid/Grid.vue'
import Modals from 'vuestic-admin/components/ui/modals/Modals.vue'

export default {
  name: 'ui',
  meta: {
    expanded: false,
    title: 'menu.uiElements',
    iconClass: 'vuestic-icon vuestic-icon-ui-elements'
  },
  children: [
    {
      name: 'Typography',
      path: '/ui/typography',
      component: Typography,
      // component: lazyLoading('ui/typography/Typography'),
      meta: {
        title: 'menu.typography'
      }
    },
    {
      name: 'Buttons',
      path: '/ui/buttons',
      component: Buttons,
      // component: lazyLoading('ui/buttons/Buttons'),
      meta: {
        title: 'menu.buttons'
      }
    },
    {
      name: 'Notifications',
      path: '/ui/notifications',
      component: Notifications,
      // component: lazyLoading('ui/notifications/Notifications'),
      meta: {
        title: 'menu.notifications'
      }
    },
    {
      path: '/ui/icons',
      component: Icons,
      // component: lazyLoading('ui/icons/Icons'),
      meta: {
        title: 'menu.icons'
      },
      children: [
        {
          path: '', // Default route
          component: SetsList,
          // component: lazyLoading('ui/icons/SetsList'),
          meta: {
            title: 'menu.icons'
          }
        },
        {
          path: ':name',
          component: IconsSet,
          // component: lazyLoading('ui/icons/Set'),
          props: true,
          meta: {
            title: 'Set'
          }
        }
      ]
    },
    {
      name: 'Spinners',
      path: '/ui/spinners',
      component: Spinners,
      // component: lazyLoading('ui/spinners/Spinners'),
      meta: {
        title: 'menu.spinners'
      }
    },
    {
      name: 'Grid',
      path: '/ui/grid',
      component: Grid,
      // component: lazyLoading('ui/grid/Grid'),
      meta: {
        title: 'menu.grid'
      }
    },
    {
      name: 'Modals',
      path: '/ui/modals',
      component: Modals,
      // component: lazyLoading('ui/modals/Modals'),
      meta: {
        title: 'menu.modals'
      }
    }
  ]
}

