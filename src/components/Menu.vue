<template>

  <div class="hello">
   <!-- <h1>{{hi}}</h1> -->
   <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">{{brandName}}</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">{{home}}</b-nav-item>
        <b-nav-item href="#">{{categories}}</b-nav-item>
        <b-nav-item href="#">{{random}}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  </div>

</template>


<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private brandName!: string;
  @Prop() private home!: string;
  @Prop() private categories!: string;
  @Prop() private random!: string
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>