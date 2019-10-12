import Vue from "vue";
import Router from "vue-router";
import Layout from "./views/Layout.vue";
import Workers from "./views/Workers.vue";
import Roles from "./views/Roles.vue";
import Diario from "./views/Diario.vue";
import Asistencia from "./views/Asistencia.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Layout,
      children: [
        {
          path: "workers",
          component: Workers
        },
        {
          path: "roles",
          component: Roles
        },
        {
          path: "diary",
          component: Diario
        },
        {
          path: "assistance",
          component: Asistencia
        }
      ]
    }
  ]
});
