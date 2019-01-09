function charPositions(str) {
var obj = {};

str = str.split(" ").join("").toLowerCase();

for (var i = 0; i < str.length; i++) {
  var char = str[i];
  var position = i;
  if(obj[char]) {
  obj[char].push(position);
  }
  else {
  obj[char] = [];
  obj[char].push(position);
  }
}
return obj;
}

console.log(charPositions("beep boop BEEP"));
// console.log(countLetters("it's raining"));