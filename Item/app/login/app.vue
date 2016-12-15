<template>
  <div id="app">
    <title title="登陆" Right='注册'></title> 
    <div class="wrap">  
      <div class="content">
        <div class="lun">
          <img src="img/load.png"/>
        </div>
        <div class="con">
          <div class="conone"><span class="mui-icon mui-icon-person"></span><input type="text" name="" id="" value="" placeholder="请输入账号/手机号"/></div>
          <div class="conone"><span class="mui-icon mui-icon-locked"></span><input type="text" name="" id="" value="" placeholder="请输入密码"/></div>        
          <div><a href="forget.html">忘记密码?</a></div>
        </div>
      </div>
    </div>
    <button class="button"  v-on:click="go()">登录</button>
  </div>
</template>

<script>
import Title from '../commons/title'
export default {
  components: {
    Title
  },
  methods:{ //标签可调用函数
    go:function() {
        if ($(".conone input").eq(0).val()=="") {
          alert("账号不能为空");
          return;
        }
        if ($(".conone input").eq(1).val()=="") {
          alert("密码不能为空");
          return;
        }
        var name = $(".conone input").eq(0).val();
        var pwd = $(".conone input").eq(1).val();

        $.ajax({  //登录
            type:"GET",
            url:"http://172.16.18.45/shenghuohome/zhuce.php",
            jsonp:"cb",
            data:{"name":name,"pwd":pwd,"type":"login"},
            dataType:"jsonp",
            success:function(data){
              console.log(data);
              if (data.error==0) {
                location.href = "Appcon.html";//登录成功跳转  
              }else {
                  alert("密码错误")
              }
           }
        })
    }
  },
  ready:function(){
    $(".header a").eq(1).on("touchend",function(){
      console.log(123);
        location.href = "register.html"; //跳转到登录页
    })
  }

}
</script>

<style>
.wrap{
  width: 100%;
  position: relative;
  top: .85rem;
  margin-bottom: 20%;
}
.content{ width: 100%; position: relative }
.lun{ width: 100%; height: 4.5rem; position: relative;}
.con{width: 80%;margin: auto;}
.con div{
  text-align: right;
  font-size: 0.25rem;
  color: #f2bf8f;
}
.con a{color:#F29004;}
.con .conone{
  background: white;
  border-radius: 10px;
  margin-bottom: 15px;
}
.con div{
  text-align: right;
  /*font-size: 0.25rem;*/
  color: #f2bf8f;
}
.con div>span{
  color: #6D6D72;
}
.con input{
  width: 86%;
  border: none;
  margin-bottom: 0;
  border-radius: 10px;
  color: #6D6D72;
}
.content .lun img{
  width: 30%;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.button{
  width: 80%;
  height: 7%;
  color: white;
  font-size: .28rem;
  background: #f29004 ;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}

</style>
