<template>
  <div class="beerDetails">
    <h1>This is the details beer page</h1>
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
    // const name = this.beer;

    // this.fetchBeer(name);
  }
  // components: {
  //   BeerCard
  // }
};
</script>

<style lang="scss"></style>
