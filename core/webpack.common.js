const path = require('path');
const webpack = require('webpack');
const dotEnv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => {
    const env = dotEnv.config().parsed;
    const envKeys = Object.keys(env).reduce((formattedKeys, currentKey) => {
        formattedKeys[`process.env.${currentKey}`] = JSON.stringify(env[currentKey]);
        return formattedKeys;
    }, {});
    console.log('envKeys--->', envKeys)
    return {
        entry: ['./app/index.js'],
        module: {
            rules: [
                { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
                { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
                { test: /\.(png|jpe?g|gif|svg|ico)$/, loader: 'file-loader?name=assets/[name].[ext]' },
                { test: /\.(eot|ttf|wof|wof2)$/, loader: 'file-loader?name=/assets/fonts/[name].[ext]' }
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
            new webpack.DefinePlugin(envKeys),
            new HtmlWebpackPlugin({
                template: './app/index.html',
                favicon: './assets/favicon.ico'
            })
        ]
    }
};
