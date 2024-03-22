<template>
    <view class="index">
        <view class="navBar"
            :style="{ height: navBarHeight + 'px', marginTop: statusBarHeight + 'px', backgroundColor: 'red' }">
            <Location2 color="black" />
            <span>123</span>
            <!-- <text style="color: aliceblue;display: inline-block;background-color: aqua;">12345</text> -->
            <TriangleDown />
            <nut-searchbar v-model="searchText" style="width: 50%;">
                <template #leftin>
                    <Search2 />
                </template>
            </nut-searchbar>
        </view>
    </view>
</template>

<script setup>
import Taro from '@tarojs/taro'
import { useLoad } from '@tarojs/taro';
import { reactive, toRefs, ref } from 'vue';
import { useGlobalData } from '@/store';
import { Location2, TriangleDown, Search2 } from '@nutui/icons-vue-taro';

const globalStore = useGlobalData()
const { navBarHeight, statusBarHeight } = globalStore
const searchText = ref("")

useLoad(() => {

})
</script>

<style lang="scss">
.index {
    width: 100%;
    height: 100vh;
}

.navBar {
    display: flex;
    align-items: center;
}
</style>
