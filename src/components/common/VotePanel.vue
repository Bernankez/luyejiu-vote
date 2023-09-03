<template>
  <LCard>
    <LButton @click="() => connect()">
      连接
    </LButton>
    <LButton @click="() => disconnect()">
      取消连接
    </LButton>
    <LKeyboard theme="light">
      <div class="i-ion:caret-up flash text-7">
        fff
      </div>
    </LKeyboard>
    <LKeyboard>
      <Icon class="flash" :style="{ fontSize: '1.7rem' }" icon="ion:caret-down" />
    </LKeyboard>
  </LCard>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const { connect, disconnect } = useConnection("2046239");

// console.log(getRoomInfo(2046239));
</script>

<style scoped>
.flash {
  filter: drop-shadow(0 0 5px yellow) drop-shadow(0 0 15px yellow);
}
</style>
