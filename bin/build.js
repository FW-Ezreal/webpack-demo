const chalk = require('chalk');
const webpack = require('webpack');

const webpack_prod_config = require('../script/webpack.config')();

const compiler = webpack(webpack_prod_config);

compiler.run((err, stats) => {
  if (err) {
    console.log(chalk.red('打包错误'))
  }

  console.log(stats.toString({
    modules: false,
    chunks: false,
    children: false,
    colors: true
  }))
  console.log(chalk.green('[打包完成]'), chalk.bold('动起你的小手把dist文件上传上线吧！'))
})