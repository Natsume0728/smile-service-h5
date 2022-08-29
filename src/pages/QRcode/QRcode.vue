<template>
	<view class="content">
		<view class="card-outside">
			<view class="title">洗车权益券</view>
			<view class="info">
				权益内容：前往指定服务机构可进行免费洗车一次<br />
				服务规则：<br />
				1、服务由第三方服务机构提供，使用前请主动联系服务机构确认时间避免服务无法使用。<br />
				2、服务开始前，请您确认本服务是否可进行使用<br />
				3、服务完成后，请出示二维码用户核销
			</view>
			<view class="QR-box">
        <view>
          <view>有效期：2022.06.06-2022.07.05</view>
          <view>券码：XCFW-2021-052231</view>
        </view>
				<view class="long-press-copy">长按复制</view>
			</view>
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
.content {
	min-height: 100vh;
	background-color: #2f3046;
	padding-left: 20rpx;
	padding-right: 20rpx;
	padding-top: 100rpx;
	.card-outside {
		padding: 38rpx 35rpx;
		height: 1154rpx;
		background: #ffffff;
		border-radius: 22rpx;
		.title {
			text-align: center;
			height: 67rpx;
			font-size: 48rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #3a3a3c;
			line-height: 67rpx;
		}
		.info {
			box-sizing: border-box;
			padding: 40rpx 0;
			height: 300rpx;
			font-size: 22rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #3a3a3c;
			line-height: 1.5;
		}
		.QR-box {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
			padding: 30rpx;
      padding-top: 50rpx;
			margin: 0 auto;
			width: 543rpx;
			height: 710rpx;
			background: #ffffff;
			border: 2rpx solid #d6d6d6;
			background-image: url(@/static/QRcode.png);
			background-size: 482rpx 459rpx;
			background-repeat: no-repeat;
			background-position: center;
			.long-press-copy {
        padding: 50rpx 0;
				height: 50rpx;
				font-size: 36rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #474545;
				line-height: 50rpx;
			}
		}
	}
}
</style>