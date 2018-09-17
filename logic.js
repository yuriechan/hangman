

welcomeMessage();

function welcomeMessage() {
  const message = 'Hello, enjoy the hang man game!\n' +
    'HOW TO PLAY: Pick one character by one to guess the word.\n' +
    'You start from 6 lives!';
  alert(message);
}

function setAnswerWord() {
  var words = ['cat', 'frog', 'egg'];
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



playing();
function playing() {
  var userInput = '';
  var input = '';
userInput = document.getElementById('display-chosen-alpha').textContent;
document.getElementById('a').style.backgroundColor = 'red';

  input = userInput;
  while (remainingLetters > 0 && incorrectGuessLeft > 0) {
    if (input == "") {
      alert('Please enter a character!');
    } else {
      //whenProperInput();
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
      result();
    }
    document.getElementById('display-chosen-alpha').reset();
  }
}

function whenProperInput(){
  input = input.toLowerCase();
    var isGuessFound = false;
      for (var i = 0; i < word.length; i++) {
        if (input == word[i]) {
          if (input !== playerArr[i]) {
            playerArr[i] = input;
            //document.getElementById('display-input').textContent = '';
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
  result();
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
document.getElementById('gameOverMessage').textContent = '';
document.getElementById('playButton').style.visibility = 'visible';
}


function chooseCharA(){
  //var alphabet = document.querySelector('.alphaBtn').id
  var alphabet = document.getElementById('a');
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  //alphabet.style.backgroundColor = 'red';
  displayChosenAlpha.textContent = 'a';
}

function chooseCharB(){
  //var alphabet = document.querySelector('.alphaBtn').id
  var alphabet = document.getElementById('b');
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'b';
}

function chooseCharC(){
  var alphabet = document.getElementById('c');
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'c';
}

function chooseCharD(){
  var alphabet = document.getElementById('d');
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'd';
}

function chooseCharE(){
  var alphabet = document.getElementById('e');
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'e';
}
