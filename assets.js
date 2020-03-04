module.exports = {
  'phantomjs.exe': {
    type: 'binary',
    env: 'win32'
  },
  'shim/index.js': {
    type: 'file',
    env: 'win32, android'
  },
  'mongod.exe': {
    type: 'binary',
    env: 'win32'
  }
};