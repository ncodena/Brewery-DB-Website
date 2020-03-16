<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <Menu
      brandName="BREWDOG"
      home="Home"
      categories="Our Beers"
      random="Discover"
    />
    <router-view />
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  components: {
    Menu
  }
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');

#app {
  background-image: url(assets/background.jpg);
  background-attachment: fixed;
  font-family: "Oswald";
}
// .nav {
//   position: fixed;
// }

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
