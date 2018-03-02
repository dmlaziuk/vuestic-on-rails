// import lazyLoading from './lazyLoading'
import GoogleMapsPage from 'vuestic-admin/components/maps/google-maps/GoogleMapsPage.vue'
import LeafletMapsPage from 'vuestic-admin/components/maps/leaflet-maps/LeafletMapsPage.vue'
import BubbleMapsPage from 'vuestic-admin/components/maps/bubble-maps/BubbleMapsPage.vue'
import LineMapsPage from 'vuestic-admin/components/maps/line-maps/LineMapsPage.vue'

export default {
  name: 'Maps',
  meta: {
    expanded: false,
    title: 'menu.maps',
    iconClass: 'vuestic-icon vuestic-icon-maps'
  },

  children: [
    {
      name: 'GoogleMaps',
      path: '/maps/google-maps',
      component: GoogleMapsPage,
      // component: lazyLoading('maps/google-maps/GoogleMapsPage'),
      meta: {
        title: 'Google Maps'
      }
    },
    {
      name: 'LeafletMaps',
      path: '/maps/leaflet-maps',
      component: LeafletMapsPage,
      // component: lazyLoading('maps/leaflet-maps/LeafletMapsPage'),
      meta: {
        title: 'Leaflet Maps'
      }
    },
    {
      name: 'BubbleMaps',
      path: '/maps/bubble-maps',
      component: BubbleMapsPage,
      // component: lazyLoading('maps/bubble-maps/BubbleMapsPage'),
      meta: {
        title: 'Bubble Maps'
      }
    },
    {
      name: 'LineMaps',
      path: '/maps/line-maps',
      component: LineMapsPage,
      // component: lazyLoading('maps/line-maps/LineMapsPage'),
      meta: {
        title: 'Line Maps'
      }
    }
  ]
}
