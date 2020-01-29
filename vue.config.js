// vue.config.js

module.exports = {
	publicPath: 'essential-vue-template/public/',
	outputDir: 'public',
	indexPath: '../index.html',
	chainWebpack: (config) => {
		config.module
			.rule('sass')
			.test('/\.scss$/') // eslint-disable-line
			.use('vue-style-loader')
			.loader('vue-style-loader')
			.end()
			.use('css-loader')
			.loader('css-loader')
			.end()
			.use('sass-loader')
			.loader('sass-loader')
			.end()
	}
}
