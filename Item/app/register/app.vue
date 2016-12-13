<template>
  <div id="app">
    <title title="注册"></title>
    <register btn="注册"></register>
  </div>
</template>

<script>
import Title from '../commons/title';
import Register from '../commons/forget-register';
export default {
  components: {
    Title,
    Register
  },
  ready:function(){
  var name = "";
  var pwd = "";
  		$(".middle p").on("touchend",function(){ //点击注册
  			name = $(".num")[0].value;
  			pwd = $(".num3")[0].value;
  			console.log(name);
  			console.log(pwd);
			if ($(".num")[0].value==""||$(".num1")[0].value==""||$(".num3")[0].value=="") {
	    		alert("请填写账号或密码");
	    		return;
	    	}else {
	    		if ($(".num1").val()!=$(".num2").val()) {
	    			alert("验证码输入错误");
	    			return;
	    		}else if ($(".num3").eq(0).val()!=$(".num3").eq(1).val()){
					alert("两次密码不相同");
					return;
	    		}  		
	    	}
	   		$.ajax({  //注册
	   			type:"GET",
	   			url:"http://172.16.18.45/shenghuohome/zhuce.php",
	   			jsonp:"cb",
	   			data:{"name":name,"pwd":pwd,"type":"add"},
	   			dataType:"jsonp",
	   			success:function(data){
	   				console.log(data);
	   				if (data.error==1) {
	   					location.href = "Appcon.html";//注册成功跳转	
	   				}
	   			}
	   		})
  		})
  		$(".num").on("blur",function(){ //焦点离开
  			console.log(1)
  			name = $(".num")[0].value;
  			$.ajax({  //检测账号是否存在
	   			type:"GET",
	   			url:"http://172.16.18.45/shenghuohome/zhuce.php",
	   			jsonp:"cb",
	   			data:{"name":name,"type":"check"},
	   			dataType:"jsonp",
	   			success:function(data){
	   				console.log(data);
	   				$(".registerspan").html(data.msg);
	   				if (data.error==1) {
	   					$(".registerspan").css("color","green");
	   				}else {
	   					$(".registerspan").css("color","red");
	   				}
	   			}
	   		})
  		})

  		$(".mui-action-back").on("touchend",function(){
  			location.href = "login.html"; //跳转到登录页
  		})


   }, 
}
</script>
  
<style>
.header a:nth-child(3){
  display: none;
}
.registerspan{
	font-size: 0.3rem;
	font-weight: 900;
	text-indent:  1em;  /*首行缩进  em父级的文字大小      */
}

</style>
