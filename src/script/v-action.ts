import {select_action,select,side_display_default} from './select-module'
import {addDrag,addDragView,mouse} from "./add-module";

//此处运行初始加载脚本
window.onload= function(){
    console.log('脚本初始化中。。。')
    addDrag()
    addDragView()
    mouse()
    select_action()
    select()
    side_display_default()
    //测试
}
//测试代码
