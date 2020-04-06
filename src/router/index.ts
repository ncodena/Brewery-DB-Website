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
    path: "/beers/categories",
    name: "CategoriesView",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "RandomizerView" */ "../views/CategoriesView.vue"
      )
  },
  {
    path: "/beers/randomizer",
    name: "RandomizerView",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "RandomizerView" */ "../views/RandomizerView.vue"
      )
  },
  {
    path: "/beers/:id",
    name: "BeerDetails",
    props: true,
    component: () =>
      import(/* webpackChunkName: "BeerDetails" */ "../views/BeerDetails.vue")
  },
  {
    path: "/categories/:yeast",
    name: "YeastView",
    props: true,
    component: () =>
      import(/* webpackChunkName: "BeerDetails" */ "../views/YeastView.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
