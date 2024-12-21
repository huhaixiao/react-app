const path = require('path');
const { merge } = require('webpack-merge');
const Config = require('./webpack.common.cjs');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(Config, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.ejs"),
    })
  ],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash:8].js",
    chunkFilename: "[name].[chunkhash:8].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css/,
        // exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          }
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env"],
                ["@babel/preset-react"],
                ["@babel/preset-typescript"],
              ],
            },
          },
        ],
      },
    ],
  },
});