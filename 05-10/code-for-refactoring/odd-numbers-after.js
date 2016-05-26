function isOdd(n) {
  return n % 2 === 1;
}

function oddNumbers(numbers) {
  var odd = [];
  for (var i = 0; i < numbers.length; i++) {
    if (isOdd(numbers[i])) {
      odd.push(numbers[i]);
    }
  }
  return odd;
}

var numbers = [4, 7, 9, 6, 5];
console.log(oddNumbers(numbers));
