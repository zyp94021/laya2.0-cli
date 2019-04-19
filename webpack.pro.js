const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const hash = Math.random().toFixed(5) * 100000

const fs = require('fs')
const { libs, skipFiles, skipCopy } = require('./config')
//解析需要遍历的文件夹，我这以E盘根目录为例
const filePath = path.resolve(__dirname, 'bin')

//调用文件遍历方法
const version = {}

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
const fileDisplay = filePath => {
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, (err, files) => {
    if (err) {
      console.warn(err)
    } else {
      //遍历读取到的文件列表
      files.forEach(filename => {
        if (skipFiles.indexOf(filename) > -1) return
        //获取当前文件的绝对路径
        let filedir = path.join(filePath, filename)
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, (eror, stats) => {
          if (eror) {
            console.warn('获取文件stats失败')
          } else {
            const isFile = stats.isFile() //是文件
            const isDir = stats.isDirectory() //是文件夹
            if (isFile) {
              filedir = filedir.replace(path.join(__dirname, 'bin' + '\\'), '').replace(/\\/g, '/')
              version[filedir] = filedir.split('.').join('.' + hash + '.')
            }
            if (isDir) {
              fileDisplay(filedir) //递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        })
      })
    }
  })
}
fileDisplay(filePath)
module.exports = {
  entry: { ...libs, polyfill: '@babel/polyfill', index: './src/Main.ts' },
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
    path: path.resolve(__dirname, './dist/'),
    filename: `[name].bundle.${hash}.js`,
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'bin'),
        to: path.resolve(__dirname, 'dist'),
        ignore: [...skipCopy],
        transform(content, path) {
          if (path.indexOf('version.json') > -1) {
            return JSON.stringify(version)
          }
          return content
        },
        transformPath(targePath) {
          if (skipFiles.filter(files => targePath.indexOf(files) > -1).length) return targePath

          return version[targePath.replace(/\\/g, '/')]
        },
      },
    ]),
    new HtmlWebpackPlugin({
      title: 'Laya-Webpack',
      filename: 'index.html',
      template: 'bin/index_tel.html',
    }),
    new CleanWebpackPlugin(),
  ],
}
