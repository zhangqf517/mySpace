import {
    LOGIN
} from './types.js'

let localStorage = window.localStorage

export default {
    [LOGIN](state, user){
        state.loginUser._id = user._id
        state.loginUser.username = user.username
        state.loginUser.password = user.password
        localStorage.setItem('loginUser', JSON.stringify(user))
    }
}