import Vue from "vue";
import Vuex from "vuex";
import Beers from "./module/beers";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Beers
  }
});

export default store;
