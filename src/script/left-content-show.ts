let preview_element = ''
//
//选择模式
export function select_action() {
    console.log("select_action")
    let s_o1 = document.querySelector('.t-select');
    s_o1.addEventListener('click', () => {
        s_o1.classList.toggle('active');
        let o3 = s_o1.classList.contains('active');
        if(o3===true){
            s_w(true).then(()=>{})
        }else if(o3===false){
            s_w(false).then(()=>{})
        }else{
            //啥也不是。
        }
    })
}

export function select(){
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
        ev_move();
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
const ev_move = () => {
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
//
//右侧控制面板默认操作
let none_see = ['s-info','s-base','s-edit','s-decide']
export function side_display_default(){
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
