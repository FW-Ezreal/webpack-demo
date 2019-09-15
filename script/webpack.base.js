const path = require('path');

const root_dir = path.join(__dirname, '..')
console.log("TCL: root_dir", root_dir)
module.exports = function () {


  return {
    // entry
    output: {
      path: path.join(root_dir, 'dist/netsong'),
      filename: '[name].js'
    },
    modules: {
      // rules: [
      //   {
      //     test: /\.js$/,
      //     user: ['']
      //   }
      // ]
    },
    plugins: []
  }
}


