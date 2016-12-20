<template>
	<!-- <div class="wrap"> -->
		<div class="share">
			<div class="shares"></div><!-- shares -->
			<div class="shareto">
				<p>分享到</p>
				<div class="where">
					<div class="wxhy">
						<div class="img"><img src="img/weixin.png"/></div>
						<p>微信好友</p>
					</div>
					<div class="pyq">
						<div class="img"><img src="img/pyq.png"/></div>
						<p>微信朋友圈</p>
					</div>
					<div class="sina">
						<div class="img"><img src="img/sina.png"/></div>
						<p>新浪微博</p>
					</div>
				</div><!-- where -->

				<button class="buttonqx">取消</button>
			</div><!-- shareto -->
		</div><!-- share -->
		
	<!-- </div> --><!-- wrap -->
	
</template>

<script>
export default {
  props: ['title','Right'],
  ready:function(){
  	$(".shares").on("click",function(){
  		$(".share").fadeOut(200);
  	})
  	$(".buttonqx").on("click",function(){
  		$(".share").fadeOut(200);
  	})
  }

}
</script>

<style>

.share{display: none; width: 100vw; height: 100vh; position: fixed; top: 0; z-index: 4}
.shares{ width: 100vw; height: calc(100vh - 2.35rem); background-color: rgba(0,0,0,.5); /*display: none;*/ }
.shareto{ width: 100vw; height: 4.7rem; background-color: white; padding: .33rem .66rem; box-sizing: border-box; position: absolute; bottom: 0; }
.shareto p{ text-align: center; font-size: .36rem; margin-bottom: .3rem; color: #262626; }
.where{ position: relative; }
.where div{ width: 1.22rem; height: 1.6rem; }
.where .img{ width: 1.06rem; height: 1.06rem; padding: .08rem; box-sizing: border-box; margin:0; }
.img img{ width: 1.06rem; float: left; margin: 0 auto; }

.where div p{ font-size: .23rem; color: #262626; margin: 0; margin-top: .24rem; }

.wxhy{ float: left; }
.sina{ float: right; }
.pyq{ position: absolute; left: calc(50% - .53rem); }

.shareto button{ width:  calc(100vw - 1.22rem); height: .9rem; line-height: .9rem; text-align: center; position: absolute; top: 3.3rem; font-size: .3rem; background-color: #ccc; border-radius: .3rem; border:0; }
</style>
