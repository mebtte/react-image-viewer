const path = require('path');

module.exports = {
  entry: './src/ImageViewer.js',
  output: {
    path: path.join(__dirname, '..'),
    filename: 'ImageViewer.js',
    library: '',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.svg$/,
        use: 'url-loader',
      },
    ],
  },
};
