<template>
  <div class="beerDetails">
    <Details v-for="beer in detailsBeer" :beer="beer" :key="beer.id" />

    <div class="recommendations">
      <h2>Similar</h2>
      <div class="beersList">
        <beer-card
          v-for="beer in indexRelatedBeers"
          :beer="beer"
          :key="beer.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Details from "@/components/Details.vue";
import BeerCard from "@/components/BeerCard.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BeerDetails",
  props: {
    beer: Object
  },
  methods: {
    ...mapActions(["fetchBeer"]),
    ...mapActions(["fetchRelated"]),
    ...mapActions(["resetState"])
  },
  computed: {
    ...mapGetters(["detailsBeer"]),
    ...mapGetters(["indexRelatedBeers"])
  },
  created() {
    const id = window.location.href.split("/").pop();
    this.fetchBeer(id);
    this.fetchRelated(id);
  },
  beforeUpdate() {
    // called when the route that renders this component has changed,
    // but this component is reused in the new route.
    // For example, for a route with dynamic params `/foo/:id`, when we
    // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
    // will be reused, and this hook will be called when that happens.
    // has access to `this` component instance.

    const id = window.location.href.split("/").pop();
    this.fetchBeer(id);
    this.fetchRelated(id);
    return
  },
  // beforeUpdate() {
  //   this.resetState();
  //   const id = window.location.href.split("/").pop();
  //   this.fetchBeer(id);
  //   this.fetchRelated(id);
  //   return
  // },
  components: {
    Details,
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
.beersList {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
