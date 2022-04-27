<template>
  <div class="base-list-container">
    <div class="base-list-container__search">
      <slot />
    </div>
    <div v-if="notes" class="base-list-container__notes">{{ notes }}</div>
    <div :class="['base-list-container__table', props.isPage ? '' : 'not-page']">
      <ElTable
        v-loading="loading"
        :data="props.listData"
        stripe
        row-key="id"
        height="100%"
        header-cell-class-name="table-header"
      >
        <template #empty><ElEmpty v-show="!loading" description="暂无数据" /></template>
        <ElTableColumn
          v-for="(item, index) of props.colOptions"
          :key="item.field || index"
          v-slot="{ row }"
          :prop="item.field"
          :label="item.title"
          :width="item.width"
        >
          <template v-if="item.field">
            <ElTag v-if="item.type === 'tag'" :type="item.tagMenu[row[item.field]].type || ''">{{
              item.tagMenu[row[item.field]].text || ''
            }}</ElTag>

            <template v-else-if="(item.formatter && item.formatter(row[item.field])) || row[item.field]">
              {{ item.formatter ? item.formatter(row[item.field]) : row[item.field] }}
            </template>
            <div v-else class="base-list-container__table_cell_empty">-</div>
          </template>
          <template v-for="(i, idx) of item.items" v-else>
            <ElButton
              v-if="i.type === 'button'"
              :key="idx"
              type="text"
              v-bind="i.opts"
              @click="i.onClick && i.onClick(row)"
            >
              {{ i.label }}
            </ElButton>
          </template>
        </ElTableColumn>
      </ElTable>
    </div>
    <div v-if="props.isPage" class="base-list-container__pagination">
      <ElPagination
        small
        background
        layout="prev, pager, next, sizes, total"
        :current-page="props.page.pageNo"
        :page-size="props.page.pageSize"
        :total="props.page.total"
        @size-change="onPageSizeChange"
        @current-change="onPageNoChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ElTableColumn } from 'element-plus';
import { TagProps } from 'element-plus/es/components/tag/src/tag';

export interface IColOption<T> {
  loading?: boolean;
  field?: string;
  title: string;
  width?: string | number;
  formatter?: (val: string | number) => string | undefined;
  items?: Array<{
    type: 'button';
    label: string;
    opts?: unknown;
    onClick?: (val: T) => void;
  }>;
  type?: 'tag';
  tagMenu?: { [key: string | number]: { text: string; type: TagProps['type'] } };
}
export interface IPage {
  pageNo: number;
  pageSize: number;
  total: number;
}
const props = withDefaults(
  defineProps<{
    loading: false;
    colOptions: IColOption<unknown>[];
    listData: unknown[];
    page?: IPage;
    isPage?: boolean;
    notes?: string;
  }>(),
  {
    colOptions: () => [],
    listData: () => [],
    page: () => ({
      pageNo: 1,
      pageSize: 10,
      total: 0,
    }),
    isPage: true,
    notes: '',
  },
);
const emit = defineEmits<{
  (event: 'pageChange', page: Omit<IPage, 'total'>): void;
}>();

const onPageSizeChange = (val: number) => {
  emit('pageChange', { pageNo: props.page.pageNo, pageSize: val });
};
const onPageNoChange = (val: number) => {
  emit('pageChange', { pageNo: val, pageSize: props.page.pageSize });
};
</script>

<style lang="scss">
@import '../styles/variable.scss';
@import '../styles/mixin.scss';

.base-list-container {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 16px;
  background: #fff;

  .base-list-container__search {
    flex: 0 0 auto;
    padding-bottom: 16px;
  }
  .base-list-container__notes {
    flex: 0 0 auto;
    color: var(--el-text-color-placeholder);
    padding-bottom: 4px;
    font-size: 12px;
  }
  .base-list-container__table {
    flex: 1 1 0;
    height: 0;
    min-height: 100px;
    .table-header {
      background: #f8f8fa;
    }
    .base-list-container__table_cell_empty {
      color: $secondaty-text;
    }
    &.not-page .el-table__inner-wrapper:before {
      display: none;
    }
  }
  .base-list-container__pagination {
    flex: 0 0 auto;
    padding-top: 16px;
    .el-pagination__sizes {
      margin-left: 16px;
    }
  }
}
</style>
