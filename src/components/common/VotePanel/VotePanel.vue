<template>
  <LCard>
    <LCD class="flex flex-gap-5 text-10">
      <div class="flex flex-1 flex-col items-center justify-center">
        <div class="i-fluent-emoji-high-contrast:smiling-face-with-halo"></div>
        <div class="relative">
          334
          <div class="digital-shadow">
            888
          </div>
        </div>
      </div>
      <div class="flex flex-1 flex-col items-center justify-center">
        <div class="i-fluent-emoji-high-contrast:smiling-face-with-horns"></div>
        <div class="relative">
          323
          <div class="digital-shadow">
            333
          </div>
        </div>
      </div>
    </LCD>
    <div class="m-t-3 w-full flex justify-evenly">
      <LKeyboard theme="light">
        <div class="i-ion:caret-up text-7">
          fff
        </div>
      </LKeyboard>
      <LKeyboard>
        <div class="i-ion:caret-down text-7">
          fff
        </div>
      </LKeyboard>
    </div>
  </LCard>
</template>

<script setup lang="ts">
// const { connect, disconnect } = useConnection("2046239");

// console.log(getRoomInfo(2046239));
</script>

<style scoped>
.digital-shadow {
  position: absolute;
  top: 0;
  z-index: 0;
  display: block;
  opacity: 0.08;
  content: "888";
}
</style>
