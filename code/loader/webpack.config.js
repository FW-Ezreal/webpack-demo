// const fs = require('fs');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    // 加载loader
    module: {
        rules: [
            // css
            // 1. loader
            // {
            //     test: /\.css$/,
            //     loader: ['style-loader', 'css-loader']
            // },

            //  2. use
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },

            // 3. use 数字，内部对象，可扩展options
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            insert: 'top'
                        }
                    },
                    'css-loader'
                ]
            },
        ]
    }
}