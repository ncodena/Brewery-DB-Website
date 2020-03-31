<template>
  <div class="mainContainer">

    <div class="sortContainer">
      <b-button>Name</b-button>
      <b-button>Alcohol Volume</b-button>
    </div>
    <div class="beersContainer">
      <beer-card v-for="beer in indexBeers" :beer="beer" :key="beer.id" />
    </div>

    
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <Menu brandName="Brewery DB" home="Home" categories="Our Beers" random="Discover"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Menu from "@/components/Menu.vue";
import BeerCard from "@/components/BeerCard.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  props: {
    beer: Object
  },
  methods: {
    ...mapActions(["fetchBeers"])
  },
  computed: {
    ...mapGetters(["indexBeers"])
  },
  created() {
    this.fetchBeers();
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
  justify-content: flex-start;
}
.beersContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
