<template>
  <div class="beerDetails">
    <div v-if="isLoading"></div>
    <Details v-else v-for="beer in detailsBeer" :beer="beer" :key="beer.id" />
    <div v-if="isLoading"></div>
    <div v-else class="recommendations">
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
// import Spinner from "@/components/Spinner.vue";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "BeerDetails",
  props: {
    beer: Object
  },
  methods: {
    ...mapActions(["fetchBeer"]),
    ...mapActions(["fetchRelated"])
  },
  computed: {
    ...mapGetters(["detailsBeer"]),
    ...mapGetters(["indexRelatedBeers"]),
    ...mapState({
      isLoading: state => state.isLoading
    })
  },
  async created() {
    const id = window.location.href.split("/").pop();
    await this.fetchBeer(id);
    await this.fetchRelated(id);
  },
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
