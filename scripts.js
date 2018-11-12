var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var ch = canvas.height;
var cw = canvas.width;
var borderColor = 'grey';

for (var triangleCounter = 0; triangleCounter < 30; triangleCounter++) {
  context.beginPath();
  context.moveTo(cw/6 + triangleCounter*5, ch/3 + triangleCounter*5);
  context.lineTo(cw/6 + 80 + triangleCounter * 5, ch/3 + triangleCounter * 5);
  context.lineTo((cw/6) + 40 + triangleCounter * 5, (ch/3) - 80 + triangleCounter * 5);
  context.closePath();
  context.strokeStyle = borderColor;
  context.stroke();
}