<template>
  <header class="fixed w-full p-x-3 flex items-center bg-gray-50 h-20">
    <input v-model="roomId" type="number" class="b-1 b-solid b-gray-400" placeholder="输入直播间号" />
    <Button class="m-l-2" @click="onConnect">
      连接
    </Button>
    <Button class="m-l-2" @click="close">
      断开连接
    </Button>
    <span class="m-l-2">{{ ConnectionStatus[connectionStatus] }}</span>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import Button from "../ui/Button.vue";
import { useDanmaku } from "@/composables/danmaku";
import { ConnectionStatus } from "@/types";
import { useAppStore } from "@/store/app";

const roomId = ref<number>();

const { roomId: globalRoomId } = storeToRefs(useAppStore());

function onConnect() {
  globalRoomId.value = roomId.value ?? null;
  connect();
}

const { connect, close, connectionStatus } = useDanmaku({
  autoConnect: false,
});
</script>
