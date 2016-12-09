

<template>
<div id="app">
	<title title="会员杂锦"></title>
	<div class="wrap">
		<div class="header"></div><!-- header -->
		<div class="content">
			
			<div class="lun">
				<div class="dong">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div class="dian"></div>
			</div><!-- lun -->

			<div class="con">
				<div class="product" v-for="obj in arr">
			  		<div class="products"><img src="img/hetao.jpg"></div>
					<p>{{obj.p}}</p>
					<span class="span1">{{obj.span1}}</span>
					<span class="span2">原价:<span style="text-decoration:line-through">{{obj.span2}}</span></span>

			  	</div>
			</div><!-- con -->
		</div><!-- content -->
		<div class="bottom"></div><!-- bottom -->
	</div><!-- wrap -->
</div>
	

</template>


<script>
import Title from '../commons/title'
export default {    // export 提供外部引入
  data () {
    return {      
      arr:[
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋1",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋2",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋3",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋4",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋5",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋6",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋7",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋8",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋9",span1:"￥29.5",span2:"￥42.5"},
      	{img:"img/hetao.jpg",p:"坚果特产山核桃奶油味碧根果210gx2袋10",span1:"￥29.5",span2:"￥42.5"}
      ]
    }
  }
}
</script>


<style scoped>
html,body{ width: 100%; height: 100%; }
html{ font-size: calc(100vw / 7.5); }	/*font-size:l;*/
body{ background-color: #f2f2f2; position: absolute; top: .85rem; }
.header{ width: 100%; height: .85rem; position: fixed; top: 0; background-color: lightgreen; z-index: 1; }
.content{ width: 100%; position: relative; overflow: hidden; }
.bottom{ width: 100%; height: .98rem; position: fixed; bottom: 0; background-color: orange; }
.lun{ width: 400%; height: 3rem; background-color: lightblue; position: relative; top: .85rem; }
.con{ margin: .2rem; position: relative; top: .85rem; /*bottom: .98rem;*/ overflow: hidden; }
.con .product{ width: 3.48rem; height: 4.89rem; float: left; background-color: white; margin-bottom: .15rem; overflow: hidden; position: relative;  }
.con .product:nth-child(2n-1){ margin-right: .14rem; }


.products{ width: 3.48rem; height: 3.48rem; }
.products img{ width: 100%; }
.product p{ font-size: .3rem; color: #1a1a1a; width: 90%; padding: 5%; line-height: .34rem; }
.span1{ font-size: .28rem; color: #de0000; position: absolute; bottom: 1%; left: 5%; }
.span2{ font-size: .24rem; color: #8a8a8a; position: absolute; bottom: 1%; left: 35%; }


.lun .dong div{ width: 25%; height: 3rem; float: left; }
.lun .dong div:nth-child(1){ background-color: red; }
.lun .dong div:nth-child(2){ background-color: skyblue; }
.lun .dong div:nth-child(3){ background-color: lightgreen; }
.lun .dong div:nth-child(4){ background-color: orange; }
</style>





