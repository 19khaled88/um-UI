import { authKey, IGenericErrorReponse } from "@/types";
import { getFromLocalstorage } from "@/utils/localstorage";
import axios, { AxiosResponse } from "axios";

const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers['Accept'] = 'application/json';
instance.defaults.timeout = 60000;


// Add a request interceptor
instance.interceptors.request.use(function (config) {
    const accessToken = getFromLocalstorage(authKey)
    if(accessToken){
        config.headers.Authorization = accessToken
    }
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response:AxiosResponse) {
    // const responseObject:ResponseSuccessType = {
    //   data:response?.data?.data,
    //   meta:response?.data?.meta,
    //   headers:response.headers,
    //   config:response.config,
    //   status:response.status,
    //   statusText:response.statusText
    // }
    // console .log(responseObject)

    // console.log(response)
    // return response;
    response.data = {
      data:response.data.data,
      meta:response.data.meta
    }
    return response
  }, function (error) {
    const responseObject:IGenericErrorReponse = {
      statusCode:error?.response?.data?.statusCode || 500,
      message:error?.response?.data?.message || 'Something went wrong',
      errorMessage:error?.response?.data?.message
    }
    return responseObject
    // return Promise.reject(error);
  });

export {instance}