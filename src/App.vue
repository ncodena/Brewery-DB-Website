<template>
  <div id="app">
    <Menu
      brandName="BREWDOG"
      home="Home"
      categories="Our Beers"
      random="Discover"
    />

    <div id="content"></div>
    <Footer />
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <router-view />
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
export default {
  components: {
    Menu,
    Footer
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Oswald&display=swap");

#app {
  background-image: url(assets/background.jpg);
  background-attachment: fixed;
  font-family: "Oswald";
}
#nav {
  position: fixed;
  top: 0;
  width: 100%;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
