<template>
  <div class="beerContainer">
    <h5 class="text">Press the button and discover your next favourite beer</h5>
    <b-button class="text" @click="fetchRandomBeer()">Discover</b-button>
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
.beerContainer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.text {
  color: white;
  padding: 12px 10px 12px;
}
</style>
