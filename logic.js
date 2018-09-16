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
  userInput = document.getElementById('user-input').value;
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

function newGame() {

  var canvas = document.querySelector('canvas');
  var context = canvas.getContext('2d');
  canvas.width = 500;
  canvas.height = 500;

  //*** the top part of hang**//
  function setDesignPalette() {
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

  // welcomeMessage();
  // word = setAnswerWord(["awe", "xgcg", "vgk"]);
  // playerArr = initPlayerArr(word);
  // incorrectGuessLeft = 6;
}





//alert(playerArr + 'second');
