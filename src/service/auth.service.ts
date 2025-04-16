import { authKey, LoginData } from "@/types";
import decodedToken from "@/utils/jwt";
import { getFromLocalstorage, setToLocalstorage } from "@/utils/localstorage";

export const storeUserInfo=(info:LoginData)=>{
   return setToLocalstorage(authKey,info.token as string)
}

export const getUserInfo=(key:string)=>{
    
    const autoToken = getFromLocalstorage(key)
    if(autoToken){
        const decodedTokenFound = decodedToken(autoToken)
        return decodedTokenFound
    }else{
        return ""
    }
}

export const isLoggedIn = (key:string) =>{
    const authToken = getFromLocalstorage(key)

    return !!authToken
}

export const removeUserInfo = (key:string) =>{
    return localStorage.removeItem(key)
}