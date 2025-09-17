<script lang="ts" setup>
import {ref,Ref} from "vue";
import {change} from "../script/left-content-show";

let s_edit_base_width: Ref<string> = ref('');
let s_edit_base_height: Ref<string> = ref('');
let s_edit_base_left: Ref<string> = ref('');
let s_edit_base_top: Ref<string> = ref('');
let s_edit_border_size: Ref<string> = ref('');
let s_edit_border_radius: Ref<string> = ref('');
let s_edit_text_size: Ref<string> = ref('');
let s_edit_text_color: Ref<string> = ref('');
let s_edit_background_color: Ref<string> = ref('');

interface base_name  {
  name:string,
  show_name:string,
  value:Ref,
  maxLength:number,
  min:number,
  max:number,
  svg:string | null
}

const s_edit_base_name: base_name[] = [
  {
    name: 'width',
    show_name: 'W',
    value: s_edit_base_width,
    maxLength: 3,
    min: 0,
    max: 999,
    svg: null,
  },
  {
    name: 'height',
    show_name: 'H',
    value: s_edit_base_height,
    maxLength: 3,
    min: 0,
    max: 999,
    svg: null,
  },
  {
    name: 'left',
    show_name: 'X',
    value: s_edit_base_left,
    maxLength: 4,
    min: 0,
    max: 1980,
    svg: null,
  },
  {
    name: 'top',
    show_name: 'Y',
    value: s_edit_base_top,
    maxLength: 4,
    min: 0,
    max: 1980,
    svg: null,
  },
  {
    name: 'border-size',
    show_name: '',
    value: s_edit_border_size,
    maxLength: 3,
    min: 0,
    max: 100,
    svg: '/src/assets/icon/border-size.svg',
  },
  {
    name: 'border-radius',
    show_name: '',
    value: s_edit_border_radius,
    maxLength: 3,
    min: 0,
    max: 999,
    svg: '/src/assets/icon/border-radius.svg',
  },
  {
    name: 'text-size',
    show_name: '',
    value: s_edit_text_size,
    maxLength: 3,
    min: 0,
    max: 999,
    svg: '/src/assets/icon/text-size.svg',
  },
  {
    name: 'text-color',
    show_name: '',
    value: s_edit_text_color,
    maxLength: 6,
    min: 0,
    max: 999,
    svg: '/src/assets/icon/text-color.svg',
  },
  {
    name: 'background-color',
    show_name: '',
    value: s_edit_background_color,
    maxLength: 6,
    min: 0,
    max: 999,
    svg: '/src/assets/icon/background-color.svg',
  },
];



//过滤字符
function filter(i_ref: base_name){
  let text = i_ref.value.value.toString();
  let reg = /[^0-9]/gm;
  console.log(text);
  return text.replace(reg, "");
}
function filter_color(i_ref: string){
  let reg = /[^0-9a-zA-Z]/gm;
  return i_ref.replace(reg, "");
}


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
    <div class="s-info-title"></div>
    <div class="s-info-tag"></div>
  </div>
  <!--修改模块-->
  <div class="s-edit">
    <!--
    <div class="base">
      <div class="width">
        <div class="title">W</div>
       <input class="value" v-model="s_edit_base_width" type="text" maxlength="3" min="0" max="1980" @input="s_edit_base_width = filter(s_edit_base_width)">
      </div>
      <div class="height">
        <div class="title">H</div>
        <input class="value" v-model="s_edit_base_height" type="text" maxlength="3" min="0" max="1980" @input="s_edit_base_height = filter(s_edit_base_height)">
      </div>
      <div class="left">
        <div class="title">X</div>
        <input class="value" v-model="s_edit_base_left" type="text" maxlength="3" min="0" max="1980" @input="s_edit_base_left = filter(s_edit_base_left)">
      </div>
      <div class="top">
        <div class="title">Y</div>
        <input class="value" v-model="s_edit_base_top" type="text" maxlength="3" min="0" max="1980" @input="s_edit_base_top = filter(s_edit_base_top)">
      </div>
      <div class="border-size">
        <div class="title">
          <div class="icon">
            <svg class="icon" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg" p-id="6028" width="200" height="200"><path d="M597.333333 160a32 32 0 0 1-32 32h-106.666666a32 32 0 0 1 0-64h106.666666a32 32 0 0 1 32 32zM192 458.666667a32 32 0 0 0-64 0v106.666666a32 32 0 0 0 64 0v-106.666666zM832 458.666667a32 32 0 0 1 64 0v106.666666a32 32 0 0 1-64 0v-106.666666zM565.333333 896a32 32 0 0 0 0-64h-106.666666a32 32 0 0 0 0 64h106.666666zM298.666667 160A32 32 0 0 0 266.666667 128h-21.333334A117.333333 117.333333 0 0 0 128 245.333333v21.333334a32 32 0 0 0 64 0v-21.333334c0-29.44 23.893333-53.333333 53.333333-53.333333h21.333334A32 32 0 0 0 298.666667 160zM757.333333 128a32 32 0 0 0 0 64h21.333334c29.44 0 53.333333 23.893333 53.333333 53.333333v21.333334a32 32 0 0 0 64 0v-21.333334A117.333333 117.333333 0 0 0 778.666667 128h-21.333334zM298.666667 864a32 32 0 0 1-32 32h-21.333334A117.333333 117.333333 0 0 1 128 778.666667v-21.333334a32 32 0 0 1 64 0v21.333334c0 29.44 23.893333 53.333333 53.333333 53.333333h21.333334a32 32 0 0 1 32 32zM757.333333 896a32 32 0 0 1 0-64h21.333334c29.44 0 53.333333-23.893333 53.333333-53.333333v-21.333334a32 32 0 0 1 64 0v21.333334A117.333333 117.333333 0 0 1 778.666667 896h-21.333334z" p-id="6029"></path></svg>
          </div>
        </div>
        <input class="value" v-model="s_edit_border_size" type="text" maxlength="3" min="0" max="100" @input="s_edit_border_size = filter(s_edit_border_size)">
      </div>
      <div class="border-radius">
        <div class="title">
          <div class="icon">
            <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="7007" width="200" height="200"><path d="M656 200h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM714 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 650h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM888 128h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM888 302h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM888 476h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM888 650h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM888 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM540 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM366 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM540 128H358c-127 0-230 103-230 230v182c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V358c0-87.3 70.7-158 158-158h182c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" p-id="7008"></path></svg>
          </div>
        </div>
        <input class="value" v-model="s_edit_border_radius" type="text" maxlength="3" min="0" max="100" @input="s_edit_border_radius = filter(s_edit_border_radius)">
      </div>
      <div class="text-size">
        <div class="title"><div class="icon">
          <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="7980" width="200" height="200"><path d="M920 416H616c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h60v320h-46c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h164c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-46V480h60v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V424c0-4.4-3.6-8-8-8z" p-id="7981"></path><path d="M656 296V168c0-4.4-3.6-8-8-8H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8z" p-id="7982"></path></svg>
        </div></div>
        <input class="value" v-model="s_edit_text_size" type="text"  maxlength="3" min="0" max="100" @input="s_edit_text_size = filter(s_edit_text_size)">
      </div>
      <div class="text-color">
        <div class="title"><div class="icon">
          <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="9045" width="200" height="200"><path d="M904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zM253.7 736h85c4.2 0 8-2.7 9.3-6.8l53.7-166h219.2l53.2 166c1.3 4 5 6.8 9.3 6.8h89.1c1.1 0 2.2-0.2 3.2-0.5 5.1-1.8 7.8-7.3 6-12.4L573.6 118.6c-1.4-3.9-5.1-6.6-9.2-6.6H462.1c-4.2 0-7.9 2.6-9.2 6.6L244.5 723.1c-0.4 1-0.5 2.1-0.5 3.2-0.1 5.3 4.3 9.7 9.7 9.7z m255.9-516.1h4.1l83.8 263.8H424.9l84.7-263.8z" p-id="9046"></path></svg>
        </div></div>
        <input class="value" v-model="s_edit_text_color" type="text"  maxlength="6" @input="s_edit_text_color = filter_color(s_edit_text_color)">
      </div>
      <div class="background-color">
        <div class="title"><div class="icon">
          <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="10034" width="200" height="200"><path d="M768 810.666667c46.933333 0 85.333333-38.4 85.333333-85.333334 0-32-27.733333-74.666667-85.333333-128-57.6 53.333333-85.333333 96-85.333333 128 0 46.933333 38.4 85.333333 85.333333 85.333334zM520.533333 202.666667c-6.4 0-10.666667-2.133333-14.933333-6.4l-74.666667-74.666667c-8.533333-8.533333-8.533333-21.333333 0-29.866667s21.333333-8.533333 29.866667 0l74.666667 74.666667c8.533333 8.533333 8.533333 21.333333 0 29.866667-4.266667 4.266667-10.666667 6.4-14.933334 6.4z" fill="#333333" p-id="10035"></path><path d="M413.866667 761.6c-6.4 0-10.666667-2.133333-14.933334-6.4L157.866667 514.133333c-8.533333-8.533333-8.533333-21.333333 0-29.866666L490.666667 151.466667c8.533333-8.533333 21.333333-8.533333 29.866666 0l241.066667 241.066666c8.533333 8.533333 8.533333 21.333333 0 29.866667L428.8 755.2c-2.133333 4.266667-8.533333 6.4-14.933333 6.4zM202.666667 499.2l211.2 211.2 300.8-300.8-211.2-211.2L202.666667 499.2z" fill="#333333" p-id="10036"></path><path d="M618.666667 556.8h-6.4l-362.666667-119.466667c-10.666667-4.266667-17.066667-14.933333-12.8-27.733333 4.266667-10.666667 14.933333-17.066667 27.733333-12.8l362.666667 119.466667c10.666667 4.266667 17.066667 14.933333 12.8 27.733333-4.266667 8.533333-12.8 12.8-21.333333 12.8zM917.333333 938.666667H106.666667c-12.8 0-21.333333-8.533333-21.333334-21.333334s8.533333-21.333333 21.333334-21.333333h810.666666c12.8 0 21.333333 8.533333 21.333334 21.333333s-8.533333 21.333333-21.333334 21.333334z" fill="#333333" p-id="10037"></path></svg>
        </div></div>
        <input class="value" v-model="s_edit_background_color" maxlength="6" min="0" max="6" @input="s_edit_background_color = filter_color(s_edit_background_color)">
      </div>
    </div>
    -->

    <div class="base">
      <div :class='item.name' v-for="(item) in s_edit_base_name">
        <div class="title" v-if="item.svg==null">{{item.show_name}}</div>
        <div class="title" v-else>
            <div class="icon">
              <img :src="item.svg" :alt="item.name">
            </div>
        </div>
        <input
            class="value"
            v-model="item.value.value"
            type="text"
            :maxlength="item.maxLength"
            :min="item.min"
            :max="item.max"
            @input="item.value.value = filter(item)"
            @keyup="change()"
        >
      </div>
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
.s-edit {
  //基础修改
  .base {
    @box: {
      display: inline-flex;
      margin: 5px;
      align-items: center;
      position: relative;
      border-radius: 5px;
      width: 35%;
      height: 15%;
      background-color: var(--background-color);
    }
    @title: {
      text-shadow: var(--shadow);
      text-align: center;
      font-size: 13px;
      line-height: 20px;
      margin: 5px;
      width: 15%;
      height: 18px;
      color: var(--text-color);

      .icon {
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    @value: {
      background-color: var(--text-color-light);
      width: 80%;
      height: 18px;
      border: none;
      appearance: none;
      &:focus {
        outline: none;
      }
      &::selection {
        background-color: var(--background-color-blue);
        color: var(--text-color-light);
      }
    }

    @all-same: {
      @box();
      .title {
        @title();
      }
      .value {
        @value();
      }
    }

    //宽度
    .width {
      @all-same();
    }

    //高度
    .height {
      @all-same();
    }

    //X坐标
    .left {
      @all-same();
    }

    //Y坐标
    .top {
      @all-same();
    }

    .border-size {
      @all-same();
    }

    .border-radius {
      @all-same();
    }

    .text-size {
      @all-same();
    }

    .text-color {
      @all-same();
    }

    .background-color {
      @all-same();
    }
  }

}
</style>