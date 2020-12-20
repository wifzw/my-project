import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/tailwind.css";
import "./assets/css/animate.css/animate.css";

import Particles from "particles.vue";
import vuetify from "./plugins/vuetify";

Vue.use(Particles);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
