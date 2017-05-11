var myCanvas=document.getElementById("myCanvas");
var context=myCanvas.getContext("2d");
var canvas2=document.getElementById("myCanvas2");
var context2=canvas2.getContext("2d");

function drawBigCircle(R){
    context.strokeStyle = '#e72044';
    context.beginPath();
    context.translate(110,110);
    context.arc(0,0,R,0,2*Math.PI);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();
}
drawBigCircle(90);
function drawSmallCircle(r){
    context.strokeStyle = '#e72044';

    context.beginPath();
    context.arc(0,0,r,0,2*Math.PI);
    context.save();
    context.setLineDash([1,10]);
    context.lineCap = 'round';
    context.strokeStyle = '#e72044';
    context.lineWidth = 3;
    context.stroke();
    context.restore();
    context.closePath();
}
drawSmallCircle(80);
function drawFiveLineAndCircle(R){
    for(var i=0;i<5;i++){
        context.beginPath();

        context.moveTo(0, 0);
        var x = R*Math.sin(2*Math.PI/360*i*72);
        console.log(R*Math.sin(2*Math.PI/360*i*72));
        var y = -R*Math.cos(2*Math.PI/360*i*72);
        context.lineTo(x, y);
        context.lineWidth = 3;
        context.stroke();
        context.closePath();
    }
    
    

    for(var i=0;i<5;i++){
        context.beginPath();
        var x = R*Math.sin(2*Math.PI/360*i*72);
        var y = -R*Math.cos(2*Math.PI/360*i*72);
        context.arc(x,y,10,0,2*Math.PI);
        // context.shadowColor = "rgba(255,255,255,0.5)";
        // context.shadowBlur = 2;
        context.lineWidth = 5;
        context.fillStyle = '#fff';
        context.fill();
        context.stroke();
        context.closePath();
    }
}
drawFiveLineAndCircle(90);

var num = [0,0,0,0,0];
var end = [50,40,70,80,90];
    context2.save();
    context2.translate(110,110);
function data(r){
    context2.beginPath();
    context2.strokeStyle = '#e72044';

    context2.beginPath();
    
    context2.lineWidth = 3;
    for(var i=0;i<5;i++){
        var x = r*Math.sin(2*Math.PI/360*i*72);
        var y = -r*Math.cos(2*Math.PI/360*i*72);
        var x2 = r*Math.sin(2*Math.PI/360*(i+1)*72);
        var y2 = -r*Math.cos(2*Math.PI/360*(i+1)*72);

        context2.save();

        if(i<4){
            context2.moveTo(x*num[i]/100, y*num[i]/100);
            context2.lineTo(x2*num[i+1]/100,y2*num[i+1]/100);
        }else if(i==4){
            context2.moveTo(x*num[i]/100, y*num[i]/100);
            context2.lineTo(x2*num[0]/100,y2*num[0]/100);
        }
        
        context2.lineWidth = 5;
        context2.stroke();
        context2.restore();
        context2.closePath();
    }

    

}

function move(){
    setTimeout(function(){
        var t = setInterval(function(){
            context2.clearRect(-110,-110,220,220);
            data(80);

            for(var i=0;i<5;i++){
                if(num[i]<end[i]){
                    num[i] += end[i]/10;
                }else{
                    num[i] == end[i];
                    clearInterval(t);
                }
            }
        }, 100)
    }, 500)
}


// function drawText(){
//     context.fillStyle = "#343434";
    
//     context.textAlign="left";
//     for(var i=0;i<5;i++){
//         context.font = "50px";
//         context.fillText("语音通话" + num[i] + "分",0,0);
//     }
    
// }

// drawText();
