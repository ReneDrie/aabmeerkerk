const path = require('path');
const projectRoot = path.resolve(__dirname, '../../');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
	{
		test: /\.js$/,
		loader: 'babel!eslint',
		include: projectRoot,
		exclude: /node_modules/
	},
	{
		test: /\.scss$/,
		loader: ExtractTextPlugin.extract('style-loader', 'css?modules&importLoaders=1&localIdentName=[hash:base64:5]!postcss!resolve-url!sass-loader')
	}
];
