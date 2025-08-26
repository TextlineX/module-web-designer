<script setup>

</script>

<template>
  <div class="let-bar-container">
    <div class="template button 1" draggable="true">按钮</div>
    <div class="template image 2" draggable="true">图片</div>
    <div class="template text 3" draggable="true">文本</div>
  </div>
</template>

<style lang="less" scoped>
.let-bar-container {
  width: 10%;
  height: 90%;
  background-color: var(--background-normal);
  position: absolute;
  top: 10%;
  left: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--border-color);
  align-items: center;
  div{
    margin: 10px;
  }
}

/*组件显示样式*/

.template.button {
  width: 80%;
  height: 10%;
  background-color: var(--color-primary-light);
  border:1px solid var(--color-primary);
  border-radius: 5px;
  color: var(--button-primary);
  display: flex;
  justify-content: center;
  align-items: center;
}

.template.image {
  width: 80%;
  height: 10%;
  background-color: var(--image-orange);
  border:1px solid var(--image-orange-dark);
  border-radius: 5px;
  color: var(--image-orange-text);
  display: flex;
  justify-content: center;
  align-items: center;
}

.template.text {
  width: 80%;
  height: 10%;
  background-color: rgba(0,0,0,0);
  border:1px solid var(--text-color);
  border-radius: 5px;
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>