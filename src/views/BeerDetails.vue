<template>
  <div class="beerDetails">
    <div v-if="isLoading"></div>
    <Details
      v-else
      v-for="beer in indexDetailsBeer"
      :beer="beer"
      :key="beer.id"
    />
    <div v-if="isLoading"></div>
    <div v-else class="recommendations">
      <h2>People also viewed</h2>
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
  public fetchBeer!: (id: string) => void;
  @beersModule.Action
  public fetchRelated!: (id: string) => void;
  @beersModule.Getter
  public indexDetailsBeer!: object;
  @beersModule.Getter
  public indexRelatedBeers!: Array<object>;

  async mounted(): Promise<void> {
    const id: string = window.location.href.split("/").pop() || "";
    console.log(id);
    console.log(this.indexDetailsBeer);
    console.log(this.indexRelatedBeers);
    await this.fetchBeer(id);
    await this.fetchRelated(id);
  }
}
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
