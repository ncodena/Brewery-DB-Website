import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    beers: []
  },
  mutations: {},
  actions: {
    async fetchBeers({ commit }) {
      const response = await axios.get(
        "https://api.openbrewerydb.org/breweries?per_page=10"
      );
      console.log(response.data);
    }
  },
  modules: {}
});
