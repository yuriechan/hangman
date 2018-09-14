 
  alert('Hello, enjoy the hang man game!\nHOW TO PLAY: Pick one character by one to guess the word.\nYou start from 6 lives!');
    var input = "";
    var words = ['cat', 'frog', 'kangaroo'];
    var word = words[Math.floor(Math.random() * words.length)];
    var remainingLetters = word.length;
    var playerArr = [];
    var incorrectGuessLeft = 6;
    //initialize player array
    for (var i = 0; i < word.length; i++) {
        playerArr.push('_');
    }   
 
  var num = 0;
   
function playing(){   
    var userInput = document.getElementById('user-input').value;
    //when playing game 
    while (remainingLetters > 0 && incorrectGuessLeft > 0) {
        input = userInput;
        if (input == "") {
            //click cancel returns null
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
                hangManArr[num]();
                num++
            }
                       
            alert(playerArr.join(' ') + '\nLetters remaining: ' + remainingLetters + '.' + '\nYou have ' + incorrectGuessLeft + ' lives left.');
            userInput = '';
            result();
        }
            document.getElementById('user-input').reset();
        }  
    } 
    
    


function result(){
      if (remainingLetters == 0 && incorrectGuessLeft > 0) {
            alert('You win! ' + 'Correct word was ' + word + '. Thanks for playing lol');
          
        } else if (remainingLetters > 0 && incorrectGuessLeft == 0) {
            alert('You LOST! XD');
        }
}

function newGame(){
      alert('Hello, enjoy the hang man game!\nHOW TO PLAY: Pick one character by one to guess the word.\nYou start from 6 lives!');
    var input = "";
    var words = ['cat', 'frog', 'kangaroo'];
    var word = words[Math.floor(Math.random() * words.length)];
    var remainingLetters = word.length;
    var playerArr = [];
    var incorrectGuessLeft = 6;
    //initialize player array
    for (var i = 0; i < word.length; i++) {
        playerArr.push('_');
    } 
}
















