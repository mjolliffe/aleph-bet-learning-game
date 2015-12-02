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
  // if (item.selected = true) {
    //var img = item.word.path === 'undefined' ? '' : 'Img';
    //document.getElementById(item.word + img).addClass('selected1');
    $(item).addClass('selected1');
    player1 = 1;

    for (var i in words) {
    for (var j in images) {
        if (words[i].word == images[j].word && words[i].selected == true && images[j].selected == true)
        alert("match!");
    }
}
}



  // if ($(item).hasClass('card').selected && $(item).hasClass('card2').selected && words[i].word == images[j].word) {
  //   correctPairs ++;
  //   $(item).addClass('selected2');
  // }
//   for (i in words) {
//     for (j in images) {
//         if ($(item).hasClass('card') === 'selected1' && $(item).hasClass('card2') === 'selected1' && words[i].selected && images[j].selected)
//            correctPairs ++;
//           alert("match!");
//     }
// }
console.log(correctPairs);
console.log(words, images);

// if (item.word.selected === item.images.selected) {
//   event.target.className += ' selected2';
//   player1 = 0;
// }

// resetSelectedItems()
// does two things: (1) removes styling of old selected item (if there is one)
// (2) adds styling to represent new selected object.

 // function clearAll(){
 //    var elements = document.getElementsByTagName("button").options;
 //    for(var i = 0; i < elements.length; i++){
 //      elements[i].selected = false;
 //    }
 //  }

// function choseAvatar(){
//   document.getElementsByClassName("kid").addEventListener("click", setSelectedAvatar);
// }

// function setSelectedAvatar (){
//   document.getElementsByClassName("kid").style.backgroundColor = "#173599";
// }

// function reset (){
//   displayAllWords();
//   displayAllImages();
// }
