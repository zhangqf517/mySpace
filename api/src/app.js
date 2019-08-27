const Koa = require('koa')
const router = require('koa-router')()


const app = new Koa();

router.use('/login')

app.use(router.routes(), router.allowedMethods());
module.exports = app