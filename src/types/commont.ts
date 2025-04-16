export interface IMeta{
    limit:number;
    page:number;
    size:number;
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

  export const authKey = 'accessToken'