var words = [
{ word: "shin",
  selected: false
},
{ word: "bet",
  selected: false
},
{ word: "tav",
  selected: false
},
{ word: "aleph",
  selected: false
},
{ word: "resh",
  selected: false
},
{ word: "lamed",
  selected: false
},
{ word: "sin",
  selected: false
},
{ word: "gimel",
  selected: false
},
{ word: "ayin",
  selected: false,
},
{ word: "chaph",
  selected: false,
},
{ word: "chaphsofeet",
  selected: false,
},
{ word: "chet",
  selected: false,
},
{ word: "mem",
  selected: false,
},
{ word: "kaph",
  selected: false,
},
{ word: "tsade",
  selected: false,
},
{ word: "vet",
  selected: false,
},
{ word: "daled",
  selected: false,
},
{ word: "fay",
  selected: false,
},
{ word: "faysofeet",
  selected: false,
},
{ word: "memsofeet",
  selected: false,
},
{ word: "nun",
  selected: false,
},
{ word: "samech",
  selected: false,
},
{ word: "tsadesofeet",
  selected: false,
},
{ word: "vav",
  selected: false,
},
{ word: "yud",
  selected: false,
},
{ word: "zayin",
  selected: false,
},
{ word: "hey",
  selected: false,
},
{ word: "nunsofeet",
  selected: false,
},
{ word: "kuf",
  selected: false,
},
{ word: "sav",
  selected: false,
},
{ word: "tet",
  selected: false,
},
{ word: "vav",
  selected: false,
}];

var images = [
{ word: "shin",
  selected: false,
  path: "images/shin.png"
},
{ word: "bet",
  selected: false,
  path: "images/bet.png"
},
{ word: "tav",
  selected: false,
  path: "images/tav.png"
},
{ word: "aleph",
  selected: false,
  path: "images/aleph.png"
},
{ word: "resh",
  selected: false,
  path: "images/resh.png"
},
{ word: "lamed",
  selected: false,
  path: "images/lamed.png"
},
{ word: "sin",
  selected: false,
  path: "images/sin.png"
},
{ word: "gimel",
  selected: false,
  path: "images/gimel.png"
},
{ word: "ayin",
  selected: false,
  path: "images/ayin.png"
},
{ word: "chaph",
  selected: false,
  path: "images/chaph.png"
},
{ word: "chaphsofeet",
  selected: false,
  path: "images/chaphsofeet.png"
},
{ word: "chet",
  selected: false,
  path: "images/chet.png"
},
{ word: "mem",
  selected: false,
  path: "images/mem.png"
},
{ word: "kaph",
  selected: false,
  path: "images/kaph.png"
},
{ word: "tsade",
  selected: false,
  path: "images/tsade.png"
},
{ word: "vet",
  selected: false,
  path: "images/vet.png"
},
{ word: "daled",
  selected: false,
  path: "images/daled.png"
},
{ word: "fay",
  selected: false,
  path: "images/fay.png"
},
{ word: "faysofeet",
  selected: false,
  path: "images/faysofeet.png"
},
{ word: "memsofeet",
  selected: false,
  path: "images/memsofeet.png"
},
{ word: "nun",
  selected: false,
  path: "images/nun.png"
},
{ word: "samech",
  selected: false,
  path: "images/samech.png"
},
{ word: "tsadesofeet",
  selected: false,
  path: "images/tsadesofeet.png"
},
{ word: "vav",
  selected: false,
  path: "images/vav.png"
},
{ word: "yud",
  selected: false,
  path: "images/yud.png"
},
{ word: "zayin",
  selected: false,
  path: "images/zayin.png"
},
{ word: "hey",
  selected: false,
  path: "images/hey.png"
},
{ word: "nunsofeet",
  selected: false,
  path: "images/nunsofeet.png"
},
{ word: "kuf",
  selected: false,
  path: "images/kuf.png"
},
{ word: "sav",
  selected: false,
  path: "images/sav.png"
},
{ word: "tet",
  selected: false,
  path: "images/tet.png"
},
{ word: "vav",
  selected: false,
  path: "images/vav.png"
}];
var player1Points = 0; //blue player
var player2Points = 0; //green player
var player = 0;

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
    document.getElementById("table1").innerHTML += "<button id='" + images[i].path + "' class='card2'>" + '<img src='+ images[i].path +' width="80px">'+ "</button>"
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
//Creating an array out of the selected pairs that match in order to add another class to them that changes their color. Would like to also be able to disable the matched pairs from being clicked again maybe using something like $('.card2').off('click');
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
console.log(words, images);

///Timer and Winner function --- need to remove ALERTS and change to dialogs
function endOfGame() {
  alert("Game is Over!!");
    if (player1Points > player2Points) {
    alert("Mazel Tov Player 1! You won!")
  } else if (player2Points > player1Points) {
    alert("Mazel Tov Player 2! You won!")
  } else if (player2Points == player1Points) {
    alert("It's a tie! Play Again.")
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
console.log(words)

// function getTimeRemaining(endtime){
//   var t = Date.parse(endtime) - Date.parse(new Date());
//   var seconds = Math.floor( (t/1000) % 60 );
//   var minutes = Math.floor( (t/1000/60) % 60 );
//   return {
//     'total': t,
//     'minutes': minutes,
//     'seconds': seconds
//   };
// }

// function initializeClock(id, endtime){
//   var clock = document.getElementById(id);
//   var minutesSpan = clock.querySelector('.minutes');
//   var secondsSpan = clock.querySelector('.seconds');

// function updateClock(){
//   var t = getTimeRemaining(endtime);
//   minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//   secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
//   if(t.total<=0){
//     clearInterval(timeinterval);
//   }
// }
// updateClock();
// var timeinterval = setInterval(updateClock,1000);
// }

// var deadline = 'December 31 2015 00:00:50 UTC+0200';
// initializeClock('clockdiv', deadline);

//Resets the Board.
// function resetBoard(){
//   return shuffle(words);
//   return shuffle(images);
// }

//Choose Avatar
//function choseAvatar(){
//   document.getElementsByClassName("kid").addEventListener("click", setSelectedAvatar);
//   document.getElementsByClassName("kid").style.backgroundColor = "#173599";
// }

