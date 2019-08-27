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
    mode:'development',
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['vue-style-loader','css-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     include: [resolve('src'), resolve('test')]
            // },
            // {
            //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 10000,
            //         name: utils.assetsPath('img/[name].[hash:7].[ext]')
            //     }
            // },
            // {
            //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 10000,
            //         name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            //     }
            // }
        ]
    },
    resolve: {
        alias:{
            '@': resolve('src')
        },
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};