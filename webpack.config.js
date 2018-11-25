const context = `${__dirname}/app`
const distPath = `${__dirname}/dist`
const exclude = /node_modules/

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context,

    entry: './index.js',
    output: {
        path: distPath,
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './index.html'
        })
    ]
}
