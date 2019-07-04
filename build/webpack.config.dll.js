const webpack = require('webpack');
const path = require('path');

const vendors = [
  'antd',
  'immutable',
  'lodash',
  'moment',
  'react',
  'react-dom',
  'react-router-dom',
  'redux',
  'react-redux',
  'redux-actions',
  'redux-immutable',
  'redux-logger',
  'redux-saga',
  'styled-components',
];

module.exports = {
  mode: 'development',
  entry: {
    vendors,
  },
  output: {
    path: path.join(__dirname, '../dll'),
    filename: '[name].js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      // 解析包路径的上下文
      context: __dirname,
      // name 是dll暴露的对象名，要跟 output.library 保持一致
      name: '[name]',
      // mainfest 文件的生成位置
      path: path.join(__dirname, '../dll', '[name]-manifest.json'),
    }),
  ],
};
