var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;

canvas = document.getElementById('myCanvas');
console.log('canvas!')
ctx = canvas.getContext("2d");
radius = document.getElementById("radius");
color = document.getElementById("color");
width  = document.getElementById("width");
canvas.addEventListener("mousedown", my_mousedown);


function my_mousedown(e){
    radius = document.getElementById("radius").value;
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
    currentPositionOfMouseY = e.clientY - canvas.offsetTop;
    
    if (mouseEvent == "mouseDown"){
        console.log("Current position of x and y co-ordinates are: ");
        console.log("x = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY, radius, 0, 2*Math.PI);
        ctx.stroke();
    }

    lastPositionOfX = currentPositionOfMouseX;
    lastPositionOfY = currentPositionOfMouseY;
}