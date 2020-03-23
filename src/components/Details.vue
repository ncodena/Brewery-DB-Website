<template>
  <div :key="beer.id">
    <h3>{{ beer.name }}</h3>
  </div>
</template>

<script>
// @ is an alias to /src
// import Menu from "@/components/Menu.vue";
export default {
  name: "Details",
  props: {
    beer: Object
  }
  //   created(){
  //     console.log(this.beer)
  //   }
};
</script>

<style lang="scss"></style>
