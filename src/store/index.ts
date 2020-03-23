import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    beers: [],
    beer: {}
  },
  getters: {
    indexBeers: state => state.beers,
    detailsBeer: state => state.beer
  },
  mutations: {
    setBeers: (state, beers) => (state.beers = beers),
    detailsBeer: (state, beer) => (state.beer = beer)
  },
  actions: {
    async fetchBeers({ commit }) {
      const response = await axios
        .get("https://api.punkapi.com/v2/beers?page=10")

        .then(response => response);

      commit("setBeers", response.data);
    },

    async fetchBeer({ commit }, name) {
      const response = await axios
        .get(`https://api.punkapi.com/v2/beers?beer_name=${name}`)

        .then(response => response);

      console.log(response);

      commit("detailsBeer", response.data);
    }
  },
  modules: {}
});
