import { defineConfig, ExtendedInterface, ChangeCase } from 'yapi-to-typescript';

// 自定义函数名
function getRequestFunctionName(interfaceInfo:ExtendedInterface, changeCase: ChangeCase) {
  const dir = interfaceInfo.parsedPath.dir.split('/');
  const name = `${interfaceInfo.method}
        _${dir && dir.length > 0 && dir[dir.length - 1]}
        _${interfaceInfo.parsedPath.name}`;
  return changeCase.camelCase(name);
}
export default defineConfig([
  {
    serverUrl: 'http://yapi.smart-xwork.cn/',
    typesOnly: false,
    target: 'typescript',
    reactHooks: {
      enabled: false,
    },
    prodEnvName: 'production',
    outputFilePath: 'src/api/index.ts',
    requestFunctionFilePath: 'src/utils/httpClient.ts',
    dataKey: 'data',
    getRequestFunctionName,
    getRequestDataTypeName: (interfaceInfo, changeCase) => {
      const funName = getRequestFunctionName(interfaceInfo, changeCase);
      return changeCase.pascalCase(`I_${funName}_Request`);
    },
    getResponseDataTypeName: (interfaceInfo, changeCase) => {
      const funName = getRequestFunctionName(interfaceInfo, changeCase);
      return changeCase.pascalCase(`I_${funName}_Response`);
    },
    projects: [
      {
        token: 'ecaf79cfcc4f5d01c830f41a826efbd8b5816e9db6a0634d0dcb6107314759dd',
        categories: [
          {
            id: 0,
          },
        ],
      },
    ],
  },
]);
