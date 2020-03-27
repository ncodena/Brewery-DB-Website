<template>
  <div class="wrapper" :key="beer.id">
    <!-- Header -->
    <div class="header">
      <h2 class="align">{{ beer.name }}</h2>
      <h4 class="align">{{ beer.tagline }}</h4>
    </div>

    <section class="intro">
      <div class="imageContainer">
        <img v-if="beer.image_url" :src="beer.image_url" img-alt="image" />
      </div>
      <div class="description">
        <h4>First Brewed: {{ beer.first_brewed }}</h4>
        <p class="info">{{ beer.description }}</p>
      </div>
    </section>

    <section class="properties">
      <div class="property">
        <h5>ABV <i class="far fa-question-circle" v-b-tooltip.hover title="A standard measure of how much alcohol (ethanol) is contained in a given
        volume of an alcoholic beverage (expressed as a volume percent)."></i></h5>
        <h5>{{ beer.abv }}</h5>
      </div>

      <div class="property">
        <h5>OG <i class="far fa-question-circle" v-b-tooltip.hover title="Original Gravity (abbreviated OG) is a measure of the fermentable and
        unfermentable substances in a beer wort before fermentation. Those
        substances are often the sugars that will be converted to alcohol during
        the fermentation process."></i></h5>
        <h5>{{ beer.target_og }}</h5>
      </div>

      <div class="property">
        <h5>IBU <i class="far fa-question-circle" v-b-tooltip.hover title="It is the gauge of beer's bitterness. What IBUs measure are the parts
        per million of isohumulone found in a beer, the acid found in hops that
        gives beer its bitter bite."></i></h5>
        <h5>{{ beer.ibu }}</h5>
      </div>
    </section>

    <section class="boxes">
      <div class="box">
        <div class="text">
          <i class="fas fa-leaf fa-2x"></i>
          <h4>Malts</h4>
          <div class="wrap-features">
            <span
              v-for="malt in beer.ingredients.malt"
              :malt="malt"
              :key="malt.name"
            >
              <p class="feature">{{ malt.name }}</p>
            </span>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="text">
          <i class="fas fa-seedling fa-2x"></i>
          <h4>Hops</h4>
          <div class="wrap-features">
            <span
              v-for="hop in beer.ingredients.hops"
              :hop="hop"
              :key="hop.name"
            >
              <p class="feature">{{ hop.name }}</p>
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="boxes">
      <div class="box">
        <div class="text">
          <i class="fas fa-utensils fa-2x"></i>
          <h4>Food Pairing</h4>
          <span v-for="dish in beer.food_pairing" :dish="dish" :key="dish">
            <p>{{ dish }}</p>
          </span>
        </div>
      </div>

      <div class="box">
        <div class="text">
          <i class="fas fa-comment fa-2x"></i>
          <h4>Brewer Tip</h4>
          <p>{{ beer.brewers_tips }}</p>
        </div>
      </div>
    </section>

    <!-- Top Container -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Menu from "@/components/Menu.vue";
export default {
  name: "Details",
  props: {
    beer: Object
  }
  //   created(){
  //     console.log(this.beer)
  //   }
};
</script>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-gap: 20px;
}
.header {
  display: flex;
  color: white;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 30px;
}
.align {
  display: flex;
  justify-content: center;
}
.intro {
  color: white;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
}

h2 {
  font-weight: bold;
}
.info {
  font-size: 25px;
  text-align: justify;
}
.imageContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  max-width: 130px;
  min-height: 40%;
}
.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.properties {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}
.property {
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  clip-path: circle(50%);
  height: 10em;
  width: 10em;
  transition: 0.5s;
  opacity: 0.7;
}
.property:hover {
  opacity: 1;
}
.feature {
  border: 4px solid black;
  border-radius: 5px;
  background-color: black;
  color: white;
  margin-right: 8px;
}

.toasts {
  display: flex;
  justify-content: center;
}
.wrap-features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
// Boxes
.boxes {
  display: grid;
  grid-gap: 20px;
  margin: 0px 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.box {
  background: white;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  text-align: center;
  padding: 1.5rem 2rem;
  border: 10px solid black;
}

.text {
  transition: transform 0.6s;
}

.text:hover {
  -ms-transform: scale(1); /* IE 9 */
  -webkit-transform: scale(1); /* Safari 3-8 */
  transform: scale(1.1);
}
// Media Queries
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
}
</style>
