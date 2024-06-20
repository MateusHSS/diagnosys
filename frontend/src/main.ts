import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

import Axios from "axios";

import "./assets/main.css";

Vue.use(BootstrapVue);

Vue.prototype.$http = Axios.create({
  baseURL: "http://localhost:4090/",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
