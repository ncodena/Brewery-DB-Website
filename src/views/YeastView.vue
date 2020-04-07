<template>
  <div class="beersList">
    <beer-card
      v-for="beer in indexBeersByCategory"
      :beer="beer"
      :key="beer.id"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import BeerCard from "@/components/BeerCard.vue";
export default {
  name: "YeastView",
  props: {
    beer: Object
  },
  methods: {
    ...mapActions(["fetchBeersCategory"])
  },
  computed: {
    ...mapGetters(["indexBeersByCategory"])
  },
  created() {
    const yeast = window.location.href.split("/").pop();
    this.fetchBeersCategory(yeast);
    console.log(this.indexCategories);
  },
  components: {
    BeerCard
  }
};
</script>

<style scoped lang="scss">
.beersList {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

h1 {
  color: white;
}
</style>
