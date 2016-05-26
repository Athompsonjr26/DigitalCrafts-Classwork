function titleCase(){

var string = "welcome to disney world";
var length = string.length;
var i = 0;
while (i < length) {
  var letter = string.charAt(i);
  var prevLetter = string.charAt(i - 1);
  if (i === 0) {
    console.log(letter.toUpperCase());
  } else if (prevLetter === " ") {
    console.log(letter.toUpperCase());
  } else {
    console.log(letter);
  }
  i++;
}
  return
}
