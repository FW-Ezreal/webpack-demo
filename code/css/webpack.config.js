/**
 * 
 * 对js处理和优化
 * **/

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: {
        index: './optJs.js'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.less$/,
            use: [
              // 'style-loader',
            //   MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
              'less-loader'
            ]
          },
          {
            test: /\.css$/,
            use: [
              {loader: 'style-loader'},
            //   MiniCssExtractPlugin.loader,
              {loader: 'css-loader'},
              {loader: 'postcss-loader'}
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
        // new CleanWebpackPlugin()
    ]
}