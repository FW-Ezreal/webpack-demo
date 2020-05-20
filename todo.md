- [ ] src/index.js打包到dist下 文件名叫bundle.js
- [ ] src/index.html htmlwebpackplugin 插件引入
- [ ] mode = produce 时 minifiy 去掉双引号 removeAttributequotes
- [ ] 折为一行 collapsewhitespace: true
- [ ] HTMLwebpackplugin hash戳 和js hash戳  xx.[hash:8].js
- [ ] 本地起服务webpack-dev-server  
  ``` javascript
    devServer: {
      port: 3000,
      progess: true,
      contentBase: './build',
      compress: true
    }
  ```
- [ ] loader index.js 引入 index.css
- [ ] css-loader 负责解析 @import  style-loader吧css插入到head标签中
``` javascript
  module: {
    rules:[
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        use: [
          // MiniCssExtractPlugin.loader  抽离css
          {
            loader: 'style-loader'
            // options: {
            //   insertAt: 'top'
            // }
          },
          'css-loader'
        ]
      }
    ]
  }
```
- [ ]此时在index.html中 加入css样式 覆盖不了 因为style-loader 默认会插入最下面
- [ ]加入less    less less-loader
- [ ]抽离css 到一个main.css内， link引入 mini-css-extract-plugin
- [ ] plugin  new xx()   在loader里引用
- [ ] css前缀  postcss-loader autoprefixer
``` javascript
  module: {
    rules:[
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        use: [
          // MiniCssExtractPlugin.loader  抽离css
          {
            loader: 'style-loader'
            // options: {
            //   insertAt: 'top'
            // }
          },
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  }
  plugins:[
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ]
```
- [] 还得需要一个postcss.config.js
``` javascript
  module.exports = {
    plugins: [
      require('autoprefixer')]
  };
```
- [ ] 在produce中 压缩css  
``` javascript
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  }
```
- [ ] 在produce中默认是压缩js的 但是在优化项中 加入css压缩js就失效了所以还得引入另一个插件 uglifyjs-webpack-plugin 
``` javascript
  optimization: {
    minimizer: [
      new UglifyjsWebpackPlugin({
        cache: true,
        parallel: true, //并行打包
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
```
- [ ] es6转为es5 let 箭头函数
  + babel-loader  需要@babel/core 和@babel/preset-env 
``` javascript
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // y预设
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
          }
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      }

```
- [ ] js 中引入一张图片 file-loader(默认会在内部生成一张图片，到build目录下，把生成图片名字返回回来)
- [ ] html中引入了一张图片 html-withimg-loader
``` javascript
  {
    test: /\.html/,
    use: 'html-withimg-loader'
  }

```
- [] 图片很小不想发生请求，base64(会比原文件大1/3)   不用file-loader 用url-loader
``` javascript
  {
    test: /\.(jpg|png|gif)/,
    use: {
      loader: 'html-withimg-loader',
      options: {
        limit: 20*1024,
        // outputPath: '\\ img/'
      }
    } 
  }
```
- [ ] 图片生成build/img
- [ ] css 生成build  直接在 filename: 'css/main.png
- [ ] 图片上cdn  在output publicPath: 'https://www.kuwo.cn'  ,也可以在图片option单独加publicPath
- [ ] 打包多页面 在htmlwebpackplugin 不能[name].html, 分开两个写
- [ ] 但是此时多个页面同时包含这几个js  在
``` javascript
  new HtmlWebpackPlugin({
  template: path.join(__dirname, 'index.ejs'),
  filename: 'other.html',
  chunks: ['other'] // chunks: ['other', index]
  // title: 'webpack-demo-learn',
  // entry: 'index',
  // chunks: ['main','home'],
  // inject: 'head'
  // hash: true,
  // inject: false
})
```
- [ ] source-map 映射文件  源码映射
``` javascript
  devTool: 'source-map'   
  // source-map               生成 .map文件     行列
  // eval-source-map          不生成            行列
  // cheap-module-source-map  产生单独映射文件  不会产生列
  // cheap-module-eval-source-map  集成在打包文件中            不会产生列                   
```
- [ ] runn build  可以试试打包刷新  watch: true
- [ ] watch 也有选项 
``` javascript
watchOptions:{
  poll: 1000  // 每秒问我
  aggregateTimeout: 500  //防抖
  ignored
}
```

- [ ] 几个插件
  + clean-webpack-plugin   xx('./dist')  也可以是数组 删除多个
  + copy-webpack-plugin   xx([{from : 'doc', to : './'}])
  + BannerPlugin   webpack.BannerPlugin('make 2020 liu)

- [ ] resolve

``` javascript
      extensions: ['.js', '.json', '.vue', '.css'],  // import  './style'  一次按照后缀查找
      alias: {
        'vue': 'vue/dist/vue.esm.js'
      }
      modules: [path.resolve('node.modules')]
```

- [ ] 定义环境变量  
``` javascript
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: nodeEnv
    },
    Dev: JSON.stringify('dev') // 这样就是字符dev  或者"" 'dev' ""    布尔值 直接'true'   Number '1+1'
  }),
```
- [ ] 区分不同环境  `webpack-merge`

- [ ] 多线程打包 happypack

``` javascript

  {
    test: /\.js/,
    use: 'Happypack/loader?id=js'
  }
  plugins: [
    new Happypack({
      id: 'js', // css 同理 挪到这里
      use: [{
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'], // y预设
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
          }
      }]
    })
  ] 

```
- [ ] webpack 自带的两个优化    1.  tree-shanking ： es6 import 在prod   去掉没用到的代码  2. scope hosting 作用域提升
``` javascript


```