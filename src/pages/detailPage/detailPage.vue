<template>
  <view class="container">
    <view class="tab-list">
      <view
        v-for="item in list"
        :key="item.name"
        class="tab-item"
        :class="{ active: item.name === activeTab }"
        @click="activeTab = item.name"
      >
        {{ item.name }}
      </view>
    </view>
    <couponContentOne v-if="activeTab === '待兑换'" />
    <couponContentTwo v-if="activeTab === '待使用'" />
    <couponContentTwoThree v-if="activeTab === '已使用'" />
    <couponContentTwoFour v-if="activeTab === '已过期'" />
  </view>
</template>

<script>
import footerInfo from "@/components/footerInfo.vue";
import couponContentOne from './components/couponContentOne.vue' 
import couponContentTwo from './components/couponContentTwo.vue' 
import couponContentTwoThree from './components/couponContentTwoThree.vue' 
import couponContentTwoFour from './components/couponContentTwoFour.vue' 

export default {
  name: 'detailPage',
  components: {
    couponContentOne,
    couponContentTwo,
    couponContentTwoThree,
    couponContentTwoFour,
    footerInfo,
  },
  data() {
    return {
      activeTab: '待兑换',
      list: [
        { name: '待兑换' },
        { name: '待使用' },
        { name: '已使用' },
        { name: '已过期' },
      ],
    }
  },

  methods: {

  }
};
</script>

<style lang="less" scoped>
.container {
  padding-bottom: 10rpx;
  .tab-list {
    height: 80rpx;
    line-height: 80rpx;
    border-bottom: 2rpx solid #EFCBAE;
    display: flex;
    .tab-item {
      width: 25%;
      text-align: center;
      font-size: 28rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      color: #9C8376;
      &.active {
        border-bottom: 8rpx solid #F6DCC2;
      }
    }
  }
}
</style>