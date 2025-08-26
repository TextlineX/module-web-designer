<script setup>
import './root.css'
import left_bar from './components/left-bar.vue'
import top_bar from './components/top-bar.vue'
import viewer from './components/viewer.vue'
import VAction from './components/v-action.vue'
</script>

<template>
  <div class="wrapper">
  <div class="container">
    <left_bar />
    <top_bar />
    <viewer />

    <!-- 是的这里是脚本挂载-->
    <v-action />
  </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container {
  width: 100%;
  height: 100%;
  background-color: var(--background-normal);
  overflow: hidden;
}
</style>
