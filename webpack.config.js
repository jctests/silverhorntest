const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
      components: path.resolve(__dirname, "./src/components"),
    },
    extensions: [".jsx", ".js"],
  },
  target: "web",
  devServer: {
    port: 3000,
    publicPath: "/",
    proxy: [
      {
        context: ["/"],
        target: "http://localhost:3001",
        secure: false,
      },
    ],
  },
  module: {
    rules: [{ test: /\.jsx?/, use: [{ loader: "babel-loader" }] }],
  },
};
