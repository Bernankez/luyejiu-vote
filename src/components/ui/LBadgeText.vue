<template>
  <div class="flex shrink-0 items-center flex-gap-2">
    <span v-if="type === 'primary'" :style="{ backgroundColor: color }" class="box-border cursor-default select-none rounded-1.5 p-x-2 p-y-0.3 text-4 font-bold text-white">
      <slot>{{ title }}</slot>
    </span>
    <div v-else-if="type === 'simple'" class="box-border flex cursor-default select-none items-center flex-gap-1.5 text-4 font-bold">
      <div class="h-1.8 w-1.8 rounded-full" :style="{ backgroundColor: color }"></div>
      <div :style="{ color }">
        <slot>
          {{ title }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { blue, gray, green, orange, red } from "@/styles/color";

const props = withDefaults(defineProps<{
  title?: string;
  status?: "default" | "success" | "error" | "info" | "warning";
  type?: "primary" | "simple";
}>(), {
  title: "",
  status: "info",
  type: "primary",
});

const color = computed(() => {
  switch (props.status) {
    case "info":
      return blue[500];
    case "success":
      return green[400];
    case "warning":
      return orange[500];
    case "error":
      return red[500];
    case "default":
    default:
      return gray[400];
  }
});
</script>
