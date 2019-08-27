import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("./views/Resume.vue")
    },
    {
      path: "/sideprojects",
      name: "sideprojects",
      component: () => import("./views/SideProjects.vue")
    }
  ]
});
