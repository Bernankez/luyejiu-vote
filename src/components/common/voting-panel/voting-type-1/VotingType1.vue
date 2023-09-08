<template>
  <LCard class="w-70">
    <div class="flex flex-col items-center flex-gap-3">
      <div class="w-full flex justify-evenly">
        <div class="i-ph:paw-print-fill text-5 text-orange-400 -translate-y-0.5 -rotate-30"></div>
        <div class="i-ph:paw-print-fill translate-y-0.5 rotate-30 text-5 text-orange-400"></div>
        <div class="i-ph:paw-print-fill text-5 text-orange-400 -translate-y-0.5 -rotate-30"></div>
        <div class="i-ph:paw-print-fill translate-y-0.5 rotate-30 text-5 text-orange-400"></div>
        <div class="i-ph:paw-print-fill text-5 text-orange-400 -translate-y-0.5 -rotate-30"></div>
        <div class="i-ph:paw-print-fill translate-y-0.5 rotate-30 text-5 text-orange-400"></div>
        <div class="i-ph:paw-print-fill text-5 text-orange-400 -translate-y-0.5 -rotate-30"></div>
      </div>
      <div class="flex items-center flex-gap-3">
        <div class="flex items-center flex-gap-2 text-6 font-bold">
          <div class="i-twemoji:smiling-face-with-halo text-7"></div>
          <span class="text-blue">天堂</span>
        </div>
        <span class="text-4.5 font-bold">还是</span>
        <div class="flex items-center flex-gap-2 text-6 font-bold">
          <div class="i-twemoji:smiling-face-with-horns text-7"></div>
          <span class="text-red">地狱</span>
        </div>
      </div>
      <div class="text-6 font-bold leading-[1] text-deep-orange-400">
        {{ "未开始" }}
      </div>
      <div class="h-40 flex items-center flex-gap-4">
        <div class="vertical-text text-6 font-bold text-blue">
          扣1上天堂
        </div>
        <div class="h-full w-13 flex flex-col items-center">
          <div class="text-center text-7 font-bold text-blue">
            333
          </div>
          <VT1VoteBar color="red" :percentage="33" />
        </div>
        <div class="h-full w-13 flex flex-col items-center">
          <div class="text-center text-7 font-bold text-red">
            22
          </div>
          <VT1VoteBar color="blue" :percentage="22" />
        </div>
        <div class="vertical-text text-6 font-bold text-red">
          扣2下地狱
        </div>
      </div>
      <div class="w-full flex justify-evenly">
        <LButton class="p-1!" color="blue">
          <template #icon>
            <div class="i-ion:caret-up text-8"></div>
          </template>
        </LButton>
        <LButton class="p-1!" color="red">
          <template #icon>
            <div class="i-ion:caret-up text-8"></div>
          </template>
        </LButton>
      </div>
      <div class="w-full flex justify-evenly">
        <LButton>
          开始
        </LButton>
        <LButton>
          停止
        </LButton>
        <LButton>
          清空
        </LButton>
      </div>
    </div>
  </LCard>
</template>

<script setup lang="ts">

</script>

<style scoped>
.vertical-text {
  letter-spacing: 0.25rem;
  text-orientation: upright;
  writing-mode: vertical-lr;
}
</style>
