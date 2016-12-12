<template>
  <div id="app">
    <title title="购物车"></title> 
    <div class="wrap">  
        <div class="goods"  v-for="obj in arr" >
          <div class="goodss">
            <div class="gou" v-on:click="spot($index)">
               <img src="img/gou2.png" alt="">
            </div>
            <div class="goodsimg"><img v-bind:src="obj.img" alt=""></div>
          </div>

          <div class="defailed">
            <div>{{obj.name}}</div>
            <div>规格：{{obj.a}}</div>       
          </div>

          <div>
            <span style="color:#e76b6b">￥{{obj.money}}</span>
            <span style="float: right;">x 1</span>
          </div>

        </div>

    </div>

    <div class="suan">
       <div class="gou gouquan">
           <img src="img/gou2.png" alt="">
        </div>
        <div class="xuan">全选</div>
        <div class="heji">
          <span>合计：</span><span style="color: #ed601b"></span> 
          <p>(不含运费)</p>
        </div>
          <!-- <div class="jisuan">结算<span>（2）</span></div> -->
          <button class="jisuan">结算<span></span></button>
    </div>


    <div class="bottom"></div>
  </div>
</template>

<script>
import Title from '../commons/title'
export default {
  components: {
    Title
  },
  ready:function() {
    this.abc()//开始的时候选了那些商品
    var _arr = this; //保存this
    $(".gouquan").eq(0).on("touchstart",function(){//点击全选
        for (var i=0;i<  _arr.arr.length;i++) {//改变所有的布尔值为选中
           _arr.arr[i].bol = false;
         }
         _arr.abc();//选了多少个
         _arr.ABC();//是否触发全选按钮
    })

  },
  methods:{   //标签可调用函数写这里
    spot:function(index){
        this.arr[index].bol = !this.arr[index].bol //根据布尔值决定是否选中
        this.abc();//小勾选
    }
  },

  data () {
    return {      
      arr:[
        {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"1合6片",bol:true},
        {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"1合6片",bol:false},
        {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"1合6片",bol:false},
        {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"1合6片",bol:true},
         {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"1合6片",bol:true},
        {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"1合6片",bol:true},
        {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"1合6片",bol:true},
        {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"1合6片",bol:true},
      ],     
     abc:function(){   //小勾选
        var total = 0;
        var len = 0;
        this.truelen=0;
        for (var i=0;i<this.arr.length;i++) {
          if (this.arr[i].bol==false) { //算钱
            total += this.arr[i].money; 
            len += 1; 
          }       
          if (this.arr[i].bol) {  //小勾选
               $(".gou").eq(i).children()[0].src=require("./img/gou2.png"); 
           }else {
               $(".gou").eq(i).children()[0].src=require("./img/gou.png"); 
               this.truelen++;//记录勾选了多少个
          }
        }
        this.ABC();
        $(".heji span").eq(1).html("￥"+total)
        $(".jisuan span").eq(0).html("（"+len+"）")
        console.log(this.truelen);
     },
     truelen:0,
     ABC:function(){     //全选按钮   
        if (this.truelen==this.arr.length) {
           $(".gouquan").eq(0).children()[0].src=require("./img/gou.png");
        }else {
           $(".gouquan").eq(0).children()[0].src=require("./img/gou2.png");
        }
     },
    }
  }
}
</script>

<style>
.header a{ display: none; }

#app{
  width: 100%;
  height: 100%;
}
.bottom{
  background-color: orange;
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
}
.wrap{
  width: 100%;
  /*height: 85%;*/
  position: relative;
  padding-top: .85rem;
  background-color: #fff;
  padding-bottom: 2rem;
}
.suan{
  width: 100%;
  height: 0.95rem;
  /*border: 1px solid #ddd;*/
  font-size: 0.3rem;
  position: fixed;
  bottom: 1rem;
  right: 0;
  left: 0;
  margin: auto;
  padding: 0 0.1rem;
  background-color: #ddd;
}
.suan img{
  width: 100%;
}
.suan .gou{
  width: 0.35rem;
  height: 0.35rem;
}
.suan .xuan{
  /*width: 0.6rem;*/
  height: 0.35rem;
  left: 7%;
}
.suan .heji{
  width: 3rem;
  height: 0.8rem;
  left: 25%;
  /*top: 50%*/
}
.suan .heji span{
  display: inline-block;
  position: absolute;
  top: 0;

}
.suan .heji span:nth-child(2){
  left: 30%;
  width: 2rem;
  overflow: hidden;
   text-overflow: ellipsis;  /*隐藏部分变成点点...*/
}
.suan .heji p{
  font-size: 0.2rem;
  position: absolute;
  bottom: 0;
}
.suan .jisuan{
  width: 2.5rem;
  position: absolute;
  top: 0;
  bottom: 0;
  height: 0.7rem;
  right: 2%;
  background-color: #ee4147;
  margin: auto;
  color: #fff;
  font-size: 0.32rem;
  /*padding: 0 0.3rem 0 0.6rem;*/
}
.suan div{
 /* display: inline-block;
  line-height: 300%;
  height: 50px;*/
  position: absolute;
 /* left: 0;
  right: 0;*/
  top: 0;
  bottom: 0;
  margin: auto;
}

.goods{
  width: 100%;
  padding: 0.3rem 0.3rem;
  overflow: hidden;
  margin: auto;
  font-size: 0.3rem;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.goodss{
  float: left;
  width: 30%;
}
.goods img{
  width: 100%;
}
.gou{
  /*width: 17%;*/
  width: 0.35rem;
   /*height: 0.35rem;*/
  display: inline-block;
/*  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 50%;
  background-image: url(img/gou.png);
  background-size: 100% 100%;*/
}

.goodsimg{
  width: 70%;
  display: inline-block;
}
.defailed{
  width: 60%;
  float: left;
  line-height: 180%;
}
.defailed div{
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /*隐藏部分变成点点...*/
}









</style>
