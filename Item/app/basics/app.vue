<template>
  <div id="app">
	<div class="mainContent">
    	<title title="基本资料"></title>
	    <ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell photo">
				<a class="mui-navigate-right">头像
					<img src="img/photo.png" alt="" class="fr">
				</a>
				
			</li>
			<li class="mui-table-view-cell photo">
				<a class="mui-navigate-right">姓名
					<span class="fr name">上官海棠</span>
				</a>
			</li>
			<li class="mui-table-view-cell photo">
				<a class="mui-navigate-right">会员标识
					<img src="img/stone.png" alt="" class="fr" style="width: .5rem;">
				</a>
			</li>
			<li class="mui-table-view-cell photo">
				<a class="mui-navigate-right">联系方式
					<span class="fr mobile">136****1245</span>
				</a>
			</li>
		</ul>
		<ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell">
				<a href="#modification" class="mui-navigate-right">修改密码</a>
			</li>
			<li class="mui-table-view-cell">
				<a href="#money" class="mui-navigate-right">修改钱包密码</a>
			</li>
			<li class="mui-table-view-cell">
				<a href="#support" class="mui-navigate-right">我能供应</a>
			</li>
		</ul>
    </div>
    <div id="pic" class="sonpage">
		<title title="头像"></title>
		<input type="text">
		<button class="btn">确认</button>
    </div>
    <div id="name" class="sonpage">
		<title title="姓名"></title>
		<input type="text" maxlength="18"/>
		<button class="btn">确认</button>
    </div>
    <div id="contact" class="sonpage" style="width: 100%">
		<title title="联系方式" Right="编辑"></title>
		<input type="text">
		<div class="change">
			<input type="text">
			<input type="text">
		</div>
    </div>

  </div>
</template>

<script>
import Title from '../commons/title';
export default {
  components: {
    Title
  },
  ready:function(){
  	$(".mainContent .mui-action-back").on("click",function(){
  		// location.href ="Appcon.html";
  		history.back();
  	});
  	
  	$(".sonpage .mui-action-back").on("click",function(){
  		yincang();
  	});
  	$(".mainContent .photo").eq(1).on("click",function(){
  		xian(1);
  		$("#name input").val($(".mainContent .name").html());
  	});
  	$(".mainContent .photo").eq(3).on("click",function(){
  		xian(2);
  		$("#contact input").eq(0).val($(".mainContent .mobile").html());
  	});
  	$("#contact .mui-pull-right").on("click",function(){

  	})
  	function xian($index){
  		$(".sonpage").eq($index).animate({ 
		    left:"0",
		  },500)
		$(".sonpage .header").eq($index).animate({ 
	    left:"0",
	  },500)
  	};
  	function yincang(){
  		$(".sonpage").animate({ 
		    left:"100%",
		  },500);
  		$(".sonpage .header").animate({ 
		    left:"100%",
		  },500);
  	};
  	$("#name .btn").on("click",function(){
  		if($("#name input").val()==""){
  			alert("姓名不能为空!");
  			return;
  		}else{
  			alert("修改成功!");
  			console.log()
  			$(".mainContent .name").html($("#name input").val());
  			yincang();
  		}
  	})
  },
}
</script>
  
<style>
.mainContent{padding-top: .85rem;/*display: none;*/}
.mui-table-view:nth-child(3){margin-top: .2rem}
.mui-table-view-cell{font-size: .3rem;color:#838383;}
img{width:1.16rem;margin-right: .4rem}
.mui-table-view .photo:nth-child(1){line-height: 1.16rem}
.mui-table-view-chevron .mui-table-view-cell{padding-right: .3rem;}
.mui-table-view li a{margin-right: -.4rem!important;}
.mui-table-view li{border-top: 1px solid #F2F2F2;}
.mui-table-view li:not(:first-child){height: .9rem}
.mui-table-view-cell:after{background: none}
.mui-navigate-right:after, .mui-push-right:after{font-size: .4rem}
.name{transform: translateX(-.4rem);}
.mui-table-view li:nth-child(3)>a:after{display: none;}
.sonpage{position:absolute;padding-top: .85rem;text-align: center;height:100vh;top:0rem;left:100%;background-color:#f2f2f2;display: block;}
.mainContent .header{position: absolute;}
.sonpage .header{position: absolute;left:100%}
.sonpage input{width: 7.1rem;height: .9rem;margin:.44rem auto 1.6rem;border-radius: 8px;}
.btn{display:inline-block;width: 6.4rem;height: .9rem;background-color: #f29004;color:white;font-size: .34rem;line-height: .34rem;text-align: center;}
.contact .header .type{display: block;}
.contact .change{position: absolute;top:.44rem}
</style>
