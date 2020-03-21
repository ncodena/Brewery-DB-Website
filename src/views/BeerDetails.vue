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
    const name = window.location.href.split("/").pop();
    console.log(name)
    this.fetchBeer(name, null);
  }
  // components: {
  //   BeerCard
  // }
};
</script>

<style lang="scss"></style>
