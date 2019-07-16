const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const manifest = require('../dll/vendors-manifest.json');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: {
		app: path.resolve(__dirname, '../src/index.js')
	},
	output: {
		publicPath: '/',
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js'
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx|ts)$/,
				enforce: 'pre',
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(css|less)$/,
				include: path.join(__dirname, '../src'),
				use: [
					'style-loader',
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
							plugins: (loader) => [
								require('postcss-import')({ root: loader.resourcePath }),
								require('postcss-preset-env')(),
								require('cssnano')()
							]
						}
					},
					'less-loader'
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							outputPath: 'images/', // 图片输出的路径
							limit: 10 * 1024
						}
					}
				]
			},
			{
				test: /\.(eot|woff2?|ttf|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name]-[hash:5].min.[ext]',
						limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
						publicPath: 'fonts/',
						outputPath: 'fonts/'
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
		alias: { '@assets': path.resolve(__dirname, '../src/assets') }
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			template: path.resolve(__dirname, '../index.html'),
			favicon: path.resolve(__dirname, '../src/assets/logo.svg')
		}),
		
		new AddAssetHtmlPlugin([
			{
				filepath: path.resolve(__dirname, '../dll/vendors.js'),
				includeSourcemap: false
			}
		]),
		new webpack.DllReferencePlugin({ context: __dirname, manifest })
	]
}