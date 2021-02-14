import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/todoPage",
    name: "TodoPage",
    component: () => import("../views/TodoPage.vue")
  },
  {
    path: "/reportPage",
    name: "ReportPage",
    component: () => import("../views/ReportPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
