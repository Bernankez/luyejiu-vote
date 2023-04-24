<template>
  <NConfigProvider abstract :theme-overrides="themeOverrides" :locale="zhCN" :date-locale="dateZhCN">
    <NMessageProvider>
      <slot></slot>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { NConfigProvider, NMessageProvider, dateZhCN, zhCN } from "naive-ui";
import { themeOverrides } from "@/styles/theme";
</script>
