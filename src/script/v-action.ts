
let onlyName = 0;
let preview_element = ''

//此处运行初始加载脚本
window.onload= function(){
    console.log('脚本初始化中。。。')
    addDrag().then(res=>{printf('输出调试：',res)})
    addDragView().then(res=>{printf('输出调试：',res)})
    mouse().then(res=>{printf('输出调试：',res)})
    select_action().then(res=>{printf('输出调试：',res)})
    v_c().then(res=>{printf('输出调试：',res)})

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
        c_obj_f(preview_element);
    }else{
        //
    }
}



const ev_s =(e:any) => {
    //判断选择对象
    //
    let ec = e.target.classList;
    preview_element = ec;
    //这是判断对象属性和类型
    if(e.type==='mouseover' && ec.contains('temp')){
        c_obj(ec);
        e.target.classList.add('drag');
    }else if(e.type==='mouseout' && ec.contains('temp')){
        e.target.classList.remove('drag');
    }
    else{
        //啥也不是。
    }
}


function c_obj(ccb:object) {
    let obj2 = ccb[2];
    let obj3 = document.getElementsByClassName(obj2)[0] as HTMLDivElement;
    console.log(obj3.style);
    let e_w = obj3.style.width;
    let e_h = obj3.style.height;

    let e_w_s =parseInt(e_w.replace(/px/,''));
    let e_h_s = parseInt(e_h.replace(/px/,''));

    let o3:object =[e_w_s,e_h_s];
    c_obj_add(ccb[2], ccb[1],o3).then(res =>{printf('调试',res)});
    obj3.draggable = true;
    obj3.addEventListener('dragend',s_ed)
}

function  c_obj_f(ccb:any) {
    c_obj_add('', '',[]).then(res =>{printf('调试',res)});
    let obj2 = ccb[2];
    let obj3 = document.querySelector(`.${obj2}`) as HTMLDivElement;
    obj3.draggable = false;
    obj3.removeEventListener('dragend',s_ed)
}


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

async function c_obj_add(a1:string,a2:string,a3:object) {
    //读取元素
    let c_tl = document.querySelector('.s-info .s-info-title');
    let c_tag = document.querySelector('.s-info .s-info-tag');
    let edit_base_width = document.querySelector('.s-edit .width .value') as HTMLInputElement;
    let edit_base_height = document.querySelector('.s-edit .height .value') as HTMLInputElement;
    //
    io_i(a3);
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
        printf('异常错误',e);
    }
}
//
//
async function io_i(ob:object) {
    let ht =()=>{
       console.log('object')
    }
    let edit_base_width = document.querySelector('.s-edit .width .value') as HTMLInputElement;
    let edit_base_height = document.querySelector('.s-edit .height .value') as HTMLInputElement;
    edit_base_height.addEventListener('change',ht);
}
//测试
let printf = (name:string,value:any) =>{
    let p_display_1 = `名称: ${name}`;
    let p_display_2 =`参数: ${value}`;
    console.group('监控参数....................')
    console.log(p_display_1);
    console.log(p_display_2);
    console.groupEnd();
}