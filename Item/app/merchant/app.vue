

<template>
<div id="app">
	<title title="商家信息"></title>
	<div class="wrap">
		
		<!-- <div class="header"></div> --><!-- header -->
		<div class="content">
			
			<div class="swiper-container">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide"><img src="img/tu1.jpg"></div>
		            <div class="swiper-slide"><img src="img/tu2.jpg"></div>
		            <div class="swiper-slide"><img src="img/tu1.jpg"></div>
		            <div class="swiper-slide"><img src="img/tu2.jpg"></div>
		            <div class="swiper-slide"><img src="img/tu1.jpg"></div>
		        </div>
		        <!-- Add Pagination -->
		        <div class="swiper-pagination"></div>
		    </div><!-- 轮播图 -->


			<div class="mui-content mui-row mui-fullscreen">
				<div class="mui-col-xs-3">
					<div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
						<a class="mui-control-item mui-active" href="#content1">银行信息</a>
						<a class="mui-control-item" href="#content2">房产信息</a>
						<a class="mui-control-item" href="#content3">银行信息</a>
						<a class="mui-control-item" href="#content4">房产信息</a>
						<a class="mui-control-item" href="#content5">银行信息</a>
						<a class="mui-control-item" href="#content6">房产信息</a>
					</div>
				</div>

				<div id="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #c8c7cc;">
					<div id="content1" class="mui-control-content mui-active">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell" v-for="obj in arr">
								<div class="lifeleft"><img v-bind:src="obj.img"></div>
								<div class="liferight">
									<p class="p1">{{obj.p1}}</p>
									<p class="p2"><img src="img/sound.png"> {{obj.p2}}</p>
									<p class="p3">{{obj.p3}}</p>
									<p class="p4">{{obj.p4}}</p>
								</div>
							</li>
						</ul>
					</div>
					<div id="content2" class="mui-control-content">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell" v-for="obj in arr1">
								<div class="lifeleft"><img v-bind:src="obj.img"></div>
								<div class="liferight">
									<p class="p1">{{obj.p}}</p>
									<span class="lrs1">{{obj.span1}}</span>
									<span class="lrs2">原价：<span style="text-decoration:line-through">{{obj.span2}}</span></span>
								</div>
							</li>
						</ul>
					</div>
					<div id="content3" class="mui-control-content mui-active">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell" v-for="obj in arr">
								<div class="lifeleft"><img v-bind:src="obj.img"></div>
								<div class="liferight">
									<p class="p1">{{obj.p1}}</p>
									<p class="p2"><img src="img/sound.png"> {{obj.p2}}</p>
									<p class="p3">{{obj.p3}}</p>
									<p class="p4">{{obj.p4}}</p>
								</div>
							</li>
						</ul>
					</div>
					<div id="content4" class="mui-control-content">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell" v-for="obj in arr1">
								<div class="lifeleft"><img v-bind:src="obj.img"></div>
								<div class="liferight">
									<p class="p1">{{obj.p}}</p>
									<span class="lrs1">{{obj.span1}}</span>
									<span class="lrs2">原价：<span style="text-decoration:line-through">{{obj.span2}}</span></span>
								</div>
							</li>
						</ul>
					</div>
					<div id="content5" class="mui-control-content mui-active">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell" v-for="obj in arr">
								<div class="lifeleft"><img v-bind:src="obj.img"></div>
								<div class="liferight">
									<p class="p1">{{obj.p1}}</p>
									<p class="p2"><img src="img/sound.png"> {{obj.p2}}</p>
									<p class="p3">{{obj.p3}}</p>
									<p class="p4">{{obj.p4}}</p>
								</div>
							</li>
						</ul>
					</div>
					<div id="content6" class="mui-control-content">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell" v-for="obj in arr1">
								<div class="lifeleft"><img v-bind:src="obj.img"></div>
								<div class="liferight">
									<p class="p1">{{obj.p}}</p>
									<span class="lrs1">{{obj.span1}}</span>
									<span class="lrs2">原价：<span style="text-decoration:line-through">{{obj.span2}}</span></span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
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
    attached :function () {  //myVue.$appendTo(".test2")暂时触发不了,不知道怎么解决
                    //在 vm.$el 插入 DOM 时调用。必须是由指令或实例方法（如 $appendTo()）插入，直接操作 vm.$el 不会 触发这个钩子。
                    // console.log("插入DOM成功");
                },
  data () {
    return {      
      arr:[
      	{img:require("./img/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
      	{img:require("./img/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
      	{img:require("./img/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
      	{img:require("./img/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
      	{img:require("./img/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
      	{img:require("./img/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
      	{img:require("./img/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
      	{img:require("./img/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
      	{img:require("./img/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
      	{img:require("./img/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
      ],
      arr1:[
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"￥29.5",span2:"￥42.5"},
      	{img:require("./img/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"￥29.5",span2:"￥42.5"}
      ],
      
    }
    
  }
}


</script>


<style>
*{ margin: 0; padding: 0; }
html,body{ width: 100%; height: 100%; position: relative; }
html{ font-size: calc(100vw / 7.5); }
body{ background-color: #f2f2f2; }
.header{ width: 100%; height: .85rem; position: fixed; top: 0; z-index: 9; }
/*.header .mui-icon:nth-child(1){ display: none; }*/
.header a:nth-child(3){ display: none; }
.content{ width: 100%; position: relative; top: .85rem; }
.bottom{ width: 100%; height: .98rem; position: fixed; bottom: 0; background-color: orange; }

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

.mui-table-view-cell{ padding: .2rem; }
.lifeleft{ width: 1.65rem; height: 1.65rem; float: left; }
.lifeleft img{ width: 100%; }
.liferight{ height: 1.65rem; width: calc(100% - 1.65rem); padding: .15rem 0 .3rem .2rem; float: left; position: relative; }
.liferight .p1{ color: #1b1b1b; font-size: .3rem; line-height: .38rem; margin-bottom: .1rem; }
.p2,.p3,.p4{ font-size: .26rem; line-height: .37rem; }
.p2 img{ width: .3rem; margin-right: .1rem; }
.liferight span{ font-size: .26rem; }
.liferight .lrs1{ font-size: .3rem; color: #df0101; position: absolute; bottom: .24rem; }
.liferight .lrs2{ color: #7c7c7c; left: 1.2rem; position: absolute; bottom: .23rem; }

.mui-fullscreen{ top: 3rem; }
#segmentedControls a{ width: 100%; background-color: #f2f2f2; font-size: .3rem; line-height: .3rem; padding: .26rem; }
#segmentedControls .mui-active{ color: #f29004; border-left: .12rem solid #f29004; }
.mui-col-xs-3{ height: calc(100vh - 3.85rem - .98rem); overflow: scroll; }
.mui-table-view{ height: calc(100vh - 3.85rem - .98rem); overflow: scroll; }
.mui-table-view:after{ height: 0; }

</style>


