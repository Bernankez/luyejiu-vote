<template>
  <div
    ref="buttonRef"
    role="button" class="l-button flex shrink-0 items-center flex-gap-2 rounded-2 text-4 font-bold b-2 b-solid bg-white select-none"
    :style="$attrs.style as CSSProperties"
    :class="[$attrs.class, { 'w-fit': !block }, disabled ? 'cursor-not-allowed!' : 'hover:bg-gray-50 active:bg-gray-100 cursor-pointer', (title || $slots.default) ? 'p-x-4 p-y-0.5' : 'p-1.5']"
    @click="onClick"
    @mouseup="onMouseUp"
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
  /** longpress事件时不触发click */
  omitClickOnLongPress?: boolean;
}>(), {
  title: "",
  disabled: false,
  block: false,
  color: primary[500],
  disabledColor: gray[400],
  omitClickOnLongPress: true,
});

const emit = defineEmits<{
  (event: "click", e: MouseEvent): void;
  (event: "longpress", e: PointerEvent | MouseEvent, pressing: boolean): void;
  (event: "mouseup", e: MouseEvent): void;
}>();

const color = computed(() => props.disabled ? props.disabledColor : props.color);

const onClick = (e: MouseEvent) => {
  if (!props.disabled) {
    if (!longpressing.value || !props.omitClickOnLongPress) {
      emit("click", e);
    }
    // 触发顺序为 mousedown mouseup click
    // 所以在click中判断长按结束
    if (longpressing.value) {
      longpressing.value = false;
      emit("longpress", e, false);
    }
  }
};

const longpressing = ref(false);
const buttonRef = ref<HTMLDivElement>();
onLongPress(buttonRef, onLongPressed, { delay: 500 });
function onLongPressed(e: PointerEvent) {
  if (!props.disabled) {
    longpressing.value = true;
    emit("longpress", e, true);
  }
}
function onMouseUp(e: MouseEvent) {
  if (!props.disabled) {
    emit("mouseup", e);
  }
}
</script>

<style scoped>
.l-button {
  border-color: v-bind(color);
  color: v-bind(color);
}
</style>
