const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        }
      ]
    }, {
      test: /\.svg$/,
      use: [{
        loader: 'svg-url-loader',
        options: {
          limit: 10000,
        },
      }, ],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ]
}