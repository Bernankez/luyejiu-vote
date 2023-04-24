<template>
  <div class="shrink-0 flex items-center flex-gap-2">
    <NBadge dot :color="color" />
    <span class="text-4 cursor-default select-none">
      <slot>{{ title }}</slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { blue, green, orange, red } from "@/styles/color";

const props = withDefaults(defineProps<{
  title?: string;
  status?: "success" | "error" | "info" | "warning";
}>(), {
  title: "",
  status: "info",
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
    default:
      return blue[500];
  }
});
</script>
