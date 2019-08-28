const generatedConfig = require('./config.json')

const apiBookDns = generatedConfig.apiBookDns

const config = {
    //输出路径
    publicPath: '../../api/dist/',
    apiBookDns: apiBookDns,
}

module.exports = config;