////////first problem/////////
var sum = [1, 2, 3].reduce(add, 0);

function add(a, b) {
    return a + b;
}
  console.log(sum);
}

//////////////another method //////

var arr = [1,2,3,4];
var total=0;

/////////largest number///////////////
var myArray = [4, 5, 6, 99, 68, 7, 24];
var biggestNum = 0;
for(var i=0; i< myArray.length; i++){
    if(myArray[i] > biggestNum){
        biggestNum = myArray[i];
     }
}
console.log(biggestNum);

//////////////## Smallest Number/////////////
var array = [1,2,3,4,5]
var smallestNum = 0;
for(var i=0; i< array.length; i++)
    if(array[i] > smallestNum){
      smallestNum = array[i];
    }
console.console.log(smallestNum);
