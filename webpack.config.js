const webpack = require('webpack');

module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './src/app.jsx']
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
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: /src/,
                loader: 'babel',
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};