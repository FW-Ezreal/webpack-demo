const chalk = require('chalk');
const webpack = require('webpack');


const pages_config = require('../pages.config');

const webpack_dev_config = require('../script/webpack.config')();


const compiler = webpack(webpack_dev_config);

compiler.watch({
  ignored: /node_modules/
}, (err, stats) => {
  if (err) {
    console.log(chalk.red('[编译错误]'));
    return;
  }

  console.log(stats.toString({
    modules: false,
    children: false,
    chunks: false,
    colors: true
  }))
})
