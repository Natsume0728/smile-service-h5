<script>
  export default {
    onLaunch: function() {
      console.log('App Launch')
    },
    onShow: function() {
      console.log('App Show')
    },
    onHide: function() {
      console.log('App Hide')
    }
  }
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
page {
  background-color: #2f3046;
}

.coupon-container {
  box-sizing: border-box;
  width: 660rpx;
  height: 150rpx;
  background-image: url(@/static/home-coupon.png);
  background-size: 100%;
  display: flex;
  padding: 36rpx;
  padding-left: 24rpx;
  padding-right: 0;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #531311;
    width: 138rpx;
  }
  .mid {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: PingFangSC-Medium, PingFang SC;
    width: 320rpx;
    text-align: center;
    .mid-top {
      font-size: 28rpx;
      font-weight: 600;
      color: #531311;
      line-height: 39rpx;
    }
    .mid-bottom {
      font-size: 19rpx;
      font-weight: 400;
      color: #8C7C75;
      line-height: 26rpx;
    }
  }
  .right {
    width: 180rpx;
    height: 100%;
    font-size: 19rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #AC8E8C;
    line-height: 26rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
}
</style>
