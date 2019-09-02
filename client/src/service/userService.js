import axios from './axios'

const user = {
    login : (query) => axios.setAxiosPostPromise('/user/login', query),
}

export default user