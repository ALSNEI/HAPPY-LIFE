var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
//压缩JS模块
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var path = __dirname + "/app";
module.exports = {
	entry:{
		login:path+"/login/login.js",
        zajin:path+"/zajin/zajin.js"
	},
	output:{
		path:"./www",
		filename:"js/[name].js"
	},
	module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        },
        {
            test: /\.js$/,
            loader: 'babel?presets=es2015',
            exclude: /node_modules/
        },
        {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=1000&name=images/[name].[ext]',
        },
        { 
            test: /\.css$/, 
            loader: 'style-loader!css-loader'
        }
        ]
    },
	resolve: {
      extensions: ['', '.js', '.vue']
    },
    devServer: {
        contentBase: "www/",
        inline:true,
        port : "3000"
    },
	plugins:[
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',//合并公共模块到指定的JS文件
        filename: 'js/common.js'
    }),
    new uglifyJsPlugin({//压缩JS
      compress: {
        warnings: false
      }
    }),
    new CleanWebpackPlugin(['www/js','www/images','www/*.html']),
	new HtmlWebpackPlugin({
        title: 'load',
        filename: 'load.html',
        template: './app/load/index.html',
    }),
    new HtmlWebpackPlugin({
        title: '登陆',
        filename: 'login.html',
        template: './app/login/index.html',
        chunks: ['common','login']
    }),
    new HtmlWebpackPlugin({
        title: '会员杂锦',
        filename: 'zajin.html',
        template: './app/zajin/zajin.html',
        chunks: ['common','zajin']
    }),
    new webpack.ProvidePlugin({
     $: path+'/commons/jquery-3.0.0.min.js',
    })//直接加载到全局不需要require()
	]
}
// sudo cnpm install
// sudo cnpm install babel-plugin-transform-runtime css-loader
// sudo cnpm install clean-webpack-plugin
// sudo cnpm install url-loader file-loader


//webpack-dev-server