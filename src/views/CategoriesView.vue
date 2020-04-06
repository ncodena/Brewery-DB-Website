<template>
  <div class="beerContainer">
    <!-- <div v-for="beer in indexCategories" :beer="beer" :key="beer.id">
      <router-link :to="'/categories/' + beer.ingredients.yeast" exact
        ><p>{{ beer.ingredients.yeast }}</p></router-link
      >
    </div> -->
    <b-card
      v-for="beer in indexCategories"
      :beer="beer"
      :key="beer.id"
      bg-variant="light"
      footer="VIEW STRAIN"
      class="text-center"
    >
      <router-link :to="'/categories/' + beer.ingredients.yeast" exact
        ><b-card-text>{{ beer.ingredients.yeast }}</b-card-text></router-link
      >
    </b-card>
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
    ...mapActions(["fetchCategories"])
  },
  computed: {
    ...mapGetters(["indexCategories"])
  },
  created() {
    this.fetchCategories();
  }
};
</script>

<style scoped lang="scss">
.beerContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  position: relative;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  min-width: 36px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 4px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin: 20px;
  min-width: 39%;
  max-width: 30%;
}

a {
  color: black;
}
</style>
