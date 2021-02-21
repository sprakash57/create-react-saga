const path = require('path');
const webpack = require('webpack');
const dotEnv = require('dotenv');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
    const plugins = [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './assets/favicon.ico'
        })
    ]
    // Root path of the project where webpack configs can be found.
    const rootPath = path.join(__dirname);
    // Default path for .env file. Usually for development.
    const basePath = rootPath + '/.env';
    // Get the path for .env.* files. Such as production or test.
    const envPath = env ? `${basePath}.${env.ENVIRONMENT}` : basePath;
    // Check if the file exists, otherwise fall back to basePath.
    const finalPath = fs.existsSync(envPath) ? envPath : basePath;

    if (fs.existsSync(finalPath)) {
        const appEnv = dotEnv.config({ path: finalPath }).parsed;

        const envKeys = Object.keys(appEnv).reduce((formattedKeys, currentKey) => {
            formattedKeys[`process.env.${currentKey}`] = JSON.stringify(appEnv[currentKey]);
            return formattedKeys;
        }, {});
        plugins.push(new webpack.DefinePlugin(envKeys));
    }

    return {
        entry: ['./src/index.js'],
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
        plugins
    }
};
