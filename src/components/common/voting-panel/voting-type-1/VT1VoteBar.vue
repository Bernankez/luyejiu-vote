<template>
  <div class="h-full w-10 flex flex-col justify-end">
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
