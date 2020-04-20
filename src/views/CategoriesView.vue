<template>
  <div class="viewContainer">
    <div class="intro">
      <h2>Ale or Lager?</h2>
      <p class="text">
        The most important ingredient in brewing was the last one discovered,
        because yeast is a single-celled organism that is invisible to the naked
        eye. Still, brewers have long known that some unseen agent turned a
        sweet liquid into beer. Long ago, the action of yeast was such a
        blessing, yet so mysterious, that English brewers called it “Godisgood.”
      </p>
      <p class="text">
        Different strains of yeast behave differently, so that it’s possible to
        divide the world of beer according to the yeast. The sixty or more
        defined beer styles in the world can all be sorted by their yeast into
        two broad families: the ale family and the lager family. Ales are ready
        to drink in days rather than weeks, and the yeasts produce extra flavors
        in addition to creating alcohol: fruity, spicy, or earthy flavors are
        not unusual. Beers in the lager family are fermented by yeast strains
        that operate better at cooler temperatures. These beers need to be
        conditioned or cellared (“lager” is German for a storage place) for
        several weeks or more to reach peak drinkability. The action of yeast
        can generate a range of interesting beer flavors and aromas as varied as
        apple, pepper or apricot. Some, such as banana or clove, are the typical
        flavors of particular beer styles; others, such as butterscotch, may be
        considered defects.
      </p>
    </div>
    <div class="beerContainer">
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

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const beersModule = namespace("Beers");

@Component
export default class CategoriesView extends Vue {
  @beersModule.Action
  public fetchCategories!: () => void;
  @beersModule.Getter
  public indexCategories!: Array<object>;
  mounted(): void {
    this.fetchCategories();
  }
}
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
  font-size: 20px;
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

.card:hover .card-body {
  background-color: black;
  color: white;
  transition: 0.5s ease;
}

.card:hover a {
  color: white;
}

a {
  color: black;
}

@media (max-width: 700px) {
  .text {
    font-size: 12px;
  }
  .card {
    min-height: 20vh;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
