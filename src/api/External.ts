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

const mockUrl_0_0_0_5 = 'http://192.168.16.27:3000/mock/14' as any;
const devUrl_0_0_0_5 = '' as any;
const prodUrl_0_0_0_5 = '' as any;
const dataKey_0_0_0_5 = 'data' as any;

/**
 * 接口 [查询订单详情列表↗](http://192.168.16.27:3000/project/14/interface/api/80) 的 **请求类型**
 *
 * @分类 [对外开放模块↗](http://192.168.16.27:3000/project/14/interface/api/cat_64)
 * @更新时间 `2021-10-25 14:09:45`
 */
export interface OrderGetDetailRequest {
  /**
   * 代理商编号
   */
  agentNumber: string;
  /**
   * 审批类型
   */
  approveTypes?: number[];
  /**
   * 审批状态
   */
  approveState?: number[];
}

/**
 * 接口 [查询订单详情列表↗](http://192.168.16.27:3000/project/14/interface/api/80) 的 **返回类型**
 *
 * @分类 [对外开放模块↗](http://192.168.16.27:3000/project/14/interface/api/cat_64)
 * @更新时间 `2021-10-25 14:09:45`
 */
export interface OrderGetDetailResponse {
  /**
   * 报价信息集合
   */
  quoteApproveList?: {
    /**
     * 代理商编号
     */
    agentNumber?: string;
    /**
     * 园所编号
     */
    schoolNumber?: string;
    /**
     * 审批类型
     */
    approveType?: number;
    /**
     * 审批状态
     */
    approveState?: number;
    /**
     * 创建时间
     */
    createTime?: string;
    /**
     * 更新时间
     */
    updateTime?: string;
    /**
     * 审批结束时间
     */
    approveEndTime?: string;
  }[];
  /**
   * 代理商编号
   */
  agentNumber?: string;
  /**
   * 签约信息集合
   */
  signApproveList?: {
    /**
     * 代理商编号
     */
    agentNumber?: string;
    /**
     * 园所编号
     */
    schoolNumber?: string;
    /**
     * 审批类型
     */
    approveType?: number;
    /**
     * 审批状态
     */
    approveState?: number;
    /**
     * 创建时间
     */
    createTime?: string;
    /**
     * 更新时间
     */
    updateTime?: string;
    /**
     * 审批结束时间
     */
    approveEndTime?: string;
  }[];
}

/**
 * 接口 [查询订单详情列表↗](http://192.168.16.27:3000/project/14/interface/api/80) 的 **请求配置的类型**
 *
 * @分类 [对外开放模块↗](http://192.168.16.27:3000/project/14/interface/api/cat_64)
 * @更新时间 `2021-10-25 14:09:45`
 */
type OrderGetDetailRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.16.27:3000/mock/14',
    '',
    '',
    '/external/order/get/detail',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [查询订单详情列表↗](http://192.168.16.27:3000/project/14/interface/api/80) 的 **请求配置**
 *
 * @分类 [对外开放模块↗](http://192.168.16.27:3000/project/14/interface/api/cat_64)
 * @更新时间 `2021-10-25 14:09:45`
 */
const orderGetDetailRequestConfig: OrderGetDetailRequestConfig = {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/external/order/get/detail',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'OrderGetDetail',
};

/**
 * 接口 [查询订单详情列表↗](http://192.168.16.27:3000/project/14/interface/api/80) 的 **请求函数**
 *
 * @分类 [对外开放模块↗](http://192.168.16.27:3000/project/14/interface/api/cat_64)
 * @更新时间 `2021-10-25 14:09:45`
 */
export const OrderGetDetail = (
  requestData: OrderGetDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<OrderGetDetailResponse>(
    prepare(orderGetDetailRequestConfig, requestData),
    ...args,
  );
};

OrderGetDetail.requestConfig = orderGetDetailRequestConfig;

/**
 * 接口 [商品交易记录导入↗](http://192.168.16.27:3000/project/14/interface/api/89) 的 **请求类型**
 *
 * @分类 [对外开放模块↗](http://192.168.16.27:3000/project/14/interface/api/cat_64)
 * @更新时间 `2021-10-28 14:37:32`
 */
export interface RecordImportRequest {}

/**
 * 接口 [商品交易记录导入↗](http://192.168.16.27:3000/project/14/interface/api/89) 的 **返回类型**
 *
 * @分类 [对外开放模块↗](http://192.168.16.27:3000/project/14/interface/api/cat_64)
 * @更新时间 `2021-10-28 14:37:32`
 */
export interface RecordImportResponse {}

/**
 * 接口 [商品交易记录导入↗](http://192.168.16.27:3000/project/14/interface/api/89) 的 **请求配置的类型**
 *
 * @分类 [对外开放模块↗](http://192.168.16.27:3000/project/14/interface/api/cat_64)
 * @更新时间 `2021-10-28 14:37:32`
 */
type RecordImportRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.16.27:3000/mock/14',
    '',
    '',
    '/external/record/import',
    'data',
    string,
    string,
    true
  >
>;

/**
 * 接口 [商品交易记录导入↗](http://192.168.16.27:3000/project/14/interface/api/89) 的 **请求配置**
 *
 * @分类 [对外开放模块↗](http://192.168.16.27:3000/project/14/interface/api/cat_64)
 * @更新时间 `2021-10-28 14:37:32`
 */
const recordImportRequestConfig: RecordImportRequestConfig = {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/external/record/import',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'RecordImport',
};

/**
 * 接口 [商品交易记录导入↗](http://192.168.16.27:3000/project/14/interface/api/89) 的 **请求函数**
 *
 * @分类 [对外开放模块↗](http://192.168.16.27:3000/project/14/interface/api/cat_64)
 * @更新时间 `2021-10-28 14:37:32`
 */
export const RecordImport = (requestData?: RecordImportRequest, ...args: UserRequestRestArgs) => {
  return request<RecordImportResponse>(prepare(recordImportRequestConfig, requestData), ...args);
};

RecordImport.requestConfig = recordImportRequestConfig;

/**
 * 接口 [代理商批量查询↗](http://192.168.16.27:3000/project/14/interface/api/98) 的 **请求类型**
 *
 * @分类 [对外开放模块↗](http://192.168.16.27:3000/project/14/interface/api/cat_64)
 * @更新时间 `2021-11-02 17:56:45`
 */
export interface UserGetAgentInfosRequest {
  /**
   * 代理商编号数组
   */
  agentIds?: string[];
  /**
   * oa外部id数组
   */
  oaExternalIds?: string[];
}

/**
 * 接口 [代理商批量查询↗](http://192.168.16.27:3000/project/14/interface/api/98) 的 **返回类型**
 *
 * @分类 [对外开放模块↗](http://192.168.16.27:3000/project/14/interface/api/cat_64)
 * @更新时间 `2021-11-02 17:56:45`
 */
export type UserGetAgentInfosResponse = {
  agentNo: null | string;
  userId: string;
  userName: string;
  oaId: string;
}[];

/**
 * 接口 [代理商批量查询↗](http://192.168.16.27:3000/project/14/interface/api/98) 的 **请求配置的类型**
 *
 * @分类 [对外开放模块↗](http://192.168.16.27:3000/project/14/interface/api/cat_64)
 * @更新时间 `2021-11-02 17:56:45`
 */
type UserGetAgentInfosRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.16.27:3000/mock/14',
    '',
    '',
    '/external/user/get/agent/infos',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [代理商批量查询↗](http://192.168.16.27:3000/project/14/interface/api/98) 的 **请求配置**
 *
 * @分类 [对外开放模块↗](http://192.168.16.27:3000/project/14/interface/api/cat_64)
 * @更新时间 `2021-11-02 17:56:45`
 */
const userGetAgentInfosRequestConfig: UserGetAgentInfosRequestConfig = {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/external/user/get/agent/infos',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'UserGetAgentInfos',
};

/**
 * 接口 [代理商批量查询↗](http://192.168.16.27:3000/project/14/interface/api/98) 的 **请求函数**
 *
 * @分类 [对外开放模块↗](http://192.168.16.27:3000/project/14/interface/api/cat_64)
 * @更新时间 `2021-11-02 17:56:45`
 */
export const UserGetAgentInfos = (
  requestData: UserGetAgentInfosRequest,
  ...args: UserRequestRestArgs
) => {
  return request<UserGetAgentInfosResponse>(
    prepare(userGetAgentInfosRequestConfig, requestData),
    ...args,
  );
};

UserGetAgentInfos.requestConfig = userGetAgentInfosRequestConfig;

/* prettier-ignore-end */
