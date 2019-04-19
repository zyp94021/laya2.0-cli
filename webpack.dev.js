const path = require('path')
const { libs } = require('./conf')

module.exports = {
  entry: { ...libs, index: './src/Main.ts' },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loaders: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './bin'),
    filename: '[index].bundle.js',
  },
}
