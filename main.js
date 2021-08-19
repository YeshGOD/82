canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color= "red";
widthofline= 2;

var mouseEvent="empty";
var last_x , last_y;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    widthofline=document.getElementById("width_of_line").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
    mouse_x=e.clientX- canvas.offsetLeft;
    mouse_y=e.clientY- canvas.offsetTop; 
    if (mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;
        ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
        ctx.stroke();
    }
    
    last_x=mouse_x;
    last_y=mouse_y;
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}
function clearArea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}