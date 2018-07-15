module.exports = {
  entry: './src/ImageViewer.js',
  output: {
    path: __dirname,
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
