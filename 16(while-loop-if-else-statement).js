/*Problem 16: While Loop + If-Else Statement
Print all numbers from 1 to n using a while loop and check if each number is even or odd using an if-else statement.
Example:
For n = 5, print 1 3 5.

*/
var n = 5;
var i = 1;
while (i <= n) {
  if (i % 2 == 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
  i++;
}
