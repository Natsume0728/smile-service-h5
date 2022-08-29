<template>
	<view class="content">
		<view class="top-card">
			<view class="title">洗车权益券</view>
			<view class="sub-title">
				权益内容：前往指定服务机构可进行免费洗车一次 <br />
				服务规则：<br />
				1、服务由第三方服务机构提供，使用前请主动联系服务机构确认时间避免服务无法使用。<br />
				2、服务开始前，请您确认本服务是否可进行使用<br />
				3、服务完成后，请出示二维码用户核销<br />
			</view>
		</view>
		<view class="server-title">可兑换服务</view>
		<view class="card-info">
			<view class="info-content">
				<view class="card-info-one">京车会·洗车权益开</view>
				<view class="card-info-two">* 5.0 服务次数 4002</view>
				<view class="card-info-three">兑换后可复制券码至京车汇门店使用</view>
			</view>
			<view class="card-btn">立即兑换</view>
		</view>
		<view class="card-info">
			<view class="info-content">
				<view class="card-info-one">京车会·洗车权益开</view>
				<view class="card-info-two">* 5.0 服务次数 4002</view>
				<view class="card-info-three">兑换后可复制券码至京车汇门店使用</view>
			</view>
			<view class="card-btn">立即兑换</view>
		</view>
		<view class="card-info">
			<view class="info-content">
				<view class="card-info-one">京车会·洗车权益开</view>
				<view class="card-info-two">* 5.0 服务次数 4002</view>
				<view class="card-info-three">兑换后可复制券码至京车汇门店使用</view>
			</view>
			<view class="card-btn">立即兑换</view>
		</view>
		<view class="card-info">
			<view class="info-content">
				<view class="card-info-one">京车会·洗车权益开</view>
				<view class="card-info-two">* 5.0 服务次数 4002</view>
				<view class="card-info-three">兑换后可复制券码至京车汇门店使用</view>
			</view>
			<view class="card-btn">立即兑换</view>
		</view>
    <footerInfo />
	</view>
</template>

<script>
import footerInfo from "@/components/footerInfo.vue";
export default {
  components: {
    footerInfo,
  }
};
</script>

<style lang="less" scoped>
.content {
	min-height: 100vh;
	background-color: #2f3046;
	padding-left: 20rpx;
	padding-right: 20rpx;
	.top-card {
		background-image: url(@/static/exchange-top-card.png);
		background-repeat: no-repeat;
		background-size: 100% 354rpx;
		height: 354rpx;
		box-sizing: border-box;
		padding: 33rpx 35rpx 50rpx;
		.title {
			text-align: center;
			height: 67rpx;
			font-size: 48rpx;
			font-weight: 600;
			color: #3a3a3c;
			line-height: 67rpx;
			background: linear-gradient(270deg, #9c6044 0%, #432a18 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			margin-bottom: 24rpx;
		}
		.sub-title {
			height: 180rpx;
			font-size: 22rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #6f4030;
			line-height: 35rpx;
		}
	}
	.server-title {
		padding: 40rpx 0;
		height: 53rpx;
		font-size: 38rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #ffe4d5;
		line-height: 53rpx;
	}
	.card-info {
		margin-bottom: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 36rpx;
		padding-left: 200rpx;
		height: 272rpx;
		background: #ffffff;
		border-radius: 16rpx;
		background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/52e32e5a6a6f4b198921dcc2a0a083f3_mergeImage.png);
		background-repeat: no-repeat;
		background-size: 142rpx 142rpx;
		background-position: 36rpx 36rpx;
		.info-content {
			height: 142rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.card-info-one {
				height: 45rpx;
				font-size: 32rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #3a3a3c;
				line-height: 45rpx;
			}
			.card-info-two {
				height: 33rpx;
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #757575;
				line-height: 33rpx;
			}
			.card-info-three {
				height: 33rpx;
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #757575;
				line-height: 33rpx;
			}
		}
		.card-btn {
			align-self: flex-end;
			width: 162rpx;
			height: 53rpx;
			background: linear-gradient(90deg, #ecb46f 0%, #e79347 100%);
			border-radius: 27rpx;

			font-size: 24rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #fff1df;
			line-height: 53rpx;
			text-align: center;
		}
	}
}
</style>