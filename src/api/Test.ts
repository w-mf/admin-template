/* prettier-ignore-start */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { Method, RequestBodyType, ResponseBodyType, RequestConfig, RequestFunctionRestArgs, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
import request from '../utils/HttpClient';

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>;

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult,
> = (TRequestConfig['requestDataOptional'] extends true
  ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (
      requestData: TRequestData,
      ...args: RequestFunctionRestArgs<typeof request>
    ) => TRequestResult) & {
  requestConfig: TRequestConfig;
};

const mockUrl_0_0_0_1 = 'http://192.168.16.27:3000/mock/14' as any;
const devUrl_0_0_0_1 = '' as any;
const prodUrl_0_0_0_1 = '' as any;
const dataKey_0_0_0_1 = 'data' as any;

/**
 * 接口 [测试↗](http://192.168.16.27:3000/project/14/interface/api/107) 的 **请求类型**
 *
 * @分类 [test↗](http://192.168.16.27:3000/project/14/interface/api/cat_112)
 * @更新时间 `2021-11-03 10:55:36`
 */
export interface ARequest {}

/**
 * 接口 [测试↗](http://192.168.16.27:3000/project/14/interface/api/107) 的 **返回类型**
 *
 * @分类 [test↗](http://192.168.16.27:3000/project/14/interface/api/cat_112)
 * @更新时间 `2021-11-03 10:55:36`
 */
export interface AResponse {
  field_4: string;
  field_5: number[];
  field_6: {
    field_7: string;
  };
}

/**
 * 接口 [测试↗](http://192.168.16.27:3000/project/14/interface/api/107) 的 **请求配置的类型**
 *
 * @分类 [test↗](http://192.168.16.27:3000/project/14/interface/api/cat_112)
 * @更新时间 `2021-11-03 10:55:36`
 */
type ARequestConfig = Readonly<
  RequestConfig<
    'http://192.168.16.27:3000/mock/14',
    '',
    '',
    '/test/a',
    'data',
    string,
    string,
    true
  >
>;

/**
 * 接口 [测试↗](http://192.168.16.27:3000/project/14/interface/api/107) 的 **请求配置**
 *
 * @分类 [test↗](http://192.168.16.27:3000/project/14/interface/api/cat_112)
 * @更新时间 `2021-11-03 10:55:36`
 */
const aRequestConfig: ARequestConfig = {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/test/a',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'A',
};

/**
 * 接口 [测试↗](http://192.168.16.27:3000/project/14/interface/api/107) 的 **请求函数**
 *
 * @分类 [test↗](http://192.168.16.27:3000/project/14/interface/api/cat_112)
 * @更新时间 `2021-11-03 10:55:36`
 */
export const A = (requestData?: ARequest, ...args: UserRequestRestArgs) => {
  return request<AResponse>(prepare(aRequestConfig, requestData), ...args);
};

A.requestConfig = aRequestConfig;

/* prettier-ignore-end */
