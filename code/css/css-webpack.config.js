/***
 * 
 * 主要对css处理和优化
*/

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const TerserWebpackPlugin =  require('terser-webpack-plugin');


module.exports = {
    optimization: {
        minimizer: [
            // new UglifyWebpackPlugin(),
            new TerserWebpackPlugin(),
            new OptimizeCss()
        ]
    },
    mode: 'production',
    entry: {
        index: './index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     loader: ['style-loader', 'css-loader']
            // },
            // {
            //     test: /\.less$/,
            //     use: [
            //         'style-loader',
            //         'css-loader',
            //         'less-loader'
            //     ]
            // }
            {
                test: /\.css$/,
                loader: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    // todo
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         config: {
                    //             path: path.resolve(__dirname, './postcss.config.js')
                    //         }
                    //     }
                    // },
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}