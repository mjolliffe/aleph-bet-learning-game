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
}];

var correctPairs = 0;

function displayAllWords() {
  for (var i=0;i<words.length;i++) {
    document.getElementsByClassName("card")[i].innerHTML = words[i].word;
    document.getElementsByClassName("card")[i].addEventListener("click", function() {
      setSelected(this);
    }.bind(words[i]));
  }
}

function displayAllImages() {
  for (var i=0;i<images.length;i++) {
    document.getElementsByClassName("card2")[i].innerHTML = '<img src='+ images[i].path +' width="100px">';
    document.getElementsByClassName("card2")[i].addEventListener("click", function() {
      setSelected(this);
    }.bind(images[i]));
  }
}

displayAllWords();
displayAllImages();

function setSelected(item){
  if (item.path === undefined) {
    for (var i = 0; i < words.length; i++) {
      words[i].selected = false;
    }
  } else {
    for (var i = 0; i < images.length; i++) {
      images[i].selected = false;
    }
  }
  // resetSelectedItems()
  // does two things: (1) removes styling of old selected item (if there is one)
  // (2) adds styling to represent new selected object.

  item.selected = true;

  event.target.className += ' selected';
  // var img = item.word.path === 'undefined' ? '' : 'Img';
  // document.getElementById(item.word + img).addClass('selected');
  console.log(words, images);
//  for (var i = 0; i < words.length; i++) {
//   if (words[i].word == images[i].word) {
//     console.log('match');
//     document.getElementsByClassName("card")[i].innerHTML.style.backgroundColor = "white";
//     document.getElementsByClassName("card2")[i].innerHTML.style.backgroundColor = "white";
//     correctPairs += 1;
//     }
// }

}

function choseAvatar(){
  document.getElementsByClassName("kid").addEventListener("click", setSelectedAvatar);
}

function setSelectedAvatar (){
  document.getElementsByClassName("kid").style.backgroundColor = "#173599";
}

function reset (){
  displayAllWords();
  displayAllImages();
}
