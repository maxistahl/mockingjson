import { InternalAxiosRequestConfig } from 'axios';

type useMockingjsonType = (value: InternalAxiosRequestConfig<any>) => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>

const useMockingjson: useMockingjsonType = (value) => {
  value.url = `/${value.method}${value.url}.json`;
  value.method = 'get';
  value.baseURL = 'http://localhost:3000';
  return value;
};

export {
  useMockingjson
};