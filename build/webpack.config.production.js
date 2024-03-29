const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    publicPath: '',
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: 2,
              workerParallelJobs: 50,
              name: 'my-pool',
            },
          },
          'babel-loader',
        ],
      },
      {
        test: /\.(css|less)$/,
        include: path.join(__dirname, '../src'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('postcss-preset-env')(),
                require('cssnano')(),
              ],
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'images/', // 图片输出的路径
              limit: 10 * 1024,
            },
          },
        ],
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]-[hash:5].min.[ext]',
            limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
            publicPath: 'fonts/',
            outputPath: 'fonts/',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: { '@assets': path.resolve(__dirname, '../src/assets') },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      favicon: path.resolve(__dirname, '../src/assets/logo.svg'),
    }),

    // 分离css
    new MiniCssExtractPlugin({
      filename: './css/[name].[hash].css',
      chunkFilename: './css/[name].[chunkhash].css',
    }),

    new BundleAnalyzerPlugin()
  ],
  optimization: {
    minimize: true,
    runtimeChunk: true,
    splitChunks: {
      automaticNameDelimiter: '~',
      cacheGroups: {
          vendors: {
            test: /(react|react-dom)/, // 这三个依赖打包成一个vendors
            chunks: 'all',
            priority: 100,
            minChunks: 1, // 最小被引用次数
            name: 'vendors'
          },
          lodash: {
            test: /lodash/,
            chunks: 'all',
            priority: 95,
            minChunks: 1, // 最小被引用次数
            name: 'lodash'
          },
          commons: {
              test: /[\\/]node_modules[\\/]/,  // 打包范围
              chunks: 'all',  // 异步和同步
              minChunks: 1, // 最小被引用次数
              priority: 90,
              name: 'commons'
          },
      }
    },
    minimizer: [
      new TerserPlugin({
        exclude: /\.min\.js$/,
        cache: true,
        parallel: true, // 并行压缩
        terserOptions: {
          compress: {
            unused: true,
            warnings: false,
            drop_debugger: true,
            drop_console: true,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};
