const path = require("path");

module.exports = {
  entry: "./frontend/src/app.ts",
  mode: process.env.NODE_ENV || "production",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "frontend/out"),
    filename: "app.js",
  },
  performance: {
    hints: false,
  },
};
