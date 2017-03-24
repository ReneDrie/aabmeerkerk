module.exports = [
	{
		test: /\.vue$/,
		loader: 'vue'
	},
	{
		test: /\.json$/,
		loader: 'json'
	},
	{
		test: /\.html$/,
		loader: 'vue-html'
	},
	{
		test: /\.scss$/,
		loader: 'sass-loader'
	}
];
