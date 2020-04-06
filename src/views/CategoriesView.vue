<template>
  <div class="beerContainer">
    <h3 class="text">Yeast</h3>
    <div v-for="beer in indexCategories" :beer="beer" :key="beer.id">
        <p>{{beer.ingredients.yeast}}</p>
    </div>
    <h5 class="text">Press the button and discover your next favourite beer</h5>
    <b-button @click="fetchRandomBeer()">Discover</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CategoriesView",
  props: {
    beer: Object
  },
  methods: {
    ...mapActions(["fetchforYeast"]),
  },
  computed: {
    ...mapGetters(["indexCategories"])
  },
  created() {
    this.fetchCategories();
    console.log(this.indexCategories);
  }
};
</script>

<style scoped lang="scss">
.beerContainer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

p {
  color: white;
}
</style>