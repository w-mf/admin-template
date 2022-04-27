<template>
  <div class="">
    <div :class="['logo__wrap', props.expand ? '' : 'logo__size--small']">
      <img alt="logo" :src="props.expand ? logoExpand : logoFold" />
    </div>
    <div>
      <MenuItem v-for="item of list" :key="item.value" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, withDefaults } from 'vue';
import logoExpand from '~/assets/images/logo-expand.png';
import logoFold from '~/assets/images/logo-fold.png';
import MenuItem from './MenuItem.vue';

const props = withDefaults(defineProps<{ expand: boolean }>(), {
  expand: true,
});
const list = ref([
  {
    label: 'item 1',
    value: 1,
  },
  {
    label: 'item 2',
    value: 2,
  },
  {
    label: 'item 3',
    value: 3,
  },
  {
    label: 'item 4',
    value: 4,
  },
  {
    label: 'item 5',
    value: 5,
  },
]);
</script>

<style lang="scss">
@import '../../styles/variable.scss';
.logo__wrap {
  padding: 20px;
  transition: all $asideMenuLogoTransitionTime;
  img {
    height: 40px;
    transition: all $asideMenuLogoTransitionTime;
  }
  &.logo__size--small {
    padding: 15px;
    img {
      height: 30px;
    }
  }
}
</style>
