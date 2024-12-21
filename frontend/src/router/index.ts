import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TodoPage from "../views/TodoPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todos",
    name: "Todos",
    component: TodoPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
