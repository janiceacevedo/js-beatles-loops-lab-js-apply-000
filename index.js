var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["bass", "guitar", "drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  var facts = ["John Lennon: rhythm guitar", "Paul McCartney: bass", "George Harrison: lead guitar", "Ringo Starr: drums"];
  for (i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + "plays" + instruments[i]);
  }
}

function johnLennonFacts() {
  var facts = [("He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice")];
  while (facts.length) {
  }
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    ("I love the Beatles!");
  } while (number < 15);
}