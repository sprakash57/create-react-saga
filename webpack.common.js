const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './app/index.js'],
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.svg$/, use: ['babel-loader', { loader: 'react-svg-loader', options: { jsx: true } }] },
            { test: /\.(png|jpe?g|gif)$/, use: ['babel-loader', { loader: 'file-loader?name=app/assets/[name].[ext]' }] },
            { test: /\.(eot|ttf|wof|wof2)$/, loader: 'file-loader?name=app/assets/fonts/[name].[ext]' }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './app/index.html',
            filename: './index.html'
        })
    ]
};