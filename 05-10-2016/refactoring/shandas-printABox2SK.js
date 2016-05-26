/*Like "Print a Box", but make it prettier by using the follow unicode characters: ━, ┃, ┏, ┓, ┗, and ┛. A 4x6 box would look like:
```
┏━━━━┓
┃    ┃
┃    ┃
┗━━━━┛
```*/
var n = 5;

for(var i = 0; i < n; i++){
  var row = '';
  for(var j = 0; j < n; j++){
    if(i === 0){
      if(j === 0)
        row = row + '┏';
      if (j < (n-1))
        row = row + '━';
      if(j === (n-1))
        row = row + '┓';
    }
    if(i !== 0 && i < (n-1)){
      if(j === 0)
        row = row + '┃';
      if (j < (n-1))
        row = row + ' ';
      if(j === (n-1))
        row = row + '┃';
    }
    if(i === (n-1)){
      if(j === 0)
        row = row + '┗';
      if (j < (n-1))
        row = row + '━';
      if(j === (n-1))
        row = row + '┛';
    }

  }
  console.log(row);
}
