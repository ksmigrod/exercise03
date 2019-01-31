var webpack = require('webpack');
var path = require('path');
var config = require('../webpack.config');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

config.mode = 'production';

config.output = {
  filename: '[name].bundle.js',
  publicPath: '',
  path: path.resolve(__dirname, '..', 'dist')
};

config.optimization.minimizer = [
  new UglifyJSPlugin({
    uglifyOptions: {
      mangle: {
        reserved: ['$', 'jquery', 'angular', '$super', 'exports', 'require']
      }
    }
  })
];

module.exports = config;
