var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;


//*** Head of hangman***//
context.beginPath();
context.arc(200, 100, 50, 0, Math.PI * 2, true);
context.closePath();
context.lineWidth = 8;
context.strokeStyle = 'red';
context.stroke();

//*** body of hangman***//
context.beginPath();
context.lineWidth = 8;
context.strokeStyle = 'purple';

context.moveTo(200, 150);
context.lineTo(200, 300);
context.lineTo(200, 150);
context.stroke();

//*** right arm of hangman**//
context.beginPath();
context.lineWidth = 8;
context.strokeStyle = 'blue';

context.moveTo(203, 180);
context.lineTo(280, 190);
context.moveTo(203, 180);
context.stroke();

//*** left arm of hangman**//
context.beginPath();
context.lineWidth = 8;
context.strokeStyle = 'green';

context.moveTo(197, 180);
context.lineTo(120, 190);
context.moveTo(197, 180);
context.stroke();

//*** right
