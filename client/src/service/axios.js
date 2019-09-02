import axios from 'axios'
import config from '../utils/system.config'
axios.defaults.timeout = 600000
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
axios.defaults.baseURL = config.my_api

export default {
    setAxiosPostPromise: (urlClient,data) => {
        console.log('参数成功进入');
    }
}