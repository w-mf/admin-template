<template>
  <div class="aside-menu">
    <div :class="['logo__wrap', props.expand ? '' : 'logo__size--small']">
      <img alt="logo" :src="props.expand ? logoExpand : logoFold" />
    </div>
    <div>
      <ElMenu
        router
        :default-active="defaultActive"
        class="not-border"
        background-color="transparent"
        :collapse="!expand"
      >
        <template v-for="(item, index) of menuList" :key="index">
          <!-- 一级 -->
          <ElMenuItem
            v-if="(!item.children || item.children.length === 0) && item.meta && item.meta.isMenu"
            :index="item.path"
            :route="item"
          >
            <el-icon v-if="item.meta && item.meta.icon">
              <component :is="Icon[item.meta.icon]" />
            </el-icon>
            <span>{{ item.meta && item.meta.title }}</span>
          </ElMenuItem>
          <!-- 多级 -->
          <ElSubMenu v-else-if="item.meta && item.meta.isMenu" :index="item.path">
            <template #title>
              <el-icon v-if="item.meta && item.meta.icon">
                <component :is="Icon[item.meta.icon]" />
              </el-icon>
              <span>{{ item.meta && item.meta.title }}</span>
            </template>
            <template v-for="(itemB, indexB) of item.children">
              <ElMenuItem v-if="itemB.meta && itemB.meta.isMenu" :key="index + '_' + indexB" :index="itemB.path">
                <el-icon v-if="itemB.meta && itemB.meta.icon">
                  <component :is="Icon[itemB.meta.icon]" />
                </el-icon>
                <span>{{ itemB.meta && itemB.meta.title }}</span>
              </ElMenuItem>
            </template>
          </ElSubMenu>
        </template>
      </ElMenu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import logoExpand from '~/assets/images/logo-expand.png';
import logoFold from '~/assets/images/logo-fold.png';

import * as Icon from '@element-plus/icons-vue';
import { routes } from '~/routers';

import type { IRoute } from '~/routers/router.d';
import { useNavTabsStore } from '~/stores/navTabs';

const navTabsStore = useNavTabsStore();
const props = withDefaults(
  defineProps<{
    expand: boolean;
  }>(),
  {
    expand: true,
  },
);

const defaultActive = computed(() => navTabsStore.activeTab);

function routeHandle(routers: IRoute[]): IRoute[] {
  // meta.isMenu = true 并且权限码和后端返回的匹配上才显示
  return (
    routers
      // .filter(
      //   (item) =>
      //     item.meta?.isMenu &&
      //     item.meta?.permissionCode &&
      //     // 首页默认显示
      //     appStore.permissionCodes.concat(['home']).includes(item.meta.permissionCode),
      // )
      .map((item) => {
        if (item.children) return { ...item, children: routeHandle(item.children as typeof routes) };
        return item;
      })
  );
}
const menuList = computed(() => routeHandle(routes));

onMounted(() => {
  //
});
</script>

<style lang="scss">
@import '../styles/variable.scss';

.aside-menu {
  .logo__wrap {
    padding: 20px;
    transition: all $aside-menu-logo-transition-time;

    img {
      height: 40px;
      transition: all $aside-menu-logo-transition-time;
    }

    &.logo__size--small {
      padding: 15px;

      img {
        height: 30px;
      }
    }
  }

  .el-menu {
    --el-menu-text-color: #fff;
  }

  .el-menu--vertical {
    .el-menu-item {
      color: var(--el-text-color-primary);
    }
  }
}
</style>
