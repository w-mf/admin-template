<template>
  <el-row justify="center" align="middle" style="height: 100%">
    <el-col :span="12" style="text-align: right"><component :is="icon" /></el-col>
    <el-col :span="12" class="error-contents__wrap">
      <h1>{{ route.params.code }}</h1>
      <p>{{ textMap[route.params.code] }}</p>
      <ElButton type="primary" @click="goHome">返回首页</ElButton>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { onMounted, ref, defineAsyncComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const icon = ref();
const textMap = {
  403: '抱歉，你无权访问该页面',
  404: '抱歉，你访问的页面不存在',
  500: '抱歉，服务器出错了',
};
function goHome() {
  router.replace('/home');
}
onMounted(async () => {
  switch (route.params.code) {
    case '403':
      icon.value = defineAsyncComponent(() => import('~/components/403.vue'));
      break;
    case '404':
      icon.value = defineAsyncComponent(() => import('~/components/404.vue'));
      break;
    case '500':
      icon.value = defineAsyncComponent(() => import('~/components/500.vue'));
      break;
    default:
  }
});
</script>

<style scoped lang="scss">
.error-contents__wrap {
  padding-left: 30px;

  h1 {
    font-weight: 500;
    font-size: 48px;
    margin: 0;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: var(--el-text-color-placeholder);
  }
}
</style>
