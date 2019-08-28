const Koa = require('koa')
const koaStatic = require('koa-static')
const router = require('koa-router')()
const path = require('path')


const app = new Koa();

//加载静态文件
app.use(async(ctx,next) =>{
    await koaStatic(path.dirname(__dirname) + '/dist')(ctx, next)
})
// router.use('/login')

app.use(router.routes(), router.allowedMethods());
module.exports = app