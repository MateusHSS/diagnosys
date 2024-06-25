import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import {BootstrapVue, BootstrapVueIcons, IconsPlugin} from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";


import Axios from "axios";

import "./assets/main.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(IconsPlugin);

Vue.prototype.$http = Axios.create({
  baseURL: "http://localhost:3000/",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
