<template>
  <header class="fixed w-full p-x-3 flex items-center justify-between bg-gray-50 h-20">
    <div class="flex items-center">
      <input v-model="roomId" type="number" class="b-1 b-solid b-gray-400" placeholder="输入直播间号" />
      <Button class="m-l-2" @click="onConnect">
        连接
      </Button>
      <Button class="m-l-2" @click="close">
        断开连接
      </Button>
      <span class="m-l-2">当前连接状态：{{ ConnectionStatus[connectionStatus] }}</span>
    </div>
    <div>
      <Button @click="onReset">
        清除全部缓存
      </Button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import Button from "../ui/Button.vue";
import { useDanmaku } from "@/composables/danmaku";
import { ConnectionStatus } from "@/types";
import { useAppStore } from "@/store/app";
import { useVoteStore } from "@/store/vote";

const roomId = ref<number>(2064239);

const { roomId: globalRoomId } = storeToRefs(useAppStore());

function onConnect(id?: number) {
  globalRoomId.value = id ?? roomId.value ?? null;
  connect();
}

onMounted(() => {
  const url = window.location.href;
  const _roomId = (new URL(url)).searchParams.get("roomId");
  if (_roomId) {
    roomId.value = Number(_roomId);
    onConnect();
  }
});

const { connect, close, connectionStatus } = useDanmaku({
  autoConnect: false,
});

const onReset = () => {
  useAppStore().$reset();
  useVoteStore().$reset();
};
</script>
