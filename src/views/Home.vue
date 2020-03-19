<template>
  <div class="home">
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
.card-img {
  max-width: 80px;
  min-height: 40%;
}
.overflow-hidden:hover .no-gutters {
  opacity: 0.2;
}
.overflow-hidden:hover .middle {
  opacity: 1;
}
.overflow-hidden {
  max-width: 540px;
  max-height: 407px;
  min-height: 70vh;
  margin: 20px 20px 20px 20px;
}
.beersContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.no-gutters {
  min-width: 368px;
  max-width: 368px;
  opacity: 1;
  transition: 1.1s ease;
  backface-visibility: hidden;
}
.col-md-6 {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}
.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
