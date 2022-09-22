const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const MODE = process.env.NODE_ENV;
const PROJECT_ROOT = path.resolve(__dirname, "../");
const IS_DEVELOPMENT = MODE === "development";

module.exports = {
  mode: MODE,
  entry: path.resolve(PROJECT_ROOT, "src/index.js"),
  output: {
    path: path.resolve(PROJECT_ROOT, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      constants: {
        APPLICATION_TITLE: "Practice",
      },
      template: path.resolve(PROJECT_ROOT, "cli/base.hbs"),
    }),
    IS_DEVELOPMENT ? new ReactRefreshWebpackPlugin() : null,
  ].filter(Boolean),
  resolve: {
    extensions: [".js", ".scss", ".jsx"],
  },
  module: {
    rules: [
      {
        loader: "handlebars-loader",
        options: {},
        test: /\.hbs$/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates style nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: IS_DEVELOPMENT ? ["react-refresh/babel"] : [],
          },
        },
      },
    ],
  },
  devServer: {
    compress: true,
    port: 3000,
    //publicPath: "/",
    hot: true,
  },
};
