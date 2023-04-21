<template>
  <Header />
  <div class="flex items-center justify-center flex-gap-6 min-h-full min-w-full dark:bg-black">
    <div class="relative flex flex-col p-4 p-t-10 box-border rounded-4 b-3 b-t-0 b-orange-300 shadow-md shadow-orange-300 bg-orange-200">
      <div class="i-ph:paw-print-fill absolute top-0 left-50% -translate-x-50% -translate-y-50% text-20 text-orange-500"></div>
      <div class="flex items-center flex-gap-3">
        <div class="flex items-center flex-gap-2 font-bold text-light-blue-500">
          <span class="text-8 leading-[1]">👼🏻</span>
          <span class="text-6">{{ positive }}</span>
        </div>
        <div class="text-5 font-bold text-gray-900">
          还是
        </div>
        <div class="flex items-center flex-gap-2 font-bold text-purple-500">
          <span class="text-8 leading-[1]">😈</span>
          <span class="text-6">{{ negative }}</span>
        </div>
      </div>
      <div class="text-center text-orange-500 text-6 font-bold">
        {{ voting ? '投票中…' : '投票结束' }}
      </div>
      <div class="flex justify-evenly">
        <div class="flex items-center justify-center w-5 text-light-blue-500 font-bold text-5">
          扣{{ positiveWord }}上{{ positive }}
        </div>
        <div class="flex flex-col w-14">
          <div class="text-8 text-light-blue-500 font-bold text-center">
            {{ vote.positiveCount }}
          </div>
          <div class="flex flex-col justify-end h-40 bg-transparent">
            <div class="positive-percentage w-full bg-light-blue-500"></div>
          </div>
        </div>
        <div class="flex flex-col w-14">
          <div class="text-8 text-purple-500 font-bold text-center">
            {{ vote.negativeCount }}
          </div>
          <div class="flex flex-col justify-end h-40 bg-transparent">
            <div class="negative-percentage w-full bg-purple-500"></div>
          </div>
        </div>
        <div class="flex items-center justify-center w-5 text-purple-500 font-bold text-5">
          扣{{ negativeWord }}下{{ negative }}
        </div>
      </div>
      <!-- <div class="m-t-3 flex flex-col flex-gap-3">
        <div class="flex items-center justify-evenly">
          <Button class="text-light-blue-500! b-light-blue-500!" @click="votePositive">
            <span>投一票</span>
          </Button>
          <Button class="text-purple-500! b-purple-500!" @click="voteNegative">
            <span>投一票</span>
          </Button>
        </div>
        <div class="flex items-center justify-evenly">
          <Button v-if="!voting" @click="onStart">
            开始
          </Button>
          <Button v-if="voting" @click="onStop">
            停止
          </Button>
        </div>
      </div> -->
    </div>
    <div class="relative flex flex-col flex-gap-5 h-full overflow-y-auto p-4 box-border rounded-4 b-3 b-t-0 b-orange-300 shadow-md shadow-orange-300 bg-orange-200">
      <div class="flex justify-between items-center text-7 font-bold text-orange-500">
        <span>
          历史结果
        </span>
        <Button @click="onClear">
          清除历史
        </Button>
      </div>
      <div class="flex flex-col flex-gap-2 w-60 h-80">
        <VoteResult v-for="(v, index) in votes" :key="v.id" :negative="v.negative" :positive="v.positive" :index="index + 1" @remove="onRemove" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import Button from "./components/ui/Button.vue";
import VoteResult from "./components/common/VoteResult.vue";
import Header from "./components/common/Header.vue";
import { useVote } from "./composables/vote";
import { useAppStore } from "./store/app";
import { useDanmaku } from "./composables/danmaku";
import { getCountPercentage } from "./utils";

useHead({
  title: "鹿野灸忏悔回投票机",
  meta: [
    {
      name: "description",
      content: "鹿野灸忏悔回投票机",
    },
  ],
});

const { positive, positiveWord, negative, negativeWord } = storeToRefs(useAppStore());
const { messages, clear } = useDanmaku({ autoConnect: false });
const { voting, vote, votes, start } = useVote(messages);

function onStart() {
  // clear history messages before start
  clear();
  start();
}

onStart();

// function onStop() {
//   stop();
// }

function onRemove(id: string) {
  votes.value.splice(votes.value.findIndex(v => v.id === id), 1);
}

function onClear() {
  votes.value = [];
}

const percentage = computed(() => getCountPercentage(vote.value.positiveCount, vote.value.negativeCount));
</script>

<style scoped>
.positive-percentage {
  height: v-bind("`${percentage.positiveSinglePercentage * 100}%`");
}

.negative-percentage {
  height: v-bind("`${percentage.negativeSinglePercentage * 100}%`");
}
</style>
