// http://eslint.org/docs/user-guide/configuring
module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
	},
	extends: 'airbnb-base',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// check if imports actually resolve
	'settings': {
		'import/resolver': {
			'webpack': {
				'config': 'webpack/webpack.config.js'
			}
		}
	},
	// add your custom rules here
	'rules': {
		// don't require .vue extension when importing
		// don't require .vue extension when importing
		'import/extensions': ['off', 'always', {
			'js': 'never',
			'vue': 'never'
		}],
		'import/no-extraneous-dependencies': ['error', {
			'devDependencies': false
		}],
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'import/prefer-default-export': 0,
		'no-console': 0,
		'no-extraneous-dependencies': 0,
		'indent': [
			2, "tab", {"SwitchCase": 1}
		],
		'no-void': 0,
		'no-tabs': 0,
		'comma-dangle': 0,
		'no-unused-vars': 1,
		'no-use-before-define': 1,
		'semi': 0,
		'no-extra-semi': 0,
		'max-len': [2, { "code": 120, "ignoreUrls": true }],
		'no-trailing-spaces': 0
	}
};
