var m1 = [
  [1, 2],
  [3, 4]
];
var m2 = [
  [5, 6],
  [7, 8]
];
var m3 = [];
var i = 0;
while (i < 2) {
  var j = 0;
  var row = [];
  while (j < 2) {
    var v1 = m1[i][j];
    var v2 = m2[i][j];
    var sum = v1 + v2;
    row.push(sum);
    j++;
  }
  m3.push(row);
  i++;
}
console.log('Result is', m3);
