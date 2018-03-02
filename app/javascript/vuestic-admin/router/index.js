import Vue from 'vue'
import Router from 'vue-router'

import menuModule from 'vuestic-admin/store/modules/menu'

Vue.use(Router)

function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (item.children) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}

function getDefaultRoute (menu = []) {
  let defaultRoute

  menu.forEach((item) => {
    if (item.meta.default) {
      defaultRoute = item
    } else if (item.children) {
      let defaultChild = item.children.find((i) => i.meta.default)
      defaultRoute = defaultChild || defaultRoute
    }
  })

  return defaultRoute
}

export default new Router({
  routes: [
    ...generateRoutesFromMenu(menuModule.state.items),
    // { path: '*', redirect: { name: getDefaultRoute(menuModule.state.items).name }}
    { path: '*', redirect: { name: 'Typography' } }
]
})
