<template>
  <h1>hello from yeast view</h1>
</template>

<script>
// @ is an alias to /src
// import { mapGetters, mapActions } from "vuex";
export default {
  name: "YeastView",
//   props: {
//     beer: Object
//   },
//   methods: {
//     ...mapActions(["fetchforYeast"]),
//   },
//   computed: {
//     ...mapGetters(["indexCategories"])
//   },
//   created() {
//     this.fetchCategories();
//     console.log(this.indexCategories);
//   }
};
</script>

<style scoped lang="scss">
.beerContainer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

p {
  color: white;
}
</style>