module.exports = {
  libs: {
    laya: ['./bin/libs/laya.core.js', './bin/libs/laya.webgl.js', './bin/libs/laya.ui.js'],
    polyfill: ['@babel/polyfill', 'whatwg-fetch'],
  },
  skipFiles: ['libs', 'version.json', 'index.html', '.rec'],
  skipCopy: ['index.bundle.js', 'laya.bundle.js', 'polyfill.bundle.js', 'lib.bundle.js', 'index.html', 'libs/*'],
}
