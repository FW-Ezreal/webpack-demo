- js中引入css  `css-loader` 是必须的
    + css-loader 解释(interpret) @import 和 url() ，会 import/require() 后再解析(resolve)它们。
- 使用loader 的2中写法, 第一个不用传参数，uer 内部对象可以传参数
    + loader: [xx, xx,xx]
    + use: [ {loader: xxx, options:{}}]
- 引入图片
    + (file-loader), url-loader - 默认base64
    + limit
    + 修改名字
    ```javascript
        {
            loader:"url-loader",
            options:{
                limit:50000   //表示低于50000字节（50K）的图片会以 base64编码
                outputPath:"img", // dist/img
                name:"[name].[hash:8].[ext]", // 点不是必要的
                publicPath:"./dist/img" // 引入路径前加上
        }
    ```
- less
    + less less-loader