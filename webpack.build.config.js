const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BabiliPlugin = require("babili-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//may not work because need to be scss
module.exports = {
   module: {
      rules: [
         {
            test: /\.scss$/,
            use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }],
         },
         {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
         },

         {
            test: /\.jsx?$/,
            use: [{ loader: "babel-loader", query: { compact: false } }],
         },
         {
            test: /\.(jpe?g|png|gif)$/,
            use: [{ loader: "file-loader?name=img/[name]__[hash:base64:5].[ext]" }],
         },
         {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: [{ loader: "file-loader?name=font/[name]__[hash:base64:5].[ext]" }],
         },
      ],
   },
   target: "electron-renderer",
   plugins: [
      new HtmlWebpackPlugin({ title: "Dhau Shop" }),
      new MiniCssExtractPlugin({
         // Options similar to the same options in webpackOptions.output
         // both options are optional
         filename: "bundle.css",
         chunkFilename: "[id].css",
      }),
      new webpack.DefinePlugin({
         "process.env.NODE_ENV": JSON.stringify("production"),
      }),
      new BabiliPlugin(),
   ],
   stats: {
      colors: true,
      children: false,
      chunks: false,
      modules: false,
   },
};
