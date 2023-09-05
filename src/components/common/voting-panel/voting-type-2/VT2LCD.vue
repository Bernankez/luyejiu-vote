<template>
  <div class="b-1 b-[#394b21] rounded-2 b-solid bg-[#485055]">
    <div v-bind="$attrs" class="lcd-screen">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.lcd-screen {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: #181921;
  font-family: "DSEG7 Classic Mini", "Kenney Pixel", monospace;
  background-color: #d3ffb8;

  /* TODO x=0 */
  box-shadow: inset -2px 5px 10px #2a421a;
  opacity: 0.6;
}

.lcd-screen::after {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;

  /* TODO background */

  /* background: linear-gradient(40deg, #fff0 15%, #fff2 30%, #fff6 50%, #fff2 70%, #fff0 85%); */
  content: "";
}
</style>
