
function welcomeMessage() {
  const message = 'Hello, enjoy the hang man game!\n' +
    'HOW TO PLAY: Pick one character by one to guess the word.\n' +
    'You start from 6 lives!';
    document.getElementById('welcomeMessage').textContent = message;
  //alert(message);
}

function setAnswerWord() {
  var words = ['cat', 'frog', 'egg']; // get words from database
  return words[Math.floor(Math.random() * words.length)];
}

function initPlayerArr(answer) {
  var arr = [];
  for (var i = 0; i < answer.length; i++) {
    arr.push('_');
  }
  return arr;
}

var word = setAnswerWord();
var playerArr = initPlayerArr(word);
var incorrectGuessLeft = 6;
var hangManBodyParts = 0;
var remainingLetters = word.length;


function playing() {
  var userInput = '';
  var input = '';

userInput = document.getElementById('display-chosen-alpha').textContent;
document.getElementById(userInput).style.backgroundColor = 'red';
input = userInput;

  while (remainingLetters > 0 && incorrectGuessLeft > 0) {
    if (input == "") {
      alert('Please enter a character!');
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
      //var playerArr = playerArr.join(' ') + '\nLetters remaining: ' + remainingLetters + '.' + '\nYou have ' + incorrectGuessLeft + ' lives left.';
      //document.getElementById('welcomeMessage').textContent = playerArr;
      result();
    }
    document.getElementById('user-input').reset();
  }
}


function result() {
  if (remainingLetters == 0 && incorrectGuessLeft > 0) {
    document.getElementById('gameOverMessage').textContent = 'You win! ' + 'Correct word was ' + word + '. Thanks for playing lol';
    btnHidden();

  } else if (remainingLetters > 0 && incorrectGuessLeft == 0) {
    document.getElementById('gameOverMessage').textContent = 'You LOST! XD';
    btnHidden();
  }
}

function btnHidden(){
     document.getElementById('playButton').style.visibility = 'hidden';
}


function setDesignPalette() {
  context.beginPath();
  context.lineWidth = 15;
  context.strokeStyle = 'black';
}

function newGame() {
  context.clearRect(0,0,500,500);

  //*** the top part of hang**//
  setDesignPalette();
  context.moveTo(200, 0);
  context.lineTo(200, 47);
  context.moveTo(200, 0);
  context.stroke();
  //*** top extension part of hang**//
  setDesignPalette();
  context.moveTo(200, 0);
  context.lineTo(30, 0);
  context.moveTo(200, 0);
context.stroke();
  //*** other parts of the hang**//
  setDesignPalette();
  context.moveTo(30, 0);
  context.lineTo(30, 450);
  context.lineTo(350, 450);
  context.moveTo(30, 0);
context.stroke();

welcomeMessage();
word = setAnswerWord();
playerArr = initPlayerArr(word);
incorrectGuessLeft = 6;
hangManBodyParts = 0;
remainingLetters = word.length;

document.getElementById('playButton').style.visibility = 'visible';
document.getElementById('gameOverMessage').textContent = '';
document.getElementById('playButton').style.visibility = 'visible';
document.getElementById('display-chosen-alpha').textContent = '';
deleteRed();
}

window.onload = function showMessage(){
    document.getElementById('messageToUser').textContent = playerArr;
    //alert(playerArr.join(' ') + '\nLetters remaining: ' + remainingLetters + '.' + '\nYou have ' + incorrectGuessLeft + ' lives left.');
}


function deleteRed(){
  var classElement = document.getElementsByClassName('char-btn');
  for (i = 0; i < classElement.length; i++)
  {
      classElement[i].style.backgroundColor = '';
  }
}

function chooseChar(ch){
  console.log(ch);
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = ch;
}
