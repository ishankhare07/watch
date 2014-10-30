var sec = new Date();
sec = Number(sec);

function update() {
    //var t = new Date();
    //var text = t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds();
    var box = document.getElementById("clock");
    //text = document.createTextNode(text);
    var current = new Date();
    current = Number(current);
    console.log(toString((current-sec)/1000));
    box.innerHTML = (current-sec)/1000;
}

//window.setInterval(function () {update();} ,500);

var deg=1;
function make_arc() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100,75,50,0,deg*1/180*Math.PI);
    ctx.stroke();
    deg++;
}
var interval = 10*1000/360;

window.setInterval(function () {make_arc();update();},interval);