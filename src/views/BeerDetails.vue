<template>
  <div class="beerDetails">
    <Details v-for="beer in detailsBeer" :beer="beer" :key="beer.id" />

  </div>
</template>

<script>
// @ is an alias to /src
import Details from "@/components/Details.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BeerDetails",
  props: {
    beer: Object
  },
  methods: {
    ...mapActions(["fetchBeer"]),
    ...mapActions(["fetchRelated"])
  },
  computed:{
    ...mapGetters(["detailsBeer"]),
    ...mapGetters(["indexRelatedBeers"])
  },
  created() {
    const name = window.location.href.split("/").pop();
    console.log(name);
    this.fetchBeer(name);
    this.fetchRelated(name)
  },
  components: {
    Details
  }
};
</script>

<style lang="scss"></style>
