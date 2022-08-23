<template>
  <view class="content">
    <view class="card">
      <view class="first-line">
        <view class="avatar"></view>
        <view class="log-info">
          <view class="first">暂未登陆</view>
          <view class="second">登陆后即可验证领取服务权益</view>
        </view>
        <view class="log-btn">立即登陆</view>
      </view>
      <view class="second-line">累计使用 ></view>
      <view class="third-line">登陆后查看</view>
    </view>
    <view class="main">
      <view class="first-line">
        <text class="left">精选车主权益</text>
        <text class="mid">|</text>
        <text class="right">为您提供最优服务</text>
      </view>
      <view class="second-line">
        <view class="icon-container">
          <view
            class="img-container"
            style="
              background-image: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc7ad3119f8e562efb59973a3c6ee49807c0201c7392bd3e5ddd62ad38a97e094);
            "
          ></view>
          <view class="icon-title">权益查看</view>
        </view>
        <view class="icon-container">
          <view
            class="img-container"
            style="
              background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/25c28980a9fa484bb5d68b650592d887_mergeImage.png);
              background-size: 50rpx 51rpx;
            "
          ></view>
          <view class="icon-title">权益兑换</view>
        </view>
        <view class="icon-container">
          <view
            class="img-container"
            style="
              background-image: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng29ba0081dba490bc9d255d901da1fca99c170a4d734bad94e7bf9f655a5161ab);
              background-size: 49rpx 49rpx;
            "
          ></view>
          <view class="icon-title">权益使用</view>
        </view>
        <view class="icon-container">
          <view
            class="img-container"
            style="
              background-image: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng97bce78978d7c512e77b044ac2f474ea819b7cc98e37c7906cabb6ca5c57d8b7);
              background-size: 43rpx 51rpx;
            "
          ></view>
          <view class="icon-title">服务评价</view>
        </view>
        <view class="icon-container">
          <view
            class="img-container"
            style="
              background-image: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb790ebeff920f31692a1cb13f25906ed4664b0153139a48a64c4fb61284456d6);
              background-size: 57rpx 48rpx;
            "
          ></view>
          <view class="icon-title">完成服务</view>
        </view>
      </view>
      <view class="third-line">—— 具体服务使用流程已实际为准 ——</view>
      <view class="four-line">可用权益</view>
    </view>
    <view class="footer">
      <text class="left">服务协议</text>
      <text class="mid">|</text>
      <text class="right">建议反馈</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="less">
.content {
  height: 100vh;
  background-color: #2f3046;
  padding-left: 20rpx;
  padding-right: 20rpx;

  .card {
    padding: 63rpx 39rpx;
    background: linear-gradient(360deg, #fffdfa 0%, #f9e3bc 50%, #f5ca9a 100%);
    box-shadow: 0px 2px 12px 0px rgba(172, 95, 34, 0.14);
    border-radius: 22px;
    height: 25vh;
    .first-line {
      display: flex;
      .avatar {
        width: 77rpx;
        height: 77rpx;
        border-radius: 77rpx;
        background-color: red;
        flex-shrink: 0;
      }
      .log-info {
        width: 434rpx;
        padding-left: 20rpx;
        .first {
          height: 46rpx;
          font-size: 33rpx;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #3a3a3c;
          line-height: 46rpx;
        }
        .second {
          height: 29rpx;
          font-size: 21rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #433f3f;
          line-height: 29rpx;
        }
      }
      .log-btn {
        flex-shrink: 0;
        width: 165rpx;
        height: 56rpx;
        line-height: 56rpx;
        background: linear-gradient(90deg, #32344b 0%, #594635 100%);
        border-radius: 28rpx;
        font-size: 23rpx;
        font-weight: 500;
        color: #ede1db;
        text-align: center;
      }
    }
    .second-line {
      height: 29rpx;
      font-size: 21rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #433f3f;
      line-height: 29rpx;
    }
    .third-line {
      height: 52rpx;
      font-size: 37rpx;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #3a3a3c;
      line-height: 52rpx;
    }
  }

  .main {
    padding: 28rpx;
    height: 56vh;
    background: linear-gradient(90deg, #4a495f 0%, #353447 100%);
    background-image: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd586ae9ddce6d5a179858b194d1943df372227c2e96c0e2f362815ce0c1c8f77);
    background-size: 323rpx 343rpx;
    background-repeat: no-repeat;
    background-position: center 70%;
    border-radius: 13rpx;
    border: 2rpx solid rgba(245, 205, 158, 1);
    // border-image: linear-gradient(141deg, rgba(249, 224, 204, 0.36), rgba(245, 205, 158, 1), rgba(245, 205, 158, 1)) 2 2;
    .first-line {
      height: 44rpx;
      font-size: 32rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffe5d7;
      line-height: 44rpx;
      .mid {
        padding: 0 10rpx;
      }
      .mid,
      .right {
        font-size: 25rpx;
      }
    }
    .second-line {
      margin-top: 40rpx;
      display: flex;
      justify-content: space-between;
      .icon-container {
        width: 96rpx;
        .img-container {
          width: 96rpx;
          height: 96rpx;
          border-radius: 96rpx;
          background-color: #3e3b4b;
          background-repeat: no-repeat;
          background-size: 50rpx 36rpx;
          background-position: center;
        }
        .icon-title {
          margin-top: 8rpx;
          height: 29rpx;
          font-size: 21rpx;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #fff9f6;
          line-height: 29rpx;
        }
      }
    }
    .third-line {
      padding: 40rpx 0;
      text-align: center;
      width: 100%;
      height: 29rpx;
      font-size: 21rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #797984;
      line-height: 29rpx;
    }
    .four-line {
      height: 35rpx;
      font-size: 25rpx;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #b1a1a0;
      line-height: 35rpx;
    }
  }

  .footer {
    position: fixed;
    bottom: 30rpx;
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
}
</style>
