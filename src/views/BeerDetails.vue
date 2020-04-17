<template>
  <div class="beerDetails">
    <div v-if="isLoading"></div>
    <Details v-else v-for="beer in indexDetailsBeer" :beer="beer" :key="beer.id" />
    <div v-if="isLoading"></div>
    <div v-else class="recommendations">
      <h2>Similar</h2>
      <div class="beersList">
        <beer-card
          v-for="beer in indexRelatedBeers"
          :beer="beer"
          :key="beer.id"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Details from "@/components/Details.vue";
import BeerCard from "@/components/BeerCard.vue";
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const beersModule = namespace("Beers");
@Component({
  name: "BeerDetails",
  props: {
    beer: Object
  },
  components: {
    BeerCard,
    Details
  }
})
// import Spinner from "@/components/Spinner.vue";
export default class BeerDetails extends Vue {
  @beersModule.State
  public isLoading!: boolean;
  @beersModule.Action
  public fetchBeer!: () => void;
  @beersModule.Action
  public fetchRelated!: () => void;
  @beersModule.Getter
  public indexDetailsBeer!: any;
  @beersModule.Getter
  public indexRelatedBeers!: any;

  async mounted(): Promise<void> {
    const id = window.location.href.split("/").pop();
    await this.fetchBeer(id);
    await this.fetchRelated(id);
  }
};
</script>

<style scoped lang="scss">
h2 {
  font-size: 1.75rem;
  color: white;
  display: flex;
  justify-content: center;
  padding-top: 5%;
}
.beersList {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
