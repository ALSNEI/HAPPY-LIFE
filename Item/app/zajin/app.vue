

<template>
<div id="app">
	<title title="会员杂锦"></title>
	<div class="wrap">
		
		<!-- <div class="header"></div> --><!-- header -->
		<div class="content">
			
			<div class="swiper-container">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide"><img src="img/lunbo1.jpg"></div>
		            <div class="swiper-slide">lunbo 2</div>
		            <div class="swiper-slide"><img src="img/lunbo1.jpg"></div>
		            <div class="swiper-slide">lunbo 4</div>
		        </div>
		        <!-- Add Pagination -->
		        <div class="swiper-pagination"></div>
		    </div><!-- 轮播图 -->

			<div class="con">
				<a class="cona" href="###" v-for="obj in arr" >
				<div class="product">
			  		<div class="products"><img src="img/hetao.jpg"></div>
					<p>{{obj.p}}</p>
					<span class="span1">{{obj.span1}}</span>
					<span class="span2">原价:<span style="text-decoration:line-through">{{obj.span2}}</span></span>

			  	</div>
			  	</a>
			</div><!-- con -->
		</div><!-- content -->
		<div class="bottom"></div><!-- bottom -->
	</div><!-- wrap -->
</div>
	

</template>


<script>
import Title from '../commons/title'
export default {    // export 提供外部引入
	components: {
	    Title
	},
	ready:function(){
    	var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        autoplay : 3000,
	        loop:true,
			autoplayDisableOnInteraction : false,
	    });
    },
  data () {
    return {      
      arr:[
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
    
  }
}


</script>


<style>
*{ margin: 0; padding: 0; }
html,body{ width: 100%; height: 100%; position: relative; }
html{ font-size: calc(100vw / 7.5); }	/*font-size:l;*/
body{ background-color: #f2f2f2; /*position: absolute;*/ top: .85rem; }
.header{ width: 100%; height: .85rem; position: fixed; top: 0; z-index: 1; }
.header .mui-icon:nth-child(1){ display: none; }
.header a:nth-child(3){ display: none; }
.content{ width: 100%; position: relative; overflow: hidden; }
.bottom{ width: 100%; height: .98rem; position: fixed; bottom: 0; background-color: orange; }
/*.lun{ width: 400%; height: 3rem; background-color: lightblue; position: relative; }*/
.con{ margin: .2rem; position: relative; /*bottom: .98rem;*/ overflow: hidden; }
.con .cona{ display: inline-block; width: 3.48rem; height: 4.89rem; }
.con .product{ width: 3.48rem; height: 4.89rem; float: left; background-color: white; margin-bottom: .15rem; overflow: hidden; position: relative;  }
.con .cona:nth-child(2n-1){ margin-right: .14rem; }


.products{ width: 3.48rem; height: 3.48rem; }
.products img{ width: 100%; }
.product p{ font-size: .3rem; color: #1a1a1a; width: 90%; padding: 5%; line-height: .34rem; }
.span1{ font-size: .28rem; color: #de0000; position: absolute; bottom: 1%; left: 5%; }
.span2{ font-size: .24rem; color: #8a8a8a; position: absolute; bottom: 1%; left: 35%; }

.swiper-container {
    width: 100%;
    height: 3rem;
}
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
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
.swiper-slide img{ width: 100%; }

.swiper-pagination-bullet{width:.16rem;height:.16rem;}
.swiper-pagination-bullet-active{background:#fff}
.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:.1rem;}
.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{ margin: 0 .1rem; }

</style>





