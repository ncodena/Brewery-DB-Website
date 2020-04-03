<template>
  <div class="beerContainer">
    <h1>hi</h1>
    <beer-card v-for="beer in randomData" :beer="beer" :key="beer.id" />
  </div>
</template>

<script>
// @ is an alias to /src
import BeerCard from "@/components/BeerCard.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "RandomizerView",
  props: {
    beer: Object
  },
  methods: {
    ...mapActions(["fetchRandomBeer"])
  },
  computed: {
    ...mapGetters(["randomData"])
  },
  created() {
    this.fetchRandomBeer();
    console.log(this.randomData);
  },
  components: {
    BeerCard
  }
};
</script>

<style scoped lang="scss">
h1 {
  color: white;
}

.beerContainer {
  display: flex;
  justify-content: center;
}
</style>
