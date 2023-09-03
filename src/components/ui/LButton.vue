<template>
  <div
    ref="buttonRef"
    role="button" class="l-button flex shrink-0 select-none items-center flex-gap-2 b-2 rounded-2 b-solid bg-white text-4 font-bold"
    :style="$attrs.style as CSSProperties"
    :class="[$attrs.class, { 'w-fit': !block }, disabled ? 'cursor-not-allowed!' : 'hover:bg-gray-50 active:bg-gray-100 cursor-pointer', (title || $slots.default) ? 'p-x-4 p-y-0.5' : 'p-1.5']"
    @click="onClick"
    @mouseup="onMouseUp"
    @mouseleave="onMouseLeave"
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
  defaultLongpressDelay?: number;
}>(), {
  title: "",
  disabled: false,
  block: false,
  color: primary[500],
  disabledColor: gray[400],
  omitClickOnLongPress: true,
  defaultLongpressDelay: 500,
});

const emit = defineEmits<{
  "click": [e: MouseEvent];
  "longpress": [e: PointerEvent | MouseEvent, pressing: boolean];
  "mouseup": [e :MouseEvent];
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

const onMouseLeave = (e: MouseEvent) => {
  // 防止鼠标长按过程中移出元素导致无法接受click事件，进而无法结束longpress
  if (longpressing.value) {
    longpressing.value = false;
    emit("longpress", e, false);
  }
};

const longpressing = ref(false);
const buttonRef = ref<HTMLDivElement>();
onLongPress(buttonRef, onLongPressed, { delay: props.defaultLongpressDelay });
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
