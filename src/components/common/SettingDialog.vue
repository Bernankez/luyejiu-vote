<template>
  <NModal v-model:show="show">
    <div class="w-80% max-w-160 min-w-120 b-4 b-solid b-primary-400 rounded-2 bg-gray-50">
      <div class="flex justify-between items-center p-3 box-border text-6 font-bold text-primary-500">
        <span class="cursor-default select-none">设置</span>
        <div role="button" class="i-mdi:close-thick text-7 cursor-pointer" @click="() => show = false"></div>
      </div>
      <div class="flex flex-col flex-gap-8 p-x-3 box-border">
        <div class="flex items-center flex-gap-3">
          <div class="shrink-0 text-4 font-bold text-primary-500 cursor-default">
            默认房间号
          </div>
          <NInput :value="defaultRoomId.toString()" :allow-input="numberValidate" class="w-50!" placeholder="默认房间号" @update:value="onDefaultRoomId" />
        </div>
        <div class="flex flex-col flex-gap-2 shrink-0 text-4 font-bold text-primary-500 cursor-default">
          默认文字设置
          <div class="flex items-center flex-gap-2">
            扣<NInput v-model:value="upTriggerWord" placeholder="1" class="w-20!" />
            上<NInput v-model:value="up" placeholder="天堂" class="w-20!" />
            <span>，</span>
            扣<NInput v-model:value="downTriggerWord" placeholder="2" class="w-20!" />
            下<NInput v-model:value="down" placeholder="地狱" class="w-20!" />
          </div>
        </div>
        <div>
          <div class="shrink-0 text-4 font-bold text-primary-500 cursor-default">
            默认颜色设置
          </div>
          <div class="flex items-center flex-gap-2">
            <div :style="{ color: upColor }" class="w-full flex items-center flex-gap-2 text-4 font-bold">
              <span class="shrink-0">{{ up }}颜色</span>
              <NColorPicker v-model:value="upColor" :show-alpha="false" :modes="['rgb']" />
            </div>
            <div :style="{ color: downColor }" class="w-full flex items-center flex-gap-2 text-4 font-bold">
              <span class="shrink-0">{{ down }}颜色</span>
              <NColorPicker v-model:value="downColor" :show-alpha="false" :modes="['rgb']" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between p-3 box-border">
        <LButton @click="onReset">
          重置所有设置
        </LButton>
        <LButton @click="() => show = false">
          关闭
        </LButton>
      </div>
    </div>
  </NModal>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

const props = withDefaults(defineProps<{
  show?: boolean;
}>(), {
  show: false,
});

const emit = defineEmits<{
  (event: "update:show", value: boolean): void;
}>();

const { show } = useVModels(props, emit);
const appStore = useAppStore();
const { up, down, upColor, downColor, defaultRoomId, upTriggerWord, downTriggerWord } = storeToRefs(appStore);

const numberValidate = (value: string) => !value || /^\d+$/.test(value);
const onDefaultRoomId = (roomId: string) => {
  defaultRoomId.value = Number.isNaN(Number(roomId)) ? 0 : Number(roomId);
};

const onReset = () => {
  appStore.$reset();
};
</script>
