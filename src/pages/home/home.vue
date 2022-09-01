<template>
  <view class="section">
    <view class="content">
      <u-navbar title="微笑服物" :autoBack="true" bgColor="#2f3046" :titleStyle="{color: '#FFE5D7'}"></u-navbar>
      <view class="card">
        <view class="first-line">
          <u-avatar :src="userInfo && userInfo.headImgUrl"></u-avatar>
          <view class="log-info">
              <view v-if="!token" class="first">暂未登陆</view>
              <view v-if="!token" class="second">登陆后即可验证领取服务权益</view>
            <view v-if="token" class="nickName">{{ userInfo && userInfo.nickName }}</view>
          </view>
          <view v-if="!token" class="log-btn" @click="showModal = true">立即登陆</view>
          <view v-else class="log-btn" @click="showActivateModal = true" >立即激活</view>
        </view>
          

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
          <text v-if="token" @click="toDetailPage">查看全部</text>
        </view>
        <view v-for="item in couponList" :key="item.id" class="coupon-container" style="margin-bottom: 40rpx;">
          <view class="left">
            <text>{{ item.couponState | couponStateFilter}}</text>
          </view>
          <view class="mid">
            <text class="mid-top">{{ item.couponCategory }}</text>
            <text class="mid-bottom">
              {{ item.couponState === 0 ? `有效至${item.exchangePeriodEnd}` : `有效至${item.consumePeriodEnd}` }}
            </text>
          </view>
          <view class="right" @click="jump(item.couponState, item.id)">
            {{ item.couponState | couponStateBtnFilter }}
          </view>
        </view>
      </view>
      <footerInfo />
      <u-modal :show="showModal" showCancelButton show-title="false" confirm-text="登录" @confirm="login" @cancel="showModal = false">
        <u-form labelPosition="left" :model="form" labelWidth="auto">
          <view v-if="loginByPassword" style="width: 100%; display: flex; justify-content: space-between; flex-wrap: nowrap; align-items: center;">
            <text style="font-weight: 600;">账号密码登录</text>
            <text @click="loginByPassword = false" style="color: rgb(41, 121, 255); font-size: 14rpx;">验证码登录</text>
          </view>
          <view v-else  style="width: 100%; display: flex; justify-content: space-between; flex-wrap: nowrap; align-items: center;">
            <text style="font-weight: 600;">验证码登录</text>
            <text @click="loginByPassword = true" style="color: rgb(41, 121, 255); font-size: 14rpx;">账号密码登录</text>
          </view>
          <u-form-item label="账号:" prop="form.username" borderBottom>
            <u-input v-model="form.username" border="none"></u-input>
          </u-form-item>
          <u-form-item v-if="loginByPassword" label="密码:" prop="form.password" borderBottom>
            <u-input v-model="form.password" border="none"></u-input>
          </u-form-item>
          <u-form-item v-else label="验证码:" prop="form.verificationCode" borderBottom>
            <u-input v-model="form.verificationCode" border="none"></u-input>
          </u-form-item>
          <u-code :seconds="seconds" ref="uCode" @change="codeChange"></u-code>
          <u-button v-if="!loginByPassword" type="primary" size="medium" style="margin-top: 10rpx;" @tap="getCode">{{tips}}</u-button>
        </u-form>
      </u-modal>
      <u-modal :show="showActivateModal" showCancelButton show-title="false" @confirm="receiveByCode" @cancel="showActivateModal = false">
        <u-form labelWidth="auto">
          <u-form-item label="激活码:">
            <u-input v-model="activateCode"></u-input>
          </u-form-item>
          <u-form-item label="获取激活码">
            <u-button @click="latestCode" >获取激活码</u-button>
          </u-form-item>
        </u-form>
      </u-modal>
    </view>
  </view>
</template>

<script>
import footerInfo from "@/components/footerInfo.vue";
import md5 from 'md5'
import { mapMutations, mapState } from 'vuex'
const BASE_API = process.env.VUE_APP_BASE_API

export default {
  filters: {
    couponStateFilter(value) {
      if (value === 0) return '待兑换'
      if (value === 1) return '待使用'
      if (value === 2) return '已使用'
      if (value === 3) return '已过期'
      return '--'
    },
    couponStateBtnFilter(value) {
      if (value === 0) return '立即兑换 >'
      if (value === 1) return '立即使用 >'
      if (value === 2) return '已使用'
      if (value === 3) return '已过期'
      return '--'
    }
  },
  components: {
    footerInfo,
  },
  data() {
    return {
      showActivateModal: false,
      activateCode: null,
      tips: '',
      seconds: 60,
      loginByPassword: true,
      showModal: false,
      rules: [],
      form: {
        username: '18354289971',
        // username: null,
        password: null,
        verificationCode: null,
      },
      couponList: [],
    };
  },
  computed: {
    ...mapState(['token', 'userInfo']),
  },
  onLoad() {},
  methods: {
    codeChange(text) {
      this.tips = text;
    },
    getCode() {
        if(this.$refs.uCode.canGetCode) {
          uni.showLoading({ title: '正在获取验证码' })

          uni.request({
            url: `${BASE_API}/auth-api/auth/code/send`,
            method: 'GET',
            header: { 'jh-token': this.token },
            data: { phone: '18507143257' },
            success: ({ data }) => {
                if (data.code === '0000') {
                  uni.$u.toast('验证码已发送');
                  this.$refs.uCode.start();
                }
              },
            complete: () => {
              uni.hideLoading();
            }
          })
        } else {
          uni.$u.toast('倒计时结束后再发送');
        }
      },

    latestCode() {
      uni.request({
        url: `${BASE_API}/manage-api/merchantOrderConsumer/latestCode`,
        method: 'GET',
        header: { 'jh-token': this.token },
        data: { phone: '18354289971' },
        success: ({ data }) => {
            if (data.code === '0000') {
          }
        }
      })
    },

    receiveByCode() {
      uni.request({
        url: `${BASE_API}/app-api/coupon/receiveByCode`,
        method: 'GET',
        header: { 'jh-token': this.token },
        data: { code: this.activateCode },
        success: ({ data }) => {
            if (data.code === '0000') {
              this.showActivateModal = false
              this.getCouponPage()
          }
        }
      })
    },

    jump(couponState, couponId) {
      if (couponState === 2 || couponState === 3) return
      if (couponState === 0) {
        uni.navigateTo({
          url: `/pages/equityExchange/equityExchange?couponState=${couponState}&couponId=${couponId}`
        });
        return
      }
    },

    toDetailPage() {
      uni.navigateTo({
        url: '/pages/detailPage/detailPage'
      });
    },

    ...mapMutations(['SET_USER_INFO', 'SET_TOKEN']),

    async login() {
      if (this.loginByPassword) {
        uni.request({
          url: `${BASE_API}/auth-api/auth/pwd/login`,
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
            } else {
              uni.$u.toast(data?.msg);
            }
          }
        })
      } else {
        uni.request({
          url: `${BASE_API}/auth-api/auth/code/login`,
          method: 'post',
          headers: { 'content-Type': 'application/json' },
          data: {
            userPhone: this.form.username.trim(),
            code: this.form.verificationCode
          },
          success: (res) => {
            console.log('res', res)
            const { data, header } = res
            if (data.code === '0000') {
              
              this.SET_TOKEN(header.token)
              this.showModal = false
              this.getAppUserInfo()
              this.getCouponPage()
            } else {
              uni.$u.toast(data?.msg);
            }
          }
        })
      }
    },

    async getAppUserInfo() {
      uni.request({
        url: `${BASE_API}/app-api/user/info/getAppUserInfo`,
        method: 'GET',
        header: { 'jh-token': this.token },
        success: ({ data }) => {
          this.SET_USER_INFO(data.data)
        }
      })
    },

    async getCouponPage() {
      uni.request({
        url: `${BASE_API}/app-api/coupon/page`,
        method: 'post',
        data: { pageIndex: 1, pageSize: 3 },
        header: { 'jh-token': this.token },
        success: ({ data }) => {
            if (data.code === '0000') {
            this.couponList = data.data.list
          }
        }
      })
    },
  },
};
</script>

<style lang="less" scoped>
.section {
  height: 100vh;
  .content {
    position: relative;
    height: calc(100vh - 100rpx);
    padding-top: 44px;
    padding-left: 20rpx;
    padding-right: 20rpx;
    box-sizing: border-box;
    .card {
      padding: 63rpx 39rpx;
      box-sizing: border-box;
      background: linear-gradient(360deg, #fffdfa 0%, #f9e3bc 50%, #f5ca9a 100%);
      box-shadow: 0px 2px 12px 0px rgba(172, 95, 34, 0.14);
      border-radius: 22px;
      height: 300rpx;
      .first-line {
        display: flex;
        align-items: center;
        height: 80rpx;
        .log-info {
          height: 100%;
          width: calc(100% - 245rpx);
          padding-left: 20rpx;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
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
          .nickName {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 33rpx;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #3A3A3C;
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
    }

    .main {
      padding: 28rpx;
      box-sizing: border-box;
      height: calc(100% - 300rpx - 50rpx);
      background-image: url(@/static/home-main.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      margin-top: 50rpx;
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
        padding-bottom: 40rpx;
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
}
</style>
