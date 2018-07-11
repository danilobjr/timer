// import {webpack} from 'webpack';
const webpack = require('webpack');
const path = require('path');

module.exports = env => ({
  // entry: {
  //   app: ['webpack/hot/dev-server', './src/index.jsx']
  // },
  // output: {
  //   path: './public/built',
  //   filename: 'bundle.js',
  //   publicPath: 'http://localhost:8080/built/'
  // },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      BaseComponent: 'src/components/BaseComponent.jsx',
      config: 'src/config',
      components: 'src/components',
      helpers: 'src/helpers',
      native: 'src/native'
    },
    extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.sass', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: /src/,
        use: 'ts-loader',
      },
      {
        test: /\.s(a|c)ss$/,
        include: /src\/styles/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(eot|svg|ttf|woff2?)(\?\S*)?$/,
        loader: 'file'
      }
    ]
  },
  // devtool: 'source-map',
  // devServer: {
  //   contentBase: './public',
  //   publicPath: 'http://localhost:8080/built/'
  // },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ]
});
