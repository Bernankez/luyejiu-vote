<template>
  <div class="h-98.5 w-80 p-3 box-border rounded-4 b-4 b-orange-300 bg-primary-100">
    <div class="m-b-4 flex justify-between text-5 font-bold text-deep-orange-400">
      日志（最近100条）
      <LButton @click="clear">
        清空
      </LButton>
    </div>
    <div class="flex flex-col flex-gap-2 h-81 overflow-y-auto">
      <div v-for="log in logs" :key="log.timestamp" class="log-item">
        {{ dayjs(log.timestamp).format('HH:mm:ss') }}
        <span class="font-bold text-blue-600">{{ log.user.uname }}</span>({{ log.user.uid }})
        投票
        <span class="font-bold" :class="{ 'text-green-500': log.result === 'success', 'text-red-500': log.result === 'failure' }">{{ log.result === 'success' ? '成功' : '失败' }}</span>
        <span v-if="log.voteType">投了</span>
        <span class="font-bold" :style="{ color: log.voteType === 'up' ? appStore.upColor : appStore.downColor }">{{ log.voteType === 'up' ? `${appStore.up}` : log.voteType === 'down' ? `${appStore.down}` : '' }}</span>
        {{ log.failType === 'voted' ? `因为已经投了${appStore[log.lastVote!]}` : log.failType === 'invalid' ? `因为弹幕【${log.content}】不符合要求` : '' }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";

const { logs, clear } = useLog();
const appStore = (useAppStore());
</script>

<style scoped>
.log-item + .log-item {
  @apply b-t-1 b-solid b-primary-300;
}
</style>
