import { LOGIN } from './types'
import userService from '../service/userService'

const actions = {
    async login({ commit }, user) {
        if (user.username === '' || user.password === '') {
            return { success: false, err: '用户名或密码为空！' }
        }
        const loginUser = await userService.login(user)
        if (!loginUser.success) {
            return { success: false, err: loginUser.err }
        }
        return { success: true }
    }
}

export default actions