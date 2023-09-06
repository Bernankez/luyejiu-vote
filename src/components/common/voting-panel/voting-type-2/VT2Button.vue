<template>
  <div class="btn" :class="[`btn--${theme}`]" role="button">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  theme?: "dark" | "light";
  shadowColor?: string;
}>(), {
  theme: "dark",
});

const defaultShadowColor = {
  dark: "rgb(125 136 134 / 79%)",
  light: "#aaa",
};
const shadowColor = computed(() => {
  if (props.shadowColor) {
    return props.shadowColor;
  }
  return defaultShadowColor[props.theme];
});
</script>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: 9999px;
  font-size: 3rem;
}

.btn--dark {
  color: #ddd;
  background-image: linear-gradient(6deg, #202020, #282828 89%);
  box-shadow:
    inset -1px 2px 4px #4a4a4a,
    -1px -1px 2px #000,
    -3px 6px 7px v-bind(shadowColor);
}

.btn--light {
  color: #333;
  background-image: linear-gradient(6deg, #ccc, #eee 89%);
  box-shadow:
    inset -1px 2px 4px #fff,
    -1px -1px 2px #fff,
    -3px 6px 7px v-bind(shadowColor);
}

.btn--dark:active {
  box-shadow:
    inset 0 0 0 #4a4a4a,
    -1px -1px 2px #000,
    0 0 0 rgb(125 136 134 / 79%);
}

.btn--light:active {
  box-shadow:
    inset 0 0 0 #fff,
    -1px -1px 2px #eee,
    0 0 0 rgb(125 136 134 / 79%);
}
</style>
