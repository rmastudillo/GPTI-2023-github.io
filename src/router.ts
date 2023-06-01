import { createRouter, createWebHistory } from "vue-router";
import { cartRoute } from "./components/cart/router";
import { testRoute } from "./components/first_page/router";
import { homeRoute } from "./components/home/router";

export const routes = [
  {
    path: "/",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [...homeRoute, ...testRoute, ...cartRoute],
  },
];

export const router = createRouter({
  history: createWebHistory(`${import.meta.env.BASE_URL}`),
  routes: routes,
});
