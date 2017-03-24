var webpack = require( 'webpack' );
var entry = require( './entry' );
var postcss = require( './postcss' );
var vue = require( './vue' );
var plugins = require( './plugins' );
var output = require( './output' );
var resolve = require( './resolve' );
var resolveLoader = require( './resolveLoader' );
var preLoaders = require( './preLoaders' );
var loaders = require( './loaders' );

module.exports = {
	entry,
	plugins,
	output,
	resolve,
	resolveLoader,
	sassLoader: {
		data: '@import "~seng-scss"; @import "src/asset/style/global";',
		includePaths: ['~seng-scss']
	},
	module: {
		preLoaders,
		loaders
	},
	eslint: {
		formatter: require( 'eslint-friendly-formatter' ),
		configFile: './.eslintrc.js'
	},
	postcss,
	vue
};
