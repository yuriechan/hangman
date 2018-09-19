welcomeMessage();

function welcomeMessage() {
  const message = 'Hello, enjoy the hang man game!\n' +
    'HOW TO PLAY: Pick one character by one to guess the word.\n' +
    'You start from 6 lives!';
  alert(message);
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

//document.getElementById('display-input').textContent = 'hi';

var word = setAnswerWord();
var playerArr = initPlayerArr(word);
var incorrectGuessLeft = 6;
var hangManBodyParts = 0;
var remainingLetters = word.length;
// var userInput = '';
// var input = '';

playing();
function playing() {
  var userInput = '';
  var input = '';
//userInput = document.getElementById('user-input').value;
userInput = document.getElementById('display-chosen-alpha').textContent;
document.getElementById(userInput).style.backgroundColor = 'red';

  input = userInput;
  //when playing game
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
deleteRed();
      function deleteRed(){
        var classElement = document.getElementsByClassName('char-btn');
        for (i = 0; i < classElement.length; i++)
        {
            classElement[i].style.backgroundColor = '';
        }
      }
document.getElementById('display-chosen-alpha').textContent = '';
}

function chooseCharA(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'a';
}

function chooseCharB(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'b';
}

function chooseCharC(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'c';
}

function chooseCharD(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'd';
}

function chooseCharE(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'e';
}

function chooseCharF(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'f';
}

function chooseCharG(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'g';
}

function chooseCharH(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'h';
}

function chooseCharI(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'i';
}

function chooseCharJ(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'j';
}

function chooseCharK(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'k';
}

function chooseCharL(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'l';
}

function chooseCharM(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'm';
}

function chooseCharN(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'n';
}

function chooseCharO(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'o';
}
function chooseCharP(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'p';
}
function chooseCharQ(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'q';
}
function chooseCharR(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'r';
}
function chooseCharS(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 's';
}
function chooseCharT(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 't';
}
function chooseCharU(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'u';
}

function chooseCharV(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'v';
}
function chooseCharW(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'w';
}

function chooseCharX(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'x';
}
function chooseCharY(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'y';
}
function chooseCharZ(){
  var displayChosenAlpha = document.getElementById('display-chosen-alpha');
  displayChosenAlpha.textContent = 'z';
}
