
  $(function () {
    $("button").click(function (){

      var text = $(this).text();
      if (text === "O") {
        $(this).text("X");
      } else if (text === ""){
        $(this).text("O");
      }
      else if(text === "X"){
        $(this).text("")
      }

    });
  });
   $(function () {

    $('button').click(function () {
      var text = $(this).text();
      if (text === '') {
        $(this).text('O');
      } else if (text === 'O') {

      } else if (text === 'X') {

      }
    });

  });
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
