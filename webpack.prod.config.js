const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrower = require('open-browser-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app.js'),
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'app.min.js',
  },
  resolve: {
    modules: ['node_modules'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          plugins: [
            'transform-runtime',
            'transform-decorators-legacy',
          ].map(e => `babel-plugin-${e}`).map(require.resolve),
          presets: [
            'es2015',
            'react',
            'stage-0',
            'stage-2',
          ].map(e => `babel-preset-${e}`).map(require.resolve),
        },
      }],
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader',
      }),
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader?limit=25000&name=static/img/[name].[ext]?[hash]',
      }],
    }, {
      test: /\.(eot|woff|woff2|ttf)$/,
			use: [{
				loader: 'url-loader?limit=30000&name=static/fonts/[name]-[hash].[ext]'
			}]
    }, {
      test: /\.svg$/,
			use: [{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
        }
      }]
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new ExtractTextPlugin('[name]/styles.[contenthash].css'),
    new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false
			},
			compress: {
				warnings: false
			}
		}),
  ],
};
