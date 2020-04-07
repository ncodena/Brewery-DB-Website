<template>
<div class="viewContainer">
    <div class="intro">
    <h2>Our Beers</h2>
    <p class="text">Ale or Lager?
Different strains of yeast behave differently, so that it’s possible to divide the world of beer according to the yeast. The sixty or more defined beer styles in the world can all be sorted by their yeast into two broad families: the ale family and the lager family.

Beers in the ale family are produced by yeast strains that operate better at warmer temperatures. Ales are ready to drink in days rather than weeks, and the yeasts produce extra flavors in addition to creating alcohol: fruity, spicy, or earthy flavors are not unusual. Ales are the traditional beers of England and of Belgium.

Beers in the lager family are fermented by yeast strains that operate better at cooler temperatures. These beers need to be conditioned or cellared (“lager” is German for a storage place) for several weeks or more to reach peak drinkability. The lager beers are the traditional beers of Germany, the Czech Republic and central Europe.

The action of yeast can generate a range of interesting beer flavors and aromas as varied as apple, pepper or apricot. Some, such as banana or clove, are the typical flavors of particular beer styles; others, such as butterscotch, may be considered defects.

</p>
</div>
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
      class="text-center"
    >
      <router-link :to="'/categories/' + beer.ingredients.yeast" exact
        ><b-card-text>{{ beer.ingredients.yeast }}</b-card-text></router-link
      >
    </b-card>
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

.intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
    color: white;
}

.text {
    margin: 2px 50px 2px 50px;
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
