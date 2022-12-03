import Vue from 'vue'
import Element from 'element-ui'
// Vue.use(Element)
Vue.use(Element, {
    size: Cookies.get('size') || 'medium', // set element-ui default size
    locale: esLang
  })
  Vue.use(VModal, {
    dynamicDefaults: {
      dialog: true,
      draggable: true,
      resizable: true,
      height: 'auto'
    }
  })
  Vue.use(VueSweetalert2, { allowOutsideClick: false })
// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})