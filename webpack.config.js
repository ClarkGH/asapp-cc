const path = require("path");

// Path Constants
const paths = {
  DIST: path.resolve(__dirname, "dist"),
  SCRIPTS: path.resolve(__dirname, "src/scripts"),
  SRC: path.resolve(__dirname, "src")
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.SCRIPTS, "main.js"),
  output: {
    path: paths.DIST,
    filename: "app.bundle.js"
  },
  // Loaders
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
