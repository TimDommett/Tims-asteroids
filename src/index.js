const MovingObject = require("./moving_object.js")

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 1000;
  canvasEl.height = 1000;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 1000, 800);

  // ctx.beginPath();
  // ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
  // ctx.strokeStyle = "green";
  // ctx.lineWidth = 5;
  // ctx.stroke();
  // ctx.fillStyle = "blue";
  // ctx.fill();
});
