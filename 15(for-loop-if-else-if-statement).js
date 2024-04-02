/*Problem 15: For Loop + If-Else-If Statement
Print all numbers from 1 to n using a for loop and check if each number is positive, negative, or zero using an if-else-if statement.
Example:
For n = 5, print 1 2 3 4 5.
*/
var n = -5;
if (n > 0) {
  for (var i = 1; i <= n; i++) {
    console.log(i + " is positive");
  }
} else if (n < 0) {
  for (var i = 1; i >= n; i--) {
    console.log(i + " is negative");
  }
} else {
  console.log("zero");
}


