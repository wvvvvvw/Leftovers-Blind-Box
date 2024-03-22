import { createApp } from 'vue'
import './app.scss'
import Taro from '@tarojs/taro'
import { setupStore } from '@/plugins'
import { useGlobalData } from '@/store'
import { IconFont } from '@nutui/icons-vue-taro';

const globalStore = useGlobalData()

const App = createApp({
  onLaunch() {
    const { statusBarHeight } = Taro.getSystemInfoSync()
    const menuInfo = Taro.getMenuButtonBoundingClientRect()
    const navBarHeight = (menuInfo.top - statusBarHeight) * 2 + menuInfo.height
    globalStore.setNavBarHeight(navBarHeight)
    globalStore.setStatusBarHeight(statusBarHeight)
    console.log("getNavBarHeight", globalStore.navBarHeight)
    console.log("statusBarHeight", globalStore.statusBarHeight)
  },
  onShow(options) { },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

setupStore(App)

App.use(IconFont)

export default App
