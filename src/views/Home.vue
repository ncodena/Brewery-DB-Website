<template>
  <div class="mainContainer">

    <div class="sortContainer">
      <div class="sortGroup">
        <h4>Sort by: </h4>
        <b-button>Name</b-button>
        <b-button>Alcohol Volume</b-button>
      </div>
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
  justify-content: center;
  color: white;
}

.sortGroup {
  display: flex;
  width: 25%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}

.beersContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 700px) {
  .intro {
    grid-template-columns: 1fr;
  }
  .img {
    max-width: 80px;
    min-height: 40%;
  }
  .property {
    height: 5em;
    width: 5em;
  }
  .info {
    font-size: 15px;
  }
  h5 {
    font-size: 15px;
  }
  .sheet {
    grid-template-columns: 1fr;
  }

  @media (max-width: 700px) {

    .sortGroup {
      flex-direction: column;
      height: 30vh;
      justify-content: space-around;
      align-items: center;
      width: 50%;
    }
  }
}
</style>
