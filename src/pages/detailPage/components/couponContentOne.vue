<template>
  <view class="couponContent">
    <view v-for="item in list" :key="item.id" class="content">
      <view class="coupon-container">
        <view class="left">
          <text>待兑换</text>
        </view>
        <view class="mid">
          <text class="mid-top">{{ item.couponCategory }}</text>
          <text class="mid-bottom">有效至{{item.exchangePeriodEnd}}</text>
        </view>
        <view class="right">立即兑换 ></view>
      </view>
    </view>
    <u-loadmore :status="status" dashed line @loadmore="getCouponPage" />
  </view>
</template>

<script>
import { mapState } from 'vuex'
const BASE_API = process.env.VUE_APP_BASE_API

export default {
  name: 'couponContentOne',
  data() {
    return {
      status: 'loadmore',
      pageIndex: 1,
      pageSize: 6,
      list: [],
    }
  },
  computed: {
    ...mapState(['token'])
  },
  mounted() {
    this.getCouponPage()
  },
  methods: {
    getCouponPage(v) {
      this.status = 'loading'
      uni.request({
        url: `${BASE_API}/app-api/coupon/page`,
        method: 'POST',
        header: { 'jh-token': this.token },
        data: {
          couponState: 0,
          pageIndex: this.pageIndex,
          pageSize: this.pageSize,
        },
        success: ({ data}) => {
          this.status = 'loadmore'
          if (data.code === '0000') {
            this.list = [...this.list, ...data.data.list]
            if ((data.data.pageNo * data.data.pageSize) >= data.data.total) {
              this.status = 'nomore'
            } else {
              this.status = 'loadmore'
            }
          }
           this.pageIndex ++
        }
      })
    },

  }
}
</script>

<style lang="less" scoped>
.couponContent {
  height: 100%;
  background-color: #2f3046;
  padding-top: 10rpx;
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20rpx 0;
  }
}
</style>