const HtmlPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlPlugin({
	template:'./src/index.html',
	filename:'index.html'
});
const VuePlugin = require('vue-loader/lib/plugin');
const vuePlugin = new VuePlugin();




module.exports = {
	mode:'development',
	plugins:[htmlPlugin,vuePlugin],
	module:{
		rules:[
			{test:/\.vue/,use:'vue-loader'},
			{test:/\.css/,use:['style-loader','css-loader']}
		]
	}
}