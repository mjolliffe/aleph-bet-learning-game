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
{ word: "fay",
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
{ word: "fay",
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
var scorePlayer1 = 0;
var scorePlayer2 = 0;
var correctPairs = 0;
var player = 1;

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
//Creating an array out of the selected pairs that match in order to add another class to them that changes their color. Would like to also be able to disable the matched pairs from being clicked again maybe using something like $('.card2').off('click');
              var array = [];
              array.push(words[i]);
              array.push(images[j]);
              console.log(array);
              for (var i =0; i<array.length; i++) {
                var matched = document.getElementsByClassName("selected1");
                $(matched).addClass('selected2');
              }
              correctPairs += 1;
              player = 1;
          } else if (words[i].word != images[j].word && words[i].selected == true && images[j].selected == true) {
            player = 0;
            }
          }
    }
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

//Shuffle Board - set an attribute when i append

//Get Winner when Board is Completed. Mazel Tov message.
//function getWinner() {
//  alert("Mazel Tov Player" + winner +" ! You won!");
//}
