var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        // Exclude `js` files to keep "css" loader working as it injects
        // its runtime that would otherwise processed through "file" loader.
        // Also exclude `html` and `json` extensions so they get processed
        // by webpacks internal loaders.
        exclude: [
            /\.(js|jsx|mjs)$/,
            /\.html$/,
            /\.json$/,
            /\.scss$/
        ],
        loader: require.resolve("url-loader")
      }
    ]
  },
  mode: 'development',
  devtool: 'source-map',
  externals: [
    'styled-components',
    'react'
  ]
};