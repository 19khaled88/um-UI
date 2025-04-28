
import {  IMeta } from '@/types'
import type { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { instance as axiosInstance } from './axiosInstance'
import { BaseQueryFn } from '@reduxjs/toolkit/query'

export const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: string } = { baseUrl: '' },): BaseQueryFn<
    {
      url: string
      method?: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
      headers?: AxiosRequestConfig['headers']
      contentType?:string
      meta?:IMeta 
      
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, contentType }) => {
    try {
      const result:AxiosResponse = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers:{
          "Content-Type":contentType || 'application/json'
        },
      })
      // console.log(result)
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
          message:err.message
        },
      }
    }
  }

