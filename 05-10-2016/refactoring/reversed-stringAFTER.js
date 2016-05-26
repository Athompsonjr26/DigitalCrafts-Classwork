function reversedString(string) {

  var length = string.length;
  var reversedString = "";
  var counter = length - 1;
  while (counter >= 0) {
    var letter = string.charAt(counter);
    reversedString = reversedString + letter;
    counter = counter - 1;
  }
  return reversedString
}

console.log(reversedString("Java"));
console.log(reversedString("Anthony"));
