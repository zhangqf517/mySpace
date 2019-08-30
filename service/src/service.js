const Koa = require('koa');
const router = require('koa-router')()

const app = new Koa();

let async = require('async')

//暴露接口
async.series([
    function(cb){
        const comSpace = require('./restapi/comSpace')
        router.use('/service', comSpace.routes(), comSpace.routes())
        cb();
    },
    function(cb){
        app.use(router.routes(), router.allowedMethods())
        cb()
    }
])


module.exports = app