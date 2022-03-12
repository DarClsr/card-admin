import http from "@/utils/http";

import { ILoginParams } from './types/common';
import { ILoginInfo } from './types/common';
// 公共接口



/**
 * 登录
 * @param  account password
 * @returns  
 */
export const login=(params:ILoginParams)=>{
    return http.post<ILoginInfo>("auth/login",params)
}

/**
 * 退出登录
 * 
 */
 export const logout=()=>{
    return http.post("auth/logout")
}