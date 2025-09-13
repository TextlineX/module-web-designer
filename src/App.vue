<script setup>
import './style/root.less'
import left_bar from './components/left-bar.vue'
import top_bar from './components/top-bar.vue'
import viewer from './components/viewer.vue'
import './script/v-action.ts'
</script>

<template>
  <div class="wrapper">
  <div class="container">
    <left_bar />
    <top_bar />
    <viewer />

    <!-- 是的这里是脚本挂载-->
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

/*测试*/
.only_d {
  width: 10px;
  height: 10px;
  background-color: red;
  position: absolute;
}
</style>
