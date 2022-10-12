const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const commonPaths = require('./paths');

module.exports = {
  // cache: false,
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          presets: ['@babel/react'],
          plugins: [['import', { libraryName: 'antd', style: true }]],
        },
      },
      {
        test: /\.(js|jsx)$/,
        use: 'react-hot-loader/webpack',
        include: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.imagesFolder,
            },
          },
        ],
      },
      {
        test: /\.(woff2|ttf|woff|eot|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.fontsFolder,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    // new ScriptExtHtmlWebpackPlugin({
    //   defaultAttribute: 'async',
    // }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      // fix: true,
      emitWarning: process.env.NODE_ENV !== 'production',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'static' }],
    }),
  ],
};
