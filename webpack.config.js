var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.join(__dirname, 'public', 'js');
var APP_DIR = path.join(__dirname, 'src');

var config = {
  mode: 'development',
  entry: {
    bundle: APP_DIR + '/index.js'
  },
  output: {
    path: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        }
      }
    ]
  }
};

module.exports = config;
