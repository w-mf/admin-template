import axios, { AxiosError } from 'axios';
import { ElMessage } from 'element-plus';
import type { RequestFunctionParams } from 'yapi-to-typescript';
// eslint-disable-next-line import/no-cycle
import { useRouter } from 'vue-router';
import { useAppStore } from '~/stores/app';
import nProgress from '~/utils/nprogress';

type ApiModelType = 'local' | 'test' | 'prod' | 'mock';
// 开发环境才使用apiModel
const apiModel = ((import.meta.env.DEV && import.meta.env.VITE_API_MODEL) || 'local') as ApiModelType;

const yttHttpClientInstance = axios.create({
  // baseURL: apiModel === 'mock' ? '' : '/api',
  timeout: 10000,
});
// 请求拦截器
yttHttpClientInstance.interceptors.request.use(
  (config) => {
    nProgress.start();
    const appStore = useAppStore();
    const cfg = config;
    if (cfg.headers) cfg.headers.Authorization = `Bearer ${appStore.token}`;
    return cfg;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
yttHttpClientInstance.interceptors.response.use(
  (response) => {
    nProgress.done();
    return Promise.resolve(response.data);
  },
  (error: AxiosError) => {
    const { response } = error;
    const router = useRouter();
    switch (response?.status) {
      case 404:
        router.push('/error/404').then();
        break;
      case 403:
        router.push('/error/403').then();
        break;
      case 500:
        router.push('/error/500').then();
        break;
      case 401: // 登录失效 等异常请求
        ElMessage.error({
          message: `登录失效，请重新登录`,
          duration: 2000,
          onClose: () => {
            window.location.href = '/login';
          },
        });
        break;
      case 400: // 验证失败
        if (error.response?.data?.message) {
          if (Array.isArray(error.response.data.message)) ElMessage.error(error.response.data.message[0]);
          else ElMessage.error(error.response.data.message);
        } else {
          ElMessage.error(`${error.response?.status} 校验失败`);
        }
        break;
      default:
        ElMessage.error(error.response?.data?.message || `${error.response?.status} 服务出错了，请稍后重试`);
    }
    nProgress.done();
    return Promise.reject(response?.data);
  },
);

export default async function HttpClient<TResponseData>(payload: RequestFunctionParams): Promise<TResponseData> {
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
