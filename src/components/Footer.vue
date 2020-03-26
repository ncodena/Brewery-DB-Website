<template>
  <div class="footer">
    <h6>BREWDOG | 2020</h6>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Footer extends Vue {
  //   @Prop() private msg!: string;
}
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
