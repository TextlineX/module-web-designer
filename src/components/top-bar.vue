<script setup>
//
import SelectModule from "./select-module.vue";
</script>

<template>
  <div class="top-bar-container">
    <p style="position: absolute;left: calc(50% - 200px);top:0;z-index: 5;"></p>
    <div  class="user-action">
      <div class="action">
        <div class="t-select">
          <div>选择</div>
          <div class="icon">
            <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="1679" width="200" height="200"><path d="M593.066667 846.933333c-2.133333 0-4.266667 0-8.533334-2.133333s-8.533333-6.4-12.8-10.666667l-78.933333-183.466666-96 89.6c-2.133333 4.266667-6.4 6.4-12.8 6.4-2.133333 0-6.4 0-8.533333-2.133334-6.4-2.133333-12.8-10.666667-12.8-19.2V256c0-8.533333 4.266667-17.066667 12.8-19.2 2.133333-2.133333 6.4-2.133333 8.533333-2.133333 4.266667 0 10.666667 2.133333 14.933333 6.4l341.333334 320c6.4 6.4 8.533333 14.933333 6.4 23.466666-2.133333 8.533333-10.666667 12.8-19.2 14.933334l-134.4 12.8 83.2 181.333333c2.133333 4.266667 2.133333 10.666667 0 17.066667-2.133333 4.266667-6.4 10.666667-10.666667 12.8l-61.866667 27.733333c-4.266667-4.266667-8.533333-4.266667-10.666666-4.266667z" fill="#E0E0E0" p-id="1680"></path><path d="M384 256l341.333333 320-164.266666 14.933333 96 209.066667-61.866667 27.733333-91.733333-211.2L384 725.333333V256m0-42.666667c-6.4 0-10.666667 2.133333-17.066667 4.266667-14.933333 6.4-25.6 21.333333-25.6 38.4v469.333333c0 17.066667 10.666667 32 25.6 38.4 6.4 4.266667 12.8 4.266667 17.066667 4.266667 10.666667 0 21.333333-4.266667 29.866667-10.666667l72.533333-68.266666 66.133333 155.733333c4.266667 10.666667 12.8 19.2 23.466667 23.466667 4.266667 2.133333 10.666667 2.133333 14.933333 2.133333 6.4 0 10.666667-2.133333 17.066667-4.266667l61.866667-27.733333c10.666667-4.266667 19.2-12.8 23.466666-23.466667 4.266667-10.666667 4.266667-23.466667 0-32l-70.4-153.6 104.533334-8.533333c17.066667-2.133333 32-12.8 36.266666-27.733333 6.4-14.933333 2.133333-34.133333-10.666666-44.8l-341.333334-320c-6.4-10.666667-17.066667-14.933333-27.733333-14.933334z" fill="#212121" p-id="1681"></path></svg>
          </div>
        </div>
      </div>
      <div class="contain"></div>
    </div>
  </div>

  <!--以下为脚本-->
</template>

<style lang="less">
.top-bar-container {
  width: 100%;
  height: 10%;
  background-color: var(--background-normal);
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid var(--border-color);
}

.user-action {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 10%;
  height: 100%;
  background-color: var(--background-none);
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;

  .action {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    cursor: pointer;
  }
}

//选择项
.t-select {
  display: flex;
  flex-direction: row;
  padding: 5px;
  div {
    margin: 2px;
    color: var(--text-normal);
  }
}

.t-select:hover {
  div:nth-child(1) {
    transform: scale(1.2);
    transition: ease-in 200ms;
  }
  div:nth-child(2) {
    transition: ease-in 200ms;
    transform: scale(1.2) rotate(15deg);
  }
}

.t-select.active {
  div:nth-child(1) {
    color: #1890ff;
  }
  div:nth-child(2) {
    svg{
      path:nth-child(1) {
        fill: #0086ff;
      }
      path:nth-child(2) {
        fill: #1390ff;
      }
    }
  }
}

.icon {
  svg {
    width: 24px;
    height: 24px;
    path {
      fill: #21212166;
    }
  }
}

</style>