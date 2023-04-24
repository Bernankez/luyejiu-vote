<template>
  <header class="fixed top-0 left-0 h-18 w-full flex items-center justify-between p-x-4 box-border bg-gray-50">
    <div class="flex flex-gap-2 items-center">
      <NInput v-model:value="roomId" :allow-input="numberValidate" placeholder="宝这里填房间号" />
      <LButton v-if="connectionStatus === 'disconnected' || connectionStatus === 'error'" @click="connect">
        连接
      </LButton>
      <LButton v-else @click="close">
        断开
      </LButton>
      <LBadgeText :status="badgeStatus">
        {{ ConnectionStatus[connectionStatus] }}
      </LBadgeText>
    </div>
    <div>
      <LButton @click="onSetting">
        <template #icon>
          <div class="i-uil:setting text-6"></div>
        </template>
      </LButton>
      <SettingDialog v-model:show="showSettingDialog" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

const { defaultRoomId } = storeToRefs(useAppStore());
const { connect, close, connectionStatus, roomId } = useDanmu();
roomId.value = defaultRoomId.value.toString();
const numberValidate = (value: string) => !value || /^\d+$/.test(value);

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

const showSettingDialog = ref(false);
const onSetting = () => {
  showSettingDialog.value = true;
};
</script>
