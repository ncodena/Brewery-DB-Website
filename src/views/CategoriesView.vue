<template>
  <div class="beerContainer">
    <h3 class="text">Yeast</h3>
    <div v-for="beer in indexCategories" :beer="beer" :key="beer.id">
        <router-link :to="'/categories/' + beer.ingredients.yeast" exact
          ><p>{{beer.ingredients.yeast}}</p></router-link>
    </div>
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
    ...mapActions(["fetchCategories"]),
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