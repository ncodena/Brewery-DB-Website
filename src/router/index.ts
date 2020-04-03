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
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  {
    path: "/beers/:id",
    name: "BeerDetails",
    props: true,
    component: () =>
      import(/* webpackChunkName: "BeerDetails" */ "../views/BeerDetails.vue")
  },
  {
    path: "/beers/randomizer",
    name: "RandomizerPage",
    props: true,
    component: () =>
      import(/* webpackChunkName: "BeerDetails" */ "../views/Randomizer.vue")
  }

];

const router = new VueRouter({
  routes
});

export default router;
