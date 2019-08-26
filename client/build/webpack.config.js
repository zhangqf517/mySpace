var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/component/main.js']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.js'
    },
    mode:'development',
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
            // {
            //     test: /\.vue$/,
            //     loader: 'vue-loader',
            //     options: vueLoaderConfig
            // },
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
        // '@': resolve('src')
    },
    plugins: [

    ]
};