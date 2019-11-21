import Vue from "vue";
import store from "./store/index";
import Layout from "./views/Layout.vue";
import Router from "vue-router";
//VIEWS
import Asistencia from "./views/Asistencia.vue";
import Diario from "./views/Diario.vue";
import FirstTime from "./views/FirstTime.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import Paga from "./views/Paga.vue";
import Register from "./views/Register.vue";
import Roles from "./views/Roles.vue";
import Workers from "./views/Workers.vue";

Vue.use(Router);

const router = new Router({
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
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/firsttime",
      name: "first time",
      component: FirstTime
    }
  ]
});

router.beforeEach((to, from, next) => {
  store.dispatch("session/fetchAccessToken");
  if (to.fullPath === "/assistance") {
    if (!store.state.session.accessToken) {
      next("/");
    }
  }
  if (to.fullPath === "/") {
    if (store.state.session.accessToken) {
      next("/assistance");
    }
  }
  next();
});

export default router;
