const path = require('path')
module.exports = {
  entry: [
    './bin/libs/laya.core.js',
    './bin/libs/laya.webgl.js',
    './bin/libs/laya.ui.js',
    './bin/libs/laya.physics.js',
    './src/Main.ts',
  ],
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
    filename: 'bundle.js',
  },
}
