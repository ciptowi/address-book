import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/ListContact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/ListContact.vue"),
    },
    {
      path: "/add",
      name: "add",
      component: () => import("../views/AddContact.vue"),
    },
    {
      path: "/view/:id",
      name: "view",
      component: () => import("../views/DetailView.vue"),
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("../views/EditView.vue"),
    },
  ],
});

export default router;
