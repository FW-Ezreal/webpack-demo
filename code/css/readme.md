## 针对css进行处理

- 正常开发过程中只需要 `style-loader`, `css-loader`, `less-loader`

- 生产环境 css 需单曲抽离出来
    + 引入 `mini-css-extract-plugin`
    + plugins 引入 
    ``` javascript
        user: [MiniCssExtractPlugin.loader, 'css-loader']
        new MiniCssExtractPlugin()
    ```
    + html link 引入

- css属性前缀 (跳过。。 没弄出来)
    + postcss-loader autoprefixer

- 压缩css
    + optimize-css-assets-webpack-plugin
    ``` javascript
        optimization: {
            minimizer: [
                    new UglifyWebpackPlugin(),
                    new OptimizeCss() // css 压缩会导致js不压缩，得引入另一个js压缩
            ]
        }
    ```

-------------

## js
- webpack --config webpack.config.js
- 每次编译去掉 dist/下的内容
    + clean-webpack-plugin
- 对js
    + 