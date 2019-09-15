const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const root_dir = path.join(__dirname, '..')

module.exports = function (userConfig = {}, isDev = true) {
  const jsFileName = '[name].js';
  const assetsPath = 'static';
  return {
    mode: isDev ? 'development' : 'production',
    output: {
      path: path.join(root_dir, 'dist/netsong'),
      filename: path.posix.join(assetsPath, jsFileName),
      publicPath: './'
    },
    module: {
      rules: [
        {
          test: /(\.less)$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin()
    ]
  }
}


