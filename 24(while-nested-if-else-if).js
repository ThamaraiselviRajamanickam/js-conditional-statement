/*Problem 24: While Loop + Nested If-Else-If Statement
Print all numbers from 1 to n using a while loop and check if each number is positive, negative, or zero using nested if-else-if statements.
Example:
For n = 5, print 1 2 3 4 5.
 */
var num=-10;
function check(n){
while(num<=n){
    if(num>0){
        console.log(num +" postive")
    }else if(num==0){
        console.log(num +"zero")
    }else{
        console.log(num +"nagatve")
    }
    num++;
}
}
check(5)