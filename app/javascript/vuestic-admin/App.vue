<template>
  <div id="app" class="app">
    <auth-layout v-if="isAuth"></auth-layout>
    <layout v-else></layout>
  </div>
</template>

<script>
  import router from 'vuestic-admin/router'
  import store from 'vuestic-admin/store'
  import 'vuestic-admin/i18n'

  import Layout from 'vuestic-admin/components/layout/Layout.vue'
  import AuthLayout from 'vuestic-admin/components/layout/AuthLayout.vue'
  import VuesticPreLoader from 'vuestic-plugin/vuestic-components/vuestic-preloader/VuesticPreLoader.vue'

  import { sync } from 'vuex-router-sync'
  sync(store, router)

  let mediaHandler = () => {
    if (window.matchMedia(store.getters.config.windowMatchSizeLg).matches) {
      store.dispatch('toggleSidebar', true)
    } else {
      store.dispatch('toggleSidebar', false)
    }
  }

  router.beforeEach((to, from, next) => {
    store.commit('setLoading', true)
    next()
  })

  router.afterEach((to, from) => {
    mediaHandler()
    store.commit('setLoading', false)
  })

  export default {
    name: 'app',
    components: {
      VuesticPreLoader,
      AuthLayout,
      Layout
    },
    computed: {
      isAuth () {
        return this.$route.path.match('auth')
      }
    },
    created() {
      console.log('Hello, rubyroid-am')
    },
    router,
    store
  }
</script>

<style lang="scss">
  @import "~sass/main";
  body {
    height: 100%;
    .app {
      height: 100%;
    }
  }
</style>
