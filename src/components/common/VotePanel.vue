<template>
  <div class="relative flex flex-col items-center flex-gap-2 p-3 box-border rounded-4 b-4 b-orange-300 bg-primary-100">
    <div class="w-full flex justify-evenly">
      <div class="i-ph:paw-print-fill text-5 text-orange-400 -translate-y-0.5 -rotate-30"></div>
      <div class="i-ph:paw-print-fill text-5 text-orange-400 translate-y-0.5 rotate-30"></div>
      <div class="i-ph:paw-print-fill text-5 text-orange-400 -translate-y-0.5 -rotate-30"></div>
      <div class="i-ph:paw-print-fill text-5 text-orange-400 translate-y-0.5 rotate-30"></div>
      <div class="i-ph:paw-print-fill text-5 text-orange-400 -translate-y-0.5 -rotate-30"></div>
      <div class="i-ph:paw-print-fill text-5 text-orange-400 translate-y-0.5 rotate-30"></div>
      <div class="i-ph:paw-print-fill text-5 text-orange-400 -translate-y-0.5 -rotate-30"></div>
    </div>
    <div class="flex items-center flex-gap-3">
      <div class="flex items-center flex-gap-2 text-6 font-bold">
        <span class="text-7">👼🏻</span>
        <span :style="{ color: upColor }">{{ up }}</span>
      </div>
      <span class="text-4.5 font-bold">还是</span>
      <div class="flex items-center flex-gap-2 text-6 font-bold">
        <span class="text-7">😈</span>
        <span :style="{ color: downColor }">{{ down }}</span>
      </div>
    </div>
    <div class="text-deep-orange-400 text-6 font-bold leading-[1]">
      {{ voting ? '投票中…' : '未开始' }}
    </div>
    <div class="h-40 flex items-center flex-gap-4">
      <div class="vertical-text text-6 font-bold" :style="{ color: upColor }">
        扣{{ upTriggerWord }}上{{ up }}
      </div>
      <div class="flex flex-col items-center h-full w-13">
        <div :style="{ color: upColor }" class="text-center text-7 font-bold">
          {{ totalUp }}
        </div>
        <VoteBar :color="upColor" :percentage="percentage.upSinglePercentage" />
      </div>
      <div class="flex flex-col items-center h-full w-13">
        <div :style="{ color: downColor }" class="text-center text-7 font-bold">
          {{ totalDown }}
        </div>
        <VoteBar :color="downColor" :percentage="percentage.downSinglePercentage" />
      </div>
      <div class="vertical-text text-6 font-bold" :style="{ color: downColor }">
        扣{{ downTriggerWord }}下{{ down }}
      </div>
    </div>
    <div class="w-full flex justify-evenly">
      <LButton class="p-1!" :color="upColor" @click="onVoteUp" @longpress="onVoteUpLongPress">
        <template #icon>
          <div class="i-ion:caret-up text-8"></div>
        </template>
      </LButton>
      <LButton class="p-1!" :color="downColor" @click="onVoteDown" @longpress="onVoteDownLongPress">
        <template #icon>
          <div class="i-ion:caret-up text-8"></div>
        </template>
      </LButton>
    </div>
    <div class="w-full flex justify-evenly">
      <LButton v-if="!voting" @click="onStart">
        开始
      </LButton>
      <LButton v-if="voting" @click="onStop">
        停止
      </LButton>
      <LButton v-if="!voting" @click="onClear">
        清空
      </LButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Fn } from "@vueuse/core";
import { storeToRefs } from "pinia";

const { up, down, upColor, downColor, upTriggerWord, downTriggerWord } = storeToRefs(useAppStore());
const { voting, clear, start, stop, voteUp, voteDown, totalUp, totalDown } = useVote();
const message = useMessage();

const percentage = computed(() => getCountPercentage(totalUp.value, totalDown.value));

const onStart = () => {
  clear();
  const res = start();
  if (!res) {
    message.warning("宝要先连接房间哦");
  }
};
const onStop = () => {
  stop();
};
const onClear = () => {
  clear();
};

const onVoteUp = () => {
  voteUp();
};

const onVoteDown = () => {
  voteDown();
};

function useContinuous(cb: Fn) {
  const processing = ref(false);

  function start(options?: { immediate?: boolean; delay?: number }) {
    const { immediate = true, delay = 0 } = options || {};
    processing.value = true;
    // total frames
    const frames = delay / 1000 * 60;
    let count = 0;
    function _start() {
      requestAnimationFrame(() => {
        if (count >= frames) {
          count = 0;
          cb();
        }
        count++;
        if (processing.value) {
          _start();
        }
      });
    }
    if (immediate) {
      cb();
    }
    _start();
  }

  function stop() {
    processing.value = false;
  }

  return {
    start,
    stop,
  };
}

const { start: startVoteUp, stop: stopVoteUp } = useContinuous(voteUp);
const { start: startVoteDown, stop: stopVoteDown } = useContinuous(voteDown);
const onVoteUpLongPress = (_: any, pressing: boolean) => {
  if (pressing) {
    startVoteUp({ delay: 30 });
  } else {
    stopVoteUp();
  }
};
const onVoteDownLongPress = (_: any, pressing: boolean) => {
  if (pressing) {
    startVoteDown({ delay: 30 });
  } else {
    stopVoteDown();
  }
};
</script>

<style scoped>
.vertical-text {
  letter-spacing: 0.25rem;
  text-orientation: upright;
  writing-mode: vertical-lr;
}
</style>
