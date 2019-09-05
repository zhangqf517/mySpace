const Koa = require('koa')
const koaStatic = require('koa-static')
const router = require('./middleWares/Router/index')
const path = require('path')


const app = new Koa();

//加载静态文件
app.use(async(ctx,next) =>{
    await koaStatic(path.dirname(__dirname) + '/dist')(ctx, next)
})


app.use(router.routes(), router.allowedMethods());
module.exports = app