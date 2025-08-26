<script setup>

let onlyName = 0;

window.onload= function(){
  console.log('脚本初始化中。。。')
  addDrag();
  addDragView();
  idShow();
  mouse();
  select_action();
  v_c();
}

async function addDrag(){
  const a_type = ['button', 'image', 'text'];
  let all_template = document.querySelectorAll('.template');
  console.log('添加点击事件');
  let num = all_template.length;
  for(let i = 0; i < num; i++){
    all_template[i].addEventListener('click', function(){
      console.log('点击了第' + (i+1) + '个模板');
    })
    all_template[i].addEventListener('dragstart',e=>dragStart(e))
    all_template[i].addEventListener('dragover',dragging)
    all_template[i].addEventListener('dragend',e=>{dragend(e)})
  }

  //拖动相关操作
  function dragAction() {
    console.log('拖动模板')
  }
let t,tt;
  function dragStart(e) {
    console.log('拖动开始。。。');
    let t0 = (e.target.className).split(' ');
    t = t0[2];
    tt = t0[1];
  }

  function dragging() {
    console.log('拖动中')
  }

  function dragend(e) {
    console.log('拖动结束')
    let m = e
    //给出层级关系


    //增加元素
    let ctn = document.querySelector('.viewer-container');
    let lll = document.querySelector('.let-bar-container');
    let ttt = document.querySelector('.top-bar-container');
    let ddd = document.createElement('div');
    ddd.className = `temp ${tt}`;
    ddd.classList.add(`o-${onlyName}`);

    ddd.style.position = 'absolute';
    let x = m.offsetX;
    let y = m.offsetY;
    let xx = lll.clientWidth;
    let yy = ttt.clientHeight;
    yy = yy -  yy * (t - 1);
    x = x - xx;
    y = y - yy;
    ddd.style.top=`${y}px`;
    ddd.style.left=`${x}px`;
    ctn.appendChild(ddd);
  }
}

async function addDragView(){
  let view = document.querySelector('.viewer-container');
  view.addEventListener('dragover', (e) => {
    e.preventDefault();
  })
}

async function idGet(){
  console.log('获取id')
  console.log('暂时使用内部id')
  return [];
}

async function idShow(){
  let db = await idGet()
  console.log('展示id')
}

async function mouse(){
  console.log('鼠标事件')
  let view = document.querySelector('.viewer-container');
  view.addEventListener('mousemove', (e) => {
    location(e)
    async function location(e){
      let m = e
      let ac = document.querySelector('.top-bar-container p')
      ac.innerHTML = `当前位置：窗口 X:${m.screenX} Y:${m.screenY};客户端 X:${m.clientX} Y:${m.clientY}`
    }
  })
}

async function select_action() {
  console.log("select_action")
  let s_o1 = document.querySelector('.t-select');
  s_o1.addEventListener('click', (e) => {
    s_o1.classList.toggle('active');
    let o3 = s_o1.classList.contains('active');
    if(o3===true){
      s_w(true)
    }else if(o3===false){
      s_w(false)
    }else{
      e()
    }
  })
}

async function v_c(){
  let ccc = document.querySelectorAll('.close');
  let ccc_parentPP = document.querySelector('.s-viewer');
  ccc[0].addEventListener('click', (e) => {
    ccc_parentPP.classList.toggle('active');
  })
  ccc[1].addEventListener('click', (e) => {
    ccc_parentPP.classList.toggle('active');
  })
}


async function s_w(t){
  let wrap = document.querySelector('.wrapper .container');
  if(t===true){
    wrap.addEventListener('mouseover', ev_s)
  }else if(t===false){
    wrap.removeEventListener('mouseover',ev_s)
  }else{
    e()
  }
}

async function e(){
  console.error('选择器传参错误。');
}

const ev_s =(e) => {
  //判断选择对象
  let ec = e.target.classList;
  if(ec.contains('temp')){
    //这是判断对象属性
    c_obj(ec);
  }else{
    //啥也不是。
  }
}

function c_obj(ccb) {
  c_obj_add(ccb[2], ccb[1]);
}

async function c_obj_add(a1,a2) {
  let c_tl = document.querySelector('.s-info .s-info-title');
  let c_tag = document.querySelector('.s-info .s-info-tag');

  c_tl.textContent = a1;
  c_tag.textContent = a2;
}
</script>

<template>

</template>

<style scoped>

</style>