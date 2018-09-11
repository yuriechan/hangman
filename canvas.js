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

//*** right leg of hangman**//
context.beginPath();
context.lineWidth = 8;
context.strokeStyle = 'yellow';

context.moveTo(203, 297);
context.lineTo(280, 310);
context.moveTo(203, 297);
context.stroke();

//***left leg of hangman**//
context.beginPath();
context.lineWidth = 8;
context.strokeStyle = 'pink';

context.moveTo(197, 297);
context.lineTo(120, 307);
context.moveTo(197, 297);
context.stroke();

//*** the top part of hang**//
context.beginPath();
context.lineWidth = 15;
context.strokeStyle = 'black';

context.moveTo(200, 0);
context.lineTo(200, 47);
context.moveTo(200, 0);
context.stroke();

//*** top extension part of hang**//
context.beginPath();
context.lineWidth = 15;
context.strokeStyle = 'black';

context.moveTo(200, 0);
context.lineTo(30, 0);
context.moveTo(200, 0);
context.stroke();

//*** other parts of the hang**//
context.beginPath();
context.lineWidth = 15;
context.strokeStyle = 'black';

context.moveTo(30, 0);
context.lineTo(30, 450);
context.lineTo(350, 450);
context.moveTo(30, 0);
context.stroke();
