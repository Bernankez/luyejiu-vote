<template>
  <div class="flex items-center flex-gap-2 cursor-default">
    <div class="font-bold">
      {{ props.index }}
    </div>
    <div class="flex w-full items-center flex-gap-1">
      <div>👼🏻</div>
      <div class="w-full h-3 flex rounded-1 overflow-hidden">
        <Tooltip wrapper-class="positive-percentage h-full" placement="top">
          <div class="w-full h-full bg-light-blue-500"></div>
          <template #content>
            {{ positive }}
          </template>
        </Tooltip>
        <Tooltip wrapper-class="negative-percentage h-full" placement="top">
          <div class="w-full h-full bg-purple-500"></div>
          <template #content>
            {{ negative }}
          </template>
        </Tooltip>
      </div>
      <div>😈</div>
    </div>
    <Popover v-slot="{ close }" class="relative">
      <PopoverButton as="div" class="i-uil:multiply text-5 cursor-pointer" />
      <Transition name="popover">
        <PopoverPanel class="absolute w-50 bottom-100% right-0 m-b-3 z-10">
          <div class="flex flex-col flex-gap-2 items-center shadow bg-gray-50 p-3 p-b-2 box-border rounded-2 font-bold">
            确定要删除{{ props.index }}号吗？
            <div class="flex items-center justify-evenly font-normal">
              <div class="p-x-3 rounded-1 hover:bg-gray-100 active:bg-gray-200" @click="() => onCancel(close)">
                取消
              </div>
              <div class="p-x-3 rounded-1 hover:bg-gray-100 active:bg-gray-200" @click="() => onConfirm(close)">
                确定
              </div>
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import type { Fn } from "@vueuse/core";
import { computed } from "vue";
import Tooltip from "../ui/Tooltip.vue";
import { getCountPercentage } from "@/utils";

const props = withDefaults(defineProps<{
  id?: string;
  positive?: number;
  negative?: number;
  index?: number;
}>(), {
  id: "",
  positive: 0,
  negative: 0,
  index: 1,
});

const emit = defineEmits<{
  (event: "remove", id: string): void;
}>();

const onCancel = (close: Fn) => {
  close();
};

const onConfirm = (close: Fn) => {
  emit("remove", props.id);
  close();
};

const percentage = computed(() => getCountPercentage(props.positive, props.negative));
</script>

<style scoped>
:global(.positive-percentage) {
  width: v-bind("`${percentage.positivePercentage * 100}%`");
}

:global(.negative-percentage) {
  width: v-bind("`${percentage.negativePercentage * 100}%`");
}

.popover-enter-active,
.popover-leave-active {
  transition: all 0.15s ease-out;
}

.popover-enter-from,
.popover-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
