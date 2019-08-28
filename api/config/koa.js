const app = require('../src/app')
const debug = require('debug')('demo:server');
const basic_config = require('./basic.config')

let port = normalizePort(process.env.PORT || basic_config.app_port)
//打印输出端口号
console.log(`端口【${port}】已启动，正在监听中...`);

const http = require('http');
const https = require('https');
let server = http.createServer(app.callback());


/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onListening() {
    let addr = server.address()
    let bind = typeof addr === 'string' ?
        ' pipe ' + addr :
        ' port ' + addr.port;
    debug(' Listening on ' + bind)
}

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val
    }

    if (port >= 0) {
        return port
    }

    return false
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error
    }

    let bind = typeof port === 'string' ?
        ' Pipe ' + port :
        ' Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges')
            process.exit(1)
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use')
            process.exiit(1)
            break;
        default:
            throw error;
    }
}