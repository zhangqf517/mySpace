let app = require('../src/service')
let basic_config = require('./basic.config')
const GlobalConfig = require('../../config/globalConfigs')
const nodeEnv = process.env.NODE_ENV
const globalConfig = new GlobalConfig(nodeEnv, 'service')


let port = normalizePort(process.env.PORT || basic_config.service_port)
//打印输出端口号
console.log(`端口【${port}】已启动，正在监听中...`);
let http = require('http')
let server = http.createServer(app.callback())

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port)


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    let port = parseInt(val, 10)
    if (isNaN(port)) {
        return val
    }
    if (port >= 0) {
        return port
    }
    return false
}