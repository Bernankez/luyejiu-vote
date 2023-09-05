<template>
  <div class="from-[#ADB9B3] via-[#BEC2C1] bg-gradient-to-r p-10">
    <div class="box-border rounded-5 bg-[#485055] p-10">
      <LCD class="flex flex-gap-5 text-10">
        <ScreenItem animation icon="i-fluent-emoji-high-contrast:smiling-face-with-halo" :count="123" />
        <ScreenItem animation icon="i-fluent-emoji-high-contrast:smiling-face-with-horns" :count="123" />
      </LCD>
    </div>
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
  </div>
</template>

<script setup lang="ts">
</script>
