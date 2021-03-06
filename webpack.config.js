const path = require('path');

module.exports = {
	entry: './frontend/src/index.js',
	devtool: 'source-map',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'backend/public/dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: require.resolve('babel-loader')
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: require.resolve('eslint-loader'),
				options: {
					fix: true
				}
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
};
