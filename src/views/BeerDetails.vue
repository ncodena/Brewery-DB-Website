<template>
  <div class="beerDetails">
    <h1>This is the details beer page</h1>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: "BeerDetails",
  props: {
    beer: Object
  }
  // methods: {
  //   ...mapActions(["fetchBeers"])
  // },
  // computed: mapGetters(["indexBeers"]),
  // created() {
  //   this.fetchBeers();
  // },
  // components: {
  //   BeerCard
  // }
};
</script>

<style lang="scss">
</style>
