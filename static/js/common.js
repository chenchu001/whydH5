/* 
* @Author: Marte
* @Date:   2017-03-16 14:00:24
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-16 14:01:37
*/

$(document).ready(function(){
    //监听窗口大小更改html的字体大小
    function responsive(){
        var width=document.body.clientWidth;
        document.getElementsByTagName('html')[0].style.fontSize=(width/20)+"px";
    };
    responsive();
    //窗口改变的时候依然执行
    window.onresize=function(){
        responsive();
    };
});