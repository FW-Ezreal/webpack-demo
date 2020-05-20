### webpack 基本知识

* (笔记)[https://github.com/1better/mywebpack]
* 用ejs模板输出一个页面
  - [ ] 引入html-webpack-plugin
  - [ ] 插件自动插入main.js 和 index.js
  - [ ] 添加标题 htmlWebpackPlugin.options.title
  - [ ] 添加hash & 控制在8位 `[name][hash:4].js`
  - [ ] 添加公共路径 `publicPath`
  - [ ] 压缩html: 删除双引号，变成一行 `minify`   
  - [ ] 每次删除dist  新clean-webpack-plugin 是个对象，再引入
  - [ ] 自动插入指定js `chunks: ['a', 'b']`
  - [ ] 插入头部 `inject: head`
  - [ ] 手动插入 inject: false,  ejs option 插入 files.chunks[options.entry].entry

* 处理 css   loader  
  - [ ] 处理.css `style-loader` 插入 `css-loader`@import
  - [ ] 处理less `less` `less-loader`
  - [ ] css 插入顶部 options: {insertAt: 'top'}  ??
  - [ ] 添加前缀  `postcss-loader` `autoprefixer`  ??  加上浏览器参数就好使了？？
* 抽离 css plugin
  - [ ] style-loader 插入style里, 引入多个css 文件 --> 抽离出一个css `mini-css-extract-plugin` `Mini~Plugin.loader` 替换 style-loader (蠢了，忘了inject:false, 一直没插进去)
  - [ ] 压缩css `optimiza-css-assets-webpack-plugin`, 
  ``` js
    optimization: {
      minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
  ```
  - [ ] `uglifyjs-webpack-plugin` 压缩js
  - [ ] 没压缩是因为`mode=development` 都不会压缩，`mode=production` 如果用css压缩，就必须用`uglifyJs`,要不然js不会被压缩

  - [ ] `uglify-webpack-js` 处理es6,有问题(没做js处理)
  ``` 
  ERROR in index54a5.js from UglifyJs
  Unexpected token: keyword «const»
  ```


* 处理 js
  - [ ] `babel-loader @babel/core @babel/preset-env`
      @babel/core babel/core 是核心模块
      @babel/preset-env 高级语法转为低级语法es6 -> es5
      es6中的高级语法
      ``` js
      {
        test: /.js$/,
        use: [
          loader: 'babel-loader,
          options: {
            presets: ['@babel/preset-env'], // 预设，大插件集合
            plugins: [
              '@babel/plugin-proposal-class-properties' // class 语法
            ]
          }
        ]
      }

      ```
*  优化项1.不需要loader 进一步解析 ,2. exclude: /node_modules/
```
  module: {
    noParse: /jquery/
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/
        inclued: path.resolve('src')
      }
    ]
  }
```
