var numbers = [4, 7, 9, 6, 5];
var odd = [];
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 1) {
    odd.push(numbers[i]);
  }
}
console.log(odd);
