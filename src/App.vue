<template>
  <div id="app">
    <Menu
      brandName="BREWDOG"
      home="Home"
      categories="Our Beers"
      random="Discover"
    />
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <div class="view">
      <router-view :key="$route.params.id" />
    </div>
    <Footer />
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

.view {
  min-height: 100%;
  position: relative;
  margin-top: 56px;
  padding-top: 30px;
  padding-bottom: 30px;
  background: rgba(0, 0, 0, 0.6);
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
