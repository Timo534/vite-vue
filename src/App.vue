<template>
  <transition name="van-fade">
    <router-view></router-view>
  </transition>
  <img alt="Vue logo" src="./assets/logo.png" >
  <Button type="primary">按钮</Button>
  <van-tabbar route placeholder>
    <van-tabbar-item replace to="/" icon="home-o"> Home </van-tabbar-item>
    <van-tabbar-item replace to="/about" icon="search"> About </van-tabbar-item>
    <van-tabbar-item replace to="/todoList" icon="friends-o"> ToDo </van-tabbar-item>
    <van-tabbar-item replace to="/luckdraw" icon="setting-o"> LuckDraw </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { Button } from 'vant'

export default {
  name: 'App',
  components: { Button },
  methods: {}
}
</script>
