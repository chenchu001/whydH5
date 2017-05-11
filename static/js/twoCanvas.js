/* 
* @Author: Marte
* @Date:   2017-04-14 09:40:44
* @Last Modified by:   Marte
* @Last Modified time: 2017-04-15 17:32:34
*/

window.onload = function(){
//调用插件
var myChart = echarts.init(document.getElementById('main'));
var option = {
        color:["#ef8500", "#04b7c5", "#fbc100"],
        series : [
            {
                name:'name',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                startAngle : 360,
                data:[
                    {value:0.25,name:"套餐内固\n定费用占比\n"},
                    {value:0.35,name:"套餐外费用\n占比"},
                    {value:0.4,name:"自有增值\n服务占比\n"}
                ],
                itemStyle:{ 
                    normal:{ 
                          label:{
                            color:'red', 
                            show: true, 
                            formatter: '{b} {d}%',
                            // position:'inside',
                            textStyle:{
                                color:'red',
                                fontSize:'12px'
                            }
                            },
                        lineStyle:{
                                color:"red",
                                width:3
                            },
                          labelLine :{show:true} 
                        } 
                },
                labelLine:{
                    normal:{
                        lineStyle:{
                            color:'red'
                        }
                    }
                }, 
                silent:true
            }
        ]
    };
myChart.setOption(option);
//写外圆以及百分比
var canvasOne = document.getElementById("canvas");
var canvasTwo = document.getElementById("canvas1");
    var start = 0;
    var end = 100;
    var ctx = canvasOne.getContext("2d");
    var ctxTwo = canvasTwo.getContext("2d");
    var ox = canvasOne.width/2,oy = canvasOne.height/2;
    console.log(ox,oy);
    var radius =canvasOne.height/2;
    var dataArr = [0.25,0.35,0.4];
    var colorArr = ["#ef8500", "#04b7c5", "#fbc100"];
    var startAngle = 0; //起始弧度  
    var endAngle = 0;   //结束弧度
    function drawBigCircle(percent){
        //画大圆
        ctx.save();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.translate(ox, oy);
        ctx.arc(0,0,radius-24,0,2*Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
        //画小圆
    }
    drawBigCircle();
    function drawSmallCircle(){
        ctxTwo.save();
        ctxTwo.strokeStyle = "#fff";
        ctxTwo.beginPath();
        ctxTwo.translate(ox, oy);
        ctxTwo.arc(0,0,radius-30,0,2*Math.PI);
        ctxTwo.stroke();
        ctxTwo.closePath();
        ctxTwo.restore();
    }
    drawSmallCircle();
    function drawBing(){
        // ctx.save();
        for(var i=0;i<dataArr.length;i++){
            startAngle = endAngle; //设置起始弧度
            endAngle = endAngle + dataArr[i] * Math.PI * 2; //结束弧度 
            ctxTwo.fillStyle = colorArr[i];
            // ctx.globalAlpha = 0.2;  
            ctxTwo.beginPath();  
            ctxTwo.moveTo(ox, oy); //移动到到圆心 
            ctxTwo.arc(ox, oy, radius-30, startAngle, endAngle);
            ctxTwo.closePath();  
            ctxTwo.fill();  
            //计算每一个百分比对应的坐标
            var  halfAngle = (endAngle-startAngle)/2+startAngle;
            x = Math.cos(halfAngle) * (80);//求出圆的横坐标
            y = Math.sin(halfAngle) * (80);
            ctxTwo.font = '12px';
            ctxTwo.fillStyle = "#fff";
            percent = Math.ceil(dataArr[i] * 100) + "%";
            ctxTwo.fillText(percent,x/3+ox-5,y/3+oy+4);
        }
        // ctx.restore();
    }
    drawBing();
}