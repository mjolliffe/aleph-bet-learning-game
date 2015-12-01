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
var player1 = 1;


function displayAllWords() {
  for (var i=0;i<words.length;i++) {
    document.getElementsByClassName("card")[i].innerHTML = words[i].word;
  }
  $('.card').click(function(event) {
    setSelected(event.currentTarget);
  });
}

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

function setSelected(item){
  if ($(item).hasClass('card')) {
    for (var i = 0; i < words.length; i++) {
      words[i].selected = false;
    }
    $('.card').removeClass('selected1');
  } else if ($(item).hasClass('card2')) {
    for (var i = 0; i < images.length; i++) {
      images[i].selected = false;
    }
    $('.card2').removeClass('selected1');
  }

  if (item.selected = true) {
    //var img = item.word.path === 'undefined' ? '' : 'Img';
    //document.getElementById(item.word + img).addClass('selected1');
    $(item).addClass('selected1');
    item.selected = true;
    player1 = 1;
  }
}

// words = ["shin", "bet", "tav", "aleph"]
// images = ['image1', 'image2', 'image3', 'image4']
// for (i in words) {
//     for (j in images) {
//         if (words[i].word == images[j].word && words[i].selected && images[j].selected)
//             // do something
//     }
// }
  // if (item.word.selected === item.images.selected) {
  //   event.target.className += ' selected2';
  //   player1 = 0;
  // }

  // resetSelectedItems()
  // does two things: (1) removes styling of old selected item (if there is one)
  // (2) adds styling to represent new selected object.


  console.log(words, images);
//  for (var i = 0; i < words.length; i++) {
//   if (words[i].word == images[i].word) {
//     console.log('match');
//     document.getElementsByClassName("card")[i].innerHTML.style.backgroundColor = "white";
//     document.getElementsByClassName("card2")[i].innerHTML.style.backgroundColor = "white";
//     correctPairs += 1;
//     }
// }

 // function clearAll(){
 //    var elements = document.getElementsByTagName("button").options;
 //    for(var i = 0; i < elements.length; i++){
 //      elements[i].selected = false;
 //    }
 //  }

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
