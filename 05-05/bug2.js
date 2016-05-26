// Print an NxN square
var n = 8;
var row = '';
var counter = 0;

while (counter < n) {
  row = row + '*';
  counter++;
}

while (counter < n) {
  console.log(row);
  counter++;
}
