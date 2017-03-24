const path = require('path');

module.exports = {
	extensions: ['', '.vue', '.js'],
	fallback: [path.join(__dirname, '../node_modules')],
	alias: {
		vue: 'vue/dist/vue.js',
		src: path.resolve(__dirname, '../src'),
		util: path.resolve(__dirname, '../src/app/util'),
		asset: path.resolve(__dirname, '../src/asset'),
		style: path.resolve(__dirname, '../src/asset/style'),
		font: path.resolve(__dirname, '../src/static/font'),
		static: path.resolve(__dirname, '../static/'),
		component: path.resolve(__dirname, '../src/app/component'),
		page: path.resolve(__dirname, '../src/app/page'),
		api: path.resolve(__dirname, '../src/app/api'),
		store: path.resolve(__dirname, '../src/app/store/module'),
		config: path.resolve(__dirname, '../src/app/config'),
		data: path.resolve(__dirname, '../src/app/data'),
	}
};
