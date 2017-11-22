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
        publicPath: '/',
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
            {
                test: /\.css$/, 
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig],
    devServer: {
        historyApiFallback: true,
    }
};

module.exports = config;
