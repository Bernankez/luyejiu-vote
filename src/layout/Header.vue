<template>
  <div class="absolute left-0 top-0 z-1 box-border h-18 w-full flex items-center justify-between bg-gray-50 p-x-5">
    <div class="flex items-center flex-gap-3">
      <NInput placeholder="在这里输入房间号" />
      <LButton>连接</LButton>
      <LButton>断开</LButton>
      <LBadgeText type="simple">
        连接中
      </LBadgeText>
    </div>
    <div class="flex items-center flex-gap-3">
      <LTooltip>
        <template #trigger>
          <LButton>
            <template #icon>
              <div class="i-uil:file-alt text-6"></div>
            </template>
          </LButton>
        </template>
        显示隐藏日志
      </LTooltip>
      <LTooltip>
        <template #trigger>
          <LButton>
            <template #icon>
              <div class="i-uil:setting text-6"></div>
            </template>
          </LButton>
        </template>
        设置
      </LTooltip>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
