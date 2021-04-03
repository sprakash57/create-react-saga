const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = (env) => {
    return merge(common(env), {
        mode: 'production'
    });
}