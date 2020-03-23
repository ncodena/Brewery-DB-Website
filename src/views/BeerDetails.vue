<template>
  <div class="beerDetails">
    <h1>This is the details beer page</h1>
    <div v-for="beer in detailsBeer" :beer="beer" :key="beer.id">
      <h3>{{beer.name}}</h3>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BeerDetails",
  // props: {
  //   beer: Object
  // },
  methods: {
    ...mapActions(["fetchBeer"])
  },
  computed: mapGetters(["detailsBeer"]),
  created() {
    const name = window.location.href.split("/").pop();
    console.log(name);
    this.fetchBeer(name);
  }
  // components: {
  //   BeerCard
  // }
};
</script>

<style lang="scss"></style>
