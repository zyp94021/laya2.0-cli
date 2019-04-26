module.exports = {
  libs: {
    laya: ['./bin/libs/laya.core.js','./bin/libs/laya.html.js', './bin/libs/laya.webgl.js', './bin/libs/laya.ui.js'],
  },
  skipFiles: ['libs', 'version.json', 'index.html', '.rec'],
  skipCopy: ['index.bundle.js', 'laya.bundle.js', 'lib.bundle.js', 'index.html', 'libs/*'],
}
