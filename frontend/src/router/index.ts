import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TodoPage from "../views/TodoPage.vue";
import Calendar from "../views/Calendar.vue";
import Help from "../views/Help.vue";
import Trash from "../views/Trash.vue";
import Settings from "../views/Settings.vue";

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
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/trash",
    name: "Trash",
    component: Trash,
  },
  {
    path: "/help",
    name: "Help",
    component: Help,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
