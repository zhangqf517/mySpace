//生成client配置
const GlobalConfigs = require('../../config/globalConfigs')
const nodeEnv = process.env.NODE_ENV
const globalConfigs = new GlobalConfigs(nodeEnv, 'client')
const apiBookDns = globalConfigs.getDNS('apiBook')

const fs = require('fs')
const configContent = JSON.stringify({ apiBookDns })
fs.writeFileSync('./config/config.json', configContent)


const config = require('../config/basic.config')
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')


function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/component/main.js']
    },
    output: {
        path: path.resolve(__dirname, config.publicPath),
        filename: '[name]/[name].js',
        publicPath: config.publicPath
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
            }
        ]
    },
    resolve: {
        alias: {
            '@': resolve('src')
        },
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    //将vue的文件的访问的url设置成与后端端口一致
    devServer: {
        proxy: {
            '/': {
                target: config.apiBookDns
            }
        }
    }
};