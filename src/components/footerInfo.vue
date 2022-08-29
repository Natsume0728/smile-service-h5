<template>
	<view class="footer">
		<text class="left">服务协议</text>
		<text class="mid">|</text>
		<text class="right">建议反馈</text>
	</view>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
	.footer {
		background-color: #2f3046;
		height: 100rpx;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		font-family: PingFangSC-Regular, PingFang SC;
		color: #a3a3a3;
		font-size: 28rpx;
		.mid {
			padding: 0 25rpx;
		}
	}
</style>