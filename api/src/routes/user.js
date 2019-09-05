import Router from 'koa-router'
import * as userController from '../controllers/userController'

const router = new Router({
    prefix: '/user'
})

router.post('login', async (ctx) => {
    try {
        const loginUser = { username: ctx.request.body.username, password: ctx.request.body.password }
        let userinfo = await userController.login(loginUser)
        ctx.body = { success: true, results: userinfo }
    } catch (err) {
        ctx.body = { success: false, err: err.message }
    }
})