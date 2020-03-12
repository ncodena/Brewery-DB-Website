<template>
  <div class="home">
    <h1>hi</h1>

    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <Menu brandName="Brewery DB" home="Home" categories="Our Beers" random="Discover"/> -->
  </div>
</template>

<script>
// @ is an alias to /src

// import Menu from "@/components/Menu.vue";
import { mapActions } from "vuex";
export default {
  name: "Home",
  methods: {
    ...mapActions(["fetchBeers"])
  },
  created() {
    this.fetchBeers();
  }
  // components: {
  //   Menu,
  // }
};
</script>
