<template>
  <view class="content">
    <view class="card">
      <view class="first-line">
        <view class="avatar"></view>
        <view class="log-info">
          <view class="first">暂未登陆</view>
          <view class="second">登陆后即可验证领取服务权益</view>
        </view>
        <view class="log-btn" @click="showModal = true">立即登陆</view>
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
          <image src="/static/home-icon-one.png" class="icon"></image>
          <view class="icon-title">权益查看</view>
        </view>
        <view class="icon-container">
          <image src="/static/home-icon-two.png" class="icon"></image>
          <view class="icon-title">权益兑换</view>
        </view>
        <view class="icon-container">
          <image src="/static/home-icon-three.png" class="icon"></image>
          <view class="icon-title">权益使用</view>
        </view>
        <view class="icon-container">
          <image src="/static/home-icon-four.png" class="icon"></image>
          <view class="icon-title">服务评价</view>
        </view>
        <view class="icon-container">
          <image src="/static/home-icon-five.png" class="icon"></image>
          <view class="icon-title">完成服务</view>
        </view>
      </view>
      <view class="third-line">—— 具体服务使用流程已实际为准 ——</view>
      <view class="four-line">
        <text>可用权益</text>
        <text @click="toDetailPage">查看全部</text>
      </view>
      <view class="coupon-container">
        <view class="left">
          <text>待使用</text>
        </view>
        <view class="mid">
          <text class="mid-top">洗车权益兑换卷</text>
          <text class="mid-bottom">有效至2022年12月03日</text>
        </view>
        <view class="right">立即使用 ></view>
      </view>
    </view>
    <footerInfo />
      <u-modal :show="showModal" title="登录" showCancelButton @confirm="login">
        <u--form labelPosition="left" :model="form" labelWidth="auto">
          <u-form-item label="用户名:" prop="form.username" borderBottom>
            <u--input v-model="form.username" border="none"></u--input>
          </u-form-item>
          <u-form-item label="密码:" prop="form.password" borderBottom>
            <u--input v-model="form.password" border="none"></u--input>
          </u-form-item>

        </u--form>
      </u-modal>
  </view>
</template>

<script>
import footerInfo from "@/components/footerInfo.vue";
import md5 from 'md5'
import { mapMutations, mapState } from 'vuex'

export default {
    components: {
    footerInfo,
  },
  data() {
    return {
      showModal: false,
      rules: [],
      form: {
        username: '18354289971',
        password: '123456',
      },
      couponList: [],
    };
  },
  computed: {
    ...mapState(['token'])
  },
  onLoad() {},
  methods: {
    toDetailPage() {
      uni.navigateTo({
        url: '/pages/detailPage/detailPage'
      });
    },

    ...mapMutations(['SET_USER_INFO', 'SET_TOKEN']),

    async login() {
      uni.request({
        url: 'https://dev.defenderfintech.com/smile-api/auth-api/auth/pwd/login',
        method: 'post',
        headers: { 'content-Type': 'application/json' },
        data: {
          username: this.form.username.trim(),
          password: md5(this.form.password)
        },
        success: (res) => {
          const { data, header } = res
          if (data.code === '0000') {
            
            this.SET_TOKEN(header.token)
            this.showModal = false
            this.getAppUserInfo()
            this.getCouponPage()
          }
        }
      })
    },

    async getAppUserInfo() {
      uni.request({
        url: 'https://dev.defenderfintech.com/smile-api/app-api/user/info/getAppUserInfo',
        method: 'GET',
        header: { 'jh-token': this.token },
        success: ({ data }) => {
          this.SET_USER_INFO(data.data)
        }
      })
    },

    async getCouponPage() {
      uni.request({
        url: 'https://dev.defenderfintech.com/smile-api/app-api/coupon/page',
        method: 'post',
        data: {
          couponState: 1,
          pageIndex: 1,
          pageSize: 10
        },
        header: {
          'jh-token': this.token
        },
        success: ({ data }) => {
          this.couponList = [
            {
              "consumePeriodBegin": "2022-01-01 00:00:00",
              "consumePeriodEnd": "2022-12-31 23:59:59",
              "consumeTime": "",
              "couponCategory": "",
              "couponCodeUrl": "",
              "couponNo": "",
              "couponState": 0,
              "createTime": "",
              "exchangePeriodBegin": "2022-01-01 00:00:00",
              "exchangePeriodEnd": "2022-12-31 23:59:59",
              "exchangeTime": "",
              "id": 0,
              "remark": "",
              "supplierCouponNo": "",
              "supplierName": ""
            }
          ]
        }
      })
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  position: relative;
  height: 100%;
  padding-left: 20rpx;
  padding-right: 20rpx;
  box-sizing: border-box;
  .card {
    padding: 63rpx 39rpx;
    box-sizing: border-box;
    background: linear-gradient(360deg, #fffdfa 0%, #f9e3bc 50%, #f5ca9a 100%);
    box-shadow: 0px 2px 12px 0px rgba(172, 95, 34, 0.14);
    border-radius: 22px;
    height: 400rpx;
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
    box-sizing: border-box;
    height: 56vh;
    background-image: url(@/static/home-main.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-top: 80rpx;
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
        width: 108rpx;
        .icon {
          width: 108rpx;
          height: 108rpx;
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
      display: flex;
      justify-content: space-between;
    }
  }

}
</style>
