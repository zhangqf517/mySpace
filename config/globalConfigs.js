const configs = require('./configs.json')
const os = require('os')

function GlobalConfigs(nodeEnv, platform){
    this.nodeEnv = nodeEnv
    if(platform === 'api')platform = 'apiBook'
    this.platform = platform
}

GlobalConfigs.prototype.getPort = function(){
    let port = configs.port
    return port
}

/**
 * 获取本机ip地址
 * @returns {*}
 */
GlobalConfigs.prototype.getLocalIpv4 = function(){
    let interfaces = os.networkInterfaces();
    for(let devName  in interfaces){
        let iface = interfaces[devName]
        for (let i = 0; i < iface.length; i++) {
            const alisa = iface[i];
            if(alisa.family === 'IPv4' && alisa.address !== '127.0.0.1' && !alisa.internal){
                return alisa.address
            }
        }
    }
    return '127.0.0.1'
}

/**
 * 根据auto属性和platform读取ip配置
 * @returns {*}
 */
GlobalConfigs.prototype.getIpv4 = function(platform){
    let ip = configs.ip[platform]
    if (ip === 'auto'){
        ip = this.getLocalIpv4();
    }
    let prefix = configs.https[platform] ? 'https':'http'
    // return `${prefix}://${ip}:${this.getPort(platform)}`
    return prefix + '://' + ip + ':' + this.getPort(platform);
}

GlobalConfigs.prototype.getDNS = function(platform){
    return this.getIpv4(platform)
}

module.exports = GlobalConfigs;