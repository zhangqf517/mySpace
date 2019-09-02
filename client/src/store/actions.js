import { LOGIN } from './types'

const actions = {
    async login({ commit }, user) {
        if (user.username === '' || user.password === '') {
            return {success:false,err:'用户名或密码为空！'}            
        }
    }
}

export default actions