import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contacto",
    name: "Contacto",
   
    component: () =>
      import( "../views/Contacto.vue")
  },
  {
    path: "/productos",
    name: "Productos",
  
    component: () => import("../views/Productos.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
