<template>
  <NTooltip :show-arrow="false" :content-style="style" raw>
    <template #trigger>
      <slot name="trigger"></slot>
    </template>
    <slot></slot>
  </NTooltip>
</template>

<script setup lang="ts">
import type { CSSProperties } from "vue";

const style: CSSProperties = {
  backgroundColor: "white",
  color: "#333",
  padding: "4px 6px",
  borderRadius: "6px",
  boxShadow: "var(--n-box-shadow)",
};
</script>

<style scoped>
:global(.n-popover--raw) {
  box-shadow: unset !important;
}
</style>
