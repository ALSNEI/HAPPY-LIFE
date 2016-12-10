<template>
  <div id="app">
    <div id="home" class=" mui-control-content mui-active">	
    	<title title="生活一家"></title>
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
		    	<div class="Ad1" v-for="obj in arr">
					<img src="img/Ad1.jpg" alt="">
					<p>{{obj.p}}</p>
		    	</div>
		    </div>
	    </div>
    </div>
	<div id="zajin" class=" mui-control-content">	
    	<title title="会员杂锦"></title>
    	
    </div>
    <div id="clasify" class=" mui-control-content">	
    	<title title="分类"></title>
    </div>
    <div id="shop" class=" mui-control-content">	
    	<title title="购物车"></title>
    </div>
    <div id="person" class=" mui-control-content">	
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
  		arr:[
  		{img:"img/Ad1.jpg",p:"【10月抢购预告】 荣耀乐檬大神爆款 惊爆价"},
  		{img:"img/Ad2.jpg",p:"【劲爆开抢】 宝洁大礼包优惠前所未有"},
  		{img:"img/Ad3.jpg",p:"【神价再现】 GOD PRICE 华丽上市"}
  		]
  	}
  },
  ready:function () {//生命周期问题
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
	   		if($(this).index()==0){
	   			var swiper = new Swiper("#home .swiper-container",{
			        pagination: '.swiper-pagination',
			        autoplay: 1500,
			        speed:1000,
			        loop:true
					});
	   		}
	   		$navN = $(this).index();
	   		bol= false;
	   })
	 });
	if(bol){
		var swiper = new Swiper("#home .swiper-container",{
	        pagination: '.swiper-pagination',
	        autoplay: 1500,
	        speed:1000,
	        loop:true
			});
	}
  }
}

</script>
  
<style>
/***********    顶部样式   *****************/
/*第一个*/
#home .header a{display: none;}
#home .header .location,#home .header .mui-icon-search{
	display: block ;
}
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
/*第二个*/
#zajin{display: none;}
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
#shop .header .location,.header .mui-icon-search{
	display: none;
}
#shop .header .type{
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
/*****************   首页   ****************/
#home .swiper-container{padding-top: .85rem;}
#home .swiper-container .swiper-slide img{width: 100%;}
/***********   底部table切换   ************/
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
