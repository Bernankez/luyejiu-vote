<template>
  <LCard>
    <LButton @click="() => connect()">
      连接
    </LButton>
    <LButton @click="() => disconnect()">
      取消连接
    </LButton>
  </LCard>
</template>

<script setup lang="ts">
const { connect, disconnect } = useConnection("2046239");
</script>
