<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Menu brandName="Brewery DB" home="Home" categories="Our Beers" random="Discover"/>
  </div>
</template>

<script>
// @ is an alias to /src

import Menu from "@/components/Menu.vue";

export default {
  name: "Home",
  components: {
    Menu,
  }
};
</script>
