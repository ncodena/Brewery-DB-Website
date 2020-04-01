import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    beers: [],
    beer: {},
    relatedBeers: []
  },
  getters: {
    indexBeers: state => state.beers,
    detailsBeer: state => state.beer,
    indexRelatedBeers: state => state.relatedBeers
  },
  mutations: {
    setBeers: (state, beers) => (state.beers = beers),
    detailsBeer: (state, beer) => (state.beer = beer),
    indexRelatedBeers: (state, relatedBeers) =>
      (state.relatedBeers = relatedBeers)
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

      // console.log(response.data);

      commit("detailsBeer", response.data);
    },

    async fetchRelated({ commit }, name) {
      const response = await axios
        .get(`https://api.punkapi.com/v2/beers?beer_name=${name}`)

        .then(async response => {
          const yeast = response.data[0].ingredients.yeast;
          return await axios.get(
            `https://api.punkapi.com/v2/beers?per_page=3&yeast=${yeast}`
          );
        })
        .then(response => response);
      console.log(response.data);
      commit("indexRelatedBeers", response.data);
    }
  }
});
