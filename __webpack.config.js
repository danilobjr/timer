const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './src/index.jsx']
  },
  output: {
    path: './public/built',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/'
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      BaseComponent: 'src/components/BaseComponent.jsx',
      config: 'src/config',
      components: 'src/components',
      helpers: 'src/helpers',
      native: 'src/native'
    },
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
      },
      {
        test: /\.(eot|svg|ttf|woff2?)(\?\S*)?$/,
        loader: 'file'
      }
    ]
  },
  target: 'electron',
  devtool: 'source-map',
  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:8080/built/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
