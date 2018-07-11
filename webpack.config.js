const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const resolvePath = value => path.resolve(__dirname, value);

module.exports = {
  mode: 'development',
  // entry: {
  //   app: ['webpack/hot/dev-server', './src/index.jsx']
  // },
  // output: {
  //   path: './public/built',
  //   filename: 'bundle.js',
  //   publicPath: 'http://localhost:8080/built/'
  // },
  resolve: {
    // root: path.resolve(__dirname),
    alias: {
      BaseComponent: resolvePath('src/components/BaseComponent.jsx'),
      config: resolvePath('src/config'),
      components: resolvePath('src/components'),
      helpers: resolvePath('src/helpers'),
      // native: resolvePath('src/native'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.sass', '.scss']
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
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff2?)(\?\S*)?$/,
        use: 'file-loader'
      }
    ]
  },
  // devtool: 'source-map',
  // devServer: {
  //   contentBase: './public',
  //   publicPath: 'http://localhost:8080/built/'
  // },
  plugins: [
    //   new webpack.HotModuleReplacementPlugin()
    new HtmlWebpackPlugin({
      template: resolvePath('src/index.html'),
    }),
  ]
};
