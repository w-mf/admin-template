import { defineConfig, Interface, ChangeCase } from 'yapi-to-typescript';
// yapi平台相关配置
const yapiConfig = {
  serverUrl: 'http://192.168.16.27:3000',
  token: '5f137717367186837fe02a7dc4735e8342217c6192f647dbbc4fc427e26a537a',
};
// 配置详情。 https://fjc0k.github.io/yapi-to-typescript/handbook/config.html
export default defineConfig([
  {
    serverUrl: yapiConfig.serverUrl,
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
      const pathArr = (interfaceInfo.path.split('/') || []).filter((item) => item);
      const fileName = pathArr.length ? pathArr[0] : 'undefined';
      return `src/api/${changeCase.pascalCase(fileName)}.ts`;
    },
    requestFunctionFilePath: 'src/utils/HttpClient.ts',
    dataKey: 'data',
    projects: [
      {
        token: yapiConfig.token,
        categories: [
          {
            // 分类id。 0 全部，id前面加负号表示排除
            id: [0],
            // 请求函数的名称。 除 path.split('/')[0] 之外的path
            getRequestFunctionName(interfaceInfo, changeCase) {
              const pathArr = (interfaceInfo.path.split('/') || []).filter((item) => item);
              pathArr.length && pathArr.splice(0, 1);
              return changeCase.pascalCase(pathArr.join('/'));
            },
          },
        ],
      },
    ],
  },
]);
