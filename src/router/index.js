import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/features",
      name: "features",
      // route level code-splitting
      // this generates a separate chunk (Features.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/FeaturesPage.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutPage.vue"),
    },
    {
      path: "/news",
      name: "news",
      // route level code-splitting
      // this generates a separate chunk (News.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/NewsPage.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      // route level code-splitting
      // this generates a separate chunk (FAQs.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/FAQsPage.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (Contact.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ContactPage.vue"),
    },
    {
      path: "/groups-list",
      name: "groups-list",
      // route level code-splitting
      // this generates a separate chunk (GroupsList.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/GroupsListPage.vue"),
    },
  ],
});

export default router;
