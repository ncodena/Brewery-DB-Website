<template>
  <div class="hello">
   <h1>{{hi}}</h1>
  </div>
</template>


<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private hi!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>