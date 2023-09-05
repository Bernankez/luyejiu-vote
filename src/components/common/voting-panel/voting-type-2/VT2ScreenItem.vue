<template>
  <div class="flex flex-1 flex-col items-center justify-center">
    <div :class="[icon, animation ? 'bounce' : '']"></div>
    <div class="relative">
      <div class="opacity-8">
        888
      </div>
      <div class="absolute left-0 top-0 w-full text-end">
        {{ count || 0 }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon?: string;
  count?: number | string;
  animation?: boolean;
  animationDuration?: number;
}>(), {
  animationDuration: 1,
});

const animationDuration = computed(() => `${props.animationDuration}s`);
</script>

<style scoped>
.bounce {
  animation: bounce v-bind(animationDuration) steps(1, end) infinite;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
