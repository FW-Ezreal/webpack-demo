/**
 * 
 * 对js处理和优化
 * **/

const path = require('path');



console.log('color: #00a3cc', require('babel-loader'), require('@babel/preset-env'));
module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: {
        index: './index.js'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
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
        // new CleanWebpackPlugin()
    ]
}