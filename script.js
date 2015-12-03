var words = [
  new Word('shin'),
  new Word('bet'),
  new Word('tav'),
  new Word('aleph'),
  new Word('resh'),
  new Word('lamed'),
  new Word('sin'),
  new Word('gimel'),
  new Word('ayin'),
  new Word('chaph'),
  new Word('chaph**'),
  new Word('chet'),
  new Word('mem'),
  new Word('kaph'),
  new Word('tsade'),
  new Word('vet'),
  new Word('daled'),
  new Word('fay'),
  new Word('fay**'),
  new Word('mem**'),
  new Word('nun'),
  new Word('samech'),
  new Word('tsade**'),
  new Word('vav'),
  new Word('yud'),
  new Word('zayin'),
  new Word('hey'),
  new Word('nun**'),
  new Word('kuf'),
  new Word('sav'),
  new Word('tet'),
  new Word('pay')
]

var images = [
  new Images('shin','images/shin.png'),
  new Images('bet','images/bet.png'),
  new Images('tav','images/tav.png'),
  new Images('aleph','images/aleph.png'),
  new Images('resh','images/resh.png'),
  new Images('lamed','images/lamed.png'),
  new Images('sin','images/sin.png'),
  new Images('gimel','images/gimel.png'),
  new Images('ayin','images/ayin.png'),
  new Images('chaph','images/chaph.png'),
  new Images('chaph**','images/chaph**.png'),
  new Images('chet','images/chet.png'),
  new Images('mem','images/mem.png'),
  new Images('kaph','images/kaph.png'),
  new Images('tsade','images/tsade.png'),
  new Images('vet','images/vet.png'),
  new Images('daled','images/daled.png'),
  new Images('fay','images/fay.png'),
  new Images('fay**','images/fay**.png'),
  new Images('mem**','images/mem**.png'),
  new Images('nun','images/nun.png'),
  new Images('samech','images/samech.png'),
  new Images('tsade**','images/tsade**.png'),
  new Images('vav','images/vav.png'),
  new Images('yud','images/yud.png'),
  new Images('zayin','images/zayin.png'),
  new Images('hey','images/hey.png'),
  new Images('nun**','images/nun**.png'),
  new Images('kuf','images/kuf.png'),
  new Images('sav','images/sav.png'),
  new Images('tet','images/tet.png'),
  new Images('pay','images/pay.png')
]

var player1Points = 0; //pink player
var player2Points = 0; //purple player
var player = 0;


//Constructor functions to create arrays of words and images(Hebrew characters).
function Word(word, selected) {
  this.word = word;
  this.selected = false;
}

function Images(word, path, selected) {
  this.word = word;
  this.path = path;
  this.selected = false;
}

//Disables Boards
function disableBoards() {
    document.getElementsByClassName('.card').disabled = true;
    document.getElementsByClassName('.card2').disabled = true;
}

//Enables Boards when Start button clicked
function enableBoards() {
    document.getElementsByClassName('.card').disabled = false;
    document.getElementsByClassName('.card2').disabled = false;
}

//Displays all words on the browser.
function displayAllWords() {
  for (var i=0;i<words.length;i++) {
    document.getElementById("table2").innerHTML += "<button id='" + words[i].word + "' class='card'>" + words[i].word + "</button>"
  }
  $('.card').click(function(event) {
    setSelected(event.currentTarget);
  });
}

//Displays all Hebrew images on the browser.
function displayAllImages() {
  for (var i=0;i<images.length;i++) {
    document.getElementById("table1").innerHTML += "<button id='" + images[i].path + "' class='card2'>" + '<img src='+ images[i].path +' width="60px">'+ "</button>"
  }
  $('.card2').click(function(event) {
    setSelected(event.currentTarget);
  });
}
shuffle(words);
shuffle(images);
displayAllWords();
displayAllImages();


//Selects letters and word shapes and sets selected items to true.
function setSelected(item){
  console.log(item)
  if ($(item).hasClass('card')) {
    var word = item.innerHTML
    for (var i = 0; i < words.length; i++) {
      words[i].selected = false;
    }
    for (i in words) {
      if (word == words[i].word) {
        words[i].selected = true;
      }
    }
    $('.card').removeClass('selected1');
  }
  else if ($(item).hasClass('card2')) {
    var source = item.getElementsByTagName('img')[0].src;
    var split = source.split('/')
    var word = split[split.length-1].split('.')[0]
    for (var i = 0; i < images.length; i++) {
      images[i].selected = false;
    }
    for (i in images) {
      if (word == images[i].word) {
        images[i].selected = true;
      }
    }
    $('.card2').removeClass('selected1');
  }
  $(item).addClass('selected1');
//Matching Logic:
    for (var i in words) {
      for (var j in images) {
          if (words[i].word == images[j].word && words[i].selected == true && images[j].selected == true) {
//Created an array out of the selected pairs that match and added class to them that changes their color for the player who correctly matches them. Would like to also be able to disable the matched pairs from being clicked again maybe using something like $('.card2').off('click');
              var array = [];
              array.push(words[i]);
              array.push(images[j]);
              console.log(array);
              for (var i =0; i<array.length; i++) {
                var matched = document.getElementsByClassName("selected1")
                if (player === 0) {
                    player1Points += 5;
                    $(matched).addClass('player1');
                } else if (player !== 0) {
                    player2Points += 5;
                    $(matched).addClass('player2');
                    }
              document.getElementById('playerOne').innerHTML = "Player 1: " + player1Points + " ";
              document.getElementById('playerTwo').innerHTML = "Player 2: " + player2Points + " ";
              }
//Switch player logic included in Matching logic.
          } else if (words[i].word != images[j].word && words[i].selected == true && images[j].selected == true) {
              if (player === 0) {
                player = 1;
              } else if (player !== 0) {
                player = 0;
                }
              }
      }
    }
}

//Shuffle Board
function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));
        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
}

//Runs and Displays Timer, Also calls endOfGame function
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
            clearInterval(interval);
            endOfGame();
        }
    }, 1000);
}

//Sets timer to two minutes
function timer() {
    var twoMinutes = 2 * 2,
    display = document.querySelector('#timer');
    startTimer(twoMinutes, display);
};

// function disableBtn() {
//     document.getElementById("#timer").disabled = true;
// }

// function enableBtn() {
//     document.getElementById("#timer").disabled = false;
// }

//Execute modal function
$(function() {
      $('.modal').easyModal();
});

///Winner function
function endOfGame() {
  var modal = $('.modal');
  var message = $('.message');
    if (player1Points > player2Points) {
    message.html("Mazel Tov Player 1!<br>You won!");
    $('.modal').addClass('player1');
  } else if (player2Points > player1Points) {
    message.html("Mazel Tov Player 2!<br>You won!");
    $('.modal').addClass('player2');
  } else if (player2Points == player1Points) {
    message.html("It's a tie!<br>Play Again.");
    $('.modal').addClass('tie');
  }
  $('.modal').trigger('openModal');
}

//Resets the Board.
function resetBoard(){
  $('.card, .card2').remove();
  shuffle(words);
  shuffle(images);
  displayAllWords();
  displayAllImages();
}

