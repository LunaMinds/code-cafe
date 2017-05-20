const eslint = exports

eslint.extends = [
	'standard',
	'plugin:react/recommended',
]

eslint.parser = 'babel-eslint'

eslint.env = {
	browser: true,
	mocha: true,
}

eslint.plugins = [
	'react',
]

eslint.rules = {
	'comma-dangle': ['error', 'always-multiline'],
	'indent': ['error', 'tab'],
	'no-tabs': 'off',
}

eslint.parserOptions = {
	'ecmaFeatures': {
		'jsx': true,
	},
}
