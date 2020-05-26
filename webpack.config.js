const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // optimization: {
    //     minimizer: [
    //         new OptimizeCss(),
    //         new TerserWebpackPlugin()
    //     ]
    // },
    mode: 'development',
    // mode: 'production',

    entry: {
        index11: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:6].js'
        // publicPath: 'http://xxx'
    },
    module: {
        rules: [
            {
                test: /.css$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /.(jpg|jpeg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024*30,
                            name: '[name].[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                use: {
                        loader: 'babel-loader',
                        options: {
                        presets: ['@babel/preset-env'] // y预设
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'html-webpack-plugin',
            template: path.resolve(__dirname, 'index.ejs'),
            haha: 'haha'
        })
    ]
    // devServer: {
    //     port: 9090,
    //     open: true,
    //     contentBase: './dist',
    //     compress: true // gzip 压缩
    // },
    // watch: true
}