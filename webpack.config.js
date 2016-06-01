module.exports = {
    entry: './src/app.jsx',
    output: {
        path: './build',
        filename: 'bundle.js'
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
    }
};