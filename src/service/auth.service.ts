import { authKey, LoginData } from "@/types";

import decodedToken from "@/utils/jwt";
import { getFromLocalstorage, setToLocalstorage } from "@/utils/localstorage";
import { JwtPayload as DefaultJwtPayload } from "jwt-decode";


export interface MyJwtPayload extends DefaultJwtPayload {
    id: string;
    role: string;
    exp:number;
    iat:number;
    // add other custom properties if needed
  }

export const storeUserInfo=(info:LoginData)=>{
   return setToLocalstorage(authKey,info.token as string)
}

export const getUserInfo=(key:string)=>{
    
    const autoToken = getFromLocalstorage(key)
    if(autoToken){
        const decodedTokenFound = decodedToken(autoToken) as MyJwtPayload
        
        return decodedTokenFound
    }else{
        return ""
    }
}

export const isLoggedIn =async (key:string) =>{
    const authToken = getFromLocalstorage(key)

    return !!authToken
}

export const removeUserInfo = (key:string) =>{
    return localStorage.removeItem(key)
}