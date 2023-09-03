<template>
  <Header />
  <main class="grid box-border min-h-full w-full p-t-18">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
</script>

