/*

Write your implementation code in here.

*/
function hello(person){
  if (person){
    return "Hello, " +person+ "!";
  } else {
    return "Hello!";
  }
  }

function echo (str){
  return str;
}
function shout(str) {
  return str.toUpperCase();
}
function repeat(){
  return "hello hello";
}
function repeat(message,times){
    if (!times){
      times = 2;
    }
  var ret= message;
  for(var i = 1; i < times; i++){
    ret = ret + " " + message;
  }
    return ret;
}
function start_of_word(word, numOfLetters){
  return word.substring(0, numOfLetters);
}
function first_word(line){
  var words = line.slit(" ");
  return words [0];
}
