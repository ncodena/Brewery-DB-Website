<template>
  <div class="mainContainer">
    <div class="sortContainer">
      <div class="sortGroup">
        <h4>Sort by:</h4>
        <b-button @click="sortBy('name')">Name</b-button>
        <b-button @click="sortBy('abv')">Alcohol Volume</b-button>
      </div>
      <div class="inputGroup">
        <b-form-input
          v-model="search"
          placeholder="Search by name"
        ></b-form-input>
      </div>
    </div>
    <div class="beersList">
      <beer-card v-for="beer in filteredData" :beer="beer" :key="beer.id" />
      <div v-if="filteredData.length == 0" class="messageContainer">
        <p>NO RESULTS FOUND</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import BeerCard from "@/components/BeerCard.vue";
export default {
  name: "YeastView",
  data() {
    return {
      search: ""
    };
  },
  props: {
    beer: Object
  },
  methods: {
    ...mapActions(["fetchBeersCategory"]),
    sortBy(prop) {
      this.indexBeersByCategory.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
      console.log(this.indexBeers);
    }
  },
  computed: {
    ...mapGetters(["indexBeersByCategory"]),
    filteredData: function() {
      return this.indexBeersByCategory.filter(beer => {
        return beer.name.toLowerCase().startsWith(this.search);
      });
    }
  },
  created() {
    const yeast = window.location.href.split("/").pop();
    this.fetchBeersCategory(yeast);
    console.log(this.indexCategories);
  },
  components: {
    BeerCard
  }
};
</script>

<style scoped lang="scss">
.mainContainer {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
}
.sortContainer {
  display: flex;
  width: 100%;
  justify-content: center;
  color: white;
  flex-direction: column;
  align-items: center;
}

.sortGroup {
  display: flex;
  width: 45%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.inputGroup {
  padding-top: 30px;
}

.messageContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 326px;
  padding-bottom: 326px;
}
.beersList {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

h1 {
  color: white;
}

p {
  color: white;
}

@media (max-width: 700px) {
  .sortGroup {
    flex-direction: column;
    height: 30vh;
    justify-content: space-around;
    align-items: center;
    width: 50%;
  }

  .messageContainer {
    padding-top: 132px;
    padding-bottom: 132px;
  }
}
</style>
