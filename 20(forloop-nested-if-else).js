/*Problem 20: For Loop + Nested If-Else Statement
Print all numbers from -n to n using a for loop and check if each number is positive, negative, or zero using nested if-else statements.
Example:
For n = 5, print 1 2 3 4 5.
*/

function checkNumber(n){
    for(var i=0;i<=n;i++){
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
checkNumber(n)