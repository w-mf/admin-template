import { RouteRecordRaw } from "vue-router";

export type IRoute = RouteRecordRaw & {
  meta: {
    isMenu?: boolean;
    permissionCode: string;
    icon?: string;
    title: string;
  };
  children?: IRoute[];
};
