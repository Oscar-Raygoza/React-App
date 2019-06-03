const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "./src/app/pages/index.jsx")
  },
  output: {
    path: path.resolve(__dirname, "./src/public/dist"),
    filename: "js/[name].js"
  },
  devServer: {
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [require("@babel/plugin-proposal-object-rest-spread")]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000000,
              fallback: "file-loader",
              name: "images/[name].[hash].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("./css/[name].css"),
    new htmlWebpackPlugin({
      template: "./src/public/index.html"
    }),
    new LiveReloadPlugin()
  ]
};
