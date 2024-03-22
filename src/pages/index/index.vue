<template>
    <view class="bg">
        <image src="@/assets/image/homepage.jpg" mode="scaleToFill" />
        <!-- {{ msg }} <Dongdong />
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)">点我</nut-button>
    </view>
    <nut-toast :msg="msg2" v-model:visible="show" :type="type" :cover="cover"/> -->
    </view>
</template>

<script setup>
import Taro from '@tarojs/taro'
import { useLoad } from '@tarojs/taro';
import { reactive, toRefs } from 'vue';

const state = reactive({
    msg: '欢迎使用 NutUI4.0 开发小程序',
    msg2: '你成功了～',
    type: 'text',
    show: false,
    cover: false
});

useLoad(() => {
    setTimeout(() => {
        console.log("setTimeout")
        Taro.navigateTo({
            url: '/blindBox/pages/find/index',
        })
    }, 1000)
})

const handleClick = (type, msg, cover = false) => {
    state.show = true;
    state.msg2 = msg;
    state.type = type;
    state.cover = cover;
};
</script>

<style lang="scss">
.index {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

.bg {
    width: 100%;
    height: 100vh;
}

image {
    width: 100%;
    height: 100vh;
}
</style>
