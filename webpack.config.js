const webpack = require('webpack');

module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './src/index.jsx']
    },
    output: {
        path: './public/built',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/built/'
    },
    devServer: {
        contentBase: './public',
        publicPath: 'http://localhost:8080/built/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.sass', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: /src/,
                loader: 'babel',
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                loader: 'style!css!sass'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};