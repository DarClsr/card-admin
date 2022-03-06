import axios from "Axios";

const http=axios.create({
    baseURL:import.meta.env.VITE_API_BASE,
});


// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 统一设置用户身份token
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 统一处理接口响应错误 比如如token过期 服务端异常
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


export default http


