//在选择模式下，右侧面板显示可修改项
//
//
let el = '';
//
//传入点击的元素，并且判断类型
export function select_show(name:any){
    let ob = document.getElementsByClassName(name.classList[2])[0];
    let type = name.classList[1];
    el = name.classList[2];
    if(type==undefined){
        console.log('未知类型');
    }else if(typeof(type)=='string'){
        console.log(type);
        select_show_base();
    }
}
//
//
//显示元素基本信息
function select_show_base(){
    let none_see = ['s-info','s-base','s-edit','s-decide']
    let view = document.querySelector('.viewer-container');
    none_see.forEach(el=>{
        let sdd = document.getElementsByClassName(el)[0] as HTMLDivElement;
        if(sdd){
            sdd.style.display = 'block';
        }else{
            console.log('元素未找到，关闭失败')
        }
    })
}

//监测数据变化
export function change(){
    //初始化读取对象
    console.log(el);
}