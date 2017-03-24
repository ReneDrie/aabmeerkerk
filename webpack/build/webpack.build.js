const path = require('path');
const {paths, settings} = require('../../config');
const baseWebpackConfig = require('../webpack.config');
const plugins = require('./plugins');
const webpack = require('webpack');
const merge = require('webpack-merge');
const loaders = require('./loaders');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');
const postcss = require( '../postcss' );

const config = merge(baseWebpackConfig, {
	devtool: settings.productionSourceMap ? '#source-map' : false,
	plugins,
	module: {
		loaders
	},
	vue: {
		loaders: {
			scss: ExtractTextPlugin.extract(
				'vue-style-loader',
				combineLoaders([
					{
						loader: 'css-loader',
						query: {
							modules: true,
							importLoaders: 1,
							localIdentName: '[hash:base64:5]'
						}
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				])
			)
		},
		postcss
	}
});

module.exports = config;
