import {  Method } from 'axios';
export interface IMeta {
  limit: number;
  page: number;
  size: number;
}

export interface LoginData {
  isNeededPassChange: boolean;
  token: string;
}

export interface LoginResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: LoginData;
}

export type ResponseSuccessType = {
  
  data: LoginData;
  meta?: IMeta;
 

}

export interface RequestOptions<T = unknown>  {
  url: string;
  method: Method; // Comes from Axios, e.g., 'GET' | 'POST' | ...
  data?: T;
  params?: Record<string, T>;
  contentType?: string;
}

export interface ApiResponse<T = unknown, M = unknown> {
  data: T
  message: string
  statusCode: number
  success: boolean 
  meta?:M
}

export type AxiosBaseQueryResult<D = unknown> = 
  | { data: D }
  | { error: {
      status?: number
      data?: unknown
      message?: string
    }}

export type IGenericErrorReponse ={
  statusCode:number;
  message:string;
  errorMessage:IGenericErrorMessage
}
export type IGenericErrorMessage = {
  path:string | number;
  message:string;
}
export const authKey = "accessToken";

export interface IPasswordChangeInput {
  oldPassword: string;
  newPassword: string;
}