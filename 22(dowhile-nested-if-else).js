/*Problem 22: Do While Loop + Nested If-Else Statement
Print all numbers from 1 to n using a do while loop and check if each number is positive, negative, or zero using nested if-else statements.
Example:
For n = 5, print 1 2 3 4 5.
 */
var num=-4;
function check(n){
do{
    if(num>0){
        console.log(num +" postive")
    }else if(num==0){
        console.log(num +"zero")
    }else{
        console.log(num +"nagatve")
    }
    num++;
 
}while(num<=n)
}
var n=5
check(n)