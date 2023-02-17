const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pathBundle = path.resolve(__dirname, "bundle");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[contenthash].js",
    path: pathBundle,
    clean: true,
  },
  devServer: {
    static: pathBundle,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './index.html'
    }),
  ],
};
