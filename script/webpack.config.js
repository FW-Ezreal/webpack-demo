const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_DEV === 'development';

const pages_config = require('../pages.config');
const webpack_base = require('./webpack.base')({}, isDev);


module.exports = function () {
  const pages = pages_config.pages;
  const entryObj = {};
  pages.forEach((ele) => {
    const entry = ele.entry.substring(0, ele.entry.length - 5);
    webpack_base.plugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'index.ejs'),
        title: ele.title,
        filename: ele.entry,
        inject: false,
        entry: entry
      })
    )
    entryObj[entry] = ele.src;
  });
  webpack_base.entry = entryObj;
  return webpack_base;
}