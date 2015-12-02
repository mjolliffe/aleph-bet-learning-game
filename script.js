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
}];
var correctPairs = 0;
var player1 = 1;

//Displays all words on the browser.
function displayAllWords() {
  for (var i=0;i<words.length;i++) {
    document.getElementsByClassName("card")[i].innerHTML = words[i].word;
  }
  $('.card').click(function(event) {
    setSelected(event.currentTarget);
  });
}

//Displays all Hebrew images on the browser.
function displayAllImages() {
  for (var i=0;i<images.length;i++) {
    document.getElementsByClassName("card2")[i].innerHTML = '<img src='+ images[i].path +' width="100px">';
  }
  $('.card2').click(function(event) {
    setSelected(event.currentTarget);
  });
}

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
              alert("match!");
              var array = [];
              array.push(words[i]);
              array.push(images[j]);
              console.log(array);
//Use the array to match with the buttons that the items in the array are held in; if word that is in array is equal to the class on both buttons then change color and disable click (off.())

              // if ($(item).hasClass('card')) {
              //   $(item).addClass('selected2');
              // } else if ($(item).hasClass('card2')) {
              //   $(item).addClass('selected2');
              // }
              // setMatched();
              correctPairs += 1;
              player1 = 1;
          } else if (words[i].word != images[j].word && words[i].selected == true && images[j].selected == true) {
            alert("wrong.");
            player1 = 0;
            }

          }
    }
}

//Set matched cards to a solid color and disable them from being clicked again.
function setMatched(pair){
    $('.card').addClass('selected2');
    $('.card2').addClass('selected2');
}

console.log(correctPairs);
console.log(words, images);

//Resets the Board.
// function reset(){
//    var elements = document.getElementsByTagName("button").options;
//    for(var i = 0; i < elements.length; i++){
//      elements[i].selected = false;
//    }
//  }

//Choose Avatar
//function choseAvatar(){
//   document.getElementsByClassName("kid").addEventListener("click", setSelectedAvatar);
//   document.getElementsByClassName("kid").style.backgroundColor = "#173599";
// }

//Shuffle Board

//Get Winner when Board is Completed. Mazel Tov message.
