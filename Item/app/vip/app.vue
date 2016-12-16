<template>
  <div id="app" class="app">
    <title title="升级会员" Right='充值'></title> 
    <div class="wrap">  
      <div class="explain">
        <p class="level">会员等级说明</p>
        <p class="level">快办会员只要9毛8,只要9毛8,只要9毛8</p>
        <p class="level">快办会员只要9毛8,只要9毛8</p>
      
      </div>
      <div class="tal">
        <div class="cont">
           <p class="mov">VIP会员</p>
          <ul > 
            <li>1.说明文字</li>
            <li>2.说明问题</li>
            <li>3.说明问题</li>
          </ul>
       </div> 
      </div>

      <div class="tal">
        <div class="cont">
           <p class="mov">股东会员</p>
          <ul > 
            <li>1.说明文字</li>
            <li>2.说明问题</li>
            <li>3.说明问题</li>
          </ul>
       </div>  
      </div>

    </div>
   
  </div>

<!-- 第二个页面 -->
  <div id="app app1" class="app1">
    <title title="订单详情"></title> 
    <div class="wap clear">
      <div class="shop clear">
        <p class="sho">购买商品</p>
        <p class="pay">待付款</p>
      </div>
      <div class="dia clear">
        <div class="die"><img src="img/die.png" ></div>
        <p class="up">升级成为VIP会员</p>
        <p class="year">期限为一年</p>
        <p class="mon">￥100</p>
      </div>  
    </div>
    <div class="put">
      <input type="button" value="立即支付" class="boom">
    </div>
  </div>

  <!-- 第三个页面-->
   <div id="app app2" class="app2">
    <title title="支付成功"></title> 
    <div class="web">
        <div class="inner">
          <div class="yu"><img src="img/yu.png"></div>
          <p class="be">恭喜您成为VIP会员！</p>
          <input type="button" value="继续购物" class="go">
        </div>  
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
    $(".mui-action-back").on("click",function(){
         $(".mui-action-back").attr("href","vip.html")
    })
    $(".mui-pull-right").on("click",function(){
        $(".app1").css("display","block")
        $(".app").css("display","none")
    })
    $(".boom").on("click",function(){
      $(".app2").css("display","block")
      $(".app1").css("display","none")
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
.explain{
  padding: .36rem 0 0 .48rem;
  
}
.explain .level{
  font-size: .30rem;
  color: #808080;
}
.tal{
  
  margin: .96rem .20rem 0 .20rem;
  border-top: 1px solid #dbdbdb;
}
.tal .cont{
  text-align: center;
 
}
.tal ul li{
  font-size: .28rem;
  line-height: .44rem;
  color:#333333
}
.tal  .mov{
   width:2.12rem;
  
   margin: auto;
   position: relative;
   bottom:.2rem;
   background: #f2f2f2;
   color:#808080; 
   font-size:.30rem;
   line-height:.30rem;   
}
#app{
  /*display: none;*/
}
.wap{
  background: white;
  position: relative;
  top: .85rem;
}
.wap .shop{
  margin: .26rem .20rem 0 .20rem;
  font-size: .24rem;
  line-height:.78rem;
  color: #959595;
  border-bottom: 1px solid #dbdbdb;
}
.sho{
  float: left;
}
.pay{
  float: right;
}
.dia{
  padding:.25rem .20rem .27rem .20rem;
}
.dia .die{
  width: 1.40rem;
  padding: .30rem .18rem;
  margin-right: .18rem;
  border: 1px solid #dbdbdb;
  float: left;
}
.dia .die img{
  width: 100%;

}
.dia .up{
  font-size:.28rem;
  line-height:.50rem;
  color: #1a1a1a;
}
.dia .year{
  font-size:.24rem;
  line-height: .50rem;
  color: #757575;
}
.dia .mon{
  font-size: .22rem;
  line-height: .50rem;
  color: red;
}
.put{
  position: relative;
  top: .85rem;
  text-align: center;
}
.put .boom{
  margin-top: .44rem;
  width: 6.40rem;
  height: .90rem;
  border: 1px solid #f29004;
  border-radius: 5px;
  background:#f29004;
  color: white;
  font-size: .30rem;

}
/*第三个页面*/
.app1{
  display:none;
}
.web{
  position: relative;
  top:.85rem;
}
.inner{
  text-align:center;
}
.inner .yu{

  width:1.80rem;
  height: 1.80rem;
  margin: auto;
  margin-top:1.12rem;
  margin-bottom:.56rem;
  /*padding:1.12rem 0 .56rem 0;*/
}
.inner .yu img{
  width: 100%;
}
.inner .be{
  font-size: .34rem;
  color: #333333;
  margin-bottom:1.70rem;
}
.inner .go{
  width:2.54rem;
  height:.70rem;
  background:#ee4147;
  font-size:.32rem;
  border:1px solid #ee4147;
  border-radius:5px;
  color:white;
}
.app2{
  display: none;
}
</style>
