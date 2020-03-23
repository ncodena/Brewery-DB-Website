<template>
  <div :key="beer.id">
    
  </div>
</template>

<script>
// @ is an alias to /src
// import Menu from "@/components/Menu.vue";
export default {
  name: "BeerDetails",
  props: {
    beer: Object
  }
  //   created(){
  //     console.log(this.beer)
  //   }
};
</script>

<style lang="scss">
</style>
