import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import VuesticPlugin from 'vuestic-plugin'

Vue.use(VuesticPlugin)

// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, {fieldsBagName: 'formFields'})

document.addEventListener('DOMContentLoaded', () => {
  return new Vue({
    el: '#app',
    ...App
  })
})
