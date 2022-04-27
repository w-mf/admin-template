import axios, { AxiosError } from 'axios';
import { ElMessage } from 'element-plus';
import type { RequestFunctionParams } from 'yapi-to-typescript';

type ApiModelType = 'local' | 'test' | 'prod' | 'mock';
// 开发环境才使用apiModel
const apiModel = ((import.meta.env.DEV && import.meta.env.VITE_API_MODEL) ||
  'local') as ApiModelType;

const yttHttpClientInstance = axios.create({
  baseURL: apiModel === 'mock' ? '' : '/api',
  timeout: 10000,
});
// 请求拦截器
// yttHttpClientInstance.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// 响应拦截器
yttHttpClientInstance.interceptors.response.use(
  (response) => {
    const res = response.data;
    switch (res.code) {
      case 200: // 成功
        return res.data;
      case 1001: // 登录失效 等异常请求
        window.location.href = '/#/user/login';
        break;
      default:
        ElMessage.error(res.msg || '抱歉，服务出错了！');
    }
    return res.data || {};
  },
  (error: AxiosError) => {
    ElMessage.error(`${error.response?.status} 服务出错了，请稍后重试`);
    return {};
  },
);

export default async function HttpClient<TResponseData>(
  payload: RequestFunctionParams,
): Promise<TResponseData> {
  const { path: url, method, requestHeaders: headers, data } = payload;
  const { baseURL } = yttHttpClientInstance.defaults;
  // api 模式映射baseUrl地址,devUrl和prodUrl在yapi上配置
  const apiModelMapBaseUrl = {
    local: '',
    test: 'devUrl',
    prod: 'prodUrl',
    mock: 'mockUrl',
  };
  const payloadField = (apiModelMapBaseUrl[apiModel] || '') as keyof RequestFunctionParams;
  const location = payload[payloadField] || '';
  return yttHttpClientInstance.request({
    baseURL: `${location || ''}${baseURL || ''}`,
    url,
    method,
    headers,
    data,
  });
}
