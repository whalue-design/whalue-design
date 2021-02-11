const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const config = {
  mode: "development",
  devtool: "inline-source-map",
  entry: path.resolve(__dirname, "./main.ts"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./dist"),
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    host: "localhost",
    port: 9527,
    hot: true,
    compress: true,
    overlay: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Hot Module Replacement",
      template: path.resolve(__dirname, "./index.html"),
    }),
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-transform-runtime",
                [
                  "import",
                  {
                    libraryName: "whalue-design",
                    customStyleName: (name) => {
                      return `whalue-design/lib/theme-chalk/${name}.less`;
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "../tsconfig.json"),
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
};

module.exports = config;
