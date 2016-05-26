// Print the multiples of 3 and 5 between 1 and 10.
var n = 1;

while (n <= 10) {
  if (n % 3 === true || n % 5 === true) {
    console.log(n);
  }
  n = n + 1;
}
