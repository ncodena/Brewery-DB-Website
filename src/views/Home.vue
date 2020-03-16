<template>
  <div class="home">
    <div class="beersContainer">
      <b-card
        no-body
        v-for="beer in indexBeers"
        :key="beer.id"
        class="overflow-hidden"
        style="max-width: 540px;"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-if="beer.image_url"
              :src="beer.image_url"
              img-alt="image"
              class="rounded-0"/>
            <b-card-img v-else
              src="assets/beer.png"
              img-alt="no_image"
              class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="beer.name">
              <b-card-text>
                {{ beer.tagline }}
              </b-card-text>
              <b-button href="#">Details</b-button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <div class="middle">
        <div class="text">
          <h1>hiiiiiiiiiiiiiiii</h1>
        </div>
    </div>
    </div>

    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <Menu brandName="Brewery DB" home="Home" categories="Our Beers" random="Discover"/> -->
  </div>
</template>

<script>
// @ is an alias to /src

// import Menu from "@/components/Menu.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  methods: {
    ...mapActions(["fetchBeers"])
  },
  computed: mapGetters(["indexBeers"]),
  created() {
    this.fetchBeers();
  }
  // components: {
  //   Menu,
  // }
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
  opacity: 5;
}

.overflow-hidden {
  max-width: 540px;
  max-height: 407px;
  min-height: 70vh;
  margin: 20px 20px 20px 20px;
}

.beersContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.no-gutters {
  min-width: 368px;
  max-width: 368px;
  opacity: 1;
  transition: .10s ease;
  backface-visibility: hidden;
}

.col-md-6 {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}
.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%)
}
.text {
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>
