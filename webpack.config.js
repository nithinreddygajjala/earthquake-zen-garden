const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
})

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
    {
        test: /\.css$/,
        use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'less-loader' }
        ]
    }],
  },
  devServer: {
    historyApiFallback: true,
},
resolve: {extensions: ['.js', '.jsx', '.react.js', '.ts', '.tsx']}, 
  plugins: [htmlPlugin]
};