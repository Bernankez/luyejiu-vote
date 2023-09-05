<template>
  <div class="machine">
    <div class="lcd-border">
      <VT2LCD class="flex flex-gap-5 text-10">
        <VT2ScreenItem animation icon="i-fluent-emoji-high-contrast:smiling-face-with-halo" :count="123" />
        <VT2ScreenItem animation icon="i-fluent-emoji-high-contrast:smiling-face-with-horns" :count="123" />
      </VT2LCD>
    </div>
    <div class="w-fit w-full flex justify-center">
      <div class="test m-t-3 flex flex-gap-10 rounded-full p-3">
        <VT2Button theme="light">
          <div class="i-ion:caret-up"></div>
        </VT2Button>
        <VT2Button>
          <div class="i-ion:caret-down"></div>
        </VT2Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.machine {
  padding: 2.5rem;
  border: 2px solid rgb(153 153 153);
  border-radius: 1rem;
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
  box-sizing: border-box;
  padding: 2rem;
  border-radius: 1.25rem;
  background-color: #485055;
  box-shadow:
    inset 0 1px 1px #aab3b0,
    0 1px 0 #5b5e63,
    0 2px 0 #ebebeb,
    1px 0 2px #d3d3d3,
    -1px 0 2px #cfcfcf,
    inset -1px 0 2px rgb(255 255 255 / 44%);
}

.test {
  box-shadow: 0 0 5px rgb(255 255 255 / 21%), 0 0 0 #babdbc, inset 6px -12px 22px rgb(0 0 0 / 12%);
}
</style>
