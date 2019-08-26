import Vue from 'vue'
import Router from 'vue-router'
import login from '@/component/login/login.vue'

Vue.use(Router)

export default new Router({
    routes:[
        { path: "/", component: login, name:'登陆'},
        { path: "/login", component: login, name:'登陆'}
    ]
})