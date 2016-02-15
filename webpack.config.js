var path = require('path');
var webpack = require('webpack');

// webpack.config.js, default file for webpack config
// __dirname, absolute path of current file
// entry, file webpack looks for to bundle, default to index.js
// output must include filename
module.exports = {
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [{
      // expects regex
      test: /.js$/,
      loader: 'babel-loader',
      // exclude or include paths
      exclude: '/node_modules/',
      // pass params to loader like querystring
      // instead of using .babelrc
      query: {
        presets: ['es2015']
      }
    }]
  }
}
