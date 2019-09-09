<template>
	<div class="TabBar">
		<van-tabbar v-model="active">
			<van-tabbar-item
				replace
				to="/home"
				icon="home-o"
			>
				首页
			</van-tabbar-item>
			<van-tabbar-item
				replace
				to="/cart"
				icon="cart-o"
			>
				购物车
			</van-tabbar-item>
			<van-tabbar-item
				replace
				to="/me"
				icon="friends-o"
			>
				个人中心
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default{
		name:"TabBar",
		data() {
            return {
                active: 0
            }
        } 
	}
</script>

<style>
	
</style>