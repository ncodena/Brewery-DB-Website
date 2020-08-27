<template>
  <div class="beerContainer">
    <h5 class="text">Press the button and discover your next favourite beer</h5>
    <b-button class="text" @click="fetchRandomBeer()">Discover</b-button>
    <beer-card v-for="beer in indexRandomBeer" :beer="beer" :key="beer.id" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import BeerCard from "@/components/BeerCard.vue";
const beersModule = namespace("Beers");
@Component({
  components: {
    BeerCard
  }
})
export default class RandomizerView extends Vue {
  @beersModule.Action
  public fetchRandomBeer!: () => void;
  @beersModule.Getter
  public indexRandomBeer!: Array<object>;
  mounted(): void {
    this.fetchRandomBeer();
  }
}
</script>

<style scoped lang="scss">
.beerContainer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 326px;
}

.text {
  color: white;
  padding: 12px 10px 12px;
}
</style>
