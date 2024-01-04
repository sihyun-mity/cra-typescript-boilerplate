import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: '',
  params: {},
  headers: {},
});

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response = await instance.get<T>(url, config);
  return response.data;
};

const post = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  const response = await instance.post<T>(url, data, config);
  return response.data;
};

const put = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  const response = await instance.put<T>(url, data, config);
  return response.data;
};

const deleteRequest = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response = await instance.delete<T>(url, config);
  return response.data;
};

const http = { get, post, put, delete: deleteRequest };

export default http;
