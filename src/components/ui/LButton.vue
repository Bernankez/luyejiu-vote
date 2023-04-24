<template>
  <div
    role="button" class="l-button flex shrink-0 items-center flex-gap-2 rounded-2 text-4 font-bold b-2 b-solid bg-white select-none"
    :style="$attrs.style as CSSProperties"
    :class="[$attrs.class, { 'w-fit': !block }, disabled ? 'cursor-not-allowed!' : 'hover:bg-gray-50 active:bg-gray-100 cursor-pointer', (title || $slots.default) ? 'p-x-4 p-y-0.5' : 'p-1.5']"
    @click="onClick"
  >
    <slot name="icon"></slot>
    <slot>
      {{ title }}
    </slot>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from "vue";
import { gray, primary } from "@/styles/color";

const props = withDefaults(defineProps<{
  title?: string;
  disabled?: boolean;
  block?: boolean;
  color?: string;
  disabledColor?: string;
}>(), {
  title: "",
  disabled: false,
  block: false,
  color: primary[500],
  disabledColor: gray[400],
});

const emit = defineEmits<{
  (event: "click"): void;
}>();

const color = computed(() => props.disabled ? props.disabledColor : props.color);

const onClick = () => {
  !props.disabled && emit("click");
};
</script>

<style scoped>
.l-button {
  border-color: v-bind(color);
  color: v-bind(color);
}
</style>
