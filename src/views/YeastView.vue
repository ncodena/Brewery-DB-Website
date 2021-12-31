<template>
  <div class="mainContainer">
    
    <div class="sortContainer">
      <h2 class="title">{{ this.newString }}</h2>
      <div class="sortGroup">
        <div class="returnButton">
        <router-link to="/beers/categories"
        ><b-button>Back to Categories</b-button></router-link>
        </div>
        <h4>Sort by:</h4>
        <b-button @click="sortBy('name')">Name</b-button>
        <b-button @click="sortBy('abv')">Alcohol Volume</b-button>
      </div>
      <div class="inputGroup">
        <b-form-input
          v-model="search"
          placeholder="Search by name"
        ></b-form-input>
      </div>
    </div>
    <div class="beersList">
      <beer-card v-for="beer in filteredData" :beer="beer" :key="beer.id" />
      <div v-if="filteredData.length == 0" class="messageContainer">
        <p>NO RESULTS FOUND</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import BeerCard from "@/components/BeerCard.vue";
const beersModule = namespace("Beers");
@Component({
  components: {
    BeerCard
  }
})
export default class YeastView extends Vue {
  public search = "";
  public yeastString: string = window.location.href.split("/").pop() || "";
  public newString: string = this.yeastString
    .split("20")
    .join(" ")
    .split("%")
    .join(" ")
    .split("A2")
    .join(" ")
    .split("84")
    .join(" ")
    .split("E2")
    .join(" ");

  @beersModule.Action
  public fetchBeersCategory!: (yeast: string) => void;
  @beersModule.Getter
  public indexBeersByCategory!: Array<object>;
  mounted(): void {
    const yeast: string = window.location.href.split("/").pop() || "";
    this.fetchBeersCategory(yeast);
  }
  public sortBy(prop: never) {
    this.indexBeersByCategory.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
  }

  get filteredData(): Array<object> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.indexBeersByCategory.filter((beer: any) => {
      return beer.name.toLowerCase().startsWith(this.search);
    });
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
  flex-direction: column;
  align-items: center;
}

.sortGroup {
  display: flex;
  width: 45%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.title {
  padding-bottom: 20px;
}
.inputGroup {
  padding-top: 30px;
}
.messageContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 326px;
}
.beersList {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 167px;
}

h1 {
  color: white;
}

p {
  color: white;
}

@media (max-width: 700px) {
  .sortGroup {
    flex-direction: column;
    height: 30vh;
    justify-content: space-around;
    align-items: center;
    width: 50%;
  }

  // .messageContainer {
  //   padding-bottom: 326px;
  // }

  h2{
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.2rem;
  }
}
</style>
