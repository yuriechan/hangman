welcomeMessage();

function welcomeMessage() {
  const message = 'Hello, enjoy the hang man game!\n' +
  'HOW TO PLAY: Pick one character by one to guess the word.\n' +
  'You start from 6 lives!';
  alert(message);
}

function setAnswerWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function initPlayerArr(answer) {
  var arr = [];
  for (var i = 0; i < answer.length; i++) {
    arr.push('_');
  }
  return arr;
}

var word = setAnswerWord(['cat', 'frog', 'egg']);
var playerArr = initPlayerArr(word);
var incorrectGuessLeft = 6;
var hangManBodyParts = 0;

playing();
function playing() {

  var input = "";
  var userInput = document.getElementById('user-input').value;
  var remainingLetters = word.length;

  //when playing game
  while (remainingLetters > 0 && incorrectGuessLeft > 0) {
    input = userInput;
    if (input == "") {
      alert('Please enter a character!');
      //document.getElementById('user-input').reset();
      //resetInput();
    } else {
      input = input.toLowerCase();
      var isGuessFound = false;
      for (var i = 0; i < word.length; i++) {
        if (input == word[i]) {
          if (input !== playerArr[i]) {
            playerArr[i] = input;
            remainingLetters--;
          }
          isGuessFound = true;
        }
      }
      if (!isGuessFound) {
        incorrectGuessLeft--;
        hangManArr[hangManBodyParts]();
        hangManBodyParts++;
      }
      alert(playerArr.join(' ') + '\nLetters remaining: ' + remainingLetters + '.' + '\nYou have ' + incorrectGuessLeft + ' lives left.');
      userInput = '';




      //result();
    }
    document.getElementById('user-input').reset();
  }
}

function result() {
  if (remainingLetters == 0 && incorrectGuessLeft > 0) {
    document.getElementById('gameOverMessage').innerHTML = 'You win! ' + 'Correct word was ' + word + '. Thanks for playing lol';
    //btnHidden();

  } else if (remainingLetters > 0 && incorrectGuessLeft == 0) {
    alert('You LOST! XD');
    //btnHidden();
  }
}

function newGame() {

  var canvas = document.querySelector('canvas');
  var context = canvas.getContext('2d');
  canvas.width = 500;
  canvas.height = 500;

  //*** the top part of hang**//
  function setDesignPalette(){
    context.beginPath();
    context.lineWidth = 15;
    context.strokeStyle = 'black';
  }

  setDesignPalette();
  context.moveTo(200, 0);
  context.lineTo(200, 47);
  context.moveTo(200, 0);
  context.stroke();

  //*** top extension part of hang**//
  // context.beginPath();
  // context.lineWidth = 15;
  // context.strokeStyle = 'black';
  setDesignPalette();
  context.moveTo(200, 0);
  context.lineTo(30, 0);
  context.moveTo(200, 0);
  context.stroke();

  //*** other parts of the hang**//
  // context.beginPath();
  // context.lineWidth = 15;
  // context.strokeStyle = 'black';
  setDesignPalette();
  context.moveTo(30, 0);
  context.lineTo(30, 450);
  context.lineTo(350, 450);
  context.moveTo(30, 0);
  context.stroke();

  welcomeMessage();
  word = setAnswerWord(["awe", "xgcg", "vgk"]);
  playerArr = initPlayerArr(word);
  incorrectGuessLeft = 6;
}

//
//function btnHidden(){
//      document.getElementById('playButton').style.visibility = 'hidden';
//}


//alert(playerArr + 'second');
