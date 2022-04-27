<template>
  <router-view />
</template>
<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {});
</script>
<style lang="scss">
html,
body,
#app {
  height: 100%;
  min-height: 360px;
}
body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
    '微软雅黑', Arial, sans-serif;
  background: rgb(233, 233, 235);
}
</style>
