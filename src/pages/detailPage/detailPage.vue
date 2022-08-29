<template>
	<view class="section">
		<view class="nav-bar">
			<view class="bar active">权益详情</view>
			<view class="bar">已兑换订单</view>
			<view class="bar">已完成订单</view>
		</view>
		<view class="content">
      <view>待兑换权益</view>
      <view>已过期权益</view>
		</view>
    <footerInfo />
	</view>
</template>

<script>
import footerInfo from "@/components/footerInfo.vue";
export default {
	components: {
		footerInfo,
	},
};
</script>

<style lang="less" scoped>
.section {
	background-color: #2f3046;
	.nav-bar {
		display: flex;
		justify-content: space-between;
		border-bottom: 2rpx solid rgba(246, 220, 194, 1);
		.bar {
			width: 33%;
      height: 80rpx;
      line-height: 80rpx;
			font-size: 32rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #9c8376;
			text-align: center;
			&.active {
				border-bottom: 9rpx solid rgba(246, 220, 194, 1);
			}
		}
	}
	.content {
		min-height: 100vh;
		padding-left: 20rpx;
		padding-right: 20rpx;
		padding-top: 100rpx;
	}
}
</style>