// https://vitejs.dev/config/
let api = {}
switch (import.meta.env.VITE_USER_NODE_ENV) {
  case "development":
    api = {
      baseUrl: "https://dr-dev.1.com.cn/api/operate/",
/*       baseUrl: "http://172.29.60.196:13008/", */
      baseOperaUrl: "https://dr-dev.1.com.cn/api/operate/",
      logistics: "https://dr-dev.1.com.cn/api/operate/",
      upload: "https://sy.1.com.cn:44300/fsm/fsevice/uploadFile"
    }
    break;
  case "test":
    api = {
      baseUrl: "https://dr-test.1.com.cn/api/operate/",
      upload: "https://sy.1.com.cn:44300/fsm/fsevice/uploadFile"
    }
    break;
  case "production":
    api = {
      baseUrl: "https://dr.1.com.cn/drapp/api/operate/",
      upload: "https://iov-fsm.1.com.cn/fsevice/uploadFile"
    }
    break;
}
export default api;
