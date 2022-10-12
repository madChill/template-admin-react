const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const commonPaths = require('./paths');

const BUILD_FOLDER_PATH = process.env.BUILD_FOLDER_PATH || 'build';
const BUILD = process.env.BUILD;
const PUBLIC_PATH = BUILD === 'development' ? process.env.PUBLIC_PATH : '/';
const mode = BUILD === 'development' ? 'production' : 'development';

module.exports = {
  mode,
  output: {
    filename: '[hash].[name].js',
    path: path.resolve(process.cwd(), BUILD_FOLDER_PATH),
    chunkFilename: `${commonPaths.jsFolder}/[name].[chunkhash].js`,
    // publicPath: '/',
    publicPath: PUBLIC_PATH,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        parallel: true,
        // Enable file caching
        cache: true,
        sourceMap: true,
      }),
      // new OptimizeCSSAssetsPlugin(),
    ],
    // Automatically split vendor and commons
    // https://twitter.com/wSokra/status/969633336732905474
    // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
        },
        async: {
          test: /[\\/]node_modules[\\/]/,
          name: 'async',
          chunks: 'async',
          minChunks: 4,
        },
      },
    },
    // Keep the runtime chunk seperated to enable long term caching
    // https://twitter.com/wSokra/status/969679223278505985
    runtimeChunk: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        // exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  devServer: {
    contentBase: path.join(__dirname, '../build'),
    compress: true,
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../', 'src/template.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.join(__dirname, './.development.env'), // Path to .env file (this is the default)
      // safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
  ],
  devtool: 'inline-source-map',
};
