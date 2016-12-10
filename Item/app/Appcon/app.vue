<template>
  <div id="app">
    <div id="home" class=" mui-control-content mui-active">	
    	<title title="生活一家" right="编辑"></title>
    	<ul class="Cooder">
    		<li>当前位置</li>
    		<li>省市列表</li>
    		<li>上海市</li>
    		<li>上海郊区</li>
    		<li>江苏</li>
    		<li>浙江</li>
    	</ul>
		<div class="swiper-container">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide"><img src="img/homeS1.jpg"/></div>
	            <div class="swiper-slide"><img src="img/homeS2.jpg"/></div>
	            <div class="swiper-slide"><img src="img/homeS3.jpg"/></div>
	        </div>
	        <!-- Add Pagination -->
	        <div class="swiper-pagination"></div>
	    </div>
	    <div class="content">
		    <div class="pic clear">
		    	<div class="fl">
		    		<img src="img/homeLife.png" alt="">
		    	</div>
		    	<div class="fr">
			    	<img src="img/homeEat.png" alt="">
			    	<img src="img/homeBrush.png" alt="">
		    	</div>
		    	<div class="fr">
			    	<img src="img/homeLamp.png" alt="">
			    	<img src="img/homePao.jpg" alt="">
			    </div>
		    </div>
		    <div class="Sales clear">
		    	<hr>
		    	<span>特卖专区 Sales</span>
		    </div>
		    <div class="Ad">
		    	<div class="Ad1" v-for="obj in homeArr">
					<img src="img/Ad1.jpg" alt="">
					<p>{{obj.p}}</p>
		    	</div>
		    </div>
	    </div>
    </div>
	<div id="zajin" class=" mui-control-content">	
    	<title title="会员杂锦"></title>
    	<div class="content">
			<div class="swiper-container">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide"><img src="img/lunbo1.jpg"></div>
		            <div class="swiper-slide"><img src="img/lunbo1.jpg"></div>
		            <div class="swiper-slide"><img src="img/lunbo1.jpg"></div>
		            <div class="swiper-slide"><img src="img/lunbo1.jpg"></div>
		        </div>
		        <!-- Add Pagination -->
		        <div class="swiper-pagination"></div>
		    </div><!-- 轮播图 -->

			<div class="con">
				<a class="cona" href="###" v-for="obj in zajinArr" >
				<div class="product">
			  		<div class="products"><img src="img/hetao.jpg"></div>
					<p>{{obj.p}}</p>
					<span class="span1">{{obj.span1}}</span>
					<span class="span2">原价:<span style="text-decoration:line-through">{{obj.span2}}</span></span>

			  	</div>
			  	</a>
			</div><!-- con -->
		</div><!-- content -->
    </div>
    <div id="clasify" class=" mui-control-content">
    	<title title="分类"></title>

    </div>
    <div id="shop" class=" mui-control-content">
    	<title title="购物车"></title>

    </div>
    <div id="person" class=" mui-control-content">	  <div class="wrap">  
	      <div class="content">
	        <div class="lun">
	          <img src="img/3.jpg"/>
	        </div>
	        <div class="middle">
	          <img src="img/1.jpg" class="peop">
	          
	        </div>
	        <div class="Dia">
	          <img src="img/diamon.png" class="diamon">
	        </div>
	        <div class="Name">
	          <p class="Name_co">凯丽_Keylie</p>
	          <input type="text" value="VIP会员" class="Vip">
	        </div>
	        
	      </div>
	      <div class="inner">
	        <ul>
	          <li class="first"><a href=""><img src="img/icon1.jpg"></a><a href="">基本资料</a><a href="" class="arrow">></a></li>
	          <li><a href=""><img src="img/icon2.jpg"></a><a href="">我的订单</a><a href="" class="arrow">></a></li>
	          <li><a href=""><img src="img/icon3.jpg"></a><a href="">我的收藏</a><a href="" class="arrow">></a></li>
	          <li><a href=""><img src="img/icon4.jpg"></a><a href="">我的钱包</a><a href="" class="arrow">></a></li>
	          <li><a href=""><img src="img/icon5.jpg"></a><a href="">收货地址</a><a href="" class="arrow">></a></li>
	          <li><a href=""><img src="img/icon6.jpg"></a><a href="">升级会员</a><a href="" class="arrow">></a></li>
	        </ul>
	        <ul>
	              <li class="more"><a href=""><img src="img/icon7.jpg"></a><a href="">更多</a><a href="" class="arrow">></a></li>
	              <li><a href=""><img src="img/icon7.jpg"></a><a href="">注销</a><a href="" class="arrow">></a></li>

	        </ul>
	        
	       
	      </div>
	    </div>
    </div>
<!--       底部table切换       -->
    <nav class="mui-bar mui-bar-tab">
		<a class="mui-tab-item mui-active" href="#home">

			<span class="home"></span>
			<span class="mui-tab-label">首页</span>
		</a>
		<a class="mui-tab-item" href="#zajin">
			<span class="mui-icon-extra mui-icon-extra-gift"></span>
			<span class="mui-tab-label">会员杂锦</span>
		</a>
		<a class="mui-tab-item" href="#clasify">
			<span class="mui-icon-extra mui-icon-extra-class"></span>
			<span class="mui-tab-label">分类</span>
		</a>
		<a class="mui-tab-item" href="#shop">
			<span class="mui-icon-extra mui-icon-extra-cart"></span>
			<span class="mui-tab-label">购物车</span>
		</a>
		<a class="mui-tab-item" href="#person">
			<span class="mui-icon-extra mui-icon-extra-people"></span>
			<span class="mui-tab-label">我的</span>
		</a>
	</nav>
  </div>
</template>

<script>
import Title from '../commons/title';
export default {
  components: {
    Title
  },
  data(){
  	return{
  		homeArr:[
  		{img:"img/Ad1.jpg",p:"【10月抢购预告】 荣耀乐檬大神爆款 惊爆价"},
  		{img:"img/Ad2.jpg",p:"【劲爆开抢】 宝洁大礼包优惠前所未有"},
  		{img:"img/Ad3.jpg",p:"【神价再现】 GOD PRICE 华丽上市"}
  		],
  		zajinArr:[
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋1",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋2",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋3",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋4",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋5",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋6",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋7",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋8",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋9",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋10",span1:"￥29.5",span2:"￥42.5"}
      ],
  	}
  },
  ready:function () {//生命周期问题
/***********  首页定位样式切换  ************/
  	var $h1 = $("#home .header h1");
  	var $changeC = $("#home .header .changeC");
  	var $city = $("#home .header .city");
  	var $search = $("#home .header .mui-action-search");
  	var $back = $("#home .header .mui-action-back");
  	var $location = $("#home .header .location");
  	var $Cooder = $("#home .Cooder");
  	$location.on("click",function(){
  		// console.log($(this))
  		$Cooder.slideDown();
  		$h1.css("display","none");
  		$search.css("display","none");
  		$location.css("display","none");
  		$city.css("display","block");
  		$back.css("display","block");
  	})
  	$back.on("click",function(){
  		Yin();
  	})
  	/*首页顶部的样式改变函数*/
  	function Yin(){
  		$Cooder.slideUp();
  		$h1.css("display","block");
  		$search.css("display","block");
  		$location.css("display","block");
  		$city.css("display","none");
  		$back.css("display","none");
  	} 
  	var $liList = $("#home .Cooder li");
  	$liList.each(function(i){
	  	$(this).on("click",function(){
  			if($(this).index()>1){
				$changeC.html($(this).html());
	  			Yin();
	  		}
	  		/*IP定位*/ 
	  		if($(this).index()==0){
	  			showCityInfo();
	  			Yin();
	  		}
  		})
  	})
  	// 创建空的map对象
  	var map = new AMap.Map("container", {});
  	//IP定位函数(获取用户所在城市信息)
    function showCityInfo() {
        //实例化城市查询类
        var citysearch = new AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    $changeC.html(cityinfo);
                }
            } else {
            	alert("定位失败,请重试");
            }
        });
    }
/***********   底部table切换   ************/
	var $navs = $("nav a");//这里使用 jq 定义变量必须加 var
	var $controlContent  = $(".mui-control-content");//这里使用 jq 定义变量必须加 var
	// console.log($navs[0])
	var $navN=0;
	var bol = true;
	$navs.each(function(i){
	   $(this).on("click",function(){//利用同级查找可以减少使用for循环
	   		// console.log($(this).index());
	   		$(this).addClass('mui-active').siblings('.mui-active').removeClass('mui-active');
	   		$controlContent.eq($navN).css("display","none");
	   		$controlContent.eq($(this).index()).css("display","block");
	   		// 第一页home轮播
	   		if($(this).index()==0){
	   			var swiper = new Swiper("#home .swiper-container",{
			        pagination: '.swiper-pagination',
			        autoplay: 1500,
			        speed:1500,
			        loop:true
					});
	   		}
	   		// 第二页zajin轮播
	   		if($(this).index()==1){
	   			var swiper = new Swiper("#zajin .swiper-container",{
			        pagination: '.swiper-pagination',
			        autoplay : 1500,
			        speed:1500,
			        loop:true,
					});
	   		}
	   		$navN = $(this).index();
	   		bol= false;
	   		// 在选择地址时,table切换,让首页样式还原
	   		Yin();
	   })
	 });
	if(bol){
		var swiper = new Swiper("#home .swiper-container",{
	        pagination: '.swiper-pagination',
	        autoplay: 1500,
	        speed:1500,
	        loop:true
			});
	}
  }
}

</script>
  
<style>
/***********    顶部样式   *****************/
/*第一个*/
/*#home{display: none;}*/
#home .header a{display: none;}
#home .header .location,#home .header .mui-icon-search{
	display: block ;
}

/*第二个*/
#zajin{
	display: none;
	/*display: block;*/
}
#zajin .header a{display: none;}
#zajin .header .location,.header .mui-icon-search{
	display: none;
}
/*第三个*/
#clasify{display: none;}
#clasify .header a{display: none;}
#clasify .header .location,.header .mui-icon-search{
	display: none;
}

/*第四个*/
#shop{display: none;}
#shop .header a{display: none;}
#shop .header .location,#shop .header .mui-icon-search{
	display: none;
}
#shop .header .mui-pull-right{
	display: block;
	top: calc(50% - .1rem);
    font-size: .35rem;
}
/*第五个*/
#person{display: none;}
#person .header a{display: none;}
#person .header .location,.header .mui-icon-search{
	display: none;
}

/********************  首页  *********************/

#home{padding-top: .85rem;}
#home .swiper-container .swiper-slide img{width: 100%;}
#home .content{margin: .2rem .2rem 1.2rem;}
#home .content .pic .fl img{ width: 2.293rem;vertical-align: top}
#home .content .pic .fr img{ 
	width: 2.293rem;
	vertical-align: top;
}
#home .content .pic .fr{
	margin-top: .08rem;
}
#home .content .Ad img{width: 100%;}
#home .content .Ad p{
	background-color: white;
	margin: 4px;
	font-size: .3rem;
	color: black;
}
#home .content .Sales{
	position: relative;
	margin: .2rem 0px;
	text-align: center;
}
#home .content .Sales hr{
	color: #dbdbdb;
	width: 100%;
	position: absolute;
	top: 50%;
}
#home .content .Sales span{
	color: #808080;
	padding: 0rem .2rem;
	background-color: #f2f3f3;
	font-size: .3rem;
	position: relative;
}

/*定位*/
#home .Cooder{
	display: none;
	width: 100%;
	background-color: #e6e6e6;
	position: absolute;
	z-index: 3333
}
#home .Cooder li{
	background-color: #f2f2f2;
	font-size: .3rem;
	padding: .25rem;
}
#home .Cooder li:nth-child(2){
	background-color: #e6e6e6;
}
/******************  会员杂锦  *******************/

#zajin{padding: .85rem 0rem 1rem;}
#zajin .header{ width: 100%; height: .85rem; position: fixed; top: 0; z-index: 1; }
#zajin .header .mui-icon:nth-child(1){ display: none; }
#zajin .header a:nth-child(3){ display: none; }
#zajin .content{ width: 100%; position: relative; overflow: hidden; }
#zajin .bottom{ width: 100%; height: .98rem; position: fixed; bottom: 0; background-color: orange; }
/*.lun{ width: 400%; height: 3rem; background-color: lightblue; position: relative; }*/
#zajin .con{ margin: .2rem; position: relative; /*bottom: .98rem;*/ overflow: hidden; }
#zajin .con .cona{ display: inline-block; width: 3.48rem; height: 4.89rem; }
#zajin .con .product{ width: 3.48rem; height: 4.89rem; float: left; background-color: white; margin-bottom: .15rem; overflow: hidden; position: relative;  }
#zajin .con .cona:nth-child(2n-1){ margin-right: .14rem; }
#zajin .products{ width: 3.48rem; height: 3.48rem; }
#zajin .products img{ width: 100%; }
#zajin .product p{ font-size: .3rem; color: #1a1a1a; width: 90%; padding: 5%; line-height: .34rem; }
#zajin .span1{ font-size: .28rem; color: #de0000; position: absolute; bottom: 1%; left: 5%; }
#zajin .span2{ font-size: .24rem; color: #8a8a8a; position: absolute; bottom: 1%; left: 35%; }

#zajin .swiper-container {
    width: 100%;
    height: 3rem;
}
#zajin .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
#zajin .swiper-slide img{ width: 100%; }

#zajin .swiper-pagination-bullet{width:.16rem;height:.16rem;}
#zajin .swiper-pagination-bullet-active{background:#fff}
#zajin .swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:.1rem;}
#zajin .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{ margin: 0 .1rem; }

/**************  我的  *****************/
#person .wrap {
  width: 100%;
  position: relative;
 /* margin-bottom: 1rem;*/
}
#person .content { width: 100%; position: relative }
#person .lun{ width: 100%; height: 4.5rem;position: relative;}

#person .content .lun img {
  width: 100%;
  height:4.5rem;
}
#person .content .middle {
  width: 1.56rem;
  height:1.56rem;
  overflow: hidden;
  border: 2px solid #fff; 
  border-radius:50%;
  position: absolute;
  top: 1.3rem;left:0;right: 0;bottom: 2rem;
  margin: auto;                                                                                                             
}
#person .content .middle .peop {
  width: 100%;
  background:rgba(255,255,255,.5);
}
#person .content .Dia {
  height:.30rem;
  width: .40rem;
  position: absolute;
  left:3.95rem;
  top:2.3rem;
}
#person .content .Dia img { 
  width: 100%;
}
#person .content .Name {
  width:1.56rem;
  
  position: absolute;
  top:2.9rem;left:0;right:0;bottom: 0.8rem;
  margin: auto;
}
#person .content .Name .Name_co {
 font-size: .25rem;
  color: white;
  margin-bottom: 0.2rem;
  text-align:center;
}
#person .content .Name .Vip {
  width: 1.56rem;
  height: .42rem;
  color: white;
  font-size: .25rem;
  line-height: .42rem;
  padding: 0;
  border-radius:.2rem;
  background:rgba(255,255,255,0.3);
  text-align: center;
}
#person .inner {
  width: 7.50rem;
  height:7.77rem;
  margin-top: .14rem;

  border-top: 1px solid #dbdbdb;
  background: #f2f2f2;
  
}
#person .inner ul {
  background: white;
  padding-left: .38rem;
}
#person .inner ul li {
  font-size:.28rem;
  line-height:.92rem;
  background: white;

  border-bottom:1px solid #f2f2f2;



}
#person .inner ul li a {
  color: black;
}
#person .inner ul li .arrow {
  font-size: .32rem;
  margin-right:.2rem;
  float: right;
  color: #b3b3b3;
}
#person .inner ul .more {
  margin-top:.22rem;
}
#person .inner ul li img {
  width: .4rem;
  margin:0 .40rem 0 0;
}
/**************   底部table切换   ***************/
.mui-bar-tab .mui-tab-item .home{
	font-family: Muiicons;
	font-weight: normal;
    font-style: normal;
    line-height: 1;
    margin-top: .06rem;
    font-size: .55rem;
    display: inline-block;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
}
.mui-bar-tab .mui-tab-item .home:before{
	content: '\e500';
}
.mui-bar-tab .mui-tab-item .mui-icon-extra{font-size: .48rem;}
.mui-bar-tab{height: 1rem;}
.mui-bar .mui-icon{font-size: .58rem;}
.mui-bar-tab .mui-tab-item .mui-icon{width: 100%;    margin-bottom: 5px;}
.mui-bar-tab .mui-tab-item .mui-icon~.mui-tab-label{font-size: .22rem;}
.mui-bar-tab .mui-tab-item.mui-active{
	color: #F29004;
}
.mui-bar-tab .mui-tab-item{height: .5rem}
.mui-bar-tab .mui-tab-item .mui-tab-label{
	font-size: .22rem;
	display: block;
}
.mui-bar-tab .mui-tab-item .mui-icon-extra{margin-top: .1rem}

</style>
