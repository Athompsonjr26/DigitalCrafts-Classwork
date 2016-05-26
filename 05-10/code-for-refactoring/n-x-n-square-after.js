
printSquare(5);

function printSquare(n) {
  var counter = 0;
  var row = makeARow(n);
  while (counter < n){
    console.log(row);
    counter++;
  }
}

function makeARow(n) {
  var counter = 0;
  var row = "";
  while (counter < n) {
    row = row + "*";
    counter++;
  }
  return row;
}
