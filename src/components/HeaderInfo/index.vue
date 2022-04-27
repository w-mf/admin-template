<template>
  <div class="header-info">
    <slot />
    <div class="header-info__user">
      <img alt="用户头像" :src="img" />
      <span>用户名称</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const img = ref();
</script>
<style lang="scss">
.header-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  .header-info_user {
    img {
      width: 30px;
      height: 30px;
      border-top: 1px solid var(--el-border-color-base);
    }
  }
}
</style>
