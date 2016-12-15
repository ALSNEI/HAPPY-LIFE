<template>
  <div id="app">
    <title title="购物车" Right="编辑"></title> 
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

          <div class="defailed2">
            <span style="color:#e76b6b">￥{{obj.money}}</span>
            <div class="jiajian"><img src="img/-.png" class="jian"><span>x{{obj.num}}</span> <img src="img/+.png" class="jia"></div>
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
          <button class="jisuan">{{btn}}<span></span></button>
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
  created: function () {  //创建的时候运行
var _this = this;
this.arr = [];
var ar = this.arr;
this.shuaxin({type:"obtain"},function(data){//获取数据库里的数据
    console.log(data);
    for (var i = 0; i < data.arr.length; i++) {
        ar.push(data.arr[i]);//添加到数组
        if (ar[i].bol=="true") {
          ar[i].bol = true;
        }else {
          ar[i].bol = false;
        }
    }
});//获取数据库里的数据

  },
  ready:function() {  //结构完成后才运行 
    var _arr = this; //保存this
    $(".gouquan").eq(0).on("touchstart",function(){//点击全选
        for (var i=0;i<  _arr.arr.length;i++) {//改变所有的布尔值为选中
           _arr.arr[i].bol = false;
         }
         _arr.abc();//选了多少个
    })
    var pian = true
    var _this = this;
    var bol = true; //判断是否在编辑状态
    $(".header a").eq(1).on("touchend",function(){
      pian = !pian
      if (pian) {  //是否在编辑状态
          $(".header a").eq(1).html("编辑");
          for (var i = 0; i < _arr.arr.length; i++) {
               $(".jian").css("display","none")
               $(".jia").css("display","none")
          }//加减号消失
           _this.btn = "结算"
           bol = true;
      }else {
          for (var i = 0; i < _arr.arr.length; i++) {
               $(".jian").css("display","inline-block");
               $(".jia").css("display","inline-block");
          }//加减号出现
          $(".header a").eq(1).html("完成")
          _this.btn = "删除";
          bol = false;
      }
    })
    $(".jisuan").on("touchend",function(){ //点击结算或删除
      var k = 0;
        if (bol) {  //是结算

        }else {     //是删除
            for (var i=0;i<_this.arr.length;i++) {
                if ( _this.arr[i].bol == false) {
                    $.ajax({  //获取数据库里的数据
                      type:"GET",
                      url:"http://172.16.18.45/shenghuohome/commodity.php",
                      jsonp:"cb",
                      data:{type:"delete",id:_this.arr[i].id},
                      dataType:"jsonp",
                      success:function(data){     
                        console.log(data);
                        // _this.shuaxin();//获取数据库里的数据
                      }
                   })
                    _this.arr.splice(i,1);
                    i--;
                    continue;
                }
            }
            _arr.abc()
        }
    })

function panduan(index) {  //判断减号是否不能按
  if (this2.arr[index].num==1) {
      $(".jian").eq(index).attr("src",require("./img/-2.png"));
  }else {
      $(".jian").eq(index).attr("src",require("./img/-.png"));
  }
}

var _this = this;
window.onload = function(){
    _this.goarr();//点击加减改变单个商品的数量
    _this.abc();//开始的时候选了那些商品
}
  },//结构完成后才运行

  methods:{   //标签可调用函数写这里
spot:function(index){
  var _this = this;
    this.arr[index].bol = !this.arr[index].bol //根据布尔值决定是否选中
    this.shuaxin({type:"bol",id:_this.arr[index].id,bol:_this.arr[index].bol},function(data) {
      console.log(data);
    })
    this.abc();//小勾选
},
goarr:function() {
    var this2 = this;//保存this
    for (var i=0;i<this.arr.length;i++) {
        $(".jian").eq(i).on("touchstart",function(){  //点击减
            $(this).css("transform","scale(0.5)");
        })
        $(".jian").eq(i).on("touchend",function(){  //放手
            $(this).css("transform","scale(1)");
             panduan($(this).index(".jian"))  //改动数量后减号图片是否改变
            if (this2.arr[$(this).index(".jian")].num==1) {return;}//数量等于一后不让减了
            this2.arr[$(this).index(".jian")].num--;//数量减
            this2.abc();  //点击时改变数量计算合计
            this2.shuaxin({type:"num",num:this2.arr[$(this).index(".jian")].num,id:this2.arr[$(this).index(".jian")].id},function(data){
                  console.log(data);
            })//数据库里的num改变
        })

        $(".jia").eq(i).on("touchstart",function(){ //点击加
            $(this).css("transform","scale(0.5)");
        })
        $(".jia").eq(i).on("touchend",function(){   //放手
            $(this).css("transform","scale(1)");
            $(".jian").eq($(this).index(".jia")).attr("src",require("./img/-.png"));//改动数量后减号图片是否改变
            this2.arr[$(this).index(".jia")].num++;//数量加
            this2.abc();//点击时改变数量计算合计
            this2.shuaxin({type:"num",num:this2.arr[$(this).index(".jia")].num,id:this2.arr[$(this).index(".jia")].id},function(data){
                  console.log(data);
            })//数据库里的num改变
        })
        panduan(i)//刚打开页面的时候 减号是否灰色
    }
      function panduan(index) {  //判断减号是否不能按
      if (this2.arr[index].num==1) {
          $(".jian").eq(index).attr("src",require("./img/-2.png"));
      }else {
          $(".jian").eq(index).attr("src",require("./img/-.png"));
      }
    }
},
shuaxin:function(obj,cb){
  $.ajax({  //获取数据库里的数据
      type:"GET",
      url:"http://172.16.18.45/shenghuohome/commodity.php",
      jsonp:"cb",
      data:obj,
      // data:{"name":ar[i].name,"img":ar[i].img,"type":"chong","money":ar[i].money,"bol":ar[i].bol,"num":ar[i].num,"a":ar[i].a},
      dataType:"jsonp",
      success:function(data){
          cb(data)
      }
  })

}
  },
  data () {
    return {      
      arr:[
        {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"420g装",bol:true,num:1},
        {img:require("./img/cui.png"),name:"休闲零食五味园pk脆独立小包装500g",money:10.9,a:"500g",bol:false,num:1},
        {img:require("./img/yagao.png"),name:"牙刷合套装",money:33.3,a:"三件套",bol:false,num:1},
        {img:require("./img/muyu.png"),name:"安安金纯薰衣草沐浴露",money:55,a:"一公斤装",bol:true,num:1},
         {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"420g装",bol:true,num:1},
        {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"420g装",bol:true,num:1},
        {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"420g装",bol:true,num:1},
        {img:require("./img/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"420g装",bol:true,num:1},
      ],     
     abc:function(){   //小勾选
        var total = 0;
        var len = 0;
        this.truelen=0;
        for (var i=0;i<this.arr.length;i++) {
          if (this.arr[i].bol==true) {  //小勾选
               $(".gou").eq(i).children()[0].src=require("./img/gou2.png"); 
           }else {
               $(".gou").eq(i).children()[0].src=require("./img/gou.png"); 
               this.truelen++;//记录勾选了多少个
               total += this.arr[i].money*this.arr[i].num;//算选中的钱
               len += 1; //选中的个数
          }
        }
        this.ABC();
        $(".heji span").eq(1).html("￥"+total.toFixed(2))//一共多少钱
        $(".jisuan span").eq(0).html("（"+len+"）")//一共有多少项
     },
     truelen:0,//记录勾选了多少个
     btn:"结算",
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
.header a:nth-child(1){ display: none; }
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
  position: relative;
  padding-top: .85rem;
  padding-bottom: 2rem;
}
.suan{
  width: 100%;
  height: 0.95rem;
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
  height: 0.35rem;
  left: 7%;
}
.suan .heji{
  width: 3rem;
  height: 0.8rem;
  left: 25%;
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
}
.suan div{
  position: absolute;
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
  width: 0.35rem;
  display: inline-block;
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
.jiajian img{
  width: 14%;
  display: none;
}
.jiajian span{
  padding: 5px;
  text-align: center;
}
.jiajian {
  float: right;
  width: 2.5rem;
  text-align: right;
}
.defailed2{
  width: 70%;
  float: left;
}

</style>
