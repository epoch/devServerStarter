var devConfig = require('./webpack.config.js');
var path = require('path');
var webpack = require('webpack');
var htmlPlugin = require('html-webpack-plugin');

var prodConfig = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [new htmlPlugin({
    template: path.join(__dirname, 'src', 'index.html'),
    hash: true
  })]
}

module.exports = Object.assign(devConfig, prodConfig);
