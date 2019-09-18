# kwMusicBox 搭建

## 第一阶段
- [ ] 区分生产环境和开发环境，添加环境变量
- [ ] 添加各种loader, 编写webpack.base.js
- [ ] 编写webpack.dev.js

### 2019-9-15 
* 开始搭建 `npm i webpack webpack-cli`
* 设置环境变量 `npm i cross-dev`
* 添加git上传忽略 .gitignore 内部直接写 文件名
- [ ] `style-loader`(插入header style), `css-loader`(@import), `postcss-loader`, `less-loader` 配置postcss.config.js
```
  module.exports = {
    plugins: [
      require('autoprefixer')
    ]
  }
```
* es6->es5