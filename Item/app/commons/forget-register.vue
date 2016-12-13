<template>
<div class="content clear">
	<div class="con">
		<input type="text" placeholder="请输入账号" class="num" value="">
<div class="registerspan"></div>
	</div>
	<div class="inner clear">
		<input type="text" placeholder="请输入验证码" class="num1 fl" value="">
		<input type="button" value="获取验证码" class="num2 fr" v-on:click="spot()">
	</div>
	<div class="conn clear">
		<input type="text" placeholder="请设置密码"  class="num3" value="">
		<hr width="90%" align="center" color="#dbdbdb">
		<input type="text" placeholder="请在确认密码" class="num3" value="">
	</div>

	<div class="middle">
		<p v-on:click="spot()">{{btn}}</p>
	</div>	
</div><!-- content -->	
</template>

<script>
export default {
  props: ['title','btn'],
  methods:{   //标签可调用函数写这里
    spot:function(){
    	this.code = "";
    	var abc = "qwertyuiopasdfghjklzxcvbnm123456789";
    	var aaa = abc.split("");
    	aaa.sort(function(){
    		return Math.random()-0.5;
    	})	
    	for (var i=0;i<4;i++) {
    		this.code+=aaa[i];
    	}
    	console.log(this.code);
    	// e.target.style.letterSpacing="7px"; //改变字符的间隔
     //    e.target.value=this.code;//target 等同于获取调用者的this
     $(".num2").css("letterSpacing","7px");
     $(".num2").val(this.code);
    },
  },
   data (){
   	 return{
   	 	code:"",
   	 }
   },
   ready:function(){ }
}
</script>

<style scoped>
		html,body{ width: 100%; height: 100%; }
		html{ font-size: calc(100vw / 7.5); }	/*font-size:100px*/
		body{ background-color: #f2f2f2; position: absolute; }
		.header{ width: 100%; height: .85rem; position: fixed; top: 0; background-color: #f29004; }
		.content{ width: 100%; position:relative;top:.85rem;}
		.bottom{ width: 100%; height: .98rem; position: fixed; bottom: 0; background-color: orange; }
		.lun{ width: 100%; height: 3rem; background-color: lightblue; }
		.header p{
			text-align: center;
			font-size: .3rem;
			line-height: .82rem;
			color: white;
			margin-top:.05rem;		
		}
		.header .top{
			position: absolute;
			left: .2rem;
		}
		.content .con{
			width: 80%;
			margin: auto;		
		}
		.content .num{
			width: 100%;
			height: .9rem;
			margin-top:.64rem;
			border: 1px solid #dbdbdb;
			border-radius: .08rem;
		}
		.content .inner{
			width: 80%;
			margin: auto;
			margin-top: .23rem;		
		}
		.content .inner .num1{
			width: 65%;
			height: .9rem;
			border: 1px solid #dbdbdb;
			border-radius: .08rem;
		}
		.content .inner .num2{	
			width: 30%;
			height: .9rem;
			border: 1px solid #ea6c6c;
			border-radius: .08rem;
			background: rgb(234,108,108);
			text-align: center;
			padding:0;
			font-size:.3rem;
			color:white;
			/*letter-spacing:0.1rem;*/  /*字符之间的间隔*/
		}
		.content .conn{
			width: 80%;
			margin:auto;
			margin-top:.21rem;
			border: 1px solid #dbdbdb;
			border-radius: .08rem;
			background: white;	
		}
		.content .conn .num3{
			float: left;
			width: 100%;
			height:.88rem;
			border: none;
			margin-top: .1rem;  
		}
		.conn hr{
			margin: 0 auto;
		}
		.content input{
			box-sizing: border-box;
			padding: 0 .2rem;
			font-size: .34rem;
		}		
		.content .middle{
			width:80%;
			height: .9rem;
			margin: auto;
			background: #f29004;
			margin-top: 2.15rem;
			border: 1px solid #f29004;
			border-radius: .08rem;
		}
		.content .middle p{
			text-align: center;
			color: white;
			font-size: .32rem;
			line-height: .9rem;
		}
</style>
