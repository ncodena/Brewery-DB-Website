<template>
  <div class="home">
    <h1>hi</h1>
    <div class="beersContainer">
      <!-- <div v-for="beer in indexBeers" :key="beer.id" class="beer">{{ beer.name }}</div> -->
      <b-card
        v-for="beer in indexBeers"
        :key="beer.id"
        :img-src="beer.image_url"
        img-alt="Image"
        img-top
        tag="beer"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>{{ beer.description }}</b-card-text>
        <b-button href="#" variant="primary">Details</b-button>
      </b-card>
    </div>

    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <Menu brandName="Brewery DB" home="Home" categories="Our Beers" random="Discover"/> -->
  </div>
</template>

<script>
// @ is an alias to /src

// import Menu from "@/components/Menu.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  methods: {
    ...mapActions(["fetchBeers"])
  },
  computed: mapGetters(["indexBeers"]),
  created() {
    this.fetchBeers();
  }
  // components: {
  //   Menu,
  // }
};
</script>

<style lang="scss">
.card-img-top {
  max-width: 80px;
}
</style>
