<template>
  <div class="header-info">
    <slot />
    <ElDropdown size="large" @command="commandHandle">
      <template #default>
        <div class="header-info__user">
          <ElAvatar :size="32" :icon="Avatar" />
          <div class="header-info__user_name">{{ userInfo.userName }}</div>
          <ElIcon class="header-info__user_icon"><CaretBottom /></ElIcon>
        </div>
      </template>
      <template #dropdown>
        <el-dropdown-menu class="header-info__user_dropdown">
          <el-dropdown-item :command="COMMAND.USER_CENTER">个人信息(开发中...)</el-dropdown-item>
          <el-dropdown-item :command="COMMAND.LOGOUT" class="logout" divided>退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </ElDropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CaretBottom, Avatar } from '@element-plus/icons-vue';
import { useAppStore } from '~/stores/app';

enum COMMAND {
  'USER_CENTER' = 'userCenter',
  LOGOUT = 'logout',
}
const appStore = useAppStore();
const userInfo = computed(() => appStore.userInfo) || {};
function commandHandle(command: COMMAND) {
  switch (command) {
    case COMMAND.USER_CENTER:
      //
      break;
    case COMMAND.LOGOUT:
      appStore.logout();
      break;
    default:
  }
}
</script>
<style lang="scss" scoped>
.header-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  .header-info__user {
    display: flex;
    align-items: center;
    .header-info__user_img {
      width: 30px;
      height: 30px;
      border: 1px solid var(--el-border-color-base);
      overflow: hidden;
      background: #f5f5f5;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .header-info__user_name {
      padding: 0 6px;
    }
    .header-info__user_icon {
      color: #666;
    }
  }
}
</style>
<style lang="scss">
.header-info__user_dropdown {
  min-width: 180px;
  li {
    justify-content: center;
  }
  .logout {
    color: var(--el-color-danger);
  }
}
</style>
