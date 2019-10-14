import Vue from "vue";
import Layout from "./views/Layout.vue";
import Router from "vue-router";
import Workers from "./views/Workers.vue";
import Roles from "./views/Roles.vue";
import Diario from "./views/Diario.vue";
import Asistencia from "./views/Asistencia.vue";
import Paga from "./views/Paga.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Layout,
      children: [
        {
          path: "/workers",
          component: Workers
        },
        {
          path: "/roles",
          component: Roles
        },
        {
          path: "/diary",
          component: Diario
        },
        {
          path: "/assistance",
          component: Asistencia
        },
        {
          path: "/payday",
          component: Paga
        }
      ]
    },
    {
      path: "",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});
