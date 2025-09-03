<script setup>
import s_viewer from './select-module.vue';
</script>

<template>
  <div class='viewer-container'>
  </div>
  <s_viewer />
</template>

<style lang="less">
.viewer-container {
  width: 90%;
  height: 90%;
  background-color: #f0f0f0;
  position: absolute;
  top: 10%;
  left: 10%;
  border: 1px solid #ccc;
  overflow: hidden;
  display: block;

  @box-template:{
    width: 100px;
    height: 100px;
    border-radius: 5px;
    //margin: 10px;
    cursor: default;
    position: relative;

    &:hover {

    }
  }

  .temp.button{
    @box-template();
    background-color: var(--color-primary-light);
    border:1px solid var(--color-primary);
  }
  .temp.image{
    @box-template();
    background-color: var(--image-orange);
    border:1px solid var(--image-orange-dark);
  }
  .temp.text  {
    @box-template();
    background-color: rgba(0, 0, 0, 0.2);
    border:1px solid var(--text-color);
  }

  @drag-temp: {
    border:2px solid rgb(0, 134, 255);
    padding:2px;
    &::after {
      content: '';
      background-color: rgba(0, 134, 255, 0.1);
      inset: 0;
      display: block;
      position: relative;
      z-index: 49;
    }
}
  .temp.drag {
    @drag-temp();
  }
}
</style>