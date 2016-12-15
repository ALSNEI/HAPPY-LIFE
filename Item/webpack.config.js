var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
//压缩JS模块
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var path = __dirname + "/app";
module.exports = {
	entry:{
		login:path+"/login/login.js",
        register:path+"/register/register.js",
        forget:path+"/forget/forget.js",
        Appcon:path+"/Appcon/Appcon.js",
        zajin:path+"/zajin/zajin.js",
        cart:path+"/cart/cart.js",
        show:path+"/show/show.js",
        my:path+"/my/mine.js",
        more:path+"/more/more.js"
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
        chunks: ['']
    }),
    new HtmlWebpackPlugin({
        title: '登陆',
        filename: 'login.html',
        template: './app/login/index.html',
        chunks: ['common','login']
    }),
    new HtmlWebpackPlugin({
        title: '注册',
        filename: 'register.html',
        template: path+'/register/index.html',
        chunks: ['common','register']
    }),
    new HtmlWebpackPlugin({
        title: '忘记密码',
        filename: 'forget.html',
        template: path+'/forget/index.html',
        chunks: ['common','forget']
    }),
    new HtmlWebpackPlugin({
        title: 'Appcon',
        filename: 'Appcon.html',
        template: path+'/Appcon/index.html',
        chunks: ['common','Appcon']
    }),
    new HtmlWebpackPlugin({
        title: '会员杂锦',
        filename: 'zajin.html',
        template: './app/zajin/zajin.html',
        chunks: ['common','zajin']
    }),
    new HtmlWebpackPlugin({
        title: '购物车',
        filename: 'cart.html',
        template: './app/cart/index.html',
        chunks: ['common','cart']
    }),
    new HtmlWebpackPlugin({
        title: 'show',
        filename: 'show.html',
        template: './app/show/show.html',
        chunks: ['common','show']
    }),
    new HtmlWebpackPlugin({
        title: '我的',
        filename: 'my.html',
        template: './app/my/mine.html',
        chunks: ['common','my']
    }),
    new HtmlWebpackPlugin({
        title: '更多',
        filename: 'more.html',
        template: './app/more/more.html',
        chunks: ['common','more']
    }),
    new webpack.ProvidePlugin({
     $: path+'/commons/jquery-3.0.0.min.js',
    }),//直接加载到全局不需要require()
	]
}
// sudo cnpm install
// sudo cnpm install babel-plugin-transform-runtime css-loader
// sudo cnpm install clean-webpack-plugin
// sudo cnpm install url-loader file-loader


//webpack-dev-server