const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "epic-header-footer",
    libraryTarget: "umd",
    umdNamedDefine: true,
    publicPath: "./dist",
    globalObject: 'typeof self !== "undefined" ? self : this',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "JSUI-[local]-[hash:base64:8]",
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
