<template>
  <div class="flex flex-col justify-end h-full w-10">
    <div class="vote-bar transition-all" :style="{ backgroundColor: props.color }"></div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  color?: string;
  percentage?: number;
}>(), {
  color: "black",
  percentage: 0,

});
</script>

<style scoped>
.vote-bar {
  height: calc(v-bind("props.percentage") * 100%);
}
</style>
