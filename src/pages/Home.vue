<template>
  <div class="min-h-full flex justify-center items-center">
    <div class="flex flex-gap-3">
      <VotePanel class="shrink-0" />
      <Transition name="fade">
        <LogPanel v-if="showLog" />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

const { showLog } = storeToRefs(useConfigStore());
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
