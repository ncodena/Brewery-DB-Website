<template>
  <div class="mainContainer">
    <div class="sortContainer">
      <div class="sortGroup">
        <h4>Sort by:</h4>
        <b-button @click="sortBy('name')">Name</b-button>
        <b-button @click="sortBy('abv')">Alcohol Volume</b-button>
      </div>
    </div>
    <div class="beersContainer">
      <beer-card v-for="beer in indexBeers" :beer="beer" :key="beer.id" />
    </div>
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
export default class Home extends Vue {
  @beersModule.Action
  public fetchBeers!: () => void;
  @beersModule.Getter
  public indexBeers!: Array<object>;
  mounted(): void {
    this.fetchBeers();
    console.log(this.indexBeers);
  }
  public sortBy(prop: never): void {
    this.indexBeers.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    console.log(this.indexBeers);
  }
}
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
  width: 45%;
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
