import _ from "lodash";
import './style.css'
import Icon from './myjpg.jpg'

function component(){
    let element=document.createElement('div');
    // Loadsh 通过script脚本引入 执行这一行是必须的。
    element.innerHTML=_.join(['hello','webpack'],' ');
    element.classList.add('hello');
    // 将图片添加到我们现有的div
    let myIcon=new Image();
    myIcon.src=Icon;
    element.appendChild(myIcon);
    return element;
}
console.log(1)

document.body.appendChild(component());