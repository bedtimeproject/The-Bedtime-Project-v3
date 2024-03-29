const path = require("path");
const isDevMode = process.env.NODE_ENV !== "production";

const config = {
  entry: {
    main: ["./src/index.jsx"],
  },
  devtool: isDevMode ? "source-map" : false,
  mode: isDevMode ? "development" : "production",
  output: {
    path: isDevMode
      ? path.resolve(__dirname, "./dist_dev")
      : path.resolve(__dirname, "./dist"),
    filename: "[name].min.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: path.join(__dirname, "./src"),
      },
    ],
  },
};

module.exports = config;
