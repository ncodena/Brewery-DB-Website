<template>
  <div class="home">
    <h1>hi</h1>
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
            <b-card-img
              :src="beer.image_url"
              img-alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="beer.name">
              <b-card-text>
                {{ beer.tagline }}
              </b-card-text>
              <b-button href="#" variant="primary">Details</b-button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
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

.overflow-hidden {
  max-width: 540px;
  max-height: 407px;
  min-height: 70vh;
}

.beersContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.no-gutters {
  min-width: 368px;
  max-width: 368px;
}

.col-md-6 {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}
</style>
