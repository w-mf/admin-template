<template>
  <div class="nav-tabs">
    <div class="nav-tabs__slide-btn-left">
      <ElIcon @click="scrollLeftHandle"><DArrowLeft /></ElIcon>
    </div>

    <div ref="tabsListWrapRef" class="nav-tabs__list_wrap">
      <ul ref="tabsListRef" class="nav-tabs__list" :style="{ transform: `translateX(${scrollLeft}px)` }">
        <li :class="{ active: activePath === '/home' }">
          <span @click="tabChange('/home')" @keyup="() => {}">首页</span>
        </li>
        <li v-for="(item, index) of navTabs" :key="item.path" :class="{ active: item.path === activePath }">
          <span @click="tabChange(item.path)" @keyup="() => {}">{{ item.text }}</span>
          <ElIcon @click="delHandle(item.path, index)"><CircleClose /></ElIcon>
        </li>
      </ul>
    </div>

    <div class="nav-tabs__slide-btn-right">
      <ElIcon @click="scrollRightHandle"><DArrowRight /></ElIcon>
    </div>
    <div class="nav-tabs__more">
      <ElIcon><Refresh /></ElIcon>
      <ElIcon><ArrowDown /></ElIcon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { ArrowDown, CircleClose, DArrowLeft, DArrowRight, Refresh } from '@element-plus/icons-vue';
import { useNavTabsStore } from '~/stores/navTabs';
import { useRouter } from 'vue-router';

const step = 200;
const navTabsStore = useNavTabsStore();
const router = useRouter();
const navTabs = computed(() => navTabsStore.navTabs);
const activePath = computed(() => navTabsStore.activeTab);
const scrollLeft = ref(0);
const tabsListWrapRef = ref<HTMLDivElement>();
const tabsListRef = ref<HTMLUListElement>();

function scrollLeftHandle() {
  const wrapWidth = tabsListWrapRef.value?.offsetWidth || 0;
  const listWidth = tabsListRef.value?.offsetWidth || 0;
  if (scrollLeft.value < 0 && listWidth > wrapWidth) {
    scrollLeft.value += step;
  } else {
    scrollLeft.value = 0;
  }
}
function scrollRightHandle() {
  const wrapWidth = tabsListWrapRef.value?.offsetWidth || 0;
  const listWidth = tabsListRef.value?.offsetWidth || 0;
  if (listWidth > wrapWidth) {
    // 滚动后超出，只滚动到边界
    if (Math.abs(scrollLeft.value - step) >= listWidth - wrapWidth) scrollLeft.value = -(listWidth - wrapWidth);
    else scrollLeft.value -= step;
  }
}

function tabChange(path: string) {
  router.push(path);
}
function delHandle(path: string, index: number) {
  navTabsStore.onDelNavTab([path]);
  if (navTabsStore.activeTab !== path) return;
  // 删除项是当前激活的项，且前面还有打开的页面
  if (index > 0) {
    const newActiveTab = navTabs.value[index - 1];
    router.replace(newActiveTab.path);
  } else {
    router.replace('/home');
  }
}
</script>

<style lang="scss">
$item-height: 38px;
.nav-tabs {
  display: flex;
  background: #fff;
  align-items: center;
  position: relative;
  z-index: 1;
  .nav-tabs__slide-btn-left,
  .nav-tabs__slide-btn-right {
    .el-icon {
      height: $item-height;
      width: $item-height;
    }
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid var(--el-border-color-extra-light);
    border-right: 1px solid var(--el-border-color-extra-light);
  }
  .nav-tabs__slide-btn-left {
    cursor: w-resize;
  }
  .nav-tabs__slide-btn-right {
    cursor: e-resize;
  }
  .nav-tabs__list_wrap {
    flex: 1;
    overflow: hidden;
    .nav-tabs__list {
      white-space: nowrap;
      padding: 8px 4px 4px;
      float: left;
      transition: transform 0.5s ease-in-out;
      li {
        display: inline-block;
        border: 1px solid var(--el-border-color-light);
        border-radius: 2px;
        position: relative;
        padding: 0 20px;
        margin: 0 4px;
        height: $item-height - 14;
        line-height: $item-height - 14;
        color: var(--el-text-color-regular);
        font-size: 14px;
        white-space: nowrap;
        cursor: default;
        &.active {
          color: #fff;
          border-color: var(--el-color-primary);
          background: var(--el-color-primary);
          .el-icon {
            color: #fff;
          }
        }
        &:hover {
          .el-icon {
            display: block;
            cursor: pointer;
          }
        }
        .el-icon {
          display: none;
          position: absolute;
          right: 2px;
          top: 5px;
          color: var(--el-text-color-secondary);
        }
      }
    }
  }
  .nav-tabs__more {
    display: flex;
    flex: 0 0 auto;
    .el-icon {
      border-right: 1px solid var(--el-border-color-extra-light);
      width: $item-height;
      height: $item-height;
      cursor: pointer;
      &:last-child {
        border-right: none;
      }
    }
  }
  .el-scrollbar__bar {
    display: none !important;
  }
}
</style>
