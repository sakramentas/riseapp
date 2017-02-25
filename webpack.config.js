const alias = require('./config/assets/default');
// const alias = require ('./all');
// const glob = require("glob");
const = require('fs');
const path = require('path');

var MODULES_DIR = path.resolve(__dirname, 'modules');

module.exports = {
  entry: './modules/all.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ],
      },
    ],
  },
  target: 'node'
};
