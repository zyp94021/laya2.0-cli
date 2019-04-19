module.exports = {
  libs: {
    laya: ['./bin/libs/laya.core.js', './bin/libs/laya.webgl.js', './bin/libs/laya.ui.js'],
    // socket: ['socket.io-client'],
  },
  skipFiles: ['libs', 'version.json', 'index.html', '.rec'],
  skipCopy: ['bundle.js', 'index_tel.html', 'index_temp.html', 'index.html', 'index.js', 'libs/*'],
}
