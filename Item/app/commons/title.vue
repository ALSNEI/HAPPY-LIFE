<template>
	<div class="title header mui-bar mui-bar-nav">
		<a class="mui-action-back mui-icon">&lt;</a>
		<h1 class="mui-title">{{ title }}</h1>
		<a class="mui-icon mui-pull-right">注册</a>		
	</div>
</template>

<script>
export default {
  props: ['title'],
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
.header a:nth-child(1){
	left: 5%;
	top: calc(50% - .1rem);
	padding: 0;
}
.header a:nth-child(3){
	right: 5%;
	top: calc(50% - .13rem);
	padding: 0;
}
</style>
