import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

// const getDefaultState = () => {
//   return {
//     beer: {}
//   }
// };

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    beers: [],
    beer: {},
    relatedBeers: [],
    randomBeer: {}
  },

  getters: {
    indexBeers: state => state.beers,
    detailsBeer: state => state.beer,
    indexRelatedBeers: state => state.relatedBeers,
    randomData: state => state.randomBeer
  },
  mutations: {
    setBeers: (state, beers) => (state.beers = beers),
    detailsBeer: (state, beer) => (state.beer = beer),
    indexRelatedBeers: (state, relatedBeers) => (state.relatedBeers = relatedBeers),
    setRandomBeer: (state, randomBeer) => (state.randomBeer = randomBeer)
    // resetState (state) {
    //   Object.assign(state)
    // }
  },
  actions: {

    // resetState ({commit}){
    //   commit('resetState')
    // },


    async fetchBeers({ commit }) {
      const response = await axios
        .get("https://api.punkapi.com/v2/beers?page=10")

        .then(response => response);

      commit("setBeers", response.data);
    },

    async fetchBeer({ commit }, id) {
      const response = await axios

        .get(`https://api.punkapi.com/v2/beers?ids=${id}`)

        .then(response => response);

      commit("detailsBeer", response.data);
    },


    async fetchRelated({ commit }, id) {
      const response = await axios
        .get(`https://api.punkapi.com/v2/beers?ids=${id}`)

        .then(async response => {
          const yeast = response.data[0].ingredients.yeast;
          return await axios.get(
            `https://api.punkapi.com/v2/beers?per_page=3&yeast=${yeast}`
          );
        })
        .then(response => response);
      console.log(response.data);
      commit("indexRelatedBeers", response.data);
    },

    async fetchRandomBeer({ commit }) {
      const response = await axios
        .get("https://api.punkapi.com/v2/beers/random")

        .then(response => response)
        console.log(response.data)

      commit("setBeers", response.data);
    }
  }
});
