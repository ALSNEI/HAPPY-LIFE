<template>
	<div id="app">
		<title title="一键客服"></title>
		<form method="get">
			<div>
				<p >联系信息</p>
				<div class="message">
					<input type="text" pattern="[a-zA-Z]{1,20}|[\u4e00-\u9fa5]{1,10}" placeholder="姓名:">
					<input type="text" placeholder="联系方式:">
				</div>
			</div>
			<div>
				<p>需要类型</p>
				<input type="text" placeholder="输入商业合作/商品入驻/广告加盟等需求类型">
			</div>
			<div>
				<p>需要描述</p>
				<textarea style="height: 3.1rem" placeholder="请根据需求类型，输入详细的合作模式（如：商 品入驻，请注明具体商品、数量等），平台会在 第一时间与您进行沟通联系。"></textarea>
			</div>
			<div class="wranning">
				<span class="warn"><img src="img/warn.png" alt="" style="width: .4rem"></span>
				需求提交后，平台会在第一时间与您联系。
			</div>
			<button >提交</button>
		</form>
	</div>
</template>
<script>
import Title from '../commons/title';
export default{
	components: {
		Title
	},
}
</script>
<style>
form{padding: .85rem .35rem 0rem;text-align: center;}
div{text-align: left; position: relative;}
p{font-size: .28rem;color: #727272;margin: .3rem 0rem .2rem}
input{border-radius: 8px;border:1px solid #d9d9d9;}
button{width: 6.4rem;height: .9rem;background-color: #f29004;color: white;font-size: .34rem}
.message input{margin: 0;border:0px;border-radius: 8px}
.message input:nth-child(1) {border-bottom-right-radius:0;border-bottom-left-radius:0;}
.message input:nth-child(2){border-top-right-radius:0;border-top-left-radius:0;}
.message{border:1px solid #d9d9d9;border-radius: 8px;position: relative;}
.message:before{content: " ";width: 6.3rem;height: 2px; background-color: #C7C7C7;position: absolute; top:50%;margin: auto; left: 0;right: 0;z-index: 1}
div input{margin-bottom: 0!important;font-size: .3rem;line-height: .3rem}
textarea{line-height: .6rem; font-size: .3rem ;padding:.2rem;}
.wranning{margin: .2rem 0rem 1rem;font-size: .3rem;color: #727272}
</style>