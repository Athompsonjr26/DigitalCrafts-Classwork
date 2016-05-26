var cols=4;
var rows=5;
var rowCounter;
var i;
var j;
var lineOfStars;

// Task 1: print top bun
lineOfStars = '';
i = 1;

while (i <= cols) {
    lineOfStars = lineOfStars + '*';  /* add a star on the end of whatever is in line */
    i = i + 1;
}
console.log(lineOfStars);
var lineOfStars2 = lineOfStars;

// Task 2: print the meat

lineOfStars = '*';
i = 1;
while (i <= cols - 2) {
  lineOfStars = lineOfStars + ' ';
  i = i + 1;
}
lineOfStars = lineOfStars + '*';

i = 1;
while (i <= rows -2) {
  console.log(lineOfStars);
  i = i + 1;
}

// Task 3: print bottom bun
console.log(lineOfStars2);
