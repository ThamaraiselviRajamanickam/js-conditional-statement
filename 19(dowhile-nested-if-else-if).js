/*Problem 19: Do While Loop + If-Else-If Statement
Print all numbers from 1 to n using a do while loop and check if each number is positive, negative, or zero using an if-else-if statement.
Example:
For n = 5, print 1 2 3 4 5.
 */
var num=-2
function checkNumber(n){
    while(num <= n){
        if(num > 0){
            console.log(num + " is positive");
        } else if(num < 0){
            console.log(num + " is negative");
        } else {
            console.log(num + " is zero");
        }
        
        num++;
    }
}
var n=5
checkNumber(n)