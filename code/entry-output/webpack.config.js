// const fs = require('fs');
const path = require('path');

module.exports = {
    mode: 'development',
    // 1. entry 字符串
    // entry: './index.js',
    // output: {
    //     filename: 'bundle.js',
    //     path: path.resolve(__dirname, 'dist')
    // }


    // 2. entry 对象 多入口打包
    entry: {
        index: './index.js',
        demo: './demo.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
    // 
}