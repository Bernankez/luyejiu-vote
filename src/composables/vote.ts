import type { DanmuMsg, Message } from "blive-message-listener";
import type { Ref } from "vue";
import { computed, ref, watch, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import type { Fn } from "@vueuse/core";
import { createSharedComposable } from "@vueuse/core";
import { v4 as uuid } from "uuid";
import { useAppStore } from "@/store/app";
import { useVoteStore } from "@/store/vote";

export function _useVote(messages: Ref<Message<DanmuMsg>[]>) {
  const { votes } = storeToRefs(useVoteStore());

  const startIndex = ref<number>(0);
  const endIndex = ref<number>(0);
  const danmakus = computed(() => {
    return messages.value.slice(startIndex.value, endIndex.value);
  });

  const appendPositive = ref(0);
  const appendNegative = ref(0);

  const cachedComputedVote = ref<ReturnType<typeof countVotes>>();
  watchEffect(() => {
    cachedComputedVote.value = countVotes(danmakus.value);
  });
  const vote = computed(() => {
    return {
      ...cachedComputedVote.value,
      positiveCount: (cachedComputedVote.value?.positiveCount || 0) + appendPositive.value,
      negativeCount: (cachedComputedVote.value?.negativeCount || 0) + appendNegative.value,
    };
  });
  const voting = ref(false);

  let stopWatch: Fn | undefined;

  function start() {
    if (voting.value) { return; }
    clear();
    voting.value = true;
    startIndex.value = messages.value.length > 0 ? messages.value.length - 1 : 0;
    stopWatch = watch(() => messages.value.length, (length) => {
      endIndex.value = length;
    }, {
      immediate: true,
    });
  }

  function stop() {
    endIndex.value = messages.value.length;
    stopWatch?.();
    votes.value.push({
      id: uuid(),
      positive: vote.value.positiveCount,
      negative: vote.value.negativeCount,
      userIds: [...(vote.value.userIds || [])],
    });
    voting.value = false;
  }

  function clear() {
    appendPositive.value = 0;
    appendNegative.value = 0;
  }

  return {
    start,
    stop,
    vote,
    votes,
    voting,
    votePositive: () => {
      if (voting.value) { appendPositive.value++; }
    },
    voteNegative: () => {
      if (voting.value) { appendNegative.value++; }
    },
  };
}
export const useVote = createSharedComposable(_useVote);

function countVotes(messages: Message<DanmuMsg>[]) {
  const { negativeWord, positiveWord } = storeToRefs(useAppStore());
  const danmakuMessages = messages.map(message => message.body);
  let positiveCount = 0;
  let negativeCount = 0;
  const userIds: number[] = [];
  danmakuMessages.forEach((message) => {
    if (!userIds.includes(message.user.uid)) {
      userIds.push(message.user.uid);
      if (new RegExp(`^${positiveWord.value}+$`).test(message.content.trim())) {
        positiveCount++;
      } else if (new RegExp(`^${negativeWord.value}+$`).test(message.content.trim())) {
        negativeCount++;
      }
    }
  });

  return {
    positiveCount,
    negativeCount,
    userIds,
  };
}
