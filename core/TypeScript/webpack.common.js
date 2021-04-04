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
    // Path of the env file for development. Usually at the root level of your project.
    const devEnvPath = `${path.join(__dirname)}/.env`;
    // Get the path for .env.* files. Such as production or test.
    const envPath = env ? `${devEnvPath}.${env.ENVIRONMENT}` : devEnvPath;
    // Check if the file exists, otherwise fall back to devEnvPath.
    const finalPath = fs.existsSync(envPath) ? envPath : devEnvPath;

    if (fs.existsSync(finalPath)) {
        const appEnv = dotEnv.config({ path: finalPath }).parsed;
        const envKeys = Object.keys(appEnv).reduce((formattedKeys, currentKey) => {
            formattedKeys[`process.env.${currentKey}`] = JSON.stringify(appEnv[currentKey]);
            return formattedKeys;
        }, {});
        plugins.push(new webpack.DefinePlugin(envKeys));
    }

    return {
        entry: ['./src/index.tsx'],
        module: {
            rules: [
                { test: /\.(js|ts)x?$/, use: 'babel-loader', exclude: /node_modules/ },
                { test: /\.(css)$/, use: ['style-loader', 'css-loader'] },
                { test: /\.(png|jpe?g|gif|svg|ico)$/, use: [{ loader: 'file-loader?name=assets/imgs/[name].[ext]' }] },
                { test: /\.(eot|ttf|wof|wof2)$/, use: [{ loader: 'file-loader?name=/assets/fonts/[name].[ext]' }] }
            ]
        },
        resolve: {
            extensions: ['.js', '.json', '.ts', '.tsx']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        plugins
    }
};
