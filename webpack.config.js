const alias = require('./config/assets/default');
// const alias = require ('./all');
// const glob = require("glob");
// const = require('fs');
const path = require('path');

var MODULES_DIR = path.resolve(__dirname, 'modules');

module.exports = {
  entry: './modules/all.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },{
        test: /\.jsx$/,
        loaders: ['babel-loader']
      }
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader?modules',
      //     'postcss-loader',
      //   ],
      // },
    ],
  }
};
