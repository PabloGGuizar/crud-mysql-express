const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './frontend/app.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'backend/public'),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.css/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './frontend/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        })
    ]
}