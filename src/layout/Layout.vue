<template>
  <ElContainer style="height: 100vh" class="layout">
    <ElAside :class="['aside-menu__wrap', isExpandMenu ? '' : 'aside-menu--fold']">
      <AsideMenu :expand="isExpandMenu" />
    </ElAside>
    <ElContainer>
      <ElHeader class="header__wrap">
        <HeaderInfo>
          <ElIcon size="26px" color="#909399" class="header__expand_btn" @click="expandChange">
            <Expand v-if="!isExpandMenu" />
            <Fold v-else />
          </ElIcon>
        </HeaderInfo>
      </ElHeader>
      <NavTabs class="nav-tabs__wrap" />
      <ElMain id="mainContainer" class="main__wrap">
        <router-view />
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Expand, Fold } from '@element-plus/icons-vue';
import AsideMenu from './AsideMenu.vue';
import HeaderInfo from './HeaderInfo.vue';
import NavTabs from './NavTabs.vue';

const isExpandMenu = ref<boolean>(true);

const expandChange = () => {
  isExpandMenu.value = !isExpandMenu.value;
};
</script>
<style lang="scss">
@import '../styles/mixin.scss';
@import '../styles/variable.scss';

.layout {
  .aside-menu__wrap {
    background-color: $aside-menu-bg-color;
    transition: all $aside-menu-logo-transition-time;

    &.aside-menu--fold {
      width: 60px;
    }
  }

  .header__wrap {
    background: #fff;
    position: relative;
    z-index: 2;

    .header__expand_btn {
      cursor: pointer;
    }
  }
  .nav-tabs__wrap {
    border-top: 1px solid var(--el-border-color-lighter);
    box-shadow: (0 4px 12px -4px rgb(0 0 0 / 5%), 0 6px 20px 0 rgb(0 0 0 / 3%), 0 8px 28px 8px rgb(0 0 0 / 1%));
  }

  .main__wrap {
    --el-main-padding: 0;
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
  }
}
</style>
