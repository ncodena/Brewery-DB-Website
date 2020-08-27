<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="#"><router-link to="/beers/categories">{{ brandName }}</router-link></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            ><router-link to="/">{{ home }}</router-link></b-nav-item
          >
          <b-nav-item
            ><router-link to="/beers/categories">{{
              categories
            }}</router-link></b-nav-item
          >
          <b-nav-item
            ><router-link to="/beers/randomizer">{{
              random
            }}</router-link></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private brandName!: string;
  @Prop() private home!: string;
  @Prop() private categories!: string;
  @Prop() private random!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}

a {
  text-decoration: none;
  color: white;
}

a :hover {
  text-decoration: none;
  color: white;
  opacity: 0.7;
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
