const path = require('path')
const { libs } = require('./conf')
module.exports = {
  entry: { ...libs, index: './src/Main.ts' },
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'lib',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loaders: ['awesome-typescript-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './bin'),
    filename: '[name].bundle.js',
  },
}
