import axios from "axios"

// 封装的目的是封装公共的拦截器，每个实例有单独的自己拦截器
// 创建一个单独的实例，每次请求都使用这个方法来创建实例
// 当页面切换时候 删除不必要的请求
class Http {
  constructor () {
    this.timeout = 30000
    this.baseURL = "/api"
    this.queue = {} // 存放所有请求的队列
  }
  
  mergeOptions (options) {
    // 合并参数
    return {
      timeout: this.timeout,
      baseURL: this.baseURL,
      ...options
    }
  }
  
  setInterceptor (instance) {
    instance.interceptors.request.use(config => {
      const userInfo = JSON.parse(sessionStorage.getItem("userInfo") || "{}")
      config.headers.token = userInfo.token
      
      return config
    })
    
    instance.interceptors.response.use(
      res => {
        if (res.status === 200) {
          if (res.data) {
            return Promise.resolve(res.data)
          }
        } else {
          return Promise.reject(res) // 401 403... 去判断每个状态码代表的含义
        }
      },
      error => {
        return Promise.reject(error) // message.error("接口请求失败~~~");
      }
    )
  }
  
  request (options) { // 当调用axios.request时候，内部会创建一个axios实例，并且给这个实例传入配置属性
    const opts = this.mergeOptions(options)  // 用户的参数 + 默认参数 = 总共的参数
    const axiosInstance = axios.create()
    this.setInterceptor(axiosInstance, options.url)  // 添加拦截器
    /*
    *
    * `opts` 参数可以包含以下属性：
     - `url`：用于请求的服务器 URL。
     - `method`：请求使用的 HTTP 方法，例如 `"get"`、`"post"`、`"put"`、`"delete"` 等。
     - `baseURL`：''。
     - `headers`：自定义请求头。
     - `params`：请求参数对象。
     - `data`：请求体数据。
     - `timeout`：请求超时的毫秒数。
     - `withCredentials`：浏览器是否应该在跨域请求时发送凭据（包括 cookie 和 HTTP 认证头）。
     - `responseType`：设置响应的数据类型，支持 `"json"`、`"text"`、`"blob"` 等。
     - `onUploadProgress`：上传进度回调函数。
     - `onDownloadProgress`：下载进度回调函数。
     - `auth`：HTTP 认证。
     - `cancelToken`：用于取消请求的取消标记。
     - `signal`： new AbortController().signal
     
     这些是 `opts` 最常用的属性，但并不是全部。Axios 还支持许多其他选项，具体信息可以查看官方文档：https://axios-http.com/docs/api_intro 。
    * */
   
    return axiosInstance(opts)
  }
 
  get (url, config = {}) { // 这两个方法只是对request方法 一个简写而已
    return this.request({
      url,
      method: "get",
      ...config
    })
  }
  
  post (url, data) {
    return this.request({
      url,
      method: "post",
      data
    })
  }
}

export default new Http()
