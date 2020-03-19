<template>
  <b-card
    no-body
    :key="beer.id"
    class="overflow-hidden"
    style="max-width: 540px;"
  >
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img
          v-if="beer.image_url"
          :src="beer.image_url"
          img-alt="image"
          class="rounded-0"
        />
        <b-card-img
          v-else
          src="assets/beer.png"
          img-alt="no_image"
          class="rounded-0"
        ></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="beer.name"> </b-card-body>
      </b-col>
    </b-row>
    <div class="middle">
      <div class="text">
        <b-card-text>
          {{ beer.tagline }}
        </b-card-text>
        <h3>{{ beer.ingredients.yeast }}</h3>
        <router-link :to="'/beers/' + beer.name"><b-button>Details</b-button></router-link
        >
      </div>
    </div>
  </b-card>
  <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <Menu brandName="Brewery DB" home="Home" categories="Our Beers" random="Discover"/> -->
</template>

<script>
// @ is an alias to /src
// import Menu from "@/components/Menu.vue";
export default {
  name: "Home",
  props: {
    beer: Object
  },
//   created(){
//     console.log(this.beer)
//   }
};
</script>

<style lang="scss">
.card-img {
  max-width: 80px;
  min-height: 40%;
}
.overflow-hidden:hover .no-gutters {
  opacity: 0.2;
}
.overflow-hidden:hover .middle {
  opacity: 1;
}
.overflow-hidden {
  max-width: 540px;
  max-height: 407px;
  min-height: 70vh;
  margin: 20px 20px 20px 20px;
}

.no-gutters {
  min-width: 368px;
  max-width: 368px;
  opacity: 1;
  transition: 1.1s ease;
  backface-visibility: hidden;
}
.col-md-6 {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}
.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
