const path = require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
module.exports = {
  mode: 'development',
  entry: {
    'index': path.join(__dirname, 'src/index/index.js'),
    'main': path.join(__dirname, 'src/main/main.js'),
    'home': path.join(__dirname, 'src/home/home.js')
  },
  output: {
    path: path.join(__dirname, 'dist'), //路径必须是一个绝对路径
    filename: '[name][hash:4].js',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader' ,'less-loader']
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader',},
          {loader: 'css-loader'},
          {loader: 'postcss-loader'}
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.ejs'),
      filename: 'html-webpack-plugin.html',
      title: 'webpack-demo-learn',
      entry: 'index',
      // chunks: ['main','home'],
      // inject: 'head'
      hash: true,
      inject: false
    }),
  ]
}