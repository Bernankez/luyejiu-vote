<template>
  <NConfigProvider :theme-overrides="themeOverrides" :locale="zhCN" :date-locale="dateZhCN">
    <slot></slot>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { NConfigProvider, dateZhCN, zhCN } from "naive-ui";
import { themeOverrides } from "@/styles/theme";
</script>
