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
        <h6>ABV</h6>
        {{ beer.abv }}
      </div>

      <div class="property">
        <h6>EBC</h6>
        {{ beer.ebc }}
      </div>

      <div class="property">
        <h6>PH</h6>
        {{ beer.ph }}
      </div>

      <div class="property">
        <h6>IBU</h6>
        {{ beer.ibu }}
      </div>
    </section>

    <section class="sheet">
      <div class="details">
        <h4>MALTS</h4>
        <div class="wrap-features">
          <span v-for="malt in beer.ingredients.malt" :malt="malt" :key="malt.name">
            <p class="feature">{{ malt.name }}</p>
          </span>
        </div>
      </div>
      <div class="details">
        <h4>HOPS</h4>
          <div class="wrap-features">
            <span class="" v-for="hop in beer.ingredients.hops" :hop="hop" :key="hop.name">
              <p class="feature">{{ hop.name }}</p>
            </span>
          </div>
      </div>
    </section>

    <section class="boxes">
      <div class="box">
        <i class="fas fa-utensils fa-2x"></i>
        <h3>Food Pairing</h3>
        <p>{{beer.food_pairing}}</p>
      </div>
      <div class="box">
        <i class="fas fa-comment fa-2x"></i>
        <h3>Brewer Tip</h3>
        <p>{{beer.brewers_tips}}</p>
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

<style lang="scss">
.wrapper {
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  grid-gap: 20px;
}
.header {
  display: flex;
  background: white;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.align {
  display: flex;
  justify-content: center;
}

.intro {
  background: white;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
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
  height: 7em;
  width: 7em;
}

.sheet {
  background: white;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
}
.details {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.feature {
  border: 4px solid black;
  border-radius: 5px;
  background-color: black;
  color: white;
  margin-right: 8px;
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
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)) ;
  }
  .box {
    background: white;
    text-align: center;
    padding: 1.5rem 2rem;
    box-shadow: gray;
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
  .sheet {
    grid-template-columns: 1fr;
  }
}
</style>
