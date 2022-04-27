<template>
  <ElContainer style="height: 100%">
    <ElAside :class="['aside-menu__wrap', isExpandMenu ? '' : 'aside-menu--fold']">
      <AsideMenu :expand="isExpandMenu" />
    </ElAside>
    <ElContainer>
      <ElHeader class="header__wrap">
        <HeaderInfo>
          <ElIcon size="26px" color="#909399" class="header__expandbtn" @click="expandChange">
            <Expand v-if="!isExpandMenu" />
            <Fold v-else />
          </ElIcon>
        </HeaderInfo>
      </ElHeader>
      <ElMain class="main__wrap">
        <router-view />
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Expand, Fold } from '@element-plus/icons';
import AsideMenu from '~/components/AsideMenu/index.vue';
import HeaderInfo from '~/components/HeaderInfo/index.vue';

const isExpandMenu = ref<boolean>(true);

const expandChange = () => {
  isExpandMenu.value = !isExpandMenu.value;
};
</script>
<style lang="scss">
@import '../styles/mixin.scss';
@import '../styles/variable.scss';

.aside-menu__wrap {
  background-color: $asideMenuBgColor;
  transition: all $asideMenuLogoTransitionTime;
  &.aside-menu--fold {
    width: 60px;
  }
}
.header__wrap {
  background: #fff;
  .header__expandbtn {
    cursor: pointer;
  }
}
.main__wrap {
  padding: 0;
  margin: 10px;
  background: #fff;
}
</style>
