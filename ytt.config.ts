/* eslint-disable */
// noinspection SpellCheckingInspection

import { defineConfig, Interface, ChangeCase } from 'yapi-to-typescript';

// 文件名和类名
const fileNameMap: any = {
  auth: 'auth',
  '系统管理-菜单': 'SysMenu',
};
// 配置详情。 https://fjc0k.github.io/yapi-to-typescript/handbook/config.html
export default defineConfig([
  {
    serverUrl: 'xxx', // yapiConfig.serverUrl,
    serverType: 'yapi', // 'yapi' | 'swagger',
    typesOnly: false,
    target: 'typescript',
    devEnvName: '测试',
    prodEnvName: '正式',
    reactHooks: {
      enabled: false,
    },
    jsonSchema: {
      enabled: false,
    },
    comment: {
      enabled: true,
      tag: false,
      requestHeader: false,
    },
    // 输出文件路径。 path.split('/')[0]
    outputFilePath: (interfaceInfo: Interface, changeCase: ChangeCase) => {
      const catName = interfaceInfo._category.name as any;
      const fileName = fileNameMap[catName] || 'index';

      return `src/api/${changeCase.pascalCase(fileName)}.ts`;
    },
    requestFunctionFilePath: 'src/utils/HttpClient.ts',
    dataKey: 'data',
    projects: [
      {
        token: 'xxxx', // yapiConfig.token,
        categories: [
          {
            // 分类id。 0 全部，id前面加负号表示排除
            id: [0, -190],
            // 请求函数的名称。 除 path.split('/')[0] 之外的path
            getRequestFunctionName(interfaceInfo, changeCase) {
              const path = interfaceInfo.path.replace('{', '').replace('}', '');
              const pathArr = (path.split('/') || []).filter((item) => item);
              pathArr.length && pathArr.splice(0, 1);
              return changeCase.pascalCase(`${path}_${interfaceInfo.method}`);
            },
          },
        ],
      },
    ],
  },
]);
