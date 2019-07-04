const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

// 编译器，编译器执行一次就会重新打包一下代码
const config = require('./webpack.config.js');
const options = {
  contentBase: '../dist',
  hot: true,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});