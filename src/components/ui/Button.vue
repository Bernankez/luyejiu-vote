<template>
  <div class=" p-x-4 p-y-0.5 box-border rounded-2 text-4.5 font-bold text-orange-500 b-2 b-solid b-orange-500 bg-gray-50 cursor-default hover:bg-gray-100 active:bg-gray-200">
    <slot name="icon"></slot>
    <slot>{{ props.title }}</slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
}>();
</script>
