var words = ["shin", "bet", "tav", "aleph"];
var images = ["images/shin.png", "images/bet.png", "images/tav.png", "images/aleph.png"];
var correctPairs = 0;

/* Image function used to create images and push to array
var createImage = function(src) {
  var img = new Image();
  img.src = src;
  return img;
};

// Push images of words and letter forms into images array
images.push(createImage("images/shin.png"));
images.push(createImage("images/bet.png"));
images.push(createImage("images/tav.png"));
images.push(createImage("images/aleph.png"));
*/

function displayAllWords() {
  for (var i=0;i<words.length;i++) {
     document.getElementsByClassName("card")[i].innerHTML = words[i];
  }
}

function displayAllImages() {
  for (var i=0;i<images.length;i++) {
    document.getElementsByClassName("card2")[i].innerHTML = '<img src='+images[i]+'>';
  }
}


for (var w = 0; w < words.length; w++) {
  if (words[w] === images[w]) {
     correctPairs += 1;
     words.style.background = "red";
     images.style.background = "red";
  }

}

displayAllWords();
displayAllImages();
/*
//Compare words to images
function compare(){
  if (words.indexOf('shin') === images.indexOf('images/shin.png')){
    correctPairs += 1;
  } else if (words.indexOf('bet') === images.indexOf('images/bet.png')){
    correctPairs += 1;
  }

}

//Higlight images when clicked
function highlightImage () {

}

/*
Array.prototype.shuffle = function() {
  var i = this.length, mix, temp;
  while (i > 0) {
    mix = Math.floor(Math.random() * (i+1));
    temp = this[mix];
    this[mix] = this [i];
    this[i] = mix;
  }
}
*/

/*randomize
var selected = [];
for (var i = 0; i < 22; i++) {
    // Randomly pick one from the array of faces
    var randomInd = floor(random(images.length));
    var image = images[randomInd];
    // Push a copy onto array
    selected.push(image);
    // Remove from faces array so we don't re-pick
    images.splice(randomInd, 1);
}

randomize
selected.sort(function() {
    return 0.5 - random();
});*/
