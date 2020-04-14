import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    beers: [],
    beer: {},
    relatedBeers: [],
    randomBeer: {},
    categoriesBeers: [],
    beersByCategory: [],
    isLoading: false
  },

  getters: {
    indexBeers: state => state.beers,
    detailsBeer: state => state.beer,
    indexRelatedBeers: state => state.relatedBeers,
    randomData: state => state.randomBeer,
    indexCategories: state => state.categoriesBeers,
    indexBeersByCategory: state => state.beersByCategory
  },
  mutations: {
    setBeers: (state, beers) => (state.beers = beers),
    loading: state => (state.isLoading = true),
    loadingCompleted: state => (state.isLoading = false),
    detailsBeer: (state, beer) => (state.beer = beer),
    indexRelatedBeers: (state, relatedBeers) =>
      (state.relatedBeers = relatedBeers),
    setRandomBeer: (state, randomBeer) => (state.randomBeer = randomBeer),
    setCategories: (state, categoriesBeers) =>
      (state.categoriesBeers = categoriesBeers),
    setBeersByCategory: (state, beersByCategory) =>
      (state.beersByCategory = beersByCategory),
    resetState: (state, beer) => (state.beer = beer)
  },
  actions: {
    async fetchBeers({ commit }) {
      commit("loading");
      const response = await axios
        .get("https://api.punkapi.com/v2/beers?page=10")

        .then(response => response);

      commit("setBeers", response.data);
      commit("loadingCompleted");
    },

    async fetchBeer({ commit }, id) {
      commit("loading");
      const response = await axios

        .get(`https://api.punkapi.com/v2/beers?ids=${id}`)

        .then(response => response);

      commit("detailsBeer", response.data);
      commit("loadingCompleted");
    },

    async fetchRelated({ commit }, id) {
      commit("loading");
      const response = await axios
        .get(`https://api.punkapi.com/v2/beers?ids=${id}`)

        .then(async response => {
          const yeast = response.data[0].ingredients.yeast;
          return await axios.get(
            `https://api.punkapi.com/v2/beers?per_page=30&yeast=${yeast}`
          );
        })
        .then(response => response);

      const filteredData = response.data.filter(function(beer, id) {
        return beer.id != id;
      });

      function fethcRandomItems(filteredData) {
        const newArray = [];

        for (let i = 0; i < 3; i++) {
          const random = filteredData[Math.floor(Math.random() * 30)];

          if (newArray.indexOf(random) == -1) {
            newArray.push(random);
          }
        }

        return newArray;
      }

      console.log(fethcRandomItems(filteredData));

      commit("indexRelatedBeers", fethcRandomItems(filteredData));
      commit("loadingCompleted");
    },

    async fetchRandomBeer({ commit }) {
      commit("loading");
      const response = await axios
        .get("https://api.punkapi.com/v2/beers/random")

        .then(response => response);
      console.log(response.data);

      commit("setRandomBeer", response.data);
      commit("loadingCompleted");
    },
    async fetchCategories({ commit }) {
      commit("loading");
      const response = await axios
        .get("https://api.punkapi.com/v2/beers?per_page=80")

        .then(response => response);
      console.log("from store", response.data);
      const filteredData = Array.from(
        new Set(response.data.map(yeast => yeast.ingredients.yeast))
      ).map(ingredients => {
        return response.data.find(
          yeast => yeast.ingredients.yeast === ingredients
        );
      });

      commit("setCategories", filteredData);
      commit("loadingCompleted");
    },
    async fetchBeersCategory({ commit }, yeast) {
      commit("loading");
      const response = await axios
        .get(`https://api.punkapi.com/v2/beers?per_page=80&yeast=${yeast}`)

        .then(response => response);
      console.log(response.data);
      commit("setBeersByCategory", response.data);
      commit("loadingCompleted");
    }
  }
});
