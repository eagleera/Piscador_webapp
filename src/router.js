import Vue from "vue";
import Router from "vue-router";
import Layout from "./views/Layout.vue";
import Workers from "./views/Workers.vue";

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
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: "workers",
          component: Workers
        }
      ]
    }
  ]
});
