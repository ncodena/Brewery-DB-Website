<template>
  <section class="intro" :key="beer.id">
    <div class="container">
      <img
        v-if="beer.image_url"
        :src="beer.image_url"
        img-alt="image"
        class="beerImage"
      />
      <img
        v-else
        src="@/assets/beer_bottle.png"
        img-alt="no_image"
        class="defaultImage"
      />
    </div>
    <div class="container">
      <h6 class="info">
        <strong>{{ beer.name }}</strong>
      </h6>
      <h6 class="info">{{ beer.first_brewed }}</h6>
      <h6 class="info">{{ beer.abv }}%</h6>
    </div>

    <div class="overlay">
      <div class="text">
        <b-card-text>
          {{ beer.tagline }}
        </b-card-text>
        <h3 class="info">{{ beer.ingredients.yeast }}</h3>
        <router-link :to="'/beers/' + beer.id" exact
          ><b-button @click="fetchData(beer.id)">Details</b-button></router-link
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// @ is an alias to /src
// import Menu from "@/components/Menu.vue";
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const beersModule = namespace("Beers");
@Component({
  name: "Details",
  props: {
    beer: Object
  }
})
export default class BeerCard extends Vue {
  @beersModule.Action
  public fetchBeer!: (id: number) => void;
  @beersModule.Action
  public fetchRelated!: (id: number) => void;

  public async fetchData(id: number): Promise<void> {
    await this.fetchBeer(id);
    await this.fetchRelated(id);
  }
}
</script>

<style scoped lang="scss">
.intro {
  background-color: white;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
  margin: 20px 20px 20px 20px;
  min-height: 70vh;
  max-width: 27%;
  min-width: 27%;
  position: relative;
}

.beerImage {
  max-width: 80px;
  min-height: 40%;
}
.defaultImage {
  max-width: 200%;
  min-height: 63%;
}
.intro:hover .container {
  opacity: 0.2;
}
.intro:hover .overlay {
  opacity: 1;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h6 {
  width: 180%;
  display: flex;
  justify-content: center;
  font-size: 1em;
  flex-direction: column;
  align-items: center;
}

h3 {
  font-size: 1.55rem;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: 0.5s ease;
  min-height: 66vh;
  max-width: 100%;
  display: flex;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  color: white;
  border: 3px solid white;
}

// Media Queries

@media (max-width: 700px) {
  .intro {
    grid-template-columns: 1fr;
    min-width: 90%;
    min-height: 55vh;
  }
  .beerImage {
    max-width: 55px;
    min-height: 30%;
  }
  .defaultImage {
    max-width: 60%;
    min-height: 40%;
  }
  .info {
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  .overlay {
    min-height: 43vh;
  }
}
</style>
