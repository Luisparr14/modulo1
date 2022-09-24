import { createRouter, createWebHistory } from "vue-router";
import routes from "../models/routes.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
