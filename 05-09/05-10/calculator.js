/*
Logic:

* when a number is clicked, add a digit to the display.
* when an operator is clicked
  1. parse the displayed number (new number)
  2. if there is an existing operator and existing number, evaluate the operator upon the existing number and the new number
  3. store the result (but don't display it)
  4. clear the display for the user to input the next number
* when "=" is clicked
  1. parse the displayed number (new number)
  2. if there is an existing operator and existing number, evaluate the operator upon the existing number and the new number
  3. update the display to show the result
* when "C" is clicked
  1. unset the operator
  2. unset the current number
  3. clear the display

*/

$(function () {
  $('.number').click(function () {
    var number = $(this).text();
    console.log('You clicked on ' + number + '!');
  });
});
