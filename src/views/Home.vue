<template>
  <div class="beersContainer">
    <beer-card v-for="beer in indexBeers" :beer="beer" :key="beer.id" />
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
  computed: mapGetters(["indexBeers"]),
  created() {
    this.fetchBeers();
  },
  components: {
    BeerCard
  }
};
</script>

<style lang="scss">
.beersContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
