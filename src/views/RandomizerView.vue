<template>
  <div class="beerContainer">
        <beer-card
          v-for="beer in randomData"
          :beer="beer"
          :key="beer.id"
        />
      </div>
</template>

<script>
// @ is an alias to /src
import BeerCard from "@/components/BeerCard.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BeerDetails",
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
  },
  components: {
    BeerCard
  }
};
</script>

<style scoped lang="scss">
h2 {
  font-size: 1.75rem;
  color: white;
  display: flex;
  justify-content: center;
  padding-top: 5%;
}
.beerContainer {
  display: flex;
  justify-content: center;
}
</style>
