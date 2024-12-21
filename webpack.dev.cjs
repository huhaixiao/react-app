const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { merge } = require('webpack-merge');
const Config = require('./webpack.common.cjs');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(Config, {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.ejs'),
    }),
    new ReactRefreshPlugin({
      overlay: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.webp/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.css/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["react-refresh/babel"],
            presets: [
              ["@babel/preset-env"],
              ["@babel/preset-react"],
              ["@babel/preset-typescript"],
            ],
          },
        },
      },
    ],
  },
  devServer: {
    hot: true,
    port: 8000,
    open: true,
    static: {
      directory: path.join(__dirname, "../public"),
    },
    historyApiFallback: true,
    proxy: {},
  },
});
