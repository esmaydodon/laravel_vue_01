require('./bootstrap');
import { create } from 'lodash';
// ### 1  ###
// import Vue from "vue";
// import Cookies from "js-cookie";
// import ElementUI from "element-ui";
// import locale from "element-ui/lib/locale/lang/es";
// //require("./bootstrap"); 
// //import 'element-ui/lib/theme-chalk/index.css';
// import * as filters from "./filters"; // global filters

// Vue.use(ElementUI, {
//     locale,
//     size: Cookies.get("size") || "medium" // set element-ui default size
// });

// // register global utility filters.
// Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key]);
// });
// ### 1 end###
// ### 2  ###
// import Vue from 'vue';
// import App from './components/App.vue';

// new Vue({
//     el: '#app',
//     components: { App }
// });
// ### 2 end ###
import Vue from 'vue'
// import {createApp} from "vue"
import App from "./layouts/App.vue";
// import App from './components/App.vue';
// createApp (app).mount("#app")
// new Vue({
//     el: '#app',
//     components: { app }
// });
new Vue({
    el: '#app',
    // router,
    // store,
    render: h => h(App)
  }).$mount('#app');