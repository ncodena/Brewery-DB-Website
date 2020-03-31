<template>
  <div class="sortingContainer">
    Sort by:
    <select>
        <option value=""></option>
    </select>
  </div>
</template>

<script>
// @ is an alias to /src
// import Menu from "@/components/Menu.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SortEngine",
  props: {
    beer: Object
  },
  methods: {
    ...mapActions(["fetchBeers"])
  },
  computed: {
    ...mapGetters(["indexBeers"])
  },
  created() {
    this.fetchBeers();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  bottom: 0;
  width: 100%;
  background-color: #2b2a29;
  color: white;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
</style>
