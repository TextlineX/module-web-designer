

let onlyName = 0;
let preview_element = ''

//此处运行初始加载脚本
window.onload= function(){
    console.log('脚本初始化中。。。')
    addDrag().then(res=>{})
    addDragView().then(res=>{})
    mouse().then(res=>{})
    select_action().then(res=>{})
    v_c().then(res=>{})
    side_display_default().then(res=>{})
    //测试
}
//
//
//添加元素
async function addDrag(){
    //const a_type = ['button', 'image', 'text'];
    let all_template = document.querySelectorAll('.template');
    console.log('添加点击事件');
    let num = all_template.length;
    for(let i = 0; i < num; i++){
        all_template[i].addEventListener('click', function(){
            console.log('点击了第' + (i+1) + '个模板');
        })
        all_template[i].addEventListener('dragstart',e=>dragStart(e))
        all_template[i].addEventListener('dragend',e=>{dragend(e)})
    }

    //拖动相关操作
    let tt:string;
    function dragStart(e:any) {
        let t0 = (e.target.className).split(' ');
        tt = t0[1];
    }


    function dragend(e:any) {
        let m = e
        //给出层级关系
        //增加元素
        let ctn = document.querySelector('.viewer-container');
        let ddd = document.createElement('div');
        ddd.className = `temp ${tt}`;
        ddd.classList.add(`o-${onlyName}`);
        onlyName += 1;

        ddd.style.position = 'absolute';
        let tn = document.querySelector('.viewer-container');
        let tN = tn.getBoundingClientRect();
        let x = m.clientX;
        let y = m.clientY;
        x = x - tN.left - 25;
        y = y - tN.top - 25;
        ddd.style.top=`${y}px`;
        ddd.style.left=`${x}px`;
        ddd.style.width='100px';
        ddd.style.height='100px';
        console.log(tN.left,tN.top);
        ctn.appendChild(ddd);
    }
}

async function addDragView(){
    let view = document.querySelector('.viewer-container');
    view.addEventListener('dragover', (e) => {
        e.preventDefault();
    })
}
//
//
//屏幕上方坐标显示
async function mouse(){
    console.log('鼠标事件')
    let view = document.querySelector('.viewer-container');
    view.addEventListener('mousemove', (e) => {
        location(e)
        async function location(e:any){
            let m = e
            let ac = document.querySelector('.top-bar-container p')
            ac.innerHTML = `当前位置：屏幕 X:${m.screenX} Y:${m.screenY};窗口 X:${m.clientX} Y:${m.clientY}`
        }
    })
}
//
//
//选择模式
async function select_action() {
    console.log("select_action")
    let s_o1 = document.querySelector('.t-select');
    s_o1.addEventListener('click', () => {
        s_o1.classList.toggle('active');
        let o3 = s_o1.classList.contains('active');
        if(o3===true){
            s_w(true)
        }else if(o3===false){
            s_w(false)
        }else{
            //啥也不是。
        }
    })
}

async function v_c(){
    let ccc = document.querySelectorAll('.close');
    let ccc_parentPP = document.querySelector('.s-viewer');
    ccc[0].addEventListener('click', () => {
        ccc_parentPP.classList.toggle('active');
    })
    ccc[1].addEventListener('click', () => {
        ccc_parentPP.classList.toggle('active');
    })
}


async function s_w(t:any){
    let wrap = document.querySelector('.wrapper .container');
    if(t===true){
        //进入选择模式
        wrap.addEventListener('mouseover', ev_s)
        wrap.addEventListener('mouseout', ev_s)
    }else if(t===false){
        //推出选择模式
        wrap.removeEventListener('mouseover',ev_s)
        wrap.removeEventListener('mouseout',ev_s)
    }else{
        //
    }
}


//用于判断选择模式下元素争正确和类型，并添加选择样式。
const ev_s =(e:any) => {
    //判断选择对象
    //
    let ec = e.target.classList;
    preview_element = null;
    //这是判断对象属性和类型
    if(e.type==='mouseover' && ec.contains('temp')){
        //判断成功后将元素class保存
        preview_element = ec;
        e.target.classList.add('drag');
        //运行添加移动函数
        ev_move(preview_element);
    }else if(e.type==='mouseout' && ec.contains('temp')){
        //这是退出移动模式
        e.target.classList.remove('drag');
        let target = e.target.classList;
        let tg = document.getElementsByClassName(target)[0] as HTMLDivElement;
        tg.draggable=false;
        tg.removeEventListener('dragend', ev_move);
    }
    else{
        //啥也不是。
    }
}
//
//移动元素逻辑
const ev_move = (e:any) => {
    let tg = document.getElementsByClassName(preview_element)[0] as HTMLDivElement;
    tg.draggable=true;
    tg.addEventListener('dragend', s_ed);
}
//
//选择模式下移动元素
const s_ed = (target:any) =>{
    let tr = document.getElementsByClassName(target.target.className)[0] as HTMLDivElement;
    let tn = document.querySelector('.viewer-container');
    let tN = tn.getBoundingClientRect();
    let x = target.clientX;
    let y = target.clientY;
    x = x - tN.left - 25;
    y = y - tN.top - 25;
    tr.style.top=`${y}px`;
    tr.style.left=`${x}px`;
    tr.classList.remove('drag');
}
//
//尝试修改选择元素的参数
//
async function c_obj_add(a1:string,a2:string,a3:object) {
    //读取元素
    let c_tl = document.querySelector('.s-info .s-info-title');
    let c_tag = document.querySelector('.s-info .s-info-tag');
    let edit_base_width = document.querySelector('.s-edit .width .value') as HTMLInputElement;
    let edit_base_height = document.querySelector('.s-edit .height .value') as HTMLInputElement;
    //
    io_i(a3);
    //
    //
    //基础信息
    c_tl.textContent = `元素名称: ${a1}`;
    c_tag.textContent = `标签名: ${a2}`;
    //元素基础样式
    try{
        edit_base_width.value = a3[0];
        edit_base_height.value = a3[1];
    }
    catch (e) {
        //
    }
}
//
//
//右侧控制面板默认操作
let none_see = ['s-info','s-base','s-edit','s-decide']
async function side_display_default(){
    let view = document.querySelector('.viewer-container');
    none_see.forEach(el=>{
        let sdd = document.getElementsByClassName(el)[0] as HTMLDivElement;
        if(sdd){
            sdd.style.display = 'none';
        }else{
            console.log('元素未找到，关闭失败')
        }

    })
    view.addEventListener('click', (e:any)=>{
        e.stopPropagation();
        none_see.forEach(el=>{
            let sdd = document.querySelector(`.${el}`) as HTMLDivElement;
            sdd.style.display = 'none';
        })
    })
}


//测试代码
async function io_i(ob:object) {
    let ht =()=>{
       console.log('object')
    }
    let edit_base_width = document.querySelector('.s-edit .width .value') as HTMLInputElement;
    let edit_base_height = document.querySelector('.s-edit .height .value') as HTMLInputElement;
    edit_base_height.addEventListener('change',ht);
}
