/*Problem 8: For Loop + If Statement
Print all even numbers from 1 to n using a for loop and an if statement.
Example:
For n = 5, print 2 4.
*/
var number = 5;
for (i = 1; i < number; i++)
{
    if (i % 2 == 0) {
  console.log(i);
    }
}