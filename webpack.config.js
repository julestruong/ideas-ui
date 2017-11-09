const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    filename: './public/index.html',
    inject: true
});

const config = {
    entry: '.\\src\\app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
            { 
                test: /\.js?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'env']
                }
            },
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};

module.exports = config;
