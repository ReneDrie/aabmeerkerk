var postcss = require( './postcss' );

module.exports = {
	loaders: {
		js: 'babel!eslint',
		scss: 'vue-style-loader!css-loader&localIdentName=[name]__[local]__[hash:base64:5]!resolve-url!sass-loader'
	},
	postcss
};
