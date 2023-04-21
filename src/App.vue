<template>
  <div class="flex items-center justify-center flex-gap-6 min-h-full min-w-full dark:bg-black">
    <div class="relative flex flex-col flex-gap-5 p-4 p-t-10 box-border rounded-4 b-3 b-t-0 b-orange-300 shadow-md shadow-orange-300 bg-orange-200">
      <div class="i-ph:paw-print-fill absolute top-0 left-50% -translate-x-50% -translate-y-50% text-20 text-orange-500"></div>
      <!-- <div class="i-ph:paw-print-light absolute top-0 left-50% -translate-x-50% -translate-y-50% text-20 text-orange-500"></div> -->
      <div class="flex items-center flex-gap-3">
        <div class="flex items-center flex-gap-2 font-bold text-light-blue-500">
          <span class="text-8 leading-[1]">👼🏻</span>
          <span class="text-6">天堂</span>
        </div>
        <div class="text-5 font-bold text-gray-900">
          还是
        </div>
        <div class="flex items-center flex-gap-2 font-bold text-purple-500">
          <span class="text-8 leading-[1]">😈</span>
          <span class="text-6">地狱</span>
        </div>
      </div>
      <div class="flex justify-evenly">
        <div class="flex flex-col w-14">
          <div class="text-8 text-orange-600 font-bold text-center">
            33
          </div>
          <div class="flex flex-col justify-end h-40 bg-transparent">
            <div class="w-full h-50% bg-light-blue-500"></div>
          </div>
        </div>
        <div class="flex flex-col w-14">
          <div class="text-8 text-orange-600 font-bold text-center">
            33
          </div>
          <div class="flex flex-col justify-end h-40 bg-transparent">
            <div class="w-full h-100% bg-purple-500"></div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-evenly">
        <Button class="text-light-blue-500! b-light-blue-500!">
          <span>投一票</span>
        </Button>
        <Button class="text-purple-500! b-purple-500!">
          <span>投一票</span>
        </Button>
      </div>
      <div class="flex items-center justify-evenly">
        <Button>开始</Button>
        <Button>停止</Button>
      </div>
    </div>
    <div class="relative flex flex-col flex-gap-5 h-full overflow-y-auto p-4 box-border rounded-4 b-3 b-t-0 b-orange-300 shadow-md shadow-orange-300 bg-orange-200">
      <div class="text-7 font-bold text-orange-500">
        历史结果
      </div>
      <div class="flex flex-col flex-gap-2 w-60 max-h-80">
        <VoteResult v-for="i in 40" :key="i" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head";
import Button from "./components/ui/Button.vue";
import VoteResult from "./components/common/VoteResult.vue";

useHead({
  title: "鹿野灸忏悔回投票机",
  meta: [
    {
      name: "description",
      content: "鹿野灸忏悔回投票机",
    },
  ],
});
</script>
