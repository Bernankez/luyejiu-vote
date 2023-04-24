<template>
  <header class="fixed top-0 left-0 h-18 w-full flex items-center p-x-4 box-border bg-gray-50">
    <div class="flex flex-gap-2 items-center">
      <NInput :allow-input="numberValidate" :value="roomId.toString()" placeholder="请输入房间号" @update:value="value => roomId = Number(value)" />
      <LButton v-if="connectionStatus === 'disconnected' || connectionStatus === 'error'">
        连接
      </LButton>
      <LButton v-else>
        断开
      </LButton>
      <LBadgeText :status="badgeStatus">
        {{ ConnectionStatus[connectionStatus] }}
      </LBadgeText>
    </div>
    <div>
      <LButton>设置</LButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

const { roomId } = storeToRefs(useAppStore());
const numberValidate = (value: string) => !value || /^\d+$/.test(value);

const { connect, close, connectionStatus } = useDanmu();
const badgeStatus = computed(() => {
  switch (connectionStatus.value) {
    case "loading":
      return "info";
    case "connected":
      return "success";
    case "disconnected":
      return "default";
    case "error":
      return "error";
    default:
      return "default";
  }
});
</script>
