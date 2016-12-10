<template>
	<div class="header mui-bar mui-bar-nav">
		<a class="mui-action-back mui-icon">&lt;</a>
		<h1 class="mui-title">{{ title }}</h1>
		<h1 class="mui-title city">选择城市</h1>
		<a class="mui-icon mui-pull-right">{{Right}}</a>
		<a class="location mui-icon"><span class="changeC">广州市</span> <span class="mui-icon mui-icon-arrowdown"></span></a>
		<a class="mui-icon mui-icon-search"></a>
	</div>
</template>

<script>
export default {
  props: ['title','Right'],
}
</script>

<style scoped>
.header{
	 width: 100%;
	 height: .85rem;
	 position: fixed; 
	 top: 0; 
	 background-color: #f29004;
}
.header a{
	color: white;
	font-size: .3rem;
	position: absolute;
	top: 0;
	
}
.header h1{
	color: white;
	height: 100%;
	line-height: 240%;
	font-size: .39rem;
	font-weight: 100;
	letter-spacing: 2px;
	position: absolute;
	top: 0;
}
.header .city{
	display: none;
}
.header a:nth-child(1){
	left: 5%;
	top: calc(50% - .1rem);
	padding: 0;
	/*line-height: 150%;*/
}
.header a:nth-child(3){
	right: 5%;
	top: calc(50% - .13rem);
	padding: 0;
}
.header .mui-action-back{font-size: .4rem}
.header .mui-pull-right{
	right: 5%;
	top: calc(50% - .1rem);
	padding: 0;
}
.header .type{
	right: 5%;
	font-size: .49rem;
	font-weight: bold;
	top: calc(50% - .23rem);
	padding: 0;
	display: none;
}
.header .location{
	left: 5%;
	padding: 0;
	top: calc(50% - .25rem);
	font-size: .35rem;
	vertical-align: sub;
	display: none;
}
.header .location .mui-icon-arrowdown{
	font-size: .48rem;
	padding: 0 .1rem;
}
.header .mui-icon-search{
	right: 5%;
	font-size: .49rem;
	font-weight: bold;
	top: calc(50% - .23rem);
	padding: 0;
	display: none;
}
</style>
