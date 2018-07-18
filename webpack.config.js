module.exports = {
  mode: 'production',
  entry: {
    ImageViewer: './src/index.js',
    view: './src/view.js',
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true },
          },
        ],
      },
    ],
  },
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
    'prop-types': 'commonjs prop-types',
  },
};
