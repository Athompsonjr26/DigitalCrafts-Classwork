

var youWin = false;
$ (function() {
  $('form').submit(function(e) {
    e.preventDefault();
    youWin = true;
    win();
  });
});
// remove paren at 16
