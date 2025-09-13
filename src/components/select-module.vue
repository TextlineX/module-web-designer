<script lang="ts" setup>
import {ref} from "vue";
let s_edit_base_width = ref();
</script>

<template>
<div class="s-viewer">
  <div class="s-viewer-header">
    <div class="s-viewer-header-title">
      <div class="close">
        <div class="icon">
          <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
               width="200" height="200"><path d="M153.6 473.6h716.8v76.8H153.6v-76.8z" fill="#2c2c2c"></path></svg>
        </div>
      </div>
    </div>

  </div>
  <!--基础信息显示-->
  <div class="s-info">
    <div class="s-info-title">元素名称: </div>
    <div class="s-info-tag">标签名: </div>
  </div>
  <!--修改模块-->
  <div class="s-edit">
    <div class="base">
      <div class="width">
        <div class="title">宽度</div>
        <input class="value" type="number" ref=s_edit_base_width>
      </div>
      <div class="height">
        <div class="title">高度</div>
        <input class="value" type="number" ref=s_edit_base_height>
      </div>
      <div class="opacity"></div>
    </div>
    <div class="button mod"></div>
    <div class="text mod"></div>
    <div class="image mod"></div>
  </div>
  <div class="s-decide"></div>
  <div>
    <div class="close">
      <div class="icon">
        <svg class="icon" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"
             width="200" height="200"><path d="M153.6 473.6h716.8v76.8H153.6v-76.8z" fill="#2c2c2c" p-id="2660"></path></svg>
      </div>
      </div>
  </div>
</div>
</template>

<style scoped lang="less">
//控制面板
.s-viewer {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 20%;
  height: 80%;
  z-index: 50;
  right: 2%;
  top: 15%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 15px;
  div:nth-child(5) {
    display: none;
  }
}

@icon: {
  width: 24px;
  height: 24px;
  svg {
    path {
      fill: #000000;
    }
  }
}

.close {
  @icon();
  float: right;
  margin: 8px 8px;
  width: 40px;
  height: 40px;
}

.s-viewer.active {
  width: 5%;
  height: 10%;
  border-radius: 100%;
  transition: ease-in 0.1s;
  div {
    display: none;
  }
  div:nth-child(5) {
    display: block;
    div {
      display: block;
      margin: 25% 28%;
    }
  }
}

//修改
.s-edit{
  //基础修改
  .base{
    @box: {
      display: flex;
      flex-direction: column;
      margin: 2px;
      align-items: center;
    }
    @title: {
      text-shadow: var(--shadow);
      text-align:center;
      font-size: 20px;
      line-height: 20px;
      font-weight: bold;
      margin: 10px;
  }
    @value: {
      background-color: var( --text-color-light);
      width: 80%;
      height: 20px;
    }

    //宽度
    .width{
      @box();
      .title {
        @title();
      }
      .value {
        @value();
      }
    }
    //高度
    .height{
      @box();
      .title {
        @title();
      }
      .value {
        @value();
      }
    }
  }

}
</style>