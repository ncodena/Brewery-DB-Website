<template>
  <div class="footer">
    <h2>hi</h2>
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
  flex-shrink: 0;
  bottom: 0;
  width: 100%;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  position: fixed;
}
</style>
