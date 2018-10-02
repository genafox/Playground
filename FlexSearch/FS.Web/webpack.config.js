const path = require('path');

module.exports = {
  entry: './ClientApp/src/index.js',
  output: {
    filename: 'main-client.bundle.js',
    path: path.resolve(__dirname, './wwwroot/dist')
  }
};