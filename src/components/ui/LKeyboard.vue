<template>
  <div class="l-keyboard" :class="[`l-keyboard--${props.theme}`]">
    <div class="l-keyboard--roof" :class="[props.className]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Prop {
  width?: string;
  height?: string;
  className?: string;
  offset?: string;
  activeOffset?: string;
  activeScale?: `${number},${number}`;
  theme?: "dark" | "light";
}

const props = withDefaults(defineProps<Prop>(), {
  width: "50px",
  height: "50px",
  offset: "3px",
  activeOffset: "5px",
  activeScale: "0.95,0.95",
  theme: "dark",
});
</script>

<style scoped>
.l-keyboard {
  --keyboard-radius: 10px;
  --keyboard-offset: v-bind("props.offset");
  --keyboard-offset-active: v-bind("props.activeOffset");
  --keyboard-width: v-bind("props.width");
  --keyboard-height: v-bind("props.height");

  position: relative;
  width: var(--keyboard-width);
  height: var(--keyboard-height);
  border-radius: var(--keyboard-radius);
  overflow: hidden;
  cursor: pointer;
  user-select: none;
}

.l-keyboard:active {
  transform: scale(v-bind("props.activeScale"));
}

.l-keyboard:active .demo-keyboard--roof {
  top: var(--keyboard-offset-active);
  left: var(--keyboard-offset-active);
}

.l-keyboard--roof {
  position: absolute;
  top: var(--keyboard-offset);
  left: var(--keyboard-offset);
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - var(--keyboard-offset) * 3);
  height: calc(100% - var(--keyboard-offset) * 3);
  border-radius: var(--keyboard-radius);
}

.l-keyboard--dark {
  border: 1px solid #0009;
  color: white;
  background: linear-gradient(to bottom, #282828, #202020);
}

.l-keyboard--dark .l-keyboard--roof {
  background: linear-gradient(to right, #232323, #4a4a4a);
  box-shadow: -10px -10px 10px rgb(255 255 255 / 25%), 10px 5px 10px rgb(0 0 0 / 15%);
}

.l-keyboard--light .l-keyboard--roof {
  background: linear-gradient(to right bottom, #ddd, #fff);
  box-shadow: -10px -10px 10px rgb(255 255 255 / 25%), 10px 5px 10px rgb(0 0 0 / 10%);
}

.l-keyboard--dark:active .l-keyboard--roof {
  background: linear-gradient(75deg, #191919, #414141);
  box-shadow: -15px -15px 10px 7px rgb(255 255 255 / 25%), 10px 5px 10px rgb(0 0 0 / 15%);
}

.l-keyboard--light {
  border: 1px solid #eee;
  color: #333;
  background: linear-gradient(to bottom, #fff, #ddd);
}

.l-keyboard--light:active .l-keyboard--roof {
  background: linear-gradient(to right bottom, #ccc, #fff);
  box-shadow: -15px -15px 10px 7px rgb(255 255 255 / 25%), 10px 5px 10px rgb(0 0 0 / 15%);
}
</style>
