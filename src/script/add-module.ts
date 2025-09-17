let onlyName = 0;
//添加元素
export function addDrag(){
    //const a_type = ['button', 'image', 'text'];
    let all_template = document.querySelectorAll('.template');
    console.log('添加点击事件');
    let num = all_template.length;
    for(let i = 0; i < num; i++){
        all_template[i].addEventListener('click', function(){
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

export function addDragView(){
    let view = document.querySelector('.viewer-container');
    view.addEventListener('dragover', (e) => {
        e.preventDefault();
    })
}
//
//
//屏幕上方坐标显示
export function mouse(){
    console.log('鼠标事件')
    let view = document.querySelector('.viewer-container');
    view.addEventListener('mousemove', (e) => {
        location(e).then()
        async function location(e:any){
            let m = e
            let ac = document.querySelector('.top-bar-container p')
            ac.innerHTML = `当前位置：屏幕 X:${m.screenX} Y:${m.screenY};窗口 X:${m.clientX} Y:${m.clientY}`
        }
    })
}