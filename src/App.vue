<template>
  <ConfigProvider>
    <Header class="z-609" />
    <main>
      <Home />
    </main>
  </ConfigProvider>
</template>

<script setup lang="ts">
import Home from "@/pages/Home.vue";
</script>

<style scoped>
main {
  @apply w-full min-h-full grid p-5 box-border;

  padding-top: calc(4.5rem + 1.25rem);
}
</style>
