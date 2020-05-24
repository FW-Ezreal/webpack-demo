// const fs = require('fs');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    // 加载loader
    module: {
        rules: [
            // css
            // 1. loader
            // {
            //     test: /\.css$/,
            //     loader: ['style-loader', 'css-loader']
            // },

            //  2. use
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },

            // 3. use 数字，内部对象，可扩展options
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    'css-loader'
                ]
            },
            // // img
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: '1024*20',
                        name: `[name].[hash:8].[ext]`,
                        outputPath: 'img/',
                        publicPath: './dist/img'
                    }
                }]
            },
            // html 中带 img
            // {
            //     test: /\.html$/,
            //     use: [
            //         {
            //             loader: 'html-withimg-loader'
            //         }
            //     ]
            // }

            // less
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
}