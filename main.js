// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;
// top-left corner (0,0)
// top-right corner (650,0)
// bottom-left corner (0,650)
// bottom-right corner (650,650)

// Background wall
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 650, 650);

// carpet
ctx.fillStyle = "green";
ctx.fillRect(0, 250, 400, 150);

// orange sofa
ctx.fillStyle = "orange";
ctx.fillRect(10, 150, 230, 100);

// sofa arms
ctx.fillRect(10, 130, 50, 120);
ctx.lineWidth = 50;
ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.moveTo(240, 130);
ctx.lineTo(240, 250);
ctx.stroke();
// (x,y,length,width)

// TV
ctx.fillStyle = "grey";
ctx.fillRect(120, 230, 240, 110);

ctx.lineWidth = 100;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(110, 240);
ctx.lineTo(100, 230);

// TV stand

// image 1

// name
