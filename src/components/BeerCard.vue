<template>
  <section class="intro">
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
      <div class="details">
        <h6 class="info name">
          <strong>{{ beer.name }}</strong>
        </h6>
        <h6 class="info">{{ beer.first_brewed }}</h6>
        <h6 class="info">{{ beer.abv }}%</h6>
      </div>
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
  max-height: 43vh;
  min-height: 43vh;
  max-width: 20%;
  min-width: 20%;
  position: relative;
  
}

.beerImage {
  max-width: 60px;
  min-height: 30%;
}
.defaultImage {
  max-width: 100%;
  min-width: 106%;
  max-height: 129px;
  min-height: 129px;
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
  justify-content: center;
  align-items: center;
}

h6 {
  display: flex;
  justify-content: center;
  font-size: 1em;
  flex-direction: column;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
}

.name {
  display: flex;
  justify-content: center;
  font-size: 1.2em;
  align-content: center;
  width: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: 0.5s ease;
  min-height: 35vh;
  max-width: 100%;
  display: flex;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 60vh;
  background-color: black;
  color: white;
  border: 3px solid white;
}


// Media Queries

@media (max-width: 1280px){
  .intro {
    max-width: 44%;
    min-width: 44%;
    max-height: 36vh;
    min-height: 36vh;

  }

}

@media (max-width: 700px) {
  .intro {
    grid-template-columns: 1fr;
    min-width: 70%;
    max-width: 70%;
    min-height: 57vh;
    max-height: 57vh;
    
  }
  .beerImage {
    max-width: 50px;
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

  .details {
    width: 150%;
  }

  .details h6 {
    font-size: 1em;
  }
}
</style>
