const GlobalConfigs = require('../../config/globalConfigs')
const globalConfigs = new GlobalConfigs()
const app_port = globalConfigs.getPort()

const config = {
    app_port: app_port,
}

module.exports = config