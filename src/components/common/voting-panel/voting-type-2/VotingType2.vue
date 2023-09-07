<template>
  <div class="machine relative box-border rounded-4 p-10 p-t-0">
    <div class="m-b-3 m-t-4 flex justify-center text-yellow-800">
      <VT2LED state="on" light :color-map="{ on: 'rgb(22, 163, 74)', off: 'rgb(229, 57, 53)', warn: 'rgb(249, 168, 37)' }" />
    </div>
    <div class="lcd-border box-border rounded-5 p-6">
      <VT2LCD class="flex flex-gap-5 text-10">
        <VT2ScreenItem class="text-blue" animation icon="i-fluent-emoji-high-contrast:smiling-face-with-halo" :count="123" />
        <VT2ScreenItem class="text-red" animation icon="i-fluent-emoji-high-contrast:smiling-face-with-horns" :count="123" />
      </VT2LCD>
    </div>
    <div class="m-t-3 box-border w-full flex justify-between rounded-full">
      <div class="flex flex-1 justify-center">
        <VT2Button class="relative h-12! w-12! text-8!" theme="light">
          <div class="absolute left-0 p-r-5 text-10 font-[Kenney_Pixel] text-dark -translate-x-100%">
            1
          </div>
          <div class="i-ion:caret-up"></div>
        </VT2Button>
      </div>
      <div class="flex flex-1 justify-center">
        <VT2Button class="relative h-12! w-12! text-8!">
          <div class="i-ion:caret-down"></div>
          <div class="absolute right-0 translate-x-100% p-l-5 text-10 font-[Kenney_Pixel] text-dark">
            2
          </div>
        </VT2Button>
      </div>
    </div>
    <div class="flex justify-center">
      <VT2Button class="h-24! w-24! text-14!">
        <div class="i-ion:play translate-x-1"></div>
        <div class="i-ion:stop translate-x-1"></div>
      </VT2Button>
    </div>
    <div class="flex">
      <div class="flex flex-1 justify-center">
        <VT2Button class="h-12! w-12! text-6.5!">
          <div class="i-ion:trash-outline"></div>
        </VT2Button>
      </div>
      <div class="flex flex-1 justify-center"></div>
    </div>
    <img :src="Sticker" class="absolute bottom-0 right-0 w-10 object-scale-down" />
  </div>
</template>

<script setup lang="ts">
import Sticker from "@/assets/images/sticker.png";
</script>

<style scoped>
.machine {
  border: 2px solid rgb(153 153 153);
  background-image: linear-gradient(to right, #adb9b3, #bec2c1 10%);
  box-shadow:
    -5px 6px 20px rgb(0 0 0 / 37%),
    -21px 17px 65px rgb(0 0 0 / 46%),
    inset -3px 0 4px #8e918e,
    inset -7px 0 7px #dfdfdf,
    inset 1px 0 3px #66696a,
    inset 3px 0 10px #616465,
    inset 0 3px 7px #919496,
    inset 0 4px 10px white;
}

.lcd-border {
  background-color: #485055;
  box-shadow:
    inset 0 1px 1px #aab3b0,
    0 1px 0 #5b5e63,
    0 2px 0 #ebebeb,
    1px 0 2px #d3d3d3,
    -1px 0 2px #cfcfcf,
    inset -1px 0 2px rgb(255 255 255 / 44%);
}

.button-track {
  box-shadow: 0 0 5px rgb(255 255 255 / 21%), 0 0 0 #babdbc, inset 6px -12px 22px rgb(0 0 0 / 12%);
}
</style>
