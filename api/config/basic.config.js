const GlobalConfigs = require('../../config/globalConfigs')
const globalConfigs = new GlobalConfigs()
const app_port = globalConfigs.getPort()

const config = {
    //域名
    system_dns: globalConfigs.getLocalIpv4('service'),
    app_port: app_port
}

module.exports = config