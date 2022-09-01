<template>
  <view class="section">
    <u-navbar title="微笑服物" :autoBack="true" bgColor="#2f3046" :titleStyle="{color: '#FFE5D7'}" leftIconColor="#FFE5D7"></u-navbar>

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
      <view class="scroll-view">
        <couponContentOne v-if="activeTab === '待兑换'" />
        <couponContentTwo v-if="activeTab === '待使用'" />
        <couponContentThree v-if="activeTab === '已使用'" />
        <couponContentFour v-if="activeTab === '已过期'" />
      </view>
      <footerInfo />
    </view>
  </view>
</template>

<script>
import footerInfo from "@/components/footerInfo.vue";
import couponContentOne from './components/couponContentOne.vue' 
import couponContentTwo from './components/couponContentTwo.vue' 
import couponContentThree from './components/couponContentThree.vue' 
import couponContentFour from './components/couponContentFour.vue' 

export default {
  name: 'detailPage',
  components: {
    couponContentOne,
    couponContentTwo,
    couponContentThree,
    couponContentFour,
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
.section {
  height: 100vh;
  .container {
    height: calc(100vh - 100rpx);
    padding-top: 44px;
    // padding-bottom: 10rpx;
    box-sizing: border-box;
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
    .scroll-view {
      height: calc(100vh - 44px - 80rpx - 100rpx);
      overflow-y: scroll;
    }
  }
}
</style>