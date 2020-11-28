import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/quem-sou-eu",
    name: "sobre-min",
    component: () => import("../views/sobre-min.vue")
  },
  {
    path: "*",
    name: "pagina-nao-encontrada",
    component: () => import("../views/pagina-nao-encontrada/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
