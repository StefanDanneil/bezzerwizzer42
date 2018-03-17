const  webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'dist/js/bundle.js'
  },
  module: {
    rules: [
    {
      test: /\.(scss|css)$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader', 'sass-loader']
      })
    }
    ]
  },
  plugins: [
  new ExtractTextPlugin("./dist/css/bundle.css"),
  new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/'
      }
    )
  ]
}