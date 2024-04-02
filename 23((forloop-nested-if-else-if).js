/*Problem 23: For Loop + Nested If-Else-If Statement
Print all numbers from 1 to n using a for loop and check if each number is positive, negative, or zero using nested if-else-if statements.
Example:
For n = 5, print 1 2 3 4 5.
 */
function check(n){
    for(i=-5;i<=n;i++){
        if(i>0){
            console.log(i +" postive")
        }else if(i==0){
            console.log(i +"zero")
        }else{
            console.log(i +"nagatve")
        }
    }

}
var n=5
check(n)