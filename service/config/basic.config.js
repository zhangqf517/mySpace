const GlobalConfigs = require('../../config/globalConfigs')
const nodeEnv = process.env.NODE_ENV;
const globalConfigs = new GlobalConfigs(nodeEnv, 'service')

const config = {
    //程序运行端口
    service_port: globalConfigs.getPort('service'),

    //数据库地址
    mongodb_meeting: globalConfigs.getMongoDBUrl('comSpace')
}

module.exports = config