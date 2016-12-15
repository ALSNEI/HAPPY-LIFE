<template>
  <div id="app" class="app1">
    <title title="更多"></title> 
    <div class="wrap">  
      <div class="content">
        <ul><li><a><span>关于我们</span><img src="img/left.jpg"></a></li></ul>
        <ul><li><a><span>帮组中心</span><img src="img/left.jpg"></a></li></ul>
        <ul><li><a><span>意见反馈</span><img src="img/left.jpg"></a></li></ul>
        <ul><li><a><span>版本更新</span><span class="tex">5.02</span></a></li></ul>

      </div>
    </div>
  </div>
  <!-- 第二个页面 -->
  <div id="app" class="app2">
    <title title="关于我们"></title> 
    <div class="rap rap2">  
        <div class="us">关于我们</div>
    </div>
  </div>

<!-- 第三个页面 -->
  <div id="app" class="app3">
    <title title="帮助中心"></title> 
        <div class="hip clear">  
          <div class="middle ">
            <img src="img/ke.png">
            <p class="week">周一至周五&nbsp&nbsp8：00-6：00</p>
            <p class="nmber">4000-8888-08</p>
            <input type="button" value="一键拨打" class="call"> 
          </div>
           <p class="ask">常见问题</p>
      </div>
      <div class="foot">
        <ul><li>1.如何修改收货地址 <img src="img/left.jpg"></li></ul>
        <ul><li>2.如何修改密码 <img src="img/left.jpg"></li></ul>
        <ul><li>3.如何退款 <img src="img/left.jpg"></li></ul>
      </div> 
  </div>

  <!-- 第四个页面 -->
  <div id="app" class="app4">
    <title title="常见问题"></title> 
    <div class="rap">  
        <div class="fix">如何修改收货地址</div>
        <div class="lone">
          <p>答：在个人中心-送货地址进入可修改详细地址</p>
        </div>
    </div>
  </div>

  <!-- 第五个页面 -->
  <div id="app" class="app5">
    <title title="意见反馈"></title> 
    <div class="rap">  
        <div class="empty"></div>
        <input type="button" value="确认" class="confirm">
    </div>
  </div>

</template>

<script>
import Title from '../commons/title'
export default {
  components: {
    Title
  },


  ready:function(){
      $(".content ul").eq(0).on("click",function(){
          $(".app2").css("display","block");
         
      })

      $(".content ul").eq(1).on("click",function(){
          $(".app3").css("display","block");
          
      })

       $(".content ul").eq(2).on("click",function(){
          $(".app4").css("display","block");
          
      })


         $(".content ul").eq(3).on("click",function(){
          $(".app5").css("display","block");
          
      })

      $(".mui-action-back").on("click",function(){
         $(".mui-action-back").attr("href","more.html")
      })


     


  }
}



</script>

<style>
#app{
    position: absolute;
    width: 100%;

}
#app .header{
  position: absolute;
}
.app1{
  display: block;
}
.app2{

  display: none;
  animation: move 1s ease-in-out ;
}

.rap{
  position: relative;
  top: .85rem;
  width:7.50rem;
  height: 12.08rem;
  background:#f2f2f2;
}
.rap .us{
  padding:.44rem 0 0 .20rem;
  color: #333333;
}
.header .mui-pull-right{
  display: none;
}
/*
  第三个页面
*/
.app3{
  display: none;
  animation: move 1s ease-in-out ;
}
.hip{
  width: 7.5rem;
  margin-bottom: .85rem;
  position: relative;
  top: .85rem;
  border-bottom: 1px solid #dbdbdb;
  background: #f2f2f2;
}
.hip .middle{
  padding-top: .88rem;
  text-align: center;
  
}
.hip .middle .week{
  font-size: .20rem;
  margin:.24rem 0 .14rem 0;
}
.hip .middle .nmber{
  font-size:.28rem;
  font-weight: bold;
  color: #898989;

}
.hip .middle .call{
  background: #5fb9ff url(img/t.png)  no-repeat;
  background-size: 20px 20px;
  background-position:5px 5px;

  width: 1.80rem;
  height: .6rem;
  font-size: .22rem;
  color: white;
 
  margin: .34rem 0 1.48rem 0;
  padding: 0;
}
.hip .ask{
  
 padding: .20rem;

}

.foot ul li{
  background: white;
  font-size:.30rem;
  line-height:.90rem;
  border-bottom: 1px solid #dbdbdb;
  padding: 0 .20rem 0 .20rem;
  color: #515151;
}
.foot ul li img{
  width: .16rem;
  height: .24rem;
  margin-top:.33rem;

  float: right;
}
/*
  第四个页面
*/
 .app4{
  display: none;
  animation: move 1s ease-in-out ;
 }
.rap .fix{
  font-size: .28rem;
  color: #6a6a6a;
  padding: .36rem 0 .34rem .20rem;

}
.rap .lone{
  margin-left: .20rem;
}
/*
  第五个页面
*/
.app5{
  display: none;
  animation: move 1s ease-in-out ;
}
.rap .empty{
  width: 7.5rem;
  height: 3.98rem;
  background: white;
}
.rap .confirm{
  width: 6.42rem;
  height: .88rem;
  margin: auto;
  margin-top:.74rem;
  display: block;
  background: #f29004;
  color: white;
}
.wrap{

  position: relative;
  top: .85rem;
  
}
.wrap .content{
   margin-top: .22rem;
  width: 100%;
   border-top: 1px solid #dbdbdb;
   background: white;
   font-size: .28rem;
   line-height:.88rem;
}

.content ul li span{
  color: #7a7a7a;

}
.content ul li img{
  width: .30rem;
  height: .30rem;
  margin-top: .30rem;
  float: right;
}
.content ul li{
  border-bottom: 1px solid #dbdbdb;
  padding:0 .20rem 0 .20rem;
}
.content ul .tex{
  font-size: .24rem;
  line-height: .88rem;
  float: right;
  color: #333333;
}
@keyframes move{
  0%{
    left:7.5rem;

  }

  100%{
    left: 0rem;
  }

}

</style>
