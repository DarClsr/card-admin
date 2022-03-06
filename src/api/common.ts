import http from "@/utils/http";

import { ILoginParams } from './types/common';
import { ILoginInfo } from './types/common';
// 公共接口



export const login=(params:ILoginParams)=>{
    return http.post<ILoginInfo>("login",params)
}