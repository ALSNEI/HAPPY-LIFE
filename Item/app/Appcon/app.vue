<template>
  <div id="app">
<!--  1.home -->
    <div id="home" class=" mui-control-content mui-active">	
    	<title title="生活一家" right="编辑"></title>
    	<!-- 定位界面 -->
    	<ul class="Cooder">
    		<li>当前位置</li>
    		<li>省市列表</li>
    		<li>上海市</li>
    		<li>上海郊区</li>
    		<li>江苏</li>
    		<li>浙江</li>
    	</ul>
    	<!-- 搜索界面 -->
    	<form class="searchPage">
    		<div class="search-form-box">
  				<input type="text" class="searchBar">
  				<p class="searchBarIn">
  					<span class="mui-icon mui-icon-search searchBar-icon"></span>
  					<span class="searchText">输入关键词/商品名称</span>
  				</p>
      	</div>
			<p class="searchTitle">热门搜索</p>
			<a href="###" class="hotsearch" v-for="obj in SearchArr">{{obj.p}}</a>
    	</form>
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
		    		<a href="login.html"><img src="img/homeLife.png" alt=""></a>
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
					<img v-bind:src="obj.img" alt="">
					<p>{{obj.p}}</p>
		    	</div>
		    </div>
	    </div>
    </div>
<!-- 2.zajin -->
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
			  		<div class="products"><img v-bind:src="obj.img"></div>
					<p>{{obj.p}}</p>
					<span class="span1">{{obj.span1}}</span>
					<span class="span2">原价:<span style="text-decoration:line-through">{{obj.span2}}</span></span>

			  	</div>
			  	</a>
			</div><!-- con -->
		</div><!-- content -->
    </div>
<!-- 3.classify -->
    <div id="clasify" class=" mui-control-content">
    	<title title="分类"></title>
    	<div class="wrap">
			<div class="content">
				<div class="classy">
					<ul class="classify">
						<li class="classifyli">
							生活食品<div class="daosanjiao"></div>
							<ul class="classifyf">
								<li class="classifylis" v-for="obj in Clasifyarr2">
								{{obj.classcons}}
								</li>
							</ul>
						</li>
						<li class="classifyli">
							价格从高到低<div class="daosanjiao"></div>
							<ul class="classifys">
								<li class="classifylis" v-for="obj in Clasifyarr3">
								{{obj.sort}}
								</li>
							</ul>
						</li>
						<li class="classifyli">
							销量优先<div class="daosanjiao"></div>
							<ul class="classifyx">
								<li class="classifylis" v-for="obj in Clasifyarr2">
								<!-- {{obj.classcons}} -->
								</li>
							</ul>
						</li>
					</ul>
				</div>
				

				<div class="con">
					<a class="cona" href="###" v-for="obj in Clasifyarr" >
					<div class="product">
				  		<div class="products"><img v-bind:src="obj.img")></div>
						<p>{{obj.p}}</p>
						<span class="span1">￥{{obj.span1}}</span>
						<span class="span2">原价:￥<span style="text-decoration:line-through">{{obj.span2}}</span></span>

				  	</div>
				  	</a>
				  	
				</div><!-- con -->
				<div class="meng"></div>
			</div><!-- content -->
		</div><!-- wrap -->
    </div>
<!-- 4.shop -->
    <div id="shop" class=" mui-control-content">
    	<title title="购物车" Right="编辑"></title>
		<div class="wrap">  
	        <div class="goods"  v-for="obj in Shoparr" >
	          <div class="goodss">
	            <div class="gou" v-on:click="spot($index)">
	               <img src="img/gou2.png" alt="">
	            </div>
	            <div class="goodsimg"><img v-bind:src="obj.img" alt=""></div>
	          </div>

	          <div class="defailed">
	            <div>{{obj.name}}</div>
	            <div>规格：{{obj.a}}</div>       
	          </div>

	          <div>
	            <span style="color:#e76b6b">￥{{obj.money}}</span>
	            <span style="float: right;">x 1</span>
	          </div>

	        </div>

	    </div>

	    <div class="suan">
	       <div class="gou gouquan">
	           <img src="img/gou2.png" alt="">
	        </div>
	        <div class="xuan">全选</div>
	        <div class="heji">
	          <span>合计：</span><span style="color: #ed601b"></span> 
	          <p>(不含运费)</p>
	        </div>
	          <!-- <div class="jisuan">结算<span>（2）</span></div> -->
	          <button class="jisuan">结算<span></span></button>
	    </div>
    </div>
<!-- 5.person -->
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
	        <ul class="inner1">
	          <li class="first"><a href="basics.html"><img src="img/icon1.jpg">基本资料<span class="arrow">></span></a></li>
	          <li><a href="###"><img src="img/icon2.jpg">我的订单<span class="arrow">></span></a></li>
	          <li><a href="###"><img src="img/icon3.jpg">我的收藏<span class="arrow">></span></a></li>
	          <li><a href="###"><img src="img/icon4.jpg">我的钱包<span class="arrow">></span></a></li>
	          <li><a href="###"><img src="img/icon5.jpg">收货地址<span class="arrow">></span></a></li>
	          <li><a href="###"><img src="img/icon6.jpg">升级会员<span class="arrow">></span></a></li>
	        </ul>
	        <ul  class="inner2">
	              <li class="more"><a href="###"><img src="img/icon7.jpg">更多<span class="arrow">></span></a></li>
	              <li><a href="###"><img src="img/icon7.jpg">注销<span class="arrow">></span></a></li>

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
  		// home
  		homeArr:[
  		{img:require("./img/Ad1.jpg"),p:"【10月抢购预告】 荣耀乐檬大神爆款 惊爆价"},
  		{img:require("./img/Ad2.jpg"),p:"【劲爆开抢】 宝洁大礼包优惠前所未有"},
  		{img:require("./img/Ad3.jpg"),p:"【神价再现】 GOD PRICE 华丽上市"}
  		],
  		SearchArr:[
  		{p:"小挎包"},
  		{p:"皮带"},
  		{p:"双肩包"},
  		{p:"皮带"},
  		{p:"小挎包"},
  		{p:"双肩包"},
  		{p:"皮带"},
  		{p:"小挎包"}
  		],
  		// zajin
  		zajinArr:[
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋1",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋2",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋3",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋4",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋5",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋6",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋7",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋8",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋9",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋10",span1:"￥29.5",span2:"￥42.5"}
      ],
      // 购物车
      Shoparr:[
        {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"1合6片",bol:true},
        {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋1",money:29.5,a:"1合6片",bol:false},
        {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋2",money:29.5,a:"1合6片",bol:false},
        {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋3",money:29.5,a:"1合6片",bol:true},
         {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"1合6片",bol:true},
        {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋1",money:29.5,a:"1合6片",bol:true},
        {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋2",money:29.5,a:"1合6片",bol:true},
        {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋3",money:29.5,a:"1合6片",bol:true},
      ],
      // 购物车
      abc:function(){   //小勾选
        var total = 0;
        var len = 0;
        this.truelen=0;
        for (var i=0;i<this.Shoparr.length;i++) {
          if (this.Shoparr[i].bol==false) { //算钱
            total += this.Shoparr[i].money; 
            len += 1; 
          }       
          if (this.Shoparr[i].bol) {  //小勾选
               $(".gou").eq(i).children()[0].src=require("./img/gou2.png"); 
           }else {
               $(".gou").eq(i).children()[0].src=require("./img/gou.png"); 
               this.truelen++;//记录勾选了多少个
          }
        }
        this.ABC();
        $(".heji span").eq(1).html("￥"+total)
        $(".jisuan span").eq(0).html("（"+len+"）")
        console.log(this.truelen);
     },
     truelen:0,
     ABC:function(){     //全选按钮   
        if (this.truelen==this.Shoparr.length) {
           $(".gouquan").eq(0).children()[0].src=require("./img/gou.png");
        }else {
           $(".gouquan").eq(0).children()[0].src=require("./img/gou2.png");
        }
     },
     Clasifyarr:[
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"29.5",span2:"42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋1",span1:"29.5",span2:"42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋2",span1:"29.5",span2:"42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋3",span1:"29.5",span2:"42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋4",span1:"29.5",span2:"42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋5",span1:"29.5",span2:"42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋6",span1:"29.5",span2:"42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋7",span1:"29.5",span2:"42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋8",span1:"29.5",span2:"42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋9",span1:"29.5",span2:"42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋10",span1:"29.5",span2:"42.5"}
      ],
      Clasifyarr2:[
      	{classcons:"美食"},
      	{classcons:"美酒"},
      	{classcons:"家居"},
      	{classcons:"百货"},
      	{classcons:"家电"},
      	{classcons:"汽车配件"},
      	{classcons:"箱包"},
      	{classcons:"珠宝"}
      ],
      Clasifyarr3:[
      	{sort:"综合排序"},
      	{sort:"价格从低到高"},
      	{sort:"价格从高到低"}
      ]    
  	}
  },

// 方法

  // 购物车
  methods:{ //标签可调用函数写这里
    spot:function(index){
        this.Shoparr[index].bol = !this.Shoparr[index].bol //根据布尔值决定是否选中
        this.abc();//小勾选
    }
  },

//ready函数 

  ready:function () {//生命周期问题
/***********  首页定位样式切换  ************/

  	var $h1 = $("#home .header h1");
  	var $changeC = $("#home .header .changeC");
  	var $city = $("#home .header .city");
  	var $searchT = $("#home .header .searchT");
  	var $searchPage =$("#home .searchPage");
  	var $searchBar =$("#home .searchPage .search-form-box .searchBar")
  	var $searchBarIn =$("#home .searchPage .search-form-box .searchBarIn")
  	var $search = $("#home .header .mui-icon-search");
  	var $back = $("#home .header .mui-action-back");
  	var $location = $("#home .header .location");
  	var $Cooder = $("#home .Cooder");
  	// $searchBar.on("tap",function(){
  	// 	$searchBarIn.css("display":"none")
  	// })
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
  		Xian();
  		$searchPage.slideUp();
  	})
  	$search.on("click",function(){
  		Yin();
  		$back.css("display","block");
  		$searchPage.slideDown();
  		$h1.css("display","none");
  		$search.css("display","none");
  		$searchT.css("display","block");
  		$location.css("display","none");
  	})
  	/*首页顶部的样式改变函数*/
  	function Yin(){
  		$Cooder.slideUp();
  		$h1.css("display","none");
  		$search.css("display","none");
  		$location.css("display","none");
  		$back.css("display","none");
  		$searchPage.css("display","none");
  	} 
  	function Xian(){
  		$h1.eq(0).css("display","block");
  		$search.css("display","block");
  		$location.css("display","block");
  	}
  	var $liList = $("#home .Cooder li");
  	$liList.each(function(i){
	  	$(this).on("click",function(){
  			if($(this).index()>1){
				$changeC.html($(this).html());
	  			Yin();
	  			Xian();
	  		}
	  		/*IP定位*/ 
	  		if($(this).index()==0){
	  			showCityInfo();
	  			Yin();
	  			Xian();
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

/**************   购物车   ***************/

    this.abc()//开始的时候选了那些商品
    var _arr = this; //保存this
    $(".gouquan").eq(0).on("touchstart",function(){//点击全选
        for (var i=0;i<  _arr.Shoparr.length;i++) {//改变所有的布尔值为选中
           _arr.Shoparr[i].bol = false;
         }
         _arr.abc();//选了多少个
         _arr.ABC();//是否触发全选按钮
    })
/***********   分类   ************/  

var classifyli = document.querySelectorAll(".classifyli");
		// var classifyf = document.querySelectorAll(".classifyf");
		var classifydiv = document.querySelectorAll(".classifyli div");
		var meng = document.querySelector(".meng");
		var index = 0;
		var Cbol = true;
		var Cbol1 = true;
		// console.log(classifydiv)
		// console.log(classifyf)

		//分类
		classifyli[0].onclick = function(){
			$(".classifys").css("display","none");
			Cbol1 = true;
			for(var j = 0; j < classifyli.length; j++){
				classifyli[j].style.color = "#666";
			}
			if (Cbol) {
				$(".classifyf").slideDown();
				Cbol = false;
				// meng.style.display = "block";
				$(".meng").fadeIn();
			}
			else{
				$(".classifyf").slideUp();
				Cbol = true;
				// meng.style.display = "none";
				$(".meng").fadeOut();
			}
			this.style.color = "#f29004";
		}
		// 排序
		classifyli[1].onclick = function(){
			// $(".classifyf").slideUp();
			$(".classifyf").css("display","none");
			Cbol = true;
			for(var j = 0; j < classifyli.length; j++){
				classifyli[j].style.color = "#666";
			}
			if (Cbol1) {
				$(".classifys").slideDown();
				Cbol1 = false;
				// meng.style.display = "block";
				$(".meng").fadeIn();
			}
			else{
				$(".classifys").slideUp();
				Cbol1 = true;
				// meng.style.display = "none";
				$(".meng").fadeOut();
			}
			this.style.color = "#f29004";
		}
		$(".meng").on("click",function(){
			$(".classifyf").slideUp();
			$(".classifys").slideUp();
			$(".meng").fadeOut();
			Cbol = true;
			Cbol1 = true;
			// console.log(1)
		})


/***********   底部table切换   ************/

	var $navs = $("nav a");//这里使用 jq 定义变量必须加 var
	var $controlContent  = $(".mui-control-content");//这里使用 jq 定义变量必须加 var
	// console.log($navs[0])
	var $navN=0;
	var Nbol = true;
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
	   		Nbol= false;
	   		// 在选择地址时,table切换,让首页样式还原
	   		Yin();
	   		Xian();
	   })
	 });
	if(Nbol){
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
	z-index:2;
}
#home .Cooder li{
	background-color: #f2f2f2;
	font-size: .3rem;
	padding: .25rem;
}
#home .Cooder li:nth-child(2){
	background-color: #e6e6e6;
}
/*搜索*/
#home .searchPage{
	display: none;
	position: absolute;
	background-color: #e6e6e6;
	z-index: 3;
	height: calc(100vh - .85rem);
}
#home .search-form-box{
	text-align: center;
	margin-top: .2rem;
	position: relative;
}
#home .searchPage .searchBar{
	width: 7.1rem;
	border-radius: 50px;
	outline: none;
}
#home .searchPage .searchBarIn{
	position: absolute;
	text-align: right;
	font-size: .3rem;
	top: calc(50% - .37rem);
    left: .5rem;
}
#home .searchPage .searchTitle{
	text-align: center;
	font-size: .3rem;
	margin-bottom: .3rem;
}
#home .searchPage .hotsearch{
	color: #aeaeae;
	border:1px solid #e1e1e1;
	border-radius: 50px;
	text-align: center;
	background-color: white;
	width:1.44rem;
	height: .52rem;
	font-size: .3rem;
	line-height: .53rem;
	display: inline-block;
	margin: 0rem .2rem .2rem;
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

/**************  购物车  *****************/

#shop .header a{ display: none; }
#shop .bottom{
  background-color: orange;
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
}
#shop .wrap{
  width: 100%;
  /*height: 85%;*/
  position: relative;
  padding-top: .85rem;
  background-color: #fff;
  padding-bottom: 2rem;
}
#shop .suan{
  width: 100%;
  height: 0.95rem;
  /*border: 1px solid #ddd;*/
  font-size: 0.3rem;
  position: fixed;
  bottom: 1rem;
  right: 0;
  left: 0;
  margin: auto;
  padding: 0 0.1rem;
  background-color: #ddd;
}
#shop .suan img{
  width: 100%;
}
#shop .suan .gou{
  width: 0.35rem;
  height: 0.35rem;
}
#shop .suan .xuan{
  /*width: 0.6rem;*/
  height: 0.35rem;
  left: 7%;
}
#shop .suan .heji{
  width: 3rem;
  height: 0.8rem;
  left: 25%;
  /*top: 50%*/
}
#shop .suan .heji span{
  display: inline-block;
  position: absolute;
  top: 0;

}
#shop .suan .heji span:nth-child(2){
  left: 30%;
  width: 2rem;
  overflow: hidden;
   text-overflow: ellipsis;  /*隐藏部分变成点点...*/
}
#shop .suan .heji p{
  font-size: 0.2rem;
  position: absolute;
  bottom: 0;
}
#shop .suan .jisuan{
  width: 2.5rem;
  position: absolute;
  top: 0;
  bottom: 0;
  height: 0.7rem;
  right: 2%;
  background-color: #ee4147;
  margin: auto;
  color: #fff;
  font-size: 0.32rem;
  /*padding: 0 0.3rem 0 0.6rem;*/
}
#shop .suan div{
 /* display: inline-block;
  line-height: 300%;
  height: 50px;*/
  position: absolute;
 /* left: 0;
  right: 0;*/
  top: 0;
  bottom: 0;
  margin: auto;
}

#shop .goods{
  width: 100%;
  padding: 0.3rem 0.3rem;
  overflow: hidden;
  margin: auto;
  font-size: 0.3rem;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
#shop .goodss{
  float: left;
  width: 30%;
}
#shop .goods img{
  width: 100%;
}
#shop .gou{
  width: 0.35rem;
  display: inline-block;
}

#shop .goodsimg{
  width: 70%;
  display: inline-block;
}
#shop .defailed{
  width: 60%;
  float: left;
  line-height: 180%;
}
#shop .defailed div{
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /*隐藏部分变成点点...*/
}

/**************  分类  *****************/
#clasify {padding-top: .85rem}
#clasify .content{ width: 100%; position: relative; overflow: hidden; padding-bottom:.88rem; }
#clasify .bottom{ width: 100%; height: .98rem; position: fixed; bottom: 0; background-color: orange; z-index: 9; }
/*.lun{ width: 400%; height: 3rem; background-color: lightblue; position: relative; }*/
#clasify .con{ margin: .2rem; position: relative; /*bottom: .98rem;*/ overflow: hidden; }
#clasify .con .cona{ display: inline-block; width: 3.48rem; height: 4.89rem; }
#clasify .con .product{ width: 3.48rem; height: 4.89rem; float: left; background-color: white; margin-bottom: .15rem; overflow: hidden; position: relative;  }
#clasify .con .cona:nth-child(2n-1){ margin-right: .14rem; }


#clasify .products{ width: 3.48rem; height: 3.48rem; }
#clasify .products img{ width: 100%; }
#clasify .product p{ font-size: .3rem; color: #1a1a1a; width: 90%; padding: 5%; line-height: .34rem; }
#clasify .span1{ font-size: .28rem; color: #de0000; position: absolute; bottom: 1%; left: 5%; }
#clasify .span2{ font-size: .24rem; color: #8a8a8a; position: absolute; bottom: 1%; left: 35%; }

#clasify .classy{ width: 100%; height: .84rem; border-bottom:1px solid #dbdbdb; background-color: #fff; line-height: .82rem; font-size: .3rem; color: #666; z-index: 8; }
#clasify .content ul{ list-style: none; z-index: 8; float: left; }
#clasify .classify{ position: relative; }
#clasify .classifyli{ width: calc(100vw / 3); text-align: center; }
#clasify .content li{ float: left; height: .84rem; }
#clasify .classifyli ul{ display: none; }
#clasify .classifyf{ width: 100vw; background-color: #fff; padding: .1rem; border-top: 2px solid #dbdbdb; position: absolute; top: .84rem; left: 0; }
#clasify .classifyf li{ width: 1.32rem; height: .54rem; border-radius: .07rem; float: left;  border-radius: .2rem; background-color: #f2f2f2; margin: .15rem .25rem; line-height: .54rem; color: #333; }

#clasify .classifys{ width: 100vw; background-color: #fff; padding: .1rem; border-top: 2px solid #dbdbdb; position: absolute; top: .84rem; left: 0; border:1px solid #ddd; }
#clasify .classifys li{ width: 100vw; height: .64rem; line-height: .64rem; color: #333; border-bottom: 1px solid #ddd; text-align: left; padding-left: .2rem; }
#clasify .classifys li:last-child{ border:none; }

/*倒三角*/
#clasify .classifyli div{ width: 0; height: 0; border-width: .12rem .12rem 0rem .12rem; border-color: #999 transparent; border-style: solid; position: absolute; top: .34rem; }
#clasify .classifyli:nth-child(1) div{ left: 1.9rem; }
#clasify .classifyli:nth-child(2) div{ left: 4.7rem; }
#clasify .classifyli:nth-child(3) div{ left: 6.9rem; }

#clasify .dsjactive{ background-color: #f29004; }

#clasify .meng{ width: 100vw; height: 100vh; background:rgba(0,0,0,.7); display: none; z-index: 3; position: absolute; top: 0.85rem; }

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
  transform: scale(1.3);
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
  display: inline-block;
  width: 100%;
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
