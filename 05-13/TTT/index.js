
/*

Step 2:

$(function () {

  $('button').click(function () {
    var text = $(this).text();
    if (text === '') {
      $(this).text('o');
    } else if (text === 'o') {
      $(this).text('x');
    } else if (text === 'x') {
      $(this).text('');
    }
  });

});

*/


/*

Step 3
$(function () {

  $('button').click(function () {
    var text = $(this).text();
    if (text === '') {
      $(this).text('o');
    } else if (text === 'o') {

    } else if (text === 'x') {

    }
  });

});

*/

var winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];


// function takes
// 1. the board
// returns the winner "o" or "x" or null
function checkWinner(board) {
  for (var i = 0; i < winningCombos.length; i++) {
    var combo = winningCombos[i];
    if (playerOccupiesSquares('o', combo, board)) {
      return 'o';
    }
    if (playerOccupiesSquares('x', combo, board)) {
      return 'x';
    }
  }
  return null;
}

// function that takes
// 1. a player "o" or "x"
// 2. a winning combo - array of 3 numbers (array indices)
// 3. the board - an array of all moves
// and returns true if player occupies all 3, or false otherwise
function playerOccupiesSquares(player, squares, board) {
  for (var i = 0; i < squares.length; i++) {
    var idx = squares[i];
    var value = board[idx];
    if (value !== player) {
      return false;
    }
  }
  return true;
}

// function that returns an array consisting of the current moves
// on the board
function getCurrentBoard() {
  var buttons = $('button');
  var moves = [];
  for (var i = 0; i < buttons.length; i++) {
    var button = $(buttons[i]);
    moves.push(button.text());
  }
  return moves;
}

var turn = 0;

$(function () {

  $('button').click(function () {
    var text = $(this).text();
    if (text === '') {
      if (turn % 2 === 0) {
        $(this).text('o');
      } else {
        $(this).text('x');
      }
      turn = turn + 1;
      var board = getCurrentBoard();
      var winner = checkWinner(board);
      if (winner) {
        $('#winner').text('The winner is ' + winner);
      }
    } else if (text === 'o' || text === 'x') {
      // do nothing
    }
  });

});
