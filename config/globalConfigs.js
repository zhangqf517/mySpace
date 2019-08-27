const configs = require('./configs.json')

function GlobalConfigs(){

}

GlobalConfigs.prototype.getPort = function(){
    let port = configs.port
    return port
}

module.exports = GlobalConfigs;