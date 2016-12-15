<template>
  <div id="app">
    <title title="确认下单"></title> 
    <div class="wrap">  
      <div class="content">
        <div class="add">
          <p class="Clo"><span class="name"></span><span class="numb"></span></p>
          <p class="Clo"><span class="Mo">[默认]</span><span class="ad"></span><span class="arr">></span></p>
         
        </div>
        <div class="shop">

            <div class="buy">购买商品</div>

              <div class="cont">
      


                 
             <!--    <div class="clear">
                  <div class="food"><img ></div>
                  <div class="tex clear">
                        <p class="nut"></p>
                        <p><span>规格:</span><span class="mode"></span></p>
                        <p ><span class="money"></span><span class="pro">x1</span></p>
                   </div>
                </div>  -->
               <!--  <div class="clear">
                  <div class="food "><img src="img/q.jpg"></div>
                  <div class="tex clear">
                        <p class="nut"></p>
                        <p><span>规格:</span><span class="mode"></span></p>
                        <p ><span class="money"></span><span class="pro">x1</span></p>
                   </div>
                </div> 
 -->





              </div>

              <div class="cost clear">
                  <p class="use">运费:</p>
                  <p class="gol">￥10</p>
              </div>

             <div class="cost1">
                <p class="use">备注:</p>
                
             </div>
        
        </div>
        <div class="play">
          
            <p class="Wy">支付方式</p>
          
          
          <ul>
            <li><img src="img/m.jpg" class="ico1"><span class="pur">我的钱包</span><img src="img/y.jpg" class="Rig"></li>
            <li><img src="img/x.jpg" class="ico1"><span class="pur">支付宝</span><img src="img/y.jpg" class="Rig"></li>
            <li class="last"><img src="img/w.jpg" class="ico1"><span class="pur">微信支付</span><img src="img/y.jpg" class="Rig"></li>
          
          </ul>
        </div>
        
      </div>
   
      </div>
      <div class="boom">
          <div class="total"><span class="count">合计</span><span class="sum">￥50</span></div>
          <input type="button" value="立即支付" class="once">
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
    var num=[{
      name:"刘晓心",
      phone:13562021254,
      address:"广州市天河区东圃时代TIT广场"
     },
     {
      name:"刘心",
      phone:13562021254,
      address:"广州市天河区东圃时代TIT广场"
     }

     ]



      
    var arr=[{img:require("./img/q.jpg"),
            name:'坚果特产山核桃奶油味碧根',
            mode:"一盒6片",
            money:29.5},
            {img:require("./img/q.jpg"),
            name:'坚果特产山核桃奶油味碧根',
            mode:"一盒6片",
            money:29.5},
            {img:require("./img/q.jpg"),
            name:'坚果特产山核桃奶油味碧根',
            mode:"一盒6片",
            money:29.5}
            ]
    // console.log(num[0].arr[0].img)


     for(var m in arr){
       var string=" <div class='clear'><div class='food'><img ></div><div class='tex clear'><p class='nut'></p><p><span>规格:</span><span class='mode'></span></p><p ><span class='money'></span><span class='pro'>x"+1+"</span></p></div></div> ";
       $(".cont").append(string)
     }

      for(var m in arr){
        $(".food").eq(m).find("img")[0].src=arr[m].img;
        $(".nut").eq(m).html(arr[m].name);
        $(".mode").eq(m).html(arr[m].mode);
        $(".money").eq(m).html("￥"+arr[m].money);

        arr.money
     }



    $(".name").html(num[0].name);
    $(".numb").html(num[0].phone);
    $(".ad").html(num[0].address);





    

    var a=0;
    for(var i=0;i<3;i++){
      $(".Rig")[i].index=i;

       $(".Rig")[i].addEventListener("touchend",function(){
        for(var i=0;i<3;i++){
          $(".Rig")[i].src=require("./img/y.jpg");
        }
        this.src=require("./img/g.jpg");
        a=this.index;

      })
    }
   
    console.log($(".Rig"));
  }

 
}


</script>

<style>
.header .mui-pull-right {
  display: none;
}
.wrap{
  width: 100%;
  margin-bottom: 1.85rem;
  position: relative;
  top: .85rem;
 /* margin-bottom: 20%;*/
}
.content{ width: 100%; position: relative }
.content .add {
  padding: 0 .2rem 0 .2rem;
  margin: .1rem 0 .2rem 0;
  font-size: .26rem;
  line-height: .67rem;
  background:white;
  position: relative;
 


}
.content .add .Clo {
  color: black;
  font-size: .30rem;
  line-height: .80rem;
}
.content .add .numb{
  margin-left: .33rem;
}
.content .add .Mo{
  color: #f29004;
  margin-right:.28rem;
}
.content .arr {
  position: absolute;
  font-size: .38rem;
  top: .2rem;
  right: .2rem;
  color: #cccccc;
}
.content .shop{
  width: 7.50rem;
 
  margin-top: .20rem;
  padding-left: .20rem;
  padding-right: .18rem;
  border-top: 1px solid #dbdbdb;
  border-bottom:1px solid #dbdbdb;
  background: white;
}
.content .shop .buy{
  font-size: .26rem;
  line-height: .76rem;
  color: #959595;
  border-bottom: 1px solid #dbdbdb;
}
.content .cont{
  margin: .24rem 0 0 0;
  padding-bottom: .26rem;
  border-bottom: 1px solid #dbdbdb;
  overflow: hidden;
}
.content .food{
  width: 1.40rem;
  
  border: 1px solid #dbdbdb;
  float: left;
}
.content .food img{
  width: 100%;

}
.content .cont .tex{
  float: left;
  margin-left:.14rem;

}
.content .cont{
  position: relative;
}
.cont .tex .nut{
  font-size: .28rem;
  line-height: .47rem;
  color: black;

}
.cont .tex .mode{
   margin-right:.22rem;
   font-size: .24rem;
   line-height: .47rem;
}
.cont .tex .money{
  color: red;
  font-size: .22rem;
  line-height: .47rem;
}
.cont .tex .pro{
  font-size: .18rem;
  line-height: .47rem;
  color: #404040;
  position: absolute;
  right: 0;
  
}
.shop .cost{
  
  font-size:.26rem;
  line-height: .98rem;
  
  border-bottom: 1px solid #dbdbdb;

}
 .cost .gol{
  float: right;
  color:#666666;
 
}
.cost .use{
  float: left;
}
.shop .cost1{

  font-size:.26rem;
  line-height: .98rem;
  border-top: none;
  border-bottom: none;
 
}
.play{
  padding: 0 .18rem 0 .20rem;
  margin-top:.20rem;
  width: 7.50rem;
  background: white;
  border-bottom: 1px solid #dbdbdb;

  
}
.play .Wy{
  font-size: .28rem;
  line-height: .75rem;
  border-bottom: 1px solid #dbdbdb;
  


}
.play ul .Rig{
  width: .35rem;
  margin: .34rem 0 .30rem 0; 
  float: right;
}
.play ul li{
  border-bottom: 1px solid #dbdbdb;
}
.play ul li .pur{

  font-size: .28rem;
  line-height: 1.0rem;
}
.play ul li .ico1{
  width: .60rem;
  
  margin:.20rem .30rem .18rem 0; 
  

}
.play ul .last{
  border-bottom:none;
}
.boom{
 /* margin-top:.70rem;*/
  width: 100%;
  position: fixed;
  bottom:0;
  background: white;
 
  border-top: 1px solid #dbdbdb;
}
.boom .total{
float: left;
  margin:.40rem 0 .40rem .40rem;
}
.boom .once{
  float: right;
  width: 2.56rem;
  height: .70rem;
  background: #ee4147;
  color: white;
  margin: .20rem .18rem .20rem 0;
  border:1px solid white;
  border-radius: 5px;
}
.boom .total span{
  font-size: .30rem;
  line-height: .110rem;
  color: #343434;
}
.boom .total .sum{
  color: red;
  margin-left: .26rem;
}
</style>
