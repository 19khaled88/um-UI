export const setToLocalstorage = (key:string,token:string)=>{
    if(!key || typeof window === 'undefined'){
        return ""
    }
    localStorage.setItem(key,token)
}

export const getFromLocalstorage = (key:string)=>{
    
    if(!key || typeof window === 'undefined'){
        return ""
    }
   return localStorage.getItem(key)
}