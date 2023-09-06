<template>
  <div class="w-fit">
    <div class="led">
      <div class="led-light"></div>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T extends string">
import { colord } from "colord";

const props = withDefaults(defineProps<{
  state?: T;
  colorMap?: Record<T | string, string>;
  light?: boolean;
}>(), {
  light: false,
});

const defaultColor = "#999";
const color = computed(() => {
  let color;
  if (!props.state || !props.colorMap) {
    color = defaultColor;
  } else {
    color = props.colorMap[props.state];
  }
  return colord(color).saturate(0.1).toHex();
});

const shadow = computed(() => props.light ? `0 0 3em ${color.value}` : "");
</script>

<style scoped>
.led {
  border: 1px solid #333;
  border-radius: 9999px;
  box-shadow: v-bind(shadow);
}

.led-light {
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  background-color: v-bind(color);
  box-shadow:
    inset 0 3px 2px #fff9,
    inset 0 -3px 3px #0009;
}
</style>
