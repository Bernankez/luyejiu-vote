<template>
  <div class="relative box-border b-4 b-primary-300 rounded-4 from-primary-50 to-primary-100 bg-gradient-to-rb p-3">
    <div v-if="$slots.title" class="text-7 font-bold text-primary-600">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div v-if="$slots.default" :class="$slots.title ? 'm-t-3' : ''">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>
