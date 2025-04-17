const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', 
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), 
    clean: true 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 8080,
    open: true
  }
};
