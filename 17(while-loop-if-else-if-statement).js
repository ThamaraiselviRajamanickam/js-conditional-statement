/*Problem 17: While Loop + If-Else-If Statement
Print all numbers from 1 to n using a while loop and check if each number is positive, negative, or zero using an if-else-if statement.
Example:
For n = 5, print 1 2 3 4 5.
 */
var n = 5;
var i = 1;

while (i <= n) {
  if (i === 0) {
    console.log(i + " is zero");
  } else if (i < 0) {
    console.log(i + " is negative");
  } else {
    console.log(i + " is positive");
  }
  i++;
}